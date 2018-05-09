#!/usr/bin/env node
// @flow
'use strict';
const meow = require('meow');
const lib = require('./');

const cli = meow({
  help: `
    Usage
      $ cli <command>

    Commands
      baz
      bat

    Flags
      --foo, -f      Foo
      --bar, -b      Bar
  `,
  flags: {
    foo: {
      type: 'boolean',
      alias: ['f'],
    },
    bar: {
      type: 'boolean',
      alias: ['b'],
    },
  },
});

lib(cli.input[0], cli.flags).catch(err => {
  console.error(err);
  process.exit(1);
});
