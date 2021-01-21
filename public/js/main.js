// EXO 1

let jour = prompt("Jour de la semaine ?").toLowerCase()

switch (jour) {
    case "lundi":
        alert("Tu as sport le lundi")
        break;
    case "mardi":
        alert("Tu as dessin le mardi")
        break;
    case "mercredi":
        alert("Tu as congé le mercredi")
        break;
    case "jeudi":
        alert("Tu as natation le jeudi")
        break;
    case "vendredi":
        alert("Tu as rdv au bar le vendredi")
        break;
    case "samedi":
        alert("Tu as une grosse sieste le samedi")
        break;
    case "dimanche":
        alert("Tu as athlétisme le dimanche")
        break;
    default:
        break;
}

// EXO 2

let age = parseInt(prompt("Quel est ton âge ?"))

switch (age >= 18) {
    case true :
        alert("Tu es majeur")
        break;
    case false :
        alert("Tu es mineur")
        break;
    default:
        alert("error")
        break;
}