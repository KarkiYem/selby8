(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{470:function(t,e,n){var content=n(626);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("136f3307",content,!0,{sourceMap:!1})},625:function(t,e,n){"use strict";n(470)},626:function(t,e,n){var o=n(13)((function(i){return i[1]}));o.push([t.i,".main[data-v-474127a2]{margin:10px auto;min-height:80vh;width:58%}.box[data-v-474127a2]{background-color:#ececec;border-radius:10px;margin-bottom:10px;padding:15px}p[data-v-474127a2]{font-size:15px;margin:0;opacity:.8;padding:0}@media only screen and (max-width:1024px){.main[data-v-474127a2]{margin:10px auto;min-height:80vh;width:90%}}",""]),o.locals={},t.exports=o},869:function(t,e,n){"use strict";n.r(e);var o=n(6),r=n(22),c=(n(29),n(112),n(57),n(66),n(67),n(17)),l={middleware:["CheckUser"],layout:"default4",data:function(){return{data1:{userId:"",email:"",phone:"",name:"",about:"",login_type:"",subscription:{},active:!0,block:!0,free_ad:123,notification_id:""}}},mounted:function(){this.getData()},methods:{gogo:function(t){var e=t.split(", "),n=Object(r.a)(e,2),o=n[0],c=n[1],l=o.split("-").map((function(t){return parseInt(t,10)})),d=Object(r.a)(l,3),f=d[0],v=d[1],_=d[2],m=c.split(":").map((function(t){return parseInt(t,10)})),h=Object(r.a)(m,2),x=h[0],y=h[1],w=c.includes("PM"),j=x;w&&j<12?j+=12:w||12!==j||(j=0);var k=new Date(_,v-1,f,j,y),I=new Date;if(k<I)return"Expired";var M=k-I,E=Math.floor(M/864e5),O=Math.floor(M%864e5/36e5),C=Math.floor(M%36e5/6e4);return E>0?"Expires in ".concat(E," day").concat(E>1?"s":""):O>0?"Expires in ".concat(O," hour").concat(O>1?"s":""," ").concat(C>0?"".concat(C," minute").concat(1!==C?"s":""):""):C>0?"Expires in ".concat(C," minute").concat(1!==C?"s":""):"Expired"},getData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$store.state.phone,e.next=3,c.a.collection("user_Phone_Google_Fb_Login").getFirstListItem('userId="'.concat(n,'"'),{});case 3:t.data1=e.sent;case 4:case"end":return e.stop()}}),e)})))()}}},d=(n(625),n(9)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[0!=t.data1.subscription.length?e("div",{staticClass:"main"},t._l(t.data1.subscription,(function(i,n){return e("div",{key:n,staticClass:"box"},[e("p",[t._v(t._s(i.category)+" > "+t._s(i.subcategory))]),t._v(" "),e("span",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[e("p",[t._v("Type: "+t._s(i.type))]),t._v(" "),e("p",[t._v("Validity: "+t._s(i.validity)+" days")])]),t._v(" "),e("p",[t._v(t._s(t.gogo(i.valid_till)))]),t._v(" "),e("span",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[e("p",[t._v("Ads Left: "+t._s(i.ads_left))]),t._v(" "),e("p",[t._v("Ads Used: "+t._s(parseInt(i.no_of_ads)-parseInt(i.ads_left)))])])])})),0):e("div",{staticClass:"main",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e("p",[t._v("No Packages Available")])])])}),[],!1,null,"474127a2",null);e.default=component.exports}}]);