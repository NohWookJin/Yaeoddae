import DetailSectionBottom from "./DetailSectionBottom";

import { IAccmodation } from "../../pages/detailPage/DetailPage";

interface IRooms {
  accommodation: IAccmodation;
}

function DetailSectionBottomBox({ accommodation }: IRooms) {
  const { check_in, check_out } = accommodation;

  return (
    <>
      {accommodation.rooms.map((room) => (
        <DetailSectionBottom key={room.id} room={room} checkIn={check_in} checkOut={check_out} />
      ))}
    </>
  );
}

export default DetailSectionBottomBox;
