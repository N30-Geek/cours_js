// projet javascript creation de fichier


// Cette fonction cote tout les erreurs de caractère comise par utilisateur
let errorCounter = (word, computerWord) => {
    let errorLength = 0;
    for (let i = 0; i < word.length; i++){
        if (word[i] != computerWord[i]){
            errorLength += 1;
        } 
    }
    return errorLength;
}

// La fonction qui affiche le resultat de l'utilisateur
let afficherResultat = (score, wordLength, nombreErreur) => {
    const zoneScore = document.querySelector(".zoneScore");
    const zoneScoreSpan = document.querySelector(".zoneScore span");
    let resultat = `Score : <span>${score}</span> | Nbt des mots <span>${wordLength}</span> | Nbr erreurs : <span>${nombreErreur}</span>`;

    zoneScore.innerHTML = resultat;
    
}

// cette fonction demande à l'utilisateur de choisir s'il veux travailler avec les mots ou des phrase enitères

let choisirPhraseOuMot = () => {
    let ask = true; // le boolean ask pour maintenir la boucle
    let optionProposition = document.querySelector(".zoneProposition");
    
    optionProposition.forEach(option => {
        if (option.checked === true) {
            console.log(option);
        }
    });
}


// La fonction boucle principale de jeux
// et retour les score du jeux, le nombre des mots tapez, et le nombre des erreurs commise

let lanceBoucleJeux = () => {
    
    let choix_phrase_ou_mots = choisirPhraseOuMot();
    let score = 0;  // La variable contenant le  score de l'utilisateur
    let error = 0;  // la variable contenant le nombres des erreur commuse par l'utilisateur
    let nombreMots = 0;
    let zoneProposition = document.querySelector(".zoneProposition");
    let monBouton = document.getElementById("monBouton");

    // traitement de mots

    if (choix_phrase_ou_mots == "mots") {

        nombreMots = listDesMots.length;
        for (let i = 0; i < listDesMots.length; i++){

            zoneProposition.textContent(listDesMots[i]);
            mot_proposer = champs.value;

            if (mot_proposer == listDesMots[i]) {
                score++;
            } else {
                error += errorCounter(mot_proposer, listDesMots[i]);
            }
        }
    }

    // Traitement de phrases
    if (choix_phrase_ou_mots === "phrases") {

        nombreMots = listPhrases.length;

        for (let i = 0; i < listDesMots.length; i++){
            let mot_proposer = prompt(listPhrases[i]);
            if (mot_proposer === listPhrases[i]) {
                score++;
            } else {
                error += errorCounter(mot_proposer, listPhrases[i]);
            }
        }
    }


    return [score, nombreMots, error]; // valeur de retourne est une listes (contenant le score, nombreDeMots, erreur)
   
}

// LA FONCTION PRINCIPALE QUI LENCE LE JEUX

let lancerJeu = () => {

    let resultats = lanceBoucleJeux();
    afficherResultat(resultats[0], resultats[1], resultats[2]);

}

// creation de l'action de bouton

monBouton.addEventListener("click", () => {
       console.log("hello you type this")
});


const champs = document.querySelector("input");
champs.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && champs.value !== "") {
        console.log("hello you type this");
        champs.value = "";
    } else {
        e.preventDefault;
    }
})