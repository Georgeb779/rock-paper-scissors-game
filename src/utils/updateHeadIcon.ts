import logoScore from "../assets/images/logo-bonus.svg";
import logo from "../assets/images/logo.svg";

export const updateHeadIcon = (advanceGameMode: boolean) => {
  const favIcon = document.getElementsByClassName("favicon")[0];
  if (advanceGameMode) {
    favIcon.setAttribute("href", logoScore);
  } else {
    favIcon.setAttribute("href", logo);
  }
};
