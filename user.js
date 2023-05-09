
let userName=document.getElementById("txtuserName")
let last=document.getElementById("txtlastname")
let email=document.getElementById("txtemail")
let pswd=document.getElementById("txtpswd")
let confpswd=document.getElementById("txtconfpswd")
let form=document.querySelector("form")

function validatesInput(){
if(userName.value.trim()===''){
    // let parent=userName.parentElement;
    // let messageEl=parent.querySelector("small")
    // messageEl.innerText="username cant be null"
onerror(userName,'usernmae cant be null ')
}
else {
onSuccess(userName)
}
}
document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault;
    validatesInput();
})
function onSuccess(input){
   let parent=userName.parentElement;
    let messageEl=parent.querySelector("small")
    messageEl.innerText="username cant be null"
    messageEl.style.visibility="hidden"  
    messageEl.innerText="" 
    parent.classList.remove("error")
    parent.classList.add("success")
}
function onerror(input){
    let parent=userName.parentElement;
    let messageEl=parent.querySelector("small")
    messageEl.style.visibility="visible"
    messageEl.innerText=message;
    parent.classList.add("error")
    parent.classList.remove("success")
}

let register=[];
document.getElementById("form").value;
document.addEventListener("submit",function(event){
    event.preventDefault();
    const userName=document.getElementById("userName").value;
    const txtlastname=document.getElementById("txtlastname").value;
    const txtemail=document.getElementById("txtemail").value;
    const txtpswd=document.getElementById("txtpswd").value;
    const existingUser=register.find((u) => u.txtemail===txtemail)
    }
)
if (existingUser){
    alert("user already exists");
    location.href="login.html";
    return;
}
register.push(userName,txtlastname,txtpswd,txtpswd)
localStorage.setItem(register.JSON.stringify(register))
