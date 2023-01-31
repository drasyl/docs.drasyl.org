"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5743],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8961:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:40},o="Membership Management",l={unversionedId:"advanced-usage/membership-management",id:"version-0.10/advanced-usage/membership-management",title:"Membership Management",description:"On this page we show you how to integrate the gossip-based membership management protocol CYCLON.",source:"@site/versioned_docs/version-0.10/advanced-usage/membership-management.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/membership-management",permalink:"/advanced-usage/membership-management",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/versioned_docs/version-0.10/advanced-usage/membership-management.md",tags:[],version:"0.10",lastUpdatedAt:1675188403,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Remote Message Invocation",permalink:"/advanced-usage/remote-message-invocation"},next:{title:"Distributed Lookup",permalink:"/advanced-usage/distributed-lookup"}},s={},p=[{value:"Add Dependency",id:"add-dependency",level:3},{value:"Example",id:"example",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"membership-management"},"Membership Management"),(0,a.kt)("p",null,"On this page we show you how to integrate the gossip-based membership management protocol CYCLON.\nThe CYCLON protocol generates a unstructured overlay sharing similarities with a random graph.\nBeside membership management this protocol can be used for resource discovery (e.g., by performing a\nrandom walk)."),(0,a.kt)("p",null,"If you would like to learn mor about this protocl, please refer to this paper:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Voulgaris, S., Gavidia, D. & van Steen, M. CYCLON: Inexpensive Membership Management for\nUnstructured P2P Overlays. J Netw Syst Manage 13, 197\u2013217 (2005)."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://doi.org/10.1007/s10922-005-4441-x"},"https://doi.org/10.1007/s10922-005-4441-x"))),(0,a.kt)("h3",{id:"add-dependency"},"Add Dependency"),(0,a.kt)("p",null,"Maven:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.drasyl</groupId>\n    <artifactId>drasyl-extras</artifactId>\n    <version>0.10.0</version>\n</dependency>\n")),(0,a.kt)("p",null,"Other dependency managers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Gradle : compile "org.drasyl:drasyl-extras:0.10.0" // build.gradle \n   Ivy : <dependency org="org.drasyl" name="drasyl-extras" rev="0.10.0" conf="build" /> // ivy.xml\n   SBT : libraryDependencies += "org.drasyl" % "drasyl-extras" % "0.10.0" // build.sbt\n')),(0,a.kt)("p",null,"To use this protocol, you have to use the ",(0,a.kt)("a",{parentName:"p",href:"/advanced-usage/bootstrapping"},"bootstrapping interface"),", where you have to customize the server channel's ChannelInitializer.\nBelow you find a code snippet with a customized initializer including the Chord related handlers.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"CyclonView")," object passed to the handlers contains the local (partial) view of the network.\nBy calling ",(0,a.kt)("inlineCode",{parentName:"p"},"view.getNeighbors()")," you will get a list of currently known neighbors and their corresponding addresses.\nPlease refer to the above-mentioned paper for choosing proper view size and shuffle size values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MembershipManagement.java"',title:'"MembershipManagement.java"'},"import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.channel.ChannelPipeline;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.membership.cyclon.*;\nimport org.drasyl.identity.*;\nimport java.util.Set;\n\npublic class MembershipManagement {\n    public static void main(final String[] args) {\n        final Identity identity = /* code */;\n        // highlight-start\n        final int viewSize = 8; // maximum size of peers in own view\n        final int shuffleSize = 4; // maximum number of peers to shuffle\n        final int shuffleInterval = 10_000; // shuffle every 10 seconds\n        final Set<DrasylAddress> initialNeighbors = Set.of(/* code */);\n        final CyclonView view = CyclonView.ofKeys(viewSize, initialNeighbors);\n        // highlight-end\n\n        final ServerBootstrap b = new ServerBootstrap()\n                .group(new DefaultEventLoopGroup())\n                .channel(DrasylServerChannel.class)\n                .handler(new TraversingDrasylServerChannelInitializer(identity, new NioEventLoopGroup(1), 0) {\n                    @Override\n                    protected void initChannel(final DrasylServerChannel ch) {\n                        super.initChannel(ch);\n\n                        final ChannelPipeline p = ch.pipeline();\n\n                        // highlight-start\n                        // (de)serialize cyclon messages \n                        p.addLast(new CyclonCodec());\n                        // requests shuffle with random neighbor\n                        p.addLast(new CyclonShufflingClientHandler(shuffleSize, shuffleInterval, view));\n                        // responses to shuffle requests\n                        p.addLast(new CyclonShufflingServerHandler(shuffleSize, view));\n                        // highlight-end\n                    }\n                })\n                .childHandler(/* code */);\n    }\n}\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"A fully working example can be found\nhere: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-examples/src/main/java/org/drasyl/example/cyclon/CyclonMembershipManagement.java"},"CyclonMembershipManagement")))}c.isMDXComponent=!0}}]);