function getAnimalFavorito(paramAnimal) {
    if(paramAnimal == "caballo") {
        document.writeln(`Animal favorito ${paramAnimal} adivinado <br>`);
        return true;
    } else {
        document.writeln(`No es mi animal favorito el ${paramAnimal} <br>`);
        return false;
    }
}

let adivino = false;
while(!adivino) {
    let animal = prompt("Escribe un animal");
    adivino = getAnimalFavorito(animal);
}
