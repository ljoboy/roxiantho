var darkbutton = document.getElementById("darkbutton")
var corp = document.getElementById("body")
var titre = document.getElementById("titre")

function darkmode(){
    corp.classList.toggle("darkmode")
    titre.classList.toggle("white")
    if (darkbutton.value=="Mode Nuit") {
        darkbutton.value="Mode Jour"
    }
    else{
        darkbutton.value="Mode Nuit"
    }
}
