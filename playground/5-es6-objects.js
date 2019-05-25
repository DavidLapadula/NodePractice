// property shorthand

const name = 'David'; 
const userAge = 26;

const user = {
    name, 
    userAge, 
    location: 'Toronto'
}; 

console.log(user);

// object destructuring

const product = {
    label: 'notebook', 
    price: 3, 
    stock: 200, 
    salePrice: undefined
};      

const { label : productLabel, price, stock, salePrice, rating = 5 } = product; 

const transaction = (type, { label, stock} ) => {
    console.log(label);
    console.log(stock);
}; 

transaction('order', product); 