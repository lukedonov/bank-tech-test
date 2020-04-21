function Bank(){
  this.balance = 0;
  this.transactions = new Array();
}

Bank.prototype.deposit = function(amount) {
  this.amount = Number(amount).toFixed(2)
  var deposit = ["deposit",this.amount, this._getTodaysDate(), Number(this.balance + amount).toFixed(2)];
  this.transactions.push(deposit);
  this.balance += amount;
};

Bank.prototype.withdraw = function(amount) {
  this.amount = Number(amount).toFixed(2)
  if(amount > this.balance) {
    throw new Error("Insufficient funds");
  } else {
    var withdrawal = ["withdraw",this.amount, this._getTodaysDate(), Number(this.balance - amount).toFixed(2)];
    this.transactions.push(withdrawal);
    this.balance -= amount;
  }
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

Bank.prototype.returnBankStatement = function() {
  var statement = "date || credit || debit || balance";
  this.transactions.reverse();

  for(var i = 0; i < this.transactions.length; i++) {
    var transaction = this.transactions[i];

    if(transaction[0] === "deposit"){
      statement += `\n${transaction[2]} || ${transaction[1]} || || ${transaction[3]}`;
    }

    if(transaction[0] === "withdraw") {
      statement += `\n${transaction[2]} || || ${transaction[1]} || ${transaction[3]}`;
    }
  }
  return statement;
};