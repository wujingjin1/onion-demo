import{u as oe,B as ce}from"./base-search-Cke3leAi.js";import{i as de,c as L,d as _,u as ue,w as A,a as J,b as e,n as M,m as N,e as he,f as H,g as fe,t as Q,h as me,j as O,p as ge,k as ve,l as xe,o as I,r as E,q as W,s as ye,v as z,x as ee,y as te,z as U,A as pe,B as ke,C as Fe,D as Ee,E as D,F as w,G as P,H as x,I as q,J as Y,K as j,L as Z,M as X,_ as ae,N as S,O as C,P as be,Q as Te,R as G,S as De}from"./index-YDWfQ26f.js";import{u as K,L as ne,a as Se,b as le,p as we}from"./use-dictionary-87buCyKg.js";import{c as _e,s as Ce}from"./Checker-DELxq-ay.js";const Be=Symbol(),Ve=()=>de(Be,null),[ie,Ge]=L("checkbox-group"),$e={max:M,shape:N("round"),disabled:Boolean,iconSize:M,direction:String,modelValue:he(),checkedColor:String},re=Symbol(ie);var Pe=_({name:ie,props:$e,emits:["change","update:modelValue"],setup(t,{emit:c,slots:d}){const{children:r,linkChildren:y}=ue(re),l=a=>c("update:modelValue",a),i=(a={})=>{typeof a=="boolean"&&(a={checked:a});const{checked:o,skipDisabled:g}=a,v=r.filter(s=>s.props.bindGroup?s.props.disabled&&g?s.checked.value:o??!s.checked.value:!1).map(s=>s.name);l(v)};return A(()=>t.modelValue,a=>c("change",a)),K({toggleAll:i}),J(()=>t.modelValue),y({props:t,updateValue:l}),()=>{var a;return e("div",{class:Ge([t.direction])},[(a=d.default)==null?void 0:a.call(d)])}}});const Ae=H(Pe),[Le,He]=L("checkbox"),Re=fe({},_e,{shape:String,bindGroup:Q,indeterminate:{type:Boolean,default:null}});var Ie=_({name:Le,props:Re,emits:["change","update:modelValue"],setup(t,{emit:c,slots:d}){const{parent:r}=me(re),y=a=>{const{name:o}=t,{max:g,modelValue:f}=r.props,v=f.slice();if(a)!(g&&v.length>=+g)&&!v.includes(o)&&(v.push(o),t.bindGroup&&r.updateValue(v));else{const s=v.indexOf(o);s!==-1&&(v.splice(s,1),t.bindGroup&&r.updateValue(v))}},l=O(()=>r&&t.bindGroup?r.props.modelValue.indexOf(t.name)!==-1:!!t.modelValue),i=(a=!l.value)=>{r&&t.bindGroup?y(a):c("update:modelValue",a),t.indeterminate!==null&&c("change",a)};return A(()=>t.modelValue,a=>{t.indeterminate===null&&c("change",a)}),K({toggle:i,props:t,checked:l}),J(()=>t.modelValue),()=>e(Ce,ve({bem:He,role:"checkbox",parent:r,checked:l.value,onToggle:i},t),ge(d,["default","icon"]))}});const Me=H(Ie),[Ne,R]=L("empty"),Oe={image:N("default"),imageSize:[Number,String,Array],description:String};var ze=_({name:Ne,props:Oe,setup(t,{slots:c}){const d=()=>{const m=c.description?c.description():t.description;if(m)return e("p",{class:R("description")},[m])},r=()=>{if(c.default)return e("div",{class:R("bottom")},[c.default()])},y=oe(),l=m=>`${y}-${m}`,i=m=>`url(#${l(m)})`,a=(m,T,k)=>e("stop",{"stop-color":m,offset:`${T}%`,"stop-opacity":k},null),o=(m,T)=>[a(m,0),a(T,100)],g=m=>[e("defs",null,[e("radialGradient",{id:l(m),cx:"50%",cy:"54%",fx:"50%",fy:"54%",r:"297%",gradientTransform:"matrix(-.16 0 0 -.33 .58 .72)"},[a("#EBEDF0",0),a("#F2F3F5",100,.3)])]),e("ellipse",{fill:i(m),opacity:".8",cx:"80",cy:"140",rx:"46",ry:"8"},null)],f=()=>[e("defs",null,[e("linearGradient",{id:l("a"),x1:"64%",y1:"100%",x2:"64%"},[a("#FFF",0,.5),a("#F2F3F5",100)])]),e("g",{opacity:".8"},[e("path",{d:"M36 131V53H16v20H2v58h34z",fill:i("a")},null),e("path",{d:"M123 15h22v14h9v77h-31V15z",fill:i("a")},null)])],v=()=>[e("defs",null,[e("linearGradient",{id:l("b"),x1:"64%",y1:"97%",x2:"64%",y2:"0%"},[a("#F2F3F5",0,.3),a("#F2F3F5",100)])]),e("g",{opacity:".8"},[e("path",{d:"M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",fill:i("b")},null),e("path",{d:"M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",fill:i("b")},null)])],s=()=>e("svg",{viewBox:"0 0 160 160"},[e("defs",null,[e("linearGradient",{id:l(1),x1:"64%",y1:"100%",x2:"64%"},[a("#FFF",0,.5),a("#F2F3F5",100)]),e("linearGradient",{id:l(2),x1:"50%",x2:"50%",y2:"84%"},[a("#EBEDF0",0),a("#DCDEE0",100,0)]),e("linearGradient",{id:l(3),x1:"100%",x2:"100%",y2:"100%"},[o("#EAEDF0","#DCDEE0")]),e("radialGradient",{id:l(4),cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54 0 .5 -.5)"},[a("#EBEDF0",0),a("#FFF",100,0)])]),e("g",{fill:"none"},[f(),e("path",{fill:i(4),d:"M0 139h160v21H0z"},null),e("path",{d:"M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",fill:i(2)},null),e("g",{opacity:".6","stroke-linecap":"round","stroke-width":"7"},[e("path",{d:"M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",stroke:i(3)},null),e("path",{d:"M53 36a34 34 0 0 0 0 48",stroke:i(3)},null),e("path",{d:"M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",stroke:i(3)},null),e("path",{d:"M106 84a34 34 0 0 0 0-48",stroke:i(3)},null)]),e("g",{transform:"translate(31 105)"},[e("rect",{fill:"#EBEDF0",width:"98",height:"34",rx:"2"},null),e("rect",{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.1"},null),e("rect",{fill:"#EBEDF0",x:"15",y:"12",width:"18",height:"6",rx:"1.1"},null)])])]),p=()=>e("svg",{viewBox:"0 0 160 160"},[e("defs",null,[e("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:l(5)},[o("#F2F3F5","#DCDEE0")]),e("linearGradient",{x1:"95%",y1:"48%",x2:"5.5%",y2:"51%",id:l(6)},[o("#EAEDF1","#DCDEE0")]),e("linearGradient",{y1:"45%",x2:"100%",y2:"54%",id:l(7)},[o("#EAEDF1","#DCDEE0")])]),f(),v(),e("g",{transform:"translate(36 50)",fill:"none"},[e("g",{transform:"translate(8)"},[e("rect",{fill:"#EBEDF0",opacity:".6",x:"38",y:"13",width:"36",height:"53",rx:"2"},null),e("rect",{fill:i(5),width:"64",height:"66",rx:"2"},null),e("rect",{fill:"#FFF",x:"6",y:"6",width:"52",height:"55",rx:"1"},null),e("g",{transform:"translate(15 17)",fill:i(6)},[e("rect",{width:"34",height:"6",rx:"1"},null),e("path",{d:"M0 14h34v6H0z"},null),e("rect",{y:"28",width:"34",height:"6",rx:"1"},null)])]),e("rect",{fill:i(7),y:"61",width:"88",height:"28",rx:"1"},null),e("rect",{fill:"#F7F8FA",x:"29",y:"72",width:"30",height:"6",rx:"1"},null)])]),u=()=>e("svg",{viewBox:"0 0 160 160"},[e("defs",null,[e("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:l(8)},[o("#EAEDF1","#DCDEE0")])]),f(),v(),g("c"),e("path",{d:"m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",fill:i(8)},null)]),F=()=>e("svg",{viewBox:"0 0 160 160"},[e("defs",null,[e("linearGradient",{x1:"50%",y1:"100%",x2:"50%",id:l(9)},[o("#EEE","#D8D8D8")]),e("linearGradient",{x1:"100%",y1:"50%",y2:"50%",id:l(10)},[o("#F2F3F5","#DCDEE0")]),e("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:l(11)},[o("#F2F3F5","#DCDEE0")]),e("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:l(12)},[o("#FFF","#F7F8FA")])]),f(),v(),g("d"),e("g",{transform:"rotate(-45 113 -4)",fill:"none"},[e("rect",{fill:i(9),x:"24",y:"52.8",width:"5.8",height:"19",rx:"1"},null),e("rect",{fill:i(10),x:"22.1",y:"67.3",width:"9.9",height:"28",rx:"1"},null),e("circle",{stroke:i(11),"stroke-width":"8",cx:"27",cy:"27",r:"27"},null),e("circle",{fill:i(12),cx:"27",cy:"27",r:"16"},null),e("path",{d:"M37 7c-8 0-15 5-16 12",stroke:i(11),"stroke-width":"3",opacity:".5","stroke-linecap":"round",transform:"rotate(45 29 13)"},null)])]),b=()=>{var m;if(c.image)return c.image();const T={error:u,search:F,network:s,default:p};return((m=T[t.image])==null?void 0:m.call(T))||e("img",{src:t.image},null)};return()=>e("div",{class:R()},[e("div",{class:R("image"),style:xe(t.imageSize)},[b()]),d(),r()])}});const Ke=H(ze),[Ue,B,qe]=L("list"),Ye={error:Boolean,offset:I(300),loading:Boolean,disabled:Boolean,finished:Boolean,scroller:Object,errorText:String,direction:N("down"),loadingText:String,finishedText:String,immediateCheck:Q};var je=_({name:Ue,props:Ye,emits:["load","update:error","update:loading"],setup(t,{emit:c,slots:d}){const r=E(t.loading),y=E(),l=E(),i=Ve(),a=W(y),o=O(()=>t.scroller||a.value),g=()=>{te(()=>{if(r.value||t.finished||t.disabled||t.error||(i==null?void 0:i.value)===!1)return;const{direction:u}=t,F=+t.offset,b=U(o);if(!b.height||pe(y))return;let m=!1;const T=U(l);u==="up"?m=b.top-T.top<=F:m=T.bottom-b.bottom<=F,m&&(r.value=!0,c("update:loading",!0),c("load"))})},f=()=>{if(t.finished){const u=d.finished?d.finished():t.finishedText;if(u)return e("div",{class:B("finished-text")},[u])}},v=()=>{c("update:error",!1),g()},s=()=>{if(t.error){const u=d.error?d.error():t.errorText;if(u)return e("div",{role:"button",class:B("error-text"),tabindex:0,onClick:v},[u])}},p=()=>{if(r.value&&!t.finished&&!t.disabled)return e("div",{class:B("loading")},[d.loading?d.loading():e(ne,{class:B("loading-icon")},{default:()=>[t.loadingText||qe("loading")]})])};return A(()=>[t.loading,t.finished,t.error],g),i&&A(i,u=>{u&&g()}),ye(()=>{r.value=t.loading}),z(()=>{t.immediateCheck&&g()}),K({check:g}),ee("scroll",g,{target:o,passive:!0}),()=>{var u;const F=(u=d.default)==null?void 0:u.call(d),b=e("div",{ref:l,class:B("placeholder")},null);return e("div",{ref:y,role:"feed",class:B(),"aria-busy":r.value},[t.direction==="down"?F:b,p(),f(),s(),t.direction==="up"?F:b])}}});const Ze=H(je),[Xe,$,Je]=L("pull-refresh"),se=50,Qe=["pulling","loosing","success"],We={disabled:Boolean,modelValue:Boolean,headHeight:I(se),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:M,successDuration:I(500),animationDuration:I(300)};var et=_({name:Xe,props:We,emits:["change","refresh","update:modelValue"],setup(t,{emit:c,slots:d}){let r;const y=E(),l=E(),i=W(y),a=ke({status:"normal",distance:0,duration:0}),o=Se(),g=()=>{if(t.headHeight!==se)return{height:`${t.headHeight}px`}},f=()=>a.status!=="loading"&&a.status!=="success"&&!t.disabled,v=n=>{const h=+(t.pullDistance||t.headHeight);return n>h&&(n<h*2?n=h+(n-h)/2:n=h*1.5+(n-h*2)/4),Math.round(n)},s=(n,h)=>{const V=+(t.pullDistance||t.headHeight);a.distance=n,h?a.status="loading":n===0?a.status="normal":n<V?a.status="pulling":a.status="loosing",c("change",{status:a.status,distance:n})},p=()=>{const{status:n}=a;return n==="normal"?"":t[`${n}Text`]||Je(n)},u=()=>{const{status:n,distance:h}=a;if(d[n])return d[n]({distance:h});const V=[];return Qe.includes(n)&&V.push(e("div",{class:$("text")},[p()])),n==="loading"&&V.push(e(ne,{class:$("loading")},{default:p})),V},F=()=>{a.status="success",setTimeout(()=>{s(0)},+t.successDuration)},b=n=>{r=Fe(i.value)===0,r&&(a.duration=0,o.start(n))},m=n=>{f()&&b(n)},T=n=>{if(f()){r||b(n);const{deltaY:h}=o;o.move(n),r&&h.value>=0&&o.isVertical()&&(Ee(n),s(v(h.value)))}},k=()=>{r&&o.deltaY.value&&f()&&(a.duration=+t.animationDuration,a.status==="loosing"?(s(+t.headHeight,!0),c("update:modelValue",!0),te(()=>c("refresh"))):s(0))};return A(()=>t.modelValue,n=>{a.duration=+t.animationDuration,n?s(+t.headHeight,!0):d.success||t.successText?F():s(0,!1)}),ee("touchmove",T,{target:l}),()=>{var n;const h={transitionDuration:`${a.duration}ms`,transform:a.distance?`translate3d(0,${a.distance}px, 0)`:""};return e("div",{ref:y,class:$()},[e("div",{ref:l,class:$("track"),style:h,onTouchstartPassive:m,onTouchend:k,onTouchcancel:k},[e("div",{class:$("head"),style:g()},[u()]),(n=d.default)==null?void 0:n.call(d)])])}}});const tt=H(et),at={class:"base_list"},nt={key:1},lt=_({__name:"base-list",props:{itemKey:{type:String,required:!0},onFetch:{type:Function,required:!0},isFirstLoad:{type:Boolean,default:!1},checkbox:{type:Boolean,default:!1}},emits:["checkedChange","checkAllChange"],setup(t,{expose:c,emit:d}){const r=t,y=d;let l=E([]),i=E(!1),a=E(!1),o=E(!1),g=E(!1),f=1;const v=E();let s=E([]);const p=k=>{l.value.push(...k),i.value=!1,a.value=!1,o.value=k.length<=0&&f!==1},u=k=>{g.value=!0,i.value=!1,a.value=!1,o.value=!0},F=k=>{l.value.length<=0||(i.value=!0,f=f+1,r.onFetch(f,p,u))},b=k=>{f=1,l.value=[],r.onFetch(f,p,u)},m=k=>{y("checkedChange",k,l.value)},T=()=>{f=1,g.value=!1,i.value=!1,a.value=!1,l.value=[],r.onFetch(f,p,u)};return z(()=>{r.isFirstLoad&&r.onFetch(f,p,u)}),c({init:T,checkedAll:k=>{var n;(n=v.value)==null||n.toggleAll(k)},getListData:()=>l.value}),(k,n)=>(D(),w("div",at,[e(x(tt),{modelValue:x(a),"onUpdate:modelValue":n[1]||(n[1]=h=>q(a)?a.value=h:a=h),onRefresh:b},{default:P(()=>[e(x(Ze),{loading:x(i),finished:x(o),"immediate-check":!1,"finished-text":x(g)?"":"没有更多了",onLoad:F},{default:P(()=>[x(l).length<=0&&!x(a)?(D(),Y(x(Ke),{key:0,class:"empty",description:"暂无数据"})):(D(),w("div",nt,[r.checkbox?(D(),Y(x(Ae),{key:0,ref_key:"checkboxGroupRef",ref:v,modelValue:x(s),"onUpdate:modelValue":n[0]||(n[0]=h=>q(s)?s.value=h:s=h),shape:"square",onChange:m},{default:P(()=>[(D(!0),w(j,null,Z(x(l),h=>(D(),w("div",{class:"item",key:h[r.itemKey]},[e(x(Me),{style:{"margin-left":"10px"},name:h[r.itemKey]},{default:P(()=>[X(k.$slots,"renderItem",{row:h},void 0,!0)]),_:2},1032,["name"])]))),128))]),_:3},8,["modelValue"])):(D(!0),w(j,{key:1},Z(x(l),h=>(D(),w("div",{class:"item",key:h[r.itemKey]},[X(k.$slots,"renderItem",{row:h},void 0,!0)]))),128))]))]),_:3},8,["loading","finished","finished-text"])]),_:3},8,["modelValue"])]))}}),it=ae(lt,[["__scopeId","data-v-7ac840c7"]]),rt={class:"list-item"},st={class:"top"},ot={class:"right"},ct=_({__name:"list-item",props:{row:{type:Object,required:!0},dictionarys:{type:Array,required:!0}},setup(t){const{findOtherLabel:c,dictionaryTypes:d}=le();return(r,y)=>(D(),w("div",rt,[S("div",st,[S("div",ot,C(t.row.orderNo),1),S("div",{class:"left",style:be({backgroundColor:t.row.status===2?"#4FC500":"#0550FF"})},C(x(c)(t.dictionarys[x(d).水表工单状态],t.row.status)),5)]),S("div",null,"工单类型："+C(x(c)(t.dictionarys[x(d).水表工单类型],t.row.type)),1),S("div",null,"派遣日期："+C(t.row.dispatchTime||"-"),1),S("div",null,"派遣人："+C(t.row.dispatchUser||"-"),1),S("div",null,"任务总数："+C(t.row.taskTotal),1),S("div",null,"完成日期："+C(t.row.finallyCompleteTime||"-"),1),e(x(Te),{class:"icon",name:"arrow"})]))}}),dt=ae(ct,[["__scopeId","data-v-f994082b"]]),ut=t=>we({url:"/watermeter/work/order/page/mobile",data:t}),vt=_({__name:"index",setup(t){const c=De(),{initDictionarys:d,dictionarys:r,dictionaryTypes:y}=le(),l=O(()=>r.value[y.水表工单类型]);let i=E({}),a=E("orderNo");const o=E([{text:"工单号",value:"orderNo",type:"input"},{text:"工单类型",value:"type",type:"picker",valueList:l}]),g=s=>{G.setCurrentOrderInfo(s),c.push(`/workOrderDetails/${s.orderNo}`)},f=(s,p,u)=>{ut({pageNum:s,pageSize:5,status:G.currentTab,...i.value}).then(F=>{p(F.data.records)}).catch(F=>{u(F)})},v=s=>{var p;i.value=s,(p=G.listRef)==null||p.init()};return z(()=>{var s;d([y.水表工单类型,y.水表工单状态]),(s=G.listRef)==null||s.init()}),(s,p)=>(D(),w("div",null,[e(ce,{"search-type":o.value,"default-type":x(a),onSearch:v},null,8,["search-type","default-type"]),e(it,{style:{"margin-bottom":"80px"},ref:u=>x(G).setListRef(u),"on-fetch":f,"item-key":"id"},{renderItem:P(({row:u})=>[e(dt,{row:u,dictionarys:x(r),onClick:F=>g(u)},null,8,["row","dictionarys","onClick"])]),_:1},512)]))}});export{vt as default};
