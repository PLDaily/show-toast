mocha.ui('bdd')

var expect = chai.expect
describe("Tests", function () {
  before(function () {
    showToast('this is a toast')
  })
  it("content right", function () {
    var el = document.querySelector('.show-toast')
    expect(el).to.not.equal(null)
    expect(el.innerHTML).to.equal("this is a toast")
  })
})

mocha.run()
