export type NavLink = {
  key: string;
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About Us", href: "/about" },
  { key: "products", label: "Products & Solutions", href: "/products" },
  { key: "buzz", label: "LogiQ-On Buzz", href: "/buzz" },
  { key: "contact", label: "Contact Us", href: "/contact" },
];

export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
