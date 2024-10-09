  import React, { useState, useEffect } from "react";
  import { CarouselContainer, CarouselImage, CarouselButton } from "./styles";
  import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

  const images = [
    "https://images6.alphacoders.com/661/661502.jpg",
    "https://images4.alphacoders.com/160/160308.jpg",
    "https://images3.alphacoders.com/250/250085.jpg",
    "https://picfiles.alphacoders.com/271/271836.jpg",
    "https://images4.alphacoders.com/788/78838.jpg",
  ];

  export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionClass, setTransitionClass] = useState("visible");

    const nextImage = () => {
      setTransitionClass("hidden");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTransitionClass("visible");
      }, 1000);
    };

    const prevImage = () => {
      setTransitionClass("hidden");
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
        setTransitionClass("visible");
      }, 1000);
    };

    useEffect(() => {
      const interval = setInterval(() => {
        nextImage();
      }, 5000); // Altere o tempo conforme desejado
      return () => clearInterval(interval);
    }, []);

    return (
      <CarouselContainer>
        <CarouselImage
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className={transitionClass}
        />
        <CarouselButton className="prev" onClick={prevImage}>
          <FaChevronLeft />
        </CarouselButton>
        <CarouselButton className="next" onClick={nextImage}>
        <FaChevronRight />
        </CarouselButton>
      </CarouselContainer>
    );
  };
