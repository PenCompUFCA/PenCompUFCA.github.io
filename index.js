var y = document.getElementsByClassName("change");

window.onload(function run(y) {
    var menu = y.nextElementSibling;
    menu.style.display = "none";
})

const btn_drop = document.getElementById("dropdown");
const menu = document.getElementById("menu");

function dropDown(x) {
    x.classList.toggle("change");
    var menu = x.nextElementSibling;
        if (menu.style.display === "block") {
            menu.style.opacity = 0;
            menu.style.transform = 'scale(0)';
            window.setTimeout(function(){
                menu.style.display = 'none';
            },300); // timed to match animation-duration
        } 
        else {
            menu.style.display = 'block';
            window.setTimeout(function(){
                menu.style.opacity = 1;
                menu.style.transform = 'scale(1)';
            },0);

        }
}

function insta() {
    window.open("https://www.instagram.com/pcomputacionalufca/", "_self");
}