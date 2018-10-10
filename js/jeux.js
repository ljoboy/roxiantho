var div = [$("#1"), $("#2"), $("#3"), $("#4")];

$("button").click(() => {
    var rep = div[Math.floor(Math.random() * div.length)];
    setTimeout(() => {
        rep.html("Gagnant");
    }, 300);
    setTimeout(() => {
        rep.html("Trouve moi");
    }, 1700);
    clearInterval(rep);

});
$(".parent").click(
    (e) => {

    }
);