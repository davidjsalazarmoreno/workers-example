function fibonacci(num) {
   if (num <= 1) return 1;
 
   return fibonacci(num - 1) + fibonacci(num - 2);
 }
 

self.addEventListener('message', (event) => {
   console.log('Web Worker: ', event.data);

   if (event.data.type === 'getFibonacci') {
      const heavyComputedValue = 'The result is ' + fibonacci(event.data.payload);
      postMessage(heavyComputedValue);
   }

});