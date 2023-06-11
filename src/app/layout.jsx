import Providers from "./Providers";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevCircle Africa",
  description: "at DevCircle Africa, we are building the next generation of African developers",
  keywords: "Programming, content writing, Designing, Learning, Hacks, Tech, Africa, Developers, DevCircle Africa, DevCircle, Africa,"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {/* Header */}
        <Header />

        {/* Navbar */}

        {/* SearchBox */}
        {children}
        </Providers>
      </body>
    </html>
  );
}
