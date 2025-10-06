import type { Metadata } from "next";
import "./globals.css";
import HomePattern from "@/components/home-pattern";
import { Container } from "@/components/container";
import { Header } from "@/components/header/header";
import { ThemeProvider } from "@/lib/theme-context";
import { fontMono, fontDoto } from "@/lib/fonts";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "MHK",
  description: "Personal Website of M.Hammad",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontDoto.variable} ${fontMono.variable} antialiased`}>
        <ScrollArea className="h-screen">
          <ThemeProvider>
            <HomePattern>
              <Header />
              <Container>
                {children}
                <Analytics />
                <Footer />
              </Container>
            </HomePattern>
          </ThemeProvider>
        </ScrollArea>
      </body>
    </html>
  );
}
