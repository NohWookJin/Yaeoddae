// library
import { useRef } from "react";
import Select, { SelectInstance } from "react-select";

interface Props {
  location: { label: string; value: string };
  setLocation: React.Dispatch<
    React.SetStateAction<{
      label: string;
      value: string;
    }>
  >;
}

function LocationSelect({ location, setLocation }: Props) {
  const selectRef = useRef<SelectInstance>(null);

  const optionList = [
    { label: "전체", value: "" },
    { label: "서울", value: "SEOUL" },
    { label: "인천", value: "INCHEON" },
    { label: "대전", value: "DAEJEON" },
    { label: "대구", value: "DAEGU" },
    { label: "광주", value: "GWANGJU" },
    { label: "부산", value: "BUSAN" },
    { label: "울산", value: "ULSAN" },
    { label: "세종", value: "SEJONG" },
    { label: "경기", value: "GYEONGGI" },
    { label: "강원", value: "GANGWON" },
    { label: "충북", value: "CHUNGBUK" },
    { label: "충남", value: "CHUNGNAM" },
    { label: "경북", value: "GYEONGBUK" },
    { label: "경남", value: "GYEONGNAM" },
    { label: "전북", value: "JEONBUK" },
    { label: "전남", value: "JEONNAM" },
    { label: "제주", value: "JEJU" },
  ];

  const handleOnChange = (nextValue: unknown) => {
    selectRef.current!.blur();
    setLocation(nextValue as { label: string; value: string });
  };

  return (
    <Select
      ref={selectRef}
      isSearchable={false}
      value={location}
      options={optionList}
      onChange={handleOnChange}
      styles={{
        container: (provided) => ({
          ...provided,
          width: "80%",
          outline: "none",
        }),

        control: (provided, state) => ({
          ...provided,
          background: "#fff",
          minHeight: "34px",
          height: "34px",
          borderColor: state.isFocused ? "#ff3e3e" : "#D9D9D9",
          boxShadow: "none",
          outline: "none",
          "&:hover": { borderColor: state.isFocused ? "#ff3e3e" : "#D9D9D9" },
        }),

        valueContainer: (provided) => ({
          ...provided,
          height: "34px",
          padding: "0 0 0 34px",
          textAlign: "center",
          transform: "translateY(-5%)",
        }),

        indicatorSeparator: () => ({
          display: "none",
        }),

        indicatorsContainer: (provided) => ({
          ...provided,
          height: "34px",
        }),

        option: (provided, state) => ({
          ...provided,
          height: "32px",
          padding: "4px 0 0 0",
          textAlign: "center",
          backgroundColor: state.isSelected ? "#ff8d8d" : "#fff",
        }),
      }}
    />
  );
}

export default LocationSelect;
