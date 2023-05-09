var x=document.getElementById("on")
function click(){
    document.getElementById("navbar").style.display="block"
}
x.addEventListener("click", click)
function clickon(){
    document.getElementById("navbar").style.display="none"
}
x.addEventListener("mouseenter", clickon)