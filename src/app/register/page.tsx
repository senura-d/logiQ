import type { Metadata } from "next";
import { Suspense } from "react";
import RegisterView from "@/components/auth/RegisterView";

export const metadata: Metadata = {
  title: "Create Account | LogiQ-On Tech",
  description: "Create a free LogiQ-On account for customer or vendor access.",
};

export default function RegisterPage() {
  return (
    <Suspense fallback={null}>
      <RegisterView />
    </Suspense>
  );
}
