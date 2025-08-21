import { client } from '../../../lib/sanity'
import Link from 'next/link'

async function getPost(slug) {
  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        title,
        body,
        mainImage{asset->{url}},
        publishedAt,
        excerpt
      }`,
      { slug }
    )
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/" className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white transition" style={{ backgroundColor: '#ff4b4b' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition mb-4">
              ← Back to Blog
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          )}
          
          {post.publishedAt && (
            <div className="text-sm text-gray-500">
              Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          {/* Featured Image */}
          {post.mainImage?.asset?.url && (
            <div className="mb-8">
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl"
              />
            </div>
          )}

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            {post.body?.map((block, index) => {
              if (block._type === 'block') {
                return (
                  <div key={index} className="mb-6">
                    {block.children?.map((child, childIndex) => (
                      <span key={childIndex} className={child.marks?.includes('strong') ? 'font-bold' : ''}>
                        {child.text}
                      </span>
                    ))}
                  </div>
                )
              }
              return null
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Found this helpful?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:hello@settlnn.com" className="px-6 py-3 rounded-lg font-semibold text-white transition" style={{ backgroundColor: '#ff4b4b' }}>
                  Get in Touch
                </a>
                <Link href="/" className="px-6 py-3 rounded-lg font-semibold border-2 transition hover:bg-gray-50" style={{ borderColor: '#ff4b4b', color: '#ff4b4b' }}>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
