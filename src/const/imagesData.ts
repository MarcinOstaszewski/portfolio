export const Positions = ["left_1", "central", "right_1"] as const;

export type ClassNames = {
  [K in typeof Positions[number]]: string;
}

export const imageClasses: ClassNames = {
  left_1: 'left-1/4 top-1/2 -translate-x-2/3 -translate-y-1/2 -rotate-3 w-44 h-44 ',
  central: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-48',
  right_1: 'left-3/4 top-1/2 -translate-x-1/3 -translate-y-1/2 rotate-3 w-44 h-44',
}

export type ImageDataType = {
  id: number;
  src: string[];
  url: string;
  title: string;
  description: string;
}

export const imagesData: ImageDataType[] = [
  { id: 1, src: ["turtle-game-1.png", "turtle-game-2.png", "turtle-game-3.png"], title: "React Turtle Game", url: "https://marcinostaszewski.github.io/react-turtle-game/", description: "Simple arcade game with animated CSS-made turtle character." },
  { id: 2, src: ["skirmish-battle-1.png", "skirmish-battle-2", "skirmish-battle-3"], title: "Skirmish Battle App", url: "https://marcinostaszewski.github.io/skirmish-battle-app/", description: 'Team builder for skirmish battle table-top game.' },
  { id: 3, src: ["sliding-tanks-1.png", "sliding-tanks-2.png", "sliding-tanks-3.png"], title: "Sliding Tanks Game", url: "https://marcinostaszewski.github.io/sliding-tanks/", description: 'Fast, competitive game with up to 4 tanks sliding on ice.' },
];
