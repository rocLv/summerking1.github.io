(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{556:function(t,a,s){"use strict";s.r(a);var n=s(32),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://mirrors.huaweicloud.com/kibana/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装包下载"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("注意elasticsearch版本应与kibana版本一致，否则error")])]),t._v(" "),s("h2",{attrs:{id:"_1-上传服务器解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-上传服务器解压"}},[t._v("#")]),t._v(" 1.上传服务器解压")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@new1 opt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tar xvf kibana-6.3.1-linux-x86_64.tar.gz")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2-修改配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改配置文件"}},[t._v("#")]),t._v(" 2.修改配置文件")]),t._v(" "),s("ul",[s("li",[t._v("配置文件路径")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("kibana-6.3.1-linux-x86_64/config/kibana.yml\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("主要修改点")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("server.host: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.9"')]),t._v("\nelasticsearch.url: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://192.168.0.9:29208"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"_3-启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动"}},[t._v("#")]),t._v(" 3.启动")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@new1 bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./kibana &")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("105994")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@new1 bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   log   [06:32:03.060] [info][status][plugin:kibana@6.3.1] Status changed from uninitialized to green - Ready")]),t._v("\n  log   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("06:32:03.114"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("plugin:elasticsearch@6.3.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Status changed from uninitialized to yellow - Waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Elasticsearch\n  log   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("06:32:03.118"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("plugin:xpack_main@6.3.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Status changed from uninitialized to yellow - Waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Elasticsearch\n  log   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("06:32:03.125"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("plugin:searchprofiler@6.3.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Status changed from uninitialized to yellow - Waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Elasticsearch\n  log   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("06:32:03.130"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("plugin:ml@6.3.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Status changed from uninitialized to yellow - Waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Elasticsearch\n  log   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("06:32:03.173"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("plugin:tilemap@6.3.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Status changed from uninitialized to yellow - Waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Elasticsearch\n  log   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("06:32:03.175"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("plugin:watcher@6.3.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Status changed from uninitialized to yellow - Waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Elasticsearch\n  log   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("06:32:03.192"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("plugin:license_management@6.3.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Status changed from uninitialized to green - Ready\n  log   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("06:32:03.194"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("plugin:index_management@6.3.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Status changed from uninitialized to yellow - Waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Elasticsearch\n  log   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("06:32:03.359"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("plugin:timelion@6.3.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Status changed from uninitialized to green - Ready\n  log   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("06:32:03.362"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("plugin:graph@6.3.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Status changed from uninitialized to yellow - Waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Elasticsearch\n  log   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("06:32:03.365"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("plugin:monitoring@6.3.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Status changed from uninitialized to green - Ready\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("h2",{attrs:{id:"_4-浏览器查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-浏览器查看"}},[t._v("#")]),t._v(" 4.浏览器查看")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/summerking1/image@main/93.png",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);