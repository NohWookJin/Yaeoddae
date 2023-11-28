// library
import styled from "styled-components";
import { useState } from "react";

// component
import SearchInput from "./SearchInput";
import LocationSelect from "./LocationSelect";
import SearchReslutList from "./SearchReslutList";

function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState({ label: "전체", value: "" });

  return (
    <SearchPageLayout>
      <SearchPageHeader>
        <SearchInput placeholder="숙소명을 입력하세요" keyword={keyword} setKeyword={setKeyword} />
        <SelectLocationBox>
          <LocationSign>
            <div>지역</div>
          </LocationSign>
          <LocationSelect location={location} setLocation={setLocation} />
        </SelectLocationBox>
      </SearchPageHeader>
      <SearchReslutList keyword={keyword} location={location.value} />
    </SearchPageLayout>
  );
}

export default SearchPage;

const SearchPageLayout = styled.div`
  padding: ${({ theme }) => theme.Padding.header};
`;

const SearchPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SelectLocationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LocationSign = styled.div`
  width: 3.5rem;
  height: 2rem;

  background-color: ${({ theme }) => theme.Color.mainColor};
  border-radius: ${({ theme }) => theme.Br.default};

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  color: white;
`;
