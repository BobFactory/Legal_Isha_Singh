import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Isha Singh",
  description: "Advocate Isha Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-base-content `}
      >
        {children}
      </body>
    </html>
  );
}
