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

});