const funAnimals = []

funAnimals.push({
    name: "Hygge",
    type: "cat",
    why: "aggressive snuggler"
})

funAnimals.push({
    name: "Trecito",
    type: "dog",
    why: "four legs worth of energy at the cost of three"
})

funAnimals.push({
    name: "Peter",
    type: "tortoise",
    why: "backyard grass eater"
})

for (let animal of funAnimals) {
    console.log(`${animal.name} the ${animal.type} is fun.  Why, you ask? ${animal.why}`)
}
