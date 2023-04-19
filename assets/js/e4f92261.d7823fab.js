"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2700],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3204:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},o="Serialization",l={unversionedId:"configuration/serialization",id:"version-0.10/configuration/serialization",title:"Serialization",description:"The messages that drasyl nodes send to each other are JVM objects. Message passing between nodes",source:"@site/versioned_docs/version-0.10/configuration/serialization.md",sourceDirName:"configuration",slug:"/configuration/serialization",permalink:"/configuration/serialization",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/versioned_docs/version-0.10/configuration/serialization.md",tags:[],version:"0.10",lastUpdatedAt:1681924260,formattedLastUpdatedAt:"Apr 19, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/configuration/overview"},next:{title:"Logging",permalink:"/configuration/logging"}},s={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Build-in serializers",id:"build-in-serializers",level:2},{value:"Enabled and bound to the serializable classes",id:"enabled-and-bound-to-the-serializable-classes",level:3},{value:"Enabled and must be manually bound",id:"enabled-and-must-be-manually-bound",level:3},{value:"Security notes",id:"security-notes",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"serialization"},"Serialization"),(0,r.kt)("p",null,"The messages that drasyl nodes send to each other are JVM objects. Message passing between nodes\nliving on the same JVM is straightforward: It is done via reference passing. However, messages that\nmust leave the JVM to reach a node running on a different host must go through some form of\nserialization (i.e., the objects must be converted to and from byte arrays)."),(0,r.kt)("p",null,"The serialization mechanism in drasyl allows you to write custom serializers and to define which\nserializer should be used for what."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"In order for drasyl to know which serializer to use for what, you need to edit your configuration:"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl.serialization.serializers"),"-section, bind names to implementations of\n",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/Serializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Serializer")),"\nyou want to use, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'drasyl {\n  serialization {\n    serializers {\n      java = "org.drasyl.node.handler.serialization.JavaSerializer"\n      jackson-json = "org.drasyl.node.handler.serialization.JacksonJsonSerializer"\n      proto = "org.drasyl.node.handler.serialization.ProtobufSerializer"\n      myown = "docs.serialization.MyOwnSerializer"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"After you\u2019ve bound names to different implementations of\n",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/Serializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Serializer")),"\nyou need to wire which classes should be serialized using which serializer. This is done in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl.serialization.bindings.inbound"),"-section for inbound messages and\n",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl.serialization.bindings.outbound"),"-section for outbound messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'drasyl {\n  serialization {\n    serializers {\n      java = "org.drasyl.node.handler.serialization.JavaSerializer"\n      jackson-json = "org.drasyl.node.handler.serialization.JacksonJsonSerializer"\n      proto = "org.drasyl.node.handler.serialization.ProtobufSerializer"\n      myown = "docs.serialization.MyOwnSerializer"\n    }\n    \n    bindings {\n        inbound {\n          "[Ljava.lang.String;" = java\n          "docs.serialization.JsonSerializable" = jackson-json\n          "com.google.protobuf.Message" = proto\n          "docs.serialization.MyOwnSerializable" = myown\n        }\n        \n        outbound {\n          "[Ljava.lang.String;" = java\n          "docs.serialization.JsonSerializable" = jackson-json\n          "com.google.protobuf.Message" = proto\n          "docs.serialization.MyOwnSerializable" = myown\n        }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"You only need to specify the name of an interface or abstract base class of the messages."),(0,r.kt)("h2",{id:"build-in-serializers"},"Build-in serializers"),(0,r.kt)("p",null,"drasyl ships some build-in serializers for the most common object types. Serializers are already\ndefined and bound for the most common message types (Java primives, their wrapper classes, strings,\nand byte arrays). On the other hand, some serializers have to be bound manually to the desired\nclasses."),(0,r.kt)("h3",{id:"enabled-and-bound-to-the-serializable-classes"},"Enabled and bound to the serializable classes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Serializable Classes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"primitive-boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/BooleanSerializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"BooleanSerializer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"primitive-byte")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/ByteSerializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteSerializer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Byte"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"byte"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"primitive-char")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/CharacterSerializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"CharacterSerializer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Character"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"char"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"primitive-float")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/FloatSerializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"FloatSerializer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Float"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"float"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"primitive-int")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/IntegerSerializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"IntegerSerializer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Integer"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"primitive-long")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/LongSerializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"LongSerializer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Long"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"long"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"primitive-short")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/ShortSerializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ShortSerializer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Short"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"short"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/ByteArraySerializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteArraySerializer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"byte[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/StringSerializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"StringSerializer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String"))))),(0,r.kt)("p",null,"So if you only send object types that are included in this table, you don't need to configure\nanything!"),(0,r.kt)("h3",{id:"enabled-and-must-be-manually-bound"},"Enabled and must be manually bound"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Serializable Classes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"java")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/JavaSerializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"JavaSerializer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/7/docs/api/java/io/Serializable.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Serializable")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"jackson-json")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/JacksonJsonSerializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"JacksonJsonSerializer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"all Jackson-compatible classes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"proto")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://api.drasyl.org/master/org/drasyl/node/handler/serialization/ProtobufSerializer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ProtobufSerializer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protobuf ",(0,r.kt)("a",{parentName:"td",href:"https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FasterXML/jackson"},"Serialization with Jackson")," is a good choice in many cases\nand our recommendation if you don\u2019t have other preferences."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers"},"Google Protocol Buffers")," is good if you want more\ncontrol over the schema evolution of your messages, but it requires more work to develop and\nmaintain the mapping between serialized representation and domain representation.")),(0,r.kt)("p",null,"Before binding arbitrary classes to a Serializer, please read the security notes below."),(0,r.kt)("h2",{id:"security-notes"},"Security notes"),(0,r.kt)("p",null,"With this configuration, a developer guarantees that all classes are secure and cannot be misused as\na deserialization gadget in the context of the Serializer. A reckless implementation of a permitted\nclass can leave the entire application and all executing machines vulnerable to remote code\nexecution."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'An attacker is in general interested in all "non-pure" methods, which have promising side\neffects. A method is "pure" if:'),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The execution of the function has no side effects, and"),(0,r.kt)("li",{parentName:"ul"},"the return value of the function depends only on the input parameters passed to the function.")),(0,r.kt)("p",{parentName:"admonition"},"For example, a vulnerability could be a setter or getter that connects to a database.\nA vulnerable class is for example the ch.qos.logback.core.db.DriverManagerConnectionSource.\nAn attacker can choose the URL arbitrarily. By calling getConnection, Server Side Request Forgery (SSRF) and DOS attacks can occur."),(0,r.kt)("p",{parentName:"admonition"},"You can find more about this in the following literature:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/mbechler/marshalsec/master/marshalsec.pdf"},"Java Unmarshaller Security - Turning your data into code execution by Moritz Bechler")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://i.blackhat.com/us-18/Thu-August-9/us-18-Haken-Automated-Discovery-of-Deserialization-Gadget-Chains-wp.pdf"},"Automated Discovery of Deserialization Gadget Chains by Ian Haken")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://frohoff.github.io/appseccali-marshalling-pickles/"},"Marshalling Pickles by Chris Frohoff and Garbriel Lawrence")))))}m.isMDXComponent=!0}}]);