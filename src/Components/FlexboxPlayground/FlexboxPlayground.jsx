"use client";
import React, { useState } from "react";
import classes from "./FlexboxPlayground.module.css";

const directions = ["row", "row-reverse", "column", "column-reverse"];
const wraps = ["nowrap", "wrap", "wrap-reverse"];
const justifies = ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"];
const aligns = ["stretch", "flex-start", "center", "flex-end", "baseline"];

function PropertyChoice({ label, name, value, options, onChange }) {
  return (
    <div className={classes.controlBlock}>
      <div className={classes.controlLabel}>{label}</div>
      <div className={classes.radioGroup}>
        {options.map((o) => (
          <label key={o} className={classes.radioOption}>
            <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} />
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}

function Stepper({ label, value, min, max, onInc, onDec }) {
  return (
    <div className={classes.controlBlock}>
      <div className={classes.controlLabel}>{label}</div>
      <div className={classes.stepperContainer}>
        <button className={classes.stepperBtn} onClick={onDec} disabled={value <= min}>
          –
        </button>
        <span className={classes.childCount}>{value}</span>
        <button className={classes.stepperBtn} onClick={onInc} disabled={value >= max}>
          +
        </button>
      </div>
    </div>
  );
}

export default function FlexboxPlayground() {
  /* container props */
  const [flexDirection, setFlexDirection] = useState("row");
  const [flexWrap, setFlexWrap] = useState("nowrap");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [alignContent, setAlignContent] = useState("stretch");

  /* child controls */
  const [childCount, setChildCount] = useState(4);
  const [childWidth, setChildWidth] = useState(4); // rem
  const [childHeight, setChildHeight] = useState(4); // rem

  const COUNT_MIN = 1,
    COUNT_MAX = 20,
    SIZE_MIN = 4,
    SIZE_MAX = 20;

  const inc = (setter, max) => () => setter((v) => Math.min(max, v + 1));
  const dec = (setter, min) => () => setter((v) => Math.max(min, v - 1));

  /* preview styles */
  const containerStyles = {
    display: "flex",
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    gap: "0.5rem",
  };

  /* CSS snippet output */
  const cssSnippet = `display: flex;
flex-direction: ${flexDirection};
flex-wrap: ${flexWrap};
justify-content: ${justifyContent};
align-items: ${alignItems};
align-content: ${alignContent};`;

  /* copy helper */
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(cssSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className={classes.root}>
      {/* ───────── Controls ───────── */}
      <div className={classes.controlsGrid}>
        <PropertyChoice label="flex-direction" name="flexDirection" value={flexDirection} options={directions} onChange={setFlexDirection} />
        <PropertyChoice label="flex-wrap" name="flexWrap" value={flexWrap} options={wraps} onChange={setFlexWrap} />
        <PropertyChoice label="justify-content" name="justifyContent" value={justifyContent} options={justifies} onChange={setJustifyContent} />
        <PropertyChoice label="align-items" name="alignItems" value={alignItems} options={aligns} onChange={setAlignItems} />
        <PropertyChoice label="align-content" name="alignContent" value={alignContent} options={aligns} onChange={setAlignContent} />

        {/* steppers */}
        <div className={classes.childControls}>
          <Stepper label="children" value={childCount} min={COUNT_MIN} max={COUNT_MAX} onInc={inc(setChildCount, COUNT_MAX)} onDec={dec(setChildCount, COUNT_MIN)} />
          <Stepper label="child width (rem)" value={childWidth} min={SIZE_MIN} max={SIZE_MAX} onInc={inc(setChildWidth, SIZE_MAX)} onDec={dec(setChildWidth, SIZE_MIN)} />
          <Stepper label="child height (rem)" value={childHeight} min={SIZE_MIN} max={SIZE_MAX} onInc={inc(setChildHeight, SIZE_MAX)} onDec={dec(setChildHeight, SIZE_MIN)} />
        </div>
      </div>

      {/* ───────── Preview + Output ───────── */}
      <div className={classes.displayRow}>
        <div className={classes.preview} style={containerStyles}>
          {Array.from({ length: childCount }).map((_, i) => (
            <div
              key={i}
              className={classes.childBox}
              style={{
                width: `${childWidth}rem`,
                height: `${childHeight}rem`,
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <div className={classes.cssOutputContainer}>
          <h2>CSS OUTPUT</h2>
          <pre className={classes.cssOutput}>{cssSnippet}</pre>
          <button className={classes.copyBtn} onClick={handleCopy} disabled={copied}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
