const showToast = require('../index.js');
describe('showToast Test1', function () {
  before(function() {
    showToast('this is a toast')
  })
  it("right", function () {
    var el = document.querySelector('.show-toast')
    expect(el).to.not.equal(null)
    expect(el.innerHTML).to.equal("this is a toast")
  })
})

describe('showToast Test2', function () {
  before(function() {
    showToast({
      str: 'this is a toast1',
      time: 3000,
      position: 'bottom'
    })
  })
  it("right", function () {
    var el = document.querySelector('.show-toast')
    expect(el).to.not.equal(null)
    expect(el.innerHTML).to.equal("this is a toast1")
  })
})
