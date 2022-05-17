export const millisToMinutes = (millis: number) => {
  const minutes = Math.floor(((millis) % 3600000) / 60000);
  const seconds = Math.floor((((millis) % 3600000) % 60000) / 1000);
  return minutes + ":" + (seconds < 10 ? '0' + seconds : seconds);
  // const millis = time;
  // const minutes = Math.floor((millis) / 60000);
  // const seconds = (((millis) % 60000) / 1000).toFixed(0);
  // return minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds;
};