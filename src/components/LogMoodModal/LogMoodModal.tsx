import iconClose from "../../assets/images/icon-close.svg";
import { type ReactElement, useRef, useEffect } from "react";
import iconNeutral from "../../assets/images/icon-neutral-color.svg";
import iconHappy from "../../assets/images/icon-happy-color.svg";
import iconSad from "../../assets/images/icon-sad-color.svg";
import iconVerySad from "../../assets/images/icon-very-sad-color.svg";
import iconVeryHAppy from "../../assets/images/icon-very-happy-color.svg";
import MoodOption from "../MoodOption/MoodOption";
import { useState } from "react";
import { useMoodAppStore } from "../../store/store";
import ModalContent from "./ModalContent";

type LogMoodModalProps = {
  closeLog: () => void;
};

const LogMoodModal = ({ closeLog }: LogMoodModalProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [step, setStep] = useState<number>(0);

  const setLoggedMood = useMoodAppStore((state) => state.setLoggedMood);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeLog();
        console.log("klik poza modalem");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeLog()]);

  const renderSteps = (): ReactElement[] => {
    const steps: number = 4;
    const activeStep: number = step;

    return Array.from({ length: steps }, (_, i) => (
      <span
        key={i}
        className={`step ${i <= activeStep ? "step--active" : ""}`}
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
        moodClicked={() => {
          setSelectedIndex(index);
          setLoggedMood(mood.label);
        }}
        selected={selectedIndex === index}
      />
    ));

    return moodsRender;
  };

  const setNextStep = () => {
    if (step === 0 && selectedIndex === null) return;
    setStep((prev) => prev + 1);
  };

  const renderModalContent = () => {
    switch (step) {
      case 0:
        return (
          <ModalContent
            contentTitle="How was your mood today?"
            renderOptions={renderMoodOptions}
          />
        );
      case 1:
        return <p>Step 2 content</p>;
      case 2:
        return <p>Step 3 content</p>;
      case 3:
        return <p>Step 4 content</p>;
      default:
        return null;
    }
  };

  return (
    <div className="log-mood-modal">
      <div className="log-modal-content" ref={modalRef}>
        <p className="text-preset-2">Log your mood</p>
        <span className="close-icon" onClick={closeLog}>
          <img src={iconClose} alt="close icon" />
        </span>
        <div className="log-stepper">{renderSteps()}</div>
        {renderModalContent()}
        {step === 3 ? (
          "Finished"
        ) : (
          <button
            className="primary-button text-preset-5 log-continue-button"
            disabled={selectedIndex === null}
            onClick={setNextStep}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default LogMoodModal;
