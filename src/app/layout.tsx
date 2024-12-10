import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "I & G Associates",
  description: "Best Law Consultancy Firm",
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
