<template>
  <div class="compare-container">
    <div class="subject-select">
      <n-select
        v-model:value="selectedSub"
        :options="subjectOptions"
        style="width: 100px;"
        placement="right-start"
        size="large"
        :menu-props="{ style: { minWidth: '100px' } }"
      />
    </div>
    <div class="compare-chart">
      <compare-line-stack
        :names="names"
        :sub="selectedSub"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NSelect } from "naive-ui";
import CompareLineStack from "./compareLineStack.vue";

// 接收 names 作为 props
 defineProps<{
  names: string[]
}>();

// 科目选项
const subjectOptions = [
    {label: "总分", value: "总分"},
  { label: "语文", value: "语文" },
  { label: "数学", value: "数学" },
  { label: "英语", value: "英语" },
  { label: "物理", value: "物理" },
  { label: "化学", value: "化学" },
  { label: "生物", value: "生物" }
];

const selectedSub = ref(subjectOptions[0].value);
</script>

<style scoped>
.compare-container {
  display: flex;
  height: 400px;
  background: #f7fafd;
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  overflow: hidden;
}

.subject-select {
  width: 140px;
  border-right: 1px solid #e5e7eb;
  padding: 36px 0 36px 0;
  background: #f0f4fa;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.compare-chart {
  flex: 1;
  padding: 36px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>