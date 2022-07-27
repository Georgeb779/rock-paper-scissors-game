export const countDownFunction = (
  num: number,
  setCountDown: (countDown: number) => void
) => {
  let count = num;
  const interval = setInterval(() => {
    count--;
    if (count === 0) {
      clearInterval(interval);
    }
    setCountDown(count);
  }, 1000);
};
