// Call Back
// Callback Hell
//function firstFunction(parameters, callback) {
  //// do stuff
  //callback()
//}



//// Promise
//// 3 states: Pending, Fullfilled, Rejected

//const myPromise = new Promise((resolve, reject) => {
  //const error = true;

  //if (!error) {
    //resolve("Yes! resolved the promise")
  //} else {
    //reject("No! rejected the promise")
  //}

//})

//// Thenables
//myPromise.then(value => {
  //return value + " Next" 
//}).then(newValue => {
  //console.log(newValue)
  //}).catch(err => {
    //console.log(err) 
  //})

//const mySecondPromise = new Promise((resolve, reject) => {
  //setTimeout(() => {
    //resolve("second promise resolved")
  //}, 3000)
//})

//mySecondPromise.then( val => console.log(val)).catch(err => console.log(err))

//console.log("===")

//myPromise.then(value => {
  //return value + " Next" 
//}).then(newValue => {
  //console.log(newValue)
  //}).catch(err => {
    //console.log(err) 
  //})


// outout
// ===
// No rejected the promise 
// second promise resolved

const users = fetch("https://jsonplaceholder.typicode.com/users")

users.then(res => {
  console.log("promise 1")
  return res.json()
}).then(data => console.log("promise 2")).catch(err => console.log(err))


const fetchUser = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await users.json()
  console.log("async")
}

fetchUser()

// all
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
    ]).then((value) => console.log('all resolve', value));

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((resolve, reject )=> setTimeout(() => reject(3), 1000))  // 3
    ]).then((value) => console.log(value)).catch(err => console.log("all reject", err));

// race
Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
    ]).then((value) => console.log("race", value));

// any
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then((v) => console.log("any", v));
