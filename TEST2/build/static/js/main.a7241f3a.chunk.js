(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a(1),o=a(18),i=a.n(o),c=a(8),s=a(20);function l(e){var t=e.chartData;return Object(r.jsx)(s.a,{options:b,data:d(t)})}var b={maintainAspectRatio:!1,scales:{x:{grid:{offset:!1},ticks:{callback:function(e,t,a){return t%2?null:this.getLabelForValue(e)}}},"left-y-axis":{type:"linear",position:"left",min:0,max:1e3},"right-y-axis":{type:"linear",position:"right",min:0,max:10}}};function d(e){return{labels:["2020-01-01","2020-01-02","2020-01-03","2020-01-04","2020-01-05","2020-01-06","2020-01-07","2020-01-08","2020-01-09","2020-01-10","2020-01-11"],datasets:[{type:"bar",data:e[0],label:"First",backgroundColor:"#489fb0",order:2},{type:"bar",data:e[1],label:"Second",backgroundColor:"#fab73c",order:2},{type:"bar",data:e[2],label:"Third",backgroundColor:"#6d9c6d",order:2},{type:"line",data:e[3],label:"Forth",backgroundColor:"white",borderColor:"#db8181",order:1,yAxisID:"right-y-axis"},{type:"line",data:e[4],label:"Fifth",backgroundColor:"white",borderColor:"#60e6c9",order:1,yAxisID:"right-y-axis"}]}}var u=a(19),p=a.n(u).a.create({baseURL:"https://run.mocky.io/v3/",headers:{"Content-Type":"application/json",Accept:"application/json"}});p.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var f=p,h=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){a.length||Promise.all([f.get("a34c5fe1-6025-4c9d-8402-5c777b685476"),f.get("b6b3ee44-03f2-4d3d-84e1-1f2e68be6f7e"),f.get("8e7a5232-2974-4621-a818-0985e623169e"),f.get("9ef80280-6c04-4d01-ae55-e3846ba758de"),f.get("7826ab76-0be2-4103-8377-9a2669942868")]).then((function(e){var t=e.map((function(e){return e.data.map((function(e){return{x:e[0],y:e[1]}}))}));o(t)}))}),[a.length]),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(l,{chartData:a})})},g=a(0);a(45);g.e.register(g.j,g.d,g.b,g.a,g.l,g.i,g.h,g.g,g.p);a(44);i.a.render(Object(r.jsx)(h,{}),document.querySelector("#root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a7241f3a.chunk.js.map