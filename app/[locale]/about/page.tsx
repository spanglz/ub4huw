import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Radio, Antenna, Cpu, Zap, MapPin, ArrowLeft, Signal, Settings, Award, BookOpen, Wrench } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { getTranslation } from "@/lib/i18n"

const equipment = [
  {
    category_ru: "Трансиверы",
    category_en: "Transceivers",
    items: [
      {
        name: "Yaesu FT-991A",
        description_ru: "Основной трансивер HF/VHF/UHF",
        description_en: "Main HF/VHF/UHF transceiver",
        power: "100W",
      },
      {
        name: "Icom IC-7300",
        description_ru: "HF/50MHz с SDR приемником",
        description_en: "HF/50MHz with SDR receiver",
        power: "100W",
      },
      {
        name: "Yaesu FT-817ND",
        description_ru: "Портативный QRP трансивер",
        description_en: "Portable QRP transceiver",
        power: "5W",
      },
    ],
  },
  {
    category_ru: "Антенны",
    category_en: "Antennas",
    items: [
      {
        name: "Yagi 3el 20m",
        description_ru: "Направленная антенна на 14 МГц",
        description_en: "Directional antenna for 14 MHz",
        gain: "8 dBi",
      },
      {
        name: "Dipole 40m",
        description_ru: "Инвертед V на 7 МГц",
        description_en: "Inverted V for 7 MHz",
        gain: "2.1 dBi",
      },
      {
        name: "Vertical 80m",
        description_ru: "Четвертьволновый вертикал",
        description_en: "Quarter-wave vertical",
        gain: "0 dBi",
      },
      {
        name: "J-Pole 2m/70cm",
        description_ru: "Двухдиапазонная VHF/UHF",
        description_en: "Dual-band VHF/UHF",
        gain: "3 dBi",
      },
    ],
  },
  {
    category_ru: "Дополнительное оборудование",
    category_en: "Additional Equipment",
    items: [
      {
        name: "MFJ-993B",
        description_ru: "Автоматический антенный тюнер",
        description_en: "Automatic antenna tuner",
        swr: "1.5:1",
      },
      {
        name: "RTL-SDR v3",
        description_ru: "SDR приемник для мониторинга",
        description_en: "SDR receiver for monitoring",
        range: "24MHz-1.7GHz",
      },
      {
        name: "Rigol DS1054Z",
        description_ru: "Цифровой осциллограф",
        description_en: "Digital oscilloscope",
        bandwidth: "50MHz",
      },
      {
        name: "Arduino Nano",
        description_ru: "Для самодельных проектов",
        description_en: "For DIY projects",
        freq: "16MHz",
      },
    ],
  },
]

const achievements = [
  { name: "DXCC Mixed", count: 156, description_ru: "Подтверждено стран", description_en: "Countries Confirmed" },
  { name: "WAS", count: 47, description_ru: "Штатов США", description_en: "US States" },
  { name: "WAZ", count: 32, description_ru: "CQ зон", description_en: "CQ Zones" },
  { name: "IOTA", count: 23, description_ru: "Островов", description_en: "Islands" },
  { name: "Contest", count: 15, description_ru: "Участий в соревнованиях", description_en: "Contest Participations" },
  { name: "QSO", count: 2847, description_ru: "Всего радиосвязей", description_en: "Total QSOs" },
]

const interests_ru = [
  "SDR и цифровая обработка сигналов",
  "Конструирование антенн и моделирование",
  "Arduino и микроконтроллеры в радиотехнике",
  "QRP операции и портативная работа",
  "Цифровые виды связи (FT8, FT4, PSK31)",
  "Участие в радиолюбительских соревнованиях",
  "EME (связь через Луну) эксперименты",
  "Радиоастрономия и прием метеоспутников",
]

const interests_en = [
  "SDR and Digital Signal Processing",
  "Antenna Design and Modeling",
  "Arduino and Microcontrollers in Radio",
  "QRP Operations and Portable Work",
  "Digital Modes (FT8, FT4, PSK31)",
  "Amateur Radio Contesting",
  "EME (Earth-Moon-Earth) Experiments",
  "Radio Astronomy and Weather Satellite Reception",
]

export default function AboutPage({ params }: { params: { locale: string } }) {
  const { locale } = params
  const t = (key: string) => getTranslation(locale, key)
  const currentInterests = locale === "ru" ? interests_ru : interests_en

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

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <Radio className="h-5 w-5 text-amber-500" />
              <span className="text-amber-500 font-mono font-bold">{t("about")}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-500 font-mono mb-4">UB4HUW</h1>
          <p className="text-xl text-muted-foreground font-mono">{t("radioStation")} • KO85xx • 73!</p>
        </div>

        {/* Station Info */}
        <section className="mb-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-500 font-mono flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                {t("stationInfo")}
              </CardTitle>
              <CardDescription>
                {locale === "ru"
                  ? "Основные данные радиолюбительской станции UB4HUW"
                  : "Key data of UB4HUW amateur radio station"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-amber-500 font-mono">📍 {t("location")}</h3>
                  <div className="space-y-2 text-sm font-mono">
                    <p>
                      <strong>{t("callsign")}:</strong> UB4HUW
                    </p>
                    <p>
                      <strong>{t("locator")}:</strong> KO85xx
                    </p>
                    <p>
                      <strong>{t("qth")}:</strong>{" "}
                      {locale === "ru" ? "Россия, Европейская часть" : "Russia, European part"}
                    </p>
                    <p>
                      <strong>{locale === "ru" ? "Высота н.у.м." : "Altitude"}:</strong> 180{" "}
                      {locale === "ru" ? "метров" : "meters"}
                    </p>
                    <p>
                      <strong>{locale === "ru" ? "Часовой пояс" : "Timezone"}:</strong> UTC+3 (MSK)
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-amber-500 font-mono">📻 {t("operation")}</h3>
                  <div className="space-y-2 text-sm font-mono">
                    <p>
                      <strong>{t("license")}:</strong> {locale === "ru" ? "1-я категория" : "1st Category"}
                    </p>
                    <p>
                      <strong>{t("yearReceived")}:</strong> 2018
                    </p>
                    <p>
                      <strong>{t("bands")}:</strong> HF, VHF, UHF
                    </p>
                    <p>
                      <strong>{t("modes")}:</strong> CW, SSB, FT8, FT4
                    </p>
                    <p>
                      <strong>{t("power")}:</strong> {locale === "ru" ? "до 100W" : "up to 100W"}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-amber-500 font-mono">🏆 {t("achievements")}</h3>
                  <div className="space-y-2 text-sm font-mono">
                    <p>
                      <strong>{t("totalQSO")}:</strong> 2847 {locale === "ru" ? "связей" : "QSOs"}
                    </p>
                    <p>
                      <strong>{t("countries")}:</strong> 156 {locale === "ru" ? "подтверждено" : "confirmed"}
                    </p>
                    <p>
                      <strong>{t("zones")}:</strong> 32 CQ {locale === "ru" ? "зоны" : "zones"}
                    </p>
                    <p>
                      <strong>{t("diplomas")}:</strong> DXCC, WAS, WAZ
                    </p>
                    <p>
                      <strong>{t("contests")}:</strong> 15 {locale === "ru" ? "участий" : "participations"}
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
            <h2 className="text-2xl font-bold text-amber-500 font-mono">{t("equipment")}</h2>
          </div>

          <div className="space-y-6">
            {equipment.map((category) => (
              <Card
                key={locale === "ru" ? category.category_ru : category.category_en}
                className="bg-card border-border"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-amber-500 font-mono flex items-center gap-2">
                    {category.category_ru === "Трансиверы" && <Radio className="h-5 w-5" />}
                    {category.category_ru === "Антенны" && <Antenna className="h-5 w-5" />}
                    {category.category_ru === "Дополнительное оборудование" && <Cpu className="h-5 w-5" />}
                    {locale === "ru" ? category.category_ru : category.category_en}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, index) => (
                      <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border">
                        <h4 className="font-bold text-amber-500 font-mono mb-2">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {locale === "ru" ? item.description_ru : item.description_en}
                        </p>
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
                              {locale === "ru" ? "КСВ" : "SWR"} {item.swr}
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
            <h2 className="text-2xl font-bold text-amber-500 font-mono">{t("achievements")}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((achievement) => (
              <Card key={achievement.name} className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <div className="text-3xl font-bold text-amber-500 font-mono mb-2">{achievement.count}</div>
                  <div className="text-sm font-bold text-amber-400 font-mono mb-1">{achievement.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {locale === "ru" ? achievement.description_ru : achievement.description_en}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="h-5 w-5 text-amber-500" />
            <h2 className="text-2xl font-bold text-amber-500 font-mono">{t("interests")}</h2>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentInterests.map((interest, index) => (
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
                  {t("contactMe")}
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
                    <strong>LoTW:</strong> {locale === "ru" ? "Активен" : "Active"}
                  </p>
                  <p>
                    <strong>Telegram:</strong> @ub4huw_radio
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-amber-500 font-mono text-sm">🎯 {t("alwaysGlad")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-amber-500 font-mono flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  {t("stationPhilosophy")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground">
                  {locale === "ru"
                    ? "Радиолюбительство для меня - это не просто хобби, а способ познания мира через радиоволны. Каждое QSO - это мост между людьми, культурами и технологиями."
                    : "Amateur radio for me is not just a hobby, but a way to explore the world through radio waves. Each QSO is a bridge between people, cultures, and technologies."}
                </p>
                <p className="text-sm font-mono text-muted-foreground">
                  {locale === "ru"
                    ? "Особенно увлекают современные цифровые виды связи и SDR технологии, которые открывают новые горизонты в радиосвязи и позволяют экспериментировать с сигналами."
                    : "I am particularly fascinated by modern digital communication modes and SDR technologies, which open new horizons in radio communication and allow for signal experimentation."}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-amber-500 font-mono text-sm font-bold">"{t("radioWavesNoBorders")}" - 73!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
