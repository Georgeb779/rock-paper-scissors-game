import { ChoicesProps } from "./choices_interfaces";

export interface BattleScreenProps {
  humanChoice: ChoicesProps;
  pcChoice: ChoicesProps;
  decision: string;
  reset: () => void;
  loading: boolean;
}
