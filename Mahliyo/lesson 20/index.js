let name = "Mahliyo";
console.log(name.length);      
console.log(name.toUpperCase());
let name1 = "JavaScript  juda qiziqarli va kuchli dasturlash tilidir"
console.log(name1.indexOf("juda"))
console.log(name1.includes("kuchli"))
let til = "Mahliyo.axv@gmail.com"
console.log(til.slice(-9));

let msg = "  Olma,Bexi,Uzum"
console.log(msg.trim())
console.log(msg.replaceAll("Bexi","Anor"))
let son = 34.3542567898
console.log(son, typeof son)
console.log(son, typeof son.toString())
console.log(son.toFixed(2),typeof son)
const text = prompt("son ")
// console.log(parseInt(text) , typeof parseInt(text))
console.log(Number("10.5"))
console.log(parseInt("10.5px"))
console.log(parseFloat("10.5px"))
