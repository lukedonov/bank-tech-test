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

  it("balance decreases when a withdrawal is made", function() {
    bank.deposit(200)
    bank.withdraw(50)
    expect(bank.balance).toEqual(150)
  })

  it("returns an empty bank statement", function() {
    expect(bank.returnBankStatement()).toEqual("date || credit || debit || balance")
  })

  it("returns bank statement", function() {
    bank.deposit(400)
    expect(bank.returnBankStatement()).toEqual("date || credit || debit || balance\n20/04/20 || 400 || || 400")
  })

  console.log(Date.now())
});