webpackJsonp([20],{iqAh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("P9l9"),i=a("mtWM"),s=a.n(i),n={name:"basetable",data:function(){return{baseUrl:l.k,message:"first",showHeader:!1,loginBg:[],index:[],newCar:[],secondHand:[],chaozhi:[],jiangjia:[],zhunxinche:[],baokuan:[],qianquanguo:[],uploadLimit:1,showFileList:!1,addVisible:!1,editVisible:!1,editLoginVisible:!1,delVisible:!1,form:{},upload:l._7,attr:"",imageUrl:""}},created:function(){this.getData()},methods:{getData:function(){var t=this;s.a.get(l.V).then(function(e){console.log(e),t.loginBg=[],t.index=[],t.newCar=[],t.secondHand=[],t.chaozhi=[],t.jiangjia=[],t.zhunxinche=[],t.baokuan=[],t.qianquanguo=[],e.data.data.forEach(function(e){1==e.attr?t.index.push(e):2==e.attr?t.newCar.push(e):3==e.attr?t.secondHand.push(e):4==e.attr||5==e.attr?t.chaozhi.push(e):6==e.attr||7==e.attr?t.jiangjia.push(e):8==e.attr||9==e.attr?t.zhunxinche.push(e):10==e.attr||11==e.attr?t.baokuan.push(e):12==e.attr||13==e.attr?t.qianquanguo.push(e):14==e.attr&&t.loginBg.push(e)})})},add:function(){this.imageUrl="",this.addVisible=!0},handleEditLogin:function(t,e){this.editLoginVisible=!0,this.idx=e.id,this.attr=e.attr,this.imageUrl=e.pic},handleEdit:function(t,e){this.idx=e.id,this.attr=e.attr,this.editVisible=!0,this.imageUrl=e.pic},handleDelete:function(t,e){this.idx=e.id,this.delVisible=!0,console.log(e)},saveAdd:function(){var t=this;s.a.get(l.W,{params:{pic:this.imageUrl,attr:1}}).then(function(e){"success"==e.data.msg?(t.addVisible=!1,t.$message.success("添加成功"),t.getData()):(t.addVisible=!1,t.$message.error("添加失败"))})},saveEdit:function(){var t=this;s.a.post(l.Y,{id:this.idx,pic:this.imageUrl,attr:this.attr}).then(function(e){"success"==e.data.msg?(t.editVisible=!1,t.editLoginVisible=!1,t.$message.success("修改成功"),t.imageUrl="",t.getData()):(t.editLoginVisible=!1,t.editVisible=!1,t.$message.error("修改失败"))})},deleteRow:function(){var t=this;s.a.post(l.X,{id:this.idx}).then(function(e){"success"==e.data.msg?(t.getData(),t.$message.success("删除成功"),t.delVisible=!1):(t.$message.error("删除失败"),t.delVisible=!1)})},handleUpload:function(t){console.log(t)},handleSuccess:function(t,e,a){console.log(t),this.imageUrl=this.baseUrl+t.path,console.log(this.imageUrl)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"container"},[a("el-tabs",{model:{value:t.message,callback:function(e){t.message=e},expression:"message"}},[a("el-tab-pane",{attrs:{label:"小程序入口",name:"first"}},["first"===t.message?[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.loginBg,border:""}},[a("el-table-column",{attrs:{label:"广告图",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"300px",height:"450px"},attrs:{src:t.row.pic}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"250",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleEditLogin(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1)]:t._e()],2),t._v(" "),a("el-tab-pane",{attrs:{label:"首页",name:"second"}},[a("div",{staticClass:"handle-box"},[a("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("新增轮播")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.index,border:""}},[a("el-table-column",{attrs:{label:"轮播图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.pic}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"250",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"买新车",name:"third"}},["third"===t.message?[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.newCar,border:""}},[a("el-table-column",{attrs:{label:"广告图",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.pic}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"250",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1)]:t._e()],2),t._v(" "),a("el-tab-pane",{attrs:{label:"买二手车",name:"fourth"}},["fourth"===t.message?[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.secondHand,border:""}},[a("el-table-column",{attrs:{label:"广告图",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.pic}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"250",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1)]:t._e()],2),t._v(" "),a("el-tab-pane",{attrs:{label:"超值特卖",name:"fifth"}},["fifth"===t.message?[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.chaozhi,border:""}},[a("el-table-column",{attrs:{label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.pic}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"属性",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[4==e.row.attr?a("span",[t._v("首页入口图")]):5==e.row.attr?a("span",[t._v("车辆列表广告图")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"250",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1)]:t._e()],2),t._v(" "),a("el-tab-pane",{attrs:{label:"降价急售",name:"sixth"}},["sixth"===t.message?[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.jiangjia,border:""}},[a("el-table-column",{attrs:{label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.pic}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"属性",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[6==e.row.attr?a("span",[t._v("首页入口图")]):7==e.row.attr?a("span",[t._v("车辆列表广告图")]):a("span",[t._v("1")])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"250",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1)]:t._e()],2),t._v(" "),a("el-tab-pane",{attrs:{label:"准新车",name:"seventh"}},["seventh"===t.message?[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.zhunxinche,border:""}},[a("el-table-column",{attrs:{label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.pic}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"属性",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[8==e.row.attr?a("span",[t._v("首页入口图")]):9==e.row.attr?a("span",[t._v("车辆列表广告图")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"250",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1)]:t._e()],2),t._v(" "),a("el-tab-pane",{attrs:{label:"爆款SUV",name:"eighth"}},["eighth"===t.message?[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.baokuan,border:""}},[a("el-table-column",{attrs:{label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.pic}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"属性",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[10==e.row.attr?a("span",[t._v("首页入口图")]):11==e.row.attr?a("span",[t._v("车辆列表广告图")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"250",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1)]:t._e()],2),t._v(" "),a("el-tab-pane",{attrs:{label:"可迁全国",name:"ninth"}},["ninth"===t.message?[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.qianquanguo,border:""}},[a("el-table-column",{attrs:{label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.pic}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"属性",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[12==e.row.attr?a("span",[t._v("首页入口图")]):13==e.row.attr?a("span",[t._v("车辆列表广告图")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"250",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1)]:t._e()],2)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"新增轮播",visible:t.addVisible,width:"30%"},on:{"update:visible":function(e){t.addVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"50px",align:"center"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.upload,name:"pic","auto-upload":!0,"show-file-list":t.showFileList,"on-success":t.handleSuccess}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{"font-size":"36px"}})])],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.saveAdd}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"30%"},on:{"update:visible":function(e){t.editVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"50px",align:"center"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.upload,name:"pic","show-file-list":t.showFileList,"on-success":t.handleSuccess}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("div",{staticStyle:{"margin-top":"10px",color:"#000"}},[t._v("\n            \ttips:推荐尺寸  360X180\n            ")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:t.editLoginVisible,width:"30%"},on:{"update:visible":function(e){t.editLoginVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"50px",align:"center"}},[a("el-upload",{staticClass:"avatar-uploader1",attrs:{action:t.upload,name:"pic","show-file-list":t.showFileList,"on-success":t.handleSuccess}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("div",{staticStyle:{"margin-top":"10px",color:"#000"}},[t._v("\n            \ttips:推荐尺寸  375x667\n            ")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editLoginVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[a("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var o=a("VU/8")(n,r,!1,function(t){a("q0TQ")},"data-v-07db6eb1",null);e.default=o.exports},q0TQ:function(t,e){}});