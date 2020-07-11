<template>
  <div class="hello">
    <h1>{{ text }}</h1>
    <el-button type="primary" @click="clickEvent">Click me</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  text = "Hello";

  get newText() {
    return `${this.text} from TS`;
  }

  created() {
    this.text = "Hello world";

    console.log(this.text);
  }

  clickEvent() {
    this.text = "Hello from click";

    console.log(this.text);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
