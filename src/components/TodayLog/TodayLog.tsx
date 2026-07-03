import { useMoodImage } from "../../hooks/useMoodImage";
import { useMoodQuote } from "../../hooks/useMoodQuote";
import Image from "next/image";
import quoteIcon from "../../assets/images/icon-quote.svg";
import iconSleep from "../../assets/images/icon-sleep.svg";
import iconStar from "../../assets/images/icon-star.svg";

type TodayLogProps = {
  loggedMood: string;
  loggedFeelings: string[];
  loggedText: string;
  loggedSleepHours: string;
};

const TodayLog = ({
  loggedMood,
  loggedFeelings,
  loggedText,
  loggedSleepHours,
}: TodayLogProps) => {
  const moodImage = useMoodImage(loggedMood);
  const moodQuote = useMoodQuote(loggedMood);

  return (
    <div className="today-log">
      <div className="moodlog-container">
        <p className="moodlog-text text-preset-3">
          I&apos;m feeling{" "}
          <span className="moodlog-mood text-preset-2">{loggedMood}</span>
        </p>
        {moodImage && (
          <Image src={moodImage} alt={loggedMood} className="moodlog-image" />
        )}
        <span className="quote-icon">
          <Image src={quoteIcon} alt="Quote" />
        </span>
        {moodQuote && (
          <p className="moodlog-quote text-preset-6--italic">{moodQuote}</p>
        )}
      </div>
      <div className="sleeplog-container">
        <div className="sleeptext-container">
          <span className="sleep-icon">
            <Image src={iconSleep} alt="Sleep" />
          </span>
          <p className="sleeplog-text text-preset-6">Sleep</p>
        </div>
        <span className="text-preset-3">{loggedSleepHours} hours</span>
      </div>
      <div className="feelingslog-container">
        <div className="feelingstext-container">
          <span className="star-icon">
            <Image src={iconStar} alt="Star" />
          </span>
          <p className="feelingslog-text text-preset-6">
            Reflection of the day
          </p>
        </div>
        <p className="text-preset-6 text-reflection">{loggedText}</p>
        <p className="feelings-tags text-preset-6--italic">
          {loggedFeelings.map((feeling) => (
            <span key={feeling}>#{feeling}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default TodayLog;
