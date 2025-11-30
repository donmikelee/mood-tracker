import { type ReactElement } from "react";
import { sleepHours } from "../../data/sleepHours";
import SleepHoursOption from "./SleepHoursOption";
import { useState } from "react";
import { useModalStore } from "../../store/useModalStore";

const MoodOptionList = (): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedSleepHours, setSelectedSleepHours] = useState<number | null>(
    null
  );
  const { setLoggedSleepHours } = useModalStore();

  return (
    <div className="lod-mood-options">
      <ul className="options-list">
        {sleepHours.map((sleepHours, index) => (
          <SleepHoursOption
            key={index}
            optionLabel={sleepHours.label}
            optionClicked={() => {
              setSelectedSleepHours(
                selectedSleepHours === index ? null : index
              ),
                setSelectedIndex(index);
              setLoggedSleepHours(sleepHours.label);
            }}
            selected={selectedIndex === index}
          />
        ))}
      </ul>
    </div>
  );
};
export default MoodOptionList;
