describe("Transaction", function() {
  var transaction;

  beforeEach(function() {
    transaction = jasmine.createSpyObj('transaction',['amount','date','type']);
    transaction.amount = 500
    transaction.type = "deposit"
    transaction.date = "25/12/2019"
  });

  it("has a default amount value of 0", function() {
    expect(transaction.amount).toEqual(500);
  })

  it("has a date as an empty string as default", function() {
    expect(transaction.date).toEqual("25/12/2019")
  })

  it("has a date as an empty string as default", function() {
    expect(transaction.type).toEqual("deposit")
  })
});