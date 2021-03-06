const worker = !!window.Worker && new Worker('worker.js');
const getFibonnaci = document.querySelector('#getFibonnaci');
const stopCurrentWorker = document.querySelector('#stopCurrentWorker');
const p = document.querySelector('.controls p');

getFibonnaci.addEventListener('click', (event) => {
  console.log('Main Thread: Starting fibonacci worker');
  const select = document.querySelector('select');
  const optionSelected = select.item(select.selectedIndex);


  if (worker) {
    worker.postMessage({
      type: 'getFibonacci',
      payload: parseInt(optionSelected.textContent)
    });
  }

  // p.textContent = fibonacci(20);
});

stopCurrentWorker.addEventListener('click', () => {
  console.log('Main Thread: Stopping worker');

  if (worker) {
    worker.terminate();
  }

  console.log('Main Thread: Worker Status', worker);
});

if (worker) {
  worker.addEventListener('message', (event) => {
    console.log('Main Thread: ', event.data);
    p.textContent = event.data;
  });
}

