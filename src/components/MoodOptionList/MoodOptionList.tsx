import { type ReactElement } from "react";
import MoodOption from "../MoodOption/MoodOption";
import { moods } from "../../data/mood";

type MoodOptionListProps = {
  moodClicked: (index: number) => void;
  selectedIndex: number;
  loggedMood?: (mood: string) => void;
};

const MoodOptionList = ({
  moodClicked,
  selectedIndex,
  loggedMood,
}: MoodOptionListProps): ReactElement => {
  return (
    <div className="lod-mood-options">
      <ul className="options-list">
        {moods.map((mood, index) => (
          <MoodOption
            key={index}
            moodLabel={mood.label}
            moodImage={mood.image}
            moodClicked={() => {
              moodClicked(index);
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
