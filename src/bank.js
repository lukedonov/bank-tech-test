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
  statement = "date || credit || debit || balance"

  for(i = 0; i < this.transactions.length; i++) {
    var transaction = this.transactions[i]

    if(transaction[0] === "deposit"){
      statement += `\n${transaction[2]} || ${transaction[1]} || || ${transaction[3]}`
    }

    if(transaction[0] === "withdraw") {
      statement += `\n${transaction[2]} || || ${transaction[1]} || ${transaction[3]}`
    }
  }
  return statement
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