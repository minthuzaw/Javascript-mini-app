// Expense Tracker App
const expenseForm = document.getElementById('expense-form');
const expenseInput = document.getElementById('expense-input');
const amountInput = document.getElementById('amount-input');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');

let expenses = [];

// Add Expense
function addExpense(e) {
    e.preventDefault();

    const expense = {
        description: expenseInput.value,
        amount: parseFloat(amountInput.value)
    };

    expenses.push(expense);
    renderExpenses();
    updateTotalAmount();

    expenseInput.value = '';
    amountInput.value = '';
}

// Remove Expense
function removeExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
    updateTotalAmount();
}

// Render Expenses
function renderExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <span>${expense.description} - $${expense.amount}</span>
            <button onclick="removeExpense(${index})">Remove</button>
        `;
        expenseList.appendChild(expenseItem);
    });
}

// Update Total Amount
function updateTotalAmount() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalAmount.textContent = `Total: $${total.toFixed(2)}`;
}

// Event Listeners
expenseForm.addEventListener('submit', addExpense);
