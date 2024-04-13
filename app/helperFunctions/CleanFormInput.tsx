export function cleanFormInput(userInput: string) {
  return userInput.split("/").at(-2)?.replace("/", "");
}
