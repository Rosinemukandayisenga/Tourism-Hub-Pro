let form=document.getElementById("form")
let first=document.getElementById("firstname")
let last=document.getElementById("lastname")
let email=document.getElementById("email")
let password=document.getElementById("password")
let pass=document.getElementById("password2")
form.addEventListener("submit",e=>{
    e.preventDefault();
    validateInputs();

})
const setSuccess=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error-message')
    errorDisplay.innerHTML=message
}
const validateInputs=()=>{
    const firstValue=first.value.trim();
    const lastValue=last.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();
    const emailValue=email.value.trim();
}
const re=isValidEmail=email=>{

}
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
if(firstValue===''){
    setError(first,'firstname is required')
    // inputControl.classlist.add("error")
    // inputControl.classlist.remove("success")
}
else{
    setSuccess(firstValue)
}
if(lastValue===''){
    setError(last,'lastname is required')
}
setSuccess(lastValue)

if(password===''){
    setError(password,'password is required')
}
else if(passwordValue.length<8){
    
    setError(password,'password must be greater than 8 character')
}
else{
    setSuccess(password)
}

if(password2Value===''){
    setError(password2,'confirm password is required')
}
else if(passwordValue==password2Value){
    setError(password2,'password doesnt match')
}
setSuccess(password2)

if(emailValue===''){
    setError(email,'Email is require')
}
else if(!isValidEmail(emailValue)){
  setSuccess(email,'provide valid email')
}
else{
    setSuccess(email)
}

