// Les contenues des elements 
let contenuTitre = "Azertype";
let contenuParagraphe = "L'application pour apprendre a tapez plus vite au clavier";

// Creations des elements de la pages
let nouvelleElementDiv = document.createElement("div");
let nouvelleElementTitre = document.createElement("h1");
let nouvelleElementParagraphe = document.createElement("p");

// ajout des contenue dans le paragraphe et le titre

nouvelleElementParagraphe.textContent = contenuParagraphe;
nouvelleElementTitre.textContent = contenuTitre;

// ajout dans l'element principal body
nouvelleElementDiv.appendChild(nouvelleElementTitre);
nouvelleElementDiv.appendChild(nouvelleElementParagraphe); 


let body = document.querySelector("body");
body.appendChild(nouvelleElementDiv);