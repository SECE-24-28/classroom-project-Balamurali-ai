const myform = document.getElementById('myform');
const username = document.getElementById('uname');
const email = document.getElementById('email');
const age = document.getElementById('age');
const mycards = document.getElementById('mycards');

myform.addEventListener('submit', (event)=> {
    event.preventDefault();
    mycards.innnerHTML +=`<div class="card">
                    <div><span class = "labels">Name :</span> ${username.value}</div>
                    <div><span class = "labels">Email :</span> ${email.value}/div>
                    <div><span class = "labels">age :</span> ${age.value}</div>
                </div>`
});