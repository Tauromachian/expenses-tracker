<script setup></script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Compound Calculator</h1>

    <div class="flex flex-col md:flex-row gap-5 md:items-start">
      <CompoundForm
        :key="formKey"
        :categories="categories"
        @submit-form="submitForm"
      ></CompoundForm>

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
