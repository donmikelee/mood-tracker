import { MOOD_QUOTES, toMoodLabel } from "../data/moodImages";

export const useMoodQuote = (mood: string): string | null =>
  MOOD_QUOTES[toMoodLabel(mood)] ?? null;
