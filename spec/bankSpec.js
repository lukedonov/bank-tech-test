describe("Bank", function(){ 

  var bank = new Bank();
  it("has a balance of 0 by default", function() {
    expect(bank.balance).toEqual(0)
  })

});