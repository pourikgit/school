// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "EduSpectrum",
//   description: "Next.js Education Project",
// };
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
    
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
    
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduSpectrum",
  description: "Next.js Education Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/EduSpectrum.webp" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
