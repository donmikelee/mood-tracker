import iconClose from "../../assets/images/icon-close.svg";
import { type ReactElement, useRef, useEffect } from "react";
import MoodOption from "../MoodOption/MoodOption";
import { useState } from "react";
import { useMoodAppStore, useFeelingsAppStore } from "../../store/store";
import ModalContent from "./ModalContent";
import { feelings } from "../../data/feelings";
import FeelingOption from "../FeelingOption/FeelingOption";
import { moods } from "../../data/mood";

type LogMoodModalProps = {
  closeLog: () => void;
};

const LogMoodModal = ({ closeLog }: LogMoodModalProps) => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedFeelings, setSelectedFeelings] = useState<number[]>([]);
  const [step, setStep] = useState<number>(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const setLoggedMood = useMoodAppStore((state) => state.setLoggedMood);
  const setLoggedFeelings = useFeelingsAppStore(
    (state) => state.setLoggedFeelings
  );

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeLog();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeLog()]);

  useEffect(() => {
    switch (step) {
      case 0:
        setIsButtonDisabled(selectedMood === null);
        break;
      case 1:
        setIsButtonDisabled(selectedFeelings.length === 0);
        break;
      default:
        setIsButtonDisabled(isButtonDisabled);
    }
  }, [step, selectedMood, selectedFeelings]);

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
    const moodsRender = moods.map((mood, index) => (
      <MoodOption
        key={index}
        moodLabel={mood.label}
        moodImage={mood.image}
        moodClicked={() => {
          setSelectedMood(index);
          setLoggedMood(mood.label);
        }}
        selected={selectedMood === index}
      />
    ));

    return moodsRender;
  };

  const renderFeelingOptions = (): ReactElement[] => {
    const handleFeelingClick = (index: number) => {
      if (selectedFeelings.includes(index)) {
        setSelectedFeelings((prev) => prev.filter((item) => item !== index));
        setLoggedFeelings(
          selectedFeelings
            .filter((item) => item !== index)
            .map((i) => feelings[i].label)
        );
        return;
      }
      if (selectedFeelings.length >= 3) return;
      setSelectedFeelings((prev) => [...prev, index]);
      setLoggedFeelings(
        [...selectedFeelings, index].map((i) => feelings[i].label)
      );
    };

    const feelingsRender = feelings.map((feeling, index) => (
      <FeelingOption
        key={index}
        feelingLabel={feeling.label}
        feelingClicked={() => {
          handleFeelingClick(index);
        }}
        selected={selectedFeelings.includes(index)}
      />
    ));

    return feelingsRender;
  };

  const setNextStep = () => {
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
        return (
          <ModalContent
            contentTitle="How did you feel?"
            contentDescription="Select up to three tags:"
            renderOptions={renderFeelingOptions}
          />
        );
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
            disabled={isButtonDisabled}
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
