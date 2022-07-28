import { choicesData } from "../data/choicesData";
import { ChoicesProps } from "../interfaces/choices_interfaces";

export const getPcChoices = ({
  setPcChoice,
  advanceGameMode
}: {
  setPcChoice: (choices: ChoicesProps) => void;
  advanceGameMode: boolean;
}) => {
  const randomValue =
    choicesData[Math.floor(Math.random() * (advanceGameMode ? 5 : 3))];
  setPcChoice({
    value: randomValue.value,
    style: randomValue.style,
    icon: randomValue.icon,
    onClick: () => {}
  });
};
