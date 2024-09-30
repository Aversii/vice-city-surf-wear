import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
`;

export const CarouselImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  opacity: 0; 
  &.visible {
    opacity: 1; 
    transform: translateX(0);
  }
  &.prev {
    opacity: 1; 
    transform: translateX(-100%); 
  }
  &.next {
    opacity: 1; 
    transform: translateX(100%);
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${(props) => props.theme.colors.background};
  border: none;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;