webpackJsonp([8],{Yzwn:function(t,e){},gFdG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mtWM"),l=a.n(i),n=a("P9l9"),s={name:"basetable",data:function(){return{url:"./static/vuetable.json",tableData:[],cur_page:1,limit:10,total:10,multipleSelection:[],brandSelect:"",searchModel:"",yearSelect:"",brandOptions:[],yearOptions:[2018,2017,2016,2015,2014,2013,2012,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2e3],del_list:[],is_search:!1,editVisible:!1,delVisible:!1,tuiVisible:!1,form:{},idx:-1,hasSearch:!1,tuiForm:{}}},created:function(){this.getData()},methods:{tuisong:function(t,e){this.tuiVisible=!0,this.idx=e.id,console.log(e),this.tuiForm.name=e.brand+e.type,this.tuiForm.price=e.price,this.tuiForm.intro=""},tuiConfirm:function(){var t=this;l.a.post(n.b,{name:this.tuiForm.name,price:this.tuiForm.price,article:this.tuiForm.intro,url:"pages/carDetail/carDetail?cid="+this.idx}).then(function(e){1==e.data&&(t.$message.success("推送成功!"),t.tuiVisible=!1)})},handleCurrentChange:function(t){this.cur_page=t,1==this.hasSearch?this.getSearchData():this.getData()},getData:function(){var t=this;l.a.get(n.x,{params:{page:this.cur_page,limit:this.limit,new:2}}).then(function(e){t.tableData=e.data.data,t.total=e.data.total}),l.a.get(n.r).then(function(e){t.brandOptions=e.data.data});var e=(new Date).getFullYear();this.yearOptions[0]!=e&&this.yearOptions.unshift(e)},getSearchData:function(){var t=this;l.a.get(n.K,{params:{page:this.cur_page,limit:this.limit,brand:this.brandSelect,year:this.yearSelect,text:this.searchModel,new:2}}).then(function(e){t.hasSearch=!0,t.tableData=e.data.data,t.total=e.data.total})},search:function(){this.cur_page=1,this.getSearchData()},addOne:function(){this.$router.push("addCar?addType=secondHand")},handleEdit:function(t,e){this.idx=e.id,this.$router.push("editCar?rid="+e.id+"&editType=secondHand")},handleDelete:function(t,e){this.idx=e.id,this.delVisible=!0},deleteRow:function(){var t=this;l.a.post(n.I,{id:this.idx}).then(function(e){"success"==e.data.msg?(t.$message.success("删除成功"),t.delVisible=!1,t.getData()):(t.$message.error("删除失败"),t.delVisible=!1)})},shelves:function(t,e){var a=this;l.a.get(n.y,{params:{type:1,id:e.id}}).then(function(t){"success"==t.data.msg&&(a.$message.success("修改成功"),a.getData())})},recommend:function(t,e){var a=this;l.a.get(n.y,{params:{type:2,id:e.id}}).then(function(t){"success"==t.data.msg&&(a.$message.success("修改成功"),a.getData())})},reset:function(){this.searchModel="",this.brandSelect="",this.yearSelect="",this.cur_page=1,this.getSearchData()}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:t.addOne}},[t._v("新增车辆")]),t._v(" "),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"选择品牌"},model:{value:t.brandSelect,callback:function(e){t.brandSelect=e},expression:"brandSelect"}},t._l(t.brandOptions,function(t,e){return a("el-option",{key:e,attrs:{label:t.brand,value:t.brand}})})),t._v(" "),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"选择年份"},model:{value:t.yearSelect,callback:function(e){t.yearSelect=e},expression:"yearSelect"}},t._l(t.yearOptions,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})})),t._v(" "),a("el-input",{staticClass:"handle-input mr10",staticStyle:{"margin-right":"20px"},attrs:{placeholder:"搜索关键字"},model:{value:t.searchModel,callback:function(e){t.searchModel=e},expression:"searchModel"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),a("el-button",{attrs:{icon:"search"},on:{click:t.reset}},[t._v("重置")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"main_id",label:"编号",width:"55",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pic",label:"图片",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"100px",height:"60px"},attrs:{src:t.row.pic}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"brand",label:"品牌",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"year",label:"年份",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"型号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"style",label:"款式",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"价格",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"shelves",label:"上架状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.shelves?a("span",{staticClass:"shelves",on:{click:function(a){t.shelves(e.$index,e.row)}}},[t._v("上架")]):a("span",{staticClass:"shelves noshelves",on:{click:function(a){t.shelves(e.$index,e.row)}}},[t._v("下架")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"recommend",label:"首页推荐",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.recommend?a("span",{staticClass:"recommend",on:{click:function(a){t.recommend(e.$index,e.row)}}},[t._v("是")]):a("span",{staticClass:"recommend norecommend",on:{click:function(a){t.recommend(e.$index,e.row)}}},[t._v("否")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{on:{click:function(a){t.tuisong(e.$index,e.row)}}},[t._v("推送")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[a("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"消息推送",visible:t.tuiVisible,width:"500px"},on:{"update:visible":function(e){t.tuiVisible=e}}},[a("el-form",{attrs:{model:t.tuiForm,"label-width":"50px"}},[a("el-form-item",{attrs:{label:"车型"}},[a("el-input",{model:{value:t.tuiForm.name,callback:function(e){t.$set(t.tuiForm,"name",e)},expression:"tuiForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"价格"}},[a("el-input",{attrs:{disabled:""},model:{value:t.tuiForm.price,callback:function(e){t.$set(t.tuiForm,"price",e)},expression:"tuiForm.price"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"简介"}},[a("el-input",{attrs:{type:"textarea",autosize:!0},model:{value:t.tuiForm.intro,callback:function(e){t.$set(t.tuiForm,"intro",e)},expression:"tuiForm.intro"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.tuiVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.tuiConfirm}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(s,r,!1,function(t){a("Yzwn")},"data-v-b335100a",null);e.default=o.exports}});