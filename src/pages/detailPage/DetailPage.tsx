import DetailSectionTop from "../../components/Detail/DetailSectionTop";
import DetailDate from "../../components/Detail/DetailDate";
import DetailSectionBottom from "../../components/Detail/DetailSectionBottom";

import styled from "styled-components";

function DetailPage() {
  return (
    <Container>
      <DetailSectionTop />
      <DetailDate />
      <DetailSectionBottom />
      <DetailSectionBottom />
      <DetailSectionBottom />
    </Container>
  );
}

export default DetailPage;

const Container = styled.section`
  border-left:  ${({ theme }) => theme.Border.thinBorder};
  border-right:  ${({ theme }) => theme.Border.thinBorder};
  background-color: ${({ theme }) => theme.Color.backgroundColor}};
`;
