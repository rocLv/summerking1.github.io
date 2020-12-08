(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{599:function(s,a,t){"use strict";t.r(a);var n=t(32),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-安装脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装脚本"}},[s._v("#")]),s._v(" 1.安装脚本")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--------------------------检查mysql-----------------------"')]),s._v("\n\nmysql -V "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"检查到mysql已安装!"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install -y unzip zip &>/dev/null")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "Checking  user :"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${RED}")]),s._v('Error: You must be root to run this script, please use root to install"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v('"')]),s._v(" /etc/passwd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">&")]),s._v("/dev/null\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" -ne "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$group")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -g "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$group")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PASWD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v(" --stdin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n    chage -M "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99999")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"正在解压mysql安装包请稍后.."')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("install_mysql5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$src_dir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mysql_zip")]),s._v(" -d /home/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  install_mysql5\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Execute to create a soft connection")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("soft_connection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/local/mysql /usr/local/mysql.bk"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y%m%d%H%M%S'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /home/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v("/mysql/ /usr/local/mysql\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/bin/mysql /usr/bin/mysql.bk"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y%m%d%H%M%S'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /home/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v("/mysql/bin/mysql /usr/bin/mysql\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/bin/mysqladmin /usr/bin/mysqladmin.bk"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y%m%d%H%M%S'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /home/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v("/mysql/bin/mysqladmin /usr/bin/mysqladmin\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/bin/mysqld /usr/bin/mysqld.bk"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y%m%d%H%M%S'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /home/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v("/mysql/support-files/mysql.server /usr/bin/mysqld\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/my.cnf /etc/my.cnf.bk"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y%m%d%H%M%S'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /home/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v("/mysql/my.cnf /etc/my.cnf\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v(" /home/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v("/\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/my.cnf.\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  soft_connection\n\n  "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("Permissions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown -R $user:$user /home/$user/")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" -R /usr/local/mysql\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+wrx /usr/bin/mysqld\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /usr/bin/mysql\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("644")]),s._v(" /etc/my.cnf\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  Permissions\n\n  mysqld start\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   echo "--------------------create db...wait...--------------------"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("create_db")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    mysql -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql_user}")]),s._v(" -p"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql_passwd}")]),s._v('"')]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${create_db_sql0}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null\n    mysql -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql_user}")]),s._v(" -p"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql_passwd}")]),s._v('"')]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${create_db_sql1}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null\n    mysql -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql_user}")]),s._v(" -p"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql_passwd}")]),s._v('"')]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${create_db_sql2}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  create_db\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   echo "-------------------add port:23306..wait--------------------"')]),s._v("\n  firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23306")]),s._v("/tcp --permanent\n  firewall-cmd --reload\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   echo "--------------------配置远程连接..wait----------------------"')]),s._v("\n  mysql -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql_user}")]),s._v(" -p"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql_passwd}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$conf_dir")]),s._v("/mysql5.sql "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null\n\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--------------------本机安装mysql5成功----------------------"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);