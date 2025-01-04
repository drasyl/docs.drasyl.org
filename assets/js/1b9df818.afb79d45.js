"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9688],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=s(t),c=r,m=y["".concat(d,".").concat(c)]||y[c]||u[c]||l;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const l={},i="Python Package",o={unversionedId:"language-bindings/python",id:"version-0.10/language-bindings/python",title:"Python Package",description:"We provide a Python binding of our Native Shared C Library, allowing you to use drasyl in a Pythonic as possible.",source:"@site/versioned_docs/version-0.10/language-bindings/python.md",sourceDirName:"language-bindings",slug:"/language-bindings/python",permalink:"/0.10/language-bindings/python",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/versioned_docs/version-0.10/language-bindings/python.md",tags:[],version:"0.10",lastUpdatedAt:1736013004,formattedLastUpdatedAt:"Jan 4, 2025",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Native Shared C Library",permalink:"/0.10/language-bindings/c"},next:{title:"Public Super Peers",permalink:"/0.10/public-super-peers"}},d={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Reference",id:"reference",level:2},{value:"drasyl_node_version",id:"drasyl_node_version",level:3},{value:"drasyl_set_logger",id:"drasyl_set_logger",level:3},{value:"Parameters",id:"parameters",level:4},{value:"drasyl_node_init",id:"drasyl_node_init",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"drasyl_node_identity",id:"drasyl_node_identity",level:3},{value:"drasyl_node_start",id:"drasyl_node_start",level:3},{value:"drasyl_node_stop",id:"drasyl_node_stop",level:3},{value:"drasyl_node_send",id:"drasyl_node_send",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"drasyl_node_is_online",id:"drasyl_node_is_online",level:3},{value:"drasyl_shutdown_event_loop",id:"drasyl_shutdown_event_loop",level:3},{value:"Example",id:"example",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-package"},"Python Package"),(0,r.kt)("p",null,"We provide a Python binding of our ",(0,r.kt)("a",{parentName:"p",href:"/0.10/language-bindings/c"},"Native Shared C Library"),", allowing you to use drasyl in a Pythonic as possible."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"We provide our binding as a ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/drasyl/"},"Python package hosted on Python Package Index"),". Therefore you can install it simply by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pip install drasyl\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"First, we have to initialize a drasyl node and then retrieve the node's identity (please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/0.10/getting-started"},"Getting Started")," section first, if you're new to working with our ",(0,r.kt)("inlineCode",{parentName:"p"},"DrasylNode"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'from drasyl import *\nimport time\n\n# highlight-start\ndef on_event(event):\n    # code\n\ndrasyl_node_init("my-node.conf", on_event)\n\nidentity = drasyl_node_identity()\nprint("My address: %s" % identity.identity_public_key)\n# highlight-end\n')),(0,r.kt)("p",null,"It is now time to start the node, wait for it to come online, and then send a message to a peer (keep in mind that you need to adjust the recipient address to a running node. Otherwise, the send will fail):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'from drasyl import *\nimport time\n\n# code\n\n# highlight-start\ndrasyl_node_start()\n\nprint("Wait for node to become online...")\nwhile not drasyl_node_is_online():\n    time.sleep(0.05)\n\nrecipient = "78483253e5dbbe8f401dd1bd1ef0b6f1830c46e411f611dc93a664c1e44cc054".encode("UTF-8")\npayload = "hello there".encode("UTF-8")\ndrasyl_node_send(recipient, payload)\n# highlight-end\n')),(0,r.kt)("p",null,"If the node is no longer needed, it can be shut down. Finally, we need to shut down all threads implicitly spawned by drasyl and tear down the isolate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},"from drasyl import *\nimport time\n\n# code\n\n# highlight-start\ndrasyl_node_stop()\ndrasyl_shutdown_event_loop()\nthread_tear_down()\n# highlight-end\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"drasyl_node_version"},"drasyl_node_version"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def drasyl_node_version()")),(0,r.kt)("p",null,"Returns the version of the drasyl node currently loaded."),(0,r.kt)("h3",{id:"drasyl_set_logger"},"drasyl_set_logger"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def drasyl_set_logger(logger)")),(0,r.kt)("p",null,"Sets logger callback function."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logger"),": Must have the following signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"def console_logger(level, time, message)"),".")),(0,r.kt)("h3",{id:"drasyl_node_init"},"drasyl_node_init"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def drasyl_node_init(config, listener)")),(0,r.kt)("p",null,"Creates a new ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/v0.9/org/drasyl/node/DrasylNode.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DrasylNode")),"."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config"),": File path to a ",(0,r.kt)("a",{parentName:"li",href:"../configuration/overview#use-applicationconf-file"},"node configuration"),". Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," to use default configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"listener"),": Callback function for node events. Must have the following signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"def on_event(event)"),".")),(0,r.kt)("h3",{id:"drasyl_node_identity"},"drasyl_node_identity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def drasyl_node_identity()")),(0,r.kt)("p",null,"Returns the node identity.\nMust be called after ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl_node_init"),"."),(0,r.kt)("h3",{id:"drasyl_node_start"},"drasyl_node_start"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def drasyl_node_start()")),(0,r.kt)("p",null,"Starts the node.\nMust be called after ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl_node_init"),"."),(0,r.kt)("h3",{id:"drasyl_node_stop"},"drasyl_node_stop"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def drasyl_node_stop()")),(0,r.kt)("p",null,"Stops the node.\nMust be called after ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl_node_init"),"."),(0,r.kt)("h3",{id:"drasyl_node_send"},"drasyl_node_send"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def drasyl_node_send(recipient, payload)")),(0,r.kt)("p",null,"Sends a message ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"recipient"),"."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"recipient"),": The recipient as 64 hex characters long drasyl address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payload"),": The payload to sent.")),(0,r.kt)("h3",{id:"drasyl_node_is_online"},"drasyl_node_is_online"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def drasyl_node_is_online()")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," if the node is currently online. Otherwise, ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," is returned.\nMust be called after ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl_node_init"),"."),(0,r.kt)("h3",{id:"drasyl_shutdown_event_loop"},"drasyl_shutdown_event_loop"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def drasyl_shutdown_event_loop()")),(0,r.kt)("p",null,"Shutdown all (if any) threads implicitly created that are used by the drasyl node.\nThis operation cannot be undone. After performing this operation, now new node can be started!"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"A fully functional example can be found in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-shared-library/examples/python/example.py"},"GitHub Repository"),"."))}u.isMDXComponent=!0}}]);