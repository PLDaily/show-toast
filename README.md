# show-toast

[![Build Status](https://travis-ci.org/PLDaily/show-toast.svg?branch=master)](https://travis-ci.org/PLDaily/show-toast)
[![npm](https://img.shields.io/npm/v/show-toast.svg)](https://www.npmjs.com/package/show-toast)
[![npm](https://img.shields.io/npm/dt/show-toast.svg)](https://www.npmjs.com/package/show-toast)
[![npm](https://img.shields.io/npm/l/show-toast.svg)](https://www.npmjs.com/package/show-toast)
[![npm](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/standard/standard)

## Overview
> A Toast Box

[demo](http://67.218.146.247:8082/example/)

## Install

### Install show-toast

```sh
npm install show-toast
```

### Import show-toast

ES6/commonjs import style is supported.

```js
// ES6
import showToast from 'show-toast';

// commonjs
var showToast = require("show-toast");
```
or link as a `script` in an html file and access global variable `showToast`.

```js
<script src="dist/show-toast.js"></script>
```

## Usage

```js
showToast({
  str: 'this is a success toast box',
  type: 'success',
  time: 2000
})

showToast({
  str: 'this is an error toast box',
  type: 'error',
  time: 2000
})
```

## options


| Option | Description                              |
| ------ | ---------------------------------------- |
| str    | String(default: '') toast text content   |
| type   | String(default: 'success') type of the toast |
| time   | Number(defalut: 2000) time duration      |

## LICENSE

MIT@[PLDaily](https://github.com/PLDaily)
