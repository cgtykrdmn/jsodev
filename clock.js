let userName = prompt("Enter your name")

let name1 = document.querySelector("#myName")
name1.innerHTML += `${userName}`

let clock1 = document.querySelector("#myClock")
let dt1 = new Date()
clock1.innerHTML = `${dt1}`