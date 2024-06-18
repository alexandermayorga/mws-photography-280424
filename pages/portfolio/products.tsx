import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import FadeInUpWhenVisible from "@/components/FadeInUpWhenVisible";
import NextJsImage from "@/components/NextJsImage";

/*
    https://unsplash.com/photos/water-splashing-on-ginger-beer-co-bottle-lOcmd4iJjpM
    https://unsplash.com/photos/black-and-white-plastic-pack-lvIIWY4DWR0
    https://unsplash.com/photos/a-can-of-coconut-water-splashing-out-of-a-coconut-bS9Y-69wRCM
    https://unsplash.com/photos/black-plastic-bottle-on-white-table-lx8IG23_vsY
    https://unsplash.com/photos/black-and-brown-glass-jar-JgPuHVRl48g
    https://unsplash.com/photos/blue-and-green-plastic-pack-YWvXiZFBjg0
    https://unsplash.com/photos/green-liquid-in-clear-drinking-glass-F__YVgR0yZY
    https://unsplash.com/photos/brown-and-beige-cake-on-white-and-pink-floral-textile-2Cp7Tdu9t9U
    https://unsplash.com/photos/person-holding-black-iphone-case-hI_OAjv8ehk
    https://unsplash.com/photos/brown-leather-satchel-bag-on-gray-concrete-surface-near-green-plant-at-daytime-pFLNV4gkXsc
    https://unsplash.com/photos/a-pair-of-yellow-sunglasses-sitting-on-top-of-a-wooden-table-sR2zmFgZf3A
    https://unsplash.com/photos/six-jars-of-honey-sit-on-a-table-BKT7KwIk7Kg
    https://unsplash.com/photos/a-bottle-of-beard-oil-next-to-a-pair-of-scissors-0M9wB84qeFw
 */

import galleryItem1 from "/public/img/products/tyler-nix-YWvXiZFBjg0-unsplash.jpg";
import galleryItem2 from "/public/img/products/tyler-nix-F__YVgR0yZY-unsplash.jpg";
import galleryItem3 from "/public/img/products/tyler-nix-bS9Y-69wRCM-unsplash.jpg";
import galleryItem4 from "/public/img/products/svitlana-JgPuHVRl48g-unsplash.jpg";
import galleryItem5 from "/public/img/products/micheile-henderson-2Cp7Tdu9t9U-unsplash.jpg";
import galleryItem6 from "/public/img/products/mason-supply-hI_OAjv8ehk-unsplash.jpg";
import galleryItem7 from "/public/img/products/mark-zu-lx8IG23_vsY-unsplash.jpg";
import galleryItem8 from "/public/img/products/mae-mu-lOcmd4iJjpM-unsplash.jpg";
import galleryItem9 from "/public/img/products/harshit-suryawanshi-0M9wB84qeFw-unsplash.jpg";
import galleryItem10 from "/public/img/products/hailey-moeller-BKT7KwIk7Kg-unsplash.jpg";
import galleryItem11 from "/public/img/products/david-billings-oGrOhXJaHME-unsplash.jpg";
import galleryItem12 from "/public/img/products/d-l-samuels-lvIIWY4DWR0-unsplash.jpg";
import galleryItem13 from "/public/img/products/badreddine-farhi-sR2zmFgZf3A-unsplash.jpg";
import galleryItem14 from "/public/img/products/alvaro-serrano-pFLNV4gkXsc-unsplash.jpg";
import { useState } from "react";
import Head from "next/head";

const gallery = [
  galleryItem1,
  galleryItem2,
  galleryItem3,
  galleryItem4,
  galleryItem5,
  galleryItem6,
  galleryItem7,
  galleryItem8,
  galleryItem9,
  galleryItem10,
  galleryItem11,
  galleryItem12,
  galleryItem13,
  galleryItem14,
];

export default function Products() {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [LightBoxIndex, setLightBoxIndex] = useState(0);

  const handleImageclick = (index: number) => {
    setLightBoxIndex(index);
    setIsLightBoxOpen(true);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Portfolio - Products | Photography Site Template</title>
        </Head>
        <main className="container mx-auto px-8">
          <div className="divider block w-full py-10 md:py-14"></div>
          <h1 className="col-span-12 text-5xl">Products</h1>

          <div className="mx-auto my-14 grid max-w-md auto-rows-[250px] grid-cols-1 gap-16  md:max-w-4xl md:grid-cols-2 lg:max-w-full lg:grid-cols-2">
            <FadeInUpWhenVisible className="tall row-span-3 overflow-hidden bg-black">
              <Image
                priority={true}
                sizes="(max-width: 525px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1366px) 100vw, (max-width: 1600px) 100vw, (max-width: 1920px) 100vw"
                src={gallery[2]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(2)}
              ></Image>
            </FadeInUpWhenVisible>
            <FadeInUpWhenVisible className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                sizes="(max-width: 525px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1366px) 100vw, (max-width: 1600px) 100vw, (max-width: 1920px) 100vw"
                src={gallery[8]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(8)}
              ></Image>
            </FadeInUpWhenVisible>
            <FadeInUpWhenVisible className="tall row-span-3 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                sizes="(max-width: 525px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1366px) 100vw, (max-width: 1600px) 100vw, (max-width: 1920px) 100vw"
                src={gallery[4]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(4)}
              ></Image>
            </FadeInUpWhenVisible>
            <FadeInUpWhenVisible className="tall row-span-3 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                sizes="(max-width: 525px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1366px) 100vw, (max-width: 1600px) 100vw, (max-width: 1920px) 100vw"
                src={gallery[11]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(11)}
              ></Image>
            </FadeInUpWhenVisible>
            <FadeInUpWhenVisible className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                sizes="(max-width: 525px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1366px) 100vw, (max-width: 1600px) 100vw, (max-width: 1920px) 100vw"
                src={gallery[0]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(0)}
              ></Image>
            </FadeInUpWhenVisible>
            <FadeInUpWhenVisible className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                sizes="(max-width: 525px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1366px) 100vw, (max-width: 1600px) 100vw, (max-width: 1920px) 100vw"
                src={gallery[13]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(13)}
              ></Image>
            </FadeInUpWhenVisible>
            <FadeInUpWhenVisible className="tall row-span-3 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                sizes="(max-width: 525px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1366px) 100vw, (max-width: 1600px) 100vw, (max-width: 1920px) 100vw"
                src={gallery[6]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover object-top hover:opacity-80"
                onClick={() => handleImageclick(6)}
              ></Image>
            </FadeInUpWhenVisible>
            <FadeInUpWhenVisible className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                sizes="(max-width: 525px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1366px) 100vw, (max-width: 1600px) 100vw, (max-width: 1920px) 100vw"
                src={gallery[3]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover object-bottom hover:opacity-80"
                onClick={() => handleImageclick(3)}
              ></Image>
            </FadeInUpWhenVisible>
            <FadeInUpWhenVisible className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                sizes="(max-width: 525px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1366px) 100vw, (max-width: 1600px) 100vw, (max-width: 1920px) 100vw"
                src={gallery[12]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(12)}
              ></Image>
            </FadeInUpWhenVisible>{" "}
            <FadeInUpWhenVisible className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                sizes="(max-width: 525px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1366px) 100vw, (max-width: 1600px) 100vw, (max-width: 1920px) 100vw"
                src={gallery[5]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(5)}
              ></Image>
            </FadeInUpWhenVisible>
          </div>

          <div className="">
            <Link
              className="inline-block border border-white p-4 text-right text-xl transition duration-300 hover:-translate-y-1"
              href={"/portfolio/nature"}
            >
              <FaArrowLeft className="inline-block" />
              <span className="ml-4">Previous Project</span>
            </Link>
          </div>

          <div className="divider block w-full py-10"></div>
        </main>
        <Lightbox
          open={isLightBoxOpen}
          close={() => setIsLightBoxOpen(false)}
          slides={[...gallery]}
          render={{ slide: NextJsImage }}
          plugins={[Thumbnails, Zoom]}
          index={LightBoxIndex}
        />
      </Layout>
    </>
  );
}
