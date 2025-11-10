import iconClose from "../../assets/images/icon-close.svg";
import { useRef, useState } from "react";
import ModalContent from "./ModalContent";
import MoodOptionList from "../MoodOptionList/MoodOptionList";
import Stepper from "../Stepper/Stepper";

type LogMoodModalProps = {
  closeLog: () => void;
};

const LogMoodModal = ({ closeLog }: LogMoodModalProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [step, setStep] = useState<number>(0);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeLog();
    }
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
            renderOptions={
              <MoodOptionList
                moodClicked={(index: number) => setSelectedIndex(index)}
                selectedIndex={selectedIndex === null ? -1 : selectedIndex}
              />
            }
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
