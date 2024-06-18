import Layout from "@/components/Layout";
import bioPic from "/public/img/erik-mclean-2Wv9VnwzeeI-unsplash_50.jpg";
import Image from "next/image";
import Head from "next/head";

//https://unsplash.com/photos/woman-using-camera-2Wv9VnwzeeI

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About | Photography Site Template</title>
        </Head>
        <main className="container mx-auto px-8">
          <div className="divider block w-full py-14"></div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 mb-12 lg:col-span-4 lg:col-start-2 lg:mb-0">
              <h1 className="mb-4 text-5xl">Biography</h1>
              <div className="divider block w-full py-5"></div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                veniam quos vitae fugit eos ipsum voluptate sit earum alias,
                doloremque quas necessitatibus, dicta, sed unde cupiditate
                consequuntur! Inventore, exercitationem. Quia voluptatum placeat
                officia! Accusamus laborum quo deserunt. Itaque cum iste, unde
                ut quod aperiam non, quasi quam inventore ullam suscipit.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas tenetur ab repudiandae corporis possimus ipsam. In
                quasi possimus obcaecati ipsum quis ad laborum non, unde eveniet
                earum esse, qui perspiciatis?
              </p>
            </div>
            <div className="col-span-10 col-start-2 flex flex-col items-center justify-center overflow-hidden bg-black lg:col-span-3 lg:col-start-9">
              <Image
                src={bioPic}
                alt={"Selfie"}
                priority={true}
                className="h-full w-full object-cover transition hover:opacity-80"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1366px) 100vw, (max-width: 1600px) 100vw, (max-width: 1920px) 100vw,"
              ></Image>
            </div>
          </div>

          <div className="divider block w-full py-10"></div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 mb-12 lg:col-span-4 lg:col-start-2 lg:mb-0">
              <h2 className="text-3xl">Selected Clients</h2>
              <div className="divider block w-full py-2.5 lg:py-5"></div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur culpa suscipit quae ullam fugit. Natus veritatis
                doloribus aspernatur, consectetur iure quia aut nesciunt eius
                tempora, dignissimos obcaecati provident ratione voluptas?
              </p>
            </div>
            <div className="col-span-12 flex flex-wrap items-center justify-center gap-x-12 lg:col-span-5 lg:col-start-8 lg:gap-y-12">
              <i className="devicon-react-original-wordmark text-6xl md:text-8xl"></i>
              <i className="devicon-vercel-original-wordmark text-8xl md:text-9xl"></i>
              <i className="devicon-postcss-plain-wordmark text-7xl md:text-9xl"></i>

              <i className="devicon-typescript-plain text-5xl md:text-7xl"></i>
              <i className="devicon-nextjs-original-wordmark text-7xl md:text-9xl"></i>
              <i className="devicon-tailwindcss-plain-wordmark text-9xl  md:text-[10rem]"></i>
            </div>
          </div>

          <div className="divider block w-full py-10"></div>
        </main>
      </Layout>
    </>
  );
}
