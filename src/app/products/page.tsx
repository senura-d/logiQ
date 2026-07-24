import type { Metadata } from "next";
import { Suspense } from "react";
import HeroArt from "@/components/HeroArt";
import ProductsSolutionsView from "@/components/products/ProductsSolutionsView";

export const metadata: Metadata = {
  title: "Products & Solutions",
  description:
    "Hardware categories, packaged solutions, the industries we equip, and retail-specific technology — browse LogiQ-On's full catalogue from four angles.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Products & Solutions</span>
            <h1>Everything we deploy, browsed four ways.</h1>
            <p className="lede">
              Same catalogue, four starting points — hardware category, packaged solution, industry, or a
              retail-specific deep dive. Switch between them below without leaving the page.
            </p>
          </div>
          <HeroArt variant="products" className="page-hero-art" />
        </div>
      </section>

      <Suspense fallback={null}>
        <ProductsSolutionsView />
      </Suspense>
    </>
  );
}
