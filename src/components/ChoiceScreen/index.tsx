import React from "react";

import { choicesData } from "../../data/choicesData";
import Choice from "../Choice/index";
import bgPentagon from "../../assets/images/bg-pentagon.svg";
import { ChoicesProps } from "../../interfaces/choices_interfaces";
import { getPcChoices } from "../../utils/getPcChoices";

export default function ChoiceScreen({
  setChoice,
  setPcChoice
}: {
  setChoice: (choices: ChoicesProps) => void;
  setPcChoice: (choices: ChoicesProps) => void;
}) {
  return (
    <div className='game-chooser__container'>
      <img src={bgPentagon} alt='bgPentagon' />
      {choicesData.map((choice, index) => (
        <Choice
          key={index}
          value={choice.value}
          icon={choice.icon}
          style={choice.style}
          onClick={() => {
            getPcChoices({
              setPcChoice
            });
            setChoice({
              value: choice.value,
              style: choice.style,
              icon: choice.icon,
              onClick: () => {}
            });
          }}
        />
      ))}
    </div>
  );
}
