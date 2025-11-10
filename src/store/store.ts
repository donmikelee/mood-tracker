import { create } from 'zustand';

type MoodAppStore = {
    loggedMood: string | null;
    setLoggedMood: (mood: string) => void;
}

export const useMoodAppStore = create<MoodAppStore>((set) => ({
    loggedMood: null,
    setLoggedMood: (mood) => set({ loggedMood: mood }),
}));