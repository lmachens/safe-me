import prompts from "prompts";

const run = async () => {
  console.log("Welcome to Safe-Me 🔑");

  const response = await prompts({
    type: "text",
    name: "value",
    message: "Who are you?",
  });
};

run();
