export const useExpenseStore = defineStore("expenses", () => {
  // state
  const expenses = ref([]);

  // getters
  const getExpenses = computed(() => {
    loadExpenses();
    return expenses;
  });

  // actions
  function addExpense(expense) {
    expenses.value.push(expense);
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
    if (typeof localStorage !== "undefined") {
      const savedExpenses = localStorage.getItem("expenses");
      expenses.value = savedExpenses ? JSON.parse(savedExpenses) : [];
    }
  }

  return { expenses, getExpenses, addExpense, clearExpenses };
});
