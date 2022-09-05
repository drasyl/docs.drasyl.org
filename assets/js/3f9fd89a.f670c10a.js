"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[16],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={},i="Membership Management",s={unversionedId:"advanced-usage/membership-management",id:"version-0.8/advanced-usage/membership-management",title:"Membership Management",description:"On this page we show you how to integrate the gossip-based membership management protocol CYCLON.",source:"@site/versioned_docs/version-0.8/advanced-usage/membership-management.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/membership-management",permalink:"/advanced-usage/membership-management",draft:!1,editUrl:"https://github.com/drasyl-overlay/docs.drasyl.org/blob/master/versioned_docs/version-0.8/advanced-usage/membership-management.md",tags:[],version:"0.8",lastUpdatedAt:1662403304,formattedLastUpdatedAt:"Sep 5, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bootstrapping",permalink:"/advanced-usage/bootstrapping"},next:{title:"Remote Message Invocation",permalink:"/advanced-usage/remote-message-invocation"}},l={},p=[{value:"Example",id:"example",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"membership-management"},"Membership Management"),(0,a.kt)("p",null,"On this page we show you how to integrate the gossip-based membership management protocol CYCLON.\nThe CYCLON protocol generates a unstructured overlay sharing similarities with a random graph.\nBeside membership management this protocol can be used for resource discovery (e.g., by performing a\nrandom walk)."),(0,a.kt)("p",null,"If you would like to learn mor about this protocl, please refer to this paper:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Voulgaris, S., Gavidia, D. & van Steen, M. CYCLON: Inexpensive Membership Management for\nUnstructured P2P Overlays. J Netw Syst Manage 13, 197\u2013217 (2005)."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://doi.org/10.1007/s10922-005-4441-x"},"https://doi.org/10.1007/s10922-005-4441-x"))),(0,a.kt)("p",null,"To use this protocol, you have to use the ",(0,a.kt)("a",{parentName:"p",href:"/advanced-usage/bootstrapping"},"bootstrapping interface"),", where you have to customize the server channel's ChannelInitializer.\nBelow you find a code snippet with a customized initializer including the Chord related handlers.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"CyclonView")," object passed to the handlers contains the local (partial) view of the network.\nBy calling ",(0,a.kt)("inlineCode",{parentName:"p"},"view.getNeighbors()")," you will get a list of currently known neighbors and their corresponding addresses.\nPlease refer to the above-mentioned paper for choosing proper view size and shuffle size values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import io.netty.bootstrap.ServerBootstrap;\nimport io.netty.channel.ChannelPipeline;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport org.drasyl.channel.*;\nimport org.drasyl.handler.membership.cyclon.*;\nimport org.drasyl.identity.*;\nimport java.util.Set;\n\npublic class MembershipManagement {\n    public static void main(final String[] args) {\n        final Identity identity = /* code */;\n        // highlight-start\n        final int viewSize = 8; // maximum size of peers in own view\n        final int shuffleSize = 4; // maximum number of peers to shuffle\n        final int shuffleInterval = 10_000; // shuffle every 10 seconds\n        final Set<DrasylAddress> initialNeighbors = Set.of(/* code */);\n        final CyclonView view = CyclonView.ofKeys(viewSize, initialNeighbors);\n        // highlight-end\n\n        final ServerBootstrap b = new ServerBootstrap()\n                .group(new NioEventLoopGroup())\n                .channel(DrasylServerChannel.class)\n                .handler(new TraversingDrasylServerChannelInitializer(identity, 0) {\n                    @Override\n                    protected void initChannel(final DrasylServerChannel ch) {\n                        super.initChannel(ch);\n\n                        final ChannelPipeline p = ch.pipeline();\n\n                        // highlight-start\n                        // (de)serialize cyclon messages \n                        p.addLast(new CyclonCodec());\n                        // requests shuffle with random neighbor\n                        p.addLast(new CyclonShufflingClientHandler(shuffleSize, shuffleInterval, view));\n                        // responses to shuffle requests\n                        p.addLast(new CyclonShufflingServerHandler(shuffleSize, view));\n                        // highlight-end\n                    }\n                })\n                .childHandler(/* code */);\n    }\n}\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"A fully working example can be found\nhere: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/drasyl-overlay/drasyl/blob/master/drasyl-examples/src/main/java/org/drasyl/example/cyclon/CyclonMembershipManagement.java"},"CyclonMembershipManagement")))}m.isMDXComponent=!0}}]);