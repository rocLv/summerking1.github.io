(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{617:function(t,s,n){"use strict";n.r(s);var v=n(32),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("ol",[n("li",[n("p",[n("strong",[t._v("完全基于内存")]),t._v("，绝大部分请求是纯粹的内存操作，非常快速。数据存在内存中，类似于 HashMap，HashMap 的优势就是查找和操作的时间复杂度都是O(1)；")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("数据结构简单")]),t._v("，对数据操作也简单，Redis 中的数据结构是专门进行设计的；")])]),t._v(" "),n("li",[n("p",[t._v("采用"),n("strong",[t._v("单线程")]),t._v("，避免了不必要的上下文切换和竞争条件，也不存在多进程或者多线程导致的切换而消耗CPU，不用去考虑各种锁的问题，不存在加锁释放锁操作，没有因为可能出现死锁而导致的性能消耗；")])]),t._v(" "),n("li",[n("p",[t._v("使用"),n("strong",[t._v("多路 I/O 复用")]),t._v("模型，非阻塞 IO；")])]),t._v(" "),n("li",[n("p",[t._v("使用"),n("strong",[t._v("底层模型不同")]),t._v("，它们之间底层实现方式以及与客户端之间通信的应用协议不一样，Redis 直接自己构建了VM机制,因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求；")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);