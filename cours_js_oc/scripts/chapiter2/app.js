// Les contenues des elements 
let contenuTitre = "Azertype";
let contenuParagraphe = "L'application pour apprendre a tapez plus vite au clavier";

// Creations des elements de la pages
let div = `
    <h1>${contenuTitre}</h1>
    <p>${contenuParagraphe}</p>
`

let body = document.querySelector("body");
body.innerHTML = div;