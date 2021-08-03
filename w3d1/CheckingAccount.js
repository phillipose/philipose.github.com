class CheckingAccount extends Account {
    constructor(number, overDraftLimit) {
        super(number);
        this._limit = overDraftLimit;
    }

    getLimit() {
        return this._limit;
    }

    setLimit(limit) {
        this._limit = limit;
    }

    withdraw(amount) {
        try {
            super.withdraw(amount);
        } catch(err) {
            if (err instanceof RangeError) {
                throw(err);
            }

            if (amount - this.getBalance() > this.getLimit()) {
                throw new RangeError("Withdraw amount past the current balance should not be over the given limit"); 
            }

            const currentbalance = this.getBalance() - amount;
            this.setBalance(currentbalance);
        }
    }

    toString() {
        return `${super.toString()} Overdraft limit: ${this.getLimit()}`;
    }

    endOfMonth() {
        if (this.getBalance() < 0) {
            return `Warning, low balance CheckingAccount ${this.getNumber()} balance: ${this.getBalance()} overdraft limit: ${this.getLimit()}`;
        }
    }
}