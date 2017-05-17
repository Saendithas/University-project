function titoli(){
    var nodotitoli = document.getElementsByClassName("titolo");
    var nodoomega = document.getElementById("cave_img");
    var nodoselect = document.getElementById("intro");
    titleIn(nodotitoli,1000,0);
    omegaIn(nodoomega,3000);
    textIn(nodoselect,6000);
}

function titleIn(nodo,tempo,indice){
    if(indice == nodo.length){
        return
    }
    setTimeout(function(){
        nodo[indice].style.display = "inline";
    },tempo);
    titleIn(nodo,tempo+500,indice+1);
}
function omegaIn(nodo,tempo){
    setTimeout(function(){
        nodo.style.animation = "omegaIn 1s ease-in forwards";
    },tempo);
}
function textIn(nodo,tempo){
    setTimeout(function(){
        nodo.style.animation = "textIn 0.5s ease-out forwards";
    },tempo);
}
function menu_open(){
    var menu = document.getElementById("menu")
    menu.classList.add("menu_open")
}
function menu_close(){
    var menu = document.getElementById("menu");
    menu.classList.remove("menu_open")
}
function inizializza(){
    var cover = document.getElementById("cover");
       // cover.style.animation = "coverout 1s ease-in forwards";
    var body = document.getElementById("body");
    var container = 
        document.getElementById("container");
    var aprimenu = document.getElementById("aprimenu")
    aprimenu.onclick = menu_open;
    var chiudi = document.getElementById("chiudimenu")
    chiudimenu.onclick = menu_close;
    titoli();
}

window.onload=inizializza;