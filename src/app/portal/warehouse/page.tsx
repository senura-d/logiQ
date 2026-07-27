import type { Metadata } from "next";
import Link from "next/link";
import { getAssetPath } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Warehouse Management Portal",
  description: "LogiQ-On Warehouse Management Portal (UI preview).",
};

export default function WarehousePortalPage() {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <aside className="fixed left-0 top-0 h-full w-[260px] z-40 flex flex-col py-6 px-4 bg-white border-r border-slate-200 shadow-sm">
        <div className="px-3 mb-6">
          <h1 className="text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-600 inline-block"></span>
            LogiQ-On Portal
          </h1>
          <span className="inline-block mt-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 rounded-full border border-orange-100">
            Warehouse Manager
          </span>
        </div>

        <nav className="flex-grow space-y-1 overflow-y-auto">
          <a className="bg-orange-600 text-white font-semibold rounded-xl px-3.5 py-2.5 flex items-center gap-3 shadow-sm shadow-orange-500/20 transition-all" href="#">
            <span className="material-symbols-outlined text-[20px] text-white">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">inventory_2</span>
            <span className="text-sm">Inventory</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">input</span>
            <span className="text-sm">Receiving</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">package</span>
            <span className="text-sm">Picking &amp; Packing</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">local_shipping</span>
            <span className="text-sm">Dispatch</span>
          </a>
          <a className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px] text-slate-500">assignment_return</span>
            <span className="text-sm">Returns</span>
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
              <div className="w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                WM
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">Warehouse Manager</p>
                <p className="text-xs text-slate-500 truncate">Dock Operations</p>
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

<header className="fixed top-0 right-0 left-sidebar-width h-top-nav-height bg-surface border-b border-outline-variant z-30 flex items-center justify-between px-margin-desktop ml-[260px]">
<h2 className="text-headline-md font-headline-md font-bold text-on-background">Dispatch &amp; Real-time Tracking</h2>
<div className="flex items-center gap-gutter">
<div className="relative hidden lg:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-10 pr-4 py-1.5 bg-surface-container border border-outline-variant rounded-full text-body-sm focus:ring-2 focus:ring-primary focus:outline-none w-64" placeholder="Search manifest or SKU..." type="text"/>
</div>
<div className="flex items-center gap-4 border-l border-outline-variant pl-6">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-sm">JS</div>
<span className="text-label-md font-label-md hidden xl:inline">James S. <span className="text-secondary font-normal opacity-70">Admin</span></span>
</div>
</div>
</div>
</header>

<div className="ml-[260px] pt-[84px] px-margin-desktop pb-margin-desktop">

<div className="flex justify-between items-center mb-6">
<div className="flex gap-2">
<span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-lg text-label-sm font-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="sensors">sensors</span> LIVE_FEED: ON
                </span>
<span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-lg text-label-sm font-label-sm">
                    Zone: Logistics Center 4A
                </span>
</div>
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-md">
<span className="material-symbols-outlined" data-icon="add_box">add_box</span>
                Receiving Quick Action
            </button>
</div>

<div className="grid grid-cols-12 gap-gutter">

<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="px-4 py-3 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<span className="text-label-md font-label-md flex items-center gap-2">
<span className="material-symbols-outlined text-primary" data-icon="map">map</span> Global Shipment Network
                    </span>
<div className="flex gap-2">
<button className="p-1 hover:bg-surface-variant rounded"><span className="material-symbols-outlined text-[18px]">zoom_in</span></button>
<button className="p-1 hover:bg-surface-variant rounded"><span className="material-symbols-outlined text-[18px]">zoom_out</span></button>
</div>
</div>
<div className="relative flex-1 bg-surface-dim min-h-[400px]">
<img className="w-full h-full object-cover grayscale brightness-90" data-alt="A high-contrast industrial satellite map interface showing global supply chain shipment nodes. The map features a dark slate background with glowing blue paths connecting major logistics hubs across North America and Europe. Tiny pulsing data points move along these paths representing real-time freight movement. The overall aesthetic is professional, data-driven, and minimalist, utilizing the brand's primary blue and cool gray tones." src={getAssetPath("/images/stitch/49e1f6fe69ba.png")}/>
<div className="absolute top-4 left-4 flex flex-col gap-2">
<div className="bg-on-background/80 backdrop-blur-md p-3 rounded-lg border border-outline-variant/30 text-white">
<p className="text-label-sm font-label-sm opacity-70">Active In-Transit</p>
<p className="text-headline-sm font-headline-sm">1,284 <span className="text-status-success text-sm">+12%</span></p>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-outline-variant shadow-lg max-w-[200px]">
<p className="text-label-sm font-label-sm mb-2 uppercase tracking-widest text-outline">Node Health</p>
<div className="space-y-2">
<div className="flex justify-between items-center text-xs">
<span>Chicago Hub</span>
<span className="w-2 h-2 rounded-full bg-status-success"></span>
</div>
<div className="flex justify-between items-center text-xs">
<span>Rotterdam Port</span>
<span className="w-2 h-2 rounded-full bg-status-warning"></span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-label-md font-label-md text-on-surface">Inventory Heatmap</h3>
<span className="material-symbols-outlined text-outline" data-icon="grid_view">grid_view</span>
</div>
<div className="flex-1 grid grid-cols-6 grid-rows-8 gap-1.5 mb-6">

<div className="heatmap-cell bg-primary/20 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/60 rounded-sm"></div>
<div className="heatmap-cell bg-primary/80 rounded-sm"></div>
<div className="heatmap-cell bg-primary/40 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/90 rounded-sm"></div>
<div className="heatmap-cell bg-primary/30 rounded-sm"></div>
<div className="heatmap-cell bg-primary/20 rounded-sm"></div>
<div className="heatmap-cell bg-status-error/40 rounded-sm"></div>
<div className="heatmap-cell bg-primary/50 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/70 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/20 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/40 rounded-sm"></div>
<div className="heatmap-cell bg-primary/90 rounded-sm"></div>
<div className="heatmap-cell bg-primary/20 rounded-sm"></div>
<div className="heatmap-cell bg-primary/60 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/30 rounded-sm"></div>
<div className="heatmap-cell bg-primary/80 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-status-warning/40 rounded-sm"></div>
<div className="heatmap-cell bg-primary/20 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/40 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/20 rounded-sm"></div>
<div className="heatmap-cell bg-primary/70 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/90 rounded-sm"></div>
<div className="heatmap-cell bg-primary/40 rounded-sm"></div>
<div className="heatmap-cell bg-primary/20 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/50 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/80 rounded-sm"></div>
<div className="heatmap-cell bg-primary/30 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/20 rounded-sm"></div>
<div className="heatmap-cell bg-primary/60 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/40 rounded-sm"></div>
<div className="heatmap-cell bg-primary/90 rounded-sm"></div>
<div className="heatmap-cell bg-primary/10 rounded-sm"></div>
<div className="heatmap-cell bg-primary/20 rounded-sm"></div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-body-sm text-secondary">Aisle Efficiency</span>
<span className="text-body-sm font-bold">92.4%</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[92.4%]"></div>
</div>
<div className="flex items-center gap-2 text-status-error text-label-sm bg-error-container/20 p-2 rounded">
<span className="material-symbols-outlined text-[16px]">warning</span>
                        Overcapacity in Sector G-12
                    </div>
</div>
</div>

<div className="col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
<h3 className="text-label-md font-label-md uppercase tracking-widest text-secondary">Outgoing Shipments Manifest</h3>
<div className="flex gap-4">
<select className="bg-surface-container border border-outline-variant text-label-sm font-label-sm rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary">
<option>Filter by Carrier</option>
<option>FedEx</option>
<option>DHL Industrial</option>
<option>LogiQ-Fleet</option>
</select>
<button className="bg-surface-container-high hover:bg-surface-variant p-2 rounded transition-colors">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left zebra-table">
<thead>
<tr className="bg-on-background text-white">
<th className="px-6 py-4 text-label-sm font-label-sm uppercase tracking-tighter">SKU Identifier</th>
<th className="px-6 py-4 text-label-sm font-label-sm uppercase tracking-tighter">Destination</th>
<th className="px-6 py-4 text-label-sm font-label-sm uppercase tracking-tighter">Priority</th>
<th className="px-6 py-4 text-label-sm font-label-sm uppercase tracking-tighter">Carrier</th>
<th className="px-6 py-4 text-label-sm font-label-sm uppercase tracking-tighter">Current Status</th>
<th className="px-6 py-4 text-label-sm font-label-sm uppercase tracking-tighter">Action</th>
</tr>
</thead>
<tbody className="text-body-sm">
<tr className="border-b border-outline-variant/50">
<td className="px-6 py-4 font-label-md text-primary">LX-2938-Q</td>
<td className="px-6 py-4">Berlin (BER-01)</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-status-error">High</span>
</td>
<td className="px-6 py-4 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="local_shipping">local_shipping</span> DHL Global
                                </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-status-info animate-pulse"></span>
                                        Sorting Stage
                                    </div>
</td>
<td className="px-6 py-4">
<button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
</td>
</tr>
<tr className="border-b border-outline-variant/50">
<td className="px-6 py-4 font-label-md text-primary">LX-1102-W</td>
<td className="px-6 py-4">Chicago (ORD-04)</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-status-info">Med</span>
</td>
<td className="px-6 py-4 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="flight">flight</span> LogiQ-Air
                                </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-status-success"></span>
                                        Ready for Load
                                    </div>
</td>
<td className="px-6 py-4">
<button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
</td>
</tr>
<tr className="border-b border-outline-variant/50">
<td className="px-6 py-4 font-label-md text-primary">LX-4405-P</td>
<td className="px-6 py-4">Tokyo (HND-02)</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-status-error">High</span>
</td>
<td className="px-6 py-4 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="sailing">sailing</span> Ocean-Trans
                                </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-status-warning"></span>
                                        Customs Hold
                                    </div>
</td>
<td className="px-6 py-4">
<button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
</td>
</tr>
<tr className="border-b border-outline-variant/50">
<td className="px-6 py-4 font-label-md text-primary">LX-9088-K</td>
<td className="px-6 py-4">London (LHR-09)</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-secondary">Low</span>
</td>
<td className="px-6 py-4 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="local_shipping">local_shipping</span> FedEx
                                </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-on-secondary-container"></span>
                                        Manifest Created
                                    </div>
</td>
<td className="px-6 py-4">
<button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 bg-surface-container-low flex justify-between items-center text-label-sm font-label-sm text-secondary">
<span>Showing 4 of 128 shipments</span>
<div className="flex gap-2">
<button className="px-3 py-1 bg-surface-container-highest rounded border border-outline-variant disabled:opacity-50" disabled>Previous</button>
<button className="px-3 py-1 bg-surface-container-highest rounded border border-outline-variant hover:bg-surface-variant transition-colors">Next</button>
</div>
</div>
</div>
</div>
</div>

<footer className="ml-[260px] w-[calc(100%-260px)] py-margin-desktop px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-gutter bg-surface-container-highest border-t border-outline-variant">
<div className="space-y-4">
<div className="text-headline-sm font-headline-sm font-bold text-on-background">LogiQ-On <span className="text-primary">Tech</span></div>
<p className="text-body-sm font-body-sm text-on-surface-variant max-w-xs">Industrial-grade logistics intelligence for the global supply chain. Precision in every movement.</p>
<p className="text-label-sm font-label-sm text-on-surface-variant">© 2024 LogiQ-On Tech. Industrial Precision.</p>
</div>
<div className="grid grid-cols-2 gap-x-12 gap-y-2">
<Link className="text-on-surface-variant hover:underline decoration-primary transition-all text-body-sm" href="/">Home</Link>
<a className="text-on-surface-variant hover:underline decoration-primary transition-all text-body-sm" href="#">Solutions</a>
<Link className="text-on-surface-variant hover:underline decoration-primary transition-all text-body-sm" href="/about">About</Link>
<a className="text-on-surface-variant hover:underline decoration-primary transition-all text-body-sm" href="#">Careers</a>
<Link className="text-on-surface-variant hover:underline decoration-primary transition-all text-body-sm" href="/contact">Contact</Link>
<a className="text-on-surface-variant hover:underline decoration-primary transition-all text-body-sm" href="#">Privacy Policy</a>
</div>
</footer>
    </div>
  );
}
