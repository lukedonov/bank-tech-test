describe("Bank", function() {

  var bank;

  beforeEach(function() {
    bank = new Bank();
  })

  it("balance increases when deposit is made", function() {
    bank.deposit(200);
    expect(bank.balance).toEqual(200);
  });
  
  it("balance decreases when a withdrawal is made", function() {
    bank.deposit(200);
    bank.withdraw(50);
    expect(bank.balance).toEqual(150);
  });
  
  it("returns an empty bank statement", function() {
    expect(bank.returnBankStatement()).toEqual("date || credit || debit || balance");
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