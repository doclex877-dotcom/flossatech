import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Wireless Chargers: The Qi Standard, Wattage Classes, and Why Heat Slows Them Down",
  description:
    "A 25W-rated wireless charger doesn't sustain 25W for long. Qi2 vs Qi2.2 tiers, magnetic alignment, and the coil-to-coil heat loss that caps real speed.",
};

export default function Page() {
  return <Content />;
}
