import styled from "styled-components";
import CityList from "./CityList";
import { areaCategory } from "../Main/Constant/areaCategory";

function MainCarousel({ currentPage }: CurrentPageProp) {
  return (
    <CarouselContainer>
      <Carousel $currentPage={currentPage}>
        {areaCategory.map((data) => (
          <CityList key={data.area} areacode={data.areaCode} />
        ))}
      </Carousel>
    </CarouselContainer>
  );
}

export default MainCarousel;

const CarouselContainer = styled.div`
  width: calc(375px * 4);
`;
const Carousel = styled.div<{ $currentPage: number }>`
  display: flex;
  transform: ${(props) => `translateX(-${props.$currentPage * 375}px)`};
  transition: transform 0.3s ease-in-out;
`;

interface CurrentPageProp {
  currentPage: number;
}
