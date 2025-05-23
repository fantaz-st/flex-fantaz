import FlexboxPlayground from "@/Components/FlexboxPlayground/FlexboxPlayground";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem", fontSize: "2rem" }}>
        Flexbox Playground by{" "}
        <a style={{ textDecoration: "underline" }} href="mailto:cbabic@pfst.hr">
          fantaz
        </a>
      </h1>
      <FlexboxPlayground />
    </main>
  );
}
