import type { Metadata } from "next";
import { AppThemeProvider } from "@/components/providers/app-theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ComeCore ERP",
    template: "%s · ComeCore",
  },
  description: "Plataforma administrativa para la operación integral de ISP.",
  icons: {
    icon: [{ url: "/brand/comecore-logo.jpeg", type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
