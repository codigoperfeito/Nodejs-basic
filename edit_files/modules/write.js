const fs = require('fs').promises;

module.exports = (path, data) => {
    fs.writeFile(path, data, {flag: 'w'}) // flag "a" da apply, "w" write
};