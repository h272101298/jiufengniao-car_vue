webpackJsonp([14],{g4Q1:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("mtWM"),p=e.n(s),n=e("P9l9"),i={data:function(){return{has:!0,changeText:!1,appid:"",appsecret:""}},methods:{save:function(){var a=this;p.a.get(n._8,{params:{appid:this.appid,appsecret:this.appsecret}}).then(function(t){"success"==t.data.msg&&(a.changeText=!1,a.has=!0,a.$message.success("修改成功"))})},change:function(){this.changeText=!0,this.has=!1}},created:function(){var a=this;p.a.get(n._7).then(function(t){null!=t.data.data[0].appid||void 0!=t.data.data[0].appid||""!=t.data.data[0].appid?(a.appid=t.data.data[0].appid,a.appsecret=t.data.data[0].appsecret,a.has=!0):a.has=!1})}},c={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"cItem"},[e("span",[a._v("appID:")]),a._v(" "),a.has?e("span",[a._v(a._s(a.appid))]):e("el-input",{staticClass:"handle-input mr10",staticStyle:{"margin-right":"50px"},attrs:{placeholder:"请输入appId"},model:{value:a.appid,callback:function(t){a.appid=t},expression:"appid"}})],1),a._v(" "),e("div",{staticClass:"cItem"},[e("span",[a._v("appSecret:")]),a._v(" "),a.has?e("span",[a._v(a._s(a.appsecret))]):e("el-input",{staticClass:"handle-input mr10",staticStyle:{"margin-right":"50px"},attrs:{placeholder:"请输入appSecret"},model:{value:a.appsecret,callback:function(t){a.appsecret=t},expression:"appsecret"}})],1),a._v(" "),a.changeText?e("el-button",{attrs:{type:"primary"},on:{click:a.save}},[a._v("保存")]):e("el-button",{attrs:{type:"primary"},on:{click:a.change}},[a._v("修改")])],1)},staticRenderFns:[]};var r=e("VU/8")(i,c,!1,function(a){e("iuXU")},"data-v-4836d1d4",null);t.default=r.exports},iuXU:function(a,t){}});