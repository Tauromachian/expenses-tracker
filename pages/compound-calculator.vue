<script setup>
const fadingInOutArrow = ref(false);
const appToaster = ref();

function submitForm(form) {
  expenseStore.addExpense(form);

  if (!appToaster?.value) return;

  appToaster.value.openToast("New expense added!");
}

function scrollToStats() {
  const component = document.getElementById("expense-stats");

  if (!component) return;

  component.scrollIntoView({ behavior: "smooth" });

  closeScrollDown();
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Compound Calculator</h1>

    <div class="flex flex-col md:flex-row gap-5 md:items-start">
      <CompoundForm @submit="submitForm"></CompoundForm>

      <CompoundStatsCard> </CompoundStatsCard>
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
