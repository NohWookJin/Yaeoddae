// library
import styled from "styled-components";

// icon
import Search from "../../assets/icons/search.svg?react";
import { useRef } from "react";

interface InputProps {
  placeholder: string;
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  marginTop?: string;
  marginBottom?: string;
  errorState?: boolean;
  helpMessage?: string;
}

function SearchInput(data: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container $marginTop={data.marginTop} $marginBottom={data.marginBottom}>
      <input
        ref={inputRef}
        type="text"
        placeholder={data.placeholder}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            data.setKeyword(inputRef.current!.value);
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
