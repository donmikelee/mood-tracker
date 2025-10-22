import { type ReactElement } from "react";
import iconNeutral from "../../assets/images/icon-neutral-color.svg";
import iconHappy from "../../assets/images/icon-happy-color.svg";
import iconSad from "../../assets/images/icon-sad-color.svg";
import iconVerySad from "../../assets/images/icon-very-sad-color.svg";
import iconVeryHappy from "../../assets/images/icon-very-happy-color.svg";
import MoodOption from "../MoodOption/MoodOption";

type MoodOptionListProps = {
  moodClicked: (index: number) => void;
  selectedIndex: number;
};

const MoodOptionList = ({
  moodClicked,
  selectedIndex,
}: MoodOptionListProps): ReactElement => {
  const moods = [
    { label: "Very Happy", image: iconVeryHappy },
    { label: "Happy", image: iconHappy },
    { label: "Neutral", image: iconNeutral },
    { label: "Sad", image: iconSad },
    { label: "Very Sad", image: iconVerySad },
  ];

  return (
    <div className="lod-mood-options">
      <ul className="options-list">
        {moods.map((mood, index) => (
          <MoodOption
            key={index}
            moodLabel={mood.label}
            moodImage={mood.image}
            moodClicked={() => moodClicked(index)}
            selected={selectedIndex === index}
          />
        ))}
      </ul>
    </div>
  );
};
export default MoodOptionList;
