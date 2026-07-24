import { redirect } from "next/navigation";

export default function IndustriesRedirect() {
  redirect("/products?tab=industries");
}
