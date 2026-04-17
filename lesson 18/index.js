console.log(10 > 5 && 8 < 12); //true
console.log(4 === 4 && 5 > 10); //false
console.log("Olma" === "Olma" && 20 !== 20); //false
console.log(true && 7 <= 7); //false xato
console.log(0 > 1 && 100 === 100); //false
console.log(15 >= 10 && "A" !=="B");//false xato
console.log(false && true); //false
console.log(5 + 5 ===10 && 2 * 2 === 4);//false xato
console.log(10 > 20 && 5 < 1); //false
console.log(null === null && undefined === undefined);//true

console.log(5 > 10 || 4 == 4); //true
console.log(10 < 5 || 1 > 2); //fase
console.log("JS" === "JS" || 5 === 6); // true
console.log(false || true);// true
console.log(100 !== 100 || 50 > 10);// true
console.log(0 === "0" || 7 > 3);//true
console.log(15 < 10 || 8 >= 9);//false
console.log("" === "" || 5 < 2);//true
console.log(true || false);//true
console.log(10 + 10 === 21 || 5 - 2 === 4);//false

console.log((5 > 2 && 10 < 15) || 4 === 5);// true
console.log(10 > 5 && (3 < 1 || 8 === 8));//true
console.log(!(5 > 10) && 4 === 4);//true
console.log(false || (10 !== 10 && 5 > 2));//false
console.log((1 === 1  || 2 === 3)&&(4 > 1 && 5 < 10));// true
console.log(10 > 20 || (5 < 10 && "Salom" === "Salom"));//true
console.log(!(true && false) || 5 < 2);//true
console.log((8 === 8 && 7 > 10) || (4 < 2 || 1 === 1));//true
console.log(100 > 50 && (false || (5 === 5 && 2 > 1)));//true
