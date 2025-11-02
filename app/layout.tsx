import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "المختار - أثاث منزلي فاخر وعصري",
  description: "المختار تقدم أثاث منزلي فريد يجمع بين الجودة، الأناقة، والأسعار المناسبة. اكتشف تصاميمنا وخدماتنا.",
  keywords: [
    "المختار", "أثاث منزلي", "تصاميم داخلية", "أثاث فاخر", "تصاميم عصرية", 
    "خدمات الأثاث", "شحن أثاث", "تغليف أثاث", "تصنيع أثاث"
  ],
  openGraph: {
    title: "المختار - أثاث منزلي فاخر وعصري",
    description: "المختار تقدم أثاث منزلي فريد يجمع بين الجودة، الأناقة، والأسعار المناسبة. اكتشف تصاميمنا وخدماتنا.",
    url: "https://www.example.com",
    siteName: "المختار",
    images: [
      {
        url: "https://www.example.com/assets/hero.jpg",
        width: 1200,
        height: 630,
        alt: "المختار - أثاث منزلي فاخر وعصري"
      }
    ],
    locale: "ar_SA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "المختار - أثاث منزلي فاخر وعصري",
    description: "المختار تقدم أثاث منزلي فريد يجمع بين الجودة، الأناقة، والأسعار المناسبة. اكتشف تصاميمنا وخدماتنا.",
    images: ["https://www.example.com/assets/hero.jpg"]
  },
  alternates: {
    canonical: "https://www.example.com"
  },
  metadataBase: new URL("https://www.example.com")
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
