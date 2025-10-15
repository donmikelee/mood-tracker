 import iconNeutral from "../assets/images/icon-neutral-color.svg";
import iconHappy from "../assets/images/icon-happy-color.svg";
import iconSad from "../assets/images/icon-sad-color.svg";
import iconVerySad from "../assets/images/icon-very-sad-color.svg";
import iconVeryHAppy from "../assets/images/icon-very-happy-color.svg";
 
 export interface Mood {
    label: string;
    image: string;
  }
 
 export const moods = [
      { label: "Very Happy", image: iconVeryHAppy },
      { label: "Happy", image: iconHappy },
      { label: "Neutral", image: iconNeutral },
      { label: "Sad", image: iconSad },
      { label: "Very Sad", image: iconVerySad },
];