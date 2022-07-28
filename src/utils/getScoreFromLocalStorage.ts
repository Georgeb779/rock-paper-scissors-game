export const getScoreFromLocalStorage = ({
  score,
  setScore,
  firstLoad
}: {
  score: number;
  setScore: (score: number) => void;
  firstLoad: boolean;
}) => {
  // get score from local storage
  const localStorageScore = localStorage.getItem("score");
  if (localStorageScore && firstLoad === false) {
    setScore(Number(localStorageScore));
  }
  if (!localStorageScore) {
    localStorage.setItem("score", score.toString());
  }
  // if score change update localStorage
  if (localStorageScore && firstLoad === true) {
    localStorage.setItem("score", score.toString());
  }
};
