class Bank {
  static nextNumber = 1;
  constructor() {
      this._accounts = [];
      Bank.nextNumber = 1;
  }

  addAccount() {
      this._accounts.push(new Account(Bank.nextNumber++));
  }

  addSavingAccount(interest) {
      this._accounts.push(new SavingsAccount(Bank.nextNumber++, interest));
  }

  addCheckingAccount(limit) {
      this._accounts.push(new CheckingAccount(Bank.nextNumber++, limit));
  }

  accountReport() {
      return this._accounts.map(acc => acc.toString())
                          .join("\n");
  }

  getAccounts() {
      return this._accounts;
  }

  endOfMonth() {
      console.log(this._accounts.map(acc => acc.endOfMonth())
      .join("\n"));
  }
}