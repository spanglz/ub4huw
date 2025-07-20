import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Radio, Zap, Cpu, Antenna, MapPin, Signal } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

const blogPosts = [
  {
    id: "sdr-basics",
    title: "Основы SDR: Программно-определяемое радио для начинающих",
    description:
      "Погружение в мир программно-определяемого радио. Рассматриваем RTL-SDR, HackRF и другие популярные устройства.",
    date: "2024-01-15",
    readTime: "8 мин",
    tags: ["SDR", "RTL-SDR", "Начинающим"],
    featured: true,
  },
  {
    id: "antenna-modeling",
    title: "Моделирование антенн в MMANA-GAL",
    description: "Практическое руководство по моделированию и оптимизации антенн с помощью программы MMANA-GAL.",
    date: "2024-01-10",
    readTime: "12 мин",
    tags: ["Антенны", "Моделирование", "MMANA-GAL"],
  },
  {
    id: "arduino-qrp",
    title: "QRP трансивер на Arduino и Si5351",
    description: "Создаем простой QRP трансивер используя Arduino и синтезатор частот Si5351. Схема, код и настройка.",
    date: "2024-01-05",
    readTime: "15 мин",
    tags: ["Arduino", "QRP", "Si5351", "Самоделки"],
  },
  {
    id: "digital-modes",
    title: "Цифровые виды связи: FT8, FT4 и PSK31",
    description: "Обзор популярных цифровых видов связи, настройка программного обеспечения и первые QSO.",
    date: "2023-12-28",
    readTime: "10 мин",
    tags: ["Цифровые виды", "FT8", "PSK31", "WSJT-X"],
  },
  {
    id: "rf-safety",
    title: "Безопасность при работе с РЧ излучением",
    description:
      "Важные аспекты безопасности при работе с радиочастотным излучением. SAR, расчет безопасных расстояний.",
    date: "2023-12-20",
    readTime: "6 мин",
    tags: ["Безопасность", "РЧ", "SAR"],
  },
]

export default function HomePage() {
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
                  Радиолюбительский блог
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-amber-400 hover:text-amber-500 transition-colors font-mono">
                  Главная
                </Link>
                <Link href="/qsl" className="text-amber-400 hover:text-amber-500 transition-colors font-mono">
                  QSL
                </Link>
                <Link href="/about" className="text-amber-400 hover:text-amber-500 transition-colors font-mono">
                  О станции
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
              <span className="text-amber-500">РАДИО</span>
              <span className="text-amber-400">СТАНЦИЯ</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-mono">
              Персональный блог радиолюбителя о технике, экспериментах и QSO
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-mono mb-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span>SDR & DSP</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span>Arduino & Микроконтроллеры</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span>Антенны & Моделирование</span>
              </div>
            </div>

            {/* Station Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-sm font-mono text-muted-foreground">Локатор</div>
                <div className="text-lg font-mono font-bold text-amber-500">KO85xx</div>
              </div>
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Signal className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-sm font-mono text-muted-foreground">Статус</div>
                <div className="text-lg font-mono font-bold text-green-500">QRV</div>
              </div>
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Radio className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-sm font-mono text-muted-foreground">Режимы</div>
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
              <h3 className="text-xl font-bold text-amber-500 font-mono">РЕКОМЕНДУЕМОЕ</h3>
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
                  <Link href={`/posts/${featuredPost.id}`}>{featuredPost.title}</Link>
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
                      <span>{new Date(featuredPost.date).toLocaleDateString("ru-RU")}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button asChild className="bg-amber-600 hover:bg-amber-500 text-white font-mono">
                    <Link href={`/posts/${featuredPost.id}`}>Читать →</Link>
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
            <h3 className="text-xl font-bold text-amber-500 font-mono">ПОСЛЕДНИЕ ЗАПИСИ</h3>
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
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
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
                        <span>{new Date(post.date).toLocaleDateString("ru-RU")}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/posts/${post.id}`} className="text-amber-500 hover:text-amber-400 transition-colors">
                      Читать →
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
              <p className="text-muted-foreground text-sm font-mono mb-2">Радиолюбительская станция</p>
              <p className="text-muted-foreground text-xs font-mono">Локатор: KO85xx • QRV на всех диапазонах</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-amber-500 font-mono font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm font-mono">
                <Link href="/" className="block text-muted-foreground hover:text-amber-500 transition-colors">
                  Главная
                </Link>
                <Link href="/qsl" className="block text-muted-foreground hover:text-amber-500 transition-colors">
                  QSL карточки
                </Link>
                <Link href="/about" className="block text-muted-foreground hover:text-amber-500 transition-colors">
                  О станции
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-amber-500 font-mono font-bold mb-4">Связь</h4>
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
            <p className="text-muted-foreground text-xs font-mono">
              © 2024 UB4HUW • Сделано с ❤️ для радиолюбительского сообщества • 73!
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
