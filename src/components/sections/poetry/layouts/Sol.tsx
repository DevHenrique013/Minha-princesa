import * as Poem from "../Components/PoemTypography";

export default function SecondPoem() {
  return (
    <>
      <Poem.PoemTitle>O Sol</Poem.PoemTitle>

      <Poem.PoemText>
        <Poem.AnimatedLine index={0}>Como o sol, você me fascina</Poem.AnimatedLine>

        <Poem.AnimatedLine index={1}>Como o sol, você me aquece</Poem.AnimatedLine>

        <Poem.AnimatedLine index={2}>
          Como o sol, você é <Poem.Highlight>divina</Poem.Highlight>
        </Poem.AnimatedLine>

        <Poem.AnimatedLine index={3}>Minha mente você <Poem.Highlight>esclarece</Poem.Highlight></Poem.AnimatedLine>
      </Poem.PoemText>
      <Poem.PoemText>
        <Poem.AnimatedLine index={4}>Cada pensamento que te orbita</Poem.AnimatedLine>
        <Poem.AnimatedLine index={5}>
          Torna meu pensar mais leve
        </Poem.AnimatedLine>
        <Poem.AnimatedLine index={6}>A lacuna entre nós é tão grande</Poem.AnimatedLine>
        <Poem.AnimatedLine index={7}>E ainda sinto seu calor em minha pele</Poem.AnimatedLine>
      </Poem.PoemText>
     <Poem.PoemText>
        <Poem.Line>Seu <Poem.Highlight>sorriso</Poem.Highlight> clareia</Poem.Line>
        <Poem.Line>
          Sua <Poem.Highlight>voz</Poem.Highlight> incendeia
        </Poem.Line>
        <Poem.Line>
          Seu <Poem.Highlight>olhar</Poem.Highlight> devasta
        </Poem.Line>
        <Poem.Line>
          A distância é <Poem.Highlight>violenta</Poem.Highlight>
        </Poem.Line>
      </Poem.PoemText>
      <Poem.PoemText>
        <Poem.Line>Irradia sobre meus tecidos</Poem.Line>
        <Poem.Line>Vitamina que nutre meu corpo</Poem.Line>
        <Poem.Line>Reflete por pelos e cabelos</Poem.Line>
        <Poem.Line>Vitaliza e me ergue de novo</Poem.Line>
      </Poem.PoemText>
      <Poem.PoemText>
        <Poem.Line>Não posso te encarar</Poem.Line>
        <Poem.Line>
          Mas te amo mesmo cego
        </Poem.Line>
        <Poem.Line>continuo curtindo a vista</Poem.Line>
        <Poem.Line>
          Só quando escurecer eu sossego
        </Poem.Line>
      </Poem.PoemText>
      <Poem.PoemText>
        <Poem.Line>Em seu nome, Angelina</Poem.Line>
        <Poem.Line>Disse-me um anjo, a mais linda</Poem.Line>
        <Poem.Line>Sua fala tão nutritiva</Poem.Line>
        <Poem.Line>
         Um jardim em minha mente erguia
        </Poem.Line>
      </Poem.PoemText>
      Nota: Esse poema é pra te exaltar, mostrar o quão bem eu te vejo, sei que você se sente superestimada por mim às vezes, mas na verdade eu que acho que você se subestima, o poema O Sol fala sobre a nossa distância, querer alcançar algo tão lindo quanto o sol, seguir por pura teimosia, era assim que eu me sentia(e me sinto enquanto estou perto de ti)
    </>
  );
}
