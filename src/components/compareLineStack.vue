<template>
  <div style="width: 100%; height: 400px;">
    <lineStack :data="input" :tests="tests" :title="sub" />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import lineStack from "./charts/lineStack.vue";
import datasRaw from "../assets/output.json";
import tests from "../assets/tests.ts";

const props = defineProps<{
  names: string[],
  sub: string
}>();

const subjectMap: Record<string, number> = {
  "总分": 2,
  "语文": 6,
  "数学": 9,
  "英语": 12,
  "物理": 15,
  "化学": 18,
  "生物": 21
};

// 修正：将 students 数组转为以学生名为 key 的对象
const studentMap = computed(() => {
  const map: Record<string, string[][]> = {};
  if (Array.isArray(datasRaw.students)) {
    for (const stu of datasRaw.students) {
      map[stu.name] = stu.history;
    }
  }
  return map;
});

const input = computed(() => {
  const subject = subjectMap[props.sub] || 0;
  let result: any[] = [];
  const datas = studentMap.value;
  for (const k in datas) {
    if (props.names.includes(k)) {
      let arr = [k];
      datas[k].map((t: string[]) => {
        arr.push(...t.slice(subject, subject + 1));
      });
      result.push(arr);
    }
  }
  return result;
});
</script>