(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{503:function(s,a,e){"use strict";e.r(a);var t=e(32),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-进入docker容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-进入docker容器"}},[s._v("#")]),s._v(" 1.进入docker容器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("./mysqldump -uroot -pXXXXX zabbix  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" zabbix.sql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-复制出来"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-复制出来"}},[s._v("#")]),s._v(" 2.复制出来")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 80a55ac6456d:/usr/bin/zabbix.sql /home/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_3-恢复："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-恢复："}},[s._v("#")]),s._v(" 3.恢复：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker cp zabbix.sql 671f0f909ab6:/etc/\nroot@671f0f909ab6:/etc# mysql -uroot -pXXXX zabbix <zabbix.sql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);