// app/page.js

import { client } from '../lib/sanity'

// ✅ Fetch posts from Sanity
async function getPosts() {
  try {
    return await client.fetch(`*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      excerpt,
      mainImage{
        asset->{url}
      }
    }`)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ✅ Hero Section - Coming Soon */}
      <section className="relative text-white py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg, #ff4b4b 0%, #ff7b7b 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm">
            <span>Coming Soon</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Find it. Love it. Settlnn!
          </h1>
          <p className="text-lg md:text-xl opacity-95 mb-8 max-w-2xl mx-auto">
            We’re building a simple way to discover the best PGs and hostels in Pune.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@settlnn.com" className="px-6 py-3 rounded-lg font-semibold text-[#ff4b4b] bg-white hover:opacity-90 transition">
              Get Notified
            </a>
            <a href="https://settlnn.com" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg font-semibold border border-white/70 hover:bg-white/10 transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ✅ Blog Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Latest Articles
        </h2>

        {/* ✅ Grid for Posts */}
        {posts && posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <a
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >
                {post.mainImage?.asset?.url && (
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles yet</h3>
            <p className="text-gray-500">We're working on some great content. Check back soon!</p>
          </div>
        )}
      </section>
    </main>
  )
}
