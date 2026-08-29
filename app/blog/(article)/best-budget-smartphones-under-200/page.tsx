import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "The Best Budget Smartphones Under $200 in 2026",
  description:
    "A spec-for-spec, price-for-price breakdown of four real sub-$200 Android phones, and exactly which corners each one cuts to hit that price.",
};

export default function Page() {
  return <Content />;
}
