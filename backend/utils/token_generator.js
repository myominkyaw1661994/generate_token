
module.exports = function () {
  const tokenLength = 6;
  let possibleChars = '0123456789';
  let token = '';

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChars.length);
    const randomChar = possibleChars.charAt(randomIndex);
    token += randomChar;
    possibleChars = possibleChars.slice(0, randomIndex) + possibleChars.slice(randomIndex + 1);
  }

  return token;
}
