//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define(["require","exports","./has"],a)})(function(a,e){function f(d){var c=void 0===d?{}:d,b=c.message,a=c.name;d=c.warn;c=c.url;h.default("debug")&&(b="DEPRECATED: "+(a?a+": ":"")+(b||"This function will be removed in future versions."),c&&(b+="\n\n    See "+c+" for more details.\n\n"),d?d(b):g?g(b):console.warn(b))}Object.defineProperty(e,
"__esModule",{value:!0});var h=a("./has"),g;e.deprecated=f;e.deprecatedAdvice=function(d){return function(){for(var c=[],b=0;b<arguments.length;b++)c[b]=arguments[b];f(d);return c}};e.deprecatedDecorator=function(d){return function(c,b,a){if(h.default("debug")){var e=a.value;d=d||{};b=String(b);d.name=c.constructor.name?c.constructor.name+"#"+b:b;a.value=function(){for(var b=[],a=0;a<arguments.length;a++)b[a]=arguments[a];f(d);return e.apply(c,b)}}return a}};e.setWarn=function(a){g=a}});