(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{564:function(s,t,n){"use strict";n.r(t);var a=n(32),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-参考之前的文章做好以下几点："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-参考之前的文章做好以下几点："}},[s._v("#")]),s._v(" 1.参考之前的文章做好以下几点：")]),s._v(" "),n("ul",[n("li",[s._v("下载kubernetes 离线安装包.")]),s._v(" "),n("li",[s._v("下载最新版本sealos.")]),s._v(" "),n("li",[s._v("务必同步服务器时间")]),s._v(" "),n("li",[s._v("主机名不可重复")])]),s._v(" "),n("p",[s._v("然后，一条命令搞定k8s集群（哭了）")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps -a")]),s._v("\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\ntotal "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("650176")]),s._v("\n-rw-------. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1259")]),s._v(" Oct "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":21 anaconda-ks.cfg\n-rw-r--r--. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("639178706")]),s._v(" May "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":40 kube1.18.0.tar.gz\n-rw-r--r--. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26593448")]),s._v(" Oct "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":11 sealos\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod +x sealos && mv sealos /usr/bin ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\ntotal "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("624204")]),s._v("\n-rw-------. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1259")]),s._v(" Oct "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":21 anaconda-ks.cfg\n-rw-r--r--. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("639178706")]),s._v(" May "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":40 kube1.18.0.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pwd")]),s._v("\n/root\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sealos init --passwd hadoop \\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --master "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.190 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --node "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.191 --node "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.192 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --pkg-url /root/kube1.18.0.tar.gz "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --version v1.18.0\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:30 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:13"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.190:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:30 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEBG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:25"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.190:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("command result is: master\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:30 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:58"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.190:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/hosts "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" master "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.0.190 master'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:30 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:51"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.190:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1   master\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:30 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("check.go:52"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.190:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  ------------ check ok\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:30 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:13"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.191:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:31 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEBG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:25"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.191:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("command result is: node1\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:31 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:58"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.191:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/hosts "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" node1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.0.191 node1'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:31 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:51"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.191:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1   node1\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:31 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("check.go:52"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.191:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  ------------ check ok\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:31 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:13"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.192:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:31 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEBG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:25"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.192:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("command result is: node2\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:31 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:58"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.192:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/hosts "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" node2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.0.192 node2'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:32 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:51"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.192:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1   node2\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:32 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("check.go:52"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.192:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  ------------ check ok\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:32 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("print.go:13"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("globals"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("sealos config is:  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hosts"')]),s._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.190:22"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.191:22"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.192:22"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Masters"')]),s._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.190:22"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Nodes"')]),s._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.191:22"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.192:22"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:32 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:58"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.192:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/bin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:32 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:58"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.191:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/bin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:32 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh.go:58"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.190:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/bin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:32 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEBG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("download.go:29"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.191:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("please "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wait")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" mkDstDir\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":16:32 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DEBG"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("download.go:31"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.191:22"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("please "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wait")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" before hook\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".喝杯咖啡等待即可\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br")])]),n("h2",{attrs:{id:"_2-验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-验证"}},[s._v("#")]),s._v(" 2.验证")]),s._v(" "),n("p",[s._v("差不多15分钟就搭建好了!（又哭了）\n感谢sealyun大佬，如官网所描述>>>>>>>纵享丝滑")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("16:34:30 [INFO] [ssh.go:58] [ssh][192.168.0.191:22] rm -rf /root/kube\n16:34:31 [DEBG] [print.go:20] ==>SendPackage==>KubeadmConfigInstall==>InstallMaster0==>JoinMasters==>JoinNodes\n16:34:31 [INFO] [print.go:25] sealos install success.\n\n      ___           ___           ___           ___       ___           ___     \n     /\\  \\         /\\  \\         /\\  \\         /\\__\\     /\\  \\         /\\  \\    \n    /::\\  \\       /::\\  \\       /::\\  \\       /:/  /    /::\\  \\       /::\\  \\   \n   /:/\\ \\  \\     /:/\\:\\  \\     /:/\\:\\  \\     /:/  /    /:/\\:\\  \\     /:/\\ \\  \\  \n  _\\:\\~\\ \\  \\   /::\\~\\:\\  \\   /::\\~\\:\\  \\   /:/  /    /:/  \\:\\  \\   _\\:\\~\\ \\  \\ \n /\\ \\:\\ \\ \\__\\ /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:\\__\\ /:/__/    /:/__/ \\:\\__\\ /\\ \\:\\ \\ \\__\\\n \\:\\ \\:\\ \\/__/ \\:\\~\\:\\ \\/__/ \\/__\\:\\/:/  / \\:\\  \\    \\:\\  \\ /:/  / \\:\\ \\:\\ \\/__/\n  \\:\\ \\:\\__\\    \\:\\ \\:\\__\\        \\::/  /   \\:\\  \\    \\:\\  /:/  /   \\:\\ \\:\\__\\  \n   \\:\\/:/  /     \\:\\ \\/__/        /:/  /     \\:\\  \\    \\:\\/:/  /     \\:\\/:/  /  \n    \\::/  /       \\:\\__\\         /:/  /       \\:\\__\\    \\::/  /       \\::/  /   \n     \\/__/         \\/__/         \\/__/         \\/__/     \\/__/         \\/__/  \n\n                  官方文档：sealyun.com\n                  项目地址：github.com/fanux/sealos\n                  QQ群   ：98488045\n                  常见问题：sealyun.com/faq\n\n[root@master ~]# kubectl get node\nNAME     STATUS   ROLES    AGE   VERSION\nmaster   Ready    master   88s   v1.18.0\nnode1    Ready    <none>   57s   v1.18.0\nnode2    Ready    <none>   57s   v1.18.0\n[root@master ~]# kubectl get pod --all-namespaces\nNAMESPACE     NAME                                       READY   STATUS    RESTARTS   AGE\nkube-system   calico-kube-controllers-84445dd79f-57xsb   1/1     Running   0          92s\nkube-system   calico-node-48vmr                          1/1     Running   0          77s\nkube-system   calico-node-rzp45                          1/1     Running   0          80s\nkube-system   calico-node-w2jbx                          1/1     Running   0          92s\nkube-system   coredns-66bff467f8-cjhdr                   1/1     Running   0          92s\nkube-system   coredns-66bff467f8-g2kxl                   1/1     Running   0          92s\nkube-system   etcd-master                                1/1     Running   0          99s\nkube-system   kube-apiserver-master                      1/1     Running   0          99s\nkube-system   kube-controller-manager-master             1/1     Running   0          99s\nkube-system   kube-proxy-7cnrg                           1/1     Running   0          80s\nkube-system   kube-proxy-7l84h                           1/1     Running   0          77s\nkube-system   kube-proxy-ld98f                           1/1     Running   0          92s\nkube-system   kube-scheduler-master                      1/1     Running   0          99s\nkube-system   kube-sealyun-lvscare-node1                 1/1     Running   0          66s\nkube-system   kube-sealyun-lvscare-node2                 1/1     Running   0          73s\n[root@master ~]# \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])]),n("ul",[n("li",[s._v("增加master")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("sealos "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --master "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6 --master "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.7\nsealos "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --master "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6-192.168.0.9  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者多个连续IP")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("增加node")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("sealos "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --node "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6 --node "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.7\nsealos "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" --node "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6-192.168.0.9  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者多个连续IP")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("删除指定master节点")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("注意clean不加任何参数会清理整个集群\nsealos clean --master "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6 --master "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.7\nsealos clean --master "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.6-192.168.0.9  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者多个连续IP")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("删除指定node节点")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sealos clean --node 192.168.0.6 --node 192.168.0.7\nsealos clean --node 192.168.0.6-192.168.0.9  # 或者多个连续IP\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_3-dashboard访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-dashboard访问"}},[s._v("#")]),s._v(" 3.dashboard访问")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("sealos "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --pkg-url https://github.com/sealstore/dashboard/releases/download/v2.0.0-bata5/dashboard.tar\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("使用上述命令安装完dashboard后日志中会输出token，登录页面时需要使用.")]),s._v(" "),n("p",[s._v("https://你的master地址:32000 chrome访问不了就用火狐")]),s._v(" "),n("p",[s._v("或者使用此命令获取token")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("kubectl get secret -nkubernetes-dashboard "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl get secret -n kubernetes-dashboard"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" dashboard-token "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("}'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -o "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{.data.token}'")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" base64 --decode\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);