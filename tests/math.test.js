const {calcTip} = require('../src/math');

test('Should calc total with tip', () => {
  const total = calcTip(10, .3);
  expect(total).toBe(13);
});

test('Should calc total with default tip', () => {
  const total = calcTip(10);
  expect(total).toBe(11.5);
})

test('Async test', (done) => {
  setTimeout(() => {
    expect(1).toBe(2);
    done();
  }, 2000);
})
