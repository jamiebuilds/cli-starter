// @flow
'use strict';
const spawn = require('spawndamnit');

/*::
type Command = 'baz' | 'bat';
type Flags = {
  foo: boolean,
  bar: boolean,
};
*/

async function lib(
  command /*: Command */,
  flags /*: Flags */
) {
  let res = await spawn('echo', ['"hello world"'], {
    cwd: process.cwd(),
  });

  if (res.code !== 0) {
    throw new Error('Command failed');
  }

  console.log(res.stdout.toString());
}

module.exports = lib;
