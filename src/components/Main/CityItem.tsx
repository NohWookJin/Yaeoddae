import styled from "styled-components";
import { ItemType } from "./CityList";
import { useNavigate } from "react-router-dom";

function removeTextAfterBracket(name: string) {
  return name.replace(/\[.*/, "");
}
enum AreaCodeMapping {
  SEOUL = "1",
  GYEONGGI = "31",
  GANGWON = "32",
  BUSAN = "6",
}

function CityItem({ item }: CityItemProps) {
  const areaString = Object.keys(AreaCodeMapping).find(
    (key) => AreaCodeMapping[key as keyof typeof AreaCodeMapping] === item.location.areaCode
  );

  const navigate = useNavigate();
  const handleNavigate = () => {
    console.log(item.AccommodationId, item.name, item.location.areaCode);
    navigate(`/detail/${item.AccommodationId}?keyword=${item.name}&area-code=${areaString}`);
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
