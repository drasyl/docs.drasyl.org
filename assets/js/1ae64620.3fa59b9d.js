"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Overview",l={unversionedId:"configuration/overview",id:"version-0.9/configuration/overview",title:"Overview",description:"drasyl is designed to work with zero-configuration.",source:"@site/versioned_docs/version-0.9/configuration/overview.md",sourceDirName:"configuration",slug:"/configuration/overview",permalink:"/configuration/overview",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/versioned_docs/version-0.9/configuration/overview.md",tags:[],version:"0.9",lastUpdatedAt:1669644241,formattedLastUpdatedAt:"Nov 28, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/category/configuration"},next:{title:"Serialization",permalink:"/configuration/serialization"}},s={},d=[{value:"Create custom configurations",id:"create-custom-configurations",level:2},{value:"Use <code>DrasylConfig.Buidler</code>",id:"use-drasylconfigbuidler",level:3},{value:"Use <code>application.conf</code> file",id:"use-applicationconf-file",level:3},{value:"Use environment variables",id:"use-environment-variables",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"drasyl is designed to work with zero-configuration.\nHowever, some use cases (e.g. using an own super peer) require customization configurations.\nFor this situation there are various parameters available to adjust the behavior of drasyl nodes."),(0,a.kt)("p",null,"An overview of all available parameters, their purpose and default values can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-node/src/main/resources/reference.conf"},"reference.conf")," file."),(0,a.kt)("h2",{id:"create-custom-configurations"},"Create custom configurations"),(0,a.kt)("p",null,"Because drasyl's configuration is based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config"},"Lightbend Config library"),", there are many ways to create custom configurations."),(0,a.kt)("h3",{id:"use-drasylconfigbuidler"},"Use ",(0,a.kt)("inlineCode",{parentName:"h3"},"DrasylConfig.Buidler")),(0,a.kt)("p",null,"With\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylConfig.Builder.html"},(0,a.kt)("inlineCode",{parentName:"a"},"DrasylConfig.Buidler")),"\nclass, configurations can be created within Java. This allows you to define individual\nconfigurations for each node. It is done by\ncalling ",(0,a.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylConfig.html#newBuilder()"},(0,a.kt)("inlineCode",{parentName:"a"},"DrasylConfig.newBuilder() ... .build()")),"\n. Available builder methods can be obtained from\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylConfig.Builder.html"},"Javadoc"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Configuration.java"',title:'"Configuration.java"'},'import org.drasyl.node.*;\nimport java.nio.file.Path;\nimport java.util.Set;\n\npublic class Configuration {\n    public static void main(final String[] args) {\n        // highlight-start\n        final DrasylConfig config = DrasylConfig.newBuilder()\n                .identityPath(Path.of("/Users/heiko/drasyl.identity"))\n                .networkId(22527)\n                .remoteSuperPeerEndpoints(Set.of(PeerEndpoint.of("udp://sp-fra1.drasyl.org:22527?publicKey=c0900bcfabc493d062ecd293265f571edb70b85313ba4cdda96c9f77163ba62d&networkId=1")))\n                .remoteEnabled(false)\n                .build();\n        // highlight-end\n    }\n}\n')),(0,a.kt)("p",null,"The resulting ",(0,a.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylConfig.html"},(0,a.kt)("inlineCode",{parentName:"a"},"DrasylConfig")),"\nobject can now be passed to\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://api.drasyl.org/master/org/drasyl/node/DrasylNode.html#%3Cinit%3E(org.drasyl.node.DrasylConfig)"},(0,a.kt)("inlineCode",{parentName:"a"},"DrasylNode")," constructor"),"\n."),(0,a.kt)("h3",{id:"use-applicationconf-file"},"Use ",(0,a.kt)("inlineCode",{parentName:"h3"},"application.conf")," file"),(0,a.kt)("p",null,"You can add a resource called ",(0,a.kt)("inlineCode",{parentName:"p"},"application.conf")," to your java classpath to provide a custom config used by all your nodes.\nThis file has to use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/master/HOCON.md"},"HOCON Syntax"),".\nThe file only needs to contain the parameters you want to overwrite because it will be merged with the default values found in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-core/src/main/resources/reference.conf"},"reference.conf"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon",metastring:'title="application.conf"',title:'"application.conf"'},'drasyl.identity.path = /Users/heiko/drasyl.identity\ndrasyl.network.id = 22527\ndrasyl.remote.super-peer.endpoint = "udp://sp-fra1.drasyl.org:22527?publicKey=c0900bcfabc493d062ecd293265f571edb70b85313ba4cdda96c9f77163ba62d&networkId=1"\n')),(0,a.kt)("h3",{id:"use-environment-variables"},"Use environment variables"),(0,a.kt)("p",null,"By setting the JVM property ",(0,a.kt)("inlineCode",{parentName:"p"},"-Dconfig.override_with_env_vars=true")," it is possible to override any configuration value using environment variables."),(0,a.kt)("p",null,"With this option enabled only environment variables starting with ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_FORCE_")," are considered, and the name is mangled as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the prefix ",(0,a.kt)("inlineCode",{parentName:"li"},"CONFIG_FORCE_")," is stripped"),(0,a.kt)("li",{parentName:"ul"},"single underscore(",(0,a.kt)("inlineCode",{parentName:"li"},"_"),") is converted into a dot(",(0,a.kt)("inlineCode",{parentName:"li"},"."),")"),(0,a.kt)("li",{parentName:"ul"},"double underscore(",(0,a.kt)("inlineCode",{parentName:"li"},"__"),") is converted into a dash(",(0,a.kt)("inlineCode",{parentName:"li"},"-"),")"),(0,a.kt)("li",{parentName:"ul"},"triple underscore(",(0,a.kt)("inlineCode",{parentName:"li"},"___"),") is converted into a single underscore(",(0,a.kt)("inlineCode",{parentName:"li"},"_"),")")),(0,a.kt)("p",null,"i.e. The environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_FORCE_a_b__c___d")," set the configuration key ",(0,a.kt)("inlineCode",{parentName:"p"},"a.b-c_d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ CONFIG_FORCE_drasyl_identity_path=/Users/heiko/drasyl.identity \\\n    CONFIG_FORCE_drasyl_network_id=22527 \\\n    CONFIG_FORCE_drasyl_remote_super__peer_endpoint=udp://sp-fra1.drasyl.org:22527?publicKey=c0900bcfabc493d062ecd293265f571edb70b85313ba4cdda96c9f77163ba62d&networkId=1 \\\n    your-application.jar\n")),(0,a.kt)("admonition",{title:"Advanced References",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Further information regarding formatting can be taken directly from the configuration library that is used internally by drasyl: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config"},"https://github.com/lightbend/config"))))}p.isMDXComponent=!0}}]);