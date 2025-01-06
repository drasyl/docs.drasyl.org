"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3130],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=d(t),m=a,u=g["".concat(s,".").concat(m)]||g[m]||p[m]||i;return t?r.createElement(u,l(l({ref:n},c),{},{components:t})):r.createElement(u,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(8168),a=(t(6540),t(5680));const i={sidebar_position:30},l="Remote Message Invocation",o={unversionedId:"advanced-usage/remote-message-invocation",id:"advanced-usage/remote-message-invocation",title:"Remote Message Invocation",description:"This page shows you how to invoke remote objects served by other drasyl nodes.",source:"@site/docs/advanced-usage/remote-message-invocation.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/remote-message-invocation",permalink:"/master/advanced-usage/remote-message-invocation",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/docs/advanced-usage/remote-message-invocation.md",tags:[],version:"current",lastUpdatedAt:1736180205,formattedLastUpdatedAt:"Jan 6, 2025",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Publish/Subscribe Messaging",permalink:"/master/advanced-usage/publish-subscribe"},next:{title:"Membership Management",permalink:"/master/advanced-usage/membership-management"}},s={},d=[{value:"Add Dependency",id:"add-dependency",level:3},{value:"Creating the Server",id:"creating-the-server",level:2},{value:"Defining the Contract",id:"defining-the-contract",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Registering the Service",id:"registering-the-service",level:2},{value:"Creating a RMI Server",id:"creating-a-rmi-server",level:3},{value:"Binding the Remote Object",id:"binding-the-remote-object",level:3},{value:"Creating the Client",id:"creating-the-client",level:2},{value:"Lookup for the Remote Object",id:"lookup-for-the-remote-object",level:3},{value:"Example",id:"example",level:2},{value:"Further Reading",id:"further-reading",level:2},{value:"Who Called Me?",id:"who-called-me",level:3},{value:"Adjust Timeout",id:"adjust-timeout",level:3}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,a.yg)("wrapper",(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"remote-message-invocation"},"Remote Message Invocation"),(0,a.yg)("p",null,"This page shows you how to invoke remote objects served by other drasyl nodes.\nThis feature is similar to ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_remote_method_invocation"},"Java Remote Message Invocation")," but uses drasyl as the transport rather than TCP."),(0,a.yg)("p",null,"To use this feature, you have to use the ",(0,a.yg)("a",{parentName:"p",href:"/master/advanced-usage/bootstrapping"},"bootstrapping interface"),", where you have to customize the server channel's ChannelInitializer."),(0,a.yg)("h3",{id:"add-dependency"},"Add Dependency"),(0,a.yg)("p",null,"Maven:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.drasyl</groupId>\n    <artifactId>drasyl-extras</artifactId>\n    <version>0.11.0-SNAPSHOT</version>\n</dependency>\n")),(0,a.yg)("p",null,"Other dependency managers:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'Gradle : compile "org.drasyl:drasyl-extras:0.11.0-SNAPSHOT" // build.gradle \n   Ivy : <dependency org="org.drasyl" name="drasyl-extras" rev="0.11.0-SNAPSHOT" conf="build" /> // ivy.xml\n   SBT : libraryDependencies += "org.drasyl" % "drasyl-extras" % "0.11.0-SNAPSHOT" // build.sbt\n')),(0,a.yg)("h2",{id:"creating-the-server"},"Creating the Server"),(0,a.yg)("p",null,"There are two steps needed to create a remote message invocation (RMI) server:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Create an interface defining the client/server contract."),(0,a.yg)("li",{parentName:"ul"},"Create an implementation of that interface.")),(0,a.yg)("h3",{id:"defining-the-contract"},"Defining the Contract"),(0,a.yg)("p",null,"First of all, let's create the interface for the object want to invoke remotely."),(0,a.yg)("p",null,"As drasyl is asynchronous, each method declared in the interface must have the return\ntype ",(0,a.yg)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Future.html"},(0,a.yg)("inlineCode",{parentName:"a"},"Future")),"\nor ",(0,a.yg)("inlineCode",{parentName:"p"},"void"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java",metastring:'title="MessengerService.java"',title:'"MessengerService.java"'},"import io.netty.util.concurrent.Future;\n\npublic interface MessengerService {\n    Future<String> sendMessage(final String clientMessage);\n}\n")),(0,a.yg)("p",null,"Note, though, that drasyl supports the full Java specification for method signatures, as long as the Java\ntypes are serializable by ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson-docs#tutorials"},"Jackson"),". We'll see in\nfuture sections how both the client and the server will use this interface. For the server, we'll\ncreate the implementation, often referred to as the ",(0,a.yg)("em",{parentName:"p"},"Remote Object"),". For the client, ",(0,a.yg)("strong",{parentName:"p"},"the we will\ndynamically create an implementation called a ",(0,a.yg)("em",{parentName:"strong"},"Stub")),"."),(0,a.yg)("h3",{id:"implementation"},"Implementation"),(0,a.yg)("p",null,"Furthermore, let's implement the remote interface, again called the ",(0,a.yg)("em",{parentName:"p"},"Remote Object"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java",metastring:'title="MessengerServiceImpl.java"',title:'"MessengerServiceImpl.java"'},'import io.netty.util.concurrent.*;\n\npublic class MessengerServiceImpl implements MessengerService {\n    @Override\n    public Future<String> sendMessage(final String clientMessage) {\n        final String result = "Client Message".equals(clientMessage) ? "Server Message" : null;\n        return new SucceededFuture<>(ImmediateEventExecutor.INSTANCE, result);\n    }\n\n    public String unexposedMethod() { /* code */ }\n}\n')),(0,a.yg)("p",null,"Notice that any additional methods defined in the remote object, but not in the interface, remain\ninvisible for the client."),(0,a.yg)("h2",{id:"registering-the-service"},"Registering the Service"),(0,a.yg)("p",null,"Once we created the remote implementation, we need to bind the remote object to a RMI server."),(0,a.yg)("h3",{id:"creating-a-rmi-server"},"Creating a RMI Server"),(0,a.yg)("p",null,"First, we need to create a drasyl node that contains a RMI server serving our remote object:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java",metastring:'title="RmiServer.java"',title:'"RmiServer.java"'},"import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.channel.ChannelPipeline;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.rmi.*;\nimport org.drasyl.identity.Identity;\n\npublic class RmiServer {\n    public static void main(final String[] args) {\n        final Identity identity = /* code */;\n\n        // create server\n        // highlight-start\n        final RmiServerHandler server = new RmiServerHandler();\n        // highlight-end\n\n        // bootstrap node with server added to the pipeline\n        final ServerBootstrap b = new ServerBootstrap()\n                .group(new DefaultEventLoopGroup())\n                .channel(DrasylServerChannel.class)\n                .handler(new TraversingDrasylServerChannelInitializer(identity, new NioEventLoopGroup(1), 22527) {\n                    @Override\n                    protected void initChannel(final DrasylServerChannel ch) {\n                        super.initChannel(ch);\n\n                        final ChannelPipeline p = ch.pipeline();\n\n                        // highlight-start\n                        p.addLast(new RmiCodec());\n                        p.addLast(server);\n                        // highlight-end\n                    }\n                })\n                .childHandler(/* code */);\n    }\n}\n")),(0,a.yg)("h3",{id:"binding-the-remote-object"},"Binding the Remote Object"),(0,a.yg)("p",null,"We can now create and bind our remote object to the RMI server. Each binding is identified by a unique\nkey."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java",metastring:'title="RmiServer.java"',title:'"RmiServer.java"'},'import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.channel.ChannelPipeline;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.rmi.*;\nimport org.drasyl.identity.Identity;\n\npublic class RmiServer {\n    public static void main(final String[] args) {\n        /* code */\n\n        // highlight-start\n        // create remote object\n        final MessengerService service = new MessengerServiceImpl();\n\n        // bind to server\n        server.bind("MessengerService", service);\n        // highlight-end\n    }\n}\n')),(0,a.yg)("h2",{id:"creating-the-client"},"Creating the Client"),(0,a.yg)("p",null,"Finally, let's write the client to invoke the remote object's methods."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java",metastring:'title="RmiClient.java"',title:'"RmiClient.java"'},"import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.channel.ChannelPipeline;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.rmi.*;\nimport org.drasyl.identity.Identity;\n\npublic class RmiClient {\n    public static void main(final String[] args) {\n        final Identity identity = /* code */;\n        \n        // highlight-start\n        // create client\n        final RmiClientHandler client = new RmiClientHandler();\n        // highlight-end\n\n        // bootstrap node with client added to the pipeline\n        final ServerBootstrap b = new ServerBootstrap()\n                .group(new DefaultEventLoopGroup())\n                .channel(DrasylServerChannel.class)\n                .handler(new TraversingDrasylServerChannelInitializer(identity,new NioEventLoopGroup(1), 0) {\n                    @Override\n                    protected void initChannel(final DrasylServerChannel ch) {\n                        super.initChannel(ch);\n\n                        final ChannelPipeline p = ch.pipeline();\n\n                        // highlight-start\n                        p.addLast(new RmiCodec());\n                        p.addLast(client);\n                        // highlight-end\n                    }\n                })\n                .childHandler(/* code */);\n    }\n}\n")),(0,a.yg)("h3",{id:"lookup-for-the-remote-object"},"Lookup for the Remote Object"),(0,a.yg)("p",null,"We can now look up the remote object using the bounded unique key and the address of the RMI server's node.\nAnd finally, we'll invoke the ",(0,a.yg)("inlineCode",{parentName:"p"},"sendMessage")," method:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java",metastring:'title="RmiClient.java"',title:'"RmiClient.java"'},'import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.channel.ChannelPipeline;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport io.netty.util.concurrent.FutureListener;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.rmi.*;\nimport org.drasyl.identity.*;\n\npublic class RmiClient {\n    public static void main(final String[] args) {\n        /* code */\n        \n        // highlight-start\n        // lookup\n        final DrasylAddress serverAddress = /* code */;\n        final MessengerService service = client.lookup("MessengerService", MessengerService.class, serverAddress);\n\n        // invoke\n        service.sendMessage("Client Message").addListener((FutureListener<String>) future -> {\n            if (future.isSuccess()) {\n                System.out.println("Succeeded: " + future.getNow());\n            }\n            else {\n                System.err.println("Errored:");\n                future.cause().printStackTrace();\n            }\n        });\n        // highlight-end\n    }\n}\n')),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"A fully working example can be found ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/tree/master/drasyl-examples/src/main/java/org/drasyl/example/rmi"},"here"),"."),(0,a.yg)("h2",{id:"further-reading"},"Further Reading"),(0,a.yg)("h3",{id:"who-called-me"},"Who Called Me?"),(0,a.yg)("p",null,"You may be interested in getting to know who called you. For this, you must add a field of\ntype ",(0,a.yg)("inlineCode",{parentName:"p"},"DrasylAddress")," and annotate it with ",(0,a.yg)("inlineCode",{parentName:"p"},"RmiCaller"),". drasyl will then inject the current caller to\nthis variable before every invocation."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java",metastring:'title="MessengerServiceImpl.java"',title:'"MessengerServiceImpl.java"'},'import io.netty.util.concurrent.*;\nimport org.drasyl.handler.rmi.annotation.RmiCaller;\nimport org.drasyl.identity.DrasylAddress;\n\npublic class MessengerServiceImpl implements MessengerService {\n    // highlight-start\n    @RmiCaller\n    private DrasylAddress caller;\n    // highlight-end\n\n    @Override\n    public Future<String> sendMessage(final String clientMessage) {\n        // highlight-start\n        System.out.println("Called by: " + caller);\n        // highlight-end\n        /* code */\n    }\n}\n')),(0,a.yg)("p",null,"Note to save the ",(0,a.yg)("inlineCode",{parentName:"p"},"caller")," value when doing asynchronous operations. Otherwise, it might be possible\nthat a subsequent invocation has already changed the ",(0,a.yg)("inlineCode",{parentName:"p"},"caller")," field."),(0,a.yg)("h3",{id:"adjust-timeout"},"Adjust Timeout"),(0,a.yg)("p",null,"By default, all invocations will timeout after 60 seconds by completing the future exceptionally with a ",(0,a.yg)("inlineCode",{parentName:"p"},"RmiException"),".\nBut you can customize this value per class and method.\nTo do so, just add the annotation ",(0,a.yg)("inlineCode",{parentName:"p"},"RmiTimeout")," to your implementation class or method.\nA class annotation will override the default value, while a method annotation will override any class annotation."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java",metastring:'title="MessengerServiceImpl.java"',title:'"MessengerServiceImpl.java"'},"import io.netty.util.concurrent.Future;\nimport org.drasyl.handler.rmi.annotation.RmiTimeout;\n\npublic class MessengerServiceImpl implements MessengerService {\n    // highlight-start\n    @RmiTimeout(5_000L)\n    // highlight-end\n    @Override\n    public Future<String> sendMessage(final String clientMessage) {\n        /* code */\n    }\n}\n\n")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"This page is an adapted version of the ",(0,a.yg)("a",{parentName:"em",href:"https://www.baeldung.com/java-rmi"},"Java RMI tutorial by Baeldung"),".")))}p.isMDXComponent=!0}}]);