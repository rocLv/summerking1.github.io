(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{497:function(s,a,t){"use strict";t.r(a);var n=t(32),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-查找并拷贝zabbix监控mysql模板文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-查找并拷贝zabbix监控mysql模板文件"}},[s._v("#")]),s._v(" 1.查找并拷贝Zabbix监控Mysql模板文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@new1 mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# find / -name user*_mysql.conf")]),s._v("\n/usr/share/doc/zabbix-agent-5.0.3/userparameter_mysql.conf\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@new1 mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp /usr/share/doc/zabbix-agent-5.0.3/userparameter_mysql.conf /etc/zabbix/zabbix_agentd.d/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@new1 mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown -R zabbix:zabbix /etc/zabbix/zabbix_agentd.d/userparameter_mysql.conf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@new1 mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod a+x -R /etc/zabbix/zabbix_agentd.d/userparameter_mysql.conf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@new1 mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /var/lib/zabbix/.my.cnf")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"_2-配置-my-cnf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-my-cnf"}},[s._v("#")]),s._v(" 2.配置.my.cnf")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@new1 zabbix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /var/lib/zabbix/.my.cnf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root       \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("password")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hadoop     \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("socket")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/smartmining/mysql/mysql.sock\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqladmin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("password")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hadoop\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("socket")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/smartmining/mysql/mysql.sock\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@new1 zabbix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("strong",[s._v("注意：此处socket位置根据实际情况填写，可以通过ps aux|grep mysql 查看进程看到，也可以查看mysql配置文件，也可以find去查找，一定要写对数据库文件位置。")])]),s._v(" "),t("h2",{attrs:{id:"_3-重启agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-重启agent"}},[s._v("#")]),s._v(" 3.重启agent")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart zabbix-agent")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",[t("li",[t("p",[s._v("添加模板\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/summerking1/image@main/11.png",alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("配置动作\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/summerking1/image@main/12.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/summerking1/image@main/13.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/summerking1/image@main/14.png",alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("验证\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/summerking1/image@main/15.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/summerking1/image@main/16.png",alt:""}}),s._v(" "),t("strong",[s._v("注意")]),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/summerking1/image@main/17.png",alt:""}})]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("zabbix  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       NOPASSWD:ALL\nDefaults:zabbix    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("requiretty\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);