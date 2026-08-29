import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Budget Noise-Cancelling Headphones: How Close Can Cheap ANC Get to Flagship Silence?",
  description:
    "Independent testing puts budget and premium ANC headphones within a narrower dB range than the price gap suggests. Real tested models and figures.",
};

export default function Page() {
  return <Content />;
}
