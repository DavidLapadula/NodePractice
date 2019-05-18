// const square = function (x) {
//     return x * x; 
// }; 

// const square = (x) => {
//     return x * x; 
// }; 

// const square = (x) => x * x; 

// console.log(square(4)); 

// arrow functions do not bind own this value
// so not well suited when want to access this
const event =  {
    name : 'Party',
    guestList: ['david' , 'john'], 
    printGuestList() {
        console.log('guest list for ' + this.name);

        this.guestList.forEach( (guest) => {
            console.log(guest + ' is attending ' + this.name);
        }); 
    }
}; 

event.printGuestList(); 