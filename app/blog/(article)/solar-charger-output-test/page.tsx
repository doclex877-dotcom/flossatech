import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Solar Phone Chargers: The Panel-Wattage Math Behind the Marketing Photos",
  description:
    "A 30W solar panel rarely delivers 30W to your phone. Standard Test Conditions, cell efficiency by type, and real measured output data.",
};

export default function Page() {
  return <Content />;
}
