webpackJsonp([11],{"4l+6":function(t,e){},VrxG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("mtWM"),s=i.n(a),l=i("P9l9"),n={name:"basetable",data:function(){return{url:"./static/vuetable.json",tableData:[],del_list:[],addVisible:!1,editVisible:!1,delVisible:!1,form:{name:""},idx:-1,pid:null}},created:function(){this.getData()},methods:{getData:function(){var t=this,e=location.href.slice(location.href.indexOf("=")+1);this.pid=e,s.a.get(l.A,{params:{pid:e}}).then(function(e){t.tableData=e.data.data})},goBack:function(){this.$router.back(-1)},addOne:function(){this.addVisible=!0,this.form.name=""},handleEdit:function(t,e){this.idx=e.id;this.tableData[t];this.form.name=e.name,this.editVisible=!0},handleDelete:function(t,e){this.idx=e.id,this.delVisible=!0},saveAdd:function(){var t=this;s.a.get(l.B,{params:{pid:this.pid,name:this.form.name}}).then(function(e){"success"==e.data.msg?(t.addVisible=!1,t.$message.success("添加成功"),t.getData()):(t.addVisible=!1,t.$message.error("添加失败"))})},saveEdit:function(){var t=this;s.a.post(l.D,{id:this.idx,name:this.form.name}).then(function(e){"success"==e.data.msg?(t.$message.success("修改成功"),t.editVisible=!1,t.getData()):(t.$message.error("修改失败"),t.editVisible=!1)})},deleteRow:function(){var t=this;s.a.post(l.C,{id:this.idx}).then(function(e){"success"==e.data.msg?(t.$message.success("删除成功"),t.delVisible=!1,t.getData()):(t.$message.error("删除失败"),t.delVisible=!1)})}},beforeRouteLeave:function(t,e,i){console.log("离开了"),this.$destroy(),i()}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table"},[i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box",staticStyle:{display:"flex","justify-content":"space-between"}},[i("el-button",{on:{click:t.goBack}},[t._v("返回")]),t._v(" "),i("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.addOne}},[t._v("新增")])],1),t._v(" "),i("el-table",{staticClass:"table",attrs:{data:t.tableData,border:""}},[i("el-table-column",{attrs:{prop:"name",label:"子配置名称",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary"},on:{click:function(i){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:function(i){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"新增",visible:t.addVisible,width:"30%"},on:{"update:visible":function(e){t.addVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"子配置名称"}},[i("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.addVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.saveAdd}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"30%"},on:{"update:visible":function(e){t.editVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"子配置名称"}},[i("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"提示",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[i("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var r=i("VU/8")(n,o,!1,function(t){i("4l+6")},"data-v-6f67fb08",null);e.default=r.exports}});