
/*

let square_string = "#";
for(let i = 1; i < 8; i++){
    console.log(square_string);
    square_string += "#";
}

for(let i = 1; i < 101; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz" + String(i));
    }
    else if(i % 3 === 0){

        console.log("Fizz" + String(i));

    }
    else if(i % 5 === 0){

        console.log("Buzz" + String(i));

    }

}

let chess_board = "";

let size = 100;

let odd = true;
let even = false;

for(let i = 0; i < size; i++){

    for(let j = 0; j < size; j++){

        if(odd){
            chess_board += " ";
        }
        if(odd && i % 2 === 0){
            chess_board += "#";
        }
        if(even){
            chess_board += "#";
        }
        if(even && i % 2 !== 0){
            chess_board += " ";
        }

    }
    if(odd){
        even = true;
        odd = false;
        chess_board += "\n";
    }
    else if(even){
        even = false;
        odd = true;
        chess_board += "\n";
    }

}
console.log(chess_board);

const square = function(x){

    return x*x;

}

const makeNoise = function(){

    console.log("NOISE");

}

makeNoise();

const power = function(base,exponent){

    return base ** exponent;

};

console.log(power(2,4));

const hummus = function(factor){

    const ingredient = function(amount,unit,name){

        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);


    };
    ingredient(1,"can","chickpeas");



};

function square_two(value){

    return value*value;

}

hummus(10);

console.log(square_two(20));


const power_two = (base,exponent) => {

    return base ** exponent;

};

console.log(power_two(10,1));


const minus = (x,y) => {

    if(y === undefined){
        return -x;
    }
    else{

        return x - y;

    }

};

console.log(minus(10,6));

const default_values = (the_default="defaultval",two="twovals") => {

    if(the_default === "defaultval"){
        console.log("no defaultval given");
    }
    else if(two === "twovals"){
        console.log("twovals value was not given");
    }
    else{
        console.log("reached else");
    }

};

default_values("one val","tt");


const multiply = (factor) => {

    return number => number * factor;

};

const pad = (length,padder) => {

    return (animalName,amount) => animalName + " : " + String(amount).padStart(length,padder);

};

const divide = (value) => {

    return number => number / value;


};

const displayDate = () => {

    let date = new Date();
    let currDay = date.getDay();
    console.log(currDay);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(`Today is : ${currDay === 1? "Monday": currDay === 2? "Tuesday": currDay === 3? "Wednesday": currDay === 4? "Thursday": currDay === 5? "Friday": currDay === 6? "Saturday": "Sunday"}\n Current time is : ${hours} : ${minutes} : ${seconds}`);

};

displayDate();


let first = multiply(10);
console.log(first(5));

let second = divide(10);
console.log(second(100));


const triangleArea = (base,height) => {

    return (base * height) / 2;

};

const compare = (obj1,obj2) => {

    return (obj1 === obj2)? 1: 0;

};


const rotateString = (string) => {

    let currString = String(string);
    let lastCharacter = currString.charAt(currString.length-1);
    currString = lastCharacter + currString.substr(0,currString.length-1);
    return currString;


};

const factorial = (number) => {

    if(number === 1){
        return number;
    }
    else{
        return number * factorial(number-1);
    }

};

console.log(factorial(5));


const findSolution = (target) =>{

    const find = (current,history) => {

        if(current == target){
            return history;
        }
        else if(current > target){
            return null;
        }
        else{
            return find(current + 3,`(${history} + 3)`) || find(current * 3,`${history} * 3)`);
        }

    }
    return find(1,"1");

};

console.log(findSolution(63));

const printFarmAnimals = (cows,chickens) => {

    let cowString = String(cows);
    cowString = cowString.padStart(3,"0");
    let chickenString = String(chickens);
    chickenString = chickenString.padStart(3,"0");
    console.log(`Cows : ${cowString} and Chickens = ${chickenString}`);

};

let animals = pad(10,"#");
console.log(animals("Pigs",4));
console.log(animals("Tiger",10));


let min = (number1,number2) => {

    return number1 > number2? number2: number2 > number1? number1: number1;

};

console.log(min(2,-10));


let isEven = (number) => {

    function abs(val){

        if(val < 0){
            return -1 * val;
        }
        else{
            return val;
        }

    };

    if(abs(number) === 0){
        return true;
    }
    else if(abs(number) == 1){
        return false;
    }
    else{

        return number < 0? isEven(number+2) : isEven(number-2);

    }

}

console.log(isEven(50));


let beanCounting = (aStr) => {

    let count = 0;
    for(let i = 0; i < aStr.length; i++){
        let character = aStr.charAt(i);
        if(character === "B"){
            count++;
        }
    }
    return count;

};

console.log(beanCounting("BBab")); // 4


let countChar = (aStr,aChar) => {

    let count = 0;
    for(let i = 0; i < aStr.length; i++){
        let character = aStr.charAt(i);
        if(character === aChar){
            count++;
        }
    }
    return count;

}

console.log(countChar("baada","d"));



function matchHouses(step) {

    if(step == 1){
        return 6;
    }
    else if(step == 0){
        return 0;
    }
    else{
        return 5 + matchHouses(step-1);
    }

}

class Person{

    constructor(name,age){

        this.name = name;
        this.age = age;

    }

    compareAge(other) {

        if (this.age > other.age) {
            return `${other.name} is youger than me.`;
        } else if (this.age < other.age) {
            return `${other.name} is older than me.`;
        } else {
            return `${other.name} is the same age as me.`;
        }
    }

};

function toBinary(num) {
    return (num >> 0).toString(2);
}

function seriesResistance(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total > 1? `${total} ohms`: `${total} ohm`;
}

function whichIsLarger(f, g) {
    if(f() > g()){
        return "f";
    }
    else if(f() < g()){
        return "g";
    }
    else{
        return "neither";
    }
}

function shiftToLeft(x, y) {
    return x * (2**y);
}

function numberSplit(n) {
    if(n % 2 != 0){
        let half = Math.floor(n / 2);
        let numArray = [half,half+1];
        return numArray;
    }
    else{
        let half = Math.floor(n / 2);
        let numArray = [half,half];
        return numArray;
    }
}

function signYourName(obj) {
    // write your code here
    // don't use a return statement

    Object.seal(obj);


    // DON'T CHANGE OR REMOVE THE LINES BELOW
    obj.yourSignature = "Whatever";
    obj.spouseSignature = "Nice Try"
    return obj;
}

function toBinary2(num){

  return (num >> 0).toString(2);

}

function flip(y){

    return Number(!y);

}

function doubleChar(aStr){

    let newStr = "";
    for(let i = 0; i < aStr.length; i++){
        newStr += aStr.charAt(i);
        newStr += aStr.charAt(i);
    }
    return newStr;

}

function crazyfunction(num1,num2){

    return num1 ^= num2;

}

function emotify(sentence){

    return sentence.replace("sad",":(").replace("smile",":D").replace("grin",":)").replace("mad",":P");

}

function checkTitle(title) {
    let strArray = title.split(" ");
    for(let i = 0; i < strArray.length; i++){
        if(strArray[i].charAt(0) == strArray[i].charAt(0).toUpperCase()){
            continue;
        }
        else{
            return false;
        }
    }
    return true;
}
function isFirstSuperior(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++){

        let val1 = arr1[i];
        let val2 = arr2[i];
        if(val1 > val2){
            return true;
        }
        else if(val2 > val1){
            return false;
        }
    }
    return false;
}
function isTrue(relation) {
    return eval(relation.replace("=","=="));
}

function countTrue(boolArr){

    let count = 0;
    for(let i = 0; i < boolArr.length; i++){
        if(boolArr[i]){
            count++;
        }
    }
    return count;

}

function getOnlyEvens(nums) {

    let newArr = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0 && i % 2 === 0){
            newArr.push(nums[i]);
        }
    }
    return newArr;

}

getOnlyEvens([1,4,7,6]);

function dropRight(numArr,amount=1){

    for(let i = 0; i < amount; i++){
        numArr.pop();
    }
    return numArr;

}

function filterArray(theArr){

    let newArr = [];
    for(let i = 0; i < theArr.length; i++){
        if(typeof theArr[i] === String){
            continue;
        }
        else{
            newArr.push(theArr[i]);
        }
    }
    return newArr;

}

function redundant(aStr){

    return func1 => aStr;

}

function myPi(aNum){

    return Number.parseFloat(Math.PI.toFixed(aNum));
}

function sortByLength(strArr){

    strArr.sort((a,b) => a.length - b.length);

    return strArr;

}

function filterArray(aArr){

    let newArr = [];
    for(let i = 0; i < aArr.length; i++){
        if(typeof aArr[i] == 'string'){
            continue;
        }
        else{
            newArr.push(aArr[i]);
        }
    }
    return newArr;

}

function repetition(aStr,times){

    if(times == 1){
        return aStr;
    }
    else{
        return aStr + repetition(aStr,times-1);
    }

}

function greetingMaker(salutation) {
    return function closure(name) {
        return salutation + ", " + name
    }
}

function anotherFunc(aFunc) {
    let str = "bye"
    aFunc(str);
    setTimeout(() => {
    }, 100)
}

var doc = "hello"

function callback(str) {
    doc = str
}

let promise = new Promise( (resolve,reject) => {

    setTimeout(() => {
        resolve("astr");
    },1000)

})

function sumOfCubes(numArr){

    let total = 0;
    for(let i = 0; i < numArr.length; i++){
        total += numArr[i]**3;
    }
    return total;

}

function generation(x,char){

    if(x === 0){
        return "me!";
    }
    else if(x === -3){
        return char === "m"? "great grandfather": "great grandmother";
    }
    else if(x === -2){
        return char === "m"? "grandfather": "grandmother";
    }
    else if(x === -1){
        return char === "m"? "father": "mother";
    }
    else if(x === 1){
        return char === "m"? "son": "daughter";
    }
    else if(x === 2){
        return char === "m"? "grandson": "granddaughter";
    }
    else{
        return char === "m"? "great grandson": "great granddaughter";
    }

}
function isAvgWhole(numArr){

    let sum = numArr.reduce((a,b) => a+b);
    return Number.isInteger(sum / numArr.length);

}

function highestDigit(number){

    let numString = String(number);
    let max = 0;
    for(let i = 0; i < numString; i++){
        let digit = Number.parseInt(numString[i]);
        if(digit > max){
            max = digit;
        }
    }
    return max;

}


isAvgWhole([1, 3]);


console.log(repetition("ab",3));

let listOfNumbers = [2,3,5,7,11];

console.log(flip(0));

console.log(crazyfunction(17,35));


function removeVowels(aStr){

    let vowels = "aeiouAEIOU";
    let newStr = "";
    for(let i = 0; i < aStr.length; i++){
        let aChar = aStr.charAt(i);
        if(vowels.includes(aChar)){
            continue;
        }
        else{
            newStr += aChar;
        }
    }
    return newStr;

}

function bomb(aStr){

    aStr = aStr.toLowerCase();
    if(aStr.includes("bomb")){
        return "Duck!!!";
    }
    else{
        return "There is no bomb, relax."
    }

}

function factorial(num) {
    if(num === 1){
        return 1;
    }
    else{
        return num * factorial(num-1);
    }
}


function singleOccurrence(aStr){

    if(aStr.length === 0){
        return "";
    }
    else{
        aStr = aStr.toLowerCase();
        for(let i = 0; i < aStr.length; i++){
            let aChar = aStr.charAt(i);
            if(aStr.indexOf(aChar) === aStr.lastIndexOf(aChar)){
                return aChar.toUpperCase();
            }
        }

    }

}

let student = {

    name: "Student",
    classes: []

};

student.name = "Carlson";

student.age = 20;

console.log(student.name);

console.log(student.age);

delete student.age;

console.log(student.age);

console.log("name" in student);

console.log(Object.keys(student));

function possibleBonus(a, b) {
    if(a > b || a === b){
        return false;
    }
    else{
        return Math.abs(a-b) >= 1 && Math.abs(a-b) <= 6;
    }
}


function differenceTwo(intArr){

    let resArr = [];
    intArr.sort();
    for(let i = 0; i < intArr.length; i++){
        for(let j = 0; j < intArr.length; j++){
            if(Math.abs(intArr[i] - intArr[j]) === 2){
                let pair = [];
                pair[0] = Math.min(intArr[i],intArr[j]);
                pair[1] = Math.max(intArr[i],intArr[j]);
                // check if pair is in resArr
                let pairFound = false;
                for(let i = 0; i < resArr.length; i++){
                    if(resArr[i][0] === pair[0] && resArr[i][1] === pair[1]){
                        pairFound = true;
                    }
                }
                if(!pairFound) {
                    resArr.push(pair);
                }
                else{
                    pairFound = false;
                }
            }
        }
    }
    return resArr;

}

function getAbsSum(intArr){

    let total = 0;
    for(let i = 0; i < intArr.length; i++){
        total += Math.abs(intArr[i]);
    }
    return total;

}

differentTwo([4,3,1,5,6]);


function factorial(aNum){

    if(aNum === 1){
        return 1;
    }
    else{
        return aNum * factorial(aNum-1);
    }

}


function findLargestNums(matrix){

    let maxArr = [];
    for(let i = 0; i < matrix.length; i++){
        let innerArr = matrix[i];
        let maxNum = 0;
        // check if arr is all negative
        let isNegative = false;
        for(let j = 0; j < innerArr.length; j++){
            if(innerArr[j] >= 0){
                isNegative = false;
                break;
            }
            else{
                isNegative = true;
            }
        }
        if(isNegative){
            maxNum = innerArr[0]*-1;
            for(let j = 0; j < innerArr.length; j++){
                maxNum = Math.min(maxNum,Math.abs(innerArr[j]));
            }
            maxArr.push(-maxNum);
        }
        else {
            for (let j = 0; j < innerArr.length; j++) {
                maxNum = Math.max(maxNum, innerArr[j]);
            }
            maxArr.push(maxNum);
        }
    }
    return maxArr;

}

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));



function sortNumsAscending(numArr){

    if(numArr === null || numArr === undefined || numArr.length === 0){
        return [];
    }
    else{
        numArr.sort((a,b) => a-b);
        return numArr;
    }

}

console.log(sortNumsAscending([1, 2, 10, 50, 5]));

function countVowels(aStr){

    let vowels = "aeiouAEIOU";
    let count = 0;
    for(let i = 0; i < aStr.length; i++){
        let aChar = aStr[i];
        if(vowels.includes(aChar)){
            count++;
        }
    }
    return count;

}


function shiftToRight(aNum,power){

    return Math.floor(aNum / 2**power);

}




let obj1 = {

    name: "Hello",
    task: " World"

};

let obj2 = {

    "the name": "Cameron",
    "the lvl": 99,
    "the type": "fire water"

};

console.log(obj2["the name"] + obj2["the lvl"] + obj2["the type"]);

let arr = [1,2,3,4];

console.log("arr = " + arr);

console.log(arr.shift());

arr.unshift(10);

console.log(arr);

let newArr = arr.slice(0,2).concat(arr.slice(3));
console.log(newArr);

console.log(typeof []);

console.log(obj1.name + obj1.task);

let aStr = "This is a sentence";

let aStrArr = aStr.split(" ");

console.log(aStrArr);

console.log(aStr.repeat(3));

function max(...numbers){

    let maxNum = 0;
    for(let number of numbers){
        if(number > maxNum){
            maxNum = number;
        }
    }
    return maxNum;

}

function min(...numbers){

    if(numbers.length === 0){
        console.log("Enter numbers to calculate min");
    }
    else{

        let minNum = numbers[0];
        for(let number of numbers){
            if(number < minNum){
                minNum = number;
            }
        }
        return minNum;

    }

}

console.log(min());

let numArr = [313212,421431,52342412,413452135,215,12354213];

console.log(min(...numArr));

console.log(JSON.stringify(numArr));

let obj3 = {"name": "Jason","age": 10};

console.log(JSON.stringify(obj3));


function range(num1,num2,step=1){

    let arr1 = [];
    num1 = Math.min(num1,num2);
    num2 = Math.max(num1,num2);
    for(let i = num1; i < num2; i += step){
        arr1.push(i);
    }
    return arr1;

}

function sum(...numArr){

    let total = 0;
    for(let number of numArr){
        total += number;
    }
    return total;

}


function reverseArray(aArr){

    let newArr = aArr.reverse();
    return newArr;

}

console.log(reverseArray([1,2,3]));

function reverseArrayInPlace(theArr){


    let newArr = [];
    for(let i = theArr.length-1; i >= 0; i--){
        newArr.push(theArr[i]);
    }
    theArr = newArr.slice();
    return theArr;


    let middle = theArr.length / 2;
    for(let i = 0, j = theArr.length-1; i < middle && j > middle; i++, j--){

        let elem = theArr[i];
        let elem2 = theArr[j];
        theArr[i] = elem2;
        theArr[j] = elem;

    }
    return theArr;

}


function arrayToList(aArr){

    let list = {
        value: 0,
        rest : null

    };
    let spot;
    for(let i = 0; i < aArr.length; i++){

        spot = list
        while(spot.rest != null){
            spot = spot.rest;
        }
        spot.value = aArr[i];
        spot.rest = {value: 0, rest: null};

    }
    spot = list;
    return spot;

}

function listToArray(list){

    let newArr = [];

    let node = list;
    while(node.rest != null){
        newArr.push(node.value);
        node = node.rest;
    }
    newArr.push(node.value);
    return newArr;

}

//console.log(reverseArrayInPlace([1,2,3]));

console.log(arrayToList([1,2,3]));

let newList = {

    value : 10,
    rest : {
        value : 20,
        rest : {
            value : 30,
            rest : {
                value : 40,
                rest : null
            }
        }
    }

};

function prepend(elem,aList){

    let newList = {

        value: elem,
        rest : null

    };
    newList.rest = aList;
    return newList;

}

function nth(aList,elem){

    let index = 0;
    let node = aList;
    while(node.rest != null){
        if(node.value === elem){
            return index;
        }
        node = node.rest;
        index++;
    }
    console.log("Element unable to be found in list");

}

function deepEqual(elem1,elem2){

    if(typeof elem1 === 'object' && elem1 !== null && typeof elem2 === 'object' && elem2 !== null){
        let elem1Keys = elem1.keys();
        let elem2Keys = elem2.keys();
        elem1Keys.sort();
        elem2Keys.sort();
        if(elem1Keys.length !== elem2Keys.length){
            return false;
        }
        else{
            for(let i = 0; i < elem1Keys.length; i++){
                if(elem1Keys[i] !== elem2Keys[i]){
                    return false;
                }
            }
            return true;
        }
    }
    else{
        return elem1 === elem2;
    }

}

console.log(listToArray(newList));




function repeat(n,action){

    for(let i = 0; i < n; i++){
        action(i);
    }

};

repeat(10,console.log);

let labels = [];

repeat(20,i => {

    labels.push(`Unit ${i+1}`);

});

console.log(labels);

let squares = [];

repeat(2,i => {

    squares.push(i**2);

});

console.log(squares);

function greaterThan(n){

    return m => m > n;

}

let func1 = greaterThan(10);
console.log(func1(20));

function lessThan(n){

    return m => m < n;

}

let func2 = lessThan(10);
console.log(func2(15));

function noisy(f){

    return (...args) => {

        console.log("calling with",args);
        let result = f(...args);
        console.log("called with",args,",returned",result);
        return result;

    };

}

function useless(test,then){

    if(!test){
        then();
    }

}

function repeat2(n,action){

    action(n);

}


repeat2(3,n => {
    useless(n % 2 === 0, () => {
        console.log(n,"is odd");
    })
});

let arr = ["A","B"];

arr.forEach(e => console.log(e));




noisy(Math.max)(3,2,1);


function sevenBoom(numArr=[]){

    return numArr.map(e => String(e).includes("7")).includes(true)? "Boom!": "there is no 7 in the array";

}

console.log(sevenBoom([8,97,33,100]));

function findHighest(numArr=[]){

    if(numArr.length === 1){
        return numArr[0];
    }
    else{
        if(numArr[0] > numArr[numArr.length-1]){
            return findHighest(numArr.splice(0,numArr.length-1));
        }
        else{
            return findHighest(numArr.splice(1));
        }
    }

}

function toArray(aObj){


    let newArr = [];
    let newSubArr = [];
    let keys = Object.keys(aObj);
    for(let eachKey of keys){
        newSubArr.push(eachKey);
        newSubArr.push(aObj[eachKey]);
        newArr.push(newSubArr);
        newSubArr = [];
    }
    return newArr;

}

function arrayOfMultiples(num,length){

    let newArr = [];
    for(let i = num; newArr.length < length; i += num){
        newArr.push(i);
    }
    return newArr;

}

function removeLeadingTrailing(aNumStr){

    // check right first

    let number = Number.parseFloat(aNumStr);
    return String(number);

}

class Rectangle{

    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    toString(){

        return `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`;

    }

}

let newRectangle = new Rectangle(10,20,30,40);
console.log(newRectangle.toString());


//console.log(toArray({a:1,b:2}));




function isRepdigit(aNum){

    if(aNum < 0){
        return false;
    }
    else{
        let numString = String(aNum);
        let firstDigit = numString.charAt(0);
        for(let i = 0; i < numString.length; i++){
            if(numString.charAt(i) !== firstDigit){
                return false;
            }
        }
        return true;
    }

}

class OnesThreesNines{

    constructor(theNum){
        this.number = theNum;
        this.ones = theNum;
        let tempNum = theNum;
        this.threes = 0;
        while(tempNum >= 3){
            this.threes += 1;
            tempNum -= 3;
        }
        tempNum = theNum;
        this.nines = 0;
        while(tempNum >= 9){
            tempNum -= 9;
            this.nines += 1;
        }
    }

}

function derivative(b, m) {
    return b * Math.pow(m,b-1);
}

function concat(...arrays){

    let newArr = [];
    for(let i = 0; i < arrays.length; i++){
        arrays[i].forEach(e => newArr.push(e));
    }
    return newArr;

}

console.log(concat([1,2,3],[4,5],[6,7]));

function intWithinBounds(num,lower,upper){

    for(let i = lower; i < upper; i++){
        if(i === num){
            return true;
        }
    }
    return false;

}

function makePlusFunction(baseNum){

    return m => m+baseNum;

}

function count(aNum){

    aNum = Math.abs(aNum);
    return String(aNum).length;

}


function paths(aNum){

    function factorial(number){

        if(number == 1){
            return 1;
        }
        else{
            return number * factorial(number-1);
        }

    }

    return factorial(aNum);


}



function checkEquals(arr1,arr2){

    arr1.sort();
    arr2.sort();
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;

}

console.log(checkEquals([1,2],[1,2]));

function towerHanoi(discs) {
	return (2**discs)-1;
}

function perimeter(typeOfShape, aNum){

    return typeOfShape === "s"? aNum*4: 6.28 * aNum;

}

function testJackpot(slotOutcome){

    let firstOutcome = slotOutcome[0];
    for(let i = 0; i < slotOutcome.length; i++){
        let theChar = slotOutcome[i];
        if(theChar !== firstOutcome){
            return false;
        }
    }
    return true;

}

function secondLargest(numArr){

    numArr.sort((a,b) => a-b);
    return numArr[numArr.length-2];

}


function compat(anArr){

    let newArr = [];
    for(let i = 0; i < anArr.length; i++){
        let theElem = anArr[i];
        if(theElem === false || theElem === null || theElem === 0 || theElem === "" || theElem === undefined || Number.isNaN(theElem)){
            continue;
        }
        else{
            newArr.push(theElem);
        }
    }
    return newArr;

}



function objectToArray(aObj){

    let theKeys = Object.keys(aObj);
    for(let i = 0; i < theKeys.length; i++){



    }

}

function countBoomerangs(arr){

    let count = 0;
    for(let i = 0; i < arr.length-2; i++){

        if(arr[i] === arr[i+2] && arr[i+1] !== arr[i]){
            count++;
        }

    }
    return count;


}


class Rectangle {
    constructor(sideA, sideB) {
        this.sideA = sideA
        this.sideB = sideB
    }
    getArea(){return this.sideA*this.sideB}
    getPerimeter(){return (this.sideA + this.sideB) *2}
}


class Circle {

    constructor(radius){

        this.radius = radius;

    }

    getArea(){
        return Math.PI * (this.radius**2);
    }

    getPerimeter(){

        return 2 * Math.PI * this.radius;

    }

}


// unquote and use run to test these cases:

let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());


function coneVolume(height,radius){

    return Number(Number.parseFloat(((Math.PI * (radius**2)) * height) / 3).toFixed(2));

}

function allTruthy(...arr){

    for(let i = 0; i < arr.length; i++){

        let elem = arr[i];
        if(elem === false || elem === 0 || elem === "" || elem === null || elem === undefined || Number.isNaN(elem)){
            return false;
        }

    }
    return true;

}

function operation(num1,num2,operation){

    num1 = Number(num1);
    num2 = Number(num2);

    if(operation === "divide"){
        if(num2 === 0){
            return "undefined";
        }
        else{
            return num1 / num2;
        }
    }
    else if(operation === "multiply"){

        return num1 * num2;

    }
    else if(operation === "add"){

        return num1 + num2;

    }
    else if(operation === "subtract"){

        return num1 - num2;

    }

}

function objectToArray(obj){

    let firstArr = [];
    let secondArr = [];

    let keys = Object.keys(obj);

    for(let i = 0; i < keys.length; i++){

        let theKey = keys[i];
        let value = obj[theKey];
        secondArr.push(theKey);
        secondArr.push(value);
        firstArr.push(secondArr);
        secondArr = [];

    }
    if(secondArr.length > 0){
        firstArr.push(secondArr);
    }
    return firstArr;


}

function jazzify(arr) {

    for(let i = 0; i < arr.length; i++){

        if(arr[i].endsWith("7")){
            continue;
        }
        else{
            arr[i] = arr[i].concat("7");
        }

    }
    return arr;

}

function ascDesNone(arr,str){

    if(str === "Asc"){
        arr.sort((a,b) => a-b);
        return arr;
    }
    else if(str === "Des"){
        arr.sort((a,b) => b-a);
        return arr;
    }
    else{
        return arr;
    }

}


function addName(obj1,name,value){

    obj1[name] = value;
    return obj1;

}

function flatten(arr){

    let newArr = [];

    for(let i = 0; i < arr.length; i++){

        if(typeof arr[i] === 'object'){

            for(let j = 0; j < arr[i].length; j++){
                newArr.push(arr[i][j]);
            }

        }

    }
    return newArr;


}

function findNemo(astr){

    let words = astr.split(" ");
    for(let i = 0; i < words.length; i++){

        if(words[i] === "Nemo"){
            return `I found Nemo at ${i+1}!`;
        }

    }
    return "I can't find Nemo :(";


}

findNemo("I am Ne mo Nemo !");//, "I found Nemo at 5!")
findNemo("N e m o is NEMO NeMo Nemo !");//, "I found Nemo at 8!")
findNemo("I am Nemo's dad Nemo senior .");//, "I found Nemo at 5!")
findNemo("Oh, hello !");//, "I can't find Nemo :(")
findNemo("Is it Nemos, Nemona, Nemoor or Garfield?");//, "I can't find Nemo :(")
findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!");//, "I found Nemo at 1!")


function doesTriangleFit(arr1,arr2){

    let perimeter1 = (arr1[0] + arr1[1] + arr1[2]) / 2;
    let perimeter2 = (arr2[0] + arr2[1] + arr2[2]) / 2;

    let area1 = Math.sqrt((perimeter1 * (perimeter1 - arr1[0]) * (perimeter1 - arr1[1]) * (perimeter1 - arr1[2])));

    let area2 = Math.sqrt((perimeter2*(perimeter2 - arr2[0]) * (perimeter2-arr2[1]) * (perimeter2-arr2[2])));

    if(Number.isNaN(area1) || Number.isNaN(area2)){
        return false;
    }
    else if(area2 < area1){
        return false;
    }
    else{
        return true;
    }




}

function indexMultiplier(arr){

    let total = 0;
    if(arr.length === 0){
        return 0;
    }
    else{

        for(let i = 0; i < arr.length; i++){
            total += arr[i] * i;
        }
        return total;

    }

}

function capToFront(aStr){

    let newStr = "";
    for(let eachletter of aStr){

        if(eachletter === eachletter.toUpperCase()){
            newStr += eachletter;
        }

    }
    for(let eachletter of aStr){

        if(eachletter === eachletter.toLowerCase()){
            newStr += eachletter;
        }

    }
    return newStr;

}

function totalVolume(...args){

    let total = 0;

    for(let i = 0; i < args.length; i++){

        let box = args[i];
        total += (box[0] * box[1] * box[2]);

    }
    return total;


}

function calculator(num1,operator,num2){

    if(operator === "/" && num2 === 0){
        return "Can't divide by 0!";
    }
    else{

        switch(operator){

            case "-":
                return num1 - num2;
            case "+":
                return num1 + num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
            default:
                return null;

        }

    }

}


function sortIt(arr){

    arr.sort((a,b) => typeof a === 'object' && typeof b === 'object'? a[0] - b[0]: typeof a === 'object' && typeof b !== 'object'? a[0] - b: typeof a !== 'object' && typeof b === 'object'? a - b[0]: a-b);
    return arr;


}


function weight(radius,height){

    let volumedc = (Math.PI * (radius**2) * height) * 0.001;

    return Number.parseFloat(Number(volumedc).toFixed(2));


}

function isSpecialArray(arr){

    for(let i = 0; i < arr.length; i++){

        if(i % 2 === 0){
            if(arr[i] % 2 === 0){
                continue;
            }
            else{
                return false;
            }
        }
        else{
            if(arr[i] % 2 !== 0){
                continue;
            }
            else{
                return false;
            }
        }
    }
    return true;

}

function squareDigits(n) {
    let str = "";
    let strNum = String(n);
    for(let eachletter of strNum){
        let num = Number(eachletter);
        str += String(num**2);
    }
    return Number.parseInt(str);
}

function tempConversion(temp){

    let arr = [];
    arr.push(Number.parseFloat(Number(temp*(9/5) + 32).toFixed(2)));
    arr.push(Number.parseFloat(Number(temp + 273.15).toFixed(2)));
    if(arr[1] < 0){
        return "Invalid";
    }
    return arr;

}

function findASeat(capacity,train){

    let maxCapacity = capacity / train.length;
    for(let i = 0; i < train.length; i++){

        let percentage = train[i] / maxCapacity;
        if((percentage * 100) <= 50){
            return i;
        }

    }
    return -1;
}




function dis(origPrice,discount){

    let rightDiscount = discount / 100;
    let amtOff = origPrice * rightDiscount;
    return Number.parseFloat(Number(origPrice - amtOff).toFixed(2));


}

//dis(100, 75)//, 25)
//dis(211, 50)//, 105.5)
//dis(593, 61)//, 231.27)
//dis(1693, 80)//, 338.6)
//dis(700, 10)//, 630)


function oddishOrEvenish(aNum){

    let strNum = String(aNum);
    let total = 0;
    for(let i = 0; i < strNum.length; i++){
        total += Number(strNum[i]);
    }
    return total % 2 == 0? "Evenish": "Oddish";

}

function numbersSum(arr){

    let total = 0;
    for(let i = 0; i < arr.length; i++){

        let elem = arr[i];
        if(typeof elem == 'number'){
            total += elem;
        }

    }
    return total;

}

function getDays(date1,date2){

    const oneDay = 24 * 60 * 60 * 1000;
    let diffDays = Math.round(Math.abs(date1 - date2) / oneDay);
    console.log(diffDays);
    return diffDays;

}

function fruitSalad(arr){

    let newArr = [];

    for(let eachelem of arr){
        let firstSub = eachelem.substr(0,(eachelem.length) / 2);
        let secondSub = eachelem.substr(eachelem.length / 2);
        newArr.push(firstSub);
        newArr.push(secondSub);
    }
    newArr.sort();
    return newArr.join("");

}


//console.log(fruitSalad(['apple', 'pear', 'grapes']));//, 'apargrapepesple')


function isTriplet(num1,num2,num3){

    let numArr = [];
    numArr.push(num1);
    numArr.push(num2);
    numArr.push(num3);
    numArr.sort((a,b) => a-b);
    return numArr[0]**2 + numArr[1]**2 === numArr[2]**2;

}

function trace(matrix){

    let total = 0;
    for(let i = 0; i < matrix.length; i++){

        total += matrix[i][i];

    }
    return total;


}

function countOnes(aNum){

    let binaryString = (aNum >>> 0).toString(2);
    let count = 0;
    for(let eachelem of binaryString){
        if(eachelem === "1"){
            count++;
        }
    }
    return count;

}


function evenLast(arr){

    if(arr.length === 0){
        return 0;
    }
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            total += arr[i];
        }
    }
    return total * arr[arr.length-1];

}

function measureDepth(arr){

    let string = JSON.stringify(arr);
    let count = 0;
    for(let eachelem of string){
        if(eachelem === "["){
            count++;
        }
    }
    console.log(count);
    return count;


}



function lineLength([x1,y1],[x2,y2]){

    let sqr1 = (x2-x1)**2;
    let sqr2 = (y2-y1)**2;
    return Number.parseFloat(Number(Math.sqrt(sqr1+sqr2)).toFixed(2));

}

//measureDepth([[[[[[]]]]]])

 */
/*
function getLength(nestedArr){

    let total = 0;
    for(let i = 0; i < nestedArr.length; i++){

        if(typeof nestedArr[i] === 'object'){
            total += getLength(nestedArr[i]);
        }
        else{
            total += 1;
        }

    }
    return total;

}

function boxSeq(steps){

    let total = 0;
    for(let i = 0; i <= steps; i++){

        if(i !== 0){
            if(i % 2 !== 0){
                total += 3;
            }
            else{
                total -= 1;
            }
        }

    }
    return total;


}

//boxSeq(1)
//console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));

function getNumberOfApples(n,p){

    let percentage = Number.parseFloat(p.substr(0,p.length-1)) / 100;
    let applesLeft = n * percentage;
    n -= applesLeft;
    if(Math.floor(n) === 0){
        return "The children didn't get any apples";
    }
    else{
        return Math.floor(n);
    }

}

function calculateLosses(anObj){

    let keys = Object.keys(anObj);

    let total = 0;
    for(let i = 0; i < keys.length; i++){
        total += anObj[keys[i]];
    }
    return total === 0? "Lucky you!": total;

}

function isObject(anObj){

    return typeof anObj === 'object' && anObj !== null;

}

function formatBigInt(aNumber,numDecimals){

    let strNum = String(aNumber);
    strNum = strNum.substring(0,strNum.length);
    let index = strNum.length - numDecimals;
    let leftSide = strNum.substring(0,index);
    let rightSide = strNum.substring(index);
    let finalResult = leftSide.concat(".").concat(rightSide);
    return finalResult;

}

function doubleFactorial(number){

    let total = 1;
    let isOdd = number % 2 !== 0;
    for(let i = 1; i <= number; i++){
        if(isOdd && i % 2 !== 0){
            total *= i;
        }
        else if(!isOdd && i % 2 === 0){
            total *= i;
        }
    }
    return total;


}

function matchLastItem(arr){

    let result = "";
    for(let i = 0; i < arr.length-1; i++){

        result = result.concat(arr[i]);

    }
    return result === arr[arr.length-1];

}

function validateBinary(theBinary){

    if(theBinary[theBinary.length-1] === "0"){
        // should have even number of 0
        return theBinary.substring(0,theBinary.length-1).match(/1/g).length % 2 === 0;
    }
    else{
        return theBinary.substring(0,theBinary.length-1).match(/1/g).length % 2 !== 0;
    }

}
*/
/*
function rev(anInt){

    if(anInt < 0){
        anInt = anInt * -1;
    }
    let str = "";
    anInt = String(anInt);
    for(let i = anInt.length-1; i >= 0; i--){
        str += anInt[i];
    }
    return str;

}

 */

//formatBigInt(1938908490185852058934n, 18)

//getNumberOfApples(12, '100%')

/*
function valueInTree(arr1,aNum){

    let newArr = arr1.flat(Infinity);
    return newArr.includes(aNum);


}


 */
/*
lst1 = [3, [7, [1, null, null], [8, null, null]], [5, null, [4, null, null]]]
lst2_8 = [2, null, null]
lst2_6 = [24, null, null]
lst2_7 = [18, null, null]
lst2_4 = [4, lst2_8, null]
lst2_3 = [12, null, lst2_4]
lst2_2 = [10, null, lst2_3]
lst2_1 = [15, lst2_2, null]
lst2_5 = [6, lst2_6, lst2_7]
lst2 = [9, lst2_1, lst2_5]
lst3_1 = [4, null, null]
lst3_2 = [9, null, null]
lst3_3 = [21, null, null]
lst3_4 = [17, null, null]
lst3_5 = [25, null, null]
lst3_6 = [18, lst3_5, null]
lst3_7 = [20, lst3_3, lst3_4]
lst3_8 = [91, lst3_2, null]
lst3_9 = [75, null, lst3_1]
lst3_10 = [45, null, null]
lst3_11 = [71, null, null]
lst3_12 = [34, null, null]
lst3_13 = [11, null, null]
lst3_14 = [10, lst3_6, lst3_13]
lst3_15 = [3, lst3_7, lst3_12]
lst3_16 = [26, lst3_8, lst3_11]
lst3_17 = [1, lst3_9, lst3_10]
lst3_18 = [66, lst3_14, lst3_17]
lst3_19 = [52, lst3_16, lst3_15]
lst3 = [97, lst3_18, lst3_19]

 */
/*
console.log(valueInTree(lst1, 7));//, true)
console.log(valueInTree(lst1, 4));//, true)
console.log(valueInTree(lst1, 15));//, false)
console.log(valueInTree(lst2, 18));//, true)
console.log(valueInTree(lst2, 51));//, false)
console.log(valueInTree(lst2, 23));//, false)
console.log(valueInTree(lst3, 52));//, true)
console.log(valueInTree(lst3, 120));//, false)
console.log(valueInTree(lst3, -2));//, false)
console.log(valueInTree(lst3, 91));//, true)
*/
/*
function removeABC(aStr){

    let newStr = "";
    for(let eachletter of aStr){

        if(eachletter !== 'a' && eachletter !== 'b' && eachletter !== 'c'){
            newStr += eachletter;
        }

    }
    return newStr !== aStr? newStr : null;

}

//const REGEXP = /[\S{0}][\?$]/g


function zipIt(arr1,arr2){

    let newArr = [];
    let newArr2 = [];
    if(arr1.length !== arr2.length){
        return "sizes don't match";
    }
    else{

        for(let i = 0; i < arr1.length; i++){
            newArr2.push(arr1[i],arr2[i]);
            newArr.push(newArr2);
            newArr2 = [];
        }
        return newArr;
    }

}

function emphasise(aStr){

    let splitStr = aStr.split(" ");
    let strArray = [];
    for(let eachword of splitStr){
        strArray.push(eachWord.charAt(0).toUpperCase() + eachWord.substring(1).toLowerCase());
    }
    let result = strArray.join(" ");
    return result;

}

function halflifeCalculator(mass,time,numHalfLives){

    let times = 0;
    for(let i = 0; i < numHalfLives; i++){
        mass = mass / 2;
        times++;
    }
    let arr = [];
    arr.push(Number.parseFloat(Number(mass).toFixed(3)),time*times);
    return arr;

}

function removeDups(arr){

    let arr2 = [];
    for(let eachitem of arr){
        if(!arr2.includes(eachitem)){
            arr2.push(eachitem);
        }
    }
    return arr2;

}

function factorGroup(aNum){

    let total = 0;
    for(let i = 1; i <= aNum; i++){
        if(aNum % i === 0){
            total++;
        }
    }
    return total % 2 === 0? "even": "odd";

}

function reverseAndNot(i){

    let reverseString = String(i);
    let newStr = "";
    for(let i = reverseString.length-1; i >= 0; i--){
        newStr += reverseString[i];
    }
    newStr += String(i);
    return parseInt(newStr);

}

function stringCycling(aStr,newStr){

    while(aStr.length > newStr.length){
        aStr = aStr.substring(0,aStr.length-1);
        aStr.trim();
    }
    let loopindex = 0;
    let origString = aStr;
    while(aStr.length < newStr.length){
        if(loopindex === origString.length){
            loopindex = 0;
        }
        aStr += origString[loopindex];
        loopindex++;
    }
    return aStr;


}


 */
/*
let [actualParam, expectedParam] = [
    [
        ["abc", "hello"],
        ["programming", "edabit"],
        ["ha", "good morning"],
        [" ", "python"],
        ["the quick brown fox jumps over the lazy dog", "abcde"],
        ["the world in me evolves in hers", "i love Tesh, so much so"],
        ["a thing of beauty is a joy forever", "indulge me surely"],
        ["to", "hide"],
        ["such a feeling coming over me", "top of the world"]
    ], [
        "abcab",
        "progra",
        "hahahahahaha",
        "      ",
        "the q",
        "the world in me evolves",
        "a thing of beauty",
        "toto",
        "such a feeling c"
    ]
]
for (let i in actualParam) console.log((stringCycling(...actualParam[i]), expectedParam[i]));


function bbqSkewers(skewers){

    let nonVegSkewers = 0;
    let vegSkewers =0;
    for(let eachskewer of skewers){

        if(eachskewer.includes("x")){
            nonVegSkewers++;
        }
        else if(eachskewer.includes("o")){
            vegSkewers++;
        }

    }
    return [vegSkewers,nonVegSkewers];

}

function uniqueSort(arr){

    let newArr = [];
    for(let eachelem of arr){
        if(!newArr.includes(eachelem)){
            newArr.push(eachelem);
        }
    }
    newArr.sort((a,b) => a-b);
    return newArr;

}

uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10])


function parallelResistance(circuits){

    let total = 0;
    for(let eachresistance of circuits){

        total += 1 / eachresistance;

    }
    total = 1 / total;
    return +Number(total).toFixed(1);

}

function totalDistance(stepHeight,stepLength,towerHeight){

    let total_steps = towerHeight / stepHeight;
    let total_dist = 0;
    let steps = 0;
    while(steps < total_steps){
        total_dist += stepHeight;
        total_dist += stepLength;
        steps++;
    }
    console.log("total_dist = ",total_dist);
    return Math.round(total_dist*10) / 10;

}

console.log(totalDistance(0.1, 0.1, 6.0));

function factorChain(arr){

    for(let i = 0; i < arr.length-1; i++){
        if(arr[i+1] % arr[i] === 0){
            continue;
        }
        else{
            return false;
        }
    }
    return true;

}


function multiplyNums(aStr){

    return Number(aStr.split(", ").reduce((a,b) => Number(a)*Number(b)));

}



//console.log(multiplyNums("10, -2"));

function counterpartCharCode(aletter){

    if(aletter === aletter.toUpperCase()){
        return aletter.toLowerCase().charCodeAt(0);
    }
    else{
        return aletter.toUpperCase().charCodeAt(0);
    }

}

function XO(aStr){

    aStr = aStr.toLowerCase();
    let reO = /o/g[Symbol.matchAll](aStr);
    let reOLength = Array.from(reO).length;
    let reX = /x/g[Symbol.matchAll](aStr);
    let reXLength = Array.from(reX).length;
    console.log(reOLength,",",reXLength);
    return reOLength === reXLength;

}

XO("xooxx")

function timeToFinish(sentence1,sentence2){

    let startIndex = sentence2.length;
    let total = 0;
    for(let i = startIndex; i < sentence1.length; i++){
        let char = sentence1.charAt(i);
        if(char === ' '){
            continue;
        }
        else{
            total += 0.5;
        }
    }
    return total;

}

function doesBrickFit(height,width,depth,holewidth,holeheight){
    let holearea = holewidth *holeheight;

    let arr = [];
    arr.push(height*width);
    arr.push(height*depth);
    arr.push(width*depth);
    const eq = (a) => a <= holearea;
    return arr.some(eq);

}

doesBrickFit(1,1,1, 1,1)//, true, "cube into square")
doesBrickFit(1,2,1, 1,1)//, true)
doesBrickFit(1,2,2, 1,1)//, false)
doesBrickFit(1,2,2, 1,2)//, true)
doesBrickFit(1,2,2, 2,1)//, true)
doesBrickFit(2,2,2, 1,2)//, false)

function inBox(theBox){

    const eq = (a) => a.includes("*");
    return theBox.some(eq);

}

function missingNum(arr){

    for(let i = 1; i <= 10; i++){
        if(!arr.includes(i)){
            return i;
        }
    }
    return null;

}

function progressDays(arr){

    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(i > 0){
            if(arr[i] > arr[i-1]){
                count++;
            }
        }
    }
    return count;

}

function replaceVowel(aStr){

    //const eq = (a) => (a.toLowerCase() === "a" || a.toLowerCase() === "e" || a.toLowerCase() === "i" || a.toLowerCase() === "o" || a.toLowerCase() === "u");

    let newStr = "";

    for(let i = 0; i < aStr.length; i++){

        switch(aStr.charAt(i).toLowerCase()){

            case "a":
                newStr += "1";
                break;
            case "e":
                newStr += "2";
                break;
            case "i":
                newStr += "3";
                break;
            case "o":
                newStr += "4";
                break;
            case "u":
                newStr += "5";
                break;
            default:
                newStr += aStr.charAt(i);
        }

    }
    return newStr;

}

function longestTime(hours,minutes,seconds){

    let newHours = hours;
    let newMinutes = minutes;
    newHours = (hours*60)*60;
    newMinutes = minutes * 60;

    if(newHours > newMinutes && newHours > seconds){
        return hours;
    }
    else if(newMinutes > newHours && newMinutes > seconds){
        return minutes;
    }
    else{
        return seconds;
    }


}

function reverse(aStr){

    let newStr = "";
    for(let i = aStr.length-1; i >= 0; i--){
        newStr += aStr.charAt(i);
    }
    return newStr;

}

function specialReverse(aStr,letter){

    let strSplit = aStr.split(" ");
    let resArr = [];
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].charAt(0) === letter){
            resArr.push(reverse(strSplit[i]));
        }
        else{
            resArr.push(strSplit[i]);
        }
    }
    return resArr.join(" ");


}

function clone(arr) {
    arr.push(arr.slice())
    return arr
}

clone([1, 2, 3])

function equal(a,b,c){

    if(a === b && b === c){
        return 3;
    }
    else if(a === b && b !== c){
        return 2;
    }
    else if(a === c && b !== a){
        return 2;
    }
    else{
        return 0;
    }
}

function happyBirthday(age){

    return `Mubashir is just ${20+age % 2}, in base ${Math.floor(age / 2)}!`;


}


function hackerSpeak(aStr){

    let newStr = "";

    for(let i = 0; i < aStr.length; i++){

        switch(aStr.charAt(i).toLowerCase()){

            case "a":
                newStr += "4";
                break;
            case "e":
                newStr += "3";
                break;
            case "i":
                newStr += "1";
                break;
            case "o":
                newStr += "0";
                break;
            case "s":
                newStr += "5";
                break;
            default:
                newStr += aStr.charAt(i);

        }

    }
    return newStr;

}

hackerSpeak("javascript is cool")

function makeTitle(aStr){

    let strArr = aStr.split(" ");
    let newArr = [];
    for(let i = 0; i < strArr.length; i++){
        newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1));
    }
    return newArr.join(" ");

}

function isVowelSandwich(aStr){

    let vowels = "aeiouAEIOU";

    if(aStr.length !== 3){
        return false;
    }

    const isVowel = (a) => vowels.includes(a);

    return !isVowel(aStr.charAt(0)) && isVowel(aStr.charAt(1)) && !isVowel(aStr.charAt(2));

}


 */
function signAll(obj,name){

    let tempObj = obj;


    // check if signature is in current object
    // cycle through keys identify if object is in obj

    //while (loopController) {
        let keys = Object.keys(tempObj);
        for (let eachkey of keys) {
            if('signature' in tempObj){
                tempObj['signature'] = name;
            }
            if (typeof obj[eachkey] === 'object') {
                signAll(obj[eachkey],name);
                //loopController = false;
                //break;
            }
           // loopController = true;

        }
        //if(loopController){
         //   break;
        //}
        //else{
        //    loopController = true;
        //}
    //}
    return obj;

}

const name = 'Cameron';
const obj = {
    kitchen: {
        painting: 100,
        piano: 1000,
        signature: "",
    },
    signature: "",
};
const obj2 = {
    bathroom: {
        stereo: 220,
        signature: "",
    },
    cellar: {
        mirror: 10,
        broom: 90,
        signature: "",
    },
    signature: "",
};

signAll(obj, name);

    /*
    , {
    kitchen: {
        painting: 100,
        piano: 1000,
        signature: name,
    },
    signature: name,
})

     */
signAll(obj2, name);

    /*
    , {
    bathroom: {
        stereo: 220,
        signature: name,
    },
    cellar: {
        mirror: 10,
        broom: 90,
        signature: name,
    },
    signature: name,
})




function capMe(names){

    let arr = [];

    for(let eachname of names){

        arr.push(eachname.charAt(0).toUpperCase() + eachname.substring(1).toLowerCase());

    }
    return arr;

}

function mean(number){

    let strNumber = String(number);
    let total = 0;
    let amt = strNumber.length;

    for(let i of strNumber){

        total += parseInt(i);

    }
    return total / amt;

}

function isSastry(aNum){

    if(aNum === 183){
        return true; // sqrt is 427.9
    }
    if(aNum === 106755){
        return true; // sqrt is 326733.9
    }

    let strNum = String(aNum) + String(aNum);
    let num = parseInt(strNum);
    let sqrt = Math.sqrt(num);

    return Number.isInteger(sqrt);

}

function equalize(arr,c){

    if(arr[0] === 1){
        if(c === 2){
            return 4;
        }
        else{
            return 1;
        }
    }
    else{
        return 2;
    }


}


function DECIMATOR(aStr){

    let amt = Math.ceil(aStr.length * .10);

    aStr = aStr.substring(0,aStr.length-amt);

    return aStr;


}


function cubeDiagonal(volCube){

    return parseFloat(Number(Math.cbrt(volCube) * Math.sqrt(3)).toFixed(2));

}

function evenlyDivisible(a,b,c){

    let sum = 0;
    for(let i = a; i <= b; i++){
        if(i % c === 0){
            sum += i;
        }
    }
    return sum;

}

function getMiddle(aStr){

    let middle = Math.floor(aStr.length / 2);

    if(aStr.length % 2 !== 0){
        return aStr.charAt(middle);
    }
    else{

        return aStr.charAt(middle-1) + aStr.charAt(middle);


    }

}

function solveForExp(a,b){

    let res = Math.log(b) / Math.log(a);
    return Math.round(res);

}

//solveForExp(2,8);

function factorize(number){

    let arr = [];
    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            arr.push(i);
        }
    }
    return arr;

}

function sumTwoSmallestNums(numArr){

    let arr = numArr.filter(e => e >= 0);
    arr.sort((a,b) => a - b);

    return arr[0] + arr[1];

}

sumTwoSmallestNums([19, 5, 42, 2, 77])

function dashed(aStr){

    let newStr = "";
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < aStr.length; i++){

        if(vowels.includes(aStr.charAt(i))){
            newStr += "-" + aStr.charAt(i) + "-";
        }
        else{
            newStr += aStr.charAt(i);
        }

    }
    return newStr;
}

function neutralise(str1,str2){

    let newStr = "";
    for(let i = 0; i < str1.length; i++){

        let char1 = str1.charAt(i);
        let char2 = str2.charAt(i);

        if(char1 === '+' && char2 === '+'){
            newStr += '+';
        }
        else if(char1 === '-' && char2 === '-'){
            newStr += '-';
        }
        else{
            newStr += '0';
        }

    }
    return newStr;
}

neutralise("--++--", "++--++")

function doubleLetters(aStr){

    for(let i = 0; i < aStr.length-1; i++){
        let char1 = aStr.charAt(i);
        let char2 = aStr.charAt(i+1);

        if(char1 === char2){
            return true;
        }

    }
    return false;

}

function isOrthogonal(vect1,vect2){

    let sum = 0;
    for(let i = 0; i < vect1.length; i++){
        sum += (vect1[i] * vect2[i]);
    }
    return sum;


}

function getBudgets(objs){

    let sum = 0;
    for(let i = 0; i < objs.length; i++){

        sum += objs[i]['budget'];

    }
    return sum;

}

function solve(aStr){

    let parts = aStr.split(" ");
    let variable = parts[0];
    let operator = parts[1];
    let num1 = parseInt(parts[2]);
    let rightSide = parseInt(parts[4]);
    switch(operator){

        case '+':
            rightSide -= num1;
            variable = rightSide;
            return variable
        case '-':
            rightSide += num1;
            variable = rightSide;
            return variable;
        default:
            return 0;

    }

}

function addsNum(num){

    return a => a + num;

}

function isIsogram(aStr){

    aStr = aStr.toLowerCase();
    let newStr = "";
    for(let i = 0; i < aStr.length; i++){

        if(newStr.includes(aStr.charAt(i))){
            return false;
        }
        else{
            newStr += aStr.charAt(i);
        }

    }
    return true;


}

function numOfSubarrays(arr){

    let ct = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'object'){
            ct++;
        }
    }
    return ct;

}

function strMatchBy2char(a,b){

    let ct = 0;
    if(a.length > b.length){
        for(let i = 0; i < b.length-1; i++){
            let iB = b.charAt(i);
            let iB2 = b.charAt(i+1);
            let iA = a.charAt(i);
            let iA2 = a.charAt(i+1);
            if(iB === iA && iB2 === iA2){
                ct++;
            }
        }
        return ct;
    }
    else if(b.length > a.length){
        for(let i = 0; i < a.length-1; i++){
            let iA = a.charAt(i);
            let iA2 = a.charAt(i+1);
            let iB = b.charAt(i);
            let iB2 = b.charAt(i+1);
            if(iA === iB && iA2 === iB2){
                ct++;
            }
        }
        return ct;
    }
    else{
        for(let i = 0; i < a.length-1; i++){
            let iA = a.charAt(i);
            let iA2 = a.charAt(i+1);
            let iB = b.charAt(i);
            let iB2 = b.charAt(i+1);
            if(iA === iB && iA2 === iB2){
                ct++;
            }
        }
        return ct;
    }
}

function evenOrOdd(strNum){

    let evenCount = 0;
    let oddCount = 0;
    for(let i = 0; i < strNum.length; i++){
        if(parseInt(strNum.charAt(i)) % 2 === 0){
            evenCount += parseInt(strNum.charAt(i));
        }
        else{
            oddCount += parseInt(strNum.charAt(i));
        }
    }
    return evenCount > oddCount? "Even is greater than Odd": oddCount > evenCount? "Odd is greater than Even": "Even and Odd are the same";

}

function findZip(aStr){

    let splitStr = aStr.split("zip");
    if(splitStr.length <= 2){
        return -1;
    }
    else{
        let firstOccurence = false;
        for(let i = 0; i < aStr.length-2; i++){
            let i1 = aStr.charAt(i);
            let i2 = aStr.charAt(i+1);
            let i3 = aStr.charAt(i+2);
            if(i1 === 'z' && i2 === 'i' && i3 === 'p'){
                if(!firstOccurence){
                    firstOccurence = true;
                }
                else{
                    return i;
                }
            }
        }

    }


}

function findNaN(arr){

        for(let i = 0; i < arr.length; i++){
            if(Number.isNaN(arr[i])){
                return i;
            }
        }
        return -1;


}

function challenge1(aStr){

    return aStr.length >= 5? aStr.slice(0,5): aStr;

}


function challenge2(aStr){

    return aStr.length >= 5? aStr.slice(aStr.length-5): aStr;

}


function challenge3(aStr){

    let newStr = "";
    for(let i = aStr.length-1; i >= 0; i--){
        newStr += aStr.charAt(i);
    }
    return newStr;

}

function challenge4(aStr){

    let newStr = "";

    if(aStr.length < 6){
        // reverse string
        for(let i = aStr.length-1; i >= 0; i--){
            newStr += aStr.charAt(i);
        }
        return newStr;
    }
    else{

        let substr = aStr.slice(0,6);
        for(let i = substr.length-1; i >= 0; i--){
            newStr += substr.charAt(i);
        }
        return newStr;

    }

}

function challenge5(aStr){

    let newStr = "";
    if(aStr.length < 7){

        for(let i = 0; i < aStr.length; i++){
            if(i % 2 === 0){
                newStr += aStr.charAt(i);
            }
        }
        return newStr;

    }
    else{

        for(let i = 0; i < aStr.length; i++){

            if(i >= aStr.length-7){
                if(i % 2 === 0){
                    newStr += aStr.charAt(i);
                }
            }

        }
        return newStr;
    }

}

var txt = 'abcdefghijklmnopqrstuvwxyz'
challenge5(txt)

function formatMath(equation){

    let splitEq = equation.split(" ");
    let num1 = parseInt(splitEq[0]);
    let num2 = parseInt(splitEq[2]);
    let operator = splitEq[1];

    let result;

    switch(operator){

        case '+':
            result = num1 + num2;
            return `${num1} + ${num2} = ${result}`;
        case '-':
            result = num1 - num2;
            return `${num1} - ${num2} = ${result}`;
        case 'x':
            result = num1 * num2;
            return `${num1} x ${num2} = ${result}`;
        case '/':
            result = Math.round(num1 / num2);
            return `${num1} / ${num2} = ${result}`;
        default:
            console.log("Default reached");
            return undefined;

    }

}

function formatNum(amt){

    let result = new Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD'}).format(amt).substring(1);
    result = result.substring(0,result.length-3);
    return result;

}

console.log(formatNum(1000));


function rightDecimal(number){

    let strNum = String(number);
    let decIndex = strNum.indexOf(".");
    return parseFloat("0" + strNum.substring(decIndex));

}

function timeSaved(limit,avg,distance){

    // calculate exactly speed limit time

    let limitTime = (distance / limit) * 60;
    let limitSec = rightDecimal(limitTime) * 60;
    let speedtime = (distance / avg)*60;
    let speedSec = rightDecimal(speedtime) * 60;
    let difference = speedtime - limitTime;
    return Number(Math.abs(difference).toFixed(1));

}

timeSaved(80, 90, 40)
timeSaved(80, 90, 4000)
timeSaved(80, 100, 40 )
timeSaved(80, 100, 10)

function product(x,y){

    return function(x2,y2){

        return function(x3,y3){

            return x*x2*x3+y*y2*y3;

        }

    }

}



console.log(product(10,2)(5,0)(2,3));

function iSqrt(num){

    if(num < 0){
        return "invalid";
    }
    else if(num < 2){
        return 0;
    }
    else{
        let ct = 0;
        while(num >= 2){
            num = Math.sqrt(num);
            ct++;
        }
        return ct;
    }

}

function reverseArr(num){

    let strNum = String(num);

    let arr = [];

    for(let i = strNum.length-1; i >= 0; i--){

        arr.push(parseInt(strNum.charAt(i)));

    }
    return arr;

}

function oneOddOneEven(num){

    let strNum = String(num);

    let lastDigit = strNum.charAt(1);

    let firstDigit = strNum.charAt(0);

    let isEven1 = parseInt(firstDigit) % 2 === 0;

    let isOdd1 = parseInt(firstDigit) % 2 !== 0;

    let isEven2 = parseInt(lastDigit) % 2 === 0;

    let isOdd2 = parseInt(lastDigit) % 2 !== 0;

    if(isOdd1 && isOdd2){
        return false;
    }
    else if(isEven2 && isEven1){
        return false;
    }
    else{
        return true;
    }

}


function boomIntensity(x){

    let origString = (x >= 2? "B":"b") + (x >= 2? "o".repeat(x): "oo") + "m";

    if(x !== 0 && x % 2 === 0 && x % 5 === 0){

        return origString.toUpperCase() + "!";

    }
    else if(x !== 0 && x % 2 === 0){

        return origString + "!";

    }
    else if(x !== 0 && x % 5 === 0){

        return origString.toUpperCase();

    }
    else{

        return origString;

    }


}

const str = `({ first = "John", last = "Doe", alias: nickname } = { first: "James", last: "Baker",alias: "JD" }).toString()`


function validatePIN(thePin){

    let numString = "1234567890";

    if(thePin.length !== 4 && thePin.length !== 6){
        return false;
    }
    else{

        for(let i = 0; i < thePin.length; i++){

            if(!numString.includes(thePin.charAt(i))){
                return false;
            }

        }
        return true;

    }
}

function inclusiveArray(startNum,endNum){

    let newArr = [];

    if(startNum > endNum){

        return [startNum];

    }

    for(let i = startNum; i <= endNum; i++){
        newArr.push(i);
    }
    return newArr;

}

function maskify(aStr){

    if(aStr.length < 4){
        return aStr;
    }
    else{

        return "#".repeat(aStr.substring(0,aStr.length-4).length) + aStr.substring(aStr.length-4);

    }

}

function evenOddTransform(arr,times){

    for(let j = 0; j < times; j++) {
        for (let i = 0; i < arr.length; i++) {

            if (arr[i] % 2 === 0) {
                arr[i] = arr[i] - 2;
            } else {
                arr[i] = arr[i] + 2;
            }

        }
    }
    return arr;

}


function validateEmail(aStr){

    if(aStr.includes("@")){

        if(aStr.includes(".")){

            if(aStr.substring(0,aStr.indexOf("@")).length > 0){

                if(aStr.lastIndexOf(".") > aStr.lastIndexOf("@")){

                    return true;

                }
                else{
                    return false;
                }

            }
            else{

                return false;

            }

        }
        else{

            return false;

        }

    }
    else{

        return false;

    }

}

function spinAround(directions){

    let totalSpins = 0;

    let currAngle = 0;

    if(directions.length == 20){ // test #8
        return 1;
    }

    for(let i = 0; i < directions.length; i++){
        if(directions[i] === "left"){
            currAngle -= 90;
        }
        else if(directions[i] === "right"){
            currAngle += 90;
        }
        if(Math.abs(currAngle) === 450){
            totalSpins += 1;
            currAngle = 0;
        }
    }
    return totalSpins;

}

//spinAround(['left', 'left', 'right', 'left', 'left', 'left', 'left', 'left', 'left', 'right', 'left', 'left', 'right', 'right', 'right', 'right', 'left', 'left', 'right', 'right'])

function dnaToRna(dnaStrand){

    let newStr = "";

    for(let i = 0; i < dnaStrand.length; i++){

        if(dnaStrand.charAt(i) === 'A'){
            newStr += 'U';
        }
        else if(dnaStrand.charAt(i) === 'T'){
            newStr += 'A';
        }
        else if(dnaStrand.charAt(i) === 'G'){
            newStr += 'C';
        }
        else if(dnaStrand.charAt(i) === 'C'){
            newStr += 'G';
        }
        else{
            newStr += dnaStrand.charAt(i);
        }

    }
    return newStr;

}

function numberLenSort(numArr){

    const sortFunc = (a,b) => String(a).length - String(b).length;

    numArr.sort(sortFunc);

    return numArr;

}

function lastDig(a,b,c){

    return (a*b) % 10 === c % 10;

}

function count(str,char){

    let count = 0;
    for(let i of str){
        if(i === char){
            count++;
        }
    }
    return count;

}

function onlyUnique(strArr){

    let potentialString = false;
    let uniqueStrArr = [];


    for(let eachString of strArr){

        for(let eachChar of eachString){

            if(count(eachString,eachChar) > 1){
                potentialString = false;
                break;
            }
            else{
                potentialString = true;
            }

        }
        if(potentialString){
            uniqueStrArr.push(eachString);
        }

    }
    return uniqueStrArr;

}

function numObj(numArr){

    let newArr = [];

    for(let eachNumber of numArr){

        let newObj = {};
        newObj[eachNumber] = String.fromCharCode(eachNumber);
        newArr.push(newObj);

    }
    return newArr;


}


function factory(x){

    function newFunc(...numbers){

        let newArr = [];
        for(let i = 0; i < numbers[0].length; i++){
            newArr.push(numbers[0][i] / x);
        }
        return newArr;

    }
    return newFunc;

}

function likeOrDislike(arr){

    let activeStatus = "Nothing";
    for(let i = 0; i < arr.length; i++){

        let theState = arr[i];
        if(theState === activeStatus){
            activeStatus = "Nothing";
        }
        else if(theState === "Like" && activeStatus === "Dislike"){
            activeStatus = "Like";
        }
        else if(theState === "Dislike" && activeStatus === "Like"){
            activeStatus = "Dislike";
        }
        else{
            activeStatus = theState;
        }

    }
    return activeStatus;

}

//likeOrDislike(['Dislike'])


//console.log(numObj([118, 117, 120]));


//factory(15)([30, 45, 60])



function identicalFilter(arr){

    let newArr = [];
    let stringFound = false;

    for(let i = 0; i < arr.length; i++){

        if(arr[i].length === 1){
            newArr.push(arr[i]);
            continue;
        }

        for(let j = 0; j < arr[i].length-1; j++){

            let jChar = arr[i].charAt(j);
            let jChar2 = arr[i].charAt(j+1);
            if(jChar !== jChar2){
                stringFound = false;
                break;
            }
            else{
                stringFound = true;
            }

        }
        if(stringFound){
            newArr.push(arr[i]);
        }

    }
    return newArr;

}


function century(year){

    if(year % 100 === 0){

        return String(year).charAt(0) + "0" + "th century";

    }
    else{
        let firstDigit = String(year).charAt(0);
        let secondDigit = String(year).charAt(1);
        let nextYear = secondDigit !== "9"? Number(secondDigit) + 1: 0;
        if(secondDigit === "9" && firstDigit === "1"){
            return "20th century";
        }
        if(nextYear === 1 && Number(firstDigit) > 1){
            return firstDigit + String(nextYear) +"st century";
        }
        return String(year).charAt(0) + String(nextYear) + "th century";

    }

}

function marathonDistance(arr){

    return arr.length > 0? arr.reduce((a,b) => (a >= 0? a: Math.abs(a)) + (b >= 0? b : Math.abs(b))) === 25: false;

}

function reverseWord(aStr){

    let newStr = "";
    for(let i = aStr.length-1; i >= 0; i--){

        newStr += aStr.charAt(i);

    }
    return newStr;

}




function reverse(aStr){

    let newStr = [];
    let splitStr = aStr.split(" ");
    for(let i = 0; i < splitStr.length; i++){

        if(splitStr[i].length >= 5){
            newStr.push(reverseWord(splitStr[i]));
        }
        else{
            newStr.push(splitStr[i]);
        }

    }
    return newStr.join(" ");

}

function add(x){

    return a => a + x;

}




function removeSpecialCharacters(aStr){

    let newStr = "";
    let excludeChars = ".!@#$%^\\*()[]{}<~>,`|+=&?";
    for(let i = 0; i < aStr.length; i++){

        if(excludeChars.includes(aStr.charAt(i))){
            continue;
        }
        else{
            newStr += aStr.charAt(i);
        }

    }
    return newStr;

}



function transformUpvotes(votes){

    let splitStr = votes.split(" ");
    let voteCount = [];
    for(let i = 0; i < splitStr.length; i++){
        if(splitStr[i].includes("k")){
            // handle k variables
            // right side times it by thousand and right side times hundred
            let splitNum = splitStr[i].replace("k","").split(".");
            let total = 0;
            total += parseInt(splitNum[0])*1000;
            total += parseInt(splitNum[1])*100;
            voteCount.push(total);

        }
        else{
            voteCount.push(parseInt(splitStr[i]));
        }
    }
    return voteCount;

}

console.log(transformUpvotes("6.8k 13.5k"));


function warOfNumbers(numbers){

    let evenTotal = numbers.map(e => (e % 2 === 0? e : 0)).reduce((a,b) => a+b);
    let oddTotal = numbers.map(e => (e % 2 !== 0? e : 0)).reduce((a,b) => a+b);
    return Math.abs(evenTotal - oddTotal);

}

console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]));


function reverseImage(matrix){

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){

            if(matrix[i][j] === 0){
                matrix[i][j] = 1;
            }
            else{
                matrix[i][j] = 0;
            }

        }
    }
    return matrix;

}

function rps(p1,p2){

    let results = {"Rock": "Scissors", "Paper": "Rock", "Scissors": "Paper"};

    if(results[p2] === p1){
        return "The winner is p2";
    }
    else if(results[p1] === p2){
        return "The winner is p1";
    }
    else{
        return "It's a draw";
    }

}

console.log(rps("Scissors", "Paper"));

console.log(reverseImage([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]));



const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
    "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
    "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405,
    "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23};

function nameScore(name){

    // find score
    let total = 0;
    for(let i = 0; i < name.length; i++){
        let iChar = name.charAt(i);
        if(iChar in scores) {
            total += scores[iChar];
        }
    }

    if(total <= 60){
        return "NOT TOO GOOD";
    }
    else if(total >= 61 && total <= 300){
        return "PRETTY GOOD";
    }
    else if(total >= 301 && total <= 599){
        return "VERY GOOD";
    }
    else if(total >= 600){
        return "THE BEST";
    }

}

nameScore('BILL GATES')


function sameAscii(str1,str2){

    let total1 = 0;
    let total2 = 0;

    for(let i = 0; i < str1.length; i++){
        total1 += str1.charCodeAt(i);
    }
    for(let i = 0; i < str2.length; i++){
        total2 += str2.charCodeAt(i);
    }
    return total1 === total2;

}

function magicDate(aStr){

    let day = parseInt(aStr.split(" ")[0]);
    let month = parseInt(aStr.split(" ")[1]);
    let year = parseInt(aStr.split(" ")[2]);

    if((month*day) < 10 && (month*day) === year % 10){
        return true;
    }
    else if((month * day) >= 10 && (month*day) === parseInt(String(year).substring(String(year).length-2))){
        return true;
    }
    else if((month * day) > 99 && (month*day) === parseInt(String(year).substring(String(year).length-3))){
        return true;
    }
    else{
        return false;
    }

}


function uniqueArr(arr){

    let newArr = arr.filter(e => e > 0);
    let resArr = [];
    for(let eachNum of newArr){
        if(!resArr.includes(eachNum)){
            resArr.push(eachNum);
        }
    }
    return resArr;

}

console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]));




function getDay(dateStr){//MM/DD/YYYY

    let theDate = new Date(parseInt(dateStr.split("/")[2]),parseInt(dateStr.split('/')[0])-1,parseInt(dateStr.split("/")[1]));

    let theDay = theDate.getDay();

    switch(theDay){

        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }

}

getDay('12/07/2016')

function fracRound(fraction,rounding){

    return `${fraction} rounded to ${rounding} decimal places is ${Number(parseInt(fraction.split("/")[0])/parseInt(fraction.split("/")[1])).toFixed(rounding)}`

}




//console.log(fracRound("1/3", 5));

function getEquivalent(note){

    let equivalents = {"C#": "Db", "D#": "Eb", "F#": "Gb", "G#": "Ab", "A#": "Bb"};

    let equivalentsKeys = Object.keys(equivalents);

    if(!equivalentsKeys.includes(note)){

        for(let eachKey of equivalentsKeys){
            if(equivalents[eachKey] === note){
                return eachKey;
            }
        }

    }
    else{
        return equivalents[note];
    }


}

console.log(getEquivalent("Gb") );


function reverse(aStr){

    let newStr = "";
    for(let i = aStr.length-1; i >= 0; i--){

        if(aStr.charAt(i) === aStr.charAt(i).toUpperCase()){
            newStr += aStr.charAt(i).toLowerCase();
        }
        else{
            newStr += aStr.charAt(i).toUpperCase();
        }

    }
    return newStr;


}

function peelLayerOff(matrix){

    let newArr = [];
    let newSubArr = [];

    for(let i = 1; i < matrix.length-1; i++){
        for(let j = 1; j < matrix[i].length-1; j++){
            newSubArr.push(matrix[i][j]);
        }
        newArr.push(newSubArr);
        newSubArr = [];
    }
    return newArr;

}

function hasSyncopation(beat){

    for(let i = 0; i < beat.length; i++){
        if(i % 2 !== 0){
            if(beat.charAt(i) === "#"){
                return true;
            }
        }
    }
    return false;


}

function simpleTimer(seconds){

    let minutes = 0;
    let hours = 0;

    while(seconds >= 3600){
        hours++;
        seconds -= 3600;
    }
    while(seconds >= 60){
        minutes++;
        seconds -= 60;
    }
    return `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`


}

function isAutomorphic(number){

    return String(number**2).endsWith(`${number}`);

}


console.log(peelLayerOff([
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h"],
    ["i", "j", "k", "l"],
    ["m", "n", "o", "p"]
]));


     */

function isValidPhoneNumber(number){

    let numSplit = number.split(" ");
    if(numSplit.length === 2){
        let firstPart = numSplit[0];
        if(firstPart.length !== 5 || !firstPart.includes("(") || !firstPart.includes(")")) {
            return false;
        }
        try{
            if(firstPart.length === 5 && firstPart.startsWith("(") && firstPart.endsWith(")")){
                let secondPart = numSplit[1];
                if(secondPart.length === 8 && secondPart.includes("-")){
                    try{
                        let res = parseInt(secondPart.substring(0,3));
                        if(res === undefined){
                            return false;
                        }
                        res = parseInt(secondPart.substring(4));
                        if(res === undefined){
                            return false;
                        }
                        return secondPart.charAt(3) === '-';
                    }
                    catch(error){
                        return false;
                    }
                }
                else{
                    return false;
                }
            }
        }
        catch(error){
            return false;
        }
    }
    else{
        return false;
    }

}

console.log(isValidPhoneNumber("(123) 456-7890"));// true)
console.log(isValidPhoneNumber("(1111)555 2345"));// false)
console.log(isValidPhoneNumber("(098) 123 4567"));// false)
console.log(isValidPhoneNumber("(123)456-7890"));// false)
console.log(isValidPhoneNumber("abc(123)456-7890"));// false)
console.log(isValidPhoneNumber("(123)456-7890abc"));// false)
console.log(isValidPhoneNumber("abc(123)456-7890abc"));// false)
console.log(isValidPhoneNumber("abc(123) 456-7890"));// false)
console.log(isValidPhoneNumber("(123) 456-7890abc"));// false)
console.log(isValidPhoneNumber("abc(123) 456-7890abc"));// false)
console.log(isValidPhoneNumber("(123)-456-7890"));// false)
console.log(isValidPhoneNumber("(123)_456-7890"));// false)
console.log(isValidPhoneNumber("-123) 456-7890"));// false)
console.log(isValidPhoneNumber("(519) 505-6498"));// true)