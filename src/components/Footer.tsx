import Link from "next/link";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Brand />
            <p>
              Bespoke supply chain, warehouse, and retail technology &mdash; sourced, installed, and supported across
              Australia since 2020.
            </p>
            <div className="footer-contact">
              <span>1300 717 433</span>
              <span>03 9448 8011</span>
              <span>info@logiqon.com.au</span>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about#partners">Partners</Link></li>
              <li><Link href="/buzz">LogiQ-On Buzz</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/products?tab=solutions">Solutions</Link></li>
              <li><Link href="/products?tab=industries">Industries</Link></li>
              <li><Link href="/products?tab=retail">Retail Stores</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Started</h4>
            <ul>
              <li><Link href="/request?type=demo">Request Demo</Link></li>
              <li><Link href="/request?type=quote">Request Quote</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Account</h4>
            <ul>
              <li><Link href="/login">Customer Login</Link></li>
              <li><Link href="/login?as=vendor">Vendor Login</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 LogiQ-On Technology Group Pty Ltd. UI concept redesign &mdash; not affiliated content.</span>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
