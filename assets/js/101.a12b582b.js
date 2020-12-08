(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{581:function(s,a,t){"use strict";t.r(a);var e=t(32),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"解决磁盘空间大于95-时，es会启动保护机制，设置成只读模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决磁盘空间大于95-时，es会启动保护机制，设置成只读模式"}},[s._v("#")]),s._v(" 解决磁盘空间大于95%时，es会启动保护机制，设置成只读模式")]),s._v(" "),t("p",[s._v("用postman等工具或curl请求,\nes版本是6.7的（其他版本没有试过）")]),s._v(" "),t("ul",[t("li",[s._v("步骤：")])]),s._v(" "),t("h1",{attrs:{id:"_1-get请求查看是否只读机制启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-get请求查看是否只读机制启动"}},[s._v("#")]),s._v(" 1. GET请求查看是否只读机制启动")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("XXXX:9200/_settings?pretty\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/summerking1/image@main/4.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("如果read_only_allow_delete等于true，则es目前索引是只读状态")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read_only_allow_delete"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"_2-先把磁盘空间清理一下，低于95"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-先把磁盘空间清理一下，低于95"}},[s._v("#")]),s._v(" 2. 先把磁盘空间清理一下，低于95%")]),s._v(" "),t("h1",{attrs:{id:"_3-put请求地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-put请求地址"}},[s._v("#")]),s._v(" 3. PUT请求地址")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("XXXX:9200/_settings\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"_4-请求头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-请求头"}},[s._v("#")]),s._v(" 4. 请求头")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Content"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("application"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"_5-请求体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-请求体"}},[s._v("#")]),s._v(" 5. 请求体")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blocks"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read_only_allow_delete"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h1",{attrs:{id:"_6-返回值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-返回值"}},[s._v("#")]),s._v(" 6. 返回值")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"acknowledged"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这个时候就成功了\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/summerking1/image@main/1.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/summerking1/image@main/2.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/summerking1/image@main/3.png",alt:""}})])])}),[],!1,null,null,null);a.default=n.exports}}]);