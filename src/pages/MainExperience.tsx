import { Section, SectionTitle } from "@/components/base/Section";
import MansonrySection from "@/components/sections/mansonry";
import PoemsSection from "@/components/sections/poetry/Components/PoemsSection";
import ThoughtSection from "@/components/sections/thoughts/ToughtSection";

export default function MainExperience() {
  return (
    <>
    <MansonrySection />
    <PoemsSection />
    <ThoughtSection/>
    <Section theme="orange">
      <SectionTitle>
        Cabô :D
      </SectionTitle>
    </Section>
    </>
  );
}