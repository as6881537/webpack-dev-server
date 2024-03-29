"use strict";

module.exports = class ExitOnDonePlugin {
  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    compiler.hooks.afterDone.tap("webpack-dev-server", (stats) => {
      let exitCode = 0;

      if (stats.hasErrors()) {
        exitCode = 1;
      }

      setImmediate(() => {
        process.exit(exitCode);
      });
    });
  }
};
