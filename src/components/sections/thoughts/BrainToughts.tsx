import { useState, useEffect } from "react";
import type { ThoughtTopic } from "@/types/tought";
import { BrainVisual } from "./BrainComponent";
import { ThoughtButton } from "./ThoughtButton";
import { LineDisplay } from "./PhraseDisplay";

export function BrainThoughts({
  topics,
}: {
  topics: ThoughtTopic[];
}) {
  const [active, setActive] = useState(false);
  const [topicIndex, setTopicIndex] = useState<number | null>(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [usedTopics, setUsedTopics] = useState<number[]>([]);

  const currentTopic =
    topicIndex !== null ? topics[topicIndex] : null;

  const allUsed = usedTopics.length === topics.length;

  function start() {
    if (allUsed) return;

    // pega próximos não usados
    const remaining = topics
      .map((_, i) => i)
      .filter((i) => !usedTopics.includes(i));

    const next = remaining[0]; // ordem fixa (ou random se quiser)

    setTopicIndex(next);
    setUsedTopics((prev) => [...prev, next]);
    setLineIndex(0);
    setActive(true);
  }

  // fluxo das linhas
  useEffect(() => {
    if (!active || !currentTopic) return;

    if (lineIndex >= currentTopic.lines.length) return;

    const line = currentTopic.lines[lineIndex];
    const time = 2000 * line.duration;

    const timeout = setTimeout(() => {
      setLineIndex((prev) => prev + 1);
    }, time);

    return () => clearTimeout(timeout);
  }, [active, lineIndex, currentTopic]);

  // fim do pensamento
  useEffect(() => {
    if (!currentTopic) return;

    if (lineIndex >= currentTopic.lines.length) {
      const timeout = setTimeout(() => {
        setActive(false);
        setLineIndex(0);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [lineIndex, currentTopic]);

  return (
    <section className="relative py-32 text-center overflow-hidden">
      <BrainVisual active={active} />

      <div className="relative z-10 h-32 flex items-center justify-center">
        {currentTopic && active && (
          <LineDisplay
            key={lineIndex}
            text={currentTopic.lines[lineIndex]?.text}
          />
        )}
      </div>

      <div className="mt-12">
        <ThoughtButton
          active={active}
          disabled={allUsed}
          onClick={start}
        />
      </div>
    </section>
  );
}