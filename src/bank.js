function Bank(){
  this.transactions = new Array();
}

Bank.prototype.deposit = function(amount) {
  this.transactions.push(new Transaction('deposit',amount,this._getTodaysDate()));
};

Bank.prototype.withdraw = function(amount) {
  this.transactions.push(new Transaction('withdrawal',amount,this._getTodaysDate()));
};

Bank.prototype.returnBankStatement = function() {
  statement = new Statement(this.transactions);
  return statement.generateStatement();
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