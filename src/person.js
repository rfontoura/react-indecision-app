function isAdult(age) {
    return age >= 18;
}

function canDrink(age) {
    return age >= 21;
}

const isSenior = (age) => age > 60;

export {isAdult, canDrink, isSenior as default};