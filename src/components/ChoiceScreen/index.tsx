import React, { useState } from "react";

import { choicesData } from "../../data/choicesData";
import Choice from "../Choice/index";
import bgPentagon from "../../assets/images/bg-pentagon.svg";
import bgTriangle from "../../assets/images/bg-triangle.svg";
import { ChoicesProps } from "../../interfaces/choices_interfaces";
import { getPcChoices } from "../../utils/getPcChoices";

export default function ChoiceScreen({
  setChoice,
  setPcChoice,
  advanceGameMode
}: {
  setChoice: (choices: ChoicesProps) => void;
  setPcChoice: (choices: ChoicesProps) => void;
  advanceGameMode: boolean;
}) {
  return (
    <div
      className={`game-chooser__container ${
        advanceGameMode ? "advance" : "basic"
      }`}
    >
      <img src={advanceGameMode ? bgPentagon : bgTriangle} alt='bgPentagon' />
      {/*  */}
      {choicesData.map(
        (choice, index) =>
          index < (advanceGameMode ? 5 : 3) && (
            <Choice
              key={index}
              value={choice.value}
              icon={choice.icon}
              style={choice.style}
              onClick={() => {
                getPcChoices({
                  setPcChoice,
                  advanceGameMode
                });
                setChoice({
                  value: choice.value,
                  style: choice.style,
                  icon: choice.icon,
                  onClick: () => {}
                });
              }}
            />
          )
      )}
    </div>
  );
}
