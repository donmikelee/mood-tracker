import { create } from 'zustand';

type MoodAppStore = {
    loggedMood: string | null;
    setLoggedMood: (mood: string) => void;
}

type FeelingsAppStore = {
    loggedFeelings: string[];
    setLoggedFeelings: (feelings:  string[]) => void;
}

export const useMoodAppStore = create<MoodAppStore>((set) => ({
    loggedMood: null,
    setLoggedMood: (mood) => set({ loggedMood: mood }),
}));

export const useFeelingsAppStore = create<FeelingsAppStore>((set) => ({
    loggedFeelings: [],
    setLoggedFeelings: (feelings) => set({ loggedFeelings: feelings }),
}));


