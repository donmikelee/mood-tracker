import { create } from "zustand";

type ModalStore = {
  step: number;
  setStep: (step: number) => void;

  selectedMood: number | null;
  setSelectedMood: (mood: number | null) => void;

  selectedFeelings: number[];
  setSelectedFeelings: (
    value: number[] | ((prev: number[]) => number[])
  ) => void;

  loggedMood: string | null;
  setLoggedMood: (mood: string | null) => void;

  loggedFeelings: string[];
  setLoggedFeelings: (feelings: string[]) => void;

  loggedText: string;
  setLoggedText: (text: string) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  step: 0,
  setStep: (step) => set({ step }),

  selectedMood: null,
  setSelectedMood: (mood) => set({ selectedMood: mood }),

  selectedFeelings: [],
  setSelectedFeelings: (value) =>
    set((state) => ({
      selectedFeelings:
        typeof value === "function"
          ? value(state.selectedFeelings)
          : value,
    })),

  loggedMood: null,
  setLoggedMood: (mood) => set({ loggedMood: mood }),

  loggedFeelings: [],
  setLoggedFeelings: (feelings) => set({ loggedFeelings: feelings }),

  loggedText: "",
  setLoggedText: (text) => set({ loggedText: text }),
}));
