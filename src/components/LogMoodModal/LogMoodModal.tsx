import iconClose from "../../assets/images/icon-close.svg";
import { useRef, useEffect } from "react";
import { useState } from "react";
import {
  useMoodAppStore,
  useFeelingsAppStore,
  useLoggedTextAppStore,
} from "../../store/store";
import ModalContent from "./ModalContent";
import Stepper from "../Stepper/Stepper";
import MoodOptionList from "../MoodOptionList/MoodOptionList";
import FeelingOptionList from "../FeelingOptionList/FeelingOptionList";
import TextareaStep from "../TextareaStep/TextareaStep";

type LogMoodModalProps = {
  closeLog: () => void;
};

const LogMoodModal = ({ closeLog }: LogMoodModalProps) => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedFeelings, setSelectedFeelings] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [step, setStep] = useState<number>(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [loggedText, setLoggedText] = useState<string>("");

  const setLoggedMood = useMoodAppStore((state) => state.setLoggedMood);
  const setLoggedFeelings = useFeelingsAppStore(
    (state) => state.setLoggedFeelings
  );
  const setLoggedTextToStore = useLoggedTextAppStore(
    (state) => state.setLoggedText
  );

  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeLog();
    }
  };

  useEffect(() => {
    switch (step) {
      case 0:
        setIsButtonDisabled(selectedMood === null);
        break;
      case 1:
        setIsButtonDisabled(selectedFeelings.length === 0);
        break;
      case 2:
        setIsButtonDisabled(loggedText.trim().length === 0);
        break;
      default:
        setIsButtonDisabled(isButtonDisabled);
    }
  }, [step, selectedMood, loggedText, selectedFeelings]);

  const setNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const renderModalContent = () => {
    switch (step) {
      case 0:
        return (
          <ModalContent
            contentTitle="How was your mood today?"
            renderOptions={
              <MoodOptionList
                moodClicked={(index: number) => {
                  setSelectedMood(index);
                  setSelectedIndex(index);
                }}
                selectedIndex={selectedIndex === null ? -1 : selectedIndex}
                loggedMood={setLoggedMood}
              />
            }
          />
        );
      case 1:
        return (
          <ModalContent
            contentTitle="How did you feel?"
            contentDescription="Select up to three tags:"
            renderOptions={
              <FeelingOptionList
                selectedFeelings={selectedFeelings}
                setSelectedFeelings={setSelectedFeelings}
                setLoggedFeelings={setLoggedFeelings}
              />
            }
          />
        );
      case 2:
        return (
          <ModalContent
            contentTitle="Write about your day..."
            renderOptions={
              <TextareaStep
                loggedText={loggedText}
                setLoggedText={setLoggedText}
                setLoggedTextToStore={setLoggedTextToStore}
              />
            }
          />
        );
      case 3:
        return <p>Step 4 content</p>;
      default:
        return null;
    }
  };

  return (
    <div className="log-mood-modal" onClick={handleOverlayClick}>
      <div className="log-modal-content" ref={modalRef}>
        <p className="text-preset-2">Log your mood</p>
        <span className="close-icon" onClick={closeLog}>
          <img src={iconClose} alt="close icon" />
        </span>
        <Stepper activeStep={step} />
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
