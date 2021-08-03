class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }

    addInterest() {
        const currentInterest = this.getBalance() * this.getInterest() / 100;
        this.deposit(currentInterest);
    }

    toString() {
        return `${super.toString()} Interest: ${this.getInterest()}`;
    }

    endOfMonth() {
        this.addInterest();
        return `Interest added SavingAccount ${this.getNumber()}: balance ${this.getBalance()} Interset: ${this.getInterest()}`;
    }
}