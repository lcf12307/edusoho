(window.webpackJsonp=window.webpackJsonp||[]).push([["testpaperAnalysis"],{"9bd2":function(t,e,s){"use strict";s.r(e),s("8e6e"),s("e7e5");var i=s("d399"),n=(s("c5f6"),s("6762"),s("2fdb"),s("456d"),s("ac6a"),s("96cf"),s("3b8d")),r=s("bd86"),a=s("2f62"),c=s("faa5"),o=s("3ce7"),u=s("f5cc"),l=s("8ae7");function d(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?d(s,!0).forEach((function(e){Object(r.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):d(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var f={name:"TestpaperAnalysis",filters:{type:function(t){switch(t){case"single_choice":return"单选题";case"choice":return"多选题";case"essay":return"问答题";case"uncertain_choice":return"不定项选择题";case"determine":return"判断题";case"fill":return"填空题";case"material":return"材料题"}}},components:{itemBank:u.a},mixins:[l.a],data:function(){return{result:null,items:{},info:[],isReadOver:!1,isWrongMode:!1,allList:[],wrongList:[],wrongType:[],cardSeq:0,cardShow:!1,answer:{},slideIndex:0,canDo:!1}},computed:p({},Object(a.d)({isLoading:function(t){return t.isLoading},user:function(t){return t.user}})),created:function(){this.setNavbarTitle(this.$route.query.title),this.getTestpaperResult()},methods:p({},Object(a.c)({setNavbarTitle:c.k}),{getTestpaperResult:function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.testpaperResult({query:{resultId:this.$route.query.resultId}}).then((function(t){e.result=t.testpaperResult,e.formatData(t),e.isReadOver="finished"===e.result.status,e.result=t.testpaperResult,e.items=t.items}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),formatData:function(t){var e=this,s=t.items;Object.keys(s).forEach((function(t){"material"!=t&&s[t].forEach((function(t){var s=e.analysisSixType(t.type,t);e.setData(s.item,s.answer)})),"material"==t&&s[t].forEach((function(t){var s=Object.assign({},t,{subs:""});t.subs.forEach((function(i,n){i.parentTitle=s,i.parentType=t.type,i.materialIndex=n+1;var r=e.analysisSixType(i.type,i);e.setData(r.item,r.answer)}))}))}))},setData:function(t,e){if(this.$set(this.answer,t.id,e),this.info.push(t),this.allList.push(t),t.testResult&&"right"!==t.testResult.status||!t.testResult){var s=t.parentType?t.parentType:t.type;this.wrongType.includes(s)||this.wrongType.push(s),this.wrongList.push(t)}},formatStatus:function(t){if(t.testResult)switch(t.testResult.status){case"right":return"cicle-right";case"none":return"cicle-none";case"wrong":case"partRight":return"cicle-wrong";case"noAnswer":return""}},slideToNumber:function(t){var e=this,s=Number(t);this.isWrongMode?this.info.forEach((function(t,i){s===parseInt(t.seq)&&(e.cardSeq=i+1)})):this.cardSeq=s,this.cardShow=!1},showWrongList:function(){0!==this.wrongList.length?(Object(i.a)({message:"切换成功",duration:1e3}),this.isWrongMode=!this.isWrongMode,this.isWrongMode?(this.info=this.wrongList,this.cardSeq=this.isWrongItem()):(this.info=this.allList,this.cardSeq=parseInt(this.wrongList[this.slideIndex].seq)),this.slideIndex=this.cardSeq-1):Object(i.a)("当前没有错题")},isWrongItem:function(){var t=this.allList[this.slideIndex],e=1;return t.testResult&&"right"!==t.testResult.status&&this.wrongList.forEach((function(s,i){s.id==t.id&&(e=i+1)})),e},isWrongType:function(t){return!this.isWrongMode||-1!==this.wrongType.indexOf(t)},isWrongList:function(t){return!this.isWrongMode||t.testResult&&"right"!==t.testResult.status}})},h=s("0c7c"),g=Object(h.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"paper-swiper"},[t.isLoading?s("e-loading"):t._e(),t.info.length>0?s("item-bank",{attrs:{"is-wrong-mode":t.isWrongMode,current:t.cardSeq,info:t.info,answer:t.answer,"slide-index":t.slideIndex,"can-do":t.canDo,all:t.allList.length},on:{"update:current":function(e){t.cardSeq=e},"update:slideIndex":function(e){t.slideIndex=e},"update:slide-index":function(e){t.slideIndex=e}}}):t._e(),s("div",{staticClass:"paper-footer"},[s("div",[s("span",{on:{click:function(e){t.cardShow=!0}}},[s("i",{staticClass:"iconfont icon-Questioncard"}),t._v("\n        题卡\n      ")])]),s("div",[s("span",{class:{"footer__div__span--active":t.isWrongMode},on:{click:t.showWrongList}},[s("i",{staticClass:"cuoti"},[s("img",{attrs:{src:t.isWrongMode?"static/images/cuoti-active.png":"static/images/cuoti.png",alt:""}})]),t._v("\n        错题\n      ")])])]),s("van-popup",{attrs:{position:"bottom"},model:{value:t.cardShow,callback:function(e){t.cardShow=e},expression:"cardShow"}},[t.info.length>0?s("div",{staticClass:"card"},[s("div",{staticClass:"card-title"},[s("div",[s("span",{staticClass:"card-right"},[t._v("正确")]),s("span",{staticClass:"card-wrong"},[t._v("错误")]),s("span",{staticClass:"card-nofinish"},[t._v("未作答")]),t.isReadOver?t._e():s("span",{staticClass:"card-none"},[t._v("待批阅")])]),s("i",{staticClass:"iconfont icon-no",on:{click:function(e){t.cardShow=!1}}})]),s("div",{staticClass:"card-list"},t._l(t.items,(function(e,i){return t.isWrongType(i)?s("div",{key:i,staticClass:"card-item"},[s("div",{staticClass:"card-item-title"},[t._v(t._s(t._f("type")(i)))]),"material"!=i?s("div",{staticClass:"card-item-list"},t._l(t.items[i],(function(e){return t.isWrongList(e)?s("div",{key:e.id,class:["list-cicle",t.formatStatus(e)],on:{click:function(s){return t.slideToNumber(e.seq)}}},[t._v(t._s(e.seq))]):t._e()})),0):t._e(),"material"==i?s("div",{staticClass:"card-item-list"},[t._l(t.items[i],(function(e){return t._l(e.subs,(function(e){return t.isWrongList(e)?s("div",{key:e.id,class:["list-cicle",t.formatStatus(e)],on:{click:function(s){return t.slideToNumber(e.seq)}}},[t._v(t._s(e.seq))]):t._e()}))}))],2):t._e()]):t._e()})),0)]):t._e()])],1)}),[],!1,null,null,null);e.default=g.exports}}]);