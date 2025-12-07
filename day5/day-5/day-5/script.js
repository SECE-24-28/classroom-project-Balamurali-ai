/*document.body.style.backgroundColor = "lightblue";
document.body.color = "darkblue";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.margin = "50px";
const uname ="Jone";
document.title = `${uname} - DOM Manipulation`;
const a = document.getElementsByTagName('li');
for(let i=0; i<a.length; i++){
    a[i].style.color = "darkgreen";
    a[i].style.fontSize = "20px";
    a[i].style.margin = "10px 0";
    a[i].style.fontWeight = "bold";
    a[i].style.fontstyle = "Verdana";
}
const boxes = document.getElementsByClassName('box');
for(let i=0; i<boxes.length; i++){
    boxes[i].style.width = "100px";
    boxes[i].style.height = "100px";
    boxes[i].style.backgroundColor = "orange";
    boxes[i].style.display = "inline-block";
    boxes[i].style.margin = "10px";
    boxes[i].style.lineHeight = "100px";
    boxes[i].style.textAlign = "center";
    boxes[i].style.color = "white";
    boxes[i].style.fontWeight = "bold";
    boxes[i].style.fontstyle = "Times New Roman";
}

//3d boxes with shadow
for(let i=0; i<boxes.length; i++){
    boxes[i].style.boxShadow = "5px 5px 15px rgba(0,0,0,0.3)";
} */

   /* const cont = document.getElementById('b3');
    cont.style.backgroundColor = "purple";
    cont.style.color ="white";
    cont.style.fontSize = "40px";

    const boxes = document.getElementsByClassName('box');   
    boxes[0].style.color = "red";
    boxes[3].style.opacity = "0.5";
    boxes[4].style.border = "5px solid black";
    
    const fc = document.getElementById('flexContiner');
    fc.style.display = "flex";
    fc.style.justifyContent = "space-around";
    fc.style.alignItems = "center";
    fc.style.height = "150px"; */
/*
const cont = document.getElementById('container');
cont.innerHTML = '<h1 id="textChange">This is using innerHTML</h1>';
document.getElementById('textChange').innerText = 'Hello World';
*/

//done with individual box manipulation
/*const box = document.getElementsByClassName('box');
console.log(box);
box[2].style.height = "50px";
box[2].style.width = "50px";
box[2].style.backgroundColor = "red";
box[2].style.border = "2px solid black";
box[2].innerText = "I am box 3";*/


// done with class manipulation
/* const box = document.getElementsByClassName('box');
console.log(box);
for(let i=0; i<box.length; i++){
    box[i].style.height = "100px";
    box[i].style.width = "100px";
    box[i].style.border = "2px solid black";
    box[i].style.backgroundColor = "lightgrey";
    box[i].style.color = "darkblue";
    box[i].style.fontSize = "20px";
    box[i].style.margin = "10px";

}
*/

// const cont = document.getElementsByTagName('div');
// cont[0].style.backgroundColor = "lightgreen";

/*const cont = document.querySelectorAll('div');
cont[2].style.backgroundColor = "lightgreen";*/

/*const cont = document.getElementById('b1');
cont.classList.add('red');
//cont.classList.remove('box');
cont.classList.replace('red', 'blue');
cont.classList.toggle('green');

if(cont.classList.contains('box')){
    console.log("Box class has been applied");
}*/

/*const div = document.createElement('h1');
div.textContent="This h1 tag has been created using JS";
document.body.appendChild(div);
document.body.removeChild(div);*/

const btn = document.getElementById('modeChng');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});

