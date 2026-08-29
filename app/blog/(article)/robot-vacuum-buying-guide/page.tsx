import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Robot Vacuums in 2026: What the Spec Sheet Doesn't Tell You",
  description:
    "Suction-power ratings (Pa) aren't standardized across brands. A breakdown of what actually predicts real cleaning performance, with real product and testing data.",
};

export default function Page() {
  return <Content />;
}
