import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Smartwatches: What Turning On Each Feature Actually Costs in Battery Life",
  description:
    "Always-on display, continuous heart rate, GPS mode — each has a real, measurable battery cost, sourced from real testing data.",
};

export default function Page() {
  return <Content />;
}
