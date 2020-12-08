(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{513:function(t,e,v){"use strict";v.r(e);var _=v(32),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),v("ol",[v("li",[t._v("rz，sz是Linux/Unix同Windows进行ZModem文件传输的命令行工具。\n优点就是不用再开一个sftp工具登录上去上传下载文件。")]),t._v(" "),v("li",[t._v("sz：将选定的文件发送（send）到本地机器")]),t._v(" "),v("li",[t._v("rz：运行该命令会弹出一个文件选择窗口，从本地选择文件上传到Linux服务器")])]),t._v(" "),v("h2",{attrs:{id:"sz命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sz命令"}},[t._v("#")]),t._v(" sz命令")]),t._v(" "),v("blockquote",[v("p",[t._v("用途说明：sz命令是利用ZModem协议来从Linux服务器传送文件到本地，一次可以传送一个或多个文件。相对应的从本地上传文件到Linux服务器，可以使用rz命令。")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("常用参数")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("-a")]),t._v(" "),v("td",[t._v("以文本方式传输（ascii）")])]),t._v(" "),v("tr",[v("td",[t._v("-b")]),t._v(" "),v("td",[t._v("以二进制方式传输（binary）")])]),t._v(" "),v("tr",[v("td",[t._v("-e")]),t._v(" "),v("td",[t._v("对控制字符转义（escape），这可以保证文件传输正确。")])])])]),t._v(" "),v("ul",[v("li",[t._v("如果能够确定所传输的文件是文本格式的，使用 sz -a files")]),t._v(" "),v("li",[t._v("如果是二进制文件，使用 sz -be files")])]),t._v(" "),v("h2",{attrs:{id:"rz命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rz命令"}},[t._v("#")]),t._v(" rz命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("常用参数")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("-b")]),t._v(" "),v("td",[t._v("以二进制方式，默认为文本方式。（Binary (tell it like it is) file transfer override.）")])]),t._v(" "),v("tr",[v("td",[t._v("-e")]),t._v(" "),v("td",[t._v("对所有控制字符转义。（Force sender to escape all control characters; normally XON, XOFF, DLE, CR-@-CR, and Ctrl-X are escaped.）")])])])]),t._v(" "),v("ul",[v("li",[t._v("如果要保证上传的文件内容在服务器端保存之后与原始文件一致，最好同时设置这两个标志，如下所示方式使用：\n"),v("code",[t._v("rz -be")])]),t._v(" "),v("li",[t._v("此命令执行时，会弹出文件选择对话框，选择好需要上传的文件之后，点确定，就可以开始上传的过程了。上传的速度取决于当时网络的状况。\n如果执行完毕显示“0错误”，文件上传就成功了，其他显示则表示文件上传出现问题了。")])]),t._v(" "),v("p",[t._v("安装命令：\n"),v("code",[t._v("yum install lrzsz")]),t._v("\n从服务端发送文件到客户端：\n"),v("code",[t._v("sz -be filename")]),t._v("\n从客户端上传文件到服务端：\n"),v("code",[t._v("rz -be")]),t._v("\n在弹出的框中选择文件，上传文件的用户和组是当前登录的用户")])])}),[],!1,null,null,null);e.default=r.exports}}]);