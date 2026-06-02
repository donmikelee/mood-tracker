import Image from "next/image";

type AverageCardProps = {
  title: string;
  description: string;
  dataText: string;
  dataDesc: string;
  moodClass?: string;
  icon?: string;
  filled?: boolean;
};

const AverageCard = ({
  title,
  description,
  dataText,
  dataDesc,
  moodClass,
  icon,
  filled,
}: AverageCardProps) => {
  const modifiers = [
    filled ? "average-data--filled" : "",
    moodClass ? `average-data--${moodClass}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="average-card">
      <div className="average-card-title">
        <p className="average-card-header text-preset-6">
          {title}{" "}
          <span className="average-card-desc text-preset-7">{description}</span>
        </p>
      </div>
      <div className={`average-data${modifiers ? ` ${modifiers}` : ""}`}>
        <div className="average-data-main">
          {icon && <Image src={icon} alt="" className="average-data-icon" />}
          <p className="average-data-text text-preset-4">{dataText}</p>
        </div>
        <p className="average-data-desc text-preset-7">{dataDesc}</p>
      </div>
    </div>
  );
};

export default AverageCard;
