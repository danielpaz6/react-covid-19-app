(this["webpackJsonpreact-covid-19-app"]=this["webpackJsonpreact-covid-19-app"]||[]).push([[0],{10:function(e,t,a){e.exports={container:"Cards_container__2gQkG",card:"Cards_card__3oAUD",infected:"Cards_infected__1UZb7",recovered:"Cards_recovered__3y817",deaths:"Cards_deaths__1bogj"}},19:function(e,t,a){e.exports={container:"App_container__3osZD",spinnerAlign:"App_spinnerAlign__21T1Q",space:"App_space__qgEAg",img:"App_img__2OPCR"}},203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(67),c=a.n(o),i=(a(87),a(39)),s=a.n(i),l=a(68),d=a(69),m=a(70),u=a(79),p=a(78),E=a(216),F=a(220),g=a(217),f=a(218),h=a(28),v=a.n(h),y=a(29),D=a.n(y),C=a(10),A=a.n(C),_=function(e){return n.createElement("div",{className:A.a.container},n.createElement(E.a,{container:!0,spacing:3,justify:"center"},n.createElement(E.a,{item:!0,component:F.a,xs:12,md:3,className:D()(A.a.card,A.a.infected)},n.createElement(g.a,null,n.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.createElement(f.a,{variant:"h5"},n.createElement(v.a,{start:0,end:e.data.confirmed.value,duration:2,separator:","})),n.createElement(f.a,{color:"textSecondary"},new Date(e.data.lastUpdate).toDateString()),n.createElement(f.a,{variant:"body2"},"Number of active cases of COVID-19"))),n.createElement(E.a,{item:!0,component:F.a,xs:12,md:3,className:D()(A.a.card,A.a.recovered)},n.createElement(g.a,null,n.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.createElement(f.a,{variant:"h5"},n.createElement(v.a,{start:0,end:e.data.recovered.value,duration:1.5,separator:","})),n.createElement(f.a,{color:"textSecondary"},new Date(e.data.lastUpdate).toDateString()),n.createElement(f.a,{variant:"body2"},"Number of recoveries from COVID-19"))),n.createElement(E.a,{item:!0,component:F.a,xs:12,md:3,className:D()(A.a.card,A.a.deaths)},n.createElement(g.a,null,n.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Death"),n.createElement(f.a,{variant:"h5"},n.createElement(v.a,{start:0,end:e.data.deaths.value,duration:1,separator:","})),n.createElement(f.a,{color:"textSecondary"},new Date(e.data.lastUpdate).toDateString()),n.createElement(f.a,{variant:"body2"},"Number of deaths caused by COVID-19")))))},b=a(75),x=a(77),S=a.n(x),w=["#DC143C","#8A2BE2","#FF7F50","#7FFFD4","#8A2BE2","#A52A2A","#FF7F50","#6495ED","#00FFFF","#00008B","#FF8C00","#ADFF2F","#CD5C5C","#F0E68C","#E6E6FA","#FFFACD","#E0FFFF","#90EE90","#FFB6C1","#FFA07A","#FFFFE0","#FAF0E6","#3CB371","#FFA500","#EEE8AA","#98FB98","#AFEEEE","#DB7093","#FFEFD5","#FFDAB9","#FFC0CB","#DDA0DD","#B0E0E6","#D8BFD8","#F5DEB3","#C71585"],B=function(e){var t=function(e){return e.getDate()+"/"+(e.getMonth()+1)},a=0,r=n.createElement(b.a,{data:{labels:function(){for(var e=[],a=new Date(2020,3,3),n=(new Date).getTime();a.getTime()<n;)e.push(t(a)),a=new Date(a.getTime()+864e5);return e}(),datasets:function(){var n=[];for(var r in e.data){for(var o=[],c=e.data[r],i=0;i<c.length;i++)o.push({x:t(new Date(c[i].date)),y:c[i].cases});var s=w[a++%w.length];n.push({data:o,label:r,borderColor:s,pointBackgroundColor:s,fill:!1,pointHitRadius:15,pointBorderWidth:4})}return n.slice(0,35)}()},options:{legend:{display:!0,rtl:!0,labels:{fontSize:12,usePointStyle:!0,padding:18},position:"right"},elements:{point:{pointStyle:"circle"}},scales:{xAxes:[{type:"category",display:!0,gridLines:{drawTicks:!1,display:!1},ticks:{autoSkip:!0,padding:20}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Infecteds"},ticks:{padding:10}}]},title:{display:!0,fontFamily:"WorkSans",text:"Corona Total Infecteds by City",fontSize:28,fontColor:"#000",padding:40},tooltips:{mode:"index",intersect:!1,custom:function(e){e.y=0},callbacks:{title:function(e,t){return t.datasets[e[0].datasetIndex].data[e[0].index].x}},titleAlign:"center",bodyAlign:"right",bodySpacing:3,xPadding:10}}});return n.createElement("div",{className:S.a.container},r)},k=a(19),N=a.n(k),O=a(41),j=a.n(O),I=a(219),T=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://covid19.mathdro.id/api").then((function(e){return e.data}));case 2:return t=e.sent,e.next=5,j.a.get("https://devdinocdn.com/mako/coronavirusStats/Home/GetCitiesHistory/").then((function(e){return e.data.data.data}));case 5:a=e.sent,this.setState({globalData:t,dailyData:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:N.a.container},r.a.createElement("h2",null,"C",r.a.createElement("div",{className:N.a.space},r.a.createElement("div",{className:N.a.img})),"rvid-19 Statistics"),this.state&&this.state.globalData&&this.state.dailyData?r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{data:this.state.globalData}),r.a.createElement(B,{data:this.state.dailyData})):r.a.createElement(I.a,{className:N.a.spinnerAlign}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports={container:"Chart_container__wSLvj"}},82:function(e,t,a){e.exports=a(203)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.1b26cb23.chunk.js.map