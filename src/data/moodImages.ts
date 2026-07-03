import veryHappy from "../assets/images/Very Happy.svg";
import happy from "../assets/images/Happy.svg";
import neutral from "../assets/images/Neutral.svg";
import sad from "../assets/images/Sad.svg";
import verySad from "../assets/images/Very Sad.svg";

export const MoodLabel = {
  VeryHappy: "Very Happy",
  Happy: "Happy",
  Neutral: "Neutral",
  Sad: "Sad",
  VerySad: "Very Sad",
} as const;

export type MoodLabel = (typeof MoodLabel)[keyof typeof MoodLabel];

export const MOOD_IMAGES: Record<MoodLabel, string> = {
  [MoodLabel.VeryHappy]: veryHappy,
  [MoodLabel.Happy]: happy,
  [MoodLabel.Neutral]: neutral,
  [MoodLabel.Sad]: sad,
  [MoodLabel.VerySad]: verySad,
};

export const MOOD_QUOTES: Record<MoodLabel, string> = {
  [MoodLabel.VeryHappy]: "When your heart is full, share your light with the world.",
  [MoodLabel.Happy]: "Happiness grows when it's shared with others.",
  [MoodLabel.Neutral]: "A calm mind can find opportunity in every moment.",
  [MoodLabel.Sad]: "One small positive thought can change your entire day.",
  [MoodLabel.VerySad]: "You are stronger than you think; the storm will pass.",
};

export const toMoodLabel = (mood: string): MoodLabel =>
  mood.replace(/\b\w/g, (c) => c.toUpperCase()) as MoodLabel;
