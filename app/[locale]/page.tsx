import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Radio, Zap, Cpu, Antenna, MapPin, Signal } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { getSortedPostsData, type PostMetadata } from "@/lib/posts"
import { getTranslation } from "@/lib/i18n"

export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params
  const t = (key: string) => getTranslation(locale, key)

  const blogPosts: PostMetadata[] = await getSortedPostsData(locale)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
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
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-6">
                <Link href={`/${locale}`} className="text-amber-400 hover:text-amber-500 transition-colors font-mono">
                  {t("home")}
                </Link>
                <Link
                  href={`/${locale}/qsl`}
                  className="text-amber-400 hover:text-amber-500 transition-colors font-mono"
                >
                  {t("qsl")}
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="text-amber-400 hover:text-amber-500 transition-colors font-mono"
                >
                  {t("about")}
                </Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
        <div className="container mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4 text-amber-500">
                <Antenna className="h-8 w-8 animate-pulse" />
                <Zap className="h-6 w-6" />
                <Cpu className="h-8 w-8 animate-pulse" />
              </div>
            </div>
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
                <Radio className="h-4 w-4 text-amber-500" />
                <span className="text-amber-500 font-mono font-bold text-lg">UB4HUW</span>
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
              <span className="text-amber-500">{t("radio")}</span>
              <span className="text-amber-400">{t("station")}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-mono">{t("personalBlog")}</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-mono mb-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span>SDR & DSP</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span>Arduino & {t("microcontrollers")}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span>
                  {t("antennas")} & {t("modeling")}
                </span>
              </div>
            </div>

            {/* Station Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-sm font-mono text-muted-foreground">{t("locator")}</div>
                <div className="text-lg font-mono font-bold text-amber-500">KO85xx</div>
              </div>
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Signal className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-sm font-mono text-muted-foreground">{t("status")}</div>
                <div className="text-lg font-mono font-bold text-green-500">{t("qrv")}</div>
              </div>
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Radio className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-sm font-mono text-muted-foreground">{t("modes")}</div>
                <div className="text-lg font-mono font-bold text-amber-500">CW/SSB/FT8</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="flex items-center space-x-2 mb-8">
              <Zap className="h-5 w-5 text-amber-500" />
              <h3 className="text-xl font-bold text-amber-500 font-mono">{t("recommended")}</h3>
            </div>
            <Card className="bg-card border-border hover:border-amber-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-amber-500 text-amber-500 font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl text-amber-500 font-mono hover:text-amber-400 transition-colors">
                  <Link href={`/${locale}/posts/${featuredPost.id}`}>{featuredPost.title}</Link>
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {featuredPost.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground font-mono">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US")}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>
                        {featuredPost.readTime} {t("readTime")}
                      </span>
                    </div>
                  </div>
                  <Button asChild className="bg-amber-600 hover:bg-amber-500 text-white font-mono">
                    <Link href={`/${locale}/posts/${featuredPost.id}`}>{t("readMore")}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <Radio className="h-5 w-5 text-amber-500" />
            <h3 className="text-xl font-bold text-amber-500 font-mono">{t("latestPosts")}</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-card border-border hover:border-amber-500/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-amber-500 text-amber-500 font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-lg text-amber-500 font-mono hover:text-amber-400 transition-colors line-clamp-2">
                    <Link href={`/${locale}/posts/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US")}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>
                          {post.readTime} {t("readTime")}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/${locale}/posts/${post.id}`}
                      className="text-amber-500 hover:text-amber-400 transition-colors"
                    >
                      {t("readMore")} →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 py-8 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Station Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Radio className="h-6 w-6 text-amber-500" />
                <span className="text-amber-500 font-mono font-bold text-lg">UB4HUW</span>
              </div>
              <p className="text-muted-foreground text-sm font-mono mb-2">{t("footerStationInfo")}</p>
              <p className="text-muted-foreground text-xs font-mono">
                {t("footerLocator")}: KO85xx • {t("footerQrv")}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-amber-500 font-mono font-bold mb-4">{t("footerNavigation")}</h4>
              <div className="space-y-2 text-sm font-mono">
                <Link
                  href={`/${locale}`}
                  className="block text-muted-foreground hover:text-amber-500 transition-colors"
                >
                  {t("home")}
                </Link>
                <Link
                  href={`/${locale}/qsl`}
                  className="block text-muted-foreground hover:text-amber-500 transition-colors"
                >
                  {t("footerQSLCards")}
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="block text-muted-foreground hover:text-amber-500 transition-colors"
                >
                  {t("footerAboutStation")}
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-amber-500 font-mono font-bold mb-4">{t("footerContact")}</h4>
              <div className="space-y-2 text-sm font-mono text-muted-foreground">
                <p>QSL via eQSL.cc</p>
                <p>Email: ub4huw@qrz.ru</p>
                <p className="flex items-center gap-1">
                  <Signal className="h-3 w-3" />
                  73!
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-xs font-mono">{t("footerCopyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
