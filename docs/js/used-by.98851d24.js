(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["used-by"],{"0828":function(t,e,r){},"39f2":function(t,e,r){"use strict";var a=r("89d3"),n=r.n(a);n.a},"3acf":function(t,e,r){},4235:function(t,e,r){t.exports=r.p+"img/vue-smart-list-ui.7892bf61.png"},"48ac":function(t,e,r){t.exports=r.p+"img/loicmazuel.d920a0c0.png"},"4bf1":function(t,e,r){},"570f":function(t,e,r){"use strict";var a=r("0828"),n=r.n(a);n.a},"7c87":function(t,e,r){"use strict";var a=r("4bf1"),n=r.n(a);n.a},"89d3":function(t,e,r){},a533:function(t,e,r){"use strict";var a=r("3acf"),n=r.n(a);n.a},a6d2:function(t,e,r){"use strict";var a=r("b98d"),n=r.n(a);n.a},b98d:function(t,e,r){},bf10:function(t,e,r){t.exports=r.p+"img/logo-maz-ui.c869f72a.png"},cef0:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"nav-footer flex-fixed",attrs:{role:"contentinfo"}},[r("nav",{staticClass:"nav-footer-content container px-4 flex align-center space-between py-4"},[r("div",{staticClass:"flex direction-column hidden-tablet"},[r("RouterLink",{staticClass:"mr-3",attrs:{to:{name:"Home"}}},[t._v(" Home ")]),r("RouterLink",{attrs:{to:{name:"Documentation"}}},[t._v(" Documentation ")]),r("RouterLink",{attrs:{to:{name:"MadeWithMazUi"}}},[t._v(" Made with Maz UI ")])],1),t._m(0),r("div",{staticClass:"flex align-center"},[r("SocialButtons",{staticClass:"mr-2"}),r("VersionNumber")],1)]),t._m(1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-footer-content__logo direction-column hidden-tablet flex align-center"},[a("img",{staticClass:"nav-footer-content__logo__img",attrs:{src:r("bf10"),alt:"logo-loic-mazuel"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-footer-subs py-2"},[r("div",{staticClass:"px-4 flex justify-end"},[r("a",{staticClass:"flex",attrs:{href:"https://www.loicmazuel.com/",target:"_blank"}},[r("p",{staticClass:"fs-14"},[t._v(" © Loïc Mazuel ")])])])])}],s=r("2eb3"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"version-number",attrs:{target:"_blank",href:"https://www.npmjs.com/package/maz-ui"}},[t._v(" "+t._s(t.versionNumber)+" ")])},o=[],c=r("34e9"),l={name:"VersionNumber",computed:{versionNumber:function(){return c["s"]}}},u=l,p=r("2877"),f=Object(p["a"])(u,i,o,!1,null,null,null),m=f.exports,v={name:"NavFooter",components:{SocialButtons:s["a"],VersionNumber:m}},d=v,b=(r("39f2"),Object(p["a"])(d,a,n,!1,null,"05240496",null));e["a"]=b.exports},d9f5:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("MazFlex",{staticClass:"used-by",attrs:{flex:"","direction-column":"",flex1:""}},[r("MazFlex",{attrs:{flex1:""}},[r("h2",{staticClass:"text-center my-4"},[t._v(" Projects Made With Mazel UI ")]),r("div",{staticClass:"container used-by__projects-list flex align-center pt-2 pb-5"},t._l(t.projects,(function(t,e){return r("ProjectPreview",{key:"project-"+e,staticClass:"used-by__projects-list__item",attrs:{project:t}})})),1)]),r("NavFooter")],1)},n=[],s=r("cef0"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-preview br-8 text-white flex direction-column space-between"},[r("div",{staticClass:"project-preview-header brt-8"},[r("img",{staticClass:"project-preview__img brt-8",attrs:{src:t.project.imgUrl,alt:"image illustration "+t.project.name}}),t.project.demoUrl?r("div",{staticClass:"layer brt-4 flex align-center justify-center"},[r("a",{staticClass:"btn btn--primary--outline btn--rounded",attrs:{href:t.project.demoUrl,target:"_blank"}},[r("i",{staticClass:"material-icons"},[t._v(" visibility ")])])]):t._e()]),r("ProjectPreviewContent",{attrs:{project:t.project}}),r("ProjectPreviewFooter",{attrs:{project:t.project}})],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-preview-footer p-3 flex justify-end"},[t.project.githubUrl?r("a",{staticClass:"btn btn--white--outline btn--white flex align-center",attrs:{href:t.project.githubUrl,target:"_blank"}},[t._v(" GITHUB ")]):t._e(),t.project.npmUrl?r("a",{staticClass:"btn btn--danger--outline btn--npm ml-3",attrs:{href:t.project.npmUrl,target:"_blank"}},[r("svg",{attrs:{viewBox:"0 0 780 250"}},[r("path",{attrs:{fill:"#231F20",d:"M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"}})])]):t._e(),t.project.demoUrl?r("a",{staticClass:"btn btn--primary--outline ml-3",attrs:{href:t.project.demoUrl,target:"_blank"}},[t._v(" SHOW PROJECT ")]):t._e()])},l=[],u={name:"ProjectPreviewFooter",props:{project:{type:Object,required:!0}}},p=u,f=(r("570f"),r("2877")),m=Object(f["a"])(p,c,l,!1,null,"7992d5cc",null),v=m.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-preview-content flex-1 flex direction-column space-between p-3"},[r("div",{staticClass:"project-preview-content__text"},[r("h4",{staticClass:"fs-18 mb-2"},[t._v(" "+t._s(t.project.name)+" ")]),r("p",{staticClass:"mb-2"},[t._v(" "+t._s(t.project.description)+" ")])])])},b=[],_={name:"ProjectPreview",props:{project:{type:Object,required:!0}}},j=_,h=(r("a6d2"),Object(f["a"])(j,d,b,!1,null,"6bf2c23f",null)),g=h.exports,w={name:"ProjectPreview",components:{ProjectPreviewFooter:v,ProjectPreviewContent:g},props:{project:{type:Object,required:!0}}},x=w,C=(r("7c87"),Object(f["a"])(x,i,o,!1,null,"975f77ce",null)),y=C.exports,P={name:"UsedBy",components:{NavFooter:s["a"],ProjectPreview:y},data:function(){return{projects:[{name:"Vue Smart List UI",description:"An intelligent interface for displaying a list of data and performing filters, sorting and searching on it. Also to display the details of the data.",githubUrl:"https://github.com/LouisMazel/vue-smart-list-ui",imgUrl:r("4235"),demoUrl:"https://louismazel.github.io/vue-smart-list-ui/"},{name:"Freelance Personnal Website",imgUrl:r("48ac"),demoUrl:"https://www.loicmazuel.com/"}]}}},U=P,z=(r("a533"),Object(f["a"])(U,a,n,!1,null,"bd087bfa",null));e["default"]=z.exports}}]);
//# sourceMappingURL=used-by.98851d24.js.map