// 1. SET UP JAVASCRIPT - file linked and loaded
console.log("SpendWise is running...");

// 2. STORE APPLICATION DATA
let monthlyBudget = 0;
let expenseName1 = "";
let expenseAmount1 = 0;
let expenseName2 = "";
let expenseAmount2 = 0;
let allExpenses = [];

// 3. COLLECT USER INPUT using prompts
monthlyBudget = Number(prompt("Enter your monthly budget (e.g. 40000):"));
expenseName1 = prompt("Enter first expense name (e.g. Rent):");
expenseAmount1 = Number(prompt(`Enter amount for ${expenseName1}:`));
expenseName2 = prompt("Enter second expense name (e.g. Food):");
expenseAmount2 = Number(prompt(`Enter amount for ${expenseName2}:`));

allExpenses = [expenseAmount1, expenseAmount2];

// 4 & 5. PERFORM CALCULATIONS + REUSABLE FUNCTIONS

function calculateTotalExpenses(expensesArray) {
  let total = 0;
  for (let i = 0; i < expensesArray.length; i++) {
    total += expensesArray[i];
  }
  return total;
}

function calculateBalance(budget, totalExpenses) {
  return budget - totalExpenses;
}

function calculatePercentageSpent(budget, totalExpenses) {
  return (totalExpenses / budget) * 100;
}

// Using the functions
let totalSpent = calculateTotalExpenses(allExpenses);
let remainingBalance = calculateBalance(monthlyBudget, totalSpent);
let percentSpent = calculatePercentageSpent(monthlyBudget, totalSpent);

// 6. DISPLAY RESULTS in console
console.log("--- SpendWise Budget Report ---");
console.log(`Monthly Budget: ${monthlyBudget}`);
console.log(`Expense 1: ${expenseName1} - ${expenseAmount1}`);
console.log(`Expense 2: ${expenseName2} - ${expenseAmount2}`);
console.log(`Total Spent: ${totalSpent}`);
console.log(`Remaining Balance: ${remainingBalance}`);
console.log(`Percentage Spent: ${percentSpent.toFixed(2)}%`);

if (remainingBalance < 0) {
  console.log("Warning: You have exceeded your budget!");
} else {
  console.log("Great! You are within budget.");
}
