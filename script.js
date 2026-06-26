const container = document.querySelector(".container");
const expenseContainer = document.querySelector(".expense-container");
const dateInput = document.querySelector(".date");
dateInput.value = new Date().toISOString().split("T")[0];
const item = document.querySelector(".item");
const amount = document.querySelector(".amount");
const addButton = document.querySelector(".add");

addButton.addEventListener("click", () => {
const expense = ({
  date: dateInput.value,
  item: item.value,
  amount: Number(amount.value)
  
});
expenses.push(expense);
renderExpense();
});

let expenses = [];
function renderExpense() {
  expenseContainer.innerHTML = "";
  
  expenses.forEach((expense, index) => {
    

    const cont = document.createElement("div");
    cont.classList.toggle("cont");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    const itemDate = document.createElement("p");
    itemDate.textContent = `${dateInput.value}`;

    const itemName = document.createElement("p");
    itemName.textContent = item.value;

    const itemAmount = document.createElement("p");
    itemAmount.textContent = `$${amount.value}`;

    cont.appendChild(deleteButton);
    cont.appendChild(itemDate);
    cont.appendChild(itemName);
    cont.appendChild(itemAmount);
    expenseContainer.appendChild(cont);

    
  });
  
}