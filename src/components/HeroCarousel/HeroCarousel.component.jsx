import React from "react";
import HeroSlider from "react-slick";

//component
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousel = () => {
    const settingsLG = { 
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true, 
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,   
    };

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,   
      };
      
      const images = [
           "https://images.unsplash.com/photo-1630018315449-00d6ac2ccd3d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
           "https://images.unsplash.com/photo-1629986154305-87371609abbe?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
           "https://images.unsplash.com/photo-1629897068696-cfec415757a4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
           "https://images.unsplash.com/photo-1630012967924-ab081508de45?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
           "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      ];

    return <>
        <div className="lg:hidden">
        <HeroSlider {...settings}>
            {images.map((image) => (
                <div className="w-full h-56 md:h-80 py-3">
                    <img 
                    src={image} 
                    alt="testing" 
                    className="w-full h-full" 
                 />
                </div>
            ))}
        </HeroSlider>
        </div>

        <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
            {images.map((image) => (
                <div className="w-full h-96 px-2 py-3">
                    <img 
                    src={image} 
                    alt="testing" 
                    className="w-full h-full rounded-md" 
                  />
                </div>
            ))}
        </HeroSlider>
        </div>
    </>;
};

export default HeroCarousel;