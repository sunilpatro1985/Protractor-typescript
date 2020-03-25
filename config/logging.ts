const log4js = require('log4js');
    log4js.configure('./config/log4js.json');
    exports.default = log4js.getLogger('default');