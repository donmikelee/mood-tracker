import AverageCard from "./AverageCard";

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
