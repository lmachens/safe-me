import { createPasswordDoc, readPasswordDoc } from "./db";
import { printPassword, printPasswordSet } from "./messages";
import { askForPasswordValue } from "./questions";

export const hasAccess = (masterPassword: string): boolean =>
  masterPassword === "654";

  export const handleSetPassword = async (
  passwordName: string
): Promise<void> => {
  const passwordValue = await askForPasswordValue();
  const passwordDoc = {
    name: passwordName,
    value: passwordValue,
  };

  await createPasswordDoc(passwordDoc);
  printPasswordSet(passwordDoc.name);
 
};

export const handleGetPassword = async (
  passwordName: string
): Promise<void> => {
  const passwordDoc = await readPasswordDoc(passwordName);
  printPassword(passwordDoc.name, passwordDoc.value);

  if (!passwordDoc) {
    console.log("No password found!");
    return;
  }
};