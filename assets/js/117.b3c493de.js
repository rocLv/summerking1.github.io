(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{597:function(s,a,t){"use strict";t.r(a);var e=t(32),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-脚本介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-脚本介绍"}},[s._v("#")]),s._v(" 1.脚本介绍")]),s._v(" "),t("p",[s._v("结合定时任务可每十分钟检索运行的docker容器，如果存在挂掉的容器则全部停止，并按顺序重启容器")]),s._v(" "),t("h2",{attrs:{id:"_2-自动重启docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-自动重启docker"}},[s._v("#")]),s._v(" 2.自动重启docker")]),s._v(" "),t("ul",[t("li",[s._v("由于docker等命令是属于root用户下的，在非root用户下执行如docker ps -a 等命令会报权限问题")]),s._v(" "),t("li",[s._v("添加docker用户组，将非root用户添加至docker组\n"),t("code",[s._v("gpasswd -a 非root docker")])]),s._v(" "),t("li",[s._v("注意重启参数按顺序填写，因为是按顺序重启\n"),t("code",[s._v("./Autodkrestart.sh eureka summer1 zuul summer2")])])]),s._v(" "),t("h2",{attrs:{id:"_3-autodkrestart-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-autodkrestart-sh"}},[s._v("#")]),s._v(" 3.Autodkrestart.sh")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行日志路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("seqLog")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/summer/dkstart.log\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TF1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker inspect --format "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{.State.Running}}'")]),s._v(" $*"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TF2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $TF1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" s/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":space:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("//g"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("correct")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"truetruetruetrue"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$correct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TF2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %H:%M:%S"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' docker各容器正常"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$seqLog")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不正常则停止所有docker容器")]),s._v("\n  docker stop "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aq"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("until")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始启动: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %H:%M:%S"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('开始启动"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$seqLog")]),s._v("\n    docker start "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if_exist")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker inspect --format "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{.State.Running}}'")]),s._v(" $1"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("until")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${if_exist}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if_exist")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker inspect --format "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{.State.Running}}'")]),s._v(" $1"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %H:%M:%S"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('启动成功"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$seqLog")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"等待60s--------------------------"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$seqLog")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shift")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %H:%M:%S"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('===startAll success==="')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$seqLog")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h2",{attrs:{id:"_4-添加定时任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-添加定时任务"}},[s._v("#")]),s._v(" 4.添加定时任务")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -e\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHELL")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/bash\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/sbin:/bin:/usr/sbin:/usr/bin\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAILTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n*/10 * * * * "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/summer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./Autodkrestart.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);