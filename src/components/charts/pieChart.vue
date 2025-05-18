<template>
  <div class="pie-chart" ref="pieChart"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted, ref } from "vue";

const props = defineProps<{
  data: Array<{ name: string; value: number }>;
  title: string;
}>();

type EChartsOption = echarts.EChartsOption;
const pieChart = ref<HTMLElement | null>(null);

const colorPalette = [
  '#D6E8FA', // hsl(210,10%,85%)
  '#D1E5F5', // hsl(212,15%,85%)
  '#CBE2F0', // hsl(214,20%,85%)
  '#C5DFEB', // hsl(216,25%,85%)
  '#BFDCE6', // hsl(218,30%,85%)
  '#BAD9E2'  // hsl(220,30%,85%)
];

let option: EChartsOption = {
  backgroundColor: 'transparent',
  title: {
    text: props.title ,
    left: 'center',
    top: 20,
    textStyle: {
      color: '#333'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [{
    type: 'pie',
    color: colorPalette,
    radius: '55%',
    center: ['50%', '50%'],
    data: [...props.data].sort((a, b) => a.value - b.value),
    roseType: 'radius',
    label: {
        color: '#444',
      formatter: ({ name, value, }: any) => 
        `${name}\n${value} `
 
    },
    labelLine: {
      lineStyle: {
        color: '#999'
      },
      smooth: 0.2,
      length: 10,
      length2: 20
    },
    itemStyle: {
      color: (params) => colorPalette[params.dataIndex % colorPalette.length],
      shadowBlur: 15,
      shadowColor: 'rgba(150, 150, 150, 0.1)'
    },
    animationType: 'scale',
    animationEasing: 'elasticOut',
    animationDelay: (idx: number) => Math.random() * 200
  }]
};

onMounted(() => {
  const chart = echarts.init(pieChart.value!);
  chart.setOption(option);
});
</script>

<style scoped>
.pie-chart {
  width: 100%;
  height: 100%;
}
</style>