let cd = document.querySelector("#lgtr")
let btn= document.querySelector("#lgview")
let hCard = document.querySelector("#letsgoHidden")
let click= document.querySelector("#uvrview")
function display(e){
    e.preventDefault()
    cd.style.display="none"
    hCard.style.display="block"


} 
btn.addEventListener("click",display)
let hCd = document.querySelector("#uvrHidden")
let hd = document.querySelector("#uvr")
function disply(e){
    e.preventDefault()
    hd.style.display="none"
    hCd.style.display="block"


} 
click.addEventListener("click",disply)

let b=document.querySelector("#yT")
let vs=document.querySelector("#yambiHidden")
let vw=document.querySelector("#yambiview")
 function displayYamb(e){
    e.preventDefault()
    b.style.display="none"
    vs.style.display="block"
 }
vw.addEventListener("click",displayYamb)

let d=document.querySelector("#hlt")
let m=document.querySelector("#hermosaHidden")
let y=document.querySelector("#hltview")

function displayKimomo(e){
    e.preventDefault()
    d.style.display="none"
    m.style.display="block"

}
y.addEventListener("click",displayKimomo)


let x=document.querySelector("#grs")
let n=document.querySelector("#goldenHidden")
let z=document.querySelector("#goldenview")

function displayGolden(e){
    e.preventDefault()
      x.style.display="none"
    n.style.display="block"

    
}
z.addEventListener("click",displayGolden)

let visit=document.querySelector("#ns")
let vis=document.querySelector("#nezaHidden")
let vi=document.querySelector("#nezaview")

function displayNeza(e){
    e.preventDefault()
      visit.style.display="none"
    vis.style.display="block"

    
}
vi.addEventListener("click",displayNeza)