webpackJsonp([21],{XV2p:function(a,e){},auWr:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t("mtWM"),n=t.n(s),d=t("P9l9"),c={data:function(){return{has:!0,changeText:!1,address:"",name:"",phone:""}},methods:{save:function(){var a=this;n.a.get(d.Q,{params:{phone:this.phone,name:this.name,address:this.address}}).then(function(e){"success"==e.data.msg&&(a.changeText=!1,a.has=!0,a.$message.success("修改成功"))})},change:function(){this.changeText=!0,this.has=!1}},created:function(){var a=this;n.a.get(d.P).then(function(e){null!=e.data.data.address||void 0!=e.data.data.address||""!=e.data.data.address?(a.address=e.data.data.address,a.name=e.data.data.name,a.phone=e.data.data.phone,a.has=!0):a.has=!1})}},i={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"cItem"},[t("span",[a._v("公司名称:")]),a._v(" "),a.has?t("span",[a._v(a._s(a.name))]):t("el-input",{staticClass:"handle-input mr10",staticStyle:{"margin-right":"50px"},attrs:{placeholder:"请输入appId"},model:{value:a.name,callback:function(e){a.name=e},expression:"name"}})],1),a._v(" "),t("div",{staticClass:"cItem"},[t("span",[a._v("联系地址:")]),a._v(" "),a.has?t("span",[a._v(a._s(a.address))]):t("el-input",{staticClass:"handle-input mr10",staticStyle:{"margin-right":"50px"},attrs:{placeholder:"请输入appSecret"},model:{value:a.address,callback:function(e){a.address=e},expression:"address"}})],1),a._v(" "),t("div",{staticClass:"cItem"},[t("span",[a._v("联系电话:")]),a._v(" "),a.has?t("span",[a._v(a._s(a.phone))]):t("el-input",{staticClass:"handle-input mr10",staticStyle:{"margin-right":"50px"},attrs:{placeholder:"请输入appSecret"},model:{value:a.phone,callback:function(e){a.phone=e},expression:"phone"}})],1),a._v(" "),a.changeText?t("el-button",{attrs:{type:"primary"},on:{click:a.save}},[a._v("保存")]):t("el-button",{attrs:{type:"primary"},on:{click:a.change}},[a._v("修改")])],1)},staticRenderFns:[]};var r=t("VU/8")(c,i,!1,function(a){t("XV2p")},"data-v-0e01fc12",null);e.default=r.exports}});