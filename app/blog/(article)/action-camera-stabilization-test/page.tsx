import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Action Camera Stabilization: Optical vs. Digital, and Why the Spec Sheet Hides the Difference",
  description:
    "Almost every action camera uses electronic stabilization, not optical — the field-of-view trade-off, HyperSmooth vs RockSteady, and what real field tests found.",
};

export default function Page() {
  return <Content />;
}
