function init() {

    const field = prompt("enter Field");
    const varnumber = +prompt("Enter number");

    const result = getCarsByFieldAndNumber(field, varnumber, carsForRental)
    console.log(result)}

function getCarsByFieldAndNumber(field, varnumber, carsArray) {

    if (typeof field !== "string") return;
    if(typeof varnumber !== "number") return;
    if (!Array.isArray(carsArray)) return;
    const carsResult = [];

    for (let currentCar of carsArray) {
       
        if (currentCar[field] <= varnumber) {
            carsResult.push(currentCar)
        }
    
    }
    return carsResult
}
    init()