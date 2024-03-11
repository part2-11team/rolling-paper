export const setTimer = (currentCallback, nextCallback, time, timerID) => {
  const currentID = timerID.current;
  const animationInterval = setInterval(() => {
    const stop = currentCallback();
    if (stop || currentID !== timerID.current) {
      clearInterval(animationInterval);
    }
  }, 10);
  const timer = setTimeout(() => {
    clearTimeout(timer);
    clearInterval(animationInterval);
    if (currentID === timerID.current) {
      nextCallback();
    }
  }, time);
};
