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
  <main class="font-nunito min-h-screen bg-gray-100">
    <div
      class="flex flex-col md:flex-row pt-10 items-center justify-center gap-5 md:items-start max-w-7xl mx-auto"
    >
      <AddExpenseForm
        :key="formKey"
        :categories="categories"
        @submit-form="submitForm"
      ></AddExpenseForm>

      <ExpenseStatsCard :key="statsKey" :categories="categories">
      </ExpenseStatsCard>
    </div>

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
</template>
