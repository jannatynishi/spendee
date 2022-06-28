function getExpenses() {
    const foodExpense = document.getElementById('food-expense');
    const rentExpense = document.getElementById('rent-expense');
    const clothesExpense = document.getElementById('clothes-expense');
    const totalExpenses = parseFloat(foodExpense.value) + parseFloat(rentExpense.value) + parseFloat(clothesExpense.value);
    // console.log(totalExpenses);
    return totalExpenses;
}
function getBalance() {
    const balanceTotal = document.getElementById('total-income');
    const balanceTotalAmount = balanceTotal.value;
    const expensesAmount = getExpenses();
    if (isNaN(balanceTotalAmount) || balanceTotalAmount > 0) {
        document.getElementById('balance-error-msg').style.display = 'none';
        const totalBalance = parseFloat(balanceTotal.value) - expensesAmount;
        return totalBalance;
    }
    else {
        document.getElementById('balance-error-msg').style.display = 'block';

    }
}
function getSavingBalance() {
    const savingPercentage = document.getElementById('saving-percentage');
    const savingAmount = (getBalance() / 100) * parseFloat(savingPercentage.value);
    return savingAmount;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalExpenses = document.getElementById('expenses-amount');
    totalExpenses.innerText = getExpenses();
    const totalbalance = document.getElementById('balance-amount');
    // totalbalance.innerText = getBalance();
    if (getBalance()> getExpenses()){
        document.getElementById('total-balance-error-msg').style.display = 'none';
        // totalExpenses.innerText = getExpenses();
        totalbalance.innerText = getBalance();
    }
    else{
        document.getElementById('total-balance-error-msg').style.display = 'block';
    }
})
document.getElementById('saving-btn').addEventListener('click', function () {
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = getSavingBalance();
    // if(getBalance() > getSavingBalance()){
    //     savingAmount.innerText = getSavingBalance();
    //     document.getElementById('saving-error-msg').style.display = 'none';
    // }
    // else{
    //     document.getElementById('saving-error-msg').style.display = 'block';
    // }
    const remainingBalance = document.getElementById('remaining-amount');
    remainingBalance.innerText = getBalance() - getSavingBalance();
})