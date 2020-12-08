(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{598:function(s,a,t){"use strict";t.r(a);var n=t(32),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-卸载存在的java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-卸载存在的java"}},[s._v("#")]),s._v(" 1.卸载存在的java")]),s._v(" "),t("p",[s._v("卸载掉现有的JAVA版本的话，可以使用\n"),t("code",[s._v("rpm -qa | grep java")]),s._v(" 和 "),t("code",[s._v("rpm -e xxx --nodeps")]),s._v("进行卸载")]),s._v(" "),t("h2",{attrs:{id:"_2-安装脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装脚本"}},[s._v("#")]),s._v(" 2.安装脚本")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"----------------------------------------------------------"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("install_java")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"检查java......"')]),s._v("\n    java -version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"检查到java已安装!"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装jdk")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$src_dir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh jdk-8u171-linux-x64.rpm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null\n        "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"sed -i '/export CLASSPATH/d' /etc/profile\"")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除已经存在的CLASSPATH环境变量")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("/etc/profile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nexport JAVA_HOME=/usr/java/latest\nexport PATH="),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(" \nexport CLASSPATH=.:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/dt.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/tools.jar\nEOF")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷新环境变量")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java环境安装完成......"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\ninstall_java\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);