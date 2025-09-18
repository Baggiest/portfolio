type Module = {
  default: unknown
  metadata: unknown
}

export const load = async ({ params }) => {
  const modules = import.meta.glob('/src/posts/*.{md,mdx}', { eager: true }) as Record<string, Module>

  const match = Object.entries(modules).find(([path]) => {
    const slug = path.split('/').pop()!.replace(/\.(md|mdx)$/i, '')
    return slug === params.slug
  })

  if (!match) throw new Error('Not found')

  const [, mod] = match

  return {
    content: mod.default,
    meta: mod.metadata
  }
}


