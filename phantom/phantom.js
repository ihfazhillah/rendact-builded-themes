!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-router")):"function"==typeof define&&define.amd?define(["react","react-router"],t):"object"==typeof exports?exports.phantom=t(require("react"),require("react-router")):e.phantom=t(e.react,e["react-router"])}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://shopkeeper-lionel-47443.netlify.com/phantom/",t(t.s=6)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),l=n(5),u=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"handleMenuClick",value:function(e){e.preventDefault(),document.body.className="is-menu-visible"}},{key:"render",value:function(){return c.a.createElement("header",{id:"header",style:{background:"#fff"}},c.a.createElement("div",{className:"inner"},c.a.createElement(l.Link,{to:"/",className:"logo"},c.a.createElement("span",{className:"symbol"},c.a.createElement("img",{src:"images/logo.svg",alt:""})),c.a.createElement("span",{className:"title"},"Rendact")),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{onClick:this.handleMenuClick,href:"#menu"},"Menu"))))))}}]),t}(c.a.Component);t.a=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return c.a.createElement("footer",{id:"footer"},c.a.createElement("div",{className:"inner"},this.props.footerWidgets.map(function(e,t){return c.a.createElement("section",{key:t},e)}),c.a.createElement("ul",{className:"copyright"},c.a.createElement("li",null,"© Untitled. All rights reserved"),c.a.createElement("li",null,"Design: ",c.a.createElement("a",{href:"http:///html5up.net"},"HTML5 UP")),c.a.createElement("li",null,"Converted to jsx by: ",c.a.createElement("a",{href:"https://rendact.com"},"Rendact Team")))))}}]),t}(c.a.Component);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"handleClose",value:function(e){e.preventDefault(),document.body.className=""}},{key:"render",value:function(){return c.a.createElement("nav",{id:"menu"},c.a.createElement("div",{className:"inner"},c.a.createElement("h2",null,"Menu"),this.props.theMenu(),c.a.createElement("ul",null)),c.a.createElement("a",{className:"close",onClick:this.handleClose,href:"#menu"},"Close"))}}]),t}(c.a.Component);t.a=u},function(e,t){},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"Home",function(){return r}),n.d(t,"Single",function(){return o}),n.d(t,"Blog",function(){return a}),n.d(t,"widgetArea",function(){return i});var r=n(7).default,o=n(9).default,a=n(10).default,i=["Sidebar","Single","Footer"]},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n.n(i),l=n(1),u=n(2),s=n(8),f=n(3),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("section",{className:"tiles"},this.props.data?this.props.data.map(function(e){return c.a.createElement(s.a,{className:"style"+(Math.floor(6*Math.random())+1),image:e.imageFeatured?e.imageFeatured.blobUrl:null,content:e.content&&e.content.slice(0,100)+" ...",title:e.title,key:e.id,id:e.id})}):null),this.props.thePagination)}}]),t}(c.a.Component),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props.data;return c.a.createElement("div",null,c.a.createElement("span",{className:"image main"},e&&e.imageFeatured&&c.a.createElement("img",{src:e.imageFeatured.blobUrl,alt:e.title})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e&&e.content}}))}}]),t}(c.a.Component),y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"componentDidMount",value:function(){n(4),document.body.className="",document.body.style.background=""}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{id:"wrapper",style:{background:"#fff"}},c.a.createElement(l.a,this.props),c.a.createElement("div",{id:"main"},c.a.createElement("div",{className:"inner"},c.a.createElement("header",null),this.props.loadDone&&"latestPost"===this.props.theConfig.frontPage?c.a.createElement(m,this.props):c.a.createElement(d,this.props))),c.a.createElement(u.a,this.props)),c.a.createElement(f.a,this.props))}}]),t}(c.a.Component);t.default=y},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(5),i=(n.n(a),function(e){return o.a.createElement("article",{className:e.className},o.a.createElement("span",{className:"image"},o.a.createElement("img",{src:e.image,alt:e.alt,style:{height:360,width:333}})),o.a.createElement(a.Link,{to:"/post/"+e.id},o.a.createElement("h2",null,e.title),o.a.createElement("div",{className:"content"},o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.content}}))))});t.a=i},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n.n(i),l=n(1),u=n(2),s=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"componentDidMount",value:function(){n(4),document.body.className=""}},{key:"render",value:function(){var e=this.props.postData;return c.a.createElement("div",null,c.a.createElement("div",{id:"wrapper",style:{background:"#fff"}},c.a.createElement(l.a,this.props),c.a.createElement("div",{id:"main"},c.a.createElement("div",{className:"inner"},c.a.createElement("h1",null,e.title),c.a.createElement("span",{className:"image main"},e.imageFeatured&&c.a.createElement("img",{src:e.imageFeatured.blobUrl,alt:e.title})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}))),c.a.createElement(u.a,this.props)),c.a.createElement(s.a,this.props))}}]),t}(c.a.Component);t.default=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n.n(i),l=n(1),u=n(2),s=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"componentDidMount",value:function(){n(4),document.body.className=""}},{key:"render",value:function(){var e=this.props.postData;return c.a.createElement("div",null,c.a.createElement("div",{id:"wrapper",style:{background:"#fff"}},c.a.createElement(l.a,this.props),c.a.createElement("div",{id:"main"},c.a.createElement("div",{className:"inner"},c.a.createElement("h1",null,e.title),c.a.createElement("span",{className:"image main"},e.imageFeatured&&c.a.createElement("img",{src:e.imageFeatured.blobUrl,alt:e.title})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}))),c.a.createElement(u.a,this.props)),c.a.createElement(s.a,this.props))}}]),t}(c.a.Component);t.default=p}])});