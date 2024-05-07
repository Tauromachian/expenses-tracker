<script setup>
import { ref } from "vue";
import { useExpenseStore } from "./stores/expenses";

const expenseStore = useExpenseStore();

const categories = ref(getCategories());
const formKey = ref(0);
const appToaster = ref(null);
const showScrollDown = ref(false);
const fadingInOutArrow = ref(false);

function submitForm(form) {
  // show scroll-down arrow
  formKey.value++;
  expenseStore.addExpense(form);
  appToaster.value.openToast("New expense added!");
}

function scrollToStats() {
  const componente = document.getElementById("expense-stats");
  componente.scrollIntoView({ behavior: "smooth" });

  closeScrollDown();
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

      <ExpenseStatsCard :categories="categories"> </ExpenseStatsCard>
    </div>

    <AppToaster ref="appToaster" :message="message"></AppToaster>

    <ScrollDownArrow
      v-if="showScrollDown"
      class="transition-opacity"
      :class="{
        'opacity-100': fadingInOutArrow,
        'opacity-0': !fadingInOutArrow,
      }"
      @scroll-to-stats="scrollToStats"
    ></ScrollDownArrow>
  </main>
</template>
