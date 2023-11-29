// components & interface
import CartSelection from "./CartSelection";
import CartSection from "./CartSection";
import { ICart } from "../../pages/cartPage/CartPage";
import { useCart } from "../../store/getCart";

// styles
import styled from "styled-components";
import { useEffect, useState } from "react";

interface Cart {
  list: ICart[];
}

function CartSectionBox({ list }: Cart) {
  const [lists, setLists] = useState<ICart[]>([]);
  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
  const [checkboxes, setCheckboxes] = useState<Array<boolean>>([]);

  const { addCartItem } = useCart();

  const handleTotalCheckboxChange = () => {
    const updatedCheckboxes = new Array(lists.length).fill(!isCheckedAll);
    setCheckboxes(updatedCheckboxes);
    setIsCheckedAll(!isCheckedAll);

    lists.forEach((item) => {
      const { id, roomGetResponse } = item;
      addCartItem(id, roomGetResponse.price as number, !isCheckedAll);
    });
  };

  const handleCheckboxChange = (id: number, price: number, isChecked: boolean) => {
    const isCheckedId = checkboxes.some((isChecked, index) => isChecked && lists[index].id === id);

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

    const { id, roomGetResponse } = lists[index];
    handleCheckboxChange(id, roomGetResponse.price as number, updatedCheckboxes[index]);
  };

  useEffect(() => {
    setLists(list);
    setCheckboxes(new Array(list.length).fill(false));
  }, [list]);

  return (
    <Container>
      <CartSelection checked={isCheckedAll} onChange={handleTotalCheckboxChange} />
      {lists.map((item, index) => {
        return (
          <CartSection
            key={item.id}
            list={item}
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
