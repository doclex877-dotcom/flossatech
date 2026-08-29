import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Gaming Monitor Response Times: What the Number on the Box Actually Means",
  description:
    "A '1ms' monitor can still show visible ghosting. GtG vs MPRT explained, real marketed-vs-measured inflation data, and how overdrive settings change results.",
};

export default function Page() {
  return <Content />;
}
