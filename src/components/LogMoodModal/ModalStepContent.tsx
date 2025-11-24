import ModalContent from "./ModalContent";
import MoodOptionList from "../MoodOptionList/MoodOptionList";
import FeelingOptionList from "../FeelingOptionList/FeelingOptionList";
import TextareaStep from "../TextareaStep/TextareaStep";
import { useModalStore } from "../../store/useModalStore";
import { useState } from "react";
import SleepHoursList from "../SleepHoursList/SleepHoursList";

const ModalStepContent = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const {
    step,
    selectedMood,
    setSelectedMood,
    selectedFeelings,
    setSelectedFeelings,
    selectedSleepHours,
    setSelectedSleepHours,
    loggedText,
    setLoggedText,
    setLoggedMood,
    setLoggedFeelings,
    setLoggedSleepHours,
  } = useModalStore();

  const renderModalContent = () => {
    switch (step) {
      case 0:
        return (
          <ModalContent
            contentTitle="How was your mood today?"
            renderOptions={
              <MoodOptionList
                moodClicked={(index: number) => {
                  setSelectedMood(selectedMood === index ? null : index);
                }}
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
              />
            }
          />
        );

      case 3:
        return (
          <ModalContent
            contentTitle="How many hours did you sleep last night?"
            renderOptions={
              <SleepHoursList
                optionClicked={(index: number) => {
                  setSelectedSleepHours(
                    selectedSleepHours === index ? null : index
                  );
                }}
                loggedSleepHours={setLoggedSleepHours}
              />
            }
          />
        );

      default:
        return null;
    }
  };

  return <>{renderModalContent()}</>;
};

export default ModalStepContent;
