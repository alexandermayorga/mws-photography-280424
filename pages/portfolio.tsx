import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

import protraitPic from "/public/img/portfolio/mae-mu-XTztXbv6gMs-unsplash-resized_50.jpg";
import naturePic from "/public/img/portfolio/taneli-lahtinen-fQ2YX56wQ-Y-unsplash_50.jpg";
import productsPic from "/public/img/portfolio/mae-mu-XTztXbv6gMs-unsplash_50.jpg";

// Unsplash Pics from:
// https://unsplash.com/photos/three-ginger-beer-bottles-XTztXbv6gMs
// https://unsplash.com/photos/photo-of-brown-and-black-bird-on-person-palm-eating-a-food-fQ2YX56wQ-Y
// https://unsplash.com/photos/woman-wearing-hijab-fbUvVn1_ViQ

export default function Portfolio() {
  return (
    <>
      <Layout>
        <main className="container mx-auto px-8">
          <div className="divider block w-full py-14"></div>
          {/* GRID */}
          <div className="grid grid-cols-12 gap-y-14 md:grid-rows-8 md:gap-x-6 md:gap-y-6 lg:grid-rows-10 lg:gap-x-12 ">
            <h1 className="col-span-12 text-center text-5xl">Recent Works</h1>
            {/* COLUMN 1 */}
            <Link
              href="/portfolio/portrait"
              className="group relative col-span-12 row-span-12 flex justify-center overflow-hidden md:col-span-4 md:row-span-8 md:row-start-3"
            >
              <Image
                src={protraitPic}
                alt="Portrait Photography"
                className="absolute z-0 h-full w-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
              ></Image>
              <h2 className="relative z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-45 text-5xl tracking-wider group-hover:bg-opacity-55 ">
                Portraits
              </h2>
            </Link>
            {/* COLUMN 2 */}
            <Link
              href="/portfolio/nature"
              className="group relative col-span-12 row-span-12 flex justify-center overflow-hidden md:col-span-4 md:row-span-8 md:row-start-3"
            >
              <Image
                src={naturePic}
                alt="Nature Photography"
                className="absolute z-0 h-full w-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
              ></Image>
              <h2 className="relative z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-45 text-5xl tracking-wider group-hover:bg-opacity-55">
                Nature
              </h2>
            </Link>
            {/* COLUMN 3 */}
            <Link
              href="/portfolio/products"
              className="group relative col-span-12 row-span-12 flex justify-center overflow-hidden md:col-span-4 md:row-span-8 md:row-start-3"
            >
              <Image
                src={productsPic}
                alt="Products Photography"
                className="absolute z-0 h-full w-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
              ></Image>
              <h2 className="relative z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-45 text-5xl tracking-wider group-hover:bg-opacity-55">
                Products
              </h2>
            </Link>
          </div>
          <div className="divider block w-full py-10"></div>
        </main>
      </Layout>
    </>
  );
}
