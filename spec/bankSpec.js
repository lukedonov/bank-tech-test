describe("Bank", function(){ 

  var bank;

  beforeEach(function(){
    bank = new Bank();
  })

  it("has a balance of 0 by default", function() {
    expect(bank.balance).toEqual(0)
  })

  it("balance increases when deposit is made", function() {
    bank.deposit(200)
    expect(bank.balance).toEqual(200)
  })



});