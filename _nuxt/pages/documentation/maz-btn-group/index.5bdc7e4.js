(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{481:function(n,e,t){var content=t(505);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(6).default)("72c2aadc",content,!0,{sourceMap:!1})},504:function(n,e,t){"use strict";var l=t(481);t.n(l).a},505:function(n,e,t){(e=t(5)(!1)).push([n.i,".btn-container .maz-btn-group[data-v-7422f604]{margin-bottom:20px}",""]),n.exports=e},544:function(n,e,t){"use strict";t.r(e);var l={name:"MazBtnGroupDoc",data:function(){return{btnGroupValue:1,btnGroupValueBoolean:!1,btnGroupValueString:null,btnGroupValueMini:null,items:[{label:"Number 1",value:1},{label:"Number 2",value:2},{label:"Number 3",value:3}],itemsBoolean:[{label:"Boolean true",value:!0},{label:"Boolean false",value:!1}],itemsString:[{label:"String foo",value:"foo"},{label:"String bar",value:"bar"},{label:"String toto",value:"toto"},{label:"String tata",value:"tata"}],itemsMini:[{label:"Mini foo",value:"foo"},{label:"Mini bar",value:"bar"},{label:"Mini toto",value:"toto"},{label:"Mini tata",value:"tata"}],codeExample:'<template>\n  <h5 class="maz-mb-3">\n    LG primary\n  </h5>\n  <MazBtnGroup\n    v-model="btnGroupValue"\n    :items="items"\n    size="lg"\n  />\n  <h5 class="maz-mb-3">\n    Secondary\n  </h5>\n  <MazBtnGroup\n    v-model="btnGroupValueBoolean"\n    :items="itemsBoolean"\n    color="secondary"\n  />\n  <h5 class="maz-mb-3">\n    SM third outline\n  </h5>\n  <MazBtnGroup\n    v-model="btnGroupValueBoolean"\n    :items="itemsBoolean"\n    outline\n    size="md"\n    color="third"\n  />\n  <h5 class="maz-mb-3">\n    SM third rounded\n  </h5>\n  <MazBtnGroup\n    v-model="btnGroupValueString"\n    :items="itemsString"\n    rounded\n    size="sm"\n    color="third"\n  />\n  <h5 class="maz-mb-3">\n    MINI success rounded outline\n  </h5>\n  <MazBtnGroup\n    v-model="btnGroupValueMini"\n    :items="itemsMini"\n    rounded\n    outline\n    size="mini"\n    color="success"\n  />\n\n  <h5 class="maz-mb-3">\n    Disabled\n  </h5>\n  <MazBtnGroup\n    v-model="btnGroupValue"\n    :items="items"\n    disabled\n  />\n</template>\n\nexport default {\n  data () {\n    return {\n      btnGroupValue: 1,\n      btnGroupValueBoolean: false,\n      btnGroupValueString: null,\n      btnGroupValueMini: null,\n      items: [\n        { label: \'Number 1\', value: 1 },\n        { label: \'Number 2\', value: 2 },\n        { label: \'Number 3\', value: 3 }\n      ],\n      itemsBoolean: [\n        { label: \'Boolean true\', value: true },\n        { label: \'Boolean false\', value: false }\n      ],\n      itemsString: [\n        { label: \'String foo\', value: \'foo\' },\n        { label: \'String bar\', value: \'bar\' },\n        { label: \'String toto\', value: \'toto\' },\n        { label: \'String tata\', value: \'tata\' }\n      ],\n      itemsMini: [\n        { label: \'Mini foo\', value: \'foo\' },\n        { label: \'Mini bar\', value: \'bar\' },\n        { label: \'Mini toto\', value: \'toto\' },\n        { label: \'Mini tata\', value: \'tata\' }\n      ]\n    }\n  }\n}'}}},o=(t(504),t(1)),component=Object(o.a)(l,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"maz-btn-doc"},[t("h4",[n._v("\n      Examples\n    ")]),n._v(" "),t("ComponentContainer",{staticClass:"btn-container",attrs:{code:n.codeExample,language:"html"}},[t("div",{staticClass:"maz-flex maz-flex-start maz-direction-column"},[t("h5",{staticClass:"maz-mb-3"},[n._v("\n          LG primary\n        ")]),n._v(" "),t("MazBtnGroup",{attrs:{items:n.items,size:"lg"},model:{value:n.btnGroupValue,callback:function(e){n.btnGroupValue=e},expression:"btnGroupValue"}}),n._v(" "),t("h5",{staticClass:"maz-mb-3"},[n._v("\n          Secondary\n        ")]),n._v(" "),t("MazBtnGroup",{attrs:{items:n.itemsBoolean,color:"secondary"},model:{value:n.btnGroupValueBoolean,callback:function(e){n.btnGroupValueBoolean=e},expression:"btnGroupValueBoolean"}}),n._v(" "),t("h5",{staticClass:"maz-mb-3"},[n._v("\n          SM third outline\n        ")]),n._v(" "),t("MazBtnGroup",{attrs:{items:n.itemsBoolean,outline:"",size:"md",color:"third"},model:{value:n.btnGroupValueBoolean,callback:function(e){n.btnGroupValueBoolean=e},expression:"btnGroupValueBoolean"}}),n._v(" "),t("h5",{staticClass:"maz-mb-3"},[n._v("\n          SM third rounded\n        ")]),n._v(" "),t("MazBtnGroup",{attrs:{items:n.itemsString,rounded:"",size:"sm",color:"third"},model:{value:n.btnGroupValueString,callback:function(e){n.btnGroupValueString=e},expression:"btnGroupValueString"}}),n._v(" "),t("h5",{staticClass:"maz-mb-3"},[n._v("\n          MINI success rounded outline\n        ")]),n._v(" "),t("MazBtnGroup",{attrs:{items:n.itemsMini,rounded:"",outline:"",size:"mini",color:"success"},model:{value:n.btnGroupValueMini,callback:function(e){n.btnGroupValueMini=e},expression:"btnGroupValueMini"}}),n._v(" "),t("h5",{staticClass:"maz-mb-3"},[n._v("\n          Disabled\n        ")]),n._v(" "),t("MazBtnGroup",{attrs:{items:n.items,disabled:""},model:{value:n.btnGroupValue,callback:function(e){n.btnGroupValue=e},expression:"btnGroupValue"}}),n._v(" "),t("p",[n._v("Number value : "+n._s(n.btnGroupValue))]),n._v(" "),t("p",[n._v("Boolean value : "+n._s(n.btnGroupValueBoolean))]),n._v(" "),t("p",[n._v("String value : "+n._s(n.btnGroupValueString||"null"))])],1)]),n._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"howToUseIt"}}),n._v(" "),t("h4",[n._v("\n      How to use it ?\n    ")]),n._v(" "),t("CodeContainer",{staticClass:"maz-mb-0",attrs:{language:"html",code:"<template>\n  <MazBtnGroup\n    v-model=\"btnGroupValue\"\n    :items=\"items\"\n  />\n</template>\n\n<script>\n  import { MazBtnGroup } from 'maz-ui'\n  export default {\n    components: { MazBtnGroup },\n    data () {\n      return {\n        btnGroupValue: null,\n        items: [\n          { label: 'Number 1', value: 1 },\n          { label: 'Number 2', value: 2 },\n          { label: 'Number 3', value: 3 }\n        ]\n      }\n    }\n  }\n<\/script>"}})],1)}),[],!1,null,"7422f604",null);e.default=component.exports}}]);