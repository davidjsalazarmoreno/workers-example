const worker = new Worker('worker.js');
const button = document.querySelector('.controls button');
const p = document.querySelector('.controls p');

button.addEventListener('click', () => {
  worker.postMessage('getRandomFibonnaci');
  // p.textContent = fibonacci(20);
});

worker.addEventListener('message', (event) => {
  console.log(event.data, 'resultado');
  p.textContent = event.data;
});