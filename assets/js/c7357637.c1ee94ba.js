"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[818],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>b});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),d=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),b=a,h=u["".concat(o,".").concat(b)]||u[b]||c[b]||i;return r?t.createElement(h,s(s({ref:n},p),{},{components:r})):t.createElement(h,s({ref:n},p))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<i;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4555:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(7462),a=(r(7294),r(3905));const i={sidebar_position:20},s="Publish/Subscribe Messaging",l={unversionedId:"advanced-usage/publish-subscribe",id:"advanced-usage/publish-subscribe",title:"Publish/Subscribe Messaging",description:"Publish/Subscribe is messaging pattern where senders of messages (a so-called publisher) do not directly send messages to specific receivers (so-called subscriber).",source:"@site/docs/advanced-usage/publish-subscribe.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/publish-subscribe",permalink:"/master/advanced-usage/publish-subscribe",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/docs/advanced-usage/publish-subscribe.md",tags:[],version:"current",lastUpdatedAt:1736013004,formattedLastUpdatedAt:"Jan 4, 2025",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Bootstrapping",permalink:"/master/advanced-usage/bootstrapping"},next:{title:"Remote Message Invocation",permalink:"/master/advanced-usage/remote-message-invocation"}},o={},d=[{value:"Add Dependency",id:"add-dependency",level:3},{value:"Broker",id:"broker",level:2},{value:"Subscriber",id:"subscriber",level:2},{value:"Publisher",id:"publisher",level:2},{value:"Example",id:"example",level:2}],p={toc:d};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"publishsubscribe-messaging"},"Publish/Subscribe Messaging"),(0,a.kt)("p",null,"Publish/Subscribe is messaging pattern where senders of messages (a so-called publisher) do not directly send messages to specific receivers (so-called subscriber).\nInstead, all published messages are categorizes and are sent to a broker.\nThis broker keeps track of each subsciber's interests and will forward published messages accordingly."),(0,a.kt)("p",null,"On this page, you will learn how this messagging pattern is used with drasyl.\nWe provide ready-to-use broker, subscriber, and publisher components for simple topic-based communication."),(0,a.kt)("h3",{id:"add-dependency"},"Add Dependency"),(0,a.kt)("p",null,"Maven:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.drasyl</groupId>\n    <artifactId>drasyl-extras</artifactId>\n    <version>0.11.0-SNAPSHOT</version>\n</dependency>\n")),(0,a.kt)("p",null,"Other dependency managers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Gradle : compile "org.drasyl:drasyl-extras:0.11.0-SNAPSHOT" // build.gradle \n   Ivy : <dependency org="org.drasyl" name="drasyl-extras" rev="0.11.0-SNAPSHOT" conf="build" /> // ivy.xml\n   SBT : libraryDependencies += "org.drasyl" % "drasyl-extras" % "0.11.0-SNAPSHOT" // build.sbt\n')),(0,a.kt)("h2",{id:"broker"},"Broker"),(0,a.kt)("p",null,"The first thing we need to do is create a broker.\nFor this you have to use the ",(0,a.kt)("a",{parentName:"p",href:"/master/advanced-usage/bootstrapping"},"bootstrapping interface"),", where you have to customize the server channel's ChannelInitializer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Broker.java"',title:'"Broker.java"'},"import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.channel.ChannelPipeline;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.pubsub.*;\nimport org.drasyl.identity.Identity;\n\npublic class Broker {\n    public static void main(final String[] args) {\n        final Identity identity = /* code */;\n\n        final ServerBootstrap b = new ServerBootstrap()\n                .group(new DefaultEventLoopGroup())\n                .channel(DrasylServerChannel.class)\n                .handler(new TraversingDrasylServerChannelInitializer(identity, new NioEventLoopGroup(1), 22527) {\n                    @Override\n                    protected void initChannel(final DrasylServerChannel ch) {\n                        super.initChannel(ch);\n\n                        final ChannelPipeline p = ch.pipeline();\n\n                        // highlight-start\n                        p.addLast(new PubSubCodec());\n                        p.addLast(new PubSubBrokerHandler());\n                        // highlight-end\n                    }\n                })\n                .childHandler(/* code */);\n    }\n}\n\n")),(0,a.kt)("h2",{id:"subscriber"},"Subscriber"),(0,a.kt)("p",null,"A subscriber which prints all received messages via ",(0,a.kt)("inlineCode",{parentName:"p"},"System.out")," is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Subscriber.java"',title:'"Subscriber.java"'},'import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.buffer.ByteBufUtil;\nimport io.netty.channel.*;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.pubsub.*;\nimport org.drasyl.identity.*;\nimport static java.nio.charset.StandardCharsets.UTF_8;\n\npublic class Subscriber {\n    public static void main(final String[] args) {\n        final Identity identity = /* code */;\n        final DrasylAddress brokerAddress = /* code */;\n\n        final ServerBootstrap b = new ServerBootstrap()\n                .group(new DefaultEventLoopGroup())\n                .channel(DrasylServerChannel.class)\n                .handler(new TraversingDrasylServerChannelInitializer(identity, new NioEventLoopGroup(1), 0) {\n                    @Override\n                    protected void initChannel(final DrasylServerChannel ch) {\n                        super.initChannel(ch);\n\n                        final ChannelPipeline p = ch.pipeline();\n                        \n                        // highlight-start\n                        p.addLast(new PubSubCodec());\n                        p.addLast(new PubSubSubscribeHandler(brokerAddress));\n                        p.addLast(new SimpleChannelInboundHandler<PubSubPublish>() {\n                            @Override\n                            protected void channelRead0(ChannelHandlerContext ctx,\n                                                        PubSubPublish msg) {\n                                System.out.println("Got publication for topic `" + msg.getTopic() + "`: " + new String(ByteBufUtil.getBytes(msg.getContent()), UTF_8));\n                            }\n                        });\n                        // highlight-end\n                    }\n                })\n                .childHandler(/* code */);\n    }\n}\n')),(0,a.kt)("p",null,"Using specialized messages, the subscriber can now be instructed to (de)subscribe to specific topics:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Subscriber.java"',title:'"Subscriber.java"'},'import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.buffer.ByteBufUtil;\nimport io.netty.channel.*;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.pubsub.*;\nimport org.drasyl.identity.*;\nimport static java.nio.charset.StandardCharsets.UTF_8;\n\npublic class Subscriber {\n    public static void main(final String[] args) {\n        /* code */\n\n        final Channel ch = b.bind(identity.getAddress()).syncUninterruptibly().channel();\n\n        // highlight-start\n        // subscribe to topic "animal/cat". Returned future will succeed once broker sent confirmation.\n        final ChannelFuture subscribed = ch.writeAndFlush(PubSubSubscribe.of("animal/cat"));\n        // highlight-end\n\n        // highlight-start\n        // unsubscribe from topic "animal/cat. Returned future will succeed once broker sent confirmation.\n        final ChannelFuture unsubscribed = ch.writeAndFlush(PubSubUnsubscribe.of("animal/cat"));\n        // highlight-end\n    }\n}\n')),(0,a.kt)("h2",{id:"publisher"},"Publisher"),(0,a.kt)("p",null,"Again, first we need to bootstrap a publisher:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Publisher.java"',title:'"Publisher.java"'},"import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.channel.ChannelPipeline;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.pubsub.*;\nimport org.drasyl.identity.*;\n\npublic class Publisher {\n    public static void main(final String[] args) {\n        final Identity identity = /* code */;\n        final DrasylAddress brokerAddress = /* code */;\n\n        final ServerBootstrap b = new ServerBootstrap()\n                .group(new DefaultEventLoopGroup(1))\n                .channel(DrasylServerChannel.class)\n                .handler(new TraversingDrasylServerChannelInitializer(identity, new NioEventLoopGroup(1), 0) {\n                    @Override\n                    protected void initChannel(final DrasylServerChannel ch) {\n                        super.initChannel(ch);\n\n                        final ChannelPipeline p = ch.pipeline();\n\n                        // highlight-start\n                        p.addLast(new PubSubCodec());\n                        p.addLast(new PubSubPublishHandler(brokerAddress));\n                        // highlight-start\n                    }\n                })\n                .childHandler(/* code */);\n    }\n}\n")),(0,a.kt)("p",null,"Finally, we can start publishing messages as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Publisher.java"',title:'"Publisher.java"'},'import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.buffer.Unpooled;\nimport io.netty.channel.*;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.pubsub.*;\nimport org.drasyl.identity.*;\n\nimport static java.nio.charset.StandardCharsets.UTF_8;\n\npublic class Publisher {\n    public static void main(final String[] args) {\n        /* code */\n\n        final Channel ch = b.bind(identity.getAddress()).syncUninterruptibly().channel();\n\n        // highlight-start\n        // publish message to topic "animal/cat"\n        ch.writeAndFlush(PubSubPublish.of("animal/cat", Unpooled.copiedBuffer("F. D. C. Willard", UTF_8)));\n        // highlight-end\n    }\n}\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"A working example can be found\nin our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/tree/master/drasyl-examples/src/main/java/org/drasyl/example/pubsub"},"examples section"),"."))}c.isMDXComponent=!0}}]);