window.__require=function t(e,o,r){function n(i,l){if(!o[i]){if(!e[i]){var u=i.split("/");if(u=u[u.length-1],!e[u]){var p="function"==typeof __require&&__require;if(!l&&p)return p(u,!0);if(c)return c(u,!0);throw new Error("Cannot find module '"+i+"'")}i=u}var f=o[i]={exports:{}};e[i][0].call(f.exports,function(t){return n(e[i][1][t]||t)},f,f.exports,t,e,o,r)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)n(r[i]);return n}({ScrollViewHack:[function(t,e,o){"use strict";cc._RF.push(e,"bc98bwC8tRFRqmtGnDvxigI","ScrollViewHack");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,l=i.ccclass,u=i.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mul=10,e}return n(e,t),e.prototype.onLoad=function(){this.node.on(cc.Node.EventType.MOUSE_WHEEL,this._onMouseWheel,this,!0)},e.prototype._onMouseWheel=function(t){t.setScrollData(t.getScrollX(),t.getScrollY()*this.mul),console.log(t.getScrollY())},c([u({tooltip:"\u6539\u53d8\u6eda\u8f6e\u79fb\u52a8\u8ddd\u79bb\u7684\u500d\u6570"})],e.prototype,"mul",void 0),c([l],e)}(cc.Component);o.default=p,cc._RF.pop()},{}]},{},["ScrollViewHack"]);