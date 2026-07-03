export interface sleepHours {
  label: string;
}

export const sleepHours: sleepHours[] = [
  { label: "9+" },
  { label: "7 - 8" },
  { label: "5 - 6"},
  { label: "3 - 4"},
  { label: "0 - 2"},
];

export const getSleepRangeLabel = (hours: number): string =>
  sleepHours.find((option) => parseInt(option.label) === hours)?.label ??
  String(hours);
