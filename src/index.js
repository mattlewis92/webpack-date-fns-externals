const camelCase = require('lodash.camelcase');

function dateFnsExternalsFactory() {
  return function (context, request, callback) {
    if (request.startsWith('date-fns/')) {
      return callback(null, {
        root: ['dateFns', camelCase(request.replace(/^date-fns\//, ''))],
        commonjs: `${request}/index`,
        commonjs2: `${request}/index`,
        amd: `${request}/index`
      });
    }
    callback();
  };
}

module.exports = dateFnsExternalsFactory;
module.exports.default = dateFnsExternalsFactory;
