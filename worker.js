self.addEventListener('message', (event) => {
   console.log(event.data);

   if (event.data === 'getRandomFibonnaci') {
      const heavyComputedValue = fibonacci(43);
      postMessage(heavyComputedValue);
   }

});