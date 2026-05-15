import { useModalStore } from "../store/useModalStore";

export const useButtonUnlocker = () => {
  const {
     step,
     loggedMood,
     loggedFeelings,
     loggedText,
     loggedSleepHours
   } = useModalStore();

  const getIsButtonDisabled = () => {
    switch (step) {
      case 0:
        return loggedMood === null;
      case 1:
        return loggedFeelings.length === 0;
      case 2:
        return loggedText.trim().length === 0;
      case 3:
        return loggedSleepHours === null;
      default:
        return false;
    }
  };

  return {
    step,
    loggedMood,
    loggedFeelings,
    loggedText,
    loggedSleepHours,
    getIsButtonDisabled,
  };
};
