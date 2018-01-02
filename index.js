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
const isObject = value => {
  return typeof value === 'object' && !!value
}

/**
 * Checks the value is a String or not
 *
 * @param  {*} value value The value to check
 * @return {boolean}       Returns `true` if `value` is a String, else `false`
 */
const isString = value => {
  return Object.prototype.toString.call(value) === '[object String]'
}

/**
 *  Merge the contents of two or more objects together into the first object. like jquery extend
 *
 * @param  {object}    target The object to extend. It will receive the new properties
 * @param  {...object} args   An object containing additional properties to merge in
 * @return {object}           Returns the merged object
 */
const extend = (target, ...args) => {
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
 * @param  {String} str The string to trim
 * @return {String}     Returns the trimmed string
 */
const trim = str => {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

const showToastObj = {
  _is_load: false,
  _timer: null,
  showAlertMsgBox (params) {
    if (!this._is_load) {
      let styleArr = []
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

    // setting show-toast content
    this.oDiv.style.display = 'block'
    this.oDiv.innerHTML = params.str

    // setting show-toast position
    this.oDiv.style.left = '50%'
    this.oDiv.style.marginLeft = -(this.oDiv.offsetWidth / 2) + 'px'
    if (params.position === 'top') {
      this.oDiv.style.top = '50px'
      this.oDiv.style.bottom = 'auto'
      this.oDiv.style.marginTop = 'auto'
    } else if (params.position === 'bottom') {
      this.oDiv.style.bottom = '50px'
      this.oDiv.style.top = 'auto'
      this.oDiv.style.marginTop = 'auto'
    } else {
      this.oDiv.style.top = '50%'
      this.oDiv.style.bottom = 'auto'
      this.oDiv.style.marginTop = -(this.oDiv.offsetHeight / 2) + 'px'
    }

    // setting show-toast style
    const background = params.type === 'success' ? '#DFF0D8' : '#BCDFF1'
    const borderColor = params.type === 'success' ? '#ACC9AC' : '#A0CAD6'
    const color = params.type === 'success' ? '#3C763D' : '#31708F'
    this.oDiv.style.background = background
    this.oDiv.style.borderColor = borderColor
    this.oDiv.style.color = color

    // deal mouse event
    this.oDiv.onmouseover = () => {
      clearTimeout(this.timer)
    }
    this.oDiv.onmouseout = () => {
      this.timer = setTimeout(() => {
        this.oDiv.style.display = 'none'
      }, params.time)
    }
    this.timer = setTimeout(() => {
      this.oDiv.style.display = 'none'
    }, params.time)
  }
}

const showToast = value => {
  let obj = {}
  if (!isObject(value)) {
    if (isString(value)) {
      obj = {
        str: value
      }
    } else {
      throw new TypeError('Expected an object or a String')
    }
  } else {
    obj = value
  }
  const target = {
    str: 'success',
    time: 2000,
    type: 'success',
    position: 'middle'
  }

  obj = extend(target, obj)

  showToastObj.showAlertMsgBox(obj)
}

module.exports = showToast
