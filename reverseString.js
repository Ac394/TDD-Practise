export default reverseString = (string) => {
  if (typeof string === "string") {
    const reversed = [];
    for (const letter of string) {
      reversed.unshift(letter);
    }
    return reversed.join("");
  }
  throw new Error("Input is not a string");
};
