# Luke's Online Bank

`This is an Bank statement application that can track a user's deposits, withdrawals and balance. `

## My desired output

|Input    |Output|
|------|-------|
|deposit(1000)| `date || credit || debit || balance`<br>`10/01/2012|| 1000.00 || || 1000.00`|
|deposit(1000)<br>withdraw(500)| `date || credit || debit || balance`<br>`10/01/2012|| || 500 || 500.00`<br>`10/01/2012|| 1000.00 || || 1000.00`|

## My approach

`
I took a TDD and single responsibility approach to this task, writing and passing as simple tests as possible to gradually build my program with a valuable process. I will split my code into bank account, statement and transaction classes to allow my code to have single responsibilities and be as DRY as possible.  
`


## Getting started

`git clone https://github.com/lukedonov/bank-tech-test.git`

## Usage

`This application can be used from the javascript console`

## Running tests

`My tests are written in Jasmine, to run the tests copy path for the spec runner into your browser.`
