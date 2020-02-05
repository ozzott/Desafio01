const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0,
};

function createTransaction(transaction) {
    const { type, value } = transaction;

    user.transactions.push(transaction);

    if (type === 'debit') {
        user.balance = user.balance - value;
    } else {
        user.balance = user.balance + value;
    };
};

function getHigherTransactionByType(type) {
    let higherTransaction = {};
    let higherValue = 0;

    for (transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value;
            higherTransaction = transaction;
        };
    };

    return higherTransaction;
};

function getAverageTransactionValue() {
    let quantity = 0;
    let averageValue = 0;

    for (transaction of user.transactions) {
        quantity++;
        averageValue = averageValue + transaction.value;
    };

    return averageValue / quantity;
};

function getTransactionCount() {
    let quantityTransactions = {
        credit: 0,
        debit: 0,
    };

    for (transaction of user.transactions) {
        if (transaction.type === 'debit') {
            quantityTransactions.debit++;
        } else {
            quantityTransactions.credit++;
        };
    };

    return quantityTransactions;
};

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });

console.log(user.balance);

console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType('debit'));

console.log(getAverageTransactionValue());

console.log(getTransactionCount());