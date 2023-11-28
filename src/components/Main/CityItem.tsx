import styled from "styled-components";
import { ItemType } from "./CityList";
import { useNavigate } from "react-router-dom";

function removeTextAfterBracket(name: string) {
  return name.replace(/\[.*/, "");
}

function CityItem({ item }: CityItemProps) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(
      `/detail/${item.AccommodationId}?name=${item.name}&area-code=${item.location.areaCode}`
    );
  };

  return (
    <ItemContainer onClick={handleNavigate}>
      <ImageContainer $image={item.image} />
      <ItemTitle>{removeTextAfterBracket(item.name)}</ItemTitle>
    </ItemContainer>
  );
}

export default CityItem;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ImageContainer = styled.div<{ $image: string }>`
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 150px;
  height: 140px;
  border-radius: ${({ theme }) => theme.Br.default};
`;

const ItemTitle = styled.p`
  width: 165px;
  height: 60px;
  padding: ${({ theme }) => theme.Padding.default};
  font-size: ${({ theme }) => theme.Fs.default};
  margin: 0;
`;

interface CityItemProps {
  item: ItemType;
}
