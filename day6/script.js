//IIFE --> immediately Invoked function Exection
// function({
//     console.log("I am IIFE");
// })(
// )
// console.log("Hello world from js");
// setTimeout() => {
//     console.log("Hello world from timeout");
// },0);
// setInterval(())

function display(uname){
console.log("your name is : ",uname);
}
function func1(){
display("bala");
}
function add(a,b,callbackfn)
{
    const sum = a + b;
    callbackfn(sum);
}
add(399999999999999999999,599999999999999999999999999,display);
// const prom1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Hello world from promise");
//     }, 5000);
//     resolve("Hello world from promise");
// });
// prom1.then((message) => {console.log(message);});
/*const promise1 =new Promise ((resolve,reject) =>{
    const val = Math.random();
    if(val < 0.5){
        reject('The number is ${val} which is lesser than 0.5');

    }
    else{
        resolve('The number is ${val} which is greater than 0.5');
    }
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello world from promise 2");
    }, 5000);
});
promise1.then((message) => {console.log(message);}).catch(err => console.log("Promise1 error: "+ err));
let promise3 = Promise.race([promise1,promise2 ]);

function loadData(){
    return new Promise((res,rej) =>{
        setTimeout(() =>{
            res("The data has been initiated");
        },2000);
    });
}

console.log("Data is Loading");
let datas = loadData();
datas.then((datas) => {
        console.log("The datas are:",datas);
        console.log("The data is cleaning...");
        console.log("Data is ready to process.");
    }
);*/

async function loadData(){
    const rawData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data  = rawData.json();
    return data;
}
async function main()
{
    let data = await loadData();
    console.log(data);
}

main();