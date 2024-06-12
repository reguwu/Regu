import '@/styles/globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from 'next'
import type { Viewport } from 'next'

export const metadata: Metadata = {
  title: "Reg Dev Porfolio",
  description: "Reg's Dev Porfolio",
  icons: {
    icon: "/images/favicon.ico"
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
