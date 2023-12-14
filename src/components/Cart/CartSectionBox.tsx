import { useEffect, useState } from "react";

// components
import CartSelection from "./CartSelection";
import CartSection from "./CartSection";

// stores
import { pickCartList } from "../../store/pickCartList";
import { cartList } from "../../store/cartList";

// styles
import styled from "styled-components";

function CartSectionBox() {
  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
  const [checkboxes, setCheckboxes] = useState<Array<boolean>>([]);

  const { list } = cartList();
  const { addCartItem } = pickCartList();

  const handleTotalCheckboxChange = () => {
    const updatedCheckboxes = new Array(list.length).fill(!isCheckedAll);
    setCheckboxes(updatedCheckboxes);
    setIsCheckedAll(!isCheckedAll);

    list.forEach((item) => {
      const { id, roomGetResponse } = item;
      addCartItem(id, roomGetResponse.price as number, !isCheckedAll);
    });
  };

  const handleCheckboxChange = (id: number, price: number, isChecked: boolean) => {
    const isCheckedId = checkboxes.some((isChecked, index) => isChecked && list[index].id === id);

    if (isCheckedId) {
      addCartItem(id, price, isChecked);
    } else {
      addCartItem(id, price, isChecked);
    }
  };

  const handleEachCheckboxChange = (index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];

    setCheckboxes(updatedCheckboxes);
    setIsCheckedAll(updatedCheckboxes.every((isChecked) => isChecked));

    const { id, roomGetResponse } = list[index];
    if (roomGetResponse.price !== undefined) {
      handleCheckboxChange(id, roomGetResponse.price, updatedCheckboxes[index]);
    }
  };

  useEffect(() => {
    setCheckboxes(new Array(list.length).fill(false));
  }, [list]);

  return (
    <Container>
      <CartSelection checked={isCheckedAll} onChange={handleTotalCheckboxChange} />
      {list.map((item, index) => {
        return (
          <CartSection
            key={item.id}
            roomList={item}
            isChecked={checkboxes[index]}
            onChange={() => handleEachCheckboxChange(index)}
          />
        );
      })}
    </Container>
  );
}

export default CartSectionBox;

const Container = styled.div`
  padding-bottom: 8rem;
`;
