webpackJsonp([3],{"8+FI":function(e,t,s){"use strict";var n=new(s("7+uW").default);t.a=n},"9OHU":function(e,t){},"9Zfp":function(e,t){},BQCA:function(e,t){},MpTN:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("P9l9"),i=s("mtWM"),l=s.n(i),o=s("8+FI"),a={data:function(){return{collapse:!1,fullscreen:!1,name:"linxin",message:2}},computed:{username:function(){var e=sessionStorage.getItem("ms_username");return e||this.name}},methods:{handleCommand:function(e){var t=this;"loginout"==e&&l.a.post(n._5).then(function(e){"success"==e.data.msg&&(sessionStorage.removeItem("ms_username"),sessionStorage.removeItem("car"),sessionStorage.removeItem("appoint"),sessionStorage.removeItem("brand"),sessionStorage.removeItem("car_config"),sessionStorage.removeItem("info"),sessionStorage.removeItem("perm"),sessionStorage.removeItem("system"),sessionStorage.removeItem("adv"),t.$router.push("/login"))})},collapseChage:function(){this.collapse=!this.collapse,o.a.$emit("collapse",this.collapse)},handleFullScreen:function(){var e=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"collapse-btn",on:{click:e.collapseChage}},[s("i",{staticClass:"el-icon-menu"})]),e._v(" "),s("div",{staticClass:"logo"},[e._v("众利后台管理系统")]),e._v(" "),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:e.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[e._v("\n                    "+e._s(e.username)+" "),s("i",{staticClass:"el-icon-caret-bottom"})]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[e._v("退出登录")])],1)],1)],1)])])},staticRenderFns:[]};var c={data:function(){return{collapse:!1,items:[{icon:"el-icon-lx-home",index:"dashboard",title:"控制台"},{icon:"el-icon-lx-sort",index:"newCar",title:"车辆管理",has:1,subs:[{index:"newCar",title:"新车列表"},{index:"secondHand",title:"二手车列表"}]},{icon:"el-icon-lx-apps",index:"brandList",title:"品牌管理",has:1,subs:[{index:"brandList",title:"品牌列表"}]},{icon:"el-icon-lx-settings",index:"carConfigure",title:"车辆配置管理",has:1,subs:[{index:"carConfigure",title:"车辆配置"},{index:"screenConfigure",title:"筛选配置"}]},{icon:"el-icon-lx-people",index:"userList",title:"用户管理",has:1,subs:[{index:"userList",title:"用户列表"}]},{icon:"el-icon-lx-time",index:"orderList",title:"预约管理",has:1,subs:[{index:"orderList",title:"预约列表"},{index:"orderBuy",title:"精准购车报价"}]},{icon:"el-icon-lx-hotfill",index:"advertisement",title:"广告管理",has:1,subs:[{index:"advertisement",title:"广告列表"}]},{icon:"el-icon-lx-link",index:"company",title:"系统管理",has:1,subs:[{index:"company",title:"企业信息"},{index:"weixin",title:"微信设置"}]},{icon:"el-icon-lx-info",index:"administrators",title:"权限管理",has:1,subs:[{index:"administrators",title:"管理员管理"},{index:"role",title:"角色管理"}]}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var e=this;o.a.$on("collapse",function(t){e.collapse=t});var t=sessionStorage.getItem("car"),s=sessionStorage.getItem("appoint"),n=sessionStorage.getItem("brand"),i=sessionStorage.getItem("car_config"),l=sessionStorage.getItem("info"),a=sessionStorage.getItem("perm"),r=sessionStorage.getItem("system"),c=sessionStorage.getItem("adv");this.items.forEach(function(e){"车辆管理"==e.title?e.has=t:"品牌管理"==e.title?e.has=n:"车辆配置管理"==e.title?e.has=i:"用户管理"==e.title?e.has=l:"预约管理"==e.title?e.has=s:"广告管理"==e.title?e.has=c:"系统管理"==e.title?e.has=r:"权限管理"==e.title&&(e.has=a)})}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":e.onRoutes,collapse:e.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[e._l(e.items,function(t){return[t.subs?[1==t.has?s("el-submenu",{key:t.index,attrs:{index:t.index}},[s("template",{slot:"title"},[s("i",{class:t.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])]),e._v(" "),e._l(t.subs,function(t){return[t.subs?s("el-submenu",{key:t.index,attrs:{index:t.index}},[s("template",{slot:"title"},[e._v(e._s(t.title))]),e._v(" "),e._l(t.subs,function(t,n){return s("el-menu-item",{key:n,attrs:{index:t.index}},[e._v("\n                                "+e._s(t.title)+"\n                            ")])})],2):s("el-menu-item",{key:t.index,attrs:{index:t.index}},[e._v("\n                            "+e._s(t.title)+"\n                        ")])]})],2):e._e()]:[s("el-menu-item",{key:t.index,attrs:{index:t.index}},[s("i",{class:t.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])]]})],2)],1)},staticRenderFns:[]};var d={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var m={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:s("VU/8")(a,r,!1,function(e){s("BQCA")},"data-v-6e6fe3bf",null).exports,vSidebar:s("VU/8")(c,u,!1,function(e){s("9OHU")},"data-v-6f30430b",null).exports,vTags:s("VU/8")({data:function(){return{tagsList:[]}},methods:{},computed:{}},d,!1,function(e){s("9Zfp")},null,null).exports},created:function(){var e=this;o.a.$on("collapse",function(t){e.collapse=t}),o.a.$on("tags",function(t){for(var s=[],n=0,i=t.length;n<i;n++)t[n].name&&s.push(t[n].name);e.tagsList=s})}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrapper"},[t("v-head"),this._v(" "),t("v-sidebar"),this._v(" "),t("div",{staticClass:"content-box",class:{"content-collapse":this.collapse}},[t("v-tags"),this._v(" "),t("div",{staticClass:"content"},[t("transition",{attrs:{name:"move",mode:"out-in"}},[t("keep-alive",{attrs:{include:this.tagsList}},[t("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]},p=s("VU/8")(m,v,!1,null,null,null);t.default=p.exports}});