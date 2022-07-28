import { useEffect } from "react";
import logoScore from "../../assets/images/logo-bonus.svg";
import logo from "../../assets/images/logo.svg";
import { updateHeadIcon } from "../../utils/updateHeadIcon";
import "./style.scss";

interface ScoreDisplayProps {
  score: number;
  advanceGameMode: boolean;
}

export default function ScoreDisplay({
  score,
  advanceGameMode
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
