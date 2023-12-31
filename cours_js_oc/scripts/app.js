// projet javascript creation de fichier
const pop_word = document.querySelector(".pop-up-word");
const span_res = document.querySelectorAll(".span");
const input = document.querySelector("#input");



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
    console.log(`Score: ${score} | Nombre de Mots : ${wordLength} | Nombre des erreurs : ${nombreErreur}`);
}

// cette fonction demande à l'utilisateur de choisir s'il veux travailler avec les mots ou des phrase enitères

let choisirPhraseOuMot = () => {

    let ask = true; // le boolean ask pour maintenir la boucle

    while (ask) {

        let choix = prompt("Mot ou Phrase :");  // variable de retourn de choix de l'utilisateur entre mots et phrases

        if (choix === "mots") {
            return choix;
        }else if (choix === "phrases") {
            return choix;
        }
    }
}


// La fonction boucle principale de jeux
// et retour les score du jeux, le nombre des mots tapez, et le nombre des erreurs commise

let lanceBoucleJeux = () => {
    
    let choix_phrase_ou_mots = choisirPhraseOuMot();
    let score = 0;  // La variable contenant le  score de l'utilisateur
    let error = 0;  // la variable contenant le nombres des erreur commuse par l'utilisateur
    let nombreMots = 0; // les conteurs de nombres de mots

    // traitement de mots

    if (choix_phrase_ou_mots == "mots") {

        nombreMots = listDesMots.length;

        for (let i = 0; i < listDesMots.length; i++){
            let mot_proposer = prompt(listDesMots[i]);
            pop_word.innerHTML = listDesMots[i];
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

        for (let i = 0; i < listPhrases.length; i++){
            let phrase_proposer = prompt(listPhrases[i]);
            if (phrase_proposer === listPhrases[i]) {
                score++;
            } else {
                error += errorCounter(phrase_proposer, listPhrases[i]);
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