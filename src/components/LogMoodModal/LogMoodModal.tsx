import iconClose from "../../assets/images/icon-close.svg";
import Image from "next/image";
import { useRef } from "react";
import Button from "../Button/Button";
import Stepper from "../Stepper/Stepper";
import { useButtonUnlocker } from "../../hooks/useButtonUnlocker";
import ModalStepContent from "./ModalStepContent";
import { useModalStore } from "../../store/useModalStore";

type LogMoodModalProps = {
  closeLog: () => void;
  submitMoodData?: () => void;
};

const LogMoodModal = ({ closeLog, submitMoodData }: LogMoodModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { step, setStep, reset } = useModalStore();
  const { getIsButtonDisabled } = useButtonUnlocker();

  const handleClose = () => {
    reset();
    closeLog();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const setNextStep = () => {
    if (step === 3) {
      submitMoodData?.();
      handleClose();
      return;
    }

    setStep(step + 1);
  };

  return (
    <div className="log-mood-modal" onClick={handleOverlayClick}>
      <div className="log-modal-content" ref={modalRef}>
        <p className="log-modal-title text-preset-2">Log your mood</p>
        <span className="close-icon" onClick={handleClose}>
          <Image src={iconClose} alt="close icon" />
        </span>
        <Stepper activeStep={step} />
        <ModalStepContent />
        <Button
          additionalClass="text-preset-5 log-continue-button"
          disabled={getIsButtonDisabled()}
          onClick={setNextStep}
          text={step === 3 ? "Submit" : "Continue"}
        >
          {step === 3 ? "Submit" : "Continue"}
        </Button>
      </div>
    </div>
  );
};

export default LogMoodModal;
