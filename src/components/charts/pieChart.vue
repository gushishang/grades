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
  '#6DA9E4', // 浅蓝
  '#7EC8A9', // 薄荷绿
  '#F4BE87', // 浅橙
  '#B8B3E9', // 薰衣草紫
  '#88D3DB', // 天蓝
  '#FFB6C1'  // 浅粉
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
      color: '#c23531',
      shadowBlur: 200,
      shadowColor: 'rgba(0, 0, 0, 0.1)'
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