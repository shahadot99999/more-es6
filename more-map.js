//it find array number divide 
const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 2)
const thirds = numbers.map(x => x / 3);
// console.log(half);
// console.log(thirds);


//it show array string 
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

//it show array price number show.
const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];

//it show all result without array sign.
// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
// console.log(items)
console.log(prices);