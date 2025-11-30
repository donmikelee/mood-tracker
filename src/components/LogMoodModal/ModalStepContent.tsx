import ModalContent from "./ModalContent";
import MoodOptionList from "../MoodOptionList/MoodOptionList";
import FeelingOptionList from "../FeelingOptionList/FeelingOptionList";
import TextareaStep from "../TextareaStep/TextareaStep";
import { useModalStore } from "../../store/useModalStore";
import SleepHoursList from "../SleepHoursList/SleepHoursList";

const ModalStepContent = () => {
  const { step } = useModalStore();

  const renderModalContent = () => {
    switch (step) {
      case 0:
        return (
          <ModalContent
            contentTitle="How was your mood today?"
            renderOptions={<MoodOptionList />}
          />
        );
      case 1:
        return (
          <ModalContent
            contentTitle="How did you feel?"
            contentDescription="Select up to three tags:"
            renderOptions={<FeelingOptionList />}
          />
        );

      case 2:
        return (
          <ModalContent
            contentTitle="Write about your day..."
            renderOptions={<TextareaStep />}
          />
        );

      case 3:
        return (
          <ModalContent
            contentTitle="How many hours did you sleep last night?"
            renderOptions={<SleepHoursList />}
          />
        );

      default:
        return null;
    }
  };

  return <>{renderModalContent()}</>;
};

export default ModalStepContent;
