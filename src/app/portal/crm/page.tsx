import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CRM Dashboard",
  description: "LogiQ-On CRM Dashboard (UI preview).",
};

export default function CrmDashboardPage() {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <aside className="fixed left-0 top-0 h-full w-[260px] z-40 flex flex-col py-6 px-4 bg-white border-r border-slate-200 shadow-sm">
        <div className="px-3 mb-6">
          <h1 className="text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            LogiQ-On Portal
          </h1>
          <span className="inline-block mt-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 rounded-full border border-amber-100">
            Sales &amp; CRM View
          </span>
        </div>

        <nav className="flex-grow space-y-1 overflow-y-auto">
          <a className="bg-amber-500 text-white font-semibold rounded-xl px-3.5 py-2.5 flex items-center gap-3 shadow-sm shadow-amber-500/20 transition-all" href="#">
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
              <div className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                CR
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">CRM Representative</p>
                <p className="text-xs text-slate-500 truncate">Sales &amp; Accounts</p>
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

<div className="flex-1 ml-[260px] relative">

<header className="fixed top-0 right-0 left-[260px] h-top-nav-height z-50 flex items-center justify-between px-margin-desktop bg-surface border-b border-outline-variant">
<div className="flex items-center gap-8">
<span className="text-headline-md font-headline-md font-bold text-on-background">LogiQ-On Tech</span>
<nav className="hidden md:flex items-center gap-6">
<a className="text-primary border-b-2 border-primary pb-1 font-label-md text-label-md" href="#">Products</a>
<a className="text-secondary hover:text-on-background font-label-md text-label-md transition-colors" href="#">Solutions</a>
<a className="text-secondary hover:text-on-background font-label-md text-label-md transition-colors" href="#">Industries</a>
<a className="text-secondary hover:text-on-background font-label-md text-label-md transition-colors" href="#">Partners</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-lg">search</span>
<input className="bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-1.5 text-body-sm w-64 focus:ring-2 focus:ring-primary" placeholder="Search accounts..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-secondary hover:bg-surface-container rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-secondary hover:bg-surface-container rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
<Link href="/request-demo" className="bg-primary text-on-primary px-4 py-1.5 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">Get Demo</Link>
</div>
</header>

<div className="mt-top-nav-height p-margin-desktop bg-background min-h-[calc(100vh-64px)]">

<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-background">Sales Operations Dashboard</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Real-time performance monitoring and account intelligence</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 border border-outline px-4 py-2 rounded font-label-md text-label-md hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm">calendar_today</span>
                        Last 30 Days
                    </button>
<button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded font-label-md text-label-md">
<span className="material-symbols-outlined text-sm">download</span>
                        Export Report
                    </button>
</div>
</div>

<div className="grid grid-cols-12 gap-gutter">

<div className="col-span-12 lg:col-span-4 dashboard-card rounded-xl p-6 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm">Sales Pipeline</h3>
<span className="material-symbols-outlined text-outline">filter_alt</span>
</div>
<div className="flex-1 flex flex-col justify-between py-4">

<div className="group relative">
<div className="funnel-stage bg-primary h-14 w-full flex items-center justify-between px-10 text-on-primary mb-2">
<span className="font-label-md">Awareness</span>
<span className="font-bold">4.2k</span>
</div>
</div>
<div className="group relative">
<div className="funnel-stage bg-primary/80 h-14 w-[90%] mx-auto flex items-center justify-between px-10 text-on-primary mb-2">
<span className="font-label-md">Engagement</span>
<span className="font-bold">1.8k</span>
</div>
</div>
<div className="group relative">
<div className="funnel-stage bg-primary/60 h-14 w-[80%] mx-auto flex items-center justify-between px-10 text-on-primary mb-2">
<span className="font-label-md">Qualified</span>
<span className="font-bold">842</span>
</div>
</div>
<div className="group relative">
<div className="funnel-stage bg-primary/40 h-14 w-[70%] mx-auto flex items-center justify-between px-10 text-on-primary mb-2">
<span className="font-label-md">Proposal</span>
<span className="font-bold">215</span>
</div>
</div>
<div className="group relative">
<div className="funnel-stage bg-brand-accent-purple h-14 w-[60%] mx-auto flex items-center justify-between px-10 text-on-primary">
<span className="font-label-md">Negotiation</span>
<span className="font-bold">42</span>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant flex justify-between">
<div className="text-center">
<p className="text-label-sm font-label-sm text-outline uppercase">Conv. Rate</p>
<p className="text-headline-sm font-bold">3.2%</p>
</div>
<div className="text-center">
<p className="text-label-sm font-label-sm text-outline uppercase">Avg. Deal</p>
<p className="text-headline-sm font-bold">$12.4k</p>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-gutter">

<div className="col-span-1 dashboard-card rounded-xl p-6">
<p className="text-label-sm font-label-sm text-outline uppercase mb-1">CTR</p>
<h4 className="text-headline-md font-bold text-primary">4.12%</h4>
<div className="mt-2 flex items-center text-status-success text-label-sm">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span>+0.5%</span>
</div>
</div>
<div className="col-span-1 dashboard-card rounded-xl p-6">
<p className="text-label-sm font-label-sm text-outline uppercase mb-1">CPC</p>
<h4 className="text-headline-md font-bold text-primary">$0.84</h4>
<div className="mt-2 flex items-center text-status-success text-label-sm">
<span className="material-symbols-outlined text-sm">trending_down</span>
<span>-12%</span>
</div>
</div>
<div className="col-span-1 dashboard-card rounded-xl p-6">
<p className="text-label-sm font-label-sm text-outline uppercase mb-1">MQLs</p>
<h4 className="text-headline-md font-bold text-primary">1,240</h4>
<div className="mt-2 flex items-center text-status-error text-label-sm">
<span className="material-symbols-outlined text-sm">trending_down</span>
<span>-2.1%</span>
</div>
</div>
<div className="col-span-1 dashboard-card rounded-xl p-6">
<p className="text-label-sm font-label-sm text-outline uppercase mb-1">ROAS</p>
<h4 className="text-headline-md font-bold text-primary">4.8x</h4>
<div className="mt-2 flex items-center text-status-success text-label-sm">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span>+1.2x</span>
</div>
</div>

<div className="col-span-full dashboard-card rounded-xl p-6 h-64 relative overflow-hidden">
<div className="flex justify-between items-center mb-4">
<h3 className="font-headline-sm text-headline-sm">Acquisition vs Churn</h3>
<div className="flex gap-4">
<div className="flex items-center gap-1">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="text-label-sm">Acquisition</span>
</div>
<div className="flex items-center gap-1">
<div className="w-3 h-3 rounded-full bg-status-error"></div>
<span className="text-label-sm">Churn</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-40 flex items-end gap-1 px-4">
<div className="flex-1 bg-primary/10 rounded-t-lg relative" style={{height: '60%'}}>
<div className="absolute bottom-0 w-full bg-primary rounded-t-lg" style={{height: '70%'}}></div>
<div className="absolute bottom-0 w-full bg-status-error/30" style={{height: '20%'}}></div>
</div>
<div className="flex-1 bg-primary/10 rounded-t-lg relative" style={{height: '75%'}}>
<div className="absolute bottom-0 w-full bg-primary rounded-t-lg" style={{height: '80%'}}></div>
<div className="absolute bottom-0 w-full bg-status-error/30" style={{height: '15%'}}></div>
</div>
<div className="flex-1 bg-primary/10 rounded-t-lg relative" style={{height: '50%'}}>
<div className="absolute bottom-0 w-full bg-primary rounded-t-lg" style={{height: '60%'}}></div>
<div className="absolute bottom-0 w-full bg-status-error/30" style={{height: '25%'}}></div>
</div>
<div className="flex-1 bg-primary/10 rounded-t-lg relative" style={{height: '85%'}}>
<div className="absolute bottom-0 w-full bg-primary rounded-t-lg" style={{height: '90%'}}></div>
<div className="absolute bottom-0 w-full bg-status-error/30" style={{height: '10%'}}></div>
</div>
<div className="flex-1 bg-primary/10 rounded-t-lg relative" style={{height: '40%'}}>
<div className="absolute bottom-0 w-full bg-primary rounded-t-lg" style={{height: '50%'}}></div>
<div className="absolute bottom-0 w-full bg-status-error/30" style={{height: '40%'}}></div>
</div>
<div className="flex-1 bg-primary/10 rounded-t-lg relative" style={{height: '95%'}}>
<div className="absolute bottom-0 w-full bg-primary rounded-t-lg" style={{height: '95%'}}></div>
<div className="absolute bottom-0 w-full bg-status-error/30" style={{height: '5%'}}></div>
</div>
</div>
</div>
</div>

<div className="col-span-12 dashboard-card rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-sm text-headline-sm">High-Value Accounts</h3>
<div className="flex gap-2">
<button className="p-1.5 hover:bg-surface-container rounded transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low">
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase">Account Name</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase">Deal Size</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase">Owner</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase">Status</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase">Last Contact</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase">Health</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-xs">GL</div>
<div>
<p className="font-body-sm font-semibold">Global Logistics Corp</p>
<p className="text-xs text-outline">Tier 1 • Enterprise</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-label-md">$450,000</td>
<td className="px-6 py-4 text-body-sm">Alex Chen</td>
<td className="px-6 py-4">
<span className="status-pill bg-status-success/15 text-status-success">QUALIFIED</span>
</td>
<td className="px-6 py-4 text-body-sm">2 hrs ago</td>
<td className="px-6 py-4">
<div className="w-24 h-1.5 bg-outline-variant rounded-full overflow-hidden">
<div className="bg-status-success h-full w-[85%]"></div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-primary hover:underline text-label-sm font-label-sm">View Profile</button>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-accent-purple/20 flex items-center justify-center text-brand-accent-purple font-bold text-xs">SW</div>
<div>
<p className="font-body-sm font-semibold">SwiftWare Solutions</p>
<p className="text-xs text-outline">Mid-Market • High Growth</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-label-md">$125,000</td>
<td className="px-6 py-4 text-body-sm">Maria Garcia</td>
<td className="px-6 py-4">
<span className="status-pill bg-status-warning/15 text-status-warning">NEGOTIATION</span>
</td>
<td className="px-6 py-4 text-body-sm">Yesterday</td>
<td className="px-6 py-4">
<div className="w-24 h-1.5 bg-outline-variant rounded-full overflow-hidden">
<div className="bg-status-warning h-full w-[60%]"></div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-primary hover:underline text-label-sm font-label-sm">View Profile</button>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-status-info/20 flex items-center justify-center text-status-info font-bold text-xs">NX</div>
<div>
<p className="font-body-sm font-semibold">NextGen Robotics</p>
<p className="text-xs text-outline">Tier 1 • Technical Partner</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-label-md">$890,000</td>
<td className="px-6 py-4 text-body-sm">James Wilson</td>
<td className="px-6 py-4">
<span className="status-pill bg-status-info/15 text-status-info">CONTRACTING</span>
</td>
<td className="px-6 py-4 text-body-sm">5 mins ago</td>
<td className="px-6 py-4">
<div className="w-24 h-1.5 bg-outline-variant rounded-full overflow-hidden">
<div className="bg-status-success h-full w-[95%]"></div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-primary hover:underline text-label-sm font-label-sm">View Profile</button>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-status-error/10 flex items-center justify-center text-status-error font-bold text-xs">AV</div>
<div>
<p className="font-body-sm font-semibold">Apex Ventures</p>
<p className="text-xs text-outline">Venture Capital • Dormant</p>
</div>
</div>
</td>
<td className="px-6 py-4 font-label-md">$24,000</td>
<td className="px-6 py-4 text-body-sm">Sarah Blake</td>
<td className="px-6 py-4">
<span className="status-pill bg-status-error/15 text-status-error">AT RISK</span>
</td>
<td className="px-6 py-4 text-body-sm">2 weeks ago</td>
<td className="px-6 py-4">
<div className="w-24 h-1.5 bg-outline-variant rounded-full overflow-hidden">
<div className="bg-status-error h-full w-[20%]"></div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-primary hover:underline text-label-sm font-label-sm">View Profile</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 border-t border-outline-variant flex justify-between items-center bg-surface-container-low">
<span className="text-label-sm text-outline">Showing 4 of 124 accounts</span>
<div className="flex gap-2">
<button className="px-3 py-1 border border-outline rounded text-label-sm disabled:opacity-50" disabled>Previous</button>
<button className="px-3 py-1 border border-outline rounded text-label-sm hover:bg-white transition-colors">Next</button>
</div>
</div>
</div>
</div>
</div>

<footer className="w-full py-margin-desktop px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-gutter bg-surface-container-highest">
<div>
<h4 className="text-headline-sm font-headline-sm font-bold text-on-background">LogiQ-On Tech</h4>
<p className="text-body-sm font-body-sm text-on-surface-variant max-w-xs mt-2">Precision driven CRM for industrial logistics and global supply chain management.</p>
<p className="text-label-sm font-label-sm text-on-surface-variant mt-6">© 2024 LogiQ-On Tech. Industrial Precision.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-2">
<p className="text-label-md font-bold mb-2">Company</p>
<Link className="text-on-surface-variant hover:underline decoration-primary transition-all text-label-sm" href="/">Home</Link>
<Link className="text-on-surface-variant hover:underline decoration-primary transition-all text-label-sm" href="/about">About</Link>
<a className="text-on-surface-variant hover:underline decoration-primary transition-all text-label-sm" href="#">Careers</a>
</div>
<div className="flex flex-col gap-2">
<p className="text-label-md font-bold mb-2">Product</p>
<a className="text-on-surface-variant hover:underline decoration-primary transition-all text-label-sm font-bold text-primary" href="#">Solutions</a>
<a className="text-on-surface-variant hover:underline decoration-primary transition-all text-label-sm" href="#">Pricing</a>
<a className="text-on-surface-variant hover:underline decoration-primary transition-all text-label-sm" href="#">API Docs</a>
</div>
<div className="flex flex-col gap-2">
<p className="text-label-md font-bold mb-2">Support</p>
<Link className="text-on-surface-variant hover:underline decoration-primary transition-all text-label-sm" href="/contact">Contact</Link>
<a className="text-on-surface-variant hover:underline decoration-primary transition-all text-label-sm" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:underline decoration-primary transition-all text-label-sm" href="#">Status</a>
</div>
</div>
</footer>
</div>
    </div>
  );
}
