import {
  getSleepLevel,
  SLEEP_TICK_LABELS,
} from "../MoodSleepChart/MoodSleepChart";
import { MoodEntry } from "@/hooks/useMoodEntries";
import iconHappy from "../../assets/images/icon-happy-white.svg";
import iconVeryHappy from "../../assets/images/icon-very-happy-white.svg";
import iconNeutral from "../../assets/images/icon-neutral-white.svg";
import iconSad from "../../assets/images/icon-sad-white.svg";
import iconVerySad from "../../assets/images/icon-very-sad-white.svg";
import AverageCard from "./AverageCard";

const MOOD_SCALE: Record<string, number> = {
  "very sad": 1,
  sad: 2,
  neutral: 3,
  happy: 4,
  "very happy": 5,
};

const MOOD_FROM_SCALE: Record<number, string> = {
  1: "very sad",
  2: "sad",
  3: "neutral",
  4: "happy",
  5: "very happy",
};

const MOOD_ICONS: Record<string, string> = {
  "very sad": iconVerySad,
  sad: iconSad,
  neutral: iconNeutral,
  happy: iconHappy,
  "very happy": iconVeryHappy,
};

interface AverageStatsProps {
  loggedEntries: MoodEntry[];
}

const AverageStats = ({ loggedEntries }: AverageStatsProps) => {
  const last5 = loggedEntries.slice(0, 5);
  console.log("Last 5 entries for average calculation:", last5);

  const avgMood =
    last5.length > 0
      ? MOOD_FROM_SCALE[
          Math.round(
            last5.reduce(
              (sum, entry) => sum + (MOOD_SCALE[entry.mood] ?? 3),
              0,
            ) / last5.length,
          )
        ]
      : "neutral";

  console.log("Calculated average mood:", avgMood);

  const avgSleepHours =
    last5.length > 0
      ? last5.reduce((sum, entry) => sum + entry.sleep_hours, 0) / last5.length
      : 0;
  const avgSleepLabel = SLEEP_TICK_LABELS[getSleepLevel(avgSleepHours)];

  const avgMoodLabel = avgMood.replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <div className="average-stats">
      <AverageCard
        title="Average Mood"
        description="(Last 5 Check-ins)"
        dataText={avgMoodLabel}
        dataDesc="Based on your last 5 check-ins."
        moodClass={avgMood}
        icon={MOOD_ICONS[avgMood]}
        filled
      />
      <AverageCard
        title="Average Sleep"
        description="(Last 5 Check-ins)"
        dataText={avgSleepLabel}
        dataDesc="Based on your last 5 check-ins."
        filled
      />
    </div>
  );
};

export default AverageStats;
