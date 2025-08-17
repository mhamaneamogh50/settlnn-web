import { client } from '../lib/sanity'

async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    mainImage{
      asset->{url}
    }
  }`)
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {/* Coming Soon Hero */}
      <section className="flex flex-col items-center justify-center py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Settlnn</h1>
        <p className="text-lg text-gray-600">Coming Soon 🚀</p>
      </section>

      {/* Blog Section */}
      <section className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <a
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="rounded-xl mb-3"
              />
            )}
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
          </a>
        ))}
      </section>
    </main>
  )
}
