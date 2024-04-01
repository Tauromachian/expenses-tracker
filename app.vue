<script setup>
import { ref } from "vue";
import { useExpenseStore } from "./stores/expenses";

const expenseStore = useExpenseStore();

const categories = ref(getCategories());
let formKey = ref(0);
let statsKey = ref(0);
let showToast = ref(false);
let fadingInOut = ref(false);

function contactMe(url) {
  window.open(url);
}

function submitForm(form) {
  formKey.value++;
  expenseStore.addExpense(form);
  
  // show notification
  showToast.value = true;
  setTimeout(() => {
    fadingInOut.value = true;
  }, 10);
  setTimeout(() => {
    closeToast();
  }, 1500);
  
  statsKey.value++;
}

function closeToast() {
  fadingInOut.value = false;
  setTimeout(() => {
    showToast.value = false;
  }, 160);
}
</script>

<template>
  <div
    id="app"
    class="bg-gray-100 text-gray-600 font-nunito flex h-auto flex-col justify-between"
  >
    <main class="flex flex-col items-center">
      <AddExpenseForm
        :key="formKey"
        :categories="categories"
        @submitForm="submitForm"
      ></AddExpenseForm>

      <ExpenseStatsCard :key="statsKey" :categories="categories"> </ExpenseStatsCard>

      <ToastNotification
        v-if="showToast"
        class="transition-opacity duration-150 ease-in-out"
        :class="{ 'opacity-100': fadingInOut, 'opacity-0': !fadingInOut }"
        message="New expense added!"
        @close="closeToast"
      ></ToastNotification>
    </main>
    <Footer @contactMe="contactMe"></Footer>
  </div>
</template>
