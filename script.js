// Part 1

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }
}
const leo = {
    name: "Leo",
    type: "Cat",
    friend: adventurer,
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"]
    }
}
    for (let i = 0; i < adventurer.inventory.length; i++) {
        console.log(adventurer.inventory[i]);
      }
      console.log(adventurer);
      