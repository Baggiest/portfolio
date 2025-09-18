type Module = {
  // frontmatter from md/mdx
  metadata: any
}

export const load = async () => {
  const modules = import.meta.glob('/src/posts/*.{md,mdx}', { eager: true }) as Record<string, Module>

  const posts = Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split('/').pop()!.replace(/\.(md|mdx)$/i, '')
      return { ...mod.metadata, slug }
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return { posts }
}


