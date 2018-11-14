const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app2.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};