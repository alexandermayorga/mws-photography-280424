import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import NextJsImage from "../../components/NextJsImage";

// https://unsplash.com/photos/woman-in-white-floral-lace-top-YR__d5-GDOA
// https://unsplash.com/photos/woman-in-black-and-white-floral-hijab-5KXA5oFLK5Y
// https://unsplash.com/photos/woman-in-white-lace-tank-top-and-black-jacket--h-O5_xkO0g
// https://unsplash.com/photos/man-in-blue-and-white-floral-button-up-shirt-wearing-eyeglasses-vMGM9Y48eIY
// https://unsplash.com/photos/woman-in-black-tank-top-and-pink-scarf-ni7tvb9vG04
// https://unsplash.com/photos/woman-in-pink-zip-up-jacket-standing-near-green-leaf-plant-during-daytime-mAJKEgz2j_Q
// https://unsplash.com/photos/woman-in-red-scarf-wearing-black-knit-cap-y6n3Ffe8tEg
// https://unsplash.com/photos/man-in-black-and-white-stripe-polo-shirt-holding-black-plastic-bag-9EW7VkfJkSg
// https://unsplash.com/photos/topless-man-holding-brown-textile-h6h4udQFWUc
// https://unsplash.com/photos/woman-in-red-dress-sitting-on-floor-dHIrRChoFDM

import galleryItem1 from "/public/img/portrait/behrouz-sasani-mAJKEgz2j_Q-unsplash.jpg";
import galleryItem2 from "/public/img/portrait/behrouz-sasani-y6n3Ffe8tEg-unsplash.jpg";
import galleryItem3 from "/public/img/portrait/behrouz-sasani-YR__d5-GDOA-unsplash.jpg";
import galleryItem4 from "/public/img/portrait/j-balla-photography-dHIrRChoFDM-unsplash.jpg";
import galleryItem5 from "/public/img/portrait/khashayar-kouchpeydeh-9EW7VkfJkSg-unsplash.jpg";
import galleryItem6 from "/public/img/portrait/khashayar-kouchpeydeh-vMGM9Y48eIY-unsplash.jpg";
import galleryItem7 from "/public/img/portrait/mahdi-chaghari - h-O5_xkO0g-unsplash.jpg";
import galleryItem8 from "/public/img/portrait/olena-bohovyk-h6h4udQFWUc-unsplash.jpg";
import galleryItem9 from "/public/img/portrait/sinitta-leunen-ni7tvb9vG04-unsplash.jpg";
import { useState } from "react";

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
];

export default function Portrait() {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [LightBoxIndex, setLightBoxIndex] = useState(0);

  const handleImageclick = (index: number) => {
    setLightBoxIndex(index);
    setIsLightBoxOpen(true);
  };

  return (
    <>
      <Layout>
        <main className="container mx-auto px-8">
          <div className="divider block w-full py-10 md:py-14"></div>
          <h1 className="col-span-12 text-5xl">Portraits</h1>

          <div className="mx-auto my-14 grid max-w-md auto-rows-[250px] grid-cols-1 gap-16  md:max-w-4xl md:grid-cols-2 lg:max-w-full lg:grid-cols-2">
            <div className="tall row-span-3 overflow-hidden bg-black ">
              <Image
                src={gallery[4]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(4)}
              ></Image>
            </div>
            <div className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black ">
              <Image
                src={gallery[0]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover object-top hover:opacity-80"
                onClick={() => handleImageclick(0)}
              ></Image>
            </div>
            <div className="tall row-span-3 flex flex-col items-center justify-center overflow-hidden bg-black ">
              <Image
                src={gallery[7]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover object-top hover:opacity-80"
                onClick={() => handleImageclick(7)}
              ></Image>
            </div>
            <div className="tall row-span-3 flex flex-col items-center justify-center overflow-hidden bg-black ">
              <Image
                src={gallery[8]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover object-top hover:opacity-80"
                onClick={() => handleImageclick(8)}
              ></Image>
            </div>
            <div className="tall row-span-3 flex flex-col items-center justify-center overflow-hidden bg-black ">
              <Image
                src={gallery[5]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(5)}
              ></Image>
            </div>
            <div className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black ">
              <Image
                src={gallery[3]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(3)}
              ></Image>
            </div>
            <div className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black ">
              <Image
                src={gallery[6]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover object-top hover:opacity-80"
                onClick={() => handleImageclick(6)}
              ></Image>
            </div>
            <div className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black ">
              <Image
                src={gallery[1]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(1)}
              ></Image>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              className="inline-block border border-white p-4 text-right text-xl transition duration-300 hover:-translate-y-1"
              href={"/portfolio/nature"}
            >
              <span className="mr-4">Next Project</span>{" "}
              <FaArrowRight className="inline-block " />
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
