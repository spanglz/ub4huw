import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UB4HUW.RU - Радиолюбительский блог",
  description:
    "Персональный блог радиолюбителя UB4HUW о технике, экспериментах и QSO. SDR, антенны, Arduino и цифровые виды связи.",
  keywords: "радиолюбитель, UB4HUW, SDR, антенны, Arduino, QRP, FT8, радиосвязь, радиотехника",
  authors: [{ name: "UB4HUW" }],
  creator: "UB4HUW",
  publisher: "UB4HUW",
  robots: "index, follow",
  openGraph: {
    title: "UB4HUW.RU - Радиолюбительский блог",
    description: "Персональный блог радиолюбителя UB4HUW о технике, экспериментах и QSO",
    url: "https://ub4huw.ru",
    siteName: "UB4HUW.RU",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UB4HUW.RU - Радиолюбительский блог",
    description: "Персональный блог радиолюбителя UB4HUW о технике, экспериментах и QSO",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
