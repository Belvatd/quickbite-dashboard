export const v1KpiData = [
  { title: "Avg Lead Time", value: "4.2 Menit", target: "< 5 Menit", status: "Optimal", iconName: "Clock", description: "Rata-rata waktu pemrosesan dari pemesanan hingga makanan siap." },
  { title: "Order Error Rate", value: "2.1%", target: "< 2%", status: "Warning", iconName: "AlertTriangle", description: "Persentase pesanan dengan kesalahan (salah menu, kurang item, dll)." },
  { title: "System Uptime", value: "99.8%", target: "> 99.5%", status: "Optimal", iconName: "Activity", description: "Tingkat ketersediaan server dan sistem POS (tanpa gangguan)." },
  { title: "CSAT Score", value: "4.6 / 5.0", target: "> 4.5", status: "Optimal", iconName: "Smile", description: "Skor Kepuasan Pelanggan (Customer Satisfaction) dari feedback." },
  { title: "Cart Abandonment", value: "3.2%", target: "< 5%", status: "Optimal", iconName: "ShoppingCart", description: "Persentase pelanggan yang membatalkan pesanan sebelum bayar." },
  { title: "SOP Compliance", value: "100%", target: "100%", status: "Optimal", iconName: "CheckCircle2", description: "Kepatuhan staf terhadap Standar Operasional Prosedur." },
];

export const v1Incidents = [
  { id: "INC-001", waktu: "11 Ags 2026 10:45", kategori: "Teknologi", deskripsi: "Sync POS Terminal 3 ke Cloud lambat (>3s)", status: "In Progress", kategoriColor: "bg-blue-50 text-blue-700 border-blue-200", statusColor: "bg-amber-50 text-amber-700 border-amber-200" },
  { id: "INC-002", waktu: "11 Ags 2026 09:12", kategori: "Layanan", deskripsi: "Komplain: Pesanan QR tidak masuk ke Kitchen Display", status: "Resolved", kategoriColor: "bg-purple-50 text-purple-700 border-purple-200", statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { id: "INC-003", waktu: "11 Ags 2026 08:30", kategori: "Operasional", deskripsi: "Stok bahan baku 'Ayam Katsu' menipis di sistem", status: "Pending", kategoriColor: "bg-orange-50 text-orange-700 border-orange-200", statusColor: "bg-rose-50 text-rose-700 border-rose-200" }
];
