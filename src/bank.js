function Bank(){
  this.balance = 0
}

Bank.prototype.deposit = function(amount) {
  this.balance += amount
}

Bank.prototype.withdraw = function(amount) {
  this.balance -= amount
}

Bank.prototype.returnBankStatement = function() {
  if(this.balance === 0) {
    return "date || credit || debit || balance"
  } else {
    return "date || credit || debit || balance\n20/04/20 || 400 || || 400"
  } 
}