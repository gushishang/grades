<template>
  <div class="line-stack" ref="lineStack"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted, ref } from "vue";

const props = defineProps<{
  data:any[][];
  title: string;
  tests: any[];
}>();

type EChartsOption = echarts.EChartsOption;
const lineStack = ref<HTMLElement | null>(null);

let option: EChartsOption;

option = {
  title: {
    text: props.title,
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
  },
  toolbox: {
    feature: {
      saveAsImage: {},
      magicType: {
        show: true,
        type: ["line", "bar"],
      },
    },
  },
  xAxis: {
    type: "category",
    data: props.tests,
  },
  yAxis: {
    type: "value",
  },
  series: props.data.map((item, index) => {
    return {
      name: props.data[index][0],
      type: "line",
      data: item.slice(1),
      label: {
        show: true,
        position: "bottom",
      },
    };
  }),
};
onMounted(() => {
  let myChart = echarts.init(lineStack.value);

  option && myChart.setOption(option);
});
</script>

<style scoped>
.line-stack {
  width: 100%;
  height: 100%;
}
</style>
