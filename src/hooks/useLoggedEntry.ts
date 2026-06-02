import { useState } from "react";

export type LoggedEntry = {
  loggedMood: string;
  loggedFeelings: string[];
  loggedText: string;
  loggedSleepHours: string;
};

const defaultEntry: LoggedEntry = {
  loggedMood: "Very Happy",
  loggedFeelings: ["Energized", "Motivated", "Content"],
  loggedText:
    "Had a great day! Went for a run in the morning, had a productive work session, and enjoyed a nice dinner with friends.",
  loggedSleepHours: "8 hours",
};

export const useLoggedEntry = () => {
  const [loggedEntry, setLoggedEntry] = useState<LoggedEntry | null>(null);
  return { loggedEntry, setLoggedEntry };
};
