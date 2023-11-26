// interface
import { IAccmodation } from "../../pages/detailPage/DetailPage";

// style
import styled from "styled-components";

interface AccommodationInfo {
  accommodation: IAccmodation;
}

function DetailSectionTop({ accommodation }: AccommodationInfo) {
  const { name, location, image } = accommodation.accommodation;

  return (
    <Container>
      <ImageSection>
        <img src={image} alt="detail-image" />
      </ImageSection>
      <TextSection>
        <h3>{name}</h3>
        <span>{location}</span>
      </TextSection>
    </Container>
  );
}

export default DetailSectionTop;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  ${({ theme }) => `
    background-color: ${theme.Color.componentColor}
  `}
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -0.15rem;
  img {
    max-width: 371.9px;
  }
`;

const TextSection = styled.div`
  ${({ theme }) => `
    padding: 0.5rem 1rem;
    h3 {
      font-size: ${theme.Fs.tagTitle};
      font-weight: 600;
      color:  ${theme.Color.mainFontColor};
      margin-bottom: 0.2rem;
    }
    span {
      font-size: ${theme.Fs.default};
      color:  ${theme.Color.defaultFontColor};
    }
  `}
`;
