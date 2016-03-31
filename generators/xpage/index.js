'use strict';
// Require dependencies
var yeoman = require('yeoman-generator');
// var chalk = require('chalk');
// var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  // note: arguments and options should be defined in the constructor.
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    // This makes `xpagename` an optional argument.
    this.argument('xpagename', {type: String, required: false});
  },
  // Configurations loading
  // Ask for user imput
  prompting: function () {
    var done = this.async();
    // And you can then access it later on this way; e.g. CamelCased
    var myXPageName = _.camelCase(this.xpagename);
    if (!myXPageName || myXPageName === "") {
      this.prompt({
        type: 'input',
        name: 'name',
        message: 'Your XPage name',
        default: 'home'
      }, function (answers) {
        this.props = answers;
        this.log(answers.name);
        done();
      }.bind(this));
    } else {
      this.log(myXPageName);
      done();
    }
  },
  // Writing Logic
  writing: {
    // Copy the configuration files
    config: function () {
      var tmpName = _.camelCase(this.xpagename) || this.props.name;
      this.fs.copyTpl(
        this.templatePath('some.xsp'),
        this.destinationPath('ODP/XPages/' + tmpName + '.xsp'), {
          name: tmpName
        }
      );
    },
    // Install Dependencies
    install: function () {
      // nothing to see here, should consult http://yeoman.io/authoring/running-context.html
    }
  }
});
