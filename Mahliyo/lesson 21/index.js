let matn = "          aLISHER     "
matn = matn.trim()
console.log(matn.charAt(0).toUpperCase() + matn.slice(1).toLowerCase())
let matn1 ="test@gmail.com"
console.log(matn1.includes("test@gmail.com"))
let ism = "+998 (90) 123-45-67"
let toza = ism
  .replaceAll(" ", "")
  .replaceAll("(", "")
  .replaceAll(")", "")
  .replaceAll("-", "")

console.log(toza) 