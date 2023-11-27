import styled from "styled-components";

interface InputProps {
  isRequired: boolean;
  label: string;
  placeholder: string;
  type: "number" | "text" | "password";
  value?: string | number;
  setValue?: React.Dispatch<React.SetStateAction<string | number>>;
  marginTop?: string;
  marginBottom?: string;
  errorState?: boolean;
  helpMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(data: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (data.setValue) {
      data.setValue(event.target.value);
    }
  };

  return (
    <Container $marginTop={data.marginTop} $marginBottom={data.marginBottom}>
      <label htmlFor="input">
        <span>{data.label}</span>
        <span>{data.isRequired ? "*" : ""}</span>
      </label>
      <input
        type={data.type}
        id="input"
        placeholder={data.placeholder}
        value={data.value}
        onChange={handleInputChange}
      />
      <div>{data.errorState && data.helpMessage}</div>
    </Container>
  );
}

export default Input;

const Container = styled.div<{ $marginTop: string | undefined; $marginBottom: string | undefined }>`
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
    padding: 10px 16px;
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
