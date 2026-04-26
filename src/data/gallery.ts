export type ImageItem = {
  type: "image";
  id: string;
  src: string;
  title: string;
  description: string;
};

export type MusicItem = {
  type: "music";
  id: string;
  cover: string;
  src: string;
  title: string;
  artist: string;
};

export type GalleryItem = ImageItem | MusicItem;

export const galleryItems: GalleryItem[] = [
  {
    type: "image",
    id: "img-1",
    src: "public/images/us/imagem_1.webp",
    title: "Meu primeiro presentinho",
    description:
      "Quando fui fazer eu estava há muito tempo sem desenhar, tive que voltar a ativa, fiz e refiz esse mesmo desenho umas 5 vezes, mas valeu muito a pena, muito pela forma com que você tratou ele, você ficou toda ansiosa enquanto eu fazia, eu demorei tipo uns 3 dias, todos os dias eu chegava na escola e só ficava desenhando, até eu finalmente terminar, me lembro que mais tarde eu percebi que realmente errei o seu cabelo, mas era por que eu quase não consguia te enxergar direito pelas fotos e tudo mais.",
  },
  {
    type: "music",
    id: "music-1",
    cover: "/images/capas/capa_um_amor_puro.webp",
    src: "/music/um_amor_puro.mp3",
    title: "O nosso amor, Um amor puro",
    artist: "Djavan",
  },
  {
    type: "music",
    id: "music-2",
    cover: "/images/capas/capa_back_to_friends.webp",
    src: "/music/back_to_friends.mp3",
    title: "Back to friends - A música que me faz chorar",
    artist: "Sombr",
  },
  {
    type: "music",
    id: "music-3",
    cover: "/images/capas/capa_or_nah.webp",
    src: "/music/or_nah.mp3",
    title: "Or Nah - Ficamos selvagens com essa, né? kkakakakakakaka",
    artist: "The Weeknd, Ty Dolla $ign, Wiz Khalifa",
  },
  {
    type: "music",
    id: "music-4",
    cover: "/images/capas/capa_pretty_little_baby.webp",
    src: "/music/pretty_little_baby.mp3",
    title: "Pretty Little Baby - Você, meu bebêzão",
    artist: "Connie Francis",
  },
  {
    type: "music",
    id: "music-5",
    cover: "/images/capas/capa_the_red_means_I_love_you.webp",
    src: "/music/the_red_means_I_love_you.mp3",
    title: "The Red Means I Love You - Inesquecível, apenas",
    artist: "Madds Buckley",
  },
  {
    type: "image",
    id: "img-2",
    src: "/images/us/imagem_2.webp",
    title: "Uma de nossas brincadeirinhas",
    description:
      "Eu tinha demorado pra carai pq eu fui inventar de fazer no papel kakakakakakakakakakak.",
  },
  {
    type: "image",
    id: "img-3",
    src: "/images/us/imagem_3.webp",
    title: "Seu retrato",
    description:
      "Cara, eu acho que peguei uma obsessão por desenhar seu rosto, ele é muito lindo, cada detalhe, queria conseguir fazer até com mais perfeição, mas eu acho que pra sair algo tão lindo quanto ti, só Deus mesmo.",
  },
  {
    type: "image",
    id: "img-4",
    src: "/images/us/imagem_4.webp",
    title: "Nossa foto juntos",
    description:
      "Nossa primeira e única foto juntos, eu acho muito engraçado como fica destoante nós dois, eu gosto do seu jeito sinistrinho de ser kakakakakakaka, demorei um pouco pra me acostumar, mas depois passei a ver como um charme, ainda mais sabendo que você é um bebezão fofinho, somos como ying e yang, eu sou o ying e você é o yang, eu sou a parte mais calma, mais quieta e você é a parte mais agitada, mais extrovertida, mais doida, mas é isso que me encanta em você.",
  },
  {
    type: "image",
    id: "img-5",
    src: "/images/us/imagem_5.webp",
    title: "Outro desenho seu",
    description:
      "Bom, apesar da história que eu criei fazer sentido e explicar o porque eu desenhei você, tá nítido que o motivo é pq eu amo desenhar você, tu é a minha monalisa, inspiração de desenho, livro, música e poesia.",
  },
  {
    type: "image",
    id: "img-6",
    src: "/images/us/imagem_6.webp",
    title: "Me and My baby",
    description:
      "Você se lembra né, desse nosso presentinho, eu amei ler ele na época, tinha me sentido tipo O SER MAIS IMPORTANTE DO MUNDO, pelo menos, pra você, muito obrigado amor. Na minha metade tentei escrever coisas que não repetissem do meu lado, ou seja, soma tudo que tem em mim + o que eu escrevi lá.",
  },
  {
    type: "image",
    id: "img-7",
    src: "/images/us/imagem_7.webp",
    title: "Carta de 'despedida'",
    description:
      "E pensar que desde a primeira vez que a gente se viu pessoalmente já pensávamos que íamos nos despedir, mas OLHA O QUÃO LONGE A GENTE CHEGOU MEU BEM! Nosso amor é sim forte, aposto que nem sequer 1 milionésimo dos casais suportariam ter passado o que a gente passou, teriam tentado tanto quanto nós tentamos.",
  },
  {
    type: "image",
    id: "img-8",
    src: "/images/us/imagem_8.webp",
    title: "Músicas dedicadas",
    description:
      "Eu nunca tinha recebido uma dedicação de música antes de te conhecer, foi contigo que conheci esse conceito, eu nunca tive qualquer conexão emocional com as músicas, agora tenho muitas delas que me lembram do nosso amor e de você, além de alguns momentos específicos kskskskskss.",
  },
  {
    type: "image",
    id: "img-9",
    src: "/images/us/imagem_9.webp",
    title: "My love, my all, mine",
    description:
      "Sim meu amor, eu sou seu e apenas seu, eu gostaria de ser seu pra sempre, mas infelizmente o destino não quis assim, isso não indica que agora também ficaremos separados pra sempre, só o tempo vai dizer amor, apenas ele.",
  },
  {
    type: "music",
    id: "music-7",
    cover: "/images/capas/capa_the_one_that_got_away.webp",
    src: "/music/the_one_that_got_away.mp3",
    title: "The One That Got Away",
    artist: "Katy Perry",
  },
  {
    type: "music",
    id: "music-6",
    cover: "/images/capas/capa_friends_dont_look_at_friends_that_way.webp",
    src: "/music/friends_dont_look_at_friends_that_way.mp3",
    title: "Friends Don`t Look At Friends That Way",
    artist: "Tate McRae",
  },
  {
    type: "image",
    id: "img-10",
    src: "/images/us/imagem_10.webp",
    title: "Opa!",
    description: "Um pequeno ícone seu, a lilih, meu amor, meu homem.",
  },
];
