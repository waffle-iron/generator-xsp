'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var testProjName = 'SomeApp';

describe('generator-xsp:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: testProjName})
      .toPromise();
  });

  it('creates base ODP files', function () {
    assert.file([
      'ODP/.project',
      'ODP/AppProperties/database.properties',
      'ODP/plugin.xml',
      'ODP/Resources/IconNote'
    ]);
  });
});
