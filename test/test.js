const showToast = require('../index.js');
describe('showToast only str test', function () {
  before(function() {
    showToast('this is a toast')
  })
  it("position is middle; time is 2000", function (done) {
    this.timeout(5000);
    var el = document.querySelector('.show-toast')
    expect(el).to.not.equal(null)
    expect(el.innerHTML).to.equal("this is a toast")
    expect(el.style.top).to.equal("50%")
    expect(el.style.display).to.equal("block")
    setTimeout(function() {
      expect(el.style.display).to.equal("none")
      done()
    }, 2000);
  })
})

describe('showToast position top test', function () {
  before(function() {
    showToast({
      str: 'this is a toast',
      position: 'top'
    })
  })
  it("position is top", function () {
    var el = document.querySelector('.show-toast')
    expect(el).to.not.equal(null)
    expect(el.innerHTML).to.equal("this is a toast")
    expect(el.style.top).to.equal("50px")
  })
})

describe('showToast position bottom test', function () {
  before(function() {
    showToast({
      str: 'this is a toast',
      position: 'bottom'
    })
  })
  it("position is bottom", function () {
    var el = document.querySelector('.show-toast')
    expect(el).to.not.equal(null)
    expect(el.innerHTML).to.equal("this is a toast")
    expect(el.style.bottom).to.equal("50px")
  })
})

describe('showToast position middle test', function () {
  before(function() {
    showToast({
      str: 'this is a toast',
      position: 'middle'
    })
  })
  it("position is bottom", function () {
    var el = document.querySelector('.show-toast')
    expect(el).to.not.equal(null)
    expect(el.innerHTML).to.equal("this is a toast")
    expect(el.style.top).to.equal("50%")
  })
})


describe('showToast time test', function () {
  before(function() {
    showToast({
      str: 'this is a toast',
      time: 3000
    })
  })
  it("time is 3000", function (done) {
    this.timeout(5000);
    var el = document.querySelector('.show-toast')
    expect(el).to.not.equal(null)
    expect(el.innerHTML).to.equal("this is a toast")
    expect(el.style.top).to.equal("50%")
    expect(el.style.display).to.equal("block")
    setTimeout(function() {
      expect(el.style.display).to.equal("none")
      done()
    }, 3000);
  })
})

describe('showToast error test', function () {
  it("throw error", function () {
    expect(() => {showToast()}).to.throw('Expected an object or a String')
  })
})
