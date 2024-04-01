<script setup>
const props = defineProps({
  expenses: Array,
  categories: Array,
});

const chartLabels = ref([]);
const chartColors = ref([]);
const chartSeries = ref([]);

const options = ref({
  labels: chartLabels,
  colors: chartColors,
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            fontSize: 18,
            formatter: function (w) {
              return "$" + w.globals.seriesTotals.reduce((a, b) => a + b, 0);
            },
            color: "#1f2937",
          },
        },
      },
    },
  },
});

onMounted(() => {
  const auxiliarArray = props.expenses.reduce((acum, item) => {
    const { categories, expense } = item;
    const category = acum.find((x) => x.categoryName === categories);

    if (category) {
      category.total += parseInt(expense);
    } else {
      acum.push({ categoryName: categories, total: parseInt(expense) });
    }

    return acum;
  }, []);

  const expensesPerCategory = auxiliarArray.map((item) => {
    const { categoryName, total } = item;
    const category = props.categories.find((x) => x.name === categoryName);
    return {
      total,
      color: category.color,
      name: category.name,
    };
  });

  expensesPerCategory.sort((a, b) => b.total - a.total);

  if (expensesPerCategory.length > 5) {
    let excedentArray = [...expensesPerCategory];
    excedentArray.splice(0, 5);

    const excedentTotal = excedentArray.reduce((total, item) => {
      return total + item.total;
    }, 0);

    expensesPerCategory.splice(5, expensesPerCategory.length - 5);
    expensesPerCategory.push({
      total: excedentTotal,
      color: "#a6a6a6",
      name: "Others",
    });
  }

  chartLabels.value = [];
  chartColors.value = [];
  chartSeries.value = [];
  expensesPerCategory.forEach((category) => {
    chartLabels.value.push(category.name);
    chartColors.value.push(category.color);
    chartSeries.value.push(category.total);
  });
});
</script>

<template>
  <ClientOnly>
    <span class="text-lg font-bold text-gray-800">Expenses per category</span>
    <apexchart
      type="donut"
      :options="options"
      :series="chartSeries"
      class="my-2"
    ></apexchart>
  </ClientOnly>
</template>
