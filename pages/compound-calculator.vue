<script setup></script>

<template>
  <div class="max-w-7xl mx-auto pt-10">
    <h1 class="text-3xl font-bold mb-5">Compound Calculator</h1>

    <div class="flex flex-col md:flex-row gap-5 md:items-start">
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
