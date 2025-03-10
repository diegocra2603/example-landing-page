import { getLandingPage } from "@/actions/get-landing-page";
import { Carousel } from "@/components/Carousel";
import Image from "next/image";

export default async function Home() {

  const data = await getLandingPage();

  const firstBanner = data[0].banners[0];

  const secondBanner = data[0].banners[1];

  const thirdBanner = data[0].banners[2];

  const firstFourImages = thirdBanner.images.slice(0, 4);
  const secondFourImages = thirdBanner.images.slice(4, 8);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Sección superior */}
      {/* <div className="h-[200px] bg-white"></div> */}

      {/* Sección destacada */}
      <Carousel banner={firstBanner} />

      {/* Dos secciones grandes */}
      <div className="flex justify-center gap-4 p-4">

        {
          secondBanner.images.map((image, index) => (
            <div key={index} className=" flex items-center justify-center text-white font-bold">
              <Image width={400} height={400} alt="hola" src={image.publicUrl} className="w-full shadow-xl aos-init aos-animate" />
            </div>
          ))
        }

      </div>

      <div className="flex flex-col gap-4 p-4 justify-center">


        <div className="flex gap-4 justify-between w-full">
          {firstFourImages.map((_, index) => (
            <div key={index} className="flex items-center justify-center w-auto h-auto">
              <Image width={500} height={500} alt="hola" src={thirdBanner.images[index].publicUrl} className="w-full shadow-xl aos-init aos-animate" />
              <div className=" ">
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-between w-full">
          {secondFourImages.map((_, index) => (
            <div key={index} className="flex items-center justify-center w-auto h-auto">
              <Image width={500} height={500} alt="hola" src={thirdBanner.images[index].publicUrl} className="w-full shadow-xl aos-init aos-animate" />
              <div className=" ">
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
