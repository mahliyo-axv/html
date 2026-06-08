function salomBer(ism) {
    console.log("salom  ✋❤️" + ism + " 😊");
}

let ism = prompt("Ismingizni kiriting:");
salomBer(ism);

function yigindisi(a ,b){
return a-b;
}
const yigindisi2 = (a ,b)=>a+b;
console.log(yigindisi2(10,6));

function juftmi(age) {
    if (age % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(juftmi(12));

let yilingiz = prompt("Yilingizni kiriting");

function yoshHisobla(yil) {
    return 2026 - yil;
}

console.log(yoshHisobla(yilingiz));
