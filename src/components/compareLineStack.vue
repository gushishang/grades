<template>
  <div style="width: 100%; height: 400px;">
    <lineStack :data="input" :tests="tests" :title="sub" />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import lineStack from "./charts/lineStack.vue";
import datasRaw from "../assets/output.json";
const datas: Record<string, string[][]> = datasRaw;
import tests from "../assets/tests.ts";

const props = defineProps<{
  names: string[],
  sub: string
}>();

const subjectMap: Record<string, number> = {
  "总分": 1,
  "语文": 5,
  "数学": 8,
  "英语": 11,
  "物理": 14,
  "化学": 17,
  "生物": 20
};

// 计算 input，确保响应式
const input = computed(() => {
  const subject = subjectMap[props.sub] || 0;
  let result: any[] = [];
  for (const k in datas) {
    if (props.names.includes(k)) {
      let arr = [k];
      datas[k].map((t) => {
        arr.push(...t.slice(subject, subject + 1));
      });
      result.push(arr);
    }
  }
  return result;
});
</script>