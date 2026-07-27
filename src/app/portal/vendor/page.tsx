import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vendor Portal",
  description: "LogiQ-On Vendor Portal (UI preview).",
};

export default function VendorPortalPage() {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <aside className="fixed left-0 top-0 h-full w-[260px] z-40 flex flex-col py-6 px-4 bg-white border-r border-slate-200 shadow-sm">
        <div className="px-3 mb-6">
          <h1 className="text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-teal-600 inline-block"></span>
            LogiQ-On Portal
          </h1>
          <span className="inline-block mt-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 rounded-full border border-teal-100">
            Vendor Admin View
          </span>
        </div>

        <nav className="flex-grow space-y-1">
          <a className="bg-teal-600 text-white font-semibold rounded-xl px-3.5 py-2.5 flex items-center gap-3 shadow-sm shadow-teal-500/20 transition-all" href="#">
            <span className="material-symbols-outlined text-[20px] text-white">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">person</span>
            <span className="text-sm">Profile</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">inventory_2</span>
            <span className="text-sm">Products</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">orders</span>
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
              <div className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                VS
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">Vendor Logistics</p>
                <p className="text-xs text-slate-500 truncate">Supplier Admin</p>
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

<div className="ml-sidebar-width min-h-screen">

<header className="h-top-nav-height bg-surface border-b border-outline-variant px-margin-desktop flex items-center justify-between sticky top-0 z-30">
<div className="flex items-center gap-6">
<span className="font-headline-md text-headline-md font-bold text-on-background">LogiQ-On <span className="text-primary">Tech</span></span>
<div className="h-8 w-[1px] bg-outline-variant"></div>
<div className="flex items-center gap-2 bg-surface-container rounded-full px-3 py-1 border border-outline-variant/30">
<span className="material-symbols-outlined text-primary scale-75" data-icon="hub">hub</span>
<span className="text-label-md font-label-md text-on-surface">Vendor Portal</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden lg:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary scale-90" data-icon="search">search</span>
<input className="bg-surface-container-low border-outline-variant rounded-full pl-10 pr-4 py-1.5 text-body-sm focus:ring-1 focus:ring-primary focus:border-primary w-64" placeholder="Search orders, SKU..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-secondary hover:bg-surface-container rounded-full transition-colors relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<div className="flex items-center gap-3 ml-2 pl-4 border-l border-outline-variant">
<div className="text-right">
<p className="text-label-md font-label-md text-on-surface">Precision Logistics Corp</p>
<p className="text-[10px] text-secondary uppercase tracking-widest font-bold">Gold Tier Vendor</p>
</div>
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold border border-primary/20">
              PL
            </div>
</div>
</div>
</div>
</header>

<div className="p-margin-desktop space-y-gutter">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="text-headline-lg font-headline-lg text-on-surface">Vendor Performance Dashboard</h2>
<p className="text-body-md text-on-surface-variant">Real-time supply chain oversight for Q4 Operations.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 border border-outline text-label-md font-label-md rounded hover:bg-surface-container transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span> Export Reports
          </button>
<button className="px-4 py-2 bg-primary text-on-primary text-label-md font-label-md rounded hover:opacity-90 active:scale-95 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span> New Product
          </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg hover:bg-surface-container-low transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-widest">Total Sales (MTD)</span>
<span className="material-symbols-outlined text-primary opacity-50 group-hover:opacity-100 transition-opacity" data-icon="payments">payments</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-headline-md font-headline-md">$142,850</span>
<span className="text-status-success text-label-sm font-label-sm flex items-center">
<span className="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span> 12%
            </span>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg hover:bg-surface-container-low transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-widest">Pending Orders</span>
<span className="material-symbols-outlined text-status-warning opacity-50 group-hover:opacity-100 transition-opacity" data-icon="pending_actions">pending_actions</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-headline-md font-headline-md">48</span>
<span className="text-secondary text-label-sm font-label-sm">In Fulfillment</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg hover:bg-surface-container-low transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-widest">Compliance Score</span>
<span className="material-symbols-outlined text-status-success opacity-50 group-hover:opacity-100 transition-opacity" data-icon="verified">verified</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-headline-md font-headline-md text-status-success">88%</span>
<span className="text-secondary text-label-sm font-label-sm">High Quality</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg hover:bg-surface-container-low transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-widest">Active SKUs</span>
<span className="material-symbols-outlined text-primary opacity-50 group-hover:opacity-100 transition-opacity" data-icon="inventory">inventory</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-headline-md font-headline-md">1,204</span>
<span className="text-secondary text-label-sm font-label-sm">Across 4 Regions</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">

<div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant p-6 rounded-lg">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-headline-sm font-headline-sm">Monthly Order Volume</h3>
<p className="text-body-sm text-secondary">Comparative analysis: Last 6 months</p>
</div>
<select className="bg-surface-container border-none text-label-md font-label-md rounded px-4 py-1 cursor-pointer hover:bg-surface-container-high transition-colors">
<option>Units</option>
<option>Revenue</option>
</select>
</div>
<div className="chart-container flex items-end justify-between gap-4 px-4 pb-4">

<div className="flex flex-col items-center gap-2 w-full group">
<div className="w-full bg-primary/20 rounded-t-sm h-[60%] group-hover:bg-primary transition-all relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-background text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">120</div>
</div>
<span className="text-label-sm font-label-sm text-secondary">JUL</span>
</div>
<div className="flex flex-col items-center gap-2 w-full group">
<div className="w-full bg-primary/20 rounded-t-sm h-[85%] group-hover:bg-primary transition-all relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-background text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">185</div>
</div>
<span className="text-label-sm font-label-sm text-secondary">AUG</span>
</div>
<div className="flex flex-col items-center gap-2 w-full group">
<div className="w-full bg-primary/20 rounded-t-sm h-[70%] group-hover:bg-primary transition-all relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-background text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">140</div>
</div>
<span className="text-label-sm font-label-sm text-secondary">SEP</span>
</div>
<div className="flex flex-col items-center gap-2 w-full group">
<div className="w-full bg-primary/20 rounded-t-sm h-[95%] group-hover:bg-primary transition-all relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-background text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">210</div>
</div>
<span className="text-label-sm font-label-sm text-secondary">OCT</span>
</div>
<div className="flex flex-col items-center gap-2 w-full group">
<div className="w-full bg-primary/20 rounded-t-sm h-[75%] group-hover:bg-primary transition-all relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-background text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">160</div>
</div>
<span className="text-label-sm font-label-sm text-secondary">NOV</span>
</div>
<div className="flex flex-col items-center gap-2 w-full group">
<div className="w-full bg-primary rounded-t-sm h-[90%] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-background text-white text-[10px] px-2 py-1 rounded">195</div>
</div>
<span className="text-label-sm font-label-sm text-on-surface font-bold">DEC</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg flex flex-col">
<div className="mb-4">
<h3 className="text-headline-sm font-headline-sm text-on-surface">Inventory Health</h3>
<p className="text-body-sm text-secondary">Optimized vs Overstock</p>
</div>
<div className="flex-1 flex flex-col items-center justify-center py-4">
<div className="relative w-40 h-40">
<svg className="w-full h-full transform -rotate-90">
<circle cx="80" cy="80" fill="transparent" r="70" stroke="#E5E7EB" strokeWidth="12"></circle>
<circle className="gauge-ring" cx="80" cy="80" fill="transparent" r="70" stroke="#2f4adb" strokeDasharray="440" strokeDashoffset="110" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-headline-lg font-headline-lg">75%</span>
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Efficient</span>
</div>
</div>
<div className="mt-6 w-full space-y-2">
<div className="flex justify-between items-center text-body-sm">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span>Available Stock</span>
</div>
<span className="font-bold">4,200</span>
</div>
<div className="flex justify-between items-center text-body-sm">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-status-warning"></div>
<span>Low Inventory</span>
</div>
<span className="font-bold">124</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm">
<div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface">Recent Transactional History</h3>
<p className="text-body-sm text-secondary">Processing queue for standard and express fulfillment.</p>
</div>
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-surface-container rounded transition-colors text-secondary">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
<button className="text-primary text-label-md font-label-md hover:underline">View All</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-on-background text-white text-label-sm font-label-sm uppercase tracking-wider">
<th className="px-6 py-4 font-medium">Order ID</th>
<th className="px-6 py-4 font-medium">Customer</th>
<th className="px-6 py-4 font-medium">Date</th>
<th className="px-6 py-4 font-medium">Status</th>
<th className="px-6 py-4 font-medium text-right">Amount</th>
<th className="px-6 py-4 font-medium text-center">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
<tr className="zebra-stripe hover:bg-primary-fixed/10 transition-colors group">
<td className="px-6 py-4 text-body-sm font-label-md">#LQ-88291</td>
<td className="px-6 py-4 text-body-sm">Global Dynamics Inc.</td>
<td className="px-6 py-4 text-body-sm text-secondary">Dec 18, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold uppercase bg-status-info/10 text-status-info border border-status-info/20">Processing</span>
</td>
<td className="px-6 py-4 text-body-sm font-bold text-right">$4,250.00</td>
<td className="px-6 py-4 text-center">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors" data-icon="more_vert">more_vert</button>
</td>
</tr>
<tr className="zebra-stripe hover:bg-primary-fixed/10 transition-colors group">
<td className="px-6 py-4 text-body-sm font-label-md">#LQ-88288</td>
<td className="px-6 py-4 text-body-sm">TechFlow Solutions</td>
<td className="px-6 py-4 text-body-sm text-secondary">Dec 17, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold uppercase bg-status-warning/10 text-status-warning border border-status-warning/20">Shipped</span>
</td>
<td className="px-6 py-4 text-body-sm font-bold text-right">$12,400.00</td>
<td className="px-6 py-4 text-center">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors" data-icon="more_vert">more_vert</button>
</td>
</tr>
<tr className="zebra-stripe hover:bg-primary-fixed/10 transition-colors group">
<td className="px-6 py-4 text-body-sm font-label-md">#LQ-88285</td>
<td className="px-6 py-4 text-body-sm">Quantum Logistics</td>
<td className="px-6 py-4 text-body-sm text-secondary">Dec 17, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold uppercase bg-status-success/10 text-status-success border border-status-success/20">Delivered</span>
</td>
<td className="px-6 py-4 text-body-sm font-bold text-right">$890.50</td>
<td className="px-6 py-4 text-center">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors" data-icon="more_vert">more_vert</button>
</td>
</tr>
<tr className="zebra-stripe hover:bg-primary-fixed/10 transition-colors group">
<td className="px-6 py-4 text-body-sm font-label-md">#LQ-88280</td>
<td className="px-6 py-4 text-body-sm">Apex Manufacturing</td>
<td className="px-6 py-4 text-body-sm text-secondary">Dec 16, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold uppercase bg-status-success/10 text-status-success border border-status-success/20">Delivered</span>
</td>
<td className="px-6 py-4 text-body-sm font-bold text-right">$22,100.00</td>
<td className="px-6 py-4 text-center">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors" data-icon="more_vert">more_vert</button>
</td>
</tr>
<tr className="zebra-stripe hover:bg-primary-fixed/10 transition-colors group">
<td className="px-6 py-4 text-body-sm font-label-md">#LQ-88275</td>
<td className="px-6 py-4 text-body-sm">Nortech Systems</td>
<td className="px-6 py-4 text-body-sm text-secondary">Dec 15, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold uppercase bg-error/10 text-status-error border border-error/20">Returned</span>
</td>
<td className="px-6 py-4 text-body-sm font-bold text-right">$1,150.00</td>
<td className="px-6 py-4 text-center">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors" data-icon="more_vert">more_vert</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant flex items-center justify-between text-body-sm text-secondary">
<span>Showing 5 of 1,240 orders</span>
<div className="flex gap-2">
<button className="p-1 hover:bg-surface-container rounded disabled:opacity-30" disabled>
<span className="material-symbols-outlined scale-90" data-icon="chevron_left">chevron_left</span>
</button>
<button className="p-1 hover:bg-surface-container rounded">
<span className="material-symbols-outlined scale-90" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

<footer className="w-full py-margin-desktop px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-gutter bg-surface-container-highest border-t border-outline-variant">
<div className="max-w-md">
<h4 className="text-headline-sm font-headline-sm font-bold text-on-background mb-2">LogiQ-On Tech</h4>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-4">Industrial Precision for the Global Supply Chain. Seamlessly managing logistics, inventory, and fulfillment at enterprise scale.</p>
<p className="text-label-sm font-label-sm text-on-surface-variant opacity-60">© 2024 LogiQ-On Tech. Industrial Precision.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-10">
<div className="flex flex-col gap-2">
<span className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">Resources</span>
<Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all decoration-primary" href="/">Home</Link>
<Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all decoration-primary" href="/about">About</Link>
<a className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all decoration-primary" href="#">Solutions</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">Legal</span>
<a className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all decoration-primary" href="#">Careers</a>
<Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all decoration-primary" href="/contact">Contact</Link>
<a className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all decoration-primary" href="#">Privacy Policy</a>
</div>
</div>
</footer>
</div>
    </div>
  );
}
