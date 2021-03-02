import prompts from "prompts";
import chalk from "chalk";

const run = async () => {
  console.log(`Welcome to ${chalk.underline.green("Safe-Me")} 🔑`);

  const response = await prompts({
    type: "text",
    name: "value",
    message: "Who are you?",
  });
};

run();
