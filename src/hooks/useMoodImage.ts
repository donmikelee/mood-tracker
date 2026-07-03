import { MOOD_IMAGES, toMoodLabel } from "../data/moodImages";

export const useMoodImage = (mood: string): string | null =>
  MOOD_IMAGES[toMoodLabel(mood)] ?? null;
