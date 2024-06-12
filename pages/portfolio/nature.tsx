import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import NextJsImage from "../../components/NextJsImage";

// https://unsplash.com/photos/person-holding-lens-during-daytime-oGrOhXJaHME
// https://unsplash.com/photos/purple-petaled-flowers-near-trees-3VBg9zmZUOY
// https://unsplash.com/photos/green-trees-beside-river-during-daytime-Tss1uOMczDg
// https://unsplash.com/photos/red-round-ball-on-tree-branch-yheCCGSkH4o
// https://unsplash.com/photos/silhouette-of-person-on-beach-during-sunset-0BK8y1bIxGs
// https://unsplash.com/photos/silhouette-of-mountains-during-sunset-Rm1yvSRVTRE
// https://unsplash.com/photos/closeup-photo-of-bamboos-W0bOcwRJR9Y
// https://unsplash.com/photos/green-leafed-tree-Gi_9mRmZPY0
// https://unsplash.com/photos/mountain-near-the-body-of-water-during-daytime-z17q_VxEwUc
// https://unsplash.com/photos/brown-log-surrounded-with-trees-Iwo1GuxCeGg
// https://unsplash.com/photos/shallow-focus-photography-of-cactus-Vh-L1o2FQ2s
// https://unsplash.com/photos/a-group-of-monkeys-in-a-forest-zynEHxCEM0M
// https://unsplash.com/photos/silhouette-of-person-on-beach-during-sunset-0BK8y1bIxGs
// https://unsplash.com/photos/brown-log-surrounded-with-trees-Iwo1GuxCeGg

import galleryItem1 from "/public/img/nature/2h-media-zynEHxCEM0M-unsplash.jpg";
import galleryItem2 from "/public/img/nature/liam-pozz-Iwo1GuxCeGg-unsplash.jpg";
import galleryItem3 from "/public/img/nature/kc-welch-Rm1yvSRVTRE-unsplash.jpg";
import galleryItem4 from "/public/img/nature/freezydreamin-z17q_VxEwUc-unsplash.jpg";
import galleryItem5 from "/public/img/nature/jakob-owens-Vh-L1o2FQ2s-unsplash.jpg";
import galleryItem6 from "/public/img/nature/jakob-owens-W0bOcwRJR9Y-unsplash.jpg";
import galleryItem7 from "/public/img/nature/zuzana-ruttkay-0BK8y1bIxGs-unsplash.jpg";
import galleryItem8 from "/public/img/nature/kc-welch-Rm1yvSRVTRE-unsplash.jpg";
import galleryItem9 from "/public/img/nature/kristijan-arsov-Gi_9mRmZPY0-unsplash.jpg";

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

export default function Nature() {
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
          <h1 className="col-span-12 text-5xl">Nature</h1>

          <div className="mx-auto my-14 grid max-w-md auto-rows-[250px] grid-cols-1 gap-16  md:max-w-4xl md:grid-cols-2 lg:max-w-full lg:grid-cols-2">
            <div className="tall row-span-3 overflow-hidden bg-black">
              <Image
                src={gallery[6]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(6)}
              ></Image>
            </div>
            <div className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                src={gallery[8]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(8)}
              ></Image>
            </div>
            <div className="tall row-span-3 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                src={gallery[4]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(4)}
              ></Image>
            </div>
            <div className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                src={gallery[3]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(3)}
              ></Image>
            </div>
            <div className="tall row-span-4 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                src={gallery[5]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(5)}
              ></Image>
            </div>
            <div className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                src={gallery[0]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover hover:opacity-80"
                onClick={() => handleImageclick(0)}
              ></Image>
            </div>
            <div className="short row-span-2 flex flex-col items-center justify-center overflow-hidden bg-black">
              <Image
                src={gallery[1]}
                alt={""}
                className="h-full w-full cursor-pointer object-cover object-top hover:opacity-80"
                onClick={() => handleImageclick(1)}
              ></Image>
            </div>
          </div>

          <div className="flex justify-between gap-x-8">
            <Link
              className="inline-block border border-white p-4 text-right text-lg transition duration-300 hover:-translate-y-1 md:text-xl"
              href={"/portfolio/portrait"}
            >
              <FaArrowLeft className="inline-block" />
              <span className="ml-3 md:ml-4">Previous Project</span>
            </Link>
            <Link
              className="inline-block border border-white p-4 text-right text-lg transition duration-300 hover:-translate-y-1 md:text-xl"
              href={"/portfolio/products"}
            >
              <span className="mr-3 md:mr-4">Next Project</span>
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
