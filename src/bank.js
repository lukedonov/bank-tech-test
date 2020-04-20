function Bank(){
  this.balance = 0
}

Bank.prototype.deposit = function(amount) {
  this.balance += amount
}

Bank.prototype.withdraw = function(amount) {
  this.balance -= amount
}

Bank.prototype.returnBankStatement = function(amount) {
  return "date || credit || debit || balance"
}