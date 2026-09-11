// chapter: js data type; lesson: parse এর ভিতর নানরুটি(NAN)
// js parse practice

1.
const math = "20";
const parseMath = parseInt(math);
const moreMath = 10;
const totalMath = parseMath + moreMath;
// console.log(totalMath);

2.
const pie = 3.1416;
const parsePie = parseInt(pie);
// console.log(parsePie);

3.
const boy = "premikBoy";
const parseBoy = parseInt(boy)
// console.log(parseBoy); //NaN

4.
const firstNum = 3.1416;
const secNum = 2.1416;
const totalNum = parseInt(firstNum + secNum)
// console.log(totalNum);

5.
const firstDigit = "56.78";
const parseFirstDigit = parseInt(firstDigit);
const secDigit = "12.46";
const parseSecDigit = parseInt(secDigit);
const totalDigit = parseInt(parseFirstDigit + parseSecDigit);
// console.log(totalDigit);

6.
const suger = 10.5698;
const salt = 12.2145;
const totalProduct = (suger + salt).toFixed(1)
// console.log(totalProduct);
