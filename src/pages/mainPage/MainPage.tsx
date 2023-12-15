import { Suspense, useState } from "react";
import Beloved from "../../components/Main/Beloved";
import CategoryTab from "../../components/Main/CategoryTab";
import MainCarousel from "../../components/Main/MainCarousel";
import SearchBar from "../../components/Main/SearchBar";
import styled from "styled-components";
import SkeletonPage from "../../components/Main/SkeletonPage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../../components/Main/ErrorPage";

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Main>
      <SearchBar />
      <CategoryTab setCurrentPage={setCurrentPage} />
      <ErrorBoundary FallbackComponent={ErrorPage} onReset={() => setCurrentPage(0)}>
        <Suspense fallback={<SkeletonPage />}>
          <MainCarousel currentPage={currentPage} />
        </Suspense>
      </ErrorBoundary>
      <Beloved />
    </Main>
  );
}

const Main = styled.div`
  overflow: hidden;
`;
