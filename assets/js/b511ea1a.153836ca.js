"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5997],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={},l="Groups",i={unversionedId:"plugins/groups",id:"plugins/groups",title:"Groups",description:"With the groups Plugins nodes can organize themselves in groups. Members within the",source:"@site/docs/plugins/groups.md",sourceDirName:"plugins",slug:"/plugins/groups",permalink:"/master/plugins/groups",draft:!1,editUrl:"https://github.com/drasyl-overlay/docs.drasyl.org/blob/master/docs/plugins/groups.md",tags:[],version:"current",lastUpdatedAt:1667936162,formattedLastUpdatedAt:"Nov 8, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/master/category/plugins"},next:{title:"Advanced Usage",permalink:"/master/category/advanced-usage"}},s={},p=[{value:"Client",id:"client",level:2},{value:"Add Dependency",id:"add-dependency",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Manager",id:"manager",level:2},{value:"Add Dependency",id:"add-dependency-1",level:3},{value:"Configuration",id:"configuration-1",level:3}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"groups"},"Groups"),(0,a.kt)("p",null,"With the ",(0,a.kt)("strong",{parentName:"p"},"groups")," Plugins nodes can organize themselves in groups. Members within the\ngroup will be automatically notified about the entry and exit of other nodes."),(0,a.kt)("h2",{id:"client"},"Client"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"groups-client")," plugin enables nodes to join groups."),(0,a.kt)("h3",{id:"add-dependency"},"Add Dependency"),(0,a.kt)("p",null,"Maven:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.drasyl</groupId>\n    <artifactId>drasyl-plugin-groups-client</artifactId>\n    <version>0.10.0-SNAPSHOT</version>\n</dependency>\n")),(0,a.kt)("p",null,"Other dependency managers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Gradle : compile "org.drasyl:drasyl-plugin-groups-client:0.10.0-SNAPSHOT" // build.gradle \n   Ivy : <dependency org="org.drasyl" name="drasyl-plugin-groups-client" rev="0.10.0-SNAPSHOT" conf="build" /> // ivy.xml\n   SBT : libraryDependencies += "org.drasyl" % "drasyl-plugin-groups-client" % "0.10.0-SNAPSHOT" // build.sbt\n')),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Make sure that the following entry is included in your configuration under ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl.plugins"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon",metastring:'title="application.conf"',title:'"application.conf"'},'"org.drasyl.plugin.groups.client.GroupsClientPlugin" {\n  enabled = true\n  groups = [\n    "groups://my-shared-secret@023d34f317616c3bb0fa1e4b425e9419d1704ef57f6e53afe9790e00998134f5ff/steezy-vips?timeout=60"\n  ]\n}\n')),(0,a.kt)("p",null,"With this configuration, the client will connect to the Groups Manager on the node\n",(0,a.kt)("inlineCode",{parentName:"p"},"023d34f317616c3bb0fa1e4b425e9419d1704ef57f6e53afe9790e00998134f5ff")," at startup and will join the\ngroup ",(0,a.kt)("inlineCode",{parentName:"p"},"steezy-vips"),". Authentication is done via the shared secret ",(0,a.kt)("inlineCode",{parentName:"p"},"my-shared-secret"),"."),(0,a.kt)("p",null,"Special ",(0,a.kt)("a",{parentName:"p",href:"https://www.javadoc.io/doc/org.drasyl/drasyl-plugin-groups-client/latest/org/drasyl/plugin/groups/client/event/package-summary.html"},"Group Events")," will then inform you about group joins of your local or other nodes."),(0,a.kt)("p",null,"In the next section you will learn how to start the Group Manager on a node."),(0,a.kt)("h2",{id:"manager"},"Manager"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"groups-manager")," allows a node to manage groups and their memberships."),(0,a.kt)("h3",{id:"add-dependency-1"},"Add Dependency"),(0,a.kt)("p",null,"Maven:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.drasyl</groupId>\n    <artifactId>drasyl-plugin-groups-manager</artifactId>\n    <version>0.10.0-SNAPSHOT</version>\n</dependency>\n")),(0,a.kt)("p",null,"Other dependency managers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Gradle : compile "org.drasyl:drasyl-plugin-groups-manager:0.10.0-SNAPSHOT" // build.gradle \n   Ivy : <dependency org="org.drasyl" name="drasyl-plugin-groups-manager" rev="0.10.0-SNAPSHOT" conf="build" /> // ivy.xml\n   SBT : libraryDependencies += "org.drasyl" % "drasyl-plugin-groups-manager" % "0.10.0-SNAPSHOT" // build.sbt\n')),(0,a.kt)("h3",{id:"configuration-1"},"Configuration"),(0,a.kt)("p",null,"Make sure that the following entry is included in your configuration under ",(0,a.kt)("inlineCode",{parentName:"p"},"drasyl.plugins"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon",metastring:'title="application.conf"',title:'"application.conf"'},'"org.drasyl.plugin.groups.manager.GroupsManagerPlugin" {\n  enabled = true\n  database {\n    uri = "jdbc:sqlite::memory:"\n  }\n  groups {\n    "steezy-vips" {\n      secret = "my-shared-secret"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"With this configuration the manager is created with the group ",(0,a.kt)("inlineCode",{parentName:"p"},"steezy-vips"),", whose members must\nauthenticate themselves using the shared secret ",(0,a.kt)("inlineCode",{parentName:"p"},"my-shared-secret"),".\nThe manager stores all groups, nodes and their memberships in memory. To persistent the data on\nfile system, ",(0,a.kt)("inlineCode",{parentName:"p"},"database.uri")," can be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"jdbc:sqlite:groups-manager.sqlite"),"."),(0,a.kt)("p",null,"An overview of all available parameters (e.g. to enable the REST API), their purpose and default values can be found in the\nplugin's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/drasyl-overlay/drasyl/blob/master/drasyl-plugin-groups-manager/src/main/resources/reference.conf"},"reference.conf"),"\nfile."))}d.isMDXComponent=!0}}]);