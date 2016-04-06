var path = require('path');

module.exports = function () {
  var updateNotifier = require('update-notifier');
  if (!process.env.CI) {
    var nwPath = path.join(__dirname, '../package.json');
    var pkg = require(nwPath);
    if (pkg.version === null) {
      pkg.version = "0.2.0";
    }
    updateNotifier({pkg}).notify();
  }
};
