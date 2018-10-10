var div = [$("#1"), $("#2"), $("#3"), $("#4")];
var rep;
var colors = ["red", "brown", "cyan", "blue", "green", "violet", "grey"];

function color() {
    for (let i = 0; i < div.length; i++) {
        const el = div[i];
        el.toggleClass(colors[Math.floor(Math.random() * colors.length)]);
    }
}
color();
$("button").click(() => {
    rep = div[Math.floor(Math.random() * div.length)];
    setTimeout(() => {
        rep.html("Gagnant");
    }, 300);
    chColor = setInterval(color, 250);
    setTimeout(() => {
        rep.html("Trouve moi");
    }, 1000);
    setTimeout(() => {
        clearInterval(chColor);
    }, 3000);
});
$(".parent").click(
    (e) => {
        if (e.target.id === rep[0].id) {
            swal("Gagner", "Réponse correcte", "success");
        } else {
            swal("Perdu", "Réponse Incorrecte", "error");
        }
    }
);