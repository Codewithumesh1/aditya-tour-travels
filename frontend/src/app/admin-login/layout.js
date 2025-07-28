import Storeprovider from '@/components/Storeprovider';

export const metadata = {
  title: "Aditya Tour & Travels",
  description: "Aditya Tour & Travels",
  icons: {
    icon: "/favicon2.png",
  },
};

import '../globals.css';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <ToastContainer
          autoClose={1200}
        />
         <Storeprovider>
        {children}
        </Storeprovider>
      </body>
    </html>
  )
}
