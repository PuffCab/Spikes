// function A() {
//     console.log("1")
// }
// function B() {
//     console.log("2")
// }
// function C() {
//     console.log("3")
// }
// A()
// B()
// C()
// function one() {
//     console.log("1")
// }
// function two() {
//     console.log("2")
//     one()
// }
// function three() {
//     console.log("3")
//     two()
//     console.log("4")
// }
// three()

//ASYNC OPERATIONS - WEB/BROWSER API events...

// function one() {
//     console.log("1")
// }
// function two() {
//     console.log("2")
  
// }
// function three() {
//     console.log("3")
//     setTimeout(one, 0)
//     two()
 
// }
// three()

const dinnerPromise = new Promise((resolve, reject) => {
  const dinnerIsready= true

    if (dinnerIsready) {
        
        resolve("Dinner is ready, let's eat")
    } else {
        reject("Sorry, I couldn't do it. Let's order a pizza")
    }

})


// dinnerPromise.then((result) => {
//   console.log('result__>', result)
// }).catch((error) => {
//   console.log('error__>', error)
// })

function one() {
    console.log("1")
}
function two() {
    console.log("2")
  
}
function three() {
    console.log("3")
    setTimeout(one, 0)
    dinnerPromise.then((result) => {
  console.log('result__>', result)
})
    two()
 
}
three()