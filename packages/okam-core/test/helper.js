/**
 * @file Test helper
 * @author sparklewhy@gmail.com
 */

'use strict';

import assert from 'assert';
import expect, {spyOn} from 'expect';
import CoreComponent from 'core/swan/Component';
import AntCoreComponent from 'core/ant/Component';
import WxCoreComponent from 'core/wx/Component';
import * as na from 'core/na/index';
import * as swanEnv from 'core/swan/env';
import * as wxEnv from 'core/wx/env';
import * as ttEnv from 'core/tt/env';
import * as antEnv from 'core/ant/env';
import * as quickEnv from 'core/quick/env';
import base from 'core/base/base';

const PATH_PREFIX_REGEX = /^\w+\./;
const appEnvMap = {
    swan: swanEnv,
    wx: wxEnv,
    tt: ttEnv,
    ant: antEnv,
    quick: quickEnv
};

function getPropertyValue(obj, path) {
    let parts = path.split('.');
    let length = parts.length;
    let result = obj;
    let parent = result;
    let newPath = path;
    parts.forEach((k, idx) => {
        if (idx < length - 1) {
            parent = parent[k];
            result = parent;
        }
        else {
            newPath = k;
            result = parent && parent[k];
        }

    });
    return {parent, value: result, path: newPath};
}

/**
 * Test the given methods are called by the expected order.
 * The order is expected that the parent method should be called before the child.
 *
 * @param {Array.<string>} methods the methods to test
 * @param {Object} instance the instance definition
 * @param {Function} instanceClass the instance class
 * @param {Array.<Object>} parents the parents of the instance
 * @return {Object} the created instance
 */
export function testCallOrder(methods, instance, instanceClass, parents) {
    let callOrders = {};
    let expectOrders = {};
    let spyers = {};

    parents = [].concat(parents, instance);
    methods.forEach(name => {
        callOrders[name] = [];
        expectOrders[name] = [];
        spyers[name] = [];

        parents.forEach((parentItem, idx) => {
            let {parent, value, path} = getPropertyValue(parentItem, name);
            if (!value) {
                return;
            }

            if (name !== path) {
                // for nested method the child method will override the parent method
                expectOrders[name][0] = idx + 1;
            }
            else {
                expectOrders[name].push(idx + 1);
            }

            let spy = spyOn(parent, path)
                .andCall(() => callOrders[name].push(idx + 1));
            spy.spyName = name;
            spyers[name].push(spy);
        });
    });

    let testInstance = instanceClass(instance);
    methods.forEach(m => {
        m = m.replace(PATH_PREFIX_REGEX, '');
        testInstance[m] && testInstance[m]();
    });

    Object.keys(spyers).forEach(k => {
        let items = spyers[k];
        let isNestedMethod = PATH_PREFIX_REGEX.test(k);
        let len = items.length;
        items.forEach((s, idx) => {
            if (isNestedMethod && idx < len - 1) {
                expect(s).toNotHaveBeenCalled();
            }
            else {
                expect(s).toHaveBeenCalled();
            }
        });
    });

    Object.keys(callOrders).forEach(k => {
        assert(callOrders[k].join('') === expectOrders[k].join(''));
    });

    return testInstance;
}

export function isPromise(obj) {
    return Object.prototype.toString.call(obj) === '[object Promise]';
}

export function fakeComponent() {
    return function (...args) {
        /* eslint-disable babel/new-cap */
        let instance = CoreComponent(...args);
        Object.assign(instance, instance.methods);
        return instance;
    };
}

export function fakeAntComponent() {
    return function (...args) {
        /* eslint-disable babel/new-cap */
        let instance = AntCoreComponent(...args);
        Object.assign(instance, instance.methods);
        return instance;
    };
}

export function fakeWxComponent() {
    return function (...args) {
        /* eslint-disable babel/new-cap */
        let instance = WxCoreComponent(...args);
        Object.assign(instance, instance.methods);
        return instance;
    };
}

export function fakeAppEnvAPIs(appType) {
    const rawApi = base.$api;

    let appEnv = appEnvMap[appType];
    na.setExportInfo(appEnv);

    base.$api = appEnv.api;

    return () => {
        base.$api = rawApi;
    };
}

export function executeSequentially(taskList, initDelay) {
    let result = Promise.resolve();
    taskList.forEach(task => {
        let delay = task.delay || 0;
        result = result.then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    task();
                    resolve();
                }, delay);
            });
        });
    });
    return result.catch(ex => console.error(ex));
}
