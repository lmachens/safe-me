console.log("Welcome to Safe-Me 🔑");

const [command] = process.argv.slice(2);
// const [,,command] = process.argv;

if (command === "set") {
  console.log("You like to set something?");
} else if (command === "get") {
  console.log("What should I get?");
}
