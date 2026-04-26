import { Section, SectionTitle } from "@/components/base/Section";
import { BrainThoughts } from "./BrainToughts";
import { thoughts } from "./Toughts";

export default function ThoughtSection() {
  return (
    <>
      <Section theme="blue">
        <SectionTitle>Alguns Pensamentos meus</SectionTitle>
        <BrainThoughts topics={thoughts} />
      </Section>
    </>
  );
}
