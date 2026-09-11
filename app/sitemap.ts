import { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

const baseUrl = "https://flossatech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/blog",
    "/author/flossa",
    "/about",
    "/contact",
    "/newsletter",
    "/editorial-policy",
    "/affiliate-disclosure",
    "/privacy-policy",
    "/cookie-policy",
    "/terms-of-service",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.6,
  }));

  const articlePages = articles
    .filter((a) => a.status === "published")
    .map((a) => ({
      url: `${baseUrl}/blog/${a.slug}`,
      lastModified: new Date(a.updated ?? a.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...staticPages, ...articlePages];
}
