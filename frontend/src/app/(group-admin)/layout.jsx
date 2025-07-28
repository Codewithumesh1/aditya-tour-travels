import { Geist, Geist_Mono } from "next/font/google";
import '../globals.css';
import Header from "@/components/admin/Header";
import AdminProtected from "@/components/admin/AdminProtected";
import Storeprovider from "@/components/Storeprovider";
import { ToastContainer } from "react-toastify";

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
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Storeprovider>
          <AdminProtected >
            <ToastContainer
              autoClose={1200}
            />
            <Header />
            {children}
          </AdminProtected>
        </Storeprovider>
      </body>


    </html >
  );
}
