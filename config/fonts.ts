import {
  Poppins as FontPoppins,
  IBM_Plex_Sans_Thai as FontIBM,
  Kanit as FontKanit,
} from "next/font/google";

export const fontPoppins = FontPoppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fontIBM = FontIBM({
  subsets: ["latin", "thai"],
  variable: "--font-ibm",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const fontKanit = FontKanit({
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
