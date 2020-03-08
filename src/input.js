function input(name, options) {
  const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
  if (options && options.required && !val) {
    throw new Error(`Input required : ${name}`);
  }
  return val.trim();
}

module.exports = input;
