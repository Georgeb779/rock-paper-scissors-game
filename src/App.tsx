import { useEffect, useState } from "react";

import ScoreDisplay from "./components/ScoreDisplay/index";
import ChoiceScreen from "./components/ChoiceScreen/index";
import BattleScreen from "./components/BattleScreen/index";
import Modal from "./components/Modal/index";

import { playGame } from "./utils/playGame";
import { playAgain } from "./utils/playAgain";

import IconClose from "./assets/images/icon-close.svg";
import Rules from "./assets/images/image-rules-bonus.svg";

function App() {
  const [score, setScore] = useState<number>(0);

  // if score is different from 0 save it into local storage
  useEffect(() => {
    if (score !== 0) {
      localStorage.setItem("score", JSON.stringify(score));
    }
  }, [score]);

  // check local storage for score and if score is different update score
  useEffect(() => {
    const storedScore = localStorage.getItem("score") as string;
    if (parseInt(storedScore) !== score && storedScore !== null) {
      setScore(parseInt(storedScore));
    }
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

  const [decision, setDecision] = useState("");

  const [loading, setLoading] = useState(false);

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
          <ScoreDisplay score={score} />
        </div>

        <div className='game__section-container'>
          {playState ? (
            <ChoiceScreen setChoice={setChoice} setPcChoice={setPcChoice} />
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
            modalContent={{ value: Rules, icon: IconClose, btnValue: "RULES" }}
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
