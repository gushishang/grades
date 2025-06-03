<template>
  <div class="compare-page">
    <header class="compare-header">
      <button class="back-btn" @click="goBack">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13 16L7 10L13 4" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="nav-placeholder"></div>
    </header>
    <main class="compare-main">
      <div class="chart">
        <n-select
          v-model:value="selectedNames"
          :options="studentOptions"
          multiple
          placeholder="请选择学生"
          class="student-select"
        />
        <compare :names="selectedNames"></compare>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NSelect } from "naive-ui";
import compare from '../components/compare.vue';
import { useRouter } from "vue-router";

// 学生名单
const studentList = [
  "白诗琦", "曹茂", "陈佳毅", "陈委", "代钰涵", "段焱曦", "付健强", "何庆瑜", "李晨瑞", "李巨燊",
  "李孟燚", "李琪琦", "李玮承", "李孝妍", "李昕翱", "李昕宸", "李欣锐", "李馨妤", "李一波", "梁郁婷",
  "林承昆", "林增昊", "刘菁菁", "刘巧琳", "刘张祺", "卢笑语", "卢鑫", "米思彤", "那娅涵", "普菲",
  "普菲雨", "邱皓曦", "尚以诚", "孙羽馨", "唐渊宸", "万镇豪", "王浩宇", "王子涵", "吴其锴", "武妙斯棋",
  "谢李雅慧", "邢振", "薛靖", "杨钛", "杨依", "杨梓涵", "姚怡馨", "尹怡蒙", "袁雨默", "张超",
  "张景维", "赵梦雪", "赵泊静", "钟嘉宁", "朱佳颖", "周诗涵","刘沂杭","赵涵沫","宣霁桐","皮安芮","冯彦量"
];

const studentOptions = studentList.map(name => ({ label: name, value: name }));
const selectedNames = ref<string[]>(["尚以诚"]);

const router = useRouter();
function goBack() {
  router.back();
}
</script>

<style scoped>
.compare-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
  display: flex;
  flex-direction: column;
}

.compare-header {
  height: 56px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.03);
  display: flex;
  align-items: center;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 10;
}

.back-btn {
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.2s;
  margin-right: 16px;
}
.back-btn:hover {
  background: #f0f0f0;
}

.nav-placeholder {
  flex: 1;
  /* 可放logo或导航内容，这里留空 */
}

.compare-main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 0;
}

.chart {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07);
  padding: 32px 36px 36px 36px;
  min-width: 800px;
  max-width: 80vw;
  width: 100%;
}

.student-select {
  width: 100%;
  margin-bottom: 24px;
  font-size: 16px;
}
</style>
