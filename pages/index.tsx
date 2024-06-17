import FadeInUpWhenVisible from "@/components/FadeInUpWhenVisible";
import Layout from "@/components/Layout";

import { Quattrocento_Sans, Quattrocento } from "next/font/google";

const quattrocento_sans = Quattrocento_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quattrocento-sans",
});
const quattrocento = Quattrocento({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quattrocento",
});

export default function Home() {
  return (
    <Layout>
      <div
        className={`container mx-auto ${quattrocento.variable} px-8 font-serif`}
      >
        <main className="grid h-[85vh] grid-cols-12 grid-rows-6">
          <div className="col-span-12 row-start-5 text-white md:col-span-6 md:col-start-1 md:row-start-5 lg:row-start-3">
            <FadeInUpWhenVisible
              transitionVariant={{
                type: "easeIn",
                duration: "1",
                delay: 0.6,
              }}
              initialVariant={{ opacity: 0, y: 35 }}
              className="inline-block w-full p-4 text-center md:w-auto"
            >
              <h1 className="mb-4 text-6xl font-bold tracking-[.81rem]">
                Hunter
                <br />
                Marvel
              </h1>
              <hr className="mx-auto mb-4 w-3/4 max-w-[40%] md:max-w-none" />
              <p className="text-2xl uppercase tracking-[.5rem]">Photography</p>
            </FadeInUpWhenVisible>
          </div>
        </main>
      </div>
      <div className="divider block w-full py-3"></div>
    </Layout>
  );
}
