(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{475:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=["primary","secondary","third","success","danger","warning","grey","info","light","dark","default","white","black","transparent"]},561:function(t,e,n){"use strict";n.r(e);var r=n(475),o={name:"MazStepperDoc",data:function(){return{colors:r.a,percent:33}}},c=n(1),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"maz-stepper-doc"},[n("ComponentContainer",{attrs:{code:'<template>\n  <MazProgressBar :percent="percent" />\n</template>'}},[n("h4",{staticClass:"maz-mb-3"},[t._v("\n        Basic\n      ")]),t._v(" "),n("MazProgressBar",{attrs:{percent:t.percent}}),t._v(" "),n("p",{staticClass:"maz-mt-3"},[n("strong",[t._v("percent:")]),t._v(" "+t._s(t.percent)+"\n      ")]),t._v(" "),n("MazBtn",{staticClass:"maz-mt-3",on:{click:function(e){t.percent=Math.floor(100*Math.random())}}},[t._v("\n        Update percent with random value\n      ")])],1),t._v(" "),n("ComponentContainer",{attrs:{code:'<template>\n  <MazProgressBar\n    animated\n    color="<BASIC_COLOR>"\n    :percent="percent"\n  />\n  <MazProgressBar\n    animated\n    bg-color="<BASIC_COLOR>"\n    :percent="percent"\n  />\n</template>'}},[n("h4",{staticClass:"maz-mb-3"},[t._v('\n        Color (:height="10")\n      ')]),t._v(" "),t._l(t.colors,(function(e){return n("MazProgressBar",{key:"color-"+e,staticClass:"maz-mb-3",attrs:{percent:t.percent,color:e,height:10}})})),t._v(" "),n("h4",{staticClass:"maz-my-5"},[t._v("\n        Bg-Color\n      ")]),t._v(" "),t._l(t.colors,(function(e){return n("MazProgressBar",{key:"bg-color-"+e,staticClass:"maz-mb-3",attrs:{percent:t.percent,color:"light","bg-color":e,height:10}})}))],2),t._v(" "),n("ComponentContainer",{attrs:{code:'<template>\n  <MazProgressBar\n    animated\n    :height="10"\n    :percent="percent"\n  />\n</template>'}},[n("h4",{staticClass:"maz-mb-3"},[t._v("\n        Animated\n      ")]),t._v(" "),n("MazProgressBar",{staticClass:"maz-mb-3",attrs:{animated:"",height:10,percent:t.percent}})],1),t._v(" "),n("ComponentContainer",{attrs:{code:'<template>\n  <MazProgressBar\n    no-radius\n    :height="10"\n    :percent="percent"\n  />\n</template>'}},[n("h4",{staticClass:"maz-mb-3"},[t._v("\n        No-radius\n      ")]),t._v(" "),n("MazProgressBar",{staticClass:"maz-mb-3",attrs:{"no-radius":"",height:10,percent:t.percent}})],1),t._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"howToUseIt"}}),t._v(" "),n("h4",[t._v("\n      How to use it ?\n    ")]),t._v(" "),n("CodeContainer",{attrs:{language:"html",code:"<template>\n  <MazProgressBar\n    :percent=\"percent\"\n  />\n</template>\n\n<script>\n  import { MazProgressBar } from 'maz-ui'\n  export default {\n    components: { MazProgressBar },\n    data () {\n      return {\n        percent: 33\n      }\n    }\n  }\n<\/script>"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);