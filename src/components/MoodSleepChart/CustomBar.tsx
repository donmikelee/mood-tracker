import iconHappy from "../../assets/images/icon-happy-white.svg";
import iconVeryHappy from "../../assets/images/icon-very-happy-white.svg";
import iconNeutral from "../../assets/images/icon-neutral-white.svg";
import iconSad from "../../assets/images/icon-sad-white.svg";
import iconVerySad from "../../assets/images/icon-very-sad-white.svg";

interface CustomBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  radius?: number | number[];
  trackedData?: {
    mood: string;
  };
}

const moodIcons: Record<string, string> = {
  happy: iconHappy,
  veryHappy: iconVeryHappy,
  neutral: iconNeutral,
  sad: iconSad,
  verySad: iconVerySad,
};

const CustomBar = ({
  x = 0,
  y = 0,
  height = 0,
  trackedData = { mood: "" },
}: CustomBarProps) => {
  const normalizedMood = trackedData.mood.replace(/\s+/g, "-").toLowerCase();
  const moodClass = `mood-${normalizedMood}`;

  const iconKey = trackedData.mood.replace(/\s+([a-z])/g, (_, c) =>
    c.toUpperCase()
  );
  const icon = moodIcons[iconKey as keyof typeof moodIcons];

  return (
    <g>
      <rect
        x={x - 10}
        y={y}
        width={40}
        height={height}
        className={moodClass}
        rx={20}
      />
      {icon && height > 30 && (
        <foreignObject x={x - 10} y={y + 5} width={40} height={30}>
          <div className="mood-icon-container">
            <img className="mood-icon" src={icon} alt={trackedData.mood} />
          </div>
        </foreignObject>
      )}
    </g>
  );
};

export default CustomBar;
