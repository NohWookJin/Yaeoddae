// library
import { useQuery } from "@tanstack/react-query";

// api
import getSearchResult from "../../api/mockSearchApi";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchReslutList = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({ queryKey: ["search"], queryFn: getSearchResult });

  const handleSearchResultClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SearchResultListLayout>
      {data?.map((item) => {
        return (
          <SearchResultLayout key={item.id} onClick={() => handleSearchResultClick(item.id)}>
            <SearchResultImg src={item.image} alt="" />
            <SearchResultInfoBox>
              <SearchResultName>{item.name}</SearchResultName>
              <SearchResultDesc>{item.description}</SearchResultDesc>
            </SearchResultInfoBox>
          </SearchResultLayout>
        );
      })}
    </SearchResultListLayout>
  );
};

export default SearchReslutList;

const SearchResultListLayout = styled.div`
  margin: 0.5rem 0 0 0;

  width: 100%;

  &:hover {
    cursor: pointer;
  }

  & > div:first-child {
    border-top: ${({ theme }) => theme.Border.thinBorder};
  }

  & > div {
    border-bottom: ${({ theme }) => theme.Border.thinBorder};
  }
`;

const SearchResultLayout = styled.div`
  width: 100%;

  display: flex;
  gap: 0.5rem;

  padding: 1rem 0;
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

const SearchResultDesc = styled.p`
  font-size: ${({ theme }) => theme.Fs.default};
`;
