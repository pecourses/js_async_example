"use strict";
/* 
const p1 = new Promise((resolve, reject) => {
  resolve("RESOLVED PROMISE");
});

const p2 = Promise.resolve("RESOLVED PROMISE");

console.log(p1);

const x = 10;

p1.then((string) => {
  console.log("Then result: ", string);
  return Promise.reject(string);
})
  .then((test) => {
    console.log(test);
    return "ok";
  })
  .catch((err) => {
    console.log("Caught error !", err);
  })
  .finally(() => {
    console.log("finally");
  });
 */

//console.log(JSON.stringify(obj));

fetch("./user.json")
  .then((res) => res.json())
  .then((user) => console.log(user))
  .catch(console.error);

async function test(){}