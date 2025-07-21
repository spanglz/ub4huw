import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Radio, Mail, Globe, Award, Calendar, ArrowLeft, Signal, Zap, Trophy, Star } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

const qslCards = [
  {
    id: 1,
    callsign: "JA1XYZ",
    country: "Japan",
    date: "2024-01-15",
    band: "20m",
    mode: "FT8",
    image: "/placeholder.svg?height=200&width=300",
    special: true,
    description: "Красивая карточка с видом на Фудзи",
  },
  {
    id: 2,
    callsign: "VK2ABC",
    country: "Australia",
    date: "2024-01-10",
    band: "40m",
    mode: "SSB",
    image: "/placeholder.svg?height=200&width=300",
    special: false,
    description: "Классическая австралийская QSL",
  },
  {
    id: 3,
    callsign: "W1DEF",
    country: "USA",
    date: "2024-01-08",
    band: "15m",
    mode: "CW",
    image: "/placeholder.svg?height=200&width=300",
    special: false,
    description: "QSL из штата Массачусетс",
  },
  {
    id: 4,
    callsign: "OH2GHI",
    country: "Finland",
    date: "2024-01-05",
    band: "80m",
    mode: "FT8",
    image: "/placeholder.svg?height=200&width=300",
    special: true,
    description: "Потрясающая карточка с северным сиянием",
  },
  {
    id: 5,
    callsign: "PY2JKL",
    country: "Brazil",
    date: "2023-12-28",
    band: "20m",
    mode: "SSB",
    image: "/placeholder.svg?height=200&width=300",
    special: false,
    description: "Яркая бразильская QSL",
  },
  {
    id: 6,
    callsign: "ZL1MNO",
    country: "New Zealand",
    date: "2023-12-20",
    band: "17m",
    mode: "FT4",
    image: "/placeholder.svg?height=200&width=300",
    special: true,
    description: "Редкая QSL из Новой Зеландии",
  },
]

const qslStats = {
  sent: 1247,
  received: 892,
  confirmed: 156,
  countries: 89,
  zones: 32,
  lotw: 734,
  eqsl: 445,
}

const awards = [
  { name: "DXCC Mixed", progress: 156, total: 340, percentage: 46 },
  { name: "WAS", progress: 47, total: 50, percentage: 94 },
  { name: "WAZ", progress: 32, total: 40, percentage: 80 },
  { name: "IOTA", progress: 23, total: 100, percentage: 23 },
]

export default async function QSLPage() {

  let qsoData = [];
  try {
    const response = await fetch('https://api.logradio.ru/ham/qso', {
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Authorization': 'Bearer IApd8NnbJk79hnAMM3HsLhyCA1IuOi0gE9ExccZSlnRzZDgkzQHePWRcMWREbovDoUOM8FUBG1Sg035_Mb8li-uN9nwq0Oww5GEsxxLobYdGYMfQpjYPmTYSj7-q62GeW2fkZ9CJvgplfjoOyQ6nDq2u0WexCFIXa0BFa3UxTUcRg9EehoRzbAa91YWBXUy1W1G5NTerOS8pzT9j2vASVxDlJPdFSBmrbkeQkqhAffhhXuZmqkZYPGMhUrk8HdMR',
        'Content-Type': 'application/json',
        'X-Application-Key': '9281234b-867a-4ae3-a36a-1d91c2248ce5',
      },
    });

    if (!response.ok) throw new Error('Ошибка при загрузке данных');
    qsoData = await response.json();
    console.log('Данные QSO получены успешно!');
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
  }

  const countCrossReferences = qsoData.filter(item => item.cross_reference_id !== null).length;
  const countSSB = qsoData.filter(item => item.mode === "SSB").length;
  const countFT8 = qsoData.filter(item => item.mode === "FT8").length;

  return (

      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <Radio className="h-8 w-8 text-amber-500"/>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse"/>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-amber-500 font-mono">UB4HUW.RU</h1>
                  <p className="text-xs text-amber-400 font-mono flex items-center gap-1">
                    <Signal className="h-3 w-3"/>
                    Радиолюбительский блог
                  </p>
                </div>
              </Link>
              <div className="flex items-center space-x-4">
                <Button
                    asChild
                    variant="outline"
                    className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-mono bg-transparent"
                >
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4 mr-2"/>
                    Назад
                  </Link>
                </Button>
                <ThemeToggle/>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div
                  className="flex items-center space-x-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
                <Mail className="h-5 w-5 text-amber-500"/>
                <span className="text-amber-500 font-mono font-bold">QSL КАРТОЧКИ</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-500 font-mono mb-4">QSL ОБМЕН</h1>
            <p className="text-xl text-muted-foreground font-mono">Подтверждение радиосвязей • 73!</p>
          </div>

          {/* QSL Policy */}
          <section className="mb-12">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-500 font-mono flex items-center gap-2">
                  <Globe className="h-6 w-6"/>
                  QSL ПОЛИТИКА
                </CardTitle>
                <CardDescription>Как обмениваться QSL карточками со станцией UB4HUW</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-amber-500 font-mono">📮 ОТПРАВКА QSL</h3>
                    <div className="space-y-2 text-sm font-mono">
                      <p>
                        <strong>Прямая почта:</strong> UB4HUW@qrz.ru
                      </p>
                      <p>
                        <strong>QSL Бюро:</strong> Через UA4 бюро
                      </p>
                      <p>
                        <strong>eQSL.cc:</strong> Автоматическое подтверждение
                      </p>
                      <p>
                        <strong>LoTW:</strong> Загружаю логи еженедельно
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-amber-500 font-mono">✅ ПОДТВЕРЖДЕНИЕ</h3>
                    <div className="space-y-2 text-sm font-mono">
                      <p>
                        <strong>100% QSL:</strong> На все полученные карточки
                      </p>
                      <p>
                        <strong>eQSL:</strong> Автоматически в течение 24 часов
                      </p>
                      <p>
                        <strong>LoTW:</strong> Еженедельные загрузки
                      </p>
                      <p>
                        <strong>Время ответа:</strong> 2-4 недели (прямая почта)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Statistics */}
          <section className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <Trophy className="h-5 w-5 text-amber-500"/>
              <h2 className="text-2xl font-bold text-amber-500 font-mono">СТАТИСТИКА QSO</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
              <Card className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-amber-500 font-mono">{qsoData.length}</div>
                  <div className="text-xs text-muted-foreground font-mono">Проведено</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-green-500 font-mono">{countCrossReferences}</div>
                  <div className="text-xs text-muted-foreground font-mono">Подтверждено</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-500 font-mono">{countSSB}</div>
                  <div className="text-xs text-muted-foreground font-mono">SSB</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-purple-500 font-mono">{countFT8}</div>
                  <div className="text-xs text-muted-foreground font-mono">FT8</div>
                </CardContent>
              </Card>
            </div>
          </section>


          {/* Statistics */}
          <section className="mb-12">
          {/*  <div className="flex items-center space-x-2 mb-6">*/}
          {/*    <Trophy className="h-5 w-5 text-amber-500"/>*/}
          {/*    <h2 className="text-2xl font-bold text-amber-500 font-mono">СТАТИСТИКА QSL</h2>*/}
          {/*  </div>*/}

          {/*  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">*/}
          {/*    <Card className="bg-card border-border text-center">*/}
          {/*      <CardContent className="p-4">*/}
          {/*        <div className="text-2xl font-bold text-amber-500 font-mono">{qslStats.sent}</div>*/}
          {/*        <div className="text-xs text-muted-foreground font-mono">Отправлено</div>*/}
          {/*      </CardContent>*/}
          {/*    </Card>*/}
          {/*    <Card className="bg-card border-border text-center">*/}
          {/*      <CardContent className="p-4">*/}
          {/*        <div className="text-2xl font-bold text-green-500 font-mono">{qslStats.received}</div>*/}
          {/*        <div className="text-xs text-muted-foreground font-mono">Получено</div>*/}
          {/*      </CardContent>*/}
          {/*    </Card>*/}
          {/*    <Card className="bg-card border-border text-center">*/}
          {/*      <CardContent className="p-4">*/}
          {/*        <div className="text-2xl font-bold text-blue-500 font-mono">{qslStats.confirmed}</div>*/}
          {/*        <div className="text-xs text-muted-foreground font-mono">Подтверждено</div>*/}
          {/*      </CardContent>*/}
          {/*    </Card>*/}
          {/*    <Card className="bg-card border-border text-center">*/}
          {/*      <CardContent className="p-4">*/}
          {/*        <div className="text-2xl font-bold text-purple-500 font-mono">{qslStats.countries}</div>*/}
          {/*        <div className="text-xs text-muted-foreground font-mono">Стран</div>*/}
          {/*      </CardContent>*/}
          {/*    </Card>*/}
          {/*    <Card className="bg-card border-border text-center">*/}
          {/*      <CardContent className="p-4">*/}
          {/*        <div className="text-2xl font-bold text-orange-500 font-mono">{qslStats.zones}</div>*/}
          {/*        <div className="text-xs text-muted-foreground font-mono">Зон</div>*/}
          {/*      </CardContent>*/}
          {/*    </Card>*/}
          {/*    <Card className="bg-card border-border text-center">*/}
          {/*      <CardContent className="p-4">*/}
          {/*        <div className="text-2xl font-bold text-cyan-500 font-mono">{qslStats.lotw}</div>*/}
          {/*        <div className="text-xs text-muted-foreground font-mono">LoTW</div>*/}
          {/*      </CardContent>*/}
          {/*    </Card>*/}
          {/*    <Card className="bg-card border-border text-center">*/}
          {/*      <CardContent className="p-4">*/}
          {/*        <div className="text-2xl font-bold text-pink-500 font-mono">{qslStats.eqsl}</div>*/}
          {/*        <div className="text-xs text-muted-foreground font-mono">eQSL</div>*/}
          {/*      </CardContent>*/}
          {/*    </Card>*/}
          {/*  </div>*/}

            {/* Awards Progress */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {awards.map((award) => (
                  <Card key={award.name} className="bg-card border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono font-bold text-amber-500">{award.name}</span>
                        <Award className="h-4 w-4 text-amber-500"/>
                      </div>
                      <div className="text-sm text-muted-foreground font-mono mb-2">
                        {award.progress} / {award.total}
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                            className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                            style={{width: `${award.percentage}%`}}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground font-mono mt-1">{award.percentage}%</div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </section>

          {/* QSL Gallery */}
          <section className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <Star className="h-5 w-5 text-amber-500"/>
              <h2 className="text-2xl font-bold text-amber-500 font-mono">ГАЛЕРЕЯ QSL</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qslCards.map((card) => (
                  <Card
                      key={card.id}
                      className="bg-card border-border hover:border-amber-500/50 transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                            src={card.image || "/placeholder.svg"}
                            alt={`QSL from ${card.callsign}`}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        {card.special && (
                            <Badge className="absolute top-2 right-2 bg-amber-500 text-black font-mono">
                              <Star className="h-3 w-3 mr-1"/>
                              Особенная
                            </Badge>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-amber-500 font-mono">{card.callsign}</h3>
                          <Badge variant="outline" className="border-amber-500 text-amber-500 font-mono text-xs">
                            {card.country}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{card.description}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                          <div className="flex items-center space-x-3">
                            <span>{card.band}</span>
                            <span>{card.mode}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3"/>
                            <span>{new Date(card.date).toLocaleDateString("ru-RU")}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </section>

          {/* My QSL Card */}
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-5 w-5 text-amber-500"/>
              <h2 className="text-2xl font-bold text-amber-500 font-mono">МОЯ QSL КАРТОЧКА</h2>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                        src="/placeholder.svg?height=300&width=450"
                        alt="UB4HUW QSL Card"
                        className="w-full rounded-lg border border-amber-500/20"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500 font-mono">ДИЗАЙН 2024</h3>
                    <div className="space-y-2 text-sm font-mono text-muted-foreground">
                      <p>
                        <strong>Позывной:</strong> UB4HUW
                      </p>
                      <p>
                        <strong>Локатор:</strong> KO85xx
                      </p>
                      <p>
                        <strong>QTH:</strong> Россия, Европейская часть
                      </p>
                      <p>
                        <strong>Дизайн:</strong> Киберпанк стиль с радиовышкой
                      </p>
                      <p>
                        <strong>Печать:</strong> Цифровая, глянцевая бумага 300г/м²
                      </p>
                      <p>
                        <strong>Размер:</strong> Стандартный 140×90 мм
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className="text-amber-500 font-mono text-sm">
                        💡 Карточка отражает мою страсть к радиотехнике и современным технологиям. Киберпанк элементы
                        символизируют будущее радиосвязи!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
  )
}
