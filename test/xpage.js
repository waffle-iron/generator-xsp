'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-xsp:xpage', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/xpage'))
      .withOptions({name: 'foo'})
      .on('end', done);
  });

  it('creates specified ODP XPage file', function () {
    assert.file('ODP/XPages/foo.xsp');
  });
});
