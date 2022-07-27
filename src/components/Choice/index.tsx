import "./style.scss";
import { ChoicesProps } from "../../interfaces/choices_interfaces";
import { countDownFunction } from "../../utils/countDown";
import { useEffect, useState } from "react";
export default function Choice({
  value,
  icon,
  style,
  onClick,
  disabled,
  customClass
}: ChoicesProps) {
  const [countDown, setCountDown] = useState(3);

  useEffect(() => {
    countDownFunction(countDown, setCountDown);
  }, []);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`choice__container  ${style} ${customClass} border-[12px]`}
    >
      {icon === "default" ? (
        <div className="choice__count-down"> {countDown} </div>
      ) : (
        <img src={icon} alt={value} />
      )}
    </button>
  );
}
