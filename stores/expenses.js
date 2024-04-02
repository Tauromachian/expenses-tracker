/*global defineStore, ref, computed*/
export const useExpenseStore = defineStore("expenses", () => {
  // state
  let expenses = ref([]);

  // getters
  const getExpenses = computed(() => {
    loadExpenses();
    return expenses;
  });

  // actions
  function addExpense(expense) {
    expense.id = calcMEX();
    expenses.value.push(expense);
    saveExpenses();
  }

  function removeExpense(id) {
    expenses.value = expenses.value.filter((expense) => expense.id != id);
    saveExpenses();
  }

  function clearExpenses() {
    expenses.value = [];
    saveExpenses();
  }

  // private functions for pinia persistency
  function saveExpenses() {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("expenses", JSON.stringify(expenses.value));
    }
  }

  function loadExpenses() {
    const savedExpenses = localStorage.getItem("expenses");
    expenses.value = savedExpenses ? JSON.parse(savedExpenses) : [];
  }

  // helper function
  function calcMEX() {
    let mex = 1;
    const idSet = new Set();
    expenses.value.forEach((expense) => {
      idSet.add(expense.id);
      while (idSet.has(mex)) mex++;
    });

    return mex;
  }

  return { expenses, getExpenses, addExpense, removeExpense, clearExpenses };
});
