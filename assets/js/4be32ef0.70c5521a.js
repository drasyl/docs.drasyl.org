"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,y=u["".concat(o,".").concat(c)]||u[c]||h[c]||l;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},i="Native Shared C Library",d={unversionedId:"language-bindings/c",id:"version-0.10/language-bindings/c",title:"Native Shared C Library",description:"Using the GraalVM, we can provide a native shared library called libdrasyl that allows you to run a drasyl node with plain C without needing a Java Virtual Machine.",source:"@site/versioned_docs/version-0.10/language-bindings/c.md",sourceDirName:"language-bindings",slug:"/language-bindings/c",permalink:"/language-bindings/c",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/versioned_docs/version-0.10/language-bindings/c.md",tags:[],version:"0.10",lastUpdatedAt:1681924260,formattedLastUpdatedAt:"Apr 19, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Language Bindings",permalink:"/category/language-bindings"},next:{title:"Python Package",permalink:"/language-bindings/python"}},o={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Reference",id:"reference",level:2},{value:"drasyl_node_version",id:"drasyl_node_version",level:3},{value:"drasyl_set_logger",id:"drasyl_set_logger",level:3},{value:"Parameters",id:"parameters",level:4},{value:"drasyl_node_init",id:"drasyl_node_init",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"drasyl_node_identity",id:"drasyl_node_identity",level:3},{value:"drasyl_node_start",id:"drasyl_node_start",level:3},{value:"drasyl_node_stop",id:"drasyl_node_stop",level:3},{value:"drasyl_node_send",id:"drasyl_node_send",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"drasyl_node_is_online",id:"drasyl_node_is_online",level:3},{value:"drasyl_sleep",id:"drasyl_sleep",level:3},{value:"drasyl_shutdown_event_loop",id:"drasyl_shutdown_event_loop",level:3},{value:"Example",id:"example",level:2}],p={toc:s};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"native-shared-c-library"},"Native Shared C Library"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.graalvm.org/dev/reference-manual/native-image/guides/build-native-shared-library/"},"GraalVM"),", we can provide a native shared library called libdrasyl that allows you to run a drasyl node with plain C without needing a Java Virtual Machine."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"libdrasyl")," is deployed as a platform-specific build for the following architectures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"x64"),(0,r.kt)("li",{parentName:"ul"},"arm64"))),(0,r.kt)("li",{parentName:"ul"},"macOS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"x64"),(0,r.kt)("li",{parentName:"ul"},"aarch64"))),(0,r.kt)("li",{parentName:"ul"},"Windows",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"x64")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You can grab the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"libdrasyl.so"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"libdrasyl.dylib"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"libdrasyl.dll")," alongside with the header files ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl.h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"libdrasyl.h"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"graal_isolate.h")," from our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/releases/latest"},"GitHub releases page"),".\nFor our Linux and macOS users, we suggest installing ",(0,r.kt)("inlineCode",{parentName:"p"},"libdrasyl")," through ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install zerotier/tap/libzt\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Include the ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl.h")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"libdrasyl.h")," files in your project and link it against ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl"),"."),(0,r.kt)("p",null,"With the library setup, ",(0,r.kt)("inlineCode",{parentName:"p"},"libdrasyl")," can then be used by first creating an isolate allowing you to attach threads from C code (more information abouth this can be found ",(0,r.kt)("a",{parentName:"p",href:"https://www.graalvm.org/dev/reference-manual/native-image/native-code-interoperability/C-API/"},"here"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.c"',title:'"main.c"'},'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#include "drasyl.h"\n#include "libdrasyl.h"\n\nint main() {\n    // highlight-start\n    graal_isolate_t *isolate = NULL;\n    graal_isolatethread_t *thread = NULL;\n\n    if (graal_create_isolate(NULL, &isolate, &thread) != 0) {\n        return DRASYL_ERROR_GENERAL;\n    }\n    // highlight-end\n\n    return DRASYL_SUCCESS;\n}\n\n')),(0,r.kt)("p",null,"After creating the isolate, we can use it to initialize a drasyl node and then retrieve the node's identity (please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/getting-started"},"Getting Started")," section first if you're new to working with our ",(0,r.kt)("inlineCode",{parentName:"p"},"DrasylNode"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.c"',title:'"main.c"'},'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#include "drasyl.h"\n#include "libdrasyl.h"\n\n// highlight-start\nvoid on_drasyl_event(graal_isolatethread_t* thread, drasyl_event_t* event) {\n    /* code */\n}\n// highlight-end\n\nint main() {\n    /* code */\n\n    // highlight-start\n    char config[] = "my-node.conf";\n    if (drasyl_node_init(thread, config, sizeof(config), &on_drasyl_event) != DRASYL_SUCCESS) {\n        fprintf(stderr, "could not init node\\n");\n        return DRASYL_ERROR_GENERAL;\n    }\n\n    drasyl_identity_t *identity = calloc(1, sizeof(drasyl_identity_t));\n    if (drasyl_node_identity(thread, identity) != DRASYL_SUCCESS) {\n        fprintf(stderr, "could not retrieve node identity\\n");\n        return DRASYL_ERROR_GENERAL;\n    }\n    printf("My address: %.64s\\n", identity->identity_public_key);\n    // highlight-end\n\n    return DRASYL_SUCCESS;\n}\n')),(0,r.kt)("p",null,"It is now time to start the node, wait for it to come online, and then send a message to a peer (keep in mind that you need to adjust the recipient address to a running node. Otherwise, the send will fail):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.c"',title:'"main.c"'},'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#include "drasyl.h"\n#include "libdrasyl.h"\n\n/* code */\n\nint main() {\n    /* code */\n\n    // highlight-start\n    if (drasyl_node_start(thread) != DRASYL_SUCCESS) {\n        fprintf(stderr, "could not start node\\n");\n        return DRASYL_ERROR_GENERAL;\n    }\n\n    printf("Wait for node to become online...\\n");\n    while (!drasyl_node_is_online(thread)) {\n        drasyl_sleep(thread, 50);\n    }\n\n    char recipient[] = "78483253e5dbbe8f401dd1bd1ef0b6f1830c46e411f611dc93a664c1e44cc054";\n    char payload[] = "hello there";\n    if (drasyl_node_send(thread, recipient, payload, sizeof(payload)) != DRASYL_SUCCESS) {\n        fprintf(stderr, "could not send message\\n");\n        return DRASYL_ERROR_GENERAL;\n    }\n    // highlight-end\n\n    return DRASYL_SUCCESS;\n}\n')),(0,r.kt)("p",null,"If the node is no longer needed, it can be shutdown. Finally, we need to shutdown all threads implicitly spawned by drasyl and tear down the isolate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.c"',title:'"main.c"'},'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#include "drasyl.h"\n#include "libdrasyl.h"\n\n/* code */\n\nint main() {\n    /* code */\n\n    // highlight-start\n    if (drasyl_node_stop(thread) != DRASYL_SUCCESS) {\n        fprintf(stderr, "could not stop node\\n");\n        return DRASYL_ERROR_GENERAL;\n    }\n\n    if (drasyl_shutdown_event_loop(thread) != DRASYL_SUCCESS) {\n        fprintf(stderr, "could not shutdown event loop\\n");\n        graal_tear_down_isolate(thread);\n        return DRASYL_ERROR_GENERAL;\n    }\n\n    graal_tear_down_isolate(thread);\n    // highlight-end\n\n    return DRASYL_SUCCESS;\n}\n')),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"Reference information about the typedefs declared by the ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl.h")," header file is provided within the file (you can also refer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-shared-library/src/main/c/drasyl.h"},"here"),")."),(0,r.kt)("p",null,"The functions defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"libdrasyl.h")," are mainly one-to-one bindings to the according Java-Methods of the ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/v0.9/org/drasyl/node/DrasylNode.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DrasylNode"))," Java class."),(0,r.kt)("h3",{id:"drasyl_node_version"},"drasyl_node_version"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"int drasyl_node_version(graal_isolatethread_t* thread)")),(0,r.kt)("p",null,"Returns the version of the drasyl node currently loaded.\nMost four significant bytes represent the major version.\nThe following four bytes represent the minor version and are followed by another four bytes representing the patch version. The least significant four bytes are unused.\nIf the version could not be retrieved, this function returns ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-shared-library/src/main/c/drasyl.h"},(0,r.kt)("inlineCode",{parentName:"a"},"DRASYL_ERROR_GENERAL")),"."),(0,r.kt)("h3",{id:"drasyl_set_logger"},"drasyl_set_logger"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"int drasyl_set_logger(graal_isolatethread_t* thread, void * logger)")),(0,r.kt)("p",null,"Sets logger callback function.\nIf the logger could not be set, this function returns ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-shared-library/src/main/c/drasyl.h"},(0,r.kt)("inlineCode",{parentName:"a"},"DRASYL_ERROR_GENERAL")),"."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logger"),": Must have the following signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"void (graal_isolatethread_t* thread, int level, unsigned long time, char* message)"),".")),(0,r.kt)("h3",{id:"drasyl_node_init"},"drasyl_node_init"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"int drasyl_node_init(graal_isolatethread_t* thread, char* config, size_t config_len, void * listener)")),(0,r.kt)("p",null,"Creates a new ",(0,r.kt)("a",{parentName:"p",href:"https://api.drasyl.org/v0.9/org/drasyl/node/DrasylNode.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DrasylNode")),".\nIf the node could not be created, this function returns ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-shared-library/src/main/c/drasyl.h"},(0,r.kt)("inlineCode",{parentName:"a"},"DRASYL_ERROR_GENERAL")),"."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config"),": File path to a ",(0,r.kt)("a",{parentName:"li",href:"../configuration/overview#use-applicationconf-file"},"node configuration"),". Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")," to use default configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config_len"),": The length of the node configuration file path. Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," to use default configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"listener"),": Callback function for node events. Must have the following signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"void on_drasyl_event(graal_isolatethread_t* thread, drasyl_event_t* event)"),".")),(0,r.kt)("h3",{id:"drasyl_node_identity"},"drasyl_node_identity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"int drasyl_node_identity(graal_isolatethread_t* thread, drasyl_identity_t*)")),(0,r.kt)("p",null,"Returns the node identity.\nMust be called after ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl_node_init"),".\nIf the identity could not be retrieved, this function returns ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-shared-library/src/main/c/drasyl.h"},(0,r.kt)("inlineCode",{parentName:"a"},"DRASYL_ERROR_GENERAL")),"."),(0,r.kt)("h3",{id:"drasyl_node_start"},"drasyl_node_start"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"int drasyl_node_start(graal_isolatethread_t* thread)")),(0,r.kt)("p",null,"Starts the node.\nMust be called after ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl_node_init"),".\nIf the node could not be started, this function returns ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-shared-library/src/main/c/drasyl.h"},(0,r.kt)("inlineCode",{parentName:"a"},"DRASYL_ERROR_GENERAL")),"."),(0,r.kt)("h3",{id:"drasyl_node_stop"},"drasyl_node_stop"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"int drasyl_node_stop(graal_isolatethread_t* thread)")),(0,r.kt)("p",null,"Stops the node.\nMust be called after ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl_node_init"),".\nIf the node could not be stopped, this function returns ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-shared-library/src/main/c/drasyl.h"},(0,r.kt)("inlineCode",{parentName:"a"},"DRASYL_ERROR_GENERAL")),"."),(0,r.kt)("h3",{id:"drasyl_node_send"},"drasyl_node_send"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"int drasyl_node_send(graal_isolatethread_t* thread, char* recipient, char* payload, size_t payload_len)")),(0,r.kt)("p",null,"Sends a message ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"recipient"),".\nMust be called after ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl_node_init"),".\nIf the recipient does not acknowledge the receival of the message, this function returns ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-shared-library/src/main/c/drasyl.h"},(0,r.kt)("inlineCode",{parentName:"a"},"DRASYL_ERROR_GENERAL")),"."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"recipient"),": The recipient as 64 hex characters long drasyl address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payload"),": The payload to be sent."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payload_len"),": The length of the payload.")),(0,r.kt)("h3",{id:"drasyl_node_is_online"},"drasyl_node_is_online"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"int drasyl_node_is_online(graal_isolatethread_t* thread)")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," if the node is currently online. Otherwise, ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," is returned.\nMust be called after ",(0,r.kt)("inlineCode",{parentName:"p"},"drasyl_node_init"),"."),(0,r.kt)("h3",{id:"drasyl_sleep"},"drasyl_sleep"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void drasyl_sleep(graal_isolatethread_t* thread, long long int millis)")),(0,r.kt)("p",null,"Causes the currently executing thread to sleep for the specified number of milliseconds."),(0,r.kt)("h3",{id:"drasyl_shutdown_event_loop"},"drasyl_shutdown_event_loop"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"int drasyl_shutdown_event_loop(graal_isolatethread_t* thread)")),(0,r.kt)("p",null,"Shutdown all (if any) threads implicity created that are used by the drasyl node.\nThis operation cannot be undone. After performing this operation, now new node can be started!\nIf the threads could not be shut down, this function returns ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-shared-library/src/main/c/drasyl.h"},(0,r.kt)("inlineCode",{parentName:"a"},"DRASYL_ERROR_GENERAL")),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"A fully functional example can be found in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/drasyl/drasyl/blob/master/drasyl-shared-library/examples/c/example.c"},"GitHub Repository"),"."))}h.isMDXComponent=!0}}]);