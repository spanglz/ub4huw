import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Radio, Antenna, Cpu, Zap, MapPin, ArrowLeft, Signal, Settings, Award, BookOpen, Wrench } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

const equipment = [
  {
    category: "Трансиверы",
    items: [
      { name: "Yaesu FT-991A", description: "Основной трансивер HF/VHF/UHF", power: "100W" },
      { name: "Icom IC-7300", description: "HF/50MHz с SDR приемником", power: "100W" },
      { name: "Yaesu FT-817ND", description: "Портативный QRP трансивер", power: "5W" },
    ],
  },
  {
    category: "Антенны",
    items: [
      { name: "Yagi 3el 20m", description: "Направленная антенна на 14 МГц", gain: "8 dBi" },
      { name: "Dipole 40m", description: "Инвертед V на 7 МГц", gain: "2.1 dBi" },
      { name: "Vertical 80m", description: "Четвертьволновый вертикал", gain: "0 dBi" },
      { name: "J-Pole 2m/70cm", description: "Двухдиапазонная VHF/UHF", gain: "3 dBi" },
    ],
  },
  {
    category: "Дополнительное оборудование",
    items: [
      { name: "MFJ-993B", description: "Автоматический антенный тюнер", swr: "1.5:1" },
      { name: "RTL-SDR v3", description: "SDR приемник для мониторинга", range: "24MHz-1.7GHz" },
      { name: "Rigol DS1054Z", description: "Цифровой осциллограф", bandwidth: "50MHz" },
      { name: "Arduino Nano", description: "Для самодельных проектов", freq: "16MHz" },
    ],
  },
]

const achievements = [
  { name: "DXCC Mixed", count: 156, description: "Подтверждено стран" },
  { name: "WAS", count: 47, description: "Штатов США" },
  { name: "WAZ", count: 32, description: "CQ зон" },
  { name: "IOTA", count: 23, description: "Островов" },
  { name: "Contest", count: 15, description: "Участий в соревнованиях" },
  { name: "QSO", count: 2847, description: "Всего радиосвязей" },
]

const interests = [
  "SDR и цифровая обработка сигналов",
  "Конструирование антенн и моделирование",
  "Arduino и микроконтроллеры в радиотехнике",
  "QRP операции и портативная работа",
  "Цифровые виды связи (FT8, FT4, PSK31)",
  "Участие в радиолюбительских соревнованиях",
  "EME (связь через Луну) эксперименты",
  "Радиоастрономия и прием метеоспутников",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
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
            </Link>
            <div className="flex items-center space-x-4">
              <Button
                asChild
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-mono bg-transparent"
              >
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Назад
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <Radio className="h-5 w-5 text-amber-500" />
              <span className="text-amber-500 font-mono font-bold">О СТАНЦИИ</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-500 font-mono mb-4">UB4HUW</h1>
          <p className="text-xl text-muted-foreground font-mono">Радиолюбительская станция • KO85xx • 73!</p>
        </div>

        {/* Station Info */}
        <section className="mb-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-500 font-mono flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                ИНФОРМАЦИЯ О СТАНЦИИ
              </CardTitle>
              <CardDescription>Основные данные радиолюбительской станции UB4HUW</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-amber-500 font-mono">📍 МЕСТОПОЛОЖЕНИЕ</h3>
                  <div className="space-y-2 text-sm font-mono">
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
                      <strong>Высота н.у.м.:</strong> 180 метров
                    </p>
                    <p>
                      <strong>Часовой пояс:</strong> UTC+3 (MSK)
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-amber-500 font-mono">📻 ОПЕРАЦИЯ</h3>
                  <div className="space-y-2 text-sm font-mono">
                    <p>
                      <strong>Лицензия:</strong> 1-я категория
                    </p>
                    <p>
                      <strong>Год получения:</strong> 2018
                    </p>
                    <p>
                      <strong>Диапазоны:</strong> HF, VHF, UHF
                    </p>
                    <p>
                      <strong>Режимы:</strong> CW, SSB, FT8, FT4
                    </p>
                    <p>
                      <strong>Мощность:</strong> до 100W
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-amber-500 font-mono">🏆 ДОСТИЖЕНИЯ</h3>
                  <div className="space-y-2 text-sm font-mono">
                    <p>
                      <strong>QSO:</strong> 2847 связей
                    </p>
                    <p>
                      <strong>Страны:</strong> 156 подтверждено
                    </p>
                    <p>
                      <strong>Зоны:</strong> 32 CQ зоны
                    </p>
                    <p>
                      <strong>Дипломы:</strong> DXCC, WAS, WAZ
                    </p>
                    <p>
                      <strong>Соревнования:</strong> 15 участий
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Equipment */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Settings className="h-5 w-5 text-amber-500" />
            <h2 className="text-2xl font-bold text-amber-500 font-mono">ОБОРУДОВАНИЕ СТАНЦИИ</h2>
          </div>

          <div className="space-y-6">
            {equipment.map((category) => (
              <Card key={category.category} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-500 font-mono flex items-center gap-2">
                    {category.category === "Трансиверы" && <Radio className="h-5 w-5" />}
                    {category.category === "Антенны" && <Antenna className="h-5 w-5" />}
                    {category.category === "Дополнительное оборудование" && <Cpu className="h-5 w-5" />}
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, index) => (
                      <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border">
                        <h4 className="font-bold text-amber-500 font-mono mb-2">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.power && (
                            <Badge variant="outline" className="border-green-500 text-green-500 font-mono text-xs">
                              {item.power}
                            </Badge>
                          )}
                          {item.gain && (
                            <Badge variant="outline" className="border-blue-500 text-blue-500 font-mono text-xs">
                              {item.gain}
                            </Badge>
                          )}
                          {item.swr && (
                            <Badge variant="outline" className="border-purple-500 text-purple-500 font-mono text-xs">
                              КСВ {item.swr}
                            </Badge>
                          )}
                          {item.range && (
                            <Badge variant="outline" className="border-orange-500 text-orange-500 font-mono text-xs">
                              {item.range}
                            </Badge>
                          )}
                          {item.bandwidth && (
                            <Badge variant="outline" className="border-cyan-500 text-cyan-500 font-mono text-xs">
                              {item.bandwidth}
                            </Badge>
                          )}
                          {item.freq && (
                            <Badge variant="outline" className="border-pink-500 text-pink-500 font-mono text-xs">
                              {item.freq}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Award className="h-5 w-5 text-amber-500" />
            <h2 className="text-2xl font-bold text-amber-500 font-mono">ДОСТИЖЕНИЯ</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((achievement) => (
              <Card key={achievement.name} className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <div className="text-3xl font-bold text-amber-500 font-mono mb-2">{achievement.count}</div>
                  <div className="text-sm font-bold text-amber-400 font-mono mb-1">{achievement.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{achievement.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="h-5 w-5 text-amber-500" />
            <h2 className="text-2xl font-bold text-amber-500 font-mono">ИНТЕРЕСЫ И НАПРАВЛЕНИЯ</h2>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <Zap className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span className="text-sm font-mono">{interest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact & Philosophy */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-amber-500 font-mono flex items-center gap-2">
                  <Signal className="h-5 w-5" />
                  СВЯЗЬ СО МНОЙ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm font-mono">
                  <p>
                    <strong>Email:</strong> ub4huw@qrz.ru
                  </p>
                  <p>
                    <strong>QRZ.com:</strong> UB4HUW
                  </p>
                  <p>
                    <strong>eQSL.cc:</strong> UB4HUW
                  </p>
                  <p>
                    <strong>LoTW:</strong> Активен
                  </p>
                  <p>
                    <strong>Telegram:</strong> @ub4huw_radio
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-amber-500 font-mono text-sm">🎯 Всегда рад новым QSO и обмену опытом!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-amber-500 font-mono flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  ФИЛОСОФИЯ СТАНЦИИ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground">
                  Радиолюбительство для меня - это не просто хобби, а способ познания мира через радиоволны. Каждое QSO
                  - это мост между людьми, культурами и технологиями.
                </p>
                <p className="text-sm font-mono text-muted-foreground">
                  Особенно увлекают современные цифровые виды связи и SDR технологии, которые открывают новые горизонты
                  в радиосвязи и позволяют экспериментировать с сигналами.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-amber-500 font-mono text-sm font-bold">"Радиоволны не знают границ" - 73!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
