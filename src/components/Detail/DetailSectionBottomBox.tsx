// component & interface
import DetailSectionBottom from "./DetailSectionBottom";
import { IAccmodation } from "../../pages/detailPage/DetailPage";

interface AccommodationRooms {
  accommodation: IAccmodation;
}

function DetailSectionBottomBox({ accommodation }: AccommodationRooms) {
  return (
    <>
      {accommodation.room.map((room) => (
        <DetailSectionBottom key={room.id} room={room} />
      ))}
    </>
  );
}

export default DetailSectionBottomBox;
