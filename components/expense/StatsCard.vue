<script setup>
import { useExpenseStore } from "../stores/expenses";

import { categories } from "../utils/categories";

const expenseStore = useExpenseStore();

const chartKey = ref(0);
const expenseTypes = ref(["All", "One time", "Monthly", "Annual"]);
const selectedExpenseType = ref("All");

const filteredExpenses = computed(() => {
  const allExpenses = expenseStore.expenses;

  return allExpenses.filter((expense) => {
    if (selectedExpenseType.value === "All") return true;
    return expense.types === selectedExpenseType.value;
  });
});

watch(filteredExpenses, () => chartKey.value++);

function getCategory(category) {
  return categories[
    categories.findIndex((item) => {
      return item.name == category;
    })
  ];
}
</script>

<template>
  <div id="expense-stats" class="w-full max-w-md flex mobile:items-center">
    <AppCard>
      <AppCardBody>
        <h2 class="text-lg font-bold text-gray-800">Expenses per category</h2>
        <BaseButtonGroup v-model="selectedExpenseType" class="mt-4">
          <BaseButton
            v-for="(expenseType, index) in expenseTypes"
            :key="`expense-type-${index}`"
            :value="expenseType"
          >
            {{ expenseType }}
          </BaseButton>
        </BaseButtonGroup>

        <ExpenseDonutChart
          v-if="filteredExpenses?.length"
          :key="chartKey"
          :expenses="filteredExpenses"
          :categories="categories"
        ></ExpenseDonutChart>

        <div class="max-h-screen overflow-scroll scrollbar-none relative">
          <div v-if="!filteredExpenses?.length" class="text-center my-20">
            No expenses to show yet!
          </div>
          <template v-else>
            <ExpenseItem
              v-for="expense in filteredExpenses"
              :key="expense.id"
              :expense="expense"
              :category="getCategory(expense.categories)"
              class="border-b last:border-0"
              @remove="expenseStore.removeExpense(expense.id)"
            ></ExpenseItem>
          </template>
        </div>
      </AppCardBody>
    </AppCard>
  </div>
</template>
