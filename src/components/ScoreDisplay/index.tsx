import logoScore from "../../assets/images/logo-bonus.svg";
import "./style.scss";

interface ScoreDisplayProps {
  score: number;
}

export default function ScoreDisplay({ score }: ScoreDisplayProps) {
  return (
    <div className='score-display__container'>
      <div className='score-display-logo__container'>
        <img src={logoScore} alt='logo' />
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
  );
}
