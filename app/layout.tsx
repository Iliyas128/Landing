import type { Metadata } from "next";
import { headers } from "next/headers";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["cyrillic", "latin"] });
const unbounded = Unbounded({ variable: "--font-unbounded", subsets: ["cyrillic", "latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:5173";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;

  return {
    title: "E-CAFE — цифровой зал для кафе и ресторанов",
    description: "QR-меню, заказ за столом, кухня, персонал, склад и техкарты в одной системе реального времени.",
    openGraph: {
      title: "E-CAFE — гость заказывает, команда успевает",
      description: "Цифровой зал: от QR-кода на столе до кухни, официанта и автоматического списания ингредиентов.",
      type: "website",
      locale: "ru_KZ",
      images: [{ url: image, width: 1200, height: 630, alt: "E-CAFE — цифровой зал ресторана" }],
    },
    twitter: { card: "summary_large_image", images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${manrope.variable} ${unbounded.variable}`}>{children}</body></html>;
}
