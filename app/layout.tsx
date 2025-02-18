import { ApiProvider } from "@/lib/providers/api.provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Treedom test",
  description: "Treedom test for FE developer application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApiProvider>
      <html lang="en">
        <body className={`antialiased`}>{children}</body>
      </html>
    </ApiProvider>
  );
}
