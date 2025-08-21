import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

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
        <link rel="icon" href="/favicon.ico?v=2" />
      </head>
      <body>
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold" style={{ color: '#ff4b4b' }}>
              <Image src="/favicon.ico" alt="Settlnn" width={28} height={28} />
              <span>Settlnn</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:opacity-80 transition" style={{ color: '#ff4b4b' }}>
                Home
              </Link>
              <Link href="/blog/settlnn-welcome" className="text-gray-700 hover:opacity-80 transition" style={{ color: '#ff4b4b' }}>
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:opacity-80 transition" style={{ color: '#ff4b4b' }}>
                About
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}