<template>
  <el-row type="flex" justify="center" class="article-page">
    <el-col :xs="23" :sm="22" :md="20" :lg="16" :xls="16">
      <h1>{{ articleById.title }}</h1>
      <img :src="articleById.image" alt="article picture" />
      <p>{{ articleById.text }}</p>
      <el-divider></el-divider>
      <el-row type="flex" justify="space-between">
        <el-col :span="12" class="article-information text-left">
          {{ articleById.author }}
        </el-col>
        <el-col :span="12" class="article-information text-right">
          {{ articleById.postTime }}
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="article-control">
        <el-col :span="12">
          <el-button type="primary" @click="backToArticles">
            {{ $t("article.back-button") }}
          </el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Articles = namespace("Articles");

@Component({
  name: "ArticlePage"
})
export default class ArticlePage extends Vue {
  @Articles.Getter getById: any;
  @Articles.State fromApi: any;
  @Articles.Action fetchApi: any;

  get articleById() {
    return this.getById(this.$route.params.id);
  }

  backToArticles() {
    this.$router.go(-1);
  }

  created() {
      this.fetchApi();
  }
}
</script>

<style scoped lang="scss">
.article-page {
  margin-bottom: 30px;
  img {
    width: 100%;
  }
}
.article-information {
  color: #5c5c5c;
}
.article-control {
  margin-top: 20px;
}
</style>
