<script setup>
import { useExpenseStore } from "./stores/expenses";

const expenseStore = useExpenseStore();

const { data: categories } = await useFetch("/api/constants/categories");
let formKey = ref(0);
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
}

function closeToast() {
  fadingInOut.value = false;
  setTimeout(() => {
    showToast.value = false;
  }, 160);
}

// expenseStore.clearExpenses();
console.log(expenseStore.getExpenses.value);
</script>

<template>
  <div
    id="app"
    class="bg-gray-100 text-gray-600 font-nunito h-screen mobile:h-auto flex flex-col justify-between"
  >
    <main
      class="flex justify-center mobile:items-center h-auto mobile:h-screen"
    >
      <div
        class="bg-white w-full max-w-md h-min mobile:rounded-md mobile:shadow-md"
      >
        <div class="bg-teal-700 text-white flex mobile:rounded-t-md">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              class="w-10 text-teal-700 bg-white rounded-xl my-5 mx-7 shadow-md p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
          </div>
          <div class="my-auto">
            <span class="font-bold block text-white text-lg"
              >Add new expense</span
            >
            <span class="text-xs">
              Fill in the form with the details of the expense
            </span>
          </div>
        </div>
        <AddExpenseForm
          :categories="categories"
          @submitForm="submitForm"
        ></AddExpenseForm>
      </div>

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
