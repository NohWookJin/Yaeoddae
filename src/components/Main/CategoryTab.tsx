import styled from "styled-components";
import { areaCategory } from "../../pages/mainPage/MainPage";

function CategoryTab({ setCurrentPage }: CategoryTabProps) {
  const handleClick = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <CategoryContainer>
      {areaCategory.map((category, index) => (
        <Category key={category.area} onClick={() => handleClick(index)}>
          {category.area}
        </Category>
      ))}
    </CategoryContainer>
  );
}

export default CategoryTab;

const CategoryContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.Color.mainColor};
  border-bottom: 1px solid ${({ theme }) => theme.Color.mainColor};
  display: flex;
  justify-content: space-around;
  margin: 0 20px;
`;

const Category = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.Fs.default};
  font-weight: 500;
  padding: ${({ theme }) => theme.Padding.default};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.Color.activeColor};
  }
`;

interface CategoryTabProps {
  setCurrentPage: (index: number) => void;
}
