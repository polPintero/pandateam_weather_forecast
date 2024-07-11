const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ForecastItem-CyrSnG9g.js","assets/index-C-e4B15X.js","assets/index-BEccBhQ-.css","assets/ForecastItem-Bi4Np2Am.css"])))=>i.map(i=>d[i]);
import{_ as n,d as s,a as m,r as i,o as u,h as d}from"./index-C-e4B15X.js";const l={name:"WeeklyForecast",components:{ForecastItem:s(()=>m(()=>import("./ForecastItem-CyrSnG9g.js"),__vite__mapDeps([0,1,2,3])))},props:{weekData:{type:Array,default:()=>[]}},computed:{currData(){const e=Math.floor(this.weekData.length/2);return this.weekData[e]}},methods:{getAverageTemp(e){return e.reduce((r,o)=>r+=o.main.temp,0)/e.length},getLabel(){return new Intl.DateTimeFormat("en",{weekday:"short"}).format(new Date(this.currData.dt*1e3))},checkNowDay(){const e=new Date;e.setHours(0,0,0,0);const a=new Date(this.currData.dt*1e3);return a.setHours(0,0,0,0),e.getTime()===a.getTime()}}};function h(e,a,r,o,_,t){const c=i("ForecastItem");return u(),d(c,{label:t.getLabel(),temp:t.getAverageTemp(r.weekData).toFixed(),humidity:t.currData.main.humidity,isActive:t.checkNowDay(),iconCode:t.currData.weather[0].id},null,8,["label","temp","humidity","isActive","iconCode"])}const p=n(l,[["render",h]]);export{p as default};
