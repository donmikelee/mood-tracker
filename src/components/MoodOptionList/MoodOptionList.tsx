import { type ReactElement } from "react";
import MoodOption from "./MoodOption";
import { moods } from "../../data/mood";
import { useState } from "react";

type MoodOptionListProps = {
  moodClicked: (index: number) => void;
  loggedMood?: (mood: string) => void;
};

const MoodOptionList = ({
  moodClicked,
  loggedMood,
}: MoodOptionListProps): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <div className="lod-mood-options">
      <ul className="options-list">
        {moods.map((mood, index) => (
          <MoodOption
            key={index}
            moodLabel={mood.label}
            moodImage={mood.image}
            moodClicked={() => {
              moodClicked(index), setSelectedIndex(index);
              if (loggedMood) {
                loggedMood(mood.label);
              }
            }}
            selected={selectedIndex === index}
          />
        ))}
      </ul>
    </div>
  );
};
export default MoodOptionList;
