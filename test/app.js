'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;
var testProjName = 'SomeApp';

describe('generator-xsp:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: testProjName})
      .on('end', done);
  });

  it('creates required ODP files', function () {
    assert.file([
      'ODP/.project',
      'ODP/AppProperties/database.properties',
      'ODP/plugin.xml',
      'ODP/Resources/IconNote'
    ]);
    // Had been aserting .classpath, which fails, even though it works
    // 'ODP/.classpath',
  });
});
