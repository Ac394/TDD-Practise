const cipherConditions = (code, offset = 0) => {
  let sum = code + offset;

  if (code >= 65 && code <= 90) {
    if (sum > 90) {
      return 65 + (sum % 90) - 1;
    }
    if (sum < 65) {
      return 90 - (65 % sum) + 1;
    }
    return sum;
  }
  if (code >= 97 && code <= 122) {
    if (sum > 122) {
      return 97 + (sum % 122) - 1;
    }
    if (sum < 97) {
      return 122 - (97 % sum) + 1;
    }
    return sum;
  }
  return code;
};

export default caesarCipher = (string, offset) => {
  if (typeof string !== "string") {
    throw new Error();
  }

  if (offset === 0) {
    return string;
  }

  const result = [];

  for (let i = 0; i < string.length; i++) {
    const utfCode = string.charCodeAt(i);
    result.push(cipherConditions(utfCode, offset));
  }

  return String.fromCharCode(...result);
};
