const depcheck = require('depcheck');
const path = require('path');

async function validate(Path, options) {
  const fullPath = path.join(__dirname, Path);
  const igFiles = new RegExp(
    options.igFiles.join('|'),
  );

  return depcheck(fullPath, options, (data) => {
    const critical = [];

    for (const name in data.missing) {
      if (data.missing.hasOwnProperty(name)) {
        const files = data.missing[name]
          .filter((filePath) => !options.igFiles.length || !(igFiles.test(filePath)))
          .map((filePath) => filePath.replace(fullPath, ''));

        if (files.length > 0) {
          critical.push({ name, files });
        }
      }
    }

    critical.forEach(({ name, files }) => {
      console.log(
        ' Error: ',
        `Dependency "${name}" should be in "${path.join(Path, '/package.json')}", because it is used in:`,
      );
      files.forEach((filePath) => {
        console.log(
          `   - ${filePath}`,
        );
      });
    });

    if (critical.length) {
      process.exit(1);
    }
  }).catch(() => {
    process.exit(1);
  });
}

module.exports = validate;
