import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { i18n } from "@/lib/i18n"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params
  const t = i18n.translations[locale as keyof typeof i18n.translations]

  return {
    title: `${t.callsign.toUpperCase()}.RU - ${t.radioAmateurBlog}`,
    description: t.personalBlog,
    keywords: "радиолюбитель, UB4HUW, SDR, антенны, Arduino, QRP, FT8, радиосвязь, радиотехника",
    authors: [{ name: "UB4HUW" }],
    creator: "UB4HUW",
    publisher: "UB4HUW",
    robots: "index, follow",
    openGraph: {
      title: `${t.callsign.toUpperCase()}.RU - ${t.radioAmateurBlog}`,
      description: t.personalBlog,
      url: `https://ub4huw.ru/${locale}`,
      siteName: `${t.callsign.toUpperCase()}.RU`,
      locale: locale === "ru" ? "ru_RU" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.callsign.toUpperCase()}.RU - ${t.radioAmateurBlog}`,
      description: t.personalBlog,
    },
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
