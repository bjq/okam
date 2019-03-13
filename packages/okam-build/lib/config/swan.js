/**
 * @file The config for building baidu smart application
 * @author sparklewhy@gmail.com
 */

'use strict';

const merge = require('../util').merge;
const baseConf = require('./base');

module.exports = merge({}, baseConf, {

    output: {

        /**
         * 输出的文件路径映射定义
         *
         * @type {Object}
         */
        pathMap: {
            projectConfig: 'project.swan.json',
            entryScript: 'app.js',
            entryStyle: 'app.css',
            appConfig: 'app.json'
        },

        /**
         * 输出的自定义组件各个部分文件的后缀名
         *
         * @type {Object}
         */
        componentPartExtname: {
            script: 'js',
            style: 'css',
            tpl: 'swan',
            config: 'json',
            filter: 'filter.js'
        }
    },

    processors: {
        postcss: {
            extnames: ['css']
        },
        nativeView: {
            processor: 'view',
            extnames: ['swan'],
            options: {
                keepOriginalContent: true,
                plugins: [['resource', {
                    tags: {
                        'import': true,
                        'include': true,
                        'filter': true
                    }
                }]]
            }
        }
    }
});
