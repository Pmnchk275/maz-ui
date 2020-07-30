(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{560:function(t,n,e){"use strict";e.r(n);var o={name:"MazPlotlyDoc",data:function(){return{data:[{x:[0,1,2,3,4,5],y:[1.5,1,1.3,.7,.8,.9],type:"scatter"},{x:[0,1,2,3,4,5],y:[1,.5,.7,-1.2,.3,.4],type:"bar"}],layout:{title:"Line Chart and a Bar Chart"}}}},r=e(1),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"maz-plotly-doc"},[n("ComponentContainer",[n("no-ssr",[n("MazPlotly",{attrs:{data:this.data,layout:this.layout,"display-mode-bar":!1}})],1)],1),this._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"howToUseIt"}}),this._v(" "),n("h3",[this._v("\n      How to use it ?\n    ")]),this._v(" "),n("CodeContainer",{attrs:{language:"html",code:"<template>\n  <MazPlotly\n    :data=\"data\"\n    :layout=\"layout\"\n    :display-mode-bar=\"false\"\n  />\n</template>\n\n<script>\n  import { MazPlotly } from 'maz-ui'\n  export default {\n    components: { MazPlotly }\n    data () {\n      return {\n        data: [{\n          x: [1, 2, 3, 4],\n          y: [10, 11, 12, 13],\n          mode: 'markers',\n          marker: {\n            size: [40, 60, 80, 100]\n          }\n        }],\n        layout:{\n          title: 'Marker Size'\n        }\n      }\n    }\n  }\n<\/script>"}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);