import iconCheck from "../../assets/images/icon-check.svg";

interface FeelingOptionProps {
  feelingLabel: string;
  feelingClicked: () => void;
  selected: boolean;
}

const FeelingOption = ({
  feelingLabel,
  selected,
  feelingClicked,
}: FeelingOptionProps) => {
  return (
    <li className="feeling-option" onClick={feelingClicked}>
      <div className="feeling-container">
        <span className={`feeling-checkbox ${selected ? "selected" : ""}`}>
          {selected ? <img src={iconCheck} alt="checkmark-icon"></img> : null}
        </span>
        <p className="feeling-label text-preset-6">{feelingLabel}</p>
      </div>
    </li>
  );
};

export default FeelingOption;
