// Part 1

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    },
roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
};
for (let i = 0; i < adventurer.inventory.length; i++) {
        console.log(adventurer.inventory[i]);
      }
      adventurer.companion.companion2 = {
        name: "Frank",
        type: "Flea",
        belongings: ["hat", "sunglasses"],
      };
      console.log(adventurer);
      adventurer.roll();

      // Part 2

      class Character {
        constructor(name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
        }
      
        roll() {
          const rollValue = Math.floor(Math.random() * 20) + 1;
          return rollValue;
        }
      }const robin = new Character('Robin');
      const rollResult = robin.roll();
      console.log(`Robin rolled: ${rollResult}`);
      
      // Part 3

      class Adventurer extends Character {
        constructor(name, role) {
          super(name);
          this.role = role;
          this.inventory.push("bedroll", "50 gold coins");
          this.experience = 0; 
          this.level = 1; 
        }
      
        scout() {
          console.log(`${this.name} is scouting ahead...`);
          const rollResult = super.roll();
          console.log(`Scout roll: ${rollResult}`);
        }
        attack(enemy) {
            const rollResult = super.roll();
            console.log(`${this.name} attacks ${enemy.name} with a roll of ${rollResult}!`);
          }
          gainExperience(xp) {
            this.experience += xp;
          }
        
      }
