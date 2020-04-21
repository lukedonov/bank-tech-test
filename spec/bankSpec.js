describe("Bank", function(){ 

  var bank;

  beforeEach(function(){
    bank = new Bank();
  });
  
  it("has no transactions by default", function() {
    expect(bank.transactions).toEqual([]);
  });
});