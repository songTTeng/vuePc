<template>
  <div id="app">
    <router-view/>   <!--获取首页 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
@import './style/style';
@import './style/common';
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  height: 100%;
  width: 100%;
}
</style>
