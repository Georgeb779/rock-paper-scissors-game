import { ChoicesProps } from "./choices_interfaces";

export interface PlayGameProps {
  pcChoice: ChoicesProps;
  choice: ChoicesProps;
  score: number;
  setPlayState: (state: boolean) => void;
  setScore: (score: number) => void;
  setDecision: (decision: string) => void;
  setLoading: (loadings: boolean) => void;
}
