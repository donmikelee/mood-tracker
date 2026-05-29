import { data, getSleepLevel, SLEEP_TICK_LABELS } from "../MoodSleepChart/MoodSleepChart";
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

const last5 = data.slice(-5);

const avgMood =
  MOOD_FROM_SCALE[
    Math.round(
      last5.reduce((sum, entry) => sum + MOOD_SCALE[entry.mood], 0) / 5
    )
  ];

const avgSleepHours =
  last5.reduce((sum, entry) => sum + entry.sleep, 0) / 5;
const avgSleepLabel = SLEEP_TICK_LABELS[getSleepLevel(avgSleepHours)];

const avgMoodClass = avgMood.replace(/\s+/g, "-");
const avgMoodLabel = avgMood.replace(/\b\w/g, (c) => c.toUpperCase());

const AverageStats = () => {
  return (
    <div className="average-stats">
      <AverageCard
        title="Average Mood"
        description="(Last 5 Check-ins)"
        dataText={avgMoodLabel}
        dataDesc="Based on your last 5 check-ins."
        moodClass={avgMoodClass}
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
