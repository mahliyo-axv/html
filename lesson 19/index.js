let login = prompt("Loginni kiriting:");
let parol = prompt("Parolni kiriting:");

if (login === "admin" && parol === "12345") {
    console.log("Xush kelibsiz");
} else {
    console.log("Login yoki parol xato");
}
let kupon = prompt("kupon bormi");
let ball = prompt ("balingizni kiriting");
if(kupon === "bor" || ball ===110){
console.log("Sizga sovg'a bor");
}else{
    console.log("Afsus sizga sovga yq");
}
let son = prompt("Sonni kiriting");
if(son % 2 === 0){
    console.log("Bu juft son");
}
else{
    console.log("Bu toq son")
}

let name = "Mahliyo,Barno,Shoira,Mavluda,Zarina,Jasmina,Kibir,"
console.log(name, name.length)
console.log(name[1])
console.log(name.indexOf("B"))
console.log(name.indexOf("Barno"))
console.log(name. lastIndexOf("Kibir"))
console.log(name.includes("Mavluda"))

let til = "JavaScript"
console.log(til.slice(0,4));
console.log(til.slice(-6));
console.log(til.toUpperCase());
console.log(til.toLowerCase());

let msg = "Asalom sen yomon odamsan va yomon dostsan"
console.log(msg.replaceAll("yomon" , "yaxshi"))
