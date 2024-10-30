import localFont from "next/font/local";
import "./globals.css";
import Navber from "@/components/shared/Navber";
import Footer from "@/components/shared/Footer";
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })
 

export const metadata = {
  title: "Car Doctor",
  description: "Car Reparing Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='carDoctortheme'>
      
      <body
        className={`${inter.className} antialiased mx-auto container`}
      >
        <Navber/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
