let userAge = 20;
if(userAge <= 12){
    console.log("Siz xali bolasiz")
}
else if(userAge <= 18){
    console.log("Siz o`smir yoshdasiz")
}
else{
    console.log("Siz katta yoshdasiz")
}

let ball = 10;
if(ball >= 90){
    console.log("A`lo")
}
else if(ball >= 70){
    console.log("Yaxshi")
}
else{
    console.log("Qoniqarsiz")
}
for(let i = 1; i <= 10; i++){
    console.log(i)
}
for(let i = 2; i <= 20; i+= 2){
    console.log(i)
}
let jami = 0
for(let i = 1; i <= 10; i++){
jami =jami + i
}console.log(jami)


let list =[1,2,3,4,5] //number
let userList = ["Ali","Ibroxim","Islom"]//string
let gibritList = [1,2,"Ali", true]
console.log(userList.length)

for(let i = 0; i< userList.length; i++){
    console.log("Asalomu Alaykum" +userList[i])
}