describe("Bank", function(){ 

  var bank;

  beforeEach(function(){
    bank = new Bank();
  });
  
  it("has a balance of 0 by default", function() {
    expect(bank.balance).toEqual(0);
  });
  
  it("has no transactions by default", function() {
    expect(bank.transactions).toEqual([]);
  });

  it("cannot withdraw if the balance is 0", function() {
    expect(function() {bank.withdraw(50);}).toThrowError("Insufficient funds");
  });
});