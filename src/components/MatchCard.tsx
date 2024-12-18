import styled from "styled-components";
import { Match } from "../types/types";

type MatchProps = {
  match: Match;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  border: 2px solid #585858;
  border-radius: 5px;
`;

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  h3 {
    font-size: 2rem;
    text-transform: uppercase;
  }
  p {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

const MatchCard = ({ match }: MatchProps) => {
  return (
    <Container>
      <PlayerContainer>
        <h3>{match.player1.name}</h3>
        <p>{match.player1.points}</p>
      </PlayerContainer>
      <p>{match.scoreboard}</p>
      <PlayerContainer>
        <h3>{match.player2.name}</h3>
        <p>{match.player2.points}</p>
      </PlayerContainer>
    </Container>
  );
};

export default MatchCard;
