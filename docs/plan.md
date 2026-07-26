# Implementation Plan - QuickBite HQ KPI & CSF Monitoring Dashboard

Build a static, highly responsive, enterprise-grade **KPI & CSF Monitoring Dashboard** for "QuickBite" HQ Management to monitor campus canteen operations, QR Order, and Cloud POS systems in real-time.

## Goal Description
QuickBite HQ requires a dashboard to monitor Critical Success Factors (CSF) and Key Performance Indicators (KPI) in real-time. The dashboard must feature:
1. **Header Section**: "QuickBite HQ" title, "Dashboard Monitoring Performa Kantin Kampus" subtitle, and a real-time digital clock formatted for WIB (GMT+7) with simulated operational date set to **11 Agustus 2026** (reflecting 1 week of new system operations).
2. **KPI Metric Cards Section**: Responsive grid featuring 6 metric cards with title, current value, target threshold, Lucide icon, and status-based indicator badges (Optimal / Warning / Critical).
3. **Incident Log Table Section**: Structured data table showing recent incidents dated around 11 Agustus 2026, with columns for *Waktu*, *Kategori CSF* (with category-specific badges), *Deskripsi Insiden*, and *Status Resolusi*.
4. **Enhanced UI/UX**: Premium aesthetic with modern typography, smooth status badges, interactive category filters/search, dark/light ambient background accents, and responsive layout for mobile, tablet, and desktop.

## User Review Required
> [!IMPORTANT]
> - **Operational Date Assumption**: System simulated clock and incident logs use baseline date **11 Agustus 2026** (1 week post-launch).
> - **Tailwind CSS Version**: We will configure Tailwind CSS along with Vite.
> - **Framework Structure**: Clean Vite + React single-page structure directly in `/Users/belvatalithadwiyanti/Documents/Projects/aslab/bpm`.

## Proposed Changes

### Project Initialization & Setup
- Initialize Vite React environment.
- Configure `package.json` with dependencies: `react`, `react-dom`, `lucide-react`, `tailwindcss`, `postcss`, `autoprefixer`.
- Configure `index.html` with modern font imports (Plus Jakarta Sans / Inter) and page meta tags.
- Setup `tailwind.config.js` and `src/index.css`.

---

### Dashboard Components (`src/App.jsx`)

#### [NEW] `src/App.jsx`
Implement the core dashboard with sub-components:
- **`Header`**: Displays branding, operational status badge ("Week 1 Operations"), and `DigitalClock` displaying real time with date locked to **11 Agustus 2026** in WIB format (e.g. `HH:mm:ss WIB | Selasa, 11 Agustus 2026`).
- **`KPICard`**: Reusable component receiving metric title, value, target, status (`Optimal`, `Warning`, `Critical`), and custom Lucide icon (`Clock`, `AlertTriangle`, `Activity`, `Smile`, `ShoppingCart`, `CheckCircle2`). Color schemes:
  - **Optimal**: Green theme (`bg-emerald-50 text-emerald-700 border-emerald-200`).
  - **Warning**: Amber/Yellow theme (`bg-amber-50 text-amber-700 border-amber-200`).
  - **Critical**: Rose/Red theme (`bg-rose-50 text-rose-700 border-rose-200`).
- **`IncidentLogTable`**: Clean data table with search/filtering capabilities, color-coded CSF badges (Teknologi, Layanan, Operasional), status indicators (Resolved, In Progress, Pending), and time markers on 11 Agustus 2026.
- **`SummaryStatsBar`**: Overview summary showing total active POS terminals, total orders today, system health percentage, and active alerts count.

---

### Global Styling (`src/index.css`)
#### [NEW] `src/index.css`
- Configure Tailwind directives `@tailwind base; @tailwind components; @tailwind utilities;`.
- Add custom font definitions and smooth scroll behavior.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to verify clean compilation with Vite without syntax or type errors.
- Run `npm run dev` to launch local dev server and ensure zero runtime console errors.

### Manual Verification
1. **Clock & Date Verification**: Check that date displays **11 Agustus 2026** with live ticking WIB time.
2. **KPI Cards Check**: Verify all 6 cards display exact required values:
   - Lead Time: 4.2 Menit (< 5 Menit) -> Optimal
   - Error Rate: 2.1% (< 2%) -> Warning
   - System Uptime: 99.8% (> 99.5%) -> Optimal
   - CSAT Score: 4.6 / 5.0 (> 4.5) -> Optimal
   - Cart Abandonment: 3.2% (< 5%) -> Optimal
   - SOP Compliance: 100% (100%) -> Optimal
3. **Incident Table Check**: Check columns (Waktu, Kategori CSF, Deskripsi Insiden, Status Resolusi) with 11 Agustus timestamp badges for Teknologi, Layanan, and Operasional.
4. **Responsiveness**: Verify 1-column layout on mobile (<640px), 2-column on tablet (640px-1024px), and 3-column grid on desktop (>1024px).
