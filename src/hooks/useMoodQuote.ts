import { MOOD_QUOTES, MoodLabel } from "../data/moodImages";

export const useMoodQuote = (mood: string): string | null =>
  MOOD_QUOTES[mood as MoodLabel] ?? null;
