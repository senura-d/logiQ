import { redirect } from "next/navigation";

export default function RetailStoresRedirect() {
  redirect("/products?tab=retail");
}
