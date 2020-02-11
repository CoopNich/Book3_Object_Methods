

// Lightning Exercises For Of with Object.values()

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

console.log("--------------")

for (const value of Object.keys(billFromDoctor)) {
    console.log(value)
}

const infoContainer = document.querySelector("#app")

for (const value of Object.keys(billFromDoctor)) {
  infoContainer.innerHTML += `<div>${value}</div>`
}



