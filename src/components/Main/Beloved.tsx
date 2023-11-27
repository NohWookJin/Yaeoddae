import styled from "styled-components";

function Beloved() {
  return (
    <BelovedItem>
      <ItemImage $text="jeju">
        <ItemText>제주도</ItemText>
        <ImageOverlay />
      </ItemImage>
      <ItemImage $text="busan">
        <ItemText>부산</ItemText>
        <ImageOverlay />
      </ItemImage>
      <ItemImage $text="kangwon">
        <ItemText>강원도</ItemText>
        <ImageOverlay />
      </ItemImage>
    </BelovedItem>
  );
}

export default Beloved;

const BelovedItem = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;

const ImageOverlay = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.3;
  transition: opacity 0.2s;
`;

const ItemImage = styled.a<{ $text?: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${({ $text }) => `images/${$text}.png`});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  z-index: 1;
  &:hover > ${ImageOverlay} {
    opacity: 0;
  }
`;

const ItemText = styled.h4`
  font-size: ${({ theme }) => theme.Fs.default};
  z-index: 3;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
