function Bank(){
  this.balance = 0
}

Bank.prototype.deposit = function(amount) {
  this.balance += amount
}