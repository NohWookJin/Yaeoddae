import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Beloved() {
  const navigate = useNavigate();

  return (
    <BelovedItem>
      <ItemImage onClick={() => navigate("/search?area-code=JEJU")} $text="JEJU">
        <ItemText>제주도</ItemText>
        <ImageOverlay />
      </ItemImage>
      <ItemImage onClick={() => navigate("/search?area-code=BUSAN")} $text="BUSAN">
        <ItemText>부산</ItemText>
        <ImageOverlay />
      </ItemImage>
      <ItemImage onClick={() => navigate("/search?area-code=GANGWON")} $text="GANGWON">
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
  margin: 1rem;
`;

const ImageOverlay = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.3;
  transition: opacity 0.2s;
`;

const ItemImage = styled.div<{ $text?: string }>`
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
