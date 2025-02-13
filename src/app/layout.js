import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Home from "./page";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Home></Home>
      </body>
    </html>
  );
}
