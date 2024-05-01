<script setup>
import { ref } from "vue";
import { useExpenseStore } from "./stores/expenses";

const expenseStore = useExpenseStore();

const categories = ref(getCategories());
const formKey = ref(0);
const statsKey = ref(0);
const showToast = ref(false);
const fadingInOutToast = ref(false);
const showScrollDown = ref(false);
const fadingInOutArrow = ref(false);

function submitForm(form) {
  // show scroll-down arrow
  showScrollDown.value = true;
  setTimeout(() => {
    fadingInOutArrow.value = true;
  }, 10);
  setTimeout(() => {
    closeScrollDown();
  }, 2000);

  formKey.value++;
  expenseStore.addExpense(form);

  // show notification
  showToast.value = true;
  setTimeout(() => {
    fadingInOutToast.value = true;
  }, 10);
  setTimeout(() => {
    closeToast();
  }, 1500);

  statsKey.value++;
}

function scrollToStats() {
  const componente = document.getElementById("expense-stats");
  componente.scrollIntoView({ behavior: "smooth" });

  closeScrollDown();
}

function closeToast() {
  fadingInOutToast.value = false;
  setTimeout(() => {
    showToast.value = false;
  }, 160);
}

function closeScrollDown() {
  fadingInOutArrow.value = false;
  setTimeout(() => {
    showScrollDown.value = false;
  }, 160);
}
</script>

<template>
  <div
    id="app"
    class="bg-gray-100 text-gray-600 font-nunito flex h-auto flex-col justify-between"
  >
    <main class="flex flex-col items-center mb-10">
      <AddExpenseForm
        :key="formKey"
        :categories="categories"
        @submit-form="submitForm"
      ></AddExpenseForm>

      <ExpenseStatsCard :key="statsKey" :categories="categories">
      </ExpenseStatsCard>

      <ToastNotification
        v-if="showToast"
        class="transition-opacity duration-150 ease-in-out"
        :class="{
          'opacity-100': fadingInOutToast,
          'opacity-0': !fadingInOutToast,
        }"
        message="New expense added!"
        @close="closeToast"
      ></ToastNotification>

      <ScrollDownArrow
        v-if="showScrollDown"
        class="transition-opacity duration-150 ease-in-out"
        :class="{
          'opacity-100': fadingInOutArrow,
          'opacity-0': !fadingInOutArrow,
        }"
        @scroll-to-stats="scrollToStats"
      ></ScrollDownArrow>
    </main>
  </div>
</template>
