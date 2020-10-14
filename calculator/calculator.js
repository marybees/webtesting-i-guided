module.exports = {
  add,
};

function add(...args) {
  return args.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
