/* global describe it */
const { expect } = require('chai');
const fs = require('fs-extra');
const path = require('path');

describe('All localized languages have valid keys/values', () => {
  const defaultKeys = Object.keys(
    fs.readJSONSync(path.resolve(__dirname, '..', 'src', 'strings', 'en.json')),
  );

  const files = fs.readdirSync(path.resolve(__dirname, '..', 'src', 'strings'));
  files.forEach((file) => {
    if (!file.endsWith('.json')) return;

    it(file, () => {
      const keys = Object.keys(
        fs.readJSONSync(path.resolve(__dirname, '..', 'src', 'strings', file)),
      );

      expect(keys).to.deep.equal(defaultKeys);
    });
  });
});
