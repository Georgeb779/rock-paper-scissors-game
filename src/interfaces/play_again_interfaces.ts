import { ChoicesProps } from "../interfaces/choices_interfaces";

export interface PlayAgainProps {
  setPlayState: (state: boolean) => void;
  setPcChoice: (choices: ChoicesProps) => void;
  setChoice: (choices: ChoicesProps) => void;
  setDecision: (decision: string) => void;
}
