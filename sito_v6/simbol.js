/* Gestisce l'avanzamento del testo chiamando la funzione "successivo". la funzione termina una volta scorsi tutti gli elementi della classe.*/
function destra() {
    try {
        var nodosimboli = document.getElementsByTagName("li");
        if (i >= 7) {
            return;
        } else {

            for (li = 0; li < nodosimboli.length; li++) {
                nodosimboli[li].removeEventListener("animationend", precedente, false);
            }
            nodosimboli[i].style.animation = "centro_sinistra 0.5s ease-in-out forwards";
            nodosimboli[i].addEventListener("animationend", successivo, false);
        }
    } catch (e) {
        alert("destra" + e);
    }
}
/*Incrementa "i". Dopo aver completato l'animazione inverte le classi "in_view" e "not_view" dell'elemento corrente e del precedente.*/
function successivo() {
    try {
        var nodosimboli = document.getElementsByTagName("li");
        i++;
        nodosimboli[i].style.animation = "destra_centro 0.5s ease-in-out forwards";
        nodosimboli[i].classList.remove("not_view");
        nodosimboli[i].classList.add("in_view");
        nodosimboli[i - 1].classList.remove("in_view");
        nodosimboli[i - 1].classList.add("not_view");
        visualizzaTesto();
    } catch (e) {
        alert("successivo" + e);
    }
}

/* Gestisce lo scorrimento all'indietro del testo chiamando la funzione "precedente". la funzione termina se l'elemento corrente è il primo.*/
function sinistra() {
    try {
        var nodosimboli = document.getElementsByTagName("li");
        if (i <= 0) {
            return;
        } else {
            for (li = 0; li < nodosimboli.length; li++) {
                nodosimboli[li].removeEventListener("animationend", successivo, false);
            }
            nodosimboli[i].style.animation = "centro_destra 0.5s ease-in-out forwards";
            nodosimboli[i].addEventListener("animationend", precedente, false);
        }
    } catch (e) {
        alert("sinistra" + e);
    }
}
/*Decrementa "i". Dopo aver completato l'animazione inverte le classi "in_view" e "not_view" dell'elemento corrente e del successivo.*/
function precedente() {
    try {
        var nodosimboli = document.getElementsByTagName("li");
        i--;
        nodosimboli[i].style.animation = "sinistra_centro 0.5s ease-in-out forwards";
        nodosimboli[i].classList.remove("not_view");
        nodosimboli[i].classList.add("in_view");
        nodosimboli[i + 1].classList.remove("in_view");
        nodosimboli[i + 1].classList.add("not_view");
        visualizzaTesto();
    } catch (e) {
        alert("precedente" + e);
    }
}

//Crea il paragrafo in cui viene inserito il testo verificando prima la presenza di un altro paragrafo. Se presente viene sostituito.       
function visualizzaTesto() {
    try {
        var nododescrizione = document.getElementById("descrizione");
        nododescrizione.classList.toggle("dissolv");
        var nodoParagrafo;
        if (nododescrizione.firstChild == null) {
            nodoParagrafo = document.createElement("p");
            nodoParagrafo.appendChild(creaContenuto());
            nododescrizione.appendChild(nodoParagrafo);
            nododescrizione.classList.add("dissolv");
        } else if (nododescrizione.firstChild != null) {
            nodoParagrafo = nododescrizione.firstChild;
            var new_nodocontenuto = creaContenuto();
            nodoParagrafo.replaceChild(new_nodocontenuto, nodoParagrafo.firstChild);
            nododescrizione.classList.add("dissolv");
        }
    } catch (e) {
        alert("visualizzaTesto" + e)
    }
}

//Crea il nodo testo da inserire nel paragrafo
function creaContenuto() {
    try {
        var nodoTesto;
        switch (i) {
            case 0:
                nodoTesto = document.createTextNode(Contenuti[0]);
                break;
            case 1:
                nodoTesto = document.createTextNode(Contenuti[1]);
                break;
            case 2:
                nodoTesto = document.createTextNode(Contenuti[2]);
                break;
            case 3:
                nodoTesto = document.createTextNode(Contenuti[3]);
                break;
            case 4:
                nodoTesto = document.createTextNode(Contenuti[4]);
                break;
            case 5:
                nodoTesto = document.createTextNode(Contenuti[5]);
                break;
            case 6:
                nodoTesto = document.createTextNode(Contenuti[6]);
                break;
            case 7:
                nodoTesto = document.createTextNode(Contenuti[7]);
                break;
        }
        return nodoTesto;
    } catch (e) {
        alert("creaContenuto" + e)
    }
}

function menu_open(){
    var menu = document.getElementById("menu")
    menu.classList.add("menu_open")
}
function menu_close(){
    var menu = document.getElementById("menu");
    menu.classList.remove("menu_open")
}

//Variabili globali

var i = 0;

function inizializza() {
    var nodopuls_destro = document.getElementById("freccia_destra");
        nodopuls_destro.onclick = destra;
    var nodopuls_sinistro = document.getElementById("freccia_sinistra");
        nodopuls_sinistro.onclick = sinistra;
    var aprimenu = document.getElementById("aprimenu")
        aprimenu.onclick = menu_open;
    var chiudi = document.getElementById("chiudimenu")
        chiudimenu.onclick = menu_close;
    visualizzaTesto();

}


var Contenuti = [
    
    "L'uomo, incatenato all' opinione è impossibilitato a volgersi attorno. \r Essendo vissuto da sempre all'interno della caverna è vincolato alla realtà che si trova di fronte: le immagini delle cose, le ombre. L'uomo che conosce attraverso i sensi è prigioniero inconsapevole, si affida ai sensi e stenta ad ammettere un diverso modo di conoscere, passivamente CREDE che quella sia la realtà.",
    "Sono le mere parvenze delle cose sensibili. Ciò che i prigionieri vedono è un interpretazione della realtà filtrata dall'opinione: un immagine della realtà. Le ombre, in quanto immagini delle cose sensibili, traggono da esse la loro natura ma ne sono soltanto una copia filtrata dalla soggettività.",
    "TERZA", "QUARTA", "QUINTA", "SESTA", "SETTIMA", "OTTAVA"







]
//fine contenuti


window.onload = inizializza;
