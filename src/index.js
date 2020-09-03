
console.log('Hello World!');

// Variables - var
var x = 5;
console.log('var x - global ', x);

function varTest() {
    var x = 1;
    if(x === 1) {
        var x = 2;
        console.log('var x - inside if block', x);
    }
    console.log('var x - outside if block', x);
}

varTest();

console.log('--------------------------------');

// Variables - let
let y = 5;
console.log('let x - global ', y);

function letTest() {
    let y = 1;
    if(y === 1) {
        let y = 2;
        console.log('let y - inside if block', y);
    }
    console.log('let y - outside if block', y);
}

letTest();

//2. Objects 
const employee = {
    firstName : 'Madhukar',
    lastName : 'Mani'
};

console.log(`Employee: ${employee}`, employee);
console.log(`Employee firstName: ${employee.firstName}`, employee.firstName);
console.log(`Employee lastName: ${employee.lastName}`, employee.lastName);

// 3. Spread operator
const employeeWithInfo = {
    ...employee,
    firstName : 'Rahul',
    lastName : 'Roy',
    location : 'R.K.Puram',
    jobTitle : 'Majdoor'
};

console.log('------------------------------------');
console.log(`employeeWithInfo: ${employee}`, employeeWithInfo);
console.log(`employeeWithInfo: ${employee}`, employee);
console.log(`employeeWithInfo firstName: ${employeeWithInfo.firstName}`, employeeWithInfo.firstName);
console.log(`employeeWithInfo lastName: ${employeeWithInfo.lastName}`, employeeWithInfo.lastName);
console.log(`employeeWithInfo location: ${employeeWithInfo.location}`, employeeWithInfo.location);


// 4. Destructuring
const {firstName: name, lastName, jobTitle, location, country = 'Canada'} = employeeWithInfo;

console.log('------------------------------------');
console.log(`Employee with info(name): ${name}`, name);
console.log(`Employee with info: ${name} ${lastName} is a ${jobTitle} who works in a ${location}, ${country}`);

// 5. Arrays
const array1 = [1,2,3,4];
console.log('------------------------------------');
console.log(`Array1: ${array1}`);

const array2 = [employeeWithInfo,...array1,5,6];

console.log(`Array2: ${array2}: `, array2);

// 6. function
console.log('------------------------------------');
function calculateAreaRegular(x,y) {
    console.log('regular function');
    return x*y;
}

const calculateAreaArrow1 = (x,y) => x*y;
const calculateAreaArrow2 = (x,y) => {
    console.log('Arrow function');
    return x*y;
} 

console.log('calculateAreaRegular: ', calculateAreaRegular(2,3));
console.log('calculateAreaArrow1: ', calculateAreaArrow1(4,5));
console.log('calculateAreaArrow2: ', calculateAreaArrow2(6,7));

// 7. Rest parameter - work around for operator overload.
const calcAreawithRest = (height, width, ...rest) => {
    console.log('Rest function, rest params: ', rest);
    return height*width*rest[0];
}

console.log('------------------------------------');
console.log('calculateAreaWithRest: ', calcAreawithRest(...array1));

// Array helper method

// Array.map(), Chaining method, reduce()
console.log('------------------------------------');
const array1Map = array1.map((item) => item*2);
console.log('Array1 map:', array1Map);

const array1Chained = array1.filter((item) => item>2).map((item) => item*2);
console.log('Array1 chain:', array1Chained);

const reducerFunc = (accumulator, current) => accumulator + current; // accumulate final value essentially
const array1Sum = array1.reduce(reducerFunc);
console.log('Array1 sum:', array1Sum);

// Classes
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.height * this.width;
    }
}

const myPolygon = new Polygon(3,4);
console.log('Polygon height:',myPolygon.height);
console.log('Polygon width:',myPolygon.width);

class Square extends Polygon {
    constructor(length) {
        super(length,length);
        this.length=length;
    }
}

const mySquare = new Square(5);
console.log('Area of mySquare: ', mySquare.area);

// async await and promises
// The Fetch API is a modern interface that allows you to make HTTP requests in the web browsers


// #1. Promises

const myPromise = fetch('https://doctor-info-with-delay.apps.cac.preview.pcf.manulife.com/v1/doctors/2/details');

 

console.log('Invoking fetch...');

 

//myPromise.then((response) => console.log('Fetch response', response));

 

myPromise

  .then((response) => response.json())

  .then((data) => console.log('Parsed data', data))

  .catch((error) => console.log('ERROR:',error));

 

console.log('this should not be blocked. async/await will guarantee that');

 

// Async / await

 

async function myAsyncAwait() {

  console.log('Invoking aysnc/await...');

  try{

    const response = await fetch('https://doctor-info-with-delay.apps.cac.preview.pcf.manulife.com/v1/doctors/2/details');

    const data = await response.json();

    console.log('this WILL be blocked until async/await is successful...');

    console.log('Async/await data:', data);

  } catch(error)  {

    console.log('Async/Await error:',error);

  }

}

myAsyncAwait();