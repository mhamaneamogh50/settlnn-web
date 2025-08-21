import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative text-white py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #ff4b4b 0%, #ff7b7b 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">About Settlnn</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">Finding a place to stay as a student shouldn’t feel like a full-time job.</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* Intro */}
        <section className="bg-white rounded-2xl shadow p-8 md:p-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            That’s why we built Settlnn — a simple, transparent platform where students and parents can discover trusted PGs and hostels in Pune without the stress.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-white rounded-2xl shadow p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#ff4b4b' }}>Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To make student living hassle-free, transparent, and reliable by connecting students with verified accommodations — no hidden costs, no paid search limits, no confusion.
          </p>
        </section>

        {/* Why We Started */}
        <section className="bg-white rounded-2xl shadow p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#ff4b4b' }}>Why We Started</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="mt-3 inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#ff4b4b' }} /> Most property sites focus on flats, not students.</li>
            <li className="flex gap-3"><span className="mt-3 inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#ff4b4b' }} /> Free searches often get blocked by “credits” on other portals.</li>
            <li className="flex gap-3"><span className="mt-3 inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#ff4b4b' }} /> PG and hostel info is scattered — reviews, photos, amenities are hard to verify.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">We decided to solve these pain points with a single, dedicated platform for student housing.</p>
        </section>

        {/* What Makes Us Different */}
        <section className="bg-white rounded-2xl shadow p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#ff4b4b' }}>What Makes Us Different</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900">100% student housing focus</h3>
                <p className="text-gray-600 text-sm">Only PGs, hostels, and student accommodations.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Free to search, forever</h3>
                <p className="text-gray-600 text-sm">No paywalls or credit limits.</p>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900">Verified listings</h3>
                <p className="text-gray-600 text-sm">Every stay is reviewed before going live.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Smart filters & real images</h3>
                <p className="text-gray-600 text-sm">So you know what to expect before you visit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="bg-white rounded-2xl shadow p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#ff4b4b' }}>Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To become India’s most trusted student housing platform, starting with Pune — and then expanding to every major college city.
          </p>
        </section>

        {/* Join Us */}
        <section className="bg-white rounded-2xl shadow p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#ff4b4b' }}>Join Us on This Journey</h2>
          <p className="text-lg text-gray-700 mb-2">Settlnn is still growing, but our goal is clear:</p>
          <p className="text-2xl font-bold text-gray-900 mb-8">Help students settle in, stress-free.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@settlnn.com" className="px-6 py-3 rounded-lg font-semibold text-white transition" style={{ backgroundColor: '#ff4b4b' }}>
              Get in Touch
            </a>
            <Link href="/" className="px-6 py-3 rounded-lg font-semibold border-2 transition hover:bg-gray-50" style={{ borderColor: '#ff4b4b', color: '#ff4b4b' }}>
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
