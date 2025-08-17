import { client } from '../../../lib/sanity'

async function getPost(slug) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      mainImage{asset->{url}}
    }`,
    { slug }
  )
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)

  if (!post) return <p>Not found</p>

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.mainImage?.asset?.url && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="rounded-xl mb-6"
        />
      )}
      <div className="prose">
        {post.body?.map(block =>
          block.children?.map(c => c.text).join(' ')
        ).join('\n')}
      </div>
    </article>
  )
}
