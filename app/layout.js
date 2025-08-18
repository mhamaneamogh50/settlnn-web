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
      <head>
        {/* ✅ SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Settlnn helps students and professionals find PGs and hostels easily." />
        <meta name="keywords" content="PG in Pune, Hostel in Pune, Student housing, Settlnn" />
        <meta name="author" content="Settlnn" />

    

        {/* ✅ Social Sharing / Open Graph */}
        <meta property="og:title" content="Settlnn - Find it Love it, Settlnn! " />
        <meta property="og:description" content="Settlnn helps students and professionals find PGs and hostels easily , and free of coast also helps property owners to attract and grow ther business " />
        <meta property="og:url" content="https://settlnn.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://settlnn.com/og-image.png" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}