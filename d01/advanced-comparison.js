//chapter : javascript comparison; lesson : ডাবল নাকি ট্রিপল (===) (এডভান্সড তুলনা)

1.
const meHave = 50;
const broHave = "50";
const compare1 = meHave == broHave;
const compare2 = meHave === broHave;
// console.log(compare1, compare2);

2.
const lang = "Javascript" == "Javascript" 
const lang1 = "Javascript" === "Javascript" 
// console.log(lang, lang1); // true true; becase both variable value & data type (string) is same.

3.
const num = 25;
const str = "25";
const compare3 = num == str;
const compare4 = num === str;
// console.log(compare3,compare4); //true false; double check only 'value', but triple equal check both 'value & data type'.

4.
const fruit = "apple";
const secFruit = "apple";
const compare5 =fruit == secFruit;
const compare6 = fruit === secFruit;
// console.log(compare5,compare6);

5.
const test = "test";
const Test = "Test";
const comapre7 = test == Test;
const comapre8 = test === Test;
console.log(comapre7, comapre8);

6.
const variableX = 15;
const variableY = "20";
const compare9 = variableX != variableY;
const compare10 = variableX !== variableY;
// console.log(compare9, compare10);

7.
const variableA = hello; // error
const variableB = "Hello";
const compare11 = variableA == variableB;
const compare12 = variableA === variableB;
// console.log(compare11, compare12);