describe("Transaction", function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction();
  });

  it("has a default value of 0", function() {
    expect(transaction.amount).toEqual(0)
  })
});