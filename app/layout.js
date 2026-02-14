import "./globals.css";

import "./styles/animate.css";
import "./styles/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/magnific-popup.css";
import "./styles/meanmenu.css";
import "./styles/nice-select.css";
import "./styles/swiper-bundle.min.css";
import "./styles/main.css";
import "./styles/custome.css";



import Preloader from "@/components/Preloader";
import { DM_Sans, Montserrat } from "next/font/google";

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const dm_sansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Oorle Cloud",
  description:
    "Oorle Cloud",
     icons: {
    icon: "/assets/img/logo/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserratFont.variable} ${dm_sansFont.variable}`}
    >
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
