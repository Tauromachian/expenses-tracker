<script setup>
import { ref } from "vue";

import { useExpenseStore } from "../stores/expenses";

import getCategories from "../utils/getCategories";

const expenseStore = useExpenseStore();

const categories = ref(getCategories());
const formKey = ref(0);
const appToaster = ref(null);
const fadingInOutArrow = ref(false);

function scrollToStats() {
  const component = document.getElementById("expense-stats");

  if (!component) return;

  component.scrollIntoView({ behavior: "smooth" });

  closeScrollDown();
}

function submitForm(form) {
  // show scroll-down arrow
  formKey.value++;
  expenseStore.addExpense(form);

  if (!appToaster?.value) return;

  appToaster.value.openToast("New expense added!");
}

function closeScrollDown() {
  fadingInOutArrow.value = false;
}
</script>

<template>
  <div>
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

    <AppToaster ref="appToaster"></AppToaster>

    <ScrollDownArrow
      class="transition-opacity"
      :class="{
        'opacity-100': fadingInOutArrow,
        'opacity-0': !fadingInOutArrow,
      }"
      @scroll-to-stats="scrollToStats"
    ></ScrollDownArrow>
  </div>
</template>

<style lang="scss" scoped></style>
