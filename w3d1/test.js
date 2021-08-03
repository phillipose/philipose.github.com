describe("Account", () => {
  let account;
  const number = "123456";
  const balance = 100;
  beforeEach(() => {
      account = new Account(number);
      account.deposit(balance);
  })

  describe("getNumber", () => {
      it("should return account number",
          () => {
              assert.equal(account.getNumber(), number);
          });
  })

  describe("getBalance", () => {
      it("should return account balance",
          () => {
              assert.equal(account.getBalance(), balance);
          });
  })

  describe("deposit", () => {
      it("should deposit balance",
          () => {
              account.deposit(100);
              assert.equal(account.getBalance(), balance + 100);
          });

      it("should throw RangeError for invalid input",
          () => {
              assert.throws(() => account.deposit(-1), RangeError, "Deposit amount has to be greater than zero");
          });
  })

  describe("withdraw", () => {
      it("should withdraw balance",
          () => {
              account.withdraw(100);
              assert.equal(account.getBalance(), balance - 100);
          });

      it("should throw RangeError for input less than zero",
          () => {
              assert.throws(() => account.withdraw(-1), RangeError, "Withdraw amount has to be greater than zero");
          });
      
      it("should throw Error for input greater than current balance",
          () => {
              assert.throws(() => account.withdraw(101), Error, "Insufficient funds");
          });
  })

  describe("toString", () => {
      it("should return descriptive text",
          () => {
              assert.equal(account.toString(), `Account ${number}: balance ${balance}`);
          });
  })

  describe("endOfMonth", () => {
      it("should return empty string",
          () => {
              assert.equal(account.endOfMonth(), '');
          });
  })
});


describe("SavingsAccount", () => {
  let account;
  const number = "123456";
  const balance = 100;
  const interest = 7;
  beforeEach(() => {
      account = new SavingsAccount(number, interest);
      account.deposit(balance);
  })

  describe("getInterest", () => {
      it("should return interest",
          () => {
              assert.equal(account.getInterest(), interest);
          });
  })

  describe("setInterest", () => {
      it("should modify interest",
          () => {
              account.setInterest(10);
              assert.equal(account.getInterest(), 10);
          });
  })

  describe("addInterest", () => {
      it("should update account balance",
          () => {
              account.addInterest();
              assert.equal(account.getBalance(), balance + (balance * 7/100));
          });
  })

  describe("toString", () => {
      it("should return descriptive text with interest included",
          () => {
              assert.equal(account.toString(), `Account ${number}: balance ${balance} Interest: ${interest}`);
          });
  })

  describe("endOfMonth", () => {
      it("should add interest and return descriptive text",
          () => {
              assert.equal(account.endOfMonth(), `Interest added SavingAccount ${number}: balance ${balance + (balance * 7/100)} Interset: ${interest}`);
              assert.equal(account.getBalance(), balance + (balance * 7/100));
          });
  })
});

describe("CheckingAccount", () => {
  let account;
  const number = "123456";
  const balance = 100;
  const limit = 50;
  beforeEach(() => {
      account = new CheckingAccount(number, limit);
      account.deposit(balance);
  })

  describe("getLimit", () => {
      it("should return overdraft limit",
          () => {
              assert.equal(account.getLimit(), limit);
          });
  })

  describe("setLimit", () => {
      it("should modify overdraft limit",
          () => {
              account.setLimit(75);
              assert.equal(account.getLimit(), 75);
          });
  })

  describe("withdraw", () => {
      it("should withdraw balance for amount less than current balance",
          () => {
              account.withdraw(90);
              assert.equal(account.getBalance(), balance - 90);
          });

      it("should throw RangeError for input less than zero",
          () => {
              assert.throws(() => account.withdraw(-1), RangeError, "Withdraw amount has to be greater than zero");
          });
      
      it("should throw Error for input past overdraft limit",
          () => {
              assert.throws(() => account.withdraw(151), RangeError, "Withdraw amount past the current balance should not be over the given limit");
          });

      it("should withdraw balance for amount greater than current balance but not more than overdraft limit",
          () => {
              account.withdraw(149);
              assert.equal(account.getBalance(), balance - 149);
          });
  })

  describe("toString", () => {
      it("should return descriptive text with overdraft limit included",
          () => {
              assert.equal(account.toString(), `Account ${number}: balance ${balance} Overdraft limit: ${limit}`);
          });
  })

  describe("endOfMonth", () => {
      it("should return descriptive text if balance is below zero",
          () => {
              account.withdraw(149);
              assert.equal(account.endOfMonth(), `Warning, low balance CheckingAccount ${number} balance: ${balance - 149} overdraft limit: ${limit}`);
          });

      it("should return descriptive text if balance is below zero",
          () => {
              account.withdraw(90);
              assert.equal(account.endOfMonth(), undefined);
          });
  })
});

describe("Bank", () => {
  let bank;
  beforeEach(() => {
      bank = new Bank();
  })

  describe("addAccount", () => {
      it("should add an account",
          () => {
              bank.addAccount();
              assert.equal(bank.getAccounts().length, 1);
              assert.equal(bank.getAccounts()[0] instanceof Account, true);
              assert.equal(bank.getAccounts()[0].getNumber(), 1);
          });
  })

  describe("addSavingAccount", () => {
      it("should add a saving account",
          () => {
              bank.addAccount();
              bank.addSavingAccount(7);
              assert.equal(bank.getAccounts().length, 2);
              assert.equal(bank.getAccounts()[1] instanceof SavingsAccount, true);
              assert.equal(bank.getAccounts()[1].getNumber(), 2);
              assert.equal(bank.getAccounts()[1].getInterest(), 7);
          });
  })

  describe("addCheckingAccount", () => {
      it("should add a checking account",
          () => {
              bank.addAccount();
              bank.addCheckingAccount(50);
              assert.equal(bank.getAccounts().length, 2);
              assert.equal(bank.getAccounts()[1] instanceof CheckingAccount, true);
              assert.equal(bank.getAccounts()[1].getNumber(), 2);
              assert.equal(bank.getAccounts()[1].getLimit(), 50);
          });
  })

  describe("accountReport", () => {
      it("should log detail account report",
          () => {
              bank.addAccount();
              bank.addSavingAccount(7);
              bank.addCheckingAccount(50);
              assert.equal(bank.getAccounts().length, 3);

              const accountStr = `Account 1: balance 0`;
              const savingAccountStr = `Account 2: balance 0 Interest: 7`;
              const checkingAccountStr = `Account 3: balance 0 Overdraft limit: 50`;
              assert.equal(bank.accountReport(), `${accountStr}\n${savingAccountStr}\n${checkingAccountStr}`);
          });
  })

//   describe("endOfMonth", () => {
//       it("should call `endOfMonth` of all accounts",
//           () => {
//               let accountSpy = chai.spy.on(Account.prototype, 'endOfMonth');
//               let savingAccountSpy = chai.spy.on(SavingsAccount.prototype, 'endOfMonth');
//               let checkingAccountSpy = chai.spy.on(CheckingAccount.prototype, 'endOfMonth');

//               let consoleSpy = chai.spy.on(console, 'log');
//               bank.addAccount();
//               bank.addSavingAccount(7);
//               bank.addCheckingAccount(50);

//               // deposit to saving account not to have error on interest adding
//               bank.getAccounts()[1].deposit(100);
//               bank.endOfMonth();
          
//               chai.expect(accountSpy).to.have.been.called();
//               chai.expect(savingAccountSpy).to.have.been.called();
//               chai.expect(checkingAccountSpy).to.have.been.called();

//               chai.expect(consoleSpy).to.have.been.called.with(`\nInterest added SavingAccount 2: balance 107 Interset: 7\n`);
//           });
//   })
});