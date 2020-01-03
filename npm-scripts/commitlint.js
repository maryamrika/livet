/* eslint import/no-extraneous-dependencies: "off", no-restricted-syntax: "off" */
const fs = require('fs');

const { lint, format, load } = require('@commitlint/core');
const setup = require('../.commitlintrc');

const commitMessage = fs.readFileSync(process.env.GIT_PARAMS, 'utf8');

load(setup)
  .then((config) => {
    lint(commitMessage, config.rules, config.opts)
      .then((report) => {
        if (!/\n\n\[[^PD][A-Z]+-[0-9]+]/.test(commitMessage)) {
          // eslint-disable-next-line no-param-reassign
          report = {
            ...report,
            valid: false,
            errors: [
              ...report.errors
            ]
          };
        }

        process.stdout.write(`input: ${commitMessage}\n`);

        for (const line of format(report)) {
          process.stdout.write(`${line}\n`);
        }

        if (report.valid) {
          process.exit(0);
        } else {
          process.exit(1);
        }
      });
  });
