function init() {

    const origin = prompt("enter Origin");
    const mpg = +prompt("enter Miles Per Gallon");
    const result = getCarsByMpgAndOrigin(origin, mpg, carsForRental)
    console.log(result)
}

function getCarsByMpgAndOrigin(origin, mpg, carsArray) {

    if (typeof origin !== "string") return;
    if(typeof mpg !== "number") return;
    if (!Array.isArray(carsArray)) return;

    const carsResult = [];

    for (let currentCar of carsArray) {
       
        if (currentCar.Origin === origin && currentCar.Miles_per_Gallon === mpg) {
            carsResult.push(currentCar)
        }
    }
    return carsResult

}


init()