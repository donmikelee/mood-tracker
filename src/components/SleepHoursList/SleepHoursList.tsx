import { type ReactElement } from "react";
import { sleepHours } from "../../data/sleepHours";
import SleepHoursOption from "./SleepHoursOption";
import { useState } from "react";

type MoodOptionListProps = {
  optionClicked: (index: number) => void;
  loggedSleepHours?: (mood: string) => void;
};

const MoodOptionList = ({
  optionClicked,
  loggedSleepHours,
}: MoodOptionListProps): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <div className="lod-mood-options">
      <ul className="options-list">
        {sleepHours.map((sleepHours, index) => (
          <SleepHoursOption
            key={index}
            optionLabel={sleepHours.label}
            optionClicked={() => {
              optionClicked(index), setSelectedIndex(index);
              if (loggedSleepHours) {
                loggedSleepHours(sleepHours.label);
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
