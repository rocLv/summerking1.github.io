(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{619:function(s,t,a){"use strict";a.r(t);var e=a(32),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[s._v("#")]),s._v(" ElasticSearch")]),s._v(" "),a("blockquote",[a("p",[s._v("Elasticsearch 是基于JSON的分布式搜索和分析引擎，是利用倒排索引实现的全文索引。")])]),s._v(" "),a("h3",{attrs:{id:"优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[s._v("#")]),s._v(" 优势")]),s._v(" "),a("ul",[a("li",[s._v("横向可扩展性: 增加服务器可直接配置在集群中")]),s._v(" "),a("li",[s._v("分片机制提供更好的分布性: 分而治之的方式来提升处理效率")]),s._v(" "),a("li",[s._v("高可用: 提供复制（replica）机制")]),s._v(" "),a("li",[s._v("实时性: 通过将磁盘上的文件放入文件缓存系统来提高查询速度")])]),s._v(" "),a("h3",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),a("ul",[a("li",[s._v("Index: 一系列文档的集合，类似于mysql中数据库的概念")]),s._v(" "),a("li",[s._v("Type: 在Index里面可以定义不同的type，type的概念类似于mysql中表的概念，是一系列具有相同特征数据的结合。")]),s._v(" "),a("li",[s._v("Document: 文档的概念类似于mysql中的一条存储记录，并且为json格式，在Index下的不同type下，可以有许多document。")]),s._v(" "),a("li",[s._v("Shards: 在数据量很大的时候，进行水平的扩展，提高搜索性能")]),s._v(" "),a("li",[s._v("Replicas: 防止某个分片的数据丢失，可以并行在备份数据里及搜索提高性能")])]),s._v(" "),a("h3",{attrs:{id:"cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[s._v("#")]),s._v(" Cluster")]),s._v(" "),a("p",[s._v("代表一个集群，集群中有多个节点，其中有一个为主节点，这个主节点是可以通过选举产生的，主从节点是对于集群内部来说的。es的一个概念就是去中心化，字面上理解就是无中心节点，这是对于集群外部来说的，因为从外部来看es集群，在逻辑上是个整体，你与任何一个节点的通信和与整个es集群通信是等价的。")]),s._v(" "),a("h3",{attrs:{id:"shards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shards"}},[s._v("#")]),s._v(" Shards")]),s._v(" "),a("ul",[a("li",[s._v("代表索引分片，es可以把一个完整的索引分成多个分片，这样的好处是可以把一个大的索引拆分成多个，分布到不同的节点上。构成分布式搜索。分片的数量只能在索引创建前指定，并且索引创建后不能更改。")])]),s._v(" "),a("h3",{attrs:{id:"replicas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replicas"}},[s._v("#")]),s._v(" replicas")]),s._v(" "),a("ul",[a("li",[s._v("代表索引副本，es可以设置多个索引的副本，副本的作用一是提高系统的容错性，当某个节点某个分片损坏或丢失时可以从副本中恢复。二是提高es的查询效率，es会自动对搜索请求进行负载均衡。")])]),s._v(" "),a("h3",{attrs:{id:"recovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recovery"}},[s._v("#")]),s._v(" Recovery")]),s._v(" "),a("ul",[a("li",[s._v("代表数据恢复或叫数据重新分布，es在有节点加入或退出时会根据机器的负载对索引分片进行重新分配，挂掉的节点重新启动时也会进行数据恢复。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);