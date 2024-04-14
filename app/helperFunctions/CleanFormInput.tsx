export function cleanFormInput(userInput: string) {
  //assumes input has no trailing /
  return userInput.split("/").at(-1)?.replace("/", "");
}
