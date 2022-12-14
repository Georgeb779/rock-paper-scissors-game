import { useEffect, useState } from "react";

import ScoreDisplay from "./components/ScoreDisplay/index";
import ChoiceScreen from "./components/ChoiceScreen/index";
import BattleScreen from "./components/BattleScreen/index";
import Modal from "./components/Modal/index";

import { playGame } from "./utils/playGame";
import { playAgain } from "./utils/playAgain";
import { getScoreFromLocalStorage } from "./utils/getScoreFromLocalStorage";

import IconClose from "./assets/images/icon-close.svg";
import Rules from "./assets/images/image-rules-bonus.svg";
import BasicRules from "./assets/images/image-rules.svg";

function App() {
  const [score, setScore] = useState<number>(0);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [advanceGameMode, setAdvanceGameMode] = useState(false);

  useEffect(() => {
    getScoreFromLocalStorage({ score, setScore, firstLoad });
    setFirstLoad(true);
  }, [score]);

  const [choice, setChoice] = useState({
    value: "",
    style: "",
    icon: "",
    onClick: () => {}
  });

  const [pcChoice, setPcChoice] = useState({
    value: "",
    style: "",
    icon: "",
    onClick: () => {}
  });

  const [playState, setPlayState] = useState(true);
  const [loading, setLoading] = useState(false);
  const [decision, setDecision] = useState("");

  useEffect(() => {
    if (choice.value !== "") {
      playGame({
        pcChoice,
        choice,
        score,
        setPlayState,
        setScore,
        setDecision,
        setLoading
      });
    }
  }, [choice]);

  const reset = () => {
    playAgain({
      setPlayState,
      setPcChoice,
      setChoice,
      setDecision
    });
  };

  return (
    <>
      <div className='game__container'>
        <div className='game-result__container'>
          <ScoreDisplay
            score={score}
            advanceGameMode={advanceGameMode}
            setAdvanceGameMode={setAdvanceGameMode}
            playState={playState}
          />
        </div>

        <div className='game__section-container'>
          {playState ? (
            <ChoiceScreen
              setChoice={setChoice}
              setPcChoice={setPcChoice}
              advanceGameMode={advanceGameMode}
            />
          ) : (
            <BattleScreen
              pcChoice={pcChoice}
              humanChoice={choice}
              decision={decision}
              reset={reset}
              loading={loading}
            />
          )}
        </div>

        <div className='game-rules__container'>
          <Modal
            modalContent={{
              value: advanceGameMode ? Rules : BasicRules,
              icon: IconClose,
              btnValue: "RULES"
            }}
          />
        </div>

        <footer className='attribution'>
          Challenge by
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH'
          >
            Frontend Mentor
          </a>
          Coded by
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/Georgeb779'
          >
            Georgeb779
          </a>
          .
        </footer>
      </div>
    </>
  );
}

export default App;
