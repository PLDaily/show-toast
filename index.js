/**
 * Copyright (c) 2017 PLDaily
 * License: MIT
 * https://github.com/PLDaily/showToast
**/

/**
 * Checks the value is an object or not
 *
 * @param  {*} value value The value to check
 * @return {boolean}       Returns `true` if `value` is an object, else `false`
 */
let isObject = (value) => {
  return typeof value === 'object' && !!value
}

/**
 *  Merge the contents of two or more objects together into the first object. like jquery extend
 *
 * @param  {object}    target The object to extend. It will receive the new properties
 * @param  {...object} args   An object containing additional properties to merge in
 * @return {object}           Returns the merged object
 */
let extend = (target, ...args) => {
  if (!target) {
    target = {}
  }
  if (args.length === 0) {
    return target
  }
  for (let obj of Object.values(args)) {
    for (let name in obj) {
      if (isObject(obj[name])) {
        target[name] = extend(target[name], obj[name])
      } else {
        target[name] = obj[name]
      }
    }
  }
  return target
}

/**
 * Removes leading and trailing whitespace or specified characters from `string`
 *
 * @param  {[type]} str The string to trim
 * @return {[type]}     Returns the trimmed string
 */
let trim = (str) => {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

/**
 * Get the screen width
 *
 * @return {number} Returns the screen width
 */
let getWindowWidth = () => {
  return document.compatMode === 'BackCompat' ? document.body.clientWidth : document.documentElement.clientWidth
}

let showToastObj = {
  _is_load: false,
  _timer: null,
  showAlertMsgBox (params) {
    if (!this._is_load) {
      let styleArr = []
      styleArr.push('top: 5px')
      styleArr.push('left:0')
      styleArr.push('zIndex:9999999999')
      styleArr.push('padding:0 25px')
      styleArr.push('minWidth:200px')
      styleArr.push('height:40px')
      styleArr.push('lineHeight:40px')
      styleArr.push('borderRadius:4px')
      styleArr.push('border:1px solid')
      styleArr.push('fontSize:14px')
      styleArr.push('color:#FFF')
      styleArr.push('boxSizing:border-box')
      styleArr.push('position:fixed')
      styleArr.push('textAlign:center')

      let temp = document.createDocumentFragment()
      this.oDiv = document.createElement('div')
      this.oDiv.className = 'show-toast'
      for (let i = 0, l = styleArr.length; i < l; i++) {
        let key = trim(styleArr[i].split(':')[0])
        let value = trim(styleArr[i].split(':')[1])
        this.oDiv.style[key] = value
      }
      temp.appendChild(this.oDiv)
      if (document.compatMode === 'BackCompat') {
        document.body.appendChild(temp)
      } else {
        document.documentElement.appendChild(temp)
      }
      this._is_load = true
      this.doEvent(params)
    } else {
      this.doEvent(params)
    }
  },
  doEvent (params) {
    if (this.timer) {
      clearTimeout(this.timer)
    }

    this.oDiv.style.display = 'block'
    this.oDiv.innerHTML = params.str

    let left = getWindowWidth() / 2 - this.oDiv.offsetWidth / 2
    let background = params.type === 'success' ? '#DFF0D8' : '#BCDFF1'
    let borderColor = params.type === 'success' ? '#ACC9AC' : '#A0CAD6'
    let color = params.type === 'success' ? '#3C763D' : '#31708F'

    this.oDiv.style.left = left + 'px'
    this.oDiv.style.background = background
    this.oDiv.style.borderColor = borderColor
    this.oDiv.style.color = color

    this.oDiv.onmouseover = () => {
      clearTimeout(this.timer)
    }
    this.oDiv.onmouseout = () => {
      this.timer = setTimeout(() => {
        this.oDiv.style.display = 'none'
      }, params.time ? params.time : 2000)
    }
    this.timer = setTimeout(() => {
      this.oDiv.style.display = 'none'
    }, params.time ? params.time : 2000)
  }
}

const showToast = (obj) => {
  if (!isObject(obj)) {
    throw new TypeError('Expected an object')
  }

  let target = {
    str: 'success',
    type: 'success',
    time: 2000
  }

  obj = extend(target, obj)

  showToastObj.showAlertMsgBox(obj)
}

module.exports = showToast
