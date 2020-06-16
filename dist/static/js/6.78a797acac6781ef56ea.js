webpackJsonp([6],{"IT+p":function(e,t){},MwSc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("mtWM"),n=a.n(l),s=a("P9l9"),i={name:"basetable",data:function(){return{url:"./static/vuetable.json",tableData:[],cur_page:1,limit:10,total:10,multipleSelection:[],brandSelect:"",searchModel:"",yearSelect:"",brandOptions:[],yearOptions:[2018,2017,2016,2015,2014,2013,2012,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2e3],del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{},idx:-1,hasSearch:!1}},created:function(){this.getData()},methods:{handleCurrentChange:function(e){this.cur_page=e,1==this.hasSearch?this.getSearchData():this.getData()},getData:function(){var e=this;n.a.get(s.u,{params:{page:this.cur_page,limit:this.limit,new:1}}).then(function(t){e.tableData=t.data.data,e.total=t.data.total}),n.a.get(s.o).then(function(t){e.brandOptions=t.data.data});var t=(new Date).getFullYear();this.yearOptions[0]!=t&&this.yearOptions.unshift(t)},getSearchData:function(){var e=this;n.a.get(s.J,{params:{page:this.cur_page,limit:this.limit,brand:this.brandSelect,year:this.yearSelect,text:this.searchModel,new:1}}).then(function(t){e.hasSearch=!0,e.tableData=t.data.data,e.total=t.data.total})},search:function(){this.cur_page=1,this.getSearchData()},addOne:function(){this.$router.push("addCar?addType=newCar")},handleEdit:function(e,t){this.idx=t.id,this.$router.push("editCar?rid="+t.id+"&editType=newCar")},handleDelete:function(e,t){this.idx=t.id,this.delVisible=!0},deleteRow:function(){var e=this;n.a.post(s.H,{id:this.idx}).then(function(t){"success"==t.data.msg?(e.$message.success("删除成功"),e.delVisible=!1,e.getData()):(e.$message.error("删除失败"),e.delVisible=!1)})},shelves:function(e,t){var a=this;n.a.get(s.w,{params:{type:1,id:t.id}}).then(function(e){"success"==e.data.msg&&(a.$message.success("修改成功"),a.getData())})},recommend:function(e,t){var a=this;n.a.get(s.w,{params:{type:2,id:t.id}}).then(function(e){"success"==e.data.msg&&(a.$message.success("修改成功"),a.getData())})},reset:function(){this.searchModel="",this.brandSelect="",this.yearSelect="",this.cur_page=1,this.getSearchData()}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.addOne}},[e._v("新增车辆")]),e._v(" "),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"选择品牌"},model:{value:e.brandSelect,callback:function(t){e.brandSelect=t},expression:"brandSelect"}},e._l(e.brandOptions,function(e,t){return a("el-option",{key:t,attrs:{label:e.brand,value:e.brand}})})),e._v(" "),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"选择年份"},model:{value:e.yearSelect,callback:function(t){e.yearSelect=t},expression:"yearSelect"}},e._l(e.yearOptions,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),e._v(" "),a("el-input",{staticClass:"handle-input mr10",staticStyle:{"margin-right":"20px"},attrs:{placeholder:"搜索关键字"},model:{value:e.searchModel,callback:function(t){e.searchModel=t},expression:"searchModel"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{icon:"search"},on:{click:e.reset}},[e._v("重置")])],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"main_id",label:"编号",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pic",label:"图片",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{width:"100px",height:"60px"},attrs:{src:e.row.pic}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"brand",label:"品牌",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"year",label:"年份",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"型号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"style",label:"款式",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"价格",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"shelves",label:"上架状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.shelves?a("span",{staticClass:"shelves",on:{click:function(a){e.shelves(t.$index,t.row)}}},[e._v("上架")]):a("span",{staticClass:"shelves noshelves",on:{click:function(a){e.shelves(t.$index,t.row)}}},[e._v("下架")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"recommend",label:"首页推荐",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.recommend?a("span",{staticClass:"recommend",on:{click:function(a){e.recommend(t.$index,t.row)}}},[e._v("是")]):a("span",{staticClass:"recommend norecommend",on:{click:function(a){e.recommend(t.$index,t.row)}}},[e._v("否")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(i,r,!1,function(e){a("IT+p")},"data-v-d105674c",null);t.default=c.exports}});