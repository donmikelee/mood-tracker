import iconClose from "../../assets/images/icon-close.svg";
import { type ReactElement } from "react";
import iconNeutral from "../../assets/images/icon-neutral-color.svg";
import iconHappy from "../../assets/images/icon-happy-color.svg";
import iconSad from "../../assets/images/icon-sad-color.svg";
import iconVerySad from "../../assets/images/icon-very-sad-color.svg";
import iconVeryHAppy from "../../assets/images/icon-very-happy-color.svg";
import MoodOption from "../MoodOption/MoodOption";
import { useState } from "react";

type LogMoodModalProps = {
  closeLog: () => void;
};

const LogMoodModal = ({ closeLog }: LogMoodModalProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const renderSteps = (): ReactElement[] => {
    const steps: number = 4;
    const activeStep: number = 0;

    return Array.from({ length: steps }, (_, i) => (
      <span
        key={i}
        className={`step ${i === activeStep ? "step--active" : ""}`}
      />
    ));
  };
  const renderMoodOptions = (): ReactElement[] => {
    const moods = [
      { label: "Very Happy", image: iconVeryHAppy },
      { label: "Happy", image: iconHappy },
      { label: "Neutral", image: iconNeutral },
      { label: "Sad", image: iconSad },
      { label: "Very Sad", image: iconVerySad },
    ];

    const moodsRender = moods.map((mood, index) => (
      <MoodOption
        key={index}
        moodLabel={mood.label}
        moodImage={mood.image}
        moodCliked={() => setSelectedIndex(index)}
        selected={selectedIndex === index}
      />
    ));

    return moodsRender;
  };

  return (
    <div className="log-mood-modal">
      <div className="log-modal-content">
        <p className="text-preset-2">Log your mood</p>
        <span className="close-icon" onClick={closeLog}>
          <img src={iconClose} alt="close icon" />
        </span>
        <div className="log-stepper">{renderSteps()}</div>
        <p className="text-preset-3">How was your mood today?</p>
        <div className="lod-mood-options">
          <ul className="options-list">{renderMoodOptions()}</ul>
        </div>
        <button
          className="primary-button text-preset-5 log-continue-button"
          disabled={selectedIndex === null}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LogMoodModal;
