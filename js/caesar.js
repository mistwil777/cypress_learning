// Attendre que le DOM soit chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  
  // Récupérer les éléments HTML
  const shiftInput = document.getElementById("shiftInput");
  const textInput = document.getElementById("textInput");
  const cypherButton = document.getElementById("cypherButton");
  const resultDiv = document.getElementById("result");

  // Ajouter un événement au clic sur le bouton
  cypherButton.addEventListener("click", function () {
    
    // Récupérer la valeur du décalage et du texte
    const shiftValue = parseInt(shiftInput.value, 10) || 0; // Par défaut : décalage de zéro si non valide
    const text = textInput.value;

    // Vérifier si le champ texte est vide
    if (text.trim() === "") {
      resultDiv.textContent = "Veuillez entrer un texte à chiffrer.";
      return; // Arrêter l'exécution si aucun texte n'est fourni
    }

    // Appliquer le chiffrement de César
    const encodedText = caesarCipher(text, shiftValue);

    // Afficher le résultat dans la div prévue
    resultDiv.textContent = encodedText;
  });
});

/**
 * Fonction de chiffrement de César.
 * @param {string} text - Le texte à chiffrer.
 * @param {number} shift - La valeur du décalage.
 * @returns {string} Le texte chiffré.
 */
function caesarCipher(text, shift) {
  
  // Initialiser la chaîne résultante
  let result = "";

  // Parcourir chaque caractère du texte
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);

    // Si c'est une lettre majuscule (A-Z)
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + shift) % 26 + 26) % 26 + 65);
    
    // Si c'est une lettre minuscule (a-z)
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + shift) % 26 + 26) % 26 + 97);
    
    // Si ce n'est pas une lettre, conserver tel quel
    } else {
      result += text[i];
    }
  }

  return result; // Retourner le texte chiffré
}
