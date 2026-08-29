import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Power Bank mAh Ratings, Explained: Why You Never Get the Number on the Box",
  description:
    "The physics behind why a 20,000mAh power bank never delivers 20,000mAh to your phone, with real product data and a plain-English formula to check any listing yourself.",
};

export default function Page() {
  return <Content />;
}
