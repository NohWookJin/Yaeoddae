import { useRef, useState } from "react";
import styled from "styled-components";
import searchSVG from "../../assets/icons/mainSearch.svg?react";

function SearchBar() {
  const [isSearching, setIsSearching] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setIsSearching(true);
  };

  const handleFocus = () => {
    setIsSearching(true);
  };

  const handleBlur = () => {
    setIsSearching(false);
  };

  return (
    <SearchBarStyle>
      <SearchInput
        ref={inputRef}
        placeholder="어디로 갈까요?"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {!isSearching ? <SearchIcon onClick={handleClick} /> : null}
    </SearchBarStyle>
  );
}

export default SearchBar;

const SearchBarStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  margin: 10px 0 30px 0;
`;

const SearchInput = styled.input`
  display: flex;
  justify-content: center;
  width: 60%;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  font-size: 12px;
  padding: 6px 15px;
  margin: 0 0 15px 0;
`;

const SearchIcon = styled(searchSVG)`
  cursor: pointer;
  position: absolute;
  right: 23%;
  top: 15%;
`;
