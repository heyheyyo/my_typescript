import { Greeter } from '../index';
test('First test', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});