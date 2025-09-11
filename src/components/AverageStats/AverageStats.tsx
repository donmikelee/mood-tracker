type AverageCardProps = {
  title: string;
  description: string;
  dataText: string;
  dataDesc: string;
};

const AverageCard = ({
  title,
  description,
  dataText,
  dataDesc,
}: AverageCardProps) => (
  <div className="average-card">
    <div className="average-card-title">
      <span className="text-preset-6">
        {title}{" "}
        <span className="average-card-desc text-preset-7">{description}</span>
      </span>
    </div>
    <div className="average-data">
      <span className="average-data-text text-preset-4">{dataText}</span>
      <span className="average-data-desc text-preset-7">{dataDesc}</span>
    </div>
  </div>
);

const AverageStats = () => {
  return (
    <div className="average-stats">
      <AverageCard
        title="Average Mood"
        description="(Last 5 Check-ins)"
        dataText="Keep tracking!"
        dataDesc="Log 5 check-ins to see your average mood."
      />
      <AverageCard
        title="Average Sleep"
        description="(Last 5 Check-ins)"
        dataText="Not enough data yet!"
        dataDesc="Track 5 nights to view average sleep"
      />
    </div>
  );
};

export default AverageStats;
