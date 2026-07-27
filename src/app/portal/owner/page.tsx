import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platform Owner Dashboard",
  description: "LogiQ-On Platform Owner Dashboard (UI preview).",
};

export default function PlatformOwnerDashboardPage() {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <aside className="fixed left-0 top-0 h-full w-[260px] z-40 flex flex-col py-6 px-4 bg-white border-r border-slate-200 shadow-sm">
        <div className="px-3 mb-6">
          <h1 className="text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-600 inline-block"></span>
            LogiQ-On Portal
          </h1>
          <span className="inline-block mt-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 rounded-full border border-purple-100">
            Platform Owner
          </span>
        </div>

        <nav className="flex-grow space-y-1 overflow-y-auto">
          <a className="bg-purple-600 text-white font-semibold rounded-xl px-3.5 py-2.5 flex items-center gap-3 shadow-sm shadow-purple-500/20 transition-all" href="#">
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
          <div className="my-2 border-t border-slate-100 mx-2"></div>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">settings</span>
            <span className="text-sm">System Admin</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">security</span>
            <span className="text-sm">Security</span>
          </a>
        </nav>

        <div className="mt-auto pt-4 border-t border-slate-200">
          <div className="flex items-center gap-3 mb-3 px-1">
            <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              PA
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900 truncate">Admin User</p>
              <p className="text-xs text-slate-500 truncate">Platform Owner</p>
            </div>
          </div>
          <Link
            href="/login"
            className="w-full block text-center py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs rounded-xl transition-colors border border-slate-200"
          >
            Switch Role / Log Out
          </Link>
        </div>
      </aside>

<div className="ml-sidebar-width h-screen flex flex-col overflow-hidden relative">

<header className="h-top-nav-height bg-surface border-b border-outline-variant flex items-center justify-between px-margin-desktop sticky top-0 z-30">
<div className="flex items-center gap-gutter">
<h1 className="text-headline-md font-headline-md text-on-background">Executive Dashboard</h1>
<div className="h-6 w-px bg-outline-variant"></div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg border border-outline-variant/30">
<span className="text-label-sm font-label-sm text-on-surface-variant">Active Portal:</span>
<span className="text-label-sm font-label-sm font-bold text-primary">Platform Owner</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<input className="bg-surface-container border-none rounded-full px-10 py-2 text-body-sm focus:ring-2 focus:ring-primary w-64 transition-all" placeholder="Global Search..." type="text"/>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">help</span>
</button>
</div>
</header>

<div className="flex-grow overflow-y-auto p-margin-desktop custom-scrollbar chart-grid">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex items-center justify-between">
<div>
<p className="text-label-sm font-label-sm text-secondary">SYSTEM HEALTH</p>
<h3 className="text-headline-md font-headline-md text-status-success mt-1">ONLINE</h3>
<p className="text-body-sm text-on-surface-variant mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span> 99.98% Uptime
                        </p>
</div>
<div className="w-12 h-12 bg-status-success/10 rounded-full flex items-center justify-center text-status-success">
<span className="material-symbols-outlined text-[28px]">speed</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex items-center justify-between">
<div>
<p className="text-label-sm font-label-sm text-secondary">GROSS REVENUE</p>
<h3 className="text-headline-md font-headline-md text-on-background mt-1">$4,284,120</h3>
<p className="text-body-sm text-status-success mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +12.4% vs PM
                        </p>
</div>
<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]">payments</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex items-center justify-between">
<div>
<p className="text-label-sm font-label-sm text-secondary">ACTIVE VENDORS</p>
<h3 className="text-headline-md font-headline-md text-on-background mt-1">1,842</h3>
<p className="text-body-sm text-status-info mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">group_add</span> 48 New this week
                        </p>
</div>
<div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[28px]">store</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex items-center justify-between">
<div>
<p className="text-label-sm font-label-sm text-secondary">SECURITY STATUS</p>
<h3 className="text-headline-md font-headline-md text-status-warning mt-1">2 ALERTS</h3>
<p className="text-body-sm text-on-surface-variant mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">shield</span> All nodes protected
                        </p>
</div>
<div className="w-12 h-12 bg-status-warning/10 rounded-full flex items-center justify-center text-status-warning">
<span className="material-symbols-outlined text-[28px]">security</span>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-6 h-auto">

<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm h-[400px] flex flex-col">
<div className="flex items-center justify-between mb-6">
<h4 className="text-headline-sm font-headline-sm">Revenue Distribution Trends</h4>
<div className="flex gap-2">
<button className="px-3 py-1 bg-surface-container text-label-sm font-label-sm rounded border border-outline-variant/30">Daily</button>
<button className="px-3 py-1 bg-primary text-on-primary text-label-sm font-label-sm rounded border border-primary">Monthly</button>
</div>
</div>
<div className="flex-grow flex items-end gap-2 relative">

<div className="absolute inset-0 flex flex-col justify-between opacity-10">
<div className="w-full h-px bg-on-background"></div>
<div className="w-full h-px bg-on-background"></div>
<div className="w-full h-px bg-on-background"></div>
<div className="w-full h-px bg-on-background"></div>
</div>
<div className="w-full h-full relative overflow-hidden flex items-end justify-between px-4">
<div className="w-[8%] bg-primary-container/40 rounded-t h-[40%] transition-all hover:h-[45%]"></div>
<div className="w-[8%] bg-primary-container/40 rounded-t h-[55%] transition-all hover:h-[60%]"></div>
<div className="w-[8%] bg-primary-container/40 rounded-t h-[30%] transition-all hover:h-[35%]"></div>
<div className="w-[8%] bg-primary-container/40 rounded-t h-[70%] transition-all hover:h-[75%]"></div>
<div className="w-[8%] bg-primary-container/40 rounded-t h-[85%] transition-all hover:h-[90%]"></div>
<div className="w-[8%] bg-primary-container/40 rounded-t h-[50%] transition-all hover:h-[55%]"></div>
<div className="w-[8%] bg-primary-container/40 rounded-t h-[45%] transition-all hover:h-[50%]"></div>
<div className="w-[8%] bg-primary-container/40 rounded-t h-[60%] transition-all hover:h-[65%]"></div>
<div className="w-[8%] bg-primary-container/40 rounded-t h-[80%] transition-all hover:h-[85%]"></div>
<div className="w-[8%] bg-primary-container/40 rounded-t h-[95%] transition-all hover:h-[100%]"></div>
<div className="w-[8%] bg-primary-container/40 rounded-t h-[40%] transition-all hover:h-[45%]"></div>
</div>
</div>
<div className="mt-4 flex justify-between px-4 text-label-sm font-label-sm text-secondary">
<span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span>
</div>
</div>

<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col h-[400px]">
<div className="flex items-center justify-between mb-4">
<h4 className="text-headline-sm font-headline-sm">Security Matrix</h4>
<span className="text-status-warning text-label-sm font-label-sm bg-status-warning/10 px-2 py-1 rounded">Moderate Risk</span>
</div>
<div className="flex-grow overflow-y-auto space-y-4 custom-scrollbar pr-2">
<div className="p-3 bg-surface-container-low rounded-lg border-l-4 border-status-error">
<div className="flex justify-between items-start">
<span className="text-label-md font-label-md text-on-background">Unauthorized Access Attempt</span>
<span className="text-label-sm font-label-sm text-secondary">2m ago</span>
</div>
<p className="text-body-sm text-on-surface-variant mt-1">IP 192.168.1.104 attempted login at Node-4 (Warehouse).</p>
</div>
<div className="p-3 bg-surface-container-low rounded-lg border-l-4 border-status-warning">
<div className="flex justify-between items-start">
<span className="text-label-md font-label-md text-on-background">SSL Certificate Expiry</span>
<span className="text-label-sm font-label-sm text-secondary">4h ago</span>
</div>
<p className="text-body-sm text-on-surface-variant mt-1">Primary gateway certificate expires in 14 days. Renew now.</p>
</div>
<div className="p-3 bg-surface-container-low rounded-lg border-l-4 border-status-info">
<div className="flex justify-between items-start">
<span className="text-label-md font-label-md text-on-background">System Patch Available</span>
<span className="text-label-sm font-label-sm text-secondary">1d ago</span>
</div>
<p className="text-body-sm text-on-surface-variant mt-1">v2.4.1 critical security patch ready for deployment.</p>
</div>
<div className="p-3 bg-surface-container-low rounded-lg border-l-4 border-status-success">
<div className="flex justify-between items-start">
<span className="text-label-md font-label-md text-on-background">Firewall Audit Passed</span>
<span className="text-label-sm font-label-sm text-secondary">2d ago</span>
</div>
<p className="text-body-sm text-on-surface-variant mt-1">Scheduled vulnerability scan completed with 0 threats found.</p>
</div>
</div>
<button className="mt-4 w-full py-2 bg-surface-container-highest text-on-surface text-label-md font-label-md rounded hover:bg-outline-variant transition-colors">
                        View Full Logs
                    </button>
</div>

<div className="col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
<div className="p-6 border-b border-outline-variant flex items-center justify-between">
<h4 className="text-headline-sm font-headline-sm">System Audit Log</h4>
<div className="flex gap-3">
<select className="bg-surface border border-outline-variant rounded px-3 py-1.5 text-body-sm">
<option>All Categories</option>
<option>User Action</option>
<option>System</option>
<option>Compliance</option>
</select>
<button className="flex items-center gap-2 px-4 py-1.5 bg-on-background text-surface rounded text-label-md font-label-md">
<span className="material-symbols-outlined text-[18px]">download</span> Export CSV
                            </button>
</div>
</div>
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low text-on-surface-variant">
<tr>
<th className="px-6 py-3 text-label-sm font-label-sm">TIMESTAMP</th>
<th className="px-6 py-3 text-label-sm font-label-sm">ACTOR</th>
<th className="px-6 py-3 text-label-sm font-label-sm">ACTION</th>
<th className="px-6 py-3 text-label-sm font-label-sm">MODULE</th>
<th className="px-6 py-3 text-label-sm font-label-sm">STATUS</th>
<th className="px-6 py-3 text-label-sm font-label-sm text-right">DETAILS</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30 text-body-sm">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-label-md">2024-05-24 14:32:01</td>
<td className="px-6 py-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary text-[10px]">JD</div>
                                    John Doe (Admin)
                                </td>
<td className="px-6 py-4">Modified User Permissions</td>
<td className="px-6 py-4"><span className="bg-surface-container px-2 py-1 rounded text-xs">User Mgmt</span></td>
<td className="px-6 py-4"><span className="text-status-success flex items-center gap-1 font-semibold"><span className="w-2 h-2 rounded-full bg-status-success"></span> Success</span></td>
<td className="px-6 py-4 text-right"><span className="material-symbols-outlined text-secondary cursor-pointer">visibility</span></td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-label-md">2024-05-24 12:15:45</td>
<td className="px-6 py-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-on-primary text-[10px]">SY</div>
                                    SYSTEM_CORE
                                </td>
<td className="px-6 py-4">Database Optimization</td>
<td className="px-6 py-4"><span className="bg-surface-container px-2 py-1 rounded text-xs">Infrastructure</span></td>
<td className="px-6 py-4"><span className="text-status-success flex items-center gap-1 font-semibold"><span className="w-2 h-2 rounded-full bg-status-success"></span> Completed</span></td>
<td className="px-6 py-4 text-right"><span className="material-symbols-outlined text-secondary cursor-pointer">visibility</span></td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-label-md">2024-05-24 09:44:12</td>
<td className="px-6 py-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed text-[10px]">VA</div>
                                    Vendor_Portal_4
                                </td>
<td className="px-6 py-4">Price Sheet Update</td>
<td className="px-6 py-4"><span className="bg-surface-container px-2 py-1 rounded text-xs">Marketplace</span></td>
<td className="px-6 py-4"><span className="text-status-warning flex items-center gap-1 font-semibold"><span className="w-2 h-2 rounded-full bg-status-warning"></span> Pending</span></td>
<td className="px-6 py-4 text-right"><span className="material-symbols-outlined text-secondary cursor-pointer">visibility</span></td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-label-md">2024-05-23 23:59:59</td>
<td className="px-6 py-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-on-primary text-[10px]">CR</div>
                                    Cron_Job_Daily
                                </td>
<td className="px-6 py-4">Daily Revenue Snapshot</td>
<td className="px-6 py-4"><span className="bg-surface-container px-2 py-1 rounded text-xs">BI Analytics</span></td>
<td className="px-6 py-4"><span className="text-status-success flex items-center gap-1 font-semibold"><span className="w-2 h-2 rounded-full bg-status-success"></span> Generated</span></td>
<td className="px-6 py-4 text-right"><span className="material-symbols-outlined text-secondary cursor-pointer">visibility</span></td>
</tr>
</tbody>
</table>
<div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
<span className="text-label-sm font-label-sm text-secondary">Showing 4 of 2,492 entries</span>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded font-label-sm">1</button>
<button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors font-label-sm">2</button>
<button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>

<footer className="w-full py-4 px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4 bg-surface-container-highest dark:bg-on-secondary-fixed border-t border-outline-variant">
<span className="text-label-sm font-label-sm text-on-surface-variant dark:text-secondary-fixed-dim">© 2024 LogiQ-On Tech. Industrial Precision.</span>
<div className="flex gap-6">
<a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Privacy Policy</a>
<a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Terms of Service</a>
<a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">API Docs</a>
<a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Support</a>
</div>
</footer>
</div>
    </div>
  );
}
