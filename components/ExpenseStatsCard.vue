<script setup>
import { initFlowbite } from 'flowbite'
import { useExpenseStore } from "../stores/expenses";

const props = defineProps({
  categories: Array,
});
const expenseStore = useExpenseStore();

let type = ref("All");
let expenses = ref([]);
let chartKey = ref(0);

onMounted(() => {
  initFlowbite()
  loadData();
});

function loadData() {
  const allExpenses = expenseStore.getExpenses;
  expenses.value = [
    ...allExpenses.value.filter((expense) => {
      if (type.value == "All") return true;
      return expense.types == type.value;
    }),
  ];
  chartKey.value++;
}

function changeType(data) {
  type.value = data;
  loadData();
}

function getCategory(category) {
  return props.categories[
    props.categories.findIndex((item) => {
      return item.name == category;
    })
  ];
}

function removeExpense(id) {
  expenseStore.removeExpense(id);
  loadData();
}
</script>

<template>
  <div class="bg-white mobile:rounded-md px-7 pt-4 pb-3">
    <DonutChart
      :key="chartKey"
      v-if="expenses.length"
      :expenses="expenses"
      :categories="props.categories"
    ></DonutChart>

    <div class="flex justify-between mb-2">
      <div class="text-gray-800 font-bold flex items-center">
        <span class="text-lg">{{ type }} expenses</span>
        <div class="text-gray-400 border-l-2 ml-3">
          <button
            type="button"
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
          >
            <Icon
              name="fluent:edit-28-filled"
              class="ml-1 w-7 h-7 hover:text-gray-800 hover:bg-gray-100 p-1 rounded-full transition cursor-pointer duration-100 ease-in-out"
            ></Icon>
          </button>
        </div>
        <div id="dropdown" class="z-10 hidden">
          <div
            aria-labelledby="dropdownDefaultButton"
            class="font-normal bg-white w-32 mt-1 p-2 rounded-lg border border-gray-300"
          >
            <div
              v-for="choice in ['All', 'One time', 'Monthly', 'Anual']"
              class="pl-2 flex h-7 items-center cursor-pointer hover:bg-gray-200 rounded-full"
              @click="changeType(choice)"
            >
              <span>{{ choice }}</span>
            </div>
          </div>
        </div>
      </div>
      <slot name="close-button"></slot>
    </div>

    <div class="max-h-64 overflow-scroll scrollbar-none">
      <div v-if="!expenses.length" class="text-center">
        No expenses to show yet!
      </div>
      <ExpenseDetails
        v-else
        v-for="expense in expenses"
        :key="expense.id"
        :details="expense"
        :category="getCategory(expense.categories)"
        @removeExpense="removeExpense(expense.id)"
        class="border-b last:border-0"
      ></ExpenseDetails>
    </div>
  </div>
</template>
