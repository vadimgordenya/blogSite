<template>
  <el-row type="flex" justify="center" :class="viewMode ? '' : 'block-el-row'">
    <el-col
      :ex="23"
      :sm="22"
      :md="20"
      :lg="viewMode ? 18 : 22"
      :xlg="viewMode ? 18 : 22"
      class="post-view"
      v-if="item.title.toLowerCase().search(search.toLowerCase()) !== -1 || search.length === 0"
    >
      <el-row type="flex" justify="center">
        <el-col :span="viewMode ? 12 : 24">
          <h3>{{ item.title }}</h3>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" :class="viewMode ? 'post-sub-title' : 'post-sub-title-block'">
        <el-col :span="viewMode ? 5 : 24">
          {{ $t("article.destination-title") }}
          <strong>{{ item.destination }}</strong>
        </el-col>
        <el-col :span="viewMode ? 5 : 24">
          {{ $t("article.added-title") }}
          <strong>{{ item.author }}</strong>
        </el-col>
        <el-col :span="viewMode ? 5 : 24">
          {{ item.postTime }}
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="viewMode ? 16 : 24">
          <img :src="item.image" alt="post picture" />
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="viewMode ? 12 : 24">
          <p>{{ truncate(item.text, 200) }}</p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col class="post-control" :span="16">
          <el-button @click="viewMore(item.id, item)">
            {{ $t("view-more-button") }}
          </el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Item } from "@/types";

@Component
export default class ArticleView extends Vue {
  @Prop() item?: Item;
  @Prop({ default: "" }) search?: string;

  @Prop({required: true, default: true}) viewMode?: boolean

  truncate(str: string, n: number): string {
    return str.length > n ? `${str.substr(0, n - 1)} ...` : str;
  }

  viewMore(id: string, item: any) {
    this.$router.push({
      name: "Article",
      params: {
        id,
        item
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.post-view {
  margin-bottom: 40px;
  &:first-child {
    margin-top: 20px;
  }
  h3 {
    margin: 0;
    font-size: 35px;
    line-height: 43px;
    text-align: center;
    color: #1e1e1e;
  }
  img {
    width: 100%;
  }
}
.post-sub-title {
  margin: 25px 0;
  div {
    text-align: center;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #9b9b9b;
    strong {
      color: #4a4a4a;
    }
  }
}
.post-control {
  text-align: center;
  margin: 15px 0;
}
  .block-el-row {
    width: 50%;
    @media (max-width: 480px) {
      width: 100%;
    }
  }
  .post-sub-title-block {
    flex-direction: column;
    div {
      padding: 5px;
    }
  }
</style>
