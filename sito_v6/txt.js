function preambolo_open() {
    var testo = document.getElementById("preambolo_testo")
    testo.classList.toggle("preambolo_aperto");
}

function FadeIn(nodo,tempo,indice){
    if(indice == nodo.length){
        return
    }
    setTimeout(function(){
        nodo[indice].style.opacity = "1";
    },tempo);
    FadeIn(nodo,tempo+500,indice+1);
}
function gestorescroll() {
    var wrap = document.getElementById("wrapper");
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    var nodoMain = document.getElementById("contenuti");
    var sect1 = document.getElementById("sez_1").offsetTop;
    var sect2 = document.getElementById("sez_2").offsetTop;
    var sect3 = document.getElementById("sez_3").offsetTop;
    var sect4 = document.getElementById("sez_4").offsetTop;
    var sect5 = document.getElementById("sez_5").offsetTop;
    var sect6 = document.getElementById("sez_6").offsetTop;
    var sect7 = document.getElementById("sez_7").offsetTop;
    var sect8 = document.getElementById("sez_8").offsetTop;
    var sect9 = document.getElementById("sez_9").offsetTop;
    var sect10 = document.getElementById("sez_10").offsetTop;
    var sect11 = document.getElementById("sez_11").offsetTop;
    var sect12 = document.getElementById("sez_12").offsetTop;
    wrapper.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "</h1>";
    if (scroll >= sect1 && scroll < sect2) {
        wrap.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "" + "SEC1" + "=" + sect1 + "</h1>";
        nodoMain.style.backgroundColor = "black";
        nodoMain.style.color = "#ffffff";
        settore_1(scroll);
    }
    if (scroll >= sect2 && scroll < sect3) {
        wrap.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "" + "SEC2" + "=" + sect2 + "</h1>";
    }
    if (scroll >= sect3 && scroll < sect4) {
        wrap.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "" + "SEC3" + "=" + sect3 + "</h1>";
        nodoMain.style.backgroundColor = "black";
        settore_3(scroll);
    }
    if (scroll >= sect4 && scroll < sect5) {
        wrap.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "" + "SEC4" + "=" + sect4 + "</h1>";
        nodoMain.style.backgroundColor = "#1a1a1a";
        nodoMain.style.color = "#b3b3b3";
        
    }
    if (scroll >= sect5 && scroll < sect6) {
        wrap.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "" + "SEC5" + "=" + sect5 + "</h1>";
        nodoMain.style.backgroundColor = "#666666";
        nodoMain.style.color = "#8c8c8c";
        
        settore_5(scroll);
        
    }
    if (scroll >= sect6 && scroll < sect7) {
        wrap.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "" + "SEC6" + "=" + sect6 + "</h1>";
        nodoMain.style.backgroundColor = "#d9d9d9";
        nodoMain.style.color = "#4d4d4d";
    }
    if (scroll >= sect7 && scroll < sect8) {
        wrap.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "" + "SEC7" + "=" + sect7 + "</h1>";
         nodoMain.style.backgroundColor = "white";
        nodoMain.style.color = "black";
        
        
    }
    if (scroll >= sect8 && scroll < sect9) {
        wrap.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "" + "SEC8" + "=" + sect8 + "</h1>";
        nodoMain.style.backgroundColor = "white";
        nodoMain.style.color = "black";
    }
    if (scroll >= sect9 && scroll < sect10) {
        wrap.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "" + "SEC9" + "=" + sect9 + "</h1>";
        nodoMain.style.backgroundColor = "black";
        nodoMain.style.color = "white";
    }
    if (scroll >= sect10 && scroll < sect11) {
        wrap.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "" + "SEC10" + "=" + sect10 + "</h1>";
    }
    if (scroll >= sect11 && scroll < sect12) {
        wrap.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "" + "SEC11" + "=" + sect11 + "</h1>";
    }
    if (scroll >= sect12) {
        wrap.innerHTML = "<h1>" + "C_SCROLL" + "=" + scroll + "" + "SEC12" + "=" + sect12 + "</h1>";
    }
}

function settore_1(scroll) {
    var F = document.getElementById("fuoco").offsetTop;
    var T = document.getElementById("sez_1_svg_triangolo");
    if (scroll >= F) {
        T.style.strokeDasharray = "0";
        T.style.stroke = "red";
    }
}
function settore_2(){
 
}
function settore_3(scroll) {
    var start1 = document.getElementById("sez_3_divPrimo").offsetParent.offsetTop + document.getElementById("sez_3_divPrimo").offsetTop;
    if(scroll >= start1){
        var paragrafi1 = document.getElementsByClassName("sez_3_divPrimo_p_fade");
        FadeIn(paragrafi1,0001,0);
    }
    var start2 = document.getElementById("sez_3_divSecondo").offsetParent.offsetTop + document.getElementById("sez_3_divSecondo").offsetTop;
    if(scroll >= start2){
        var paragrafi2 = document.getElementsByClassName("sez_3_divSecondo_p_fade");
        FadeIn(paragrafi2,500,0);
    }
}
function settore_5(scroll){
    var start1 = document.getElementById("sez_5_div").offsetParent.offsetTop + document.getElementById("sez_5_div").offsetTop;
    var div = document.getElementById("sez_5_div");
    if(scroll >= start1){

    }
}

function inizializza() {
    var apripreambolo = document.getElementById("preambolo_apri");
    apripreambolo.onclick = preambolo_open;
    var nodocontainer = document.body;
    nodocontainer.onscroll = gestorescroll;
}

window.onload = inizializza;
