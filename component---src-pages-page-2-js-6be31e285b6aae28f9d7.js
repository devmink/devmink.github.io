webpackJsonp([0xc6c285f8fd10],{103:function(e,t,l){!function(t,l){e.exports=l()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,r=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,i=u&&u(Object);return function o(c,d,m){if("string"!=typeof d){if(i){var s=u(d);s&&s!==i&&o(c,s,m)}var f=r(d);n&&(f=f.concat(n(d)));for(var p=0;p<f.length;++p){var E=f[p];if(!(e[E]||t[E]||m&&m[E])){var y=a(d,E);try{l(c,E,y)}catch(e){}}}return c}return c}})},200:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.CustomLinkForm=t.CustomSubscribeForm=t.CustomRegisterForm=void 0;var n=l(4),a=r(n),u=l(203),i=r(u),o=(t.CustomRegisterForm=function(){return a.default.createElement("div",null,a.default.createElement("form",null,a.default.createElement("label",{for:"email"},"Email",a.default.createElement("input",{type:"email",placeholder:"you@xdomain.com",id:"email",name:"email"})),a.default.createElement("label",{for:"name"},"Full Name",a.default.createElement("input",{type:"text",placeholder:"Enter full name",id:"name",name:"name"})),a.default.createElement("label",{for:"userURL"},"URL",a.default.createElement("input",{type:"url",placeholder:"Enter URL",id:"userURL",name:"userURL"})),a.default.createElement("label",{for:"urlDescription"},"Description",a.default.createElement("textarea",{type:"text",placeholder:"Enter description",id:"urlDescription",name:"urlDescription"}))),a.default.createElement("button",{onClick:i.default},"Submit"))},t.CustomSubscribeForm=function(){return a.default.createElement("div",null,a.default.createElement("form",null,a.default.createElement("label",{for:"email"},"Email",a.default.createElement("input",{type:"email",placeholder:"you@xdomain.com",id:"email",name:"email"})),a.default.createElement("label",{for:"name"},"Full Name",a.default.createElement("input",{type:"text",placeholder:"Enter full name",id:"name",name:"name"})),a.default.createElement("label",{for:"userURL"},"URL",a.default.createElement("input",{type:"url",placeholder:"Enter URL",id:"userURL",name:"userURL"})),a.default.createElement("label",{for:"urlDescription"},"Description",a.default.createElement("textarea",{type:"text",placeholder:"Enter description",id:"urlDescription",name:"urlDescription"}))),a.default.createElement("button",{onClick:i.default},"Submit"))},t.CustomLinkForm=function(){return a.default.createElement("div",null,a.default.createElement("form",null,a.default.createElement("label",{for:"userURL"},"URL",a.default.createElement("input",{type:"url",placeholder:"Enter URL",id:"userURL",name:"userURL"})),a.default.createElement("label",{for:"urlDescription"},"Description",a.default.createElement("textarea",{type:"text",placeholder:"Enter description",id:"urlDescription",name:"urlDescription"}))),a.default.createElement("button",{onClick:i.default},"Submit"))});t.default=o},203:function(e,t){"use strict";t.__esModule=!0;var l=t.SubmitCustomAPI=function(){var e="https://us1.prisma.sh/public-gingergrabber-650/hackernews-node/dev",t=document.querySelector("#userURL"),l=document.querySelector("#urlDescription");console.log("url:",t.value,"description:",l.value);var r=new XMLHttpRequest;r.responseType="json",r.open("POST",e),r.setRequestHeader("Content-Type","application/json"),r.setRequestHeader("Accept","application/json"),r.setRequestHeader("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJoYWNrZXJuZXdzLW5vZGVAZGV2Iiwicm9sZXMiOlsiYWRtaW4iXX0sImlhdCI6MTUyODQ5NjgxNywiZXhwIjoxNTI5MTAxNjE3fQ.iFlxquLzkyu9R1AjBA3V2-QKAM9BQ1z6gALGUPxzu7M"),r.onload=function(){console.log("data returned:",r.response)},r.send(JSON.stringify({query:'mutation {\n    createLink(data: {\n      url: "'+t.value+'",\n      description: "'+l.value+'"\n      postedBy : {\n        connect: {\n          email: "nick@graph.cool"\n        }\n      }\n    }) {\n      id\n    }\n  }'}))};t.default=l},207:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(4),a=r(n),u=l(101),i=r(u),o=l(200),c=r(o),d=function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"Submit a link"),a.default.createElement("p",null,"Want to share a link? Please enter the url and a brief description of why you chose this url."),a.default.createElement(c.default,null),a.default.createElement(i.default,{to:"/"},"Go back to the homepage"))};t.default=d,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-page-2-js-6be31e285b6aae28f9d7.js.map