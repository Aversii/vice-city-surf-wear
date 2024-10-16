import styled, { keyframes } from "styled-components";
import Image from "next/image";


const waveAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 80vh;
  margin: auto;
`;

export const OfferCard = styled.div`
  margin: 30px auto;
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
  background-color: ${(props) => props.theme.colors.primary};
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
  width: 500px;
  height: 640px;
  opacity: 0.6;
  left: 0;
  top: 0;
  margin-left: -50%;
  margin-top: -3%;
  background: linear-gradient(720deg, #87ceeb, #00bfff 60%, #1e90ff);
  border-radius: 40%;
  animation: ${waveAnimation} 55s infinite linear;

  &:first-child{
    display: none;
  }

  &:nth-child(2) {
    top: 330px;
    animation-duration: 50s;
  }

  &:nth-child(3) {
    top: 300px;
    animation-duration: 45s;
  }
`;


export const Name = styled.div`
  font-size: 14px;
  font-weight: 100;
  position: relative;
  top: 1em;
  text-transform: lowercase;
`;

export const StyledH3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const StyledP = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.p.fontSize};
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
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  padding-top: 60px;
  `
;