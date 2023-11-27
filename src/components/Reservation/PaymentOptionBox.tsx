// library
import React from "react";
import styled from "styled-components";

function PaymentOptionBox({
  children,
  optionName,
  selectedOption,
  setSelectedOption,
}: {
  children: JSX.Element;
  optionName: string;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}) {
  const isSelected = selectedOption === optionName;

  return (
    <Container $isSelected={isSelected} onClick={() => setSelectedOption(optionName)}>
      {children}
    </Container>
  );
}

export default PaymentOptionBox;

const Container = styled.div<{ $isSelected: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 41px;
  width: calc(50% - 12px);
  border-radius: ${(props) => props.theme.Br.default};
  border: ${(props) =>
    props.$isSelected ? `1px solid ${props.theme.Color.mainColor}` : props.theme.Border.thinBorder};

  background-color: ${(props) => (props.$isSelected ? "rgba(255, 141, 141, 0.10)" : "")};

  span {
    font-size: ${(props) => props.theme.Fs.default};
  }

  img {
    height: 20px;
  }
`;
