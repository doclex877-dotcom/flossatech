import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Smart Plugs and Energy Monitoring: How the Math Behind the App Actually Works",
  description:
    "A peer-reviewed test of five smart plug brands found energy-measurement errors from under 2% to over 100%, depending on load type. How shunt-based sensing works and where it breaks.",
};

export default function Page() {
  return <Content />;
}
