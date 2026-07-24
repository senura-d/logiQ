import Link from "next/link";
import Image from "next/image";

export default function Brand() {
  return (
    <Link href="/" className="brand" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
      <Image
        src="/images/logo.png"
        alt="LogiQ-On Logo"
        width={160}
        height={45}
        style={{ height: "auto", maxHeight: 45, width: "auto", objectFit: "contain" }}
        priority
      />
    </Link>
  );
}
