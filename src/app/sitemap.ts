import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://senura-d.github.io/logiQ";

  const routes = [
    "",
    "/about",
    "/buzz",
    "/contact",
    "/customer-login",
    "/industries",
    "/login",
    "/partners",
    "/products",
    "/products/label-printing/desktop-printers",
    "/register",
    "/request",
    "/request-demo",
    "/request-quote",
    "/retail-stores",
    "/signup",
    "/solutions",
    "/vendor-login",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.includes("/products") ? 0.8 : 0.6,
  }));
}
