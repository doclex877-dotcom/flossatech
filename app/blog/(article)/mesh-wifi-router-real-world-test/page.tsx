import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Mesh Wi-Fi Routers: Lab-Rated Speeds vs. What Your Walls Do to Them",
  description:
    "An AX6000 or BE18000 rating describes a theoretical ceiling. Real wall-attenuation data, backhaul explainer, and disclosed-methodology test results.",
};

export default function Page() {
  return <Content />;
}
