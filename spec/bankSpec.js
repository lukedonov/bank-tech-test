describe("Bank", function(){ 

  var bank;
  var date;

  beforeEach(function(){
    bank = new Bank();
    date = new Date("25/12/2019")
  })
  
  it("has a balance of 0 by default", function() {
    expect(bank.balance).toEqual(0)
  })
  
  it("has no transactions by default", function() {
    expect(bank.transactions).toEqual([])
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
    expect(bank.returnBankStatement()).toEqual("date || credit || debit || balance\n20/04/2020 || 400 || || 400")
  })

  it("returns bank statement", function() {
    bank.deposit(300)
    expect(bank.returnBankStatement()).toEqual("date || credit || debit || balance\n20/04/2020 || 300 || || 300")
  })

  it("returns bank statement", function() {
    bank.deposit(300)
    bank.withdraw(100)
    expect(bank.returnBankStatement()).toEqual("date || credit || debit || balance\n20/04/2020 || || 100 || 200\n20/04/2020 || 300 || || 300")
  })

  it("returns bank statement", function() {
    bank.deposit(300)
    bank.deposit(500)
    bank.withdraw(200)
    bank.withdraw(100)
    expect(bank.returnBankStatement()).toEqual("date || credit || debit || balance\n20/04/2020 || || 100 || 500\n20/04/2020 || || 200 || 600\n20/04/2020 || 500 || || 800\n20/04/2020 || 300 || || 300")
  })

  it("cannot withdraw if the balance is 0", function() {
    expect(function() {bank.withdraw(50)}).toThrowError("Insufficient funds")
  })
});