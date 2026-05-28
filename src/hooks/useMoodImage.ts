import { MOOD_IMAGES, MoodLabel } from "../data/moodImages";

export const useMoodImage = (mood: string): string | null =>
  MOOD_IMAGES[mood as MoodLabel] ?? null;
