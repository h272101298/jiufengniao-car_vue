webpackJsonp([12],{EBd9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("mtWM"),s=a.n(l),i=a("P9l9"),c={name:"orderList",data:function(){return{orderList:[],cur_page:1,limit:10,total:null,multipleSelection:[],selectStatus_cate:"",selectType_cate:"",select_word:"",del_list:[],is_search:!1,Visible:!1,delVisible:!1,idx:-1,form:{},hasSearch:!1,checkTypeName:"预约卖车",searchList:[],dataValue1:"",dataValue2:""}},created:function(){this.getData()},methods:{handleCurrentChange:function(e){this.cur_page=e,1==this.hasSearch?this.getSecondData():this.getData()},selectStatus:function(e){this.getSecondData()},selectType:function(e){this.getSecondData()},getData:function(){var e=this;s.a.get(i.g,{params:{page:this.cur_page,limit:this.limit}}).then(function(t){e.orderList=t.data.data,e.total=t.data.total})},getSecondData:function(){var e=this;s.a.get(i.j,{params:{page:this.cur_page,limit:this.limit,search:this.select_word,start:this.dataValue1,end:this.dataValue2,usertype:this.selectType_cate,type:this.selectStatus_cate}}).then(function(t){e.hasSearch=!0,e.orderList=t.data.data,e.total=t.data.total})},search:function(){this.getSecondData()},check:function(e,t){var a=this;this.Visible=!0,this.checkTypeName="预约"+t.usertype,this.orderType=t,s.a.get(i.i,{params:{aid:t.id}}).then(function(e){a.form=e.data.data})},handle:function(e,t){var a=this;console.log(t.id),s.a.get(i._3,{params:{aid:t.id}}).then(function(e){console.log(e),"success"==e.data.msg&&a.getData()})},reset:function(){this.selectStatus_cate="",this.selectType_cate="",this.select_word="",this.dataValue1="",this.dataValue2="",this.cur_page=1,this.getSecondData()},handleDelete:function(e,t){this.delVisible=!0,this.idx=t.id},deleteRow:function(){var e=this;s.a.post(i.h,{aid:this.idx}).then(function(t){"success"==t.data.msg&&(e.delVisible=!1,e.$message.success("删除成功！"),e.getData())})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"筛选处理状态"},on:{change:function(t){e.selectStatus(t)}},model:{value:e.selectStatus_cate,callback:function(t){e.selectStatus_cate=t},expression:"selectStatus_cate"}},[a("el-option",{key:"1",attrs:{label:"已处理",value:"1"}}),e._v(" "),a("el-option",{key:"2",attrs:{label:"未处理",value:"2"}})],1),e._v(" "),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"筛选预约类型"},on:{change:function(t){e.selectType(t)}},model:{value:e.selectType_cate,callback:function(t){e.selectType_cate=t},expression:"selectType_cate"}},[a("el-option",{key:"1",attrs:{label:"买车",value:"1"}}),e._v(" "),a("el-option",{key:"2",attrs:{label:"卖车",value:"2"}})],1),e._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"搜索名称/电话"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v(" "),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.dataValue1,callback:function(t){e.dataValue1=t},expression:"dataValue1"}}),e._v("\n\t\t\t    -\n\t\t\t    "),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.dataValue2,callback:function(t){e.dataValue2=t},expression:"dataValue2"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{icon:"search"},on:{click:e.reset}},[e._v("重置")])],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.orderList,border:""}},[a("el-table-column",{attrs:{prop:"main_id",label:"编号",width:"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"usertype",label:"预约类型",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"预约名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"预约电话",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"date",label:"预约时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.date.slice(0,10)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"处理状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["已处理"==t.row.type?a("span",{staticClass:"hasHandle"},[e._v(e._s(t.row.type))]):a("span",{staticClass:"hasntHandle"},[e._v(e._s(t.row.type))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["未处理"==t.row.type?a("el-button",{attrs:{type:"primary"},on:{click:function(a){e.handle(t.$index,t.row)}}},[e._v("处理")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"info"},on:{click:function(a){e.check(t.$index,t.row)}}},[e._v("详情")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.checkTypeName,visible:e.Visible,width:"30%"},on:{"update:visible":function(t){e.Visible=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"预约名称"}},[a("div",[e._v(e._s(e.form.name))])]),e._v(" "),a("el-form-item",{attrs:{label:"预约电话"}},[a("div",[e._v(e._s(e.form.phone))])]),e._v(" "),a("el-form-item",{attrs:{label:"预约时间"}},[a("div",[e._v(e._s(e.form.date))])]),e._v(" "),a("el-form-item",{attrs:{label:"预约类型"}},[a("div",[e._v(e._s(e.form.usertype))])]),e._v(" "),"预约买车"==e.checkTypeName?a("el-form-item",{attrs:{label:"车辆ID"}},[a("div",[e._v(e._s(e.form.id))])]):e._e(),e._v(" "),"预约买车"==e.checkTypeName?a("el-form-item",{attrs:{label:"车辆类型"}},[1==e.form.new?a("div",[e._v("新车")]):a("div",[e._v("二手车")])]):e._e(),e._v(" "),"预约买车"==e.checkTypeName?a("el-form-item",{attrs:{label:"车辆缩略图"}},[a("img",{staticStyle:{width:"100px",height:"60px"},attrs:{src:e.form.pic}})]):e._e(),e._v(" "),"预约买车"==e.checkTypeName?a("el-form-item",{attrs:{label:"车辆品牌"}},[a("div",[e._v(e._s(e.form.brand))])]):e._e(),e._v(" "),"预约买车"==e.checkTypeName?a("el-form-item",{attrs:{label:"车辆型号"}},[a("div",[e._v(e._s(e.form.type))])]):e._e(),e._v(" "),"预约卖车"==e.checkTypeName?a("el-form-item",{attrs:{label:"车辆型号"}},[a("div",[e._v(e._s(e.form.car_type))])]):e._e(),e._v(" "),"预约卖车"==e.checkTypeName?a("el-form-item",{attrs:{label:"初次上牌日期"}},[a("div",[e._v(e._s(e.form.reg))])]):e._e(),e._v(" "),"预约买车"==e.checkTypeName?a("el-form-item",{attrs:{label:"车辆款式"}},[a("div",[e._v(e._s(e.form.style))])]):e._e(),e._v(" "),"预约买车"==e.checkTypeName?a("el-form-item",{attrs:{label:"车辆价格"}},[a("div",[e._v(e._s(e.form.price))])]):e._e(),e._v(" "),"预约买车"==e.checkTypeName?a("el-form-item",{attrs:{label:"车辆首付"}},[a("div",[e._v(e._s(e.form.payment))])]):e._e(),e._v(" "),"预约买车"==e.checkTypeName?a("el-form-item",{attrs:{label:"车辆月供"}},[a("div",[e._v(e._s(e.form.monthly_pay))])]):e._e()],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.Visible=!1}}},[e._v("关  闭")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var o=a("VU/8")(c,n,!1,function(e){a("UcJX")},"data-v-75f7e8e2",null);t.default=o.exports},UcJX:function(e,t){}});