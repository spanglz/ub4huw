import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, Radio, Signal } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { MDXContent } from "@/components/mdx-content"
import { getAllPostSlugs, getPostData } from "@/lib/posts"
import { i18n, getTranslation } from "@/lib/i18n"

interface PageProps {
  params: {
    locale: string
    slug: string
  }
}

export async function generateStaticParams() {
  return getAllPostSlugs(i18n.locales)
}

export default async function PostPage({ params }: PageProps) {
  const { locale, slug } = params
  const t = (key: string) => getTranslation(locale, key)

  let post
  try {
    post = await getPostData(locale, slug)
  } catch (error) {
    console.error(`Error fetching post ${slug} for locale ${locale}:`, error)
    // If post not found, return 404
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-500 font-mono mb-4">404</h1>
          <p className="text-muted-foreground mb-8">{t("notFound")}</p>
          <Button asChild className="bg-amber-600 hover:bg-amber-500 text-white font-mono">
            <Link href={`/${locale}`}>
              ← {t("back")} {t("home")}
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="flex items-center space-x-3">
              <div className="relative">
                <Radio className="h-8 w-8 text-amber-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-500 font-mono">UB4HUW.RU</h1>
                <p className="text-xs text-amber-400 font-mono flex items-center gap-1">
                  <Signal className="h-3 w-3" />
                  {t("radioAmateurBlog")}
                </p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button
                asChild
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-mono bg-transparent"
              >
                <Link href={`/${locale}`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t("back")}
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.metadata.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-amber-500 text-amber-500 font-mono">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-amber-500 font-mono mb-6 leading-tight">
              {post.metadata.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">{post.metadata.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-muted-foreground font-mono">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.metadata.date).toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>
                    {post.metadata.readTime} {t("readTime")}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-amber-500 font-mono text-sm">
                <Radio className="h-4 w-4" />
                <span>UB4HUW</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-amber max-w-none">
            <MDXContent content={post.content} />
          </div>
        </div>
      </article>
    </div>
  )
}
