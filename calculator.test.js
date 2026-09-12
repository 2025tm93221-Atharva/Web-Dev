const { add, subtract } = require('./calculator');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});
