let cd = document.querySelector("#c1")
let btn= document.querySelector("#vm")
let hCard = document.querySelector("#hidden")
let click= document.querySelector("#vie")
function display(e){
    e.preventDefault();
    cd.style.display="none"
    hCard.style.display="block"


} 
btn.addEventListener("click",display)
let hCd = document.querySelector("#hD")
let hd = document.querySelector("#am")
function disply(e){
    e.preventDefault()
    hd.style.display="none"
    hCd.style.display="block"


} 
click.addEventListener("click",disply)

let b=document.querySelector("#v")
let vs=document.querySelector("#rwa")
let vw=document.querySelector("#view")
 function displayVolcanos(e){
    e.preventDefault()
    b.style.display="none"
    vs.style.display="block"
 }
vw.addEventListener("click",displayVolcanos)

let d=document.querySelector("#card1")
let m=document.querySelector("#hid")
let y=document.querySelector("#btnV")

function displayKimomo(e){
    e.preventDefault()
    d.style.display="none"
    m.style.display="block"

}
y.addEventListener("click",displayKimomo)


let x=document.querySelector("#car")
let n=document.querySelector("#primate")
let z=document.querySelector("#ps")

function displayPrimate(e){
    e.preventDefault()
      x.style.display="none"
    n.style.display="block"

    
}
z.addEventListener("click",displayPrimate)

let visit=document.querySelector("#visitRwanda")
let vis=document.querySelector("#visitHidden")
let vi=document.querySelector("#visitview")

function displayVisit(e){
    e.preventDefault()
      visit.style.display="none"
    vis.style.display="block"

    
}
vi.addEventListener("click",displayVisit)




