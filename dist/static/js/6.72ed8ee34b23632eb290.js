webpackJsonp([6],{"36iX":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mtWM"),l=a.n(n),r=a("P9l9"),i={name:"basetable",data:function(){return{url:"./static/vuetable.json",tableData:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;l.a.get(r.Q).then(function(e){t.tableData=e.data.data})},show:function(t,e){this.$router.push("screenConfigureDetail?rid="+e.id)}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"container"},[a("el-table",{staticClass:"table",attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"配置名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){t.show(e.$index,e.row)}}},[t._v("查看子配置")])]}}])})],1)],1)])},staticRenderFns:[]};var c=a("VU/8")(i,s,!1,function(t){a("lfTp")},"data-v-d217a082",null);e.default=c.exports},lfTp:function(t,e){}});