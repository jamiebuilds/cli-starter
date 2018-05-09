// @flow
const test = require('ava');
const fixtures = require('fixturez');
const lib = require('./');

const f = fixtures(__dirname);

test('runs', async t => {
  let filepath = f.copy('foo.txt');
  await lib('baz', { foo: true, bar: false });
  t.pass();
});
