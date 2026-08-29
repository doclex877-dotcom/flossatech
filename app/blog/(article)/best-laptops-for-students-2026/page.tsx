import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "The Best Laptops for Students in 2026",
  description:
    "Benchmark scores and battery-life claims compared against real specs and pricing, for machines that actually fit a student budget.",
};

export default function Page() {
  return <Content />;
}
