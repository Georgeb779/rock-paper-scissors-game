import { useEffect } from "react";
import logoScore from "../../assets/images/logo-bonus.svg";
import logo from "../../assets/images/logo.svg";
import { updateHeadIcon } from "../../utils/updateHeadIcon";
import Toggle from "../Toggle";
import "./style.scss";

interface ScoreDisplayProps {
  score: number;
  advanceGameMode: boolean;
  playState: boolean;
  setAdvanceGameMode: (advanceGameMode: boolean) => void;
}

export default function ScoreDisplay({
  score,
  advanceGameMode,
  playState,
  setAdvanceGameMode
}: ScoreDisplayProps) {
  useEffect(() => {
    updateHeadIcon(advanceGameMode);
  }, [advanceGameMode]);

  return (
    <>
      <div className='score-display__container'>
        <div className='score-display-logo__container'>
          <img src={advanceGameMode ? logoScore : logo} alt='logo' />
        </div>

        {playState && (
          <div className='game-switcher__container flex flex-col items-center p-4 border-white border-2 rounded-lg '>
            <span className='text-white mb-3'>Advance Mode</span>
            <Toggle enabled={advanceGameMode} setEnabled={setAdvanceGameMode} />
          </div>
        )}

        <div className='score-display-value__container'>
          <h1 className='score-display-value__title'>SCORE</h1>
          <span
            className={`score-display-value__score ${
              score > 0 ? "text-green-600" : score < 0 ? "text-red-600" : ""
            }`}
          >
            {score}
          </span>
        </div>
      </div>
    </>
  );
}
