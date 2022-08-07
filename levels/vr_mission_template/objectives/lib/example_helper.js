// This is an example of how you might use objective validation helpers
// in your own code. You don't have to, but you'll often want to!
function isTwilio(testString = '') {
  return testString.toLowerCase() === 'git remote add origin';
}

module.exports = {
  isTwilio
};

// function isPull(testString = '') {
//   return testString.toLowerCase() === 'pull';
// }

// module.exports = {
//   isPull
// };