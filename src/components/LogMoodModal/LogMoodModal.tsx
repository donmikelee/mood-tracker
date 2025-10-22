import iconClose from "../../assets/images/icon-close.svg";
import { useState } from "react";
import Steps from "../Steps/Steps";
import MoodOptionList from "../MoodOptionList/MoodOptionList";

type LogMoodModalProps = {
  closeLog: () => void;
};

const LogMoodModal = ({ closeLog }: LogMoodModalProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="log-mood-modal">
      <div className="log-modal-content">
        <p className="text-preset-2">Log your mood</p>
        <span className="close-icon" onClick={closeLog}>
          <img src={iconClose} alt="close icon" />
        </span>
        <Steps />
        <p className="text-preset-3">How was your mood today?</p>
        <MoodOptionList
          moodClicked={(index: number) => setSelectedIndex(index)}
          selectedIndex={selectedIndex === null ? -1 : selectedIndex}
        />
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
