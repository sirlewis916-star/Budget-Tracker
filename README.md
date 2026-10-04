# SpendWise - Personal Budget Tracker

## What SpendWise Does
SpendWise is a simple personal budgeting application that helps users track their monthly spending. The user enters their monthly budget and their expenses, and the application calculates the total amount spent, the remaining balance, and the percentage of the budget used. It also warns the user if they have exceeded their budget. All results are displayed in the browser console.

## JavaScript Concepts Implemented
This project implements the core concepts from this week:
1.  **Variables:** To store budgeting data
2.  **Data Types:** Numbers for amounts, Strings for expense names, Arrays to group expenses
3.  **User Input:** Using `prompt()` to collect data from the user
4.  **Calculations:** Using arithmetic operators to perform budget math
5.  **Functions:** Reusable blocks of code for calculations
6.  **Console Output:** Using `console.log()` to display labeled results

## How Variables Are Being Used
Variables store all the key information for the application:

- `monthlyBudget` (Number) - Stores the user's total monthly budget
- `expenseName1`, `expenseName2` (String) - Stores the names of expenses like "Rent" or "Food"
- `expenseAmount1`, `expenseAmount2` (Number) - Stores the amount for each expense
- `allExpenses` (Array) - Stores all expense amounts together for easy calculation
- `totalSpent`, `remainingBalance`, `percentSpent` (Number) - Stores the results of calculations

Example:
```js
let monthlyBudget = 0;
let allExpenses = [];
