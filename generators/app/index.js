'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the good ' + chalk.red('generator-some-app-2') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What shall we call your app?',
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

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
    // .gitattributes
    this.fs.copyTpl(
      this.templatePath('_gitattributes'),
      this.destinationPath('.gitattributes')
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

  install: function () {
    this.installDependencies();
  }
});
