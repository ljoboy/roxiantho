

let body = document.querySelector('body');
let toggle = document.querySelector(".toggle");

let stockMode = localStorage.getItem("mode");

if(stockMode && stockMode === "dark"){
    body.classList.add("dark");
    toggle.classList.add("active");
}
        

toggle.addEventListener("click", ()=>{
    if(!body.classList.contains('dark')){
            body.classList.toggle("dark");
    }else{
            body.classList.remove('dark')
            resultat.style.backgroundColor = "#fff"
    }

    if(!body.classList.contains("dark")){
        return localStorage.setItem("mode", "light")
    }
    localStorage.setItem("mode", "dark");
});
toggle.addEventListener("click", () =>
    toggle.classList.toggle("active")
);