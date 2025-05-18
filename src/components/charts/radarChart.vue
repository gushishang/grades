<template>
  <div class="radar-chart" ref="radarChart"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted, ref } from "vue";

const props = defineProps<{
  data: number[][];
  students: string[];
}>();

type EChartsOption = echarts.EChartsOption;
const radarChart = ref<HTMLElement | null>(null);

const subjects = ["语文", "数学", "英语", "物理", "化学", "生物"];

let option: EChartsOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    data: props.students,
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: { show: true },
    },
  },
  radar: {
    indicator: subjects.map((item, index) => ({
      name: item,
      max: index <= 2 ? 150 : 100,
    })),
  },
  series: [
    {
      type: "radar",
      data: props.data.map((scores, index) => ({
        value: scores,
        name: props.students[index],
        label: { 
          show: true,
        },
      })),
    },
  ],
};

onMounted(() => {
  const chart = echarts.init(radarChart.value!);
  chart.setOption(option);
});
</script>

<style scoped>
.radar-chart {
  width: 100%;
  height: 100%;
}
</style>
