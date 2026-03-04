let hamyon = 0;
for( let i = 1; i <=7; i++  ){
    if(i == 7) continue
    if(i == 5){
hamyon += 20000
    }else{
        hamyon += 10000
    }
}
console.log(hamyon)

let juftYigndi = 0;
let toqYigindi = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        juftYigndi += i;
    } else {
        toqYigindi += i;
    }
}
console.log("Juft yig'indi = " + juftYigndi);
console.log("Toq yig'indi = " + toqYigindi);
console.log("Juft sonlar g'olib bo'lgi");
for(let i = 100; i >= 0; i-- ){
    console.log("Quvvat:" +i+ "%")
    if(i === 20){
        console.log("Telefon o'chdi")
        break
    }
}

 