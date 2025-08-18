export const metadata = {
  title: "Settlnn – Find PGs & Hostels Easily in Pune",
  description: "Settlnn helps students and professionals discover the best PGs and hostels in Pune. Simple, free, and hassle-free.",
  keywords: ["PG in Pune", "Hostel in Pune", "Student Stay Pune", "Find PG Settlnn","Best PG","PG vs Hostel", "PG", "Hostel"],
  openGraph: {
    title: "Settlnn – Find PGs & Hostels Easily in Pune",
    description: "Settlnn helps students and professionals discover PGs & hostels in Pune.",
    url: "https://settlnn.com",
    siteName: "Settlnn",
    images: [
      {
        url: "https://settlnn.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
