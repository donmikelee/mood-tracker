import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import CustomBar from "./CustomBar";
import iconSleep from "../../assets/images/icon-sleep.svg";

const data = [
  { date: "Apr 06", sleep: 8, mood: "happy" },
  { date: "Apr 07", sleep: 7, mood: "neutral" },
  { date: "Apr 08", sleep: 6, mood: "sad" },
  { date: "Apr 09", sleep: 4, mood: "very sad" },
  { date: "Apr 10", sleep: 9, mood: "very happy" },
  { date: "Apr 11", sleep: 6, mood: "happy" },
  { date: "Apr 06", sleep: 8, mood: "happy" },
  { date: "Apr 07", sleep: 7, mood: "neutral" },
  { date: "Apr 08", sleep: 6, mood: "sad" },
  { date: "Apr 09", sleep: 4, mood: "very sad" },
  { date: "Apr 10", sleep: 9, mood: "very happy" },
];

const renderYAxisTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <image href={iconSleep} x={-58} y={-12} height={10} width={10} />
      <text x={-44} y={-2} className="mood-chart-yaxis-text text-preset-9">
        {`${payload.value} hours`}
      </text>
    </g>
  );
};

const MoodSleepChart = () => {
  return (
    <div className="mood-sleep-card">
      <h2 className="mood-chart-title text-preset-3">Mood and sleep trends</h2>
      <div className="mood-sleep-chart">
        <ResponsiveContainer width="100%" height={300} className="mood-chart">
          <BarChart data={data} barCategoryGap={18}>
            <CartesianGrid stroke="#EAEAEA" vertical={false} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              className="mood-chart-xaxis-text text-preset-9"
            />
            <YAxis
              domain={[0, 9]}
              axisLine={false}
              tickLine={false}
              tick={renderYAxisTick}
            />
            <Bar dataKey="sleep" shape={<CustomBar />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MoodSleepChart;
