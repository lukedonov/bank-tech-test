function Bank(){
  this.balance = 0
  this.transactions = []
}

Bank.prototype.deposit = function(amount) {
  var deposit = ["deposit",amount, this._getTodaysDate(), (this.balance + amount)]
  this.transactions.push(deposit)
  this.balance += amount
}

Bank.prototype.withdraw = function(amount) {
  var withdrawal = ["withdraw",amount, this._getTodaysDate(), (this.balance - amount)]
  this.transactions.push(withdrawal)
  this.balance -= amount
}

Bank.prototype.returnBankStatement = function() {
  str = "date || credit || debit || balance"
  for(i = 0; i < this.transactions.length; i++) {
    if(this.transactions[i][0] === "deposit"){
      str += `\n${this.transactions[i][2]} || ${this.transactions[i][1]} || || ${this.transactions[i][3]}`
    }

    if(this.transactions[i][0] === "withdraw") {
      str += `\n${this.transactions[i][2]} || || ${this.transactions[i][1]} || ${this.transactions[i][3]}`
    }
  }
  return str
}

Bank.prototype._getTodaysDate = function() {
  today = new Date()
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) 
  {
    dd='0'+dd;
  } 
  if(mm<10) 
  {
    mm='0'+mm;
  } 
  return dd+'/'+mm+'/'+yyyy;
}