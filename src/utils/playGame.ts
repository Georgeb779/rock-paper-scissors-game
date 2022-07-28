import { PlayGameProps } from "../interfaces/play_game_interfaces";

export const playGame = ({
  pcChoice,
  choice,
  score,
  setPlayState,
  setScore,
  setDecision,
  setLoading,
  
}: PlayGameProps) => {
  setPlayState(false);
  setLoading(true);

  setTimeout(() => {
    if (
      (choice.value === "scissors" &&
        (pcChoice.value === "lizard" || pcChoice.value === "paper")) ||
      (choice.value === "paper" &&
        (pcChoice.value === "rock" || pcChoice.value === "spock")) ||
      (choice.value === "spock" &&
        (pcChoice.value === "rock" || pcChoice.value === "scissors")) ||
      (choice.value === "rock" &&
        (pcChoice.value === "lizard" || pcChoice.value === "scissors")) ||
      (choice.value === "lizard" &&
        (pcChoice.value === "spock" || pcChoice.value === "paper"))
    ) {
      setScore(score + 1);
      setDecision("YOU WIN!");
    } else if (choice.value === pcChoice.value) {
      setScore(score);
      setDecision("DRAW");
    } else {
      setScore(score - 1);
      setDecision("YOU LOSE!");
    }
    setLoading(false);
  }, 1500);
};
