(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{514:function(t,s,a){"use strict";a.r(s);var n=a(32),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("Linux服务器运行久时，系统时间就会存在一定的误差，一般情况下可以使用date命令进行时间设置，但在做数据库集群分片等操作时对多台机器的时间差是有要求的，此时就需要使用ntpdate进行时间同步")])]),t._v(" "),a("h2",{attrs:{id:"_1-安装ntpdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装ntpdate"}},[t._v("#")]),t._v(" 1.安装ntpdate")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ntpdate -y\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("ntpdate简单用法：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("ntpdate "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v("\nntpdate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("210.72")]),t._v(".145.44\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-date命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-date命令"}},[t._v("#")]),t._v(" 2.date命令")]),t._v(" "),a("ul",[a("li",[t._v("date :查看当前时间\n结果如下：Tue Mar 4 01:36:45 CST 2014")]),t._v(" "),a("li",[t._v("date -s 09:38:40 :设置当前时间\n结果如下：Tue Mar 4 09:38:40 CST 2014")])]),t._v(" "),a("h2",{attrs:{id:"_3-ntpdate命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ntpdate命令"}},[t._v("#")]),t._v(" 3.ntpdate命令")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@summer test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ntpdate -u ntp.api.bz")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":16:26 ntpdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4234")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": adjust "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("114.118")]),t._v(".7.163 offset -0.000128 sec\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@summer test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("注意：若不加上-u参数， 会出现以下提示：no server suitable for synchronization found")])]),t._v(" "),a("ul",[a("li",[t._v("-u：从man ntpdate中可以看出-u参数可以越过防火墙与主机同步；")]),t._v(" "),a("li",[t._v("210.72.145.44：中国国家授时中心的官方服务器。")])]),t._v(" "),a("h2",{attrs:{id:"_4-ntp常用服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-ntp常用服务器"}},[t._v("#")]),t._v(" 4.ntp常用服务器")]),t._v(" "),a("p",[t._v("中国国家授时中心：210.72.145.44\nNTP服务器(上海) ：ntp.api.bz\n美国：time.nist.gov\n复旦：ntp.fudan.edu.cn\n微软公司授时主机(美国) ：time.windows.com\n台警大授时中心(台湾)：asia.pool.ntp.org")]),t._v(" "),a("p",[a("strong",[t._v("中国国家授时中心与NTP上海服务器可以正常同步时间，注意需要加上-u参数！")])]),t._v(" "),a("p",[t._v("ntpdate -u ntp.api.bz")]),t._v(" "),a("p",[t._v("ntpdate -u 210.72.145.44")]),t._v(" "),a("h2",{attrs:{id:"_5-加入crontab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-加入crontab"}},[t._v("#")]),t._v(" 5.加入crontab")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*/20 * * * * /usr/sbin/ntpdate -u ntp.api.bz >/dev/null &"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /var/spool/cron/root\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);