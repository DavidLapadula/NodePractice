console.log('Client side js here');

// grabbing values from the html
const weatherForm = document.querySelector('form');
const search = document.querySelector('input'); 
const messageOne = document.querySelector('#message-one'); 
const messageTwo = document.querySelector('#message-two'); 

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location  = search.value; 
    messageOne.textContent = 'Loading'; 
    messageTwo.textContent = ''; 

    fetch(`http://localhost:3000/weather?address=${location}`)
        .then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error; 
                    messageTwo.textContent = ''; 
                } else {
                    console.log(data);
                    console.log(location);
                    messageOne.textContent = ''; 
                    messageTwo.textContent = data.location; 
                };
            });
        });
}); 