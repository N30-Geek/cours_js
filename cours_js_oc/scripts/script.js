/***
 * Mise au propre du code du chapitre 4 partie 2 du cours de la programmation js
 * code ecrit par G33kn30 C. libre de droit
 */


//#############################################################

let afficheResultat = (score, nbr_de_mots, nbr_de_erreurs) => {
    const span_zone_score = document.querySelectorAll(".zoneScore span");
    
    // affichage de résultat
    span_zone_score[0].innerText = score;
    span_zone_score[1].innerText = nbr_de_mots
    span_zone_score[2].innerText = nbr_de_erreurs;
}

let gameReset = () => {
    const span_zone_score = document.querySelectorAll(".zoneScore span");
    
    // affichage de résultat
    span_zone_score[0].innerText = "";
    span_zone_score[1].innerText = "";
    span_zone_score[2].innerText = "";
}
//#############################################################
// la fonction permettant de compter les erreur dans un mots saisie pâr l'utilisateur
let play = () => {
    gameReset()
    let btn = document.querySelector(".play");
    let zone_input = document.querySelector(".input");
    zone_input.disabled = true;
    zone_input.placeholder = "Veuillez clique sur la touche play"

    btn.addEventListener("click", () => {
        gameInit();
        document.querySelector(".input").disabled = false;
    });
}
let compteurErreur = (mot_utilisateur, proposition) => {
    let nbr_erreur = 0
    for (let i = 0; i < mot_utilisateur.length; i++){
        if (mot_utilisateur[i] === proposition[i]){
            continue;
        } else {
            nbr_erreur++;
        }
    }
    return nbr_erreur;
}

let afficheProposition = (proposition) => {
    const zone_proposition = document.querySelector(".zoneProposition");
    zone_proposition.innerText = proposition;
}

let getListWord = () => {
    let option = document.querySelectorAll("#optionSource");
    
    
    if (option[0].checked == true) {
        return listDesMots;
    }else if (option[1].checked == true) {
        return listPhrases;
    } else {
        return undefined;
    }
}

//#############################################################
// Cette fonction recommande le jeux

let recommencer = () => {
    let btn_recommancer = document.querySelector(".recommencer");
    let input_zone = document.querySelector(".input");
    input_zone.disabled = false;

    btn_recommancer.addEventListener('click', ()=>{
        gameInit();
    });
}


// foncittion pricniaple du jeux
//#############################################################

let gameInit = () => {
    
    let score = 0;
    let compteur = 0;
    let nbr_de_mots = getListWord().length;
    let nbr_erreurs = 0;
    const input_zone = document.querySelector(".input");
    

    input_zone.value = '';


    afficheProposition(getListWord()[compteur]);

    input_zone.addEventListener("keydown", (e) => {

        if (e.key === "Enter" && input_zone.value !== "") {
            if (input_zone.value !== "" && input_zone.value === getListWord()[compteur]) {
                score++;
            } else {
                nbr_erreurs += compteurErreur(input_zone.value, getListWord()[compteur]);
            }
        compteur++;
            afficheResultat(score, compteur, nbr_erreurs);
            input_zone.value = '';
            
            // vérification si le compteur dépasser la longueur de liste de mots
            // je désactive la button de validantion et j'affiche le msg " Le jeux est términé"
            if (getListWord()[compteur] === undefined) {
                let zone_proposition = document.querySelector(".zoneProposition");
                zone_proposition.classList.add("end-game");
                afficheProposition("Le jeu est fini");
                input_zone.disabled = true;
            } else {
                afficheProposition(getListWord()[compteur]);
            }
        }
    });
    
    afficheResultat(score, nbr_de_mots, compteur);
}

//#############################################################
// gameInit();

// const input_zone = document.querySelector(".input");
// input_zone.value = "";
// input_zone.addEventListener("keydown", (e) => {
    //     if (e.key == "Enter") {
        
//         input_zone.disabled = true;
//         console.log(input_zone.value)
//         input_zone.value = "";
//     }


// });