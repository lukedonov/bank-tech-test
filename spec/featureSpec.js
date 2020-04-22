describe("Bank", function() {

  var bank;
  // var transaction;

  beforeEach(function() {
    bank = new Bank();
    spyOn(bank, '_getTodaysDate').and.returnValue('21/04/2020');
  })
  
  it("returns an empty bank statement", function() {
    expect(bank.returnBankStatement()).toEqual("date || credit || debit || balance\n");
  });
  
  it("returns bank statement", function() {
    bank.deposit(400);
    expect(bank.returnBankStatement()).toEqual("date || credit || debit || balance\n21/04/2020 || 400.00 || || 400.00");
  });
  
  it("returns bank statement", function() {
    bank.deposit(300);
    expect(bank.returnBankStatement()).toEqual("date || credit || debit || balance\n21/04/2020 || 300.00 || || 300.00");
  });
  
  it("returns bank statement", function() {
    bank.deposit(300);
    bank.withdraw(100);
    expect(bank.returnBankStatement()).toEqual("date || credit || debit || balance\n21/04/2020 || || 100.00 || 200.00\n21/04/2020 || 300.00 || || 300.00");
  });
  
  it("returns bank statement", function() {
    bank.deposit(300);
    bank.deposit(500);
    bank.withdraw(200);
    bank.withdraw(100);
    expect(bank.returnBankStatement()).toEqual("date || credit || debit || balance\n21/04/2020 || || 100.00 || 500.00\n21/04/2020 || || 200.00 || 600.00\n21/04/2020 || 500.00 || || 800.00\n21/04/2020 || 300.00 || || 300.00");
  });
});