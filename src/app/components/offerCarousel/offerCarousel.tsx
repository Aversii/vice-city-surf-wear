import styled from "styled-components";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { CarouselContainer, Slide, CardGrid, OfferCard, CardImage, StyledH3, StyledP, StyledSpan, Title, InfoTop, Wave } from "./styles";


const offers = [
  {
    id: 1,
    name: "Oferta 1",
    price: "R$ 20,00",
    discount: "20% OFF",
    oldPrice: "R$ 25,00",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Oferta 2",
    price: "R$ 30,00",
    discount: "15% OFF",
    oldPrice: "R$ 35,00",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Oferta 3",
    price: "R$ 40,00",
    discount: "10% OFF",
    oldPrice: "R$ 45,00",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Oferta 4",
    price: "R$ 50,00",
    discount: "5% OFF",
    oldPrice: "R$ 55,00",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Oferta 5",
    price: "R$ 60,00",
    discount: "25% OFF",
    oldPrice: "R$ 80,00",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    name: "Oferta 6",
    price: "R$ 70,00",
    discount: "30% OFF",
    oldPrice: "R$ 100,00",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 7,
    name: "Oferta 7",
    price: "R$ 80,00",
    discount: "35% OFF",
    oldPrice: "R$ 120,00",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 8,
    name: "Oferta 8",
    price: "R$ 90,00",
    discount: "40% OFF",
    oldPrice: "R$ 150,00",
    image: "https://via.placeholder.com/200",
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
      <Title>OFERTAS</Title>
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
                <InfoTop>{offer.name}</InfoTop>
                <StyledH3>{offer.name}</StyledH3>
                <StyledP>{offer.oldPrice}</StyledP>
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