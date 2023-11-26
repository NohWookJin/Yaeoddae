// icon
import checkIcon from "../../assets/checkIcon.svg";

function Checkbox({ isChecked }: { isChecked: boolean }) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "20px",
        height: "20px",
        borderRadius: "4px",
        border: "1px solid #D9D9D9",
        backgroundColor: isChecked ? "pink" : "white",
        color: "white",
      }}
    >
      {isChecked && <img src={checkIcon} alt="" />}
    </div>
  );
}

export default Checkbox;
