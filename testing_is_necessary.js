const funAnimals = []

funAnimals.push({
    name: "Hygge",
    type: "cat",
    reason: "aggressive snuggler"
})

funAnimals.push({
    name: "Trecito",
    type: "dog",
    reason: "four legs worth of energy at the cost of three"
})

funAnimals.push({
    name: "Peter",
    type: "tortoise",
    reason: "backyard grass eater"
})

for (let animal of funAnimals) {
    console.log(`${animal.name} the ${animal.type} is fun.  Reason: ${animal.reason}`)
}
