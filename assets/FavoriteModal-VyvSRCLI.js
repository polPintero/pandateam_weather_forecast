const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChoicedItem-DW-UGY_5.js","assets/index-C-e4B15X.js","assets/index-BEccBhQ-.css","assets/ChoicedItem-CLzSvlk1.css"])))=>i.map(i=>d[i]);
import{_ as i,d,a as l,r as n,o,c as a,b as c,F as v,g as _,n as m,h as F}from"./index-C-e4B15X.js";const f={name:"FavoriteModal",components:{ChoicedItem:d(()=>l(()=>import("./ChoicedItem-DW-UGY_5.js"),__vite__mapDeps([0,1,2,3])))},computed:{isOpenFavoriteModal(){return this.$store.getters.isOpenFavoriteModal},listFavorites(){return this.$store.getters.listFavorites}},methods:{closeFavoriteModal(){this.$store.commit("TOGGLE_FAVORITE_MODAL",!1)}}},p={key:1,class:"favorite-modal--empty"};function M(u,s,h,O,g,e){const r=n("ChoicedItem");return o(),a("div",{class:m(["favorite-modal",{isOpen:e.isOpenFavoriteModal}])},[c("div",{class:"favorite-modal__close",onClick:s[0]||(s[0]=(...t)=>e.closeFavoriteModal&&e.closeFavoriteModal(...t))}),e.listFavorites&&e.listFavorites.length>0?(o(!0),a(v,{key:0},_(e.listFavorites,t=>(o(),F(r,{key:t.id,widget:t,onAddedToMain:e.closeFavoriteModal},null,8,["widget","onAddedToMain"]))),128)):(o(),a("div",p,"Favorite Is Empty"))],2)}const C=i(f,[["render",M],["__scopeId","data-v-af83fbf3"]]);export{C as default};
