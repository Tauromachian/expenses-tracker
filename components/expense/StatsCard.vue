<script setup>
import { useExpenseStore } from "../stores/expenses";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});
const expenseStore = useExpenseStore();

const type = ref("All");
const chartKey = ref(0);
const expenseTypes = ref(["All", "One time", "Monthly", "Annual"]);
const selectedExpenseType = ref("All");

const expenses = computed(() => {
  const allExpenses = expenseStore.expenses;
  const expenses = [
    ...allExpenses.filter((expense) => {
      if (type.value == "All") return true;
      return expense.types == type.value;
    }),
  ];

  return expenses;
});

watch(expenses, () => {
  chartKey.value++;
});

function getCategory(category) {
  return props.categories[
    props.categories.findIndex((item) => {
      return item.name == category;
    })
  ];
}

function removeExpense(id) {
  expenseStore.removeExpense(id);
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
          v-if="expenses?.length"
          :key="chartKey"
          :expenses="expenses"
          :categories="props.categories"
        ></ExpenseDonutChart>

        <div class="max-h-screen overflow-scroll scrollbar-none relative">
          <div v-if="!expenses?.length" class="text-center my-20">
            No expenses to show yet!
          </div>
          <ExpenseItem
            v-for="expense in expenses"
            v-else
            :key="expense.id"
            :details="expense"
            :category="getCategory(expense.categories)"
            class="border-b last:border-0"
            @remove-expense="removeExpense(expense.id)"
          ></ExpenseItem>
        </div>
      </AppCardBody>
    </AppCard>
  </div>
</template>
