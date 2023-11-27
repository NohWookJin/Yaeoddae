// library
import styled from "styled-components";

// component
import Caution from "./Caution";

// constant
import { CAUTIONS_LIST } from "./constants";

function PaymentCautions() {
  return (
    <Container>
      {CAUTIONS_LIST.map((caution, index) => {
        return <Caution key={index} title={caution.title} content={caution.content} />;
      })}
    </Container>
  );
}

export default PaymentCautions;

const Container = styled.div`
  margin: 20px 16px 30px;
  padding: 12px;
  border-radius: ${(props) => props.theme.Br.default};
  background: rgba(255, 141, 141, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
