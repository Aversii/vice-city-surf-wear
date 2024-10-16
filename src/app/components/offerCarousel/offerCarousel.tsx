import styled from "styled-components";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { CarouselContainer, Slide, CardGrid, OfferCard, CardImage, StyledH3, StyledP, StyledSpan, Title,  Wave } from "./styles";


const offers = [
  {
    id: 1,
    name: "Prancha Neptuno",
    price: "R$ 2220,00",
    discount: "20% OFF",
    oldPrice: "R$ 25,00",
    image: "https://fmsurf.com.br/wp-content/uploads/2021/10/site_FM-fish-07a-scaled.jpg",
  },
  {
    id: 2,
    name: "Prancha Tsunami",
    price: "R$ 2330,00",
    discount: "15% OFF",
    oldPrice: "R$ 35,00",
    image: "https://fmsurf.com.br/wp-content/uploads/2021/10/site_FM-pranchinha-09a-1536x1536.jpg",
  },
  {
    id: 3,
    name: "Parafina Fu Wax",
    price: "R$ 20,00",
    discount: "10% OFF",
    oldPrice: "R$ 45,00",
    image: "https://adaptive-images.uooucdn.com.br/ik-seo/tr:w-1100,h-1594,c-at_max,pr-true,q-80/a150-ofyzsg/pv/40/37/25/46283938889b522e11e3455f86/base-de-parafina-fu-wax-base-coat-75g-1-large-1.jpeg",
  },
  {
    id: 4,
    name: "Prancha Wavolution",
    price: "R$ 1950,00",
    discount: "5% OFF",
    oldPrice: "R$ 55,00",
    image: "https://fmsurf.com.br/wp-content/uploads/2021/09/site_FM-pranchinha-05a-1536x1536.jpg",
  },
  {
    id: 5,
    name: "Traje Long Mormaii",
    price: "R$ 999,00",
    discount: "25% OFF",
    oldPrice: "R$ 80,00",
    image: "https://fmsurf.com.br/wp-content/uploads/2020/07/SU001M32EXL2302_PRETO_1.jpg",
  },
  {
    id: 6,
    name: "Prancha Fluorita",
    price: "R$ 1800,00",
    discount: "30% OFF",
    oldPrice: "R$ 100,00",
    image: "https://fmsurf.com.br/wp-content/uploads/2021/10/site_FM-evolution-08a-1536x1536.jpg",
  },
  {
    id: 7,
    name: "Traje Diva Mormaii",
    price: "R$ 1480,00",
    discount: "35% OFF",
    oldPrice: "R$ 120,00",
    image: "https://adaptive-images.uooucdn.com.br/ik-seo/tr:w-1100,h-1594,c-at_max,pr-true,q-80/a150-ofyzsg/pv/e6/ec/bd/7a886cf734765c9e91c6518bd6/long-john-feminino-mormaii-diva-pro-1-mm-large-3.jpg",
  },
  {
    id: 8,
    name: "Quilha FS4 QUAD",
    price: "R$ 450,00",
    discount: "40% OFF",
    oldPrice: "R$ 650,00",
    image: "https://fmsurf.com.br/wp-content/uploads/2018/06/Quilha-7.jpg",
  },
];

export const OffersCarousel: React.FC = () => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '65px',
  };

  return (
    <CarouselContainer>
      <Title>Ofertas</Title>
      <Slider {...settings}>
        {offers.map((offer) => (
          <Slide key={offer.id}>
            <CardGrid>
              <OfferCard>
                <Wave />
                <Wave />
                <Wave />
                <CardImage
                  src={offer.image}
                  alt={offer.name}
                  width={200}
                  height={200}
                />
                <StyledH3>{offer.name}</StyledH3>
                <StyledSpan>{offer.discount}</StyledSpan>
                <StyledP>{offer.price}</StyledP>
              </OfferCard>
            </CardGrid>
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default OffersCarousel;