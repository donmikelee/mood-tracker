import { type ReactElement, useState } from "react";
import MoodOption from "./MoodOption";
import { moods } from "../../data/mood";
import { useModalStore } from "../../store/useModalStore";

const MoodOptionList = (): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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
              const isDeselecting = selectedIndex === index;
              setSelectedIndex(isDeselecting ? null : index);
              setLoggedMood(isDeselecting ? null : mood.label);
            }}
            selected={selectedIndex === index}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoodOptionList;
