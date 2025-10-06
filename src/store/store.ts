import { create } from 'zustand';

type MoodAppStore = {
    loggedMood: string | null;
}

export const useMoodAppStore = create<MoodAppStore>(() => ({
    loggedMood: null,
}));