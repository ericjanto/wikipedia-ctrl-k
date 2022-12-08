const element = document.createElement("div");
element.id = "root";
element.className = "root";

document.body.prepend(element);

async function run(question) {
    const port = chrome.runtime.connect();
    port.onMessage.addListener(function (msg) {
        if (msg.answer) {
            // container.innerHTML =
            //     '<p class="prefix">ChatGPT:</p><div id="answer" class="markdown-body" dir="auto"></div>';
            // container.querySelector("#answer").innerHTML = markdown.render(msg.answer);
            console.log('Answer: ', msg.answer)
            window.postMessage("ANSWER=" + msg.answer)
        } else if (msg.error) {
            console.log(msg)
            window.postMessage("ERROR=login")
            // container.innerHTML =
            //     '<p>Please login at <a href="https://chat.openai.com" target="_blank">chat.openai.com</a> first</p>';
        } else {
            // container.innerHTML = "<p>Failed to load response from ChatGPT</p>";
            window.postMessage("ERROR=unknown")
        }
    });
    port.postMessage({ question });
}

window.addEventListener("message", (e) => {
    const payload = e.data
    if (payload.includes("QUERY=")) {
        const query = e.data.replace("QUERY=", "")
        console.log("Received query:", query)
        run(query)
    }
})

// REPLACE BELOW

function bg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function kg(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var c={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),wg=Symbol.for("react.portal"),xg=Symbol.for("react.fragment"),Eg=Symbol.for("react.strict_mode"),Cg=Symbol.for("react.profiler"),_g=Symbol.for("react.provider"),Sg=Symbol.for("react.context"),Pg=Symbol.for("react.forward_ref"),$g=Symbol.for("react.suspense"),Og=Symbol.for("react.memo"),Tg=Symbol.for("react.lazy"),Is=Symbol.iterator;function Lg(e){return e===null||typeof e!="object"?null:(e=Is&&e[Is]||e["@@iterator"],typeof e=="function"?e:null)}var Ld={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Id=Object.assign,Dd={};function yr(e,t,n){this.props=e,this.context=t,this.refs=Dd,this.updater=n||Ld}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rd(){}Rd.prototype=yr.prototype;function xu(e,t,n){this.props=e,this.context=t,this.refs=Dd,this.updater=n||Ld}var Eu=xu.prototype=new Rd;Eu.constructor=xu;Id(Eu,yr.prototype);Eu.isPureReactComponent=!0;var Ds=Array.isArray,Ad=Object.prototype.hasOwnProperty,Cu={current:null},Md={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ad.call(t,r)&&!Md.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ko,type:e,key:i,ref:l,props:o,_owner:Cu.current}}function Ig(e,t){return{$$typeof:ko,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _u(e){return typeof e=="object"&&e!==null&&e.$$typeof===ko}function Dg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rs=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dg(""+e.key):t.toString(36)}function ii(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ko:case wg:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+$l(l,0):r,Ds(o)?(n="",e!=null&&(n=e.replace(Rs,"$&/")+"/"),ii(o,t,n,"",function(s){return s})):o!=null&&(_u(o)&&(o=Ig(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Rs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Ds(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+$l(i,a);l+=ii(i,t,n,u,o)}else if(u=Lg(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+$l(i,a++),l+=ii(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Io(e,t,n){if(e==null)return e;var r=[],o=0;return ii(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Rg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},li={transition:null},Ag={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:li,ReactCurrentOwner:Cu};N.Children={map:Io,forEach:function(e,t,n){Io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Io(e,function(){t++}),t},toArray:function(e){return Io(e,function(t){return t})||[]},only:function(e){if(!_u(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=yr;N.Fragment=xg;N.Profiler=Cg;N.PureComponent=xu;N.StrictMode=Eg;N.Suspense=$g;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ag;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Id({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Cu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Ad.call(t,u)&&!Md.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:ko,type:e.type,key:o,ref:i,props:r,_owner:l}};N.createContext=function(e){return e={$$typeof:Sg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_g,_context:e},e.Consumer=e};N.createElement=Nd;N.createFactory=function(e){var t=Nd.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:Pg,render:e}};N.isValidElement=_u;N.lazy=function(e){return{$$typeof:Tg,_payload:{_status:-1,_result:e},_init:Rg}};N.memo=function(e,t){return{$$typeof:Og,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=li.transition;li.transition={};try{e()}finally{li.transition=t}};N.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};N.useCallback=function(e,t){return Le.current.useCallback(e,t)};N.useContext=function(e){return Le.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};N.useEffect=function(e,t){return Le.current.useEffect(e,t)};N.useId=function(){return Le.current.useId()};N.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return Le.current.useMemo(e,t)};N.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};N.useRef=function(e){return Le.current.useRef(e)};N.useState=function(e){return Le.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return Le.current.useTransition()};N.version="18.2.0";(function(e){e.exports=N})(c);const Z=Td(c.exports),Mg=bg({__proto__:null,default:Z},[c.exports]);var _n={exports:{}},Be={},Fd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,E){var $=O.length;O.push(E);e:for(;0<$;){var R=$-1>>>1,I=O[R];if(0<o(I,E))O[R]=E,O[$]=I,$=R;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var E=O[0],$=O.pop();if($!==E){O[0]=$;e:for(var R=0,I=O.length,B=I>>>1;R<B;){var ie=2*(R+1)-1,kt=O[ie],se=ie+1,tt=O[se];if(0>o(kt,$))se<I&&0>o(tt,kt)?(O[R]=tt,O[se]=$,R=se):(O[R]=kt,O[ie]=$,R=ie);else if(se<I&&0>o(tt,$))O[R]=tt,O[se]=$,R=se;else break e}}return E}function o(O,E){var $=O.sortIndex-E.sortIndex;return $!==0?$:O.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],f=1,d=null,g=3,v=!1,k=!1,h=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var E=n(s);E!==null;){if(E.callback===null)r(s);else if(E.startTime<=O)r(s),E.sortIndex=E.expirationTime,t(u,E);else break;E=n(s)}}function b(O){if(h=!1,y(O),!k)if(n(u)!==null)k=!0,Nt(x);else{var E=n(s);E!==null&&bt(b,E.startTime-O)}}function x(O,E){k=!1,h&&(h=!1,p(_),_=-1),v=!0;var $=g;try{for(y(E),d=n(u);d!==null&&(!(d.expirationTime>E)||O&&!j());){var R=d.callback;if(typeof R=="function"){d.callback=null,g=d.priorityLevel;var I=R(d.expirationTime<=E);E=e.unstable_now(),typeof I=="function"?d.callback=I:d===n(u)&&r(u),y(E)}else r(u);d=n(u)}if(d!==null)var B=!0;else{var ie=n(s);ie!==null&&bt(b,ie.startTime-E),B=!1}return B}finally{d=null,g=$,v=!1}}var C=!1,S=null,_=-1,D=5,A=-1;function j(){return!(e.unstable_now()-A<D)}function ee(){if(S!==null){var O=e.unstable_now();A=O;var E=!0;try{E=S(!0,O)}finally{E?be():(C=!1,S=null)}}else C=!1}var be;if(typeof m=="function")be=function(){m(ee)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Mt=Se.port2;Se.port1.onmessage=ee,be=function(){Mt.postMessage(null)}}else be=function(){w(ee,0)};function Nt(O){S=O,C||(C=!0,be())}function bt(O,E){_=w(function(){O(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,Nt(x))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(O){switch(g){case 1:case 2:case 3:var E=3;break;default:E=g}var $=g;g=E;try{return O()}finally{g=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,E){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=g;g=O;try{return E()}finally{g=$}},e.unstable_scheduleCallback=function(O,E,$){var R=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?R+$:R):$=R,O){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=$+I,O={id:f++,callback:E,priorityLevel:O,startTime:$,expirationTime:I,sortIndex:-1},$>R?(O.sortIndex=$,t(s,O),n(u)===null&&O===n(s)&&(h?(p(_),_=-1):h=!0,bt(b,$-R))):(O.sortIndex=I,t(u,O),k||v||(k=!0,Nt(x))),O},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(O){var E=g;return function(){var $=g;g=E;try{return O.apply(this,arguments)}finally{g=$}}}})(Kd);(function(e){e.exports=Kd})(Fd);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=c.exports,je=Fd.exports;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zd=new Set,Xr={};function Sn(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for(Xr[e]=t,e=0;e<t.length;e++)zd.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ga=Object.prototype.hasOwnProperty,Ng=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,As={},Ms={};function Fg(e){return ga.call(Ms,e)?!0:ga.call(As,e)?!1:Ng.test(e)?Ms[e]=!0:(As[e]=!0,!1)}function Kg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hg(e,t,n,r){if(t===null||typeof t>"u"||Kg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Su=/[\-:]([a-z])/g;function Pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Su,Pu);ve[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Su,Pu);ve[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Su,Pu);ve[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function $u(e,t,n,r){var o=ve.hasOwnProperty(t)?ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hg(t,n,o,r)&&(n=null),r||o===null?Fg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Ou=Symbol.for("react.strict_mode"),ya=Symbol.for("react.profiler"),jd=Symbol.for("react.provider"),Bd=Symbol.for("react.context"),Tu=Symbol.for("react.forward_ref"),ha=Symbol.for("react.suspense"),va=Symbol.for("react.suspense_list"),Lu=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),Ud=Symbol.for("react.offscreen"),Ns=Symbol.iterator;function Cr(e){return e===null||typeof e!="object"?null:(e=Ns&&e[Ns]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Ol;function Dr(e){if(Ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ol=t&&t[1]||""}return`
`+Ol+e}var Tl=!1;function Ll(e,t){if(!e||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function zg(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function ba(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Kn:return"Portal";case ya:return"Profiler";case Ou:return"StrictMode";case ha:return"Suspense";case va:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bd:return(e.displayName||"Context")+".Consumer";case jd:return(e._context.displayName||"Context")+".Provider";case Tu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lu:return t=e.displayName||null,t!==null?t:ba(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return ba(e(t))}catch{}}return null}function jg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ba(t);case 8:return t===Ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bg(e){var t=Wd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){e._valueTracker||(e._valueTracker=Bg(e))}function Vd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ka(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Fs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qd(e,t){t=t.checked,t!=null&&$u(e,"checked",t,!1)}function wa(e,t){qd(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&xa(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ks(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xa(e,t,n){(t!=="number"||wi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rr=Array.isArray;function Xn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Rr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function Qd(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ca(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ao,Yd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ug=["Webkit","ms","Moz","O"];Object.keys(Nr).forEach(function(e){Ug.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nr[t]=Nr[e]})});function Xd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nr.hasOwnProperty(e)&&Nr[e]?(""+t).trim():t+"px"}function Zd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Xd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Wg=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _a(e,t){if(t){if(Wg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Sa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Zn=null,Jn=null;function js(e){if(e=Eo(e)){if(typeof $a!="function")throw Error(P(280));var t=e.stateNode;t&&(t=rl(t),$a(e.stateNode,e.type,t))}}function Jd(e){Zn?Jn?Jn.push(e):Jn=[e]:Zn=e}function ef(){if(Zn){var e=Zn,t=Jn;if(Jn=Zn=null,js(e),t)for(e=0;e<t.length;e++)js(t[e])}}function tf(e,t){return e(t)}function nf(){}var Il=!1;function rf(e,t,n){if(Il)return e(t,n);Il=!0;try{return tf(e,t,n)}finally{Il=!1,(Zn!==null||Jn!==null)&&(nf(),ef())}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=rl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Oa=!1;if($t)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{Oa=!1}function Vg(e,t,n,r,o,i,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(f){this.onError(f)}}var Fr=!1,xi=null,Ei=!1,Ta=null,qg={onError:function(e){Fr=!0,xi=e}};function Qg(e,t,n,r,o,i,l,a,u){Fr=!1,xi=null,Vg.apply(qg,arguments)}function Gg(e,t,n,r,o,i,l,a,u){if(Qg.apply(this,arguments),Fr){if(Fr){var s=xi;Fr=!1,xi=null}else throw Error(P(198));Ei||(Ei=!0,Ta=s)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function of(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bs(e){if(Pn(e)!==e)throw Error(P(188))}function Yg(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Bs(o),e;if(i===r)return Bs(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function lf(e){return e=Yg(e),e!==null?af(e):null}function af(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=af(e);if(t!==null)return t;e=e.sibling}return null}var uf=je.unstable_scheduleCallback,Us=je.unstable_cancelCallback,Xg=je.unstable_shouldYield,Zg=je.unstable_requestPaint,le=je.unstable_now,Jg=je.unstable_getCurrentPriorityLevel,Du=je.unstable_ImmediatePriority,sf=je.unstable_UserBlockingPriority,Ci=je.unstable_NormalPriority,ey=je.unstable_LowPriority,cf=je.unstable_IdlePriority,Ji=null,mt=null;function ty(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:oy,ny=Math.log,ry=Math.LN2;function oy(e){return e>>>=0,e===0?32:31-(ny(e)/ry|0)|0}var Mo=64,No=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _i(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Ar(a):(i&=l,i!==0&&(r=Ar(i)))}else l=n&~o,l!==0?r=Ar(l):i!==0&&(r=Ar(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),o=1<<n,r|=e[n],t&=~o;return r}function iy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ly(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-at(i),a=1<<l,u=o[l];u===-1?((a&n)===0||(a&r)!==0)&&(o[l]=iy(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function La(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function df(){var e=Mo;return Mo<<=1,(Mo&4194240)===0&&(Mo=64),e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function ay(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ru(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var z=0;function ff(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pf,Au,mf,gf,yf,Ia=!1,Fo=[],qt=null,Qt=null,Gt=null,eo=new Map,to=new Map,jt=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ws(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(t.pointerId)}}function Sr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Eo(t),t!==null&&Au(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function sy(e,t,n,r,o){switch(t){case"focusin":return qt=Sr(qt,e,t,n,r,o),!0;case"dragenter":return Qt=Sr(Qt,e,t,n,r,o),!0;case"mouseover":return Gt=Sr(Gt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return eo.set(i,Sr(eo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,to.set(i,Sr(to.get(i)||null,e,t,n,r,o)),!0}return!1}function hf(e){var t=mn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=of(n),t!==null){e.blockedOn=t,yf(e.priority,function(){mf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Da(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pa=r,n.target.dispatchEvent(r),Pa=null}else return t=Eo(n),t!==null&&Au(t),e.blockedOn=n,!1;t.shift()}return!0}function Vs(e,t,n){ai(e)&&n.delete(t)}function cy(){Ia=!1,qt!==null&&ai(qt)&&(qt=null),Qt!==null&&ai(Qt)&&(Qt=null),Gt!==null&&ai(Gt)&&(Gt=null),eo.forEach(Vs),to.forEach(Vs)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ia||(Ia=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,cy)))}function no(e){function t(o){return Pr(o,e)}if(0<Fo.length){Pr(Fo[0],e);for(var n=1;n<Fo.length;n++){var r=Fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Pr(qt,e),Qt!==null&&Pr(Qt,e),Gt!==null&&Pr(Gt,e),eo.forEach(t),to.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)hf(n),n.blockedOn===null&&jt.shift()}var er=Rt.ReactCurrentBatchConfig,Si=!0;function dy(e,t,n,r){var o=z,i=er.transition;er.transition=null;try{z=1,Mu(e,t,n,r)}finally{z=o,er.transition=i}}function fy(e,t,n,r){var o=z,i=er.transition;er.transition=null;try{z=4,Mu(e,t,n,r)}finally{z=o,er.transition=i}}function Mu(e,t,n,r){if(Si){var o=Da(e,t,n,r);if(o===null)Bl(e,t,r,Pi,n),Ws(e,r);else if(sy(o,e,t,n,r))r.stopPropagation();else if(Ws(e,r),t&4&&-1<uy.indexOf(e)){for(;o!==null;){var i=Eo(o);if(i!==null&&pf(i),i=Da(e,t,n,r),i===null&&Bl(e,t,r,Pi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Bl(e,t,r,null,n)}}var Pi=null;function Da(e,t,n,r){if(Pi=null,e=Iu(r),e=mn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=of(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pi=e,null}function vf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jg()){case Du:return 1;case sf:return 4;case Ci:case ey:return 16;case cf:return 536870912;default:return 16}default:return 16}}var Wt=null,Nu=null,ui=null;function bf(){if(ui)return ui;var e,t=Nu,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ui=o.slice(e,1<r?1-r:void 0)}function si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function qs(){return!1}function Ue(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ko:qs,this.isPropagationStopped=qs,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),t}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=Ue(hr),xo=re({},hr,{view:0,detail:0}),py=Ue(xo),Rl,Al,$r,el=re({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(Rl=e.screenX-$r.screenX,Al=e.screenY-$r.screenY):Al=Rl=0,$r=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),Qs=Ue(el),my=re({},el,{dataTransfer:0}),gy=Ue(my),yy=re({},xo,{relatedTarget:0}),Ml=Ue(yy),hy=re({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),vy=Ue(hy),by=re({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ky=Ue(by),wy=re({},hr,{data:0}),Gs=Ue(wy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _y(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cy[e])?!!t[e]:!1}function Ku(){return _y}var Sy=re({},xo,{key:function(e){if(e.key){var t=xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ey[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ku,charCode:function(e){return e.type==="keypress"?si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Py=Ue(Sy),$y=re({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=Ue($y),Oy=re({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ku}),Ty=Ue(Oy),Ly=re({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=Ue(Ly),Dy=re({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ry=Ue(Dy),Ay=[9,13,27,32],Hu=$t&&"CompositionEvent"in window,Kr=null;$t&&"documentMode"in document&&(Kr=document.documentMode);var My=$t&&"TextEvent"in window&&!Kr,kf=$t&&(!Hu||Kr&&8<Kr&&11>=Kr),Xs=String.fromCharCode(32),Zs=!1;function wf(e,t){switch(e){case"keyup":return Ay.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function Ny(e,t){switch(e){case"compositionend":return xf(t);case"keypress":return t.which!==32?null:(Zs=!0,Xs);case"textInput":return e=t.data,e===Xs&&Zs?null:e;default:return null}}function Fy(e,t){if(zn)return e==="compositionend"||!Hu&&wf(e,t)?(e=bf(),ui=Nu=Wt=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kf&&t.locale!=="ko"?null:t.data;default:return null}}var Ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ky[e.type]:t==="textarea"}function Ef(e,t,n,r){Jd(r),t=$i(t,"onChange"),0<t.length&&(n=new Fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,ro=null;function Hy(e){Rf(e,0)}function tl(e){var t=Un(e);if(Vd(t))return e}function zy(e,t){if(e==="change")return t}var Cf=!1;if($t){var Nl;if($t){var Fl="oninput"in document;if(!Fl){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),Fl=typeof ec.oninput=="function"}Nl=Fl}else Nl=!1;Cf=Nl&&(!document.documentMode||9<document.documentMode)}function tc(){Hr&&(Hr.detachEvent("onpropertychange",_f),ro=Hr=null)}function _f(e){if(e.propertyName==="value"&&tl(ro)){var t=[];Ef(t,ro,e,Iu(e)),rf(Hy,t)}}function jy(e,t,n){e==="focusin"?(tc(),Hr=t,ro=n,Hr.attachEvent("onpropertychange",_f)):e==="focusout"&&tc()}function By(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(ro)}function Uy(e,t){if(e==="click")return tl(t)}function Wy(e,t){if(e==="input"||e==="change")return tl(t)}function Vy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:Vy;function oo(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ga.call(t,o)||!st(e[o],t[o]))return!1}return!0}function nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rc(e,t){var n=nc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nc(n)}}function Sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pf(){for(var e=window,t=wi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wi(e.document)}return t}function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qy(e){var t=Pf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sf(n.ownerDocument.documentElement,n)){if(r!==null&&zu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=rc(n,i);var l=rc(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qy=$t&&"documentMode"in document&&11>=document.documentMode,jn=null,Ra=null,zr=null,Aa=!1;function oc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Aa||jn==null||jn!==wi(r)||(r=jn,"selectionStart"in r&&zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&oo(zr,r)||(zr=r,r=$i(Ra,"onSelect"),0<r.length&&(t=new Fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jn)))}function Ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bn={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},Kl={},$f={};$t&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function nl(e){if(Kl[e])return Kl[e];if(!Bn[e])return e;var t=Bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $f)return Kl[e]=t[n];return e}var Of=nl("animationend"),Tf=nl("animationiteration"),Lf=nl("animationstart"),If=nl("transitionend"),Df=new Map,ic="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){Df.set(e,t),Sn(t,[e])}for(var Hl=0;Hl<ic.length;Hl++){var zl=ic[Hl],Gy=zl.toLowerCase(),Yy=zl[0].toUpperCase()+zl.slice(1);ln(Gy,"on"+Yy)}ln(Of,"onAnimationEnd");ln(Tf,"onAnimationIteration");ln(Lf,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(If,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function lc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gg(r,t,void 0,e),e.currentTarget=null}function Rf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;lc(o,a,s),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;lc(o,a,s),i=u}}}if(Ei)throw e=Ta,Ei=!1,Ta=null,e}function Q(e,t){var n=t[Ha];n===void 0&&(n=t[Ha]=new Set);var r=e+"__bubble";n.has(r)||(Af(t,e,2,!1),n.add(r))}function jl(e,t,n){var r=0;t&&(r|=4),Af(n,e,r,t)}var zo="_reactListening"+Math.random().toString(36).slice(2);function io(e){if(!e[zo]){e[zo]=!0,zd.forEach(function(n){n!=="selectionchange"&&(Xy.has(n)||jl(n,!1,e),jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zo]||(t[zo]=!0,jl("selectionchange",!1,t))}}function Af(e,t,n,r){switch(vf(t)){case 1:var o=dy;break;case 4:o=fy;break;default:o=Mu}n=o.bind(null,t,n,e),o=void 0,!Oa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Bl(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=mn(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}rf(function(){var s=i,f=Iu(n),d=[];e:{var g=Df.get(e);if(g!==void 0){var v=Fu,k=e;switch(e){case"keypress":if(si(n)===0)break e;case"keydown":case"keyup":v=Py;break;case"focusin":k="focus",v=Ml;break;case"focusout":k="blur",v=Ml;break;case"beforeblur":case"afterblur":v=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ty;break;case Of:case Tf:case Lf:v=vy;break;case If:v=Iy;break;case"scroll":v=py;break;case"wheel":v=Ry;break;case"copy":case"cut":case"paste":v=ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ys}var h=(t&4)!==0,w=!h&&e==="scroll",p=h?g!==null?g+"Capture":null:g;h=[];for(var m=s,y;m!==null;){y=m;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,p!==null&&(b=Jr(m,p),b!=null&&h.push(lo(m,b,y)))),w)break;m=m.return}0<h.length&&(g=new v(g,k,null,n,f),d.push({event:g,listeners:h}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Pa&&(k=n.relatedTarget||n.fromElement)&&(mn(k)||k[Ot]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=s,k=k?mn(k):null,k!==null&&(w=Pn(k),k!==w||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=s),v!==k)){if(h=Qs,b="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(h=Ys,b="onPointerLeave",p="onPointerEnter",m="pointer"),w=v==null?g:Un(v),y=k==null?g:Un(k),g=new h(b,m+"leave",v,n,f),g.target=w,g.relatedTarget=y,b=null,mn(f)===s&&(h=new h(p,m+"enter",k,n,f),h.target=y,h.relatedTarget=w,b=h),w=b,v&&k)t:{for(h=v,p=k,m=0,y=h;y;y=Tn(y))m++;for(y=0,b=p;b;b=Tn(b))y++;for(;0<m-y;)h=Tn(h),m--;for(;0<y-m;)p=Tn(p),y--;for(;m--;){if(h===p||p!==null&&h===p.alternate)break t;h=Tn(h),p=Tn(p)}h=null}else h=null;v!==null&&ac(d,g,v,h,!1),k!==null&&w!==null&&ac(d,w,k,h,!0)}}e:{if(g=s?Un(s):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var x=zy;else if(Js(g))if(Cf)x=Wy;else{x=By;var C=jy}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(x=Uy);if(x&&(x=x(e,s))){Ef(d,x,n,f);break e}C&&C(e,g,s),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&xa(g,"number",g.value)}switch(C=s?Un(s):window,e){case"focusin":(Js(C)||C.contentEditable==="true")&&(jn=C,Ra=s,zr=null);break;case"focusout":zr=Ra=jn=null;break;case"mousedown":Aa=!0;break;case"contextmenu":case"mouseup":case"dragend":Aa=!1,oc(d,n,f);break;case"selectionchange":if(Qy)break;case"keydown":case"keyup":oc(d,n,f)}var S;if(Hu)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else zn?wf(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(kf&&n.locale!=="ko"&&(zn||_!=="onCompositionStart"?_==="onCompositionEnd"&&zn&&(S=bf()):(Wt=f,Nu="value"in Wt?Wt.value:Wt.textContent,zn=!0)),C=$i(s,_),0<C.length&&(_=new Gs(_,e,null,n,f),d.push({event:_,listeners:C}),S?_.data=S:(S=xf(n),S!==null&&(_.data=S)))),(S=My?Ny(e,n):Fy(e,n))&&(s=$i(s,"onBeforeInput"),0<s.length&&(f=new Gs("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:s}),f.data=S))}Rf(d,t)})}function lo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $i(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Jr(e,n),i!=null&&r.unshift(lo(e,i,o)),i=Jr(e,t),i!=null&&r.push(lo(e,i,o))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ac(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,o?(u=Jr(n,i),u!=null&&l.unshift(lo(n,u,a))):o||(u=Jr(n,i),u!=null&&l.push(lo(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Zy=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function uc(e){return(typeof e=="string"?e:""+e).replace(Zy,`
`).replace(Jy,"")}function jo(e,t,n){if(t=uc(t),uc(e)!==t&&n)throw Error(P(425))}function Oi(){}var Ma=null,Na=null;function Fa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,eh=typeof clearTimeout=="function"?clearTimeout:void 0,sc=typeof Promise=="function"?Promise:void 0,th=typeof queueMicrotask=="function"?queueMicrotask:typeof sc<"u"?function(e){return sc.resolve(null).then(e).catch(nh)}:Ka;function nh(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),no(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);no(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),pt="__reactFiber$"+vr,ao="__reactProps$"+vr,Ot="__reactContainer$"+vr,Ha="__reactEvents$"+vr,rh="__reactListeners$"+vr,oh="__reactHandles$"+vr;function mn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cc(e);e!==null;){if(n=e[pt])return n;e=cc(e)}return t}e=n,n=e.parentNode}return null}function Eo(e){return e=e[pt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function rl(e){return e[ao]||null}var za=[],Wn=-1;function an(e){return{current:e}}function Y(e){0>Wn||(e.current=za[Wn],za[Wn]=null,Wn--)}function q(e,t){Wn++,za[Wn]=e.current,e.current=t}var nn={},_e=an(nn),Ae=an(!1),kn=nn;function ir(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function Ti(){Y(Ae),Y(_e)}function dc(e,t,n){if(_e.current!==nn)throw Error(P(168));q(_e,t),q(Ae,n)}function Mf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,jg(e)||"Unknown",o));return re({},n,r)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,kn=_e.current,q(_e,e),q(Ae,Ae.current),!0}function fc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Mf(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,Y(Ae),Y(_e),q(_e,e)):Y(Ae),q(Ae,n)}var xt=null,ol=!1,Wl=!1;function Nf(e){xt===null?xt=[e]:xt.push(e)}function ih(e){ol=!0,Nf(e)}function un(){if(!Wl&&xt!==null){Wl=!0;var e=0,t=z;try{var n=xt;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,ol=!1}catch(o){throw xt!==null&&(xt=xt.slice(e+1)),uf(Du,un),o}finally{z=t,Wl=!1}}return null}var Vn=[],qn=0,Ii=null,Di=0,We=[],Ve=0,wn=null,Et=1,Ct="";function cn(e,t){Vn[qn++]=Di,Vn[qn++]=Ii,Ii=e,Di=t}function Ff(e,t,n){We[Ve++]=Et,We[Ve++]=Ct,We[Ve++]=wn,wn=e;var r=Et;e=Ct;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Et=1<<32-at(t)+o|n<<o|r,Ct=i+e}else Et=1<<i|n<<o|r,Ct=e}function ju(e){e.return!==null&&(cn(e,1),Ff(e,1,0))}function Bu(e){for(;e===Ii;)Ii=Vn[--qn],Vn[qn]=null,Di=Vn[--qn],Vn[qn]=null;for(;e===wn;)wn=We[--Ve],We[Ve]=null,Ct=We[--Ve],We[Ve]=null,Et=We[--Ve],We[Ve]=null}var He=null,Ke=null,J=!1,it=null;function Kf(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ke=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wn!==null?{id:Et,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ke=null,!0):!1;default:return!1}}function ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(J){var t=Ke;if(t){var n=t;if(!pc(e,t)){if(ja(e))throw Error(P(418));t=Yt(n.nextSibling);var r=He;t&&pc(e,t)?Kf(r,n):(e.flags=e.flags&-4097|2,J=!1,He=e)}}else{if(ja(e))throw Error(P(418));e.flags=e.flags&-4097|2,J=!1,He=e}}}function mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Bo(e){if(e!==He)return!1;if(!J)return mc(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fa(e.type,e.memoizedProps)),t&&(t=Ke)){if(ja(e))throw Hf(),Error(P(418));for(;t;)Kf(e,t),t=Yt(t.nextSibling)}if(mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=He?Yt(e.stateNode.nextSibling):null;return!0}function Hf(){for(var e=Ke;e;)e=Yt(e.nextSibling)}function lr(){Ke=He=null,J=!1}function Uu(e){it===null?it=[e]:it.push(e)}var lh=Rt.ReactCurrentBatchConfig;function rt(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ri=an(null),Ai=null,Qn=null,Wu=null;function Vu(){Wu=Qn=Ai=null}function qu(e){var t=Ri.current;Y(Ri),e._currentValue=t}function Ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){Ai=e,Wu=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Re=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(Wu!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if(Ai===null)throw Error(P(308));Qn=e,Ai.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var gn=null;function Qu(e){gn===null?gn=[e]:gn.push(e)}function zf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Qu(t)):(n.next=o.next,o.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zt=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Tt(e,n)}return o=r.interleaved,o===null?(t.next=t,Qu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Tt(e,n)}function ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}function gc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mi(e,t,n,r){var o=e.updateQueue;zt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?i=s:l.next=s,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=s:a.next=s,f.lastBaseUpdate=u))}if(i!==null){var d=o.baseState;l=0,f=s=u=null,a=i;do{var g=a.lane,v=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,h=a;switch(g=t,v=n,h.tag){case 1:if(k=h.payload,typeof k=="function"){d=k.call(v,d,g);break e}d=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=h.payload,g=typeof k=="function"?k.call(v,d,g):k,g==null)break e;d=re({},d,g);break e;case 2:zt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(s=f=v,u=d):f=f.next=v,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(f===null&&(u=d),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);En|=l,e.lanes=l,e.memoizedState=d}}function yc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Bf=new Hd.Component().refs;function Wa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),o=Jt(e),i=St(r,o);i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,o),t!==null&&(ut(t,e,o,r),ci(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),o=Jt(e),i=St(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,o),t!==null&&(ut(t,e,o,r),ci(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Jt(e),o=St(n,r);o.tag=2,t!=null&&(o.callback=t),t=Xt(e,o,r),t!==null&&(ut(t,e,r,n),ci(t,e,r))}};function hc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!oo(n,r)||!oo(o,i):!0}function Uf(e,t,n){var r=!1,o=nn,i=t.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(o=Me(t)?kn:_e.current,r=t.contextTypes,i=(r=r!=null)?ir(e,o):nn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function vc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function Va(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Bf,Gu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Xe(i):(i=Me(t)?kn:_e.current,o.context=ir(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Wa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&il.enqueueReplaceState(o,o.state,null),Mi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Bf&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Uo(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bc(e){var t=e._init;return t(e._payload)}function Wf(e){function t(p,m){if(e){var y=p.deletions;y===null?(p.deletions=[m],p.flags|=16):y.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function o(p,m){return p=en(p,m),p.index=0,p.sibling=null,p}function i(p,m,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<m?(p.flags|=2,m):y):(p.flags|=2,m)):(p.flags|=1048576,m)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,m,y,b){return m===null||m.tag!==6?(m=Zl(y,p.mode,b),m.return=p,m):(m=o(m,y),m.return=p,m)}function u(p,m,y,b){var x=y.type;return x===Hn?f(p,m,y.props.children,b,y.key):m!==null&&(m.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ht&&bc(x)===m.type)?(b=o(m,y.props),b.ref=Or(p,m,y),b.return=p,b):(b=yi(y.type,y.key,y.props,null,p.mode,b),b.ref=Or(p,m,y),b.return=p,b)}function s(p,m,y,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Jl(y,p.mode,b),m.return=p,m):(m=o(m,y.children||[]),m.return=p,m)}function f(p,m,y,b,x){return m===null||m.tag!==7?(m=vn(y,p.mode,b,x),m.return=p,m):(m=o(m,y),m.return=p,m)}function d(p,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Zl(""+m,p.mode,y),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Do:return y=yi(m.type,m.key,m.props,null,p.mode,y),y.ref=Or(p,null,m),y.return=p,y;case Kn:return m=Jl(m,p.mode,y),m.return=p,m;case Ht:var b=m._init;return d(p,b(m._payload),y)}if(Rr(m)||Cr(m))return m=vn(m,p.mode,y,null),m.return=p,m;Uo(p,m)}return null}function g(p,m,y,b){var x=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:a(p,m,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Do:return y.key===x?u(p,m,y,b):null;case Kn:return y.key===x?s(p,m,y,b):null;case Ht:return x=y._init,g(p,m,x(y._payload),b)}if(Rr(y)||Cr(y))return x!==null?null:f(p,m,y,b,null);Uo(p,y)}return null}function v(p,m,y,b,x){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(y)||null,a(m,p,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Do:return p=p.get(b.key===null?y:b.key)||null,u(m,p,b,x);case Kn:return p=p.get(b.key===null?y:b.key)||null,s(m,p,b,x);case Ht:var C=b._init;return v(p,m,y,C(b._payload),x)}if(Rr(b)||Cr(b))return p=p.get(y)||null,f(m,p,b,x,null);Uo(m,b)}return null}function k(p,m,y,b){for(var x=null,C=null,S=m,_=m=0,D=null;S!==null&&_<y.length;_++){S.index>_?(D=S,S=null):D=S.sibling;var A=g(p,S,y[_],b);if(A===null){S===null&&(S=D);break}e&&S&&A.alternate===null&&t(p,S),m=i(A,m,_),C===null?x=A:C.sibling=A,C=A,S=D}if(_===y.length)return n(p,S),J&&cn(p,_),x;if(S===null){for(;_<y.length;_++)S=d(p,y[_],b),S!==null&&(m=i(S,m,_),C===null?x=S:C.sibling=S,C=S);return J&&cn(p,_),x}for(S=r(p,S);_<y.length;_++)D=v(S,p,_,y[_],b),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?_:D.key),m=i(D,m,_),C===null?x=D:C.sibling=D,C=D);return e&&S.forEach(function(j){return t(p,j)}),J&&cn(p,_),x}function h(p,m,y,b){var x=Cr(y);if(typeof x!="function")throw Error(P(150));if(y=x.call(y),y==null)throw Error(P(151));for(var C=x=null,S=m,_=m=0,D=null,A=y.next();S!==null&&!A.done;_++,A=y.next()){S.index>_?(D=S,S=null):D=S.sibling;var j=g(p,S,A.value,b);if(j===null){S===null&&(S=D);break}e&&S&&j.alternate===null&&t(p,S),m=i(j,m,_),C===null?x=j:C.sibling=j,C=j,S=D}if(A.done)return n(p,S),J&&cn(p,_),x;if(S===null){for(;!A.done;_++,A=y.next())A=d(p,A.value,b),A!==null&&(m=i(A,m,_),C===null?x=A:C.sibling=A,C=A);return J&&cn(p,_),x}for(S=r(p,S);!A.done;_++,A=y.next())A=v(S,p,_,A.value,b),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?_:A.key),m=i(A,m,_),C===null?x=A:C.sibling=A,C=A);return e&&S.forEach(function(ee){return t(p,ee)}),J&&cn(p,_),x}function w(p,m,y,b){if(typeof y=="object"&&y!==null&&y.type===Hn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Do:e:{for(var x=y.key,C=m;C!==null;){if(C.key===x){if(x=y.type,x===Hn){if(C.tag===7){n(p,C.sibling),m=o(C,y.props.children),m.return=p,p=m;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ht&&bc(x)===C.type){n(p,C.sibling),m=o(C,y.props),m.ref=Or(p,C,y),m.return=p,p=m;break e}n(p,C);break}else t(p,C);C=C.sibling}y.type===Hn?(m=vn(y.props.children,p.mode,b,y.key),m.return=p,p=m):(b=yi(y.type,y.key,y.props,null,p.mode,b),b.ref=Or(p,m,y),b.return=p,p=b)}return l(p);case Kn:e:{for(C=y.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(p,m.sibling),m=o(m,y.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=Jl(y,p.mode,b),m.return=p,p=m}return l(p);case Ht:return C=y._init,w(p,m,C(y._payload),b)}if(Rr(y))return k(p,m,y,b);if(Cr(y))return h(p,m,y,b);Uo(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(p,m.sibling),m=o(m,y),m.return=p,p=m):(n(p,m),m=Zl(y,p.mode,b),m.return=p,p=m),l(p)):n(p,m)}return w}var ar=Wf(!0),Vf=Wf(!1),Co={},gt=an(Co),uo=an(Co),so=an(Co);function yn(e){if(e===Co)throw Error(P(174));return e}function Yu(e,t){switch(q(so,t),q(uo,e),q(gt,Co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ca(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ca(t,e)}Y(gt),q(gt,t)}function ur(){Y(gt),Y(uo),Y(so)}function qf(e){yn(so.current);var t=yn(gt.current),n=Ca(t,e.type);t!==n&&(q(uo,e),q(gt,n))}function Xu(e){uo.current===e&&(Y(gt),Y(uo))}var te=an(0);function Ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function Zu(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var di=Rt.ReactCurrentDispatcher,ql=Rt.ReactCurrentBatchConfig,xn=0,ne=null,de=null,pe=null,Fi=!1,jr=!1,co=0,ah=0;function ke(){throw Error(P(321))}function Ju(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function es(e,t,n,r,o,i){if(xn=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,di.current=e===null||e.memoizedState===null?dh:fh,e=n(r,o),jr){i=0;do{if(jr=!1,co=0,25<=i)throw Error(P(301));i+=1,pe=de=null,t.updateQueue=null,di.current=ph,e=n(r,o)}while(jr)}if(di.current=Ki,t=de!==null&&de.next!==null,xn=0,pe=de=ne=null,Fi=!1,t)throw Error(P(300));return e}function ts(){var e=co!==0;return co=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ne.memoizedState=pe=e:pe=pe.next=e,pe}function Ze(){if(de===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=pe===null?ne.memoizedState:pe.next;if(t!==null)pe=t,de=e;else{if(e===null)throw Error(P(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},pe===null?ne.memoizedState=pe=e:pe=pe.next=e}return pe}function fo(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Ze(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=de,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,s=i;do{var f=s.lane;if((xn&f)===f)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var d={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=d,l=r):u=u.next=d,ne.lanes|=f,En|=f}s=s.next}while(s!==null&&s!==i);u===null?l=r:u.next=a,st(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ne.lanes|=i,En|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=Ze(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);st(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Qf(){}function Gf(e,t){var n=ne,r=Ze(),o=t(),i=!st(r.memoizedState,o);if(i&&(r.memoizedState=o,Re=!0),r=r.queue,ns(Zf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,po(9,Xf.bind(null,n,r,o,t),void 0,null),ge===null)throw Error(P(349));(xn&30)!==0||Yf(n,t,o)}return o}function Yf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xf(e,t,n,r){t.value=n,t.getSnapshot=r,Jf(t)&&ep(e)}function Zf(e,t,n){return n(function(){Jf(t)&&ep(e)})}function Jf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function ep(e){var t=Tt(e,1);t!==null&&ut(t,e,1,-1)}function kc(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:e},t.queue=e,e=e.dispatch=ch.bind(null,ne,e),[t.memoizedState,e]}function po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tp(){return Ze().memoizedState}function fi(e,t,n,r){var o=ft();ne.flags|=e,o.memoizedState=po(1|t,n,void 0,r===void 0?null:r)}function ll(e,t,n,r){var o=Ze();r=r===void 0?null:r;var i=void 0;if(de!==null){var l=de.memoizedState;if(i=l.destroy,r!==null&&Ju(r,l.deps)){o.memoizedState=po(t,n,i,r);return}}ne.flags|=e,o.memoizedState=po(1|t,n,i,r)}function wc(e,t){return fi(8390656,8,e,t)}function ns(e,t){return ll(2048,8,e,t)}function np(e,t){return ll(4,2,e,t)}function rp(e,t){return ll(4,4,e,t)}function op(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ip(e,t,n){return n=n!=null?n.concat([e]):null,ll(4,4,op.bind(null,t,e),n)}function rs(){}function lp(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ju(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ap(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ju(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function up(e,t,n){return(xn&21)===0?(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n):(st(n,t)||(n=df(),ne.lanes|=n,En|=n,e.baseState=!0),t)}function uh(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{z=n,ql.transition=r}}function sp(){return Ze().memoizedState}function sh(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cp(e))dp(t,n);else if(n=zf(e,t,n,r),n!==null){var o=Te();ut(n,e,r,o),fp(n,t,r)}}function ch(e,t,n){var r=Jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cp(e))dp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,st(a,l)){var u=t.interleaved;u===null?(o.next=o,Qu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=zf(e,t,o,r),n!==null&&(o=Te(),ut(n,e,r,o),fp(n,t,r))}}function cp(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function dp(e,t){jr=Fi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fp(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}var Ki={readContext:Xe,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},dh={readContext:Xe,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:wc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fi(4194308,4,op.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return fi(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sh.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:kc,useDebugValue:rs,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=kc(!1),t=e[0];return e=uh.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,o=ft();if(J){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ge===null)throw Error(P(349));(xn&30)!==0||Yf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,wc(Zf.bind(null,r,i,e),[e]),r.flags|=2048,po(9,Xf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=ge.identifierPrefix;if(J){var n=Ct,r=Et;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=co++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ah++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fh={readContext:Xe,useCallback:lp,useContext:Xe,useEffect:ns,useImperativeHandle:ip,useInsertionEffect:np,useLayoutEffect:rp,useMemo:ap,useReducer:Ql,useRef:tp,useState:function(){return Ql(fo)},useDebugValue:rs,useDeferredValue:function(e){var t=Ze();return up(t,de.memoizedState,e)},useTransition:function(){var e=Ql(fo)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Qf,useSyncExternalStore:Gf,useId:sp,unstable_isNewReconciler:!1},ph={readContext:Xe,useCallback:lp,useContext:Xe,useEffect:ns,useImperativeHandle:ip,useInsertionEffect:np,useLayoutEffect:rp,useMemo:ap,useReducer:Gl,useRef:tp,useState:function(){return Gl(fo)},useDebugValue:rs,useDeferredValue:function(e){var t=Ze();return de===null?t.memoizedState=e:up(t,de.memoizedState,e)},useTransition:function(){var e=Gl(fo)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Qf,useSyncExternalStore:Gf,useId:sp,unstable_isNewReconciler:!1};function sr(e,t){try{var n="",r=t;do n+=zg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Yl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function qa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mh=typeof WeakMap=="function"?WeakMap:Map;function pp(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zi||(zi=!0,ru=r),qa(e,t)},n}function mp(e,t,n){n=St(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){qa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){qa(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function xc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=$h.bind(null,e,t,n),t.then(e,e))}function Ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var gh=Rt.ReactCurrentOwner,Re=!1;function $e(e,t,n,r){t.child=e===null?Vf(t,null,n,r):ar(t,e.child,n,r)}function _c(e,t,n,r,o){n=n.render;var i=t.ref;return tr(t,o),r=es(e,t,n,r,i,o),n=ts(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(J&&n&&ju(t),t.flags|=1,$e(e,t,r,o),t.child)}function Sc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ds(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,gp(e,t,i,r,o)):(e=yi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(l,r)&&e.ref===t.ref)return Lt(e,t,o)}return t.flags|=1,e=en(i,r),e.ref=t.ref,e.return=t,t.child=e}function gp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(oo(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Re=!0);else return t.lanes=e.lanes,Lt(e,t,o)}return Qa(e,t,n,r,o)}function yp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Yn,Fe),Fe|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Yn,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,q(Yn,Fe),Fe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,q(Yn,Fe),Fe|=r;return $e(e,t,o,n),t.child}function hp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qa(e,t,n,r,o){var i=Me(n)?kn:_e.current;return i=ir(t,i),tr(t,o),n=es(e,t,n,r,i,o),r=ts(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(J&&r&&ju(t),t.flags|=1,$e(e,t,n,o),t.child)}function Pc(e,t,n,r,o){if(Me(n)){var i=!0;Li(t)}else i=!1;if(tr(t,o),t.stateNode===null)pi(e,t),Uf(t,n,r),Va(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,s=n.contextType;typeof s=="object"&&s!==null?s=Xe(s):(s=Me(n)?kn:_e.current,s=ir(t,s));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&vc(t,l,r,s),zt=!1;var g=t.memoizedState;l.state=g,Mi(t,r,l,o),u=t.memoizedState,a!==r||g!==u||Ae.current||zt?(typeof f=="function"&&(Wa(t,n,f,r),u=t.memoizedState),(a=zt||hc(t,n,a,r,g,u,s))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,jf(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:rt(t.type,a),l.props=s,d=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xe(u):(u=Me(n)?kn:_e.current,u=ir(t,u));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||g!==u)&&vc(t,l,r,u),zt=!1,g=t.memoizedState,l.state=g,Mi(t,r,l,o);var k=t.memoizedState;a!==d||g!==k||Ae.current||zt?(typeof v=="function"&&(Wa(t,n,v,r),k=t.memoizedState),(s=zt||hc(t,n,s,r,g,k,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ga(e,t,n,r,i,o)}function Ga(e,t,n,r,o,i){hp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&fc(t,n,!1),Lt(e,t,i);r=t.stateNode,gh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ar(t,e.child,null,i),t.child=ar(t,null,a,i)):$e(e,t,a,i),t.memoizedState=r.state,o&&fc(t,n,!0),t.child}function vp(e){var t=e.stateNode;t.pendingContext?dc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dc(e,t.context,!1),Yu(e,t.containerInfo)}function $c(e,t,n,r,o){return lr(),Uu(o),t.flags|=256,$e(e,t,n,r),t.child}var Ya={dehydrated:null,treeContext:null,retryLane:0};function Xa(e){return{baseLanes:e,cachePool:null,transitions:null}}function bp(e,t,n){var r=t.pendingProps,o=te.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(te,o&1),e===null)return Ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=sl(l,r,0,null),e=vn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Xa(n),t.memoizedState=Ya,e):os(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return yh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=en(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=en(a,i):(i=vn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Xa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ya,r}return i=e.child,e=i.sibling,r=en(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function os(e,t){return t=sl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wo(e,t,n,r){return r!==null&&Uu(r),ar(t,e.child,null,n),e=os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Yl(Error(P(422))),Wo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=sl({mode:"visible",children:r.children},o,0,null),i=vn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&ar(t,e.child,null,l),t.child.memoizedState=Xa(l),t.memoizedState=Ya,i);if((t.mode&1)===0)return Wo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(P(419)),r=Yl(i,r,void 0),Wo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Re||a){if(r=ge,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Tt(e,o),ut(r,e,o,-1))}return cs(),r=Yl(Error(P(421))),Wo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Oh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ke=Yt(o.nextSibling),He=t,J=!0,it=null,e!==null&&(We[Ve++]=Et,We[Ve++]=Ct,We[Ve++]=wn,Et=e.id,Ct=e.overflow,wn=t),t=os(t,r.children),t.flags|=4096,t)}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ua(e.return,t,n)}function Xl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function kp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if($e(e,t,r.children,n),r=te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(te,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ni(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Xl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ni(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Xl(t,!0,n,null,i);break;case"together":Xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hh(e,t,n){switch(t.tag){case 3:vp(t),lr();break;case 5:qf(t);break;case 1:Me(t.type)&&Li(t);break;case 4:Yu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q(Ri,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(te,te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?bp(e,t,n):(q(te,te.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);q(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return kp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,yp(e,t,n)}return Lt(e,t,n)}var wp,Za,xp,Ep;wp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Za=function(){};xp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,yn(gt.current);var i=null;switch(n){case"input":o=ka(e,o),r=ka(e,r),i=[];break;case"select":o=re({},o,{value:void 0}),r=re({},r,{value:void 0}),i=[];break;case"textarea":o=Ea(e,o),r=Ea(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oi)}_a(n,r);var l;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var a=o[s];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xr.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var u=r[s];if(a=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Xr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&Q("scroll",e),i||a===u||(i=[])):(i=i||[]).push(s,u))}n&&(i=i||[]).push("style",n);var s=i;(t.updateQueue=s)&&(t.flags|=4)}};Ep=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tr(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vh(e,t,n){var r=t.pendingProps;switch(Bu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Me(t.type)&&Ti(),we(t),null;case 3:return r=t.stateNode,ur(),Y(Ae),Y(_e),Zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(lu(it),it=null))),Za(e,t),we(t),null;case 5:Xu(t);var o=yn(so.current);if(n=t.type,e!==null&&t.stateNode!=null)xp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return we(t),null}if(e=yn(gt.current),Bo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[ao]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Mr.length;o++)Q(Mr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Fs(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":Hs(r,i),Q("invalid",r)}_a(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&jo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&jo(r.textContent,a,e),o=["children",""+a]):Xr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":Ro(r),Ks(r,i,!0);break;case"textarea":Ro(r),zs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Oi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pt]=t,e[ao]=r,wp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Sa(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Mr.length;o++)Q(Mr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":Fs(e,r),o=ka(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=re({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Hs(e,r),o=Ea(e,r),Q("invalid",e);break;default:o=r}_a(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Zd(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Yd(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zr(e,u):typeof u=="number"&&Zr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Q("scroll",e):u!=null&&$u(e,i,u,l))}switch(n){case"input":Ro(e),Ks(e,r,!1);break;case"textarea":Ro(e),zs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Xn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Oi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)Ep(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=yn(so.current),yn(gt.current),Bo(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:jo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return we(t),null;case 13:if(Y(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Ke!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Hf(),lr(),t.flags|=98560,i=!1;else if(i=Bo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[pt]=t}else lr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else it!==null&&(lu(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(te.current&1)!==0?fe===0&&(fe=3):cs())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return ur(),Za(e,t),e===null&&io(t.stateNode.containerInfo),we(t),null;case 10:return qu(t.type._context),we(t),null;case 17:return Me(t.type)&&Ti(),we(t),null;case 19:if(Y(te),i=t.memoizedState,i===null)return we(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Tr(i,!1);else{if(fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Ni(e),l!==null){for(t.flags|=128,Tr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(te,te.current&1|2),t.child}e=e.sibling}i.tail!==null&&le()>cr&&(t.flags|=128,r=!0,Tr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ni(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!J)return we(t),null}else 2*le()-i.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,Tr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,n=te.current,q(te,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return ss(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Fe&1073741824)!==0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function bh(e,t){switch(Bu(t),t.tag){case 1:return Me(t.type)&&Ti(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),Y(Ae),Y(_e),Zu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Xu(t),null;case 13:if(Y(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(te),null;case 4:return ur(),null;case 10:return qu(t.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var Vo=!1,Ee=!1,kh=typeof WeakSet=="function"?WeakSet:Set,T=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Ja(e,t,n){try{n()}catch(r){oe(e,t,r)}}var Tc=!1;function wh(e,t){if(Ma=Si,e=Pf(),zu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,s=0,f=0,d=e,g=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(a=l+o),d!==i||r!==0&&d.nodeType!==3||(u=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)g=d,d=v;for(;;){if(d===e)break t;if(g===n&&++s===o&&(a=l),g===i&&++f===r&&(u=l),(v=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Na={focusedElem:e,selectionRange:n},Si=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var h=k.memoizedProps,w=k.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?h:rt(t.type,h),w);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(b){oe(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=Tc,Tc=!1,k}function Br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ja(t,n,i)}o=o.next}while(o!==r)}}function al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function eu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cp(e){var t=e.alternate;t!==null&&(e.alternate=null,Cp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[ao],delete t[Ha],delete t[rh],delete t[oh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _p(e){return e.tag===5||e.tag===3||e.tag===4}function Lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_p(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oi));else if(r!==4&&(e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}function nu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nu(e,t,n),e=e.sibling;e!==null;)nu(e,t,n),e=e.sibling}var ye=null,ot=!1;function Ft(e,t,n){for(n=n.child;n!==null;)Sp(e,t,n),n=n.sibling}function Sp(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Ji,n)}catch{}switch(n.tag){case 5:Ee||Gn(n,t);case 6:var r=ye,o=ot;ye=null,Ft(e,t,n),ye=r,ot=o,ye!==null&&(ot?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(ot?(e=ye,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),no(e)):Ul(ye,n.stateNode));break;case 4:r=ye,o=ot,ye=n.stateNode.containerInfo,ot=!0,Ft(e,t,n),ye=r,ot=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Ja(n,t,l),o=o.next}while(o!==r)}Ft(e,t,n);break;case 1:if(!Ee&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,t,a)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Ft(e,t,n),Ee=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function Ic(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kh),t.forEach(function(r){var o=Th.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,ot=!1;break e;case 3:ye=a.stateNode.containerInfo,ot=!0;break e;case 4:ye=a.stateNode.containerInfo,ot=!0;break e}a=a.return}if(ye===null)throw Error(P(160));Sp(i,l,o),ye=null,ot=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){oe(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pp(t,e),t=t.sibling}function Pp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),dt(e),r&4){try{Br(3,e,e.return),al(3,e)}catch(h){oe(e,e.return,h)}try{Br(5,e,e.return)}catch(h){oe(e,e.return,h)}}break;case 1:nt(t,e),dt(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(nt(t,e),dt(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var o=e.stateNode;try{Zr(o,"")}catch(h){oe(e,e.return,h)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&qd(o,i),Sa(a,l);var s=Sa(a,i);for(l=0;l<u.length;l+=2){var f=u[l],d=u[l+1];f==="style"?Zd(o,d):f==="dangerouslySetInnerHTML"?Yd(o,d):f==="children"?Zr(o,d):$u(o,f,d,s)}switch(a){case"input":wa(o,i);break;case"textarea":Qd(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Xn(o,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?Xn(o,!!i.multiple,i.defaultValue,!0):Xn(o,!!i.multiple,i.multiple?[]:"",!1))}o[ao]=i}catch(h){oe(e,e.return,h)}}break;case 6:if(nt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(h){oe(e,e.return,h)}}break;case 3:if(nt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(t.containerInfo)}catch(h){oe(e,e.return,h)}break;case 4:nt(t,e),dt(e);break;case 13:nt(t,e),dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(as=le())),r&4&&Ic(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(s=Ee)||f,nt(t,e),Ee=s):nt(t,e),dt(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&(e.mode&1)!==0)for(T=e,f=e.child;f!==null;){for(d=T=f;T!==null;){switch(g=T,v=g.child,g.tag){case 0:case 11:case 14:case 15:Br(4,g,g.return);break;case 1:Gn(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(h){oe(r,n,h)}}break;case 5:Gn(g,g.return);break;case 22:if(g.memoizedState!==null){Rc(d);continue}}v!==null?(v.return=g,T=v):Rc(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,s?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,u=d.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Xd("display",l))}catch(h){oe(e,e.return,h)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(h){oe(e,e.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:nt(t,e),dt(e),r&4&&Ic(e);break;case 21:break;default:nt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_p(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Zr(o,""),r.flags&=-33);var i=Lc(e);nu(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Lc(e);tu(e,a,l);break;default:throw Error(P(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xh(e,t,n){T=e,$p(e)}function $p(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Vo;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||Ee;a=Vo;var s=Ee;if(Vo=l,(Ee=u)&&!s)for(T=o;T!==null;)l=T,u=l.child,l.tag===22&&l.memoizedState!==null?Ac(o):u!==null?(u.return=l,T=u):Ac(o);for(;i!==null;)T=i,$p(i),i=i.sibling;T=o,Vo=a,Ee=s}Dc(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,T=i):Dc(e)}}function Dc(e){for(;T!==null;){var t=T;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ee||al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&yc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&no(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ee||t.flags&512&&eu(t)}catch(g){oe(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Rc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Ac(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{al(4,t)}catch(u){oe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){oe(t,o,u)}}var i=t.return;try{eu(t)}catch(u){oe(t,i,u)}break;case 5:var l=t.return;try{eu(t)}catch(u){oe(t,l,u)}}}catch(u){oe(t,t.return,u)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var Eh=Math.ceil,Hi=Rt.ReactCurrentDispatcher,is=Rt.ReactCurrentOwner,Ge=Rt.ReactCurrentBatchConfig,F=0,ge=null,ae=null,he=0,Fe=0,Yn=an(0),fe=0,mo=null,En=0,ul=0,ls=0,Ur=null,De=null,as=0,cr=1/0,wt=null,zi=!1,ru=null,Zt=null,qo=!1,Vt=null,ji=0,Wr=0,ou=null,mi=-1,gi=0;function Te(){return(F&6)!==0?le():mi!==-1?mi:mi=le()}function Jt(e){return(e.mode&1)===0?1:(F&2)!==0&&he!==0?he&-he:lh.transition!==null?(gi===0&&(gi=df()),gi):(e=z,e!==0||(e=window.event,e=e===void 0?16:vf(e.type)),e)}function ut(e,t,n,r){if(50<Wr)throw Wr=0,ou=null,Error(P(185));wo(e,n,r),((F&2)===0||e!==ge)&&(e===ge&&((F&2)===0&&(ul|=n),fe===4&&Bt(e,he)),Ne(e,r),n===1&&F===0&&(t.mode&1)===0&&(cr=le()+500,ol&&un()))}function Ne(e,t){var n=e.callbackNode;ly(e,t);var r=_i(e,e===ge?he:0);if(r===0)n!==null&&Us(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Us(n),t===1)e.tag===0?ih(Mc.bind(null,e)):Nf(Mc.bind(null,e)),th(function(){(F&6)===0&&un()}),n=null;else{switch(ff(r)){case 1:n=Du;break;case 4:n=sf;break;case 16:n=Ci;break;case 536870912:n=cf;break;default:n=Ci}n=Mp(n,Op.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Op(e,t){if(mi=-1,gi=0,(F&6)!==0)throw Error(P(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=_i(e,e===ge?he:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Bi(e,r);else{t=r;var o=F;F|=2;var i=Lp();(ge!==e||he!==t)&&(wt=null,cr=le()+500,hn(e,t));do try{Sh();break}catch(a){Tp(e,a)}while(1);Vu(),Hi.current=i,F=o,ae!==null?t=0:(ge=null,he=0,t=fe)}if(t!==0){if(t===2&&(o=La(e),o!==0&&(r=o,t=iu(e,o))),t===1)throw n=mo,hn(e,0),Bt(e,r),Ne(e,le()),n;if(t===6)Bt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Ch(o)&&(t=Bi(e,r),t===2&&(i=La(e),i!==0&&(r=i,t=iu(e,i))),t===1))throw n=mo,hn(e,0),Bt(e,r),Ne(e,le()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:dn(e,De,wt);break;case 3:if(Bt(e,r),(r&130023424)===r&&(t=as+500-le(),10<t)){if(_i(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ka(dn.bind(null,e,De,wt),t);break}dn(e,De,wt);break;case 4:if(Bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-at(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Eh(r/1960))-r,10<r){e.timeoutHandle=Ka(dn.bind(null,e,De,wt),r);break}dn(e,De,wt);break;case 5:dn(e,De,wt);break;default:throw Error(P(329))}}}return Ne(e,le()),e.callbackNode===n?Op.bind(null,e):null}function iu(e,t){var n=Ur;return e.current.memoizedState.isDehydrated&&(hn(e,t).flags|=256),e=Bi(e,t),e!==2&&(t=De,De=n,t!==null&&lu(t)),e}function lu(e){De===null?De=e:De.push.apply(De,e)}function Ch(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!st(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bt(e,t){for(t&=~ls,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function Mc(e){if((F&6)!==0)throw Error(P(327));nr();var t=_i(e,0);if((t&1)===0)return Ne(e,le()),null;var n=Bi(e,t);if(e.tag!==0&&n===2){var r=La(e);r!==0&&(t=r,n=iu(e,r))}if(n===1)throw n=mo,hn(e,0),Bt(e,t),Ne(e,le()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,De,wt),Ne(e,le()),null}function us(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(cr=le()+500,ol&&un())}}function Cn(e){Vt!==null&&Vt.tag===0&&(F&6)===0&&nr();var t=F;F|=1;var n=Ge.transition,r=z;try{if(Ge.transition=null,z=1,e)return e()}finally{z=r,Ge.transition=n,F=t,(F&6)===0&&un()}}function ss(){Fe=Yn.current,Y(Yn)}function hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,eh(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Bu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ti();break;case 3:ur(),Y(Ae),Y(_e),Zu();break;case 5:Xu(r);break;case 4:ur();break;case 13:Y(te);break;case 19:Y(te);break;case 10:qu(r.type._context);break;case 22:case 23:ss()}n=n.return}if(ge=e,ae=e=en(e.current,null),he=Fe=t,fe=0,mo=null,ls=ul=En=0,De=Ur=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}gn=null}return e}function Tp(e,t){do{var n=ae;try{if(Vu(),di.current=Ki,Fi){for(var r=ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Fi=!1}if(xn=0,pe=de=ne=null,jr=!1,co=0,is.current=null,n===null||n.return===null){fe=1,mo=t,ae=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=he,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,f=a,d=f.tag;if((f.mode&1)===0&&(d===0||d===11||d===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Ec(l);if(v!==null){v.flags&=-257,Cc(v,l,a,i,t),v.mode&1&&xc(i,s,t),t=v,u=s;var k=t.updateQueue;if(k===null){var h=new Set;h.add(u),t.updateQueue=h}else k.add(u);break e}else{if((t&1)===0){xc(i,s,t),cs();break e}u=Error(P(426))}}else if(J&&a.mode&1){var w=Ec(l);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),Cc(w,l,a,i,t),Uu(sr(u,a));break e}}i=u=sr(u,a),fe!==4&&(fe=2),Ur===null?Ur=[i]:Ur.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=pp(i,u,t);gc(i,p);break e;case 1:a=u;var m=i.type,y=i.stateNode;if((i.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Zt===null||!Zt.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=mp(i,a,t);gc(i,b);break e}}i=i.return}while(i!==null)}Dp(n)}catch(x){t=x,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(1)}function Lp(){var e=Hi.current;return Hi.current=Ki,e===null?Ki:e}function cs(){(fe===0||fe===3||fe===2)&&(fe=4),ge===null||(En&268435455)===0&&(ul&268435455)===0||Bt(ge,he)}function Bi(e,t){var n=F;F|=2;var r=Lp();(ge!==e||he!==t)&&(wt=null,hn(e,t));do try{_h();break}catch(o){Tp(e,o)}while(1);if(Vu(),F=n,Hi.current=r,ae!==null)throw Error(P(261));return ge=null,he=0,fe}function _h(){for(;ae!==null;)Ip(ae)}function Sh(){for(;ae!==null&&!Xg();)Ip(ae)}function Ip(e){var t=Ap(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?Dp(e):ae=t,is.current=null}function Dp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=vh(n,t,Fe),n!==null){ae=n;return}}else{if(n=bh(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ae=null;return}}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);fe===0&&(fe=5)}function dn(e,t,n){var r=z,o=Ge.transition;try{Ge.transition=null,z=1,Ph(e,t,n,r)}finally{Ge.transition=o,z=r}return null}function Ph(e,t,n,r){do nr();while(Vt!==null);if((F&6)!==0)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ay(e,i),e===ge&&(ae=ge=null,he=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||qo||(qo=!0,Mp(Ci,function(){return nr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Ge.transition,Ge.transition=null;var l=z;z=1;var a=F;F|=4,is.current=null,wh(e,n),Pp(n,e),qy(Na),Si=!!Ma,Na=Ma=null,e.current=n,xh(n),Zg(),F=a,z=l,Ge.transition=i}else e.current=n;if(qo&&(qo=!1,Vt=e,ji=o),i=e.pendingLanes,i===0&&(Zt=null),ty(n.stateNode),Ne(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(zi)throw zi=!1,e=ru,ru=null,e;return(ji&1)!==0&&e.tag!==0&&nr(),i=e.pendingLanes,(i&1)!==0?e===ou?Wr++:(Wr=0,ou=e):Wr=0,un(),null}function nr(){if(Vt!==null){var e=ff(ji),t=Ge.transition,n=z;try{if(Ge.transition=null,z=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,ji=0,(F&6)!==0)throw Error(P(331));var o=F;for(F|=4,T=e.current;T!==null;){var i=T,l=i.child;if((T.flags&16)!==0){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(T=s;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:Br(8,f,i)}var d=f.child;if(d!==null)d.return=f,T=d;else for(;T!==null;){f=T;var g=f.sibling,v=f.return;if(Cp(f),f===s){T=null;break}if(g!==null){g.return=v,T=g;break}T=v}}}var k=i.alternate;if(k!==null){var h=k.child;if(h!==null){k.child=null;do{var w=h.sibling;h.sibling=null,h=w}while(h!==null)}}T=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,T=l;else e:for(;T!==null;){if(i=T,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Br(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,T=p;break e}T=i.return}}var m=e.current;for(T=m;T!==null;){l=T;var y=l.child;if((l.subtreeFlags&2064)!==0&&y!==null)y.return=l,T=y;else e:for(l=m;T!==null;){if(a=T,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:al(9,a)}}catch(x){oe(a,a.return,x)}if(a===l){T=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,T=b;break e}T=a.return}}if(F=o,un(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Ji,e)}catch{}r=!0}return r}finally{z=n,Ge.transition=t}}return!1}function Nc(e,t,n){t=sr(n,t),t=pp(e,t,1),e=Xt(e,t,1),t=Te(),e!==null&&(wo(e,1,t),Ne(e,t))}function oe(e,t,n){if(e.tag===3)Nc(e,e,n);else for(;t!==null;){if(t.tag===3){Nc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=sr(n,e),e=mp(t,e,1),t=Xt(t,e,1),e=Te(),t!==null&&(wo(t,1,e),Ne(t,e));break}}t=t.return}}function $h(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(he&n)===n&&(fe===4||fe===3&&(he&130023424)===he&&500>le()-as?hn(e,0):ls|=n),Ne(e,t)}function Rp(e,t){t===0&&((e.mode&1)===0?t=1:(t=No,No<<=1,(No&130023424)===0&&(No=4194304)));var n=Te();e=Tt(e,t),e!==null&&(wo(e,t,n),Ne(e,n))}function Oh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rp(e,n)}function Th(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Rp(e,n)}var Ap;Ap=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Re=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Re=!1,hh(e,t,n);Re=(e.flags&131072)!==0}else Re=!1,J&&(t.flags&1048576)!==0&&Ff(t,Di,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pi(e,t),e=t.pendingProps;var o=ir(t,_e.current);tr(t,n),o=es(null,t,r,e,o,n);var i=ts();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,Li(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Gu(t),o.updater=il,t.stateNode=o,o._reactInternals=t,Va(t,r,e,n),t=Ga(null,t,r,!0,i,n)):(t.tag=0,J&&i&&ju(t),$e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ih(r),e=rt(r,e),o){case 0:t=Qa(null,t,r,e,n);break e;case 1:t=Pc(null,t,r,e,n);break e;case 11:t=_c(null,t,r,e,n);break e;case 14:t=Sc(null,t,r,rt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),Qa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),Pc(e,t,r,o,n);case 3:e:{if(vp(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,jf(e,t),Mi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=sr(Error(P(423)),t),t=$c(e,t,r,n,o);break e}else if(r!==o){o=sr(Error(P(424)),t),t=$c(e,t,r,n,o);break e}else for(Ke=Yt(t.stateNode.containerInfo.firstChild),He=t,J=!0,it=null,n=Vf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lr(),r===o){t=Lt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return qf(t),e===null&&Ba(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Fa(r,o)?l=null:i!==null&&Fa(r,i)&&(t.flags|=32),hp(e,t),$e(e,t,l,n),t.child;case 6:return e===null&&Ba(t),null;case 13:return bp(e,t,n);case 4:return Yu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ar(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),_c(e,t,r,o,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,q(Ri,r._currentValue),r._currentValue=l,i!==null)if(st(i.value,l)){if(i.children===o.children&&!Ae.current){t=Lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=St(-1,n&-n),u.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?u.next=u:(u.next=f.next,f.next=u),s.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ua(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ua(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}$e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,tr(t,n),o=Xe(o),r=r(o),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,o=rt(r,t.pendingProps),o=rt(r.type,o),Sc(e,t,r,o,n);case 15:return gp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),pi(e,t),t.tag=1,Me(r)?(e=!0,Li(t)):e=!1,tr(t,n),Uf(t,r,o),Va(t,r,o,n),Ga(null,t,r,!0,e,n);case 19:return kp(e,t,n);case 22:return yp(e,t,n)}throw Error(P(156,t.tag))};function Mp(e,t){return uf(e,t)}function Lh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new Lh(e,t,n,r)}function ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ih(e){if(typeof e=="function")return ds(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Tu)return 11;if(e===Lu)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ds(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Hn:return vn(n.children,o,i,t);case Ou:l=8,o|=8;break;case ya:return e=qe(12,n,t,o|2),e.elementType=ya,e.lanes=i,e;case ha:return e=qe(13,n,t,o),e.elementType=ha,e.lanes=i,e;case va:return e=qe(19,n,t,o),e.elementType=va,e.lanes=i,e;case Ud:return sl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jd:l=10;break e;case Bd:l=9;break e;case Tu:l=11;break e;case Lu:l=14;break e;case Ht:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=qe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function vn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function sl(e,t,n,r){return e=qe(22,e,r,t),e.elementType=Ud,e.lanes=n,e.stateNode={isHidden:!1},e}function Zl(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function fs(e,t,n,r,o,i,l,a,u){return e=new Dh(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(i),e}function Rh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Np(e){if(!e)return nn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Me(n))return Mf(e,n,t)}return t}function Fp(e,t,n,r,o,i,l,a,u){return e=fs(n,r,!0,e,o,i,l,a,u),e.context=Np(null),n=e.current,r=Te(),o=Jt(n),i=St(r,o),i.callback=t!=null?t:null,Xt(n,i,o),e.current.lanes=o,wo(e,o,r),Ne(e,r),e}function cl(e,t,n,r){var o=t.current,i=Te(),l=Jt(o);return n=Np(n),t.context===null?t.context=n:t.pendingContext=n,t=St(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(o,t,l),e!==null&&(ut(e,o,l,i),ci(e,o,l)),l}function Ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ps(e,t){Fc(e,t),(e=e.alternate)&&Fc(e,t)}function Ah(){return null}var Kp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ms(e){this._internalRoot=e}dl.prototype.render=ms.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));cl(e,t,null,null)};dl.prototype.unmount=ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){cl(null,e,null,null)}),t[Ot]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=gf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&hf(e)}};function gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kc(){}function Mh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var s=Ui(l);i.call(s)}}var l=Fp(t,r,e,0,null,!1,!1,"",Kc);return e._reactRootContainer=l,e[Ot]=l.current,io(e.nodeType===8?e.parentNode:e),Cn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var s=Ui(u);a.call(s)}}var u=fs(e,0,!1,null,null,!1,!1,"",Kc);return e._reactRootContainer=u,e[Ot]=u.current,io(e.nodeType===8?e.parentNode:e),Cn(function(){cl(t,u,n,r)}),u}function pl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=Ui(l);a.call(u)}}cl(t,l,e,o)}else l=Mh(n,t,e,o,r);return Ui(l)}pf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(Ru(t,n|1),Ne(t,le()),(F&6)===0&&(cr=le()+500,un()))}break;case 13:Cn(function(){var r=Tt(e,1);if(r!==null){var o=Te();ut(r,e,1,o)}}),ps(e,1)}};Au=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=Te();ut(t,e,134217728,n)}ps(e,134217728)}};mf=function(e){if(e.tag===13){var t=Jt(e),n=Tt(e,t);if(n!==null){var r=Te();ut(n,e,t,r)}ps(e,t)}};gf=function(){return z};yf=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};$a=function(e,t,n){switch(t){case"input":if(wa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=rl(r);if(!o)throw Error(P(90));Vd(r),wa(r,o)}}}break;case"textarea":Qd(e,n);break;case"select":t=n.value,t!=null&&Xn(e,!!n.multiple,t,!1)}};tf=us;nf=Cn;var Nh={usingClientEntryPoint:!1,Events:[Eo,Un,rl,Jd,ef,us]},Lr={findFiberByHostInstance:mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fh={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lf(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||Ah,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Ji=Qo.inject(Fh),mt=Qo}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nh;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gs(t))throw Error(P(200));return Rh(e,t,null,n)};Be.createRoot=function(e,t){if(!gs(e))throw Error(P(299));var n=!1,r="",o=Kp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=fs(e,1,!1,null,null,n,!1,r,o),e[Ot]=t.current,io(e.nodeType===8?e.parentNode:e),new ms(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=lf(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return Cn(e)};Be.hydrate=function(e,t,n){if(!fl(t))throw Error(P(200));return pl(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!gs(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Kp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Fp(t,null,e,1,n!=null?n:null,o,!1,i,l),e[Ot]=t.current,io(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new dl(t)};Be.render=function(e,t,n){if(!fl(t))throw Error(P(200));return pl(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!fl(e))throw Error(P(40));return e._reactRootContainer?(Cn(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Be.unstable_batchedUpdates=us;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return pl(e,t,n,!1,r)};Be.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Be})(_n);const Kh=Td(_n.exports);var Hp,Hc=_n.exports;Hp=Hc.createRoot,Hc.hydrateRoot;var zp={exports:{}},G={exports:{}},Hh="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zh=Hh,jh=zh;function jp(){}function Bp(){}Bp.resetWarningCache=jp;var Bh=function(){function e(r,o,i,l,a,u){if(u!==jh){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Bp,resetWarningCache:jp};return n.PropTypes=n,n};G.exports=Bh();function hi(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hi=function(t){return typeof t}:hi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hi(e)}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e,t,n){return t&&zc(e.prototype,t),n&&zc(e,n),e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wi(){return Wi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wi.apply(this,arguments)}function Je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){me(e,o,n[o])})}return e}function ht(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&go(e,t)}function ue(e){return ue=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ue(e)}function go(e,t){return go=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},go(e,t)}function Uh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function vi(e,t,n){return Uh()?vi=Reflect.construct:vi=function(o,i,l){var a=[null];a.push.apply(a,i);var u=Function.bind.apply(o,a),s=new u;return l&&go(s,l.prototype),s},vi.apply(null,arguments)}function Wh(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function au(e){var t=typeof Map=="function"?new Map:void 0;return au=function(r){if(r===null||!Wh(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,o)}function o(){return vi(r,arguments,ue(this).constructor)}return o.prototype=Object.create(r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),go(o,r)},au(e)}function Vh(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function _o(e,t){if(e==null)return{};var n=Vh(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function ce(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vt(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:ce(e)}function qh(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=ue(e),e!==null););return e}function _t(e,t,n){return typeof Reflect<"u"&&Reflect.get?_t=Reflect.get:_t=function(o,i,l){var a=qh(o,i);if(!!a){var u=Object.getOwnPropertyDescriptor(a,i);return u.get?u.get.call(l):u.value}},_t(e,t,n||e)}function Pe(e){return Qh(e)||Gh(e)||Yh()}function Qh(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Gh(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function Yh(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function dr(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null;return e.reduce(function(n,r){return n[r]=t||{value:r},n},{})}var Up={logLevel:"warn",defaultKeyEvent:"keydown",defaultComponent:"div",defaultTabIndex:"-1",ignoreTags:["input","select","textarea"],enableHardSequences:!1,ignoreKeymapAndHandlerChangesByDefault:!0,ignoreEventsCondition:function(t){var n=t.target;if(n&&n.tagName){var r=n.tagName.toLowerCase();return U.option("_ignoreTagsDict")[r]||n.isContentEditable}return!1},ignoreRepeatedEventsWhenKeyHeldDown:!0,simulateMissingKeyPressEvents:!0,stopEventPropagationAfterHandling:!0,stopEventPropagationAfterIgnoring:!0,allowCombinationSubmatches:!1,customKeyCodes:{}},Vr=Je({},Up);Vr._ignoreTagsDict=dr(Vr.ignoreTags,!0);var U=function(){function e(){V(this,e)}return W(e,null,[{key:"init",value:function(n){var r=this,o=n.ignoreTags,i=n.customKeyCodes;o&&(n._ignoreTagsDict=dr(n.ignoreTags)),i&&(n._customKeyNamesDict=dr(Object.values(n.customKeyCodes))),["verbose","debug","info"].indexOf(n.logLevel)!==-1&&console.warn("React HotKeys: You have requested log level '".concat(n.logLevel,"' but for performance reasons, logging below severity level 'warning' is disabled in production. Please use the development build for complete logs.")),Object.keys(n).forEach(function(l){r.set(l,n[l])})}},{key:"set",value:function(n,r){Vr[n]=r}},{key:"reset",value:function(n){Vr[n]=Up[n]}},{key:"option",value:function(n){return Vr[n]}}]),e}(),lt=function(){function e(){var t=this,n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"warn";if(V(this,e),me(this,"verbose",this.noop),me(this,"debug",this.noop),me(this,"info",this.noop),me(this,"warn",this.noop),me(this,"error",this.noop),this.logLevel=this.constructor.levels[n],this.logLevel>=this.constructor.levels.error)this.error=console.error;else return;if(this.logLevel>=this.constructor.levels.warn)this.warn=console.warn;else return;["info","debug","verbose"].some(function(r){return!(t.logLevel>=t.constructor.levels[r])||(t[r]=console.log,!1)})}return W(e,[{key:"noop",value:function(){}}]),e}();me(lt,"logIcons",["\u{1F4D5}","\u{1F4D7}","\u{1F4D8}","\u{1F4D9}"]),me(lt,"componentIcons",["\u{1F53A}","\u2B50\uFE0F","\u{1F537}","\u{1F536}","\u2B1B\uFE0F"]),me(lt,"eventIcons",["\u2764\uFE0F","\u{1F49A}","\u{1F499}","\u{1F49B}","\u{1F49C}","\u{1F9E1}"]),me(lt,"levels",{none:0,error:1,warn:2,info:3,debug:4,verbose:5});var M={keydown:0,keypress:1,keyup:2},ea={Shift:["shiftKey"],Meta:["metaKey"],Control:["ctrlKey"],Alt:["altKey"]},Wp={"`":["~"],1:["!"],2:["@",'"'],3:["#","\xA3"],4:["$"],5:["%"],6:["^"],7:["&"],8:["*"],9:["("],0:[")"],"-":["_"],"=":["plus"],";":[":"],"'":['"',"@"],",":["<"],".":[">"],"/":["?"],"\\":["|"],"[":["{"],"]":["}"],"#":["~"]};function ys(e){return Wp[e]||[e.length===1?e.toUpperCase():e]}function Qe(e,t){return e.hasOwnProperty(t)}function ml(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(n,r){var o=e[r];return o.forEach(function(i){Qe(n,i)||(n[i]=[]),n[i].push(r)}),t.includeOriginal&&(!Qe(n,r)&&(n[r]=[]),n[r]=[].concat(Pe(n[r]),Pe(o))),n},{})}var Xh=ml(Wp);function gl(e){return Xh[e]||[e.length===1?e.toLowerCase():e]}var Zh={},Vp=ml(Zh,{includeOriginal:!0});function qp(e){return typeof e=="string"}function Jh(e){return qp(e)?e.trim().replace(/\s+/g," "):e}var ev={tab:"Tab",capslock:"CapsLock",shift:"Shift",meta:"Meta",alt:"Alt",ctrl:"Control",space:" ",spacebar:" ",escape:"Escape",esc:"Escape",left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown",return:"Enter",del:"Delete",command:"Meta",option:"Alt",enter:"Enter",backspace:"Backspace",ins:"Insert",pageup:"PageUp",pagedown:"PageDown",end:"End",home:"Home",contextmenu:"ContextMenu",numlock:"Clear"},tv={cmd:"Meta"};function Qp(e){var t=e.toLowerCase();return ev[t]||tv[t]||(e.match(/^f\d+$/)?e.toUpperCase():e)}var Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nv=dr(Object.values(Gp),!0);function Yp(e){return!!nv[e]}function rv(e){return U.option("_customKeyNamesDict")[e]}function Xp(e){return Yp(e)||String.fromCharCode(e.charCodeAt(0))===e||rv(e)}var Zp=function(e){function t(){var n,r;V(this,t);for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=vt(this,(n=ue(t)).call.apply(n,[this].concat(i))),me(ce(ce(r)),"name","InvalidKeyNameError"),r}return ht(t,e),t}(au(Error));function jc(e){return e.sort().join("+")}var Jp=function(){function e(){V(this,e)}return W(e,null,[{key:"parse",value:function(n){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=Jh(n),i=o.split(" ");try{var l=i.slice(0,i.length-1),a=i[i.length-1],u=l.map(function(g){var v=Bc(g,r);return jc(Object.keys(v))}).join(" "),s=Bc(a,r),f=jc(Object.keys(s)),d={id:f,keyDictionary:s,keyEventType:r.keyEventType,size:Object.keys(s).length};return{sequence:{prefix:u,size:l.length+1},combination:d}}catch{return{sequence:null,combination:null}}}}]),e}();function Bc(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return e.replace(/^\+|(\s|[^+]\+)\+/,"$1plus").split("+").reduce(function(n,r){var o=Qp(r);if(t.ensureValidKeys&&!Xp(o))throw new Zp;return n[o]=!0,n},{})}var em={"`":["`"],1:["\xA1"],2:["\u2122"],3:["\xA3"],4:["\xA2"],5:["\u221E"],6:["\xA7"],7:["\xB6"],8:["\u2022"],9:["\xAA"],0:["\xBA"],"-":["\u2013"],"=":["\u2260"],a:["\xE5"],b:["\u222B"],c:["\xE7"],d:["\u2202"],e:["\xB4"],f:["\u0192"],g:["\xA9"],h:["\u02D9"],i:["\u02C6"],j:["\u2206"],k:["\u02DA"],l:["\xAC"],m:["\xB5"],n:["\u02DC"],o:["\xF8"],p:["\u03C0"],q:["\u0153"],r:["\xAE"],s:["\xDF"],t:["\u2020"],u:["\xA8"],v:["\u221A"],w:["\u2211"],x:["\u2248"],y:["\xA5"],z:["\u03A9"],"[":["\u201C"],"]":["\u2018"],"\\":["\xAB"],"'":["\xE6"],";":["\u2026"],",":["\u2264"],".":["\u2265"],"/":["\xF7"]},ov=ml(em);function hs(e){return ov[e]||[e]}function vs(e){return em[e]||[e]}var tm={"`":["`"],1:["\u2044"],2:["\u20AC"],3:["\u2039"],4:["\u203A"],5:["\uFB01"],6:["\uFB02"],7:["\u2021"],8:["\xB0"],9:["\xB7"],0:["\u201A"],"-":["\u2014"],"=":["\xB1"],a:["\xC5"],b:["\u0131"],c:["\xC7"],d:["\xCE"],e:["\xB4"],f:["\xCF"],g:["\u02DD"],h:["\xD3"],i:["\u02C6"],j:["\xD4"],k:["\uF8FF"],l:["\xD2"],m:["\xC2"],n:["\u02DC"],o:["\xD8"],p:["\u03C0"],q:["\u0152"],r:["\u2030"],s:["\xCD"],t:["\xCE"],u:["\xA8"],v:["\u25CA"],w:["\u201E"],x:["\u02DB"],y:["\xC1"],z:["\xB8"],"[":["\u201D"],"]":["\u2019"],"\\":["\xBB"],"'":["\xC6"],";":["\xDA"],",":["\xAF"],".":["\u02D8"]},iv=ml(tm);function bs(e){return iv[e]||gl(e)}function ks(e){return tm[e]||[e]}var yl=function(){function e(){V(this,e)}return W(e,null,[{key:"serialize",value:function(n){var r=n.Shift,o=n.Alt,i={},l=Object.keys(n).sort();return l.forEach(function(a){var u=[];if(r)if(o){var s=bs(a),f=ks(a);u=[].concat(Pe(u),[a],Pe(s),Pe(f))}else{var d=gl(a),g=ys(a);u=[].concat(Pe(u),[a],Pe(d),Pe(g))}else if(o){var v=hs(a),k=vs(a);u=[].concat(Pe(u),[a],Pe(v),Pe(k))}else{u.push(a);var h=Vp[a];h&&(u=[].concat(Pe(u),Pe(h)))}var w=Object.keys(i);0<w.length?w.forEach(function(p){u.forEach(function(m){i[p+"+".concat(m)]=Je({},i[p],me({},m,!0))}),delete i[p]}):u.forEach(function(p){i[p]=me({},p,!0)})}),Object.values(i).map(function(a){return Object.keys(a).sort().join("+")})}},{key:"isValidKeySerialization",value:function(n){return 0<n.length&&!!Jp.parse(n,{ensureValidKeys:!0}).combination}}]),e}(),Uc={previous:0,current:1};function lv(e){return Vp[e]||[e]}function av(e){if(e.Shift)return e.Alt?[ks,bs]:[ys,gl];if(e.Alt)return[vs,hs];var t=function(n){return[n]};return[t,t]}function Ye(e){return typeof e>"u"}var Pt={unseen:0,seen:1,simulated:2},Ut=function(){function e(){V(this,e)}return W(e,null,[{key:"newRecord",value:function(n,r){var o=[Pt.unseen,Pt.unseen,Pt.unseen];if(!Ye(n))for(var i=0;i<=n;i++)o[i]=r;return o}},{key:"setBit",value:function(n,r,o){return n[r]=o,n}},{key:"clone",value:function(n){for(var r=this.newRecord(),o=0;o<n.length;o++)r[o]=n[o];return r}}]),e}();function rn(e){return!Array.isArray(e)&&hi(e)==="object"&&e!==null}function qr(e){return rn(e)?Object.keys(e).length===0:!e||e.length===0}function nm(e){return rn(e)?Object.keys(e).length:e.length}var bi=function(){function e(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};V(this,e),this._keys=t,this._includesKeyUp=!1,this._update()}return W(e,[{key:"getIds",value:function(){return this._ids}},{key:"getKeyAliases",value:function(){return this._keyAliases}},{key:"getNormalizedKeyName",value:function(n){var r=this._keys[n];if(r)return n;var o=this._keyAliases[n];return o||n}},{key:"getNumberOfKeys",value:function(){return nm(this._keys)}},{key:"any",value:function(){return 0<Object.keys(this._getKeyStates()).length}},{key:"isEnding",value:function(){return this._includesKeyUp}},{key:"hasEnded",value:function(){return qr(this.keysStillPressedDict())}},{key:"addKey",value:function(n,r){this._setKeyState(n,[Ut.newRecord(),Ut.newRecord(M.keydown,r)])}},{key:"setKeyState",value:function(n,r,o){var i=this._getKeyState(n);if(this.isKeyIncluded(n)){var l=Ut.clone(i[1]),a=Ut.clone(l);Ut.setBit(a,r,o),this._setKeyState(n,[l,a])}else this.addKey(n,o);r===M.keyup&&(this._includesKeyUp=!0)}},{key:"forEachKey",value:function(n){return Object.keys(this._keys).forEach(n)}},{key:"some",value:function(n){return Object.keys(this._keys).some(n)}},{key:"getKeyDictionary",value:function(){return dr(Object.keys(this._getKeyStates()),!0)}},{key:"keysStillPressedDict",value:function(){var n=this;return Object.keys(this._keys).reduce(function(r,o){return n.isKeyStillPressed(o)&&(r[o]=n._getKeyState(o)),r},{})}},{key:"isKeyIncluded",value:function(n){return!!this._getKeyState(n)}},{key:"isKeyStillPressed",value:function(n){return this.isEventTriggered(n,M.keypress)&&!this.isKeyReleased(n)}},{key:"isKeyReleased",value:function(n){return this.isEventTriggered(n,M.keyup)}},{key:"isEventTriggered",value:function(n,r){return this._getKeyStateType(n,Uc.current,r)}},{key:"wasEventPreviouslyTriggered",value:function(n,r){return this._getKeyStateType(n,Uc.previous,r)}},{key:"isKeyPressSimulated",value:function(n){return this._isKeyEventSimulated(n,M.keypress)}},{key:"isKeyUpSimulated",value:function(n){return this._isKeyEventSimulated(n,M.keyup)}},{key:"describe",value:function(){return this.getIds()[0]}},{key:"toJSON",value:function(){return{keys:this._getKeyStates(),ids:this.getIds(),keyAliases:this.getKeyAliases()}}},{key:"_getKeyStateType",value:function(n,r,o){var i=this._getKeyState(n);return i&&i[r][o]}},{key:"_update",value:function(){this._ids=yl.serialize(this._keys),this._keyAliases=uv(this._keys)}},{key:"_isKeyEventSimulated",value:function(n,r){return this.isEventTriggered(n,r)===Pt.simulated}},{key:"_getKeyStates",value:function(){return this._keys}},{key:"_getKeyState",value:function(n){var r=this._keys[n];if(r)return r;var o=this._keyAliases[n];if(o)return this._keys[o]}},{key:"_setKeyState",value:function(n,r){var o=this.getNormalizedKeyName(n);this._keys[o]=r,this._update()}}]),e}();function uv(e){return Object.keys(e).reduce(function(t,n){return lv(n).forEach(function(r){av(e).forEach(function(o){o(r).forEach(function(i){(i!==n||n!==r)&&(t[i]=n)})})}),t},{})}var Wc=function(){function e(t){var n=t.maxLength,r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null;V(this,e),this._records=[],this._maxLength=n,r?this._push(r):this._push(new bi)}return W(e,[{key:"getMostRecentCombinations",value:function(n){return this._records.slice(-n,-1)}},{key:"any",value:function(){return this._records.some(function(n){return n.any()})}},{key:"getLength",value:function(){return this._records.length}},{key:"getCurrentCombination",value:function(){return this._records[this.getLength()-1]}},{key:"addKeyToCurrentCombination",value:function(n,r,o){this._ensureInitialKeyCombination(),this.getCurrentCombination().setKeyState(n,r,o)}},{key:"setMaxLength",value:function(n){this._maxLength=n,this._trimHistory()}},{key:"startNewKeyCombination",value:function(n,r){this._ensureInitialKeyCombination();var o=new bi(this.getCurrentCombination().keysStillPressedDict());o.addKey(n,r),this._push(o)}},{key:"toJSON",value:function(){return this._records.map(function(n){return n.toJSON()})}},{key:"_ensureInitialKeyCombination",value:function(){this.getLength()===0&&this._push(new bi)}},{key:"_push",value:function(n){this._trimHistory(),this._records.push(n)}},{key:"_trimHistory",value:function(){for(;this.getLength()>this._maxLength;)this._shift()}},{key:"_shift",value:function(){this._records.shift()}}]),e}(),sv=function(){function e(){V(this,e),this._registry={}}return W(e,[{key:"get",value:function(n){return this._registry[n]}},{key:"set",value:function(n,r){this._registry[n]=r}},{key:"remove",value:function(n){delete this._registry[n]}},{key:"toJSON",value:function(){return this._registry}}]),e}();function yo(e){return Array.isArray(e)?e:e?[e]:[]}function cv(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},r=dr(yo(t));return Array.isArray(e)?e.reduce(function(o,i){return r[i]&&(n.stringifyFirst||r[i].value===i)||o.push(i),o},[]):rn(e)?Object.keys(e).reduce(function(o,i){return r[i]||(o[i]=e[i]),o},{}):e}var dv=function(e){function t(){return V(this,t),vt(this,ue(t).apply(this,arguments))}return ht(t,e),W(t,[{key:"add",value:function(r,o){_t(ue(t.prototype),"set",this).call(this,r,{childIds:[],parentId:null,keyMap:o})}},{key:"update",value:function(r,o){var i=_t(ue(t.prototype),"get",this).call(this,r);_t(ue(t.prototype),"set",this).call(this,r,Je({},i,{keyMap:o}))}},{key:"setParent",value:function(r,o){this.get(r).parentId=o,this._addChildId(o,r)}},{key:"remove",value:function(r){var o=this._getParentId(r);this._removeChildId(o,r),_t(ue(t.prototype),"remove",this).call(this,r)}},{key:"_getParentId",value:function(r){var o=this.get(r);return o&&o.parentId}},{key:"_addChildId",value:function(r,o){this.get(r).childIds.push(o)}},{key:"_removeChildId",value:function(r,o){var i=this.get(r);i&&(i.childIds=cv(i.childIds,o))}}]),t}(sv);function fv(e,t){return[].concat(Pe(e.slice(0,t)),Pe(e.slice(t+1)))}var pv=function(){function e(t){V(this,e),this._list=t,this._position=-1}return W(e,[{key:"getPosition",value:function(){return this._position}},{key:"getComponent",value:function(){return this._list.getAtPosition(this.getPosition())}},{key:"next",value:function(){return this.getPosition()+1<this._list.getLength()?(this._position++,this.getComponent()):null}}]),e}(),mv=function(){function e(){V(this,e),this._list=[],this._idToIndex={},this._longestSequence=1,this._longestSequenceComponentId=null,this._keyMapEventRecord=Ut.newRecord()}return W(e,[{key:"getNewIterator",value:function(){return new pv(this)}},{key:"add",value:function(n,r,o,i){if(this.containsId(n))return this.update(n,r,o,i);var l=this._build(n,r,o,i);this._list.push(l);var a=this._getLastIndex();return this._idToIndex[n]=a}},{key:"containsId",value:function(n){return!!this.get(n)}},{key:"get",value:function(n){return this.getAtPosition(this.getIndexById(n))}},{key:"getIndexById",value:function(n){return this._idToIndex[n]}},{key:"update",value:function(n,r,o,i){var l=this._isUpdatingComponentWithLongestSequence(n),a=this.getLongestSequence(),u=this._build(n,r,o,i);l&&u.sequenceLength!==a&&(u.sequenceLength>a?this._longestSequence=u.sequenceLength:this._recalculateLongestSequence()),this._list[this.getIndexById(n)]=u}},{key:"remove",value:function(n){var r=this._isUpdatingComponentWithLongestSequence(n);this.removeAtPosition(this.getIndexById(n)),r&&this._recalculateLongestSequence()}},{key:"any",value:function(){return this.getLength()!==0}},{key:"isRoot",value:function(n){return this.getIndexById(n)>=this.getLength()-1}},{key:"getLongestSequence",value:function(){return this._longestSequence}},{key:"anyActionsForEventType",value:function(n){return!!this._keyMapEventRecord[n]}},{key:"getLength",value:function(){return this._list.length}},{key:"getAtPosition",value:function(n){return this._list[n]}},{key:"removeAtPosition",value:function(n){this._list=fv(this._list,n);for(var r=n;r<this.getLength();)this._idToIndex[this.getAtPosition(r).componentId]=r,r++}},{key:"toJSON",value:function(){return this._list}},{key:"_getLastIndex",value:function(){return this.getLength()-1}},{key:"_build",value:function(n,r,o,i){var l=this._applyHardSequences(r,o),a=l.keyMap,u=l.handlers,s=this._buildActionDictionary(Je({},r,a),i,n);return{actions:s,handlers:u,componentId:n,options:i}}},{key:"_isUpdatingComponentWithLongestSequence",value:function(n){return n===this._getLongestSequenceComponentId()}},{key:"_getLongestSequenceComponentId",value:function(){return this._longestSequenceComponentId}},{key:"_recalculateLongestSequence",value:function(){for(var n=this.getNewIterator();n.next();){var r=n.getComponent(),o=r.longestSequence,i=r.componentId;o>this.getLongestSequence()&&(this._longestSequenceComponentId=i,this._longestSequence=o)}}},{key:"_applyHardSequences",value:function(n,r){return U.option("enableHardSequences")?Object.keys(r).reduce(function(o,i){var l=!!n[i];return!l&&yl.isValidKeySerialization(i)&&(o.keyMap[i]=i),o.handlers[i]=r[i],o},{keyMap:{},handlers:{}}):{keyMap:n,handlers:r}}},{key:"_buildActionDictionary",value:function(n,r,o){var i=this;return Object.keys(n).reduce(function(l,a){var u=n[a],s=function(){return rn(u)&&Qe(u,"sequences")?yo(u.sequences):yo(u)}();return s.forEach(function(f){var d=gv(f,r),g=d.keySequence,v=d.keyEventType;i._addActionOptions(l,o,a,g,v)}),l},{})}},{key:"_addActionOptions",value:function(n,r,o,i,l){var a=Jp.parse(i,{keyEventType:l}),u=a.sequence,s=a.combination;u.size>this.getLongestSequence()&&(this._longestSequence=u.size,this._longestSequenceComponentId=r),this._keyMapEventRecord[l]=Pt.seen,n[o]||(n[o]=[]),n[o].push(Je({prefix:u.prefix,actionName:o,sequenceLength:u.size},s))}}]),e}();function gv(e,t){if(rn(e)){var n=e.sequence,r=e.action;return{keySequence:n,keyEventType:Ye(r)?M[t.defaultKeyEvent]:M[r]}}return{keySequence:e,keyEventType:M[t.defaultKeyEvent]}}function Vc(e,t){return e[e.length-(t+1)]}for(var rm={Enter:!0,Backspace:!0,ArrowRight:!0,ArrowLeft:!0,ArrowUp:!0,ArrowDown:!0,CapsLock:!0},ta=1;13>ta;ta++)rm["F".concat(ta)]=!0;function om(e){return e.length===1||Qe(rm,e)}var yv=function(){function e(){V(this,e),this._actionConfigs={},this._order=null}return W(e,[{key:"addMatch",value:function(n,r){if(this._includesMatcherForCombination(n.id)){var o=n.keyEventType,i=n.actionName,l=n.id;this._addHandlerToActionConfig(l,{keyEventType:o,actionName:i,handler:r})}else this._addNewActionConfig(n,r)}},{key:"findMatch",value:function(n,r,o){this._order||this._setOrder();var i=!0,l=!1,a=void 0;try{for(var u,s=this._order[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var f=u.value,d=this._actionConfigs[f];if(this._matchesActionConfig(n,r,o,d))return d}}catch(g){l=!0,a=g}finally{try{i||s.return==null||s.return()}finally{if(l)throw a}}return null}},{key:"toJSON",value:function(){return{actionConfigs:this._actionConfigs,order:this._order}}},{key:"_matchesActionConfig",value:function(n,r,o,i){if(!hv(n,i))return!1;var l=i.events[o];if(!l)return!1;var a=!1,u=Object.keys(i.keyDictionary).every(function(s){return!!n.isEventTriggered(s,o)&&(r&&r===n.getNormalizedKeyName(s)&&(a=!n.wasEventPreviouslyTriggered(s,o)),!0)});return u&&a}},{key:"_setOrder",value:function(){var n=Object.values(this._actionConfigs).reduce(function(r,o){var i=o.id,l=o.size;return r[l]||(r[l]=[]),r[l].push(i),r},{});this._order=Object.keys(n).sort(function(r,o){return o-r}).reduce(function(r,o){return r.concat(n[o])},[])}},{key:"_addNewActionConfig",value:function(n,r){var o=n.prefix,i=n.sequenceLength,l=n.id,a=n.keyDictionary,u=n.size,s=n.keyEventType,f=n.actionName;this._setCombinationMatcher(l,{prefix:o,sequenceLength:i,id:l,keyDictionary:a,size:u,events:{}}),this._addHandlerToActionConfig(l,{keyEventType:s,actionName:f,handler:r})}},{key:"_addHandlerToActionConfig",value:function(n,r){var o=r.keyEventType,i=r.actionName,l=r.handler,a=this._getCombinationMatcher(n);this._setCombinationMatcher(n,Je({},a,{events:Je({},a.events,me({},o,{actionName:i,handler:l}))}))}},{key:"_setCombinationMatcher",value:function(n,r){this._actionConfigs[n]=r}},{key:"_getCombinationMatcher",value:function(n){return this._actionConfigs[n]}},{key:"_includesMatcherForCombination",value:function(n){return!!this._getCombinationMatcher(n)}}]),e}();function hv(e,t){var n=nm(t.keyDictionary);return U.option("allowCombinationSubmatches")||vv(e)?e.getNumberOfKeys()>=n:e.getNumberOfKeys()===n}function vv(e){return!!e.isKeyStillPressed("Meta")&&e.some(function(t){return om(t)})}var bv=function(){function e(){V(this,e),this._combinationMatchers={},this._eventRecord=Ut.newRecord()}return W(e,[{key:"addMatch",value:function(n,r){var o=this._getOrCreateCombinationMatcher(n.prefix);o.addMatch(n,r),Ut.setBit(this._eventRecord,n.keyEventType,Pt.seen),(!this._longestSequence||this._longestSequence<n.sequenceLength)&&(this._longestSequence=n.sequenceLength)}},{key:"findMatch",value:function(n,r,o){var i=this._findCombinationMatcher(n);return i?i.findMatch(n.getCurrentCombination(),n.getCurrentCombination().getNormalizedKeyName(r),o):null}},{key:"hasMatchesForEventType",value:function(n){return!!this._eventRecord[n]}},{key:"getLongestSequence",value:function(){return this._longestSequence}},{key:"toJSON",value:function(){var n=this;return Object.keys(this._combinationMatchers).reduce(function(r,o){var i=n._combinationMatchers[o];return r[o]=i.toJSON(),r},{})}},{key:"_getOrCreateCombinationMatcher",value:function(n){return this._combinationMatchers[n]||(this._combinationMatchers[n]=new yv),this._combinationMatchers[n]}},{key:"_findCombinationMatcher",value:function(n){var r=n.getMostRecentCombinations(this.getLongestSequence());if(r.length===0)return this._combinationMatchers[""];for(var o=r.map(function(k){return k.getIds()}),i=o.map(function(k){return k.length}),l=Array(o.length).fill(0),a=!1;!a;){var u=l.map(function(k,h){return o[h][k]}),s=u.join(" ");if(this._combinationMatchers[s])return this._combinationMatchers[s];for(var f=0,d=!0;d&&f<l.length;){var g=Vc(l,f),v=(g+1)%(Vc(i,f)||1);l[l.length-(f+1)]=v,d=v==0,d&&f++}a=f===l.length}}}]),e}(),kv=function(){function e(t){V(this,e),this._keyMapMatchers=[],this._unmatchedHandlerStatus=[],this._handlersDictionary={},this._keySequencesDictionary={};for(var n=t.getNewIterator();n.next();){var r=n.getComponent(),o=r.handlers;this._unmatchedHandlerStatus.push([Object.keys(o).length,{}]),this._keyMapMatchers.push(new bv)}this._componentList=t,this._componentListIterator=t.getNewIterator()}return W(e,[{key:"getKeyHistoryMatcher",value:function(n){if(this._componentHasUnmatchedHandlers(n))for(;this._componentListIterator.next();)this._addHandlersFromComponent(),this._addActionsFromComponent();return this._getKeyHistoryMatcher(n)}},{key:"componentHasActionsBoundToEventType",value:function(n,r){return this.getKeyHistoryMatcher(n).hasMatchesForEventType(r)}},{key:"findMatchingKeySequenceInComponent",value:function(n,r,o,i){return this.componentHasActionsBoundToEventType(n,i)?this.getKeyHistoryMatcher(n).findMatch(r,o,i):null}},{key:"_getKeyHistoryMatcher",value:function(n){return this._keyMapMatchers[n]}},{key:"_addActionsFromComponent",value:function(){var n=this,r=this._componentListIterator.getComponent(),o=r.actions;Object.keys(o).forEach(function(i){var l=n._getHandlers(i);if(l){var a=l[0],u=n._componentList.getAtPosition(a).handlers[i],s=n._getKeyHistoryMatcher(a),f=o[i];f.forEach(function(d){var g=[d.prefix,d.id].join(" ");n._isClosestHandlerFound(g,d)||(s.addMatch(d,u),n._addKeySequence(g,[a,d.keyEventType]))}),l.forEach(function(d){var g=n._getUnmatchedHandlerStatus(d);g[1][i]||(g[1][i]=!0,g[0]--)})}})}},{key:"_getHandlers",value:function(n){return this._handlersDictionary[n]}},{key:"_addHandlersFromComponent",value:function(){var n=this,r=this._componentListIterator.getComponent(),o=r.handlers;Object.keys(o).forEach(function(i){n._addHandler(i)})}},{key:"_addHandler",value:function(n){this._handlersDictionary[n]||(this._handlersDictionary[n]=[]),this._handlersDictionary[n].push(this._componentListIterator.getPosition())}},{key:"_addKeySequence",value:function(n,r){this._keySequencesDictionary[n]||(this._keySequencesDictionary[n]=[]),this._keySequencesDictionary[n].push(r)}},{key:"_componentHasUnmatchedHandlers",value:function(n){return 0<this._getUnmatchedHandlerStatus(n)[0]}},{key:"_getUnmatchedHandlerStatus",value:function(n){return this._unmatchedHandlerStatus[n]}},{key:"_isClosestHandlerFound",value:function(n,r){return this._keySequencesDictionary[n]&&this._keySequencesDictionary[n].some(function(o){return o[1]===r.keyEventType})}}]),e}();function Go(e,t,n){return n.forEach(function(r){Qe(e,r)&&(t[r]=e[r])}),t}function qc(e){switch(parseInt(e,10)){case 0:return"keydown";case 1:return"keypress";default:return"keyup"}}function wv(e){return!Yp(e)}function bn(e){return e.simulated?Pt.simulated:Pt.seen}var Qc=["sequence","action"],Gc=["name","description","group"],im=function(){function e(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},n=1<arguments.length?arguments[1]:void 0;V(this,e),this.logger=t.logger||new lt("warn"),this.componentId=-1,this.keyEventManager=n,this._componentTree=new dv,this.rootComponentId=null,this._reset(),this.resetKeyHistory()}return W(e,[{key:"_reset",value:function(){this.componentList=new mv,this._initHandlerResolutionState()}},{key:"_newKeyHistory",value:function(){return new Wc({maxLength:this.componentList.getLongestSequence()})}},{key:"getKeyHistory",value:function(){return this._keyHistory?this._keyHistory:(this._keyHistory=this._newKeyHistory(),this._keyHistory)}},{key:"_initHandlerResolutionState",value:function(){this._actionResolver=null}},{key:"resetKeyHistory",value:function(){var n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.keypressEventsToSimulate=[],this.keyupEventsToSimulate=[],this._keyHistory=this.getKeyHistory().any()&&!n.force?new Wc({maxLength:this.componentList.getLongestSequence()},new bi(this.getCurrentCombination().keysStillPressedDict())):this._newKeyHistory()}},{key:"getApplicationKeyMap",value:function(){return this.rootComponentId===null?{}:this._buildApplicationKeyMap([this.rootComponentId],{})}},{key:"_buildApplicationKeyMap",value:function(n,r){var o=this;return n.forEach(function(i){var l=o._componentTree.get(i),a=l.childIds,u=l.keyMap;u&&Object.keys(u).forEach(function(s){var f=u[s];r[s]={},rn(f)?Qe(f,"sequences")?(Go(f,r[s],Gc),r[s].sequences=o._createSequenceFromConfig(f.sequences)):(Go(f,r[s],Gc),r[s].sequences=[Go(f,{},Qc)]):r[s].sequences=o._createSequenceFromConfig(f)}),o._buildApplicationKeyMap(a,r)}),r}},{key:"_createSequenceFromConfig",value:function(n){return yo(n).map(function(r){return rn(r)?Go(r,{},Qc):{sequence:r}})}},{key:"registerKeyMap",value:function(n){return this.componentId+=1,this._componentTree.add(this.componentId,n),this.componentId}},{key:"reregisterKeyMap",value:function(n,r){this._componentTree.update(n,r)}},{key:"registerComponentMount",value:function(n,r){Ye(r)?this.rootComponentId=n:this._componentTree.setParent(n,r)}},{key:"deregisterKeyMap",value:function(n){this._componentTree.remove(n),n===this.rootComponentId&&(this.rootComponentId=null)}},{key:"_addComponent",value:function(n){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},i=3<arguments.length?arguments[3]:void 0;this.componentList.add(n,r,o,i),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence())}},{key:"_allKeysAreReleased",value:function(){return this.getCurrentCombination().hasEnded()}},{key:"getCurrentCombination",value:function(){return this.getKeyHistory().getCurrentCombination()}},{key:"_shouldSimulate",value:function(n,r){var o=wv(r),i=this.getCurrentCombination();return n===M.keypress?!o||o&&i.isKeyStillPressed("Meta"):n===M.keyup&&om(r)&&i.isKeyReleased("Meta")}},{key:"_cloneAndMergeEvent",value:function(n,r){var o=Object.keys(ea).reduce(function(i,l){return i[l]=n[l],i},{});return Je({},o,r)}},{key:"_callClosestMatchingHandler",value:function(n,r,o,i,l){for(this._actionResolver||(this._actionResolver=new kv(this.componentList));l<=i;){this._actionResolver.getKeyHistoryMatcher(l);var a=this._actionResolver.findMatchingKeySequenceInComponent(l,this.getKeyHistory(),r,o);if(this.getCurrentCombination(),a){var u=a.events[o];return U.option("allowCombinationSubmatches")&&yl.serialize(a.keyDictionary),u.handler(n),this._stopEventPropagationAfterHandlingIfEnabled(n,l),!0}this._actionResolver.componentHasActionsBoundToEventType(l,o),l++}}},{key:"_stopEventPropagationAfterHandlingIfEnabled",value:function(n,r){return!!U.option("stopEventPropagationAfterHandling")&&(this._stopEventPropagation(n,r),!0)}},{key:"_stopEventPropagation",value:function(){throw new Error("_stopEventPropagation must be overridden by a subclass")}},{key:"_checkForModifierFlagDiscrepancies",value:function(n,r,o){var i=this;Object.keys(ea).forEach(function(l){if(r!==l||o!==M.keyup){var a=i.getCurrentCombination(),u=a.isKeyStillPressed(l);ea[l].forEach(function(s){n[s]===!1&&u&&a.setKeyState(l,M.keyup,bn(n))})}})}},{key:"_logPrefix",value:function(){}}]),e}(),ho=function(){function e(){V(this,e)}return W(e,null,[{key:"getId",value:function(){return Ye(this._id)&&(this._id=0),this._id}},{key:"incrementId",value:function(){this._id=this.getId()+1}}]),e}();function xv(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}var Ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"};function Cv(e){if(e.key){var t=Ev[e.key]||e.key;if(t!=="Unidentified")return t}if(e.type==="keypress"){var n=xv(e);return n===13?"Enter":String.fromCharCode(n)}return e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""}function rr(e){var t=function(){var n=U.option("customKeyCodes"),r=e.keyCode||e.charCode;return Qe(n,r)?n[r]:e.nativeEvent?e.key:Cv(e)}();return t==="+"?"plus":t}function Vi(e){return e==="Meta"}var X={unseen:0,ignored:1,seen:2,recorded:3,handled:4},_v=function(){function e(t,n){var r=n.logger,o=n.logPrefix;V(this,e),this._componentList=t,this._previousPropagation=null,this.logger=r,this._logPrefix=o,this._reset()}return W(e,[{key:"_reset",value:function(){this._previousPosition=-1,this._position=-1,this._actionHandled=!1,this._ignoreEvent=!1,this._observeIgnoredEvents=!1,this._stopping=!1,this._componentId=null,this._key=null,this._type=null}},{key:"isFirstPropagationStep",value:function(){var n=this.getPreviousPosition();return n===-1||n>=this._position}},{key:"isForKey",value:function(n){return this._key===n}},{key:"isForEventType",value:function(n){return this._type===n}},{key:"startNewPropagationStep",value:function(n,r,o,i){return this._position=this._componentList.getIndexById(n),this._componentId=n,this.isFirstPropagationStep()&&(ho.incrementId(),this._key=r.key,this._type=i),!(r.repeat&&U.option("ignoreRepeatedEventsWhenKeyHeldDown"))||(this.ignoreEvent(r),!1)}},{key:"finishPropagationStep",value:function(){this.isStopped()||this._componentList.isRoot(this._componentId)?(this._previousPropagation=this._clone(),this._reset()):this._previousPosition=this._position}},{key:"getPreviousPropagation",value:function(){return this._previousPropagation||(this._previousPropagation=this._clone({copyState:!1})),this._previousPropagation}},{key:"getPreviousPosition",value:function(){return this._previousPosition}},{key:"observeIgnoredEvents",value:function(){this._observeIgnoredEvents=!0}},{key:"ignoreEvent",value:function(n){return this.setIgnoreEvent(!0),!!(this.isIgnoringEvent()&&U.option("stopEventPropagationAfterIgnoring"))&&(this.stop(n),this.finishPropagationStep(),!0)}},{key:"setIgnoreEvent",value:function(n){this._ignoreEvent=n}},{key:"isIgnoringEvent",value:function(){return!this._observeIgnoredEvents&&this._ignoreEvent}},{key:"isStopped",value:function(){return this._stopping}},{key:"stop",value:function(n){return!this.isStopped()&&(this._stopping=!0,n.simulated||n.stopPropagation(),!0)}},{key:"isPendingPropagation",value:function(){var n=this.getPreviousPosition();return n!==-1&&n+1<this._position}},{key:"isHandled",value:function(){return this._actionHandled}},{key:"setHandled",value:function(){this._actionHandled=!0}},{key:"_clone",value:function(){var n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},r=n.copyState,o=new e(this._componentList,{logger:this.logger,logPrefix:this._logPrefix});return(r===void 0||r)&&Object.assign(o,this),o}}]),e}(),Sv=function(e){function t(){var n,r=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},o=1<arguments.length?arguments[1]:void 0;return V(this,t),n=vt(this,ue(t).call(this,r,o)),n.focusTreeId=0,n}return ht(t,e),W(t,[{key:"_reset",value:function(){_t(ue(t.prototype),"_reset",this).call(this),this.keypressEventsToSimulate=[],this.focusTreeId+=1,this.eventPropagator=new _v(this.componentList,{logger:this.logger,logPrefix:this._logPrefix.bind(this)})}},{key:"enableHotKeys",value:function(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},l=3<arguments.length?arguments[3]:void 0;if(this.resetOnNextFocus&&(this._reset(),this.resetOnNextFocus=!1),!this.componentList.containsId(r))return this._addComponent(r,o,i,l),this.focusTreeId}},{key:"updateEnabledHotKeys",value:function(r,o){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},a=4<arguments.length?arguments[4]:void 0;r===this.focusTreeId&&this.componentList.containsId(o)&&(this.componentList.update(o,i,l,a),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()),this._initHandlerResolutionState())}},{key:"disableHotKeys",value:function(r,o){this.resetOnNextFocus||(this.resetOnNextFocus=!0);var i=this.eventPropagator.isPendingPropagation();return i}},{key:"handleKeydown",value:function(r,o,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},a=rr(r);if(o!==this.focusTreeId)return this.eventPropagator.ignoreEvent(r),!0;var u=this.eventPropagator.startNewPropagationStep(i,r,a,M.keydown);if(u){var s=this._howToHandleKeyEvent(r,o,i,a,l,M.keydown);if(s===X.handled){var f=bn(r),d=this.getCurrentCombination();d.isKeyIncluded(a)||d.isEnding()?this._startAndLogNewKeyCombination(a,o,i,f):this._addToAndLogCurrentKeyCombination(a,M.keydown,o,i,f),this._callHandlerIfActionNotHandled(r,a,M.keydown,i,o)}return this._simulateKeyPressForNonPrintableKeys(r,a,o,i,l),this.eventPropagator.finishPropagationStep(),!1}}},{key:"_howToHandleKeyEvent",value:function(r,o,i,l,a,u){if(this.eventPropagator.isFirstPropagationStep()){if(a.ignoreEventsCondition(r)&&this.eventPropagator.ignoreEvent(r))return this._eventIsToBeIgnored(r,i,l,u);this._checkForModifierFlagDiscrepancies(r,l,u)}else if(this.eventPropagator.isIgnoringEvent())return this._eventIsToBeIgnored(r,i,l,u);return X.handled}},{key:"_eventIsToBeIgnored",value:function(r,o,i,l){return X.ignored}},{key:"handleKeyPress",value:function(r,o,i,l){var a=rr(r),u=this.getCurrentCombination();if(u.isKeyPressSimulated(a))return this.eventPropagator.ignoreEvent(r),!0;var s=this.eventPropagator.startNewPropagationStep(i,r,a,M.keypress);if(s){var f=o!==this.focusTreeId,d=this._howToHandleKeyEvent(r,o,i,a,l,M.keypress);return this.eventPropagator.isFirstPropagationStep(i)&&u.isKeyIncluded(a)&&this._addToAndLogCurrentKeyCombination(a,M.keypress,o,i,bn(r)),d===X.handled&&this._callHandlerIfActionNotHandled(r,a,M.keypress,i,o),this.eventPropagator.finishPropagationStep(),f}}},{key:"handleKeyUp",value:function(r,o,i,l){var a=rr(r),u=this.getCurrentCombination();if(u.isKeyUpSimulated(a))return this.eventPropagator.ignoreEvent(r),!0;var s=this.eventPropagator.startNewPropagationStep(i,r,a,M.keyup);if(s){var f=o!==this.focusTreeId,d=this._howToHandleKeyEvent(r,o,i,a,l,M.keyup);return this.eventPropagator.isFirstPropagationStep(i)&&u.isKeyIncluded(a)&&this._addToAndLogCurrentKeyCombination(a,M.keyup,o,i,bn(r)),d===X.handled&&this._callHandlerIfActionNotHandled(r,a,M.keyup,i,o),this._simulateKeyUpEventsHiddenByCmd(r,a,o,i,l),this.eventPropagator.finishPropagationStep(),f}}},{key:"closeHangingKeyCombination",value:function(r,o){var i=this.getCurrentCombination();i.isKeyIncluded(r)&&!i.isEventTriggered(r,o)&&i.setKeyState(r,o,Pt.simulated)}},{key:"_simulateKeyPressForNonPrintableKeys",value:function(r,o,i,l,a){this._handleEventSimulation("keypressEventsToSimulate","simulatePendingKeyPressEvents",this._shouldSimulate(M.keypress,o),{event:r,key:o,focusTreeId:i,componentId:l,options:a})}},{key:"_simulateKeyUpEventsHiddenByCmd",value:function(r,o,i,l,a){var u=this;Vi(o)&&this.getCurrentCombination().forEachKey(function(s){Vi(s)||u._handleEventSimulation("keyupEventsToSimulate","simulatePendingKeyUpEvents",u._shouldSimulate(M.keyup,s),{event:r,key:s,focusTreeId:i,componentId:l,options:a})})}},{key:"_stopEventPropagation",value:function(r,o){this.eventPropagator.stop(r)}},{key:"getEventPropagator",value:function(){return this.eventPropagator}},{key:"_startAndLogNewKeyCombination",value:function(r,o,i,l){this.getKeyHistory().startNewKeyCombination(r,l)}},{key:"_addToAndLogCurrentKeyCombination",value:function(r,o,i,l,a){this.getKeyHistory().addKeyToCurrentCombination(r,o,a)}},{key:"_handleEventSimulation",value:function(r,o,i,l){var a=l.event,u=l.key,s=l.focusTreeId,f=l.componentId,d=l.options;if(i&&U.option("simulateMissingKeyPressEvents")){var g=this._cloneAndMergeEvent(a,{key:u,simulated:!0});this[r].push({event:g,focusTreeId:s,componentId:f,options:d})}(this.componentList.isRoot(f)||this.eventPropagator.isStopped())&&!this.keyEventManager.isGlobalListenersBound()&&this[o]()}},{key:"simulatePendingKeyPressEvents",value:function(){this._simulatePendingKeyEvents("keypressEventsToSimulate","handleKeyPress")}},{key:"simulatePendingKeyUpEvents",value:function(){this._simulatePendingKeyEvents("keyupEventsToSimulate","handleKeyUp")}},{key:"_simulatePendingKeyEvents",value:function(r,o){var i=this;0<this[r].length&&ho.incrementId(),this[r].forEach(function(l){var a=l.event,u=l.focusTreeId,s=l.componentId,f=l.options;i[o](a,u,s,f)}),this[r]=[]}},{key:"_callHandlerIfActionNotHandled",value:function(r,o,i,l,a){if(this.getCurrentCombination().describe(),!!this.componentList.anyActionsForEventType(i)&&!this.eventPropagator.isHandled()){var u=this.eventPropagator.getPreviousPosition(),s=this.componentList.getIndexById(l),f=this._callClosestMatchingHandler(r,o,i,s,u===-1?0:u);f&&this.eventPropagator.setHandled()}}},{key:"_logPrefix",value:function(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},i=lt.logIcons,l=lt.eventIcons,a=lt.componentIcons,u="HotKeys (";if(o.focusTreeId!==!1){var s=Ye(o.focusTreeId)?this.focusTreeId:o.focusTreeId;u+="F".concat(s).concat(i[s%i.length],"-")}if(o.eventId!==!1){var f=Ye(o.eventId)?ho.getId():o.eventId;u+="E".concat(f).concat(l[f%l.length],"-")}u+="C".concat(r).concat(a[r%a.length]);var d=this.componentList.getIndexById(r);return Ye(d)||(u+="-P".concat(d).concat(a[d%a.length],":")),"".concat(u,")")}}]),t}(im);function Yo(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};return Array.isArray(e)||qp(e)?n.stringifyFirst?!Ye(e.find(function(r){return r.toString()===t.toString()})):e.indexOf(t)!==-1:rn(e)?Qe(e,t):n.stringifyFirst?e.toString()===t.toString():e===t}function Yc(e){return e.replace(/\b\w/g,function(t){return t.toUpperCase()})}function Pv(e){return"".concat(Yc(e.slice(0,3))).concat(Yc(e.slice(3)))}var $v=function(e){function t(){var n,r=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},o=1<arguments.length?arguments[1]:void 0;return V(this,t),n=vt(this,ue(t).call(this,r,o)),n.listenersBound=!1,n.eventOptions={ignoreEventsCondition:U.option("ignoreEventsCondition")},n.listeners={},n}return ht(t,e),W(t,[{key:"enableHotKeys",value:function(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},l=3<arguments.length?arguments[3]:void 0,a=4<arguments.length?arguments[4]:void 0;this.eventOptions=a,this._addComponent(r,o,i,l),this._updateDocumentHandlers(),this._initHandlerResolutionState()}},{key:"updateEnabledHotKeys",value:function(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},l=3<arguments.length?arguments[3]:void 0,a=4<arguments.length?arguments[4]:void 0;this.eventOptions=a,this.componentList.update(r,o,i,l),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()),this._updateDocumentHandlers(),this._initHandlerResolutionState()}},{key:"disableHotKeys",value:function(r){this.componentList.remove(r),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()),this._updateDocumentHandlers(),this._initHandlerResolutionState()}},{key:"_updateDocumentHandlers",value:function(){var r=this,o=this._listenersShouldBeBound();!this.listenersBound&&o?(Object.values(M).forEach(function(i){var l=qc(i);document["on".concat(l)]=function(a){r.keyEventManager["handleGlobal".concat(Pv(l))](a)}}),this.listenersBound=!0):this.listenersBound&&!o&&(Object.values(M).forEach(function(i){var l=qc(i);delete document["on".concat(l)]}),this.listenersBound=!1)}},{key:"_listenersShouldBeBound",value:function(){return this.componentList.any()||this.listeners.keyCombination}},{key:"handleKeydown",value:function(r){var o=rr(r);if(r.repeat&&U.option("ignoreRepeatedEventsWhenKeyHeldDown"))return!0;this._checkForModifierFlagDiscrepancies(r,o,M.keydown);var i=this._howReactAppRespondedTo(r,o,M.keydown);if(!(i===X.unseen&&this.eventOptions.ignoreEventsCondition(r))){if(i!==X.ignored){var l=bn(r),a=this.getCurrentCombination();a.isKeyIncluded(o)||a.isEnding()?this._startAndLogNewKeyCombination(o,l):this._addToAndLogCurrentKeyCombination(o,M.keydown,l)}Yo([X.ignored,X.handled],i)||this._callHandlerIfExists(r,o,M.keydown),this._simulateKeyPressForNonPrintableKeys(r,o)}}},{key:"_howReactAppRespondedTo",value:function(r,o,i){var l=this.keyEventManager.reactAppHistoryWithEvent(o,i);return l===X.handled||l===X.ignored||l===X.seen||ho.incrementId(),l}},{key:"handleKeyPress",value:function(r){var o=rr(r);if(r.repeat&&U.option("ignoreRepeatedEventsWhenKeyHeldDown"))return!0;var i=this.getCurrentCombination();if(i.isKeyPressSimulated(o))return!0;var l=this._howReactAppRespondedTo(r,o,M.keypress);return i.isKeyIncluded(o)&&this._addToAndLogCurrentKeyCombination(o,M.keypress,bn(r)),l===X.unseen&&(this.keyEventManager.closeHangingKeyCombination(o,M.keypress),this.eventOptions.ignoreEventsCondition(r))?void 0:void(!Yo([X.ignored,X.handled],l)&&this._callHandlerIfExists(r,o,M.keypress))}},{key:"handleKeyUp",value:function(r){var o=rr(r),i=this.getCurrentCombination();if(i.isKeyUpSimulated(o))return!0;var l=this._howReactAppRespondedTo(r,o,M.keyup);i.isKeyIncluded(o)&&this._addToAndLogCurrentKeyCombination(o,M.keyup,bn(r)),l===X.unseen?(this.keyEventManager.closeHangingKeyCombination(o,M.keyup),this.eventOptions.ignoreEventsCondition(r)||!Yo([X.ignored,X.handled],l)&&this._callHandlerIfExists(r,o,M.keyup)):!Yo([X.ignored,X.handled],l)&&this._callHandlerIfExists(r,o,M.keyup),this._simulateKeyUpEventsHiddenByCmd(r,o),this.listeners.keyCombination&&this._allKeysAreReleased()&&this.listeners.keyCombination({keys:i.getKeyDictionary(),id:i.describe()})}},{key:"_simulateKeyPressForNonPrintableKeys",value:function(r,o){this.keyEventManager.simulatePendingKeyPressEvents(),this._handleEventSimulation("handleKeyPress",this._shouldSimulate(M.keypress,o),{event:r,key:o})}},{key:"_simulateKeyUpEventsHiddenByCmd",value:function(r,o){var i=this;Vi(o)&&(this.keyEventManager.simulatePendingKeyUpEvents(),this.getCurrentCombination().forEachKey(function(l){Vi(l)||i._handleEventSimulation("handleKeyUp",i._shouldSimulate(M.keyup,l),{event:r,key:l})}))}},{key:"_startAndLogNewKeyCombination",value:function(r,o){this.getKeyHistory().startNewKeyCombination(r,o)}},{key:"_addToAndLogCurrentKeyCombination",value:function(r,o,i){this.getKeyHistory().addKeyToCurrentCombination(r,o,i)}},{key:"_handleEventSimulation",value:function(r,o,i){var l=i.event,a=i.key;if(o&&U.option("simulateMissingKeyPressEvents")){var u=this._cloneAndMergeEvent(l,{key:a,simulated:!0});this[r](u)}}},{key:"_callHandlerIfExists",value:function(r,o,i){return this.getCurrentCombination().describe(),this.componentList.anyActionsForEventType(i)?void this._callClosestMatchingHandler(r,o,i):void 0}},{key:"_callClosestMatchingHandler",value:function(r,o,i){for(var l,a=this.componentList.getNewIterator();a.next();)if(l=_t(ue(t.prototype),"_callClosestMatchingHandler",this).call(this,r,o,i,a.getPosition(),0),l)return}},{key:"_stopEventPropagation",value:function(r,o){r.simulated||r.stopPropagation()}},{key:"addKeyCombinationListener",value:function(r){var o=this,i=function(){delete o.listeners.keyCombination};return this.listeners.keyCombination=function(l){r(l),i()},this._updateDocumentHandlers(),i}},{key:"_logPrefix",value:function(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},i=lt.eventIcons,l=lt.componentIcons,a="HotKeys (GLOBAL";if(o.eventId!==!1){var u=Ye(o.eventId)?ho.getId():o.eventId;a="".concat(a,"-E").concat(u).concat(i[u%i.length])}return Ye(r)?"".concat(a,"):"):"".concat(a,"-C").concat(r).concat(l[r%l.length],"):")}}]),t}(im);function na(e){return!Ye(e)}var xe=function(){function e(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};V(this,e),this.logger=t.logger||new lt(U.option("logLevel")),this._focusOnlyEventStrategy=new Sv({configuration:t,logger:this.logger},this),this._globalEventStrategy=new $v({configuration:t,logger:this.logger},this),this.mountedComponentsCount=0}return W(e,null,[{key:"getInstance",value:function(){var n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return this.instance||(this.instance=new e(n)),this.instance}},{key:"clear",value:function(){delete this.instance}}]),W(e,[{key:"getApplicationKeyMap",value:function(){return Object.assign(this._globalEventStrategy.getApplicationKeyMap(),this._focusOnlyEventStrategy.getApplicationKeyMap())}},{key:"registerKeyMap",value:function(){var n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return this._focusOnlyEventStrategy.registerKeyMap(n)}},{key:"reregisterKeyMap",value:function(n){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};this._focusOnlyEventStrategy.reregisterKeyMap(n,r)}},{key:"deregisterKeyMap",value:function(n){this._focusOnlyEventStrategy.deregisterKeyMap(n)}},{key:"registerComponentMount",value:function(n,r){return this._incrementComponentCount(),this._focusOnlyEventStrategy.registerComponentMount(n,r)}},{key:"registerComponentUnmount",value:function(){this._decrementComponentCount()}},{key:"_incrementComponentCount",value:function(){var n=this,r=this.mountedComponentsCount;this.mountedComponentsCount+=1,r===0&&this.mountedComponentsCount===1&&(window.onblur=function(){return n._clearKeyHistory()})}},{key:"_decrementComponentCount",value:function(){var n=this.mountedComponentsCount;this.mountedComponentsCount-=1,n===1&&this.mountedComponentsCount===0&&delete window.onblur}},{key:"_clearKeyHistory",value:function(){this._focusOnlyEventStrategy.resetKeyHistory({force:!0}),this._globalEventStrategy.resetKeyHistory({force:!0})}},{key:"registerGlobalKeyMap",value:function(){var n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return this._globalEventStrategy.registerKeyMap(n)}},{key:"registerGlobalComponentUnmount",value:function(){this._decrementComponentCount()}},{key:"registerGlobalComponentMount",value:function(n,r){return this._incrementComponentCount(),this._globalEventStrategy.registerComponentMount(n,r)}},{key:"reregisterGlobalKeyMap",value:function(n,r){this._globalEventStrategy.reregisterKeyMap(n,r)}},{key:"deregisterGlobalKeyMap",value:function(n){this._globalEventStrategy.deregisterKeyMap(n)}},{key:"addKeyCombinationListener",value:function(n){return this._globalEventStrategy.addKeyCombinationListener(n)}},{key:"enableHotKeys",value:function(n){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},i=3<arguments.length?arguments[3]:void 0;return this._focusOnlyEventStrategy.enableHotKeys(n,r,o,i)}},{key:"updateEnabledHotKeys",value:function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},l=4<arguments.length?arguments[4]:void 0;return this._focusOnlyEventStrategy.updateEnabledHotKeys(n,r,o,i,l)}},{key:"disableHotKeys",value:function(n,r){return this._focusOnlyEventStrategy.disableHotKeys(n,r)}},{key:"handleKeydown",value:function(n,r,o,i){if(na(r))return this._focusOnlyEventStrategy.handleKeydown(n,r,o,i)}},{key:"handleKeyPress",value:function(n,r,o,i){if(na(r))return this._focusOnlyEventStrategy.handleKeyPress(n,r,o,i)}},{key:"handleKeyUp",value:function(n,r,o,i){if(na(r))return this._focusOnlyEventStrategy.handleKeyUp(n,r,o,i)}},{key:"enableGlobalHotKeys",value:function(n){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},i=3<arguments.length?arguments[3]:void 0,l=4<arguments.length?arguments[4]:void 0;return this._globalEventStrategy.enableHotKeys(n,r,o,i,l)}},{key:"updateEnabledGlobalHotKeys",value:function(n){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},i=3<arguments.length?arguments[3]:void 0,l=4<arguments.length?arguments[4]:void 0;return this._globalEventStrategy.updateEnabledHotKeys(n,r,o,i,l)}},{key:"disableGlobalHotKeys",value:function(n){return this._globalEventStrategy.disableHotKeys(n)}},{key:"handleGlobalKeyDown",value:function(n){return this._globalEventStrategy.handleKeydown(n)}},{key:"handleGlobalKeyPress",value:function(n){return this._globalEventStrategy.handleKeyPress(n)}},{key:"handleGlobalKeyUp",value:function(n){return this._globalEventStrategy.handleKeyUp(n)}},{key:"ignoreEvent",value:function(n){this._focusOnlyEventStrategy.getEventPropagator().ignoreEvent(n)}},{key:"observeIgnoredEvents",value:function(n){this._focusOnlyEventStrategy.getEventPropagator().observeIgnoredEvents(n)}},{key:"closeHangingKeyCombination",value:function(n,r){this._focusOnlyEventStrategy.closeHangingKeyCombination(n,r)}},{key:"reactAppHistoryWithEvent",value:function(n,r){var o=this._focusOnlyEventStrategy.eventPropagator.getPreviousPropagation();return o.isForKey(n)&&o.isForEventType(r)?o.isHandled()?X.handled:o.isIgnoringEvent()?X.ignored:X.seen:X.unseen}},{key:"simulatePendingKeyPressEvents",value:function(){this._focusOnlyEventStrategy.simulatePendingKeyPressEvents()}},{key:"simulatePendingKeyUpEvents",value:function(){this._focusOnlyEventStrategy.simulatePendingKeyUpEvents()}},{key:"isGlobalListenersBound",value:function(){return this._globalEventStrategy.listenersBound}}]),e}();function lm(e,t){var n=t.deprecatedAPI,r=n.contextTypes,o=n.childContextTypes,i=t.newAPI.contextType;if(typeof Z.createContext>"u")e.contextTypes=r,e.childContextTypes=o,e.prototype.getChildContext=function(){return this._childContext};else{var l=Z.createContext(i);e.contextType=l,e.prototype._originalRender=e.prototype.render,e.prototype.render=function(){var a=this._originalRender();return a?Z.createElement(l.Provider,{value:this._childContext},a):null}}return e}function am(e){function t(l,a){return Je({},o[l]||{},a[l]||{})}function n(l){return t("handlers",l)}function r(l){return t("keyMap",l)}var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},i=function(l){function a(u){var s;return V(this,a),s=vt(this,ue(a).call(this,u)),s._handleFocus=s._handleFocus.bind(ce(ce(s))),s._handleBlur=s._handleBlur.bind(ce(ce(s))),s._handleKeyDown=s._handleKeyDown.bind(ce(ce(s))),s._handleKeyPress=s._handleKeyPress.bind(ce(ce(s))),s._handleKeyUp=s._handleKeyUp.bind(ce(ce(s))),s._componentIsFocused=s._componentIsFocused.bind(ce(ce(s))),s._id=xe.getInstance().registerKeyMap(u.keyMap),s._childContext={hotKeysParentId:s._id},s}return ht(a,l),W(a,[{key:"render",value:function(){var s=this.props;s.keyMap,s.handlers,s.allowChanges,s.root;var f=_o(s,["keyMap","handlers","allowChanges","root"]),d={onFocus:this._wrapFunction("onFocus",this._handleFocus),onBlur:this._wrapFunction("onBlur",this._handleBlur),tabIndex:U.option("defaultTabIndex")};return this._shouldBindKeyListeners()&&(d.onKeyDown=this._handleKeyDown,d.onKeyPress=this._handleKeyPress,d.onKeyUp=this._handleKeyUp),Z.createElement(e,Wi({hotKeys:d},f))}},{key:"_shouldBindKeyListeners",value:function(){var s=r(this.props);return!qr(s)||this.props.root||U.option("enableHardSequences")&&this._handlersIncludeHardSequences(s,n(this.props))}},{key:"_handlersIncludeHardSequences",value:function(s,f){return Object.keys(f).some(function(d){return!s[d]&&yl.isValidKeySerialization(d)})}},{key:"_wrapFunction",value:function(s,f){var d=this;return typeof this.props[s]=="function"?function(g){d.props[s](g),f(g)}:f}},{key:"_focusTreeIdsPush",value:function(s){this._focusTreeIds||(this._focusTreeIds=[]),this._focusTreeIds.push(s)}},{key:"_focusTreeIdsShift",value:function(){this._focusTreeIds&&this._focusTreeIds.shift()}},{key:"_getFocusTreeId",value:function(){if(this._focusTreeIds)return this._focusTreeIds[0]}},{key:"componentDidUpdate",value:function(){var s=xe.getInstance();if(s.reregisterKeyMap(this._id,this.props.keyMap),this._componentIsFocused()&&(this.props.allowChanges||!U.option("ignoreKeymapAndHandlerChangesByDefault"))){var f=this.props,d=f.keyMap,g=f.handlers;s.updateEnabledHotKeys(this._getFocusTreeId(),this._id,d,g,this._getComponentOptions())}}},{key:"_componentIsFocused",value:function(){return this._focused===!0}},{key:"componentDidMount",value:function(){var s=xe.getInstance(),f=this.context.hotKeysParentId;s.registerComponentMount(this._id,f)}},{key:"_handleFocus",value:function(){if(this.props.onFocus){var s;(s=this.props).onFocus.apply(s,arguments)}var f=xe.getInstance().enableHotKeys(this._id,r(this.props),n(this.props),this._getComponentOptions());Ye(f)||this._focusTreeIdsPush(f),this._focused=!0}},{key:"componentWillUnmount",value:function(){var s=xe.getInstance();s.deregisterKeyMap(this._id),s.registerComponentUnmount(),this._handleBlur()}},{key:"_handleBlur",value:function(){if(this.props.onBlur){var s;(s=this.props).onBlur.apply(s,arguments)}var f=xe.getInstance().disableHotKeys(this._getFocusTreeId(),this._id);f||this._focusTreeIdsShift(),this._focused=!1}},{key:"_handleKeyDown",value:function(s){var f=xe.getInstance().handleKeydown(s,this._getFocusTreeId(),this._id,this._getEventOptions());f&&this._focusTreeIdsShift()}},{key:"_handleKeyPress",value:function(s){var f=xe.getInstance().handleKeyPress(s,this._getFocusTreeId(),this._id,this._getEventOptions());f&&this._focusTreeIdsShift()}},{key:"_handleKeyUp",value:function(s){var f=xe.getInstance().handleKeyUp(s,this._getFocusTreeId(),this._id,this._getEventOptions());f&&this._focusTreeIdsShift()}},{key:"_getComponentOptions",value:function(){return{defaultKeyEvent:U.option("defaultKeyEvent")}}},{key:"_getEventOptions",value:function(){return{ignoreEventsCondition:U.option("ignoreEventsCondition")}}}]),a}(c.exports.PureComponent);return me(i,"propTypes",{keyMap:G.exports.object,handlers:G.exports.object,onFocus:G.exports.func,onBlur:G.exports.func,allowChanges:G.exports.bool,root:G.exports.bool}),lm(i,{deprecatedAPI:{contextTypes:{hotKeysParentId:G.exports.number},childContextTypes:{hotKeysParentId:G.exports.number}},newAPI:{contextType:{hotKeysParentId:void 0}}})}var Ov=function(e){function t(){return V(this,t),vt(this,ue(t).apply(this,arguments))}return ht(t,e),W(t,[{key:"render",value:function(){var r=this.props,o=r.hotKeys,i=r.innerRef,l=r.component,a=_o(r,["hotKeys","innerRef","component"]),u=l||U.option("defaultComponent");return Z.createElement(u,Je({},o,{ref:i},a))}}]),t}(c.exports.Component),um=am(Ov);um.propTypes={innerRef:G.exports.oneOfType([G.exports.object,G.exports.func])};var sm=function(e){function t(n){var r;return V(this,t),r=vt(this,ue(t).call(this,n)),r._id=xe.getInstance().registerGlobalKeyMap(n.keyMap),r._childContext={globalHotKeysParentId:r._id},r}return ht(t,e),W(t,[{key:"render",value:function(){return this.props.children||null}},{key:"componentDidUpdate",value:function(){var r=xe.getInstance();if(r.reregisterGlobalKeyMap(this._id,this.props.keyMap),this.props.allowChanges||!U.option("ignoreKeymapAndHandlerChangesByDefault")){var o=this.props,i=o.keyMap,l=o.handlers;r.updateEnabledGlobalHotKeys(this._id,i,l,this._getComponentOptions(),this._getEventOptions())}}},{key:"componentDidMount",value:function(){var r=this.props,o=r.keyMap,i=r.handlers,l=this.context.globalHotKeysParentId,a=xe.getInstance();a.registerGlobalComponentMount(this._id,l),a.enableGlobalHotKeys(this._id,o,i,this._getComponentOptions(),this._getEventOptions())}},{key:"componentWillUnmount",value:function(){var r=xe.getInstance();r.deregisterGlobalKeyMap(this._id),r.disableGlobalHotKeys(this._id),r.registerGlobalComponentUnmount()}},{key:"_getComponentOptions",value:function(){return{defaultKeyEvent:U.option("defaultKeyEvent")}}},{key:"_getEventOptions",value:function(){return{ignoreEventsCondition:U.option("ignoreEventsCondition")}}}]),t}(c.exports.Component);me(sm,"propTypes",{keyMap:G.exports.object,handlers:G.exports.object,allowChanges:G.exports.bool});var Tv=lm(sm,{deprecatedAPI:{contextTypes:{globalHotKeysParentId:G.exports.number},childContextTypes:{globalHotKeysParentId:G.exports.number}},newAPI:{contextType:{globalHotKeysParentId:void 0}}});function hl(e){var t,n,r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{only:[],except:[]},o=2<arguments.length?arguments[2]:void 0;return n=t=function(i){function l(a){var u;return V(this,l),u=vt(this,ue(l).call(this,a)),u._handleKeyEvent=u._handleKeyEvent.bind(ce(ce(u))),u._reloadDictionaries=u._reloadDictionaries.bind(ce(ce(u))),u}return ht(l,i),W(l,[{key:"render",value:function(){var u=this.props;u.only,u.except;var s=_o(u,["only","except"]),f={onKeyDown:this._handleKeyEvent,onKeyPress:this._handleKeyEvent,onKeyUp:this._handleKeyEvent,onFocus:this._reloadDictionaries};return Z.createElement(e,Wi({hotKeys:f},s))}},{key:"_reloadDictionaries",value:function(){var u=this.props,s=u.only,f=u.except;this._onlyDict=Xc(s),this._exceptDict=Xc(f)}},{key:"_shouldIgnoreEvent",value:function(u){var s=u.key;return qr(this._onlyDict)?!!qr(this._exceptDict)||!Qe(this._exceptDict,s):qr(this._exceptDict)?Qe(this._onlyDict,s):Qe(this._onlyDict,s)&&!Qe(this._exceptDict,s)}},{key:"_handleKeyEvent",value:function(u){this._shouldIgnoreEvent(u)&&xe.getInstance()[o](u)}}]),l}(c.exports.PureComponent),me(t,"propTypes",{only:G.exports.oneOfType([G.exports.string,G.exports.arrayOf(G.exports.string)]),except:G.exports.oneOfType([G.exports.string,G.exports.arrayOf(G.exports.string)])}),me(t,"defaultProps",r),n}function Xc(e){return yo(e).reduce(function(t,n){var r=Qp(n);if(!Xp(r))throw new Zp(n);return[ks,bs,ys,gl,vs,hs].forEach(function(o){t[o(r)]=!0}),t},{})}var Lv=function(e){function t(){return V(this,t),vt(this,ue(t).apply(this,arguments))}return ht(t,e),W(t,[{key:"render",value:function(){var r=this.props,o=r.hotKeys,i=_o(r,["hotKeys"]),l=i.component||U.option("defaultComponent");return Z.createElement(l,Je({},o,i))}}]),t}(c.exports.Component),Iv=hl(Lv,{},"ignoreEvent"),Dv=function(e){function t(){return V(this,t),vt(this,ue(t).apply(this,arguments))}return ht(t,e),W(t,[{key:"render",value:function(){var r=this.props,o=r.hotKeys,i=_o(r,["hotKeys"]),l=i.component||U.option("defaultComponent");return Z.createElement(l,Je({},o,i))}}]),t}(c.exports.Component),Rv=hl(Dv,{},"observeIgnoredEvents");function Av(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{only:[],except:[]};return hl(e,t,"ignoreEvent")}function Mv(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{only:[],except:[]};return hl(e,t,"observeIgnoredEvents")}function Nv(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};U.init(e)}function Fv(){return xe.getInstance().getApplicationKeyMap()}function Kv(e){var t=xe.getInstance();return t.addKeyCombinationListener(e)}const Hv=Object.freeze(Object.defineProperty({__proto__:null,HotKeys:um,GlobalHotKeys:Tv,IgnoreKeys:Iv,ObserveKeys:Rv,withHotKeys:am,withIgnoreKeys:Av,withObserveKeys:Mv,configure:Nv,getApplicationKeyMap:Fv,recordKeyCombination:Kv},Symbol.toStringTag,{value:"Module"})),zv=kg(Hv);(function(e){e.exports=zv})(zp);function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)}function ze(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function jv(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function vl(...e){return t=>e.forEach(n=>jv(n,t))}function ct(...e){return c.exports.useCallback(vl(...e),e)}function ws(e,t=[]){let n=[];function r(i,l){const a=c.exports.createContext(l),u=n.length;n=[...n,l];function s(d){const{scope:g,children:v,...k}=d,h=(g==null?void 0:g[e][u])||a,w=c.exports.useMemo(()=>k,Object.values(k));return c.exports.createElement(h.Provider,{value:w},v)}function f(d,g){const v=(g==null?void 0:g[e][u])||a,k=c.exports.useContext(v);if(k)return k;if(l!==void 0)return l;throw new Error(`\`${d}\` must be used within \`${i}\``)}return s.displayName=i+"Provider",[s,f]}const o=()=>{const i=n.map(l=>c.exports.createContext(l));return function(a){const u=(a==null?void 0:a[e])||i;return c.exports.useMemo(()=>({[`__scope${e}`]:{...a,[e]:u}}),[a,u])}};return o.scopeName=e,[r,Bv(o,...t)]}function Bv(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=r.reduce((a,{useScope:u,scopeName:s})=>{const d=u(i)[`__scope${s}`];return{...a,...d}},{});return c.exports.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}const cm=c.exports.forwardRef((e,t)=>{const{children:n,...r}=e,o=c.exports.Children.toArray(n),i=o.find(Wv);if(i){const l=i.props.children,a=o.map(u=>u===i?c.exports.Children.count(l)>1?c.exports.Children.only(null):c.exports.isValidElement(l)?l.props.children:null:u);return c.exports.createElement(uu,K({},r,{ref:t}),c.exports.isValidElement(l)?c.exports.cloneElement(l,void 0,a):null)}return c.exports.createElement(uu,K({},r,{ref:t}),n)});cm.displayName="Slot";const uu=c.exports.forwardRef((e,t)=>{const{children:n,...r}=e;return c.exports.isValidElement(n)?c.exports.cloneElement(n,{...Vv(r,n.props),ref:vl(t,n.ref)}):c.exports.Children.count(n)>1?c.exports.Children.only(null):null});uu.displayName="SlotClone";const Uv=({children:e})=>c.exports.createElement(c.exports.Fragment,null,e);function Wv(e){return c.exports.isValidElement(e)&&e.type===Uv}function Vv(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const qv=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],fr=qv.reduce((e,t)=>{const n=c.exports.forwardRef((r,o)=>{const{asChild:i,...l}=r,a=i?cm:t;return c.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),c.exports.createElement(a,K({},l,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Qv(e,t){e&&_n.exports.flushSync(()=>e.dispatchEvent(t))}function et(e){const t=c.exports.useRef(e);return c.exports.useEffect(()=>{t.current=e}),c.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Gv(e,t=globalThis==null?void 0:globalThis.document){const n=et(e);c.exports.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const su="dismissableLayer.update",Yv="dismissableLayer.pointerDownOutside",Xv="dismissableLayer.focusOutside";let Zc;const Zv=c.exports.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Jv=c.exports.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:l,onInteractOutside:a,onDismiss:u,...s}=e,f=c.exports.useContext(Zv),[d,g]=c.exports.useState(null),v=(n=d==null?void 0:d.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,k]=c.exports.useState({}),h=ct(t,_=>g(_)),w=Array.from(f.layers),[p]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),m=w.indexOf(p),y=d?w.indexOf(d):-1,b=f.layersWithOutsidePointerEventsDisabled.size>0,x=y>=m,C=eb(_=>{const D=_.target,A=[...f.branches].some(j=>j.contains(D));!x||A||(i==null||i(_),a==null||a(_),_.defaultPrevented||u==null||u())},v),S=tb(_=>{const D=_.target;[...f.branches].some(j=>j.contains(D))||(l==null||l(_),a==null||a(_),_.defaultPrevented||u==null||u())},v);return Gv(_=>{y===f.layers.size-1&&(o==null||o(_),!_.defaultPrevented&&u&&(_.preventDefault(),u()))},v),c.exports.useEffect(()=>{if(!!d)return r&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(Zc=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(d)),f.layers.add(d),Jc(),()=>{r&&f.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=Zc)}},[d,v,r,f]),c.exports.useEffect(()=>()=>{!d||(f.layers.delete(d),f.layersWithOutsidePointerEventsDisabled.delete(d),Jc())},[d,f]),c.exports.useEffect(()=>{const _=()=>k({});return document.addEventListener(su,_),()=>document.removeEventListener(su,_)},[]),c.exports.createElement(fr.div,K({},s,{ref:h,style:{pointerEvents:b?x?"auto":"none":void 0,...e.style},onFocusCapture:ze(e.onFocusCapture,S.onFocusCapture),onBlurCapture:ze(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:ze(e.onPointerDownCapture,C.onPointerDownCapture)}))});function eb(e,t=globalThis==null?void 0:globalThis.document){const n=et(e),r=c.exports.useRef(!1),o=c.exports.useRef(()=>{});return c.exports.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let f=function(){dm(Yv,n,s,{discrete:!0})};var u=f;const s={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=f,t.addEventListener("click",o.current,{once:!0})):f()}r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function tb(e,t=globalThis==null?void 0:globalThis.document){const n=et(e),r=c.exports.useRef(!1);return c.exports.useEffect(()=>{const o=i=>{i.target&&!r.current&&dm(Xv,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Jc(){const e=new CustomEvent(su);document.dispatchEvent(e)}function dm(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Qv(o,i):o.dispatchEvent(i)}let ra=0;function fm(){c.exports.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:ed()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:ed()),ra++,()=>{ra===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),ra--}},[])}function ed(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const oa="focusScope.autoFocusOnMount",ia="focusScope.autoFocusOnUnmount",td={bubbles:!1,cancelable:!0},nb=c.exports.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...l}=e,[a,u]=c.exports.useState(null),s=et(o),f=et(i),d=c.exports.useRef(null),g=ct(t,h=>u(h)),v=c.exports.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.exports.useEffect(()=>{if(r){let p=function(y){if(v.paused||!a)return;const b=y.target;a.contains(b)?d.current=b:fn(d.current,{select:!0})},m=function(y){v.paused||!a||a.contains(y.relatedTarget)||fn(d.current,{select:!0})};var h=p,w=m;return document.addEventListener("focusin",p),document.addEventListener("focusout",m),()=>{document.removeEventListener("focusin",p),document.removeEventListener("focusout",m)}}},[r,a,v.paused]),c.exports.useEffect(()=>{if(a){rd.add(v);const h=document.activeElement;if(!a.contains(h)){const p=new CustomEvent(oa,td);a.addEventListener(oa,s),a.dispatchEvent(p),p.defaultPrevented||(rb(ub(pm(a)),{select:!0}),document.activeElement===h&&fn(a))}return()=>{a.removeEventListener(oa,s),setTimeout(()=>{const p=new CustomEvent(ia,td);a.addEventListener(ia,f),a.dispatchEvent(p),p.defaultPrevented||fn(h!=null?h:document.body,{select:!0}),a.removeEventListener(ia,f),rd.remove(v)},0)}}},[a,s,f,v]);const k=c.exports.useCallback(h=>{if(!n&&!r||v.paused)return;const w=h.key==="Tab"&&!h.altKey&&!h.ctrlKey&&!h.metaKey,p=document.activeElement;if(w&&p){const m=h.currentTarget,[y,b]=ob(m);y&&b?!h.shiftKey&&p===b?(h.preventDefault(),n&&fn(y,{select:!0})):h.shiftKey&&p===y&&(h.preventDefault(),n&&fn(b,{select:!0})):p===m&&h.preventDefault()}},[n,r,v.paused]);return c.exports.createElement(fr.div,K({tabIndex:-1},l,{ref:g,onKeyDown:k}))});function rb(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(fn(r,{select:t}),document.activeElement!==n)return}function ob(e){const t=pm(e),n=nd(t,e),r=nd(t.reverse(),e);return[n,r]}function pm(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function nd(e,t){for(const n of e)if(!ib(n,{upTo:t}))return n}function ib(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function lb(e){return e instanceof HTMLInputElement&&"select"in e}function fn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&lb(e)&&t&&e.select()}}const rd=ab();function ab(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=od(e,t),e.unshift(t)},remove(t){var n;e=od(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function od(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function ub(e){return e.filter(t=>t.tagName!=="A")}const pr=Boolean(globalThis==null?void 0:globalThis.document)?c.exports.useLayoutEffect:()=>{},sb=Mg["useId".toString()]||(()=>{});let cb=0;function ki(e){const[t,n]=c.exports.useState(sb());return pr(()=>{e||n(r=>r!=null?r:String(cb++))},[e]),e||(t?`radix-${t}`:"")}function br(e){return e.split("-")[0]}function bl(e){return e.split("-")[1]}function kr(e){return["top","bottom"].includes(br(e))?"x":"y"}function xs(e){return e==="y"?"height":"width"}function id(e,t,n){let{reference:r,floating:o}=e;const i=r.x+r.width/2-o.width/2,l=r.y+r.height/2-o.height/2,a=kr(t),u=xs(a),s=r[u]/2-o[u]/2,f=br(t),d=a==="x";let g;switch(f){case"top":g={x:i,y:r.y-o.height};break;case"bottom":g={x:i,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:l};break;case"left":g={x:r.x-o.width,y:l};break;default:g={x:r.x,y:r.y}}switch(bl(t)){case"start":g[a]-=s*(n&&d?-1:1);break;case"end":g[a]+=s*(n&&d?-1:1);break}return g}const db=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,a=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:s,y:f}=id(u,r,a),d=r,g={},v=0;for(let k=0;k<i.length;k++){const{name:h,fn:w}=i[k],{x:p,y:m,data:y,reset:b}=await w({x:s,y:f,initialPlacement:r,placement:d,strategy:o,middlewareData:g,rects:u,platform:l,elements:{reference:e,floating:t}});if(s=p!=null?p:s,f=m!=null?m:f,g={...g,[h]:{...g[h],...y}},b&&v<=50){v++,typeof b=="object"&&(b.placement&&(d=b.placement),b.rects&&(u=b.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:o}):b.rects),{x:s,y:f}=id(u,d,a)),k=-1;continue}}return{x:s,y:f,placement:d,strategy:o,middlewareData:g}};function fb(e){return{top:0,right:0,bottom:0,left:0,...e}}function mm(e){return typeof e!="number"?fb(e):{top:e,right:e,bottom:e,left:e}}function qi(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function Qi(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:l,elements:a,strategy:u}=e,{boundary:s="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:g=!1,padding:v=0}=t,k=mm(v),w=a[g?d==="floating"?"reference":"floating":d],p=qi(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:s,rootBoundary:f,strategy:u})),m=qi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:d==="floating"?{...l.floating,x:r,y:o}:l.reference,offsetParent:await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),strategy:u}):l[d]);return{top:p.top-m.top+k.top,bottom:m.bottom-p.bottom+k.bottom,left:p.left-m.left+k.left,right:m.right-p.right+k.right}}const pb=Math.min,mb=Math.max;function cu(e,t,n){return mb(e,pb(t,n))}const ld=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e!=null?e:{},{x:o,y:i,placement:l,rects:a,platform:u}=t;if(n==null)return{};const s=mm(r),f={x:o,y:i},d=kr(l),g=bl(l),v=xs(d),k=await u.getDimensions(n),h=d==="y"?"top":"left",w=d==="y"?"bottom":"right",p=a.reference[v]+a.reference[d]-f[d]-a.floating[v],m=f[d]-a.reference[d],y=await(u.getOffsetParent==null?void 0:u.getOffsetParent(n));let b=y?d==="y"?y.clientHeight||0:y.clientWidth||0:0;b===0&&(b=a.floating[v]);const x=p/2-m/2,C=s[h],S=b-k[v]-s[w],_=b/2-k[v]/2+x,D=cu(C,_,S),ee=(g==="start"?s[h]:s[w])>0&&_!==D&&a.reference[v]<=a.floating[v]?_<C?C-_:S-_:0;return{[d]:f[d]-ee,data:{[d]:D,centerOffset:_-D}}}}),gb={left:"right",right:"left",bottom:"top",top:"bottom"};function Gi(e){return e.replace(/left|right|bottom|top/g,t=>gb[t])}function yb(e,t,n){n===void 0&&(n=!1);const r=bl(e),o=kr(e),i=xs(o);let l=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=Gi(l)),{main:l,cross:Gi(l)}}const hb={start:"end",end:"start"};function ad(e){return e.replace(/start|end/g,t=>hb[t])}const vb=["top","right","bottom","left"];function bb(e){const t=Gi(e);return[ad(e),t,ad(t)]}const kb=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:o,rects:i,initialPlacement:l,platform:a,elements:u}=t,{mainAxis:s=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:g="bestFit",flipAlignment:v=!0,...k}=e,h=br(r),p=d||(h===l||!v?[Gi(l)]:bb(l)),m=[l,...p],y=await Qi(t,k),b=[];let x=((n=o.flip)==null?void 0:n.overflows)||[];if(s&&b.push(y[h]),f){const{main:D,cross:A}=yb(r,i,await(a.isRTL==null?void 0:a.isRTL(u.floating)));b.push(y[D],y[A])}if(x=[...x,{placement:r,overflows:b}],!b.every(D=>D<=0)){var C,S;const D=((C=(S=o.flip)==null?void 0:S.index)!=null?C:0)+1,A=m[D];if(A)return{data:{index:D,overflows:x},reset:{placement:A}};let j="bottom";switch(g){case"bestFit":{var _;const ee=(_=x.map(be=>[be,be.overflows.filter(Se=>Se>0).reduce((Se,Mt)=>Se+Mt,0)]).sort((be,Se)=>be[1]-Se[1])[0])==null?void 0:_[0].placement;ee&&(j=ee);break}case"initialPlacement":j=l;break}if(r!==j)return{reset:{placement:j}}}return{}}}};function ud(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function sd(e){return vb.some(t=>e[t]>=0)}const wb=function(e){let{strategy:t="referenceHidden",...n}=e===void 0?{}:e;return{name:"hide",async fn(r){const{rects:o}=r;switch(t){case"referenceHidden":{const i=await Qi(r,{...n,elementContext:"reference"}),l=ud(i,o.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:sd(l)}}}case"escaped":{const i=await Qi(r,{...n,altBoundary:!0}),l=ud(i,o.floating);return{data:{escapedOffsets:l,escaped:sd(l)}}}default:return{}}}}};async function xb(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),l=br(n),a=bl(n),u=kr(n)==="x",s=["left","top"].includes(l)?-1:1,f=i&&u?-1:1,d=typeof t=="function"?t(e):t;let{mainAxis:g,crossAxis:v,alignmentAxis:k}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof k=="number"&&(v=a==="end"?k*-1:k),u?{x:v*f,y:g*s}:{x:g*s,y:v*f}}const Eb=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await xb(t,e);return{x:n+o.x,y:r+o.y,data:o}}}};function gm(e){return e==="x"?"y":"x"}const Cb=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:w=>{let{x:p,y:m}=w;return{x:p,y:m}}},...u}=e,s={x:n,y:r},f=await Qi(t,u),d=kr(br(o)),g=gm(d);let v=s[d],k=s[g];if(i){const w=d==="y"?"top":"left",p=d==="y"?"bottom":"right",m=v+f[w],y=v-f[p];v=cu(m,v,y)}if(l){const w=g==="y"?"top":"left",p=g==="y"?"bottom":"right",m=k+f[w],y=k-f[p];k=cu(m,k,y)}const h=a.fn({...t,[d]:v,[g]:k});return{...h,data:{x:h.x-n,y:h.y-r}}}}},_b=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:l}=t,{offset:a=0,mainAxis:u=!0,crossAxis:s=!0}=e,f={x:n,y:r},d=kr(o),g=gm(d);let v=f[d],k=f[g];const h=typeof a=="function"?a({...i,placement:o}):a,w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(u){const x=d==="y"?"height":"width",C=i.reference[d]-i.floating[x]+w.mainAxis,S=i.reference[d]+i.reference[x]-w.mainAxis;v<C?v=C:v>S&&(v=S)}if(s){var p,m,y,b;const x=d==="y"?"width":"height",C=["top","left"].includes(br(o)),S=i.reference[g]-i.floating[x]+(C&&(p=(m=l.offset)==null?void 0:m[g])!=null?p:0)+(C?0:w.crossAxis),_=i.reference[g]+i.reference[x]+(C?0:(y=(b=l.offset)==null?void 0:b[g])!=null?y:0)-(C?w.crossAxis:0);k<S?k=S:k>_&&(k=_)}return{[d]:v,[g]:k}}}};function ym(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function At(e){if(e==null)return window;if(!ym(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function So(e){return At(e).getComputedStyle(e)}function It(e){return ym(e)?"":e?(e.nodeName||"").toLowerCase():""}function hm(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function yt(e){return e instanceof At(e).HTMLElement}function on(e){return e instanceof At(e).Element}function Sb(e){return e instanceof At(e).Node}function Es(e){if(typeof ShadowRoot>"u")return!1;const t=At(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function kl(e){const{overflow:t,overflowX:n,overflowY:r}=So(e);return/auto|scroll|overlay|hidden/.test(t+r+n)}function Pb(e){return["table","td","th"].includes(It(e))}function vm(e){const t=/firefox/i.test(hm()),n=So(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&(n.filter?n.filter!=="none":!1)}function bm(){return!/^((?!chrome|android).)*safari/i.test(hm())}const cd=Math.min,Qr=Math.max,Yi=Math.round;function Dt(e,t,n){var r,o,i,l;t===void 0&&(t=!1),n===void 0&&(n=!1);const a=e.getBoundingClientRect();let u=1,s=1;t&&yt(e)&&(u=e.offsetWidth>0&&Yi(a.width)/e.offsetWidth||1,s=e.offsetHeight>0&&Yi(a.height)/e.offsetHeight||1);const f=on(e)?At(e):window,d=!bm()&&n,g=(a.left+(d&&(r=(o=f.visualViewport)==null?void 0:o.offsetLeft)!=null?r:0))/u,v=(a.top+(d&&(i=(l=f.visualViewport)==null?void 0:l.offsetTop)!=null?i:0))/s,k=a.width/u,h=a.height/s;return{width:k,height:h,top:v,right:g+k,bottom:v+h,left:g,x:g,y:v}}function sn(e){return((Sb(e)?e.ownerDocument:e.document)||window.document).documentElement}function wl(e){return on(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function km(e){return Dt(sn(e)).left+wl(e).scrollLeft}function $b(e){const t=Dt(e);return Yi(t.width)!==e.offsetWidth||Yi(t.height)!==e.offsetHeight}function Ob(e,t,n){const r=yt(t),o=sn(t),i=Dt(e,r&&$b(t),n==="fixed");let l={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(r||!r&&n!=="fixed")if((It(t)!=="body"||kl(o))&&(l=wl(t)),yt(t)){const u=Dt(t,!0);a.x=u.x+t.clientLeft,a.y=u.y+t.clientTop}else o&&(a.x=km(o));return{x:i.left+l.scrollLeft-a.x,y:i.top+l.scrollTop-a.y,width:i.width,height:i.height}}function wm(e){return It(e)==="html"?e:e.assignedSlot||e.parentNode||(Es(e)?e.host:null)||sn(e)}function dd(e){return!yt(e)||getComputedStyle(e).position==="fixed"?null:e.offsetParent}function Tb(e){let t=wm(e);for(Es(t)&&(t=t.host);yt(t)&&!["html","body"].includes(It(t));){if(vm(t))return t;t=t.parentNode}return null}function du(e){const t=At(e);let n=dd(e);for(;n&&Pb(n)&&getComputedStyle(n).position==="static";)n=dd(n);return n&&(It(n)==="html"||It(n)==="body"&&getComputedStyle(n).position==="static"&&!vm(n))?t:n||Tb(e)||t}function fd(e){if(yt(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=Dt(e);return{width:t.width,height:t.height}}function Lb(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=yt(n),i=sn(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if((o||!o&&r!=="fixed")&&((It(n)!=="body"||kl(i))&&(l=wl(n)),yt(n))){const u=Dt(n,!0);a.x=u.x+n.clientLeft,a.y=u.y+n.clientTop}return{...t,x:t.x-l.scrollLeft+a.x,y:t.y-l.scrollTop+a.y}}function Ib(e,t){const n=At(e),r=sn(e),o=n.visualViewport;let i=r.clientWidth,l=r.clientHeight,a=0,u=0;if(o){i=o.width,l=o.height;const s=bm();(s||!s&&t==="fixed")&&(a=o.offsetLeft,u=o.offsetTop)}return{width:i,height:l,x:a,y:u}}function Db(e){var t;const n=sn(e),r=wl(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=Qr(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),l=Qr(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let a=-r.scrollLeft+km(e);const u=-r.scrollTop;return So(o||n).direction==="rtl"&&(a+=Qr(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:l,x:a,y:u}}function xm(e){const t=wm(e);return["html","body","#document"].includes(It(t))?e.ownerDocument.body:yt(t)&&kl(t)?t:xm(t)}function Xi(e,t){var n;t===void 0&&(t=[]);const r=xm(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=At(r),l=o?[i].concat(i.visualViewport||[],kl(r)?r:[]):r,a=t.concat(l);return o?a:a.concat(Xi(l))}function Rb(e,t){const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Es(n)){let r=t;do{if(r&&e===r)return!0;r=r.parentNode||r.host}while(r)}return!1}function Ab(e,t){const n=Dt(e,!1,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft;return{top:r,left:o,x:o,y:r,right:o+e.clientWidth,bottom:r+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}function pd(e,t,n){return t==="viewport"?qi(Ib(e,n)):on(t)?Ab(t,n):qi(Db(sn(e)))}function Mb(e){const t=Xi(e),r=["absolute","fixed"].includes(So(e).position)&&yt(e)?du(e):e;return on(r)?t.filter(o=>on(o)&&Rb(o,r)&&It(o)!=="body"):[]}function Nb(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const l=[...n==="clippingAncestors"?Mb(t):[].concat(n),r],a=l[0],u=l.reduce((s,f)=>{const d=pd(t,f,o);return s.top=Qr(d.top,s.top),s.right=cd(d.right,s.right),s.bottom=cd(d.bottom,s.bottom),s.left=Qr(d.left,s.left),s},pd(t,a,o));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}const Fb={getClippingRect:Nb,convertOffsetParentRelativeRectToViewportRelativeRect:Lb,isElement:on,getDimensions:fd,getOffsetParent:du,getDocumentElement:sn,getElementRects:e=>{let{reference:t,floating:n,strategy:r}=e;return{reference:Ob(t,du(n),r),floating:{...fd(n),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>So(e).direction==="rtl"};function Kb(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l=!0,animationFrame:a=!1}=r,u=o&&!a,s=i&&!a,f=u||s?[...on(e)?Xi(e):[],...Xi(t)]:[];f.forEach(h=>{u&&h.addEventListener("scroll",n,{passive:!0}),s&&h.addEventListener("resize",n)});let d=null;if(l){let h=!0;d=new ResizeObserver(()=>{h||n(),h=!1}),on(e)&&!a&&d.observe(e),d.observe(t)}let g,v=a?Dt(e):null;a&&k();function k(){const h=Dt(e);v&&(h.x!==v.x||h.y!==v.y||h.width!==v.width||h.height!==v.height)&&n(),v=h,g=requestAnimationFrame(k)}return n(),()=>{var h;f.forEach(w=>{u&&w.removeEventListener("scroll",n),s&&w.removeEventListener("resize",n)}),(h=d)==null||h.disconnect(),d=null,a&&cancelAnimationFrame(g)}}const Hb=(e,t,n)=>db(e,t,{platform:Fb,...n});var fu=typeof document<"u"?c.exports.useLayoutEffect:c.exports.useEffect;function pu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!pu(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!pu(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function zb(e){const t=c.exports.useRef(e);return fu(()=>{t.current=e}),t}function jb(e){let{middleware:t,placement:n="bottom",strategy:r="absolute",whileElementsMounted:o}=e===void 0?{}:e;const i=c.exports.useRef(null),l=c.exports.useRef(null),a=zb(o),u=c.exports.useRef(null),[s,f]=c.exports.useState({x:null,y:null,strategy:r,placement:n,middlewareData:{}}),[d,g]=c.exports.useState(t);pu(d==null?void 0:d.map(y=>{let{options:b}=y;return b}),t==null?void 0:t.map(y=>{let{options:b}=y;return b}))||g(t);const v=c.exports.useCallback(()=>{!i.current||!l.current||Hb(i.current,l.current,{middleware:d,placement:n,strategy:r}).then(y=>{k.current&&_n.exports.flushSync(()=>{f(y)})})},[d,n,r]);fu(()=>{k.current&&v()},[v]);const k=c.exports.useRef(!1);fu(()=>(k.current=!0,()=>{k.current=!1}),[]);const h=c.exports.useCallback(()=>{if(typeof u.current=="function"&&(u.current(),u.current=null),i.current&&l.current)if(a.current){const y=a.current(i.current,l.current,v);u.current=y}else v()},[v,a]),w=c.exports.useCallback(y=>{i.current=y,h()},[h]),p=c.exports.useCallback(y=>{l.current=y,h()},[h]),m=c.exports.useMemo(()=>({reference:i,floating:l}),[]);return c.exports.useMemo(()=>({...s,update:v,refs:m,reference:w,floating:p}),[s,v,m,w,p])}const Bb=e=>{const{element:t,padding:n}=e;function r(o){return Object.prototype.hasOwnProperty.call(o,"current")}return{name:"arrow",options:e,fn(o){return r(t)?t.current!=null?ld({element:t.current,padding:n}).fn(o):{}:t?ld({element:t,padding:n}).fn(o):{}}}};function Ub(e){const[t,n]=c.exports.useState(void 0);return pr(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,a;if("borderBoxSize"in i){const u=i.borderBoxSize,s=Array.isArray(u)?u[0]:u;l=s.inlineSize,a=s.blockSize}else l=e.offsetWidth,a=e.offsetHeight;n({width:l,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}const Em="Popper",[Cs,Cm]=ws(Em),[Wb,_m]=Cs(Em),Vb=e=>{const{__scopePopper:t,children:n}=e,[r,o]=c.exports.useState(null);return c.exports.createElement(Wb,{scope:t,anchor:r,onAnchorChange:o},n)},qb="PopperAnchor",Qb=c.exports.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=_m(qb,n),l=c.exports.useRef(null),a=ct(t,l);return c.exports.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||l.current)}),r?null:c.exports.createElement(fr.div,K({},o,{ref:a}))}),Zi="PopperContent",[Gb,Gk]=Cs(Zi),[Yb,Xb]=Cs(Zi,{hasParent:!1,positionUpdateFns:new Set}),Zb=c.exports.forwardRef((e,t)=>{var n,r,o,i,l,a,u,s;const{__scopePopper:f,side:d="bottom",sideOffset:g=0,align:v="center",alignOffset:k=0,arrowPadding:h=0,collisionBoundary:w=[],collisionPadding:p=0,sticky:m="partial",hideWhenDetached:y=!1,avoidCollisions:b=!0,...x}=e,C=_m(Zi,f),[S,_]=c.exports.useState(null),D=ct(t,Pl=>_(Pl)),[A,j]=c.exports.useState(null),ee=Ub(A),be=(n=ee==null?void 0:ee.width)!==null&&n!==void 0?n:0,Se=(r=ee==null?void 0:ee.height)!==null&&r!==void 0?r:0,Mt=d+(v!=="center"?"-"+v:""),Nt=typeof p=="number"?p:{top:0,right:0,bottom:0,left:0,...p},bt=Array.isArray(w)?w:[w],O=bt.length>0,E={padding:Nt,boundary:bt.filter(e0),altBoundary:O},{reference:$,floating:R,strategy:I,x:B,y:ie,placement:kt,middlewareData:se,update:tt}=jb({strategy:"fixed",placement:Mt,whileElementsMounted:Kb,middleware:[Eb({mainAxis:g+Se,alignmentAxis:k}),b?Cb({mainAxis:!0,crossAxis:!1,limiter:m==="partial"?_b():void 0,...E}):void 0,A?Bb({element:A,padding:h}):void 0,b?kb({...E}):void 0,t0({arrowWidth:be,arrowHeight:Se}),y?wb({strategy:"referenceHidden"}):void 0].filter(Jb)});pr(()=>{$(C.anchor)},[$,C.anchor]);const Lo=B!==null&&ie!==null,[Ts,fg]=Sm(kt),pg=(o=se.arrow)===null||o===void 0?void 0:o.x,mg=(i=se.arrow)===null||i===void 0?void 0:i.y,gg=((l=se.arrow)===null||l===void 0?void 0:l.centerOffset)!==0,[yg,hg]=c.exports.useState();pr(()=>{S&&hg(window.getComputedStyle(S).zIndex)},[S]);const{hasParent:vg,positionUpdateFns:On}=Xb(Zi,f),Er=!vg;c.exports.useLayoutEffect(()=>{if(!Er)return On.add(tt),()=>{On.delete(tt)}},[Er,On,tt]),c.exports.useLayoutEffect(()=>{Er&&Lo&&Array.from(On).reverse().forEach(Pl=>requestAnimationFrame(Pl))},[Er,Lo,On]);const Ls={"data-side":Ts,"data-align":fg,...x,ref:D,style:{...x.style,animation:Lo?void 0:"none",opacity:(a=se.hide)!==null&&a!==void 0&&a.referenceHidden?0:void 0}};return c.exports.createElement("div",{ref:R,"data-radix-popper-content-wrapper":"",style:{position:I,left:0,top:0,transform:Lo?`translate3d(${Math.round(B)}px, ${Math.round(ie)}px, 0)`:"translate3d(0, -200%, 0)",minWidth:"max-content",zIndex:yg,["--radix-popper-transform-origin"]:[(u=se.transformOrigin)===null||u===void 0?void 0:u.x,(s=se.transformOrigin)===null||s===void 0?void 0:s.y].join(" ")}},c.exports.createElement(Gb,{scope:f,placedSide:Ts,onArrowChange:j,arrowX:pg,arrowY:mg,shouldHideArrow:gg},Er?c.exports.createElement(Yb,{scope:f,hasParent:!0,positionUpdateFns:On},c.exports.createElement(fr.div,Ls)):c.exports.createElement(fr.div,Ls)))});function Jb(e){return e!==void 0}function e0(e){return e!==null}const t0=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,l;const{placement:a,rects:u,middlewareData:s}=t,d=((n=s.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,g=d?0:e.arrowWidth,v=d?0:e.arrowHeight,[k,h]=Sm(a),w={start:"0%",center:"50%",end:"100%"}[h],p=((r=(o=s.arrow)===null||o===void 0?void 0:o.x)!==null&&r!==void 0?r:0)+g/2,m=((i=(l=s.arrow)===null||l===void 0?void 0:l.y)!==null&&i!==void 0?i:0)+v/2;let y="",b="";return k==="bottom"?(y=d?w:`${p}px`,b=`${-v}px`):k==="top"?(y=d?w:`${p}px`,b=`${u.floating.height+v}px`):k==="right"?(y=`${-v}px`,b=d?w:`${m}px`):k==="left"&&(y=`${u.floating.width+v}px`,b=d?w:`${m}px`),{data:{x:y,y:b}}}});function Sm(e){const[t,n="center"]=e.split("-");return[t,n]}const n0=Vb,r0=Qb,o0=Zb;function i0(e,t){return c.exports.useReducer((n,r)=>{const o=t[n][r];return o!=null?o:n},e)}const Po=e=>{const{present:t,children:n}=e,r=l0(t),o=typeof n=="function"?n({present:r.isPresent}):c.exports.Children.only(n),i=ct(r.ref,o.ref);return typeof n=="function"||r.isPresent?c.exports.cloneElement(o,{ref:i}):null};Po.displayName="Presence";function l0(e){const[t,n]=c.exports.useState(),r=c.exports.useRef({}),o=c.exports.useRef(e),i=c.exports.useRef("none"),l=e?"mounted":"unmounted",[a,u]=i0(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.exports.useEffect(()=>{const s=Xo(r.current);i.current=a==="mounted"?s:"none"},[a]),pr(()=>{const s=r.current,f=o.current;if(f!==e){const g=i.current,v=Xo(s);e?u("MOUNT"):v==="none"||(s==null?void 0:s.display)==="none"?u("UNMOUNT"):u(f&&g!==v?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,u]),pr(()=>{if(t){const s=d=>{const v=Xo(r.current).includes(d.animationName);d.target===t&&v&&_n.exports.flushSync(()=>u("ANIMATION_END"))},f=d=>{d.target===t&&(i.current=Xo(r.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",s),t.addEventListener("animationend",s),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",s),t.removeEventListener("animationend",s)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:c.exports.useCallback(s=>{s&&(r.current=getComputedStyle(s)),n(s)},[])}}function Xo(e){return(e==null?void 0:e.animationName)||"none"}const Pm=c.exports.forwardRef((e,t)=>{const{children:n,...r}=e,o=c.exports.Children.toArray(n),i=o.find(u0);if(i){const l=i.props.children,a=o.map(u=>u===i?c.exports.Children.count(l)>1?c.exports.Children.only(null):c.exports.isValidElement(l)?l.props.children:null:u);return c.exports.createElement(mu,K({},r,{ref:t}),c.exports.isValidElement(l)?c.exports.cloneElement(l,void 0,a):null)}return c.exports.createElement(mu,K({},r,{ref:t}),n)});Pm.displayName="Slot";const mu=c.exports.forwardRef((e,t)=>{const{children:n,...r}=e;return c.exports.isValidElement(n)?c.exports.cloneElement(n,{...s0(r,n.props),ref:vl(t,n.ref)}):c.exports.Children.count(n)>1?c.exports.Children.only(null):null});mu.displayName="SlotClone";const a0=({children:e})=>c.exports.createElement(c.exports.Fragment,null,e);function u0(e){return c.exports.isValidElement(e)&&e.type===a0}function s0(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function $m({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=c0({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r,a=et(n),u=c.exports.useCallback(s=>{if(i){const d=typeof s=="function"?s(e):s;d!==e&&a(d)}else o(s)},[i,e,o,a]);return[l,u]}function c0({defaultProp:e,onChange:t}){const n=c.exports.useState(e),[r]=n,o=c.exports.useRef(r),i=et(t);return c.exports.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}var d0=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Ln=new WeakMap,Zo=new WeakMap,Jo={},la=0,Om=function(e){return e&&(e.host||Om(e.parentNode))},f0=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Om(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return Boolean(n)})},p0=function(e,t,n,r){var o=f0(t,Array.isArray(e)?e:[e]);Jo[n]||(Jo[n]=new WeakMap);var i=Jo[n],l=[],a=new Set,u=new Set(o),s=function(d){!d||a.has(d)||(a.add(d),s(d.parentNode))};o.forEach(s);var f=function(d){!d||u.has(d)||Array.prototype.forEach.call(d.children,function(g){if(a.has(g))f(g);else{var v=g.getAttribute(r),k=v!==null&&v!=="false",h=(Ln.get(g)||0)+1,w=(i.get(g)||0)+1;Ln.set(g,h),i.set(g,w),l.push(g),h===1&&k&&Zo.set(g,!0),w===1&&g.setAttribute(n,"true"),k||g.setAttribute(r,"true")}})};return f(t),a.clear(),la++,function(){l.forEach(function(d){var g=Ln.get(d)-1,v=i.get(d)-1;Ln.set(d,g),i.set(d,v),g||(Zo.has(d)||d.removeAttribute(r),Zo.delete(d)),v||d.removeAttribute(n)}),la--,la||(Ln=new WeakMap,Ln=new WeakMap,Zo=new WeakMap,Jo={})}},Tm=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||d0(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),p0(r,o,n,"aria-hidden")):function(){return null}},Ce=function(){return Ce=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ce.apply(this,arguments)};function _s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Lm(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Gr="right-scroll-bar-position",Yr="width-before-scroll-bar",m0="with-scroll-bars-hidden",g0="--removed-body-scroll-bar-size";function y0(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function h0(e,t){var n=c.exports.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}function Im(e,t){return h0(t||null,function(n){return e.forEach(function(r){return y0(r,n)})})}var xl={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0=c.exports,b0=Symbol.for("react.element"),k0=Symbol.for("react.fragment"),w0=Object.prototype.hasOwnProperty,x0=v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E0={key:!0,ref:!0,__self:!0,__source:!0};function Dm(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)w0.call(t,r)&&!E0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:b0,type:e,key:i,ref:l,props:o,_owner:x0.current}}El.Fragment=k0;El.jsx=Dm;El.jsxs=Dm;(function(e){e.exports=El})(xl);const mr=xl.exports.Fragment,L=xl.exports.jsx,H=xl.exports.jsxs;function C0(e){return e}function _0(e,t){t===void 0&&(t=C0);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var l=t(i,r);return n.push(l),function(){n=n.filter(function(a){return a!==l})}},assignSyncMedium:function(i){for(r=!0;n.length;){var l=n;n=[],l.forEach(i)}n={push:function(a){return i(a)},filter:function(){return n}}},assignMedium:function(i){r=!0;var l=[];if(n.length){var a=n;n=[],a.forEach(i),l=n}var u=function(){var f=l;l=[],f.forEach(i)},s=function(){return Promise.resolve().then(u)};s(),n={push:function(f){l.push(f),s()},filter:function(f){return l=l.filter(f),n}}}};return o}function Rm(e){e===void 0&&(e={});var t=_0(null);return t.options=Ce({async:!0,ssr:!1},e),t}var Am=function(e){var t=e.sideCar,n=_s(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return L(r,{...Ce({},n)})};Am.isSideCarExport=!0;function Mm(e,t){return e.useMedium(t),Am}var Nm=Rm(),aa=function(){},Cl=c.exports.forwardRef(function(e,t){var n=c.exports.useRef(null),r=c.exports.useState({onScrollCapture:aa,onWheelCapture:aa,onTouchMoveCapture:aa}),o=r[0],i=r[1],l=e.forwardProps,a=e.children,u=e.className,s=e.removeScrollBar,f=e.enabled,d=e.shards,g=e.sideCar,v=e.noIsolation,k=e.inert,h=e.allowPinchZoom,w=e.as,p=w===void 0?"div":w,m=_s(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=g,b=Im([n,t]),x=Ce(Ce({},m),o);return H(mr,{children:[f&&L(y,{sideCar:Nm,removeScrollBar:s,shards:d,noIsolation:v,inert:k,setCallbacks:i,allowPinchZoom:!!h,lockRef:n}),l?c.exports.cloneElement(c.exports.Children.only(a),Ce(Ce({},x),{ref:b})):L(p,{...Ce({},x,{className:u,ref:b}),children:a})]})});Cl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Cl.classNames={fullWidth:Yr,zeroRight:Gr};var S0=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function P0(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=S0();return t&&e.setAttribute("nonce",t),e}function $0(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function O0(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var T0=function(){var e=0,t=null;return{add:function(n){e==0&&(t=P0())&&($0(t,n),O0(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},L0=function(){var e=T0();return function(t,n){c.exports.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Ss=function(){var e=L0(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},I0={left:0,top:0,right:0,gap:0},ua=function(e){return parseInt(e||"",10)||0},D0=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ua(n),ua(r),ua(o)]},R0=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return I0;var t=D0(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},A0=Ss(),M0=function(e,t,n,r){var o=e.left,i=e.top,l=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(m0,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Gr,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Yr,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Gr," .").concat(Gr,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Yr," .").concat(Yr,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(g0,": ").concat(a,`px;
  }
`)},Fm=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,i=c.exports.useMemo(function(){return R0(o)},[o]);return L(A0,{styles:M0(i,!t,o,n?"":"!important")})},gu=!1;if(typeof window<"u")try{var ei=Object.defineProperty({},"passive",{get:function(){return gu=!0,!0}});window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{gu=!1}var In=gu?{passive:!1}:!1,N0=function(e){return e.tagName==="TEXTAREA"},Km=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!N0(e)&&n[t]==="visible")},F0=function(e){return Km(e,"overflowY")},K0=function(e){return Km(e,"overflowX")},md=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=Hm(e,n);if(r){var o=zm(e,n),i=o[1],l=o[2];if(i>l)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},H0=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},z0=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Hm=function(e,t){return e==="v"?F0(t):K0(t)},zm=function(e,t){return e==="v"?H0(t):z0(t)},j0=function(e,t){return e==="h"&&t==="rtl"?-1:1},B0=function(e,t,n,r,o){var i=j0(e,window.getComputedStyle(t).direction),l=i*r,a=n.target,u=t.contains(a),s=!1,f=l>0,d=0,g=0;do{var v=zm(e,a),k=v[0],h=v[1],w=v[2],p=h-w-i*k;(k||p)&&Hm(e,a)&&(d+=p,g+=k),a=a.parentNode}while(!u&&a!==document.body||u&&(t.contains(a)||t===a));return(f&&(o&&d===0||!o&&l>d)||!f&&(o&&g===0||!o&&-l>g))&&(s=!0),s},ti=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},gd=function(e){return[e.deltaX,e.deltaY]},yd=function(e){return e&&"current"in e?e.current:e},U0=function(e,t){return e[0]===t[0]&&e[1]===t[1]},W0=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},V0=0,Dn=[];function q0(e){var t=c.exports.useRef([]),n=c.exports.useRef([0,0]),r=c.exports.useRef(),o=c.exports.useState(V0++)[0],i=c.exports.useState(function(){return Ss()})[0],l=c.exports.useRef(e);c.exports.useEffect(function(){l.current=e},[e]),c.exports.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var h=Lm([e.lockRef.current],(e.shards||[]).map(yd),!0).filter(Boolean);return h.forEach(function(w){return w.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),h.forEach(function(w){return w.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=c.exports.useCallback(function(h,w){if("touches"in h&&h.touches.length===2)return!l.current.allowPinchZoom;var p=ti(h),m=n.current,y="deltaX"in h?h.deltaX:m[0]-p[0],b="deltaY"in h?h.deltaY:m[1]-p[1],x,C=h.target,S=Math.abs(y)>Math.abs(b)?"h":"v";if("touches"in h&&S==="h"&&C.type==="range")return!1;var _=md(S,C);if(!_)return!0;if(_?x=S:(x=S==="v"?"h":"v",_=md(S,C)),!_)return!1;if(!r.current&&"changedTouches"in h&&(y||b)&&(r.current=x),!x)return!0;var D=r.current||x;return B0(D,w,h,D==="h"?y:b,!0)},[]),u=c.exports.useCallback(function(h){var w=h;if(!(!Dn.length||Dn[Dn.length-1]!==i)){var p="deltaY"in w?gd(w):ti(w),m=t.current.filter(function(x){return x.name===w.type&&x.target===w.target&&U0(x.delta,p)})[0];if(m&&m.should){w.cancelable&&w.preventDefault();return}if(!m){var y=(l.current.shards||[]).map(yd).filter(Boolean).filter(function(x){return x.contains(w.target)}),b=y.length>0?a(w,y[0]):!l.current.noIsolation;b&&w.cancelable&&w.preventDefault()}}},[]),s=c.exports.useCallback(function(h,w,p,m){var y={name:h,delta:w,target:p,should:m};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(b){return b!==y})},1)},[]),f=c.exports.useCallback(function(h){n.current=ti(h),r.current=void 0},[]),d=c.exports.useCallback(function(h){s(h.type,gd(h),h.target,a(h,e.lockRef.current))},[]),g=c.exports.useCallback(function(h){s(h.type,ti(h),h.target,a(h,e.lockRef.current))},[]);c.exports.useEffect(function(){return Dn.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:g}),document.addEventListener("wheel",u,In),document.addEventListener("touchmove",u,In),document.addEventListener("touchstart",f,In),function(){Dn=Dn.filter(function(h){return h!==i}),document.removeEventListener("wheel",u,In),document.removeEventListener("touchmove",u,In),document.removeEventListener("touchstart",f,In)}},[]);var v=e.removeScrollBar,k=e.inert;return H(mr,{children:[k?L(i,{styles:W0(o)}):null,v?L(Fm,{gapMode:"margin"}):null]})}const Q0=Mm(Nm,q0);var jm=c.exports.forwardRef(function(e,t){return L(Cl,{...Ce({},e,{ref:t,sideCar:Q0})})});jm.classNames=Cl.classNames;const G0=jm,Bm="Popover",[Um,Yk]=ws(Bm,[Cm]),Ps=Cm(),[Y0,$o]=Um(Bm),X0=e=>{const{__scopePopover:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:l=!1}=e,a=Ps(t),u=c.exports.useRef(null),[s,f]=c.exports.useState(!1),[d=!1,g]=$m({prop:r,defaultProp:o,onChange:i});return c.exports.createElement(n0,a,c.exports.createElement(Y0,{scope:t,contentId:ki(),triggerRef:u,open:d,onOpenChange:g,onOpenToggle:c.exports.useCallback(()=>g(v=>!v),[g]),hasCustomAnchor:s,onCustomAnchorAdd:c.exports.useCallback(()=>f(!0),[]),onCustomAnchorRemove:c.exports.useCallback(()=>f(!1),[]),modal:l},n))},Z0="PopoverTrigger",J0=c.exports.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,o=$o(Z0,n),i=Ps(n),l=ct(t,o.triggerRef),a=c.exports.createElement(fr.button,K({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Vm(o.open)},r,{ref:l,onClick:ze(e.onClick,o.onOpenToggle)}));return o.hasCustomAnchor?a:c.exports.createElement(r0,K({asChild:!0},i),a)}),e1="PopoverPortal",[Xk,t1]=Um(e1,{forceMount:void 0}),vo="PopoverContent",n1=c.exports.forwardRef((e,t)=>{const n=t1(vo,e.__scopePopover),{forceMount:r=n.forceMount,...o}=e,i=$o(vo,e.__scopePopover);return c.exports.createElement(Po,{present:r||i.open},i.modal?c.exports.createElement(r1,K({},o,{ref:t})):c.exports.createElement(o1,K({},o,{ref:t})))}),r1=c.exports.forwardRef((e,t)=>{const n=$o(vo,e.__scopePopover),r=c.exports.useRef(null),o=ct(t,r),i=c.exports.useRef(!1);return c.exports.useEffect(()=>{const l=r.current;if(l)return Tm(l)},[]),c.exports.createElement(G0,{as:Pm,allowPinchZoom:!0},c.exports.createElement(Wm,K({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ze(e.onCloseAutoFocus,l=>{var a;l.preventDefault(),i.current||(a=n.triggerRef.current)===null||a===void 0||a.focus()}),onPointerDownOutside:ze(e.onPointerDownOutside,l=>{const a=l.detail.originalEvent,u=a.button===0&&a.ctrlKey===!0,s=a.button===2||u;i.current=s},{checkForDefaultPrevented:!1}),onFocusOutside:ze(e.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1})})))}),o1=c.exports.forwardRef((e,t)=>{const n=$o(vo,e.__scopePopover),r=c.exports.useRef(!1);return c.exports.createElement(Wm,K({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var i;if((i=e.onCloseAutoFocus)===null||i===void 0||i.call(e,o),!o.defaultPrevented){var l;r.current||(l=n.triggerRef.current)===null||l===void 0||l.focus(),o.preventDefault()}r.current=!1},onInteractOutside:o=>{var i,l;(i=e.onInteractOutside)===null||i===void 0||i.call(e,o),o.defaultPrevented||(r.current=!0);const a=o.target;((l=n.triggerRef.current)===null||l===void 0?void 0:l.contains(a))&&o.preventDefault()}}))}),Wm=c.exports.forwardRef((e,t)=>{const{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,disableOutsidePointerEvents:l,onEscapeKeyDown:a,onPointerDownOutside:u,onFocusOutside:s,onInteractOutside:f,...d}=e,g=$o(vo,n),v=Ps(n);return fm(),c.exports.createElement(nb,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},c.exports.createElement(Jv,{asChild:!0,disableOutsidePointerEvents:l,onInteractOutside:f,onEscapeKeyDown:a,onPointerDownOutside:u,onFocusOutside:s,onDismiss:()=>g.onOpenChange(!1)},c.exports.createElement(o0,K({"data-state":Vm(g.open),role:"dialog",id:g.contentId},v,d,{ref:t,style:{...d.style,["--radix-popover-content-transform-origin"]:"var(--radix-popper-transform-origin)"}}))))});function Vm(e){return e?"open":"closed"}const i1=X0,l1=J0,a1=n1,$s=c.exports.forwardRef((e,t)=>{const{children:n,...r}=e,o=c.exports.Children.toArray(n),i=o.find(s1);if(i){const l=i.props.children,a=o.map(u=>u===i?c.exports.Children.count(l)>1?c.exports.Children.only(null):c.exports.isValidElement(l)?l.props.children:null:u);return c.exports.createElement(yu,K({},r,{ref:t}),c.exports.isValidElement(l)?c.exports.cloneElement(l,void 0,a):null)}return c.exports.createElement(yu,K({},r,{ref:t}),n)});$s.displayName="Slot";const yu=c.exports.forwardRef((e,t)=>{const{children:n,...r}=e;return c.exports.isValidElement(n)?c.exports.cloneElement(n,{...c1(r,n.props),ref:vl(t,n.ref)}):c.exports.Children.count(n)>1?c.exports.Children.only(null):null});yu.displayName="SlotClone";const u1=({children:e})=>c.exports.createElement(c.exports.Fragment,null,e);function s1(e){return c.exports.isValidElement(e)&&e.type===u1}function c1(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?n[r]=(...a)=>{i==null||i(...a),o==null||o(...a)}:r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const d1=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],_l=d1.reduce((e,t)=>{const n=c.exports.forwardRef((r,o)=>{const{asChild:i,...l}=r,a=i?$s:t;return c.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),c.exports.createElement(a,K({},l,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function f1(e,t){e&&_n.exports.flushSync(()=>e.dispatchEvent(t))}function p1(e){const t=et(e);c.exports.useEffect(()=>{const n=r=>{r.key==="Escape"&&t(r)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[t])}const hu="dismissableLayer.update",m1="dismissableLayer.pointerDownOutside",g1="dismissableLayer.focusOutside";let hd;const y1=c.exports.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),h1=c.exports.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:l,onDismiss:a,...u}=e,s=c.exports.useContext(y1),[f,d]=c.exports.useState(null),[,g]=c.exports.useState({}),v=ct(t,C=>d(C)),k=Array.from(s.layers),[h]=[...s.layersWithOutsidePointerEventsDisabled].slice(-1),w=k.indexOf(h),p=f?k.indexOf(f):-1,m=s.layersWithOutsidePointerEventsDisabled.size>0,y=p>=w,b=v1(C=>{const S=C.target,_=[...s.branches].some(D=>D.contains(S));!y||_||(o==null||o(C),l==null||l(C),C.defaultPrevented||a==null||a())}),x=b1(C=>{const S=C.target;[...s.branches].some(D=>D.contains(S))||(i==null||i(C),l==null||l(C),C.defaultPrevented||a==null||a())});return p1(C=>{p===s.layers.size-1&&(r==null||r(C),!C.defaultPrevented&&a&&(C.preventDefault(),a()))}),c.exports.useEffect(()=>{if(!!f)return n&&(s.layersWithOutsidePointerEventsDisabled.size===0&&(hd=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),s.layersWithOutsidePointerEventsDisabled.add(f)),s.layers.add(f),vd(),()=>{n&&s.layersWithOutsidePointerEventsDisabled.size===1&&(document.body.style.pointerEvents=hd)}},[f,n,s]),c.exports.useEffect(()=>()=>{!f||(s.layers.delete(f),s.layersWithOutsidePointerEventsDisabled.delete(f),vd())},[f,s]),c.exports.useEffect(()=>{const C=()=>g({});return document.addEventListener(hu,C),()=>document.removeEventListener(hu,C)},[]),c.exports.createElement(_l.div,K({},u,{ref:v,style:{pointerEvents:m?y?"auto":"none":void 0,...e.style},onFocusCapture:ze(e.onFocusCapture,x.onFocusCapture),onBlurCapture:ze(e.onBlurCapture,x.onBlurCapture),onPointerDownCapture:ze(e.onPointerDownCapture,b.onPointerDownCapture)}))});function v1(e){const t=et(e),n=c.exports.useRef(!1),r=c.exports.useRef(()=>{});return c.exports.useEffect(()=>{const o=l=>{if(l.target&&!n.current){let s=function(){qm(m1,t,u,{discrete:!0})};var a=s;const u={originalEvent:l};l.pointerType==="touch"?(document.removeEventListener("click",r.current),r.current=s,document.addEventListener("click",r.current,{once:!0})):s()}n.current=!1},i=window.setTimeout(()=>{document.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(i),document.removeEventListener("pointerdown",o),document.removeEventListener("click",r.current)}},[t]),{onPointerDownCapture:()=>n.current=!0}}function b1(e){const t=et(e),n=c.exports.useRef(!1);return c.exports.useEffect(()=>{const r=o=>{o.target&&!n.current&&qm(g1,t,{originalEvent:o},{discrete:!1})};return document.addEventListener("focusin",r),()=>document.removeEventListener("focusin",r)},[t]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function vd(){const e=new CustomEvent(hu);document.dispatchEvent(e)}function qm(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?f1(o,i):o.dispatchEvent(i)}const sa="focusScope.autoFocusOnMount",ca="focusScope.autoFocusOnUnmount",bd={bubbles:!1,cancelable:!0},k1=c.exports.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...l}=e,[a,u]=c.exports.useState(null),s=et(o),f=et(i),d=c.exports.useRef(null),g=ct(t,h=>u(h)),v=c.exports.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.exports.useEffect(()=>{if(r){let p=function(y){if(v.paused||!a)return;const b=y.target;a.contains(b)?d.current=b:pn(d.current,{select:!0})},m=function(y){v.paused||!a||a.contains(y.relatedTarget)||pn(d.current,{select:!0})};var h=p,w=m;return document.addEventListener("focusin",p),document.addEventListener("focusout",m),()=>{document.removeEventListener("focusin",p),document.removeEventListener("focusout",m)}}},[r,a,v.paused]),c.exports.useEffect(()=>{if(a){wd.add(v);const h=document.activeElement;if(!a.contains(h)){const p=new CustomEvent(sa,bd);a.addEventListener(sa,s),a.dispatchEvent(p),p.defaultPrevented||(w1(S1(Qm(a)),{select:!0}),document.activeElement===h&&pn(a))}return()=>{a.removeEventListener(sa,s),setTimeout(()=>{const p=new CustomEvent(ca,bd);a.addEventListener(ca,f),a.dispatchEvent(p),p.defaultPrevented||pn(h!=null?h:document.body,{select:!0}),a.removeEventListener(ca,f),wd.remove(v)},0)}}},[a,s,f,v]);const k=c.exports.useCallback(h=>{if(!n&&!r||v.paused)return;const w=h.key==="Tab"&&!h.altKey&&!h.ctrlKey&&!h.metaKey,p=document.activeElement;if(w&&p){const m=h.currentTarget,[y,b]=x1(m);y&&b?!h.shiftKey&&p===b?(h.preventDefault(),n&&pn(y,{select:!0})):h.shiftKey&&p===y&&(h.preventDefault(),n&&pn(b,{select:!0})):p===m&&h.preventDefault()}},[n,r,v.paused]);return c.exports.createElement(_l.div,K({tabIndex:-1},l,{ref:g,onKeyDown:k}))});function w1(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(pn(r,{select:t}),document.activeElement!==n)return}function x1(e){const t=Qm(e),n=kd(t,e),r=kd(t.reverse(),e);return[n,r]}function Qm(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function kd(e,t){for(const n of e)if(!E1(n,{upTo:t}))return n}function E1(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function C1(e){return e instanceof HTMLInputElement&&"select"in e}function pn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&C1(e)&&t&&e.select()}}const wd=_1();function _1(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=xd(e,t),e.unshift(t)},remove(t){var n;e=xd(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function xd(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function S1(e){return e.filter(t=>t.tagName!=="A")}const P1=c.exports.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?Kh.createPortal(c.exports.createElement(_l.div,K({},o,{ref:t})),r):null});var Gm=Rm(),da=function(){},Sl=c.exports.forwardRef(function(e,t){var n=c.exports.useRef(null),r=c.exports.useState({onScrollCapture:da,onWheelCapture:da,onTouchMoveCapture:da}),o=r[0],i=r[1],l=e.forwardProps,a=e.children,u=e.className,s=e.removeScrollBar,f=e.enabled,d=e.shards,g=e.sideCar,v=e.noIsolation,k=e.inert,h=e.allowPinchZoom,w=e.as,p=w===void 0?"div":w,m=_s(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=g,b=Im([n,t]),x=Ce(Ce({},m),o);return H(mr,{children:[f&&L(y,{sideCar:Gm,removeScrollBar:s,shards:d,noIsolation:v,inert:k,setCallbacks:i,allowPinchZoom:!!h,lockRef:n}),l?c.exports.cloneElement(c.exports.Children.only(a),Ce(Ce({},x),{ref:b})):L(p,{...Ce({},x,{className:u,ref:b}),children:a})]})});Sl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Sl.classNames={fullWidth:Yr,zeroRight:Gr};var vu=!1;if(typeof window<"u")try{var ni=Object.defineProperty({},"passive",{get:function(){return vu=!0,!0}});window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{vu=!1}var Rn=vu?{passive:!1}:!1,$1=function(e){var t=window.getComputedStyle(e);return t.overflowY!=="hidden"&&!(t.overflowY===t.overflowX&&t.overflowY==="visible")},O1=function(e){var t=window.getComputedStyle(e);return t.overflowX!=="hidden"&&!(t.overflowY===t.overflowX&&t.overflowX==="visible")},Ed=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=Ym(e,n);if(r){var o=Xm(e,n),i=o[1],l=o[2];if(i>l)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},T1=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},L1=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ym=function(e,t){return e==="v"?$1(t):O1(t)},Xm=function(e,t){return e==="v"?T1(t):L1(t)},I1=function(e,t){return e==="h"&&t==="rtl"?-1:1},D1=function(e,t,n,r,o){var i=I1(e,window.getComputedStyle(t).direction),l=i*r,a=n.target,u=t.contains(a),s=!1,f=l>0,d=0,g=0;do{var v=Xm(e,a),k=v[0],h=v[1],w=v[2],p=h-w-i*k;(k||p)&&Ym(e,a)&&(d+=p,g+=k),a=a.parentNode}while(!u&&a!==document.body||u&&(t.contains(a)||t===a));return(f&&(o&&d===0||!o&&l>d)||!f&&(o&&g===0||!o&&-l>g))&&(s=!0),s},ri=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Cd=function(e){return[e.deltaX,e.deltaY]},_d=function(e){return e&&"current"in e?e.current:e},R1=function(e,t){return e[0]===t[0]&&e[1]===t[1]},A1=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},M1=0,An=[];function N1(e){var t=c.exports.useRef([]),n=c.exports.useRef([0,0]),r=c.exports.useRef(),o=c.exports.useState(M1++)[0],i=c.exports.useState(function(){return Ss()})[0],l=c.exports.useRef(e);c.exports.useEffect(function(){l.current=e},[e]),c.exports.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var h=Lm([e.lockRef.current],(e.shards||[]).map(_d),!0).filter(Boolean);return h.forEach(function(w){return w.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),h.forEach(function(w){return w.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=c.exports.useCallback(function(h,w){if("touches"in h&&h.touches.length===2)return!l.current.allowPinchZoom;var p=ri(h),m=n.current,y="deltaX"in h?h.deltaX:m[0]-p[0],b="deltaY"in h?h.deltaY:m[1]-p[1],x,C=h.target,S=Math.abs(y)>Math.abs(b)?"h":"v";if("touches"in h&&S==="h"&&C.type==="range")return!1;var _=Ed(S,C);if(!_)return!0;if(_?x=S:(x=S==="v"?"h":"v",_=Ed(S,C)),!_)return!1;if(!r.current&&"changedTouches"in h&&(y||b)&&(r.current=x),!x)return!0;var D=r.current||x;return D1(D,w,h,D==="h"?y:b,!0)},[]),u=c.exports.useCallback(function(h){var w=h;if(!(!An.length||An[An.length-1]!==i)){var p="deltaY"in w?Cd(w):ri(w),m=t.current.filter(function(x){return x.name===w.type&&x.target===w.target&&R1(x.delta,p)})[0];if(m&&m.should){w.preventDefault();return}if(!m){var y=(l.current.shards||[]).map(_d).filter(Boolean).filter(function(x){return x.contains(w.target)}),b=y.length>0?a(w,y[0]):!l.current.noIsolation;b&&w.preventDefault()}}},[]),s=c.exports.useCallback(function(h,w,p,m){var y={name:h,delta:w,target:p,should:m};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(b){return b!==y})},1)},[]),f=c.exports.useCallback(function(h){n.current=ri(h),r.current=void 0},[]),d=c.exports.useCallback(function(h){s(h.type,Cd(h),h.target,a(h,e.lockRef.current))},[]),g=c.exports.useCallback(function(h){s(h.type,ri(h),h.target,a(h,e.lockRef.current))},[]);c.exports.useEffect(function(){return An.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:g}),document.addEventListener("wheel",u,Rn),document.addEventListener("touchmove",u,Rn),document.addEventListener("touchstart",f,Rn),function(){An=An.filter(function(h){return h!==i}),document.removeEventListener("wheel",u,Rn),document.removeEventListener("touchmove",u,Rn),document.removeEventListener("touchstart",f,Rn)}},[]);var v=e.removeScrollBar,k=e.inert;return H(mr,{children:[k?L(i,{styles:A1(o)}):null,v?L(Fm,{gapMode:"margin"}):null]})}const F1=Mm(Gm,N1);var Zm=c.exports.forwardRef(function(e,t){return L(Sl,{...Ce({},e,{ref:t,sideCar:F1})})});Zm.classNames=Sl.classNames;const K1=Zm,Jm="Dialog",[eg,Zk]=ws(Jm),[H1,$n]=eg(Jm),z1=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:l=!0}=e,a=c.exports.useRef(null),u=c.exports.useRef(null),[s=!1,f]=$m({prop:r,defaultProp:o,onChange:i});return c.exports.createElement(H1,{scope:t,triggerRef:a,contentRef:u,contentId:ki(),titleId:ki(),descriptionId:ki(),open:s,onOpenChange:f,onOpenToggle:c.exports.useCallback(()=>f(d=>!d),[f]),modal:l},n)},tg="DialogPortal",[j1,ng]=eg(tg,{forceMount:void 0}),B1=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=$n(tg,t);return c.exports.createElement(j1,{scope:t,forceMount:n},c.exports.Children.map(r,l=>c.exports.createElement(Po,{present:n||i.open},c.exports.createElement(P1,{asChild:!0,container:o},l))))},bu="DialogOverlay",U1=c.exports.forwardRef((e,t)=>{const n=ng(bu,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=$n(bu,e.__scopeDialog);return i.modal?c.exports.createElement(Po,{present:r||i.open},c.exports.createElement(W1,K({},o,{ref:t}))):null}),W1=c.exports.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=$n(bu,n);return c.exports.createElement(K1,{as:$s,allowPinchZoom:!0,shards:[o.contentRef]},c.exports.createElement(_l.div,K({"data-state":og(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),bo="DialogContent",V1=c.exports.forwardRef((e,t)=>{const n=ng(bo,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=$n(bo,e.__scopeDialog);return c.exports.createElement(Po,{present:r||i.open},i.modal?c.exports.createElement(q1,K({},o,{ref:t})):c.exports.createElement(Q1,K({},o,{ref:t})))}),q1=c.exports.forwardRef((e,t)=>{const n=$n(bo,e.__scopeDialog),r=c.exports.useRef(null),o=ct(t,n.contentRef,r);return c.exports.useEffect(()=>{const i=r.current;if(i)return Tm(i)},[]),c.exports.createElement(rg,K({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ze(e.onCloseAutoFocus,i=>{var l;i.preventDefault(),(l=n.triggerRef.current)===null||l===void 0||l.focus()}),onPointerDownOutside:ze(e.onPointerDownOutside,i=>{const l=i.detail.originalEvent,a=l.button===0&&l.ctrlKey===!0;(l.button===2||a)&&i.preventDefault()}),onFocusOutside:ze(e.onFocusOutside,i=>i.preventDefault())}))}),Q1=c.exports.forwardRef((e,t)=>{const n=$n(bo,e.__scopeDialog),r=c.exports.useRef(!1);return c.exports.createElement(rg,K({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var i;if((i=e.onCloseAutoFocus)===null||i===void 0||i.call(e,o),!o.defaultPrevented){var l;r.current||(l=n.triggerRef.current)===null||l===void 0||l.focus(),o.preventDefault()}r.current=!1},onInteractOutside:o=>{var i,l;(i=e.onInteractOutside)===null||i===void 0||i.call(e,o),o.defaultPrevented||(r.current=!0);const a=o.target;((l=n.triggerRef.current)===null||l===void 0?void 0:l.contains(a))&&o.preventDefault()}}))}),rg=c.exports.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...l}=e,a=$n(bo,n),u=c.exports.useRef(null),s=ct(t,u);return fm(),c.exports.createElement(c.exports.Fragment,null,c.exports.createElement(k1,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},c.exports.createElement(h1,K({role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":og(a.open)},l,{ref:s,onDismiss:()=>a.onOpenChange(!1)}))),!1)});function og(e){return e?"open":"closed"}const G1=z1,Y1=B1,X1=U1,Z1=V1;var Sd=1,J1=.9,ek=.3,fa=.1,tk=0,pa=.999,nk=.9999,rk=.99,Pd=/[\\\/\-_+.# \t"@\[\(\{&]/,ok=/[\\\/\-_+.# \t"@\[\(\{&]/g;function ku(e,t,n,r,o,i){if(i===t.length)return o===e.length?Sd:rk;for(var l=r.charAt(i),a=n.indexOf(l,o),u=0,s,f,d;a>=0;)s=ku(e,t,n,r,a+1,i+1),s>u&&(a===o?s*=Sd:Pd.test(e.charAt(a-1))?(s*=J1,d=e.slice(o,a-1).match(ok),d&&o>0&&(s*=Math.pow(pa,d.length))):Pd.test(e.slice(o,a-1))?(s*=tk,o>0&&(s*=Math.pow(pa,a-o))):(s*=ek,o>0&&(s*=Math.pow(pa,a-o))),e.charAt(a)!==t.charAt(i)&&(s*=nk)),s<fa&&n.charAt(a-1)===r.charAt(i+1)&&n.charAt(a-1)!==r.charAt(i)&&(f=ku(e,t,n,r,a+1,i+2),f*fa>s&&(s=f*fa)),s>u&&(u=s),a=n.indexOf(l,a+1);return u}function ik(e,t){return ku(e,t,e.toLowerCase(),t.toLowerCase(),0,0)}var lk=ik,ak='[cmdk-list-sizer=""]',Ir='[cmdk-group=""]',ma='[cmdk-group-items=""]',uk='[cmdk-group-heading=""]',ig='[cmdk-item=""]',$d=`${ig}:not([aria-disabled="true"])`,wu="cmdk-item-select",Kt="data-value",sk=(e,t)=>lk(e,t),lg=c.exports.createContext(void 0),Oo=()=>c.exports.useContext(lg),ag=c.exports.createContext(void 0),Os=()=>c.exports.useContext(ag),ug=c.exports.createContext(void 0),sg=c.exports.forwardRef((e,t)=>{let n=c.exports.useRef(null),r=Fn(()=>({search:"",value:"",filtered:{count:0,items:new Map,groups:new Set}})),o=Fn(()=>new Set),i=Fn(()=>new Map),l=Fn(()=>new Map),a=Fn(()=>new Set),u=cg(e),{label:s,children:f,value:d,onValueChange:g,filter:v,shouldFilter:k,...h}=e,w=c.exports.useId(),p=c.exports.useId(),m=c.exports.useId(),y=kk();wr(()=>{if(d!==void 0){let E=d.trim().toLowerCase();r.current.value=E,y(6,A),b.emit()}},[d]);let b=c.exports.useMemo(()=>({subscribe:E=>(a.current.add(E),()=>a.current.delete(E)),snapshot:()=>r.current,setState:(E,$,R)=>{var I,B,ie;if(!Object.is(r.current[E],$)){if(r.current[E]=$,E==="search")D(),S(),y(1,()=>{_(),b.emit()});else if(E==="value")if(((I=u.current)==null?void 0:I.value)!==void 0){(ie=(B=u.current).onValueChange)==null||ie.call(B,$);return}else R||y(5,A);b.emit()}},emit:()=>{a.current.forEach(E=>E())}}),[]),x=c.exports.useMemo(()=>({value:(E,$)=>{$!==l.current.get(E)&&(l.current.set(E,$),r.current.filtered.items.set(E,C($)),y(2,()=>{S(),b.emit()}))},item:(E,$)=>(o.current.add(E),$&&(i.current.has($)?i.current.get($).add(E):i.current.set($,new Set([E]))),y(3,()=>{D(),S(),r.current.value||_(),b.emit()}),()=>{l.current.delete(E),o.current.delete(E),r.current.filtered.items.delete(E),y(4,()=>{D(),_(),b.emit()})}),group:E=>(i.current.has(E)||i.current.set(E,new Set),()=>{l.current.delete(E),i.current.delete(E)}),filter:()=>u.current.shouldFilter,label:s||e["aria-label"],listId:w,inputId:m,labelId:p}),[]);function C(E){var I;var $;let R=(I=($=u.current)==null?void 0:$.filter)!=null?I:sk;return E?R(E,r.current.search):0}function S(){if(!n.current||!r.current.search||u.current.shouldFilter===!1)return;let E=r.current.filtered.items,$=[];r.current.filtered.groups.forEach(I=>{let B=i.current.get(I),ie=0;B.forEach(kt=>{let se=E.get(kt);ie=Math.max(se,ie)}),$.push([I,ie])});let R=n.current.querySelector(ak);ee().sort((I,B)=>{var se,tt;let ie=I.getAttribute(Kt),kt=B.getAttribute(Kt);return((se=E.get(kt))!=null?se:0)-((tt=E.get(ie))!=null?tt:0)}).forEach(I=>{let B=I.closest(ma);B?B.appendChild(I.parentElement===B?I:I.closest(`${ma} > *`)):R.appendChild(I.parentElement===R?I:I.closest(`${ma} > *`))}),$.sort((I,B)=>B[1]-I[1]).forEach(I=>{let B=n.current.querySelector(`${Ir}[${Kt}="${I[0]}"]`);B==null||B.parentElement.appendChild(B)})}function _(){let E=ee().find(R=>!R.ariaDisabled),$=E==null?void 0:E.getAttribute(Kt);r.current.value=$||void 0}function D(){if(!r.current.search||u.current.shouldFilter===!1){r.current.filtered.count=o.current.size;return}r.current.filtered.groups=new Set;let E=0;for(let $ of o.current){let R=l.current.get($),I=C(R);r.current.filtered.items.set($,I),I>0&&E++}for(let[$,R]of i.current)for(let I of R)if(r.current.filtered.items.get(I)>0){r.current.filtered.groups.add($);break}r.current.filtered.count=E}function A(){var E,$,R;let I=j();I&&(((E=I.parentElement)==null?void 0:E.firstChild)===I&&((R=($=I.closest(Ir))==null?void 0:$.querySelector(uk))==null||R.scrollIntoView({block:"nearest"})),I.scrollIntoView({block:"nearest"}))}function j(){return n.current.querySelector(`${ig}[aria-selected="true"]`)}function ee(){return Array.from(n.current.querySelectorAll($d))}function be(E){let $=ee()[E];$&&b.setState("value",$.getAttribute(Kt))}function Se(E){let $=j(),R=ee(),I=R.findIndex(ie=>ie===$),B=R[I+E];B&&b.setState("value",B.getAttribute(Kt))}function Mt(E){let $=j(),R=$==null?void 0:$.closest(Ir),I;for(;R&&!I;)R=E>0?vk(R,Ir):bk(R,Ir),I=R==null?void 0:R.querySelector($d);I?b.setState("value",I.getAttribute(Kt)):Se(E)}let Nt=()=>be(ee().length-1),bt=E=>{E.preventDefault(),E.metaKey?Nt():E.altKey?Mt(1):Se(1)},O=E=>{E.preventDefault(),E.metaKey?be(0):E.altKey?Mt(-1):Se(-1)};return c.exports.createElement("div",{ref:To([n,t]),...h,"cmdk-root":"",onKeyDown:E=>{var $;if(($=h.onKeyDown)==null||$.call(h,E),!E.defaultPrevented)switch(E.key){case"n":case"j":{E.ctrlKey&&bt(E);break}case"ArrowDown":{bt(E);break}case"p":case"k":{E.ctrlKey&&O(E);break}case"ArrowUp":{O(E);break}case"Home":{E.preventDefault(),be(0);break}case"End":{E.preventDefault(),Nt();break}case"Enter":{E.preventDefault();let R=j();if(R){let I=new Event(wu);R.dispatchEvent(I)}}}}},c.exports.createElement("label",{"cmdk-label":"",htmlFor:x.inputId,id:x.labelId,style:wk},s),c.exports.createElement(ag.Provider,{value:b},c.exports.createElement(lg.Provider,{value:x},f)))}),ck=c.exports.forwardRef((e,t)=>{let n=c.exports.useId(),r=c.exports.useRef(null),o=c.exports.useContext(ug),i=Oo(),l=cg(e);wr(()=>i.item(n,o),[]);let a=dg(n,r,[e.value,e.children,r]),u=Os(),s=gr(p=>p.value&&p.value===a.current),f=gr(p=>i.filter()===!1?!0:p.search?p.filtered.items.get(n)>0:!0);c.exports.useEffect(()=>{let p=r.current;if(!(!p||e.disabled))return p.addEventListener(wu,d),()=>p.removeEventListener(wu,d)},[f,e.onSelect,e.disabled]);function d(){var p,m;(m=(p=l.current).onSelect)==null||m.call(p,a.current)}function g(){u.setState("value",a.current,!0)}if(!f)return null;let{disabled:v,value:k,onSelect:h,...w}=e;return c.exports.createElement("div",{ref:To([r,t]),...w,"cmdk-item":"",role:"option","aria-disabled":v||void 0,"aria-selected":s||void 0,onPointerMove:v?void 0:g,onClick:v?void 0:d},e.children)}),dk=c.exports.forwardRef((e,t)=>{let{heading:n,children:r,...o}=e,i=c.exports.useId(),l=c.exports.useRef(null),a=c.exports.useRef(null),u=c.exports.useId(),s=Oo(),f=gr(g=>s.filter()===!1?!0:g.search?g.filtered.groups.has(i):!0);wr(()=>s.group(i),[]),dg(i,l,[e.value,e.heading,a]);let d=c.exports.createElement(ug.Provider,{value:i},r);return c.exports.createElement("div",{ref:To([l,t]),...o,"cmdk-group":"",role:"presentation",hidden:f?void 0:!0},n&&c.exports.createElement("div",{ref:a,"cmdk-group-heading":"","aria-hidden":!0,id:u},n),c.exports.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?u:void 0},d))}),fk=c.exports.forwardRef((e,t)=>{let{alwaysRender:n,...r}=e,o=c.exports.useRef(null),i=gr(l=>!l.search);return!n&&!i?null:c.exports.createElement("div",{ref:To([o,t]),...r,"cmdk-separator":"",role:"separator"})}),pk=c.exports.forwardRef((e,t)=>{let{onValueChange:n,...r}=e,o=e.value!=null,i=Os(),l=gr(u=>u.search),a=Oo();return c.exports.useEffect(()=>{e.value!=null&&i.setState("search",e.value)},[e.value]),c.exports.createElement("input",{ref:t,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":a.listId,"aria-labelledby":a.labelId,id:a.inputId,type:"text",value:o?e.value:l,onChange:u=>{o||i.setState("search",u.target.value),n==null||n(u.target.value)}})}),mk=c.exports.forwardRef((e,t)=>{let{children:n,...r}=e,o=c.exports.useRef(null),i=c.exports.useRef(null),l=Oo();return c.exports.useEffect(()=>{if(i.current&&o.current){let a=i.current,u=o.current,s=new ResizeObserver(()=>{let f=a.getBoundingClientRect().height;u.style.setProperty("--cmdk-list-height",f.toFixed(1)+"px")});return s.observe(a),()=>s.unobserve(a)}},[]),c.exports.createElement("div",{ref:To([o,t]),...r,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:l.listId,"aria-labelledby":l.inputId},c.exports.createElement("div",{ref:i,"cmdk-list-sizer":""},n))}),gk=c.exports.forwardRef((e,t)=>{let{open:n,onOpenChange:r,...o}=e;return c.exports.createElement(G1,{open:n,onOpenChange:r},c.exports.createElement(Y1,null,c.exports.createElement(X1,{"cmdk-overlay":""}),c.exports.createElement(Z1,{"aria-label":e.label,"cmdk-dialog":""},c.exports.createElement(sg,{ref:t,...o}))))}),yk=c.exports.forwardRef((e,t)=>{let n=c.exports.useRef(!0),r=gr(o=>o.filtered.count===0);return c.exports.useEffect(()=>{n.current=!1},[]),n.current||!r?null:c.exports.createElement("div",{ref:t,...e,"cmdk-empty":"",role:"presentation"})}),hk=c.exports.forwardRef((e,t)=>{let{progress:n,children:r,...o}=e;return c.exports.createElement("div",{ref:t,...o,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},c.exports.createElement("div",{"aria-hidden":!0},r))}),Oe=Object.assign(sg,{List:mk,Item:ck,Input:pk,Group:dk,Separator:fk,Dialog:gk,Empty:yk,Loading:hk});function vk(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function bk(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}function cg(e){let t=c.exports.useRef(e);return wr(()=>{t.current=e}),t}var wr=typeof window>"u"?c.exports.useEffect:c.exports.useLayoutEffect;function Fn(e){let t=c.exports.useRef();return t.current===void 0&&(t.current=e()),t}function To(e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}function gr(e){let t=Os(),n=()=>e(t.snapshot());return c.exports.useSyncExternalStore(t.subscribe,n,n)}function dg(e,t,n){let r=c.exports.useRef(),o=Oo();return wr(()=>{var i;let l=(()=>{var a;for(let u of n){if(typeof u=="string")return u.trim().toLowerCase();if(typeof u=="object"&&"current"in u&&u.current)return(a=u.current.textContent)==null?void 0:a.trim().toLowerCase()}})();o.value(e,l),(i=t.current)==null||i.setAttribute(Kt,l),r.current=l}),r}var kk=()=>{let[e,t]=c.exports.useState(),n=Fn(()=>new Map);return wr(()=>{n.current.forEach(r=>r()),n.current=new Map},[e]),(r,o)=>{n.current.set(r,o),t({})}},wk={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};function xr(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var xk=["color"],Ek=c.exports.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=xr(e,xk);return c.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),c.exports.createElement("path",{d:"M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Ck=["color"],_k=c.exports.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=xr(e,Ck);return c.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),c.exports.createElement("path",{d:"M14.7649 6.07596C14.9991 6.22231 15.0703 6.53079 14.9239 6.76495C14.4849 7.46743 13.9632 8.10645 13.3702 8.66305L14.5712 9.86406C14.7664 10.0593 14.7664 10.3759 14.5712 10.5712C14.3759 10.7664 14.0593 10.7664 13.8641 10.5712L12.6011 9.30817C11.805 9.90283 10.9089 10.3621 9.93375 10.651L10.383 12.3277C10.4544 12.5944 10.2961 12.8685 10.0294 12.94C9.76267 13.0115 9.4885 12.8532 9.41704 12.5865L8.95917 10.8775C8.48743 10.958 8.00036 10.9999 7.50001 10.9999C6.99965 10.9999 6.51257 10.958 6.04082 10.8775L5.58299 12.5864C5.51153 12.8532 5.23737 13.0115 4.97064 12.94C4.7039 12.8686 4.5456 12.5944 4.61706 12.3277L5.06625 10.651C4.09111 10.3621 3.19503 9.90282 2.3989 9.30815L1.1359 10.5712C0.940638 10.7664 0.624058 10.7664 0.428798 10.5712C0.233537 10.3759 0.233537 10.0593 0.428798 9.86405L1.62982 8.66303C1.03682 8.10643 0.515113 7.46742 0.0760677 6.76495C-0.0702867 6.53079 0.000898544 6.22231 0.235065 6.07596C0.469231 5.9296 0.777703 6.00079 0.924058 6.23496C1.40354 7.00213 1.989 7.68057 2.66233 8.2427C2.67315 8.25096 2.6837 8.25972 2.69397 8.26898C4.00897 9.35527 5.65537 9.99991 7.50001 9.99991C10.3078 9.99991 12.6564 8.5063 14.076 6.23495C14.2223 6.00079 14.5308 5.9296 14.7649 6.07596Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Sk=["color"],Pk=c.exports.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=xr(e,Sk);return c.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),c.exports.createElement("path",{d:"M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),$k=["color"],Ok=c.exports.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=xr(e,$k);return c.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),c.exports.createElement("path",{d:"M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Tk=["color"],Lk=c.exports.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=xr(e,Tk);return c.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),c.exports.createElement("path",{d:"M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Ik=["color"],Dk=c.exports.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=xr(e,Ik);return c.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),c.exports.createElement("path",{d:"M12.3536 1.14645C12.1583 0.951184 11.8417 0.951184 11.6464 1.14645C11.4512 1.34171 11.4512 1.65829 11.6464 1.85355L12.7929 3H12C10.7037 3 9.71111 3.58423 8.87248 4.38931C8.20065 5.03427 7.59349 5.85684 6.99461 6.6682C6.86287 6.84668 6.73154 7.02462 6.6 7.2C5.10874 9.18835 3.49037 11 0.5 11C0.223858 11 0 11.2239 0 11.5C0 11.7761 0.223858 12 0.5 12C4.00963 12 5.89126 9.81165 7.4 7.8C7.54367 7.60845 7.6832 7.41962 7.81996 7.23454L7.82005 7.23443L7.82006 7.23441C8.41674 6.42695 8.96069 5.69085 9.56502 5.11069C10.2889 4.41577 11.0463 4 12 4H12.7929L11.6464 5.14645C11.4512 5.34171 11.4512 5.65829 11.6464 5.85355C11.8417 6.04882 12.1583 6.04882 12.3536 5.85355L14.3536 3.85355C14.5488 3.65829 14.5488 3.34171 14.3536 3.14645L12.3536 1.14645ZM0.5 3C3.35278 3 5.12992 4.44588 6.50548 6.06746L6.3762 6.24266C6.2483 6.4161 6.12293 6.58609 6 6.75C5.96397 6.79804 5.92798 6.84581 5.892 6.89331C4.57348 5.29306 3.02637 4 0.5 4C0.223858 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3ZM8.87248 10.6107C8.37284 10.131 7.90897 9.55314 7.45767 8.95468C7.64688 8.71693 7.82704 8.48061 8 8.25L8.08987 8.12987C8.58412 8.79402 9.05288 9.39766 9.56502 9.88931C10.2889 10.5842 11.0463 11 12 11H12.7929L11.6464 9.85355C11.4512 9.65829 11.4512 9.34171 11.6464 9.14645C11.8417 8.95118 12.1583 8.95118 12.3536 9.14645L14.3536 11.1464C14.5488 11.3417 14.5488 11.6583 14.3536 11.8536L12.3536 13.8536C12.1583 14.0488 11.8417 14.0488 11.6464 13.8536C11.4512 13.6583 11.4512 13.3417 11.6464 13.1464L12.7929 12H12C10.7037 12 9.71111 11.4158 8.87248 10.6107Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))});const Rk=`
body {
    background-image:url(-) !important;
  }
  
  ::selection {
    background-color: #39f;
    color: #000;
  }
  
  body .mw-page-container, body #mw-panel {
      background-color: unset !important;
      background-image: unset !important;
  }
  
  body :not([class]) > pre, body :not([class]) > code, body .mw-code {
      background-color: #222 !important;
      color: #ccc;
      border-color: #8888;
  }
  
  body #contentSub, body #contentSub2, * {
      color: unset;
  }
  
  table th, table td {
      border-color: #555;
  }
  
  /* Make dark project logo visible with dark theme. */
  .mw-wiki-logo {
      filter: drop-shadow(0px 0px 50px #fa7);
      background-color: #4322;
  }
  
  body .mw-ext-score {
      filter: invert(0.7);
  }
  
  body .wikiEditor-ui-toolbar {
      background-color: #333;
  }
  
  /* Class to use for characters represented by an image */
  body .darkchar {
    filter: invert(0.8);
  }
  #pt-uls .uls-trigger::before,
  .skin-vector-legacy #pt-uls .uls-trigger::before {
    filter: invert(0.8);
  }
  
  body .tux-navitoggle {
    filter: invert(1);
  }
  
  
  /* -- GENERAL -- */
  
  
  /* Links */
  
  .pBody ul li a, .pBody ul li a:visited, .subpages a, .subpages a:visited, body a, body a:visited, a, a:visited {
      color: #49c !important;
  }
  
  .pBody ul li a.new, .pBody ul li a.new:visited, .subpages a.new, .subpages a.new:visited, body a.new, body a.new:visited, a.new, a.new:visited, .pBody ul li.new a, .pBody ul li.new a:visited, li.new a, li.new a:visited, body .lienbris\xE9 {
      color: #c64 !important;
  }
  
  body a.mw-kartographer-autostyled {
      color: #fff !important;
  }
  
  
  body .ui-widget-content {
    background-image: none !important;
    background-color: #222 !important;
    color: #ccc;
  }
  table.hovertable tr:hover {
    color: #444;
  }
  body .ui-dialog a {
    color: #49c !important;
  }
  
  
  /* Buttons */
  
  body .mw-ui-button {
    background-color: #334;
    color: unset !important;
  }
  body .oo-ui-buttonElement-button {
    color: unset !important;
  }
  body .mw-ui-button:not(:disabled):hover {
    background-color: #049;
  }
  .client-js .mw-recentchanges-toplinks:not(.mw-recentchanges-toplinks-collapsed),
  body .mw-rcfilters-ui-filterTagMultiselectWidget.oo-ui-widget-enabled .oo-ui-tagMultiselectWidget-handle {
    border-color: #555;
  }
  body .mw-rcfilters-ui-filterTagMultiselectWidget-wrapper-content-title {
    color: #cb8;
  }
  body .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
  body .oo-ui-buttonElement-framed.oo-ui-widget-enabled.oo-ui-buttonElement-pressed > .oo-ui-buttonElement-button {
    background-color: #359;
  }
  
  input, select, textarea, pre, .editOptions {
      background-color: #333 !important;
      color: #ccc !important;
      border-color: #555 !important;
  }
  
  input[type="submit"], input[type="button"] {
      background-color: #777 !important;
      color: #000 !important;
  }
  
  body .ui-toggler.ui-state-default {
      color: #49c !important;
  }
  
  .mw-charinsert-buttons a {
      background-color: #444 !important;
      color: #49c !important;
  }
  
  body #p-lang .uls-settings-trigger {
    filter: invert(1);
  }
  
  body .ext-discussiontools-ui-replyWidget-preview {
    background: #334;
  }
  body .ext-discussiontools-ui-replyWidget-preview::before {
    color: #c0c080;
  }
  
  
  body .collection-warning-box {
    background-color: #224;
  }
  body .collection-maintenance-box {
    border-color: #555;
  }
  
  /* {{nospam}} */
  bdi img[alt="@"], bdi img[alt="."] {
    filter: invert(0.8);
  }
  
  /* -- SKIN -- */
  
  
  /* Timeless */
  body #mw-content {
    background-color: #222;
    border-color: #334;
  }
  body #mw-content-container {
    background: #111822;
  }
  body #mw-site-navigation .sidebar-chunk,
  body #mw-related-navigation .sidebar-chunk {
    background: #222;
    border-color: #334;
  }
  body #mw-header-container {
    background: #345;
  }
  body #personal .dropdown {
    border-color: #555;
    background: #333;
    box-shadow: 0 2px 3px 1px rgba(128,128,128,0.5);
  }
  body #personal .dropdown::before,
  body #personal .dropdown::after {
    border-bottom: 10px solid #ca0 !important;
    border-left: 10px solid transparent !important;
    border-right: 10px solid transparent !important;
  }
  
  /* Monobook */
  .skin-monobook #p-cactions {
      top: 2.3em;
  }
  .skin-monobook .mw-body {
      margin-top: 3.8em;
  }
  
  /* Vector * */
  .vector-menu-content {
      color: #ccc;
      border-color: #478;
  }
  
  body .vectorbox {
      background-color: #333;
  }
  body .mw-sidebar-action .mw-sidebar-action-item h3.mw-sidebar-action-heading,
  body .vector-menu-portal .vector-menu-heading {
      color: #c83;
  }
  
  /* Vector legacy */
  body .vector-sticky-header {
      background-color: #222 !important;
      background-image: unset !important;
  }
  
  body.skin-vector.skin-vector-legacy .vector-menu-tabs .selected {
      background-image: none !important;
  }
  body.skin-vector.skin-vector-legacy .vector-menu-tabs,
  body.skin-vector.skin-vector-legacy .vector-menu-tabs a,
  #mw-head .vector-menu-dropdown h3 {
      background-image: linear-gradient(to bottom,rgba(64,119,136,0) 0,#478 100%);
  }
  body.skin-vector.skin-vector-legacy  .vector-menu-tabs .selected {
      background-color: #222;
  }
  body.skin-vector.skin-vector-legacy  .vector-menu-tabs li {
  background-image: linear-gradient(to top,#34a 0,#226 1px,#222 100%);
  }
  body.skin-vector.skin-vector-legacy .vector-menu-tabs .selected {
      background-color: #128 !important;
  }
  body .vector-menu-tabs-legacy .selected {
    background: #235;
  }
  body .vector-menu-tabs-legacy li {
    background-image: linear-gradient(to top,#77c1f6 0,#249 1px,#222 100%);
  }
  /*
  body .vector-menu-tabs,
  body .vector-menu-tabs a,
  body #mw-head .vector-menu-dropdown .vector-menu-heading {
    background-image: linear-gradient(to bottom,rgba(167,215,249,0) 0,#4757c9 100%);
  }
  */
  
  /* User tools */
  body.skin-vector.skin-vector-legacy li#pt-notifications-alert,
  body.skin-vector.skin-vector-legacy li#pt-notifications-notice,
  body.skin-vector.skin-vector-legacy li#pt-watchlist-2 {
    padding: 4px 0 0 0 !important;
  }
  
  
  /* Vector 2022 */
  body.skin-vector:not(.skin-vector-legacy) .vector-menu-tabs li.selected {
    background-image: linear-gradient(to top,#24f 1px,#2220 100%);
  }
  body.skin-vector:not(.skin-vector-legacy) .vector-menu-tabs li {
    padding: 0 0.5em;
  }
  body.skin-vector:not(.skin-vector-legacy) .sidebar-toc::after {
    background: linear-gradient(#2220,#333);
  }
  body.skin-vector:not(.skin-vector-legacy) .sidebar-toc {
    background-color: #334;
  }
  body.skin-vector:not(.skin-vector-legacy) .sidebar-toc .sidebar-toc-title {
    color: #ccc;
  }
  /* User tools * /
  body.skin-vector:not(.skin-vector-legacy) li#pt-notifications-alert,
  body.skin-vector:not(.skin-vector-legacy) li#pt-notifications-notice,
  body.skin-vector:not(.skin-vector-legacy) li#pt-watchlist-2 {
    background: #047 !important;
    padding: 4px 0 4px 4px !important;
    border: dotted 1px #08c;
    border-radius: 4px !important;
  }*/
  
  body #mw-sidebar-button::before,
  body .mw-ui-icon-wikimedia-search::before,
  body .mw-ui-icon-wikimedia-speechBubbles::before,
  body .mw-ui-icon-wikimedia-history::before,
  body .mw-ui-icon-wikimedia-star::before,
  body .mw-ui-icon-wikimedia-language::before,
  body .mw-ui-icon-wikimedia-userTalk::before,
  body .oo-ui-icon-settings,
  body .mw-ui-icon-settings::before,
  body .mw-ui-icon-wikimedia-labFlask::before,
  body .mw-ui-icon-wikimedia-userContributions::before,
  body .oo-ui-icon-logOut,
  body .mw-ui-icon-logOut::before,
  body .vector-menu-dropdown .vector-menu-heading::after,
  body .mw-interlanguage-selector::after
  {
    filter: invert(0.8);
  }
  
  body .vector-menu-dropdown .vector-menu-content {
    background-color: #432;
    border-color: #555;
  }
  body .vector-user-menu-logout {
    border-color: #c80;
    background-color: #400;
  }
  
  /* Moderne */
  body .portlet h3 {
    background: unset;
  }
  body #mw_portlets {
    background-color: #234;
  }
  
  /* UI */
  body .language-settings-dialog {
    background: #333;
  }
  body .languagesettings-menu h1 {
    color: unset;
  }
  body .languagesettings-menu .menu-section.active {
    background-color: #fc0;
  }
  
  body .uls-input-settings .uls-input-settings-inputmethods-list,
  body #languagesettings-settings-panel {
    color: #ccc;
    background: #223;
  }
  body #languagesettings-settings-panel h4 {
    color: #ccc;
  }
  body .languagesettings-menu .menu-section .settings-text,
  body .uls-ui-languages p,
  body .checkbox {
    color: #379;
  }
  body .languagesettings-menu .menu-section:hover {
    color: #222;
    background-color: #fe0;
  }
  body .languagesettings-menu .menu-section {
    color: #ccc;
  }
  body .uls-language-settings-close-block {
    background: #222;
  }
  body .uls-icon-close {
    filter: invert(1);
  }
  
  /* Vector 2022 */
  body.skin-vector:not(.skin-vector-legacy) .wb-langlinks-link a {
    color: #08c !important;
  }
  
  body table.mw-interwikitable.body td.mw-interwikitable-local-yes {
      background-color: #475;
  }
  
  body [id^="fileinfotpl"] {
      background: #338;
  }
  .fileinfotpl-type-information .description, body #anontalkpagetext {
      background-color: #222 !important;
  }
  
  body .ext-discussiontools-init-targetcomment {
      background-color: unset !important;
  }
  body .ext-discussiontools-init-highlight-fadein {
      opacity: 0 !important;
  }
  
  body .mw-search-results li:nth-child(2n) {
      background: #333;
  }
  
  body .userinfo-contact, body .boite-coloree, body .cadre-colore-contenu, body .templatesUsed, body .hiddencats {
      background: #2e2e2e !important;
  }
  body .boite-coloree *,
  body .mw-ui-button.mw-ui-quiet,
  body .mw-ui-button.mw-ui-quiet.mw-ui-progressive,
  body .mw-ui-button.mw-ui-quiet.mw-ui-destructive,
  body .ligne-de-forme {
      color: unset !important;
  }
  
  body .entete-boite
  { background-color: #457 !important; }
  body .entete-boite-icone
  { filter: invert(0.8); }
  body .entete-boite-titre
  { color:#ccc !important; }
  
  body .credit-photos {
      border-color: #9998 !important;
      background-color: #4448 !important;
  }
  
  body table.table-jaune, body table.table-jaune td, body table.vectorbox td {
      background-color: unset !important;
  }
  
  body .mw-json-value, body .mw-json-single-value {
      background-color: #454 !important;
  }
  body .mw-json th {
      background-color: #445 !important;
  }
  body .mw-json tr {
      background-color: #445 !important;
  }
  
  body .table-na {
      background-color: #237 !important;
      color: #ccc !important;
  }
  
  body table.table-jaune th {
      background: #642 !important;
  }
  
  body .mw-parser-output .category-redirect-content {
      background-color: #347;
  }
  
  body .navbox-abovebelow, body .navbox-group, body .navbox-subgroup .navbox-title {
      background: #245 !important;
  }
  
  body .faculte {
      background: linear-gradient(#000000c0, #000000c0) !important;
  }
  body .faculte .image img {
      background: radial-gradient(#789, #777,#222,#000);
  }
  body .alerte {
      background-image: linear-gradient(#000000c0, #000000c0);
  }
  
  body .mw-parser-output .settingsummary {
      background-color: #333;
  }
  body .mw-parser-output .settingsummary-header {
      background-color: #223;
  }
  body .mw-message-box {
      color: #ccc;
      background-color: #334;
      border-color: #578;
  }
  body .mw-message-box-warning {
      background-color: #543;
      border-color: #fc3;
  }
  body .mw-parser-output .note-warn {
    background-color: #443c20;
  }
  
  body.ns-0 #mw-content-text div:not(.toctitle) > h2, body.ns-118 #mw-content-text div:not(.toctitle) > h2 {
      /* background-color: #334; */
      background-color: unset !important;
  }
  
  body table.flextable td {
      background-color: #222;
  }
  
  body table.flextable th {
      background-color: #335;
  }
  
  body #specialcharsets {
      background-color: #322;
  }
  
  body .flaggedrevs_reviewform {
      background-color: #333;
  }
  body div.flaggedrevs_basic {
      background-color: #333;
  }
  body div.flaggedrevs_basic,
  body div.flaggedrevs_notice {
      border-color: #555;
  }
  body table.flaggedrevs_editnotice,
  body table.flaggedrevs_viewnotice {
      border-color: #955;
      background-color: #334;
  }
  
  body .wb-langlinks-link > a:hover {
      color: #08c !important;
  }
  body div.flaggedrevs_diffnotice {
      background-color: #223;
  }
  body .mw-revslider-container,
  body div.flaggedrevs_diffnotice,
  body div.flaggedrevs_preview {
      border-color: #555;
  }
  
  /* Talk overlay mobile view */
  body .overlay-header-container, .overlay-footer-container,
  body .overlay,
  body .overlay-footer-container {
    background-color: #223;
  }
  body .list-header {
    background-color: #224;
    color: #cca;
  }
  .overlay-enabled, .mw-body {
    background-color: #223 !important;
  }
  
  body, body .row .sourcemessage, body .row .suggestiontext, body.ns-talk dl, #catlinks, #mw-head, #content, .pBody, #footer, .wikitable, body #filetoc, #p-cactions li, .editCheckboxes, .editButtons, .mw-rcfilters-ui-changesListWrapperWidget .mw-changeslist-legend, .mw-rcfilters-ui-filterMenuHeaderWidget-header, body #sisterwikis, body .messagebox, body .errorbox, body .warningbox, body .successbox, body #userboxes, body .fieldsetlike .legendtextlike, body .bandeau-container table, body .mp-bordered, body li.tooltipRef {
      background-color: #222 !important;
      color: #ccc !important;
      border-color: #478 !important;
  }
  body .userboxes {
      background-color: #222 !important;
      color: #ccc !important;
      border-color: #457 !important;
  }
  body .wikipediauserbox td {
      color: #ccc !important;
  }
  
  
  body .quiz .correction {
      background-color: #159;
  }
  
  .ns-1 dl, .ns-3 dl, .ns-5 dl, .ns-7 dl, .ns-9 dl, .ns-11 dl, .ns-13 dl, .ns-15 dl, .colorationindentative dl {
      border-color: #8888 !important;
  }
  
  body .texte_normal {
      color: #ccc !important;
  }
  
  body .mw-parser-output .wmstrategy, body .mw-parser-output .wlx-outer, body .mw-parser-output .strategy-2018-20-global-conservations-banner li {
      background-color: unset;
  }
  
  body div.mw-parser-output table.charts-zebragrey > tbody > tr:nth-of-type(2n+1) {
      background-color: #8080c040;
  }
  
  body div.mw-parser-output table.charts-zebragrey > tbody > tr:nth-of-type(2n) {
      background-color: #77777740;
  }
  
  body table.infobox th.infobox-above {
      background-color: #337 !important;
  }
  
  body table.infobox th.infobox-header {
      background-color: #335 !important;
  }
  
  body table.tracklist th {
      background-color: #232 !important;
  }
  
  body table.tracklist tr, body table.tracklist tr td {
      background-color: #333 !important;
  }
  
  body #mw-mf-page-center, body .last-modified-bar {
      background-color: unset !important;
  }
  
  
  body .free {
      background: #225 !important;
      color: inherit !important;
  }
  
  body .cnotice-message p {
      background: inherit !important;
      color: inherit !important;
  }
  
  body .vertical-navbox {
      background-color: #223 !important;
  }
  
  body .mw-parser-output .wmstrategy-tab.selected, body .mw-parser-output .wmstrategy-content {
      background-color: #000;
  }
  
  body .navbox-abovebelow, body th.navbox-group, body .navbox-subgroup .navbox-title {
      background: #003 !important;
  }
  
  body .mw-translate-fuzzy {
      background-color: #822;
  }
  
  body .opaque {
      background-color: #222 !important;
  }
  
  body table.charttable {
      background-color: #223 !important;
  }
  
  body #sommaire_bas {
      background-color: #444 !important;
  }
  
  body table.mw-abuselog-details th {
      background: #233 !important;
  }
  body table.mw-abuselog-details {
      background-color: unset !important;
  }
  
  body .flaggedrevs-unreviewed {
      background-color: #703000 !important;
  }
  body .flaggedrevs-color-1 {
      background-color: #014 !important;
  }
  body .flaggedrevs-color-2 {
      background-color: #035 !important;
  }
  body .flaggedrevs-color-3 {
      background-color: #432 !important;
  }
  body .flaggedrevs-pending {
      background-color: #653 !important;
  }
  
  body .documentation {
      background: #234 !important;
  }
  table.clade, table.clade td, table.clade tr {
      border-color: #999 !important;
  }
  table.clade td img {
      filter: invert();
  }
  
  body ol.references > li:target, body ul.references > li:target {
      background-color: #77bbff40 !important;
  }
  
  var {
      color: #8ac;
  }
  
  /* ---------------------------------------------------------------------- */
  
  body .oo-ui-messageWidget.oo-ui-messageWidget-block.oo-ui-flaggedElement-warning {
      background-color: #430 !important;
  }
  body .mw-advancedSearch-fieldContainer {
      background: linear-gradient(rgba(0,0,0,0.1),#124 0.5em) !important;
  }
  body .mw-advancedSearch-namespace-selection {
      background: linear-gradient(rgba(0,0,0,0.1),#333 0.5em);
  }
  body .oo-ui-tagMultiselectWidget.oo-ui-widget-enabled {
      background-color: #333 !important;
  }
  body .mw-advancedSearch-fieldContainer .oo-ui-labelElement > .oo-ui-fieldsetLayout-header > .oo-ui-labelElement-label {
      background: #124 !important;
      color: #78a !important;
  }
  body .oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle {
      background-color: #345 !important;
      color: #ccc !important;
  }
  body .oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle:hover {
      background-color: #36a !important;
      color: #edc !important;
  }
  body .oo-ui-dropdownWidget.oo-ui-widget-enabled.oo-ui-dropdownWidget-open .oo-ui-dropdownWidget-handle {
      background-color: #567 !important;
  }
  body .oo-ui-dropdownWidget.oo-ui-widget-disabled .oo-ui-dropdownWidget-handle {
    color: #777;
    text-shadow: 0 1px 1px #555;
    border-color: #555;
    background-color: #222;
  }
  body .oo-ui-menuOptionWidget.oo-ui-widget-enabled.oo-ui-optionWidget {
      color: #cde !important;
  }
  body .oo-ui-menuOptionWidget.oo-ui-optionWidget-selected {
      background-color: #47c !important;
  }
  body .oo-ui-menuSelectWidget {
      background-color: #555 !important;
      color: #ccc;
  }
  body .oo-ui-popupWidget-popup {
      background-color: #444;
  }
  body oo-ui-toolbar-bar {
      background-color: #555 !important;
  }
  
  /* ---------------------------------------------------------------------- */
  
  body .ext-quick-survey-panel, .ext-qs-loader-bar {
      background-color: #282e38;
  }
  body .wvui-button--framed:not([disabled]) {
      background-color: #999;
      border-color: #555;
  }
  
  /*
  
  body table.wikitable,
  body table.prettytable {
      background-color: #282828 !important;
      border-color: #555 !important;
  }
  body table.wikitable > * > tr > th,
  body table.wikitable > * > tr > td,
  body table.prettytable > * > tr > th,
  body table.prettytable > * > tr > td {
      background-color: #282828 !important;
      border-color: #555 !important;
  }
  */
  
  /* ---------------------------------------------------------------------- */
  
  body .mw-parser-output .special-page-info {
    background-color: #555;
    border-color: #024;
  }
  
  body sup.reference:target {
      background-color: #abcfff40 !important;
  }
  
  body .need_ref {
      background-color: #222 !important;
      color: #c94 !important;
      border-color: #478 !important;
  }
  
  .mw-parser-output .note-info, body .warning-message {
      background-color: unset !important;
  }
  
  body .nounderlines {
      background-color: #222 !important;
      color: #ccc !important;
      border-color: #222 !important;
  }
  
  body div.ref {
      background-color: #333 !important;
  }
  
  body .mw-body .flow-topic-title {
      color: #ca7 !important;
  }
  body .flow-topic-titlebar {
      background-color: #000 !important;
  }
  body .flow-component.flow-board-page.flow-full-height-side-rail .flow-board-header::before {
      background-color: #ca74 ! important;
  }
  
  body .flow-post, body .flow-post .flow-author {
      color: unset !important;
  }
  
  body #p-Navigation .pBody {
      background-blend-mode: multiply;
  }
  
  body .mw-parser-output .note-reminder {
      background-color: #ffcf5720 !important;
  }
  
  body .mw-parser-output .community-wishlist-header {
      background-color: #322 !important;
  }
  
  body .boilerplate, body .boilerplate .title {
      background-color: #333 !important;
  }
  
  .collapsible .title, .collapsible tr:first-child th, .collapsible tr:first-child td {
      color: #aaa !important;
  }
  
  body .layouttemplate, body .iw-resultset, body .bandeautexte {
      background-color: #333 !important;
  }
  
  body td.navbox-list {
      background-color: #223 !important;
  }
  
  body .mw-diff-movedpara-left::after, body .mw-diff-movedpara-right::after {
      color: #0ff;
  }
  
  body .bouton {
      color: #000 !important;
  }
  
  body #nouvel_article {
      color: #ccc !important;
  }
  
  body .mw-datatable th {
      background-color: #0000ff20 !important;
  }
  body .mw-datatable td, body .flow-post {
      background-color: unset !important;
  }
  
  body .restrictiontemplate,
  body .ModeleBoiteUtilisateur,
  body .wikibase-entitytermsview .wikibase-toolbar-container,
  body .wikibase-entitytermsview .wikibase-toolbar-container {
      background-color: #333 !important;
  }
  
  body .wikibase-entitytermsforlanguagelistview .wikibase-entitytermsforlanguagelistview-header .wikibase-entitytermsforlanguagelistview-header-row .wikibase-entitytermsforlanguagelistview-cell {
      background-color: #334 !important;
      border-color:#478 !important;
  }
  
  body .wikibase-entitytermsforlanguagelistview {
      background-color: #222 !important;
  }
  
  body .wikibase-statementlistview > .wikibase-toolbar-wrapper,
  body .wikibase-statementgrouplistview .wikibase-statementgroupview-property,
  body .wikibase-sitelinkgroupview .wikibase-sitelinkgroupview-heading-container {
      background-color: #333 !important;
  }
  
  body .wikibase-statementgrouplistview .wikibase-statementgroupview-property,
  body .wikibase-sitelinklistview .wikibase-sitelinkview .wikibase-sitelinkview-siteid-container {
      background: unset !important;
      border: 1px solid #245 !important;
  }
  
  body .mw-babel-box table {
      color: #000 !important;
  }
  
  body .bandeau-niveau-neutre {
      border-color: #777 !important;
      background: #333 !important;
  }
  body .bandeau-niveau-grave {
      background: #422 !important;
  }
  
  body ul {
      list-style-image: url(//upload.wikimedia.org/wikipedia/commons/3/31/Bullet-icon-ccc.svg);
  }
  
  body .cbnnr, body .cbnnr-main, body .cbnnr-icon {
      background-color: #222 !important;
      color: #ccc !important;
      border-color: #555 !important;
  }
  .cbnnr-headline, .cbnnr-text {
      display: inline;
      color: #ccc;
  }
  
  body .tux-breadcrumb {
      color: #cb9;
  }
  body .tux-breadcrumb__item--aggregate {
      color: #28c;
  }
  body .tux-groupselector {
      background-color: #111;
      border-color: #555;
  }
  body .tux-grouplist {
      background-color: #222;
  }
  body .tux-grouplist__item:hover {
      background-color: #06c;
  }
  body .tux-statsbar-info {
      color: #aaa;
  }
  body .tux-workflow-status {
      background: #ccc;
  }
  body .tux-editor-header {
      color: #ccc;
  }
  
  body div.wikibase-statementgrouplistview .wikibase-statementlistview,
  body div.wikibase-statementgrouplistview div.wikibase-statementlistview,
  body .wikibase-statementgrouplistview div.wikibase-statementlistview,
  body .wikibase-statementgrouplistview .wikibase-statementlistview {
      background-color: #222 !important;
      color: unset !important;
  }
  
  body .mw-footer li {
      color: unset !important;
  }
  
  body .image-texte {
      filter: invert(1) brightness(75%) !important;
  }
  
  body .oo-ui-buttonElement-frameless > .oo-ui-buttonElement-button > .oo-ui-labelElement-label, body .oo-ui-buttonElement-frameless.oo-ui-labelElement > .oo-ui-buttonElement-button > .oo-ui-labelElement-label,
  body .cbnnr-headline,
  body .cbnnr-cta {
      color: #ccc !important;
  }
  body .tool.oo-ui-buttonElement-frameless.oo-ui-iconElement > .oo-ui-buttonElement-button > .oo-ui-iconElement-icon {
      filter: invert();
  }
  body .wikiEditor-ui-toolbar {
      background-image: none;
  }
  
  body .ace-tm {
      background-color: #222;
      color: #ccc;
      filter: brightness(150%);
  }
  body .ace-tm .ace_gutter {
      background-color: #2a2a2a;
      color: #ccc;
  }
  body .ace-tm .ace_gutter-active-line {
      background-color: #247 !important;
  }
  body .ace-tm .ace_marker-layer .ace_selected-word,
  body .ace-tm .ace_marker-layer .ace_selection
      background-color: #a19964;
  }
  /* Stupidly, Mediawiki does not accept .class1.class2 as CSS selector ! */
  body .ace-tm .ace_constant.ace_numeric {
      color: #0064ff;
  }
  body .ace-tm .ace_constant {
      color: #0064ff !important;
  }
  body .ace-tm .ace_numeric {
      color: #0064ff !important;
  }
  body .ace-tm .ace_storage,
  body .ace-tm .ace_keyword {
      color: #005fff;
  }
  
  body .test-tm .test_dark {
      color: #005fff;
  }
  
  body table.tmbox {
      background-color: #023 !important;
  }
  
  body .columns div:not([class]), body .navbox, body .navbox-subgroup, body .infobox_v3 p.bloc, body .infobox_v3 caption:not([class]), body .aa-fond-gris {
      background-color: #333 !important;
  }
  
  body  .aa-fond-blanc {
      background-color: #444 !important;
  }
  
  body .mw-search-results li:nth-child(2n+1) {
      background-color: #7b7c7e50 !important;
  }
  
  div.mw-babel-box table {
      backdrop-filter: brightness(50%);
  }
  
  body table.ambox-system, body table.ambox, body table.bmbox-system, body table.bmbox,
  body table.cmbox-system, body table.cmbox, body table.dmbox-system, body table.dmbox,
  body table.embox-system, body table.embox, body table.fmbox-system, body table.fmbox, 
  body table.gmbox-system, body table.gmbox, body table.hmbox-system, body table.hmbox, 
  body table.imbox-system, body table.imbox, body table.jmbox-system, body table.jmbox, 
  body table.kmbox-system, body table.kmbox, body table.lmbox-system, body table.lmbox, 
  body table.mmbox-system, body table.mmbox, body table.nmbox-system, body table.nmbox, 
  body table.ombox-system, body table.ombox, body table.pmbox-system, body table.pmbox, 
  body table.qmbox-system, body table.qmbox, body table.rmbox-system, body table.rmbox, 
  body table.smbox-system, body table.smbox, body table.tmbox-system, body table.tmbox, 
  body table.umbox-system, body table.umbox, body table.vmbox-system, body table.vmbox, 
  body table.wmbox-system, body table.wmbox, body table.xmbox-system, body table.xmbox, 
  body table.ymbox-system, body table.ymbox, body table.zmbox-system, body table.zmbox {
      background-color: #333 !important;
      color: #ccc !important;
  }
  
  body .table-no {
      background-color: #f994 !important;
  }
  body .table-yes {
      background-color: #9f94 !important;
  }
  body .table-partial {
      background-color: #ffd4 !important;
  }
  body .table-unknown {
      background-color: #eee4 !important;
  }
  
  body figure figcaption,
  body .thumbcaption {
      color: #ccc;
  }
  
  body figure[typeof~="mw:Image/Thumb"] > figcaption,
  body figure[typeof~="mw:Video/Thumb"] > figcaption,
  body figure[typeof~="mw:Audio/Thumb"] > figcaption,
  body figure[typeof~="mw:Image/Frame"] > figcaption,
  body figure[typeof~="mw:Video/Frame"] > figcaption,
  body figure[typeof~="mw:Audio/Frame"] > figcaption,
  body figure[typeof~="mw:Image/Thumb"],
  body figure[typeof~="mw:Video/Thumb"],
  body figure[typeof~="mw:Audio/Thumb"],
  body figure[typeof~="mw:Image/Frame"],
  body figure[typeof~="mw:Video/Frame"],
  body figure[typeof~="mw:Audio/Frame"]
  {
      background-color: #333;
      border-color: #8888;
  }
  body figure[typeof~="mw:Image/Thumb"] > :first-child > audio,
  body figure[typeof~="mw:Video/Thumb"] > :first-child > audio,
  body figure[typeof~="mw:Audio/Thumb"] > :first-child > audio,
  body figure[typeof~="mw:Image/Frame"] > :first-child > audio,
  body figure[typeof~="mw:Video/Frame"] > :first-child > audio,
  body figure[typeof~="mw:Audio/Frame"] > :first-child > audio,
  body figure[typeof~="mw:Image/Thumb"] > :first-child > img,
  body figure[typeof~="mw:Video/Thumb"] > :first-child > img,
  body figure[typeof~="mw:Audio/Thumb"] > :first-child > img,
  body figure[typeof~="mw:Image/Frame"] > :first-child > img,
  body figure[typeof~="mw:Video/Frame"] > :first-child > img,
  body figure[typeof~="mw:Audio/Frame"] > :first-child > img,
  body figure[typeof~="mw:Image/Thumb"] > :first-child > video,
  body figure[typeof~="mw:Video/Thumb"] > :first-child > video,
  body figure[typeof~="mw:Audio/Thumb"] > :first-child > video,
  body figure[typeof~="mw:Image/Frame"] > :first-child > video,
  body figure[typeof~="mw:Video/Frame"] > :first-child > video,
  body figure[typeof~="mw:Audio/Frame"] > :first-child > video
  {
      border-color: #555;
  }
  
  body figure[typeof~="mw:File/Thumb"] > figcaption,
  body figure[typeof~="mw:File/Frame"] > figcaption,
  body figure[typeof~="mw:Image/Thumb"] > figcaption,
  body figure[typeof~="mw:Video/Thumb"] > figcaption,
  body figure[typeof~="mw:Audio/Thumb"] > figcaption,
  body figure[typeof~="mw:Image/Frame"] > figcaption,
  body figure[typeof~="mw:Video/Frame"] > figcaption,
  body figure[typeof~="mw:Audio/Frame"] > figcaption
  {
      background-color: inherit;
      border-color: #555;
  }
  body figure[typeof~="mw:File/Thumb"],
  body figure[typeof~="mw:File/Frame"],
  body figure[typeof~="mw:Image/Thumb"],
  body figure[typeof~="mw:Video/Thumb"],
  body figure[typeof~="mw:Audio/Thumb"],
  body figure[typeof~="mw:Image/Frame"],
  body figure[typeof~="mw:Video/Frame"],
  body figure[typeof~="mw:Audio/Frame"]
  {
      background-color: #333;
      border-color: #555;
  }
  
  
  body.ns-talk dl, body .ns-talk dl dl dl, body.ns-talk dl dl dl dl dl, body.ns-talk dl dl dl dl dl dl dl, body.ns-talk dl dl dl dl dl dl dl dl dl, body.ns-talk dl dl dl dl dl dl dl dl dl dl, body.ns-talk dl dl dl dl dl dl dl dl dl dl dl, body.ns-talk dl dl dl dl dl dl dl dl dl dl dl dl, body.ns-talk dl dl dl dl dl dl dl dl dl dl dl dl dl,
  body.ns-0 ol li, body.ns-0 ol li li, body.ns-118 ol li, body.ns-118 ol li li,
  body.ns-0 ol li ul, body.ns-0 ol li li ul, body.ns-0 ol li ul ul, body.ns-118 ol li ul, body.ns-118 ol li li ul, body.ns-118 ol li ul ul
  {
      background-color: unset !important;
  }
  
  body td.navbox-banner {
      background: #223 !important;
  }
  
  html body .homonymie {
      background-color: #224 !important;
  }
  
  kbd {
      background-color: #333 !important;
      border-color: #357 !important;
      font-size: 9pt !important;
      line-height: 1.8em !important;
  }
  
  body .bandeau-simple.bandeau-niveau-information, body .bandeau-discussion.bandeau-niveau-information, body .bandeau-niveau-ebauche, body .bandeau-niveau-information, body table.navbox, body th.navbox-group, body td.navbox-even, body .mw-alerte {
      background-color: unset !important;
  }
  
  body .bandeau-niveau-detail, body .bandeau-section.bandeau-niveau-information {
      border-color: #55c !important;
      background-color: #224 !important;
  }
  
  body .ancetres {
      background-color: #fffc !important;
      padding: 4px;
      color: #000 !important;
  }
  
  body .alternance tr, body .alternance th[scope="row"] {
      background-color: #bababa0b !important;
  }
  
  body .alternance:not(.sortable) tr:nth-child(2n+1), body .alternance.sortable tr:nth-child(2n), body .alternance:not(.sortable) tr:nth-child(2n+1) th[scope="row"], body .alternance.sortable tr:nth-child(2n) th[scope="row"] {
      background-color: #3a3a3a16 !important;
  }
  
  body th.navbox-title {
      background: #225 !important;
  }
  
  body #bandeau-portail {
      border-color: #478 !important;
      background-color: #333 !important;
  }
  
  body .bandeau-niveau-modere {
      border-color: #ee8822 !important;
      background-color: #ff1d0c0e !important;
  }
  
  #p-Contribuer .pBody, body .infobox_v1, body div.infobox_v1, body .infobox_v2, body div.infobox_v2, body .infobox_v3, body div.infobox_v3, body .cadre, body table.ModeleBU {
      background: unset !important;
      color: unset !important;
  }
  
  body .infobox_v1 .entete, body div.infobox_v1 .entete, body .infobox_v2 .entete, body div.infobox_v2 .entete, body .infobox_v3 .entete, body div.infobox_v3 .entete {
      background-color: #46c !important;
  }
  
  body td.diff-deletedline .diffchange {
      background: #124 !important;
      color: #c00000 !important;
  }
  
  body td.diff-addedline .diffchange {
      background: #421 !important;
      color: #c72 !important;
  }
  
  .portlet h3 {
      background-color: unset !important;
      border: unset !important;
  }
  
  div.cnotice, body .converture-titre, body .converture-sommaire, body .converture-sommaire div, body #mp-content td {
      background-color: unset !important;
  }
  
  /*
  code {
      color: unset !important;
      background-color: unset !important;
      border: unset !important;
  }
  */
  code {
      color: unset;
      background-color: unset;
      border: unset;
  }
  
  .infobox  {
      background-color: #333 !important;
      color: #ccc !important;
      border-color: #478 !important;
  }
  
  table.altlines1 tr:nth-child(2n+1), table.altlines2 tr:nth-child(2n) {
      background: #334 !important;
  }
  
  .mw-pt-languages {
      background-color: #333 !important;
      border: 1px solid #444 !important;
  }
  .mw-pt-languages-label {
      background-color: #444 !important;
  }
  
  .mw-babel-wrapper {
      background-color: #333 !important;
      border-color: #478 !important;
  }
  
  
  body .mwe-popups .mwe-popups-container {
      background: #333;
  }
  body .mwe-popups .mwe-popups-extract[dir="ltr"]::after {
      background-image: linear-gradient(to right,rgba(255,255,255,0),#333 50%);
  }
  body .mwe-popups .mwe-popups-extract p {
      color: #fff;
  }
  
  
  .arrowSteps li, #mwe-upwiz-steps li.head {
      background-color: #444 !important;
  }
  
  .arrowSteps li.arrow::after {
      border-left-color: #444 !important;
  }
  
  .arrowSteps li.arrow::before {
      border-left-color: #08a !important;
  }
  
  table.wikitable th, body table.wikitable > tr > th, body table.wikitable > * > tr > th {
      background-color: #444 !important;
  }
  table.wikitable > tr > th, table.wikitable > tr > td, table.wikitable > * > tr > th, table.wikitable > * > tr > td {
      border-color: #555 !important;
  }
  
  @media only screen {
  table.wikitable th, body table.wikitable > tr > th, body table.wikitable > * > tr > th {
      background-color: #444 !important;
  }
  table.wikitable > tr > th, table.wikitable > tr > td, table.wikitable > * > tr > th, table.wikitable > * > tr > td {
      border-color: #555 !important;
  }
  }
  
  .oo-ui-messageWidget.oo-ui-messageWidget-block.oo-ui-flaggedElement-notice{
      background-color: #444 !important;
      border-color: #555 !important;
  }
  /*
  .oo-ui-menuSelectWidget {
      background-color: #aaa !important;
  }
  */
  
  .diff-addedline, .diff-deletedline, .diff-context {
      background-color: #222 !important;
      color: #ccc !important;
      border-color: #444 !important;
  }
  
  #pagehistory li.selected {
      background-color: #000 !important;
      color: #ccc !important;
  }
  
  /* .gallerybox .thumb img,  */
  #file img, .filehistory a img, .com-checker img {
      background: url(//upload.wikimedia.org/wikipedia/commons/6/60/Checker-16x16-dark.png) repeat;
  }
  
  body ul.mw-gallery-packed-hover li.gallerybox:hover div.gallerytextwrapper,
  body ul.mw-gallery-packed-overlay li.gallerybox div.gallerytextwrapper,
  body ul.mw-gallery-packed-hover li.gallerybox.mw-gallery-focused div.gallerytextwrapper {
      background: rgba(48,48,48,0.8);
  }
  
  body .gallery {
      border-color: #555 !important;
  }
  body .gallery-image {
      background-color: #333 !important;
      border-color: #555 !important;
  }
  
  .mw-rcfilters-ui-filterTagMultiselectWidget.oo-ui-widget-enabled .oo-ui-tagMultiselectWidget-handle {
      background-color: #000 !important;
  }
  body .oo-ui-tabOptionWidget {
      color: #ccc !important;
  }
  .mw-rcfilters-ui-filterTagMultiselectWidget-views-select-widget.oo-ui-widget {
      border-color: #478 !important;
  }
  .mw-rcfilters-ui-filterTagMultiselectWidget.oo-ui-widget-enabled .oo-ui-buttonElement {
  /*	background-color: #555 !important;*/
  }
  body .mw-rcfilters-ui-itemMenuOptionWidget-label-desc,
  body .mw-rcfilters-ui-tagItemWidget-popup-content {
      color: #ccc;
  }
  
  body .mw-tag-markers {
    background-color: #c704;
  }
  
  div .licensetpl_wrapper, div .licensetpl, div .fileinfo-paramfield {
      background-color: #222 !important;
      border-color: #478 !important;
  }
  
  #mw-page-base {
      background: unset;
  }
  
  /*ul, ol, table {
      background-color: #222;
      color: #ccc;
      border-color: #478;
  }*/
  
  ul.vector-menu-content-list {
      background-color: unset;
  }
  
  body .toc, body #toc, .mw-warning, body .toccolours:not(.mw-collapsible-toggle) {
      background: #002 !important;
  }
  
  .tocnumber {
      color: #ca0;
  }
  
  [aria-labelledby="project-lists-label"] {
      background-color: #432 !important;
  }
  
  body .mw-parser-output .ts-doc-doc, body .mw-parser-output .ts-doc-footer {
      background-color: #222;
      border-color: #8888;
  }
  body .mw-parser-output .ts-doc-header {
      background-color: #334;
  }
  body .mw-parser-output .skin-infobox-header {
      color: #888;
      background: #234;
  }
  body .mw-inputbox-centered {
      background-color: unset !important;
  }
  body .mw-parser-output .extension-translate-navcolumn {
      background-color: #223;
      border-color: #8888;
  }
  
  body #p-lang .mw-interlanguage-selector.selector-open {
    background-color: #334;
  }
  body #p-lang .mw-interlanguage-selector,
  body #p-lang .mw-interlanguage-selector:active {
    background-blend-mode: screen;
  }
  
  
  /* meta */
  body .uls-menu,
  body .uls-lcd {
      color: #ccc;
      background-color: #222;
      border-color: #555;
  }
  body .uls-search {
      background-color: unset;
      border-color: #555;
  }
  body #uls-settings-block {
      color: #ccc;
      background-color: #2a2a2a;
      border-color: #555;
  }
  body #uls-settings-block > button {
      color: #ccc;
  }
  body .uls-lcd-region-title {
      color: #aaa;
  }
  body div.uls-menu {
      margin-top: unset;
  }
  
  body .mw-parser-output .new-collapse.new-collapse > .mw-collapsible-toggle {
    color: #27e;
  }
  body .mw-parser-output .collapse-mobile > .mw-collapsible-content > div {
    color: inherit;
  }
  
  body .mw-parser-output .MainPage__block_heading {
      background-color: #234;
      border-color: #711;
  }
  body .mw-parser-output .MainPage__block:first-child .MainPage__block_heading {
      border-color: #711;
  }
  body .mw-parser-output .frinfo-header,
  body .mw-parser-output .frinfo h2 {
    color: #ccc;
    border-color: #248;
  }
  
  /* commons */
  body .mw-parser-output .delh {
      background-color: #322;
      border-color: #544;
  }
  body .mw-parser-output .template-picture-of-the-day {
      border-color: #332;
      background-color: #221;
  }
  body .mw-parser-output .license-review-passed {
      background-color: #333;
      border-color: #555;
  }
  body .description {
      border-color: #248 !important;
      background-color: #22242a !important;
  }
  body .mw-parser-output .com-en-rationale-display,
  body .mw-parser-output .com-fr-rationale-display {
      background-color: rgba(230,255,255,0.1);
  }
  body .mw-parser-output .on-wikipedia {
    background-color: #223;
    color: #ca7;
    border-color: #555;
  }
  body .mime-type.has-warning {
    color: #fc4;
  }
  
  /* wikibooks (it) */
  body .mw-parser-output .c-azzurro,
  body .mw-parser-output .h-azzurro {
      border-color: #345;
      background-color: #242d3c;
  }
  body .mw-parser-output .bar-general {
      background-color: #332822;
  }
  body .mw-parser-output .home-vetrina1,
  body .mw-parser-output .home-vetrina2,
  body .mw-parser-output .home-vetrina3 {
      border-color #555;
      background-color: #111;
  }
  body .mw-parser-output .vetrina-main {
      color: #bbb;
  }
  body .mw-parser-output .finestra6-titolo {
      background-color: #282420;
  }
  
  /* wikibooks (en) */
  body .PrettyTextBox {
      background-color: #333;
      color: #ccc;
      border-color: #555;
  }
  body .user-block,
  body .collapsible {
      background-color: #333 !important;
      border-color: #555 !important;
  }
  
  /* wikibooks(pt) */
  body .top,
  body .top .cont {
      border-color: #444 !important;
      background-color: #111 !important;
  }
  body .top .cont .guia {
      border-top: 1px solid #444 !important;
      background-color: #122 !important;
  }
  body .extra-info {
      border-color: #444 !important;
      background-color: #333 !important;
  }
  body .extra-info div {
      border-color: #444 !important;
      background-color: #222 !important;
  }
  body .extra-info div > table td {
      border-color: #555 !important;
  }
  body .azul-limpo {
      background-color: #234;
      border-color: #123;
  }
  body .flow-ui-editorWidget > .flow-ui-editorWidget-editor:not(.oo-ui-pendingElement-pending)
  {
    background-color: #123;
  }
  
  body .bb .coluna div,
  body .bb-finalizados {
      background-color: #223;
      border-color: #445;
  }
  body .bb h2, .bb-finalizados h2 {
      background-color: #282233;
      border-color: #333;
  }
  
  
  /* wikibooks (fr) */
  .nav-chap-button {
      filter: invert(1) contrast(0.75);
  }
  body .mw-specialCiteThisPage-bibliographic {
    background-color: #abb3c340;
  }
  body.page-Discussion_Wikilivres_Le_Bistro_2022 ul > li > img {
    filter: invert(1) brightness(0.75);
  }
  body .icone_de_titre.niveau img {
      filter: invert(0.7) hue-rotate(180deg);
  }
  
  /* wikiversity (fr) */
  .le\xE7ons td {
    background-color: #321;
  }
  
  /* wikisource (fr) */
  body .portail-titre,
  body .accueil-titre {
      filter: invert(0.4) brightness(150%);
  }
  body .vcard {
      background-color: #432 !important;
      box-shadow: 0.2em 0.3em 0.2em #555 !important;
  }
  body .colore {
      filter: invert(0.4) brightness(150%);
  }
  body .headertemplate {
      background-color: #432;
  }
  body .footertemplate {
      background-color: #333;
  }
  
  /* wiktionary (fr) */
  body div.noarticletext {
      color: #ccc;
      border-color: #555;
      background-color: #222;
  }
  body .noarticletext > div > div > div {
      background-color: #222 !important;
  }
  body .noarticletext > div > div:nth-child(1) > div > div:first-child {
      background-color: #155 !important;
  }
  body .noarticletext > div > div:nth-child(2) > div > div:first-child {
      background-color: #751 !important;
  }
  body .noarticletext > div > div > div > div > span[style*="color: #000000;"] {
      color: #ccc !important;
  }
  
  body .mw-parser-output .main-top {
      background-color: unset;
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/50/Wikipedia_logo_letters_banner_dark.svg");
      border-color: #555;
  }
  body .mw-parser-output .main-top-left {
      background-image: none;
      border-color: #555;
  }
  body .mw-parser-output .main-box {
      background: #222;
      border-color: #555;
  }
  
  /* wikiversity (fr) */
  body .emphase {
      background-color: #114 !important;
  }
  
  /* wikiquote (fr) */
  body .projets-wm {
    color: #ccc !important;
    border-color: #555 !important;
  }
  
  /* wikiquote (en) */
  body .MainPageLetterHead,
  #EnWpMpBook2 {
      background-color: #222 !important;
      border-color: #555 !important;
  }
  #mf-qotd div {
    border-color: #555 !important;
  }
  
  /* wikinews (fr) */
  
  body table td#mp-tfa, body table td#mp-tfa {
      color: #ccc !important;
  }
  body tr.blanco-hover {
      background: #223;
  }
  body tr.gris-hover {
      background: #112;
  }
  body .entete-accueil {
      background: transparent !important;
  }
  body .cadre-contenu {
      color: #ccc !important;
      background-color: #111 !important;
  }
  /* No class :( */
  span[style="color:blue;font-family:monospace;font-weight:bold;font-size:90%;cursor:help;"] {
      color: #48a !important;
  }
  body .autres-projets,
  body #isOnCommons {
      border-color: #555 !important;
      background-color: #223 !important;
  }
  body #bandeau-page,
  body .bandeau-page {
      background-color: #282828;
  }
  body .titre_journee * {
    color: #ccc !important;
  }
  
  /* wikinews (en) */
  body .the_table {
      background-color: #222;
      border-color: #333;
  }
  body .mp_header {
      background-color: #123;
      border: 1px solid #333;
  }
  body #social_bookmarks {
      background-color: #333 !important;
      border-color: #234 !important;
  }
  body table.xambox {
      background-color: #333;
      border-color: #555;
  }
  body .imbox {
      background-color: #333;
  }
  
  /* wikibooks (ca) */
  
  body .sharedUploadNotice {
      border-color: #555 !important;
      background-color: unset !important;
  }
  body .divlang,
  #navegar div,
  #navegar #toc {
      border-color: #555 !important;
      background-color: #333 !important;
  }
  #navegar img {
      filter: contrast(0%);
  }
  
  body .ns-1 {
      background-color: #222 !important;
  }
  
  body .mw-parser-output .community-wishlist-survey-schedule {
      background: #224;
  }
  
  body .oo-ui-buttonElement-framed.oo-ui-flaggedElement-progressive > .oo-ui-buttonElement-button {
      color: #ccc !important;
      background-color: #246;
      background-image: linear-gradient(to bottom,#222 0,#357 100%);
      border: 1px solid #579;
  }
  
  body .statstable > * > tr > th {
      background-color: #224;
      border-color #448;
  }
  body .statstable > * > tr > td {
      background-color: #223;
      border-color #448;
  }
  body .statstable > * > tr.tux-statstable-even > td {
      background-color: #112;
  }
  
  
  /* wikipedia (fr) */
  body .onglets-clearfix,
  body .exemple {
      /* Why insisting using white background everywhere ???? */
      background: unset !important;
      background-color: unset !important;
  }
  body .request-done {
      border-color: #555 !important;
      background-color: #223 !important;
  }
  body table[style*="background-color: #f9f9f9;"] {
      border-color: #555 !important;
      background-color: #333 !important;
  }
  body .request-pending {
      border-color: #555 !important;
  }
  body .BarChartTemplate {
      border-color: #359 !important;
      background-color: #113 !important;
  }
  body .infobox_v2 * {
      text-shadow: unset !important;
  }
  body .onglet,
  body .onglets-cadre {
      background-color: #222 !important;
  }
  body .bma {
    background-color: #333 !important;
  }
  body [style*="background-color:#009EE0"] {
    background-color:#034 !important;
  }
  body .cadre_portail
  {
    background-color: #223 !important;
    border-color: #555 !important;
  }
  .cadre_portail img[alt="ic\xF4ne d\xE9corative"]
  {
    filter: invert(0.8) hue-rotate(180deg);
  }
  body .article-audio {
    background-color: #333 !important;
    border-color: #555 !important;
  }
  
  
  /* wikiquotes (es) */
  .MainPageBG {
      border-color #555 !important;
      background-color: #222 !important;
  }
  #mf-FDD #toc table {
      background-color: #432;
  }
  #mf-FDD #toc table div {
      color: #29c !important;
  }
  .MainPageBG table .MainPageBG table td{
      border: 2px solid #754 !important;
  }
  .BGorange2 {
      background-color: #432 !important;
      border: 2px solid #754 !important;
  }
  
  /* wikisource (es) */
  body .mw-parser-output .bp-main {
      box-shadow: 0 0 .3em #764;
      background-color: #2c2824;
  }
  
  /* wikipedia (es) */
  body .mw-parser-output .flexquote {
    background-color: #2c2c2c;
    border-color: #444458;
  }
  
  /* wikipedia (en) */
  body .mw-parser-output .navbox-abovebelow,
  body .mw-parser-output .navbox-group,
  body .mw-parser-output .navbox-subgroup .navbox-title {
    background-color: #123 !important;
  }
  body .mw-parser-output .side-box {
      background-color: #233 !important;
      border-color: #444;
  }
  body .mw-parser-output .quotebox {
      background-color: #223 !important;
      border-color: #555;
  }
  body .mw-parser-output #mp-topbanner {
    background: #282828;
    border-color: #555;
  }
  body .mw-parser-output #mp-left {
    background: #232523;
    border-color: #343;
  }
  body .mw-parser-output #mp-left .mp-h2 {
    background: #232;
    border-color: #3438;
  }
  body .mw-parser-output #mp-lower,
  body .mw-parser-output #mp-right {
    background: #232328;
    border-color: #334;
  }
  body .mw-parser-output #mp-lower .mp-h2,
  body .mw-parser-output #mp-right .mp-h2 {
    background: #223;
    border-color: #3348;
  }
  
  body .mw-parser-output tr + tr > .navbox-abovebelow,
  body .mw-parser-output tr + tr > .navbox-group,
  body .mw-parser-output tr + tr > .navbox-image,
  body .mw-parser-output tr + tr > .navbox-list {
      border-color: #555 !important;
  }
  body table.infobox th.infobox-label {
    background-color: #234 !important;
  }
  
  table.toccolours tr:first-child th {
      background-color: #334 !important;
  }
  table.toccolours tr:not(:first-child) th {
      background-color: #447 !important;
  }
  
  body .vevent {
      background-color: #333 !important;
  }
  
  body table .table-no2 {
      background: #422 !important;
      color: unset !important;
  }
  
  body .mw-parser-output .sidebar {
      background: #333;
      border: 1px solid #478;
  }
  
  body .mw-contributions-footer, body .mw-contributions-footer table {
      background-color: #272727 !important;
      border-color: #555 !important;
  }
  
  body th.mbox-text, body td.mbox-text {
      color: unset !important;
  }
  
  body .mw-parser-output #teahouseheader .main {
      background-color: #232 !important;
  }
  
  #teahouseheader .thh-left {
      background: linear-gradient(to bottom right, #eee, #232);
      padding: 0.5em;
  }
  
  body .mw-parser-output .module-shortcutboxplain
  {
    background-color: #334;
    border-color: #555;
  }
  body .mw-parser-output .comportal-blocks
  {
    background-color: #333;
    color: #ccc;
  }
  body .mw-parser-output .tpl-vp-sections { background-color: #334; }
  body .mw-parser-output .tpl-vp-heading  { background-color: #445; }
  body .mw-parser-output .ombox,
  body .mw-parser-output .tpl-vp-sections,
  body .mw-parser-output .tpl-vp-blocks,
  body .mw-parser-output .tpl-vp-block,
  body .mw-parser-output .comportal-block
  { border-color: #555; }
  body .mw-parser-output .comportal-section h2
  { background-color: #135; }
  body .mw-parser-output .sister-bar
  {
    background-color: #333;
    border-color: #555;
  }
  body .mw-parser-output .navbox { border-color: #059; }
  body .comportal-section div[role=complementary] { border-color: #588 !important; }
  body .mw-parser-output .box,
  body .mw-parser-output .comportal-section
  {
    border-color: #777 !important;
  }
  body .mw-parser-output #box-1 { background-color: #203034; }
  body .mw-parser-output #box-2 { background-color: #343020; }
  body .mw-parser-output #box-3 { background-color: #303c33; }
  body .mw-parser-output #box-4 { background-color: #373037; }
  body .mw-parser-output #box-5 { background-color: #443; }
  body .mw-parser-output .box-header { border-color: #222 !important; }
  body .mw-parser-output #box-1 .box-header { background-color: #304044 !important; }
  body .mw-parser-output #box-2 .box-header { background-color: #444030 !important; }
  body .mw-parser-output #box-3 .box-header { background-color: #404c43 !important; }
  body .mw-parser-output #box-4 .box-header { background-color: #474047 !important; }
  body .mw-parser-output #box-5 .box-header { background-color: #332 !important; }
  body .mw-parser-output .improvement-of-the-week
  {
    background-color: #333;
    border-color: #355;
  }
  body table.mw-collapsible { border-color: #753; }
  body .mw-parser-output .centralized-discussion-title,
  body .mw-parser-output .centralized-discussion-vps,
  body .mw-parser-output .centralized-discussion-navbar
  { background-color: #134; }
  body .mw-parser-output .centralized-discussion-image,
  body .mw-parser-output .centralized-discussion-list,
  body .mw-parser-output .centralized-discussion-meta,
  body .mw-parser-output .centralized-discussion-ongoing,
  body .mw-parser-output .centralized-discussion-navbar
  { border-color: #555; }
  body #box-6 .sidebar {
    background-color: #3c3830 !important;
    border-color: #754 !important;
  }
  img[alt="The Signpost"] { filter: invert(0.8); }
  
  /* wikidata */
  .mw-parser-output .wd-mp-header {
      color: #888 !important;
  }
  .mw-parser-output .wd-mp-headerbox,
  .mw-parser-output .wd-mp-subheader > div {
      background: #222e !important;
  }
  .wd-mp-headerimage {
      filter: invert();
  }
  body .wikibase-referenceview {
      background-color: #2c2c2c;
  }
  body .wb-preferred .wikibase-statementview-mainsnak {
      background-color: #292b29;
  }
  body .wb-deprecated .wikibase-statementview-mainsnak {
      background-color: #332929;
  }
  body .wd-box {
    background-color: #223;
    color: #ccc !important;
  }
  body .wd-box strong {
    color: #ccc !important;
  }
  body .wd-box strong img {
    filter: invert(1) contrast(0.4);
  }
  body .wd-box div {
    color: #aaa !important;
  }
  body .mw-content-ltr {
    background-color: #222 !important;
  }
  
  /* wikipedia (it) */
  
  body .sinottico, body .sinottico th {
      background-color: #333;
  }
  body .sinottico > tbody > tr > th:not(:only-child),
  body .sinottico_annidata > tbody > tr > th:not(:only-child) {
    background-color: #223;
    border-color: #555;
  }
  body .sinottico {
    border-color: #257;
  }
  body .sinottico > tbody > tr:not(:last-child) > td,
  body .sinottico > tbody > tr:not(:last-child) > th,
  body .sinottico_annidata > tbody > tr > td,
  body .sinottico_annidata > tbody > tr > th {
    border-color: #025;
  }
  
  /* wikibooks (de) */
  .regal {
      background-color: #33302c !important;
  }
  .kasten-interwiki {
      border-color: #577 !important;
      background-color: #455 !important;
  }
  
  /* wikipedia (de) */
  
  body .mw-parser-output .hauptseite-box-title {
      background-color: #345;
  }
  
  body .mw-parser-output .hauptseite-box-content,
  body .mw-parser-output .hauptseite-preview-wikidata {
      background-color: #272727;
      border-color: #555 !important;
  }
  
  /* In case of abusive usage of background style without CSS class. */
  body .gallery[style*="background"]:not([style*="background:none"]),
  body [style*="background"]:not([class]):not([style*="transparent"]):not([style*="background:none"]) {
      background-color: #333 !important;
      color: #ccc !important;
  }
  
  /* Fix unreadable text */
  body .mw-parser-output .templatebox-desc {
      text-shadow: none !important;
      font-size: inherit !important;
  }
  
  body .protected,
  body .mw-parser-output .templatebox-languagedependant,
  body .mw-parser-output .templatebox-usagesample,
  body .toptextcells,
  body .catlinks {
      background-color: #333 !important;
      border-color: #555 !important;
  }
  
  body .toptextcells td[style*="background:#DDDDDD;"] { background-color: #ddd2 !important; }
  body .toptextcells td[style*="background:#DDDDEE;"] { background-color: #dde2 !important; }
  body .toptextcells td[style*="background:#DDEEDD;"] { background-color: #ded2 !important; }
  body .toptextcells td[style*="background:#DDEEEE;"] { background-color: #dee2 !important; }
  body .toptextcells td[style*="background:#EEDDDD;"] { background-color: #edd2 !important; }
  body .toptextcells td[style*="background:#EEDDEE;"] { background-color: #ede2 !important; }
  body .toptextcells td[style*="background:#EEEEDD;"] { background-color: #eed2 !important; }
  body .toptextcells td[style*="background:#EEEEEE;"] { background-color: #eee2 !important; }
  
  body .toptextcells td[style*="background-color:#DDDDDD;"] { background-color: #ddd2 !important; }
  body .toptextcells td[style*="background-color:#DDDDEE;"] { background-color: #dde2 !important; }
  body .toptextcells td[style*="background-color:#DDEEDD;"] { background-color: #ded2 !important; }
  body .toptextcells td[style*="background-color:#DDEEEE;"] { background-color: #dee2 !important; }
  body .toptextcells td[style*="background-color:#EEDDDD;"] { background-color: #edd2 !important; }
  body .toptextcells td[style*="background-color:#EEDDEE;"] { background-color: #ede2 !important; }
  body .toptextcells td[style*="background-color:#EEEEDD;"] { background-color: #eed2 !important; }
  body .toptextcells td[style*="background-color:#EEEEEE;"] { background-color: #eee2 !important; }
  
  body .toptextcells td[style*="background:#ddd;"] { background-color: #ddd2 !important; }
  body .toptextcells td[style*="background:#dde;"] { background-color: #dde2 !important; }
  body .toptextcells td[style*="background:#ded;"] { background-color: #ded2 !important; }
  body .toptextcells td[style*="background:#dee;"] { background-color: #dee2 !important; }
  body .toptextcells td[style*="background:#edd;"] { background-color: #edd2 !important; }
  body .toptextcells td[style*="background:#ede;"] { background-color: #ede2 !important; }
  body .toptextcells td[style*="background:#eed;"] { background-color: #eed2 !important; }
  body .toptextcells td[style*="background:#eee;"] { background-color: #eee2 !important; }
  
  body .toptextcells td[style*="background-color:#ddd;"] { background-color: #ddd2 !important; }
  body .toptextcells td[style*="background-color:#dde;"] { background-color: #dde2 !important; }
  body .toptextcells td[style*="background-color:#ded;"] { background-color: #ded2 !important; }
  body .toptextcells td[style*="background-color:#dee;"] { background-color: #dee2 !important; }
  body .toptextcells td[style*="background-color:#edd;"] { background-color: #edd2 !important; }
  body .toptextcells td[style*="background-color:#ede;"] { background-color: #ede2 !important; }
  body .toptextcells td[style*="background-color:#eed;"] { background-color: #eed2 !important; }
  body .toptextcells td[style*="background-color:#eee;"] { background-color: #eee2 !important; }
  
  body .FragenWP-rechts > div {
      border-color: #457 !important;
  }
  body .FragenWP-rechts > div > div {
      background-color: #333 !important;
      border-color: #347 !important;
  }
  
  body table > * > tr.hintergrundfarbe1 > th,
  table > * > tr > th.hintergrundfarbe1,
  table.hintergrundfarbe1,
  .hintergrundfarbe1 {
      background-color: #333;
  }
  
  body table > * > tr.hintergrundfarbe2 > th,
  table > * > tr > th.hintergrundfarbe2,
  table.hintergrundfarbe2,
  .hintergrundfarbe2 {
      background-color: #222;
  }
  
  body table > * > tr.hintergrundfarbe3 > th,
  table > * > tr > th.hintergrundfarbe3,
  table.hintergrundfarbe3,
  .hintergrundfarbe3 {
      background-color: #650;
  }
  
  body table > * > tr.hintergrundfarbe4 > th,
  table > * > tr > th.hintergrundfarbe4,
  table.hintergrundfarbe4,
  .hintergrundfarbe4 {
      background-color: #640;
  }
  
  body table > * > tr.hintergrundfarbe5 > th,
  body table > * > tr > th.hintergrundfarbe5,
  body table.hintergrundfarbe5,
  body .hintergrundfarbe5 {
      background-color: #345;
  }
  
  body table > * > tr.hintergrundfarbe6 > th,
  body table > * > tr > th.hintergrundfarbe6,
  body table.hintergrundfarbe6,
  body .hintergrundfarbe6 {
      background-color: #237;
  }
  
  body table > * > tr.hintergrundfarbe7 > th,
  body table > * > tr > th.hintergrundfarbe7,
  body table.hintergrundfarbe7,
  body .hintergrundfarbe7 {
      background-color: #522;
  }
  
  body table > * > tr.hintergrundfarbe8 > th,
  body table > * > tr > th.hintergrundfarbe8,
  body table.hintergrundfarbe8,
  body .hintergrundfarbe8 {
      background-color: #760;
  }
  
  body table > * > tr.hintergrundfarbe9 > th,
  body table > * > tr > th.hintergrundfarbe9,
  body table.hintergrundfarbe9,
  body .hintergrundfarbe9 {
      background-color: #254;
  }
  
  
  /* Syntax highlight */
  /*   - Page type JS / CSS */
  body .mw-content-ltr.mw-highlight span[id] .linenos {
      left: -3.5em;
  }
  /*   - Page type JS / CSS  and  syntaxhighlight */
  body .mw-content-ltr.mw-highlight .linenos {
      color: black;
      display: inline-block; /* Try to fix problem of misposition by some browser */
  }
  
  body .mw-highlight {
      background: unset !important;
  }
  body .mw-highlight pre {
      background: #333 !important;
  }
  body .mw-highlight pre span,
  body code.mw-highlight span {
      filter: brightness(155%);
  }
  
  body .mw-highlight .gp {
      color: #279;
  }
  body .mw-highlight .ss {
      color: #26f;
  }
  body .mw-highlight .s {
      color: #f42;
  }
  body .mw-highlight .vm,
  body .mw-highlight .fm {
      color: #2c728a;
  }
  body .mw-highlight .hll {
      background-color: #023;
  }
  body .mw-highlight .mi {
      color: #aaa;
  }
  
  body .mw-highlight .nn,
  body .mw-highlight .nc {
      color: #79f;
  }
  body .mw-highlight .nf {
      color: #49f;
  }
  body .mw-highlight .nv {
      color: #17f;
  }
  body .mw-highlight .vg {
      color: #1977ff;
  }
  body .mw-highlight .o {
      color: #44cccc;
  }
  body .mw-highlight .vi {
      color: #15f;
  }
  body .mw-highlight .vc {
      color: #46f;
  }
  body .mw-highlight .nt {
      color: #00b000;
  }
  body .mw-highlight .na {
      color: #aac029;
  }
  
  /* Boxes */
  
  #mw-indicator-mw-helplink a {
      background-image: url(https://upload.wikimedia.org/wikipedia/commons/c/c9/Help-lightgray.svg);
  }
  
  .mw-indicators {
  background-color: unset;
  /*border-radius: 5px;
  padding: 2px;*/
  }
  
  
  /* UI icons */
  body .oo-ui-icon-bell,
  body .mw-ui-icon-bell::before,
  body .oo-ui-icon-tray,
  body .mw-ui-icon-tray::before,
  body .mw-ui-icon-wikimedia-watchlist::before,
  body .mw-ui-icon-wikimedia-userAvatar::before,
  body .oo-ui-icon-bookmark,
  body .mw-ui-icon-bookmark::before,
  body .oo-ui-icon-trash,
  body .mw-ui-icon-trash::before,
  body .oo-ui-indicatorElement-indicator,
  body .oo-ui-iconElement-icon {
    filter: invert(0.8);
  }
  
  /* UI buttons */
  body .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
    background-color: #333;
  }
  body .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
    background-color: #047;
  }
  
  /*
  body .vector-user-menu-legacy #pt-anonuserpage,
  body .vector-user-menu-legacy #pt-tmpuserpage,
  body .vector-user-menu-legacy #pt-userpage a {
    filter: brightness(1.4);
  }
  */
  
  
  /* Actions */
  
  #p-cactions ul li, #p-cactions ul li a {
      border-radius: 0;
  }
  
  #p-cactions li.selected {
      background-color: #222;
      border-color: #fabd23;
  }
  
  #p-cactions li a {
      background-color: #334 !important;
  }
  
  
  /* Invert for rendering <math> */
  body .mwe-math-fallback-image-inline, .mwe-math-fallback-image-display {
      /*background-color: #ccc !important;*/
      filter: invert(1) brightness(75%) hue-rotate(180deg) !important;
  }
  
  body .mw-hiero-table {
  }
  
  body .mw-hiero-table img {
      background-color: #ccc !important;
      filter: invert(1) brightness(75%);
  }
  
  figure,
  div.thumbinner {
      border-color: #478 !important;
      background-color: #555 !important;
  }
  
  html figure[typeof=mw:File/Thumb] img,
  html img.thumbimage {
      background-color: #777 !important;
      border: 1px solid #478 !important;
  }
  
  img.transparent:not(figure[typeof=mw:File/Thumb] img),
  img.transparent:not(.thumbimage) {
      background-color: #ccc !important;
      border: 1px solid #999 !important;
      padding: 1em;
  }
  
  li.gallerybox figure[typeof=mw:File/Thumb],
  li.gallerybox div.thumb {
      border-color: #79a !important;
      background-color: #444 !important;
  }
  li.gallerybox figure[typeof=mw:File/Thumb] img,
  li.gallerybox div.thumb img {
      background-color: #ccc !important;
  }
  
  .mw-toolbox, *.mw-toolbox, body div.mw-toolbox {
      background: #222 !important;
      border-color: #448 !important;
  }
  
  h1, h2, h3, h4, h5, h6 {
      color: #eee;
  }
  
  div.titreprojet {
      color: #478 !important;
  }
  
  body .mw_metadata th, body .mw_metadata td {
      background-color: #224 !important;
  }
  
  .warningbox, div.livre-vitrine, div.template-documentation, div.livresprojet, div.texteprojet, div.navboxlivre, body .etiquette, body .cduinfo, body .cadre, body div.bandeautexte, .nopagetext, div.template-documentation, div.docbandeau, div.docmodele, div.entete-bistro, div.urgence, div.boite-invisible > div, body .boite {
      background-color: #222 !important;
  }
  body .bandeau,
  body .etiquette {
    border-top-color: #8888;
    border-bottom-color: #8888;
    border-right-color: #8888;
  }
  
  body .cadretitre {
      background-color: #258 !important;
  }
  
  body .mw-parser-output .taxontree-lcell, body .mw-parser-output .wikidatainfobox-lcell {
      background: #334 !important;
  }
  
  body #wdinfo_ac th {
      background-color: #348 !important;
  }
  
  
  table.inforemarque, div.navboxtitre, body div#sisterproject, body .otherprojects, body .otherprojects p, body span.touche, body #vandale {
      background-color: #333 !important;
  }
  
  body .vega, div.accueiltitre {
      background-color: #555 !important;
  }
  
  table td.livre-accueil, body div.bandeautitre, body .licence, body .mw-parser-output #wdinfoboxcaption {
      background-color: #444 !important;
  }
  
  body .bloc-citation {
      background-color: #224 !important;
      border-color: #447 !important;
  }
  
  body #FlickrReview {
      background-color: #234 !important;
  }
  
  body.page-Wikip\xE9dia_Accueil_principal .mw-content-text div.plainlinks {
      color: unset !important;
  }
  
  body .boite-grise {
      background-color: #c7c7c71b !important;
  }
  
  body.page-Wikip\xE9dia_Accueil_principal .mw-content-text div.plainlinks div, body #histlegend {
      background-color: #222 !important;
      color: unset !important;
  }
  
  body #accueil_2017_en-tete {
      background: linear-gradient(to bottom,#333,#eff) !important;
  }
  body .NavHead{
      background-color: #448 !important;
      color: #ccc !important;
  }
  body .NavFrame, body .NavContent, body .selectionarticle {
      background-color: #333 !important;
  }
  
  body.cafe dl, body.cafe dl dl dl, body.cafe dl dl dl dl dl, body.cafe dl dl dl dl dl dl dl, body.cafe dl dl dl dl dl dl dl dl dl {
      background-color: #231 !important;
  }
  
  body.cafe dl dl, body.cafe dl dl dl dl, body.cafe dl dl dl dl dl dl, body.cafe dl dl dl dl dl dl dl dl, body.cafe dl dl dl dl dl dl dl dl dl dl {
      background-color: #222 !important;
  }
  
  body.ns--1 #content, body.ns--2 #content {
      background-blend-mode: color-burn;
  }
  
  /* Translate */
  
  .ext-translate-container .tux-messagelist .tux-message-pagemode .tux-message-item-compact {
      background-color: #333 !important;
      color: #ccc !important;
  }
  .ext-translate-container .tux-messagelist .tux-message-pagemode {
      background-color: #222 !important;
      color: #ccc !important;
  }
  .ext-translate-container .tux-messagelist .tux-message-pagemode .tux-message-item-compact:hover {
      background-color: #3388cc !important;
      color: #ccc !important;
  }
  .tux-messagelist .tux-message-pagemode .tux-pagemode-source,
  .tux-messagelist .tux-message-pagemode .tux-pagemode-translation {
      color: unset !important;
  }`;function Ak(e){console.log(e),window.postMessage("QUERY="+e)}function Mk(e){window.location.assign("https://en.wikipedia.org/wiki/"+e.replace(" ","_"))}function Nk(e){let t=new Date,n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),r=new Intl.DateTimeFormat("en",{month:"long"}).format(t),o=new Intl.DateTimeFormat("en",{day:"numeric"}).format(t);const i=`${r}_${o},_${n}`;window.location.assign("https://en.wikipedia.org/wiki/Wikipedia:Today%27s_featured_article/"+i)}function Fk(e){window.location.assign("https://en.wikipedia.org/wiki/Special:Random")}function Kk(e){const t=document.getElementById("mw-navigation"),n=document.getElementById("footer"),r=document.getElementById("content");(t==null?void 0:t.style.visibility)=="hidden"?(t.style.visibility="unset",n.style.visibility="unset",r.style.marginLeft="10em",r.style.borderRightWidth="0"):(t.style.visibility="hidden",n.style.visibility="hidden",r.style.marginLeft="5em",r.style.marginRight="5em",r.style.borderRightWidth="1px")}function Hk(e){const t="boostDarkmode";if(document.getElementById(t)){console.log("Deactivate");var r=document.getElementById(t);r==null||r.remove()}else{console.log("Activate");const o=document.createElement("style");o.innerText=Rk,o.id=t,document.head.appendChild(o)}}function zk({inputRef:e,queryHandlerId:t,setVisibility:n}){const[r,o]=Z.useState(""),i=function(l){l||(l=window.event);var a=l.code||l.key;if(a=="Enter"){if(r){switch(t){case"searchWiki":Mk(r);break;case"askGeneralQuestion":Ak(r);break;default:console.log("Invalid queryHandlerId: ",t)}n(!1)}}else a=="Escape"&&(o(""),n(!1))};return L(Oe.Input,{ref:e,style:{paddingRight:"10px"},value:r,onValueChange:o,autoFocus:!0,placeholder:"Enter query...",onKeyDown:i})}function jk(){const[e,t]=Z.useState("linear"),n=Z.useRef(null),r=Z.useRef(null),o=Z.useRef(null),[i,l]=Z.useState(!1),a=()=>{var v;l(!1),(v=n==null?void 0:n.current)==null||v.focus()},[u,s]=Z.useState("");window.addEventListener("message",v=>{const k=v.data;if(k.includes("ANSWER=")){const h=v.data.replace("ANSWER=","");console.log("Received answer:",h),s(h)}else if(k.includes("ERROR=")){const h=v.data.replace("ERROR=","");console.log("Encountered error:",h)}}),Z.useEffect(()=>{var v;(v=n==null?void 0:n.current)==null||v.focus()},[]);function f(v){var k;l(!0),(k=r==null?void 0:r.current)==null||k.focus(),g(v)}const[d,g]=Z.useState("Please change the query handler id where necesseray");return H("div",{id:"cmdk",className:"raycast",children:[u?L("p",{children:u}):L(mr,{}),H(Oe,{className:"cmdk-topelement",value:e,onValueChange:v=>t(v),children:[L("div",{"cmdk-raycast-top-shine":""}),H("div",{className:"raycast-inputs",children:[L(Oe.Input,{ref:n,style:{flex:"6 285px"},autoFocus:!0,placeholder:"Search commands..."}),i?L(Oe,{className:"cmd-query",children:L(zk,{inputRef:r,queryHandlerId:d,setVisibility:a})}):L(mr,{})]}),L("hr",{"cmdk-raycast-loader":""}),H(Oe.List,{ref:o,children:[L(Oe.Empty,{children:"No results found."}),H(Oe.Group,{heading:"Navigation",children:[H(Mn,{isCommand:!0,value:"Search Wikipedia",onSelect:f,queryHandlerId:"searchWiki",children:[L(Nn,{children:L(Lk,{style:{width:12,height:12}})}),"Search Wikipedia"]}),H(Mn,{isCommand:!0,value:"Show Today's Featured Article",onSelect:Nk,children:[L(Nn,{children:L(Pk,{style:{width:12,height:12}})}),"Show Today's Featured Article"]}),H(Mn,{isCommand:!0,value:"Show Random Article",onSelect:Fk,children:[L(Nn,{children:L(Dk,{style:{width:12,height:12}})}),"Show Random Article"]})]}),H(Oe.Group,{heading:"Appearance",children:[H(Mn,{isCommand:!0,value:"Toggle Focus Mode",onSelect:Kk,children:[L(Nn,{children:L(_k,{style:{width:12,height:12}})}),"Toggle Focus Mode"]}),H(Mn,{isCommand:!0,value:"Toggle Dark Mode",onSelect:Hk,children:[L(Nn,{children:L(Ok,{style:{width:12,height:12}})}),"Toggle Dark Mode"]})]}),L(Oe.Group,{heading:"AI Helper",children:H(Mn,{value:"Ask General Question",onSelect:f,queryHandlerId:"askGeneralQuestion",children:[L(Nn,{children:L(Ek,{style:{width:12,height:12}})}),"Ask General Question"]})})]}),H("div",{"cmdk-raycast-footer":"",children:[L(Uk,{}),H("button",{"cmdk-raycast-open-trigger":"",children:["Open Application",L("kbd",{children:"\u21B5"})]}),L("hr",{}),L(Bk,{listRef:o,selectedValue:e,inputRef:n})]})]})]})}function Mn({children:e,value:t,isCommand:n=!1,onSelect:r,queryHandlerId:o}){return H(Oe.Item,{value:t,onSelect:()=>{r?r(o||"qhid not defined"):console.log("Please define handler for this item.")},children:[e,L("span",{"cmdk-raycast-meta":"",children:n?"Command":"Information Retrieval"})]})}function Bk({inputRef:e,listRef:t,selectedValue:n}){const[r,o]=Z.useState(!1);return Z.useEffect(()=>{function i(l){l.key==="k"&&l.metaKey&&(l.preventDefault(),o(a=>!a))}return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[]),Z.useEffect(()=>{const i=t.current;!i||(r?i.style.overflow="hidden":i.style.overflow="")},[r,t]),H(i1,{open:r,onOpenChange:o,modal:!0,children:[H(l1,{"cmdk-raycast-subcommand-trigger":"",onClick:()=>o(!0),"aria-expanded":r,children:["Actions",L("kbd",{children:"\u2318"}),L("kbd",{children:"K"})]}),L(a1,{side:"top",align:"end",className:"raycast-submenu",sideOffset:16,alignOffset:0,onCloseAutoFocus:i=>{var l;i.preventDefault(),(l=e==null?void 0:e.current)==null||l.focus()},children:H(Oe,{children:[L(Oe.List,{children:H(Oe.Group,{heading:n,children:[H(oi,{shortcut:"\u21B5",children:[L(Wk,{}),"Open Application"]}),H(oi,{shortcut:"\u2318 \u21B5",children:[L(Od,{}),"Show in Finder"]}),H(oi,{shortcut:"\u2318 I",children:[L(Od,{}),"Show Info in Finder"]}),H(oi,{shortcut:"\u2318 \u21E7 F",children:[L(Vk,{}),"Add to Favorites"]})]})}),L(Oe.Input,{placeholder:"Search for actions..."})]})})]})}function oi({children:e,shortcut:t}){return H(Oe.Item,{children:[e,L("div",{"cmdk-raycast-submenu-shortcuts":"",children:t.split(" ").map(n=>L("kbd",{children:n},n))})]})}function Uk(){return L("svg",{width:"1024",height:"1024",viewBox:"0 0 1024 1024",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:L("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M934.302 511.971L890.259 556.017L723.156 388.902V300.754L934.302 511.971ZM511.897 89.5373L467.854 133.583L634.957 300.698H723.099L511.897 89.5373ZM417.334 184.275L373.235 228.377L445.776 300.923H533.918L417.334 184.275ZM723.099 490.061V578.209L795.641 650.755L839.74 606.652L723.099 490.061ZM697.868 653.965L723.099 628.732H395.313V300.754L370.081 325.987L322.772 278.675L278.56 322.833L325.869 370.146L300.638 395.379V446.071L228.097 373.525L183.997 417.627L300.638 534.275V634.871L133.59 467.925L89.4912 512.027L511.897 934.461L555.996 890.359L388.892 723.244H489.875L606.516 839.892L650.615 795.79L578.074 723.244H628.762L653.994 698.011L701.303 745.323L745.402 701.221L697.868 653.965Z",fill:"#FF6363"})})}function Wk(){return L("svg",{width:"32",height:"32",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:L("path",{d:"M14.25 4.75V3.75C14.25 2.64543 13.3546 1.75 12.25 1.75H3.75C2.64543 1.75 1.75 2.64543 1.75 3.75V4.75M14.25 4.75V12.25C14.25 13.3546 13.3546 14.25 12.25 14.25H3.75C2.64543 14.25 1.75 13.3546 1.75 12.25V4.75M14.25 4.75H1.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Od(){return L("svg",{width:"32",height:"32",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:L("path",{d:"M5 4.75V6.25M11 4.75V6.25M8.75 1.75H3.75C2.64543 1.75 1.75 2.64543 1.75 3.75V12.25C1.75 13.3546 2.64543 14.25 3.75 14.25H8.75M8.75 1.75H12.25C13.3546 1.75 14.25 2.64543 14.25 3.75V12.25C14.25 13.3546 13.3546 14.25 12.25 14.25H8.75M8.75 1.75L7.08831 7.1505C6.9202 7.69686 7.32873 8.25 7.90037 8.25C8.36961 8.25 8.75 8.63039 8.75 9.09963V14.25M5 10.3203C5 10.3203 5.95605 11.25 8 11.25C10.0439 11.25 11 10.3203 11 10.3203",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Vk(){return L("svg",{width:"32",height:"32",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:L("path",{d:"M7.43376 2.17103C7.60585 1.60966 8.39415 1.60966 8.56624 2.17103L9.61978 5.60769C9.69652 5.85802 9.92611 6.02873 10.186 6.02873H13.6562C14.2231 6.02873 14.4665 6.75397 14.016 7.10088L11.1582 9.3015C10.9608 9.45349 10.8784 9.71341 10.9518 9.95262L12.0311 13.4735C12.2015 14.0292 11.5636 14.4777 11.1051 14.1246L8.35978 12.0106C8.14737 11.847 7.85263 11.847 7.64022 12.0106L4.89491 14.1246C4.43638 14.4777 3.79852 14.0292 3.96889 13.4735L5.04824 9.95262C5.12157 9.71341 5.03915 9.45349 4.84178 9.3015L1.98404 7.10088C1.53355 6.75397 1.77692 6.02873 2.34382 6.02873H5.81398C6.07389 6.02873 6.30348 5.85802 6.38022 5.60769L7.43376 2.17103Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Nn({children:e,size:t="20px"}){return H("div",{className:"blurLogo",style:{width:t,height:t},children:[L("div",{className:"bg","aria-hidden":!0,children:e}),L("div",{className:"inner",children:e})]})}const qk={DUMMY:["cmd","\xFCasdf"]};function Qk(){Z.useState(!1);const t={DUMMY:Z.useCallback(()=>{},[])};return L(zp.exports.HotKeys,{keyMap:qk,handlers:t,children:L("div",{className:"arc-boost",children:L(jk,{})})})}Hp(document.getElementById("root")).render(L(Z.StrictMode,{children:L(Qk,{})}));

// UNTIL HERE

console.log("Still alive 🫡")

// Handling shortcuts
const menu = document.getElementById('root')
menu.style.visibility = 'hidden'

document.onkeyup = function (e) {
    if (e.ctrlKey && e.key === 'k') {
        // use e.metaKey for cmd
        console.log('Extension: keyshortcut detected!')
        if (menu.style.visibility === 'hidden') {
            menu.style.visibility = 'visible'
        } else {
            menu.style.visibility = 'hidden'
        }
    }
};