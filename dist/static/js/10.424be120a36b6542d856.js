webpackJsonp([10],{IuiD:function(t,e){},"u/24":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mtWM"),l=a.n(n),i=a("P9l9"),r={name:"userList",data:function(){return{cur_page:1,limit:10,total:null,userList:[]}},created:function(){this.getData()},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;l.a.get(i._7,{params:{page:this.cur_page,limit:this.limit}}).then(function(e){console.log(e),t.userList=e.data.data,t.total=e.data.data.length})},handleSelectionChange:function(t){this.multipleSelection=t}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"container"},[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.userList,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"main_id",label:"编号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"用户名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pic",label:"用户头像",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.pic,width:"50",height:"50"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"add_time",label:"注册时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.add_time.slice(0,10)))])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var c=a("VU/8")(r,s,!1,function(t){a("IuiD")},"data-v-7d1d56fb",null);e.default=c.exports}});