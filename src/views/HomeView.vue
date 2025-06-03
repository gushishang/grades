<template>
  <div class="home-container">
    <h1>欢迎来到成绩管理系统</h1>
    <p>在这里，您可以方便地管理和查询学生成绩。</p>
    <router-link to="/compare">
      <button class="enter-btn">进入成绩比较</button>
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 40px 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  text-align: center;
}
h1 {
  font-size: 2rem;
  margin-bottom: 18px;
  color: #333;
}
p {
  color: #666;
  margin-bottom: 32px;
}
.enter-btn {
  background: #409eff;
  color: #fff;
  border: none;
  padding: 12px 32px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.enter-btn:hover {
  background: #3076d1;
}
</style>