import { useState } from "react";
import Beloved from "../../components/Main/Beloved";
import CategoryTab from "../../components/Main/CategoryTab";
import MainCarousel from "../../components/Main/MainCarousel";
import SearchBar from "../../components/Main/SearchBar";
import styled from "styled-components";

export const areaCategory = [
  { area: "서울", areaCode: "1" },
  { area: "경기", areaCode: "31" },
  { area: "강원", areaCode: "32" },
  { area: "부산", areaCode: "6" },
];

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Main>
      <SearchBar />
      <CategoryTab setCurrentPage={setCurrentPage} />
      <MainCarousel currentPage={currentPage} />
      <Beloved />
    </Main>
  );
}

const Main = styled.div`
  overflow: hidden;
`;
