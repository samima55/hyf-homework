const spiritAnimalArray = [
    "Cow",
    "Butter fly",
    "Monkey",
    "Donkey",
    "Bear",
    "Eagle",
    "Lion",
    "Tiger",
    "Horse",
    "Cat"
];

const SpiritAnimalAdjective = [
    "Happy",
    "sad",
    "angry",
    "Moody",
    "smiley",
    "frustraed",
    "shiny",
    "Radiating",
    "glad",
    "crying"
];

function getSpiritAnimal(Adjective, AnimalArray) {
    return [`${Adjective[Math.floor(Math.random() * Adjective.length)]} ${AnimalArray[Math.floor(Math.random() * AnimalArray.length)]}`];
}

const inputTag = document.getElementById('firstname');
const btnTag = document.getElementById('name-btn');
const pTag = document.getElementById('spirit-animal-result');

btnTag.addEventListener('click', function () {
    const nameValue = inputTag.value;
    const spiritAnimal = getSpiritAnimal(SpiritAnimalAdjective, spiritAnimalArray);
    if (nameValue) {
        pTag.innerText = `${nameValue} the ${spiritAnimal}`;
        btnTag.innerText = "create a new spirit animal";
    }
    else {
        pTag.innerText = `enter your name`;
    }
});


