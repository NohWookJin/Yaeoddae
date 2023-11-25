import styled from "styled-components";
import { ItemType } from "./CityList";

interface CityItemProps {
  item: ItemType;
}

const CityItem = ({ item }: CityItemProps) => {
  return (
    <ItemContainer>
      <ImageContainer $image={item.image} />
      <ItemTitle>{item.name}</ItemTitle>
    </ItemContainer>
  );
};

export default CityItem;

const ItemContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ImageContainer = styled.div<{ $image: string }>`
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 140px;
  height: 140px;
  border-radius: ${({ theme }) => theme.Br.default};
`;

const ItemTitle = styled.p`
  padding: ${({ theme }) => theme.Padding.default};
  font-size: ${({ theme }) => theme.Fs.default};
`;
