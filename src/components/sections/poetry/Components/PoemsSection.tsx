import { useState } from "react";
import PoemCard from "./PoemCard";
import PoemModal from "./PoemModal";
import { PoemContainer } from "./PoemTypography";
import FirstPoem from "../layouts/Preludio";
import SecondPoem from "../layouts/Sol";
import ThirdPoem from "../layouts/Terra";
import FourthPoem from "../layouts/Lua";
import FifthPoem from "../layouts/Viagem";
import Icon from "@/components/icons/icon";
import { Book, Sun, Moon, Earth, Rocket } from "lucide-react";
import { SectionTitle } from '../../../base/Section';


export default function PoemsSection() {
  const [selected, setSelected] = useState<number | null>(null);

  const poems = [
    {
      title: "Mil e um Poemas",
      image: "/images/poems/capa_mil_e_um_poemas.webp",
      content: (
        <>
          <FirstPoem />
        </>
      ),
      clipIcon: <Icon icon={Book} className="w-6 h-6" />,
    },
    {
      title: "O Sol",
      image: "/images/poems/capa_o_sol.webp",
      content: (
        <>
          <SecondPoem />
        </>
      ),
      clipIcon: <Icon icon={Sun} className="w-6 h-6" />,
    },
    {
      title: "A Terra",
      image: "/images/poems/capa_a_terra.webp",
      content: (
        <>
          <ThirdPoem />
        </>
      ),
      clipIcon: <Icon icon={Earth} className="w-6 h-6" />,
    },
    {
      title: "A Lua",
      image: "/images/poems/capa_a_lua.webp",
      content: (
        <>
          <FourthPoem />
        </>
      ),
      clipIcon: <Icon icon={Moon} className="w-6 h-6" />,
    },
    {
      title: "A Viagem",
      image: "/images/poems/capa_a_viagem.webp",
      content: (
        <>
          <FifthPoem />
        </>
      ),
      clipIcon: <Icon icon={Rocket} className="w-6 h-6" />,
    },
  ];

  return (
    <>
    <SectionTitle>
      Meus Poemas
    </SectionTitle>
      <div className="max-w-5xl mx-auto grid gap-8">
        {/* linha 1 */}
        <div className="grid grid-cols-3 gap-8">
          {poems.slice(0, 3).map((poem, i) => (
            <PoemCard
              key={i}
              color="#FF7DA9"
              title={poem.title}
              image={poem.image}
              clipIcon={poem.clipIcon}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>

        {/* linha 2 */}
        <div className="grid grid-cols-2 gap-8">
          {poems.slice(3).map((poem, i) => (
            <PoemCard
              color="#FF7DA9"
              key={i + 3}
              clipIcon={poem.clipIcon}
              title={poem.title}
              image={poem.image}
              onClick={() => setSelected(i + 3)}
            />
          ))}
        </div>
      </div>

      {/* modal */}
      <PoemModal open={selected !== null} onClose={() => setSelected(null)}>
        <PoemContainer>
          {selected !== null && poems[selected].content}
        </PoemContainer>
      </PoemModal>
    </>
  );
}
