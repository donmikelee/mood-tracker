import iconClose from "../../assets/images/icon-close.svg";
import { useRef } from "react";
import Stepper from "../Stepper/Stepper";
import { useButtonUnlocker } from "../../hooks/useButtonUnlocker";
import ModalStepContent from "./ModalStepContent";
import { useModalStore } from "../../store/useModalStore";

type LogMoodModalProps = {
  closeLog: () => void;
};

const LogMoodModal = ({ closeLog }: LogMoodModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { step, setStep } = useModalStore();
  const { getIsButtonDisabled } = useButtonUnlocker();

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeLog();
    }
  };

  const setNextStep = () => {
    if (step === 3) {
      closeLog();
      return;
    }

    setStep(step + 1);
  };

  return (
    <div className="log-mood-modal" onClick={handleOverlayClick}>
      <div className="log-modal-content" ref={modalRef}>
        <p className="text-preset-2">Log your mood</p>
        <span className="close-icon" onClick={closeLog}>
          <img src={iconClose} alt="close icon" />
        </span>
        <Stepper activeStep={step} />
        <ModalStepContent />
        <button
          className="primary-button text-preset-5 log-continue-button"
          disabled={getIsButtonDisabled()}
          onClick={setNextStep}
        >
          {step === 3 ? "Submit" : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default LogMoodModal;
