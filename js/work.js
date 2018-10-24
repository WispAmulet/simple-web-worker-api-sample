onmessage = function(event) {
  const { data } = event;
  // // this.console.log(data);
  console.log(
    `Worker get the message: %c${data}`,
    'color: red; font-size: 20px;'
  );
  const workerResult = data[0] * data[1];
  console.log(`Worker calculate the result: ${workerResult}`);
  // // this.console.log(workerResult);
  postMessage(workerResult);
  console.log('Work post the worker result to app');
};
