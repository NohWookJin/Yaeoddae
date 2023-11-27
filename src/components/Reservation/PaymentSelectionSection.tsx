// library
import { useState } from "react";
import styled from "styled-components";

// component
import { SectionDivider } from "./reservationStyles";
import { SectionContainer, SectionLabel } from "./reservationStyles";
import PaymentOptionBox from "./PaymentOptionBox";

// constant
import { PAYMENT_OPTIONS } from "./constants";

function PaymentSelectionSection() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <>
      <SectionContainer>
        <SectionLabel>
          <h2>결제 수단</h2>
          <span>*</span>
        </SectionLabel>
        <PaymentOptionsWrapper>
          {PAYMENT_OPTIONS.map((option, index) => {
            return (
              <PaymentOptionBox
                key={index}
                optionName={option.name}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              >
                {option.children}
              </PaymentOptionBox>
            );
          })}
        </PaymentOptionsWrapper>
      </SectionContainer>
      <SectionDivider />
    </>
  );
}

export default PaymentSelectionSection;

const PaymentOptionsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px 0;
`;
