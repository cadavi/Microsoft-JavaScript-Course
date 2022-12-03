function promiseTimeOut(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

promiseTimeOut(2000)
  .then(() => {
    console.log("Done!!");
    return promiseTimeOut(1000);
  })
  .then(() => {
    console.log("Also done!!");
  })
  .catch(() => {
    console.log("Error!");
  });
