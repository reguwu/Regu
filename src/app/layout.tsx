import '@/styles/globals.css'
import Header from "@/components/content/Header";
import Footer from "@/components/content/Footer";
import { Metadata } from 'next'
import type { Viewport } from 'next'

export const metadata: Metadata = {
  title: "Regu Portfolio",
  description: "a Software Engineer portfolio",
  icons: {
    icon: "/images/favicon.svg"
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
