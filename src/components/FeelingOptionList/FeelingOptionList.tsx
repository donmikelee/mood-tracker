import { useState } from "react";
import { feelings } from "../../data/feelings";
import FeelingOption from "./FeelingOption";
import { useModalStore } from "../../store/useModalStore";

const FeelingOptionList = () => {
  const [selectedFeelings, setSelectedFeelings] = useState<number[]>([]);
  const { setLoggedFeelings } = useModalStore();
  const handleFeelingClick = (index: number) => {
    if (selectedFeelings.includes(index)) {
      setSelectedFeelings((prev) => prev.filter((item) => item !== index));
      setLoggedFeelings(
        selectedFeelings
          .filter((item) => item !== index)
          .map((i) => feelings[i].label)
      );
      return;
    }
    if (selectedFeelings.length >= 3) return;
    setSelectedFeelings((prev) => [...prev, index]);
    setLoggedFeelings(
      [...selectedFeelings, index].map((i) => feelings[i].label)
    );
  };

  return (
    <div className="lod-mood-options">
      <ul className="options-list">
        {feelings.map((feeling, index) => (
          <FeelingOption
            key={index}
            feelingLabel={feeling.label}
            feelingClicked={() => {
              handleFeelingClick(index);
            }}
            selected={selectedFeelings.includes(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FeelingOptionList;
