# show-toash

[![npm](https://img.shields.io/npm/v/show-toash.svg?style=flat-square)](https://www.npmjs.com/package/show-toash)
[![npm](https://img.shields.io/npm/dt/show-toash.svg?style=flat-square)](https://www.npmjs.com/package/show-toash)
[![npm](https://img.shields.io/npm/l/show-toash.svg?style=flat-square)](https://www.npmjs.com/package/show-toash)

## Overview
> A Message Box

## Install

**1. Install show-toast**

```sh
npm install show-toash
```

**2. Import show-toash**

### Import using module
ES6/commonjs import style is supported.

```js
// ES6
import showToast from 'show-toash';

// commonjs
var showToast = require("show-toash");
```
### Import using module
link as a `script` in an html file and access global variable `showToast`.

```js
<script src="dist/show-toash.js"></script>
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
