import { choicesData } from "../data/choicesData";
import { ChoicesProps } from "../interfaces/choices_interfaces";

export const getPcChoices = ({
  setPcChoice
}: {
  setPcChoice: (choices: ChoicesProps) => void;
}) => {
  const randomValue =
    choicesData[Math.floor(Math.random() * choicesData.length)];
  setPcChoice({
    value: randomValue.value,
    style: randomValue.style,
    icon: randomValue.icon,
    onClick: () => {}
  });
};
