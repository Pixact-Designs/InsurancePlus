import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", 
});

export const metadata = {
  title: "InsurancePlus",
  description: "Insurance Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}> 
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
