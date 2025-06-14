<template>
  <compareLineStack :names="['尚以诚','卢笑语','尹怡蒙']" classs="lineStack" sub="数学"></compareLineStack>
  <div><LineStack class="LineStack" :data="data" :tests="tests" title="总分" /></div>
  <div>
    <RadarChart
      :data="[
        [150, 85, 92, 88, 95, 89],
        [78, 82, 80, 85, 88, 83],
        [35, 50, 48, 67, 45, 51],
      ]"
      :students="['张三', '李四', '王五']"
      class="RadarChart"
    />
  </div>
  <div>
    <PieChart 
  :data="[
    { value: 335, name: 'Direct' },
    { value: 310, name: 'Email' },
    { value: 274, name: 'Union Ads' },
    { value: 235, name: 'Video Ads' },
    { value: 400, name: 'Search Engine' }
  ]"
  title="科目分数贡献"
  class="PieChart"

/>
  </div>
</template>
<script setup lang="ts">
import LineStack from "../components/charts/lineStack.vue";
import RadarChart from "../components/charts/radarChart.vue";
import PieChart from "../components/charts/pieChart.vue";
import compareLineStack from "../components/compareLineStack.vue";
const tests = ["25-3", "25-4", "25-5", "期中", "25-6",1, 2, 3, 4];

const data = [
  ["学生", 41.1, 30.4, 65.1, 53.3, 40.1, 60, 30, 50, 30],
  ["对比学生", 86.5, 92.1, 85.7, 83.1, 45, 65, 76, 34],
  ["对比学生2", 24.1, 67.2, 79.5, 86.4, 34, 54, 23, 98],
];
</script>
<style scoped>
.LineStack  {
  width: 600px;
  height: 400px;
}
.RadarChart{
 height: 500px;
}
.PieChart{
  height: 500px;
  width:500px;
}
</style>
