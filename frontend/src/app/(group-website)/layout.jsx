import { Geist, Geist_Mono, Oswald } from "next/font/google";
import '../globals.css';
import Header from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import Storeprovider from "@/components/Storeprovider";
import { ToastContainer } from "react-toastify";


const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aditya Tour & Travels",
  description: "Aditya Tour & Travels",
  icons: {
    icon: "/favicon2.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${geistSans.variable} ${geistMono.variable}`}>
    
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Storeprovider>
          <ToastContainer autoClose={1200} />
          <Header />
          {children}
          <Footer />
        </Storeprovider>
      </body>
    </html>
  );
}
