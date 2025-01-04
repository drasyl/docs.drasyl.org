"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var a=n(7294);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,d=function(e,t){if(null==e)return{};var n,a,d={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(d[n]=e[n]);return d}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,d=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=l(n),p=d,u=b["".concat(i,".").concat(p)]||b[p]||f[p]||r;return n?a.createElement(u,c(c({ref:t},s),{},{components:n})):a.createElement(u,c({ref:t},s))}));function p(e,t){var n=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var r=n.length,c=new Array(r);c[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:d,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(7462),d=(n(7294),n(3905));const r={},c="Run a Node",o={unversionedId:"cli/node",id:"version-0.10/cli/node",title:"Run a Node",description:"The command node allows you to run a drasyl node:",source:"@site/versioned_docs/version-0.10/cli/node.md",sourceDirName:"cli",slug:"/cli/node",permalink:"/0.10/cli/node",draft:!1,editUrl:"https://github.com/drasyl/docs.drasyl.org/blob/master/versioned_docs/version-0.10/cli/node.md",tags:[],version:"0.10",lastUpdatedAt:1736013004,formattedLastUpdatedAt:"Jan 4, 2025",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command Line Tool",permalink:"/0.10/cli/intro"},next:{title:"Language Bindings",permalink:"/0.10/category/language-bindings"}},i={},l=[{value:"Remote Controlling",id:"remote-controlling",level:2},{value:"HTTP API",id:"http-api",level:3},{value:"Start Node",id:"start-node",level:4},{value:"Shutdown Node",id:"shutdown-node",level:4},{value:"Send Message",id:"send-message",level:4},{value:"Get Identity",id:"get-identity",level:4},{value:"Get Events",id:"get-events",level:4},{value:"TCP API",id:"tcp-api",level:3},{value:"Start Node",id:"start-node-1",level:4},{value:"Shutdown Node",id:"shutdown-node-1",level:4},{value:"Send Message",id:"send-message-1",level:4},{value:"Get Identity",id:"get-identity-1",level:4},{value:"Get Events",id:"get-events-1",level:4},{value:"Accessing Remote Control via <code>node-rc</code> Command",id:"accessing-remote-control-via-node-rc-command",level:3}],s={toc:l};function f(e){let{components:t,...n}=e;return(0,d.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"run-a-node"},"Run a Node"),(0,d.kt)("p",null,"The command ",(0,d.kt)("inlineCode",{parentName:"p"},"node")," allows you to run a drasyl node:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"$ drasyl help node\nRun a drasyl node.\nCan, for example, be used to operate a super peer\n\nUsage: drasyl node [--activity-pattern=<file>] [-c=<file>] [--rc-bind=<host>[:\n                   <port>]] [--rc-events-buffer-size=<count>] [-v=<level>]\n                   [--rc-jsonrpc-tcp | --rc-jsonrpc-http]\n\n      --activity-pattern=<file>\n                          If supplied, the node will perform the given\n                            activities (e.g., send message, sleep, loop, etc.)\n                            specified in the file once started.\n  -c, --config=<file>     Loads the node configuration from specified file. If\n                            the file does not exist, the default config will be\n                            used.\n                            Default: drasyl.conf\n      --rc-bind=<host>[:<port>]\n                          Binds remote control server to given IP and port. If\n                            no port is specified, a random free port will be\n                            used.\n                            Default: 0.0.0.0:25421\n      --rc-events-buffer-size=<count>\n                          Maximum number of events that the buffer can hold.\n                          On overflow, new events will push oldest events out\n                            of the buffer.\n                          A value of 0 disables the limit (can lead to out of\n                            memory error).\n                            Default: 1000\n      --rc-jsonrpc-http   Starts a JSON-RPC 2.0 over HTTP server listening on\n                            remote requests.\n                          If this option is set, the node needs to be started\n                            manually.\n                          Available methods: start, shutdown, send, identity,\n                            events\n      --rc-jsonrpc-tcp    Starts a JSON-RPC 2.0 over TCP server listening on\n                            remote requests.\n                          If this option is set, the node needs to be started\n                            manually.\n                          Available methods: start, shutdown, send, identity,\n                            events\n  -v, --verbose=<level>   Sets the log level (available values: off, error,\n                            warn, info, debug, trace).\n                            Default: warn\n")),(0,d.kt)("h2",{id:"remote-controlling"},"Remote Controlling"),(0,d.kt)("h3",{id:"http-api"},"HTTP API"),(0,d.kt)("p",null,"If the command is run with the ",(0,d.kt)("inlineCode",{parentName:"p"},"--rc-jsonrpc-http")," flag then it starts an HTTP server which can be used to remote control the node using its API."),(0,d.kt)("h4",{id:"start-node"},"Start Node"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST \\\n     -H \'Content-Type: application/json\' \\\n     -d \'{"jsonrpc":"2.0","method":"start","id":1}\' \\\n     http://127.0.0.1:25421\n{"jsonrpc":"2.0","result":"","id":1}\n')),(0,d.kt)("h4",{id:"shutdown-node"},"Shutdown Node"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST \\\n     -H \'Content-Type: application/json\' \\\n     -d \'{"jsonrpc":"2.0","method":"shutdown","id":2}\' \\\n     http://127.0.0.1:25421\n{"jsonrpc":"2.0","result":"","id":2}\n')),(0,d.kt)("h4",{id:"send-message"},"Send Message"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST \\\n     -H \'Content-Type: application/json\' \\\n     -d \'{"jsonrpc":"2.0","method":"send","params":{"recipient":"366a48151e16befa5ae46bd7ad8fa3d3f2dfe0cd2ee29837aa257bab9e332922","payload":"Hello World"},"id":3}\' \\\n     http://127.0.0.1:25421\n{"jsonrpc":"2.0","result":"","id":3}\n')),(0,d.kt)("h4",{id:"get-identity"},"Get Identity"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST \\\n     -H \'Content-Type: application/json\' \\\n     -d \'{"jsonrpc":"2.0","method":"identity","id":4}\' \\\n     http://127.0.0.1:25421\n{"jsonrpc":"2.0","result":{"identityKeyPair":{"secretKey":"3e6499116ba86b4884345891f3421a5a16c902247326928ce41c10ad8a66bd1f668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4","publicKey":"668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4"},"agreementKeyPair":{"secretKey":"3861685f7a54ea9c6e6eb3fdb6d0d00cffda1cda91e93dc1bfb9838fae1ef05a","publicKey":"5f63d6a50f75962a832be4236dc3e3757fad93bd19f59f40576c0596afef1d4e"},"proofOfWork":-2140756759},"id":4}\n')),(0,d.kt)("h4",{id:"get-events"},"Get Events"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST \\\n     -H \'Content-Type: application/json\' \\\n     -d \'{"jsonrpc":"2.0","method":"events","id":5}\' \\\n     http://127.0.0.1:25421\n{"jsonrpc":"2.0","result":[{"type":"NodeUpEvent","node":{"identity":{"proofOfWork":-2140756759,"agreementKeyPair":{"publicKey":"5f63d6a50f75962a832be4236dc3e3757fad93bd19f59f40576c0596afef1d4e","secretKey":"3861685f7a54ea9c6e6eb3fdb6d0d00cffda1cda91e93dc1bfb9838fae1ef05a"},"identityKeyPair":{"publicKey":"668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4","secretKey":"3e6499116ba86b4884345891f3421a5a16c902247326928ce41c10ad8a66bd1f668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4"}},"tcpFallbackPort":0,"port":0}},{"type":"PeerDirectEvent","peer":{"address":"c0900bcfabc493d062ecd293265f571edb70b85313ba4cdda96c9f77163ba62d"}},{"type":"NodeOnlineEvent","node":{"identity":{"proofOfWork":-2140756759,"agreementKeyPair":{"publicKey":"5f63d6a50f75962a832be4236dc3e3757fad93bd19f59f40576c0596afef1d4e","secretKey":"3861685f7a54ea9c6e6eb3fdb6d0d00cffda1cda91e93dc1bfb9838fae1ef05a"},"identityKeyPair":{"publicKey":"668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4","secretKey":"3e6499116ba86b4884345891f3421a5a16c902247326928ce41c10ad8a66bd1f668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4"}},"tcpFallbackPort":0,"port":0}},{"type":"PeerDirectEvent","peer":{"address":"5b4578909bf0ad3565bb5faf843a9f68b325dd87451f6cb747e49d82f6ce5f4c"}},{"type":"PeerDirectEvent","peer":{"address":"bf3572dba7ebb6c5ccd037f3a978707b5d7c5a9b9b01b56b4b9bf059af56a4e0"}},{"type":"PeerDirectEvent","peer":{"address":"ab7a1654d463f9986530bed00569cc895697827b802153b8ef1598579713045f"}}],"id":5}\n')),(0,d.kt)("h3",{id:"tcp-api"},"TCP API"),(0,d.kt)("p",null,"If the command is run with the ",(0,d.kt)("inlineCode",{parentName:"p"},"--rc-jsonrpc-tcp")," flag then it starts an TCP server which can be used to remote control the node using its API."),(0,d.kt)("h4",{id:"start-node-1"},"Start Node"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'$ telnet 127.0.0.1 25421\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is \'^]\'.\n{"jsonrpc":"2.0","method":"start","id":1}\n{"jsonrpc":"2.0","result":"","id":1}\n^]\ntelnet> quit\n')),(0,d.kt)("h4",{id:"shutdown-node-1"},"Shutdown Node"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'$ telnet 127.0.0.1 25421\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is \'^]\'.\n{"jsonrpc":"2.0","method":"shutdown","id":2}\n{"jsonrpc":"2.0","result":"","id":2}\n^]\ntelnet> quit\n')),(0,d.kt)("h4",{id:"send-message-1"},"Send Message"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'$ telnet 127.0.0.1 25421\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is \'^]\'.\n{"jsonrpc":"2.0","method":"send","params":{"recipient":"366a48151e16befa5ae46bd7ad8fa3d3f2dfe0cd2ee29837aa257bab9e332922","payload":"Hello World"},"id":3}\n{"jsonrpc":"2.0","result":"","id":3}\n^]\ntelnet> quit\n')),(0,d.kt)("h4",{id:"get-identity-1"},"Get Identity"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'$ telnet 127.0.0.1 25421\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is \'^]\'.\n{"jsonrpc":"2.0","method":"identity","id":4}\n{"jsonrpc":"2.0","result":{"identityKeyPair":{"secretKey":"3e6499116ba86b4884345891f3421a5a16c902247326928ce41c10ad8a66bd1f668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4","publicKey":"668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4"},"agreementKeyPair":{"secretKey":"3861685f7a54ea9c6e6eb3fdb6d0d00cffda1cda91e93dc1bfb9838fae1ef05a","publicKey":"5f63d6a50f75962a832be4236dc3e3757fad93bd19f59f40576c0596afef1d4e"},"proofOfWork":-2140756759},"id":4}\n^]\ntelnet> quit\n')),(0,d.kt)("h4",{id:"get-events-1"},"Get Events"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'$ telnet 127.0.0.1 25421\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is \'^]\'.\n{"jsonrpc":"2.0","method":"events","id":5}\n{"jsonrpc":"2.0","result":[{"type":"NodeUpEvent","node":{"identity":{"proofOfWork":-2140756759,"agreementKeyPair":{"publicKey":"5f63d6a50f75962a832be4236dc3e3757fad93bd19f59f40576c0596afef1d4e","secretKey":"3861685f7a54ea9c6e6eb3fdb6d0d00cffda1cda91e93dc1bfb9838fae1ef05a"},"identityKeyPair":{"publicKey":"668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4","secretKey":"3e6499116ba86b4884345891f3421a5a16c902247326928ce41c10ad8a66bd1f668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4"}},"tcpFallbackPort":0,"port":0}},{"type":"PeerDirectEvent","peer":{"address":"c0900bcfabc493d062ecd293265f571edb70b85313ba4cdda96c9f77163ba62d"}},{"type":"NodeOnlineEvent","node":{"identity":{"proofOfWork":-2140756759,"agreementKeyPair":{"publicKey":"5f63d6a50f75962a832be4236dc3e3757fad93bd19f59f40576c0596afef1d4e","secretKey":"3861685f7a54ea9c6e6eb3fdb6d0d00cffda1cda91e93dc1bfb9838fae1ef05a"},"identityKeyPair":{"publicKey":"668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4","secretKey":"3e6499116ba86b4884345891f3421a5a16c902247326928ce41c10ad8a66bd1f668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4"}},"tcpFallbackPort":0,"port":0}},{"type":"PeerDirectEvent","peer":{"address":"5b4578909bf0ad3565bb5faf843a9f68b325dd87451f6cb747e49d82f6ce5f4c"}},{"type":"PeerDirectEvent","peer":{"address":"bf3572dba7ebb6c5ccd037f3a978707b5d7c5a9b9b01b56b4b9bf059af56a4e0"}},{"type":"PeerDirectEvent","peer":{"address":"ab7a1654d463f9986530bed00569cc895697827b802153b8ef1598579713045f"}}],"id":5}\n^]\ntelnet> quit\n')),(0,d.kt)("h3",{id:"accessing-remote-control-via-node-rc-command"},"Accessing Remote Control via ",(0,d.kt)("inlineCode",{parentName:"h3"},"node-rc")," Command"),(0,d.kt)("p",null,"The command line interface itself implements the remote control protocol in its ",(0,d.kt)("inlineCode",{parentName:"p"},"node-rc")," command."),(0,d.kt)("p",null,"You can use it like this:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'$ drasyl node-rc identity\n{\n  "proofOfWork" : -2140756759,\n  "agreementKeyPair" : {\n    "publicKey" : "5f63d6a50f75962a832be4236dc3e3757fad93bd19f59f40576c0596afef1d4e",\n    "secretKey" : "3861685f7a54ea9c6e6eb3fdb6d0d00cffda1cda91e93dc1bfb9838fae1ef05a"\n  },\n  "identityKeyPair" : {\n    "publicKey" : "668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4",\n    "secretKey" : "3e6499116ba86b4884345891f3421a5a16c902247326928ce41c10ad8a66bd1f668178a3be9ad22f4f6e94c835ac824cf365db86bb486ab4a42c021dec09c0e4"\n  }\n}\n')),(0,d.kt)("p",null,"Run ",(0,d.kt)("inlineCode",{parentName:"p"},"drasyl help node-rc")," to see the help for the installed remote control commands."),(0,d.kt)("admonition",{type:"caution"},(0,d.kt)("p",{parentName:"admonition"},"The ",(0,d.kt)("inlineCode",{parentName:"p"},"node-rc")," command can only remote control nodes started with the ",(0,d.kt)("inlineCode",{parentName:"p"},"--rc-jsonrpc-tcp")," flag.")))}f.isMDXComponent=!0}}]);