// projet javascript creation de fichier

let listDesMots = [
    "Cachalot",
    "Pétunia",
    "Sérviette"
];

let listPhrases = [
    'Pas de panique !',
    'La vie, l\'univers et le reste!',
    'Merci pour le poisson'
];

let ask = true;
let score = 0;
let error = 0;

let errorCounter = (word, computerWord) => {
    let errorLength = 0;
    for (let i = 0; i < word.length; i++){
        if (word[i] != computerWord[i]){
            errorLength += 1;
        } 
    }
    return errorLength;
}

while (ask) {
    let motOuPhrase = prompt("Mot ou Phrase :");

    if (motOuPhrase == "mot") {
        for (let i = 0; i < 3; i++){

            let motUtilisateur = prompt(listDesMots[i]);
            
            if (motUtilisateur == listDesMots[i]) {
                score++;
            } else {
                error += errorCounter(motUtilisateur, listDesMots[i]);
            }
        }
        ask = false;
    } else if (motOuPhrase == "phrase") {
        for (let i = 0; i < 3; i++){
            let phraseUtilisateur = prompt(listPhrases[i]);
    
            if (phraseUtilisateur == listPhrases[i]) {
                score++;
            }else {
                error += errorCounter(motUtilisateur, listPhrases[i]);
            }
        }
        ask = false;
    }
}

console.log("Score final : ", score);
console.log("Nombre d'erreur effectuer : ", error);


