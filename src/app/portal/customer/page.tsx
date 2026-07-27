import type { Metadata } from "next";
import Link from "next/link";
import { getAssetPath } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Customer Portal",
  description: "LogiQ-On Customer Portal (UI preview).",
};

export default function CustomerPortalPage() {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <aside className="fixed left-0 top-0 h-full w-[260px] z-40 flex flex-col py-6 px-4 bg-white border-r border-slate-200 shadow-sm">
        <div className="px-3 mb-6">
          <h1 className="text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
            LogiQ-On Portal
          </h1>
          <span className="inline-block mt-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full border border-blue-100">
            Customer View
          </span>
        </div>

        <nav className="flex-grow space-y-1">
          <a className="bg-blue-600 text-white font-semibold rounded-xl px-3.5 py-2.5 flex items-center gap-3 shadow-sm shadow-blue-500/20 transition-all" href="#">
            <span className="material-symbols-outlined text-[20px] text-white">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">person</span>
            <span className="text-sm">Profile</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">inventory_2</span>
            <span className="text-sm">Orders</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">verified_user</span>
            <span className="text-sm">Compliance</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">analytics</span>
            <span className="text-sm">Reports</span>
          </a>
        </nav>

        <div className="mt-auto pt-4 space-y-1 border-t border-slate-100">
          <button className="w-full text-left text-slate-700 hover:text-slate-900 hover:bg-slate-100 px-3.5 py-2 flex items-center gap-3 rounded-xl transition-colors">
            <span className="material-symbols-outlined text-[20px] text-slate-500">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </button>
          <button className="w-full text-left text-slate-700 hover:text-slate-900 hover:bg-slate-100 px-3.5 py-2 flex items-center gap-3 rounded-xl transition-colors">
            <span className="material-symbols-outlined text-[20px] text-slate-500">help</span>
            <span className="text-sm font-medium">Help</span>
          </button>

          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-3 mb-3 px-1">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                JD
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">John Dawson</p>
                <p className="text-xs text-slate-500 truncate">Logistics Manager</p>
              </div>
            </div>
            <Link
              href="/login"
              className="w-full block text-center py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs rounded-xl transition-colors border border-slate-200"
            >
              Switch Role / Log Out
            </Link>
          </div>
        </div>
      </aside>

<div className="ml-[260px] flex-grow flex flex-col min-h-screen">

<header className="h-top-nav-height bg-surface border-b border-outline-variant flex items-center justify-between px-margin-desktop sticky top-0 z-30">
<div className="flex items-center gap-gutter flex-grow max-w-xl">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg text-body-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="Search orders, SKUs, or invoices..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6 ml-gutter">
<div className="hidden md:flex items-center gap-6 mr-6">
<a className="text-label-md font-label-md text-secondary hover:text-on-background transition-colors" href="#">Solutions</a>
<a className="text-label-md font-label-md text-secondary hover:text-on-background transition-colors" href="#">Buzz</a>
</div>
<div className="flex items-center gap-3">
<button className="p-2 rounded-full hover:bg-surface-container transition-colors relative">
<span className="material-symbols-outlined text-on-surface-variant">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-status-error rounded-full border border-surface"></span>
</button>
<button className="p-2 rounded-full hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">settings</span>
</button>
<Link href="/request-demo" className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-all active:scale-95">
                        Get Demo
                    </Link>
</div>
</div>
</header>

<div className="flex-grow p-margin-desktop space-y-gutter relative overflow-hidden">

<section className="relative h-48 rounded-xl overflow-hidden bg-on-background mb-8 shadow-xl">
<div className="absolute inset-0 opacity-40 mix-blend-luminosity">
<img className="w-full h-full object-cover" src={getAssetPath("/images/stitch/78f52f5ba1ca.png")}/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-on-background via-on-background/60 to-transparent flex items-center px-12">
<div>
<h2 className="text-display-lg font-display-lg text-white font-extrabold mb-2 tracking-tight drop-shadow-md">Global Logistics Insight</h2>
<p className="text-body-lg text-white/90 font-medium max-w-md">Real-time telemetry for your international supply chain. Monitored 24/7 across 42 logistics nodes.</p>
</div>
</div>
<div className="absolute right-12 bottom-0 h-full hidden lg:flex items-end">
<div className="flex gap-4 p-6 glass-card rounded-t-xl mb-0 shadow-lg border-b-0">
<div className="text-center">
<p className="text-label-sm text-secondary uppercase">Active Shipments</p>
<p className="text-headline-md font-headline-md text-primary">12</p>
</div>
<div className="w-[1px] bg-outline-variant h-8 self-center"></div>
<div className="text-center">
<p className="text-label-sm text-secondary uppercase">In Transit</p>
<p className="text-headline-md font-headline-md text-status-info">8</p>
</div>
<div className="w-[1px] bg-outline-variant h-8 self-center"></div>
<div className="text-center">
<p className="text-label-sm text-secondary uppercase">Exceptions</p>
<p className="text-headline-md font-headline-md text-status-error">1</p>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-12 gap-gutter">

<div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/10 rounded-lg">
<span className="material-symbols-outlined text-primary">payments</span>
</div>
<span className="text-status-success text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> 12%
                            </span>
</div>
<p className="text-label-md text-secondary">Credit Balance</p>
<p className="text-headline-md font-headline-md">$24,500.00</p>
<p className="text-label-sm text-outline mt-2 italic">Next cycle: Oct 15</p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-status-info/10 rounded-lg">
<span className="material-symbols-outlined text-status-info">local_shipping</span>
</div>
</div>
<p className="text-label-md text-secondary">Total Volume</p>
<p className="text-headline-md font-headline-md">1.2k Tons</p>
<p className="text-label-sm text-outline mt-2 italic">Avg. 15 shipments / mo</p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-status-warning/10 rounded-lg">
<span className="material-symbols-outlined text-status-warning">confirmation_number</span>
</div>
</div>
<p className="text-label-md text-secondary">Active Tickets</p>
<p className="text-headline-md font-headline-md">3 Open</p>
<p className="text-label-sm text-outline mt-2 italic">Last update: 2h ago</p>
</div>
</div>

<div className="col-span-12 lg:col-span-4 bg-surface-container-high p-6 rounded-xl border border-outline-variant relative overflow-hidden">
<div className="flex justify-between items-center mb-6">
<h3 className="text-headline-sm font-headline-sm flex items-center gap-2">
<span className="material-symbols-outlined text-primary">reorder</span>
                            Quick Reorder
                        </h3>
</div>
<div className="space-y-3">
<div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors cursor-pointer group">
<div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center font-label-md text-secondary">
                                SKU-A
                            </div>
<div className="flex-grow">
<p className="text-label-md font-bold text-on-surface">Industrial Fasteners X-12</p>
<p className="text-label-sm text-secondary">$1,200.00 / Pallet</p>
</div>
<button className="p-2 bg-primary-fixed text-on-primary-fixed rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors cursor-pointer group">
<div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center font-label-md text-secondary">
                                SKU-B
                            </div>
<div className="flex-grow">
<p className="text-label-md font-bold text-on-surface">Thermal Sealant 500ml</p>
<p className="text-label-sm text-secondary">$45.00 / Unit</p>
</div>
<button className="p-2 bg-primary-fixed text-on-primary-fixed rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors cursor-pointer group">
<div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center font-label-md text-secondary">
                                SKU-C
                            </div>
<div className="flex-grow">
<p className="text-label-md font-bold text-on-surface">Reinforced Poly Straps</p>
<p className="text-label-sm text-secondary">$320.00 / Box</p>
</div>
<button className="p-2 bg-primary-fixed text-on-primary-fixed rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
<button className="w-full mt-4 py-2 border border-primary text-primary text-label-md font-bold rounded-lg hover:bg-primary/5 transition-colors">View All SKUs</button>
</div>

<div className="col-span-12 lg:col-span-8 bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
<div className="p-6 border-b border-outline-variant flex justify-between items-center">
<h3 className="text-headline-sm font-headline-sm">My Orders</h3>
<div className="flex gap-2">
<button className="text-label-sm px-3 py-1 bg-surface-container-high rounded text-on-surface-variant font-bold">All</button>
<button className="text-label-sm px-3 py-1 hover:bg-surface-container text-secondary">Active</button>
<button className="text-label-sm px-3 py-1 hover:bg-surface-container text-secondary">Delayed</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-on-background text-surface-bright text-label-sm uppercase tracking-wider">
<tr>
<th className="px-6 py-4 font-medium">Order ID</th>
<th className="px-6 py-4 font-medium">Destination</th>
<th className="px-6 py-4 font-medium">Est. Delivery</th>
<th className="px-6 py-4 font-medium">Status</th>
<th className="px-6 py-4 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="text-body-sm">
<tr className="data-table-row border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-label-md">#LQ-89241</td>
<td className="px-6 py-4">Hamburg, DE</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 12, 2024</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 bg-status-info/15 text-status-info rounded text-[11px] font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-status-info animate-pulse"></span> IN TRANSIT
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-primary hover:underline font-label-sm">TRACK</button>
</td>
</tr>
<tr className="data-table-row border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-label-md">#LQ-89105</td>
<td className="px-6 py-4">Singapore, SG</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 09, 2024</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 bg-status-success/15 text-status-success rounded text-[11px] font-bold">
                                            DELIVERED
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-primary hover:underline font-label-sm">INVOICE</button>
</td>
</tr>
<tr className="data-table-row border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-label-md">#LQ-88932</td>
<td className="px-6 py-4">Los Angeles, US</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 18, 2024</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 bg-status-warning/15 text-status-warning rounded text-[11px] font-bold">
                                            PROCESSING
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-primary hover:underline font-label-sm">CANCEL</button>
</td>
</tr>
<tr className="data-table-row border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-label-md">#LQ-88711</td>
<td className="px-6 py-4">Rotterdam, NL</td>
<td className="px-6 py-4 text-on-surface-variant">Delayed</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 bg-status-error/15 text-status-error rounded text-[11px] font-bold">
                                            EXCEPTION
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-status-error hover:underline font-label-sm">RESOLVE</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="col-span-12 lg:col-span-4 space-y-gutter">

<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
<div className="flex justify-between items-center mb-6">
<h3 className="text-headline-sm font-headline-sm">Support Tickets</h3>
<button className="p-1 rounded bg-surface hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-outline">add_circle</span>
</button>
</div>
<div className="space-y-4">
<div className="p-3 border-l-4 border-status-warning bg-surface-container-low rounded-r">
<div className="flex justify-between items-start">
<p className="text-label-md font-bold">Customs Delay - Hamburg</p>
<span className="text-[10px] text-outline font-label-sm">2h ago</span>
</div>
<p className="text-body-sm text-secondary mt-1 truncate">Waiting for document re-verification from destination port agent...</p>
</div>
<div className="p-3 border-l-4 border-status-info bg-surface-container-low rounded-r">
<div className="flex justify-between items-start">
<p className="text-label-md font-bold">Billing Discrepancy #42</p>
<span className="text-[10px] text-outline font-label-sm">1d ago</span>
</div>
<p className="text-body-sm text-secondary mt-1">Our accounts team is reviewing the fuel surcharge applied to...</p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
<h3 className="text-headline-sm font-headline-sm mb-6">Recent Invoices</h3>
<div className="divide-y divide-outline-variant/30">
<div className="py-3 flex justify-between items-center group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">description</span>
<div>
<p className="text-label-md font-bold">INV-2024-0092</p>
<p className="text-[11px] text-secondary">Sep 28, 2024</p>
</div>
</div>
<div className="text-right">
<p className="text-label-md font-bold">$4,820.00</p>
<p className="text-[10px] text-status-success font-bold">PAID</p>
</div>
</div>
<div className="py-3 flex justify-between items-center group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">description</span>
<div>
<p className="text-label-md font-bold">INV-2024-0088</p>
<p className="text-[11px] text-secondary">Sep 15, 2024</p>
</div>
</div>
<div className="text-right">
<p className="text-label-md font-bold">$12,140.50</p>
<p className="text-[10px] text-status-success font-bold">PAID</p>
</div>
</div>
<div className="py-3 flex justify-between items-center group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">receipt_long</span>
<div>
<p className="text-label-md font-bold">INV-2024-0081</p>
<p className="text-[11px] text-secondary">Sep 01, 2024</p>
</div>
</div>
<div className="text-right">
<p className="text-label-md font-bold">$950.00</p>
<p className="text-[10px] text-status-warning font-bold">DUE</p>
</div>
</div>
</div>
<button className="w-full mt-6 py-2 bg-on-background text-surface-bright text-label-md rounded font-bold hover:bg-inverse-surface transition-colors">Manage All Billing</button>
</div>
</div>
</div>
</div>

<footer className="w-full py-margin-desktop px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-gutter bg-surface-container-highest dark:bg-on-secondary-fixed border-t border-outline-variant">
<div className="max-w-xs">
<h4 className="text-headline-sm font-headline-sm font-bold text-on-background">LogiQ-On Tech</h4>
<p className="text-body-sm text-on-surface-variant mt-2">© 2024 LogiQ-On Tech. Industrial Precision. Empowering global supply chains with real-time data transparency.</p>
</div>
<div className="grid grid-cols-2 gap-x-12 gap-y-2">
<Link className="text-label-sm text-on-surface-variant hover:underline decoration-primary" href="/">Home</Link>
<Link className="text-label-sm text-on-surface-variant hover:underline decoration-primary" href="/about">About</Link>
<a className="text-label-sm text-on-surface-variant hover:underline decoration-primary font-bold text-primary" href="#">Solutions</a>
<a className="text-label-sm text-on-surface-variant hover:underline decoration-primary" href="#">Careers</a>
<Link className="text-label-sm text-on-surface-variant hover:underline decoration-primary" href="/contact">Contact</Link>
<a className="text-label-sm text-on-surface-variant hover:underline decoration-primary" href="#">Privacy Policy</a>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-surface border border-outline-variant flex items-center justify-center hover:bg-primary-fixed cursor-pointer transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">language</span>
</div>
<div className="w-10 h-10 rounded-full bg-surface border border-outline-variant flex items-center justify-center hover:bg-primary-fixed cursor-pointer transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">shield_lock</span>
</div>
</div>
</footer>
</div>
    </div>
  );
}
