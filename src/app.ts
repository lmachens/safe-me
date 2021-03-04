import { printWelcomeMessage, printNoAccess } from "./messages";
import { askForAction, askForCredentials } from "./questions";
import { handleGetPassword, handleSetPassword, hasAccess } from "./commands";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { closeDB, connectDB, createPasswordDoc, readPasswordDoc } from "./db";
import { listenerCount } from "events";

dotenv.config();

const run = async () => {
  const url = process.env.MONGODB_URL;

  try {
    await connectDB(url, "PasswordManager-Fabian");
    await createPasswordDoc({ name: "Fabian", value: "1111" });
    console.log(await readPasswordDoc("Fabian"));
    await closeDB();
  } catch (error) {
    console.error(error);
  }
  /*  printWelcomeMessage();
  const credentials = await askForCredentials();
  if (!hasAccess(credentials.masterPassword)) {
    printNoAccess();
    run();
    return;
  }

  const action = await askForAction();
  switch (action.command) {
    case "set":
      handleSetPassword(action.passwordName);
      break;
    case "get":
      handleGetPassword(action.passwordName);
      break;
  } */
};

run();
