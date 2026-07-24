"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/lib/nav";

type Role = "customer" | "vendor";

export default function LoginView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [role, setRole] = useState<Role>(searchParams.get("as") === "vendor" ? "vendor" : "customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isVendor = role === "vendor";

  function handleRoleChange(next: Role) {
    setRole(next);
    router.replace(next === "vendor" ? "/login?as=vendor" : "/login", { scroll: false });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      style={{
        minHeight: "calc(100vh - 73px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "var(--bg, #f8fafc)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1080,
          minHeight: 640,
          background: "#ffffff",
          borderRadius: 24,
          boxShadow: "0 20px 60px -15px rgba(15, 23, 42, 0.12), 0 0 1px rgba(15, 23, 42, 0.1)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          overflow: "hidden",
        }}
        className="login-container-grid"
      >
        {/* Left Side: Deep Blue Gradient Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #1d4ed8 100%)",
            padding: "50px 45px",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Background Pattern Arcs */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
              opacity: 0.15,
              pointerEvents: "none",
            }}
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="450" cy="100" r="300" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="450" cy="100" r="230" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="450" cy="100" r="160" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="450" cy="100" r="90" stroke="#ffffff" strokeWidth="1.5" />
          </svg>

          {/* Top Spark Icon */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 2v36M2 20h36M7.27 7.27l25.46 25.46M7.27 32.73L32.73 7.27"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Center Content */}
          <div style={{ position: "relative", zIndex: 1, margin: "40px 0" }}>
            <h1
              style={{
                fontSize: 46,
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              Hello
              <br />
              LogiQ-On! <span role="img" aria-label="waving hand">👋</span>
            </h1>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.85)",
                maxWidth: 420,
                margin: 0,
              }}
            >
              {isVendor
                ? "Manage your company profile, product catalog, purchase orders, and compliance documents in one central portal."
                : "Skip repetitive and manual sales-marketing tasks. Get highly productive through automation and save tons of time!"}
            </p>
          </div>

          {/* Bottom Copyright */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              fontSize: 13,
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            © 2026 LogiQ-On Technology. All rights reserved.
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div
          style={{
            padding: "50px 45px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#ffffff",
          }}
        >
          <div>
            {/* Logo */}
            <div style={{ marginBottom: 40 }}>
              <Link href="/">
                <Image
                  src={getAssetPath("/images/logo.png")}
                  alt="LogiQ-On Logo"
                  width={150}
                  height={42}
                  style={{ height: 42, width: "auto", objectFit: "contain" }}
                  priority
                />
              </Link>
            </div>

            {/* Welcome Back & Subtitle */}
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: 8,
                letterSpacing: "-0.01em",
              }}
            >
              Welcome Back!
            </h2>
            <p style={{ fontSize: 13.5, color: "#64748b", marginBottom: 24, lineHeight: 1.5 }}>
              Don't have an account?{" "}
              <Link
                href="/register"
                style={{
                  color: "#0f172a",
                  fontWeight: 600,
                  textDecoration: "underline",
                }}
              >
                Create a new account now, it's FREE!
              </Link>{" "}
              Takes less than a minute.
            </p>

            {/* Portal Switcher (Customer / Vendor) */}
            <div
              style={{
                display: "inline-flex",
                background: "#f1f5f9",
                padding: 4,
                borderRadius: 10,
                marginBottom: 24,
                width: "100%",
              }}
            >
              <button
                type="button"
                onClick={() => handleRoleChange("customer")}
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  borderRadius: 7,
                  fontSize: 13,
                  fontWeight: 600,
                  border: "none",
                  background: !isVendor ? "#ffffff" : "transparent",
                  color: !isVendor ? "#0f172a" : "#64748b",
                  boxShadow: !isVendor ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Customer Portal
              </button>
              <button
                type="button"
                onClick={() => handleRoleChange("vendor")}
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  borderRadius: 7,
                  fontSize: 13,
                  fontWeight: 600,
                  border: "none",
                  background: isVendor ? "#ffffff" : "transparent",
                  color: isVendor ? "#0f172a" : "#64748b",
                  boxShadow: isVendor ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Vendor Portal
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <input
                  type="email"
                  required
                  placeholder={isVendor ? "vendor@company.com" : "hisalim.ux@gmail.com"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 4px",
                    fontSize: 15,
                    color: "#0f172a",
                    border: "none",
                    borderBottom: "2px solid #e2e8f0",
                    background: "transparent",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#0f172a")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>

              <div>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 4px",
                    fontSize: 15,
                    color: "#0f172a",
                    border: "none",
                    borderBottom: "2px solid #e2e8f0",
                    background: "transparent",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#0f172a")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>

              {/* Login Now Button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px 20px",
                  borderRadius: 10,
                  background: "#18181b",
                  color: "#ffffff",
                  fontSize: 15,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  marginTop: 8,
                  transition: "background 0.2s ease, transform 0.1s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#27272a")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#18181b")}
              >
                Login Now
              </button>

              {/* Google Login Button */}
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  borderRadius: 10,
                  background: "#ffffff",
                  color: "#334155",
                  fontSize: 14,
                  fontWeight: 600,
                  border: "1px solid #cbd5e1",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#f8fafc")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#ffffff")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                Login with Google
              </button>

              {submitted && (
                <div
                  style={{
                    padding: 12,
                    borderRadius: 8,
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    color: "#166534",
                    fontSize: 13.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Signed in successfully! Redirecting to your dashboard...
                </div>
              )}
            </form>
          </div>

          {/* Bottom Forget Password */}
          <div style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#64748b" }}>
            Forget password?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Password reset instructions have been sent to your email.");
              }}
              style={{ color: "#0f172a", fontWeight: 600, textDecoration: "underline" }}
            >
              Click here
            </a>
          </div>
        </div>
      </div>

      {/* Responsive Style */}
      <style jsx>{`
        @media (max-width: 868px) {
          .login-container-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
