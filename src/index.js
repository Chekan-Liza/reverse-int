module.exports = function reverse (n) {
      return Number([...n.toString().replace(/-/g, '')].reverse().join(""));
}
