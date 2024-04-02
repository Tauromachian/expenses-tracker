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
const expenses = ref([]);
const chartKey = ref(0);
const visibleTypes = ref(false);
const fadingInOutTypes = ref(false);
const expenseTypes = ref(["All", "One time", "Monthly", "Anual"]);

onMounted(() => {
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

function handleEditType() {
  visibleTypes.value = true;
  setTimeout(() => {
    fadingInOutTypes.value = true;
  }, 10);
}

function changeType(data) {
  if (data != type.value) {
    type.value = data;
    loadData();
  }
  fadingInOutTypes.value = false;
  visibleTypes.value = false;
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
  <div id="expense-stats" class="w-full max-w-md flex mobile:items-center">
    <div
      class="bg-white w-full h-min mobile:rounded-md mobile:shadow-md mobile:pt-4 px-7 pb-3"
      @click="visibleTypes = false"
    >
      <DonutChart
        v-if="expenses.length"
        :key="chartKey"
        :expenses="expenses"
        :categories="props.categories"
      ></DonutChart>

      <div class="flex justify-between mb-2">
        <div class="text-gray-800 font-bold flex items-center relative">
          <span class="text-lg">{{ type }} expenses</span>
          <div class="text-gray-400 border-l-2 ml-3">
            <button type="button" @click.stop="handleEditType">
              <Icon
                name="fluent:edit-28-filled"
                class="ml-1 w-7 h-7 hover:text-gray-800 hover:bg-gray-100 p-1 rounded-full transition cursor-pointer duration-100 ease-in-out"
              ></Icon>
            </button>
          </div>
          <div
            v-if="visibleTypes"
            class="font-normal bg-white w-32 mt-1 p-2 rounded-lg border border-gray-300 absolute top-0 right-7 z-10 transition-opacity duration-150 ease-in-out"
            :class="{
              'opacity-100': fadingInOutTypes,
              'opacity-0': !fadingInOutTypes,
            }"
          >
            <div
              v-for="choice in expenseTypes"
              :key="choice"
              class="pl-2 flex h-7 items-center cursor-pointer hover:bg-gray-200 rounded-full"
              @click="changeType(choice)"
            >
              <span>{{ choice }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="max-h-screen overflow-scroll scrollbar-none relative">
        <div v-if="!expenses.length" class="text-center">
          No expenses to show yet!
        </div>
        <ExpenseDetails
          v-for="expense in expenses"
          v-else
          :key="expense.id"
          :details="expense"
          :category="getCategory(expense.categories)"
          class="border-b last:border-0"
          @remove-expense="removeExpense(expense.id)"
        ></ExpenseDetails>
      </div>
    </div>
  </div>
</template>
