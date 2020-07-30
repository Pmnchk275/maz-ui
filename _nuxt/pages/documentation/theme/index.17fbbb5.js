(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{574:function(e,o,n){"use strict";n.r(o);var t={name:"Theme"},r=n(1),component=Object(r.a)(t,(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"theme"},[n("div",{staticClass:"theme__header maz-flex maz-space-between maz-align-center"},[n("h2",[e._v("\n        Theme\n      ")]),e._v(" "),n("MazBtn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#all_vars",container:".documentation__container"},expression:"{\n          el: '#all_vars',\n          container: '.documentation__container'\n        }"}],attrs:{href:"#all_vars"}},[e._v("\n        All default SCSS variables\n      ")])],1),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),e._v(" "),n("h3",[e._v("\n      How to change components colors and text style ?\n    ")]),e._v(" "),n("p",[e._v("\n      To use your own colors and text style you have to override Maz-UI SCSS variables\n    ")]),e._v(" "),n("h4",{staticClass:"maz-mt-6"},[e._v("\n      Use SCSS style files instead CSS style files\n    ")]),e._v(" "),e._m(0),e._v(" "),n("CodeContainer",{attrs:{code:"// .babelrc\n\n{\n  plugins: [\n    [\n      'component', {\n        libraryName: 'maz-ui',\n        styleLibraryName: 'scss',\n        ext: '.scss'\n      }\n    ]\n  ]\n}"}}),e._v(" "),n("p",[e._v("\n      At the top of your main CSS file, place your own variables. Follow this example:\n    ")]),e._v(" "),e._m(1),e._v(" "),n("CodeContainer",{attrs:{code:"// main.scss\n\n$primary-color:     red;\n$secondary-color:   blue;\n$third-color:       yellow;\n$border-radius:     4px;\n$base-font-size:    14px;\n$base-font-family:  'Roboto';\n\n// Your own CSS",language:"scss"}}),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),e._v(" "),n("h3",[e._v("\n      How to use your SCSS variables & Maz-UI SCSS variables globally in your app ?\n    ")]),e._v(" "),e._m(2),e._v(" "),n("CodeContainer",{attrs:{code:"// vue.config.js\n\nmodule.exports = {\n  css: {\n    loaderOptions: {\n      sass: {\n        prependData: `\n          @import './src/scss/my-own-variables.scss';\n          @import 'maz-ui/scss/variables.scss';\n        `\n      }\n    }\n  }\n}"}}),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),e._v(" "),n("h3",[e._v("\n      How to override CSS of maz-ui components ?\n    ")]),e._v(" "),e._m(3),e._v(" "),n("CodeContainer",{attrs:{code:"// vue.config.js\n\nmodule.exports = {\n  css: {\n    loaderOptions: {\n      sass: {\n        prependData: `\n          @import './src/scss/maz-ui/scss/your-own-css-file.scss';\n        `\n      }\n    }\n  }\n}"}}),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"all_vars"}}),e._v(" "),n("h3",[e._v("\n      All default variables\n    ")]),e._v(" "),n("CodeContainer",{attrs:{code:"/*\n* FONT BASIC\n*/\n\n$base-font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !default;\n$base-font-size:   16px !default;\n$base-font-weight: 400 !default;\n$base-line-height: 1.5 !default;\n\n/*\n* COLORS BASIC\n*/\n\n// MAJORS COLORS\n\n$primary-color:           dodgerblue !default;\n$secondary-color:         #1CD1A1 !default;\n$third-color:             #C41AF9 !default;\n$danger-color:            orangered !default;\n$success-color:           yellowgreen !default;\n$info-color:              #17A2B8 !default;\n$warning-color:           #FFA300 !default;\n$light-color:             whitesmoke !default;\n$default-color:           #CCC !default;\n$text-color:              #212121 !default;\n$bg-color:                white !default;\n$bg-color-light:          #F2F2F2 !default;\n$dark-color:              #24292E !default;\n$grey-color:              #999 !default;\n$placeholder-color:       #A7A7A7 !default;\n$input-icon-color:        #DEDEDE !default;\n$text-muted:              rgba(black, .54) !default;\n$text-muted-dark:         rgba(white, .54) !default;\n\n// OTHERS COLORS\n\n$black-color:             black !default;\n$white-color:             white !default;\n$hover-bg-color:          #F2F2F2 !default;\n$hover-bg-color-l:        white !default;\n$muted-color:             #747474 !default;\n$border-color:            #EEE !default;\n$disabled-color:          #F2F2F2 !default;\n$overlay-color:           rgba(#303144, .7);\n\n/*\n* DARK THEME SPECIFIC\n*/\n\n$text-color-dark:         #EEE !default;\n$bg-color-dark:           #21222E !default;\n$bg-color-dark-light:         #303144 !default;\n$hover-bg-color-dark:     #2E2F40 !default;\n$hover-bg-color-dark-l:   #2E2F40 !default;\n$muted-color-dark:        rgba(255, 255, 255, .3) !default;\n$disabled-color-dark:     #CCC !default;\n$border-color-dark:       #3B3C53 !default;\n$placeholder-color-dark:  rgba(255, 255, 255, .6) !default;\n$input-icon-color-dark:   #65678F !default;\n$overlay-color-dark:      rgba(86, 87, 117, .7);\n\n/*\n* BORDERS\n*/\n\n$border-radius: 8px !default;\n$border-width: 1.5px !default;",language:"scss"}})],1)}),[function(){var e=this.$createElement,o=this._self._c||e;return o("p",[this._v("\n      Use this configuration of "),o("strong",[this._v("babel-plugin-component")])])},function(){var e=this.$createElement,o=this._self._c||e;return o("i",{staticClass:"maz-text-muted"},[this._v("\n      To avoid mistakes, the "),o("strong",[this._v("main.css")]),this._v(" should be import in the "),o("strong",[this._v("main.js")])])},function(){var e=this.$createElement,o=this._self._c||e;return o("p",[this._v("\n      With "),o("strong",[this._v("sass-loader")]),this._v(" you can do it. Load your variables file at first and then load the maz-ui SCSS variables file:\n    ")])},function(){var e=this.$createElement,o=this._self._c||e;return o("p",[this._v("\n      To avoid adding "),o("strong",[this._v("!important`")]),this._v(" to your CSS property, the best solution is to load your file which overloads the CSS with "),o("strong",[this._v("sass-loader")]),this._v(":\n    ")])}],!1,null,null,null);o.default=component.exports}}]);