import styled from "styled-components";
import MatchCard from "../components/MatchCard";
import { Match, Player } from "../types/types";

const PLAYERS: Player[] = [
  {
    name: "Andres Perez",
    points: 900,
    id: "1727",
    team: "Esparza",
  },
  {
    name: "Jose Perez",
    points: 900,
    id: "1727",
    team: "Esparza",
  },
  {
    name: "Carlos Venegas",
    points: 900,
    id: "1727",
    team: "Esparza",
  },
  {
    name: "Denilson Abarca",
    points: 900,
    id: "1727",
    team: "Esparza",
  },
];

const GAMES: Match[] = [
  {
    player1: PLAYERS[0],
    player2: PLAYERS[2],
    scoreboard: 11,
  },
];

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin: 2rem 0;
`;

const ScoreScreen = () => {
  return (
    <div>
      <Title>Marcadores</Title>
      {GAMES.map((game, index) => {
        return (
          <div key={index}>
            <MatchCard match={game} />
          </div>
        );
      })}
    </div>
  );
};

export default ScoreScreen;
