import { Quattrocento_Sans, Quattrocento } from "next/font/google";

export const quattrocento_sans = Quattrocento_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quattrocento-sans",
});

export const quattrocento = Quattrocento({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quattrocento",
});
