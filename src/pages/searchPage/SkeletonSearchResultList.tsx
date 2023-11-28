// library
import { styled } from "styled-components";

const SkeletonSearchResultList = () => {
  return (
    <SkeletonListLayout>
      <SearchResultSkeletonLayout>
        <SearchResultSkeletonImg />
        <SearchResultInfoBox>
          <SearchResultSkeletonName />
          <SearchResultSkeletonAddress />
        </SearchResultInfoBox>
      </SearchResultSkeletonLayout>
      <SearchResultSkeletonLayout>
        <SearchResultSkeletonImg />
        <SearchResultInfoBox>
          <SearchResultSkeletonName />
          <SearchResultSkeletonAddress />
        </SearchResultInfoBox>
      </SearchResultSkeletonLayout>
      <SearchResultSkeletonLayout>
        <SearchResultSkeletonImg />
        <SearchResultInfoBox>
          <SearchResultSkeletonName />
          <SearchResultSkeletonAddress />
        </SearchResultInfoBox>
      </SearchResultSkeletonLayout>
    </SkeletonListLayout>
  );
};

export default SkeletonSearchResultList;

const SkeletonListLayout = styled.div`
  & > div {
    border-bottom: ${({ theme }) => theme.Border.thinBorder};
  }
`;

const SearchResultSkeletonLayout = styled.div`
  width: 100%;

  display: flex;
  gap: 0.5rem;

  padding: 1rem 0;

  border-bottom: ${({ theme }) => theme.Border.thinBorder};
`;

const SearchResultInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const SearchResultSkeletonImg = styled.div`
  width: 5rem;
  height: 5rem;

  animation: changeColor 1s infinite ease-in-out alternate;
  @keyframes changeColor {
    from {
      background-color: ${({ theme }) => theme.Color.inactiveColor};
    }
    to {
      background-color: ${({ theme }) => theme.Color.defaultFontColor};
    }
  }
`;

const SearchResultSkeletonName = styled.div`
  width: 13rem;
  height: 1.125rem;

  animation: changeColor 1s infinite alternate;
  @keyframes changeColor {
    from {
      background-color: ${({ theme }) => theme.Color.inactiveColor};
    }
    to {
      background-color: ${({ theme }) => theme.Color.defaultFontColor};
    }
  }
`;

const SearchResultSkeletonAddress = styled.div`
  width: 10rem;
  height: 1rem;

  animation: changeColor 1s infinite alternate;
  @keyframes changeColor {
    from {
      background-color: ${({ theme }) => theme.Color.inactiveColor};
    }
    to {
      background-color: ${({ theme }) => theme.Color.defaultFontColor};
    }
  }
`;
