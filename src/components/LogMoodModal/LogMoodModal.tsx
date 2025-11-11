import iconClose from "../../assets/images/icon-close.svg";
import { type ReactElement, useRef, useEffect } from "react";
import MoodOption from "../MoodOption/MoodOption";
import { useState } from "react";
import {
  useMoodAppStore,
  useFeelingsAppStore,
  useLoggedTextAppStore,
} from "../../store/store";
import ModalContent from "./ModalContent";
import { moods } from "../../data/mood";

type LogMoodModalProps = {
  closeLog: () => void;
};

const LogMoodModal = ({ closeLog }: LogMoodModalProps) => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedFeelings, setSelectedFeelings] = useState<number[]>([]);
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

  const renderTextAreaStep = () => {
    const maxLength: number = 150;

    const handleLoggedTextChange = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setLoggedText(e.target.value);
      setLoggedTextToStore(e.target.value.trim());
    };

    return (
      <div className="loggedtext-container">
        <textarea
          id="log-textarea"
          className="log-textarea text-preset-6--italic"
          placeholder="Today I felt..."
          rows={4}
          maxLength={maxLength}
          onChange={handleLoggedTextChange}
        ></textarea>
        <p className="textarea-counter text-preset-8">
          {loggedText.length}/{maxLength}
        </p>
      </div>
    );
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
            renderOptions={renderTextAreaStep}
          />
        );
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
