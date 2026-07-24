import type { Metadata } from "next";
import { Suspense } from "react";
import LoginView from "@/components/auth/LoginView";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to the LogiQ-On Customer or Vendor portal.",
};

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginView />
    </Suspense>
  );
}
