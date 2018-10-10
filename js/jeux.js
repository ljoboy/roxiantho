var div = [$("#1"), $("#2"), $("#3"), $("#4")];
var rep;
var color = ["red", "brown", "cyan", "blue", "green", "black", "violet"];
$("button").click(() => {
    rep = div[Math.floor(Math.random() * div.length)];
    setTimeout(() => {
        rep.html("Gagnant");
    }, 300);
    setTimeout(() => {
        rep.html("Trouve moi");
    }, 1700);
    // div[0].animate({ left: "680px" });
    // div[1].animate({ right: "680px" });
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