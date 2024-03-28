<template>
  <component
    :is="chartComponent"
    width="400"
    type="bar"
    :options="chartOptions"
    :series="series"
  />
</template>

<script setup>
let chartComponent = shallowRef(null);
onMounted(async () => {
  const VueApexCharts = (await import("vue3-apexcharts")).default;
  chartComponent.value = VueApexCharts;
});

const chartOptions = ref({
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
});

const series = ref([
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 92],
  },
]);
</script>
