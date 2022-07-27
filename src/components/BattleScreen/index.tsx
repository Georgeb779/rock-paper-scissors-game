import { BattleScreenProps } from "../../interfaces/battle_screen_interfaces";
import Choice from "../Choice/index";
import SpinLoading from "./../SpinLoading/index";
import "./style.scss";

export default function BattleScreen({
  pcChoice,
  humanChoice,
  decision,
  reset,
  loading
}: BattleScreenProps) {
  return (
    <>
      <div className='battle-screen__container md:grid-cols-4 '>
        <div className='battle-screen__human-choice noHover'>
          <Choice
            disabled={true}
            customClass={decision === "YOU WIN!" ? "winner animate-bounce" : ""}
            value={humanChoice.value}
            icon={humanChoice.icon}
            style={humanChoice.style.split(" ")[0]}
            onClick={() => {}}
          />
          <p>YOU PICKED</p>
        </div>
        {loading ? (
          <SpinLoading customClass='md:col-start-2 md:col-end-4 md:row-start-1 col-start-1 col-end-3 row-start-2 ' />
        ) : (
          <div
            className={`battle-screen__decision md:col-start-2 md:col-end-4 md:row-start-1  col-start-1 col-end-3 row-start-2 ${
              loading ? "invisible opacity-0 " : "visible opacity-100"
            }`}
          >
            <div className='battle-screen__decision-title'>
              <h1>{decision}</h1>
              <div className='battle-screen__play-again'>
                <button
                  className='btn btn-secondary'
                  onClick={() => {
                    reset();
                  }}
                >
                  PLAY AGAIN
                </button>
              </div>
            </div>
          </div>
        )}

        <div className='battle-screen__pc-choice col-start-2 md:col-start-4 noHover'>
          {loading ? (
            <Choice
              disabled={true}
              value={"default"}
              icon={"default"}
              style={"default"}
              onClick={() => {}}
            />
          ) : (
            <Choice
              disabled={true}
              customClass={
                decision === "YOU LOSE!" ? "winner animate-bounce" : ""
              }
              value={pcChoice.value}
              icon={pcChoice.icon}
              style={pcChoice.style.split(" ")[0]}
              onClick={() => {}}
            />
          )}

          <p>THE HOUSE PICKED</p>
        </div>
      </div>
    </>
  );
}
