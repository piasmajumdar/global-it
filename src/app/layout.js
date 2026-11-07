import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Business IT Support, Cloud & Security | Global IT",
  description:
    "Global IT supports Australian businesses with managed IT, cybersecurity, cloud, business calling, networking and AI automation. Discuss your requirements.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#43A753] selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
