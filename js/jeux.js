var div = [$("#1"), $("#2"), $("#3"), $("#4")];
var jo, rep;
var colors = ["red", "brown", "cyan", "blue", "green", "violet", "grey"];

function color() {
    for (let i = 0; i < div.length; i++) {
        const el = div[i];
        el.attr("class", "c2 " + colors[Math.floor(Math.random() * colors.length)]);
    }
}
color();
$("button").click(() => {

    chWord = setInterval(() => {
        color();
        rep = Math.floor(Math.random() * div.length);
        div[0].text("trouve moi");
        div[1].text("trouve moi");
        div[2].text("trouve moi");
        div[3].text("trouve moi");
        div[rep].text("gagnant");
    }, 500);
    setTimeout(() => {
        blackify();
        jo = div[rep];
        clearInterval(chWord);
    }, 3000);

});
$(".parent").click(
    (e) => {
        if (e.target.id === jo[0].id) {
            swal("Gagner", "Réponse correcte", "success");
        } else {
            swal("Perdu", "Réponse Incorrecte", "error");
        }
    }
);

function blackify() {
    for (let i = 0; i < div.length; i++) {
        const el = div[i];
        el.attr("class", "c2 black txt");
        el.html(i + 1);
    }
}

function aide() {
    var carree = $("<div class='carree'></div>");
    var noir = $("<div class='noir'></div>");
    $("body").prepend(carree, noir);
}