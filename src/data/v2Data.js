export const branchData = {
  "nasional": {
    name: "Nasional",
    kpis: {
      "Operasional & SDM": [
        { title: "Avg Order Lead Time", value: "4.2 Menit", target: "< 5 Menit", status: "Optimal", iconName: "Clock", description: "Rata-rata waktu pemrosesan dari pemesanan hingga makanan siap (keseluruhan cabang)." },
        { title: "SOP Compliance Rate", value: "98.5%", target: "100%", status: "Warning", iconName: "CheckCircle2", description: "Kepatuhan staf terhadap Standar Operasional Prosedur." }
      ],
      "Layanan Pelanggan": [
        { title: "CSAT Score", value: "4.6 / 5.0", target: "> 4.5", status: "Optimal", iconName: "Smile", description: "Skor Kepuasan Pelanggan (Customer Satisfaction)." },
        { title: "Customer Effort Score", value: "88%", target: "> 85%", status: "Optimal", iconName: "ThumbsUp", description: "Tingkat kemudahan pelanggan dalam bertransaksi." },
        { title: "Cart Abandonment Rate", value: "3.2%", target: "< 5%", status: "Optimal", iconName: "ShoppingCart", description: "Persentase pelanggan yang membatalkan pesanan di tengah proses." }
      ],
      "Teknologi & Infrastruktur": [
        { title: "Order Error Rate - Kasir", value: "1.2%", target: "< 2%", status: "Optimal", iconName: "Terminal", description: "Kesalahan input / sistem error pada Frontend Kasir." },
        { title: "Order Error Rate - KDS", value: "0.8%", target: "< 2%", status: "Optimal", iconName: "Utensils", description: "Kegagalan sinkronisasi pesanan ke Kitchen Display System." },
        { title: "System Uptime", value: "99.8%", target: "> 99.5%", status: "Optimal", iconName: "Activity", description: "Ketersediaan layanan infrastruktur utama." },
        { title: "MTTR", value: "12 Menit", target: "< 15 Menit", status: "Optimal", iconName: "Wrench", description: "Mean Time To Recovery - rata-rata waktu pemulihan insiden." },
        { title: "Page Load Time", value: "1.8 Detik", target: "< 3 Detik", status: "Optimal", iconName: "Zap", description: "Rata-rata waktu muat UI aplikasi pengguna." },
        { title: "Payment Failure Rate", value: "0.5%", target: "< 1%", status: "Optimal", iconName: "CreditCard", description: "Tingkat kegagalan gateway pembayaran digital." },
        { title: "Network Failover Time", value: "45 Detik", target: "< 1 Menit", status: "Optimal", iconName: "Wifi", description: "Waktu peralihan dari jaringan utama ke jaringan cadangan." },
        { title: "Offline Data Sync Success", value: "100%", target: "100%", status: "Optimal", iconName: "RefreshCw", description: "Tingkat kesuksesan sinkronisasi data setelah mode offline." },
        { title: "Vendor SLA Compliance", value: "25 Menit", target: "< 30 Menit", status: "Optimal", iconName: "ShieldCheck", description: "Kepatuhan Service Level Agreement dari vendor infrastruktur." }
      ]
    },
    incidents: [
      { id: "INC-001", waktu: "11 Ags 2026 10:45", kategori: "Teknologi", deskripsi: "Sync POS Terminal 3 ke Cloud lambat (>3s) - Nasional Alert", status: "In Progress", kategoriColor: "bg-blue-50 text-blue-700 border-blue-200", statusColor: "bg-amber-50 text-amber-700 border-amber-200" },
      { id: "INC-002", waktu: "11 Ags 2026 09:12", kategori: "Layanan", deskripsi: "Fluktuasi koneksi payment gateway (Downtime 2 menit)", status: "Resolved", kategoriColor: "bg-purple-50 text-purple-700 border-purple-200", statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200" },
      { id: "INC-003", waktu: "11 Ags 2026 08:30", kategori: "Operasional", deskripsi: "Pelanggaran SOP: Keterlambatan open-store 5 menit di 2 cabang", status: "Pending", kategoriColor: "bg-orange-50 text-orange-700 border-orange-200", statusColor: "bg-rose-50 text-rose-700 border-rose-200" }
    ]
  },
  "scbd": {
    name: "SCBD",
    kpis: {
      "Operasional & SDM": [
        { title: "Avg Order Lead Time", value: "3.5 Menit", target: "< 5 Menit", status: "Optimal", iconName: "Clock", description: "Waktu tunggu sangat baik di SCBD." },
        { title: "SOP Compliance Rate", value: "100%", target: "100%", status: "Optimal", iconName: "CheckCircle2", description: "Kepatuhan penuh." }
      ],
      "Layanan Pelanggan": [
        { title: "CSAT Score", value: "4.8 / 5.0", target: "> 4.5", status: "Optimal", iconName: "Smile", description: "Tertinggi di antara cabang lain." },
        { title: "Customer Effort Score", value: "92%", target: "> 85%", status: "Optimal", iconName: "ThumbsUp", description: "Sangat mudah bertransaksi." },
        { title: "Cart Abandonment Rate", value: "2.1%", target: "< 5%", status: "Optimal", iconName: "ShoppingCart", description: "Rendah pembatalan." }
      ],
      "Teknologi & Infrastruktur": [
        { title: "Order Error Rate - Kasir", value: "0.2%", target: "< 2%", status: "Optimal", iconName: "Terminal", description: "Jarang terjadi error." },
        { title: "Order Error Rate - KDS", value: "0.1%", target: "< 2%", status: "Optimal", iconName: "Utensils", description: "KDS stabil." },
        { title: "System Uptime", value: "100%", target: "> 99.5%", status: "Optimal", iconName: "Activity", description: "Tidak ada downtime bulan ini." },
        { title: "MTTR", value: "5 Menit", target: "< 15 Menit", status: "Optimal", iconName: "Wrench", description: "Cepat ditangani teknisi on-site." },
        { title: "Page Load Time", value: "1.2 Detik", target: "< 3 Detik", status: "Optimal", iconName: "Zap", description: "Jaringan SCBD sangat cepat." },
        { title: "Payment Failure Rate", value: "0.1%", target: "< 1%", status: "Optimal", iconName: "CreditCard", description: "Hampir nihil kegagalan." },
        { title: "Network Failover Time", value: "20 Detik", target: "< 1 Menit", status: "Optimal", iconName: "Wifi", description: "Backup aktif." },
        { title: "Offline Data Sync Success", value: "100%", target: "100%", status: "Optimal", iconName: "RefreshCw", description: "Sempurna." },
        { title: "Vendor SLA Compliance", value: "15 Menit", target: "< 30 Menit", status: "Optimal", iconName: "ShieldCheck", description: "Cepat tanggap." }
      ]
    },
    incidents: [
      { id: "INC-SCBD-1", waktu: "11 Ags 2026 07:15", kategori: "Layanan", deskripsi: "Printer struk kehabisan kertas (resolved by staff)", status: "Resolved", kategoriColor: "bg-purple-50 text-purple-700 border-purple-200", statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200" }
    ]
  },
  "kemang": {
    name: "Kemang",
    kpis: {
      "Operasional & SDM": [
        { title: "Avg Order Lead Time", value: "5.8 Menit", target: "< 5 Menit", status: "Critical", iconName: "Clock", description: "Lead time melebihi batas (Traffic padat siang hari)." },
        { title: "SOP Compliance Rate", value: "95%", target: "100%", status: "Warning", iconName: "CheckCircle2", description: "Ada 2 insiden pelanggaran SOP ringan." }
      ],
      "Layanan Pelanggan": [
        { title: "CSAT Score", value: "4.2 / 5.0", target: "> 4.5", status: "Warning", iconName: "Smile", description: "Keluhan akibat antrean panjang." },
        { title: "Customer Effort Score", value: "80%", target: "> 85%", status: "Warning", iconName: "ThumbsUp", description: "Pelanggan merasa sedikit kesulitan." },
        { title: "Cart Abandonment Rate", value: "6.5%", target: "< 5%", status: "Critical", iconName: "ShoppingCart", description: "Tinggi karena app lambat di peak hour." }
      ],
      "Teknologi & Infrastruktur": [
        { title: "Order Error Rate - Kasir", value: "2.5%", target: "< 2%", status: "Warning", iconName: "Terminal", description: "Tablet kasir merespon lambat." },
        { title: "Order Error Rate - KDS", value: "1.2%", target: "< 2%", status: "Optimal", iconName: "Utensils", description: "Sinkronisasi stabil." },
        { title: "System Uptime", value: "99.1%", target: "> 99.5%", status: "Warning", iconName: "Activity", description: "Ada gangguan internet ISP utama." },
        { title: "MTTR", value: "18 Menit", target: "< 15 Menit", status: "Warning", iconName: "Wrench", description: "Teknisi terlambat datang." },
        { title: "Page Load Time", value: "4.5 Detik", target: "< 3 Detik", status: "Critical", iconName: "Zap", description: "Wifi publik Kemang melambat." },
        { title: "Payment Failure Rate", value: "1.5%", target: "< 1%", status: "Warning", iconName: "CreditCard", description: "EDC timeout beberapa kali." },
        { title: "Network Failover Time", value: "80 Detik", target: "< 1 Menit", status: "Critical", iconName: "Wifi", description: "Transisi ke 4G gagal otomatis." },
        { title: "Offline Data Sync Success", value: "98%", target: "100%", status: "Warning", iconName: "RefreshCw", description: "Beberapa data pending sync." },
        { title: "Vendor SLA Compliance", value: "45 Menit", target: "< 30 Menit", status: "Critical", iconName: "ShieldCheck", description: "Teknisi ISP telat." }
      ]
    },
    incidents: [
      { id: "INC-KMG-1", waktu: "11 Ags 2026 12:30", kategori: "Teknologi", deskripsi: "Gangguan koneksi ISP Indihome", status: "In Progress", kategoriColor: "bg-blue-50 text-blue-700 border-blue-200", statusColor: "bg-amber-50 text-amber-700 border-amber-200" },
      { id: "INC-KMG-2", waktu: "11 Ags 2026 12:45", kategori: "Operasional", deskripsi: "Antrean meluap hingga luar pintu", status: "Pending", kategoriColor: "bg-orange-50 text-orange-700 border-orange-200", statusColor: "bg-rose-50 text-rose-700 border-rose-200" }
    ]
  },
  "sudirman": {
    name: "Sudirman",
    kpis: {
      "Operasional & SDM": [
        { title: "Avg Order Lead Time", value: "4.5 Menit", target: "< 5 Menit", status: "Optimal", iconName: "Clock", description: "Waktu tunggu standar." },
        { title: "SOP Compliance Rate", value: "99%", target: "100%", status: "Warning", iconName: "CheckCircle2", description: "Hanya 1 miss laporan." }
      ],
      "Layanan Pelanggan": [
        { title: "CSAT Score", value: "4.6 / 5.0", target: "> 4.5", status: "Optimal", iconName: "Smile", description: "Bagus." },
        { title: "Customer Effort Score", value: "87%", target: "> 85%", status: "Optimal", iconName: "ThumbsUp", description: "Lancar." },
        { title: "Cart Abandonment Rate", value: "3.5%", target: "< 5%", status: "Optimal", iconName: "ShoppingCart", description: "Normal." }
      ],
      "Teknologi & Infrastruktur": [
        { title: "Order Error Rate - Kasir", value: "1.0%", target: "< 2%", status: "Optimal", iconName: "Terminal", description: "Normal." },
        { title: "Order Error Rate - KDS", value: "1.1%", target: "< 2%", status: "Optimal", iconName: "Utensils", description: "Normal." },
        { title: "System Uptime", value: "99.9%", target: "> 99.5%", status: "Optimal", iconName: "Activity", description: "Normal." },
        { title: "MTTR", value: "10 Menit", target: "< 15 Menit", status: "Optimal", iconName: "Wrench", description: "Normal." },
        { title: "Page Load Time", value: "2.1 Detik", target: "< 3 Detik", status: "Optimal", iconName: "Zap", description: "Normal." },
        { title: "Payment Failure Rate", value: "0.3%", target: "< 1%", status: "Optimal", iconName: "CreditCard", description: "Normal." },
        { title: "Network Failover Time", value: "30 Detik", target: "< 1 Menit", status: "Optimal", iconName: "Wifi", description: "Normal." },
        { title: "Offline Data Sync Success", value: "100%", target: "100%", status: "Optimal", iconName: "RefreshCw", description: "Normal." },
        { title: "Vendor SLA Compliance", value: "20 Menit", target: "< 30 Menit", status: "Optimal", iconName: "ShieldCheck", description: "Normal." }
      ]
    },
    incidents: []
  },
  "tebet": {
    name: "Tebet",
    kpis: {
      "Operasional & SDM": [
        { title: "Avg Order Lead Time", value: "5.1 Menit", target: "< 5 Menit", status: "Warning", iconName: "Clock", description: "Sedikit lambat." },
        { title: "SOP Compliance Rate", value: "96%", target: "100%", status: "Warning", iconName: "CheckCircle2", description: "Beberapa prosedur closing dilewati." }
      ],
      "Layanan Pelanggan": [
        { title: "CSAT Score", value: "4.4 / 5.0", target: "> 4.5", status: "Warning", iconName: "Smile", description: "Kebersihan meja disorot pelanggan." },
        { title: "Customer Effort Score", value: "82%", target: "> 85%", status: "Warning", iconName: "ThumbsUp", description: "QR code luntur di beberapa meja." },
        { title: "Cart Abandonment Rate", value: "4.8%", target: "< 5%", status: "Optimal", iconName: "ShoppingCart", description: "Masih batas aman." }
      ],
      "Teknologi & Infrastruktur": [
        { title: "Order Error Rate - Kasir", value: "1.8%", target: "< 2%", status: "Warning", iconName: "Terminal", description: "Sering double click kasir." },
        { title: "Order Error Rate - KDS", value: "0.5%", target: "< 2%", status: "Optimal", iconName: "Utensils", description: "Stabil." },
        { title: "System Uptime", value: "99.6%", target: "> 99.5%", status: "Optimal", iconName: "Activity", description: "Aman." },
        { title: "MTTR", value: "14 Menit", target: "< 15 Menit", status: "Warning", iconName: "Wrench", description: "Mendekati limit." },
        { title: "Page Load Time", value: "2.8 Detik", target: "< 3 Detik", status: "Warning", iconName: "Zap", description: "Mendekati batas lambat." },
        { title: "Payment Failure Rate", value: "0.8%", target: "< 1%", status: "Warning", iconName: "CreditCard", description: "Gagal QRIS beberapa kali." },
        { title: "Network Failover Time", value: "55 Detik", target: "< 1 Menit", status: "Warning", iconName: "Wifi", description: "Router secondary lambat merespon." },
        { title: "Offline Data Sync Success", value: "100%", target: "100%", status: "Optimal", iconName: "RefreshCw", description: "Aman." },
        { title: "Vendor SLA Compliance", value: "28 Menit", target: "< 30 Menit", status: "Warning", iconName: "ShieldCheck", description: "Nyaris melanggar SLA." }
      ]
    },
    incidents: [
       { id: "INC-TBT-1", waktu: "11 Ags 2026 14:20", kategori: "Operasional", deskripsi: "Stock daging ayam habis sebelum sore", status: "Resolved", kategoriColor: "bg-orange-50 text-orange-700 border-orange-200", statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200" }
    ]
  }
};

export const branchesList = [
  { slug: "nasional", name: "Nasional" },
  { slug: "scbd", name: "SCBD" },
  { slug: "kemang", name: "Kemang" },
  { slug: "sudirman", name: "Sudirman" },
  { slug: "tebet", name: "Tebet" }
];
