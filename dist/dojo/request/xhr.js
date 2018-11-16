//>>built
define(["../errors/RequestError","./watch","./handlers","./util","../has"],function(p,x,q,e,r){function y(a,b){var c=a.xhr;a.status=a.xhr.status;try{a.text=c.responseText}catch(d){}"xml"===a.options.handleAs&&(a.data=c.responseXML);var g;if(b)this.reject(b);else{try{q(a)}catch(d){g=d}e.checkStatus(c.status)?g?this.reject(g):this.resolve(a):(b=g?new p("Unable to load "+a.url+" status: "+c.status+" and an error in handleAs: transformation of response",a):new p("Unable to load "+a.url+" status: "+c.status,
a),this.reject(b))}}function z(a){return this.xhr.getResponseHeader(a)}function m(a,b,c){var g=b&&b.data&&b.data instanceof FormData,d=e.parseArgs(a,e.deepCreate(A,b),g);a=d.url;b=d.options;var B=!b.data&&"POST"!==b.method&&"PUT"!==b.method;10>=r("ie")&&(a=a.split("#")[0]);var k,h=e.deferred(d,u,v,C,y,function(){k&&k()}),f=d.xhr=m._create();if(!f)return h.cancel(new p("XHR was not created")),c?h:h.promise;d.getHeader=z;t&&(k=t(f,h,d,b.uploadProgress));var q="undefined"===typeof b.data?null:b.data,
D=!b.sync,E=b.method;try{f.open(E,a,D,b.user||void 0,b.password||void 0);b.withCredentials&&(f.withCredentials=b.withCredentials);b.handleAs in w&&(f.responseType=w[b.handleAs]);var l=b.headers;a=g||B?!1:"application/x-www-form-urlencoded";if(l)for(var n in l)"content-type"===n.toLowerCase()?a=l[n]:l[n]&&f.setRequestHeader(n,l[n]);a&&!1!==a&&f.setRequestHeader("Content-Type",a);l&&"X-Requested-With"in l||f.setRequestHeader("X-Requested-With","XMLHttpRequest");e.notify&&e.notify.emit("send",d,h.promise.cancel);
f.send(q)}catch(F){h.reject(F)}x(h);f=null;return c?h:h.promise}r.add("dojo-force-activex-xhr",function(){return 0});var w={blob:"blob",document:"document",arraybuffer:"arraybuffer"},v,C,t,u;v=function(a){return!this.isFulfilled()};u=function(a,b){b.xhr.abort()};t=function(a,b,c,g){function d(a){b.handleResponse(c)}function e(a){a=new p("Unable to load "+c.url+" status: "+a.target.status,c);b.handleResponse(c,a)}function k(a){a.lengthComputable?(c.loaded=a.loaded,c.total=a.total,b.progress(c)):3===
c.xhr.readyState&&(c.loaded="loaded"in a?a.loaded:a.position,b.progress(c))}a.addEventListener("load",d,!1);a.addEventListener("error",e,!1);a.addEventListener("progress",k,!1);g&&a.upload&&a.upload.addEventListener("progress",k,!1);return function(){a.removeEventListener("load",d,!1);a.removeEventListener("error",e,!1);a.removeEventListener("progress",k,!1);a.upload.removeEventListener("progress",k,!1);a=null}};var A={data:null,query:null,sync:!1,method:"GET"};m._create=function(){throw Error("XMLHTTP not available");
};r("dojo-force-activex-xhr")||(m._create=function(){return new XMLHttpRequest});e.addCommonMethods(m);return m});