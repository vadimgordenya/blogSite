<template>
  <div>
    <el-header height="auto">
      <el-row type="flex" justify="space-between">
        <el-col class="header-logo" :span="12">
          <a href="#">
            <img src="@/assets/logo.png" alt="logo" />
          </a>
        </el-col>
        <el-col class="header-menu" :span="12">
          <el-button plain size="mini" class="mobile-nav" @click="menuNav">
            <i v-if="menuIsActive" class="el-icon-close"></i>
            <i v-else class="el-icon-menu"></i>
          </el-button>
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            v-bind:class="{ '': !menuIsActive, isOpen: menuIsActive }"
          >
            <el-menu-item index="1">
              <router-link to="/" data-test="home">
                {{ $t("menu.home") }}
              </router-link>
            </el-menu-item>
            <el-menu-item index="2" disabled>
              <router-link to="/about">{{ $t("menu.info") }}</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/about" data-test="about">
                {{ $t("menu.about") }}
              </router-link>
            </el-menu-item>
          </el-menu>
          <el-radio-group v-model="lang" :change="switchLang()" size="mini">
            <el-radio-button data-test="ru" label="ru">Ru</el-radio-button>
            <el-radio-button data-test="en" label="en">En</el-radio-button>
          </el-radio-group>
          <el-button
            data-test="logout"
            class="logout-btn"
            type="info"
            size="mini"
            @click="logout"
          >
            <i class="el-icon-toilet-paper"></i>
            <span class="text-block">{{ $t("buttons.button-logout") }}</span>
          </el-button>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeaderComponent extends Vue {
  activeIndex: string = "1";
  lang: string = "ru";
  menuIsActive: boolean = false;

  menuNav() {
    this.menuIsActive = !this.menuIsActive;
  }

  switchLang() {
    this.$i18n.locale = this.lang;
  }

  logout() {
    window.localStorage.removeItem("currentUser");
    this.$router.push({ name: "Login" });
  }
}
</script>

<style scoped lang="scss">
.el-header {
  padding: 0;
  position: relative;
}
.header-menu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.el-menu--horizontal.el-menu {
  border: none;
  .el-menu-item {
    background: transparent;
    a {
      font-size: 16px;
      text-decoration: none;
    }
    &.is-active {
      border: none;
    }
  }
  @media (max-width: 768px) {
    display: none;
    opacity: 0;
    background: #585757;
  }
  &.isOpen {
    position: absolute;
    width: 100%;
    top: 60px;
    display: block;
    opacity: 1;
  }
}

.mobile-nav {
  display: none;
  margin: 15px 10px 0 0;
  font-size: 14px;
  height: 29px;
  padding: 0 5px;
  @media (max-width: 768px) {
    display: block;
  }
}
.header-logo {
  padding: 5px 10px;
  display: flex;
}

.el-radio-group {
  margin: 15px 15px 0 0;
}

.logout-btn {
  margin: 15px 15px 0 0;
  font-size: 14px;
  height: 29px;
  @media (max-width: 768px) {
    .text-block {
      display: none;
    }
  }
}
</style>
