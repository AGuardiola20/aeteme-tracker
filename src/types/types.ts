export type Player = {
  id: string;
  name: string;
  points: number;
  team: string;
};

export type Match = {
  player1: Player;
  player2: Player;
  scoreboard: number;
};
