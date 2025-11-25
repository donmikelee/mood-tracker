import { create } from "zustand";

type ModalStore = {
  step: number;
  setStep: (step: number) => void;

  loggedMood: string | null;
  setLoggedMood: (mood: string | null) => void;

  loggedFeelings: string[];
  setLoggedFeelings: (feelings: string[]) => void;

  loggedText: string;
  setLoggedText: (text: string) => void;

  loggedSleepHours: string | null;
  setLoggedSleepHours: (hours: string | null) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  step: 0,
  setStep: (step) => set({ step }),

  loggedMood: null,
  setLoggedMood: (mood) => set({ loggedMood: mood }),

  loggedFeelings: [],
  setLoggedFeelings: (feelings) => set({ loggedFeelings: feelings }),

  loggedText: "",
  setLoggedText: (text) => set({ loggedText: text }),

  loggedSleepHours: null,
  setLoggedSleepHours: (hours) => set({ loggedSleepHours: hours }),
}));
