function Bank(){
  this.transactions = new Array();
}

Bank.prototype.deposit = function(amount) {
  this.transactions.push(new Transaction('deposit',amount,this._getTodaysDate()));
};

Bank.prototype.withdraw = function(amount) {
  this.transactions.push(new Transaction("withdrawal",amount,this._getTodaysDate()));
};

Bank.prototype.returnBankStatement = function() {
  var statement = "date || credit || debit || balance\n";
  var history = []
  var balance = 0
  
  for(var i = 0; i < this.transactions.length; i++) {
    var transaction = this.transactions[i];
    
    if(transaction.type === "deposit" ) {
      history.push(`${transaction.date} || ${(transaction.amount).toFixed(2)} || || ${(balance += transaction.amount).toFixed(2)}`);
    }
    
    if(transaction.type === "withdrawal") {
      history.push(`${transaction.date} || || ${(transaction.amount).toFixed(2)} || ${(balance -= transaction.amount).toFixed(2)}`);
    }
  }
  return statement + history.reverse().join("\n");
};

Bank.prototype._reverseNumberSign = function(i) {
  return i - (i * 2);
};

Bank.prototype._getTodaysDate = function() {
  var today = new Date();
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
};