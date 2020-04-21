function Statement(transactions){
  this.transactions = transactions
}

Statement.prototype.generateStatement = function() {
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
}