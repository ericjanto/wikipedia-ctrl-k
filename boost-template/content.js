const element = document.createElement("div");
element.id = "root";
element.className = "root";
element.style.position = 'fixed';

document.body.prepend(element);

async function run(question) {
    const port = chrome.runtime.connect();
    port.onMessage.addListener(function (msg) {
        if (msg.answer) {
            // console.log('Answer: ', msg.answer)
            window.postMessage("ANSWER=" + msg.answer)
        } else if (msg.error) {
            // console.log(msg)
            window.postMessage("ERROR=login")
        } else {
            window.postMessage("ERROR=unknown")
        }
    });
    port.postMessage({ question });
}

window.addEventListener("message", (e) => {
    const payload = e.data
    if (payload.includes("QUERY=")) {
        const query = e.data.replace("QUERY=", "")
        // console.log("Received query:", query)
        run(query)
    }
})

// Transpiled code
function gm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in t)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(t,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function xc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Gd(t){var e=t.default;if(typeof e=="function"){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return t[r]}})}),n}var y={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),ym=Symbol.for("react.portal"),vm=Symbol.for("react.fragment"),bm=Symbol.for("react.strict_mode"),km=Symbol.for("react.profiler"),wm=Symbol.for("react.provider"),_m=Symbol.for("react.context"),xm=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),Em=Symbol.for("react.memo"),Sm=Symbol.for("react.lazy"),Ra=Symbol.iterator;function Am(t){return t===null||typeof t!="object"?null:(t=Ra&&t[Ra]||t["@@iterator"],typeof t=="function"?t:null)}var Zd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qd=Object.assign,Yd={};function hr(t,e,n){this.props=t,this.context=e,this.refs=Yd,this.updater=n||Zd}hr.prototype.isReactComponent={};hr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xd(){}Xd.prototype=hr.prototype;function Cc(t,e,n){this.props=t,this.context=e,this.refs=Yd,this.updater=n||Zd}var Ec=Cc.prototype=new Xd;Ec.constructor=Cc;Qd(Ec,hr.prototype);Ec.isPureReactComponent=!0;var Fa=Array.isArray,Jd=Object.prototype.hasOwnProperty,Sc={current:null},ef={key:!0,ref:!0,__self:!0,__source:!0};function tf(t,e,n){var r,o={},i=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(i=""+e.key),e)Jd.call(e,r)&&!ef.hasOwnProperty(r)&&(o[r]=e[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),a=0;a<l;a++)c[a]=arguments[a+2];o.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:ho,type:t,key:i,ref:s,props:o,_owner:Sc.current}}function Dm(t,e){return{$$typeof:ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ac(t){return typeof t=="object"&&t!==null&&t.$$typeof===ho}function Tm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Oa=/\/+/g;function xs(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Tm(""+t.key):e.toString(36)}function Jo(t,e,n,r,o){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ho:case ym:s=!0}}if(s)return s=t,o=o(s),t=r===""?"."+xs(s,0):r,Fa(o)?(n="",t!=null&&(n=t.replace(Oa,"$&/")+"/"),Jo(o,e,n,"",function(a){return a})):o!=null&&(Ac(o)&&(o=Dm(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Oa,"$&/")+"/")+t)),e.push(o)),1;if(s=0,r=r===""?".":r+":",Fa(t))for(var l=0;l<t.length;l++){i=t[l];var c=r+xs(i,l);s+=Jo(i,e,n,c,o)}else if(c=Am(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=r+xs(i,l++),s+=Jo(i,e,n,c,o);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function So(t,e,n){if(t==null)return t;var r=[],o=0;return Jo(t,r,"","",function(i){return e.call(n,i,o++)}),r}function Pm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Re={current:null},ei={transition:null},Lm={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:ei,ReactCurrentOwner:Sc};z.Children={map:So,forEach:function(t,e,n){So(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return So(t,function(){e++}),e},toArray:function(t){return So(t,function(e){return e})||[]},only:function(t){if(!Ac(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=hr;z.Fragment=vm;z.Profiler=km;z.PureComponent=Cc;z.StrictMode=bm;z.Suspense=Cm;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lm;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Qd({},t.props),o=t.key,i=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,s=Sc.current),e.key!==void 0&&(o=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Jd.call(e,c)&&!ef.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var a=0;a<c;a++)l[a]=arguments[a+2];r.children=l}return{$$typeof:ho,type:t.type,key:o,ref:i,props:r,_owner:s}};z.createContext=function(t){return t={$$typeof:_m,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wm,_context:t},t.Consumer=t};z.createElement=tf;z.createFactory=function(t){var e=tf.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:xm,render:t}};z.isValidElement=Ac;z.lazy=function(t){return{$$typeof:Sm,_payload:{_status:-1,_result:t},_init:Pm}};z.memo=function(t,e){return{$$typeof:Em,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=ei.transition;ei.transition={};try{t()}finally{ei.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return Re.current.useCallback(t,e)};z.useContext=function(t){return Re.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Re.current.useDeferredValue(t)};z.useEffect=function(t,e){return Re.current.useEffect(t,e)};z.useId=function(){return Re.current.useId()};z.useImperativeHandle=function(t,e,n){return Re.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Re.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Re.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Re.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Re.current.useReducer(t,e,n)};z.useRef=function(t){return Re.current.useRef(t)};z.useState=function(t){return Re.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Re.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Re.current.useTransition()};z.version="18.2.0";(function(t){t.exports=z})(y);const te=xc(y.exports),Im=gm({__proto__:null,default:te},[y.exports]);var mo={exports:{}},We={},nf={exports:{}},rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,E){var T=I.length;I.push(E);e:for(;0<T;){var O=T-1>>>1,F=I[O];if(0<o(F,E))I[O]=E,I[T]=F,T=O;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var E=I[0],T=I.pop();if(T!==E){I[0]=T;e:for(var O=0,F=I.length,J=F>>>1;O<J;){var pe=2*(O+1)-1,un=I[pe],Qe=pe+1,dn=I[Qe];if(0>o(un,T))Qe<F&&0>o(dn,un)?(I[O]=dn,I[Qe]=T,O=Qe):(I[O]=un,I[pe]=T,O=pe);else if(Qe<F&&0>o(dn,T))I[O]=dn,I[Qe]=T,O=Qe;else break e}}return E}function o(I,E){var T=I.sortIndex-E.sortIndex;return T!==0?T:I.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],a=[],u=1,d=null,f=3,m=!1,b=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var E=n(a);E!==null;){if(E.callback===null)r(a);else if(E.startTime<=I)r(a),E.sortIndex=E.expirationTime,e(c,E);else break;E=n(a)}}function w(I){if(v=!1,g(I),!b)if(n(c)!==null)b=!0,$(k);else{var E=n(a);E!==null&&Ae(w,E.startTime-I)}}function k(I,E){b=!1,v&&(v=!1,h(A),A=-1),m=!0;var T=f;try{for(g(E),d=n(c);d!==null&&(!(d.expirationTime>E)||I&&!q());){var O=d.callback;if(typeof O=="function"){d.callback=null,f=d.priorityLevel;var F=O(d.expirationTime<=E);E=t.unstable_now(),typeof F=="function"?d.callback=F:d===n(c)&&r(c),g(E)}else r(c);d=n(c)}if(d!==null)var J=!0;else{var pe=n(a);pe!==null&&Ae(w,pe.startTime-E),J=!1}return J}finally{d=null,f=T,m=!1}}var _=!1,C=null,A=-1,N=5,L=-1;function q(){return!(t.unstable_now()-L<N)}function ye(){if(C!==null){var I=t.unstable_now();L=I;var E=!0;try{E=C(!0,I)}finally{E?we():(_=!1,C=null)}}else _=!1}var we;if(typeof p=="function")we=function(){p(ye)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,j=D.port2;D.port1.onmessage=ye,we=function(){j.postMessage(null)}}else we=function(){x(ye,0)};function $(I){C=I,_||(_=!0,we())}function Ae(I,E){A=x(function(){I(t.unstable_now())},E)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){b||m||(b=!0,$(k))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var E=3;break;default:E=f}var T=f;f=E;try{return I()}finally{f=T}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,E){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var T=f;f=I;try{return E()}finally{f=T}},t.unstable_scheduleCallback=function(I,E,T){var O=t.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?O+T:O):T=O,I){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=T+F,I={id:u++,callback:E,priorityLevel:I,startTime:T,expirationTime:F,sortIndex:-1},T>O?(I.sortIndex=T,e(a,I),n(c)===null&&I===n(a)&&(v?(h(A),A=-1):v=!0,Ae(w,T-O))):(I.sortIndex=F,e(c,I),b||m||(b=!0,$(k))),I},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(I){var E=f;return function(){var T=f;f=E;try{return I.apply(this,arguments)}finally{f=T}}}})(rf);(function(t){t.exports=rf})(nf);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of=y.exports,je=nf.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sf=new Set,Vr={};function Pn(t,e){ir(t,e),ir(t+"Capture",e)}function ir(t,e){for(Vr[t]=e,t=0;t<e.length;t++)sf.add(e[t])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wl=Object.prototype.hasOwnProperty,Rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ma={},Na={};function Fm(t){return wl.call(Na,t)?!0:wl.call(Ma,t)?!1:Rm.test(t)?Na[t]=!0:(Ma[t]=!0,!1)}function Om(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mm(t,e,n,r){if(e===null||typeof e>"u"||Om(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Fe(t,e,n,r,o,i,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=s}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ke[t]=new Fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ke[e]=new Fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ke[t]=new Fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ke[t]=new Fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ke[t]=new Fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ke[t]=new Fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ke[t]=new Fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ke[t]=new Fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ke[t]=new Fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dc=/[\-:]([a-z])/g;function Tc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dc,Tc);ke[e]=new Fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dc,Tc);ke[e]=new Fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dc,Tc);ke[e]=new Fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ke[t]=new Fe(t,1,!1,t.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ke[t]=new Fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pc(t,e,n,r){var o=ke.hasOwnProperty(e)?ke[e]:null;(o!==null?o.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mm(e,n,o,r)&&(n=null),r||o===null?Fm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):o.mustUseProperty?t[o.propertyName]=n===null?o.type===3?!1:"":n:(e=o.attributeName,r=o.attributeNamespace,n===null?t.removeAttribute(e):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qt=of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ao=Symbol.for("react.element"),$n=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Lc=Symbol.for("react.strict_mode"),_l=Symbol.for("react.profiler"),lf=Symbol.for("react.provider"),cf=Symbol.for("react.context"),Ic=Symbol.for("react.forward_ref"),xl=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),Rc=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),af=Symbol.for("react.offscreen"),qa=Symbol.iterator;function wr(t){return t===null||typeof t!="object"?null:(t=qa&&t[qa]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,Cs;function Pr(t){if(Cs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cs=e&&e[1]||""}return`
`+Cs+t}var Es=!1;function Ss(t,e){if(!t||Es)return"";Es=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(a){var r=a}Reflect.construct(t,[],e)}else{try{e.call()}catch(a){r=a}t.call(e.prototype)}else{try{throw Error()}catch(a){r=a}t()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var o=a.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var c=`
`+o[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{Es=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pr(t):""}function Nm(t){switch(t.tag){case 5:return Pr(t.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return t=Ss(t.type,!1),t;case 11:return t=Ss(t.type.render,!1),t;case 1:return t=Ss(t.type,!0),t;default:return""}}function El(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zn:return"Fragment";case $n:return"Portal";case _l:return"Profiler";case Lc:return"StrictMode";case xl:return"Suspense";case Cl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cf:return(t.displayName||"Context")+".Consumer";case lf:return(t._context.displayName||"Context")+".Provider";case Ic:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rc:return e=t.displayName||null,e!==null?e:El(t.type)||"Memo";case Kt:e=t._payload,t=t._init;try{return El(t(e))}catch{}}return null}function qm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(e);case 8:return e===Lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $m(t){var e=uf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Do(t){t._valueTracker||(t._valueTracker=$m(t))}function df(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=uf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sl(t,e){var n=e.checked;return ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function $a(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ff(t,e){e=e.checked,e!=null&&Pc(t,"checked",e,!1)}function Al(t,e){ff(t,e);var n=rn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dl(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dl(t,e.type,rn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function za(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dl(t,e,n){(e!=="number"||gi(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Lr=Array.isArray;function Yn(t,e,n,r){if(t=t.options,e){e={};for(var o=0;o<n.length;o++)e["$"+n[o]]=!0;for(n=0;n<t.length;n++)o=e.hasOwnProperty("$"+t[n].value),t[n].selected!==o&&(t[n].selected=o),o&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rn(n),e=null,o=0;o<t.length;o++){if(t[o].value===n){t[o].selected=!0,r&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function Tl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ka(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Lr(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rn(n)}}function pf(t,e){var n=rn(e.value),r=rn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ba(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var To,mf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,o){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,o)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=To.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zm=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(t){zm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fr[e]=Fr[t]})});function gf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fr.hasOwnProperty(t)&&Fr[t]?(""+e).trim():e+"px"}function yf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=gf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,o):t[n]=o}}var Km=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ll(t,e){if(e){if(Km[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Il(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rl=null;function Fc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fl=null,Xn=null,Jn=null;function Ha(t){if(t=vo(t)){if(typeof Fl!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Gi(e),Fl(t.stateNode,t.type,e))}}function vf(t){Xn?Jn?Jn.push(t):Jn=[t]:Xn=t}function bf(){if(Xn){var t=Xn,e=Jn;if(Jn=Xn=null,Ha(t),e)for(t=0;t<e.length;t++)Ha(e[t])}}function kf(t,e){return t(e)}function wf(){}var As=!1;function _f(t,e,n){if(As)return t(e,n);As=!0;try{return kf(t,e,n)}finally{As=!1,(Xn!==null||Jn!==null)&&(wf(),bf())}}function Gr(t,e){var n=t.stateNode;if(n===null)return null;var r=Gi(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Ol=!1;if(Ft)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){Ol=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{Ol=!1}function Bm(t,e,n,r,o,i,s,l,c){var a=Array.prototype.slice.call(arguments,3);try{e.apply(n,a)}catch(u){this.onError(u)}}var Or=!1,yi=null,vi=!1,Ml=null,Hm={onError:function(t){Or=!0,yi=t}};function Um(t,e,n,r,o,i,s,l,c){Or=!1,yi=null,Bm.apply(Hm,arguments)}function jm(t,e,n,r,o,i,s,l,c){if(Um.apply(this,arguments),Or){if(Or){var a=yi;Or=!1,yi=null}else throw Error(S(198));vi||(vi=!0,Ml=a)}}function Ln(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ua(t){if(Ln(t)!==t)throw Error(S(188))}function Vm(t){var e=t.alternate;if(!e){if(e=Ln(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ua(o),t;if(i===r)return Ua(o),e;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Cf(t){return t=Vm(t),t!==null?Ef(t):null}function Ef(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ef(t);if(e!==null)return e;t=t.sibling}return null}var Sf=je.unstable_scheduleCallback,ja=je.unstable_cancelCallback,Wm=je.unstable_shouldYield,Gm=je.unstable_requestPaint,le=je.unstable_now,Zm=je.unstable_getCurrentPriorityLevel,Oc=je.unstable_ImmediatePriority,Af=je.unstable_UserBlockingPriority,bi=je.unstable_NormalPriority,Qm=je.unstable_LowPriority,Df=je.unstable_IdlePriority,Ui=null,kt=null;function Ym(t){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ui,t,void 0,(t.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:eg,Xm=Math.log,Jm=Math.LN2;function eg(t){return t>>>=0,t===0?32:31-(Xm(t)/Jm|0)|0}var Po=64,Lo=4194304;function Ir(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ki(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,o=t.suspendedLanes,i=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Ir(l):(i&=s,i!==0&&(r=Ir(i)))}else s=n&~o,s!==0?r=Ir(s):i!==0&&(r=Ir(i));if(r===0)return 0;if(e!==0&&e!==r&&(e&o)===0&&(o=r&-r,i=e&-e,o>=i||o===16&&(i&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ft(e),o=1<<n,r|=t[n],e&=~o;return r}function tg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ng(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,i=t.pendingLanes;0<i;){var s=31-ft(i),l=1<<s,c=o[s];c===-1?((l&n)===0||(l&r)!==0)&&(o[s]=tg(l,e)):c<=e&&(t.expiredLanes|=l),i&=~l}}function Nl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tf(){var t=Po;return Po<<=1,(Po&4194240)===0&&(Po=64),t}function Ds(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ft(e),t[e]=n}function rg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var o=31-ft(n),i=1<<o;e[o]=0,r[o]=-1,t[o]=-1,n&=~i}}function Mc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ft(n),o=1<<r;o&e|t[r]&e&&(t[r]|=e),n&=~o}}var U=0;function Pf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Lf,Nc,If,Rf,Ff,ql=!1,Io=[],Gt=null,Zt=null,Qt=null,Zr=new Map,Qr=new Map,Ht=[],og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Va(t,e){switch(t){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Zr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(e.pointerId)}}function xr(t,e,n,r,o,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},e!==null&&(e=vo(e),e!==null&&Nc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function ig(t,e,n,r,o){switch(e){case"focusin":return Gt=xr(Gt,t,e,n,r,o),!0;case"dragenter":return Zt=xr(Zt,t,e,n,r,o),!0;case"mouseover":return Qt=xr(Qt,t,e,n,r,o),!0;case"pointerover":var i=o.pointerId;return Zr.set(i,xr(Zr.get(i)||null,t,e,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qr.set(i,xr(Qr.get(i)||null,t,e,n,r,o)),!0}return!1}function Of(t){var e=gn(t.target);if(e!==null){var n=Ln(e);if(n!==null){if(e=n.tag,e===13){if(e=xf(n),e!==null){t.blockedOn=e,Ff(t.priority,function(){If(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ti(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$l(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rl=r,n.target.dispatchEvent(r),Rl=null}else return e=vo(n),e!==null&&Nc(e),t.blockedOn=n,!1;e.shift()}return!0}function Wa(t,e,n){ti(t)&&n.delete(e)}function sg(){ql=!1,Gt!==null&&ti(Gt)&&(Gt=null),Zt!==null&&ti(Zt)&&(Zt=null),Qt!==null&&ti(Qt)&&(Qt=null),Zr.forEach(Wa),Qr.forEach(Wa)}function Cr(t,e){t.blockedOn===e&&(t.blockedOn=null,ql||(ql=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,sg)))}function Yr(t){function e(o){return Cr(o,t)}if(0<Io.length){Cr(Io[0],t);for(var n=1;n<Io.length;n++){var r=Io[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gt!==null&&Cr(Gt,t),Zt!==null&&Cr(Zt,t),Qt!==null&&Cr(Qt,t),Zr.forEach(e),Qr.forEach(e),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)Of(n),n.blockedOn===null&&Ht.shift()}var er=qt.ReactCurrentBatchConfig,wi=!0;function lg(t,e,n,r){var o=U,i=er.transition;er.transition=null;try{U=1,qc(t,e,n,r)}finally{U=o,er.transition=i}}function cg(t,e,n,r){var o=U,i=er.transition;er.transition=null;try{U=4,qc(t,e,n,r)}finally{U=o,er.transition=i}}function qc(t,e,n,r){if(wi){var o=$l(t,e,n,r);if(o===null)qs(t,e,r,_i,n),Va(t,r);else if(ig(o,t,e,n,r))r.stopPropagation();else if(Va(t,r),e&4&&-1<og.indexOf(t)){for(;o!==null;){var i=vo(o);if(i!==null&&Lf(i),i=$l(t,e,n,r),i===null&&qs(t,e,r,_i,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else qs(t,e,r,null,n)}}var _i=null;function $l(t,e,n,r){if(_i=null,t=Fc(r),t=gn(t),t!==null)if(e=Ln(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _i=t,null}function Mf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zm()){case Oc:return 1;case Af:return 4;case bi:case Qm:return 16;case Df:return 536870912;default:return 16}default:return 16}}var Vt=null,$c=null,ni=null;function Nf(){if(ni)return ni;var t,e=$c,n=e.length,r,o="value"in Vt?Vt.value:Vt.textContent,i=o.length;for(t=0;t<n&&e[t]===o[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===o[i-r];r++);return ni=o.slice(t,1<r?1-r:void 0)}function ri(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ro(){return!0}function Ga(){return!1}function Ge(t){function e(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ro:Ga,this.isPropagationStopped=Ga,this}return ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),e}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zc=Ge(mr),yo=ie({},mr,{view:0,detail:0}),ag=Ge(yo),Ts,Ps,Er,ji=ie({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Er&&(Er&&t.type==="mousemove"?(Ts=t.screenX-Er.screenX,Ps=t.screenY-Er.screenY):Ps=Ts=0,Er=t),Ts)},movementY:function(t){return"movementY"in t?t.movementY:Ps}}),Za=Ge(ji),ug=ie({},ji,{dataTransfer:0}),dg=Ge(ug),fg=ie({},yo,{relatedTarget:0}),Ls=Ge(fg),pg=ie({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=Ge(pg),mg=ie({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gg=Ge(mg),yg=ie({},mr,{data:0}),Qa=Ge(yg),vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kg[t])?!!e[t]:!1}function Kc(){return wg}var _g=ie({},yo,{key:function(t){if(t.key){var e=vg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ri(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?ri(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ri(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xg=Ge(_g),Cg=ie({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ya=Ge(Cg),Eg=ie({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),Sg=Ge(Eg),Ag=ie({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=Ge(Ag),Tg=ie({},ji,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pg=Ge(Tg),Lg=[9,13,27,32],Bc=Ft&&"CompositionEvent"in window,Mr=null;Ft&&"documentMode"in document&&(Mr=document.documentMode);var Ig=Ft&&"TextEvent"in window&&!Mr,qf=Ft&&(!Bc||Mr&&8<Mr&&11>=Mr),Xa=String.fromCharCode(32),Ja=!1;function $f(t,e){switch(t){case"keyup":return Lg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kn=!1;function Rg(t,e){switch(t){case"compositionend":return zf(e);case"keypress":return e.which!==32?null:(Ja=!0,Xa);case"textInput":return t=e.data,t===Xa&&Ja?null:t;default:return null}}function Fg(t,e){if(Kn)return t==="compositionend"||!Bc&&$f(t,e)?(t=Nf(),ni=$c=Vt=null,Kn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qf&&e.locale!=="ko"?null:e.data;default:return null}}var Og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Og[t.type]:e==="textarea"}function Kf(t,e,n,r){vf(r),e=xi(e,"onChange"),0<e.length&&(n=new zc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Nr=null,Xr=null;function Mg(t){Xf(t,0)}function Vi(t){var e=Un(t);if(df(e))return t}function Ng(t,e){if(t==="change")return e}var Bf=!1;if(Ft){var Is;if(Ft){var Rs="oninput"in document;if(!Rs){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),Rs=typeof tu.oninput=="function"}Is=Rs}else Is=!1;Bf=Is&&(!document.documentMode||9<document.documentMode)}function nu(){Nr&&(Nr.detachEvent("onpropertychange",Hf),Xr=Nr=null)}function Hf(t){if(t.propertyName==="value"&&Vi(Xr)){var e=[];Kf(e,Xr,t,Fc(t)),_f(Mg,e)}}function qg(t,e,n){t==="focusin"?(nu(),Nr=e,Xr=n,Nr.attachEvent("onpropertychange",Hf)):t==="focusout"&&nu()}function $g(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vi(Xr)}function zg(t,e){if(t==="click")return Vi(e)}function Kg(t,e){if(t==="input"||t==="change")return Vi(e)}function Bg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ht=typeof Object.is=="function"?Object.is:Bg;function Jr(t,e){if(ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!wl.call(e,o)||!ht(t[o],e[o]))return!1}return!0}function ru(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ou(t,e){var n=ru(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ru(n)}}function Uf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jf(){for(var t=window,e=gi();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gi(t.document)}return e}function Hc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Hg(t){var e=jf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uf(n.ownerDocument.documentElement,n)){if(r!==null&&Hc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!t.extend&&i>r&&(o=r,r=i,i=o),o=ou(n,i);var s=ou(n,r);o&&s&&(t.rangeCount!==1||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ug=Ft&&"documentMode"in document&&11>=document.documentMode,Bn=null,zl=null,qr=null,Kl=!1;function iu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kl||Bn==null||Bn!==gi(r)||(r=Bn,"selectionStart"in r&&Hc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&Jr(qr,r)||(qr=r,r=xi(zl,"onSelect"),0<r.length&&(e=new zc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bn)))}function Fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hn={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Fs={},Vf={};Ft&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function Wi(t){if(Fs[t])return Fs[t];if(!Hn[t])return t;var e=Hn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vf)return Fs[t]=e[n];return t}var Wf=Wi("animationend"),Gf=Wi("animationiteration"),Zf=Wi("animationstart"),Qf=Wi("transitionend"),Yf=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(t,e){Yf.set(t,e),Pn(e,[t])}for(var Os=0;Os<su.length;Os++){var Ms=su[Os],jg=Ms.toLowerCase(),Vg=Ms[0].toUpperCase()+Ms.slice(1);ln(jg,"on"+Vg)}ln(Wf,"onAnimationEnd");ln(Gf,"onAnimationIteration");ln(Zf,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(Qf,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function lu(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,jm(r,e,void 0,t),t.currentTarget=null}function Xf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],o=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,a=l.currentTarget;if(l=l.listener,c!==i&&o.isPropagationStopped())break e;lu(o,l,a),i=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,a=l.currentTarget,l=l.listener,c!==i&&o.isPropagationStopped())break e;lu(o,l,a),i=c}}}if(vi)throw t=Ml,vi=!1,Ml=null,t}function Q(t,e){var n=e[Vl];n===void 0&&(n=e[Vl]=new Set);var r=t+"__bubble";n.has(r)||(Jf(e,t,2,!1),n.add(r))}function Ns(t,e,n){var r=0;e&&(r|=4),Jf(n,t,r,e)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[Oo]){t[Oo]=!0,sf.forEach(function(n){n!=="selectionchange"&&(Wg.has(n)||Ns(n,!1,t),Ns(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oo]||(e[Oo]=!0,Ns("selectionchange",!1,e))}}function Jf(t,e,n,r){switch(Mf(e)){case 1:var o=lg;break;case 4:o=cg;break;default:o=qc}n=o.bind(null,e,n,t),o=void 0,!Ol||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?t.addEventListener(e,n,{capture:!0,passive:o}):t.addEventListener(e,n,!0):o!==void 0?t.addEventListener(e,n,{passive:o}):t.addEventListener(e,n,!1)}function qs(t,e,n,r,o){var i=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;l!==null;){if(s=gn(l),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}l=l.parentNode}}r=r.return}_f(function(){var a=i,u=Fc(n),d=[];e:{var f=Yf.get(t);if(f!==void 0){var m=zc,b=t;switch(t){case"keypress":if(ri(n)===0)break e;case"keydown":case"keyup":m=xg;break;case"focusin":b="focus",m=Ls;break;case"focusout":b="blur",m=Ls;break;case"beforeblur":case"afterblur":m=Ls;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Za;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Sg;break;case Wf:case Gf:case Zf:m=hg;break;case Qf:m=Dg;break;case"scroll":m=ag;break;case"wheel":m=Pg;break;case"copy":case"cut":case"paste":m=gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ya}var v=(e&4)!==0,x=!v&&t==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var p=a,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,h!==null&&(w=Gr(p,h),w!=null&&v.push(to(p,w,g)))),x)break;p=p.return}0<v.length&&(f=new m(f,b,null,n,u),d.push({event:f,listeners:v}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Rl&&(b=n.relatedTarget||n.fromElement)&&(gn(b)||b[Ot]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(b=n.relatedTarget||n.toElement,m=a,b=b?gn(b):null,b!==null&&(x=Ln(b),b!==x||b.tag!==5&&b.tag!==6)&&(b=null)):(m=null,b=a),m!==b)){if(v=Za,w="onMouseLeave",h="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ya,w="onPointerLeave",h="onPointerEnter",p="pointer"),x=m==null?f:Un(m),g=b==null?f:Un(b),f=new v(w,p+"leave",m,n,u),f.target=x,f.relatedTarget=g,w=null,gn(u)===a&&(v=new v(h,p+"enter",b,n,u),v.target=g,v.relatedTarget=x,w=v),x=w,m&&b)t:{for(v=m,h=b,p=0,g=v;g;g=Rn(g))p++;for(g=0,w=h;w;w=Rn(w))g++;for(;0<p-g;)v=Rn(v),p--;for(;0<g-p;)h=Rn(h),g--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=Rn(v),h=Rn(h)}v=null}else v=null;m!==null&&cu(d,f,m,v,!1),b!==null&&x!==null&&cu(d,x,b,v,!0)}}e:{if(f=a?Un(a):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var k=Ng;else if(eu(f))if(Bf)k=Kg;else{k=$g;var _=qg}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=zg);if(k&&(k=k(t,a))){Kf(d,k,n,u);break e}_&&_(t,f,a),t==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Dl(f,"number",f.value)}switch(_=a?Un(a):window,t){case"focusin":(eu(_)||_.contentEditable==="true")&&(Bn=_,zl=a,qr=null);break;case"focusout":qr=zl=Bn=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,iu(d,n,u);break;case"selectionchange":if(Ug)break;case"keydown":case"keyup":iu(d,n,u)}var C;if(Bc)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Kn?$f(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(qf&&n.locale!=="ko"&&(Kn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Kn&&(C=Nf()):(Vt=u,$c="value"in Vt?Vt.value:Vt.textContent,Kn=!0)),_=xi(a,A),0<_.length&&(A=new Qa(A,t,null,n,u),d.push({event:A,listeners:_}),C?A.data=C:(C=zf(n),C!==null&&(A.data=C)))),(C=Ig?Rg(t,n):Fg(t,n))&&(a=xi(a,"onBeforeInput"),0<a.length&&(u=new Qa("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:a}),u.data=C))}Xf(d,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xi(t,e){for(var n=e+"Capture",r=[];t!==null;){var o=t,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Gr(t,n),i!=null&&r.unshift(to(t,i,o)),i=Gr(t,e),i!=null&&r.push(to(t,i,o))),t=t.return}return r}function Rn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cu(t,e,n,r,o){for(var i=e._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,a=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&a!==null&&(l=a,o?(c=Gr(n,i),c!=null&&s.unshift(to(n,c,l))):o||(c=Gr(n,i),c!=null&&s.push(to(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Gg=/\r\n?/g,Zg=/\u0000|\uFFFD/g;function au(t){return(typeof t=="string"?t:""+t).replace(Gg,`
`).replace(Zg,"")}function Mo(t,e,n){if(e=au(e),au(t)!==e&&n)throw Error(S(425))}function Ci(){}var Bl=null,Hl=null;function Ul(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,uu=typeof Promise=="function"?Promise:void 0,Yg=typeof queueMicrotask=="function"?queueMicrotask:typeof uu<"u"?function(t){return uu.resolve(null).then(t).catch(Xg)}:jl;function Xg(t){setTimeout(function(){throw t})}function $s(t,e){var n=e,r=0;do{var o=n.nextSibling;if(t.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){t.removeChild(o),Yr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yr(e)}function Yt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function du(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gr=Math.random().toString(36).slice(2),vt="__reactFiber$"+gr,no="__reactProps$"+gr,Ot="__reactContainer$"+gr,Vl="__reactEvents$"+gr,Jg="__reactListeners$"+gr,ey="__reactHandles$"+gr;function gn(t){var e=t[vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ot]||n[vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=du(t);t!==null;){if(n=t[vt])return n;t=du(t)}return e}t=n,n=t.parentNode}return null}function vo(t){return t=t[vt]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Un(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Gi(t){return t[no]||null}var Wl=[],jn=-1;function cn(t){return{current:t}}function X(t){0>jn||(t.current=Wl[jn],Wl[jn]=null,jn--)}function Z(t,e){jn++,Wl[jn]=t.current,t.current=e}var on={},Se=cn(on),$e=cn(!1),xn=on;function sr(t,e){var n=t.type.contextTypes;if(!n)return on;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=o),o}function ze(t){return t=t.childContextTypes,t!=null}function Ei(){X($e),X(Se)}function fu(t,e,n){if(Se.current!==on)throw Error(S(168));Z(Se,e),Z($e,n)}function ep(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(S(108,qm(t)||"Unknown",o));return ie({},n,r)}function Si(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||on,xn=Se.current,Z(Se,t),Z($e,$e.current),!0}function pu(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=ep(t,e,xn),r.__reactInternalMemoizedMergedChildContext=t,X($e),X(Se),Z(Se,t)):X($e),Z($e,n)}var Dt=null,Zi=!1,zs=!1;function tp(t){Dt===null?Dt=[t]:Dt.push(t)}function ty(t){Zi=!0,tp(t)}function an(){if(!zs&&Dt!==null){zs=!0;var t=0,e=U;try{var n=Dt;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dt=null,Zi=!1}catch(o){throw Dt!==null&&(Dt=Dt.slice(t+1)),Sf(Oc,an),o}finally{U=e,zs=!1}}return null}var Vn=[],Wn=0,Ai=null,Di=0,Ye=[],Xe=0,Cn=null,Tt=1,Pt="";function pn(t,e){Vn[Wn++]=Di,Vn[Wn++]=Ai,Ai=t,Di=e}function np(t,e,n){Ye[Xe++]=Tt,Ye[Xe++]=Pt,Ye[Xe++]=Cn,Cn=t;var r=Tt;t=Pt;var o=32-ft(r)-1;r&=~(1<<o),n+=1;var i=32-ft(e)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Tt=1<<32-ft(e)+o|n<<o|r,Pt=i+t}else Tt=1<<i|n<<o|r,Pt=t}function Uc(t){t.return!==null&&(pn(t,1),np(t,1,0))}function jc(t){for(;t===Ai;)Ai=Vn[--Wn],Vn[Wn]=null,Di=Vn[--Wn],Vn[Wn]=null;for(;t===Cn;)Cn=Ye[--Xe],Ye[Xe]=null,Pt=Ye[--Xe],Ye[Xe]=null,Tt=Ye[--Xe],Ye[Xe]=null}var Ue=null,He=null,ne=!1,ut=null;function rp(t,e){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ue=t,He=Yt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ue=t,He=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cn!==null?{id:Tt,overflow:Pt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ue=t,He=null,!0):!1;default:return!1}}function Gl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zl(t){if(ne){var e=He;if(e){var n=e;if(!hu(t,e)){if(Gl(t))throw Error(S(418));e=Yt(n.nextSibling);var r=Ue;e&&hu(t,e)?rp(r,n):(t.flags=t.flags&-4097|2,ne=!1,Ue=t)}}else{if(Gl(t))throw Error(S(418));t.flags=t.flags&-4097|2,ne=!1,Ue=t}}}function mu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ue=t}function No(t){if(t!==Ue)return!1;if(!ne)return mu(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ul(t.type,t.memoizedProps)),e&&(e=He)){if(Gl(t))throw op(),Error(S(418));for(;e;)rp(t,e),e=Yt(e.nextSibling)}if(mu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){He=Yt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}He=null}}else He=Ue?Yt(t.stateNode.nextSibling):null;return!0}function op(){for(var t=He;t;)t=Yt(t.nextSibling)}function lr(){He=Ue=null,ne=!1}function Vc(t){ut===null?ut=[t]:ut.push(t)}var ny=qt.ReactCurrentBatchConfig;function ct(t,e){if(t&&t.defaultProps){e=ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ti=cn(null),Pi=null,Gn=null,Wc=null;function Gc(){Wc=Gn=Pi=null}function Zc(t){var e=Ti.current;X(Ti),t._currentValue=e}function Ql(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function tr(t,e){Pi=t,Wc=Gn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(qe=!0),t.firstContext=null)}function rt(t){var e=t._currentValue;if(Wc!==t)if(t={context:t,memoizedValue:e,next:null},Gn===null){if(Pi===null)throw Error(S(308));Gn=t,Pi.dependencies={lanes:0,firstContext:t}}else Gn=Gn.next=t;return e}var yn=null;function Qc(t){yn===null?yn=[t]:yn.push(t)}function ip(t,e,n,r){var o=e.interleaved;return o===null?(n.next=n,Qc(e)):(n.next=o.next,o.next=n),e.interleaved=n,Mt(t,r)}function Mt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bt=!1;function Yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function It(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(B&2)!==0){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,Mt(t,n)}return o=r.interleaved,o===null?(e.next=e,Qc(r)):(e.next=o.next,o.next=e),r.interleaved=e,Mt(t,n)}function oi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mc(t,n)}}function gu(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=e:i=i.next=e}else o=i=e;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Li(t,e,n,r){var o=t.updateQueue;Bt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,a=c.next;c.next=null,s===null?i=a:s.next=a,s=c;var u=t.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==s&&(l===null?u.firstBaseUpdate=a:l.next=a,u.lastBaseUpdate=c))}if(i!==null){var d=o.baseState;s=0,u=a=c=null,l=i;do{var f=l.lane,m=l.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=t,v=l;switch(f=e,m=n,v.tag){case 1:if(b=v.payload,typeof b=="function"){d=b.call(m,d,f);break e}d=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=v.payload,f=typeof b=="function"?b.call(m,d,f):b,f==null)break e;d=ie({},d,f);break e;case 2:Bt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=o.effects,f===null?o.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(a=u=m,c=d):u=u.next=m,s|=f;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;f=l,l=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(u===null&&(c=d),o.baseState=c,o.firstBaseUpdate=a,o.lastBaseUpdate=u,e=o.shared.interleaved,e!==null){o=e;do s|=o.lane,o=o.next;while(o!==e)}else i===null&&(o.shared.lanes=0);Sn|=s,t.lanes=s,t.memoizedState=d}}function yu(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var lp=new of.Component().refs;function Yl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qi={isMounted:function(t){return(t=t._reactInternals)?Ln(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Le(),o=en(t),i=It(r,o);i.payload=e,n!=null&&(i.callback=n),e=Xt(t,i,o),e!==null&&(pt(e,t,o,r),oi(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Le(),o=en(t),i=It(r,o);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Xt(t,i,o),e!==null&&(pt(e,t,o,r),oi(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Le(),r=en(t),o=It(n,r);o.tag=2,e!=null&&(o.callback=e),e=Xt(t,o,r),e!==null&&(pt(e,t,r,n),oi(e,t,r))}};function vu(t,e,n,r,o,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,s):e.prototype&&e.prototype.isPureReactComponent?!Jr(n,r)||!Jr(o,i):!0}function cp(t,e,n){var r=!1,o=on,i=e.contextType;return typeof i=="object"&&i!==null?i=rt(i):(o=ze(e)?xn:Se.current,r=e.contextTypes,i=(r=r!=null)?sr(t,o):on),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qi,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=i),e}function bu(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Qi.enqueueReplaceState(e,e.state,null)}function Xl(t,e,n,r){var o=t.stateNode;o.props=n,o.state=t.memoizedState,o.refs=lp,Yc(t);var i=e.contextType;typeof i=="object"&&i!==null?o.context=rt(i):(i=ze(e)?xn:Se.current,o.context=sr(t,i)),o.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Yl(t,e,i,n),o.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&Qi.enqueueReplaceState(o,o.state,null),Li(t,n,o,r),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308)}function Sr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var o=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var l=o.refs;l===lp&&(l=o.refs={}),s===null?delete l[i]:l[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function qo(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ku(t){var e=t._init;return e(t._payload)}function ap(t){function e(h,p){if(t){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!t)return null;for(;p!==null;)e(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=tn(h,p),h.index=0,h.sibling=null,h}function i(h,p,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function l(h,p,g,w){return p===null||p.tag!==6?(p=Ws(g,h.mode,w),p.return=h,p):(p=o(p,g),p.return=h,p)}function c(h,p,g,w){var k=g.type;return k===zn?u(h,p,g.props.children,w,g.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Kt&&ku(k)===p.type)?(w=o(p,g.props),w.ref=Sr(h,p,g),w.return=h,w):(w=ui(g.type,g.key,g.props,null,h.mode,w),w.ref=Sr(h,p,g),w.return=h,w)}function a(h,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Gs(g,h.mode,w),p.return=h,p):(p=o(p,g.children||[]),p.return=h,p)}function u(h,p,g,w,k){return p===null||p.tag!==7?(p=wn(g,h.mode,w,k),p.return=h,p):(p=o(p,g),p.return=h,p)}function d(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ws(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ao:return g=ui(p.type,p.key,p.props,null,h.mode,g),g.ref=Sr(h,null,p),g.return=h,g;case $n:return p=Gs(p,h.mode,g),p.return=h,p;case Kt:var w=p._init;return d(h,w(p._payload),g)}if(Lr(p)||wr(p))return p=wn(p,h.mode,g,null),p.return=h,p;qo(h,p)}return null}function f(h,p,g,w){var k=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(h,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ao:return g.key===k?c(h,p,g,w):null;case $n:return g.key===k?a(h,p,g,w):null;case Kt:return k=g._init,f(h,p,k(g._payload),w)}if(Lr(g)||wr(g))return k!==null?null:u(h,p,g,w,null);qo(h,g)}return null}function m(h,p,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(g)||null,l(p,h,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ao:return h=h.get(w.key===null?g:w.key)||null,c(p,h,w,k);case $n:return h=h.get(w.key===null?g:w.key)||null,a(p,h,w,k);case Kt:var _=w._init;return m(h,p,g,_(w._payload),k)}if(Lr(w)||wr(w))return h=h.get(g)||null,u(p,h,w,k,null);qo(p,w)}return null}function b(h,p,g,w){for(var k=null,_=null,C=p,A=p=0,N=null;C!==null&&A<g.length;A++){C.index>A?(N=C,C=null):N=C.sibling;var L=f(h,C,g[A],w);if(L===null){C===null&&(C=N);break}t&&C&&L.alternate===null&&e(h,C),p=i(L,p,A),_===null?k=L:_.sibling=L,_=L,C=N}if(A===g.length)return n(h,C),ne&&pn(h,A),k;if(C===null){for(;A<g.length;A++)C=d(h,g[A],w),C!==null&&(p=i(C,p,A),_===null?k=C:_.sibling=C,_=C);return ne&&pn(h,A),k}for(C=r(h,C);A<g.length;A++)N=m(C,h,A,g[A],w),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?A:N.key),p=i(N,p,A),_===null?k=N:_.sibling=N,_=N);return t&&C.forEach(function(q){return e(h,q)}),ne&&pn(h,A),k}function v(h,p,g,w){var k=wr(g);if(typeof k!="function")throw Error(S(150));if(g=k.call(g),g==null)throw Error(S(151));for(var _=k=null,C=p,A=p=0,N=null,L=g.next();C!==null&&!L.done;A++,L=g.next()){C.index>A?(N=C,C=null):N=C.sibling;var q=f(h,C,L.value,w);if(q===null){C===null&&(C=N);break}t&&C&&q.alternate===null&&e(h,C),p=i(q,p,A),_===null?k=q:_.sibling=q,_=q,C=N}if(L.done)return n(h,C),ne&&pn(h,A),k;if(C===null){for(;!L.done;A++,L=g.next())L=d(h,L.value,w),L!==null&&(p=i(L,p,A),_===null?k=L:_.sibling=L,_=L);return ne&&pn(h,A),k}for(C=r(h,C);!L.done;A++,L=g.next())L=m(C,h,A,L.value,w),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?A:L.key),p=i(L,p,A),_===null?k=L:_.sibling=L,_=L);return t&&C.forEach(function(ye){return e(h,ye)}),ne&&pn(h,A),k}function x(h,p,g,w){if(typeof g=="object"&&g!==null&&g.type===zn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ao:e:{for(var k=g.key,_=p;_!==null;){if(_.key===k){if(k=g.type,k===zn){if(_.tag===7){n(h,_.sibling),p=o(_,g.props.children),p.return=h,h=p;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Kt&&ku(k)===_.type){n(h,_.sibling),p=o(_,g.props),p.ref=Sr(h,_,g),p.return=h,h=p;break e}n(h,_);break}else e(h,_);_=_.sibling}g.type===zn?(p=wn(g.props.children,h.mode,w,g.key),p.return=h,h=p):(w=ui(g.type,g.key,g.props,null,h.mode,w),w.ref=Sr(h,p,g),w.return=h,h=w)}return s(h);case $n:e:{for(_=g.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=o(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else e(h,p);p=p.sibling}p=Gs(g,h.mode,w),p.return=h,h=p}return s(h);case Kt:return _=g._init,x(h,p,_(g._payload),w)}if(Lr(g))return b(h,p,g,w);if(wr(g))return v(h,p,g,w);qo(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,g),p.return=h,h=p):(n(h,p),p=Ws(g,h.mode,w),p.return=h,h=p),s(h)):n(h,p)}return x}var cr=ap(!0),up=ap(!1),bo={},wt=cn(bo),ro=cn(bo),oo=cn(bo);function vn(t){if(t===bo)throw Error(S(174));return t}function Xc(t,e){switch(Z(oo,e),Z(ro,t),Z(wt,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pl(e,t)}X(wt),Z(wt,e)}function ar(){X(wt),X(ro),X(oo)}function dp(t){vn(oo.current);var e=vn(wt.current),n=Pl(e,t.type);e!==n&&(Z(ro,t),Z(wt,n))}function Jc(t){ro.current===t&&(X(wt),X(ro))}var re=cn(0);function Ii(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ks=[];function ea(){for(var t=0;t<Ks.length;t++)Ks[t]._workInProgressVersionPrimary=null;Ks.length=0}var ii=qt.ReactCurrentDispatcher,Bs=qt.ReactCurrentBatchConfig,En=0,oe=null,de=null,he=null,Ri=!1,$r=!1,io=0,ry=0;function _e(){throw Error(S(321))}function ta(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ht(t[n],e[n]))return!1;return!0}function na(t,e,n,r,o,i){if(En=i,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ii.current=t===null||t.memoizedState===null?ly:cy,t=n(r,o),$r){i=0;do{if($r=!1,io=0,25<=i)throw Error(S(301));i+=1,he=de=null,e.updateQueue=null,ii.current=ay,t=n(r,o)}while($r)}if(ii.current=Fi,e=de!==null&&de.next!==null,En=0,he=de=oe=null,Ri=!1,e)throw Error(S(300));return t}function ra(){var t=io!==0;return io=0,t}function yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?oe.memoizedState=he=t:he=he.next=t,he}function ot(){if(de===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=de.next;var e=he===null?oe.memoizedState:he.next;if(e!==null)he=e,de=t;else{if(t===null)throw Error(S(310));de=t,t={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?oe.memoizedState=he=t:he=he.next=t}return he}function so(t,e){return typeof e=="function"?e(t):e}function Hs(t){var e=ot(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=de,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,c=null,a=i;do{var u=a.lane;if((En&u)===u)c!==null&&(c=c.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:t(r,a.action);else{var d={lane:u,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};c===null?(l=c=d,s=r):c=c.next=d,oe.lanes|=u,Sn|=u}a=a.next}while(a!==null&&a!==i);c===null?s=r:c.next=l,ht(r,e.memoizedState)||(qe=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){o=t;do i=o.lane,oe.lanes|=i,Sn|=i,o=o.next;while(o!==t)}else o===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Us(t){var e=ot(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,o=n.pending,i=e.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=t(i,s.action),s=s.next;while(s!==o);ht(i,e.memoizedState)||(qe=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function fp(){}function pp(t,e){var n=oe,r=ot(),o=e(),i=!ht(r.memoizedState,o);if(i&&(r.memoizedState=o,qe=!0),r=r.queue,oa(gp.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,lo(9,mp.bind(null,n,r,o,e),void 0,null),ge===null)throw Error(S(349));(En&30)!==0||hp(n,e,o)}return o}function hp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mp(t,e,n,r){e.value=n,e.getSnapshot=r,yp(e)&&vp(t)}function gp(t,e,n){return n(function(){yp(e)&&vp(t)})}function yp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ht(t,n)}catch{return!0}}function vp(t){var e=Mt(t,1);e!==null&&pt(e,t,1,-1)}function wu(t){var e=yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},e.queue=t,t=t.dispatch=sy.bind(null,oe,t),[e.memoizedState,t]}function lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bp(){return ot().memoizedState}function si(t,e,n,r){var o=yt();oe.flags|=t,o.memoizedState=lo(1|e,n,void 0,r===void 0?null:r)}function Yi(t,e,n,r){var o=ot();r=r===void 0?null:r;var i=void 0;if(de!==null){var s=de.memoizedState;if(i=s.destroy,r!==null&&ta(r,s.deps)){o.memoizedState=lo(e,n,i,r);return}}oe.flags|=t,o.memoizedState=lo(1|e,n,i,r)}function _u(t,e){return si(8390656,8,t,e)}function oa(t,e){return Yi(2048,8,t,e)}function kp(t,e){return Yi(4,2,t,e)}function wp(t,e){return Yi(4,4,t,e)}function _p(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xp(t,e,n){return n=n!=null?n.concat([t]):null,Yi(4,4,_p.bind(null,e,t),n)}function ia(){}function Cp(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ta(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ep(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ta(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Sp(t,e,n){return(En&21)===0?(t.baseState&&(t.baseState=!1,qe=!0),t.memoizedState=n):(ht(n,e)||(n=Tf(),oe.lanes|=n,Sn|=n,t.baseState=!0),e)}function oy(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=Bs.transition;Bs.transition={};try{t(!1),e()}finally{U=n,Bs.transition=r}}function Ap(){return ot().memoizedState}function iy(t,e,n){var r=en(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dp(t))Tp(e,n);else if(n=ip(t,e,n,r),n!==null){var o=Le();pt(n,t,r,o),Pp(n,e,r)}}function sy(t,e,n){var r=en(t),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dp(t))Tp(e,o);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,ht(l,s)){var c=e.interleaved;c===null?(o.next=o,Qc(e)):(o.next=c.next,c.next=o),e.interleaved=o;return}}catch{}finally{}n=ip(t,e,o,r),n!==null&&(o=Le(),pt(n,t,r,o),Pp(n,e,r))}}function Dp(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function Tp(t,e){$r=Ri=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pp(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mc(t,n)}}var Fi={readContext:rt,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},ly={readContext:rt,useCallback:function(t,e){return yt().memoizedState=[t,e===void 0?null:e],t},useContext:rt,useEffect:_u,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,si(4194308,4,_p.bind(null,e,t),n)},useLayoutEffect:function(t,e){return si(4194308,4,t,e)},useInsertionEffect:function(t,e){return si(4,2,t,e)},useMemo:function(t,e){var n=yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iy.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=yt();return t={current:t},e.memoizedState=t},useState:wu,useDebugValue:ia,useDeferredValue:function(t){return yt().memoizedState=t},useTransition:function(){var t=wu(!1),e=t[0];return t=oy.bind(null,t[1]),yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,o=yt();if(ne){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ge===null)throw Error(S(349));(En&30)!==0||hp(r,e,n)}o.memoizedState=n;var i={value:n,getSnapshot:e};return o.queue=i,_u(gp.bind(null,r,i,t),[t]),r.flags|=2048,lo(9,mp.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=yt(),e=ge.identifierPrefix;if(ne){var n=Pt,r=Tt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ry++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cy={readContext:rt,useCallback:Cp,useContext:rt,useEffect:oa,useImperativeHandle:xp,useInsertionEffect:kp,useLayoutEffect:wp,useMemo:Ep,useReducer:Hs,useRef:bp,useState:function(){return Hs(so)},useDebugValue:ia,useDeferredValue:function(t){var e=ot();return Sp(e,de.memoizedState,t)},useTransition:function(){var t=Hs(so)[0],e=ot().memoizedState;return[t,e]},useMutableSource:fp,useSyncExternalStore:pp,useId:Ap,unstable_isNewReconciler:!1},ay={readContext:rt,useCallback:Cp,useContext:rt,useEffect:oa,useImperativeHandle:xp,useInsertionEffect:kp,useLayoutEffect:wp,useMemo:Ep,useReducer:Us,useRef:bp,useState:function(){return Us(so)},useDebugValue:ia,useDeferredValue:function(t){var e=ot();return de===null?e.memoizedState=t:Sp(e,de.memoizedState,t)},useTransition:function(){var t=Us(so)[0],e=ot().memoizedState;return[t,e]},useMutableSource:fp,useSyncExternalStore:pp,useId:Ap,unstable_isNewReconciler:!1};function ur(t,e){try{var n="",r=e;do n+=Nm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:o,digest:null}}function js(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Jl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uy=typeof WeakMap=="function"?WeakMap:Map;function Lp(t,e,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mi||(Mi=!0,ac=r),Jl(t,e)},n}function Ip(t,e,n){n=It(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var o=e.value;n.payload=function(){return r(o)},n.callback=function(){Jl(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Jl(t,e),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function xu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uy;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(n)||(o.add(n),t=Cy.bind(null,t,e,n),e.then(t,t))}function Cu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Eu(t,e,n,r,o){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=It(-1,1),e.tag=2,Xt(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=o,t)}var dy=qt.ReactCurrentOwner,qe=!1;function Pe(t,e,n,r){e.child=t===null?up(e,null,n,r):cr(e,t.child,n,r)}function Su(t,e,n,r,o){n=n.render;var i=e.ref;return tr(e,o),r=na(t,e,n,r,i,o),n=ra(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,Nt(t,e,o)):(ne&&n&&Uc(e),e.flags|=1,Pe(t,e,r,o),e.child)}function Au(t,e,n,r,o){if(t===null){var i=n.type;return typeof i=="function"&&!pa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Rp(t,e,i,r,o)):(t=ui(n.type,null,r,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,(t.lanes&o)===0){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jr,n(s,r)&&t.ref===e.ref)return Nt(t,e,o)}return e.flags|=1,t=tn(i,r),t.ref=e.ref,t.return=e,e.child=t}function Rp(t,e,n,r,o){if(t!==null){var i=t.memoizedProps;if(Jr(i,r)&&t.ref===e.ref)if(qe=!1,e.pendingProps=r=i,(t.lanes&o)!==0)(t.flags&131072)!==0&&(qe=!0);else return e.lanes=t.lanes,Nt(t,e,o)}return ec(t,e,n,r,o)}function Fp(t,e,n){var r=e.pendingProps,o=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Qn,Be),Be|=n;else{if((n&1073741824)===0)return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(Qn,Be),Be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Qn,Be),Be|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Z(Qn,Be),Be|=r;return Pe(t,e,o,n),e.child}function Op(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ec(t,e,n,r,o){var i=ze(n)?xn:Se.current;return i=sr(e,i),tr(e,o),n=na(t,e,n,r,i,o),r=ra(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~o,Nt(t,e,o)):(ne&&r&&Uc(e),e.flags|=1,Pe(t,e,n,o),e.child)}function Du(t,e,n,r,o){if(ze(n)){var i=!0;Si(e)}else i=!1;if(tr(e,o),e.stateNode===null)li(t,e),cp(e,n,r),Xl(e,n,r,o),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,a=n.contextType;typeof a=="object"&&a!==null?a=rt(a):(a=ze(n)?xn:Se.current,a=sr(e,a));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==a)&&bu(e,s,r,a),Bt=!1;var f=e.memoizedState;s.state=f,Li(e,r,s,o),c=e.memoizedState,l!==r||f!==c||$e.current||Bt?(typeof u=="function"&&(Yl(e,n,u,r),c=e.memoizedState),(l=Bt||vu(e,n,l,r,f,c,a))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),s.props=r,s.state=c,s.context=a,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,sp(t,e),l=e.memoizedProps,a=e.type===e.elementType?l:ct(e.type,l),s.props=a,d=e.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=rt(c):(c=ze(n)?xn:Se.current,c=sr(e,c));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||f!==c)&&bu(e,s,r,c),Bt=!1,f=e.memoizedState,s.state=f,Li(e,r,s,o);var b=e.memoizedState;l!==d||f!==b||$e.current||Bt?(typeof m=="function"&&(Yl(e,n,m,r),b=e.memoizedState),(a=Bt||vu(e,n,a,r,f,b,c)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),s.props=r,s.state=b,s.context=c,r=a):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return tc(t,e,n,r,i,o)}function tc(t,e,n,r,o,i){Op(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return o&&pu(e,n,!1),Nt(t,e,i);r=e.stateNode,dy.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=cr(e,t.child,null,i),e.child=cr(e,null,l,i)):Pe(t,e,l,i),e.memoizedState=r.state,o&&pu(e,n,!0),e.child}function Mp(t){var e=t.stateNode;e.pendingContext?fu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fu(t,e.context,!1),Xc(t,e.containerInfo)}function Tu(t,e,n,r,o){return lr(),Vc(o),e.flags|=256,Pe(t,e,n,r),e.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function rc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Np(t,e,n){var r=e.pendingProps,o=re.current,i=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(o&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(o|=1),Z(re,o&1),t===null)return Zl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=r.children,t=r.fallback,i?(r=e.mode,i=e.child,s={mode:"hidden",children:s},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=s):i=es(s,r,0,null),t=wn(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=rc(n),e.memoizedState=nc,t):sa(e,s));if(o=t.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return fy(t,e,s,r,l,o,n);if(i){i=r.fallback,s=e.mode,o=t.child,l=o.sibling;var c={mode:"hidden",children:r.children};return(s&1)===0&&e.child!==o?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=tn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=tn(l,i):(i=wn(i,s,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,s=t.child.memoizedState,s=s===null?rc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=t.childLanes&~n,e.memoizedState=nc,r}return i=t.child,t=i.sibling,r=tn(i,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sa(t,e){return e=es({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $o(t,e,n,r){return r!==null&&Vc(r),cr(e,t.child,null,n),t=sa(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fy(t,e,n,r,o,i,s){if(n)return e.flags&256?(e.flags&=-257,r=js(Error(S(422))),$o(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,o=e.mode,r=es({mode:"visible",children:r.children},o,0,null),i=wn(i,o,s,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,(e.mode&1)!==0&&cr(e,t.child,null,s),e.child.memoizedState=rc(s),e.memoizedState=nc,i);if((e.mode&1)===0)return $o(t,e,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(S(419)),r=js(i,r,void 0),$o(t,e,s,r)}if(l=(s&t.childLanes)!==0,qe||l){if(r=ge,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|s))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Mt(t,o),pt(r,t,o,-1))}return fa(),r=js(Error(S(421))),$o(t,e,s,r)}return o.data==="$?"?(e.flags|=128,e.child=t.child,e=Ey.bind(null,t),o._reactRetry=e,null):(t=i.treeContext,He=Yt(o.nextSibling),Ue=e,ne=!0,ut=null,t!==null&&(Ye[Xe++]=Tt,Ye[Xe++]=Pt,Ye[Xe++]=Cn,Tt=t.id,Pt=t.overflow,Cn=e),e=sa(e,r.children),e.flags|=4096,e)}function Pu(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ql(t.return,e,n)}function Vs(t,e,n,r,o){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function qp(t,e,n){var r=e.pendingProps,o=r.revealOrder,i=r.tail;if(Pe(t,e,r.children,n),r=re.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pu(t,n,e);else if(t.tag===19)Pu(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(re,r),(e.mode&1)===0)e.memoizedState=null;else switch(o){case"forwards":for(n=e.child,o=null;n!==null;)t=n.alternate,t!==null&&Ii(t)===null&&(o=n),n=n.sibling;n=o,n===null?(o=e.child,e.child=null):(o=n.sibling,n.sibling=null),Vs(e,!1,o,n,i);break;case"backwards":for(n=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&Ii(t)===null){e.child=o;break}t=o.sibling,o.sibling=n,n=o,o=t}Vs(e,!0,n,null,i);break;case"together":Vs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function li(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sn|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function py(t,e,n){switch(e.tag){case 3:Mp(e),lr();break;case 5:dp(e);break;case 1:ze(e.type)&&Si(e);break;case 4:Xc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,o=e.memoizedProps.value;Z(Ti,r._currentValue),r._currentValue=o;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(re,re.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Np(t,e,n):(Z(re,re.current&1),t=Nt(t,e,n),t!==null?t.sibling:null);Z(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return qp(t,e,n);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,Fp(t,e,n)}return Nt(t,e,n)}var $p,oc,zp,Kp;$p=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oc=function(){};zp=function(t,e,n,r){var o=t.memoizedProps;if(o!==r){t=e.stateNode,vn(wt.current);var i=null;switch(n){case"input":o=Sl(t,o),r=Sl(t,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=Tl(t,o),r=Tl(t,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ci)}Ll(n,r);var s;n=null;for(a in o)if(!r.hasOwnProperty(a)&&o.hasOwnProperty(a)&&o[a]!=null)if(a==="style"){var l=o[a];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Vr.hasOwnProperty(a)?i||(i=[]):(i=i||[]).push(a,null));for(a in r){var c=r[a];if(l=o!=null?o[a]:void 0,r.hasOwnProperty(a)&&c!==l&&(c!=null||l!=null))if(a==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(a,n)),n=c;else a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(a,c)):a==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(a,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(a)?(c!=null&&a==="onScroll"&&Q("scroll",t),i||l===c||(i=[])):(i=i||[]).push(a,c))}n&&(i=i||[]).push("style",n);var a=i;(e.updateQueue=a)&&(e.flags|=4)}};Kp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ar(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hy(t,e,n){var r=e.pendingProps;switch(jc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return ze(e.type)&&Ei(),xe(e),null;case 3:return r=e.stateNode,ar(),X($e),X(Se),ea(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(No(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ut!==null&&(fc(ut),ut=null))),oc(t,e),xe(e),null;case 5:Jc(e);var o=vn(oo.current);if(n=e.type,t!==null&&e.stateNode!=null)zp(t,e,n,r,o),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return xe(e),null}if(t=vn(wt.current),No(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[vt]=e,r[no]=i,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Rr.length;o++)Q(Rr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":$a(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":Ka(r,i),Q("invalid",r)}Ll(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,l,t),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,l,t),o=["children",""+l]):Vr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Q("scroll",r)}switch(n){case"input":Do(r),za(r,i,!0);break;case"textarea":Do(r),Ba(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ci)}r=o,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[vt]=e,t[no]=r,$p(t,e,!1,!1),e.stateNode=t;e:{switch(s=Il(n,r),n){case"dialog":Q("cancel",t),Q("close",t),o=r;break;case"iframe":case"object":case"embed":Q("load",t),o=r;break;case"video":case"audio":for(o=0;o<Rr.length;o++)Q(Rr[o],t);o=r;break;case"source":Q("error",t),o=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),o=r;break;case"details":Q("toggle",t),o=r;break;case"input":$a(t,r),o=Sl(t,r),Q("invalid",t);break;case"option":o=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),Q("invalid",t);break;case"textarea":Ka(t,r),o=Tl(t,r),Q("invalid",t);break;default:o=r}Ll(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?yf(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&mf(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Wr(t,c):typeof c=="number"&&Wr(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Q("scroll",t):c!=null&&Pc(t,i,c,s))}switch(n){case"input":Do(t),za(t,r,!1);break;case"textarea":Do(t),Ba(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rn(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Yn(t,!!r.multiple,i,!1):r.defaultValue!=null&&Yn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(t.onclick=Ci)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xe(e),null;case 6:if(t&&e.stateNode!=null)Kp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=vn(oo.current),vn(wt.current),No(e)){if(r=e.stateNode,n=e.memoizedProps,r[vt]=e,(i=r.nodeValue!==n)&&(t=Ue,t!==null))switch(t.tag){case 3:Mo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=e,e.stateNode=r}return xe(e),null;case 13:if(X(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&He!==null&&(e.mode&1)!==0&&(e.flags&128)===0)op(),lr(),e.flags|=98560,i=!1;else if(i=No(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(S(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[vt]=e}else lr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;xe(e),i=!1}else ut!==null&&(fc(ut),ut=null),i=!0;if(!i)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(re.current&1)!==0?fe===0&&(fe=3):fa())),e.updateQueue!==null&&(e.flags|=4),xe(e),null);case 4:return ar(),oc(t,e),t===null&&eo(e.stateNode.containerInfo),xe(e),null;case 10:return Zc(e.type._context),xe(e),null;case 17:return ze(e.type)&&Ei(),xe(e),null;case 19:if(X(re),i=e.memoizedState,i===null)return xe(e),null;if(r=(e.flags&128)!==0,s=i.rendering,s===null)if(r)Ar(i,!1);else{if(fe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=Ii(t),s!==null){for(e.flags|=128,Ar(i,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,t=s.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(re,re.current&1|2),e.child}t=t.sibling}i.tail!==null&&le()>dr&&(e.flags|=128,r=!0,Ar(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ii(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ar(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ne)return xe(e),null}else 2*le()-i.renderingStartTime>dr&&n!==1073741824&&(e.flags|=128,r=!0,Ar(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(n=i.last,n!==null?n.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=le(),e.sibling=null,n=re.current,Z(re,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return da(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Be&1073741824)!==0&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function my(t,e){switch(jc(e),e.tag){case 1:return ze(e.type)&&Ei(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ar(),X($e),X(Se),ea(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Jc(e),null;case 13:if(X(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));lr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(re),null;case 4:return ar(),null;case 10:return Zc(e.type._context),null;case 22:case 23:return da(),null;case 24:return null;default:return null}}var zo=!1,Ee=!1,gy=typeof WeakSet=="function"?WeakSet:Set,R=null;function Zn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(t,e,r)}else n.current=null}function ic(t,e,n){try{n()}catch(r){se(t,e,r)}}var Lu=!1;function yy(t,e){if(Bl=wi,t=jf(),Hc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,a=0,u=0,d=t,f=null;t:for(;;){for(var m;d!==n||o!==0&&d.nodeType!==3||(l=s+o),d!==i||r!==0&&d.nodeType!==3||(c=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++a===o&&(l=s),f===i&&++u===r&&(c=s),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hl={focusedElem:t,selectionRange:n},wi=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var b=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var v=b.memoizedProps,x=b.memoizedState,h=e.stateNode,p=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:ct(e.type,v),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){se(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return b=Lu,Lu=!1,b}function zr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var i=o.destroy;o.destroy=void 0,i!==void 0&&ic(e,n,i)}o=o.next}while(o!==r)}}function Xi(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bp(t){var e=t.alternate;e!==null&&(t.alternate=null,Bp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vt],delete e[no],delete e[Vl],delete e[Jg],delete e[ey])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hp(t){return t.tag===5||t.tag===3||t.tag===4}function Iu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ci));else if(r!==4&&(t=t.child,t!==null))for(lc(t,e,n),t=t.sibling;t!==null;)lc(t,e,n),t=t.sibling}function cc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cc(t,e,n),t=t.sibling;t!==null;)cc(t,e,n),t=t.sibling}var ve=null,at=!1;function $t(t,e,n){for(n=n.child;n!==null;)Up(t,e,n),n=n.sibling}function Up(t,e,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ui,n)}catch{}switch(n.tag){case 5:Ee||Zn(n,e);case 6:var r=ve,o=at;ve=null,$t(t,e,n),ve=r,at=o,ve!==null&&(at?(t=ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(at?(t=ve,n=n.stateNode,t.nodeType===8?$s(t.parentNode,n):t.nodeType===1&&$s(t,n),Yr(t)):$s(ve,n.stateNode));break;case 4:r=ve,o=at,ve=n.stateNode.containerInfo,at=!0,$t(t,e,n),ve=r,at=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&ic(n,e,s),o=o.next}while(o!==r)}$t(t,e,n);break;case 1:if(!Ee&&(Zn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){se(n,e,l)}$t(t,e,n);break;case 21:$t(t,e,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,$t(t,e,n),Ee=r):$t(t,e,n);break;default:$t(t,e,n)}}function Ru(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gy),e.forEach(function(r){var o=Sy.bind(null,t,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,at=!1;break e;case 3:ve=l.stateNode.containerInfo,at=!0;break e;case 4:ve=l.stateNode.containerInfo,at=!0;break e}l=l.return}if(ve===null)throw Error(S(160));Up(i,s,o),ve=null,at=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(a){se(o,e,a)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jp(e,t),e=e.sibling}function jp(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),gt(t),r&4){try{zr(3,t,t.return),Xi(3,t)}catch(v){se(t,t.return,v)}try{zr(5,t,t.return)}catch(v){se(t,t.return,v)}}break;case 1:lt(e,t),gt(t),r&512&&n!==null&&Zn(n,n.return);break;case 5:if(lt(e,t),gt(t),r&512&&n!==null&&Zn(n,n.return),t.flags&32){var o=t.stateNode;try{Wr(o,"")}catch(v){se(t,t.return,v)}}if(r&4&&(o=t.stateNode,o!=null)){var i=t.memoizedProps,s=n!==null?n.memoizedProps:i,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&ff(o,i),Il(l,s);var a=Il(l,i);for(s=0;s<c.length;s+=2){var u=c[s],d=c[s+1];u==="style"?yf(o,d):u==="dangerouslySetInnerHTML"?mf(o,d):u==="children"?Wr(o,d):Pc(o,u,d,a)}switch(l){case"input":Al(o,i);break;case"textarea":pf(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Yn(o,!!i.multiple,m,!1):f!==!!i.multiple&&(i.defaultValue!=null?Yn(o,!!i.multiple,i.defaultValue,!0):Yn(o,!!i.multiple,i.multiple?[]:"",!1))}o[no]=i}catch(v){se(t,t.return,v)}}break;case 6:if(lt(e,t),gt(t),r&4){if(t.stateNode===null)throw Error(S(162));o=t.stateNode,i=t.memoizedProps;try{o.nodeValue=i}catch(v){se(t,t.return,v)}}break;case 3:if(lt(e,t),gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(e.containerInfo)}catch(v){se(t,t.return,v)}break;case 4:lt(e,t),gt(t);break;case 13:lt(e,t),gt(t),o=t.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(aa=le())),r&4&&Ru(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ee=(a=Ee)||u,lt(e,t),Ee=a):lt(e,t),gt(t),r&8192){if(a=t.memoizedState!==null,(t.stateNode.isHidden=a)&&!u&&(t.mode&1)!==0)for(R=t,u=t.child;u!==null;){for(d=R=u;R!==null;){switch(f=R,m=f.child,f.tag){case 0:case 11:case 14:case 15:zr(4,f,f.return);break;case 1:Zn(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Zn(f,f.return);break;case 22:if(f.memoizedState!==null){Ou(d);continue}}m!==null?(m.return=f,R=m):Ou(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,a?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,c=d.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=gf("display",s))}catch(v){se(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=a?"":d.memoizedProps}catch(v){se(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(e,t),gt(t),r&4&&Ru(t);break;case 21:break;default:lt(e,t),gt(t)}}function gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wr(o,""),r.flags&=-33);var i=Iu(t);cc(t,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Iu(t);lc(t,l,s);break;default:throw Error(S(161))}}catch(c){se(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vy(t,e,n){R=t,Vp(t)}function Vp(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||zo;if(!s){var l=o.alternate,c=l!==null&&l.memoizedState!==null||Ee;l=zo;var a=Ee;if(zo=s,(Ee=c)&&!a)for(R=o;R!==null;)s=R,c=s.child,s.tag===22&&s.memoizedState!==null?Mu(o):c!==null?(c.return=s,R=c):Mu(o);for(;i!==null;)R=i,Vp(i),i=i.sibling;R=o,zo=l,Ee=a}Fu(t)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,R=i):Fu(t)}}function Fu(t){for(;R!==null;){var e=R;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ee||Xi(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var o=e.elementType===e.type?n.memoizedProps:ct(e.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&yu(e,i,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yu(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var a=e.alternate;if(a!==null){var u=a.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Yr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ee||e.flags&512&&sc(e)}catch(f){se(e,e.return,f)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Ou(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Mu(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xi(4,e)}catch(c){se(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var o=e.return;try{r.componentDidMount()}catch(c){se(e,o,c)}}var i=e.return;try{sc(e)}catch(c){se(e,i,c)}break;case 5:var s=e.return;try{sc(e)}catch(c){se(e,s,c)}}}catch(c){se(e,e.return,c)}if(e===t){R=null;break}var l=e.sibling;if(l!==null){l.return=e.return,R=l;break}R=e.return}}var by=Math.ceil,Oi=qt.ReactCurrentDispatcher,la=qt.ReactCurrentOwner,tt=qt.ReactCurrentBatchConfig,B=0,ge=null,ce=null,be=0,Be=0,Qn=cn(0),fe=0,co=null,Sn=0,Ji=0,ca=0,Kr=null,Ne=null,aa=0,dr=1/0,St=null,Mi=!1,ac=null,Jt=null,Ko=!1,Wt=null,Ni=0,Br=0,uc=null,ci=-1,ai=0;function Le(){return(B&6)!==0?le():ci!==-1?ci:ci=le()}function en(t){return(t.mode&1)===0?1:(B&2)!==0&&be!==0?be&-be:ny.transition!==null?(ai===0&&(ai=Tf()),ai):(t=U,t!==0||(t=window.event,t=t===void 0?16:Mf(t.type)),t)}function pt(t,e,n,r){if(50<Br)throw Br=0,uc=null,Error(S(185));go(t,n,r),((B&2)===0||t!==ge)&&(t===ge&&((B&2)===0&&(Ji|=n),fe===4&&Ut(t,be)),Ke(t,r),n===1&&B===0&&(e.mode&1)===0&&(dr=le()+500,Zi&&an()))}function Ke(t,e){var n=t.callbackNode;ng(t,e);var r=ki(t,t===ge?be:0);if(r===0)n!==null&&ja(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ja(n),e===1)t.tag===0?ty(Nu.bind(null,t)):tp(Nu.bind(null,t)),Yg(function(){(B&6)===0&&an()}),n=null;else{switch(Pf(r)){case 1:n=Oc;break;case 4:n=Af;break;case 16:n=bi;break;case 536870912:n=Df;break;default:n=bi}n=eh(n,Wp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wp(t,e){if(ci=-1,ai=0,(B&6)!==0)throw Error(S(327));var n=t.callbackNode;if(nr()&&t.callbackNode!==n)return null;var r=ki(t,t===ge?be:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=qi(t,r);else{e=r;var o=B;B|=2;var i=Zp();(ge!==t||be!==e)&&(St=null,dr=le()+500,kn(t,e));do try{_y();break}catch(l){Gp(t,l)}while(1);Gc(),Oi.current=i,B=o,ce!==null?e=0:(ge=null,be=0,e=fe)}if(e!==0){if(e===2&&(o=Nl(t),o!==0&&(r=o,e=dc(t,o))),e===1)throw n=co,kn(t,0),Ut(t,r),Ke(t,le()),n;if(e===6)Ut(t,r);else{if(o=t.current.alternate,(r&30)===0&&!ky(o)&&(e=qi(t,r),e===2&&(i=Nl(t),i!==0&&(r=i,e=dc(t,i))),e===1))throw n=co,kn(t,0),Ut(t,r),Ke(t,le()),n;switch(t.finishedWork=o,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:hn(t,Ne,St);break;case 3:if(Ut(t,r),(r&130023424)===r&&(e=aa+500-le(),10<e)){if(ki(t,0)!==0)break;if(o=t.suspendedLanes,(o&r)!==r){Le(),t.pingedLanes|=t.suspendedLanes&o;break}t.timeoutHandle=jl(hn.bind(null,t,Ne,St),e);break}hn(t,Ne,St);break;case 4:if(Ut(t,r),(r&4194240)===r)break;for(e=t.eventTimes,o=-1;0<r;){var s=31-ft(r);i=1<<s,s=e[s],s>o&&(o=s),r&=~i}if(r=o,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*by(r/1960))-r,10<r){t.timeoutHandle=jl(hn.bind(null,t,Ne,St),r);break}hn(t,Ne,St);break;case 5:hn(t,Ne,St);break;default:throw Error(S(329))}}}return Ke(t,le()),t.callbackNode===n?Wp.bind(null,t):null}function dc(t,e){var n=Kr;return t.current.memoizedState.isDehydrated&&(kn(t,e).flags|=256),t=qi(t,e),t!==2&&(e=Ne,Ne=n,e!==null&&fc(e)),t}function fc(t){Ne===null?Ne=t:Ne.push.apply(Ne,t)}function ky(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ht(i(),o))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ut(t,e){for(e&=~ca,e&=~Ji,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ft(e),r=1<<n;t[n]=-1,e&=~r}}function Nu(t){if((B&6)!==0)throw Error(S(327));nr();var e=ki(t,0);if((e&1)===0)return Ke(t,le()),null;var n=qi(t,e);if(t.tag!==0&&n===2){var r=Nl(t);r!==0&&(e=r,n=dc(t,r))}if(n===1)throw n=co,kn(t,0),Ut(t,e),Ke(t,le()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hn(t,Ne,St),Ke(t,le()),null}function ua(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(dr=le()+500,Zi&&an())}}function An(t){Wt!==null&&Wt.tag===0&&(B&6)===0&&nr();var e=B;B|=1;var n=tt.transition,r=U;try{if(tt.transition=null,U=1,t)return t()}finally{U=r,tt.transition=n,B=e,(B&6)===0&&an()}}function da(){Be=Qn.current,X(Qn)}function kn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Qg(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(jc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ei();break;case 3:ar(),X($e),X(Se),ea();break;case 5:Jc(r);break;case 4:ar();break;case 13:X(re);break;case 19:X(re);break;case 10:Zc(r.type._context);break;case 22:case 23:da()}n=n.return}if(ge=t,ce=t=tn(t.current,null),be=Be=e,fe=0,co=null,ca=Ji=Sn=0,Ne=Kr=null,yn!==null){for(e=0;e<yn.length;e++)if(n=yn[e],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}yn=null}return t}function Gp(t,e){do{var n=ce;try{if(Gc(),ii.current=Fi,Ri){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ri=!1}if(En=0,he=de=oe=null,$r=!1,io=0,la.current=null,n===null||n.return===null){fe=1,co=e,ce=null;break}e:{var i=t,s=n.return,l=n,c=e;if(e=be,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var a=c,u=l,d=u.tag;if((u.mode&1)===0&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Cu(s);if(m!==null){m.flags&=-257,Eu(m,s,l,i,e),m.mode&1&&xu(i,a,e),e=m,c=a;var b=e.updateQueue;if(b===null){var v=new Set;v.add(c),e.updateQueue=v}else b.add(c);break e}else{if((e&1)===0){xu(i,a,e),fa();break e}c=Error(S(426))}}else if(ne&&l.mode&1){var x=Cu(s);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),Eu(x,s,l,i,e),Vc(ur(c,l));break e}}i=c=ur(c,l),fe!==4&&(fe=2),Kr===null?Kr=[i]:Kr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var h=Lp(i,c,e);gu(i,h);break e;case 1:l=c;var p=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Jt===null||!Jt.has(g)))){i.flags|=65536,e&=-e,i.lanes|=e;var w=Ip(i,l,e);gu(i,w);break e}}i=i.return}while(i!==null)}Yp(n)}catch(k){e=k,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function Zp(){var t=Oi.current;return Oi.current=Fi,t===null?Fi:t}function fa(){(fe===0||fe===3||fe===2)&&(fe=4),ge===null||(Sn&268435455)===0&&(Ji&268435455)===0||Ut(ge,be)}function qi(t,e){var n=B;B|=2;var r=Zp();(ge!==t||be!==e)&&(St=null,kn(t,e));do try{wy();break}catch(o){Gp(t,o)}while(1);if(Gc(),B=n,Oi.current=r,ce!==null)throw Error(S(261));return ge=null,be=0,fe}function wy(){for(;ce!==null;)Qp(ce)}function _y(){for(;ce!==null&&!Wm();)Qp(ce)}function Qp(t){var e=Jp(t.alternate,t,Be);t.memoizedProps=t.pendingProps,e===null?Yp(t):ce=e,la.current=null}function Yp(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=hy(n,e,Be),n!==null){ce=n;return}}else{if(n=my(n,e),n!==null){n.flags&=32767,ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{fe=6,ce=null;return}}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);fe===0&&(fe=5)}function hn(t,e,n){var r=U,o=tt.transition;try{tt.transition=null,U=1,xy(t,e,n,r)}finally{tt.transition=o,U=r}return null}function xy(t,e,n,r){do nr();while(Wt!==null);if((B&6)!==0)throw Error(S(327));n=t.finishedWork;var o=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(rg(t,i),t===ge&&(ce=ge=null,be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ko||(Ko=!0,eh(bi,function(){return nr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=tt.transition,tt.transition=null;var s=U;U=1;var l=B;B|=4,la.current=null,yy(t,n),jp(n,t),Hg(Hl),wi=!!Bl,Hl=Bl=null,t.current=n,vy(n),Gm(),B=l,U=s,tt.transition=i}else t.current=n;if(Ko&&(Ko=!1,Wt=t,Ni=o),i=t.pendingLanes,i===0&&(Jt=null),Ym(n.stateNode),Ke(t,le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)o=e[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Mi)throw Mi=!1,t=ac,ac=null,t;return(Ni&1)!==0&&t.tag!==0&&nr(),i=t.pendingLanes,(i&1)!==0?t===uc?Br++:(Br=0,uc=t):Br=0,an(),null}function nr(){if(Wt!==null){var t=Pf(Ni),e=tt.transition,n=U;try{if(tt.transition=null,U=16>t?16:t,Wt===null)var r=!1;else{if(t=Wt,Wt=null,Ni=0,(B&6)!==0)throw Error(S(331));var o=B;for(B|=4,R=t.current;R!==null;){var i=R,s=i.child;if((R.flags&16)!==0){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var a=l[c];for(R=a;R!==null;){var u=R;switch(u.tag){case 0:case 11:case 15:zr(8,u,i)}var d=u.child;if(d!==null)d.return=u,R=d;else for(;R!==null;){u=R;var f=u.sibling,m=u.return;if(Bp(u),u===a){R=null;break}if(f!==null){f.return=m,R=f;break}R=m}}}var b=i.alternate;if(b!==null){var v=b.child;if(v!==null){b.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}R=i}}if((i.subtreeFlags&2064)!==0&&s!==null)s.return=i,R=s;else e:for(;R!==null;){if(i=R,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:zr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,R=h;break e}R=i.return}}var p=t.current;for(R=p;R!==null;){s=R;var g=s.child;if((s.subtreeFlags&2064)!==0&&g!==null)g.return=s,R=g;else e:for(s=p;R!==null;){if(l=R,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Xi(9,l)}}catch(k){se(l,l.return,k)}if(l===s){R=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,R=w;break e}R=l.return}}if(B=o,an(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ui,t)}catch{}r=!0}return r}finally{U=n,tt.transition=e}}return!1}function qu(t,e,n){e=ur(n,e),e=Lp(t,e,1),t=Xt(t,e,1),e=Le(),t!==null&&(go(t,1,e),Ke(t,e))}function se(t,e,n){if(t.tag===3)qu(t,t,n);else for(;e!==null;){if(e.tag===3){qu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){t=ur(n,t),t=Ip(e,t,1),e=Xt(e,t,1),t=Le(),e!==null&&(go(e,1,t),Ke(e,t));break}}e=e.return}}function Cy(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Le(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(be&n)===n&&(fe===4||fe===3&&(be&130023424)===be&&500>le()-aa?kn(t,0):ca|=n),Ke(t,e)}function Xp(t,e){e===0&&((t.mode&1)===0?e=1:(e=Lo,Lo<<=1,(Lo&130023424)===0&&(Lo=4194304)));var n=Le();t=Mt(t,e),t!==null&&(go(t,e,n),Ke(t,n))}function Ey(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xp(t,n)}function Sy(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,o=t.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Xp(t,n)}var Jp;Jp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$e.current)qe=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return qe=!1,py(t,e,n);qe=(t.flags&131072)!==0}else qe=!1,ne&&(e.flags&1048576)!==0&&np(e,Di,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;li(t,e),t=e.pendingProps;var o=sr(e,Se.current);tr(e,n),o=na(null,e,r,t,o,n);var i=ra();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ze(r)?(i=!0,Si(e)):i=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Yc(e),o.updater=Qi,e.stateNode=o,o._reactInternals=e,Xl(e,r,t,n),e=tc(null,e,r,!0,i,n)):(e.tag=0,ne&&i&&Uc(e),Pe(null,e,o,n),e=e.child),e;case 16:r=e.elementType;e:{switch(li(t,e),t=e.pendingProps,o=r._init,r=o(r._payload),e.type=r,o=e.tag=Dy(r),t=ct(r,t),o){case 0:e=ec(null,e,r,t,n);break e;case 1:e=Du(null,e,r,t,n);break e;case 11:e=Su(null,e,r,t,n);break e;case 14:e=Au(null,e,r,ct(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:ct(r,o),ec(t,e,r,o,n);case 1:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:ct(r,o),Du(t,e,r,o,n);case 3:e:{if(Mp(e),t===null)throw Error(S(387));r=e.pendingProps,i=e.memoizedState,o=i.element,sp(t,e),Li(e,r,null,n);var s=e.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){o=ur(Error(S(423)),e),e=Tu(t,e,r,n,o);break e}else if(r!==o){o=ur(Error(S(424)),e),e=Tu(t,e,r,n,o);break e}else for(He=Yt(e.stateNode.containerInfo.firstChild),Ue=e,ne=!0,ut=null,n=up(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lr(),r===o){e=Nt(t,e,n);break e}Pe(t,e,r,n)}e=e.child}return e;case 5:return dp(e),t===null&&Zl(e),r=e.type,o=e.pendingProps,i=t!==null?t.memoizedProps:null,s=o.children,Ul(r,o)?s=null:i!==null&&Ul(r,i)&&(e.flags|=32),Op(t,e),Pe(t,e,s,n),e.child;case 6:return t===null&&Zl(e),null;case 13:return Np(t,e,n);case 4:return Xc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=cr(e,null,r,n):Pe(t,e,r,n),e.child;case 11:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:ct(r,o),Su(t,e,r,o,n);case 7:return Pe(t,e,e.pendingProps,n),e.child;case 8:return Pe(t,e,e.pendingProps.children,n),e.child;case 12:return Pe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,o=e.pendingProps,i=e.memoizedProps,s=o.value,Z(Ti,r._currentValue),r._currentValue=s,i!==null)if(ht(i.value,s)){if(i.children===o.children&&!$e.current){e=Nt(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=It(-1,n&-n),c.tag=2;var a=i.updateQueue;if(a!==null){a=a.shared;var u=a.pending;u===null?c.next=c:(c.next=u.next,u.next=c),a.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ql(i.return,n,e),l.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===e.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(S(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ql(s,n,e),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Pe(t,e,o.children,n),e=e.child}return e;case 9:return o=e.type,r=e.pendingProps.children,tr(e,n),o=rt(o),r=r(o),e.flags|=1,Pe(t,e,r,n),e.child;case 14:return r=e.type,o=ct(r,e.pendingProps),o=ct(r.type,o),Au(t,e,r,o,n);case 15:return Rp(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:ct(r,o),li(t,e),e.tag=1,ze(r)?(t=!0,Si(e)):t=!1,tr(e,n),cp(e,r,o),Xl(e,r,o,n),tc(null,e,r,!0,t,n);case 19:return qp(t,e,n);case 22:return Fp(t,e,n)}throw Error(S(156,e.tag))};function eh(t,e){return Sf(t,e)}function Ay(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(t,e,n,r){return new Ay(t,e,n,r)}function pa(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dy(t){if(typeof t=="function")return pa(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ic)return 11;if(t===Rc)return 14}return 2}function tn(t,e){var n=t.alternate;return n===null?(n=Je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ui(t,e,n,r,o,i){var s=2;if(r=t,typeof t=="function")pa(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case zn:return wn(n.children,o,i,e);case Lc:s=8,o|=8;break;case _l:return t=Je(12,n,e,o|2),t.elementType=_l,t.lanes=i,t;case xl:return t=Je(13,n,e,o),t.elementType=xl,t.lanes=i,t;case Cl:return t=Je(19,n,e,o),t.elementType=Cl,t.lanes=i,t;case af:return es(n,o,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lf:s=10;break e;case cf:s=9;break e;case Ic:s=11;break e;case Rc:s=14;break e;case Kt:s=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Je(s,n,e,o),e.elementType=t,e.type=r,e.lanes=i,e}function wn(t,e,n,r){return t=Je(7,t,r,e),t.lanes=n,t}function es(t,e,n,r){return t=Je(22,t,r,e),t.elementType=af,t.lanes=n,t.stateNode={isHidden:!1},t}function Ws(t,e,n){return t=Je(6,t,null,e),t.lanes=n,t}function Gs(t,e,n){return e=Je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ty(t,e,n,r,o){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ds(0),this.expirationTimes=Ds(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ds(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ha(t,e,n,r,o,i,s,l,c){return t=new Ty(t,e,n,l,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Je(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(i),t}function Py(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function th(t){if(!t)return on;t=t._reactInternals;e:{if(Ln(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ze(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(ze(n))return ep(t,n,e)}return e}function nh(t,e,n,r,o,i,s,l,c){return t=ha(n,r,!0,t,o,i,s,l,c),t.context=th(null),n=t.current,r=Le(),o=en(n),i=It(r,o),i.callback=e!=null?e:null,Xt(n,i,o),t.current.lanes=o,go(t,o,r),Ke(t,r),t}function ts(t,e,n,r){var o=e.current,i=Le(),s=en(o);return n=th(n),e.context===null?e.context=n:e.pendingContext=n,e=It(i,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xt(o,e,s),t!==null&&(pt(t,o,s,i),oi(t,o,s)),s}function $i(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $u(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ma(t,e){$u(t,e),(t=t.alternate)&&$u(t,e)}function Ly(){return null}var rh=typeof reportError=="function"?reportError:function(t){console.error(t)};function ga(t){this._internalRoot=t}ns.prototype.render=ga.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));ts(t,e,null,null)};ns.prototype.unmount=ga.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;An(function(){ts(null,t,null,null)}),e[Ot]=null}};function ns(t){this._internalRoot=t}ns.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ht.length&&e!==0&&e<Ht[n].priority;n++);Ht.splice(n,0,t),n===0&&Of(t)}};function ya(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zu(){}function Iy(t,e,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var a=$i(s);i.call(a)}}var s=nh(e,r,t,0,null,!1,!1,"",zu);return t._reactRootContainer=s,t[Ot]=s.current,eo(t.nodeType===8?t.parentNode:t),An(),s}for(;o=t.lastChild;)t.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var a=$i(c);l.call(a)}}var c=ha(t,0,!1,null,null,!1,!1,"",zu);return t._reactRootContainer=c,t[Ot]=c.current,eo(t.nodeType===8?t.parentNode:t),An(function(){ts(e,c,n,r)}),c}function os(t,e,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var c=$i(s);l.call(c)}}ts(e,s,t,o)}else s=Iy(n,e,t,o,r);return $i(s)}Lf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ir(e.pendingLanes);n!==0&&(Mc(e,n|1),Ke(e,le()),(B&6)===0&&(dr=le()+500,an()))}break;case 13:An(function(){var r=Mt(t,1);if(r!==null){var o=Le();pt(r,t,1,o)}}),ma(t,1)}};Nc=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var n=Le();pt(e,t,134217728,n)}ma(t,134217728)}};If=function(t){if(t.tag===13){var e=en(t),n=Mt(t,e);if(n!==null){var r=Le();pt(n,t,e,r)}ma(t,e)}};Rf=function(){return U};Ff=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};Fl=function(t,e,n){switch(e){case"input":if(Al(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var o=Gi(r);if(!o)throw Error(S(90));df(r),Al(r,o)}}}break;case"textarea":pf(t,n);break;case"select":e=n.value,e!=null&&Yn(t,!!n.multiple,e,!1)}};kf=ua;wf=An;var Ry={usingClientEntryPoint:!1,Events:[vo,Un,Gi,vf,bf,ua]},Dr={findFiberByHostInstance:gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fy={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cf(t),t===null?null:t.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||Ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Ui=Bo.inject(Fy),kt=Bo}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry;We.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ya(e))throw Error(S(200));return Py(t,e,null,n)};We.createRoot=function(t,e){if(!ya(t))throw Error(S(299));var n=!1,r="",o=rh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=ha(t,1,!1,null,null,n,!1,r,o),t[Ot]=e.current,eo(t.nodeType===8?t.parentNode:t),new ga(e)};We.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Cf(e),t=t===null?null:t.stateNode,t};We.flushSync=function(t){return An(t)};We.hydrate=function(t,e,n){if(!rs(e))throw Error(S(200));return os(null,t,e,!0,n)};We.hydrateRoot=function(t,e,n){if(!ya(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=rh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=nh(e,null,t,1,n!=null?n:null,o,!1,i,s),t[Ot]=e.current,eo(t),r)for(t=0;t<r.length;t++)n=r[t],o=n._getVersion,o=o(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,o]:e.mutableSourceEagerHydrationData.push(n,o);return new ns(e)};We.render=function(t,e,n){if(!rs(e))throw Error(S(200));return os(null,t,e,!1,n)};We.unmountComponentAtNode=function(t){if(!rs(t))throw Error(S(40));return t._reactRootContainer?(An(function(){os(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1};We.unstable_batchedUpdates=ua;We.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rs(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return os(t,e,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=We})(mo);const Oy=xc(mo.exports);var oh,Ku=mo.exports;oh=Ku.createRoot,Ku.hydrateRoot;var ih={exports:{}},Y={exports:{}},My="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ny=My,qy=Ny;function sh(){}function lh(){}lh.resetWarningCache=sh;var $y=function(){function t(r,o,i,s,l,c){if(c!==qy){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:lh,resetWarningCache:sh};return n.PropTypes=n,n};Y.exports=$y();function di(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?di=function(e){return typeof e}:di=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},di(t)}function G(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Bu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function W(t,e,n){return e&&Bu(t.prototype,e),n&&Bu(t,n),t}function me(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zi(){return zi=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zi.apply(this,arguments)}function it(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){me(t,o,n[o])})}return t}function _t(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ao(t,e)}function ae(t){return ae=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ae(t)}function ao(t,e){return ao=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},ao(t,e)}function zy(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function fi(t,e,n){return zy()?fi=Reflect.construct:fi=function(o,i,s){var l=[null];l.push.apply(l,i);var c=Function.bind.apply(o,l),a=new c;return s&&ao(a,s.prototype),a},fi.apply(null,arguments)}function Ky(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function pc(t){var e=typeof Map=="function"?new Map:void 0;return pc=function(r){if(r===null||!Ky(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,o)}function o(){return fi(r,arguments,ae(this).constructor)}return o.prototype=Object.create(r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),ao(o,r)},pc(t)}function By(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function ko(t,e){if(t==null)return{};var n=By(t,e),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function ue(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function xt(t,e){return e&&(typeof e=="object"||typeof e=="function")?e:ue(t)}function Hy(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&(t=ae(t),t!==null););return t}function Lt(t,e,n){return typeof Reflect<"u"&&Reflect.get?Lt=Reflect.get:Lt=function(o,i,s){var l=Hy(o,i);if(!!l){var c=Object.getOwnPropertyDescriptor(l,i);return c.get?c.get.call(s):c.value}},Lt(t,e,n||t)}function Te(t){return Uy(t)||jy(t)||Vy()}function Uy(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function jy(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function Vy(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function fr(t){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null;return t.reduce(function(n,r){return n[r]=e||{value:r},n},{})}var ch={logLevel:"warn",defaultKeyEvent:"keydown",defaultComponent:"div",defaultTabIndex:"-1",ignoreTags:["input","select","textarea"],enableHardSequences:!1,ignoreKeymapAndHandlerChangesByDefault:!0,ignoreEventsCondition:function(e){var n=e.target;if(n&&n.tagName){var r=n.tagName.toLowerCase();return V.option("_ignoreTagsDict")[r]||n.isContentEditable}return!1},ignoreRepeatedEventsWhenKeyHeldDown:!0,simulateMissingKeyPressEvents:!0,stopEventPropagationAfterHandling:!0,stopEventPropagationAfterIgnoring:!0,allowCombinationSubmatches:!1,customKeyCodes:{}},Hr=it({},ch);Hr._ignoreTagsDict=fr(Hr.ignoreTags,!0);var V=function(){function t(){G(this,t)}return W(t,null,[{key:"init",value:function(n){var r=this,o=n.ignoreTags,i=n.customKeyCodes;o&&(n._ignoreTagsDict=fr(n.ignoreTags)),i&&(n._customKeyNamesDict=fr(Object.values(n.customKeyCodes))),["verbose","debug","info"].indexOf(n.logLevel)!==-1&&console.warn("React HotKeys: You have requested log level '".concat(n.logLevel,"' but for performance reasons, logging below severity level 'warning' is disabled in production. Please use the development build for complete logs.")),Object.keys(n).forEach(function(s){r.set(s,n[s])})}},{key:"set",value:function(n,r){Hr[n]=r}},{key:"reset",value:function(n){Hr[n]=ch[n]}},{key:"option",value:function(n){return Hr[n]}}]),t}(),dt=function(){function t(){var e=this,n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"warn";if(G(this,t),me(this,"verbose",this.noop),me(this,"debug",this.noop),me(this,"info",this.noop),me(this,"warn",this.noop),me(this,"error",this.noop),this.logLevel=this.constructor.levels[n],this.logLevel>=this.constructor.levels.error)this.error=console.error;else return;if(this.logLevel>=this.constructor.levels.warn)this.warn=console.warn;else return;["info","debug","verbose"].some(function(r){return!(e.logLevel>=e.constructor.levels[r])||(e[r]=console.log,!1)})}return W(t,[{key:"noop",value:function(){}}]),t}();me(dt,"logIcons",["\u{1F4D5}","\u{1F4D7}","\u{1F4D8}","\u{1F4D9}"]),me(dt,"componentIcons",["\u{1F53A}","\u2B50\uFE0F","\u{1F537}","\u{1F536}","\u2B1B\uFE0F"]),me(dt,"eventIcons",["\u2764\uFE0F","\u{1F49A}","\u{1F499}","\u{1F49B}","\u{1F49C}","\u{1F9E1}"]),me(dt,"levels",{none:0,error:1,warn:2,info:3,debug:4,verbose:5});var M={keydown:0,keypress:1,keyup:2},Zs={Shift:["shiftKey"],Meta:["metaKey"],Control:["ctrlKey"],Alt:["altKey"]},ah={"`":["~"],1:["!"],2:["@",'"'],3:["#","\xA3"],4:["$"],5:["%"],6:["^"],7:["&"],8:["*"],9:["("],0:[")"],"-":["_"],"=":["plus"],";":[":"],"'":['"',"@"],",":["<"],".":[">"],"/":["?"],"\\":["|"],"[":["{"],"]":["}"],"#":["~"]};function va(t){return ah[t]||[t.length===1?t.toUpperCase():t]}function et(t,e){return t.hasOwnProperty(e)}function is(t){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(n,r){var o=t[r];return o.forEach(function(i){et(n,i)||(n[i]=[]),n[i].push(r)}),e.includeOriginal&&(!et(n,r)&&(n[r]=[]),n[r]=[].concat(Te(n[r]),Te(o))),n},{})}var Wy=is(ah);function ss(t){return Wy[t]||[t.length===1?t.toLowerCase():t]}var Gy={},uh=is(Gy,{includeOriginal:!0});function dh(t){return typeof t=="string"}function Zy(t){return dh(t)?t.trim().replace(/\s+/g," "):t}var Qy={tab:"Tab",capslock:"CapsLock",shift:"Shift",meta:"Meta",alt:"Alt",ctrl:"Control",space:" ",spacebar:" ",escape:"Escape",esc:"Escape",left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown",return:"Enter",del:"Delete",command:"Meta",option:"Alt",enter:"Enter",backspace:"Backspace",ins:"Insert",pageup:"PageUp",pagedown:"PageDown",end:"End",home:"Home",contextmenu:"ContextMenu",numlock:"Clear"},Yy={cmd:"Meta"};function fh(t){var e=t.toLowerCase();return Qy[e]||Yy[e]||(t.match(/^f\d+$/)?t.toUpperCase():t)}var ph={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xy=fr(Object.values(ph),!0);function hh(t){return!!Xy[t]}function Jy(t){return V.option("_customKeyNamesDict")[t]}function mh(t){return hh(t)||String.fromCharCode(t.charCodeAt(0))===t||Jy(t)}var gh=function(t){function e(){var n,r;G(this,e);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return r=xt(this,(n=ae(e)).call.apply(n,[this].concat(i))),me(ue(ue(r)),"name","InvalidKeyNameError"),r}return _t(e,t),e}(pc(Error));function Hu(t){return t.sort().join("+")}var yh=function(){function t(){G(this,t)}return W(t,null,[{key:"parse",value:function(n){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=Zy(n),i=o.split(" ");try{var s=i.slice(0,i.length-1),l=i[i.length-1],c=s.map(function(f){var m=Uu(f,r);return Hu(Object.keys(m))}).join(" "),a=Uu(l,r),u=Hu(Object.keys(a)),d={id:u,keyDictionary:a,keyEventType:r.keyEventType,size:Object.keys(a).length};return{sequence:{prefix:c,size:s.length+1},combination:d}}catch{return{sequence:null,combination:null}}}}]),t}();function Uu(t){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return t.replace(/^\+|(\s|[^+]\+)\+/,"$1plus").split("+").reduce(function(n,r){var o=fh(r);if(e.ensureValidKeys&&!mh(o))throw new gh;return n[o]=!0,n},{})}var vh={"`":["`"],1:["\xA1"],2:["\u2122"],3:["\xA3"],4:["\xA2"],5:["\u221E"],6:["\xA7"],7:["\xB6"],8:["\u2022"],9:["\xAA"],0:["\xBA"],"-":["\u2013"],"=":["\u2260"],a:["\xE5"],b:["\u222B"],c:["\xE7"],d:["\u2202"],e:["\xB4"],f:["\u0192"],g:["\xA9"],h:["\u02D9"],i:["\u02C6"],j:["\u2206"],k:["\u02DA"],l:["\xAC"],m:["\xB5"],n:["\u02DC"],o:["\xF8"],p:["\u03C0"],q:["\u0153"],r:["\xAE"],s:["\xDF"],t:["\u2020"],u:["\xA8"],v:["\u221A"],w:["\u2211"],x:["\u2248"],y:["\xA5"],z:["\u03A9"],"[":["\u201C"],"]":["\u2018"],"\\":["\xAB"],"'":["\xE6"],";":["\u2026"],",":["\u2264"],".":["\u2265"],"/":["\xF7"]},ev=is(vh);function ba(t){return ev[t]||[t]}function ka(t){return vh[t]||[t]}var bh={"`":["`"],1:["\u2044"],2:["\u20AC"],3:["\u2039"],4:["\u203A"],5:["\uFB01"],6:["\uFB02"],7:["\u2021"],8:["\xB0"],9:["\xB7"],0:["\u201A"],"-":["\u2014"],"=":["\xB1"],a:["\xC5"],b:["\u0131"],c:["\xC7"],d:["\xCE"],e:["\xB4"],f:["\xCF"],g:["\u02DD"],h:["\xD3"],i:["\u02C6"],j:["\xD4"],k:["\uF8FF"],l:["\xD2"],m:["\xC2"],n:["\u02DC"],o:["\xD8"],p:["\u03C0"],q:["\u0152"],r:["\u2030"],s:["\xCD"],t:["\xCE"],u:["\xA8"],v:["\u25CA"],w:["\u201E"],x:["\u02DB"],y:["\xC1"],z:["\xB8"],"[":["\u201D"],"]":["\u2019"],"\\":["\xBB"],"'":["\xC6"],";":["\xDA"],",":["\xAF"],".":["\u02D8"]},tv=is(bh);function wa(t){return tv[t]||ss(t)}function _a(t){return bh[t]||[t]}var ls=function(){function t(){G(this,t)}return W(t,null,[{key:"serialize",value:function(n){var r=n.Shift,o=n.Alt,i={},s=Object.keys(n).sort();return s.forEach(function(l){var c=[];if(r)if(o){var a=wa(l),u=_a(l);c=[].concat(Te(c),[l],Te(a),Te(u))}else{var d=ss(l),f=va(l);c=[].concat(Te(c),[l],Te(d),Te(f))}else if(o){var m=ba(l),b=ka(l);c=[].concat(Te(c),[l],Te(m),Te(b))}else{c.push(l);var v=uh[l];v&&(c=[].concat(Te(c),Te(v)))}var x=Object.keys(i);0<x.length?x.forEach(function(h){c.forEach(function(p){i[h+"+".concat(p)]=it({},i[h],me({},p,!0))}),delete i[h]}):c.forEach(function(h){i[h]=me({},h,!0)})}),Object.values(i).map(function(l){return Object.keys(l).sort().join("+")})}},{key:"isValidKeySerialization",value:function(n){return 0<n.length&&!!yh.parse(n,{ensureValidKeys:!0}).combination}}]),t}(),ju={previous:0,current:1};function nv(t){return uh[t]||[t]}function rv(t){if(t.Shift)return t.Alt?[_a,wa]:[va,ss];if(t.Alt)return[ka,ba];var e=function(n){return[n]};return[e,e]}function nt(t){return typeof t>"u"}var Rt={unseen:0,seen:1,simulated:2},jt=function(){function t(){G(this,t)}return W(t,null,[{key:"newRecord",value:function(n,r){var o=[Rt.unseen,Rt.unseen,Rt.unseen];if(!nt(n))for(var i=0;i<=n;i++)o[i]=r;return o}},{key:"setBit",value:function(n,r,o){return n[r]=o,n}},{key:"clone",value:function(n){for(var r=this.newRecord(),o=0;o<n.length;o++)r[o]=n[o];return r}}]),t}();function sn(t){return!Array.isArray(t)&&di(t)==="object"&&t!==null}function Ur(t){return sn(t)?Object.keys(t).length===0:!t||t.length===0}function kh(t){return sn(t)?Object.keys(t).length:t.length}var pi=function(){function t(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};G(this,t),this._keys=e,this._includesKeyUp=!1,this._update()}return W(t,[{key:"getIds",value:function(){return this._ids}},{key:"getKeyAliases",value:function(){return this._keyAliases}},{key:"getNormalizedKeyName",value:function(n){var r=this._keys[n];if(r)return n;var o=this._keyAliases[n];return o||n}},{key:"getNumberOfKeys",value:function(){return kh(this._keys)}},{key:"any",value:function(){return 0<Object.keys(this._getKeyStates()).length}},{key:"isEnding",value:function(){return this._includesKeyUp}},{key:"hasEnded",value:function(){return Ur(this.keysStillPressedDict())}},{key:"addKey",value:function(n,r){this._setKeyState(n,[jt.newRecord(),jt.newRecord(M.keydown,r)])}},{key:"setKeyState",value:function(n,r,o){var i=this._getKeyState(n);if(this.isKeyIncluded(n)){var s=jt.clone(i[1]),l=jt.clone(s);jt.setBit(l,r,o),this._setKeyState(n,[s,l])}else this.addKey(n,o);r===M.keyup&&(this._includesKeyUp=!0)}},{key:"forEachKey",value:function(n){return Object.keys(this._keys).forEach(n)}},{key:"some",value:function(n){return Object.keys(this._keys).some(n)}},{key:"getKeyDictionary",value:function(){return fr(Object.keys(this._getKeyStates()),!0)}},{key:"keysStillPressedDict",value:function(){var n=this;return Object.keys(this._keys).reduce(function(r,o){return n.isKeyStillPressed(o)&&(r[o]=n._getKeyState(o)),r},{})}},{key:"isKeyIncluded",value:function(n){return!!this._getKeyState(n)}},{key:"isKeyStillPressed",value:function(n){return this.isEventTriggered(n,M.keypress)&&!this.isKeyReleased(n)}},{key:"isKeyReleased",value:function(n){return this.isEventTriggered(n,M.keyup)}},{key:"isEventTriggered",value:function(n,r){return this._getKeyStateType(n,ju.current,r)}},{key:"wasEventPreviouslyTriggered",value:function(n,r){return this._getKeyStateType(n,ju.previous,r)}},{key:"isKeyPressSimulated",value:function(n){return this._isKeyEventSimulated(n,M.keypress)}},{key:"isKeyUpSimulated",value:function(n){return this._isKeyEventSimulated(n,M.keyup)}},{key:"describe",value:function(){return this.getIds()[0]}},{key:"toJSON",value:function(){return{keys:this._getKeyStates(),ids:this.getIds(),keyAliases:this.getKeyAliases()}}},{key:"_getKeyStateType",value:function(n,r,o){var i=this._getKeyState(n);return i&&i[r][o]}},{key:"_update",value:function(){this._ids=ls.serialize(this._keys),this._keyAliases=ov(this._keys)}},{key:"_isKeyEventSimulated",value:function(n,r){return this.isEventTriggered(n,r)===Rt.simulated}},{key:"_getKeyStates",value:function(){return this._keys}},{key:"_getKeyState",value:function(n){var r=this._keys[n];if(r)return r;var o=this._keyAliases[n];if(o)return this._keys[o]}},{key:"_setKeyState",value:function(n,r){var o=this.getNormalizedKeyName(n);this._keys[o]=r,this._update()}}]),t}();function ov(t){return Object.keys(t).reduce(function(e,n){return nv(n).forEach(function(r){rv(t).forEach(function(o){o(r).forEach(function(i){(i!==n||n!==r)&&(e[i]=n)})})}),e},{})}var Vu=function(){function t(e){var n=e.maxLength,r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null;G(this,t),this._records=[],this._maxLength=n,r?this._push(r):this._push(new pi)}return W(t,[{key:"getMostRecentCombinations",value:function(n){return this._records.slice(-n,-1)}},{key:"any",value:function(){return this._records.some(function(n){return n.any()})}},{key:"getLength",value:function(){return this._records.length}},{key:"getCurrentCombination",value:function(){return this._records[this.getLength()-1]}},{key:"addKeyToCurrentCombination",value:function(n,r,o){this._ensureInitialKeyCombination(),this.getCurrentCombination().setKeyState(n,r,o)}},{key:"setMaxLength",value:function(n){this._maxLength=n,this._trimHistory()}},{key:"startNewKeyCombination",value:function(n,r){this._ensureInitialKeyCombination();var o=new pi(this.getCurrentCombination().keysStillPressedDict());o.addKey(n,r),this._push(o)}},{key:"toJSON",value:function(){return this._records.map(function(n){return n.toJSON()})}},{key:"_ensureInitialKeyCombination",value:function(){this.getLength()===0&&this._push(new pi)}},{key:"_push",value:function(n){this._trimHistory(),this._records.push(n)}},{key:"_trimHistory",value:function(){for(;this.getLength()>this._maxLength;)this._shift()}},{key:"_shift",value:function(){this._records.shift()}}]),t}(),iv=function(){function t(){G(this,t),this._registry={}}return W(t,[{key:"get",value:function(n){return this._registry[n]}},{key:"set",value:function(n,r){this._registry[n]=r}},{key:"remove",value:function(n){delete this._registry[n]}},{key:"toJSON",value:function(){return this._registry}}]),t}();function uo(t){return Array.isArray(t)?t:t?[t]:[]}function sv(t){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},r=fr(uo(e));return Array.isArray(t)?t.reduce(function(o,i){return r[i]&&(n.stringifyFirst||r[i].value===i)||o.push(i),o},[]):sn(t)?Object.keys(t).reduce(function(o,i){return r[i]||(o[i]=t[i]),o},{}):t}var lv=function(t){function e(){return G(this,e),xt(this,ae(e).apply(this,arguments))}return _t(e,t),W(e,[{key:"add",value:function(r,o){Lt(ae(e.prototype),"set",this).call(this,r,{childIds:[],parentId:null,keyMap:o})}},{key:"update",value:function(r,o){var i=Lt(ae(e.prototype),"get",this).call(this,r);Lt(ae(e.prototype),"set",this).call(this,r,it({},i,{keyMap:o}))}},{key:"setParent",value:function(r,o){this.get(r).parentId=o,this._addChildId(o,r)}},{key:"remove",value:function(r){var o=this._getParentId(r);this._removeChildId(o,r),Lt(ae(e.prototype),"remove",this).call(this,r)}},{key:"_getParentId",value:function(r){var o=this.get(r);return o&&o.parentId}},{key:"_addChildId",value:function(r,o){this.get(r).childIds.push(o)}},{key:"_removeChildId",value:function(r,o){var i=this.get(r);i&&(i.childIds=sv(i.childIds,o))}}]),e}(iv);function cv(t,e){return[].concat(Te(t.slice(0,e)),Te(t.slice(e+1)))}var av=function(){function t(e){G(this,t),this._list=e,this._position=-1}return W(t,[{key:"getPosition",value:function(){return this._position}},{key:"getComponent",value:function(){return this._list.getAtPosition(this.getPosition())}},{key:"next",value:function(){return this.getPosition()+1<this._list.getLength()?(this._position++,this.getComponent()):null}}]),t}(),uv=function(){function t(){G(this,t),this._list=[],this._idToIndex={},this._longestSequence=1,this._longestSequenceComponentId=null,this._keyMapEventRecord=jt.newRecord()}return W(t,[{key:"getNewIterator",value:function(){return new av(this)}},{key:"add",value:function(n,r,o,i){if(this.containsId(n))return this.update(n,r,o,i);var s=this._build(n,r,o,i);this._list.push(s);var l=this._getLastIndex();return this._idToIndex[n]=l}},{key:"containsId",value:function(n){return!!this.get(n)}},{key:"get",value:function(n){return this.getAtPosition(this.getIndexById(n))}},{key:"getIndexById",value:function(n){return this._idToIndex[n]}},{key:"update",value:function(n,r,o,i){var s=this._isUpdatingComponentWithLongestSequence(n),l=this.getLongestSequence(),c=this._build(n,r,o,i);s&&c.sequenceLength!==l&&(c.sequenceLength>l?this._longestSequence=c.sequenceLength:this._recalculateLongestSequence()),this._list[this.getIndexById(n)]=c}},{key:"remove",value:function(n){var r=this._isUpdatingComponentWithLongestSequence(n);this.removeAtPosition(this.getIndexById(n)),r&&this._recalculateLongestSequence()}},{key:"any",value:function(){return this.getLength()!==0}},{key:"isRoot",value:function(n){return this.getIndexById(n)>=this.getLength()-1}},{key:"getLongestSequence",value:function(){return this._longestSequence}},{key:"anyActionsForEventType",value:function(n){return!!this._keyMapEventRecord[n]}},{key:"getLength",value:function(){return this._list.length}},{key:"getAtPosition",value:function(n){return this._list[n]}},{key:"removeAtPosition",value:function(n){this._list=cv(this._list,n);for(var r=n;r<this.getLength();)this._idToIndex[this.getAtPosition(r).componentId]=r,r++}},{key:"toJSON",value:function(){return this._list}},{key:"_getLastIndex",value:function(){return this.getLength()-1}},{key:"_build",value:function(n,r,o,i){var s=this._applyHardSequences(r,o),l=s.keyMap,c=s.handlers,a=this._buildActionDictionary(it({},r,l),i,n);return{actions:a,handlers:c,componentId:n,options:i}}},{key:"_isUpdatingComponentWithLongestSequence",value:function(n){return n===this._getLongestSequenceComponentId()}},{key:"_getLongestSequenceComponentId",value:function(){return this._longestSequenceComponentId}},{key:"_recalculateLongestSequence",value:function(){for(var n=this.getNewIterator();n.next();){var r=n.getComponent(),o=r.longestSequence,i=r.componentId;o>this.getLongestSequence()&&(this._longestSequenceComponentId=i,this._longestSequence=o)}}},{key:"_applyHardSequences",value:function(n,r){return V.option("enableHardSequences")?Object.keys(r).reduce(function(o,i){var s=!!n[i];return!s&&ls.isValidKeySerialization(i)&&(o.keyMap[i]=i),o.handlers[i]=r[i],o},{keyMap:{},handlers:{}}):{keyMap:n,handlers:r}}},{key:"_buildActionDictionary",value:function(n,r,o){var i=this;return Object.keys(n).reduce(function(s,l){var c=n[l],a=function(){return sn(c)&&et(c,"sequences")?uo(c.sequences):uo(c)}();return a.forEach(function(u){var d=dv(u,r),f=d.keySequence,m=d.keyEventType;i._addActionOptions(s,o,l,f,m)}),s},{})}},{key:"_addActionOptions",value:function(n,r,o,i,s){var l=yh.parse(i,{keyEventType:s}),c=l.sequence,a=l.combination;c.size>this.getLongestSequence()&&(this._longestSequence=c.size,this._longestSequenceComponentId=r),this._keyMapEventRecord[s]=Rt.seen,n[o]||(n[o]=[]),n[o].push(it({prefix:c.prefix,actionName:o,sequenceLength:c.size},a))}}]),t}();function dv(t,e){if(sn(t)){var n=t.sequence,r=t.action;return{keySequence:n,keyEventType:nt(r)?M[e.defaultKeyEvent]:M[r]}}return{keySequence:t,keyEventType:M[e.defaultKeyEvent]}}function Wu(t,e){return t[t.length-(e+1)]}for(var wh={Enter:!0,Backspace:!0,ArrowRight:!0,ArrowLeft:!0,ArrowUp:!0,ArrowDown:!0,CapsLock:!0},Qs=1;13>Qs;Qs++)wh["F".concat(Qs)]=!0;function _h(t){return t.length===1||et(wh,t)}var fv=function(){function t(){G(this,t),this._actionConfigs={},this._order=null}return W(t,[{key:"addMatch",value:function(n,r){if(this._includesMatcherForCombination(n.id)){var o=n.keyEventType,i=n.actionName,s=n.id;this._addHandlerToActionConfig(s,{keyEventType:o,actionName:i,handler:r})}else this._addNewActionConfig(n,r)}},{key:"findMatch",value:function(n,r,o){this._order||this._setOrder();var i=!0,s=!1,l=void 0;try{for(var c,a=this._order[Symbol.iterator]();!(i=(c=a.next()).done);i=!0){var u=c.value,d=this._actionConfigs[u];if(this._matchesActionConfig(n,r,o,d))return d}}catch(f){s=!0,l=f}finally{try{i||a.return==null||a.return()}finally{if(s)throw l}}return null}},{key:"toJSON",value:function(){return{actionConfigs:this._actionConfigs,order:this._order}}},{key:"_matchesActionConfig",value:function(n,r,o,i){if(!pv(n,i))return!1;var s=i.events[o];if(!s)return!1;var l=!1,c=Object.keys(i.keyDictionary).every(function(a){return!!n.isEventTriggered(a,o)&&(r&&r===n.getNormalizedKeyName(a)&&(l=!n.wasEventPreviouslyTriggered(a,o)),!0)});return c&&l}},{key:"_setOrder",value:function(){var n=Object.values(this._actionConfigs).reduce(function(r,o){var i=o.id,s=o.size;return r[s]||(r[s]=[]),r[s].push(i),r},{});this._order=Object.keys(n).sort(function(r,o){return o-r}).reduce(function(r,o){return r.concat(n[o])},[])}},{key:"_addNewActionConfig",value:function(n,r){var o=n.prefix,i=n.sequenceLength,s=n.id,l=n.keyDictionary,c=n.size,a=n.keyEventType,u=n.actionName;this._setCombinationMatcher(s,{prefix:o,sequenceLength:i,id:s,keyDictionary:l,size:c,events:{}}),this._addHandlerToActionConfig(s,{keyEventType:a,actionName:u,handler:r})}},{key:"_addHandlerToActionConfig",value:function(n,r){var o=r.keyEventType,i=r.actionName,s=r.handler,l=this._getCombinationMatcher(n);this._setCombinationMatcher(n,it({},l,{events:it({},l.events,me({},o,{actionName:i,handler:s}))}))}},{key:"_setCombinationMatcher",value:function(n,r){this._actionConfigs[n]=r}},{key:"_getCombinationMatcher",value:function(n){return this._actionConfigs[n]}},{key:"_includesMatcherForCombination",value:function(n){return!!this._getCombinationMatcher(n)}}]),t}();function pv(t,e){var n=kh(e.keyDictionary);return V.option("allowCombinationSubmatches")||hv(t)?t.getNumberOfKeys()>=n:t.getNumberOfKeys()===n}function hv(t){return!!t.isKeyStillPressed("Meta")&&t.some(function(e){return _h(e)})}var mv=function(){function t(){G(this,t),this._combinationMatchers={},this._eventRecord=jt.newRecord()}return W(t,[{key:"addMatch",value:function(n,r){var o=this._getOrCreateCombinationMatcher(n.prefix);o.addMatch(n,r),jt.setBit(this._eventRecord,n.keyEventType,Rt.seen),(!this._longestSequence||this._longestSequence<n.sequenceLength)&&(this._longestSequence=n.sequenceLength)}},{key:"findMatch",value:function(n,r,o){var i=this._findCombinationMatcher(n);return i?i.findMatch(n.getCurrentCombination(),n.getCurrentCombination().getNormalizedKeyName(r),o):null}},{key:"hasMatchesForEventType",value:function(n){return!!this._eventRecord[n]}},{key:"getLongestSequence",value:function(){return this._longestSequence}},{key:"toJSON",value:function(){var n=this;return Object.keys(this._combinationMatchers).reduce(function(r,o){var i=n._combinationMatchers[o];return r[o]=i.toJSON(),r},{})}},{key:"_getOrCreateCombinationMatcher",value:function(n){return this._combinationMatchers[n]||(this._combinationMatchers[n]=new fv),this._combinationMatchers[n]}},{key:"_findCombinationMatcher",value:function(n){var r=n.getMostRecentCombinations(this.getLongestSequence());if(r.length===0)return this._combinationMatchers[""];for(var o=r.map(function(b){return b.getIds()}),i=o.map(function(b){return b.length}),s=Array(o.length).fill(0),l=!1;!l;){var c=s.map(function(b,v){return o[v][b]}),a=c.join(" ");if(this._combinationMatchers[a])return this._combinationMatchers[a];for(var u=0,d=!0;d&&u<s.length;){var f=Wu(s,u),m=(f+1)%(Wu(i,u)||1);s[s.length-(u+1)]=m,d=m==0,d&&u++}l=u===s.length}}}]),t}(),gv=function(){function t(e){G(this,t),this._keyMapMatchers=[],this._unmatchedHandlerStatus=[],this._handlersDictionary={},this._keySequencesDictionary={};for(var n=e.getNewIterator();n.next();){var r=n.getComponent(),o=r.handlers;this._unmatchedHandlerStatus.push([Object.keys(o).length,{}]),this._keyMapMatchers.push(new mv)}this._componentList=e,this._componentListIterator=e.getNewIterator()}return W(t,[{key:"getKeyHistoryMatcher",value:function(n){if(this._componentHasUnmatchedHandlers(n))for(;this._componentListIterator.next();)this._addHandlersFromComponent(),this._addActionsFromComponent();return this._getKeyHistoryMatcher(n)}},{key:"componentHasActionsBoundToEventType",value:function(n,r){return this.getKeyHistoryMatcher(n).hasMatchesForEventType(r)}},{key:"findMatchingKeySequenceInComponent",value:function(n,r,o,i){return this.componentHasActionsBoundToEventType(n,i)?this.getKeyHistoryMatcher(n).findMatch(r,o,i):null}},{key:"_getKeyHistoryMatcher",value:function(n){return this._keyMapMatchers[n]}},{key:"_addActionsFromComponent",value:function(){var n=this,r=this._componentListIterator.getComponent(),o=r.actions;Object.keys(o).forEach(function(i){var s=n._getHandlers(i);if(s){var l=s[0],c=n._componentList.getAtPosition(l).handlers[i],a=n._getKeyHistoryMatcher(l),u=o[i];u.forEach(function(d){var f=[d.prefix,d.id].join(" ");n._isClosestHandlerFound(f,d)||(a.addMatch(d,c),n._addKeySequence(f,[l,d.keyEventType]))}),s.forEach(function(d){var f=n._getUnmatchedHandlerStatus(d);f[1][i]||(f[1][i]=!0,f[0]--)})}})}},{key:"_getHandlers",value:function(n){return this._handlersDictionary[n]}},{key:"_addHandlersFromComponent",value:function(){var n=this,r=this._componentListIterator.getComponent(),o=r.handlers;Object.keys(o).forEach(function(i){n._addHandler(i)})}},{key:"_addHandler",value:function(n){this._handlersDictionary[n]||(this._handlersDictionary[n]=[]),this._handlersDictionary[n].push(this._componentListIterator.getPosition())}},{key:"_addKeySequence",value:function(n,r){this._keySequencesDictionary[n]||(this._keySequencesDictionary[n]=[]),this._keySequencesDictionary[n].push(r)}},{key:"_componentHasUnmatchedHandlers",value:function(n){return 0<this._getUnmatchedHandlerStatus(n)[0]}},{key:"_getUnmatchedHandlerStatus",value:function(n){return this._unmatchedHandlerStatus[n]}},{key:"_isClosestHandlerFound",value:function(n,r){return this._keySequencesDictionary[n]&&this._keySequencesDictionary[n].some(function(o){return o[1]===r.keyEventType})}}]),t}();function Ho(t,e,n){return n.forEach(function(r){et(t,r)&&(e[r]=t[r])}),e}function Gu(t){switch(parseInt(t,10)){case 0:return"keydown";case 1:return"keypress";default:return"keyup"}}function yv(t){return!hh(t)}function _n(t){return t.simulated?Rt.simulated:Rt.seen}var Zu=["sequence","action"],Qu=["name","description","group"],xh=function(){function t(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},n=1<arguments.length?arguments[1]:void 0;G(this,t),this.logger=e.logger||new dt("warn"),this.componentId=-1,this.keyEventManager=n,this._componentTree=new lv,this.rootComponentId=null,this._reset(),this.resetKeyHistory()}return W(t,[{key:"_reset",value:function(){this.componentList=new uv,this._initHandlerResolutionState()}},{key:"_newKeyHistory",value:function(){return new Vu({maxLength:this.componentList.getLongestSequence()})}},{key:"getKeyHistory",value:function(){return this._keyHistory?this._keyHistory:(this._keyHistory=this._newKeyHistory(),this._keyHistory)}},{key:"_initHandlerResolutionState",value:function(){this._actionResolver=null}},{key:"resetKeyHistory",value:function(){var n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.keypressEventsToSimulate=[],this.keyupEventsToSimulate=[],this._keyHistory=this.getKeyHistory().any()&&!n.force?new Vu({maxLength:this.componentList.getLongestSequence()},new pi(this.getCurrentCombination().keysStillPressedDict())):this._newKeyHistory()}},{key:"getApplicationKeyMap",value:function(){return this.rootComponentId===null?{}:this._buildApplicationKeyMap([this.rootComponentId],{})}},{key:"_buildApplicationKeyMap",value:function(n,r){var o=this;return n.forEach(function(i){var s=o._componentTree.get(i),l=s.childIds,c=s.keyMap;c&&Object.keys(c).forEach(function(a){var u=c[a];r[a]={},sn(u)?et(u,"sequences")?(Ho(u,r[a],Qu),r[a].sequences=o._createSequenceFromConfig(u.sequences)):(Ho(u,r[a],Qu),r[a].sequences=[Ho(u,{},Zu)]):r[a].sequences=o._createSequenceFromConfig(u)}),o._buildApplicationKeyMap(l,r)}),r}},{key:"_createSequenceFromConfig",value:function(n){return uo(n).map(function(r){return sn(r)?Ho(r,{},Zu):{sequence:r}})}},{key:"registerKeyMap",value:function(n){return this.componentId+=1,this._componentTree.add(this.componentId,n),this.componentId}},{key:"reregisterKeyMap",value:function(n,r){this._componentTree.update(n,r)}},{key:"registerComponentMount",value:function(n,r){nt(r)?this.rootComponentId=n:this._componentTree.setParent(n,r)}},{key:"deregisterKeyMap",value:function(n){this._componentTree.remove(n),n===this.rootComponentId&&(this.rootComponentId=null)}},{key:"_addComponent",value:function(n){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},i=3<arguments.length?arguments[3]:void 0;this.componentList.add(n,r,o,i),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence())}},{key:"_allKeysAreReleased",value:function(){return this.getCurrentCombination().hasEnded()}},{key:"getCurrentCombination",value:function(){return this.getKeyHistory().getCurrentCombination()}},{key:"_shouldSimulate",value:function(n,r){var o=yv(r),i=this.getCurrentCombination();return n===M.keypress?!o||o&&i.isKeyStillPressed("Meta"):n===M.keyup&&_h(r)&&i.isKeyReleased("Meta")}},{key:"_cloneAndMergeEvent",value:function(n,r){var o=Object.keys(Zs).reduce(function(i,s){return i[s]=n[s],i},{});return it({},o,r)}},{key:"_callClosestMatchingHandler",value:function(n,r,o,i,s){for(this._actionResolver||(this._actionResolver=new gv(this.componentList));s<=i;){this._actionResolver.getKeyHistoryMatcher(s);var l=this._actionResolver.findMatchingKeySequenceInComponent(s,this.getKeyHistory(),r,o);if(this.getCurrentCombination(),l){var c=l.events[o];return V.option("allowCombinationSubmatches")&&ls.serialize(l.keyDictionary),c.handler(n),this._stopEventPropagationAfterHandlingIfEnabled(n,s),!0}this._actionResolver.componentHasActionsBoundToEventType(s,o),s++}}},{key:"_stopEventPropagationAfterHandlingIfEnabled",value:function(n,r){return!!V.option("stopEventPropagationAfterHandling")&&(this._stopEventPropagation(n,r),!0)}},{key:"_stopEventPropagation",value:function(){throw new Error("_stopEventPropagation must be overridden by a subclass")}},{key:"_checkForModifierFlagDiscrepancies",value:function(n,r,o){var i=this;Object.keys(Zs).forEach(function(s){if(r!==s||o!==M.keyup){var l=i.getCurrentCombination(),c=l.isKeyStillPressed(s);Zs[s].forEach(function(a){n[a]===!1&&c&&l.setKeyState(s,M.keyup,_n(n))})}})}},{key:"_logPrefix",value:function(){}}]),t}(),fo=function(){function t(){G(this,t)}return W(t,null,[{key:"getId",value:function(){return nt(this._id)&&(this._id=0),this._id}},{key:"incrementId",value:function(){this._id=this.getId()+1}}]),t}();function vv(t){var e,n=t.keyCode;return"charCode"in t?(e=t.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}var bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"};function kv(t){if(t.key){var e=bv[t.key]||t.key;if(e!=="Unidentified")return e}if(t.type==="keypress"){var n=vv(t);return n===13?"Enter":String.fromCharCode(n)}return t.type==="keydown"||t.type==="keyup"?ph[t.keyCode]||"Unidentified":""}function rr(t){var e=function(){var n=V.option("customKeyCodes"),r=t.keyCode||t.charCode;return et(n,r)?n[r]:t.nativeEvent?t.key:kv(t)}();return e==="+"?"plus":e}function Ki(t){return t==="Meta"}var ee={unseen:0,ignored:1,seen:2,recorded:3,handled:4},wv=function(){function t(e,n){var r=n.logger,o=n.logPrefix;G(this,t),this._componentList=e,this._previousPropagation=null,this.logger=r,this._logPrefix=o,this._reset()}return W(t,[{key:"_reset",value:function(){this._previousPosition=-1,this._position=-1,this._actionHandled=!1,this._ignoreEvent=!1,this._observeIgnoredEvents=!1,this._stopping=!1,this._componentId=null,this._key=null,this._type=null}},{key:"isFirstPropagationStep",value:function(){var n=this.getPreviousPosition();return n===-1||n>=this._position}},{key:"isForKey",value:function(n){return this._key===n}},{key:"isForEventType",value:function(n){return this._type===n}},{key:"startNewPropagationStep",value:function(n,r,o,i){return this._position=this._componentList.getIndexById(n),this._componentId=n,this.isFirstPropagationStep()&&(fo.incrementId(),this._key=r.key,this._type=i),!(r.repeat&&V.option("ignoreRepeatedEventsWhenKeyHeldDown"))||(this.ignoreEvent(r),!1)}},{key:"finishPropagationStep",value:function(){this.isStopped()||this._componentList.isRoot(this._componentId)?(this._previousPropagation=this._clone(),this._reset()):this._previousPosition=this._position}},{key:"getPreviousPropagation",value:function(){return this._previousPropagation||(this._previousPropagation=this._clone({copyState:!1})),this._previousPropagation}},{key:"getPreviousPosition",value:function(){return this._previousPosition}},{key:"observeIgnoredEvents",value:function(){this._observeIgnoredEvents=!0}},{key:"ignoreEvent",value:function(n){return this.setIgnoreEvent(!0),!!(this.isIgnoringEvent()&&V.option("stopEventPropagationAfterIgnoring"))&&(this.stop(n),this.finishPropagationStep(),!0)}},{key:"setIgnoreEvent",value:function(n){this._ignoreEvent=n}},{key:"isIgnoringEvent",value:function(){return!this._observeIgnoredEvents&&this._ignoreEvent}},{key:"isStopped",value:function(){return this._stopping}},{key:"stop",value:function(n){return!this.isStopped()&&(this._stopping=!0,n.simulated||n.stopPropagation(),!0)}},{key:"isPendingPropagation",value:function(){var n=this.getPreviousPosition();return n!==-1&&n+1<this._position}},{key:"isHandled",value:function(){return this._actionHandled}},{key:"setHandled",value:function(){this._actionHandled=!0}},{key:"_clone",value:function(){var n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},r=n.copyState,o=new t(this._componentList,{logger:this.logger,logPrefix:this._logPrefix});return(r===void 0||r)&&Object.assign(o,this),o}}]),t}(),_v=function(t){function e(){var n,r=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},o=1<arguments.length?arguments[1]:void 0;return G(this,e),n=xt(this,ae(e).call(this,r,o)),n.focusTreeId=0,n}return _t(e,t),W(e,[{key:"_reset",value:function(){Lt(ae(e.prototype),"_reset",this).call(this),this.keypressEventsToSimulate=[],this.focusTreeId+=1,this.eventPropagator=new wv(this.componentList,{logger:this.logger,logPrefix:this._logPrefix.bind(this)})}},{key:"enableHotKeys",value:function(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},s=3<arguments.length?arguments[3]:void 0;if(this.resetOnNextFocus&&(this._reset(),this.resetOnNextFocus=!1),!this.componentList.containsId(r))return this._addComponent(r,o,i,s),this.focusTreeId}},{key:"updateEnabledHotKeys",value:function(r,o){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},l=4<arguments.length?arguments[4]:void 0;r===this.focusTreeId&&this.componentList.containsId(o)&&(this.componentList.update(o,i,s,l),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()),this._initHandlerResolutionState())}},{key:"disableHotKeys",value:function(r,o){this.resetOnNextFocus||(this.resetOnNextFocus=!0);var i=this.eventPropagator.isPendingPropagation();return i}},{key:"handleKeydown",value:function(r,o,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},l=rr(r);if(o!==this.focusTreeId)return this.eventPropagator.ignoreEvent(r),!0;var c=this.eventPropagator.startNewPropagationStep(i,r,l,M.keydown);if(c){var a=this._howToHandleKeyEvent(r,o,i,l,s,M.keydown);if(a===ee.handled){var u=_n(r),d=this.getCurrentCombination();d.isKeyIncluded(l)||d.isEnding()?this._startAndLogNewKeyCombination(l,o,i,u):this._addToAndLogCurrentKeyCombination(l,M.keydown,o,i,u),this._callHandlerIfActionNotHandled(r,l,M.keydown,i,o)}return this._simulateKeyPressForNonPrintableKeys(r,l,o,i,s),this.eventPropagator.finishPropagationStep(),!1}}},{key:"_howToHandleKeyEvent",value:function(r,o,i,s,l,c){if(this.eventPropagator.isFirstPropagationStep()){if(l.ignoreEventsCondition(r)&&this.eventPropagator.ignoreEvent(r))return this._eventIsToBeIgnored(r,i,s,c);this._checkForModifierFlagDiscrepancies(r,s,c)}else if(this.eventPropagator.isIgnoringEvent())return this._eventIsToBeIgnored(r,i,s,c);return ee.handled}},{key:"_eventIsToBeIgnored",value:function(r,o,i,s){return ee.ignored}},{key:"handleKeyPress",value:function(r,o,i,s){var l=rr(r),c=this.getCurrentCombination();if(c.isKeyPressSimulated(l))return this.eventPropagator.ignoreEvent(r),!0;var a=this.eventPropagator.startNewPropagationStep(i,r,l,M.keypress);if(a){var u=o!==this.focusTreeId,d=this._howToHandleKeyEvent(r,o,i,l,s,M.keypress);return this.eventPropagator.isFirstPropagationStep(i)&&c.isKeyIncluded(l)&&this._addToAndLogCurrentKeyCombination(l,M.keypress,o,i,_n(r)),d===ee.handled&&this._callHandlerIfActionNotHandled(r,l,M.keypress,i,o),this.eventPropagator.finishPropagationStep(),u}}},{key:"handleKeyUp",value:function(r,o,i,s){var l=rr(r),c=this.getCurrentCombination();if(c.isKeyUpSimulated(l))return this.eventPropagator.ignoreEvent(r),!0;var a=this.eventPropagator.startNewPropagationStep(i,r,l,M.keyup);if(a){var u=o!==this.focusTreeId,d=this._howToHandleKeyEvent(r,o,i,l,s,M.keyup);return this.eventPropagator.isFirstPropagationStep(i)&&c.isKeyIncluded(l)&&this._addToAndLogCurrentKeyCombination(l,M.keyup,o,i,_n(r)),d===ee.handled&&this._callHandlerIfActionNotHandled(r,l,M.keyup,i,o),this._simulateKeyUpEventsHiddenByCmd(r,l,o,i,s),this.eventPropagator.finishPropagationStep(),u}}},{key:"closeHangingKeyCombination",value:function(r,o){var i=this.getCurrentCombination();i.isKeyIncluded(r)&&!i.isEventTriggered(r,o)&&i.setKeyState(r,o,Rt.simulated)}},{key:"_simulateKeyPressForNonPrintableKeys",value:function(r,o,i,s,l){this._handleEventSimulation("keypressEventsToSimulate","simulatePendingKeyPressEvents",this._shouldSimulate(M.keypress,o),{event:r,key:o,focusTreeId:i,componentId:s,options:l})}},{key:"_simulateKeyUpEventsHiddenByCmd",value:function(r,o,i,s,l){var c=this;Ki(o)&&this.getCurrentCombination().forEachKey(function(a){Ki(a)||c._handleEventSimulation("keyupEventsToSimulate","simulatePendingKeyUpEvents",c._shouldSimulate(M.keyup,a),{event:r,key:a,focusTreeId:i,componentId:s,options:l})})}},{key:"_stopEventPropagation",value:function(r,o){this.eventPropagator.stop(r)}},{key:"getEventPropagator",value:function(){return this.eventPropagator}},{key:"_startAndLogNewKeyCombination",value:function(r,o,i,s){this.getKeyHistory().startNewKeyCombination(r,s)}},{key:"_addToAndLogCurrentKeyCombination",value:function(r,o,i,s,l){this.getKeyHistory().addKeyToCurrentCombination(r,o,l)}},{key:"_handleEventSimulation",value:function(r,o,i,s){var l=s.event,c=s.key,a=s.focusTreeId,u=s.componentId,d=s.options;if(i&&V.option("simulateMissingKeyPressEvents")){var f=this._cloneAndMergeEvent(l,{key:c,simulated:!0});this[r].push({event:f,focusTreeId:a,componentId:u,options:d})}(this.componentList.isRoot(u)||this.eventPropagator.isStopped())&&!this.keyEventManager.isGlobalListenersBound()&&this[o]()}},{key:"simulatePendingKeyPressEvents",value:function(){this._simulatePendingKeyEvents("keypressEventsToSimulate","handleKeyPress")}},{key:"simulatePendingKeyUpEvents",value:function(){this._simulatePendingKeyEvents("keyupEventsToSimulate","handleKeyUp")}},{key:"_simulatePendingKeyEvents",value:function(r,o){var i=this;0<this[r].length&&fo.incrementId(),this[r].forEach(function(s){var l=s.event,c=s.focusTreeId,a=s.componentId,u=s.options;i[o](l,c,a,u)}),this[r]=[]}},{key:"_callHandlerIfActionNotHandled",value:function(r,o,i,s,l){if(this.getCurrentCombination().describe(),!!this.componentList.anyActionsForEventType(i)&&!this.eventPropagator.isHandled()){var c=this.eventPropagator.getPreviousPosition(),a=this.componentList.getIndexById(s),u=this._callClosestMatchingHandler(r,o,i,a,c===-1?0:c);u&&this.eventPropagator.setHandled()}}},{key:"_logPrefix",value:function(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},i=dt.logIcons,s=dt.eventIcons,l=dt.componentIcons,c="HotKeys (";if(o.focusTreeId!==!1){var a=nt(o.focusTreeId)?this.focusTreeId:o.focusTreeId;c+="F".concat(a).concat(i[a%i.length],"-")}if(o.eventId!==!1){var u=nt(o.eventId)?fo.getId():o.eventId;c+="E".concat(u).concat(s[u%s.length],"-")}c+="C".concat(r).concat(l[r%l.length]);var d=this.componentList.getIndexById(r);return nt(d)||(c+="-P".concat(d).concat(l[d%l.length],":")),"".concat(c,")")}}]),e}(xh);function Uo(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};return Array.isArray(t)||dh(t)?n.stringifyFirst?!nt(t.find(function(r){return r.toString()===e.toString()})):t.indexOf(e)!==-1:sn(t)?et(t,e):n.stringifyFirst?t.toString()===e.toString():t===e}function Yu(t){return t.replace(/\b\w/g,function(e){return e.toUpperCase()})}function xv(t){return"".concat(Yu(t.slice(0,3))).concat(Yu(t.slice(3)))}var Cv=function(t){function e(){var n,r=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},o=1<arguments.length?arguments[1]:void 0;return G(this,e),n=xt(this,ae(e).call(this,r,o)),n.listenersBound=!1,n.eventOptions={ignoreEventsCondition:V.option("ignoreEventsCondition")},n.listeners={},n}return _t(e,t),W(e,[{key:"enableHotKeys",value:function(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},s=3<arguments.length?arguments[3]:void 0,l=4<arguments.length?arguments[4]:void 0;this.eventOptions=l,this._addComponent(r,o,i,s),this._updateDocumentHandlers(),this._initHandlerResolutionState()}},{key:"updateEnabledHotKeys",value:function(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},s=3<arguments.length?arguments[3]:void 0,l=4<arguments.length?arguments[4]:void 0;this.eventOptions=l,this.componentList.update(r,o,i,s),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()),this._updateDocumentHandlers(),this._initHandlerResolutionState()}},{key:"disableHotKeys",value:function(r){this.componentList.remove(r),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()),this._updateDocumentHandlers(),this._initHandlerResolutionState()}},{key:"_updateDocumentHandlers",value:function(){var r=this,o=this._listenersShouldBeBound();!this.listenersBound&&o?(Object.values(M).forEach(function(i){var s=Gu(i);document["on".concat(s)]=function(l){r.keyEventManager["handleGlobal".concat(xv(s))](l)}}),this.listenersBound=!0):this.listenersBound&&!o&&(Object.values(M).forEach(function(i){var s=Gu(i);delete document["on".concat(s)]}),this.listenersBound=!1)}},{key:"_listenersShouldBeBound",value:function(){return this.componentList.any()||this.listeners.keyCombination}},{key:"handleKeydown",value:function(r){var o=rr(r);if(r.repeat&&V.option("ignoreRepeatedEventsWhenKeyHeldDown"))return!0;this._checkForModifierFlagDiscrepancies(r,o,M.keydown);var i=this._howReactAppRespondedTo(r,o,M.keydown);if(!(i===ee.unseen&&this.eventOptions.ignoreEventsCondition(r))){if(i!==ee.ignored){var s=_n(r),l=this.getCurrentCombination();l.isKeyIncluded(o)||l.isEnding()?this._startAndLogNewKeyCombination(o,s):this._addToAndLogCurrentKeyCombination(o,M.keydown,s)}Uo([ee.ignored,ee.handled],i)||this._callHandlerIfExists(r,o,M.keydown),this._simulateKeyPressForNonPrintableKeys(r,o)}}},{key:"_howReactAppRespondedTo",value:function(r,o,i){var s=this.keyEventManager.reactAppHistoryWithEvent(o,i);return s===ee.handled||s===ee.ignored||s===ee.seen||fo.incrementId(),s}},{key:"handleKeyPress",value:function(r){var o=rr(r);if(r.repeat&&V.option("ignoreRepeatedEventsWhenKeyHeldDown"))return!0;var i=this.getCurrentCombination();if(i.isKeyPressSimulated(o))return!0;var s=this._howReactAppRespondedTo(r,o,M.keypress);return i.isKeyIncluded(o)&&this._addToAndLogCurrentKeyCombination(o,M.keypress,_n(r)),s===ee.unseen&&(this.keyEventManager.closeHangingKeyCombination(o,M.keypress),this.eventOptions.ignoreEventsCondition(r))?void 0:void(!Uo([ee.ignored,ee.handled],s)&&this._callHandlerIfExists(r,o,M.keypress))}},{key:"handleKeyUp",value:function(r){var o=rr(r),i=this.getCurrentCombination();if(i.isKeyUpSimulated(o))return!0;var s=this._howReactAppRespondedTo(r,o,M.keyup);i.isKeyIncluded(o)&&this._addToAndLogCurrentKeyCombination(o,M.keyup,_n(r)),s===ee.unseen?(this.keyEventManager.closeHangingKeyCombination(o,M.keyup),this.eventOptions.ignoreEventsCondition(r)||!Uo([ee.ignored,ee.handled],s)&&this._callHandlerIfExists(r,o,M.keyup)):!Uo([ee.ignored,ee.handled],s)&&this._callHandlerIfExists(r,o,M.keyup),this._simulateKeyUpEventsHiddenByCmd(r,o),this.listeners.keyCombination&&this._allKeysAreReleased()&&this.listeners.keyCombination({keys:i.getKeyDictionary(),id:i.describe()})}},{key:"_simulateKeyPressForNonPrintableKeys",value:function(r,o){this.keyEventManager.simulatePendingKeyPressEvents(),this._handleEventSimulation("handleKeyPress",this._shouldSimulate(M.keypress,o),{event:r,key:o})}},{key:"_simulateKeyUpEventsHiddenByCmd",value:function(r,o){var i=this;Ki(o)&&(this.keyEventManager.simulatePendingKeyUpEvents(),this.getCurrentCombination().forEachKey(function(s){Ki(s)||i._handleEventSimulation("handleKeyUp",i._shouldSimulate(M.keyup,s),{event:r,key:s})}))}},{key:"_startAndLogNewKeyCombination",value:function(r,o){this.getKeyHistory().startNewKeyCombination(r,o)}},{key:"_addToAndLogCurrentKeyCombination",value:function(r,o,i){this.getKeyHistory().addKeyToCurrentCombination(r,o,i)}},{key:"_handleEventSimulation",value:function(r,o,i){var s=i.event,l=i.key;if(o&&V.option("simulateMissingKeyPressEvents")){var c=this._cloneAndMergeEvent(s,{key:l,simulated:!0});this[r](c)}}},{key:"_callHandlerIfExists",value:function(r,o,i){return this.getCurrentCombination().describe(),this.componentList.anyActionsForEventType(i)?void this._callClosestMatchingHandler(r,o,i):void 0}},{key:"_callClosestMatchingHandler",value:function(r,o,i){for(var s,l=this.componentList.getNewIterator();l.next();)if(s=Lt(ae(e.prototype),"_callClosestMatchingHandler",this).call(this,r,o,i,l.getPosition(),0),s)return}},{key:"_stopEventPropagation",value:function(r,o){r.simulated||r.stopPropagation()}},{key:"addKeyCombinationListener",value:function(r){var o=this,i=function(){delete o.listeners.keyCombination};return this.listeners.keyCombination=function(s){r(s),i()},this._updateDocumentHandlers(),i}},{key:"_logPrefix",value:function(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},i=dt.eventIcons,s=dt.componentIcons,l="HotKeys (GLOBAL";if(o.eventId!==!1){var c=nt(o.eventId)?fo.getId():o.eventId;l="".concat(l,"-E").concat(c).concat(i[c%i.length])}return nt(r)?"".concat(l,"):"):"".concat(l,"-C").concat(r).concat(s[r%s.length],"):")}}]),e}(xh);function Ys(t){return!nt(t)}var Ce=function(){function t(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};G(this,t),this.logger=e.logger||new dt(V.option("logLevel")),this._focusOnlyEventStrategy=new _v({configuration:e,logger:this.logger},this),this._globalEventStrategy=new Cv({configuration:e,logger:this.logger},this),this.mountedComponentsCount=0}return W(t,null,[{key:"getInstance",value:function(){var n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return this.instance||(this.instance=new t(n)),this.instance}},{key:"clear",value:function(){delete this.instance}}]),W(t,[{key:"getApplicationKeyMap",value:function(){return Object.assign(this._globalEventStrategy.getApplicationKeyMap(),this._focusOnlyEventStrategy.getApplicationKeyMap())}},{key:"registerKeyMap",value:function(){var n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return this._focusOnlyEventStrategy.registerKeyMap(n)}},{key:"reregisterKeyMap",value:function(n){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};this._focusOnlyEventStrategy.reregisterKeyMap(n,r)}},{key:"deregisterKeyMap",value:function(n){this._focusOnlyEventStrategy.deregisterKeyMap(n)}},{key:"registerComponentMount",value:function(n,r){return this._incrementComponentCount(),this._focusOnlyEventStrategy.registerComponentMount(n,r)}},{key:"registerComponentUnmount",value:function(){this._decrementComponentCount()}},{key:"_incrementComponentCount",value:function(){var n=this,r=this.mountedComponentsCount;this.mountedComponentsCount+=1,r===0&&this.mountedComponentsCount===1&&(window.onblur=function(){return n._clearKeyHistory()})}},{key:"_decrementComponentCount",value:function(){var n=this.mountedComponentsCount;this.mountedComponentsCount-=1,n===1&&this.mountedComponentsCount===0&&delete window.onblur}},{key:"_clearKeyHistory",value:function(){this._focusOnlyEventStrategy.resetKeyHistory({force:!0}),this._globalEventStrategy.resetKeyHistory({force:!0})}},{key:"registerGlobalKeyMap",value:function(){var n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return this._globalEventStrategy.registerKeyMap(n)}},{key:"registerGlobalComponentUnmount",value:function(){this._decrementComponentCount()}},{key:"registerGlobalComponentMount",value:function(n,r){return this._incrementComponentCount(),this._globalEventStrategy.registerComponentMount(n,r)}},{key:"reregisterGlobalKeyMap",value:function(n,r){this._globalEventStrategy.reregisterKeyMap(n,r)}},{key:"deregisterGlobalKeyMap",value:function(n){this._globalEventStrategy.deregisterKeyMap(n)}},{key:"addKeyCombinationListener",value:function(n){return this._globalEventStrategy.addKeyCombinationListener(n)}},{key:"enableHotKeys",value:function(n){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},i=3<arguments.length?arguments[3]:void 0;return this._focusOnlyEventStrategy.enableHotKeys(n,r,o,i)}},{key:"updateEnabledHotKeys",value:function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},s=4<arguments.length?arguments[4]:void 0;return this._focusOnlyEventStrategy.updateEnabledHotKeys(n,r,o,i,s)}},{key:"disableHotKeys",value:function(n,r){return this._focusOnlyEventStrategy.disableHotKeys(n,r)}},{key:"handleKeydown",value:function(n,r,o,i){if(Ys(r))return this._focusOnlyEventStrategy.handleKeydown(n,r,o,i)}},{key:"handleKeyPress",value:function(n,r,o,i){if(Ys(r))return this._focusOnlyEventStrategy.handleKeyPress(n,r,o,i)}},{key:"handleKeyUp",value:function(n,r,o,i){if(Ys(r))return this._focusOnlyEventStrategy.handleKeyUp(n,r,o,i)}},{key:"enableGlobalHotKeys",value:function(n){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},i=3<arguments.length?arguments[3]:void 0,s=4<arguments.length?arguments[4]:void 0;return this._globalEventStrategy.enableHotKeys(n,r,o,i,s)}},{key:"updateEnabledGlobalHotKeys",value:function(n){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},i=3<arguments.length?arguments[3]:void 0,s=4<arguments.length?arguments[4]:void 0;return this._globalEventStrategy.updateEnabledHotKeys(n,r,o,i,s)}},{key:"disableGlobalHotKeys",value:function(n){return this._globalEventStrategy.disableHotKeys(n)}},{key:"handleGlobalKeyDown",value:function(n){return this._globalEventStrategy.handleKeydown(n)}},{key:"handleGlobalKeyPress",value:function(n){return this._globalEventStrategy.handleKeyPress(n)}},{key:"handleGlobalKeyUp",value:function(n){return this._globalEventStrategy.handleKeyUp(n)}},{key:"ignoreEvent",value:function(n){this._focusOnlyEventStrategy.getEventPropagator().ignoreEvent(n)}},{key:"observeIgnoredEvents",value:function(n){this._focusOnlyEventStrategy.getEventPropagator().observeIgnoredEvents(n)}},{key:"closeHangingKeyCombination",value:function(n,r){this._focusOnlyEventStrategy.closeHangingKeyCombination(n,r)}},{key:"reactAppHistoryWithEvent",value:function(n,r){var o=this._focusOnlyEventStrategy.eventPropagator.getPreviousPropagation();return o.isForKey(n)&&o.isForEventType(r)?o.isHandled()?ee.handled:o.isIgnoringEvent()?ee.ignored:ee.seen:ee.unseen}},{key:"simulatePendingKeyPressEvents",value:function(){this._focusOnlyEventStrategy.simulatePendingKeyPressEvents()}},{key:"simulatePendingKeyUpEvents",value:function(){this._focusOnlyEventStrategy.simulatePendingKeyUpEvents()}},{key:"isGlobalListenersBound",value:function(){return this._globalEventStrategy.listenersBound}}]),t}();function Ch(t,e){var n=e.deprecatedAPI,r=n.contextTypes,o=n.childContextTypes,i=e.newAPI.contextType;if(typeof te.createContext>"u")t.contextTypes=r,t.childContextTypes=o,t.prototype.getChildContext=function(){return this._childContext};else{var s=te.createContext(i);t.contextType=s,t.prototype._originalRender=t.prototype.render,t.prototype.render=function(){var l=this._originalRender();return l?te.createElement(s.Provider,{value:this._childContext},l):null}}return t}function Eh(t){function e(s,l){return it({},o[s]||{},l[s]||{})}function n(s){return e("handlers",s)}function r(s){return e("keyMap",s)}var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},i=function(s){function l(c){var a;return G(this,l),a=xt(this,ae(l).call(this,c)),a._handleFocus=a._handleFocus.bind(ue(ue(a))),a._handleBlur=a._handleBlur.bind(ue(ue(a))),a._handleKeyDown=a._handleKeyDown.bind(ue(ue(a))),a._handleKeyPress=a._handleKeyPress.bind(ue(ue(a))),a._handleKeyUp=a._handleKeyUp.bind(ue(ue(a))),a._componentIsFocused=a._componentIsFocused.bind(ue(ue(a))),a._id=Ce.getInstance().registerKeyMap(c.keyMap),a._childContext={hotKeysParentId:a._id},a}return _t(l,s),W(l,[{key:"render",value:function(){var a=this.props;a.keyMap,a.handlers,a.allowChanges,a.root;var u=ko(a,["keyMap","handlers","allowChanges","root"]),d={onFocus:this._wrapFunction("onFocus",this._handleFocus),onBlur:this._wrapFunction("onBlur",this._handleBlur),tabIndex:V.option("defaultTabIndex")};return this._shouldBindKeyListeners()&&(d.onKeyDown=this._handleKeyDown,d.onKeyPress=this._handleKeyPress,d.onKeyUp=this._handleKeyUp),te.createElement(t,zi({hotKeys:d},u))}},{key:"_shouldBindKeyListeners",value:function(){var a=r(this.props);return!Ur(a)||this.props.root||V.option("enableHardSequences")&&this._handlersIncludeHardSequences(a,n(this.props))}},{key:"_handlersIncludeHardSequences",value:function(a,u){return Object.keys(u).some(function(d){return!a[d]&&ls.isValidKeySerialization(d)})}},{key:"_wrapFunction",value:function(a,u){var d=this;return typeof this.props[a]=="function"?function(f){d.props[a](f),u(f)}:u}},{key:"_focusTreeIdsPush",value:function(a){this._focusTreeIds||(this._focusTreeIds=[]),this._focusTreeIds.push(a)}},{key:"_focusTreeIdsShift",value:function(){this._focusTreeIds&&this._focusTreeIds.shift()}},{key:"_getFocusTreeId",value:function(){if(this._focusTreeIds)return this._focusTreeIds[0]}},{key:"componentDidUpdate",value:function(){var a=Ce.getInstance();if(a.reregisterKeyMap(this._id,this.props.keyMap),this._componentIsFocused()&&(this.props.allowChanges||!V.option("ignoreKeymapAndHandlerChangesByDefault"))){var u=this.props,d=u.keyMap,f=u.handlers;a.updateEnabledHotKeys(this._getFocusTreeId(),this._id,d,f,this._getComponentOptions())}}},{key:"_componentIsFocused",value:function(){return this._focused===!0}},{key:"componentDidMount",value:function(){var a=Ce.getInstance(),u=this.context.hotKeysParentId;a.registerComponentMount(this._id,u)}},{key:"_handleFocus",value:function(){if(this.props.onFocus){var a;(a=this.props).onFocus.apply(a,arguments)}var u=Ce.getInstance().enableHotKeys(this._id,r(this.props),n(this.props),this._getComponentOptions());nt(u)||this._focusTreeIdsPush(u),this._focused=!0}},{key:"componentWillUnmount",value:function(){var a=Ce.getInstance();a.deregisterKeyMap(this._id),a.registerComponentUnmount(),this._handleBlur()}},{key:"_handleBlur",value:function(){if(this.props.onBlur){var a;(a=this.props).onBlur.apply(a,arguments)}var u=Ce.getInstance().disableHotKeys(this._getFocusTreeId(),this._id);u||this._focusTreeIdsShift(),this._focused=!1}},{key:"_handleKeyDown",value:function(a){var u=Ce.getInstance().handleKeydown(a,this._getFocusTreeId(),this._id,this._getEventOptions());u&&this._focusTreeIdsShift()}},{key:"_handleKeyPress",value:function(a){var u=Ce.getInstance().handleKeyPress(a,this._getFocusTreeId(),this._id,this._getEventOptions());u&&this._focusTreeIdsShift()}},{key:"_handleKeyUp",value:function(a){var u=Ce.getInstance().handleKeyUp(a,this._getFocusTreeId(),this._id,this._getEventOptions());u&&this._focusTreeIdsShift()}},{key:"_getComponentOptions",value:function(){return{defaultKeyEvent:V.option("defaultKeyEvent")}}},{key:"_getEventOptions",value:function(){return{ignoreEventsCondition:V.option("ignoreEventsCondition")}}}]),l}(y.exports.PureComponent);return me(i,"propTypes",{keyMap:Y.exports.object,handlers:Y.exports.object,onFocus:Y.exports.func,onBlur:Y.exports.func,allowChanges:Y.exports.bool,root:Y.exports.bool}),Ch(i,{deprecatedAPI:{contextTypes:{hotKeysParentId:Y.exports.number},childContextTypes:{hotKeysParentId:Y.exports.number}},newAPI:{contextType:{hotKeysParentId:void 0}}})}var Ev=function(t){function e(){return G(this,e),xt(this,ae(e).apply(this,arguments))}return _t(e,t),W(e,[{key:"render",value:function(){var r=this.props,o=r.hotKeys,i=r.innerRef,s=r.component,l=ko(r,["hotKeys","innerRef","component"]),c=s||V.option("defaultComponent");return te.createElement(c,it({},o,{ref:i},l))}}]),e}(y.exports.Component),Sh=Eh(Ev);Sh.propTypes={innerRef:Y.exports.oneOfType([Y.exports.object,Y.exports.func])};var Ah=function(t){function e(n){var r;return G(this,e),r=xt(this,ae(e).call(this,n)),r._id=Ce.getInstance().registerGlobalKeyMap(n.keyMap),r._childContext={globalHotKeysParentId:r._id},r}return _t(e,t),W(e,[{key:"render",value:function(){return this.props.children||null}},{key:"componentDidUpdate",value:function(){var r=Ce.getInstance();if(r.reregisterGlobalKeyMap(this._id,this.props.keyMap),this.props.allowChanges||!V.option("ignoreKeymapAndHandlerChangesByDefault")){var o=this.props,i=o.keyMap,s=o.handlers;r.updateEnabledGlobalHotKeys(this._id,i,s,this._getComponentOptions(),this._getEventOptions())}}},{key:"componentDidMount",value:function(){var r=this.props,o=r.keyMap,i=r.handlers,s=this.context.globalHotKeysParentId,l=Ce.getInstance();l.registerGlobalComponentMount(this._id,s),l.enableGlobalHotKeys(this._id,o,i,this._getComponentOptions(),this._getEventOptions())}},{key:"componentWillUnmount",value:function(){var r=Ce.getInstance();r.deregisterGlobalKeyMap(this._id),r.disableGlobalHotKeys(this._id),r.registerGlobalComponentUnmount()}},{key:"_getComponentOptions",value:function(){return{defaultKeyEvent:V.option("defaultKeyEvent")}}},{key:"_getEventOptions",value:function(){return{ignoreEventsCondition:V.option("ignoreEventsCondition")}}}]),e}(y.exports.Component);me(Ah,"propTypes",{keyMap:Y.exports.object,handlers:Y.exports.object,allowChanges:Y.exports.bool});var Sv=Ch(Ah,{deprecatedAPI:{contextTypes:{globalHotKeysParentId:Y.exports.number},childContextTypes:{globalHotKeysParentId:Y.exports.number}},newAPI:{contextType:{globalHotKeysParentId:void 0}}});function cs(t){var e,n,r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{only:[],except:[]},o=2<arguments.length?arguments[2]:void 0;return n=e=function(i){function s(l){var c;return G(this,s),c=xt(this,ae(s).call(this,l)),c._handleKeyEvent=c._handleKeyEvent.bind(ue(ue(c))),c._reloadDictionaries=c._reloadDictionaries.bind(ue(ue(c))),c}return _t(s,i),W(s,[{key:"render",value:function(){var c=this.props;c.only,c.except;var a=ko(c,["only","except"]),u={onKeyDown:this._handleKeyEvent,onKeyPress:this._handleKeyEvent,onKeyUp:this._handleKeyEvent,onFocus:this._reloadDictionaries};return te.createElement(t,zi({hotKeys:u},a))}},{key:"_reloadDictionaries",value:function(){var c=this.props,a=c.only,u=c.except;this._onlyDict=Xu(a),this._exceptDict=Xu(u)}},{key:"_shouldIgnoreEvent",value:function(c){var a=c.key;return Ur(this._onlyDict)?!!Ur(this._exceptDict)||!et(this._exceptDict,a):Ur(this._exceptDict)?et(this._onlyDict,a):et(this._onlyDict,a)&&!et(this._exceptDict,a)}},{key:"_handleKeyEvent",value:function(c){this._shouldIgnoreEvent(c)&&Ce.getInstance()[o](c)}}]),s}(y.exports.PureComponent),me(e,"propTypes",{only:Y.exports.oneOfType([Y.exports.string,Y.exports.arrayOf(Y.exports.string)]),except:Y.exports.oneOfType([Y.exports.string,Y.exports.arrayOf(Y.exports.string)])}),me(e,"defaultProps",r),n}function Xu(t){return uo(t).reduce(function(e,n){var r=fh(n);if(!mh(r))throw new gh(n);return[_a,wa,va,ss,ka,ba].forEach(function(o){e[o(r)]=!0}),e},{})}var Av=function(t){function e(){return G(this,e),xt(this,ae(e).apply(this,arguments))}return _t(e,t),W(e,[{key:"render",value:function(){var r=this.props,o=r.hotKeys,i=ko(r,["hotKeys"]),s=i.component||V.option("defaultComponent");return te.createElement(s,it({},o,i))}}]),e}(y.exports.Component),Dv=cs(Av,{},"ignoreEvent"),Tv=function(t){function e(){return G(this,e),xt(this,ae(e).apply(this,arguments))}return _t(e,t),W(e,[{key:"render",value:function(){var r=this.props,o=r.hotKeys,i=ko(r,["hotKeys"]),s=i.component||V.option("defaultComponent");return te.createElement(s,it({},o,i))}}]),e}(y.exports.Component),Pv=cs(Tv,{},"observeIgnoredEvents");function Lv(t){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{only:[],except:[]};return cs(t,e,"ignoreEvent")}function Iv(t){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{only:[],except:[]};return cs(t,e,"observeIgnoredEvents")}function Rv(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};V.init(t)}function Fv(){return Ce.getInstance().getApplicationKeyMap()}function Ov(t){var e=Ce.getInstance();return e.addKeyCombinationListener(t)}const Mv=Object.freeze(Object.defineProperty({__proto__:null,HotKeys:Sh,GlobalHotKeys:Sv,IgnoreKeys:Dv,ObserveKeys:Pv,withHotKeys:Eh,withIgnoreKeys:Lv,withObserveKeys:Iv,configure:Rv,getApplicationKeyMap:Fv,recordKeyCombination:Ov},Symbol.toStringTag,{value:"Module"})),Nv=Gd(Mv);(function(t){t.exports=Nv})(ih);function Ie(){return Ie=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ie.apply(this,arguments)}function or(t,e,{checkForDefaultPrevented:n=!0}={}){return function(o){if(t==null||t(o),n===!1||!o.defaultPrevented)return e==null?void 0:e(o)}}function qv(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function Dh(...t){return e=>t.forEach(n=>qv(n,e))}function wo(...t){return y.exports.useCallback(Dh(...t),t)}function $v(t,e=[]){let n=[];function r(i,s){const l=y.exports.createContext(s),c=n.length;n=[...n,s];function a(d){const{scope:f,children:m,...b}=d,v=(f==null?void 0:f[t][c])||l,x=y.exports.useMemo(()=>b,Object.values(b));return y.exports.createElement(v.Provider,{value:x},m)}function u(d,f){const m=(f==null?void 0:f[t][c])||l,b=y.exports.useContext(m);if(b)return b;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${i}\``)}return a.displayName=i+"Provider",[a,u]}const o=()=>{const i=n.map(s=>y.exports.createContext(s));return function(l){const c=(l==null?void 0:l[t])||i;return y.exports.useMemo(()=>({[`__scope${t}`]:{...l,[t]:c}}),[l,c])}};return o.scopeName=t,[r,zv(o,...e)]}function zv(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const s=r.reduce((l,{useScope:c,scopeName:a})=>{const d=c(i)[`__scope${a}`];return{...l,...d}},{});return y.exports.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}const hc=Boolean(globalThis==null?void 0:globalThis.document)?y.exports.useLayoutEffect:()=>{},Kv=Im["useId".toString()]||(()=>{});let Bv=0;function Xs(t){const[e,n]=y.exports.useState(Kv());return hc(()=>{t||n(r=>r!=null?r:String(Bv++))},[t]),t||(e?`radix-${e}`:"")}function Dn(t){const e=y.exports.useRef(t);return y.exports.useEffect(()=>{e.current=t}),y.exports.useMemo(()=>(...n)=>{var r;return(r=e.current)===null||r===void 0?void 0:r.call(e,...n)},[])}function Hv({prop:t,defaultProp:e,onChange:n=()=>{}}){const[r,o]=Uv({defaultProp:e,onChange:n}),i=t!==void 0,s=i?t:r,l=Dn(n),c=y.exports.useCallback(a=>{if(i){const d=typeof a=="function"?a(t):a;d!==t&&l(d)}else o(a)},[i,t,o,l]);return[s,c]}function Uv({defaultProp:t,onChange:e}){const n=y.exports.useState(t),[r]=n,o=y.exports.useRef(r),i=Dn(e);return y.exports.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}const xa=y.exports.forwardRef((t,e)=>{const{children:n,...r}=t,o=y.exports.Children.toArray(n),i=o.find(Vv);if(i){const s=i.props.children,l=o.map(c=>c===i?y.exports.Children.count(s)>1?y.exports.Children.only(null):y.exports.isValidElement(s)?s.props.children:null:c);return y.exports.createElement(mc,Ie({},r,{ref:e}),y.exports.isValidElement(s)?y.exports.cloneElement(s,void 0,l):null)}return y.exports.createElement(mc,Ie({},r,{ref:e}),n)});xa.displayName="Slot";const mc=y.exports.forwardRef((t,e)=>{const{children:n,...r}=t;return y.exports.isValidElement(n)?y.exports.cloneElement(n,{...Wv(r,n.props),ref:Dh(e,n.ref)}):y.exports.Children.count(n)>1?y.exports.Children.only(null):null});mc.displayName="SlotClone";const jv=({children:t})=>y.exports.createElement(y.exports.Fragment,null,t);function Vv(t){return y.exports.isValidElement(t)&&t.type===jv}function Wv(t,e){const n={...e};for(const r in e){const o=t[r],i=e[r];/^on[A-Z]/.test(r)?n[r]=(...l)=>{i==null||i(...l),o==null||o(...l)}:r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...t,...n}}const Gv=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],as=Gv.reduce((t,e)=>{const n=y.exports.forwardRef((r,o)=>{const{asChild:i,...s}=r,l=i?xa:e;return y.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),y.exports.createElement(l,Ie({},s,{ref:o}))});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function Zv(t,e){t&&mo.exports.flushSync(()=>t.dispatchEvent(e))}function Qv(t){const e=Dn(t);y.exports.useEffect(()=>{const n=r=>{r.key==="Escape"&&e(r)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[e])}const gc="dismissableLayer.update",Yv="dismissableLayer.pointerDownOutside",Xv="dismissableLayer.focusOutside";let Ju;const Jv=y.exports.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),e0=y.exports.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:s,onDismiss:l,...c}=t,a=y.exports.useContext(Jv),[u,d]=y.exports.useState(null),[,f]=y.exports.useState({}),m=wo(e,_=>d(_)),b=Array.from(a.layers),[v]=[...a.layersWithOutsidePointerEventsDisabled].slice(-1),x=b.indexOf(v),h=u?b.indexOf(u):-1,p=a.layersWithOutsidePointerEventsDisabled.size>0,g=h>=x,w=t0(_=>{const C=_.target,A=[...a.branches].some(N=>N.contains(C));!g||A||(o==null||o(_),s==null||s(_),_.defaultPrevented||l==null||l())}),k=n0(_=>{const C=_.target;[...a.branches].some(N=>N.contains(C))||(i==null||i(_),s==null||s(_),_.defaultPrevented||l==null||l())});return Qv(_=>{h===a.layers.size-1&&(r==null||r(_),!_.defaultPrevented&&l&&(_.preventDefault(),l()))}),y.exports.useEffect(()=>{if(!!u)return n&&(a.layersWithOutsidePointerEventsDisabled.size===0&&(Ju=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),a.layersWithOutsidePointerEventsDisabled.add(u)),a.layers.add(u),ed(),()=>{n&&a.layersWithOutsidePointerEventsDisabled.size===1&&(document.body.style.pointerEvents=Ju)}},[u,n,a]),y.exports.useEffect(()=>()=>{!u||(a.layers.delete(u),a.layersWithOutsidePointerEventsDisabled.delete(u),ed())},[u,a]),y.exports.useEffect(()=>{const _=()=>f({});return document.addEventListener(gc,_),()=>document.removeEventListener(gc,_)},[]),y.exports.createElement(as.div,Ie({},c,{ref:m,style:{pointerEvents:p?g?"auto":"none":void 0,...t.style},onFocusCapture:or(t.onFocusCapture,k.onFocusCapture),onBlurCapture:or(t.onBlurCapture,k.onBlurCapture),onPointerDownCapture:or(t.onPointerDownCapture,w.onPointerDownCapture)}))});function t0(t){const e=Dn(t),n=y.exports.useRef(!1),r=y.exports.useRef(()=>{});return y.exports.useEffect(()=>{const o=s=>{if(s.target&&!n.current){let a=function(){Th(Yv,e,c,{discrete:!0})};var l=a;const c={originalEvent:s};s.pointerType==="touch"?(document.removeEventListener("click",r.current),r.current=a,document.addEventListener("click",r.current,{once:!0})):a()}n.current=!1},i=window.setTimeout(()=>{document.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(i),document.removeEventListener("pointerdown",o),document.removeEventListener("click",r.current)}},[e]),{onPointerDownCapture:()=>n.current=!0}}function n0(t){const e=Dn(t),n=y.exports.useRef(!1);return y.exports.useEffect(()=>{const r=o=>{o.target&&!n.current&&Th(Xv,e,{originalEvent:o},{discrete:!1})};return document.addEventListener("focusin",r),()=>document.removeEventListener("focusin",r)},[e]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function ed(){const t=new CustomEvent(gc);document.dispatchEvent(t)}function Th(t,e,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&o.addEventListener(t,e,{once:!0}),r?Zv(o,i):o.dispatchEvent(i)}const Js="focusScope.autoFocusOnMount",el="focusScope.autoFocusOnUnmount",td={bubbles:!1,cancelable:!0},r0=y.exports.forwardRef((t,e)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...s}=t,[l,c]=y.exports.useState(null),a=Dn(o),u=Dn(i),d=y.exports.useRef(null),f=wo(e,v=>c(v)),m=y.exports.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;y.exports.useEffect(()=>{if(r){let h=function(g){if(m.paused||!l)return;const w=g.target;l.contains(w)?d.current=w:mn(d.current,{select:!0})},p=function(g){m.paused||!l||l.contains(g.relatedTarget)||mn(d.current,{select:!0})};var v=h,x=p;return document.addEventListener("focusin",h),document.addEventListener("focusout",p),()=>{document.removeEventListener("focusin",h),document.removeEventListener("focusout",p)}}},[r,l,m.paused]),y.exports.useEffect(()=>{if(l){rd.add(m);const v=document.activeElement;if(!l.contains(v)){const h=new CustomEvent(Js,td);l.addEventListener(Js,a),l.dispatchEvent(h),h.defaultPrevented||(o0(a0(Ph(l)),{select:!0}),document.activeElement===v&&mn(l))}return()=>{l.removeEventListener(Js,a),setTimeout(()=>{const h=new CustomEvent(el,td);l.addEventListener(el,u),l.dispatchEvent(h),h.defaultPrevented||mn(v!=null?v:document.body,{select:!0}),l.removeEventListener(el,u),rd.remove(m)},0)}}},[l,a,u,m]);const b=y.exports.useCallback(v=>{if(!n&&!r||m.paused)return;const x=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,h=document.activeElement;if(x&&h){const p=v.currentTarget,[g,w]=i0(p);g&&w?!v.shiftKey&&h===w?(v.preventDefault(),n&&mn(g,{select:!0})):v.shiftKey&&h===g&&(v.preventDefault(),n&&mn(w,{select:!0})):h===p&&v.preventDefault()}},[n,r,m.paused]);return y.exports.createElement(as.div,Ie({tabIndex:-1},s,{ref:f,onKeyDown:b}))});function o0(t,{select:e=!1}={}){const n=document.activeElement;for(const r of t)if(mn(r,{select:e}),document.activeElement!==n)return}function i0(t){const e=Ph(t),n=nd(e,t),r=nd(e.reverse(),t);return[n,r]}function Ph(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function nd(t,e){for(const n of t)if(!s0(n,{upTo:e}))return n}function s0(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function l0(t){return t instanceof HTMLInputElement&&"select"in t}function mn(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&l0(t)&&e&&t.select()}}const rd=c0();function c0(){let t=[];return{add(e){const n=t[0];e!==n&&(n==null||n.pause()),t=od(t,e),t.unshift(e)},remove(e){var n;t=od(t,e),(n=t[0])===null||n===void 0||n.resume()}}}function od(t,e){const n=[...t],r=n.indexOf(e);return r!==-1&&n.splice(r,1),n}function a0(t){return t.filter(e=>e.tagName!=="A")}const u0=y.exports.forwardRef((t,e)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=t;return r?Oy.createPortal(y.exports.createElement(as.div,Ie({},o,{ref:e})),r):null});function d0(t,e){return y.exports.useReducer((n,r)=>{const o=e[n][r];return o!=null?o:n},t)}const us=t=>{const{present:e,children:n}=t,r=f0(e),o=typeof n=="function"?n({present:r.isPresent}):y.exports.Children.only(n),i=wo(r.ref,o.ref);return typeof n=="function"||r.isPresent?y.exports.cloneElement(o,{ref:i}):null};us.displayName="Presence";function f0(t){const[e,n]=y.exports.useState(),r=y.exports.useRef({}),o=y.exports.useRef(t),i=y.exports.useRef("none"),s=t?"mounted":"unmounted",[l,c]=d0(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.exports.useEffect(()=>{const a=jo(r.current);i.current=l==="mounted"?a:"none"},[l]),hc(()=>{const a=r.current,u=o.current;if(u!==t){const f=i.current,m=jo(a);t?c("MOUNT"):m==="none"||(a==null?void 0:a.display)==="none"?c("UNMOUNT"):c(u&&f!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=t}},[t,c]),hc(()=>{if(e){const a=d=>{const m=jo(r.current).includes(d.animationName);d.target===e&&m&&mo.exports.flushSync(()=>c("ANIMATION_END"))},u=d=>{d.target===e&&(i.current=jo(r.current))};return e.addEventListener("animationstart",u),e.addEventListener("animationcancel",a),e.addEventListener("animationend",a),()=>{e.removeEventListener("animationstart",u),e.removeEventListener("animationcancel",a),e.removeEventListener("animationend",a)}}else c("ANIMATION_END")},[e,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:y.exports.useCallback(a=>{a&&(r.current=getComputedStyle(a)),n(a)},[])}}function jo(t){return(t==null?void 0:t.animationName)||"none"}let tl=0;function p0(){y.exports.useEffect(()=>{var t,e;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(t=n[0])!==null&&t!==void 0?t:id()),document.body.insertAdjacentElement("beforeend",(e=n[1])!==null&&e!==void 0?e:id()),tl++,()=>{tl===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),tl--}},[])}function id(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",t}var bt=function(){return bt=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},bt.apply(this,arguments)};function Lh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}function h0(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}var hi="right-scroll-bar-position",mi="width-before-scroll-bar",m0="with-scroll-bars-hidden",g0="--removed-body-scroll-bar-size";function y0(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function v0(t,e){var n=y.exports.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=e,n.facade}function b0(t,e){return v0(e||null,function(n){return t.forEach(function(r){return y0(r,n)})})}var ds={exports:{}},fs={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0=y.exports,w0=Symbol.for("react.element"),_0=Symbol.for("react.fragment"),x0=Object.prototype.hasOwnProperty,C0=k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E0={key:!0,ref:!0,__self:!0,__source:!0};function Ih(t,e,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)x0.call(e,r)&&!E0.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:w0,type:t,key:i,ref:s,props:o,_owner:C0.current}}fs.Fragment=_0;fs.jsx=Ih;fs.jsxs=Ih;(function(t){t.exports=fs})(ds);const At=ds.exports.Fragment,P=ds.exports.jsx,K=ds.exports.jsxs;function S0(t){return t}function A0(t,e){e===void 0&&(e=S0);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(i){var s=e(i,r);return n.push(s),function(){n=n.filter(function(l){return l!==s})}},assignSyncMedium:function(i){for(r=!0;n.length;){var s=n;n=[],s.forEach(i)}n={push:function(l){return i(l)},filter:function(){return n}}},assignMedium:function(i){r=!0;var s=[];if(n.length){var l=n;n=[],l.forEach(i),s=n}var c=function(){var u=s;s=[],u.forEach(i)},a=function(){return Promise.resolve().then(c)};a(),n={push:function(u){s.push(u),a()},filter:function(u){return s=s.filter(u),n}}}};return o}function D0(t){t===void 0&&(t={});var e=A0(null);return e.options=bt({async:!0,ssr:!1},t),e}var Rh=function(t){var e=t.sideCar,n=Lh(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return P(r,{...bt({},n)})};Rh.isSideCarExport=!0;function T0(t,e){return t.useMedium(e),Rh}var Fh=D0(),nl=function(){},ps=y.exports.forwardRef(function(t,e){var n=y.exports.useRef(null),r=y.exports.useState({onScrollCapture:nl,onWheelCapture:nl,onTouchMoveCapture:nl}),o=r[0],i=r[1],s=t.forwardProps,l=t.children,c=t.className,a=t.removeScrollBar,u=t.enabled,d=t.shards,f=t.sideCar,m=t.noIsolation,b=t.inert,v=t.allowPinchZoom,x=t.as,h=x===void 0?"div":x,p=Lh(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),g=f,w=b0([n,e]),k=bt(bt({},p),o);return K(At,{children:[u&&P(g,{sideCar:Fh,removeScrollBar:a,shards:d,noIsolation:m,inert:b,setCallbacks:i,allowPinchZoom:!!v,lockRef:n}),s?y.exports.cloneElement(y.exports.Children.only(l),bt(bt({},k),{ref:w})):P(h,{...bt({},k,{className:c,ref:w}),children:l})]})});ps.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ps.classNames={fullWidth:mi,zeroRight:hi};var P0=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function L0(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=P0();return e&&t.setAttribute("nonce",e),t}function I0(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function R0(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var F0=function(){var t=0,e=null;return{add:function(n){t==0&&(e=L0())&&(I0(e,n),R0(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},O0=function(){var t=F0();return function(e,n){y.exports.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},Oh=function(){var t=O0(),e=function(n){var r=n.styles,o=n.dynamic;return t(r,o),null};return e},M0={left:0,top:0,right:0,gap:0},rl=function(t){return parseInt(t||"",10)||0},N0=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],r=e[t==="padding"?"paddingTop":"marginTop"],o=e[t==="padding"?"paddingRight":"marginRight"];return[rl(n),rl(r),rl(o)]},q0=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return M0;var e=N0(t),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-n+e[2]-e[0])}},$0=Oh(),z0=function(t,e,n,r){var o=t.left,i=t.top,s=t.right,l=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(m0,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(hi,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(mi,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(hi," .").concat(hi,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(mi," .").concat(mi,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(g0,": ").concat(l,`px;
  }
`)},K0=function(t){var e=t.noRelative,n=t.noImportant,r=t.gapMode,o=r===void 0?"margin":r,i=y.exports.useMemo(function(){return q0(o)},[o]);return P($0,{styles:z0(i,!e,o,n?"":"!important")})},yc=!1;if(typeof window<"u")try{var Vo=Object.defineProperty({},"passive",{get:function(){return yc=!0,!0}});window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{yc=!1}var Fn=yc?{passive:!1}:!1,B0=function(t){var e=window.getComputedStyle(t);return e.overflowY!=="hidden"&&!(e.overflowY===e.overflowX&&e.overflowY==="visible")},H0=function(t){var e=window.getComputedStyle(t);return e.overflowX!=="hidden"&&!(e.overflowY===e.overflowX&&e.overflowX==="visible")},sd=function(t,e){var n=e;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=Mh(t,n);if(r){var o=Nh(t,n),i=o[1],s=o[2];if(i>s)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},U0=function(t){var e=t.scrollTop,n=t.scrollHeight,r=t.clientHeight;return[e,n,r]},j0=function(t){var e=t.scrollLeft,n=t.scrollWidth,r=t.clientWidth;return[e,n,r]},Mh=function(t,e){return t==="v"?B0(e):H0(e)},Nh=function(t,e){return t==="v"?U0(e):j0(e)},V0=function(t,e){return t==="h"&&e==="rtl"?-1:1},W0=function(t,e,n,r,o){var i=V0(t,window.getComputedStyle(e).direction),s=i*r,l=n.target,c=e.contains(l),a=!1,u=s>0,d=0,f=0;do{var m=Nh(t,l),b=m[0],v=m[1],x=m[2],h=v-x-i*b;(b||h)&&Mh(t,l)&&(d+=h,f+=b),l=l.parentNode}while(!c&&l!==document.body||c&&(e.contains(l)||e===l));return(u&&(o&&d===0||!o&&s>d)||!u&&(o&&f===0||!o&&-s>f))&&(a=!0),a},Wo=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},ld=function(t){return[t.deltaX,t.deltaY]},cd=function(t){return t&&"current"in t?t.current:t},G0=function(t,e){return t[0]===e[0]&&t[1]===e[1]},Z0=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},Q0=0,On=[];function Y0(t){var e=y.exports.useRef([]),n=y.exports.useRef([0,0]),r=y.exports.useRef(),o=y.exports.useState(Q0++)[0],i=y.exports.useState(function(){return Oh()})[0],s=y.exports.useRef(t);y.exports.useEffect(function(){s.current=t},[t]),y.exports.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(o));var v=h0([t.lockRef.current],(t.shards||[]).map(cd),!0).filter(Boolean);return v.forEach(function(x){return x.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),v.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(o))})}}},[t.inert,t.lockRef.current,t.shards]);var l=y.exports.useCallback(function(v,x){if("touches"in v&&v.touches.length===2)return!s.current.allowPinchZoom;var h=Wo(v),p=n.current,g="deltaX"in v?v.deltaX:p[0]-h[0],w="deltaY"in v?v.deltaY:p[1]-h[1],k,_=v.target,C=Math.abs(g)>Math.abs(w)?"h":"v";if("touches"in v&&C==="h"&&_.type==="range")return!1;var A=sd(C,_);if(!A)return!0;if(A?k=C:(k=C==="v"?"h":"v",A=sd(C,_)),!A)return!1;if(!r.current&&"changedTouches"in v&&(g||w)&&(r.current=k),!k)return!0;var N=r.current||k;return W0(N,x,v,N==="h"?g:w,!0)},[]),c=y.exports.useCallback(function(v){var x=v;if(!(!On.length||On[On.length-1]!==i)){var h="deltaY"in x?ld(x):Wo(x),p=e.current.filter(function(k){return k.name===x.type&&k.target===x.target&&G0(k.delta,h)})[0];if(p&&p.should){x.preventDefault();return}if(!p){var g=(s.current.shards||[]).map(cd).filter(Boolean).filter(function(k){return k.contains(x.target)}),w=g.length>0?l(x,g[0]):!s.current.noIsolation;w&&x.preventDefault()}}},[]),a=y.exports.useCallback(function(v,x,h,p){var g={name:v,delta:x,target:h,should:p};e.current.push(g),setTimeout(function(){e.current=e.current.filter(function(w){return w!==g})},1)},[]),u=y.exports.useCallback(function(v){n.current=Wo(v),r.current=void 0},[]),d=y.exports.useCallback(function(v){a(v.type,ld(v),v.target,l(v,t.lockRef.current))},[]),f=y.exports.useCallback(function(v){a(v.type,Wo(v),v.target,l(v,t.lockRef.current))},[]);y.exports.useEffect(function(){return On.push(i),t.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",c,Fn),document.addEventListener("touchmove",c,Fn),document.addEventListener("touchstart",u,Fn),function(){On=On.filter(function(v){return v!==i}),document.removeEventListener("wheel",c,Fn),document.removeEventListener("touchmove",c,Fn),document.removeEventListener("touchstart",u,Fn)}},[]);var m=t.removeScrollBar,b=t.inert;return K(At,{children:[b?P(i,{styles:Z0(o)}):null,m?P(K0,{gapMode:"margin"}):null]})}const X0=T0(Fh,Y0);var qh=y.exports.forwardRef(function(t,e){return P(ps,{...bt({},t,{ref:e,sideCar:X0})})});qh.classNames=ps.classNames;const J0=qh;var e1=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},Mn=new WeakMap,Go=new WeakMap,Zo={},ol=0,$h=function(t){return t&&(t.host||$h(t.parentNode))},t1=function(t,e){return e.map(function(n){if(t.contains(n))return n;var r=$h(n);return r&&t.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return Boolean(n)})},n1=function(t,e,n,r){var o=t1(e,Array.isArray(t)?t:[t]);Zo[n]||(Zo[n]=new WeakMap);var i=Zo[n],s=[],l=new Set,c=new Set(o),a=function(d){!d||l.has(d)||(l.add(d),a(d.parentNode))};o.forEach(a);var u=function(d){!d||c.has(d)||Array.prototype.forEach.call(d.children,function(f){if(l.has(f))u(f);else{var m=f.getAttribute(r),b=m!==null&&m!=="false",v=(Mn.get(f)||0)+1,x=(i.get(f)||0)+1;Mn.set(f,v),i.set(f,x),s.push(f),v===1&&b&&Go.set(f,!0),x===1&&f.setAttribute(n,"true"),b||f.setAttribute(r,"true")}})};return u(e),l.clear(),ol++,function(){s.forEach(function(d){var f=Mn.get(d)-1,m=i.get(d)-1;Mn.set(d,f),i.set(d,m),f||(Go.has(d)||d.removeAttribute(r),Go.delete(d)),m||d.removeAttribute(n)}),ol--,ol||(Mn=new WeakMap,Mn=new WeakMap,Go=new WeakMap,Zo={})}},r1=function(t,e,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),o=e||e1(t);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),n1(r,o,n,"aria-hidden")):function(){return null}};const zh="Dialog",[Kh,DJ]=$v(zh),[o1,In]=Kh(zh),i1=t=>{const{__scopeDialog:e,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:s=!0}=t,l=y.exports.useRef(null),c=y.exports.useRef(null),[a=!1,u]=Hv({prop:r,defaultProp:o,onChange:i});return y.exports.createElement(o1,{scope:e,triggerRef:l,contentRef:c,contentId:Xs(),titleId:Xs(),descriptionId:Xs(),open:a,onOpenChange:u,onOpenToggle:y.exports.useCallback(()=>u(d=>!d),[u]),modal:s},n)},Bh="DialogPortal",[s1,Hh]=Kh(Bh,{forceMount:void 0}),l1=t=>{const{__scopeDialog:e,forceMount:n,children:r,container:o}=t,i=In(Bh,e);return y.exports.createElement(s1,{scope:e,forceMount:n},y.exports.Children.map(r,s=>y.exports.createElement(us,{present:n||i.open},y.exports.createElement(u0,{asChild:!0,container:o},s))))},vc="DialogOverlay",c1=y.exports.forwardRef((t,e)=>{const n=Hh(vc,t.__scopeDialog),{forceMount:r=n.forceMount,...o}=t,i=In(vc,t.__scopeDialog);return i.modal?y.exports.createElement(us,{present:r||i.open},y.exports.createElement(a1,Ie({},o,{ref:e}))):null}),a1=y.exports.forwardRef((t,e)=>{const{__scopeDialog:n,...r}=t,o=In(vc,n);return y.exports.createElement(J0,{as:xa,allowPinchZoom:!0,shards:[o.contentRef]},y.exports.createElement(as.div,Ie({"data-state":jh(o.open)},r,{ref:e,style:{pointerEvents:"auto",...r.style}})))}),po="DialogContent",u1=y.exports.forwardRef((t,e)=>{const n=Hh(po,t.__scopeDialog),{forceMount:r=n.forceMount,...o}=t,i=In(po,t.__scopeDialog);return y.exports.createElement(us,{present:r||i.open},i.modal?y.exports.createElement(d1,Ie({},o,{ref:e})):y.exports.createElement(f1,Ie({},o,{ref:e})))}),d1=y.exports.forwardRef((t,e)=>{const n=In(po,t.__scopeDialog),r=y.exports.useRef(null),o=wo(e,n.contentRef,r);return y.exports.useEffect(()=>{const i=r.current;if(i)return r1(i)},[]),y.exports.createElement(Uh,Ie({},t,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:or(t.onCloseAutoFocus,i=>{var s;i.preventDefault(),(s=n.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:or(t.onPointerDownOutside,i=>{const s=i.detail.originalEvent,l=s.button===0&&s.ctrlKey===!0;(s.button===2||l)&&i.preventDefault()}),onFocusOutside:or(t.onFocusOutside,i=>i.preventDefault())}))}),f1=y.exports.forwardRef((t,e)=>{const n=In(po,t.__scopeDialog),r=y.exports.useRef(!1);return y.exports.createElement(Uh,Ie({},t,{ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var i;if((i=t.onCloseAutoFocus)===null||i===void 0||i.call(t,o),!o.defaultPrevented){var s;r.current||(s=n.triggerRef.current)===null||s===void 0||s.focus(),o.preventDefault()}r.current=!1},onInteractOutside:o=>{var i,s;(i=t.onInteractOutside)===null||i===void 0||i.call(t,o),o.defaultPrevented||(r.current=!0);const l=o.target;((s=n.triggerRef.current)===null||s===void 0?void 0:s.contains(l))&&o.preventDefault()}}))}),Uh=y.exports.forwardRef((t,e)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...s}=t,l=In(po,n),c=y.exports.useRef(null),a=wo(e,c);return p0(),y.exports.createElement(y.exports.Fragment,null,y.exports.createElement(r0,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},y.exports.createElement(e0,Ie({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":jh(l.open)},s,{ref:a,onDismiss:()=>l.onOpenChange(!1)}))),!1)});function jh(t){return t?"open":"closed"}const p1=i1,h1=l1,m1=c1,g1=u1;var ad=1,y1=.9,v1=.3,il=.1,b1=0,sl=.999,k1=.9999,w1=.99,ud=/[\\\/\-_+.# \t"@\[\(\{&]/,_1=/[\\\/\-_+.# \t"@\[\(\{&]/g;function bc(t,e,n,r,o,i){if(i===e.length)return o===t.length?ad:w1;for(var s=r.charAt(i),l=n.indexOf(s,o),c=0,a,u,d;l>=0;)a=bc(t,e,n,r,l+1,i+1),a>c&&(l===o?a*=ad:ud.test(t.charAt(l-1))?(a*=y1,d=t.slice(o,l-1).match(_1),d&&o>0&&(a*=Math.pow(sl,d.length))):ud.test(t.slice(o,l-1))?(a*=b1,o>0&&(a*=Math.pow(sl,l-o))):(a*=v1,o>0&&(a*=Math.pow(sl,l-o))),t.charAt(l)!==e.charAt(i)&&(a*=k1)),a<il&&n.charAt(l-1)===r.charAt(i+1)&&n.charAt(l-1)!==r.charAt(i)&&(u=bc(t,e,n,r,l+1,i+2),u*il>a&&(a=u*il)),a>c&&(c=a),l=n.indexOf(s,l+1);return c}function x1(t,e){return bc(t,e,t.toLowerCase(),e.toLowerCase(),0,0)}var C1=x1,E1='[cmdk-list-sizer=""]',Tr='[cmdk-group=""]',ll='[cmdk-group-items=""]',S1='[cmdk-group-heading=""]',Vh='[cmdk-item=""]',dd=`${Vh}:not([aria-disabled="true"])`,kc="cmdk-item-select",zt="data-value",A1=(t,e)=>C1(t,e),Wh=y.exports.createContext(void 0),_o=()=>y.exports.useContext(Wh),Gh=y.exports.createContext(void 0),Ca=()=>y.exports.useContext(Gh),Zh=y.exports.createContext(void 0),Qh=y.exports.forwardRef((t,e)=>{let n=y.exports.useRef(null),r=qn(()=>({search:"",value:"",filtered:{count:0,items:new Map,groups:new Set}})),o=qn(()=>new Set),i=qn(()=>new Map),s=qn(()=>new Map),l=qn(()=>new Set),c=Yh(t),{label:a,children:u,value:d,onValueChange:f,filter:m,shouldFilter:b,...v}=t,x=y.exports.useId(),h=y.exports.useId(),p=y.exports.useId(),g=q1();yr(()=>{if(d!==void 0){let E=d.trim().toLowerCase();r.current.value=E,g(6,L),w.emit()}},[d]);let w=y.exports.useMemo(()=>({subscribe:E=>(l.current.add(E),()=>l.current.delete(E)),snapshot:()=>r.current,setState:(E,T,O)=>{var F,J,pe;if(!Object.is(r.current[E],T)){if(r.current[E]=T,E==="search")N(),C(),g(1,()=>{A(),w.emit()});else if(E==="value")if(((F=c.current)==null?void 0:F.value)!==void 0){(pe=(J=c.current).onValueChange)==null||pe.call(J,T);return}else O||g(5,L);w.emit()}},emit:()=>{l.current.forEach(E=>E())}}),[]),k=y.exports.useMemo(()=>({value:(E,T)=>{T!==s.current.get(E)&&(s.current.set(E,T),r.current.filtered.items.set(E,_(T)),g(2,()=>{C(),w.emit()}))},item:(E,T)=>(o.current.add(E),T&&(i.current.has(T)?i.current.get(T).add(E):i.current.set(T,new Set([E]))),g(3,()=>{N(),C(),r.current.value||A(),w.emit()}),()=>{s.current.delete(E),o.current.delete(E),r.current.filtered.items.delete(E),g(4,()=>{N(),A(),w.emit()})}),group:E=>(i.current.has(E)||i.current.set(E,new Set),()=>{s.current.delete(E),i.current.delete(E)}),filter:()=>c.current.shouldFilter,label:a||t["aria-label"],listId:x,inputId:p,labelId:h}),[]);function _(E){var F;var T;let O=(F=(T=c.current)==null?void 0:T.filter)!=null?F:A1;return E?O(E,r.current.search):0}function C(){if(!n.current||!r.current.search||c.current.shouldFilter===!1)return;let E=r.current.filtered.items,T=[];r.current.filtered.groups.forEach(F=>{let J=i.current.get(F),pe=0;J.forEach(un=>{let Qe=E.get(un);pe=Math.max(Qe,pe)}),T.push([F,pe])});let O=n.current.querySelector(E1);ye().sort((F,J)=>{var Qe,dn;let pe=F.getAttribute(zt),un=J.getAttribute(zt);return((Qe=E.get(un))!=null?Qe:0)-((dn=E.get(pe))!=null?dn:0)}).forEach(F=>{let J=F.closest(ll);J?J.appendChild(F.parentElement===J?F:F.closest(`${ll} > *`)):O.appendChild(F.parentElement===O?F:F.closest(`${ll} > *`))}),T.sort((F,J)=>J[1]-F[1]).forEach(F=>{let J=n.current.querySelector(`${Tr}[${zt}="${F[0]}"]`);J==null||J.parentElement.appendChild(J)})}function A(){let E=ye().find(O=>!O.ariaDisabled),T=E==null?void 0:E.getAttribute(zt);r.current.value=T||void 0}function N(){if(!r.current.search||c.current.shouldFilter===!1){r.current.filtered.count=o.current.size;return}r.current.filtered.groups=new Set;let E=0;for(let T of o.current){let O=s.current.get(T),F=_(O);r.current.filtered.items.set(T,F),F>0&&E++}for(let[T,O]of i.current)for(let F of O)if(r.current.filtered.items.get(F)>0){r.current.filtered.groups.add(T);break}r.current.filtered.count=E}function L(){var E,T,O;let F=q();F&&(((E=F.parentElement)==null?void 0:E.firstChild)===F&&((O=(T=F.closest(Tr))==null?void 0:T.querySelector(S1))==null||O.scrollIntoView({block:"nearest"})),F.scrollIntoView({block:"nearest"}))}function q(){return n.current.querySelector(`${Vh}[aria-selected="true"]`)}function ye(){return Array.from(n.current.querySelectorAll(dd))}function we(E){let T=ye()[E];T&&w.setState("value",T.getAttribute(zt))}function D(E){let T=q(),O=ye(),F=O.findIndex(pe=>pe===T),J=O[F+E];J&&w.setState("value",J.getAttribute(zt))}function j(E){let T=q(),O=T==null?void 0:T.closest(Tr),F;for(;O&&!F;)O=E>0?M1(O,Tr):N1(O,Tr),F=O==null?void 0:O.querySelector(dd);F?w.setState("value",F.getAttribute(zt)):D(E)}let $=()=>we(ye().length-1),Ae=E=>{E.preventDefault(),E.metaKey?$():E.altKey?j(1):D(1)},I=E=>{E.preventDefault(),E.metaKey?we(0):E.altKey?j(-1):D(-1)};return y.exports.createElement("div",{ref:xo([n,e]),...v,"cmdk-root":"",onKeyDown:E=>{var T;if((T=v.onKeyDown)==null||T.call(v,E),!E.defaultPrevented)switch(E.key){case"n":case"j":{E.ctrlKey&&Ae(E);break}case"ArrowDown":{Ae(E);break}case"p":case"k":{E.ctrlKey&&I(E);break}case"ArrowUp":{I(E);break}case"Home":{E.preventDefault(),we(0);break}case"End":{E.preventDefault(),$();break}case"Enter":{E.preventDefault();let O=q();if(O){let F=new Event(kc);O.dispatchEvent(F)}}}}},y.exports.createElement("label",{"cmdk-label":"",htmlFor:k.inputId,id:k.labelId,style:$1},a),y.exports.createElement(Gh.Provider,{value:w},y.exports.createElement(Wh.Provider,{value:k},u)))}),D1=y.exports.forwardRef((t,e)=>{let n=y.exports.useId(),r=y.exports.useRef(null),o=y.exports.useContext(Zh),i=_o(),s=Yh(t);yr(()=>i.item(n,o),[]);let l=Xh(n,r,[t.value,t.children,r]),c=Ca(),a=pr(h=>h.value&&h.value===l.current),u=pr(h=>i.filter()===!1?!0:h.search?h.filtered.items.get(n)>0:!0);y.exports.useEffect(()=>{let h=r.current;if(!(!h||t.disabled))return h.addEventListener(kc,d),()=>h.removeEventListener(kc,d)},[u,t.onSelect,t.disabled]);function d(){var h,p;(p=(h=s.current).onSelect)==null||p.call(h,l.current)}function f(){c.setState("value",l.current,!0)}if(!u)return null;let{disabled:m,value:b,onSelect:v,...x}=t;return y.exports.createElement("div",{ref:xo([r,e]),...x,"cmdk-item":"",role:"option","aria-disabled":m||void 0,"aria-selected":a||void 0,onPointerMove:m?void 0:f,onClick:m?void 0:d},t.children)}),T1=y.exports.forwardRef((t,e)=>{let{heading:n,children:r,...o}=t,i=y.exports.useId(),s=y.exports.useRef(null),l=y.exports.useRef(null),c=y.exports.useId(),a=_o(),u=pr(f=>a.filter()===!1?!0:f.search?f.filtered.groups.has(i):!0);yr(()=>a.group(i),[]),Xh(i,s,[t.value,t.heading,l]);let d=y.exports.createElement(Zh.Provider,{value:i},r);return y.exports.createElement("div",{ref:xo([s,e]),...o,"cmdk-group":"",role:"presentation",hidden:u?void 0:!0},n&&y.exports.createElement("div",{ref:l,"cmdk-group-heading":"","aria-hidden":!0,id:c},n),y.exports.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?c:void 0},d))}),P1=y.exports.forwardRef((t,e)=>{let{alwaysRender:n,...r}=t,o=y.exports.useRef(null),i=pr(s=>!s.search);return!n&&!i?null:y.exports.createElement("div",{ref:xo([o,e]),...r,"cmdk-separator":"",role:"separator"})}),L1=y.exports.forwardRef((t,e)=>{let{onValueChange:n,...r}=t,o=t.value!=null,i=Ca(),s=pr(c=>c.search),l=_o();return y.exports.useEffect(()=>{t.value!=null&&i.setState("search",t.value)},[t.value]),y.exports.createElement("input",{ref:e,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":l.listId,"aria-labelledby":l.labelId,id:l.inputId,type:"text",value:o?t.value:s,onChange:c=>{o||i.setState("search",c.target.value),n==null||n(c.target.value)}})}),I1=y.exports.forwardRef((t,e)=>{let{children:n,...r}=t,o=y.exports.useRef(null),i=y.exports.useRef(null),s=_o();return y.exports.useEffect(()=>{if(i.current&&o.current){let l=i.current,c=o.current,a=new ResizeObserver(()=>{let u=l.getBoundingClientRect().height;c.style.setProperty("--cmdk-list-height",u.toFixed(1)+"px")});return a.observe(l),()=>a.unobserve(l)}},[]),y.exports.createElement("div",{ref:xo([o,e]),...r,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:s.listId,"aria-labelledby":s.inputId},y.exports.createElement("div",{ref:i,"cmdk-list-sizer":""},n))}),R1=y.exports.forwardRef((t,e)=>{let{open:n,onOpenChange:r,...o}=t;return y.exports.createElement(p1,{open:n,onOpenChange:r},y.exports.createElement(h1,null,y.exports.createElement(m1,{"cmdk-overlay":""}),y.exports.createElement(g1,{"aria-label":t.label,"cmdk-dialog":""},y.exports.createElement(Qh,{ref:e,...o}))))}),F1=y.exports.forwardRef((t,e)=>{let n=y.exports.useRef(!0),r=pr(o=>o.filtered.count===0);return y.exports.useEffect(()=>{n.current=!1},[]),n.current||!r?null:y.exports.createElement("div",{ref:e,...t,"cmdk-empty":"",role:"presentation"})}),O1=y.exports.forwardRef((t,e)=>{let{progress:n,children:r,...o}=t;return y.exports.createElement("div",{ref:e,...o,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},y.exports.createElement("div",{"aria-hidden":!0},r))}),Me=Object.assign(Qh,{List:I1,Item:D1,Input:L1,Group:T1,Separator:P1,Dialog:R1,Empty:F1,Loading:O1});function M1(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return n;n=n.nextElementSibling}}function N1(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return n;n=n.previousElementSibling}}function Yh(t){let e=y.exports.useRef(t);return yr(()=>{e.current=t}),e}var yr=typeof window>"u"?y.exports.useEffect:y.exports.useLayoutEffect;function qn(t){let e=y.exports.useRef();return e.current===void 0&&(e.current=t()),e}function xo(t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}function pr(t){let e=Ca(),n=()=>t(e.snapshot());return y.exports.useSyncExternalStore(e.subscribe,n,n)}function Xh(t,e,n){let r=y.exports.useRef(),o=_o();return yr(()=>{var i;let s=(()=>{var l;for(let c of n){if(typeof c=="string")return c.trim().toLowerCase();if(typeof c=="object"&&"current"in c&&c.current)return(l=c.current.textContent)==null?void 0:l.trim().toLowerCase()}})();o.value(t,s),(i=e.current)==null||i.setAttribute(zt,s),r.current=s}),r}var q1=()=>{let[t,e]=y.exports.useState(),n=qn(()=>new Map);return yr(()=>{n.current.forEach(r=>r()),n.current=new Map},[t]),(r,o)=>{n.current.set(r,o),e({})}},$1={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};function Ze(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}var z1=["color"],K1=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,z1);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),B1=["color"],H1=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,B1);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),U1=["color"],j1=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,U1);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),V1=["color"],W1=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,V1);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M7.85367 1.48956C7.65841 1.29429 7.34182 1.29429 7.14656 1.48956L1.48971 7.14641C1.29445 7.34167 1.29445 7.65825 1.48971 7.85352L7.14656 13.5104C7.34182 13.7056 7.65841 13.7056 7.85367 13.5104L13.5105 7.85352C13.7058 7.65825 13.7058 7.34167 13.5105 7.14641L7.85367 1.48956ZM7.5 2.55033L2.55037 7.49996L7.5 12.4496V2.55033Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),G1=["color"],Z1=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,G1);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M14.7649 6.07596C14.9991 6.22231 15.0703 6.53079 14.9239 6.76495C14.4849 7.46743 13.9632 8.10645 13.3702 8.66305L14.5712 9.86406C14.7664 10.0593 14.7664 10.3759 14.5712 10.5712C14.3759 10.7664 14.0593 10.7664 13.8641 10.5712L12.6011 9.30817C11.805 9.90283 10.9089 10.3621 9.93375 10.651L10.383 12.3277C10.4544 12.5944 10.2961 12.8685 10.0294 12.94C9.76267 13.0115 9.4885 12.8532 9.41704 12.5865L8.95917 10.8775C8.48743 10.958 8.00036 10.9999 7.50001 10.9999C6.99965 10.9999 6.51257 10.958 6.04082 10.8775L5.58299 12.5864C5.51153 12.8532 5.23737 13.0115 4.97064 12.94C4.7039 12.8686 4.5456 12.5944 4.61706 12.3277L5.06625 10.651C4.09111 10.3621 3.19503 9.90282 2.3989 9.30815L1.1359 10.5712C0.940638 10.7664 0.624058 10.7664 0.428798 10.5712C0.233537 10.3759 0.233537 10.0593 0.428798 9.86405L1.62982 8.66303C1.03682 8.10643 0.515113 7.46742 0.0760677 6.76495C-0.0702867 6.53079 0.000898544 6.22231 0.235065 6.07596C0.469231 5.9296 0.777703 6.00079 0.924058 6.23496C1.40354 7.00213 1.989 7.68057 2.66233 8.2427C2.67315 8.25096 2.6837 8.25972 2.69397 8.26898C4.00897 9.35527 5.65537 9.99991 7.50001 9.99991C10.3078 9.99991 12.6564 8.5063 14.076 6.23495C14.2223 6.00079 14.5308 5.9296 14.7649 6.07596Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Q1=["color"],Y1=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,Q1);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),X1=["color"],J1=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,X1);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),eb=["color"],tb=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,eb);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),nb=["color"],rb=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,nb);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M9.42503 3.44136C10.0561 3.23654 10.7837 3.2402 11.3792 3.54623C12.7532 4.25224 13.3477 6.07191 12.7946 8C12.5465 8.8649 12.1102 9.70472 11.1861 10.5524C10.262 11.4 8.98034 11.9 8.38571 11.9C8.17269 11.9 8 11.7321 8 11.525C8 11.3179 8.17644 11.15 8.38571 11.15C9.06497 11.15 9.67189 10.7804 10.3906 10.236C10.9406 9.8193 11.3701 9.28633 11.608 8.82191C12.0628 7.93367 12.0782 6.68174 11.3433 6.34901C10.9904 6.73455 10.5295 6.95946 9.97725 6.95946C8.7773 6.95946 8.0701 5.99412 8.10051 5.12009C8.12957 4.28474 8.66032 3.68954 9.42503 3.44136ZM3.42503 3.44136C4.05614 3.23654 4.78366 3.2402 5.37923 3.54623C6.7532 4.25224 7.34766 6.07191 6.79462 8C6.54654 8.8649 6.11019 9.70472 5.1861 10.5524C4.26201 11.4 2.98034 11.9 2.38571 11.9C2.17269 11.9 2 11.7321 2 11.525C2 11.3179 2.17644 11.15 2.38571 11.15C3.06497 11.15 3.67189 10.7804 4.39058 10.236C4.94065 9.8193 5.37014 9.28633 5.60797 8.82191C6.06282 7.93367 6.07821 6.68174 5.3433 6.34901C4.99037 6.73455 4.52948 6.95946 3.97725 6.95946C2.7773 6.95946 2.0701 5.99412 2.10051 5.12009C2.12957 4.28474 2.66032 3.68954 3.42503 3.44136Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),ob=["color"],ib=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,ob);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M4.2 1H4.17741H4.1774C3.86936 0.999988 3.60368 0.999978 3.38609 1.02067C3.15576 1.04257 2.92825 1.09113 2.71625 1.22104C2.51442 1.34472 2.34473 1.51442 2.22104 1.71625C2.09113 1.92825 2.04257 2.15576 2.02067 2.38609C1.99998 2.60367 1.99999 2.86935 2 3.17738V3.1774V3.2V11.8V11.8226V11.8226C1.99999 12.1307 1.99998 12.3963 2.02067 12.6139C2.04257 12.8442 2.09113 13.0717 2.22104 13.2837C2.34473 13.4856 2.51442 13.6553 2.71625 13.779C2.92825 13.9089 3.15576 13.9574 3.38609 13.9793C3.60368 14 3.86937 14 4.17741 14H4.2H10.8H10.8226C11.1306 14 11.3963 14 11.6139 13.9793C11.8442 13.9574 12.0717 13.9089 12.2837 13.779C12.4856 13.6553 12.6553 13.4856 12.779 13.2837C12.9089 13.0717 12.9574 12.8442 12.9793 12.6139C13 12.3963 13 12.1306 13 11.8226V11.8V3.2V3.17741C13 2.86936 13 2.60368 12.9793 2.38609C12.9574 2.15576 12.9089 1.92825 12.779 1.71625C12.6553 1.51442 12.4856 1.34472 12.2837 1.22104C12.0717 1.09113 11.8442 1.04257 11.6139 1.02067C11.3963 0.999978 11.1306 0.999988 10.8226 1H10.8H4.2ZM3.23875 2.07368C3.26722 2.05623 3.32362 2.03112 3.48075 2.01618C3.64532 2.00053 3.86298 2 4.2 2H10.8C11.137 2 11.3547 2.00053 11.5193 2.01618C11.6764 2.03112 11.7328 2.05623 11.7613 2.07368C11.8285 2.11491 11.8851 2.17147 11.9263 2.23875C11.9438 2.26722 11.9689 2.32362 11.9838 2.48075C11.9995 2.64532 12 2.86298 12 3.2V11.8C12 12.137 11.9995 12.3547 11.9838 12.5193C11.9689 12.6764 11.9438 12.7328 11.9263 12.7613C11.8851 12.8285 11.8285 12.8851 11.7613 12.9263C11.7328 12.9438 11.6764 12.9689 11.5193 12.9838C11.3547 12.9995 11.137 13 10.8 13H4.2C3.86298 13 3.64532 12.9995 3.48075 12.9838C3.32362 12.9689 3.26722 12.9438 3.23875 12.9263C3.17147 12.8851 3.11491 12.8285 3.07368 12.7613C3.05624 12.7328 3.03112 12.6764 3.01618 12.5193C3.00053 12.3547 3 12.137 3 11.8V3.2C3 2.86298 3.00053 2.64532 3.01618 2.48075C3.03112 2.32362 3.05624 2.26722 3.07368 2.23875C3.11491 2.17147 3.17147 2.11491 3.23875 2.07368ZM5 10C4.72386 10 4.5 10.2239 4.5 10.5C4.5 10.7761 4.72386 11 5 11H8C8.27614 11 8.5 10.7761 8.5 10.5C8.5 10.2239 8.27614 10 8 10H5ZM4.5 7.5C4.5 7.22386 4.72386 7 5 7H10C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8H5C4.72386 8 4.5 7.77614 4.5 7.5ZM5 4C4.72386 4 4.5 4.22386 4.5 4.5C4.5 4.77614 4.72386 5 5 5H10C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4H5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),sb=["color"],lb=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,sb);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M12.3536 1.14645C12.1583 0.951184 11.8417 0.951184 11.6464 1.14645C11.4512 1.34171 11.4512 1.65829 11.6464 1.85355L12.7929 3H12C10.7037 3 9.71111 3.58423 8.87248 4.38931C8.20065 5.03427 7.59349 5.85684 6.99461 6.6682C6.86287 6.84668 6.73154 7.02462 6.6 7.2C5.10874 9.18835 3.49037 11 0.5 11C0.223858 11 0 11.2239 0 11.5C0 11.7761 0.223858 12 0.5 12C4.00963 12 5.89126 9.81165 7.4 7.8C7.54367 7.60845 7.6832 7.41962 7.81996 7.23454L7.82005 7.23443L7.82006 7.23441C8.41674 6.42695 8.96069 5.69085 9.56502 5.11069C10.2889 4.41577 11.0463 4 12 4H12.7929L11.6464 5.14645C11.4512 5.34171 11.4512 5.65829 11.6464 5.85355C11.8417 6.04882 12.1583 6.04882 12.3536 5.85355L14.3536 3.85355C14.5488 3.65829 14.5488 3.34171 14.3536 3.14645L12.3536 1.14645ZM0.5 3C3.35278 3 5.12992 4.44588 6.50548 6.06746L6.3762 6.24266C6.2483 6.4161 6.12293 6.58609 6 6.75C5.96397 6.79804 5.92798 6.84581 5.892 6.89331C4.57348 5.29306 3.02637 4 0.5 4C0.223858 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3ZM8.87248 10.6107C8.37284 10.131 7.90897 9.55314 7.45767 8.95468C7.64688 8.71693 7.82704 8.48061 8 8.25L8.08987 8.12987C8.58412 8.79402 9.05288 9.39766 9.56502 9.88931C10.2889 10.5842 11.0463 11 12 11H12.7929L11.6464 9.85355C11.4512 9.65829 11.4512 9.34171 11.6464 9.14645C11.8417 8.95118 12.1583 8.95118 12.3536 9.14645L14.3536 11.1464C14.5488 11.3417 14.5488 11.6583 14.3536 11.8536L12.3536 13.8536C12.1583 14.0488 11.8417 14.0488 11.6464 13.8536C11.4512 13.6583 11.4512 13.3417 11.6464 13.1464L12.7929 12H12C10.7037 12 9.71111 11.4158 8.87248 10.6107Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),cb=["color"],cl=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,cb);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M3.94993 2.95002L3.94993 4.49998C3.94993 4.74851 3.74845 4.94998 3.49993 4.94998C3.2514 4.94998 3.04993 4.74851 3.04993 4.49998V2.50004C3.04993 2.45246 3.05731 2.40661 3.07099 2.36357C3.12878 2.18175 3.29897 2.05002 3.49993 2.05002H11.4999C11.6553 2.05002 11.7922 2.12872 11.8731 2.24842C11.9216 2.32024 11.9499 2.40682 11.9499 2.50002L11.9499 2.50004V4.49998C11.9499 4.74851 11.7485 4.94998 11.4999 4.94998C11.2514 4.94998 11.0499 4.74851 11.0499 4.49998V2.95002H8.04993V12.05H9.25428C9.50281 12.05 9.70428 12.2515 9.70428 12.5C9.70428 12.7486 9.50281 12.95 9.25428 12.95H5.75428C5.50575 12.95 5.30428 12.7486 5.30428 12.5C5.30428 12.2515 5.50575 12.05 5.75428 12.05H6.94993V2.95002H3.94993Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),ab=["color"],ub=y.exports.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,o=Ze(t,ab);return y.exports.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:e}),y.exports.createElement("path",{d:"M3.89949 5.50002C3.89949 5.27911 3.7204 5.10003 3.49949 5.10003C3.27857 5.10003 3.09949 5.27911 3.09949 5.50002L3.09949 12.5343L1.78233 11.2172C1.62612 11.061 1.37285 11.061 1.21664 11.2172C1.06043 11.3734 1.06043 11.6267 1.21664 11.7829L3.21664 13.7829C3.29166 13.8579 3.3934 13.9 3.49949 13.9C3.60557 13.9 3.70732 13.8579 3.78233 13.7829L5.78233 11.7829C5.93854 11.6267 5.93854 11.3734 5.78233 11.2172C5.62612 11.061 5.37285 11.061 5.21664 11.2172L3.89949 12.5343L3.89949 5.50002ZM8.49998 13C8.22383 13 7.99998 12.7762 7.99998 12.5C7.99998 12.2239 8.22383 12 8.49998 12H14.5C14.7761 12 15 12.2239 15 12.5C15 12.7762 14.7761 13 14.5 13H8.49998ZM8.49998 10C8.22383 10 7.99998 9.77617 7.99998 9.50002C7.99998 9.22388 8.22383 9.00002 8.49998 9.00002H14.5C14.7761 9.00002 15 9.22388 15 9.50002C15 9.77617 14.7761 10 14.5 10H8.49998ZM7.99998 6.50002C7.99998 6.77617 8.22383 7.00002 8.49998 7.00002H14.5C14.7761 7.00002 15 6.77617 15 6.50002C15 6.22388 14.7761 6.00002 14.5 6.00002H8.49998C8.22383 6.00002 7.99998 6.22388 7.99998 6.50002Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))});const db=`
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
  }`;var Jh={exports:{}},H={},Ea={exports:{}};const fb="\xC1",pb="\xE1",hb="\u0102",mb="\u0103",gb="\u223E",yb="\u223F",vb="\u223E\u0333",bb="\xC2",kb="\xE2",wb="\xB4",_b="\u0410",xb="\u0430",Cb="\xC6",Eb="\xE6",Sb="\u2061",Ab="\u{1D504}",Db="\u{1D51E}",Tb="\xC0",Pb="\xE0",Lb="\u2135",Ib="\u2135",Rb="\u0391",Fb="\u03B1",Ob="\u0100",Mb="\u0101",Nb="\u2A3F",qb="&",$b="&",zb="\u2A55",Kb="\u2A53",Bb="\u2227",Hb="\u2A5C",Ub="\u2A58",jb="\u2A5A",Vb="\u2220",Wb="\u29A4",Gb="\u2220",Zb="\u29A8",Qb="\u29A9",Yb="\u29AA",Xb="\u29AB",Jb="\u29AC",ek="\u29AD",tk="\u29AE",nk="\u29AF",rk="\u2221",ok="\u221F",ik="\u22BE",sk="\u299D",lk="\u2222",ck="\xC5",ak="\u237C",uk="\u0104",dk="\u0105",fk="\u{1D538}",pk="\u{1D552}",hk="\u2A6F",mk="\u2248",gk="\u2A70",yk="\u224A",vk="\u224B",bk="'",kk="\u2061",wk="\u2248",_k="\u224A",xk="\xC5",Ck="\xE5",Ek="\u{1D49C}",Sk="\u{1D4B6}",Ak="\u2254",Dk="*",Tk="\u2248",Pk="\u224D",Lk="\xC3",Ik="\xE3",Rk="\xC4",Fk="\xE4",Ok="\u2233",Mk="\u2A11",Nk="\u224C",qk="\u03F6",$k="\u2035",zk="\u223D",Kk="\u22CD",Bk="\u2216",Hk="\u2AE7",Uk="\u22BD",jk="\u2305",Vk="\u2306",Wk="\u2305",Gk="\u23B5",Zk="\u23B6",Qk="\u224C",Yk="\u0411",Xk="\u0431",Jk="\u201E",e2="\u2235",t2="\u2235",n2="\u2235",r2="\u29B0",o2="\u03F6",i2="\u212C",s2="\u212C",l2="\u0392",c2="\u03B2",a2="\u2136",u2="\u226C",d2="\u{1D505}",f2="\u{1D51F}",p2="\u22C2",h2="\u25EF",m2="\u22C3",g2="\u2A00",y2="\u2A01",v2="\u2A02",b2="\u2A06",k2="\u2605",w2="\u25BD",_2="\u25B3",x2="\u2A04",C2="\u22C1",E2="\u22C0",S2="\u290D",A2="\u29EB",D2="\u25AA",T2="\u25B4",P2="\u25BE",L2="\u25C2",I2="\u25B8",R2="\u2423",F2="\u2592",O2="\u2591",M2="\u2593",N2="\u2588",q2="=\u20E5",$2="\u2261\u20E5",z2="\u2AED",K2="\u2310",B2="\u{1D539}",H2="\u{1D553}",U2="\u22A5",j2="\u22A5",V2="\u22C8",W2="\u29C9",G2="\u2510",Z2="\u2555",Q2="\u2556",Y2="\u2557",X2="\u250C",J2="\u2552",ew="\u2553",tw="\u2554",nw="\u2500",rw="\u2550",ow="\u252C",iw="\u2564",sw="\u2565",lw="\u2566",cw="\u2534",aw="\u2567",uw="\u2568",dw="\u2569",fw="\u229F",pw="\u229E",hw="\u22A0",mw="\u2518",gw="\u255B",yw="\u255C",vw="\u255D",bw="\u2514",kw="\u2558",ww="\u2559",_w="\u255A",xw="\u2502",Cw="\u2551",Ew="\u253C",Sw="\u256A",Aw="\u256B",Dw="\u256C",Tw="\u2524",Pw="\u2561",Lw="\u2562",Iw="\u2563",Rw="\u251C",Fw="\u255E",Ow="\u255F",Mw="\u2560",Nw="\u2035",qw="\u02D8",$w="\u02D8",zw="\xA6",Kw="\u{1D4B7}",Bw="\u212C",Hw="\u204F",Uw="\u223D",jw="\u22CD",Vw="\u29C5",Ww="\\",Gw="\u27C8",Zw="\u2022",Qw="\u2022",Yw="\u224E",Xw="\u2AAE",Jw="\u224F",e_="\u224E",t_="\u224F",n_="\u0106",r_="\u0107",o_="\u2A44",i_="\u2A49",s_="\u2A4B",l_="\u2229",c_="\u22D2",a_="\u2A47",u_="\u2A40",d_="\u2145",f_="\u2229\uFE00",p_="\u2041",h_="\u02C7",m_="\u212D",g_="\u2A4D",y_="\u010C",v_="\u010D",b_="\xC7",k_="\xE7",w_="\u0108",__="\u0109",x_="\u2230",C_="\u2A4C",E_="\u2A50",S_="\u010A",A_="\u010B",D_="\xB8",T_="\xB8",P_="\u29B2",L_="\xA2",I_="\xB7",R_="\xB7",F_="\u{1D520}",O_="\u212D",M_="\u0427",N_="\u0447",q_="\u2713",$_="\u2713",z_="\u03A7",K_="\u03C7",B_="\u02C6",H_="\u2257",U_="\u21BA",j_="\u21BB",V_="\u229B",W_="\u229A",G_="\u229D",Z_="\u2299",Q_="\xAE",Y_="\u24C8",X_="\u2296",J_="\u2295",ex="\u2297",tx="\u25CB",nx="\u29C3",rx="\u2257",ox="\u2A10",ix="\u2AEF",sx="\u29C2",lx="\u2232",cx="\u201D",ax="\u2019",ux="\u2663",dx="\u2663",fx=":",px="\u2237",hx="\u2A74",mx="\u2254",gx="\u2254",yx=",",vx="@",bx="\u2201",kx="\u2218",wx="\u2201",_x="\u2102",xx="\u2245",Cx="\u2A6D",Ex="\u2261",Sx="\u222E",Ax="\u222F",Dx="\u222E",Tx="\u{1D554}",Px="\u2102",Lx="\u2210",Ix="\u2210",Rx="\xA9",Fx="\xA9",Ox="\u2117",Mx="\u2233",Nx="\u21B5",qx="\u2717",$x="\u2A2F",zx="\u{1D49E}",Kx="\u{1D4B8}",Bx="\u2ACF",Hx="\u2AD1",Ux="\u2AD0",jx="\u2AD2",Vx="\u22EF",Wx="\u2938",Gx="\u2935",Zx="\u22DE",Qx="\u22DF",Yx="\u21B6",Xx="\u293D",Jx="\u2A48",e3="\u2A46",t3="\u224D",n3="\u222A",r3="\u22D3",o3="\u2A4A",i3="\u228D",s3="\u2A45",l3="\u222A\uFE00",c3="\u21B7",a3="\u293C",u3="\u22DE",d3="\u22DF",f3="\u22CE",p3="\u22CF",h3="\xA4",m3="\u21B6",g3="\u21B7",y3="\u22CE",v3="\u22CF",b3="\u2232",k3="\u2231",w3="\u232D",_3="\u2020",x3="\u2021",C3="\u2138",E3="\u2193",S3="\u21A1",A3="\u21D3",D3="\u2010",T3="\u2AE4",P3="\u22A3",L3="\u290F",I3="\u02DD",R3="\u010E",F3="\u010F",O3="\u0414",M3="\u0434",N3="\u2021",q3="\u21CA",$3="\u2145",z3="\u2146",K3="\u2911",B3="\u2A77",H3="\xB0",U3="\u2207",j3="\u0394",V3="\u03B4",W3="\u29B1",G3="\u297F",Z3="\u{1D507}",Q3="\u{1D521}",Y3="\u2965",X3="\u21C3",J3="\u21C2",eC="\xB4",tC="\u02D9",nC="\u02DD",rC="`",oC="\u02DC",iC="\u22C4",sC="\u22C4",lC="\u22C4",cC="\u2666",aC="\u2666",uC="\xA8",dC="\u2146",fC="\u03DD",pC="\u22F2",hC="\xF7",mC="\xF7",gC="\u22C7",yC="\u22C7",vC="\u0402",bC="\u0452",kC="\u231E",wC="\u230D",_C="$",xC="\u{1D53B}",CC="\u{1D555}",EC="\xA8",SC="\u02D9",AC="\u20DC",DC="\u2250",TC="\u2251",PC="\u2250",LC="\u2238",IC="\u2214",RC="\u22A1",FC="\u2306",OC="\u222F",MC="\xA8",NC="\u21D3",qC="\u21D0",$C="\u21D4",zC="\u2AE4",KC="\u27F8",BC="\u27FA",HC="\u27F9",UC="\u21D2",jC="\u22A8",VC="\u21D1",WC="\u21D5",GC="\u2225",ZC="\u2913",QC="\u2193",YC="\u2193",XC="\u21D3",JC="\u21F5",e4="\u0311",t4="\u21CA",n4="\u21C3",r4="\u21C2",o4="\u2950",i4="\u295E",s4="\u2956",l4="\u21BD",c4="\u295F",a4="\u2957",u4="\u21C1",d4="\u21A7",f4="\u22A4",p4="\u2910",h4="\u231F",m4="\u230C",g4="\u{1D49F}",y4="\u{1D4B9}",v4="\u0405",b4="\u0455",k4="\u29F6",w4="\u0110",_4="\u0111",x4="\u22F1",C4="\u25BF",E4="\u25BE",S4="\u21F5",A4="\u296F",D4="\u29A6",T4="\u040F",P4="\u045F",L4="\u27FF",I4="\xC9",R4="\xE9",F4="\u2A6E",O4="\u011A",M4="\u011B",N4="\xCA",q4="\xEA",$4="\u2256",z4="\u2255",K4="\u042D",B4="\u044D",H4="\u2A77",U4="\u0116",j4="\u0117",V4="\u2251",W4="\u2147",G4="\u2252",Z4="\u{1D508}",Q4="\u{1D522}",Y4="\u2A9A",X4="\xC8",J4="\xE8",eE="\u2A96",tE="\u2A98",nE="\u2A99",rE="\u2208",oE="\u23E7",iE="\u2113",sE="\u2A95",lE="\u2A97",cE="\u0112",aE="\u0113",uE="\u2205",dE="\u2205",fE="\u25FB",pE="\u2205",hE="\u25AB",mE="\u2004",gE="\u2005",yE="\u2003",vE="\u014A",bE="\u014B",kE="\u2002",wE="\u0118",_E="\u0119",xE="\u{1D53C}",CE="\u{1D556}",EE="\u22D5",SE="\u29E3",AE="\u2A71",DE="\u03B5",TE="\u0395",PE="\u03B5",LE="\u03F5",IE="\u2256",RE="\u2255",FE="\u2242",OE="\u2A96",ME="\u2A95",NE="\u2A75",qE="=",$E="\u2242",zE="\u225F",KE="\u21CC",BE="\u2261",HE="\u2A78",UE="\u29E5",jE="\u2971",VE="\u2253",WE="\u212F",GE="\u2130",ZE="\u2250",QE="\u2A73",YE="\u2242",XE="\u0397",JE="\u03B7",e5="\xD0",t5="\xF0",n5="\xCB",r5="\xEB",o5="\u20AC",i5="!",s5="\u2203",l5="\u2203",c5="\u2130",a5="\u2147",u5="\u2147",d5="\u2252",f5="\u0424",p5="\u0444",h5="\u2640",m5="\uFB03",g5="\uFB00",y5="\uFB04",v5="\u{1D509}",b5="\u{1D523}",k5="\uFB01",w5="\u25FC",_5="\u25AA",x5="fj",C5="\u266D",E5="\uFB02",S5="\u25B1",A5="\u0192",D5="\u{1D53D}",T5="\u{1D557}",P5="\u2200",L5="\u2200",I5="\u22D4",R5="\u2AD9",F5="\u2131",O5="\u2A0D",M5="\xBD",N5="\u2153",q5="\xBC",$5="\u2155",z5="\u2159",K5="\u215B",B5="\u2154",H5="\u2156",U5="\xBE",j5="\u2157",V5="\u215C",W5="\u2158",G5="\u215A",Z5="\u215D",Q5="\u215E",Y5="\u2044",X5="\u2322",J5="\u{1D4BB}",eS="\u2131",tS="\u01F5",nS="\u0393",rS="\u03B3",oS="\u03DC",iS="\u03DD",sS="\u2A86",lS="\u011E",cS="\u011F",aS="\u0122",uS="\u011C",dS="\u011D",fS="\u0413",pS="\u0433",hS="\u0120",mS="\u0121",gS="\u2265",yS="\u2267",vS="\u2A8C",bS="\u22DB",kS="\u2265",wS="\u2267",_S="\u2A7E",xS="\u2AA9",CS="\u2A7E",ES="\u2A80",SS="\u2A82",AS="\u2A84",DS="\u22DB\uFE00",TS="\u2A94",PS="\u{1D50A}",LS="\u{1D524}",IS="\u226B",RS="\u22D9",FS="\u22D9",OS="\u2137",MS="\u0403",NS="\u0453",qS="\u2AA5",$S="\u2277",zS="\u2A92",KS="\u2AA4",BS="\u2A8A",HS="\u2A8A",US="\u2A88",jS="\u2269",VS="\u2A88",WS="\u2269",GS="\u22E7",ZS="\u{1D53E}",QS="\u{1D558}",YS="`",XS="\u2265",JS="\u22DB",e8="\u2267",t8="\u2AA2",n8="\u2277",r8="\u2A7E",o8="\u2273",i8="\u{1D4A2}",s8="\u210A",l8="\u2273",c8="\u2A8E",a8="\u2A90",u8="\u2AA7",d8="\u2A7A",f8=">",p8=">",h8="\u226B",m8="\u22D7",g8="\u2995",y8="\u2A7C",v8="\u2A86",b8="\u2978",k8="\u22D7",w8="\u22DB",_8="\u2A8C",x8="\u2277",C8="\u2273",E8="\u2269\uFE00",S8="\u2269\uFE00",A8="\u02C7",D8="\u200A",T8="\xBD",P8="\u210B",L8="\u042A",I8="\u044A",R8="\u2948",F8="\u2194",O8="\u21D4",M8="\u21AD",N8="^",q8="\u210F",$8="\u0124",z8="\u0125",K8="\u2665",B8="\u2665",H8="\u2026",U8="\u22B9",j8="\u{1D525}",V8="\u210C",W8="\u210B",G8="\u2925",Z8="\u2926",Q8="\u21FF",Y8="\u223B",X8="\u21A9",J8="\u21AA",e6="\u{1D559}",t6="\u210D",n6="\u2015",r6="\u2500",o6="\u{1D4BD}",i6="\u210B",s6="\u210F",l6="\u0126",c6="\u0127",a6="\u224E",u6="\u224F",d6="\u2043",f6="\u2010",p6="\xCD",h6="\xED",m6="\u2063",g6="\xCE",y6="\xEE",v6="\u0418",b6="\u0438",k6="\u0130",w6="\u0415",_6="\u0435",x6="\xA1",C6="\u21D4",E6="\u{1D526}",S6="\u2111",A6="\xCC",D6="\xEC",T6="\u2148",P6="\u2A0C",L6="\u222D",I6="\u29DC",R6="\u2129",F6="\u0132",O6="\u0133",M6="\u012A",N6="\u012B",q6="\u2111",$6="\u2148",z6="\u2110",K6="\u2111",B6="\u0131",H6="\u2111",U6="\u22B7",j6="\u01B5",V6="\u21D2",W6="\u2105",G6="\u221E",Z6="\u29DD",Q6="\u0131",Y6="\u22BA",X6="\u222B",J6="\u222C",e7="\u2124",t7="\u222B",n7="\u22BA",r7="\u22C2",o7="\u2A17",i7="\u2A3C",s7="\u2063",l7="\u2062",c7="\u0401",a7="\u0451",u7="\u012E",d7="\u012F",f7="\u{1D540}",p7="\u{1D55A}",h7="\u0399",m7="\u03B9",g7="\u2A3C",y7="\xBF",v7="\u{1D4BE}",b7="\u2110",k7="\u2208",w7="\u22F5",_7="\u22F9",x7="\u22F4",C7="\u22F3",E7="\u2208",S7="\u2062",A7="\u0128",D7="\u0129",T7="\u0406",P7="\u0456",L7="\xCF",I7="\xEF",R7="\u0134",F7="\u0135",O7="\u0419",M7="\u0439",N7="\u{1D50D}",q7="\u{1D527}",$7="\u0237",z7="\u{1D541}",K7="\u{1D55B}",B7="\u{1D4A5}",H7="\u{1D4BF}",U7="\u0408",j7="\u0458",V7="\u0404",W7="\u0454",G7="\u039A",Z7="\u03BA",Q7="\u03F0",Y7="\u0136",X7="\u0137",J7="\u041A",e9="\u043A",t9="\u{1D50E}",n9="\u{1D528}",r9="\u0138",o9="\u0425",i9="\u0445",s9="\u040C",l9="\u045C",c9="\u{1D542}",a9="\u{1D55C}",u9="\u{1D4A6}",d9="\u{1D4C0}",f9="\u21DA",p9="\u0139",h9="\u013A",m9="\u29B4",g9="\u2112",y9="\u039B",v9="\u03BB",b9="\u27E8",k9="\u27EA",w9="\u2991",_9="\u27E8",x9="\u2A85",C9="\u2112",E9="\xAB",S9="\u21E4",A9="\u291F",D9="\u2190",T9="\u219E",P9="\u21D0",L9="\u291D",I9="\u21A9",R9="\u21AB",F9="\u2939",O9="\u2973",M9="\u21A2",N9="\u2919",q9="\u291B",$9="\u2AAB",z9="\u2AAD",K9="\u2AAD\uFE00",B9="\u290C",H9="\u290E",U9="\u2772",j9="{",V9="[",W9="\u298B",G9="\u298F",Z9="\u298D",Q9="\u013D",Y9="\u013E",X9="\u013B",J9="\u013C",eA="\u2308",tA="{",nA="\u041B",rA="\u043B",oA="\u2936",iA="\u201C",sA="\u201E",lA="\u2967",cA="\u294B",aA="\u21B2",uA="\u2264",dA="\u2266",fA="\u27E8",pA="\u21E4",hA="\u2190",mA="\u2190",gA="\u21D0",yA="\u21C6",vA="\u21A2",bA="\u2308",kA="\u27E6",wA="\u2961",_A="\u2959",xA="\u21C3",CA="\u230A",EA="\u21BD",SA="\u21BC",AA="\u21C7",DA="\u2194",TA="\u2194",PA="\u21D4",LA="\u21C6",IA="\u21CB",RA="\u21AD",FA="\u294E",OA="\u21A4",MA="\u22A3",NA="\u295A",qA="\u22CB",$A="\u29CF",zA="\u22B2",KA="\u22B4",BA="\u2951",HA="\u2960",UA="\u2958",jA="\u21BF",VA="\u2952",WA="\u21BC",GA="\u2A8B",ZA="\u22DA",QA="\u2264",YA="\u2266",XA="\u2A7D",JA="\u2AA8",eD="\u2A7D",tD="\u2A7F",nD="\u2A81",rD="\u2A83",oD="\u22DA\uFE00",iD="\u2A93",sD="\u2A85",lD="\u22D6",cD="\u22DA",aD="\u2A8B",uD="\u22DA",dD="\u2266",fD="\u2276",pD="\u2276",hD="\u2AA1",mD="\u2272",gD="\u2A7D",yD="\u2272",vD="\u297C",bD="\u230A",kD="\u{1D50F}",wD="\u{1D529}",_D="\u2276",xD="\u2A91",CD="\u2962",ED="\u21BD",SD="\u21BC",AD="\u296A",DD="\u2584",TD="\u0409",PD="\u0459",LD="\u21C7",ID="\u226A",RD="\u22D8",FD="\u231E",OD="\u21DA",MD="\u296B",ND="\u25FA",qD="\u013F",$D="\u0140",zD="\u23B0",KD="\u23B0",BD="\u2A89",HD="\u2A89",UD="\u2A87",jD="\u2268",VD="\u2A87",WD="\u2268",GD="\u22E6",ZD="\u27EC",QD="\u21FD",YD="\u27E6",XD="\u27F5",JD="\u27F5",eT="\u27F8",tT="\u27F7",nT="\u27F7",rT="\u27FA",oT="\u27FC",iT="\u27F6",sT="\u27F6",lT="\u27F9",cT="\u21AB",aT="\u21AC",uT="\u2985",dT="\u{1D543}",fT="\u{1D55D}",pT="\u2A2D",hT="\u2A34",mT="\u2217",gT="_",yT="\u2199",vT="\u2198",bT="\u25CA",kT="\u25CA",wT="\u29EB",_T="(",xT="\u2993",CT="\u21C6",ET="\u231F",ST="\u21CB",AT="\u296D",DT="\u200E",TT="\u22BF",PT="\u2039",LT="\u{1D4C1}",IT="\u2112",RT="\u21B0",FT="\u21B0",OT="\u2272",MT="\u2A8D",NT="\u2A8F",qT="[",$T="\u2018",zT="\u201A",KT="\u0141",BT="\u0142",HT="\u2AA6",UT="\u2A79",jT="<",VT="<",WT="\u226A",GT="\u22D6",ZT="\u22CB",QT="\u22C9",YT="\u2976",XT="\u2A7B",JT="\u25C3",eP="\u22B4",tP="\u25C2",nP="\u2996",rP="\u294A",oP="\u2966",iP="\u2268\uFE00",sP="\u2268\uFE00",lP="\xAF",cP="\u2642",aP="\u2720",uP="\u2720",dP="\u21A6",fP="\u21A6",pP="\u21A7",hP="\u21A4",mP="\u21A5",gP="\u25AE",yP="\u2A29",vP="\u041C",bP="\u043C",kP="\u2014",wP="\u223A",_P="\u2221",xP="\u205F",CP="\u2133",EP="\u{1D510}",SP="\u{1D52A}",AP="\u2127",DP="\xB5",TP="*",PP="\u2AF0",LP="\u2223",IP="\xB7",RP="\u229F",FP="\u2212",OP="\u2238",MP="\u2A2A",NP="\u2213",qP="\u2ADB",$P="\u2026",zP="\u2213",KP="\u22A7",BP="\u{1D544}",HP="\u{1D55E}",UP="\u2213",jP="\u{1D4C2}",VP="\u2133",WP="\u223E",GP="\u039C",ZP="\u03BC",QP="\u22B8",YP="\u22B8",XP="\u2207",JP="\u0143",eL="\u0144",tL="\u2220\u20D2",nL="\u2249",rL="\u2A70\u0338",oL="\u224B\u0338",iL="\u0149",sL="\u2249",lL="\u266E",cL="\u2115",aL="\u266E",uL="\xA0",dL="\u224E\u0338",fL="\u224F\u0338",pL="\u2A43",hL="\u0147",mL="\u0148",gL="\u0145",yL="\u0146",vL="\u2247",bL="\u2A6D\u0338",kL="\u2A42",wL="\u041D",_L="\u043D",xL="\u2013",CL="\u2924",EL="\u2197",SL="\u21D7",AL="\u2197",DL="\u2260",TL="\u2250\u0338",PL="\u200B",LL="\u200B",IL="\u200B",RL="\u200B",FL="\u2262",OL="\u2928",ML="\u2242\u0338",NL="\u226B",qL="\u226A",$L=`
`,zL="\u2204",KL="\u2204",BL="\u{1D511}",HL="\u{1D52B}",UL="\u2267\u0338",jL="\u2271",VL="\u2271",WL="\u2267\u0338",GL="\u2A7E\u0338",ZL="\u2A7E\u0338",QL="\u22D9\u0338",YL="\u2275",XL="\u226B\u20D2",JL="\u226F",eI="\u226F",tI="\u226B\u0338",nI="\u21AE",rI="\u21CE",oI="\u2AF2",iI="\u220B",sI="\u22FC",lI="\u22FA",cI="\u220B",aI="\u040A",uI="\u045A",dI="\u219A",fI="\u21CD",pI="\u2025",hI="\u2266\u0338",mI="\u2270",gI="\u219A",yI="\u21CD",vI="\u21AE",bI="\u21CE",kI="\u2270",wI="\u2266\u0338",_I="\u2A7D\u0338",xI="\u2A7D\u0338",CI="\u226E",EI="\u22D8\u0338",SI="\u2274",AI="\u226A\u20D2",DI="\u226E",TI="\u22EA",PI="\u22EC",LI="\u226A\u0338",II="\u2224",RI="\u2060",FI="\xA0",OI="\u{1D55F}",MI="\u2115",NI="\u2AEC",qI="\xAC",$I="\u2262",zI="\u226D",KI="\u2226",BI="\u2209",HI="\u2260",UI="\u2242\u0338",jI="\u2204",VI="\u226F",WI="\u2271",GI="\u2267\u0338",ZI="\u226B\u0338",QI="\u2279",YI="\u2A7E\u0338",XI="\u2275",JI="\u224E\u0338",eR="\u224F\u0338",tR="\u2209",nR="\u22F5\u0338",rR="\u22F9\u0338",oR="\u2209",iR="\u22F7",sR="\u22F6",lR="\u29CF\u0338",cR="\u22EA",aR="\u22EC",uR="\u226E",dR="\u2270",fR="\u2278",pR="\u226A\u0338",hR="\u2A7D\u0338",mR="\u2274",gR="\u2AA2\u0338",yR="\u2AA1\u0338",vR="\u220C",bR="\u220C",kR="\u22FE",wR="\u22FD",_R="\u2280",xR="\u2AAF\u0338",CR="\u22E0",ER="\u220C",SR="\u29D0\u0338",AR="\u22EB",DR="\u22ED",TR="\u228F\u0338",PR="\u22E2",LR="\u2290\u0338",IR="\u22E3",RR="\u2282\u20D2",FR="\u2288",OR="\u2281",MR="\u2AB0\u0338",NR="\u22E1",qR="\u227F\u0338",$R="\u2283\u20D2",zR="\u2289",KR="\u2241",BR="\u2244",HR="\u2247",UR="\u2249",jR="\u2224",VR="\u2226",WR="\u2226",GR="\u2AFD\u20E5",ZR="\u2202\u0338",QR="\u2A14",YR="\u2280",XR="\u22E0",JR="\u2280",eF="\u2AAF\u0338",tF="\u2AAF\u0338",nF="\u2933\u0338",rF="\u219B",oF="\u21CF",iF="\u219D\u0338",sF="\u219B",lF="\u21CF",cF="\u22EB",aF="\u22ED",uF="\u2281",dF="\u22E1",fF="\u2AB0\u0338",pF="\u{1D4A9}",hF="\u{1D4C3}",mF="\u2224",gF="\u2226",yF="\u2241",vF="\u2244",bF="\u2244",kF="\u2224",wF="\u2226",_F="\u22E2",xF="\u22E3",CF="\u2284",EF="\u2AC5\u0338",SF="\u2288",AF="\u2282\u20D2",DF="\u2288",TF="\u2AC5\u0338",PF="\u2281",LF="\u2AB0\u0338",IF="\u2285",RF="\u2AC6\u0338",FF="\u2289",OF="\u2283\u20D2",MF="\u2289",NF="\u2AC6\u0338",qF="\u2279",$F="\xD1",zF="\xF1",KF="\u2278",BF="\u22EA",HF="\u22EC",UF="\u22EB",jF="\u22ED",VF="\u039D",WF="\u03BD",GF="#",ZF="\u2116",QF="\u2007",YF="\u224D\u20D2",XF="\u22AC",JF="\u22AD",eO="\u22AE",tO="\u22AF",nO="\u2265\u20D2",rO=">\u20D2",oO="\u2904",iO="\u29DE",sO="\u2902",lO="\u2264\u20D2",cO="<\u20D2",aO="\u22B4\u20D2",uO="\u2903",dO="\u22B5\u20D2",fO="\u223C\u20D2",pO="\u2923",hO="\u2196",mO="\u21D6",gO="\u2196",yO="\u2927",vO="\xD3",bO="\xF3",kO="\u229B",wO="\xD4",_O="\xF4",xO="\u229A",CO="\u041E",EO="\u043E",SO="\u229D",AO="\u0150",DO="\u0151",TO="\u2A38",PO="\u2299",LO="\u29BC",IO="\u0152",RO="\u0153",FO="\u29BF",OO="\u{1D512}",MO="\u{1D52C}",NO="\u02DB",qO="\xD2",$O="\xF2",zO="\u29C1",KO="\u29B5",BO="\u03A9",HO="\u222E",UO="\u21BA",jO="\u29BE",VO="\u29BB",WO="\u203E",GO="\u29C0",ZO="\u014C",QO="\u014D",YO="\u03A9",XO="\u03C9",JO="\u039F",eM="\u03BF",tM="\u29B6",nM="\u2296",rM="\u{1D546}",oM="\u{1D560}",iM="\u29B7",sM="\u201C",lM="\u2018",cM="\u29B9",aM="\u2295",uM="\u21BB",dM="\u2A54",fM="\u2228",pM="\u2A5D",hM="\u2134",mM="\u2134",gM="\xAA",yM="\xBA",vM="\u22B6",bM="\u2A56",kM="\u2A57",wM="\u2A5B",_M="\u24C8",xM="\u{1D4AA}",CM="\u2134",EM="\xD8",SM="\xF8",AM="\u2298",DM="\xD5",TM="\xF5",PM="\u2A36",LM="\u2A37",IM="\u2297",RM="\xD6",FM="\xF6",OM="\u233D",MM="\u203E",NM="\u23DE",qM="\u23B4",$M="\u23DC",zM="\xB6",KM="\u2225",BM="\u2225",HM="\u2AF3",UM="\u2AFD",jM="\u2202",VM="\u2202",WM="\u041F",GM="\u043F",ZM="%",QM=".",YM="\u2030",XM="\u22A5",JM="\u2031",eN="\u{1D513}",tN="\u{1D52D}",nN="\u03A6",rN="\u03C6",oN="\u03D5",iN="\u2133",sN="\u260E",lN="\u03A0",cN="\u03C0",aN="\u22D4",uN="\u03D6",dN="\u210F",fN="\u210E",pN="\u210F",hN="\u2A23",mN="\u229E",gN="\u2A22",yN="+",vN="\u2214",bN="\u2A25",kN="\u2A72",wN="\xB1",_N="\xB1",xN="\u2A26",CN="\u2A27",EN="\xB1",SN="\u210C",AN="\u2A15",DN="\u{1D561}",TN="\u2119",PN="\xA3",LN="\u2AB7",IN="\u2ABB",RN="\u227A",FN="\u227C",ON="\u2AB7",MN="\u227A",NN="\u227C",qN="\u227A",$N="\u2AAF",zN="\u227C",KN="\u227E",BN="\u2AAF",HN="\u2AB9",UN="\u2AB5",jN="\u22E8",VN="\u2AAF",WN="\u2AB3",GN="\u227E",ZN="\u2032",QN="\u2033",YN="\u2119",XN="\u2AB9",JN="\u2AB5",eq="\u22E8",tq="\u220F",nq="\u220F",rq="\u232E",oq="\u2312",iq="\u2313",sq="\u221D",lq="\u221D",cq="\u2237",aq="\u221D",uq="\u227E",dq="\u22B0",fq="\u{1D4AB}",pq="\u{1D4C5}",hq="\u03A8",mq="\u03C8",gq="\u2008",yq="\u{1D514}",vq="\u{1D52E}",bq="\u2A0C",kq="\u{1D562}",wq="\u211A",_q="\u2057",xq="\u{1D4AC}",Cq="\u{1D4C6}",Eq="\u210D",Sq="\u2A16",Aq="?",Dq="\u225F",Tq='"',Pq='"',Lq="\u21DB",Iq="\u223D\u0331",Rq="\u0154",Fq="\u0155",Oq="\u221A",Mq="\u29B3",Nq="\u27E9",qq="\u27EB",$q="\u2992",zq="\u29A5",Kq="\u27E9",Bq="\xBB",Hq="\u2975",Uq="\u21E5",jq="\u2920",Vq="\u2933",Wq="\u2192",Gq="\u21A0",Zq="\u21D2",Qq="\u291E",Yq="\u21AA",Xq="\u21AC",Jq="\u2945",e$="\u2974",t$="\u2916",n$="\u21A3",r$="\u219D",o$="\u291A",i$="\u291C",s$="\u2236",l$="\u211A",c$="\u290D",a$="\u290F",u$="\u2910",d$="\u2773",f$="}",p$="]",h$="\u298C",m$="\u298E",g$="\u2990",y$="\u0158",v$="\u0159",b$="\u0156",k$="\u0157",w$="\u2309",_$="}",x$="\u0420",C$="\u0440",E$="\u2937",S$="\u2969",A$="\u201D",D$="\u201D",T$="\u21B3",P$="\u211C",L$="\u211B",I$="\u211C",R$="\u211D",F$="\u211C",O$="\u25AD",M$="\xAE",N$="\xAE",q$="\u220B",$$="\u21CB",z$="\u296F",K$="\u297D",B$="\u230B",H$="\u{1D52F}",U$="\u211C",j$="\u2964",V$="\u21C1",W$="\u21C0",G$="\u296C",Z$="\u03A1",Q$="\u03C1",Y$="\u03F1",X$="\u27E9",J$="\u21E5",ez="\u2192",tz="\u2192",nz="\u21D2",rz="\u21C4",oz="\u21A3",iz="\u2309",sz="\u27E7",lz="\u295D",cz="\u2955",az="\u21C2",uz="\u230B",dz="\u21C1",fz="\u21C0",pz="\u21C4",hz="\u21CC",mz="\u21C9",gz="\u219D",yz="\u21A6",vz="\u22A2",bz="\u295B",kz="\u22CC",wz="\u29D0",_z="\u22B3",xz="\u22B5",Cz="\u294F",Ez="\u295C",Sz="\u2954",Az="\u21BE",Dz="\u2953",Tz="\u21C0",Pz="\u02DA",Lz="\u2253",Iz="\u21C4",Rz="\u21CC",Fz="\u200F",Oz="\u23B1",Mz="\u23B1",Nz="\u2AEE",qz="\u27ED",$z="\u21FE",zz="\u27E7",Kz="\u2986",Bz="\u{1D563}",Hz="\u211D",Uz="\u2A2E",jz="\u2A35",Vz="\u2970",Wz=")",Gz="\u2994",Zz="\u2A12",Qz="\u21C9",Yz="\u21DB",Xz="\u203A",Jz="\u{1D4C7}",eK="\u211B",tK="\u21B1",nK="\u21B1",rK="]",oK="\u2019",iK="\u2019",sK="\u22CC",lK="\u22CA",cK="\u25B9",aK="\u22B5",uK="\u25B8",dK="\u29CE",fK="\u29F4",pK="\u2968",hK="\u211E",mK="\u015A",gK="\u015B",yK="\u201A",vK="\u2AB8",bK="\u0160",kK="\u0161",wK="\u2ABC",_K="\u227B",xK="\u227D",CK="\u2AB0",EK="\u2AB4",SK="\u015E",AK="\u015F",DK="\u015C",TK="\u015D",PK="\u2ABA",LK="\u2AB6",IK="\u22E9",RK="\u2A13",FK="\u227F",OK="\u0421",MK="\u0441",NK="\u22A1",qK="\u22C5",$K="\u2A66",zK="\u2925",KK="\u2198",BK="\u21D8",HK="\u2198",UK="\xA7",jK=";",VK="\u2929",WK="\u2216",GK="\u2216",ZK="\u2736",QK="\u{1D516}",YK="\u{1D530}",XK="\u2322",JK="\u266F",eB="\u0429",tB="\u0449",nB="\u0428",rB="\u0448",oB="\u2193",iB="\u2190",sB="\u2223",lB="\u2225",cB="\u2192",aB="\u2191",uB="\xAD",dB="\u03A3",fB="\u03C3",pB="\u03C2",hB="\u03C2",mB="\u223C",gB="\u2A6A",yB="\u2243",vB="\u2243",bB="\u2A9E",kB="\u2AA0",wB="\u2A9D",_B="\u2A9F",xB="\u2246",CB="\u2A24",EB="\u2972",SB="\u2190",AB="\u2218",DB="\u2216",TB="\u2A33",PB="\u29E4",LB="\u2223",IB="\u2323",RB="\u2AAA",FB="\u2AAC",OB="\u2AAC\uFE00",MB="\u042C",NB="\u044C",qB="\u233F",$B="\u29C4",zB="/",KB="\u{1D54A}",BB="\u{1D564}",HB="\u2660",UB="\u2660",jB="\u2225",VB="\u2293",WB="\u2293\uFE00",GB="\u2294",ZB="\u2294\uFE00",QB="\u221A",YB="\u228F",XB="\u2291",JB="\u228F",eH="\u2291",tH="\u2290",nH="\u2292",rH="\u2290",oH="\u2292",iH="\u25A1",sH="\u25A1",lH="\u2293",cH="\u228F",aH="\u2291",uH="\u2290",dH="\u2292",fH="\u2294",pH="\u25AA",hH="\u25A1",mH="\u25AA",gH="\u2192",yH="\u{1D4AE}",vH="\u{1D4C8}",bH="\u2216",kH="\u2323",wH="\u22C6",_H="\u22C6",xH="\u2606",CH="\u2605",EH="\u03F5",SH="\u03D5",AH="\xAF",DH="\u2282",TH="\u22D0",PH="\u2ABD",LH="\u2AC5",IH="\u2286",RH="\u2AC3",FH="\u2AC1",OH="\u2ACB",MH="\u228A",NH="\u2ABF",qH="\u2979",$H="\u2282",zH="\u22D0",KH="\u2286",BH="\u2AC5",HH="\u2286",UH="\u228A",jH="\u2ACB",VH="\u2AC7",WH="\u2AD5",GH="\u2AD3",ZH="\u2AB8",QH="\u227B",YH="\u227D",XH="\u227B",JH="\u2AB0",eU="\u227D",tU="\u227F",nU="\u2AB0",rU="\u2ABA",oU="\u2AB6",iU="\u22E9",sU="\u227F",lU="\u220B",cU="\u2211",aU="\u2211",uU="\u266A",dU="\xB9",fU="\xB2",pU="\xB3",hU="\u2283",mU="\u22D1",gU="\u2ABE",yU="\u2AD8",vU="\u2AC6",bU="\u2287",kU="\u2AC4",wU="\u2283",_U="\u2287",xU="\u27C9",CU="\u2AD7",EU="\u297B",SU="\u2AC2",AU="\u2ACC",DU="\u228B",TU="\u2AC0",PU="\u2283",LU="\u22D1",IU="\u2287",RU="\u2AC6",FU="\u228B",OU="\u2ACC",MU="\u2AC8",NU="\u2AD4",qU="\u2AD6",$U="\u2926",zU="\u2199",KU="\u21D9",BU="\u2199",HU="\u292A",UU="\xDF",jU="	",VU="\u2316",WU="\u03A4",GU="\u03C4",ZU="\u23B4",QU="\u0164",YU="\u0165",XU="\u0162",JU="\u0163",ej="\u0422",tj="\u0442",nj="\u20DB",rj="\u2315",oj="\u{1D517}",ij="\u{1D531}",sj="\u2234",lj="\u2234",cj="\u2234",aj="\u0398",uj="\u03B8",dj="\u03D1",fj="\u03D1",pj="\u2248",hj="\u223C",mj="\u205F\u200A",gj="\u2009",yj="\u2009",vj="\u2248",bj="\u223C",kj="\xDE",wj="\xFE",_j="\u02DC",xj="\u223C",Cj="\u2243",Ej="\u2245",Sj="\u2248",Aj="\u2A31",Dj="\u22A0",Tj="\xD7",Pj="\u2A30",Lj="\u222D",Ij="\u2928",Rj="\u2336",Fj="\u2AF1",Oj="\u22A4",Mj="\u{1D54B}",Nj="\u{1D565}",qj="\u2ADA",$j="\u2929",zj="\u2034",Kj="\u2122",Bj="\u2122",Hj="\u25B5",Uj="\u25BF",jj="\u25C3",Vj="\u22B4",Wj="\u225C",Gj="\u25B9",Zj="\u22B5",Qj="\u25EC",Yj="\u225C",Xj="\u2A3A",Jj="\u20DB",eV="\u2A39",tV="\u29CD",nV="\u2A3B",rV="\u23E2",oV="\u{1D4AF}",iV="\u{1D4C9}",sV="\u0426",lV="\u0446",cV="\u040B",aV="\u045B",uV="\u0166",dV="\u0167",fV="\u226C",pV="\u219E",hV="\u21A0",mV="\xDA",gV="\xFA",yV="\u2191",vV="\u219F",bV="\u21D1",kV="\u2949",wV="\u040E",_V="\u045E",xV="\u016C",CV="\u016D",EV="\xDB",SV="\xFB",AV="\u0423",DV="\u0443",TV="\u21C5",PV="\u0170",LV="\u0171",IV="\u296E",RV="\u297E",FV="\u{1D518}",OV="\u{1D532}",MV="\xD9",NV="\xF9",qV="\u2963",$V="\u21BF",zV="\u21BE",KV="\u2580",BV="\u231C",HV="\u231C",UV="\u230F",jV="\u25F8",VV="\u016A",WV="\u016B",GV="\xA8",ZV="_",QV="\u23DF",YV="\u23B5",XV="\u23DD",JV="\u22C3",eW="\u228E",tW="\u0172",nW="\u0173",rW="\u{1D54C}",oW="\u{1D566}",iW="\u2912",sW="\u2191",lW="\u2191",cW="\u21D1",aW="\u21C5",uW="\u2195",dW="\u2195",fW="\u21D5",pW="\u296E",hW="\u21BF",mW="\u21BE",gW="\u228E",yW="\u2196",vW="\u2197",bW="\u03C5",kW="\u03D2",wW="\u03D2",_W="\u03A5",xW="\u03C5",CW="\u21A5",EW="\u22A5",SW="\u21C8",AW="\u231D",DW="\u231D",TW="\u230E",PW="\u016E",LW="\u016F",IW="\u25F9",RW="\u{1D4B0}",FW="\u{1D4CA}",OW="\u22F0",MW="\u0168",NW="\u0169",qW="\u25B5",$W="\u25B4",zW="\u21C8",KW="\xDC",BW="\xFC",HW="\u29A7",UW="\u299C",jW="\u03F5",VW="\u03F0",WW="\u2205",GW="\u03D5",ZW="\u03D6",QW="\u221D",YW="\u2195",XW="\u21D5",JW="\u03F1",eG="\u03C2",tG="\u228A\uFE00",nG="\u2ACB\uFE00",rG="\u228B\uFE00",oG="\u2ACC\uFE00",iG="\u03D1",sG="\u22B2",lG="\u22B3",cG="\u2AE8",aG="\u2AEB",uG="\u2AE9",dG="\u0412",fG="\u0432",pG="\u22A2",hG="\u22A8",mG="\u22A9",gG="\u22AB",yG="\u2AE6",vG="\u22BB",bG="\u2228",kG="\u22C1",wG="\u225A",_G="\u22EE",xG="|",CG="\u2016",EG="|",SG="\u2016",AG="\u2223",DG="|",TG="\u2758",PG="\u2240",LG="\u200A",IG="\u{1D519}",RG="\u{1D533}",FG="\u22B2",OG="\u2282\u20D2",MG="\u2283\u20D2",NG="\u{1D54D}",qG="\u{1D567}",$G="\u221D",zG="\u22B3",KG="\u{1D4B1}",BG="\u{1D4CB}",HG="\u2ACB\uFE00",UG="\u228A\uFE00",jG="\u2ACC\uFE00",VG="\u228B\uFE00",WG="\u22AA",GG="\u299A",ZG="\u0174",QG="\u0175",YG="\u2A5F",XG="\u2227",JG="\u22C0",eZ="\u2259",tZ="\u2118",nZ="\u{1D51A}",rZ="\u{1D534}",oZ="\u{1D54E}",iZ="\u{1D568}",sZ="\u2118",lZ="\u2240",cZ="\u2240",aZ="\u{1D4B2}",uZ="\u{1D4CC}",dZ="\u22C2",fZ="\u25EF",pZ="\u22C3",hZ="\u25BD",mZ="\u{1D51B}",gZ="\u{1D535}",yZ="\u27F7",vZ="\u27FA",bZ="\u039E",kZ="\u03BE",wZ="\u27F5",_Z="\u27F8",xZ="\u27FC",CZ="\u22FB",EZ="\u2A00",SZ="\u{1D54F}",AZ="\u{1D569}",DZ="\u2A01",TZ="\u2A02",PZ="\u27F6",LZ="\u27F9",IZ="\u{1D4B3}",RZ="\u{1D4CD}",FZ="\u2A06",OZ="\u2A04",MZ="\u25B3",NZ="\u22C1",qZ="\u22C0",$Z="\xDD",zZ="\xFD",KZ="\u042F",BZ="\u044F",HZ="\u0176",UZ="\u0177",jZ="\u042B",VZ="\u044B",WZ="\xA5",GZ="\u{1D51C}",ZZ="\u{1D536}",QZ="\u0407",YZ="\u0457",XZ="\u{1D550}",JZ="\u{1D56A}",eQ="\u{1D4B4}",tQ="\u{1D4CE}",nQ="\u042E",rQ="\u044E",oQ="\xFF",iQ="\u0178",sQ="\u0179",lQ="\u017A",cQ="\u017D",aQ="\u017E",uQ="\u0417",dQ="\u0437",fQ="\u017B",pQ="\u017C",hQ="\u2128",mQ="\u200B",gQ="\u0396",yQ="\u03B6",vQ="\u{1D537}",bQ="\u2128",kQ="\u0416",wQ="\u0436",_Q="\u21DD",xQ="\u{1D56B}",CQ="\u2124",EQ="\u{1D4B5}",SQ="\u{1D4CF}",AQ="\u200D",DQ="\u200C",TQ={Aacute:fb,aacute:pb,Abreve:hb,abreve:mb,ac:gb,acd:yb,acE:vb,Acirc:bb,acirc:kb,acute:wb,Acy:_b,acy:xb,AElig:Cb,aelig:Eb,af:Sb,Afr:Ab,afr:Db,Agrave:Tb,agrave:Pb,alefsym:Lb,aleph:Ib,Alpha:Rb,alpha:Fb,Amacr:Ob,amacr:Mb,amalg:Nb,amp:qb,AMP:$b,andand:zb,And:Kb,and:Bb,andd:Hb,andslope:Ub,andv:jb,ang:Vb,ange:Wb,angle:Gb,angmsdaa:Zb,angmsdab:Qb,angmsdac:Yb,angmsdad:Xb,angmsdae:Jb,angmsdaf:ek,angmsdag:tk,angmsdah:nk,angmsd:rk,angrt:ok,angrtvb:ik,angrtvbd:sk,angsph:lk,angst:ck,angzarr:ak,Aogon:uk,aogon:dk,Aopf:fk,aopf:pk,apacir:hk,ap:mk,apE:gk,ape:yk,apid:vk,apos:bk,ApplyFunction:kk,approx:wk,approxeq:_k,Aring:xk,aring:Ck,Ascr:Ek,ascr:Sk,Assign:Ak,ast:Dk,asymp:Tk,asympeq:Pk,Atilde:Lk,atilde:Ik,Auml:Rk,auml:Fk,awconint:Ok,awint:Mk,backcong:Nk,backepsilon:qk,backprime:$k,backsim:zk,backsimeq:Kk,Backslash:Bk,Barv:Hk,barvee:Uk,barwed:jk,Barwed:Vk,barwedge:Wk,bbrk:Gk,bbrktbrk:Zk,bcong:Qk,Bcy:Yk,bcy:Xk,bdquo:Jk,becaus:e2,because:t2,Because:n2,bemptyv:r2,bepsi:o2,bernou:i2,Bernoullis:s2,Beta:l2,beta:c2,beth:a2,between:u2,Bfr:d2,bfr:f2,bigcap:p2,bigcirc:h2,bigcup:m2,bigodot:g2,bigoplus:y2,bigotimes:v2,bigsqcup:b2,bigstar:k2,bigtriangledown:w2,bigtriangleup:_2,biguplus:x2,bigvee:C2,bigwedge:E2,bkarow:S2,blacklozenge:A2,blacksquare:D2,blacktriangle:T2,blacktriangledown:P2,blacktriangleleft:L2,blacktriangleright:I2,blank:R2,blk12:F2,blk14:O2,blk34:M2,block:N2,bne:q2,bnequiv:$2,bNot:z2,bnot:K2,Bopf:B2,bopf:H2,bot:U2,bottom:j2,bowtie:V2,boxbox:W2,boxdl:G2,boxdL:Z2,boxDl:Q2,boxDL:Y2,boxdr:X2,boxdR:J2,boxDr:ew,boxDR:tw,boxh:nw,boxH:rw,boxhd:ow,boxHd:iw,boxhD:sw,boxHD:lw,boxhu:cw,boxHu:aw,boxhU:uw,boxHU:dw,boxminus:fw,boxplus:pw,boxtimes:hw,boxul:mw,boxuL:gw,boxUl:yw,boxUL:vw,boxur:bw,boxuR:kw,boxUr:ww,boxUR:_w,boxv:xw,boxV:Cw,boxvh:Ew,boxvH:Sw,boxVh:Aw,boxVH:Dw,boxvl:Tw,boxvL:Pw,boxVl:Lw,boxVL:Iw,boxvr:Rw,boxvR:Fw,boxVr:Ow,boxVR:Mw,bprime:Nw,breve:qw,Breve:$w,brvbar:zw,bscr:Kw,Bscr:Bw,bsemi:Hw,bsim:Uw,bsime:jw,bsolb:Vw,bsol:Ww,bsolhsub:Gw,bull:Zw,bullet:Qw,bump:Yw,bumpE:Xw,bumpe:Jw,Bumpeq:e_,bumpeq:t_,Cacute:n_,cacute:r_,capand:o_,capbrcup:i_,capcap:s_,cap:l_,Cap:c_,capcup:a_,capdot:u_,CapitalDifferentialD:d_,caps:f_,caret:p_,caron:h_,Cayleys:m_,ccaps:g_,Ccaron:y_,ccaron:v_,Ccedil:b_,ccedil:k_,Ccirc:w_,ccirc:__,Cconint:x_,ccups:C_,ccupssm:E_,Cdot:S_,cdot:A_,cedil:D_,Cedilla:T_,cemptyv:P_,cent:L_,centerdot:I_,CenterDot:R_,cfr:F_,Cfr:O_,CHcy:M_,chcy:N_,check:q_,checkmark:$_,Chi:z_,chi:K_,circ:B_,circeq:H_,circlearrowleft:U_,circlearrowright:j_,circledast:V_,circledcirc:W_,circleddash:G_,CircleDot:Z_,circledR:Q_,circledS:Y_,CircleMinus:X_,CirclePlus:J_,CircleTimes:ex,cir:tx,cirE:nx,cire:rx,cirfnint:ox,cirmid:ix,cirscir:sx,ClockwiseContourIntegral:lx,CloseCurlyDoubleQuote:cx,CloseCurlyQuote:ax,clubs:ux,clubsuit:dx,colon:fx,Colon:px,Colone:hx,colone:mx,coloneq:gx,comma:yx,commat:vx,comp:bx,compfn:kx,complement:wx,complexes:_x,cong:xx,congdot:Cx,Congruent:Ex,conint:Sx,Conint:Ax,ContourIntegral:Dx,copf:Tx,Copf:Px,coprod:Lx,Coproduct:Ix,copy:Rx,COPY:Fx,copysr:Ox,CounterClockwiseContourIntegral:Mx,crarr:Nx,cross:qx,Cross:$x,Cscr:zx,cscr:Kx,csub:Bx,csube:Hx,csup:Ux,csupe:jx,ctdot:Vx,cudarrl:Wx,cudarrr:Gx,cuepr:Zx,cuesc:Qx,cularr:Yx,cularrp:Xx,cupbrcap:Jx,cupcap:e3,CupCap:t3,cup:n3,Cup:r3,cupcup:o3,cupdot:i3,cupor:s3,cups:l3,curarr:c3,curarrm:a3,curlyeqprec:u3,curlyeqsucc:d3,curlyvee:f3,curlywedge:p3,curren:h3,curvearrowleft:m3,curvearrowright:g3,cuvee:y3,cuwed:v3,cwconint:b3,cwint:k3,cylcty:w3,dagger:_3,Dagger:x3,daleth:C3,darr:E3,Darr:S3,dArr:A3,dash:D3,Dashv:T3,dashv:P3,dbkarow:L3,dblac:I3,Dcaron:R3,dcaron:F3,Dcy:O3,dcy:M3,ddagger:N3,ddarr:q3,DD:$3,dd:z3,DDotrahd:K3,ddotseq:B3,deg:H3,Del:U3,Delta:j3,delta:V3,demptyv:W3,dfisht:G3,Dfr:Z3,dfr:Q3,dHar:Y3,dharl:X3,dharr:J3,DiacriticalAcute:eC,DiacriticalDot:tC,DiacriticalDoubleAcute:nC,DiacriticalGrave:rC,DiacriticalTilde:oC,diam:iC,diamond:sC,Diamond:lC,diamondsuit:cC,diams:aC,die:uC,DifferentialD:dC,digamma:fC,disin:pC,div:hC,divide:mC,divideontimes:gC,divonx:yC,DJcy:vC,djcy:bC,dlcorn:kC,dlcrop:wC,dollar:_C,Dopf:xC,dopf:CC,Dot:EC,dot:SC,DotDot:AC,doteq:DC,doteqdot:TC,DotEqual:PC,dotminus:LC,dotplus:IC,dotsquare:RC,doublebarwedge:FC,DoubleContourIntegral:OC,DoubleDot:MC,DoubleDownArrow:NC,DoubleLeftArrow:qC,DoubleLeftRightArrow:$C,DoubleLeftTee:zC,DoubleLongLeftArrow:KC,DoubleLongLeftRightArrow:BC,DoubleLongRightArrow:HC,DoubleRightArrow:UC,DoubleRightTee:jC,DoubleUpArrow:VC,DoubleUpDownArrow:WC,DoubleVerticalBar:GC,DownArrowBar:ZC,downarrow:QC,DownArrow:YC,Downarrow:XC,DownArrowUpArrow:JC,DownBreve:e4,downdownarrows:t4,downharpoonleft:n4,downharpoonright:r4,DownLeftRightVector:o4,DownLeftTeeVector:i4,DownLeftVectorBar:s4,DownLeftVector:l4,DownRightTeeVector:c4,DownRightVectorBar:a4,DownRightVector:u4,DownTeeArrow:d4,DownTee:f4,drbkarow:p4,drcorn:h4,drcrop:m4,Dscr:g4,dscr:y4,DScy:v4,dscy:b4,dsol:k4,Dstrok:w4,dstrok:_4,dtdot:x4,dtri:C4,dtrif:E4,duarr:S4,duhar:A4,dwangle:D4,DZcy:T4,dzcy:P4,dzigrarr:L4,Eacute:I4,eacute:R4,easter:F4,Ecaron:O4,ecaron:M4,Ecirc:N4,ecirc:q4,ecir:$4,ecolon:z4,Ecy:K4,ecy:B4,eDDot:H4,Edot:U4,edot:j4,eDot:V4,ee:W4,efDot:G4,Efr:Z4,efr:Q4,eg:Y4,Egrave:X4,egrave:J4,egs:eE,egsdot:tE,el:nE,Element:rE,elinters:oE,ell:iE,els:sE,elsdot:lE,Emacr:cE,emacr:aE,empty:uE,emptyset:dE,EmptySmallSquare:fE,emptyv:pE,EmptyVerySmallSquare:hE,emsp13:mE,emsp14:gE,emsp:yE,ENG:vE,eng:bE,ensp:kE,Eogon:wE,eogon:_E,Eopf:xE,eopf:CE,epar:EE,eparsl:SE,eplus:AE,epsi:DE,Epsilon:TE,epsilon:PE,epsiv:LE,eqcirc:IE,eqcolon:RE,eqsim:FE,eqslantgtr:OE,eqslantless:ME,Equal:NE,equals:qE,EqualTilde:$E,equest:zE,Equilibrium:KE,equiv:BE,equivDD:HE,eqvparsl:UE,erarr:jE,erDot:VE,escr:WE,Escr:GE,esdot:ZE,Esim:QE,esim:YE,Eta:XE,eta:JE,ETH:e5,eth:t5,Euml:n5,euml:r5,euro:o5,excl:i5,exist:s5,Exists:l5,expectation:c5,exponentiale:a5,ExponentialE:u5,fallingdotseq:d5,Fcy:f5,fcy:p5,female:h5,ffilig:m5,fflig:g5,ffllig:y5,Ffr:v5,ffr:b5,filig:k5,FilledSmallSquare:w5,FilledVerySmallSquare:_5,fjlig:x5,flat:C5,fllig:E5,fltns:S5,fnof:A5,Fopf:D5,fopf:T5,forall:P5,ForAll:L5,fork:I5,forkv:R5,Fouriertrf:F5,fpartint:O5,frac12:M5,frac13:N5,frac14:q5,frac15:$5,frac16:z5,frac18:K5,frac23:B5,frac25:H5,frac34:U5,frac35:j5,frac38:V5,frac45:W5,frac56:G5,frac58:Z5,frac78:Q5,frasl:Y5,frown:X5,fscr:J5,Fscr:eS,gacute:tS,Gamma:nS,gamma:rS,Gammad:oS,gammad:iS,gap:sS,Gbreve:lS,gbreve:cS,Gcedil:aS,Gcirc:uS,gcirc:dS,Gcy:fS,gcy:pS,Gdot:hS,gdot:mS,ge:gS,gE:yS,gEl:vS,gel:bS,geq:kS,geqq:wS,geqslant:_S,gescc:xS,ges:CS,gesdot:ES,gesdoto:SS,gesdotol:AS,gesl:DS,gesles:TS,Gfr:PS,gfr:LS,gg:IS,Gg:RS,ggg:FS,gimel:OS,GJcy:MS,gjcy:NS,gla:qS,gl:$S,glE:zS,glj:KS,gnap:BS,gnapprox:HS,gne:US,gnE:jS,gneq:VS,gneqq:WS,gnsim:GS,Gopf:ZS,gopf:QS,grave:YS,GreaterEqual:XS,GreaterEqualLess:JS,GreaterFullEqual:e8,GreaterGreater:t8,GreaterLess:n8,GreaterSlantEqual:r8,GreaterTilde:o8,Gscr:i8,gscr:s8,gsim:l8,gsime:c8,gsiml:a8,gtcc:u8,gtcir:d8,gt:f8,GT:p8,Gt:h8,gtdot:m8,gtlPar:g8,gtquest:y8,gtrapprox:v8,gtrarr:b8,gtrdot:k8,gtreqless:w8,gtreqqless:_8,gtrless:x8,gtrsim:C8,gvertneqq:E8,gvnE:S8,Hacek:A8,hairsp:D8,half:T8,hamilt:P8,HARDcy:L8,hardcy:I8,harrcir:R8,harr:F8,hArr:O8,harrw:M8,Hat:N8,hbar:q8,Hcirc:$8,hcirc:z8,hearts:K8,heartsuit:B8,hellip:H8,hercon:U8,hfr:j8,Hfr:V8,HilbertSpace:W8,hksearow:G8,hkswarow:Z8,hoarr:Q8,homtht:Y8,hookleftarrow:X8,hookrightarrow:J8,hopf:e6,Hopf:t6,horbar:n6,HorizontalLine:r6,hscr:o6,Hscr:i6,hslash:s6,Hstrok:l6,hstrok:c6,HumpDownHump:a6,HumpEqual:u6,hybull:d6,hyphen:f6,Iacute:p6,iacute:h6,ic:m6,Icirc:g6,icirc:y6,Icy:v6,icy:b6,Idot:k6,IEcy:w6,iecy:_6,iexcl:x6,iff:C6,ifr:E6,Ifr:S6,Igrave:A6,igrave:D6,ii:T6,iiiint:P6,iiint:L6,iinfin:I6,iiota:R6,IJlig:F6,ijlig:O6,Imacr:M6,imacr:N6,image:q6,ImaginaryI:$6,imagline:z6,imagpart:K6,imath:B6,Im:H6,imof:U6,imped:j6,Implies:V6,incare:W6,in:"\u2208",infin:G6,infintie:Z6,inodot:Q6,intcal:Y6,int:X6,Int:J6,integers:e7,Integral:t7,intercal:n7,Intersection:r7,intlarhk:o7,intprod:i7,InvisibleComma:s7,InvisibleTimes:l7,IOcy:c7,iocy:a7,Iogon:u7,iogon:d7,Iopf:f7,iopf:p7,Iota:h7,iota:m7,iprod:g7,iquest:y7,iscr:v7,Iscr:b7,isin:k7,isindot:w7,isinE:_7,isins:x7,isinsv:C7,isinv:E7,it:S7,Itilde:A7,itilde:D7,Iukcy:T7,iukcy:P7,Iuml:L7,iuml:I7,Jcirc:R7,jcirc:F7,Jcy:O7,jcy:M7,Jfr:N7,jfr:q7,jmath:$7,Jopf:z7,jopf:K7,Jscr:B7,jscr:H7,Jsercy:U7,jsercy:j7,Jukcy:V7,jukcy:W7,Kappa:G7,kappa:Z7,kappav:Q7,Kcedil:Y7,kcedil:X7,Kcy:J7,kcy:e9,Kfr:t9,kfr:n9,kgreen:r9,KHcy:o9,khcy:i9,KJcy:s9,kjcy:l9,Kopf:c9,kopf:a9,Kscr:u9,kscr:d9,lAarr:f9,Lacute:p9,lacute:h9,laemptyv:m9,lagran:g9,Lambda:y9,lambda:v9,lang:b9,Lang:k9,langd:w9,langle:_9,lap:x9,Laplacetrf:C9,laquo:E9,larrb:S9,larrbfs:A9,larr:D9,Larr:T9,lArr:P9,larrfs:L9,larrhk:I9,larrlp:R9,larrpl:F9,larrsim:O9,larrtl:M9,latail:N9,lAtail:q9,lat:$9,late:z9,lates:K9,lbarr:B9,lBarr:H9,lbbrk:U9,lbrace:j9,lbrack:V9,lbrke:W9,lbrksld:G9,lbrkslu:Z9,Lcaron:Q9,lcaron:Y9,Lcedil:X9,lcedil:J9,lceil:eA,lcub:tA,Lcy:nA,lcy:rA,ldca:oA,ldquo:iA,ldquor:sA,ldrdhar:lA,ldrushar:cA,ldsh:aA,le:uA,lE:dA,LeftAngleBracket:fA,LeftArrowBar:pA,leftarrow:hA,LeftArrow:mA,Leftarrow:gA,LeftArrowRightArrow:yA,leftarrowtail:vA,LeftCeiling:bA,LeftDoubleBracket:kA,LeftDownTeeVector:wA,LeftDownVectorBar:_A,LeftDownVector:xA,LeftFloor:CA,leftharpoondown:EA,leftharpoonup:SA,leftleftarrows:AA,leftrightarrow:DA,LeftRightArrow:TA,Leftrightarrow:PA,leftrightarrows:LA,leftrightharpoons:IA,leftrightsquigarrow:RA,LeftRightVector:FA,LeftTeeArrow:OA,LeftTee:MA,LeftTeeVector:NA,leftthreetimes:qA,LeftTriangleBar:$A,LeftTriangle:zA,LeftTriangleEqual:KA,LeftUpDownVector:BA,LeftUpTeeVector:HA,LeftUpVectorBar:UA,LeftUpVector:jA,LeftVectorBar:VA,LeftVector:WA,lEg:GA,leg:ZA,leq:QA,leqq:YA,leqslant:XA,lescc:JA,les:eD,lesdot:tD,lesdoto:nD,lesdotor:rD,lesg:oD,lesges:iD,lessapprox:sD,lessdot:lD,lesseqgtr:cD,lesseqqgtr:aD,LessEqualGreater:uD,LessFullEqual:dD,LessGreater:fD,lessgtr:pD,LessLess:hD,lesssim:mD,LessSlantEqual:gD,LessTilde:yD,lfisht:vD,lfloor:bD,Lfr:kD,lfr:wD,lg:_D,lgE:xD,lHar:CD,lhard:ED,lharu:SD,lharul:AD,lhblk:DD,LJcy:TD,ljcy:PD,llarr:LD,ll:ID,Ll:RD,llcorner:FD,Lleftarrow:OD,llhard:MD,lltri:ND,Lmidot:qD,lmidot:$D,lmoustache:zD,lmoust:KD,lnap:BD,lnapprox:HD,lne:UD,lnE:jD,lneq:VD,lneqq:WD,lnsim:GD,loang:ZD,loarr:QD,lobrk:YD,longleftarrow:XD,LongLeftArrow:JD,Longleftarrow:eT,longleftrightarrow:tT,LongLeftRightArrow:nT,Longleftrightarrow:rT,longmapsto:oT,longrightarrow:iT,LongRightArrow:sT,Longrightarrow:lT,looparrowleft:cT,looparrowright:aT,lopar:uT,Lopf:dT,lopf:fT,loplus:pT,lotimes:hT,lowast:mT,lowbar:gT,LowerLeftArrow:yT,LowerRightArrow:vT,loz:bT,lozenge:kT,lozf:wT,lpar:_T,lparlt:xT,lrarr:CT,lrcorner:ET,lrhar:ST,lrhard:AT,lrm:DT,lrtri:TT,lsaquo:PT,lscr:LT,Lscr:IT,lsh:RT,Lsh:FT,lsim:OT,lsime:MT,lsimg:NT,lsqb:qT,lsquo:$T,lsquor:zT,Lstrok:KT,lstrok:BT,ltcc:HT,ltcir:UT,lt:jT,LT:VT,Lt:WT,ltdot:GT,lthree:ZT,ltimes:QT,ltlarr:YT,ltquest:XT,ltri:JT,ltrie:eP,ltrif:tP,ltrPar:nP,lurdshar:rP,luruhar:oP,lvertneqq:iP,lvnE:sP,macr:lP,male:cP,malt:aP,maltese:uP,Map:"\u2905",map:dP,mapsto:fP,mapstodown:pP,mapstoleft:hP,mapstoup:mP,marker:gP,mcomma:yP,Mcy:vP,mcy:bP,mdash:kP,mDDot:wP,measuredangle:_P,MediumSpace:xP,Mellintrf:CP,Mfr:EP,mfr:SP,mho:AP,micro:DP,midast:TP,midcir:PP,mid:LP,middot:IP,minusb:RP,minus:FP,minusd:OP,minusdu:MP,MinusPlus:NP,mlcp:qP,mldr:$P,mnplus:zP,models:KP,Mopf:BP,mopf:HP,mp:UP,mscr:jP,Mscr:VP,mstpos:WP,Mu:GP,mu:ZP,multimap:QP,mumap:YP,nabla:XP,Nacute:JP,nacute:eL,nang:tL,nap:nL,napE:rL,napid:oL,napos:iL,napprox:sL,natural:lL,naturals:cL,natur:aL,nbsp:uL,nbump:dL,nbumpe:fL,ncap:pL,Ncaron:hL,ncaron:mL,Ncedil:gL,ncedil:yL,ncong:vL,ncongdot:bL,ncup:kL,Ncy:wL,ncy:_L,ndash:xL,nearhk:CL,nearr:EL,neArr:SL,nearrow:AL,ne:DL,nedot:TL,NegativeMediumSpace:PL,NegativeThickSpace:LL,NegativeThinSpace:IL,NegativeVeryThinSpace:RL,nequiv:FL,nesear:OL,nesim:ML,NestedGreaterGreater:NL,NestedLessLess:qL,NewLine:$L,nexist:zL,nexists:KL,Nfr:BL,nfr:HL,ngE:UL,nge:jL,ngeq:VL,ngeqq:WL,ngeqslant:GL,nges:ZL,nGg:QL,ngsim:YL,nGt:XL,ngt:JL,ngtr:eI,nGtv:tI,nharr:nI,nhArr:rI,nhpar:oI,ni:iI,nis:sI,nisd:lI,niv:cI,NJcy:aI,njcy:uI,nlarr:dI,nlArr:fI,nldr:pI,nlE:hI,nle:mI,nleftarrow:gI,nLeftarrow:yI,nleftrightarrow:vI,nLeftrightarrow:bI,nleq:kI,nleqq:wI,nleqslant:_I,nles:xI,nless:CI,nLl:EI,nlsim:SI,nLt:AI,nlt:DI,nltri:TI,nltrie:PI,nLtv:LI,nmid:II,NoBreak:RI,NonBreakingSpace:FI,nopf:OI,Nopf:MI,Not:NI,not:qI,NotCongruent:$I,NotCupCap:zI,NotDoubleVerticalBar:KI,NotElement:BI,NotEqual:HI,NotEqualTilde:UI,NotExists:jI,NotGreater:VI,NotGreaterEqual:WI,NotGreaterFullEqual:GI,NotGreaterGreater:ZI,NotGreaterLess:QI,NotGreaterSlantEqual:YI,NotGreaterTilde:XI,NotHumpDownHump:JI,NotHumpEqual:eR,notin:tR,notindot:nR,notinE:rR,notinva:oR,notinvb:iR,notinvc:sR,NotLeftTriangleBar:lR,NotLeftTriangle:cR,NotLeftTriangleEqual:aR,NotLess:uR,NotLessEqual:dR,NotLessGreater:fR,NotLessLess:pR,NotLessSlantEqual:hR,NotLessTilde:mR,NotNestedGreaterGreater:gR,NotNestedLessLess:yR,notni:vR,notniva:bR,notnivb:kR,notnivc:wR,NotPrecedes:_R,NotPrecedesEqual:xR,NotPrecedesSlantEqual:CR,NotReverseElement:ER,NotRightTriangleBar:SR,NotRightTriangle:AR,NotRightTriangleEqual:DR,NotSquareSubset:TR,NotSquareSubsetEqual:PR,NotSquareSuperset:LR,NotSquareSupersetEqual:IR,NotSubset:RR,NotSubsetEqual:FR,NotSucceeds:OR,NotSucceedsEqual:MR,NotSucceedsSlantEqual:NR,NotSucceedsTilde:qR,NotSuperset:$R,NotSupersetEqual:zR,NotTilde:KR,NotTildeEqual:BR,NotTildeFullEqual:HR,NotTildeTilde:UR,NotVerticalBar:jR,nparallel:VR,npar:WR,nparsl:GR,npart:ZR,npolint:QR,npr:YR,nprcue:XR,nprec:JR,npreceq:eF,npre:tF,nrarrc:nF,nrarr:rF,nrArr:oF,nrarrw:iF,nrightarrow:sF,nRightarrow:lF,nrtri:cF,nrtrie:aF,nsc:uF,nsccue:dF,nsce:fF,Nscr:pF,nscr:hF,nshortmid:mF,nshortparallel:gF,nsim:yF,nsime:vF,nsimeq:bF,nsmid:kF,nspar:wF,nsqsube:_F,nsqsupe:xF,nsub:CF,nsubE:EF,nsube:SF,nsubset:AF,nsubseteq:DF,nsubseteqq:TF,nsucc:PF,nsucceq:LF,nsup:IF,nsupE:RF,nsupe:FF,nsupset:OF,nsupseteq:MF,nsupseteqq:NF,ntgl:qF,Ntilde:$F,ntilde:zF,ntlg:KF,ntriangleleft:BF,ntrianglelefteq:HF,ntriangleright:UF,ntrianglerighteq:jF,Nu:VF,nu:WF,num:GF,numero:ZF,numsp:QF,nvap:YF,nvdash:XF,nvDash:JF,nVdash:eO,nVDash:tO,nvge:nO,nvgt:rO,nvHarr:oO,nvinfin:iO,nvlArr:sO,nvle:lO,nvlt:cO,nvltrie:aO,nvrArr:uO,nvrtrie:dO,nvsim:fO,nwarhk:pO,nwarr:hO,nwArr:mO,nwarrow:gO,nwnear:yO,Oacute:vO,oacute:bO,oast:kO,Ocirc:wO,ocirc:_O,ocir:xO,Ocy:CO,ocy:EO,odash:SO,Odblac:AO,odblac:DO,odiv:TO,odot:PO,odsold:LO,OElig:IO,oelig:RO,ofcir:FO,Ofr:OO,ofr:MO,ogon:NO,Ograve:qO,ograve:$O,ogt:zO,ohbar:KO,ohm:BO,oint:HO,olarr:UO,olcir:jO,olcross:VO,oline:WO,olt:GO,Omacr:ZO,omacr:QO,Omega:YO,omega:XO,Omicron:JO,omicron:eM,omid:tM,ominus:nM,Oopf:rM,oopf:oM,opar:iM,OpenCurlyDoubleQuote:sM,OpenCurlyQuote:lM,operp:cM,oplus:aM,orarr:uM,Or:dM,or:fM,ord:pM,order:hM,orderof:mM,ordf:gM,ordm:yM,origof:vM,oror:bM,orslope:kM,orv:wM,oS:_M,Oscr:xM,oscr:CM,Oslash:EM,oslash:SM,osol:AM,Otilde:DM,otilde:TM,otimesas:PM,Otimes:LM,otimes:IM,Ouml:RM,ouml:FM,ovbar:OM,OverBar:MM,OverBrace:NM,OverBracket:qM,OverParenthesis:$M,para:zM,parallel:KM,par:BM,parsim:HM,parsl:UM,part:jM,PartialD:VM,Pcy:WM,pcy:GM,percnt:ZM,period:QM,permil:YM,perp:XM,pertenk:JM,Pfr:eN,pfr:tN,Phi:nN,phi:rN,phiv:oN,phmmat:iN,phone:sN,Pi:lN,pi:cN,pitchfork:aN,piv:uN,planck:dN,planckh:fN,plankv:pN,plusacir:hN,plusb:mN,pluscir:gN,plus:yN,plusdo:vN,plusdu:bN,pluse:kN,PlusMinus:wN,plusmn:_N,plussim:xN,plustwo:CN,pm:EN,Poincareplane:SN,pointint:AN,popf:DN,Popf:TN,pound:PN,prap:LN,Pr:IN,pr:RN,prcue:FN,precapprox:ON,prec:MN,preccurlyeq:NN,Precedes:qN,PrecedesEqual:$N,PrecedesSlantEqual:zN,PrecedesTilde:KN,preceq:BN,precnapprox:HN,precneqq:UN,precnsim:jN,pre:VN,prE:WN,precsim:GN,prime:ZN,Prime:QN,primes:YN,prnap:XN,prnE:JN,prnsim:eq,prod:tq,Product:nq,profalar:rq,profline:oq,profsurf:iq,prop:sq,Proportional:lq,Proportion:cq,propto:aq,prsim:uq,prurel:dq,Pscr:fq,pscr:pq,Psi:hq,psi:mq,puncsp:gq,Qfr:yq,qfr:vq,qint:bq,qopf:kq,Qopf:wq,qprime:_q,Qscr:xq,qscr:Cq,quaternions:Eq,quatint:Sq,quest:Aq,questeq:Dq,quot:Tq,QUOT:Pq,rAarr:Lq,race:Iq,Racute:Rq,racute:Fq,radic:Oq,raemptyv:Mq,rang:Nq,Rang:qq,rangd:$q,range:zq,rangle:Kq,raquo:Bq,rarrap:Hq,rarrb:Uq,rarrbfs:jq,rarrc:Vq,rarr:Wq,Rarr:Gq,rArr:Zq,rarrfs:Qq,rarrhk:Yq,rarrlp:Xq,rarrpl:Jq,rarrsim:e$,Rarrtl:t$,rarrtl:n$,rarrw:r$,ratail:o$,rAtail:i$,ratio:s$,rationals:l$,rbarr:c$,rBarr:a$,RBarr:u$,rbbrk:d$,rbrace:f$,rbrack:p$,rbrke:h$,rbrksld:m$,rbrkslu:g$,Rcaron:y$,rcaron:v$,Rcedil:b$,rcedil:k$,rceil:w$,rcub:_$,Rcy:x$,rcy:C$,rdca:E$,rdldhar:S$,rdquo:A$,rdquor:D$,rdsh:T$,real:P$,realine:L$,realpart:I$,reals:R$,Re:F$,rect:O$,reg:M$,REG:N$,ReverseElement:q$,ReverseEquilibrium:$$,ReverseUpEquilibrium:z$,rfisht:K$,rfloor:B$,rfr:H$,Rfr:U$,rHar:j$,rhard:V$,rharu:W$,rharul:G$,Rho:Z$,rho:Q$,rhov:Y$,RightAngleBracket:X$,RightArrowBar:J$,rightarrow:ez,RightArrow:tz,Rightarrow:nz,RightArrowLeftArrow:rz,rightarrowtail:oz,RightCeiling:iz,RightDoubleBracket:sz,RightDownTeeVector:lz,RightDownVectorBar:cz,RightDownVector:az,RightFloor:uz,rightharpoondown:dz,rightharpoonup:fz,rightleftarrows:pz,rightleftharpoons:hz,rightrightarrows:mz,rightsquigarrow:gz,RightTeeArrow:yz,RightTee:vz,RightTeeVector:bz,rightthreetimes:kz,RightTriangleBar:wz,RightTriangle:_z,RightTriangleEqual:xz,RightUpDownVector:Cz,RightUpTeeVector:Ez,RightUpVectorBar:Sz,RightUpVector:Az,RightVectorBar:Dz,RightVector:Tz,ring:Pz,risingdotseq:Lz,rlarr:Iz,rlhar:Rz,rlm:Fz,rmoustache:Oz,rmoust:Mz,rnmid:Nz,roang:qz,roarr:$z,robrk:zz,ropar:Kz,ropf:Bz,Ropf:Hz,roplus:Uz,rotimes:jz,RoundImplies:Vz,rpar:Wz,rpargt:Gz,rppolint:Zz,rrarr:Qz,Rrightarrow:Yz,rsaquo:Xz,rscr:Jz,Rscr:eK,rsh:tK,Rsh:nK,rsqb:rK,rsquo:oK,rsquor:iK,rthree:sK,rtimes:lK,rtri:cK,rtrie:aK,rtrif:uK,rtriltri:dK,RuleDelayed:fK,ruluhar:pK,rx:hK,Sacute:mK,sacute:gK,sbquo:yK,scap:vK,Scaron:bK,scaron:kK,Sc:wK,sc:_K,sccue:xK,sce:CK,scE:EK,Scedil:SK,scedil:AK,Scirc:DK,scirc:TK,scnap:PK,scnE:LK,scnsim:IK,scpolint:RK,scsim:FK,Scy:OK,scy:MK,sdotb:NK,sdot:qK,sdote:$K,searhk:zK,searr:KK,seArr:BK,searrow:HK,sect:UK,semi:jK,seswar:VK,setminus:WK,setmn:GK,sext:ZK,Sfr:QK,sfr:YK,sfrown:XK,sharp:JK,SHCHcy:eB,shchcy:tB,SHcy:nB,shcy:rB,ShortDownArrow:oB,ShortLeftArrow:iB,shortmid:sB,shortparallel:lB,ShortRightArrow:cB,ShortUpArrow:aB,shy:uB,Sigma:dB,sigma:fB,sigmaf:pB,sigmav:hB,sim:mB,simdot:gB,sime:yB,simeq:vB,simg:bB,simgE:kB,siml:wB,simlE:_B,simne:xB,simplus:CB,simrarr:EB,slarr:SB,SmallCircle:AB,smallsetminus:DB,smashp:TB,smeparsl:PB,smid:LB,smile:IB,smt:RB,smte:FB,smtes:OB,SOFTcy:MB,softcy:NB,solbar:qB,solb:$B,sol:zB,Sopf:KB,sopf:BB,spades:HB,spadesuit:UB,spar:jB,sqcap:VB,sqcaps:WB,sqcup:GB,sqcups:ZB,Sqrt:QB,sqsub:YB,sqsube:XB,sqsubset:JB,sqsubseteq:eH,sqsup:tH,sqsupe:nH,sqsupset:rH,sqsupseteq:oH,square:iH,Square:sH,SquareIntersection:lH,SquareSubset:cH,SquareSubsetEqual:aH,SquareSuperset:uH,SquareSupersetEqual:dH,SquareUnion:fH,squarf:pH,squ:hH,squf:mH,srarr:gH,Sscr:yH,sscr:vH,ssetmn:bH,ssmile:kH,sstarf:wH,Star:_H,star:xH,starf:CH,straightepsilon:EH,straightphi:SH,strns:AH,sub:DH,Sub:TH,subdot:PH,subE:LH,sube:IH,subedot:RH,submult:FH,subnE:OH,subne:MH,subplus:NH,subrarr:qH,subset:$H,Subset:zH,subseteq:KH,subseteqq:BH,SubsetEqual:HH,subsetneq:UH,subsetneqq:jH,subsim:VH,subsub:WH,subsup:GH,succapprox:ZH,succ:QH,succcurlyeq:YH,Succeeds:XH,SucceedsEqual:JH,SucceedsSlantEqual:eU,SucceedsTilde:tU,succeq:nU,succnapprox:rU,succneqq:oU,succnsim:iU,succsim:sU,SuchThat:lU,sum:cU,Sum:aU,sung:uU,sup1:dU,sup2:fU,sup3:pU,sup:hU,Sup:mU,supdot:gU,supdsub:yU,supE:vU,supe:bU,supedot:kU,Superset:wU,SupersetEqual:_U,suphsol:xU,suphsub:CU,suplarr:EU,supmult:SU,supnE:AU,supne:DU,supplus:TU,supset:PU,Supset:LU,supseteq:IU,supseteqq:RU,supsetneq:FU,supsetneqq:OU,supsim:MU,supsub:NU,supsup:qU,swarhk:$U,swarr:zU,swArr:KU,swarrow:BU,swnwar:HU,szlig:UU,Tab:jU,target:VU,Tau:WU,tau:GU,tbrk:ZU,Tcaron:QU,tcaron:YU,Tcedil:XU,tcedil:JU,Tcy:ej,tcy:tj,tdot:nj,telrec:rj,Tfr:oj,tfr:ij,there4:sj,therefore:lj,Therefore:cj,Theta:aj,theta:uj,thetasym:dj,thetav:fj,thickapprox:pj,thicksim:hj,ThickSpace:mj,ThinSpace:gj,thinsp:yj,thkap:vj,thksim:bj,THORN:kj,thorn:wj,tilde:_j,Tilde:xj,TildeEqual:Cj,TildeFullEqual:Ej,TildeTilde:Sj,timesbar:Aj,timesb:Dj,times:Tj,timesd:Pj,tint:Lj,toea:Ij,topbot:Rj,topcir:Fj,top:Oj,Topf:Mj,topf:Nj,topfork:qj,tosa:$j,tprime:zj,trade:Kj,TRADE:Bj,triangle:Hj,triangledown:Uj,triangleleft:jj,trianglelefteq:Vj,triangleq:Wj,triangleright:Gj,trianglerighteq:Zj,tridot:Qj,trie:Yj,triminus:Xj,TripleDot:Jj,triplus:eV,trisb:tV,tritime:nV,trpezium:rV,Tscr:oV,tscr:iV,TScy:sV,tscy:lV,TSHcy:cV,tshcy:aV,Tstrok:uV,tstrok:dV,twixt:fV,twoheadleftarrow:pV,twoheadrightarrow:hV,Uacute:mV,uacute:gV,uarr:yV,Uarr:vV,uArr:bV,Uarrocir:kV,Ubrcy:wV,ubrcy:_V,Ubreve:xV,ubreve:CV,Ucirc:EV,ucirc:SV,Ucy:AV,ucy:DV,udarr:TV,Udblac:PV,udblac:LV,udhar:IV,ufisht:RV,Ufr:FV,ufr:OV,Ugrave:MV,ugrave:NV,uHar:qV,uharl:$V,uharr:zV,uhblk:KV,ulcorn:BV,ulcorner:HV,ulcrop:UV,ultri:jV,Umacr:VV,umacr:WV,uml:GV,UnderBar:ZV,UnderBrace:QV,UnderBracket:YV,UnderParenthesis:XV,Union:JV,UnionPlus:eW,Uogon:tW,uogon:nW,Uopf:rW,uopf:oW,UpArrowBar:iW,uparrow:sW,UpArrow:lW,Uparrow:cW,UpArrowDownArrow:aW,updownarrow:uW,UpDownArrow:dW,Updownarrow:fW,UpEquilibrium:pW,upharpoonleft:hW,upharpoonright:mW,uplus:gW,UpperLeftArrow:yW,UpperRightArrow:vW,upsi:bW,Upsi:kW,upsih:wW,Upsilon:_W,upsilon:xW,UpTeeArrow:CW,UpTee:EW,upuparrows:SW,urcorn:AW,urcorner:DW,urcrop:TW,Uring:PW,uring:LW,urtri:IW,Uscr:RW,uscr:FW,utdot:OW,Utilde:MW,utilde:NW,utri:qW,utrif:$W,uuarr:zW,Uuml:KW,uuml:BW,uwangle:HW,vangrt:UW,varepsilon:jW,varkappa:VW,varnothing:WW,varphi:GW,varpi:ZW,varpropto:QW,varr:YW,vArr:XW,varrho:JW,varsigma:eG,varsubsetneq:tG,varsubsetneqq:nG,varsupsetneq:rG,varsupsetneqq:oG,vartheta:iG,vartriangleleft:sG,vartriangleright:lG,vBar:cG,Vbar:aG,vBarv:uG,Vcy:dG,vcy:fG,vdash:pG,vDash:hG,Vdash:mG,VDash:gG,Vdashl:yG,veebar:vG,vee:bG,Vee:kG,veeeq:wG,vellip:_G,verbar:xG,Verbar:CG,vert:EG,Vert:SG,VerticalBar:AG,VerticalLine:DG,VerticalSeparator:TG,VerticalTilde:PG,VeryThinSpace:LG,Vfr:IG,vfr:RG,vltri:FG,vnsub:OG,vnsup:MG,Vopf:NG,vopf:qG,vprop:$G,vrtri:zG,Vscr:KG,vscr:BG,vsubnE:HG,vsubne:UG,vsupnE:jG,vsupne:VG,Vvdash:WG,vzigzag:GG,Wcirc:ZG,wcirc:QG,wedbar:YG,wedge:XG,Wedge:JG,wedgeq:eZ,weierp:tZ,Wfr:nZ,wfr:rZ,Wopf:oZ,wopf:iZ,wp:sZ,wr:lZ,wreath:cZ,Wscr:aZ,wscr:uZ,xcap:dZ,xcirc:fZ,xcup:pZ,xdtri:hZ,Xfr:mZ,xfr:gZ,xharr:yZ,xhArr:vZ,Xi:bZ,xi:kZ,xlarr:wZ,xlArr:_Z,xmap:xZ,xnis:CZ,xodot:EZ,Xopf:SZ,xopf:AZ,xoplus:DZ,xotime:TZ,xrarr:PZ,xrArr:LZ,Xscr:IZ,xscr:RZ,xsqcup:FZ,xuplus:OZ,xutri:MZ,xvee:NZ,xwedge:qZ,Yacute:$Z,yacute:zZ,YAcy:KZ,yacy:BZ,Ycirc:HZ,ycirc:UZ,Ycy:jZ,ycy:VZ,yen:WZ,Yfr:GZ,yfr:ZZ,YIcy:QZ,yicy:YZ,Yopf:XZ,yopf:JZ,Yscr:eQ,yscr:tQ,YUcy:nQ,yucy:rQ,yuml:oQ,Yuml:iQ,Zacute:sQ,zacute:lQ,Zcaron:cQ,zcaron:aQ,Zcy:uQ,zcy:dQ,Zdot:fQ,zdot:pQ,zeetrf:hQ,ZeroWidthSpace:mQ,Zeta:gQ,zeta:yQ,zfr:vQ,Zfr:bQ,ZHcy:kQ,zhcy:wQ,zigrarr:_Q,zopf:xQ,Zopf:CQ,Zscr:EQ,zscr:SQ,zwj:AQ,zwnj:DQ};(function(t){t.exports=TQ})(Ea);var Sa=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,vr={},fd={};function PQ(t){var e,n,r=fd[t];if(r)return r;for(r=fd[t]=[],e=0;e<128;e++)n=String.fromCharCode(e),/^[0-9a-z]$/i.test(n)?r.push(n):r.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<t.length;e++)r[t.charCodeAt(e)]=t[e];return r}function hs(t,e,n){var r,o,i,s,l,c="";for(typeof e!="string"&&(n=e,e=hs.defaultChars),typeof n>"u"&&(n=!0),l=PQ(e),r=0,o=t.length;r<o;r++){if(i=t.charCodeAt(r),n&&i===37&&r+2<o&&/^[0-9a-f]{2}$/i.test(t.slice(r+1,r+3))){c+=t.slice(r,r+3),r+=2;continue}if(i<128){c+=l[i];continue}if(i>=55296&&i<=57343){if(i>=55296&&i<=56319&&r+1<o&&(s=t.charCodeAt(r+1),s>=56320&&s<=57343)){c+=encodeURIComponent(t[r]+t[r+1]),r++;continue}c+="%EF%BF%BD";continue}c+=encodeURIComponent(t[r])}return c}hs.defaultChars=";/?:@&=+$,-_.!~*'()#";hs.componentChars="-_.!~*'()";var LQ=hs,pd={};function IQ(t){var e,n,r=pd[t];if(r)return r;for(r=pd[t]=[],e=0;e<128;e++)n=String.fromCharCode(e),r.push(n);for(e=0;e<t.length;e++)n=t.charCodeAt(e),r[n]="%"+("0"+n.toString(16).toUpperCase()).slice(-2);return r}function ms(t,e){var n;return typeof e!="string"&&(e=ms.defaultChars),n=IQ(e),t.replace(/(%[a-f0-9]{2})+/gi,function(r){var o,i,s,l,c,a,u,d="";for(o=0,i=r.length;o<i;o+=3){if(s=parseInt(r.slice(o+1,o+3),16),s<128){d+=n[s];continue}if((s&224)===192&&o+3<i&&(l=parseInt(r.slice(o+4,o+6),16),(l&192)===128)){u=s<<6&1984|l&63,u<128?d+="\uFFFD\uFFFD":d+=String.fromCharCode(u),o+=3;continue}if((s&240)===224&&o+6<i&&(l=parseInt(r.slice(o+4,o+6),16),c=parseInt(r.slice(o+7,o+9),16),(l&192)===128&&(c&192)===128)){u=s<<12&61440|l<<6&4032|c&63,u<2048||u>=55296&&u<=57343?d+="\uFFFD\uFFFD\uFFFD":d+=String.fromCharCode(u),o+=6;continue}if((s&248)===240&&o+9<i&&(l=parseInt(r.slice(o+4,o+6),16),c=parseInt(r.slice(o+7,o+9),16),a=parseInt(r.slice(o+10,o+12),16),(l&192)===128&&(c&192)===128&&(a&192)===128)){u=s<<18&1835008|l<<12&258048|c<<6&4032|a&63,u<65536||u>1114111?d+="\uFFFD\uFFFD\uFFFD\uFFFD":(u-=65536,d+=String.fromCharCode(55296+(u>>10),56320+(u&1023))),o+=9;continue}d+="\uFFFD"}return d})}ms.defaultChars=";/?:@&=+$,#";ms.componentChars="";var RQ=ms,FQ=function(e){var n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n};function Bi(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var OQ=/^([a-z0-9.+-]+:)/i,MQ=/:[0-9]*$/,NQ=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,qQ=["<",">",'"',"`"," ","\r",`
`,"	"],$Q=["{","}","|","\\","^","`"].concat(qQ),zQ=["'"].concat($Q),hd=["%","/","?",";","#"].concat(zQ),md=["/","?","#"],KQ=255,gd=/^[+a-z0-9A-Z_-]{0,63}$/,BQ=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,yd={javascript:!0,"javascript:":!0},vd={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function HQ(t,e){if(t&&t instanceof Bi)return t;var n=new Bi;return n.parse(t,e),n}Bi.prototype.parse=function(t,e){var n,r,o,i,s,l=t;if(l=l.trim(),!e&&t.split("#").length===1){var c=NQ.exec(l);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}var a=OQ.exec(l);if(a&&(a=a[0],o=a.toLowerCase(),this.protocol=a,l=l.substr(a.length)),(e||a||l.match(/^\/\/[^@\/]+@[^@\/]+/))&&(s=l.substr(0,2)==="//",s&&!(a&&yd[a])&&(l=l.substr(2),this.slashes=!0)),!yd[a]&&(s||a&&!vd[a])){var u=-1;for(n=0;n<md.length;n++)i=l.indexOf(md[n]),i!==-1&&(u===-1||i<u)&&(u=i);var d,f;for(u===-1?f=l.lastIndexOf("@"):f=l.lastIndexOf("@",u),f!==-1&&(d=l.slice(0,f),l=l.slice(f+1),this.auth=d),u=-1,n=0;n<hd.length;n++)i=l.indexOf(hd[n]),i!==-1&&(u===-1||i<u)&&(u=i);u===-1&&(u=l.length),l[u-1]===":"&&u--;var m=l.slice(0,u);l=l.slice(u),this.parseHost(m),this.hostname=this.hostname||"";var b=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!b){var v=this.hostname.split(/\./);for(n=0,r=v.length;n<r;n++){var x=v[n];if(!!x&&!x.match(gd)){for(var h="",p=0,g=x.length;p<g;p++)x.charCodeAt(p)>127?h+="x":h+=x[p];if(!h.match(gd)){var w=v.slice(0,n),k=v.slice(n+1),_=x.match(BQ);_&&(w.push(_[1]),k.unshift(_[2])),k.length&&(l=k.join(".")+l),this.hostname=w.join(".");break}}}}this.hostname.length>KQ&&(this.hostname=""),b&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var C=l.indexOf("#");C!==-1&&(this.hash=l.substr(C),l=l.slice(0,C));var A=l.indexOf("?");return A!==-1&&(this.search=l.substr(A),l=l.slice(0,A)),l&&(this.pathname=l),vd[o]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Bi.prototype.parseHost=function(t){var e=MQ.exec(t);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};var UQ=HQ;vr.encode=LQ;vr.decode=RQ;vr.format=FQ;vr.parse=UQ;var fn={},al,bd;function em(){return bd||(bd=1,al=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/),al}var ul,kd;function tm(){return kd||(kd=1,ul=/[\0-\x1F\x7F-\x9F]/),ul}var dl,wd;function jQ(){return wd||(wd=1,dl=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/),dl}var fl,_d;function nm(){return _d||(_d=1,fl=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/),fl}var xd;function VQ(){return xd||(xd=1,fn.Any=em(),fn.Cc=tm(),fn.Cf=jQ(),fn.P=Sa,fn.Z=nm()),fn}(function(t){function e(D){return Object.prototype.toString.call(D)}function n(D){return e(D)==="[object String]"}var r=Object.prototype.hasOwnProperty;function o(D,j){return r.call(D,j)}function i(D){var j=Array.prototype.slice.call(arguments,1);return j.forEach(function($){if(!!$){if(typeof $!="object")throw new TypeError($+"must be object");Object.keys($).forEach(function(Ae){D[Ae]=$[Ae]})}}),D}function s(D,j,$){return[].concat(D.slice(0,j),$,D.slice(j+1))}function l(D){return!(D>=55296&&D<=57343||D>=64976&&D<=65007||(D&65535)===65535||(D&65535)===65534||D>=0&&D<=8||D===11||D>=14&&D<=31||D>=127&&D<=159||D>1114111)}function c(D){if(D>65535){D-=65536;var j=55296+(D>>10),$=56320+(D&1023);return String.fromCharCode(j,$)}return String.fromCharCode(D)}var a=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,u=/&([a-z#][a-z0-9]{1,31});/gi,d=new RegExp(a.source+"|"+u.source,"gi"),f=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,m=Ea.exports;function b(D,j){var $=0;return o(m,j)?m[j]:j.charCodeAt(0)===35&&f.test(j)&&($=j[1].toLowerCase()==="x"?parseInt(j.slice(2),16):parseInt(j.slice(1),10),l($))?c($):D}function v(D){return D.indexOf("\\")<0?D:D.replace(a,"$1")}function x(D){return D.indexOf("\\")<0&&D.indexOf("&")<0?D:D.replace(d,function(j,$,Ae){return $||b(j,Ae)})}var h=/[&<>"]/,p=/[&<>"]/g,g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function w(D){return g[D]}function k(D){return h.test(D)?D.replace(p,w):D}var _=/[.?*+^$[\]\\(){}|-]/g;function C(D){return D.replace(_,"\\$&")}function A(D){switch(D){case 9:case 32:return!0}return!1}function N(D){if(D>=8192&&D<=8202)return!0;switch(D){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var L=Sa;function q(D){return L.test(D)}function ye(D){switch(D){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function we(D){return D=D.trim().replace(/\s+/g," "),"\u1E9E".toLowerCase()==="\u1E7E"&&(D=D.replace(/ẞ/g,"\xDF")),D.toLowerCase().toUpperCase()}t.lib={},t.lib.mdurl=vr,t.lib.ucmicro=VQ(),t.assign=i,t.isString=n,t.has=o,t.unescapeMd=v,t.unescapeAll=x,t.isValidEntityCode=l,t.fromCodePoint=c,t.escapeHtml=k,t.arrayReplaceAt=s,t.isSpace=A,t.isWhiteSpace=N,t.isMdAsciiPunct=ye,t.isPunctChar=q,t.escapeRE=C,t.normalizeReference=we})(H);var gs={},WQ=function(e,n,r){var o,i,s,l,c=-1,a=e.posMax,u=e.pos;for(e.pos=n+1,o=1;e.pos<a;){if(s=e.src.charCodeAt(e.pos),s===93&&(o--,o===0)){i=!0;break}if(l=e.pos,e.md.inline.skipToken(e),s===91){if(l===e.pos-1)o++;else if(r)return e.pos=u,-1}}return i&&(c=e.pos),e.pos=u,c},Cd=H.unescapeAll,GQ=function(e,n,r){var o,i,s=0,l=n,c={ok:!1,pos:0,lines:0,str:""};if(e.charCodeAt(n)===60){for(n++;n<r;){if(o=e.charCodeAt(n),o===10||o===60)return c;if(o===62)return c.pos=n+1,c.str=Cd(e.slice(l+1,n)),c.ok=!0,c;if(o===92&&n+1<r){n+=2;continue}n++}return c}for(i=0;n<r&&(o=e.charCodeAt(n),!(o===32||o<32||o===127));){if(o===92&&n+1<r){if(e.charCodeAt(n+1)===32)break;n+=2;continue}if(o===40&&(i++,i>32))return c;if(o===41){if(i===0)break;i--}n++}return l===n||i!==0||(c.str=Cd(e.slice(l,n)),c.lines=s,c.pos=n,c.ok=!0),c},ZQ=H.unescapeAll,QQ=function(e,n,r){var o,i,s=0,l=n,c={ok:!1,pos:0,lines:0,str:""};if(n>=r||(i=e.charCodeAt(n),i!==34&&i!==39&&i!==40))return c;for(n++,i===40&&(i=41);n<r;){if(o=e.charCodeAt(n),o===i)return c.pos=n+1,c.lines=s,c.str=ZQ(e.slice(l+1,n)),c.ok=!0,c;if(o===40&&i===41)return c;o===10?s++:o===92&&n+1<r&&(n++,e.charCodeAt(n)===10&&s++),n++}return c};gs.parseLinkLabel=WQ;gs.parseLinkDestination=GQ;gs.parseLinkTitle=QQ;var YQ=H.assign,XQ=H.unescapeAll,Tn=H.escapeHtml,Ct={};Ct.code_inline=function(t,e,n,r,o){var i=t[e];return"<code"+o.renderAttrs(i)+">"+Tn(t[e].content)+"</code>"};Ct.code_block=function(t,e,n,r,o){var i=t[e];return"<pre"+o.renderAttrs(i)+"><code>"+Tn(t[e].content)+`</code></pre>
`};Ct.fence=function(t,e,n,r,o){var i=t[e],s=i.info?XQ(i.info).trim():"",l="",c="",a,u,d,f,m;return s&&(d=s.split(/(\s+)/g),l=d[0],c=d.slice(2).join("")),n.highlight?a=n.highlight(i.content,l,c)||Tn(i.content):a=Tn(i.content),a.indexOf("<pre")===0?a+`
`:s?(u=i.attrIndex("class"),f=i.attrs?i.attrs.slice():[],u<0?f.push(["class",n.langPrefix+l]):(f[u]=f[u].slice(),f[u][1]+=" "+n.langPrefix+l),m={attrs:f},"<pre><code"+o.renderAttrs(m)+">"+a+`</code></pre>
`):"<pre><code"+o.renderAttrs(i)+">"+a+`</code></pre>
`};Ct.image=function(t,e,n,r,o){var i=t[e];return i.attrs[i.attrIndex("alt")][1]=o.renderInlineAsText(i.children,n,r),o.renderToken(t,e,n)};Ct.hardbreak=function(t,e,n){return n.xhtmlOut?`<br />
`:`<br>
`};Ct.softbreak=function(t,e,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};Ct.text=function(t,e){return Tn(t[e].content)};Ct.html_block=function(t,e){return t[e].content};Ct.html_inline=function(t,e){return t[e].content};function br(){this.rules=YQ({},Ct)}br.prototype.renderAttrs=function(e){var n,r,o;if(!e.attrs)return"";for(o="",n=0,r=e.attrs.length;n<r;n++)o+=" "+Tn(e.attrs[n][0])+'="'+Tn(e.attrs[n][1])+'"';return o};br.prototype.renderToken=function(e,n,r){var o,i="",s=!1,l=e[n];return l.hidden?"":(l.block&&l.nesting!==-1&&n&&e[n-1].hidden&&(i+=`
`),i+=(l.nesting===-1?"</":"<")+l.tag,i+=this.renderAttrs(l),l.nesting===0&&r.xhtmlOut&&(i+=" /"),l.block&&(s=!0,l.nesting===1&&n+1<e.length&&(o=e[n+1],(o.type==="inline"||o.hidden||o.nesting===-1&&o.tag===l.tag)&&(s=!1))),i+=s?`>
`:">",i)};br.prototype.renderInline=function(t,e,n){for(var r,o="",i=this.rules,s=0,l=t.length;s<l;s++)r=t[s].type,typeof i[r]<"u"?o+=i[r](t,s,e,n,this):o+=this.renderToken(t,s,e);return o};br.prototype.renderInlineAsText=function(t,e,n){for(var r="",o=0,i=t.length;o<i;o++)t[o].type==="text"?r+=t[o].content:t[o].type==="image"?r+=this.renderInlineAsText(t[o].children,e,n):t[o].type==="softbreak"&&(r+=`
`);return r};br.prototype.render=function(t,e,n){var r,o,i,s="",l=this.rules;for(r=0,o=t.length;r<o;r++)i=t[r].type,i==="inline"?s+=this.renderInline(t[r].children,e,n):typeof l[i]<"u"?s+=l[t[r].type](t,r,e,n,this):s+=this.renderToken(t,r,e,n);return s};var JQ=br;function mt(){this.__rules__=[],this.__cache__=null}mt.prototype.__find__=function(t){for(var e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===t)return e;return-1};mt.prototype.__compile__=function(){var t=this,e=[""];t.__rules__.forEach(function(n){!n.enabled||n.alt.forEach(function(r){e.indexOf(r)<0&&e.push(r)})}),t.__cache__={},e.forEach(function(n){t.__cache__[n]=[],t.__rules__.forEach(function(r){!r.enabled||n&&r.alt.indexOf(n)<0||t.__cache__[n].push(r.fn)})})};mt.prototype.at=function(t,e,n){var r=this.__find__(t),o=n||{};if(r===-1)throw new Error("Parser rule not found: "+t);this.__rules__[r].fn=e,this.__rules__[r].alt=o.alt||[],this.__cache__=null};mt.prototype.before=function(t,e,n,r){var o=this.__find__(t),i=r||{};if(o===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(o,0,{name:e,enabled:!0,fn:n,alt:i.alt||[]}),this.__cache__=null};mt.prototype.after=function(t,e,n,r){var o=this.__find__(t),i=r||{};if(o===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(o+1,0,{name:e,enabled:!0,fn:n,alt:i.alt||[]}),this.__cache__=null};mt.prototype.push=function(t,e,n){var r=n||{};this.__rules__.push({name:t,enabled:!0,fn:e,alt:r.alt||[]}),this.__cache__=null};mt.prototype.enable=function(t,e){Array.isArray(t)||(t=[t]);var n=[];return t.forEach(function(r){var o=this.__find__(r);if(o<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!0,n.push(r)},this),this.__cache__=null,n};mt.prototype.enableOnly=function(t,e){Array.isArray(t)||(t=[t]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(t,e)};mt.prototype.disable=function(t,e){Array.isArray(t)||(t=[t]);var n=[];return t.forEach(function(r){var o=this.__find__(r);if(o<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[o].enabled=!1,n.push(r)},this),this.__cache__=null,n};mt.prototype.getRules=function(t){return this.__cache__===null&&this.__compile__(),this.__cache__[t]||[]};var Aa=mt,eY=/\r\n?|\n/g,tY=/\0/g,nY=function(e){var n;n=e.src.replace(eY,`
`),n=n.replace(tY,"\uFFFD"),e.src=n},rY=function(e){var n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)},oY=function(e){var n=e.tokens,r,o,i;for(o=0,i=n.length;o<i;o++)r=n[o],r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)},iY=H.arrayReplaceAt;function sY(t){return/^<a[>\s]/i.test(t)}function lY(t){return/^<\/a\s*>/i.test(t)}var cY=function(e){var n,r,o,i,s,l,c,a,u,d,f,m,b,v,x,h,p=e.tokens,g;if(!!e.md.options.linkify){for(r=0,o=p.length;r<o;r++)if(!(p[r].type!=="inline"||!e.md.linkify.pretest(p[r].content)))for(i=p[r].children,b=0,n=i.length-1;n>=0;n--){if(l=i[n],l.type==="link_close"){for(n--;i[n].level!==l.level&&i[n].type!=="link_open";)n--;continue}if(l.type==="html_inline"&&(sY(l.content)&&b>0&&b--,lY(l.content)&&b++),!(b>0)&&l.type==="text"&&e.md.linkify.test(l.content)){for(u=l.content,g=e.md.linkify.match(u),c=[],m=l.level,f=0,g.length>0&&g[0].index===0&&n>0&&i[n-1].type==="text_special"&&(g=g.slice(1)),a=0;a<g.length;a++)v=g[a].url,x=e.md.normalizeLink(v),e.md.validateLink(x)&&(h=g[a].text,g[a].schema?g[a].schema==="mailto:"&&!/^mailto:/i.test(h)?h=e.md.normalizeLinkText("mailto:"+h).replace(/^mailto:/,""):h=e.md.normalizeLinkText(h):h=e.md.normalizeLinkText("http://"+h).replace(/^http:\/\//,""),d=g[a].index,d>f&&(s=new e.Token("text","",0),s.content=u.slice(f,d),s.level=m,c.push(s)),s=new e.Token("link_open","a",1),s.attrs=[["href",x]],s.level=m++,s.markup="linkify",s.info="auto",c.push(s),s=new e.Token("text","",0),s.content=h,s.level=m,c.push(s),s=new e.Token("link_close","a",-1),s.level=--m,s.markup="linkify",s.info="auto",c.push(s),f=g[a].lastIndex);f<u.length&&(s=new e.Token("text","",0),s.content=u.slice(f),s.level=m,c.push(s)),p[r].children=i=iY(i,n,c)}}}},rm=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,aY=/\((c|tm|r)\)/i,uY=/\((c|tm|r)\)/ig,dY={c:"\xA9",r:"\xAE",tm:"\u2122"};function fY(t,e){return dY[e.toLowerCase()]}function pY(t){var e,n,r=0;for(e=t.length-1;e>=0;e--)n=t[e],n.type==="text"&&!r&&(n.content=n.content.replace(uY,fY)),n.type==="link_open"&&n.info==="auto"&&r--,n.type==="link_close"&&n.info==="auto"&&r++}function hY(t){var e,n,r=0;for(e=t.length-1;e>=0;e--)n=t[e],n.type==="text"&&!r&&rm.test(n.content)&&(n.content=n.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1\u2014").replace(/(^|\s)--(?=\s|$)/mg,"$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1\u2013")),n.type==="link_open"&&n.info==="auto"&&r--,n.type==="link_close"&&n.info==="auto"&&r++}var mY=function(e){var n;if(!!e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(aY.test(e.tokens[n].content)&&pY(e.tokens[n].children),rm.test(e.tokens[n].content)&&hY(e.tokens[n].children))},Ed=H.isWhiteSpace,Sd=H.isPunctChar,Ad=H.isMdAsciiPunct,gY=/['"]/,Dd=/['"]/g,Td="\u2019";function Qo(t,e,n){return t.slice(0,e)+n+t.slice(e+1)}function yY(t,e){var n,r,o,i,s,l,c,a,u,d,f,m,b,v,x,h,p,g,w,k,_;for(w=[],n=0;n<t.length;n++){for(r=t[n],c=t[n].level,p=w.length-1;p>=0&&!(w[p].level<=c);p--);if(w.length=p+1,r.type!=="text")continue;o=r.content,s=0,l=o.length;e:for(;s<l&&(Dd.lastIndex=s,i=Dd.exec(o),!!i);){if(x=h=!0,s=i.index+1,g=i[0]==="'",u=32,i.index-1>=0)u=o.charCodeAt(i.index-1);else for(p=n-1;p>=0&&!(t[p].type==="softbreak"||t[p].type==="hardbreak");p--)if(!!t[p].content){u=t[p].content.charCodeAt(t[p].content.length-1);break}if(d=32,s<l)d=o.charCodeAt(s);else for(p=n+1;p<t.length&&!(t[p].type==="softbreak"||t[p].type==="hardbreak");p++)if(!!t[p].content){d=t[p].content.charCodeAt(0);break}if(f=Ad(u)||Sd(String.fromCharCode(u)),m=Ad(d)||Sd(String.fromCharCode(d)),b=Ed(u),v=Ed(d),v?x=!1:m&&(b||f||(x=!1)),b?h=!1:f&&(v||m||(h=!1)),d===34&&i[0]==='"'&&u>=48&&u<=57&&(h=x=!1),x&&h&&(x=f,h=m),!x&&!h){g&&(r.content=Qo(r.content,i.index,Td));continue}if(h){for(p=w.length-1;p>=0&&(a=w[p],!(w[p].level<c));p--)if(a.single===g&&w[p].level===c){a=w[p],g?(k=e.md.options.quotes[2],_=e.md.options.quotes[3]):(k=e.md.options.quotes[0],_=e.md.options.quotes[1]),r.content=Qo(r.content,i.index,_),t[a.token].content=Qo(t[a.token].content,a.pos,k),s+=_.length-1,a.token===n&&(s+=k.length-1),o=r.content,l=o.length,w.length=p;continue e}}x?w.push({token:n,pos:i.index,single:g,level:c}):h&&g&&(r.content=Qo(r.content,i.index,Td))}}}var vY=function(e){var n;if(!!e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!gY.test(e.tokens[n].content)||yY(e.tokens[n].children,e)},bY=function(e){var n,r,o,i,s,l,c=e.tokens;for(n=0,r=c.length;n<r;n++)if(c[n].type==="inline"){for(o=c[n].children,s=o.length,i=0;i<s;i++)o[i].type==="text_special"&&(o[i].type="text");for(i=l=0;i<s;i++)o[i].type==="text"&&i+1<s&&o[i+1].type==="text"?o[i+1].content=o[i].content+o[i+1].content:(i!==l&&(o[l]=o[i]),l++);i!==l&&(o.length=l)}};function kr(t,e,n){this.type=t,this.tag=e,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}kr.prototype.attrIndex=function(e){var n,r,o;if(!this.attrs)return-1;for(n=this.attrs,r=0,o=n.length;r<o;r++)if(n[r][0]===e)return r;return-1};kr.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};kr.prototype.attrSet=function(e,n){var r=this.attrIndex(e),o=[e,n];r<0?this.attrPush(o):this.attrs[r]=o};kr.prototype.attrGet=function(e){var n=this.attrIndex(e),r=null;return n>=0&&(r=this.attrs[n][1]),r};kr.prototype.attrJoin=function(e,n){var r=this.attrIndex(e);r<0?this.attrPush([e,n]):this.attrs[r][1]=this.attrs[r][1]+" "+n};var Da=kr,kY=Da;function om(t,e,n){this.src=t,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=e}om.prototype.Token=kY;var wY=om,_Y=Aa,pl=[["normalize",nY],["block",rY],["inline",oY],["linkify",cY],["replacements",mY],["smartquotes",vY],["text_join",bY]];function Ta(){this.ruler=new _Y;for(var t=0;t<pl.length;t++)this.ruler.push(pl[t][0],pl[t][1])}Ta.prototype.process=function(t){var e,n,r;for(r=this.ruler.getRules(""),e=0,n=r.length;e<n;e++)r[e](t)};Ta.prototype.State=wY;var xY=Ta,hl=H.isSpace;function ml(t,e){var n=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];return t.src.slice(n,r)}function Pd(t){var e=[],n=0,r=t.length,o,i=!1,s=0,l="";for(o=t.charCodeAt(n);n<r;)o===124&&(i?(l+=t.substring(s,n-1),s=n):(e.push(l+t.substring(s,n)),l="",s=n+1)),i=o===92,n++,o=t.charCodeAt(n);return e.push(l+t.substring(s)),e}var CY=function(e,n,r,o){var i,s,l,c,a,u,d,f,m,b,v,x,h,p,g,w,k,_;if(n+2>r||(u=n+1,e.sCount[u]<e.blkIndent)||e.sCount[u]-e.blkIndent>=4||(l=e.bMarks[u]+e.tShift[u],l>=e.eMarks[u])||(k=e.src.charCodeAt(l++),k!==124&&k!==45&&k!==58)||l>=e.eMarks[u]||(_=e.src.charCodeAt(l++),_!==124&&_!==45&&_!==58&&!hl(_))||k===45&&hl(_))return!1;for(;l<e.eMarks[u];){if(i=e.src.charCodeAt(l),i!==124&&i!==45&&i!==58&&!hl(i))return!1;l++}for(s=ml(e,n+1),d=s.split("|"),b=[],c=0;c<d.length;c++){if(v=d[c].trim(),!v){if(c===0||c===d.length-1)continue;return!1}if(!/^:?-+:?$/.test(v))return!1;v.charCodeAt(v.length-1)===58?b.push(v.charCodeAt(0)===58?"center":"right"):v.charCodeAt(0)===58?b.push("left"):b.push("")}if(s=ml(e,n).trim(),s.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4||(d=Pd(s),d.length&&d[0]===""&&d.shift(),d.length&&d[d.length-1]===""&&d.pop(),f=d.length,f===0||f!==b.length))return!1;if(o)return!0;for(p=e.parentType,e.parentType="table",w=e.md.block.ruler.getRules("blockquote"),m=e.push("table_open","table",1),m.map=x=[n,0],m=e.push("thead_open","thead",1),m.map=[n,n+1],m=e.push("tr_open","tr",1),m.map=[n,n+1],c=0;c<d.length;c++)m=e.push("th_open","th",1),b[c]&&(m.attrs=[["style","text-align:"+b[c]]]),m=e.push("inline","",0),m.content=d[c].trim(),m.children=[],m=e.push("th_close","th",-1);for(m=e.push("tr_close","tr",-1),m=e.push("thead_close","thead",-1),u=n+2;u<r&&!(e.sCount[u]<e.blkIndent);u++){for(g=!1,c=0,a=w.length;c<a;c++)if(w[c](e,u,r,!0)){g=!0;break}if(g||(s=ml(e,u).trim(),!s)||e.sCount[u]-e.blkIndent>=4)break;for(d=Pd(s),d.length&&d[0]===""&&d.shift(),d.length&&d[d.length-1]===""&&d.pop(),u===n+2&&(m=e.push("tbody_open","tbody",1),m.map=h=[n+2,0]),m=e.push("tr_open","tr",1),m.map=[u,u+1],c=0;c<f;c++)m=e.push("td_open","td",1),b[c]&&(m.attrs=[["style","text-align:"+b[c]]]),m=e.push("inline","",0),m.content=d[c]?d[c].trim():"",m.children=[],m=e.push("td_close","td",-1);m=e.push("tr_close","tr",-1)}return h&&(m=e.push("tbody_close","tbody",-1),h[1]=u),m=e.push("table_close","table",-1),x[1]=u,e.parentType=p,e.line=u,!0},EY=function(e,n,r){var o,i,s;if(e.sCount[n]-e.blkIndent<4)return!1;for(i=o=n+1;o<r;){if(e.isEmpty(o)){o++;continue}if(e.sCount[o]-e.blkIndent>=4){o++,i=o;continue}break}return e.line=i,s=e.push("code_block","code",0),s.content=e.getLines(n,i,4+e.blkIndent,!1)+`
`,s.map=[n,e.line],!0},SY=function(e,n,r,o){var i,s,l,c,a,u,d,f=!1,m=e.bMarks[n]+e.tShift[n],b=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||m+3>b||(i=e.src.charCodeAt(m),i!==126&&i!==96)||(a=m,m=e.skipChars(m,i),s=m-a,s<3)||(d=e.src.slice(a,m),l=e.src.slice(m,b),i===96&&l.indexOf(String.fromCharCode(i))>=0))return!1;if(o)return!0;for(c=n;c++,!(c>=r||(m=a=e.bMarks[c]+e.tShift[c],b=e.eMarks[c],m<b&&e.sCount[c]<e.blkIndent));)if(e.src.charCodeAt(m)===i&&!(e.sCount[c]-e.blkIndent>=4)&&(m=e.skipChars(m,i),!(m-a<s)&&(m=e.skipSpaces(m),!(m<b)))){f=!0;break}return s=e.sCount[n],e.line=c+(f?1:0),u=e.push("fence","code",0),u.info=l,u.content=e.getLines(n+1,c,s,!0),u.markup=d,u.map=[n,e.line],!0},Ld=H.isSpace,AY=function(e,n,r,o){var i,s,l,c,a,u,d,f,m,b,v,x,h,p,g,w,k,_,C,A,N=e.lineMax,L=e.bMarks[n]+e.tShift[n],q=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(L++)!==62)return!1;if(o)return!0;for(c=m=e.sCount[n]+1,e.src.charCodeAt(L)===32?(L++,c++,m++,i=!1,w=!0):e.src.charCodeAt(L)===9?(w=!0,(e.bsCount[n]+m)%4===3?(L++,c++,m++,i=!1):i=!0):w=!1,b=[e.bMarks[n]],e.bMarks[n]=L;L<q&&(s=e.src.charCodeAt(L),Ld(s));){s===9?m+=4-(m+e.bsCount[n]+(i?1:0))%4:m++;L++}for(v=[e.bsCount[n]],e.bsCount[n]=e.sCount[n]+1+(w?1:0),u=L>=q,p=[e.sCount[n]],e.sCount[n]=m-c,g=[e.tShift[n]],e.tShift[n]=L-e.bMarks[n],_=e.md.block.ruler.getRules("blockquote"),h=e.parentType,e.parentType="blockquote",f=n+1;f<r&&(A=e.sCount[f]<e.blkIndent,L=e.bMarks[f]+e.tShift[f],q=e.eMarks[f],!(L>=q));f++){if(e.src.charCodeAt(L++)===62&&!A){for(c=m=e.sCount[f]+1,e.src.charCodeAt(L)===32?(L++,c++,m++,i=!1,w=!0):e.src.charCodeAt(L)===9?(w=!0,(e.bsCount[f]+m)%4===3?(L++,c++,m++,i=!1):i=!0):w=!1,b.push(e.bMarks[f]),e.bMarks[f]=L;L<q&&(s=e.src.charCodeAt(L),Ld(s));){s===9?m+=4-(m+e.bsCount[f]+(i?1:0))%4:m++;L++}u=L>=q,v.push(e.bsCount[f]),e.bsCount[f]=e.sCount[f]+1+(w?1:0),p.push(e.sCount[f]),e.sCount[f]=m-c,g.push(e.tShift[f]),e.tShift[f]=L-e.bMarks[f];continue}if(u)break;for(k=!1,l=0,a=_.length;l<a;l++)if(_[l](e,f,r,!0)){k=!0;break}if(k){e.lineMax=f,e.blkIndent!==0&&(b.push(e.bMarks[f]),v.push(e.bsCount[f]),g.push(e.tShift[f]),p.push(e.sCount[f]),e.sCount[f]-=e.blkIndent);break}b.push(e.bMarks[f]),v.push(e.bsCount[f]),g.push(e.tShift[f]),p.push(e.sCount[f]),e.sCount[f]=-1}for(x=e.blkIndent,e.blkIndent=0,C=e.push("blockquote_open","blockquote",1),C.markup=">",C.map=d=[n,0],e.md.block.tokenize(e,n,f),C=e.push("blockquote_close","blockquote",-1),C.markup=">",e.lineMax=N,e.parentType=h,d[1]=e.line,l=0;l<g.length;l++)e.bMarks[l+n]=b[l],e.tShift[l+n]=g[l],e.sCount[l+n]=p[l],e.bsCount[l+n]=v[l];return e.blkIndent=x,!0},DY=H.isSpace,TY=function(e,n,r,o){var i,s,l,c,a=e.bMarks[n]+e.tShift[n],u=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||(i=e.src.charCodeAt(a++),i!==42&&i!==45&&i!==95))return!1;for(s=1;a<u;){if(l=e.src.charCodeAt(a++),l!==i&&!DY(l))return!1;l===i&&s++}return s<3?!1:(o||(e.line=n+1,c=e.push("hr","hr",0),c.map=[n,e.line],c.markup=Array(s+1).join(String.fromCharCode(i))),!0)},im=H.isSpace;function Id(t,e){var n,r,o,i;return r=t.bMarks[e]+t.tShift[e],o=t.eMarks[e],n=t.src.charCodeAt(r++),n!==42&&n!==45&&n!==43||r<o&&(i=t.src.charCodeAt(r),!im(i))?-1:r}function Rd(t,e){var n,r=t.bMarks[e]+t.tShift[e],o=r,i=t.eMarks[e];if(o+1>=i||(n=t.src.charCodeAt(o++),n<48||n>57))return-1;for(;;){if(o>=i)return-1;if(n=t.src.charCodeAt(o++),n>=48&&n<=57){if(o-r>=10)return-1;continue}if(n===41||n===46)break;return-1}return o<i&&(n=t.src.charCodeAt(o),!im(n))?-1:o}function PY(t,e){var n,r,o=t.level+2;for(n=e+2,r=t.tokens.length-2;n<r;n++)t.tokens[n].level===o&&t.tokens[n].type==="paragraph_open"&&(t.tokens[n+2].hidden=!0,t.tokens[n].hidden=!0,n+=2)}var LY=function(e,n,r,o){var i,s,l,c,a,u,d,f,m,b,v,x,h,p,g,w,k,_,C,A,N,L,q,ye,we,D,j,$,Ae=!1,I=!0;if(e.sCount[n]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[n]-e.listIndent>=4&&e.sCount[n]<e.blkIndent)return!1;if(o&&e.parentType==="paragraph"&&e.sCount[n]>=e.blkIndent&&(Ae=!0),(q=Rd(e,n))>=0){if(d=!0,we=e.bMarks[n]+e.tShift[n],h=Number(e.src.slice(we,q-1)),Ae&&h!==1)return!1}else if((q=Id(e,n))>=0)d=!1;else return!1;if(Ae&&e.skipSpaces(q)>=e.eMarks[n])return!1;if(x=e.src.charCodeAt(q-1),o)return!0;for(v=e.tokens.length,d?($=e.push("ordered_list_open","ol",1),h!==1&&($.attrs=[["start",h]])):$=e.push("bullet_list_open","ul",1),$.map=b=[n,0],$.markup=String.fromCharCode(x),g=n,ye=!1,j=e.md.block.ruler.getRules("list"),_=e.parentType,e.parentType="list";g<r;){for(L=q,p=e.eMarks[g],u=w=e.sCount[g]+q-(e.bMarks[n]+e.tShift[n]);L<p;){if(i=e.src.charCodeAt(L),i===9)w+=4-(w+e.bsCount[g])%4;else if(i===32)w++;else break;L++}if(s=L,s>=p?a=1:a=w-u,a>4&&(a=1),c=u+a,$=e.push("list_item_open","li",1),$.markup=String.fromCharCode(x),$.map=f=[n,0],d&&($.info=e.src.slice(we,q-1)),N=e.tight,A=e.tShift[n],C=e.sCount[n],k=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=c,e.tight=!0,e.tShift[n]=s-e.bMarks[n],e.sCount[n]=w,s>=p&&e.isEmpty(n+1)?e.line=Math.min(e.line+2,r):e.md.block.tokenize(e,n,r,!0),(!e.tight||ye)&&(I=!1),ye=e.line-n>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=k,e.tShift[n]=A,e.sCount[n]=C,e.tight=N,$=e.push("list_item_close","li",-1),$.markup=String.fromCharCode(x),g=n=e.line,f[1]=g,s=e.bMarks[n],g>=r||e.sCount[g]<e.blkIndent||e.sCount[n]-e.blkIndent>=4)break;for(D=!1,l=0,m=j.length;l<m;l++)if(j[l](e,g,r,!0)){D=!0;break}if(D)break;if(d){if(q=Rd(e,g),q<0)break;we=e.bMarks[g]+e.tShift[g]}else if(q=Id(e,g),q<0)break;if(x!==e.src.charCodeAt(q-1))break}return d?$=e.push("ordered_list_close","ol",-1):$=e.push("bullet_list_close","ul",-1),$.markup=String.fromCharCode(x),b[1]=g,e.line=g,e.parentType=_,I&&PY(e,v),!0},IY=H.normalizeReference,Yo=H.isSpace,RY=function(e,n,r,o){var i,s,l,c,a,u,d,f,m,b,v,x,h,p,g,w,k=0,_=e.bMarks[n]+e.tShift[n],C=e.eMarks[n],A=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(_)!==91)return!1;for(;++_<C;)if(e.src.charCodeAt(_)===93&&e.src.charCodeAt(_-1)!==92){if(_+1===C||e.src.charCodeAt(_+1)!==58)return!1;break}for(c=e.lineMax,g=e.md.block.ruler.getRules("reference"),b=e.parentType,e.parentType="reference";A<c&&!e.isEmpty(A);A++)if(!(e.sCount[A]-e.blkIndent>3)&&!(e.sCount[A]<0)){for(p=!1,u=0,d=g.length;u<d;u++)if(g[u](e,A,c,!0)){p=!0;break}if(p)break}for(h=e.getLines(n,A,e.blkIndent,!1).trim(),C=h.length,_=1;_<C;_++){if(i=h.charCodeAt(_),i===91)return!1;if(i===93){m=_;break}else i===10?k++:i===92&&(_++,_<C&&h.charCodeAt(_)===10&&k++)}if(m<0||h.charCodeAt(m+1)!==58)return!1;for(_=m+2;_<C;_++)if(i=h.charCodeAt(_),i===10)k++;else if(!Yo(i))break;if(v=e.md.helpers.parseLinkDestination(h,_,C),!v.ok||(a=e.md.normalizeLink(v.str),!e.md.validateLink(a)))return!1;for(_=v.pos,k+=v.lines,s=_,l=k,x=_;_<C;_++)if(i=h.charCodeAt(_),i===10)k++;else if(!Yo(i))break;for(v=e.md.helpers.parseLinkTitle(h,_,C),_<C&&x!==_&&v.ok?(w=v.str,_=v.pos,k+=v.lines):(w="",_=s,k=l);_<C&&(i=h.charCodeAt(_),!!Yo(i));)_++;if(_<C&&h.charCodeAt(_)!==10&&w)for(w="",_=s,k=l;_<C&&(i=h.charCodeAt(_),!!Yo(i));)_++;return _<C&&h.charCodeAt(_)!==10||(f=IY(h.slice(1,m)),!f)?!1:(o||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[f]>"u"&&(e.env.references[f]={title:w,href:a}),e.parentType=b,e.line=n+k+1),!0)},FY=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],ys={},OY="[a-zA-Z_:][a-zA-Z0-9:._-]*",MY="[^\"'=<>`\\x00-\\x20]+",NY="'[^']*'",qY='"[^"]*"',$Y="(?:"+MY+"|"+NY+"|"+qY+")",zY="(?:\\s+"+OY+"(?:\\s*=\\s*"+$Y+")?)",sm="<[A-Za-z][A-Za-z0-9\\-]*"+zY+"*\\s*\\/?>",lm="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",KY="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",BY="<[?][\\s\\S]*?[?]>",HY="<![A-Z]+\\s+[^>]*>",UY="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",jY=new RegExp("^(?:"+sm+"|"+lm+"|"+KY+"|"+BY+"|"+HY+"|"+UY+")"),VY=new RegExp("^(?:"+sm+"|"+lm+")");ys.HTML_TAG_RE=jY;ys.HTML_OPEN_CLOSE_TAG_RE=VY;var WY=FY,GY=ys.HTML_OPEN_CLOSE_TAG_RE,Nn=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+WY.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(GY.source+"\\s*$"),/^$/,!1]],ZY=function(e,n,r,o){var i,s,l,c,a=e.bMarks[n]+e.tShift[n],u=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(a)!==60)return!1;for(c=e.src.slice(a,u),i=0;i<Nn.length&&!Nn[i][0].test(c);i++);if(i===Nn.length)return!1;if(o)return Nn[i][2];if(s=n+1,!Nn[i][1].test(c)){for(;s<r&&!(e.sCount[s]<e.blkIndent);s++)if(a=e.bMarks[s]+e.tShift[s],u=e.eMarks[s],c=e.src.slice(a,u),Nn[i][1].test(c)){c.length!==0&&s++;break}}return e.line=s,l=e.push("html_block","",0),l.map=[n,s],l.content=e.getLines(n,s,e.blkIndent,!0),!0},Fd=H.isSpace,QY=function(e,n,r,o){var i,s,l,c,a=e.bMarks[n]+e.tShift[n],u=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||(i=e.src.charCodeAt(a),i!==35||a>=u))return!1;for(s=1,i=e.src.charCodeAt(++a);i===35&&a<u&&s<=6;)s++,i=e.src.charCodeAt(++a);return s>6||a<u&&!Fd(i)?!1:(o||(u=e.skipSpacesBack(u,a),l=e.skipCharsBack(u,35,a),l>a&&Fd(e.src.charCodeAt(l-1))&&(u=l),e.line=n+1,c=e.push("heading_open","h"+String(s),1),c.markup="########".slice(0,s),c.map=[n,e.line],c=e.push("inline","",0),c.content=e.src.slice(a,u).trim(),c.map=[n,e.line],c.children=[],c=e.push("heading_close","h"+String(s),-1),c.markup="########".slice(0,s)),!0)},YY=function(e,n,r){var o,i,s,l,c,a,u,d,f,m=n+1,b,v=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;for(b=e.parentType,e.parentType="paragraph";m<r&&!e.isEmpty(m);m++)if(!(e.sCount[m]-e.blkIndent>3)){if(e.sCount[m]>=e.blkIndent&&(a=e.bMarks[m]+e.tShift[m],u=e.eMarks[m],a<u&&(f=e.src.charCodeAt(a),(f===45||f===61)&&(a=e.skipChars(a,f),a=e.skipSpaces(a),a>=u)))){d=f===61?1:2;break}if(!(e.sCount[m]<0)){for(i=!1,s=0,l=v.length;s<l;s++)if(v[s](e,m,r,!0)){i=!0;break}if(i)break}}return d?(o=e.getLines(n,m,e.blkIndent,!1).trim(),e.line=m+1,c=e.push("heading_open","h"+String(d),1),c.markup=String.fromCharCode(f),c.map=[n,e.line],c=e.push("inline","",0),c.content=o,c.map=[n,e.line-1],c.children=[],c=e.push("heading_close","h"+String(d),-1),c.markup=String.fromCharCode(f),e.parentType=b,!0):!1},XY=function(e,n){var r,o,i,s,l,c,a=n+1,u=e.md.block.ruler.getRules("paragraph"),d=e.lineMax;for(c=e.parentType,e.parentType="paragraph";a<d&&!e.isEmpty(a);a++)if(!(e.sCount[a]-e.blkIndent>3)&&!(e.sCount[a]<0)){for(o=!1,i=0,s=u.length;i<s;i++)if(u[i](e,a,d,!0)){o=!0;break}if(o)break}return r=e.getLines(n,a,e.blkIndent,!1).trim(),e.line=a,l=e.push("paragraph_open","p",1),l.map=[n,e.line],l=e.push("inline","",0),l.content=r,l.map=[n,e.line],l.children=[],l=e.push("paragraph_close","p",-1),e.parentType=c,!0},cm=Da,vs=H.isSpace;function Et(t,e,n,r){var o,i,s,l,c,a,u,d;for(this.src=t,this.md=e,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",i=this.src,d=!1,s=l=a=u=0,c=i.length;l<c;l++){if(o=i.charCodeAt(l),!d)if(vs(o)){a++,o===9?u+=4-u%4:u++;continue}else d=!0;(o===10||l===c-1)&&(o!==10&&l++,this.bMarks.push(s),this.eMarks.push(l),this.tShift.push(a),this.sCount.push(u),this.bsCount.push(0),d=!1,a=0,u=0,s=l+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Et.prototype.push=function(t,e,n){var r=new cm(t,e,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r};Et.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};Et.prototype.skipEmptyLines=function(e){for(var n=this.lineMax;e<n&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};Et.prototype.skipSpaces=function(e){for(var n,r=this.src.length;e<r&&(n=this.src.charCodeAt(e),!!vs(n));e++);return e};Et.prototype.skipSpacesBack=function(e,n){if(e<=n)return e;for(;e>n;)if(!vs(this.src.charCodeAt(--e)))return e+1;return e};Et.prototype.skipChars=function(e,n){for(var r=this.src.length;e<r&&this.src.charCodeAt(e)===n;e++);return e};Et.prototype.skipCharsBack=function(e,n,r){if(e<=r)return e;for(;e>r;)if(n!==this.src.charCodeAt(--e))return e+1;return e};Et.prototype.getLines=function(e,n,r,o){var i,s,l,c,a,u,d,f=e;if(e>=n)return"";for(u=new Array(n-e),i=0;f<n;f++,i++){for(s=0,d=c=this.bMarks[f],f+1<n||o?a=this.eMarks[f]+1:a=this.eMarks[f];c<a&&s<r;){if(l=this.src.charCodeAt(c),vs(l))l===9?s+=4-(s+this.bsCount[f])%4:s++;else if(c-d<this.tShift[f])s++;else break;c++}s>r?u[i]=new Array(s-r+1).join(" ")+this.src.slice(c,a):u[i]=this.src.slice(c,a)}return u.join("")};Et.prototype.Token=cm;var JY=Et,eX=Aa,Xo=[["table",CY,["paragraph","reference"]],["code",EY],["fence",SY,["paragraph","reference","blockquote","list"]],["blockquote",AY,["paragraph","reference","blockquote","list"]],["hr",TY,["paragraph","reference","blockquote","list"]],["list",LY,["paragraph","reference","blockquote"]],["reference",RY],["html_block",ZY,["paragraph","reference","blockquote"]],["heading",QY,["paragraph","reference","blockquote"]],["lheading",YY],["paragraph",XY]];function bs(){this.ruler=new eX;for(var t=0;t<Xo.length;t++)this.ruler.push(Xo[t][0],Xo[t][1],{alt:(Xo[t][2]||[]).slice()})}bs.prototype.tokenize=function(t,e,n){for(var r,o,i=this.ruler.getRules(""),s=i.length,l=e,c=!1,a=t.md.options.maxNesting;l<n&&(t.line=l=t.skipEmptyLines(l),!(l>=n||t.sCount[l]<t.blkIndent));){if(t.level>=a){t.line=n;break}for(o=0;o<s&&(r=i[o](t,l,n,!1),!r);o++);t.tight=!c,t.isEmpty(t.line-1)&&(c=!0),l=t.line,l<n&&t.isEmpty(l)&&(c=!0,l++,t.line=l)}};bs.prototype.parse=function(t,e,n,r){var o;!t||(o=new this.State(t,e,n,r),this.tokenize(o,o.line,o.lineMax))};bs.prototype.State=JY;var tX=bs;function nX(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}var rX=function(e,n){for(var r=e.pos;r<e.posMax&&!nX(e.src.charCodeAt(r));)r++;return r===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,r)),e.pos=r,!0)},oX=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i,iX=function(e,n){var r,o,i,s,l,c,a,u;return!e.md.options.linkify||e.linkLevel>0||(r=e.pos,o=e.posMax,r+3>o)||e.src.charCodeAt(r)!==58||e.src.charCodeAt(r+1)!==47||e.src.charCodeAt(r+2)!==47||(i=e.pending.match(oX),!i)||(s=i[1],l=e.md.linkify.matchAtStart(e.src.slice(r-s.length)),!l)||(c=l.url,c=c.replace(/\*+$/,""),a=e.md.normalizeLink(c),!e.md.validateLink(a))?!1:(n||(e.pending=e.pending.slice(0,-s.length),u=e.push("link_open","a",1),u.attrs=[["href",a]],u.markup="linkify",u.info="auto",u=e.push("text","",0),u.content=e.md.normalizeLinkText(c),u=e.push("link_close","a",-1),u.markup="linkify",u.info="auto"),e.pos+=c.length-s.length,!0)},sX=H.isSpace,lX=function(e,n){var r,o,i,s=e.pos;if(e.src.charCodeAt(s)!==10)return!1;if(r=e.pending.length-1,o=e.posMax,!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){for(i=r-1;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(s++;s<o&&sX(e.src.charCodeAt(s));)s++;return e.pos=s,!0},cX=H.isSpace,Pa=[];for(var Od=0;Od<256;Od++)Pa.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t){Pa[t.charCodeAt(0)]=1});var aX=function(e,n){var r,o,i,s,l,c=e.pos,a=e.posMax;if(e.src.charCodeAt(c)!==92||(c++,c>=a))return!1;if(r=e.src.charCodeAt(c),r===10){for(n||e.push("hardbreak","br",0),c++;c<a&&(r=e.src.charCodeAt(c),!!cX(r));)c++;return e.pos=c,!0}return s=e.src[c],r>=55296&&r<=56319&&c+1<a&&(o=e.src.charCodeAt(c+1),o>=56320&&o<=57343&&(s+=e.src[c+1],c++)),i="\\"+s,n||(l=e.push("text_special","",0),r<256&&Pa[r]!==0?l.content=s:l.content=i,l.markup=i,l.info="escape"),e.pos=c+1,!0},uX=function(e,n){var r,o,i,s,l,c,a,u,d=e.pos,f=e.src.charCodeAt(d);if(f!==96)return!1;for(r=d,d++,o=e.posMax;d<o&&e.src.charCodeAt(d)===96;)d++;if(i=e.src.slice(r,d),a=i.length,e.backticksScanned&&(e.backticks[a]||0)<=r)return n||(e.pending+=i),e.pos+=a,!0;for(l=c=d;(l=e.src.indexOf("`",c))!==-1;){for(c=l+1;c<o&&e.src.charCodeAt(c)===96;)c++;if(u=c-l,u===a)return n||(s=e.push("code_inline","code",0),s.markup=i,s.content=e.src.slice(d,l).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=c,!0;e.backticks[u]=l}return e.backticksScanned=!0,n||(e.pending+=i),e.pos+=a,!0},ks={};ks.tokenize=function(e,n){var r,o,i,s,l,c=e.pos,a=e.src.charCodeAt(c);if(n||a!==126||(o=e.scanDelims(e.pos,!0),s=o.length,l=String.fromCharCode(a),s<2))return!1;for(s%2&&(i=e.push("text","",0),i.content=l,s--),r=0;r<s;r+=2)i=e.push("text","",0),i.content=l+l,e.delimiters.push({marker:a,length:0,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close});return e.pos+=o.length,!0};function Md(t,e){var n,r,o,i,s,l=[],c=e.length;for(n=0;n<c;n++)o=e[n],o.marker===126&&o.end!==-1&&(i=e[o.end],s=t.tokens[o.token],s.type="s_open",s.tag="s",s.nesting=1,s.markup="~~",s.content="",s=t.tokens[i.token],s.type="s_close",s.tag="s",s.nesting=-1,s.markup="~~",s.content="",t.tokens[i.token-1].type==="text"&&t.tokens[i.token-1].content==="~"&&l.push(i.token-1));for(;l.length;){for(n=l.pop(),r=n+1;r<t.tokens.length&&t.tokens[r].type==="s_close";)r++;r--,n!==r&&(s=t.tokens[r],t.tokens[r]=t.tokens[n],t.tokens[n]=s)}}ks.postProcess=function(e){var n,r=e.tokens_meta,o=e.tokens_meta.length;for(Md(e,e.delimiters),n=0;n<o;n++)r[n]&&r[n].delimiters&&Md(e,r[n].delimiters)};var ws={};ws.tokenize=function(e,n){var r,o,i,s=e.pos,l=e.src.charCodeAt(s);if(n||l!==95&&l!==42)return!1;for(o=e.scanDelims(e.pos,l===42),r=0;r<o.length;r++)i=e.push("text","",0),i.content=String.fromCharCode(l),e.delimiters.push({marker:l,length:o.length,token:e.tokens.length-1,end:-1,open:o.can_open,close:o.can_close});return e.pos+=o.length,!0};function Nd(t,e){var n,r,o,i,s,l,c=e.length;for(n=c-1;n>=0;n--)r=e[n],!(r.marker!==95&&r.marker!==42)&&r.end!==-1&&(o=e[r.end],l=n>0&&e[n-1].end===r.end+1&&e[n-1].marker===r.marker&&e[n-1].token===r.token-1&&e[r.end+1].token===o.token+1,s=String.fromCharCode(r.marker),i=t.tokens[r.token],i.type=l?"strong_open":"em_open",i.tag=l?"strong":"em",i.nesting=1,i.markup=l?s+s:s,i.content="",i=t.tokens[o.token],i.type=l?"strong_close":"em_close",i.tag=l?"strong":"em",i.nesting=-1,i.markup=l?s+s:s,i.content="",l&&(t.tokens[e[n-1].token].content="",t.tokens[e[r.end+1].token].content="",n--))}ws.postProcess=function(e){var n,r=e.tokens_meta,o=e.tokens_meta.length;for(Nd(e,e.delimiters),n=0;n<o;n++)r[n]&&r[n].delimiters&&Nd(e,r[n].delimiters)};var dX=H.normalizeReference,gl=H.isSpace,fX=function(e,n){var r,o,i,s,l,c,a,u,d,f="",m="",b=e.pos,v=e.posMax,x=e.pos,h=!0;if(e.src.charCodeAt(e.pos)!==91||(l=e.pos+1,s=e.md.helpers.parseLinkLabel(e,e.pos,!0),s<0))return!1;if(c=s+1,c<v&&e.src.charCodeAt(c)===40){for(h=!1,c++;c<v&&(o=e.src.charCodeAt(c),!(!gl(o)&&o!==10));c++);if(c>=v)return!1;if(x=c,a=e.md.helpers.parseLinkDestination(e.src,c,e.posMax),a.ok){for(f=e.md.normalizeLink(a.str),e.md.validateLink(f)?c=a.pos:f="",x=c;c<v&&(o=e.src.charCodeAt(c),!(!gl(o)&&o!==10));c++);if(a=e.md.helpers.parseLinkTitle(e.src,c,e.posMax),c<v&&x!==c&&a.ok)for(m=a.str,c=a.pos;c<v&&(o=e.src.charCodeAt(c),!(!gl(o)&&o!==10));c++);}(c>=v||e.src.charCodeAt(c)!==41)&&(h=!0),c++}if(h){if(typeof e.env.references>"u")return!1;if(c<v&&e.src.charCodeAt(c)===91?(x=c+1,c=e.md.helpers.parseLinkLabel(e,c),c>=0?i=e.src.slice(x,c++):c=s+1):c=s+1,i||(i=e.src.slice(l,s)),u=e.env.references[dX(i)],!u)return e.pos=b,!1;f=u.href,m=u.title}return n||(e.pos=l,e.posMax=s,d=e.push("link_open","a",1),d.attrs=r=[["href",f]],m&&r.push(["title",m]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,d=e.push("link_close","a",-1)),e.pos=c,e.posMax=v,!0},pX=H.normalizeReference,yl=H.isSpace,hX=function(e,n){var r,o,i,s,l,c,a,u,d,f,m,b,v,x="",h=e.pos,p=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(c=e.pos+2,l=e.md.helpers.parseLinkLabel(e,e.pos+1,!1),l<0))return!1;if(a=l+1,a<p&&e.src.charCodeAt(a)===40){for(a++;a<p&&(o=e.src.charCodeAt(a),!(!yl(o)&&o!==10));a++);if(a>=p)return!1;for(v=a,d=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),d.ok&&(x=e.md.normalizeLink(d.str),e.md.validateLink(x)?a=d.pos:x=""),v=a;a<p&&(o=e.src.charCodeAt(a),!(!yl(o)&&o!==10));a++);if(d=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<p&&v!==a&&d.ok)for(f=d.str,a=d.pos;a<p&&(o=e.src.charCodeAt(a),!(!yl(o)&&o!==10));a++);else f="";if(a>=p||e.src.charCodeAt(a)!==41)return e.pos=h,!1;a++}else{if(typeof e.env.references>"u")return!1;if(a<p&&e.src.charCodeAt(a)===91?(v=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?s=e.src.slice(v,a++):a=l+1):a=l+1,s||(s=e.src.slice(c,l)),u=e.env.references[pX(s)],!u)return e.pos=h,!1;x=u.href,f=u.title}return n||(i=e.src.slice(c,l),e.md.inline.parse(i,e.md,e.env,b=[]),m=e.push("image","img",0),m.attrs=r=[["src",x],["alt",""]],m.children=b,m.content=i,f&&r.push(["title",f])),e.pos=a,e.posMax=p,!0},mX=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,gX=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,yX=function(e,n){var r,o,i,s,l,c,a=e.pos;if(e.src.charCodeAt(a)!==60)return!1;for(l=e.pos,c=e.posMax;;){if(++a>=c||(s=e.src.charCodeAt(a),s===60))return!1;if(s===62)break}return r=e.src.slice(l+1,a),gX.test(r)?(o=e.md.normalizeLink(r),e.md.validateLink(o)?(n||(i=e.push("link_open","a",1),i.attrs=[["href",o]],i.markup="autolink",i.info="auto",i=e.push("text","",0),i.content=e.md.normalizeLinkText(r),i=e.push("link_close","a",-1),i.markup="autolink",i.info="auto"),e.pos+=r.length+2,!0):!1):mX.test(r)?(o=e.md.normalizeLink("mailto:"+r),e.md.validateLink(o)?(n||(i=e.push("link_open","a",1),i.attrs=[["href",o]],i.markup="autolink",i.info="auto",i=e.push("text","",0),i.content=e.md.normalizeLinkText(r),i=e.push("link_close","a",-1),i.markup="autolink",i.info="auto"),e.pos+=r.length+2,!0):!1):!1},vX=ys.HTML_TAG_RE;function bX(t){return/^<a[>\s]/i.test(t)}function kX(t){return/^<\/a\s*>/i.test(t)}function wX(t){var e=t|32;return e>=97&&e<=122}var _X=function(e,n){var r,o,i,s,l=e.pos;return!e.md.options.html||(i=e.posMax,e.src.charCodeAt(l)!==60||l+2>=i)||(r=e.src.charCodeAt(l+1),r!==33&&r!==63&&r!==47&&!wX(r))||(o=e.src.slice(l).match(vX),!o)?!1:(n||(s=e.push("html_inline","",0),s.content=e.src.slice(l,l+o[0].length),bX(s.content)&&e.linkLevel++,kX(s.content)&&e.linkLevel--),e.pos+=o[0].length,!0)},qd=Ea.exports,xX=H.has,CX=H.isValidEntityCode,$d=H.fromCodePoint,EX=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,SX=/^&([a-z][a-z0-9]{1,31});/i,AX=function(e,n){var r,o,i,s,l=e.pos,c=e.posMax;if(e.src.charCodeAt(l)!==38||l+1>=c)return!1;if(r=e.src.charCodeAt(l+1),r===35){if(i=e.src.slice(l).match(EX),i)return n||(o=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),s=e.push("text_special","",0),s.content=CX(o)?$d(o):$d(65533),s.markup=i[0],s.info="entity"),e.pos+=i[0].length,!0}else if(i=e.src.slice(l).match(SX),i&&xX(qd,i[1]))return n||(s=e.push("text_special","",0),s.content=qd[i[1]],s.markup=i[0],s.info="entity"),e.pos+=i[0].length,!0;return!1};function zd(t,e){var n,r,o,i,s,l,c,a,u={},d=e.length;if(!!d){var f=0,m=-2,b=[];for(n=0;n<d;n++)if(o=e[n],b.push(0),(e[f].marker!==o.marker||m!==o.token-1)&&(f=n),m=o.token,o.length=o.length||0,!!o.close){for(u.hasOwnProperty(o.marker)||(u[o.marker]=[-1,-1,-1,-1,-1,-1]),s=u[o.marker][(o.open?3:0)+o.length%3],r=f-b[f]-1,l=r;r>s;r-=b[r]+1)if(i=e[r],i.marker===o.marker&&i.open&&i.end<0&&(c=!1,(i.close||o.open)&&(i.length+o.length)%3===0&&(i.length%3!==0||o.length%3!==0)&&(c=!0),!c)){a=r>0&&!e[r-1].open?b[r-1]+1:0,b[n]=n-r+a,b[r]=a,o.open=!1,i.end=n,i.close=!1,l=-1,m=-2;break}l!==-1&&(u[o.marker][(o.open?3:0)+(o.length||0)%3]=l)}}}var DX=function(e){var n,r=e.tokens_meta,o=e.tokens_meta.length;for(zd(e,e.delimiters),n=0;n<o;n++)r[n]&&r[n].delimiters&&zd(e,r[n].delimiters)},TX=function(e){var n,r,o=0,i=e.tokens,s=e.tokens.length;for(n=r=0;n<s;n++)i[n].nesting<0&&o--,i[n].level=o,i[n].nesting>0&&o++,i[n].type==="text"&&n+1<s&&i[n+1].type==="text"?i[n+1].content=i[n].content+i[n+1].content:(n!==r&&(i[r]=i[n]),r++);n!==r&&(i.length=r)},La=Da,Kd=H.isWhiteSpace,Bd=H.isPunctChar,Hd=H.isMdAsciiPunct;function Co(t,e,n,r){this.src=t,this.env=n,this.md=e,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Co.prototype.pushPending=function(){var t=new La("text","",0);return t.content=this.pending,t.level=this.pendingLevel,this.tokens.push(t),this.pending="",t};Co.prototype.push=function(t,e,n){this.pending&&this.pushPending();var r=new La(t,e,n),o=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],o={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(o),r};Co.prototype.scanDelims=function(t,e){var n=t,r,o,i,s,l,c,a,u,d,f=!0,m=!0,b=this.posMax,v=this.src.charCodeAt(t);for(r=t>0?this.src.charCodeAt(t-1):32;n<b&&this.src.charCodeAt(n)===v;)n++;return i=n-t,o=n<b?this.src.charCodeAt(n):32,a=Hd(r)||Bd(String.fromCharCode(r)),d=Hd(o)||Bd(String.fromCharCode(o)),c=Kd(r),u=Kd(o),u?f=!1:d&&(c||a||(f=!1)),c?m=!1:a&&(u||d||(m=!1)),e?(s=f,l=m):(s=f&&(!m||a),l=m&&(!f||d)),{can_open:s,can_close:l,length:i}};Co.prototype.Token=La;var PX=Co,Ud=Aa,vl=[["text",rX],["linkify",iX],["newline",lX],["escape",aX],["backticks",uX],["strikethrough",ks.tokenize],["emphasis",ws.tokenize],["link",fX],["image",hX],["autolink",yX],["html_inline",_X],["entity",AX]],bl=[["balance_pairs",DX],["strikethrough",ks.postProcess],["emphasis",ws.postProcess],["fragments_join",TX]];function Eo(){var t;for(this.ruler=new Ud,t=0;t<vl.length;t++)this.ruler.push(vl[t][0],vl[t][1]);for(this.ruler2=new Ud,t=0;t<bl.length;t++)this.ruler2.push(bl[t][0],bl[t][1])}Eo.prototype.skipToken=function(t){var e,n,r=t.pos,o=this.ruler.getRules(""),i=o.length,s=t.md.options.maxNesting,l=t.cache;if(typeof l[r]<"u"){t.pos=l[r];return}if(t.level<s)for(n=0;n<i&&(t.level++,e=o[n](t,!0),t.level--,!e);n++);else t.pos=t.posMax;e||t.pos++,l[r]=t.pos};Eo.prototype.tokenize=function(t){for(var e,n,r=this.ruler.getRules(""),o=r.length,i=t.posMax,s=t.md.options.maxNesting;t.pos<i;){if(t.level<s)for(n=0;n<o&&(e=r[n](t,!1),!e);n++);if(e){if(t.pos>=i)break;continue}t.pending+=t.src[t.pos++]}t.pending&&t.pushPending()};Eo.prototype.parse=function(t,e,n,r){var o,i,s,l=new this.State(t,e,n,r);for(this.tokenize(l),i=this.ruler2.getRules(""),s=i.length,o=0;o<s;o++)i[o](l)};Eo.prototype.State=PX;var LX=Eo,kl,jd;function IX(){return jd||(jd=1,kl=function(t){var e={};t=t||{},e.src_Any=em().source,e.src_Cc=tm().source,e.src_Z=nm().source,e.src_P=Sa.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var n="[><\uFF5C]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}),kl}function wc(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(n){!n||Object.keys(n).forEach(function(r){t[r]=n[r]})}),t}function _s(t){return Object.prototype.toString.call(t)}function RX(t){return _s(t)==="[object String]"}function FX(t){return _s(t)==="[object Object]"}function OX(t){return _s(t)==="[object RegExp]"}function Vd(t){return _s(t)==="[object Function]"}function MX(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var am={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function NX(t){return Object.keys(t||{}).reduce(function(e,n){return e||am.hasOwnProperty(n)},!1)}var qX={"http:":{validate:function(t,e,n){var r=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){var r=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(r)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){var r=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},$X="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",zX="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function KX(t){t.__index__=-1,t.__text_cache__=""}function BX(t){return function(e,n){var r=e.slice(n);return t.test(r)?r.match(t)[0].length:0}}function Wd(){return function(t,e){e.normalize(t)}}function Hi(t){var e=t.re=IX()(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push($X),n.push(e.src_xn),e.src_tlds=n.join("|");function r(l){return l.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");var o=[];t.__compiled__={};function i(l,c){throw new Error('(LinkifyIt) Invalid schema "'+l+'": '+c)}Object.keys(t.__schemas__).forEach(function(l){var c=t.__schemas__[l];if(c!==null){var a={validate:null,link:null};if(t.__compiled__[l]=a,FX(c)){OX(c.validate)?a.validate=BX(c.validate):Vd(c.validate)?a.validate=c.validate:i(l,c),Vd(c.normalize)?a.normalize=c.normalize:c.normalize?i(l,c):a.normalize=Wd();return}if(RX(c)){o.push(l);return}i(l,c)}}),o.forEach(function(l){!t.__compiled__[t.__schemas__[l]]||(t.__compiled__[l].validate=t.__compiled__[t.__schemas__[l]].validate,t.__compiled__[l].normalize=t.__compiled__[t.__schemas__[l]].normalize)}),t.__compiled__[""]={validate:null,normalize:Wd()};var s=Object.keys(t.__compiled__).filter(function(l){return l.length>0&&t.__compiled__[l]}).map(MX).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+s+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+s+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),KX(t)}function HX(t,e){var n=t.__index__,r=t.__last_index__,o=t.__text_cache__.slice(n,r);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=r+e,this.raw=o,this.text=o,this.url=o}function _c(t,e){var n=new HX(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function Ve(t,e){if(!(this instanceof Ve))return new Ve(t,e);e||NX(t)&&(e=t,t={}),this.__opts__=wc({},am,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=wc({},qX,t),this.__compiled__={},this.__tlds__=zX,this.__tlds_replaced__=!1,this.re={},Hi(this)}Ve.prototype.add=function(e,n){return this.__schemas__[e]=n,Hi(this),this};Ve.prototype.set=function(e){return this.__opts__=wc(this.__opts__,e),this};Ve.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var n,r,o,i,s,l,c,a,u;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(n=c.exec(e))!==null;)if(i=this.testSchemaAt(e,n[2],c.lastIndex),i){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(a=e.search(this.re.host_fuzzy_test),a>=0&&(this.__index__<0||a<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(s=r.index+r[1].length,(this.__index__<0||s<this.__index__)&&(this.__schema__="",this.__index__=s,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(u=e.indexOf("@"),u>=0&&(o=e.match(this.re.email_fuzzy))!==null&&(s=o.index+o[1].length,l=o.index+o[0].length,(this.__index__<0||s<this.__index__||s===this.__index__&&l>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=s,this.__last_index__=l))),this.__index__>=0};Ve.prototype.pretest=function(e){return this.re.pretest.test(e)};Ve.prototype.testSchemaAt=function(e,n,r){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,r,this):0};Ve.prototype.match=function(e){var n=0,r=[];this.__index__>=0&&this.__text_cache__===e&&(r.push(_c(this,n)),n=this.__last_index__);for(var o=n?e.slice(n):e;this.test(o);)r.push(_c(this,n)),o=o.slice(this.__last_index__),n+=this.__last_index__;return r.length?r:null};Ve.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;var n=this.re.schema_at_start.exec(e);if(!n)return null;var r=this.testSchemaAt(e,n[2],n[0].length);return r?(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+r,_c(this,0)):null};Ve.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,o,i){return r!==i[o-1]}).reverse(),Hi(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Hi(this),this)};Ve.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};Ve.prototype.onCompile=function(){};var UX=Ve;const jX={},VX=Object.freeze(Object.defineProperty({__proto__:null,default:jX},Symbol.toStringTag,{value:"Module"})),WX=Gd(VX);var GX={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},ZX={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},QX={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},jr=H,YX=gs,XX=JQ,JX=xY,eJ=tX,tJ=LX,nJ=UX,bn=vr,um=WX,rJ={default:GX,zero:ZX,commonmark:QX},oJ=/^(vbscript|javascript|file|data):/,iJ=/^data:image\/(gif|png|jpeg|webp);/;function sJ(t){var e=t.trim().toLowerCase();return oJ.test(e)?!!iJ.test(e):!0}var dm=["http:","https:","mailto:"];function lJ(t){var e=bn.parse(t,!0);if(e.hostname&&(!e.protocol||dm.indexOf(e.protocol)>=0))try{e.hostname=um.toASCII(e.hostname)}catch{}return bn.encode(bn.format(e))}function cJ(t){var e=bn.parse(t,!0);if(e.hostname&&(!e.protocol||dm.indexOf(e.protocol)>=0))try{e.hostname=um.toUnicode(e.hostname)}catch{}return bn.decode(bn.format(e),bn.decode.defaultChars+"%")}function st(t,e){if(!(this instanceof st))return new st(t,e);e||jr.isString(t)||(e=t||{},t="default"),this.inline=new tJ,this.block=new eJ,this.core=new JX,this.renderer=new XX,this.linkify=new nJ,this.validateLink=sJ,this.normalizeLink=lJ,this.normalizeLinkText=cJ,this.utils=jr,this.helpers=jr.assign({},YX),this.options={},this.configure(t),e&&this.set(e)}st.prototype.set=function(t){return jr.assign(this.options,t),this};st.prototype.configure=function(t){var e=this,n;if(jr.isString(t)&&(n=t,t=rJ[n],!t))throw new Error('Wrong `markdown-it` preset "'+n+'", check name');if(!t)throw new Error("Wrong `markdown-it` preset, can't be empty");return t.options&&e.set(t.options),t.components&&Object.keys(t.components).forEach(function(r){t.components[r].rules&&e[r].ruler.enableOnly(t.components[r].rules),t.components[r].rules2&&e[r].ruler2.enableOnly(t.components[r].rules2)}),this};st.prototype.enable=function(t,e){var n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(o){n=n.concat(this[o].ruler.enable(t,!0))},this),n=n.concat(this.inline.ruler2.enable(t,!0));var r=t.filter(function(o){return n.indexOf(o)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};st.prototype.disable=function(t,e){var n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(o){n=n.concat(this[o].ruler.disable(t,!0))},this),n=n.concat(this.inline.ruler2.disable(t,!0));var r=t.filter(function(o){return n.indexOf(o)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};st.prototype.use=function(t){var e=[this].concat(Array.prototype.slice.call(arguments,1));return t.apply(t,e),this};st.prototype.parse=function(t,e){if(typeof t!="string")throw new Error("Input data should be a String");var n=new this.core.State(t,this,e);return this.core.process(n),n.tokens};st.prototype.render=function(t,e){return e=e||{},this.renderer.render(this.parse(t,e),this.options,e)};st.prototype.parseInline=function(t,e){var n=new this.core.State(t,this,e);return n.inlineMode=!0,this.core.process(n),n.tokens};st.prototype.renderInline=function(t,e){return e=e||{},this.renderer.render(this.parseInline(t,e),this.options,e)};var aJ=st;(function(t){t.exports=aJ})(Jh);const uJ=xc(Jh.exports);function dJ(){Ia("arc-cmdk").split("+").forEach(n=>{const[r,o]=n.split(":");o==="true"&&fJ(r)})}function fJ(t){switch(t){case"dm":const e="boostDarkmode";if(document.getElementById(e))break;mm();break;case"focus":const r=document.getElementById("mw-navigation");if((r==null?void 0:r.style.visibility)=="hidden")break;hm();break;case"matcharc":if(document.getElementById("arc-theme"))break;pm();break;default:console.error("Unexpected option for cookie: ",t)}}function nn(t,e){const n=Ia("arc-cmdk"),r=t+":"+!e,o=n.replace(r,t+":"+e);fm("arc-cmdk",o,100)}function fm(t,e,n){const r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);let o="expires="+r.toUTCString();document.cookie=t+"="+e+";"+o+";path=/"}function Ia(t){let e=t+"=",r=decodeURIComponent(document.cookie).split(";");for(let o=0;o<r.length;o++){let i=r[o];for(;i.charAt(0)==" ";)i=i.substring(1);if(i.indexOf(e)==0)return i.substring(e.length,i.length)}return""}function pJ(t,e){const n=e.replace(" jumptosection",""),r=t[n];r&&(window.location.href=r);const o=document.getElementById("root");o&&(o.style.visibility="hidden")}function hJ(t){const e=Object.keys(t),n={};for(let o=0;o<e.length;o++){const i=e[o];var r=window.location.href;r.includes("#")&&(r=r.substring(0,r.indexOf("#")));let s;r.endsWith("/")?s=r.substring(0,r.indexOf("/"))+"#"+i.replace(" ","_"):s=r+"#"+i.replaceAll(" ","_"),n[i]=s}return n}function pm(){if(!document.documentElement.style.getPropertyValue("--arc-palette-hover"))return;const e="boostDarkmode";if(document.getElementById(e)){var r=document.getElementById(e);r==null||r.remove(),nn("dm",!1)}const o=document.getElementById("arc-theme"),i=document.querySelector("#content"),s=document.querySelector("body"),l=document.querySelector("#mw-page-base");if(o)o.remove(),nn("matcharc",!1),i&&(i.style.backgroundColor="white"),s.style.backgroundColor="white",l&&(l.style.visibility="visible");else{nn("matcharc",!0);const c=document.createElement("div");c.id="arc-theme",c.style.display="block",c.style.position="fixed",c.style.inset="0",c.style.zIndex="-1";const a=document.documentElement.style.getPropertyValue("--arc-background-gradient-overlay-color0"),u=document.documentElement.style.getPropertyValue("--arc-background-gradient-color0"),d=document.documentElement.style.getPropertyValue("--arc-background-simple-color"),f=document.documentElement.style.getPropertyValue("--arc-background-gradient-color1");a?(c.style.opacity="1",c.style.background="linear-gradient(132deg, var(--arc-background-gradient-color0) 0.00%, var(--arc-background-gradient-color1) 50.00%, var(--arc-background-gradient-overlay-color1)"):u&&f!="#17011EFF"?(c.style.opacity="1",c.style.background="linear-gradient(132deg, var(--arc-background-gradient-color0) 0.00%, var(--arc-background-gradient-color1) 100.00%"):d&&(c.style.backgroundColor="var(--arc-background-simple-color)",c.style.opacity="0.3"),i&&(i.style.backgroundColor="rgba(0, 0, 0, 0)"),s.style.backgroundColor="rgba(0, 0, 0, 0)",l&&(l.style.visibility="hidden"),document.body.prepend(c)}}function mJ(t,e){const n="Consider "+t+"and tell me: "+e;window.postMessage("QUERY="+n)}function gJ(t,e){const n="Tell me the meaning of the following text in simple words: "+t[e.replace(" summarisesimplifysection","")];window.postMessage("QUERY="+n)}function yJ(t,e){const n="Summarise this text: "+t[e.replace(" summarisesimplifysection","")];window.postMessage("QUERY="+n)}function vJ(t){window.postMessage("QUERY="+t)}function bJ(t){window.location.assign("https://en.wikipedia.org/wiki/"+t.replace(" ","_"))}function kJ(t){let e=new Date,n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),r=new Intl.DateTimeFormat("en",{month:"long"}).format(e),o=new Intl.DateTimeFormat("en",{day:"numeric"}).format(e);const i=`${r}_${o},_${n}`;window.location.assign("https://en.wikipedia.org/wiki/Wikipedia:Today%27s_featured_article/"+i)}function wJ(t){window.location.assign("https://en.wikipedia.org/wiki/Special:Random")}function hm(t){const e=document.getElementById("mw-navigation"),n=document.getElementById("footer"),r=document.getElementById("content"),o=document.querySelector("body"),i=document.querySelector("#mw-page-base");(e==null?void 0:e.style.visibility)=="hidden"?(e.style.visibility="unset",n.style.visibility="unset",r.style.marginLeft="10em",o.style.backgroundColor="#f6f6f6",i.style.visibility="visible",r.style.border="1px solid #a7d7f9",nn("focus",!1)):(e.style.visibility="hidden",n.style.visibility="hidden",r.style.marginLeft="5em",r.style.marginRight="5em",o.style.backgroundColor="#ffffff",i.style.visibility="hidden",r.style.border="0px solid #ffffff",nn("focus",!0))}function mm(t){const e=document.getElementById("arc-theme");e&&(e.remove(),nn("matcharc",!1));const n="boostDarkmode";if(document.getElementById(n)){var o=document.getElementById(n);o==null||o.remove(),nn("dm",!1)}else{const i=document.createElement("style");i.innerText=db,i.id=n,document.head.appendChild(i),nn("dm",!0)}}function _J({inputRef:t,queryHandlerId:e,setVisibility:n,setPages:r,pages:o,shouldSetPage:i,setShouldSetPage:s}){const[l,c]=te.useState(""),a=function(u){u||(u=window.event);var d=u.code||u.key;if(d=="Enter"){if(l){switch(i&&r([...o,i]),e){case"searchWiki":bJ(l);break;case"askGeneralQuestion":vJ(l);break;case"askQuestionAboutArticleContent":const f=document.querySelector("h1").innerText;mJ(f,l);break}i||n(!1)}}else d=="Escape"&&(c(""),n(!1),i&&s(""))};return P(Me.Input,{ref:t,style:{paddingRight:"10px",padding:"6.5px 16px"},value:l,onValueChange:c,autoFocus:!0,placeholder:"Enter query...",onKeyDown:a})}function xJ(){Ia("arc-cmdk")||fm("arc-cmdk","dm:false+focus:false+matcharc:false",100),dJ();const t=new uJ,e=CJ(),n=hJ(e),[r,o]=te.useState("linear"),i=te.useRef(null),s=te.useRef(null),l=te.useRef(null),[c,a]=te.useState([]),u=c[c.length-1],[d,f]=te.useState(!1),m=()=>{var k;f(!1),(k=i==null?void 0:i.current)==null||k.focus()},[b,v]=te.useState("");te.useEffect(()=>{if(b.includes("ANSWER=")){const k=document.querySelector("#answer");k&&(k.innerHTML=t.render(b.replace("ANSWER=","")))}},[b]),window.addEventListener("message",k=>{const _=k.data;if(_.includes("QUERY=")&&v("loading"),_.includes("ANSWER=")){const C=k.data.replace("ANSWER=","");v("ANSWER="+C)}else _.includes("ERROR=")&&(k.data.replace("ERROR=","")=="login"?v("ERROR=login"):v("ERROR=unknown"))}),te.useEffect(()=>{var k;(k=i==null?void 0:i.current)==null||k.focus()},[]);function x(k){var _;f(!0),(_=s==null?void 0:s.current)==null||_.focus(),p(k)}const[h,p]=te.useState("Please change the query handler id where necesseray"),[g,w]=te.useState("");return K(At,{children:[P("div",{className:"arc-boost-exit",onClick:()=>{const k=document.getElementById("root");k&&(k.style.visibility="hidden")}}),P("div",{id:"cmdk",className:"raycast",children:K(Me,{className:"cmdk-topelement",value:r,onValueChange:k=>o(k),onKeyDown:k=>{var _;if(k.key=="Escape"||k.key==="Backspace"&&!r){if(k.preventDefault(),!d&&!((_=i.current)!=null&&_.value)&&c.length==0){const C=document.getElementById("root");k.preventDefault(),C&&(C.style.visibility="hidden")}u==="gptAnswer"&&v(""),a(C=>C.slice(0,-1))}else if(!k.ctrlKey||k.key==="Meta"||k.key==="Shift"||k.key==="alt")return;if(k.key==="k"){const C=document.getElementById("root");k.preventDefault(),C&&(C.style.visibility="hidden",C.setAttribute("visibilityChanged","true"))}},children:[P("div",{"cmdk-raycast-top-shine":""}),K("div",{className:"raycast-inputs",style:c.length>0?{marginLeft:"15px"}:{},children:[c.length>0&&P("button",{style:{flex:"0 0px",cursor:"pointer"},onClick:()=>{var k;a(_=>_.slice(0,-1)),f(!1),(k=i==null?void 0:i.current)==null||k.focus()},children:P(De,{children:P(K1,{style:{width:12,height:12}})})}),P(Me.Input,{ref:i,style:{flex:"6 285px"},autoFocus:!0,placeholder:"Search commands..."}),d?P(Me,{className:"cmd-query",children:P(_J,{inputRef:s,queryHandlerId:h,setVisibility:m,setPages:a,pages:c,shouldSetPage:g,setShouldSetPage:w})}):P(At,{})]}),P("hr",{"cmdk-raycast-loader":"",className:b==="loading"?"animation-on":""}),K(Me.List,{ref:l,children:[!u&&K(At,{children:[P(Me.Empty,{children:"No results found."}),K(Me.Group,{heading:"Navigation",children:[K(Oe,{isCommand:!0,value:"Search Wikipedia",onSelect:x,queryHandlerId:"searchWiki",inputRef:i,children:[P(De,{children:P(tb,{style:{width:12,height:12}})}),"Search Wikipedia"]}),K(Oe,{isCommand:!0,value:"Show Today's Featured Article",onSelect:kJ,inputRef:i,children:[P(De,{children:P(Y1,{style:{width:12,height:12}})}),"Show Today's Featured Article"]}),K(Oe,{isCommand:!0,value:"Show Random Article",onSelect:wJ,inputRef:i,children:[P(De,{children:P(lb,{style:{width:12,height:12}})}),"Show Random Article"]}),K(Oe,{isCommand:!0,value:"Jump to Section",setPages:a,page:"sectionJumpPage",pages:c,inputRef:i,children:[P(De,{children:P(H1,{style:{width:12,height:12}})}),"Jump to Section"]})]}),K(Me.Group,{heading:"AI Helper",children:[K(Oe,{value:"Ask General Question",onSelect:x,queryHandlerId:"askGeneralQuestion",setPages:a,page:"gptAnswer",pages:c,setShouldSetPage:w,inputRef:i,children:[P(De,{children:P(j1,{style:{width:12,height:12}})}),"Ask General Question"]}),K(Oe,{value:"Ask Question About Article Topic",onSelect:x,queryHandlerId:"askQuestionAboutArticleContent",setPages:a,page:"gptAnswer",pages:c,setShouldSetPage:w,inputRef:i,children:[P(De,{children:P(ib,{style:{width:12,height:12}})}),"Ask Question About Article Topic"]}),K(Oe,{value:"Summarise Section",setPages:a,page:"sectionGPTPage",pages:c,inputRef:i,children:[P(De,{children:P(rb,{style:{width:12,height:12}})}),"Summarise Section"]}),K(Oe,{value:"Simplify Section",setPages:a,page:"simplifySectionPage",pages:c,inputRef:i,children:[P(De,{children:P(ub,{style:{width:12,height:12}})}),"Simplify Section"]})]}),K(Me.Group,{heading:"Appearance",children:[K(Oe,{isCommand:!0,value:"Toggle Focus Mode",onSelect:hm,inputRef:i,children:[P(De,{children:P(Z1,{style:{width:12,height:12}})}),"Toggle Focus Mode"]}),K(Oe,{isCommand:!0,value:"Toggle Dark Mode",onSelect:mm,inputRef:i,children:[P(De,{children:P(J1,{style:{width:12,height:12}})}),"Toggle Dark Mode"]}),K(Oe,{isCommand:!0,value:"Match Arc Theme Matching",onSelect:pm,inputRef:i,children:[P(De,{children:P(W1,{style:{width:12,height:12}})}),"Toggle Arc Theme Matching"]})]})]}),u==="gptAnswer"&&b.includes("ANSWER=")&&K(At,{children:[P("div",{className:"gptAnswer",children:P("h3",{children:"ChatGPT Answer"})}),P("div",{className:"gptAnswer github-markdown-body",id:"answer"})]}),u==="gptAnswer"&&b==="ERROR=login"&&K(At,{children:[P("div",{className:"gptAnswer",children:P("h3",{children:"ChatGPT Answer"})}),P("div",{className:"gptAnswer",children:K("p",{children:["You need to login at ",P("a",{href:"https://chat.openai.com",target:"_blank",children:"chat.openai.com"})," first."]})})]}),u==="gptAnswer"&&b==="ERROR=unknown"&&K(At,{children:[P("div",{className:"gptAnswer",children:P("h3",{children:"ChatGPT Answer"})}),P("div",{className:"gptAnswer",children:"An unknown error occured. This wasn't planned. Obviously. Alas. Moving on. It's ok."})]}),u==="gptAnswer"&&b==="loading"&&K(Me.Loading,{children:[P("div",{className:"gptAnswer",children:P("h3",{children:"ChatGPT Answer"})}),P("div",{className:"gptAnswer",children:P("div",{className:"gpt-loading",children:"Waiting for ChatGPT response..."})})]}),u==="sectionGPTPage"&&P(Me.Group,{heading:"Sections",children:Object.keys(e).map(k=>K(Oe,{value:k+" summarisesimplifysection",setPages:a,page:"gptAnswer",pages:c,isSection:!0,onSelect:yJ,sectionDict:e,inputRef:i,children:[P(De,{children:P(cl,{style:{width:12,height:12}})}),k]},k))}),u==="simplifySectionPage"&&P(Me.Group,{heading:"Sections",children:Object.keys(e).map(k=>K(Oe,{value:k+" summarisesimplifysection",setPages:a,page:"gptAnswer",pages:c,isSection:!0,onSelect:gJ,sectionDict:e,inputRef:i,children:[P(De,{children:P(cl,{style:{width:12,height:12}})}),k]},k))}),u==="sectionJumpPage"&&P(Me.Group,{heading:"Sections",children:Object.keys(e).map(k=>K(Oe,{value:k+" jumptosection",isSection:!0,onSelect:pJ,sectionLinkDict:n,inputRef:i,children:[P(De,{children:P(cl,{style:{width:12,height:12}})}),k]},k))})]}),K("div",{"cmdk-raycast-footer":"",children:[c.length>0&&K(At,{children:[K("button",{style:{opacity:"1",animation:"fadeInOpacity 1 ease-in 0.1s"},onClick:()=>{a(k=>k.slice(0,-1))},"cmdk-raycast-subcommand-trigger":"",children:["Go Back",P("kbd",{style:{width:"28px"},children:"esc"})]}),P("hr",{})]}),K("button",{onClick:()=>{var k=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});const _=document.querySelector('[aria-selected="true"]');_==null||_.dispatchEvent(k)},"cmdk-raycast-subcommand-trigger":"",children:["Execute Command",P("kbd",{children:"\u21B5"})]})]})]})})]})}function Oe({children:t,value:e,isCommand:n=!1,isSection:r=!1,onSelect:o,queryHandlerId:i,setPages:s,page:l,pages:c,sectionDict:a,setShouldSetPage:u,inputRef:d,sectionLinkDict:f}){return K(Me.Item,{value:e,onSelect:()=>{var m;i||(m=d==null?void 0:d.current)==null||m.focus(),f?o(f,e):a?o(a,e):o&&o(i||"qhid not defined"),u?u(l):s&&l&&s([...c,l])},children:[t,P("span",{"cmdk-raycast-meta":"",children:n?"Command":r?"Section":"ChatGPT"})]})}function CJ(){const t=document.querySelectorAll("h2"),e={};for(let n=0;n<t.length;n++){let[r,o]=EJ(t[n]);r=r.replace("[edit]",""),!(r=="Navigation menu"||r=="Contents")&&(o=o.replace(``," "),o!=""&&(e[r]=o))}return e}function EJ(t){var o;for(var e=t==null?void 0:t.textContent,n="",r=t;((o=r==null?void 0:r.nextElementSibling)==null?void 0:o.tagName)!="h2"&&(r==null?void 0:r.nextElementSibling);)r=r.nextElementSibling,(r.tagName=="P"||r.tagName=="UL")&&(n+=r.textContent);return[e,n]}function De({children:t,size:e="20px"}){return K("div",{className:"blurLogo",style:{width:e,height:e},children:[P("div",{className:"bg","aria-hidden":!0,children:t}),P("div",{className:"inner",children:t})]})}const SJ={DUMMY:["cmd","\xFCasdf"]};function AJ(){te.useState(!1);const e={DUMMY:te.useCallback(()=>{},[])};var n=new MutationObserver(i=>{i.forEach(s=>{var l;s.target.style.visibility==="visible"&&((l=document.getElementById(":r2:"))==null||l.focus())})}),r={attributes:!0,childList:!1,characterData:!1,attributeOldValue:!0};const o=document.getElementById("root");return o&&n.observe(o,r),P(ih.exports.HotKeys,{keyMap:SJ,handlers:e,children:P("div",{className:"arc-boost",children:P(xJ,{})})})}oh(document.getElementById("root")).render(P(te.StrictMode,{children:P(AJ,{})}));
// Transpiled until here

// Handling shortcuts
const menu = document.getElementById('root')
menu.style.visibility = 'hidden'

document.onkeyup = function (e) {
    if (e.ctrlKey && e.key === 'k') {
        // use e.metaKey for cmd
        const visibilityChangedByMenu = menu.getAttribute('visibilityChanged')
        if (menu.style.visibility === 'hidden' && visibilityChangedByMenu != 'true') {
            menu.style.visibility = 'visible'
        } else {
            menu.setAttribute('visibilityChanged', 'false')
        }
        // if visibilityChanged, set it to false again
    }
};