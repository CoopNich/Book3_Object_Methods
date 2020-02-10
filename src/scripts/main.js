const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]


const outputElement = document.querySelector("#app")

allCars.forEach(car => {
    for (const value of Object.values(car)) {
        outputElement.innerHTML += `<div>${value}</div>`
      }
})

// Lightning Exercise 1 For Of with Object.values()

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const billFromDoctor = 
    {
        officeName: "Pete's Practice",
        streetAddress: "123 Main",
        doctorName: "Dr. Pete",
        patientName: "Jim",
        visitDate: "October 12",
        amountBilled: 50.00
    }


console.log(billFromDoctor[dateVisited])
console.log(billFromDoctor[owed])
console.log(billFromDoctor[patient])

console.log("--------------")

for (const value of Object.values(billFromDoctor)) {
    console.log(value)
}


