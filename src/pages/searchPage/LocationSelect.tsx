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
    { label: "전체", value: "전체" },
    { label: "서울", value: "서울" },
    { label: "부산", value: "부산" },
    { label: "대구", value: "대구" },
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
