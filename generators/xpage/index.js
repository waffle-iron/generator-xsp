'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var prompts = [{
      type: 'input',
      name: 'xpagename',
      message: 'What shall we call your new XPage?'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  // Writing Logic
  writing: {
    // Copy the configuration files
    config: function () {
      var tmpName = _.camelCase(this.xpagename) || this.props.xpagename;
      this.fs.copyTpl(
        this.templatePath('_some.xsp'),
        this.destinationPath('ODP/XPages/' + tmpName + '.xsp'), {
          name: tmpName
        }
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
