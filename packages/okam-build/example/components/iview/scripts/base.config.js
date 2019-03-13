/**
 * @file Build swan smart program config
 * @author xxx
 */

'use strict';

const path = require('path');


module.exports = {
    verbose: false,
    root: path.join(__dirname, '..'),
    output: {
        dir: 'dist',
        depDir: 'src/common'
    },
    source: {
        // include: [/^src\/pages\/.*/]
    },
    component: {
        extname: 'vue'
    },
    framework: [
        'data',
        'watch',
        'broadcast',
        'ref'
    ],
    polyfill: []
};
