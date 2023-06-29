console.clear();

//console.log('helliau');

//let a = 10;
//const b = 20;


//console.log(typeof a, a);

//a += '';

//a = a + 10;

//console.log(typeof a, a);

//let result;
//let digit = 5;


// 10 < digit && (result = 'YES') || (result = 'NO');
//10 > digit ? result = 'YES' : result = 'NO';


//                      null => object
// let what = 25;
// let result;

// result = what || 'NO';
// result = what ? what : 'NO';

// console.log(result);
/*
const house = 'jonas';
const house2 = ['jonas', 'petras', 'bebras'];
const house3 = {
    name: 'jonas',
    flat: 1
};
const house4 = [
    {id: 1, name: 'jonas', flat:1},
    {id: 8, name: 'petras', flat:6},
    {id: 3, name: 'bebras', flat:2},
];
//console.log(house4.find(house => house.id === 3));
//          ???


function fun(a) {
    return 'fun' + a;
}

const fun2 = function(a) {
    return 'fun' + a;
}

const fun3 = (a) => {
    return 'fun' + a;
}

const fun4 = a => 'fun' + a;

const fancy = _ => console.log('fancy');


console.log(fun(1));
console.log(fun2(2));
console.log(fun3(3));
console.log(fun4(4));
fancy();


const nicePrint = (a, b, fun) => {
    const p = fun(a, b);
    console.log('%c' + p, 'background: skyblue; color: white; padding: 5px; border-radius: 10px;')
}

const sum = (a, b) => {
    return a + b;
}
const div = (a, b) => a / b;
const multi = (a, b) => a * b;

nicePrint(1, 2, sum);
nicePrint(1, 2, (a, b) => a / b);

const colorsHouse = [
    {id: 1, name: 'jonas', flat: 1, color: 'red'},
    {id: 8, name: 'petras', flat: 6, color: 'blue'},
    {id: 3, name: 'ona', flat: 3, color: 'green'}
]

colorsAnimal = [
    {id: 1, name: 'Racoon', color: 'red'},
    {id: 2, name: 'Iguana', color: 'green'},
    {id: 3, name: 'Dragon', color: 'blue'},
];

for (let i = 0; i < colorsHouse.length; i++) {
    const house = colorsHouse[i];
    console.log('%c' + house.name, 'background: ' + house.color + '; color: white; padding: 5px; border-radius: 10px;' );
}

const arrayWalker = (array, fun) => {
    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        fun(item);
    }
}

const housePrinter = house => {
    console.log('%c' + house.name, 'background: ' + house.color + '; color: white; padding: 5px;')
}

//arrayWalker(colorsHouse, housePrinter);
//arrayWalker(colorsAnimal, housePrinter);

const simplePrinter = house => {
    console.log(house.color);
}

//colorsAnimal.forEach(housePrinter);
const fe = colorsAnimal.forEach((house, index) => console.log(house.color, index));
// []        loopas              funkcija

const map = colorsAnimal.map((house, _) => [house.color, house.name]);

console.log(fe);
console.log(map);

let a;
let b;

a = 5;
b = a; // by value

a++;

console.log(a, b);
let c;
let d;

c = [5];
d = c; // by reference

d = [...c]; // copy by value     ... => spreadinam visas reiksmes ir idedam i obj (),[],{}.

c.push(6);
d.push(7);

console.log(c, d);

e = {value: 5, name: 'jonas', animal: 'dog'};
f = e; // by ref

f = {...e, name: 'simas'}; // copy by value plus name change

e.color = 'red';

console.log('e:', e, 'f:', f);


const g = [1, 2, 3, 4, 5, 6];

const [first, second] = g;

console.log(first, second);

const h = {value:5, name: 'jonas', animal: 'iguana'};

const {value, animal} = h;

console.log(value, animal);

*/

const house = [
    {id: 2, name: 'jonas', animal: 'dog', color: 'red', price: 1000},
    {id: 43, name: 'simas', animal: 'cat', color: 'green', price: 4000},
    {id: 22, name: 'ona', animal: 'dragon', color: 'blue', price: 500},
    {id: 8, name: 'petras', animal: 'snake', color: 'teal', price: 7800},
    {id: 7, name: 'gedas', animal: 'racoon', color: 'black', price: 400},
    {id: 153, name: 'zenius', animal: 'boar', color: 'yellow', price: 4800},
]


// pretend that house is immutable
// make cats yellow

const newHouse = house.map(m => m.animal === 'cat' ? {...m, color: 'yellow'} : {...m});

const ownRacoon = house.filter(m => m.animal === 'racoon');

const getSimas = house.find(m => m.name === 'simas');

const killJonas = house.filter(m => m.name !== 'jonas');

// sort by price

const sortHouse = [...house].sort((a, b) => a.price - b.price);

// sort by name

const sortByName = [...house].sort((a, b) => a.name.localeCompare(b.name));

// get all racoon owners and by name

const allRacoons = house.filter(m => m.animal === 'racoon').sort((a, b) => a.name.localeCompare(b.name));

console.log(sortByName, house);






























