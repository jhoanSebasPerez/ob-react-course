export const LEVELS = {
  NORMAL: "NORMAL",
  BLOCKING: "BLOCKING",
  URGENT: "URGENT",
};

// ? return string values of each level property
export const levelsValues = Object.keys(LEVELS).map((key) => LEVELS[key]);
