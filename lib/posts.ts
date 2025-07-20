import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "posts")

export type PostMetadata = {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  featured?: boolean
  locale: string
}

export type PostContent = {
  metadata: PostMetadata
  content: string
}

export async function getSortedPostsData(locale: string): Promise<PostMetadata[]> {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(`.${locale}.mdx`))
    .map((fileName) => {
      const id = fileName.replace(/\.(ru|en)\.mdx$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const matterResult = matter(fileContents)

      return {
        id,
        locale,
        ...(matterResult.data as Omit<PostMetadata, "id" | "locale">),
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getAllPostSlugs(locales: string[]) {
  const fileNames = fs.readdirSync(postsDirectory)
  const paths: { params: { locale: string; slug: string } }[] = []

  for (const locale of locales) {
    fileNames
      .filter((fileName) => fileName.endsWith(`.${locale}.mdx`))
      .forEach((fileName) => {
        paths.push({
          params: {
            locale,
            slug: fileName.replace(/\.(ru|en)\.mdx$/, ""),
          },
        })
      })
  }
  return paths
}

export async function getPostData(locale: string, slug: string): Promise<PostContent> {
  const fullPath = path.join(postsDirectory, `${slug}.${locale}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const matterResult = matter(fileContents)

  return {
    metadata: {
      id: slug,
      locale,
      ...(matterResult.data as Omit<PostMetadata, "id" | "locale">),
    },
    content: matterResult.content,
  }
}
