"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import CustomBar from "./CustomBar";
import type { MoodEntry } from "@/hooks/useMoodEntries";

interface MoodSleepChartProps {
  loggedEntries: MoodEntry[];
}

export const getSleepLevel = (hours: number): number => {
  if (hours <= 2) return 2;
  if (hours <= 4) return 4;
  if (hours <= 6) return 6;
  if (hours <= 8) return 8;
  return 10;
};

export const data = Array.from({ length: 11 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (10 - i));
  const sleep = Math.floor(Math.random() * 10) + 1;
  return {
    date: d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    sleep,
    sleepLevel: getSleepLevel(sleep),
    mood: ["very happy", "happy", "neutral", "sad", "very sad"][
      Math.floor(Math.random() * 5)
    ],
  };
});

export const SLEEP_TICK_LABELS: Record<number, string> = {
  2: "0 - 2 hours",
  4: "3 - 4 hours",
  6: "5 - 6 hours",
  8: "7 - 8 hours",
  10: "9+ hours",
};

const renderYAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const isTopTick = payload.value === 9;
  const offsetY = isTopTick ? -8 : 2;
  return (
    <g transform={`translate(${x},${y})`}>
      <image
        href={"/icon-sleep.svg"}
        x={-78}
        y={offsetY - 10}
        height={10}
        width={10}
      />
      <text x={-64} y={offsetY} className="mood-chart-yaxis-text text-preset-9">
        {SLEEP_TICK_LABELS[payload.value]}
      </text>
    </g>
  );
};

const MoodSleepChart = ({ loggedEntries }: MoodSleepChartProps) => {
  const chartData = loggedEntries.map((entry) => ({
    date: new Date(entry.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    sleep: entry.sleep_hours,
    sleepLevel: getSleepLevel(entry.sleep_hours),
    mood: entry.mood.toLowerCase().replace(/\s+/g, ""),
  }));

  return (
    <div className="mood-sleep-card">
      <h2 className="mood-chart-title text-preset-3">Mood and sleep trends</h2>
      <div className="mood-sleep-chart">
        <ResponsiveContainer width="100%" height={300} className="mood-chart">
          <BarChart
            data={chartData}
            barCategoryGap={18}
            barSize={40}
            margin={{ top: 16 }}
          >
            <CartesianGrid stroke="#EAEAEA" vertical={false} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              className="mood-chart-xaxis-text text-preset-9"
            />
            <YAxis
              domain={[0, 10]}
              ticks={[2, 4, 6, 8, 10]}
              width={90}
              axisLine={false}
              tickLine={false}
              tick={renderYAxisTick}
            />
            <Bar
              dataKey="sleepLevel"
              barSize={40}
              shape={(props: any) => (
                <CustomBar {...props} trackedData={props.payload} />
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MoodSleepChart;
