# Okam

[![Build Status](https://travis-ci.org/ecomfe/okam.svg?branch=master)](https://travis-ci.org/ecomfe/okam)
[![Coverage Status](https://img.shields.io/codecov/c/github/ecomfe/okam/master.svg)](https://codecov.io/gh/ecomfe/okam)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 奥卡姆，一个面向小程序开发的开发框架，提供类 `Vue` 的开发体验。

## Introduction

### 平台支持

- [x] [百度小程序](https://smartprogram.baidu.com/docs/introduction/enter_application/)
- [x] [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/)
- [x] [支付宝小程序](https://docs.alipay.com/mini/developer/getting-started)
- [ ] H5 `待支持`

### 功能特性

* 开发模式
    * 支持单文件组件化开发方式，目录结构更加清晰简洁
    * 支持 NPM 包的依赖管理和引用
    * 提供渐进增强可配置方式，包括可配置的构建流程，来提升开发框架能力

* 开发语法
    * 模板：支持类 `Vue` 模板语法、`Pug` 模板语法
    * 样式：支持 CSS 预处理器和后处理器， `Stylus`、`Less`、`Sass`、`Postcss`
    * 脚本：支持 `Typescript`、`ES Next` 语法支持

* 扩展的能力
    * `HTML` 标签支持
    * `Vue` 数据操作语法，包括 `computed`、`watch` 支持
    * `Vue` 双向绑定 `v-model` 指令支持
    * `filter` 模板语法支持
    * `Redux` / `Vuex` 数据状态管理
    * 模板组件 `ref` 引用支持
    * `Mixins` 支持
    * `Promise`、`Async`、`await` 语法支持
    * 原生接口支持可定制的 `Promise` 化
    * 提供原生接口 `Hook` 能力
    * 样式 `rpx` 单位自动转换
    * 接口 `Mock`
    * 图片自动压缩能力

* 其它
    * 框架 `API` 优化及扩展、数据操作优化
    * 微信请求优化
    * 原生小程序和开发框架语法混用支持

## Usage

* [使用教程](https://ecomfe.github.io/okam)
* [其它示例](https://github.com/awesome-okam)

## Main Packages

| Package | Status | Description |
|---------|--------|-------------|
| [okam-build] | [![okam-build-status]][okam-build-package] | okam 构建工具 |
| [okam-core] | [![okam-core-status]][okam-core-package] | okam 核心运行框架 |
| [okam-cli] | [![okam-cli-status]][okam-cli-package] | okam 命令行工具 |

[okam-build]: https://github.com/ecomfe/okam/tree/master/packages/okam-build
[okam-build-status]: https://img.shields.io/npm/v/okam-build.svg
[okam-build-package]: https://npmjs.com/package/okam-build

[okam-core]: https://github.com/ecomfe/okam/tree/master/packages/okam-core
[okam-core-status]: https://img.shields.io/npm/v/okam-core.svg
[okam-core-package]: https://npmjs.com/package/okam-core

[okam-cli]: https://github.com/ecomfe/okam/tree/master/packages/okam-cli
[okam-cli-status]: https://img.shields.io/npm/v/okam-cli.svg
[okam-cli-package]: https://npmjs.com/package/okam-cli

## Contribution

具体可以参考[文档](./CONTRIBUTING.md)

## Communication

有任何问题或者建议，欢迎提 [issue](https://github.com/ecomfe/okam/issues/new), 发 pr。

技术交流：
* QQ 群 `728460911`，入群备注：okam
* 百度同学可以加 Hi 群：`1637339`

## License

[MIT](./LICENSE)
