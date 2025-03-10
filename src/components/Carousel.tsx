'use client';

import { Banner } from "@/interfaces/landing-page.interface";
import Image from "next/image";
import { useState } from "react";


type CarouselProps = {
    banner: Banner;
}

export const Carousel = ({ banner }: CarouselProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banner.images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + banner.images.length) % banner.images.length);
    };

    return (
        <div className="w-screen">

            <div className="relative  flex items-center justify-center">
                <button onClick={prevSlide} className="absolute left-4 bg-white p-2 rounded-full shadow-lg">❮</button>
                <Image width={800} height={500} alt="hola" src={banner.images[currentIndex].publicUrl} className="w-full shadow-xl aos-init aos-animate" />
                <button onClick={nextSlide} className="absolute right-4 bg-white p-2 rounded-full shadow-lg">❯</button>
            </div>

        </div>
    )
}
