const first = document.querySelector('#number1');
const second = document.querySelector('#number2');
const result = document.querySelector('p>span');

if (window.Worker) {
  const myWorker = new Worker('/js/work.js');

  first.addEventListener('focus', () => {
    first.value = '';
  });
  second.addEventListener('focus', () => {
    second.value = '';
  });

  first.addEventListener('change', () => {
    myWorker.postMessage([first.value, second.value]);
    console.log(
      `App post messages of ${first.value}, ${second.value} to worker.`
    );
  });
  second.addEventListener('change', () => {
    myWorker.postMessage([first.value, second.value]);
    console.log(
      `App post messages of ${first.value}, ${second.value} to worker.`
    );
  });

  myWorker.onmessage = function(event) {
    result.textContent = event.data;
    console.log(`App get the worker result: ${event.data}!`);
  };
}
