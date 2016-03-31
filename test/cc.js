'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;
var testFileName = 'bar';

describe('generator-xsp:cc', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/cc'))
      .withArguments(testFileName)
      .on('end', done);
  });

  it('creates specified ODP XPage file', function () {
    assert.file('ODP/CustomControls/' + testFileName + '.xsp');
  });
});
