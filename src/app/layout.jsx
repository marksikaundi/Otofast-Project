import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Otofast Project",
  description: "at Otofast Project, we are building the next generation of African developers",
  keywords: "Programming, content writing, Designing, Learning, Hacks, Tech, Africa, Otofast Project, Otofast Africa, Project, Africa Fast,"
   
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">   
      <body className={inter.className}>
        {/* Header */}
        <Header />

        {/* Navbar */}
        

        {/* SearchBox */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
