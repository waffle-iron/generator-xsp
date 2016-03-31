'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;
var testFileName = 'foo';

describe('generator-xsp:xpage', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/xpage'))
      .withArguments(testFileName)
      .on('end', done);
  });

  it('creates specified ODP XPage file', function () {
    assert.file('ODP/XPages/' + testFileName + '.xsp');
  });
});
