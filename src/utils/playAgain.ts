import { PlayAgainProps } from "../interfaces/play_again_interfaces";

export const playAgain = ({
  setPlayState,
  setPcChoice,
  setChoice,
  setDecision
}: PlayAgainProps) => {
  setPlayState(true);
  setPcChoice({
    value: "",
    style: "",
    icon: "",
    onClick: () => {}
  });
  setChoice({
    value: "",
    style: "",
    icon: "",
    onClick: () => {}
  });
  setDecision("");
};
