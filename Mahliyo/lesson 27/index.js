// let massiv = ["BMW", "TESLA", "GELIK"]

// massiv.push("Audi")

// console.log(massiv[massiv.length - 1])
// console.log(massiv)
// massiv.unshift("Ferrari")
// console.log(massiv)
// massiv.splice(2,1)
// console.log(massiv)

let sonlar = [5,10,15,20,25];
sonlar.splice(1,2)
sonlar.forEach((value,index) => {
console.log (index + " idx " + value + " value" )
})
let isimlar = ["Ali","Bexruz","Islom"]
let uzunlig = isimlar.map((ism) => ism.length)

console.log(uzunlig)













// console.log (sonlar.indexOf(2))
// console.log (sonlar)
// console.log (typeof sonlar.join(" + "))
// console.log (typeof sonlar)
// for(son in sonlar){
//     console.log(son)
// }
// for(son of sonlar){
//     console.log(son)
// }
