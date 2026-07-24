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
