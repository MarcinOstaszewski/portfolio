type ImageDataType = {
  id: number;
  src: string[];
  title: string;
  description: string;
}

export const imagesData: ImageDataType[] = [
  { id: 1, src: ["turtle-game-1.png", "turtle-game-2.png", "turtle-game-3.png"], title: "React Turtle Game", description: "Simple arcade game with animated CSS-made turtle character." },
  { id: 2, src: ["skirmish-battle-1.png", "skirmish-battle-2", "skirmish-battle-3"], title: "Skirmish Battle App", description: 'Team builder for skirmish battle table-top game.' },
  { id: 3, src: ["sliding-tanks-1.png", "sliding-tanks-2.png", "sliding-tanks-3.png"], title: "Sliding Tanks Game", description: 'Fast, competitive game with up to 4 tanks sliding on ice.' },
]