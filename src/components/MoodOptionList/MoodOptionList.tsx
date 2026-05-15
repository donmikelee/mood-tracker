import { type ReactElement, useState } from "react";
import MoodOption from "./MoodOption";
import { moods } from "../../data/mood";
import { useModalStore } from "../../store/useModalStore";

const MoodOptionList = (): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const { setLoggedMood } = useModalStore();

  return (
    <div className="lod-mood-options">
      <ul className="options-list">
        {moods.map((mood, index) => (
          <MoodOption
            key={index}
            moodLabel={mood.label}
            moodImage={mood.image}
            moodClicked={() => {
              setSelectedMood(selectedMood === index ? null : index);
              setSelectedIndex(index);
              setLoggedMood(mood.label);
            }}
            selected={selectedIndex === index}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoodOptionList;
