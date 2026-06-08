console.log(5 == "5"); //true
console.log(5 === "5");//false
console.log(10 > 5);//true
console.log(7 < 7);//false
console.log(8 >= "8");//true
console.log(4 !== "4");//true
console.log(0 == false);//false xato
console.log(0 === false);//false
console.log(null == undefined);//true
console.log(null === undefined);//false
console.log("olma"=="Olma");//false
console.log("10" != 10);//true xato
console.log(20 <= 25);//true
console.log("" == 0);//false
console.log(NaN == NaN);//true xato
console.log(true == 1);//true
console.log(true === 1);//false
console.log("b"> "a");//true
console.log("2">"12");//true
console.log(false != "0");//false
if(!false){
    console.log("1")
}
else if(true){
console.log("2")
}
else if(true){
console.log("3")
}
else{
    console.log("4")
}
if(true){
    console.log("5")
}
else{
    console.log("6")
}
const userAge = Number(prompt("Yoshingiz"))
console.log(typeof userAge)

if(userAge <13){
    console.log("Siz yosh bolasiz")
}
else if(userAge > 13 && userAge < 20){
    console.log("Siz o`smir yoshdasiz.")
}
else{
    console.log("Siz katta yoshdasiz")
}

const userPassword =prompt("Parol") 
console.log(userPassword === "secret123")
if(userPassword === "secret123"){
    console.log("Tizimga muvaffaqiyatli kirdingiz")
}
else{
    console.log("Parol noto`g`ri iltimos qayta urinib ko`ring")
}