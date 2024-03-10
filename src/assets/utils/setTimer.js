export const setTimer = (timeCallback, timerID, updateToastvisible) => {
  const currentID = timerID.current;
  let index = 0;
  const toastAnimation = () => {
    if (index < timeCallback.length) {
      const [time, callback] = timeCallback[index];
      const animationInterval = setInterval(() => {
        if (currentID !== timerID.current) {
          clearInterval(animationInterval);
        }
        const stop = callback();
        if (stop) {
          clearInterval(animationInterval);
        }
      }, 10);
      const Timer = setTimeout(() => {
        clearTimeout(Timer);
        clearInterval(animationInterval);
        if (currentID === timerID.current) {
          index += 1;
          toastAnimation();
        }
      }, time);
    } else {
      updateToastvisible(false);
    }
  };
  toastAnimation();
};
