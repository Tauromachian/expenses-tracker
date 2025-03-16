<script setup>
const chartKey = ref(0);

function removeInvestment(id) {
  expenseStore.removeInvestment(id);
}
</script>

<template>
  <div id="expense-stats" class="w-full max-w-md flex mobile:items-center">
    <AppCard>
      <AppCardBody>
        <InvestmentLineChart
          v-if="expenses?.length"
          :key="chartKey"
          :expenses="expenses"
        ></InvestmentLineChart>

        <div class="max-h-screen overflow-scroll relative">
          <div v-if="!expenses?.length" class="text-center my-20">
            No investments! Add one
          </div>
          <InvestmentItem
            v-for="expense in expenses"
            v-else
            :key="expense.id"
            :details="expense"
            :category="getCategory(expense.categories)"
            class="border-b last:border-0"
            @remove-expense="removeInvestment(expense.id)"
          ></InvestmentItem>
        </div>
      </AppCardBody>
    </AppCard>
  </div>
</template>
