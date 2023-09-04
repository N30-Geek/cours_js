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
let afficherResultat = (score, worldLength, nombreErreur) => {
    let resultat = `Votre Score est de : ${score}, Nombre des mots : ${worldLength}, Nombre des erreurs :${nombreErreur}`;
    return resultat;
}

// cette fonction demande à l'utilisateur de choisir s'il veux travailler avec les mots ou des phrase enitères

let choisirPhraseOuMot = () => {
    let ask = true; // le boolean ask pour maintenir la boucle
    while (ask) {
        let motOuPhrase = prompt("Mot ou Phrase :"); // variable de retourn de choix de l'utilisateur entre mots et phrases

        if (motOuPhrase === "mots" || motOuPhrase === "phrases") {
            break;
        }
    }
    return motOuPhrase;
}


// La fonction boucle principale de jeux

let lanceBoucleJeux = () => {
    
    let choix_phrase_ou_mots = choisirPhraseOuMot();
    let score = 0;  // La variable contenant le  score de l'utilisateur
    let error = 0;  // la variable contenant le nombres des erreur commuse par l'utilisateur
    let nombreMots = 0;


    // traitement de mots
    if (choix_phrase_ou_mots === "mots") {
        for (let i = 0; i < listDesMots.length; i++){
            let mot_proposer = prompt(listDesMots[i]);
            if (mot_proposer === listDesMots[i]) {
                score++;
            } else {
                error += errorCounter(mot_proposer, listDesMots[i]);
            }
        }
        nombreMots = listDesMots.length;
    }
    // Traitement de phrases

    if (choix_phrase_ou_mots === "phrases") {
        for (let i = 0; i < listDesMots.length; i++){
            let mot_proposer = prompt(listPhrases[i]);
            if (mot_proposer === listPhrases[i]) {
                score++;
            } else {
                error += errorCounter(mot_proposer, listPhrases[i]);
            }
        }
        nombreMots = listPhrases.length;
    }
    return [score, error, nombreMots];
   
}

// LA FONCTION PRINCIPALE QUI LENCE LE JEUX

let lancerJeu = () => {
    let resultats = lanceBoucleJeux();

    console.log(`Score: ${resultats[0]}|Nombre des mots :${resultats[1]}|Erreurs : ${resultats[2]}`);
}