#!/usr/bin/env node

const input = require('./input');
const validate = require('./validate');

const PATH = input('PATH') || '.';
const IGNORE_PACKAGES = input('IGNORE_PACKAGES') || [];
const IGNORE_FILES = input('IGNORE_FILES') || [];

const main = async () => {
  const options = {
    igMatches: IGNORE_PACKAGES,
    igFiles: IGNORE_FILES,
  };

  try {
    await validate(PATH, options);
  } catch(e) {
    console.log(e && e.message);
    process.exit(1);
  }

  console.log('DONE: All dependencies are set correctly');
};

main();
