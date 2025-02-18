"use client";

import { ApiProvider } from "@/lib/providers/api.provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ApiProvider>{children}</ApiProvider>;
}
