const genericPrint = require('../../src/printer');

test('given an unknown module type then genericPrint function should throw', () => {
  const mockPath = { getValue: () => ({ type: 'UnknownModule' }) };
  const node = mockPath.getValue();

  expect(() => {
    genericPrint(mockPath);
  }).toThrow(`Unknown type: ${JSON.stringify(node.type)}`);
});
