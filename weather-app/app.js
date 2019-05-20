console.log('Starting');

setTimeout(() => {
    console.log('2 Second timer');
}, 2000); 

setTimeout(() => {
    console.log('Sync Timer');
}, 0); 

console.log('Stopping');