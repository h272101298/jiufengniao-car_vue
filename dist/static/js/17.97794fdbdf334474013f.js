webpackJsonp([17],{"3hXX":function(e,r){},GF4k:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=s("P9l9"),o=s("mtWM"),a=s.n(o),n={data:function(){return{ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(console.log(e),!e)return console.log("error submit!!"),!1;sessionStorage.setItem("ms_username",r.ruleForm.username),a.a.post(t.Z,{username:r.ruleForm.username,password:r.ruleForm.password}).then(function(e){console.log(e),"帐号或密码错误"==e.data.msg?r.$message.error(e.data.msg):(r.$router.push("/"),sessionStorage.setItem("car",e.data.role.car),sessionStorage.setItem("appoint",e.data.role.appoint),sessionStorage.setItem("brand",e.data.role.brand),sessionStorage.setItem("car_config",e.data.role.car_config),sessionStorage.setItem("info",e.data.role.info),sessionStorage.setItem("perm",e.data.role.perm),sessionStorage.setItem("system",e.data.role.system),sessionStorage.setItem("adv",e.data.role.adv))})})}}},l={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"ms-login"},[s("div",{staticClass:"ms-title"},[e._v("众利后台管理系统")]),e._v(" "),s("el-form",{ref:"ruleForm",staticClass:"ms-content",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0px"}},[s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{attrs:{placeholder:"username"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}},[s("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-people"},slot:"prepend"})],1)],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"password"},nativeOn:{keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.submitForm("ruleForm")}},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}},[s("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1)],1),e._v(" "),s("div",{staticClass:"login-btn"},[s("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var i=s("VU/8")(n,l,!1,function(e){s("3hXX")},"data-v-3165ab92",null);r.default=i.exports}});