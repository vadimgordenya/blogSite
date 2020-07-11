<template>
  <div>
    <h1>Login</h1>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="Email" prop="email">
              <el-input
                type="email"
                v-model="ruleForm.email"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >Submit</el-button
              >
              <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class LoginPage extends Vue {
  validateEmail = (rule: any, value: string, callback: any) => {
    if (value === "") {
      callback(new Error("Please input the Email"));
    } else {
      callback();
    }
  };

  ruleForm = {
    email: "",
    password: ""
  };

  get rules() {
    const rules = {
      email: [
        { required: true, message: "Please input Email", trigger: "blur" },
        { validator: this.validateEmail, trigger: "blur" }
      ],
      password: [
        { required: true, message: "Please input password", trigger: "blur" },
        {
          min: 3,
          max: 50,
          message: "Length should be 3 to 50",
          trigger: "blur"
        }
      ]
    };

    return rules;
  }

  submitForm(formName: any) {
    (this.$refs[formName] as any).validate((valid: any) => {
      if (valid) {
        axios
          .post("http://localhost:3000/login", {
            email: this.ruleForm.email,
            password: this.ruleForm.password
          })
          .then(response => {
            const token = response.data;
            localStorage.setItem("currentUser", JSON.stringify(token));
            this.$router.push({ name: "Home" });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }

  resetForm(formName: any) {
    const ref: any = this.$refs[formName];
    ref.resetFields();
  }
}
</script>

<style scoped lang="scss"></style>
