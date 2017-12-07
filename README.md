# show-toast

[![Build Status](https://travis-ci.org/PLDaily/show-toast.svg?branch=master)](https://travis-ci.org/PLDaily/show-toast)
[![npm](https://img.shields.io/npm/v/show-toast.svg?style=flat-square)](https://www.npmjs.com/package/show-toast)
[![npm](https://img.shields.io/npm/dt/show-toast.svg?style=flat-square)](https://www.npmjs.com/package/show-toast)
[![npm](https://img.shields.io/npm/l/show-toast.svg?style=flat-square)](https://www.npmjs.com/package/show-toast)
[![npm](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://github.com/standard/standard)

## Overview
> A Message Box

## Install

### Install show-toast

```sh
npm install show-toast
```

### Import show-toast

**Import using module**
ES6/commonjs import style is supported.

```js
// ES6
import showToast from 'show-toast';

// commonjs
var showToast = require("show-toast");
```
**Import using module**
link as a `script` in an html file and access global variable `showToast`.

```js
<script src="dist/show-toast.js"></script>
```

## Usage

```js
showToast({
  str: 'this is a success message box'
  type: 'success',
  time: 2000
})

showToast({
  str: 'this is a error message box'
  type: 'error',
  time: 2000
})
```

## options


| Option | Description                              |
| ------ | ---------------------------------------- |
| str    | String(default: '') message box content  |
| type   | String(default: 'success') message box type |
| time   | Number(defalut: 2000) message box display time |

## LICENSE

MIT@[PLDaily](https://github.com/PLDaily)
