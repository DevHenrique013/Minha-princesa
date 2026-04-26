import { Section, SectionTitle } from "@/components/base/Section";
import { MansonryGrid } from "./mansonry";
import { galleryItems } from "@/data/gallery";
import { ImageCard } from "./image-card";
import { MusicCard } from "./music-card";
import { Heart } from "lucide-react";

export default function MansonrySection() {
  return (
    <Section className="w-full py-24" theme="purple">
      {/* HEADER VISUAL */}
      <div className="text-center mb-16 relative">
        {/* glow */}
        <div
          className="
            absolute inset-0 blur-3xl opacity-30
          "
          style={{
            background:
              "radial-gradient(circle, var(--primary), transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-4">
          <SectionTitle>
            <div className="flex">
              <Heart
                size={32}
                className="text-[color:var(--primary)] drop-shadow-[0_0_10px_var(--primary)]"
              />
              Nossos Momentos
              <Heart
              size={32}
              className="text-[color:var(--primary)] drop-shadow-[0_0_10px_var(--primary)]"
            />
            </div>
           
            
          </SectionTitle>

          
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-4">
        <MansonryGrid columns={3}>
          {galleryItems.map((item) =>
            item.type === "image" ? (
              <ImageCard key={item.id} item={item} />
            ) : (
              <MusicCard key={item.id} item={item} />
            ),
          )}
        </MansonryGrid>
      </div>
    </Section>
  );
}
