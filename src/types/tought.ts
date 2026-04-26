export type ThoughtLine = {
  text: string;
  duration: number; // 0.1 - 1 (multiplicador)
};

export type ThoughtTopic = {
  title: string;
  lines: ThoughtLine[];
};