(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{531:function(s,t,n){"use strict";n.r(t);var e=n(32),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"原因"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因")]),s._v(" "),n("p",[s._v("由于k8s的自愈能力，当我们删除一个pod，k8s会自动恢复一个pod\n那么我们如何真正的删掉它呢")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pods")]),s._v("\nNAME                                READY   STATUS    RESTARTS   AGE\nnginx-deployment-5d59d67564-6k5t5   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          30m\nnginx-deployment-5d59d67564-b65tc   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          30m\nnginx-deployment-5d59d67564-hxqhd   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          30m\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl delete pod nginx-deployment-5d59d67564-6k5t5")]),s._v("\npod "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-deployment-5d59d67564-6k5t5"')]),s._v(" deleted\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pods")]),s._v("\nNAME                                READY   STATUS    RESTARTS   AGE\nnginx-deployment-5d59d67564-b65tc   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          32m\nnginx-deployment-5d59d67564-f2t5b   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          14s\nnginx-deployment-5d59d67564-hxqhd   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          32m\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get deployment ")]),s._v("\nNAME               READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("           32m\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl delete deployment nginx-deployment")]),s._v("\ndeployment.apps "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-deployment"')]),s._v(" deleted\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pods")]),s._v("\nNo resources found "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" default namespace.\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("blockquote",[n("p",[n("strong",[s._v("值得注意的是这样删除相当于删除了容器，而images还存在")]),s._v("*")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create -f nginx-service.yaml")]),s._v("\nError from server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AlreadyExists"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": error when creating "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-service.yaml"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" services "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-service"')]),s._v(" already exists\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc")]),s._v("\nNAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        AGE\nkubernetes      ClusterIP   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.1        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/TCP        5d8h\nnginx           NodePort    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.104")]),s._v(".146.241   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":30592/TCP   109m\nnginx-service   NodePort    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.102")]),s._v(".219.158   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v(":32749/TCP   57m\nredis-service   ClusterIP   None             "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/TCP       6h12m\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl delete  svc nginx")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v(" deleted\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl delete  svc nginx-service")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-service"')]),s._v(" deleted\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc")]),s._v("\nNAME            TYPE        CLUSTER-IP   EXTERNAL-IP   PORT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    AGE\nkubernetes      ClusterIP   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.1    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/TCP    5d8h\nredis-service   ClusterIP   None         "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/TCP   6h12m\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);