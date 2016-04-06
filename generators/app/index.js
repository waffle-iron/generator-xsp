'use strict';
// Require dependencies
var yeoman = require('yeoman-generator');
// var chalk = require('chalk');
// var yosay = require('yosay');
// require('../../common');

module.exports = yeoman.Base.extend({
  // Configurations loadin
  // Ask for user imput
  prompting: function () {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your app name',
      default: this.appname
    }, function (answers) {
      this.props = answers;
      this.log(answers.name);
      this.props.filename = answers.name + '.nsf';
      done();
    }.bind(this));
  },
  // Writing Logic
  writing: {
    // Copy the configuration files
    config: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'), {
          name: this.props.name
        }
      );
      this.fs.copy(
        this.templatePath('_bowerrc'),
        this.destinationPath('.bowerrc')
      );
    },
    // Copy ODP's application files
    app: function () {
      // Main ODP
      this.fs.copy(
        this.templatePath('ODP'),
        this.destinationPath('ODP')
      );
      // Templated files (to inject app name as received)
      this.fs.copyTpl(
        this.templatePath('_project'),
        this.destinationPath('ODP/.project'), {
          name: this.props.name + ' ODP'
        }
      );
      this.fs.copyTpl(
        this.templatePath('_database.properties'),
        this.destinationPath('ODP/AppProperties/database.properties'), {
          name: this.props.name,
          filename: this.props.filename
        }
      );
      this.fs.copyTpl(
        this.templatePath('_plugin.xml'),
        this.destinationPath('ODP/plugin.xml'), {
          name: this.props.name + ' ODP'
        }
      );
      this.fs.copyTpl(
        this.templatePath('_IconNote'),
        this.destinationPath('ODP/Resources/IconNote'), {
          name: this.props.name
        }
      );
    },
    // Install Dependencies
    install: function () {
      // Currently no dependencies to install, keeping for consistency
      this.installDependencies();
    }
  }
});
