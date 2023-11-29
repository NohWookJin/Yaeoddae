// library
import { useInfiniteQuery } from "@tanstack/react-query";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

// hook
import useIntersect from "../../hook/useIntersect";

// api
import getSearchResult from "../../api/search";

// tyoe
import SearchResult from "../../types/searchResult";

// icon
import defaultHotel from "../../assets/icons/defaultHotel.svg";
import noResult from "../../assets/icons/noResult.svg?react";

// component
import SkeletonSearchResultList from "./SkeletonSearchResultList";

interface Props {
  keyword: string;
  areaCode: string;
}

type ObjType = {
  [index: string]: string;
};
const AREACODE: ObjType = {
  "1": "SEOUL",
  "2": "INCHEON",
  "3": "DAEJEON",
  "4": "DAEGU",
  "5": "GWANGJU",
  "6": "BUSAN",
  "7": "ULSAN",
  "8": "SEJONG",
  "31": "GYEONGGI",
  "32": "GANGWON",
  "33": "CHUNGBUK",
  "34": "CHUNGNAM",
  "35": "GYEONGBUK",
  "36": "GYEONGNAM",
  "37": "JEONBUK",
  "38": "JEONNAM",
  "39": "JEJU",
};

const SearchReslutList = ({ keyword, areaCode }: Props) => {
  const navigate = useNavigate();

  const { data, isLoading, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: [keyword + location],
    queryFn: ({ pageParam = 1 }) => getSearchResult(pageParam, keyword, areaCode),
    getNextPageParam: ({ status, data, page }) => {
      if (status === 204 || data.data.length !== 10) {
        return undefined;
      } else {
        return page + 1;
      }
    },
    refetchOnWindowFocus: false,
    retry: 6,
  });

  const searchResults = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.data) : []),
    [data]
  );

  const ref = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    fetchNextPage();
  });

  const handleSearchResultClick = (id: number, keyword: string, areaCode: string) => {
    navigate(`/detail/${id}?keyword=${keyword}&area-code=${AREACODE[areaCode]}`);
  };

  return (
    <SearchResultListLayout>
      {searchResults.map((searchResult: SearchResult) => {
        return (
          <SearchResultLayout
            key={searchResult.AccommodationId}
            onClick={() =>
              handleSearchResultClick(
                searchResult.AccommodationId,
                searchResult.name,
                searchResult.location.areaCode
              )
            }
          >
            <SearchResultImg src={searchResult.image ? searchResult.image : defaultHotel} alt="" />
            <SearchResultInfoBox>
              <SearchResultName>{searchResult.name}</SearchResultName>
              <SearchResultAddress>{searchResult.location.address}</SearchResultAddress>
            </SearchResultInfoBox>
          </SearchResultLayout>
        );
      })}
      {isLoading || isFetching ? <SkeletonSearchResultList /> : null}
      {!isLoading && searchResults.length === 0 ? (
        <NoResultBox>
          <NoResultSVG />
          검색 결과가 없습니다.
        </NoResultBox>
      ) : null}
      <Target ref={ref} />
    </SearchResultListLayout>
  );
};

export default SearchReslutList;

const SearchResultListLayout = styled.div`
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const SearchResultLayout = styled.div`
  width: 100%;

  display: flex;
  gap: 0.5rem;

  padding: 1rem 0;

  border-bottom: ${({ theme }) => theme.Border.thinBorder};

  &:hover {
    cursor: pointer;
  }
`;

const SearchResultImg = styled.img`
  width: 5rem;
  height: 5rem;

  object-fit: cover;
`;

const SearchResultInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const SearchResultName = styled.p`
  font-weight: 700;
`;

const SearchResultAddress = styled.p`
  font-size: ${({ theme }) => theme.Fs.default};
`;

const Target = styled.div`
  height: 1px;

  border: none;
`;

const NoResultBox = styled.div`
  text-align: center;

  font-weight: 700;
`;

const NoResultSVG = styled(noResult)`
  margin: 2rem 0;
  height: 5rem;
`;
