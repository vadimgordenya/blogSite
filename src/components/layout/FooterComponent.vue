<template>
  <el-footer height="auto">
    <el-row>
      <el-col :span="24">
        <a href="" class="footer-logo">
          <img src="@/assets/logo.png" alt="footer-logo">
        </a>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="footer-text">
        {{ $t("footer-text") }}
      </el-col>
    </el-row>
  </el-footer>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class FooterComponent extends Vue {

    }
</script>

<style scoped lang="scss">
.el-footer {
  padding: 130px 0;
  text-align: center;
  background: #9b9b9b;
  @media (max-width: 768px) {
    padding: 60px 0;
  }
}
  .footer-logo {
    display: inline-block;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }
  .footer-text {
    font-size: 18px;
    color: #fff;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
</style>
