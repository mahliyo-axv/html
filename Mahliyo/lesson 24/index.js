function sharbatTayyorla(meva) {
    console.log(meva + " sharbati");
}

let ism = prompt("Mevani kiriting");

sharbatTayyorla(ism);

function grammgaaylantir(kg){
console.log(kg * 1000)
}
let nom = prompt("Sonni kiriting");
grammgaaylantir(nom);

function haftalikJamgarma(kunlikPul) {
    return kunlikPul * 7;
}

let nom1 = Number(prompt("Kunlik pulni kiriting"));

console.log(haftalikJamgarma(nom));

function harf(katta){
return katta.toUpperCase()
}
console.log(harf("ali"))