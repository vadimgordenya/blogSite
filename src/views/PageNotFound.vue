<template>
  <div class="container">
    <div class="inner">
      <h1>404</h1>
      <p>Page not found back to home page</p>
      <p>
        <el-button type="primary">
          <router-link to="/">Back to home</router-link>
        </el-button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageNotFound extends Vue {}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  height: 100vh;
}
.inner {
  margin: auto;
}
h1 {
  font-size: 130px;
  letter-spacing: 20px;
  margin: 20px;
}
p {
  font-size: 18px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
