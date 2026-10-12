// 2. Work with Multiple Records - Array to store expenses
let expenses = [];

// 5. Handle User Interactions - Event Listeners
document.getElementById('add-btn').addEventListener('click', addExpense);
document.getElementById('income').addEventListener('input', updateDashboard);

function addExpense() {
  const desc = document.getElementById('desc').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;

  if (desc === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter valid description and amount");
    return;
  }

  // Add to array
  expenses.push({ id: Date.now(), description: desc, amount: amount, category: category });

  // Clear inputs
  document.getElementById('desc').value = "";
  document.getElementById('amount').value = "";

  updateDashboard();
}

// 4. Update Dashboard Dynamically + 3. Process Data with Loops + 1. Decision Making
function updateDashboard() {
  const income = parseFloat(document.getElementById('income').value) || 0;
  let total = 0;

  // 3. Process Data with Loops
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }

  const remaining = income - total;

  // 4. DOM Manipulation - update page directly
  document.getElementById('total').textContent = `KES ${total}`;
  document.getElementById('remaining').textContent = `KES ${remaining}`;

  const expenseList = document.getElementById('expense-list');
  expenseList.innerHTML = ""; // clear

  // Loop to display records
  expenses.forEach((exp) => {
    const li = document.createElement('li');
    li.innerHTML = `${exp.description} (${exp.category}) - KES ${exp.amount} <button class="delete-btn" onclick="deleteExpense(${exp.id})">X</button>`;
    expenseList.appendChild(li);
  });

  // 1. Implement Decision Making
  const statusEl = document.getElementById('status');
  if (total > income) {
    statusEl.textContent = "🚨 Over Budget! You are spending too much!";
    statusEl.style.background = "#ffcccc";
  } else if (total > income * 0.8) {
    statusEl.textContent = "⚠️ Warning: You have used 80% of your income";
    statusEl.style.background = "#fff3cd";
  } else if (total === 0) {
    statusEl.textContent = "Status: No expenses yet";
    statusEl.style.background = "#eef";
  } else {
    statusEl.textContent = "✅ Good Job! You are within budget";
    statusEl.style.background = "#d4edda";
  }
}

function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id!== id);
  updateDashboard();
}

// Initial load
updateDashboard();
