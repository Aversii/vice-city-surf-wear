import styled, { keyframes } from "styled-components";
import Image from "next/image";

const waveAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
  100% {
    transform: translateY(0) rotate(360deg);
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 80vh;
  margin: auto;
`;

export const OfferCard = styled.div`
  margin: 100px auto;
  background: transparent;
  box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
  position: relative;
  width: 400px;
  height: 330px;
  border-radius: 16px;
  overflow: hidden;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.gradient};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
        0 0 10px rgba(57, 190, 235, 0.6),
        0 0 20px rgba(57, 190, 235, 0.5),
        0 0 30px rgba(57, 190, 235, 0.4),
        0 0 40px rgba(57, 190, 235, 0.3);
  }
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
`;

export const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wave = styled.div`
  position: absolute;
  width: 600px;
  height: 540px;
  opacity: 0.6;
  left: 30%;
  top: 90%;
  transform: translateX(-5%);
  background: linear-gradient(720deg, #87ceeb, #00bfff 60%, #1e90ff);
  border-radius: 40%;
  animation: ${waveAnimation} 15s infinite;

  &:nth-child(2) {
    animation-duration: 15s;
    top: 20px;
  }

  &:nth-child(3) {
    animation-duration: 15s;
    top: 100px;
  }
`;

export const SellingItemsContainer = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.gradient};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SellingItemsTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 45px;
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  margin-top: 60px;
  
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 50%;
    background: rgba(57, 176, 235, 0.246);
    border-radius: 50%;
    filter: blur(15px);
    z-index: -1;
  }
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  max-width: 1000px;
  width: 100%;
  justify-items: center;
`;

export const ItemCard = styled.div`
  background: transparent;
  box-shadow: 0px 4px 20px -4px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  text-align: center;
  padding: 10px;
  transition: transform 0.3s ease;
  width: 17vw;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 10px rgba(57, 190, 235, 0.6),
                0 0 20px rgba(57, 190, 235, 0.5);
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 40vh;
  border-radius: 8px 8px 0 0;
`;

export const ItemName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.colors.text};
  margin: 10px 0;
`;

export const ItemPrice = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.p};
  color: ${({ theme }) => theme.colors.price};
  margin: 5px 0;
`;

export const ItemDiscount = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.p};
  color: ${({ theme }) => theme.colors.discount};
  font-weight: bold;
`;

export const StyledH3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.typography.h2};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const StyledP = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.p};
  line-height: ${({ theme }) => theme.typography.p.lineHeight};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  padding-top: ${({ theme }) => theme.spacing.medium};
`;

export const StyledSpan = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.p.fontSize};
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const Title = styled.h1`
  padding-top: ${({ theme }) => theme.spacing.large};
`;
