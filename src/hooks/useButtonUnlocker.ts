import { useModalStore } from "../store/useModalStore";

export const useButtonUnlocker = () => {
  const {
     step,
     selectedMood,
     setSelectedMood,
     selectedFeelings,
     setSelectedFeelings,
     loggedText,
     setLoggedText,
   } = useModalStore();

  const getIsButtonDisabled = () => {
    switch (step) {
      case 0:
        return selectedMood === null;
      case 1:
        return selectedFeelings.length === 0;
      case 2:
        return loggedText.trim().length === 0;
      default:
        return false;
    }
  };

  return {
    step,
    selectedMood,
    setSelectedMood,
    selectedFeelings,
    setSelectedFeelings,
    loggedText,
    setLoggedText,
    getIsButtonDisabled,
  };
};
