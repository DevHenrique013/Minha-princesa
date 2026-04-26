import { Section } from "@/components/base/Section";
import Container from "@/components/base/Container";
import { cn } from "@/lib/utils";
import Icon from "@/components/icons/icon";
import { Heart } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Backlight } from "@/components/ui/backlight";

type HeroProps = {
  onEnter: () => void;
};

export default function HeroSection({ onEnter }: HeroProps) {
  return (
    <>
      <Section variant="hero" theme="pink" className="overflow-hidden">
        <Container className="relative z-10">
          <div
            className={cn(
              "flex flex-col items-center text-center",
              "gap-4 md:gap-8",
            )}
          >
            <div className="space-y-4 max-w-2xl">
              <h1
                className={cn(
                  "text-3xl md:text-5xl font-semibold tracking-tight",
                  "text-[#E6E6EB]",
                )}
              >
                Fiz pensando em você meu bebê 🩷🩷🩷
              </h1>

              <p className={cn("text-sm md:text-base", "text-[#A8ACB8]")}>
                Eu sei que demorei bastante, mas finalmente consegui fazer algo
                só nosso, que represente nossa história de amor.
              </p>
            </div>

            <div className="flex items-center justify-center relative z-20 m-6">
              <InteractiveHoverButton
                icon={<Icon icon={Heart} className="text-white" />}
                onClick={onEnter}
              >
                Explorar
              </InteractiveHoverButton>
            </div>

            <div className="relative w-full max-w-4xl mt-10 px-4">
              <div
                className={cn(
                  "w-full aspect-[16/9]",
                  "rounded-xl border border-[#5f3d5b]",
                  "bg-[#181A20]",
                )}
              >
                <Backlight>
                  <img
                    className="w-full h-full object-cover"
                    src="images/us/imagem_4.webp"
                    alt="site bugou"
                  />
                </Backlight>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
