<template>
  <div class="line-stack" ref="lineStack"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted, ref, watch } from "vue";

const props = defineProps<{
  data:any[][];
  title: string;
  tests: any[];
}>();

const lineStack = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

function getOption() {
  return {
    title: {
      text: props.title,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {},
    toolbox: {
      feature: {
        saveAsImage: {},
        magicType: {
          show: true,
          type: ["bar", "line"],
        },
      },
    },
    xAxis: {
      type: "category",
      data: props.tests,
    },
    yAxis: {
      type: "value",
      min: (
        Math.min(
          ...props.data.flatMap(student => student.slice(1)).map(Number)
        ) - 10
      ),
    },
    series: props.data.map((item, index) => {
      return {
        name: props.data[index][0],
        type: "line",
        data: item.slice(1),
        label: {
          show: true,
          position: "top",
        },
      };
    }),
  };
}

onMounted(() => {
  if (lineStack.value) {
    myChart = echarts.init(lineStack.value);
    myChart.setOption(getOption());
    window.addEventListener("resize", handleResize);
  }
});

function handleResize() {
  if (myChart) {
    myChart.resize();
  }
}

// 监听 props 变化，动态更新图表
watch(
  () => [props.data, props.title, props.tests],
  () => {
    if (myChart) {
      myChart.setOption(getOption(), true);
      myChart.resize();
    }
  },
  { deep: true }
);
</script>

<style scoped>
.line-stack {
  width: 100%;
  height: 100%;
  min-width: 0;
}
</style>
