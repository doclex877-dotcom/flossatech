import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Fitness Tracker Heart-Rate Sensors: Why Wrist-Based PPG Struggles, By Design",
  description:
    "Peer-reviewed studies against ECG and chest straps consistently find wrist heart-rate sensors less accurate during exercise — sourced from real clinical research.",
};

export default function Page() {
  return <Content />;
}
