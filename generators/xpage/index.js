'use strict';
// Require dependencies
var yeoman = require('yeoman-generator');
// var chalk = require('chalk');
// var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  // Configurations loadin
  // Ask for user imput
  prompting: function () {
    var done = this.async();
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
  },
  // Writing Logic
  writing: {
    // Copy the configuration files
    config: function () {
      this.fs.copyTpl(
        this.templatePath('some.xsp'),
        this.destinationPath('ODP/XPages/some.xsp'), {
          name: this.props.name
        }
      );
    },
    // Install Dependencies
    install: function () {
      // nothing to see here
    }
  }
});
