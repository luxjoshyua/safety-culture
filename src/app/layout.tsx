import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "SafetyCulture | Improve Workplace Operations",
  description:
    "Digitize & improve elements of your operations. Give your teams the knowledge, tools & confidence to work safely & meet higher standards.",
  icons: {
    icon: [
      { url: "/favicon-sc.ico", sizes: "16x16" },
      { url: "/favicon-sc.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon-sc-180.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#6559ff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  )
}
