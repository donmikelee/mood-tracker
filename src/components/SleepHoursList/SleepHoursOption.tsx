type SleepHoursOptionProps = {
  optionLabel: string;
  optionClicked?: () => void;
  selected?: boolean;
};

const SleepHoursOption = ({
  optionLabel,
  selected,
  optionClicked,
}: SleepHoursOptionProps) => {
  return (
    <li
      className={`mood-option ${selected ? "selected" : ""}`}
      onClick={optionClicked}
    >
      <div className="mood-radio-container">
        <span
          className={`mood-radiobutton ${selected ? "selected" : ""}`}
        ></span>
        <p className="mood-label text-preset-5">{optionLabel} hours</p>
      </div>
    </li>
  );
};

export default SleepHoursOption;
