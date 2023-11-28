// library
import { useState } from "react";
import styled from "styled-components";
import { SetURLSearchParams } from "react-router-dom";

// icon
import Search from "../../assets/icons/search.svg?react";

interface Props {
  placeholder: string;
  keyword: string;
  setSearchParams: SetURLSearchParams;
  marginTop?: string;
  marginBottom?: string;
  errorState?: boolean;
  helpMessage?: string;
}

function SearchInput(props: Props) {
  const [inputKeyword, setInputKeyword] = useState(props.keyword);

  return (
    <Container $marginTop={props.marginTop} $marginBottom={props.marginBottom}>
      <input
        type="text"
        value={inputKeyword}
        onChange={(e) => setInputKeyword(e.target.value)}
        placeholder={props.placeholder}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            props.setSearchParams((prev) => {
              const prevAreaCode = prev.get("area-code") || "";
              return {
                ["area-code"]: prevAreaCode,
                keyword: inputKeyword,
              };
            });
          }
        }}
      />
      <SearchIcon />
    </Container>
  );
}

export default SearchInput;

const Container = styled.div<{ $marginTop: string | undefined; $marginBottom: string | undefined }>`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: ${(props) => props.theme.Fs.default};
  margin-top: ${(props) => (props.$marginTop ? props.$marginTop : "")};
  margin-bottom: ${(props) => (props.$marginBottom ? props.$marginBottom : "")};

  label {
    display: flex;
    gap: 4px;
    color: ${(props) => props.theme.Color.defaultFontColor};

    > span:last-child {
      color: ${(props) => props.theme.Color.mainColor};
    }
  }

  input {
    padding: 10px 16px 10px 32px;
    border: ${(props) => props.theme.Border.thinBorder};
    border-radius: ${(props) => props.theme.Br.default};
    outline: none;

    &:focus {
      border-color: ${(props) => props.theme.Color.activeColor};
    }
  }

  div {
    height: 20px;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme.Color.activeColor};
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;

  top: 0.75rem;
  left: 0.5rem;
`;
