type MoodOptionProps = {
  moodLabel: string;
  moodImage: any;
  moodCliked?: () => void;
  selected?: boolean;
};

const MoodOption = ({
  moodLabel,
  moodImage,
  selected,
  moodCliked,
}: MoodOptionProps) => {
  return (
    <li
      className={`mood-option ${selected ? "selected" : ""}`}
      onClick={moodCliked}
    >
      <div className="mood-radio-container">
        <span
          className={`mood-radiobutton ${selected ? "selected" : ""}`}
        ></span>
        <p className="mood-label text-preset-5">{moodLabel}</p>
      </div>
      <img className="mood-img" src={moodImage} alt={moodLabel} />
    </li>
  );
};

export default MoodOption;
