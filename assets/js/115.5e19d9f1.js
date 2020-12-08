(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{595:function(t,e,v){"use strict";v.r(e);var _=v(32),l=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"pv、pvc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pv、pvc"}},[t._v("#")]),t._v(" PV、PVC")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("PersistentVolume（持久卷） 和 PersistentVolumeClaim（持久卷申请）")])]),t._v(" "),v("li",[v("p",[t._v("PersistentVolume (PV) 是外部存储系统中的一块存储空间，由管理员创建和维护。与 Volume 一样，PV 具有持久性，生命周期独立于 Pod。")])]),t._v(" "),v("li",[v("p",[t._v("PersistentVolumeClaim (PVC) 是对 PV 的申请 (Claim)。PVC 通常由普通用户创建和维护。需要为 Pod 分配存储资源时，用户可以创建一个 PVC，指明存储资源的容量大小和访问模式（比如只读）等信息，Kubernetes 会查找并提供满足条件的 PV")])])]),t._v(" "),v("h3",{attrs:{id:"_1-什么是持久化？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是持久化？"}},[t._v("#")]),t._v(" 1.什么是持久化？")]),t._v(" "),v("p",[t._v("狭义的理解: “持久化”仅仅指把域对象永久保存到数据库中；广义的理解,“持久化”包括和数据库相关的各种操作。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("保存：把域对象永久保存到数据库。")])]),t._v(" "),v("li",[v("p",[t._v("更新：更新数据库中域对象的状态。")])]),t._v(" "),v("li",[v("p",[t._v("删除：从数据库中删除一个域对象。")])]),t._v(" "),v("li",[v("p",[t._v("加载：根据特定的OID，把一个域对象从数据库加载到内存。")])]),t._v(" "),v("li",[v("p",[t._v("查询：根据特定的查询条件，把符合查询条件的一个或多个域对象从数据库加载内在存中。")])])]),t._v(" "),v("h3",{attrs:{id:"_2．为什么要持久化？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2．为什么要持久化？"}},[t._v("#")]),t._v(" 2．为什么要持久化？")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("持久化技术封装了数据访问细节，为大部分业务逻辑提供面向对象的API。")])]),t._v(" "),v("li",[v("p",[t._v("通过持久化技术可以减少访问数据库数据次数，增加应用程序执行速度；")])]),t._v(" "),v("li",[v("p",[t._v("代码重用性高，能够完成大部分数据库操作；")])]),t._v(" "),v("li",[v("p",[t._v("松散耦合，使持久化不依赖于底层数据库和上层业务逻辑实现，更换数据库时只需修改配置文件而不用修改代码。")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);