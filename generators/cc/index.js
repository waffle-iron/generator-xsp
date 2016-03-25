'use strict';
// Require dependencies
var yeoman = require('yeoman-generator');
// var chalk = require('chalk');
// var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  // note: arguments and options should be defined in the constructor.
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    // This makes `ccname` an optional argument.
    this.argument('ccname', {type: String, required: false});
  },
  // Configurations loading
  // Ask for user imput
  prompting: function () {
    var done = this.async();
    // And you can then access it later on this way; e.g. CamelCased
    var myCcName = _.camelCase(this.ccname);
    if (!myCcName || myCcName === "") {
      this.prompt({
        type: 'input',
        name: 'name',
        message: 'Your Custom Control name',
        default: 'cc_some'
      }, function (answers) {
        this.props = answers;
        // this.log(answers.name);
        done();
      }.bind(this));
    } else {
      // this.log(myCcName);
      done();
    }
  },
  // Writing Logic
  writing: {
    // Copy the configuration files
    config: function () {
      var tmpName = _.camelCase(this.ccname) || this.props.name;
      this.fs.copyTpl(
        this.templatePath('cc_some.xsp'),
        this.destinationPath('ODP/CustomControls/' + tmpName + '.xsp'), {
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
