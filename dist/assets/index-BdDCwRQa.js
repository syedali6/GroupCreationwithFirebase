function nS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Wu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var T_={exports:{}},Hu={},I_={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),rS=Symbol.for("react.portal"),iS=Symbol.for("react.fragment"),sS=Symbol.for("react.strict_mode"),oS=Symbol.for("react.profiler"),aS=Symbol.for("react.provider"),lS=Symbol.for("react.context"),uS=Symbol.for("react.forward_ref"),cS=Symbol.for("react.suspense"),hS=Symbol.for("react.memo"),dS=Symbol.for("react.lazy"),gg=Symbol.iterator;function fS(t){return t===null||typeof t!="object"?null:(t=gg&&t[gg]||t["@@iterator"],typeof t=="function"?t:null)}var S_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R_=Object.assign,C_={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=C_,this.updater=n||S_}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function A_(){}A_.prototype=Ns.prototype;function If(t,e,n){this.props=t,this.context=e,this.refs=C_,this.updater=n||S_}var Sf=If.prototype=new A_;Sf.constructor=If;R_(Sf,Ns.prototype);Sf.isPureReactComponent=!0;var yg=Array.isArray,k_=Object.prototype.hasOwnProperty,Rf={current:null},P_={key:!0,ref:!0,__self:!0,__source:!0};function N_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)k_.call(e,r)&&!P_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:da,type:t,key:s,ref:o,props:i,_owner:Rf.current}}function pS(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cf(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function mS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vg=/\/+/g;function eh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mS(""+t.key):e.toString(36)}function wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case rS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+eh(o,0):r,yg(i)?(n="",t!=null&&(n=t.replace(vg,"$&/")+"/"),wl(i,e,n,"",function(c){return c})):i!=null&&(Cf(i)&&(i=pS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",yg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+eh(s,l);o+=wl(s,e,n,u,i)}else if(u=fS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+eh(s,l++),o+=wl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ga(t,e,n){if(t==null)return t;var r=[],i=0;return wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},Tl={transition:null},yS={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Rf};function x_(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Ga,forEach:function(t,e,n){Ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ga(t,function(){e++}),e},toArray:function(t){return Ga(t,function(e){return e})||[]},only:function(t){if(!Cf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Ns;se.Fragment=iS;se.Profiler=oS;se.PureComponent=If;se.StrictMode=sS;se.Suspense=cS;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yS;se.act=x_;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=R_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)k_.call(e,u)&&!P_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:da,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:lS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:aS,_context:t},t.Consumer=t};se.createElement=N_;se.createFactory=function(t){var e=N_.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:uS,render:t}};se.isValidElement=Cf;se.lazy=function(t){return{$$typeof:dS,_payload:{_status:-1,_result:t},_init:gS}};se.memo=function(t,e){return{$$typeof:hS,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};se.unstable_act=x_;se.useCallback=function(t,e){return Et.current.useCallback(t,e)};se.useContext=function(t){return Et.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};se.useEffect=function(t,e){return Et.current.useEffect(t,e)};se.useId=function(){return Et.current.useId()};se.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Et.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};se.useRef=function(t){return Et.current.useRef(t)};se.useState=function(t){return Et.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Et.current.useTransition()};se.version="18.3.1";I_.exports=se;var A=I_.exports;const ne=Wu(A),vS=nS({__proto__:null,default:ne},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _S=A,ES=Symbol.for("react.element"),wS=Symbol.for("react.fragment"),TS=Object.prototype.hasOwnProperty,IS=_S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SS={key:!0,ref:!0,__self:!0,__source:!0};function O_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)TS.call(e,r)&&!SS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ES,type:t,key:s,ref:o,props:i,_owner:IS.current}}Hu.Fragment=wS;Hu.jsx=O_;Hu.jsxs=O_;T_.exports=Hu;var b=T_.exports,D_={exports:{}},Mt={},b_={exports:{}},L_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,q){var K=j.length;j.push(q);e:for(;0<K;){var re=K-1>>>1,J=j[re];if(0<i(J,q))j[re]=q,j[K]=J,K=re;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var q=j[0],K=j.pop();if(K!==q){j[0]=K;e:for(var re=0,J=j.length,Z=J>>>1;re<Z;){var de=2*(re+1)-1,we=j[de],Le=de+1,Fe=j[Le];if(0>i(we,K))Le<J&&0>i(Fe,we)?(j[re]=Fe,j[Le]=K,re=Le):(j[re]=we,j[de]=K,re=de);else if(Le<J&&0>i(Fe,K))j[re]=Fe,j[Le]=K,re=Le;else break e}}return q}function i(j,q){var K=j.sortIndex-q.sortIndex;return K!==0?K:j.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,I=!1,C=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(j){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=j)r(c),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(c)}}function x(j){if(P=!1,_(j),!C)if(n(u)!==null)C=!0,ze(F);else{var q=n(c);q!==null&&Ee(x,q.startTime-j)}}function F(j,q){C=!1,P&&(P=!1,w(g),g=-1),I=!0;var K=m;try{for(_(q),p=n(u);p!==null&&(!(p.expirationTime>q)||j&&!k());){var re=p.callback;if(typeof re=="function"){p.callback=null,m=p.priorityLevel;var J=re(p.expirationTime<=q);q=t.unstable_now(),typeof J=="function"?p.callback=J:p===n(u)&&r(u),_(q)}else r(u);p=n(u)}if(p!==null)var Z=!0;else{var de=n(c);de!==null&&Ee(x,de.startTime-q),Z=!1}return Z}finally{p=null,m=K,I=!1}}var V=!1,E=null,g=-1,T=5,S=-1;function k(){return!(t.unstable_now()-S<T)}function O(){if(E!==null){var j=t.unstable_now();S=j;var q=!0;try{q=E(!0,j)}finally{q?R():(V=!1,E=null)}}else V=!1}var R;if(typeof v=="function")R=function(){v(O)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Ge=_e.port2;_e.port1.onmessage=O,R=function(){Ge.postMessage(null)}}else R=function(){N(O,0)};function ze(j){E=j,V||(V=!0,R())}function Ee(j,q){g=N(function(){j(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){C||I||(C=!0,ze(F))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(m){case 1:case 2:case 3:var q=3;break;default:q=m}var K=m;m=q;try{return j()}finally{m=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=m;m=j;try{return q()}finally{m=K}},t.unstable_scheduleCallback=function(j,q,K){var re=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?re+K:re):K=re,j){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=K+J,j={id:d++,callback:q,priorityLevel:j,startTime:K,expirationTime:J,sortIndex:-1},K>re?(j.sortIndex=K,e(c,j),n(u)===null&&j===n(c)&&(P?(w(g),g=-1):P=!0,Ee(x,K-re))):(j.sortIndex=J,e(u,j),C||I||(C=!0,ze(F))),j},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(j){var q=m;return function(){var K=m;m=q;try{return j.apply(this,arguments)}finally{m=K}}}})(L_);b_.exports=L_;var RS=b_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CS=A,Vt=RS;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V_=new Set,Lo={};function Ti(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(Lo[t]=e,t=0;t<e.length;t++)V_.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qh=Object.prototype.hasOwnProperty,AS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_g={},Eg={};function kS(t){return Qh.call(Eg,t)?!0:Qh.call(_g,t)?!1:AS.test(t)?Eg[t]=!0:(_g[t]=!0,!1)}function PS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function NS(t,e,n,r){if(e===null||typeof e>"u"||PS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function kf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Af,kf);rt[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Af,kf);rt[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Af,kf);rt[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pf(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NS(e,n,i,r)&&(n=null),r||i===null?kS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=CS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),Hi=Symbol.for("react.portal"),qi=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Xh=Symbol.for("react.profiler"),M_=Symbol.for("react.provider"),F_=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),Yh=Symbol.for("react.suspense"),Jh=Symbol.for("react.suspense_list"),Of=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),U_=Symbol.for("react.offscreen"),wg=Symbol.iterator;function no(t){return t===null||typeof t!="object"?null:(t=wg&&t[wg]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,th;function co(t){if(th===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);th=e&&e[1]||""}return`
`+th+t}var nh=!1;function rh(t,e){if(!t||nh)return"";nh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{nh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?co(t):""}function xS(t){switch(t.tag){case 5:return co(t.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return t=rh(t.type,!1),t;case 11:return t=rh(t.type.render,!1),t;case 1:return t=rh(t.type,!0),t;default:return""}}function Zh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qi:return"Fragment";case Hi:return"Portal";case Xh:return"Profiler";case Nf:return"StrictMode";case Yh:return"Suspense";case Jh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F_:return(t.displayName||"Context")+".Consumer";case M_:return(t._context.displayName||"Context")+".Provider";case xf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Of:return e=t.displayName||null,e!==null?e:Zh(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return Zh(t(e))}catch{}}return null}function OS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zh(e);case 8:return e===Nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function j_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function DS(t){var e=j_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=DS(t))}function $_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=j_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ed(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function B_(t,e){e=e.checked,e!=null&&Pf(t,"checked",e,!1)}function td(t,e){B_(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nd(t,e.type,n):e.hasOwnProperty("defaultValue")&&nd(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ig(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nd(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function ss(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(ho(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function z_(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Rg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function W_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function id(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?W_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,H_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bS=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(t){bS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_o[e]=_o[t]})});function q_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_o.hasOwnProperty(t)&&_o[t]?(""+e).trim():e+"px"}function G_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=q_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var LS=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sd(t,e){if(e){if(LS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ad=null;function Df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ld=null,os=null,as=null;function Cg(t){if(t=ma(t)){if(typeof ld!="function")throw Error($(280));var e=t.stateNode;e&&(e=Xu(e),ld(t.stateNode,t.type,e))}}function K_(t){os?as?as.push(t):as=[t]:os=t}function Q_(){if(os){var t=os,e=as;if(as=os=null,Cg(t),e)for(t=0;t<e.length;t++)Cg(e[t])}}function X_(t,e){return t(e)}function Y_(){}var ih=!1;function J_(t,e,n){if(ih)return t(e,n);ih=!0;try{return X_(t,e,n)}finally{ih=!1,(os!==null||as!==null)&&(Y_(),Q_())}}function Mo(t,e){var n=t.stateNode;if(n===null)return null;var r=Xu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var ud=!1;if(Un)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){ud=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{ud=!1}function VS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Eo=!1,Hl=null,ql=!1,cd=null,MS={onError:function(t){Eo=!0,Hl=t}};function FS(t,e,n,r,i,s,o,l,u){Eo=!1,Hl=null,VS.apply(MS,arguments)}function US(t,e,n,r,i,s,o,l,u){if(FS.apply(this,arguments),Eo){if(Eo){var c=Hl;Eo=!1,Hl=null}else throw Error($(198));ql||(ql=!0,cd=c)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Z_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ag(t){if(Ii(t)!==t)throw Error($(188))}function jS(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ag(i),t;if(s===r)return Ag(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function e0(t){return t=jS(t),t!==null?t0(t):null}function t0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=t0(t);if(e!==null)return e;t=t.sibling}return null}var n0=Vt.unstable_scheduleCallback,kg=Vt.unstable_cancelCallback,$S=Vt.unstable_shouldYield,BS=Vt.unstable_requestPaint,Me=Vt.unstable_now,zS=Vt.unstable_getCurrentPriorityLevel,bf=Vt.unstable_ImmediatePriority,r0=Vt.unstable_UserBlockingPriority,Gl=Vt.unstable_NormalPriority,WS=Vt.unstable_LowPriority,i0=Vt.unstable_IdlePriority,qu=null,gn=null;function HS(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(qu,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:KS,qS=Math.log,GS=Math.LN2;function KS(t){return t>>>=0,t===0?32:31-(qS(t)/GS|0)|0}var Ya=64,Ja=4194304;function fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=fo(l):(s&=o,s!==0&&(r=fo(s)))}else o=n&~i,o!==0?r=fo(o):s!==0&&(r=fo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function QS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=QS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function hd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function s0(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function sh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function YS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function o0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var a0,Vf,l0,u0,c0,dd=!1,Za=[],vr=null,_r=null,Er=null,Fo=new Map,Uo=new Map,sr=[],JS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pg(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(e.pointerId)}}function io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ma(e),e!==null&&Vf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ZS(t,e,n,r,i){switch(e){case"focusin":return vr=io(vr,t,e,n,r,i),!0;case"dragenter":return _r=io(_r,t,e,n,r,i),!0;case"mouseover":return Er=io(Er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fo.set(s,io(Fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Uo.set(s,io(Uo.get(s)||null,t,e,n,r,i)),!0}return!1}function h0(t){var e=ni(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=Z_(n),e!==null){t.blockedOn=e,c0(t.priority,function(){l0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ad=r,n.target.dispatchEvent(r),ad=null}else return e=ma(n),e!==null&&Vf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ng(t,e,n){Il(t)&&n.delete(e)}function eR(){dd=!1,vr!==null&&Il(vr)&&(vr=null),_r!==null&&Il(_r)&&(_r=null),Er!==null&&Il(Er)&&(Er=null),Fo.forEach(Ng),Uo.forEach(Ng)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,dd||(dd=!0,Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority,eR)))}function jo(t){function e(i){return so(i,t)}if(0<Za.length){so(Za[0],t);for(var n=1;n<Za.length;n++){var r=Za[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&so(vr,t),_r!==null&&so(_r,t),Er!==null&&so(Er,t),Fo.forEach(e),Uo.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)h0(n),n.blockedOn===null&&sr.shift()}var ls=Qn.ReactCurrentBatchConfig,Ql=!0;function tR(t,e,n,r){var i=me,s=ls.transition;ls.transition=null;try{me=1,Mf(t,e,n,r)}finally{me=i,ls.transition=s}}function nR(t,e,n,r){var i=me,s=ls.transition;ls.transition=null;try{me=4,Mf(t,e,n,r)}finally{me=i,ls.transition=s}}function Mf(t,e,n,r){if(Ql){var i=fd(t,e,n,r);if(i===null)mh(t,e,r,Xl,n),Pg(t,r);else if(ZS(i,t,e,n,r))r.stopPropagation();else if(Pg(t,r),e&4&&-1<JS.indexOf(t)){for(;i!==null;){var s=ma(i);if(s!==null&&a0(s),s=fd(t,e,n,r),s===null&&mh(t,e,r,Xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mh(t,e,r,null,n)}}var Xl=null;function fd(t,e,n,r){if(Xl=null,t=Df(r),t=ni(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Z_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function d0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zS()){case bf:return 1;case r0:return 4;case Gl:case WS:return 16;case i0:return 536870912;default:return 16}default:return 16}}var hr=null,Ff=null,Sl=null;function f0(){if(Sl)return Sl;var t,e=Ff,n=e.length,r,i="value"in hr?hr.value:hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Sl=i.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function xg(){return!1}function Ft(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:xg,this.isPropagationStopped=xg,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uf=Ft(xs),pa=Ne({},xs,{view:0,detail:0}),rR=Ft(pa),oh,ah,oo,Gu=Ne({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(oh=t.screenX-oo.screenX,ah=t.screenY-oo.screenY):ah=oh=0,oo=t),oh)},movementY:function(t){return"movementY"in t?t.movementY:ah}}),Og=Ft(Gu),iR=Ne({},Gu,{dataTransfer:0}),sR=Ft(iR),oR=Ne({},pa,{relatedTarget:0}),lh=Ft(oR),aR=Ne({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),lR=Ft(aR),uR=Ne({},xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cR=Ft(uR),hR=Ne({},xs,{data:0}),Dg=Ft(hR),dR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pR[t])?!!e[t]:!1}function jf(){return mR}var gR=Ne({},pa,{key:function(t){if(t.key){var e=dR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yR=Ft(gR),vR=Ne({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bg=Ft(vR),_R=Ne({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),ER=Ft(_R),wR=Ne({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),TR=Ft(wR),IR=Ne({},Gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SR=Ft(IR),RR=[9,13,27,32],$f=Un&&"CompositionEvent"in window,wo=null;Un&&"documentMode"in document&&(wo=document.documentMode);var CR=Un&&"TextEvent"in window&&!wo,p0=Un&&(!$f||wo&&8<wo&&11>=wo),Lg=" ",Vg=!1;function m0(t,e){switch(t){case"keyup":return RR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gi=!1;function AR(t,e){switch(t){case"compositionend":return g0(e);case"keypress":return e.which!==32?null:(Vg=!0,Lg);case"textInput":return t=e.data,t===Lg&&Vg?null:t;default:return null}}function kR(t,e){if(Gi)return t==="compositionend"||!$f&&m0(t,e)?(t=f0(),Sl=Ff=hr=null,Gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p0&&e.locale!=="ko"?null:e.data;default:return null}}var PR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!PR[t.type]:e==="textarea"}function y0(t,e,n,r){K_(r),e=Yl(e,"onChange"),0<e.length&&(n=new Uf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var To=null,$o=null;function NR(t){k0(t,0)}function Ku(t){var e=Xi(t);if($_(e))return t}function xR(t,e){if(t==="change")return e}var v0=!1;if(Un){var uh;if(Un){var ch="oninput"in document;if(!ch){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),ch=typeof Fg.oninput=="function"}uh=ch}else uh=!1;v0=uh&&(!document.documentMode||9<document.documentMode)}function Ug(){To&&(To.detachEvent("onpropertychange",_0),$o=To=null)}function _0(t){if(t.propertyName==="value"&&Ku($o)){var e=[];y0(e,$o,t,Df(t)),J_(NR,e)}}function OR(t,e,n){t==="focusin"?(Ug(),To=e,$o=n,To.attachEvent("onpropertychange",_0)):t==="focusout"&&Ug()}function DR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ku($o)}function bR(t,e){if(t==="click")return Ku(e)}function LR(t,e){if(t==="input"||t==="change")return Ku(e)}function VR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:VR;function Bo(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qh.call(e,i)||!on(t[i],e[i]))return!1}return!0}function jg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $g(t,e){var n=jg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jg(n)}}function E0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?E0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function w0(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function MR(t){var e=w0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&E0(n.ownerDocument.documentElement,n)){if(r!==null&&Bf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=$g(n,s);var o=$g(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FR=Un&&"documentMode"in document&&11>=document.documentMode,Ki=null,pd=null,Io=null,md=!1;function Bg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;md||Ki==null||Ki!==Wl(r)||(r=Ki,"selectionStart"in r&&Bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&Bo(Io,r)||(Io=r,r=Yl(pd,"onSelect"),0<r.length&&(e=new Uf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ki)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qi={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},hh={},T0={};Un&&(T0=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function Qu(t){if(hh[t])return hh[t];if(!Qi[t])return t;var e=Qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T0)return hh[t]=e[n];return t}var I0=Qu("animationend"),S0=Qu("animationiteration"),R0=Qu("animationstart"),C0=Qu("transitionend"),A0=new Map,zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){A0.set(t,e),Ti(e,[t])}for(var dh=0;dh<zg.length;dh++){var fh=zg[dh],UR=fh.toLowerCase(),jR=fh[0].toUpperCase()+fh.slice(1);Fr(UR,"on"+jR)}Fr(I0,"onAnimationEnd");Fr(S0,"onAnimationIteration");Fr(R0,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(C0,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$R=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Wg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,US(r,e,void 0,t),t.currentTarget=null}function k0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Wg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Wg(i,l,c),s=u}}}if(ql)throw t=cd,ql=!1,cd=null,t}function Se(t,e){var n=e[Ed];n===void 0&&(n=e[Ed]=new Set);var r=t+"__bubble";n.has(r)||(P0(e,t,2,!1),n.add(r))}function ph(t,e,n){var r=0;e&&(r|=4),P0(n,t,r,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[nl]){t[nl]=!0,V_.forEach(function(n){n!=="selectionchange"&&($R.has(n)||ph(n,!1,t),ph(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,ph("selectionchange",!1,e))}}function P0(t,e,n,r){switch(d0(e)){case 1:var i=tR;break;case 4:i=nR;break;default:i=Mf}n=i.bind(null,e,n,t),i=void 0,!ud||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ni(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}J_(function(){var c=s,d=Df(n),p=[];e:{var m=A0.get(t);if(m!==void 0){var I=Uf,C=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":I=yR;break;case"focusin":C="focus",I=lh;break;case"focusout":C="blur",I=lh;break;case"beforeblur":case"afterblur":I=lh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=sR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=ER;break;case I0:case S0:case R0:I=lR;break;case C0:I=TR;break;case"scroll":I=rR;break;case"wheel":I=SR;break;case"copy":case"cut":case"paste":I=cR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=bg}var P=(e&4)!==0,N=!P&&t==="scroll",w=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,_;v!==null;){_=v;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,w!==null&&(x=Mo(v,w),x!=null&&P.push(Wo(v,x,_)))),N)break;v=v.return}0<P.length&&(m=new I(m,C,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==ad&&(C=n.relatedTarget||n.fromElement)&&(ni(C)||C[jn]))break e;if((I||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,I?(C=n.relatedTarget||n.toElement,I=c,C=C?ni(C):null,C!==null&&(N=Ii(C),C!==N||C.tag!==5&&C.tag!==6)&&(C=null)):(I=null,C=c),I!==C)){if(P=Og,x="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=bg,x="onPointerLeave",w="onPointerEnter",v="pointer"),N=I==null?m:Xi(I),_=C==null?m:Xi(C),m=new P(x,v+"leave",I,n,d),m.target=N,m.relatedTarget=_,x=null,ni(d)===c&&(P=new P(w,v+"enter",C,n,d),P.target=_,P.relatedTarget=N,x=P),N=x,I&&C)t:{for(P=I,w=C,v=0,_=P;_;_=Mi(_))v++;for(_=0,x=w;x;x=Mi(x))_++;for(;0<v-_;)P=Mi(P),v--;for(;0<_-v;)w=Mi(w),_--;for(;v--;){if(P===w||w!==null&&P===w.alternate)break t;P=Mi(P),w=Mi(w)}P=null}else P=null;I!==null&&Hg(p,m,I,P,!1),C!==null&&N!==null&&Hg(p,N,C,P,!0)}}e:{if(m=c?Xi(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var F=xR;else if(Mg(m))if(v0)F=LR;else{F=DR;var V=OR}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=bR);if(F&&(F=F(t,c))){y0(p,F,n,d);break e}V&&V(t,m,c),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&nd(m,"number",m.value)}switch(V=c?Xi(c):window,t){case"focusin":(Mg(V)||V.contentEditable==="true")&&(Ki=V,pd=c,Io=null);break;case"focusout":Io=pd=Ki=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,Bg(p,n,d);break;case"selectionchange":if(FR)break;case"keydown":case"keyup":Bg(p,n,d)}var E;if($f)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Gi?m0(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(p0&&n.locale!=="ko"&&(Gi||g!=="onCompositionStart"?g==="onCompositionEnd"&&Gi&&(E=f0()):(hr=d,Ff="value"in hr?hr.value:hr.textContent,Gi=!0)),V=Yl(c,g),0<V.length&&(g=new Dg(g,t,null,n,d),p.push({event:g,listeners:V}),E?g.data=E:(E=g0(n),E!==null&&(g.data=E)))),(E=CR?AR(t,n):kR(t,n))&&(c=Yl(c,"onBeforeInput"),0<c.length&&(d=new Dg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=E))}k0(p,e)})}function Wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Mo(t,n),s!=null&&r.unshift(Wo(t,s,i)),s=Mo(t,e),s!=null&&r.push(Wo(t,s,i))),t=t.return}return r}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Mo(n,s),u!=null&&o.unshift(Wo(n,u,l))):i||(u=Mo(n,s),u!=null&&o.push(Wo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BR=/\r\n?/g,zR=/\u0000|\uFFFD/g;function qg(t){return(typeof t=="string"?t:""+t).replace(BR,`
`).replace(zR,"")}function rl(t,e,n){if(e=qg(e),qg(t)!==e&&n)throw Error($(425))}function Jl(){}var gd=null,yd=null;function vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _d=typeof setTimeout=="function"?setTimeout:void 0,WR=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,HR=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(qR)}:_d;function qR(t){setTimeout(function(){throw t})}function gh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),jo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);jo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),pn="__reactFiber$"+Os,Ho="__reactProps$"+Os,jn="__reactContainer$"+Os,Ed="__reactEvents$"+Os,GR="__reactListeners$"+Os,KR="__reactHandles$"+Os;function ni(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kg(t);t!==null;){if(n=t[pn])return n;t=Kg(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[pn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Xu(t){return t[Ho]||null}var wd=[],Yi=-1;function Ur(t){return{current:t}}function Ce(t){0>Yi||(t.current=wd[Yi],wd[Yi]=null,Yi--)}function Te(t,e){Yi++,wd[Yi]=t.current,t.current=e}var Or={},ft=Ur(Or),Rt=Ur(!1),fi=Or;function gs(t,e){var n=t.type.contextTypes;if(!n)return Or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function Zl(){Ce(Rt),Ce(ft)}function Qg(t,e,n){if(ft.current!==Or)throw Error($(168));Te(ft,e),Te(Rt,n)}function N0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,OS(t)||"Unknown",i));return Ne({},n,r)}function eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,fi=ft.current,Te(ft,t),Te(Rt,Rt.current),!0}function Xg(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=N0(t,e,fi),r.__reactInternalMemoizedMergedChildContext=t,Ce(Rt),Ce(ft),Te(ft,t)):Ce(Rt),Te(Rt,n)}var Nn=null,Yu=!1,yh=!1;function x0(t){Nn===null?Nn=[t]:Nn.push(t)}function QR(t){Yu=!0,x0(t)}function jr(){if(!yh&&Nn!==null){yh=!0;var t=0,e=me;try{var n=Nn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,Yu=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(t+1)),n0(bf,jr),i}finally{me=e,yh=!1}}return null}var Ji=[],Zi=0,tu=null,nu=0,Ut=[],jt=0,pi=null,xn=1,On="";function Yr(t,e){Ji[Zi++]=nu,Ji[Zi++]=tu,tu=t,nu=e}function O0(t,e,n){Ut[jt++]=xn,Ut[jt++]=On,Ut[jt++]=pi,pi=t;var r=xn;t=On;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-rn(e)+i|n<<i|r,On=s+t}else xn=1<<s|n<<i|r,On=t}function zf(t){t.return!==null&&(Yr(t,1),O0(t,1,0))}function Wf(t){for(;t===tu;)tu=Ji[--Zi],Ji[Zi]=null,nu=Ji[--Zi],Ji[Zi]=null;for(;t===pi;)pi=Ut[--jt],Ut[jt]=null,On=Ut[--jt],Ut[jt]=null,xn=Ut[--jt],Ut[jt]=null}var bt=null,Ot=null,Ae=!1,en=null;function D0(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bt=t,Ot=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pi!==null?{id:xn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bt=t,Ot=null,!0):!1;default:return!1}}function Td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Id(t){if(Ae){var e=Ot;if(e){var n=e;if(!Yg(t,e)){if(Td(t))throw Error($(418));e=wr(n.nextSibling);var r=bt;e&&Yg(t,e)?D0(r,n):(t.flags=t.flags&-4097|2,Ae=!1,bt=t)}}else{if(Td(t))throw Error($(418));t.flags=t.flags&-4097|2,Ae=!1,bt=t}}}function Jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function il(t){if(t!==bt)return!1;if(!Ae)return Jg(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vd(t.type,t.memoizedProps)),e&&(e=Ot)){if(Td(t))throw b0(),Error($(418));for(;e;)D0(t,e),e=wr(e.nextSibling)}if(Jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=bt?wr(t.stateNode.nextSibling):null;return!0}function b0(){for(var t=Ot;t;)t=wr(t.nextSibling)}function ys(){Ot=bt=null,Ae=!1}function Hf(t){en===null?en=[t]:en.push(t)}var XR=Qn.ReactCurrentBatchConfig;function ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zg(t){var e=t._init;return e(t._payload)}function L0(t){function e(w,v){if(t){var _=w.deletions;_===null?(w.deletions=[v],w.flags|=16):_.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=Rr(w,v),w.index=0,w.sibling=null,w}function s(w,v,_){return w.index=_,t?(_=w.alternate,_!==null?(_=_.index,_<v?(w.flags|=2,v):_):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,_,x){return v===null||v.tag!==6?(v=Sh(_,w.mode,x),v.return=w,v):(v=i(v,_),v.return=w,v)}function u(w,v,_,x){var F=_.type;return F===qi?d(w,v,_.props.children,x,_.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===nr&&Zg(F)===v.type)?(x=i(v,_.props),x.ref=ao(w,v,_),x.return=w,x):(x=Ol(_.type,_.key,_.props,null,w.mode,x),x.ref=ao(w,v,_),x.return=w,x)}function c(w,v,_,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Rh(_,w.mode,x),v.return=w,v):(v=i(v,_.children||[]),v.return=w,v)}function d(w,v,_,x,F){return v===null||v.tag!==7?(v=li(_,w.mode,x,F),v.return=w,v):(v=i(v,_),v.return=w,v)}function p(w,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Sh(""+v,w.mode,_),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ka:return _=Ol(v.type,v.key,v.props,null,w.mode,_),_.ref=ao(w,null,v),_.return=w,_;case Hi:return v=Rh(v,w.mode,_),v.return=w,v;case nr:var x=v._init;return p(w,x(v._payload),_)}if(ho(v)||no(v))return v=li(v,w.mode,_,null),v.return=w,v;sl(w,v)}return null}function m(w,v,_,x){var F=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return F!==null?null:l(w,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ka:return _.key===F?u(w,v,_,x):null;case Hi:return _.key===F?c(w,v,_,x):null;case nr:return F=_._init,m(w,v,F(_._payload),x)}if(ho(_)||no(_))return F!==null?null:d(w,v,_,x,null);sl(w,_)}return null}function I(w,v,_,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return w=w.get(_)||null,l(v,w,""+x,F);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ka:return w=w.get(x.key===null?_:x.key)||null,u(v,w,x,F);case Hi:return w=w.get(x.key===null?_:x.key)||null,c(v,w,x,F);case nr:var V=x._init;return I(w,v,_,V(x._payload),F)}if(ho(x)||no(x))return w=w.get(_)||null,d(v,w,x,F,null);sl(v,x)}return null}function C(w,v,_,x){for(var F=null,V=null,E=v,g=v=0,T=null;E!==null&&g<_.length;g++){E.index>g?(T=E,E=null):T=E.sibling;var S=m(w,E,_[g],x);if(S===null){E===null&&(E=T);break}t&&E&&S.alternate===null&&e(w,E),v=s(S,v,g),V===null?F=S:V.sibling=S,V=S,E=T}if(g===_.length)return n(w,E),Ae&&Yr(w,g),F;if(E===null){for(;g<_.length;g++)E=p(w,_[g],x),E!==null&&(v=s(E,v,g),V===null?F=E:V.sibling=E,V=E);return Ae&&Yr(w,g),F}for(E=r(w,E);g<_.length;g++)T=I(E,w,g,_[g],x),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?g:T.key),v=s(T,v,g),V===null?F=T:V.sibling=T,V=T);return t&&E.forEach(function(k){return e(w,k)}),Ae&&Yr(w,g),F}function P(w,v,_,x){var F=no(_);if(typeof F!="function")throw Error($(150));if(_=F.call(_),_==null)throw Error($(151));for(var V=F=null,E=v,g=v=0,T=null,S=_.next();E!==null&&!S.done;g++,S=_.next()){E.index>g?(T=E,E=null):T=E.sibling;var k=m(w,E,S.value,x);if(k===null){E===null&&(E=T);break}t&&E&&k.alternate===null&&e(w,E),v=s(k,v,g),V===null?F=k:V.sibling=k,V=k,E=T}if(S.done)return n(w,E),Ae&&Yr(w,g),F;if(E===null){for(;!S.done;g++,S=_.next())S=p(w,S.value,x),S!==null&&(v=s(S,v,g),V===null?F=S:V.sibling=S,V=S);return Ae&&Yr(w,g),F}for(E=r(w,E);!S.done;g++,S=_.next())S=I(E,w,g,S.value,x),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?g:S.key),v=s(S,v,g),V===null?F=S:V.sibling=S,V=S);return t&&E.forEach(function(O){return e(w,O)}),Ae&&Yr(w,g),F}function N(w,v,_,x){if(typeof _=="object"&&_!==null&&_.type===qi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ka:e:{for(var F=_.key,V=v;V!==null;){if(V.key===F){if(F=_.type,F===qi){if(V.tag===7){n(w,V.sibling),v=i(V,_.props.children),v.return=w,w=v;break e}}else if(V.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===nr&&Zg(F)===V.type){n(w,V.sibling),v=i(V,_.props),v.ref=ao(w,V,_),v.return=w,w=v;break e}n(w,V);break}else e(w,V);V=V.sibling}_.type===qi?(v=li(_.props.children,w.mode,x,_.key),v.return=w,w=v):(x=Ol(_.type,_.key,_.props,null,w.mode,x),x.ref=ao(w,v,_),x.return=w,w=x)}return o(w);case Hi:e:{for(V=_.key;v!==null;){if(v.key===V)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(w,v.sibling),v=i(v,_.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Rh(_,w.mode,x),v.return=w,w=v}return o(w);case nr:return V=_._init,N(w,v,V(_._payload),x)}if(ho(_))return C(w,v,_,x);if(no(_))return P(w,v,_,x);sl(w,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,_),v.return=w,w=v):(n(w,v),v=Sh(_,w.mode,x),v.return=w,w=v),o(w)):n(w,v)}return N}var vs=L0(!0),V0=L0(!1),ru=Ur(null),iu=null,es=null,qf=null;function Gf(){qf=es=iu=null}function Kf(t){var e=ru.current;Ce(ru),t._currentValue=e}function Sd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function us(t,e){iu=t,qf=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(qf!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(iu===null)throw Error($(308));es=t,iu.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var ri=null;function Qf(t){ri===null?ri=[t]:ri.push(t)}function M0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qf(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function Xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,Qf(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lf(t,n)}}function ey(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function su(t,e,n,r){var i=t.updateQueue;rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(m=e,I=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){p=C.call(I,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,m=typeof C=="function"?C.call(I,p,m):C,m==null)break e;p=Ne({},p,m);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=I,u=p):d=d.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gi|=o,t.lanes=o,t.memoizedState=p}}function ty(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var ga={},yn=Ur(ga),qo=Ur(ga),Go=Ur(ga);function ii(t){if(t===ga)throw Error($(174));return t}function Yf(t,e){switch(Te(Go,e),Te(qo,t),Te(yn,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:id(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=id(e,t)}Ce(yn),Te(yn,e)}function _s(){Ce(yn),Ce(qo),Ce(Go)}function U0(t){ii(Go.current);var e=ii(yn.current),n=id(e,t.type);e!==n&&(Te(qo,t),Te(yn,n))}function Jf(t){qo.current===t&&(Ce(yn),Ce(qo))}var ke=Ur(0);function ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vh=[];function Zf(){for(var t=0;t<vh.length;t++)vh[t]._workInProgressVersionPrimary=null;vh.length=0}var Al=Qn.ReactCurrentDispatcher,_h=Qn.ReactCurrentBatchConfig,mi=0,Pe=null,We=null,Qe=null,au=!1,So=!1,Ko=0,YR=0;function at(){throw Error($(321))}function ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function tp(t,e,n,r,i,s){if(mi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?tC:nC,t=n(r,i),So){s=0;do{if(So=!1,Ko=0,25<=s)throw Error($(301));s+=1,Qe=We=null,e.updateQueue=null,Al.current=rC,t=n(r,i)}while(So)}if(Al.current=lu,e=We!==null&&We.next!==null,mi=0,Qe=We=Pe=null,au=!1,e)throw Error($(300));return t}function np(){var t=Ko!==0;return Ko=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Pe.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function qt(){if(We===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Qe===null?Pe.memoizedState:Qe.next;if(e!==null)Qe=e,We=t;else{if(t===null)throw Error($(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Qe===null?Pe.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function Qo(t,e){return typeof e=="function"?e(t):e}function Eh(t){var e=qt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((mi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Pe.lanes|=d,gi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,on(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wh(t){var e=qt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);on(s,e.memoizedState)||(St=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function j0(){}function $0(t,e){var n=Pe,r=qt(),i=e(),s=!on(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,rp(W0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,Xo(9,z0.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error($(349));mi&30||B0(n,e,i)}return i}function B0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function z0(t,e,n,r){e.value=n,e.getSnapshot=r,H0(e)&&q0(t)}function W0(t,e,n){return n(function(){H0(e)&&q0(t)})}function H0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function q0(t){var e=$n(t,1);e!==null&&sn(e,t,1,-1)}function ny(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=eC.bind(null,Pe,t),[e.memoizedState,t]}function Xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function G0(){return qt().memoizedState}function kl(t,e,n,r){var i=dn();Pe.flags|=t,i.memoizedState=Xo(1|e,n,void 0,r===void 0?null:r)}function Ju(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&ep(r,o.deps)){i.memoizedState=Xo(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Xo(1|e,n,s,r)}function ry(t,e){return kl(8390656,8,t,e)}function rp(t,e){return Ju(2048,8,t,e)}function K0(t,e){return Ju(4,2,t,e)}function Q0(t,e){return Ju(4,4,t,e)}function X0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Y0(t,e,n){return n=n!=null?n.concat([t]):null,Ju(4,4,X0.bind(null,e,t),n)}function ip(){}function J0(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ep(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Z0(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ep(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function eE(t,e,n){return mi&21?(on(n,e)||(n=s0(),Pe.lanes|=n,gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function JR(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=_h.transition;_h.transition={};try{t(!1),e()}finally{me=n,_h.transition=r}}function tE(){return qt().memoizedState}function ZR(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nE(t))rE(e,n);else if(n=M0(t,e,n,r),n!==null){var i=vt();sn(n,t,r,i),iE(n,e,r)}}function eC(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nE(t))rE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,on(l,o)){var u=e.interleaved;u===null?(i.next=i,Qf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=M0(t,e,i,r),n!==null&&(i=vt(),sn(n,t,r,i),iE(n,e,r))}}function nE(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function rE(t,e){So=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lf(t,n)}}var lu={readContext:Ht,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},tC={readContext:Ht,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:ry,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,X0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZR.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:ny,useDebugValue:ip,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=ny(!1),e=t[0];return t=JR.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=dn();if(Ae){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),Xe===null)throw Error($(349));mi&30||B0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ry(W0.bind(null,r,s,t),[t]),r.flags|=2048,Xo(9,z0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=Xe.identifierPrefix;if(Ae){var n=On,r=xn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nC={readContext:Ht,useCallback:J0,useContext:Ht,useEffect:rp,useImperativeHandle:Y0,useInsertionEffect:K0,useLayoutEffect:Q0,useMemo:Z0,useReducer:Eh,useRef:G0,useState:function(){return Eh(Qo)},useDebugValue:ip,useDeferredValue:function(t){var e=qt();return eE(e,We.memoizedState,t)},useTransition:function(){var t=Eh(Qo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:$0,useId:tE,unstable_isNewReconciler:!1},rC={readContext:Ht,useCallback:J0,useContext:Ht,useEffect:rp,useImperativeHandle:Y0,useInsertionEffect:K0,useLayoutEffect:Q0,useMemo:Z0,useReducer:wh,useRef:G0,useState:function(){return wh(Qo)},useDebugValue:ip,useDeferredValue:function(t){var e=qt();return We===null?e.memoizedState=t:eE(e,We.memoizedState,t)},useTransition:function(){var t=wh(Qo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:$0,useId:tE,unstable_isNewReconciler:!1};function Jt(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zu={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Sr(t),s=Vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(sn(e,t,i,r),Cl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Sr(t),s=Vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(sn(e,t,i,r),Cl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=Sr(t),i=Vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(sn(e,t,r,n),Cl(e,t,r))}};function iy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bo(n,r)||!Bo(i,s):!0}function sE(t,e,n){var r=!1,i=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=Ct(e)?fi:ft.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zu.enqueueReplaceState(e,e.state,null)}function Cd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Xf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=Ct(e)?fi:ft.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zu.enqueueReplaceState(i,i.state,null),su(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,e){try{var n="",r=e;do n+=xS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Th(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iC=typeof WeakMap=="function"?WeakMap:Map;function oE(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){cu||(cu=!0,Md=r),Ad(t,e)},n}function aE(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ad(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ad(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function oy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vC.bind(null,t,e,n),e.then(t,t))}function ay(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ly(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var sC=Qn.ReactCurrentOwner,St=!1;function gt(t,e,n,r){e.child=t===null?V0(e,null,n,r):vs(e,t.child,n,r)}function uy(t,e,n,r,i){n=n.render;var s=e.ref;return us(e,i),r=tp(t,e,n,r,s,i),n=np(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(Ae&&n&&zf(e),e.flags|=1,gt(t,e,r,i),e.child)}function cy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lE(t,e,s,r,i)):(t=Ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(o,r)&&t.ref===e.ref)return Bn(t,e,i)}return e.flags|=1,t=Rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function lE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bo(s,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,Bn(t,e,i)}return kd(t,e,n,r,i)}function uE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(ns,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(ns,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(ns,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(ns,xt),xt|=r;return gt(t,e,i,n),e.child}function cE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kd(t,e,n,r,i){var s=Ct(n)?fi:ft.current;return s=gs(e,s),us(e,i),n=tp(t,e,n,r,s,i),r=np(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(Ae&&r&&zf(e),e.flags|=1,gt(t,e,n,i),e.child)}function hy(t,e,n,r,i){if(Ct(n)){var s=!0;eu(e)}else s=!1;if(us(e,i),e.stateNode===null)Pl(t,e),sE(e,n,r),Cd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ht(c):(c=Ct(n)?fi:ft.current,c=gs(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&sy(e,o,r,c),rr=!1;var m=e.memoizedState;o.state=m,su(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Rt.current||rr?(typeof d=="function"&&(Rd(e,n,d,r),u=e.memoizedState),(l=rr||iy(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,F0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Jt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ht(u):(u=Ct(n)?fi:ft.current,u=gs(e,u));var I=n.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&sy(e,o,r,u),rr=!1,m=e.memoizedState,o.state=m,su(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||Rt.current||rr?(typeof I=="function"&&(Rd(e,n,I,r),C=e.memoizedState),(c=rr||iy(e,n,c,r,m,C,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Pd(t,e,n,r,s,i)}function Pd(t,e,n,r,i,s){cE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Xg(e,n,!1),Bn(t,e,s);r=e.stateNode,sC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,l,s)):gt(t,e,l,s),e.memoizedState=r.state,i&&Xg(e,n,!0),e.child}function hE(t){var e=t.stateNode;e.pendingContext?Qg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qg(t,e.context,!1),Yf(t,e.containerInfo)}function dy(t,e,n,r,i){return ys(),Hf(i),e.flags|=256,gt(t,e,n,r),e.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function dE(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(ke,i&1),t===null)return Id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nc(o,r,0,null),t=li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xd(n),e.memoizedState=Nd,t):sp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return oC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Rr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Rr(l,s):(s=li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nd,r}return s=t.child,t=s.sibling,r=Rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sp(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ol(t,e,n,r){return r!==null&&Hf(r),vs(e,t.child,null,n),t=sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Th(Error($(422))),ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nc({mode:"visible",children:r.children},i,0,null),s=li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=xd(o),e.memoizedState=Nd,s);if(!(e.mode&1))return ol(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error($(419)),r=Th(s,r,void 0),ol(t,e,o,r)}if(l=(o&t.childLanes)!==0,St||l){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),sn(r,t,i,-1))}return hp(),r=Th(Error($(421))),ol(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_C.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=wr(i.nextSibling),bt=e,Ae=!0,en=null,t!==null&&(Ut[jt++]=xn,Ut[jt++]=On,Ut[jt++]=pi,xn=t.id,On=t.overflow,pi=e),e=sp(e,r.children),e.flags|=4096,e)}function fy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sd(t.return,e,n)}function Ih(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fy(t,n,e);else if(t.tag===19)fy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ou(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ih(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ou(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ih(e,!0,n,null,s);break;case"together":Ih(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aC(t,e,n){switch(e.tag){case 3:hE(e),ys();break;case 5:U0(e);break;case 1:Ct(e.type)&&eu(e);break;case 4:Yf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(ru,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?dE(t,e,n):(Te(ke,ke.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);Te(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,uE(t,e,n)}return Bn(t,e,n)}var pE,Od,mE,gE;pE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Od=function(){};mE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ii(yn.current);var s=null;switch(n){case"input":i=ed(t,i),r=ed(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=rd(t,i),r=rd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jl)}sd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};gE=function(t,e,n,r){n!==r&&(e.flags|=4)};function lo(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lC(t,e,n){var r=e.pendingProps;switch(Wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return Ct(e.type)&&Zl(),lt(e),null;case 3:return r=e.stateNode,_s(),Ce(Rt),Ce(ft),Zf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(jd(en),en=null))),Od(t,e),lt(e),null;case 5:Jf(e);var i=ii(Go.current);if(n=e.type,t!==null&&e.stateNode!=null)mE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return lt(e),null}if(t=ii(yn.current),il(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[Ho]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<po.length;i++)Se(po[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Tg(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":Sg(r,s),Se("invalid",r)}sd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,l,t),i=["children",""+l]):Lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":Qa(r),Ig(r,s,!0);break;case"textarea":Qa(r),Rg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Jl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=W_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[Ho]=r,pE(t,e,!1,!1),e.stateNode=t;e:{switch(o=od(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<po.length;i++)Se(po[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":Tg(t,r),i=ed(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Se("invalid",t);break;case"textarea":Sg(t,r),i=rd(t,r),Se("invalid",t);break;default:i=r}sd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?G_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&H_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vo(t,u):typeof u=="number"&&Vo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",t):u!=null&&Pf(t,s,u,o))}switch(n){case"input":Qa(t),Ig(t,r,!1);break;case"textarea":Qa(t),Rg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ss(t,!!r.multiple,s,!1):r.defaultValue!=null&&ss(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)gE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=ii(Go.current),ii(yn.current),il(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=bt,t!==null))switch(t.tag){case 3:rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return lt(e),null;case 13:if(Ce(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Ot!==null&&e.mode&1&&!(e.flags&128))b0(),ys(),e.flags|=98560,s=!1;else if(s=il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[pn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else en!==null&&(jd(en),en=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?He===0&&(He=3):hp())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return _s(),Od(t,e),t===null&&zo(e.stateNode.containerInfo),lt(e),null;case 10:return Kf(e.type._context),lt(e),null;case 17:return Ct(e.type)&&Zl(),lt(e),null;case 19:if(Ce(ke),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)lo(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ou(t),o!==null){for(e.flags|=128,lo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>ws&&(e.flags|=128,r=!0,lo(s,!1),e.lanes=4194304)}else{if(!r)if(t=ou(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return lt(e),null}else 2*Me()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,r=!0,lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=ke.current,Te(ke,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return cp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function uC(t,e){switch(Wf(e),e.tag){case 1:return Ct(e.type)&&Zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),Ce(Rt),Ce(ft),Zf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jf(e),null;case 13:if(Ce(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(ke),null;case 4:return _s(),null;case 10:return Kf(e.type._context),null;case 22:case 23:return cp(),null;case 24:return null;default:return null}}var al=!1,ht=!1,cC=typeof WeakSet=="function"?WeakSet:Set,W=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Dd(t,e,n){try{n()}catch(r){be(t,e,r)}}var py=!1;function hC(t,e){if(gd=Ql,t=w0(),Bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yd={focusedElem:t,selectionRange:n},Ql=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,N=C.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:Jt(e.type,P),N);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(x){be(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return C=py,py=!1,C}function Ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Dd(e,n,s)}i=i.next}while(i!==r)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yE(t){var e=t.alternate;e!==null&&(t.alternate=null,yE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[Ho],delete e[Ed],delete e[GR],delete e[KR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vE(t){return t.tag===5||t.tag===3||t.tag===4}function my(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jl));else if(r!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}function Vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vd(t,e,n),t=t.sibling;t!==null;)Vd(t,e,n),t=t.sibling}var Ze=null,Zt=!1;function er(t,e,n){for(n=n.child;n!==null;)_E(t,e,n),n=n.sibling}function _E(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(qu,n)}catch{}switch(n.tag){case 5:ht||ts(n,e);case 6:var r=Ze,i=Zt;Ze=null,er(t,e,n),Ze=r,Zt=i,Ze!==null&&(Zt?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(Zt?(t=Ze,n=n.stateNode,t.nodeType===8?gh(t.parentNode,n):t.nodeType===1&&gh(t,n),jo(t)):gh(Ze,n.stateNode));break;case 4:r=Ze,i=Zt,Ze=n.stateNode.containerInfo,Zt=!0,er(t,e,n),Ze=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dd(n,e,o),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!ht&&(ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){be(n,e,l)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,er(t,e,n),ht=r):er(t,e,n);break;default:er(t,e,n)}}function gy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cC),e.forEach(function(r){var i=EC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,Zt=!1;break e;case 3:Ze=l.stateNode.containerInfo,Zt=!0;break e;case 4:Ze=l.stateNode.containerInfo,Zt=!0;break e}l=l.return}if(Ze===null)throw Error($(160));_E(s,o,i),Ze=null,Zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)EE(e,t),e=e.sibling}function EE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),hn(t),r&4){try{Ro(3,t,t.return),ec(3,t)}catch(P){be(t,t.return,P)}try{Ro(5,t,t.return)}catch(P){be(t,t.return,P)}}break;case 1:Yt(e,t),hn(t),r&512&&n!==null&&ts(n,n.return);break;case 5:if(Yt(e,t),hn(t),r&512&&n!==null&&ts(n,n.return),t.flags&32){var i=t.stateNode;try{Vo(i,"")}catch(P){be(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&B_(i,s),od(l,o);var c=od(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?G_(i,p):d==="dangerouslySetInnerHTML"?H_(i,p):d==="children"?Vo(i,p):Pf(i,d,p,c)}switch(l){case"input":td(i,s);break;case"textarea":z_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?ss(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?ss(i,!!s.multiple,s.defaultValue,!0):ss(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ho]=s}catch(P){be(t,t.return,P)}}break;case 6:if(Yt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){be(t,t.return,P)}}break;case 3:if(Yt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(P){be(t,t.return,P)}break;case 4:Yt(e,t),hn(t);break;case 13:Yt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lp=Me())),r&4&&gy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(c=ht)||d,Yt(e,t),ht=c):Yt(e,t),hn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(p=W=d;W!==null;){switch(m=W,I=m.child,m.tag){case 0:case 11:case 14:case 15:Ro(4,m,m.return);break;case 1:ts(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){be(r,n,P)}}break;case 5:ts(m,m.return);break;case 22:if(m.memoizedState!==null){vy(p);continue}}I!==null?(I.return=m,W=I):vy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=q_("display",o))}catch(P){be(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){be(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Yt(e,t),hn(t),r&4&&gy(t);break;case 21:break;default:Yt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vE(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vo(i,""),r.flags&=-33);var s=my(t);Vd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=my(t);Ld(t,l,o);break;default:throw Error($(161))}}catch(u){be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dC(t,e,n){W=t,wE(t)}function wE(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||al;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ht;l=al;var c=ht;if(al=o,(ht=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?_y(i):u!==null?(u.return=o,W=u):_y(i);for(;s!==null;)W=s,wE(s),s=s.sibling;W=i,al=l,ht=c}yy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):yy(t)}}function yy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ty(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ty(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&jo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}ht||e.flags&512&&bd(e)}catch(m){be(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function vy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function _y(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(u){be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){be(e,i,u)}}var s=e.return;try{bd(e)}catch(u){be(e,s,u)}break;case 5:var o=e.return;try{bd(e)}catch(u){be(e,o,u)}}}catch(u){be(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var fC=Math.ceil,uu=Qn.ReactCurrentDispatcher,op=Qn.ReactCurrentOwner,zt=Qn.ReactCurrentBatchConfig,ce=0,Xe=null,je=null,nt=0,xt=0,ns=Ur(0),He=0,Yo=null,gi=0,tc=0,ap=0,Co=null,It=null,lp=0,ws=1/0,Pn=null,cu=!1,Md=null,Ir=null,ll=!1,dr=null,hu=0,Ao=0,Fd=null,Nl=-1,xl=0;function vt(){return ce&6?Me():Nl!==-1?Nl:Nl=Me()}function Sr(t){return t.mode&1?ce&2&&nt!==0?nt&-nt:XR.transition!==null?(xl===0&&(xl=s0()),xl):(t=me,t!==0||(t=window.event,t=t===void 0?16:d0(t.type)),t):1}function sn(t,e,n,r){if(50<Ao)throw Ao=0,Fd=null,Error($(185));fa(t,n,r),(!(ce&2)||t!==Xe)&&(t===Xe&&(!(ce&2)&&(tc|=n),He===4&&or(t,nt)),At(t,r),n===1&&ce===0&&!(e.mode&1)&&(ws=Me()+500,Yu&&jr()))}function At(t,e){var n=t.callbackNode;XS(t,e);var r=Kl(t,t===Xe?nt:0);if(r===0)n!==null&&kg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&kg(n),e===1)t.tag===0?QR(Ey.bind(null,t)):x0(Ey.bind(null,t)),HR(function(){!(ce&6)&&jr()}),n=null;else{switch(o0(r)){case 1:n=bf;break;case 4:n=r0;break;case 16:n=Gl;break;case 536870912:n=i0;break;default:n=Gl}n=PE(n,TE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function TE(t,e){if(Nl=-1,xl=0,ce&6)throw Error($(327));var n=t.callbackNode;if(cs()&&t.callbackNode!==n)return null;var r=Kl(t,t===Xe?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=du(t,r);else{e=r;var i=ce;ce|=2;var s=SE();(Xe!==t||nt!==e)&&(Pn=null,ws=Me()+500,ai(t,e));do try{gC();break}catch(l){IE(t,l)}while(!0);Gf(),uu.current=s,ce=i,je!==null?e=0:(Xe=null,nt=0,e=He)}if(e!==0){if(e===2&&(i=hd(t),i!==0&&(r=i,e=Ud(t,i))),e===1)throw n=Yo,ai(t,0),or(t,r),At(t,Me()),n;if(e===6)or(t,r);else{if(i=t.current.alternate,!(r&30)&&!pC(i)&&(e=du(t,r),e===2&&(s=hd(t),s!==0&&(r=s,e=Ud(t,s))),e===1))throw n=Yo,ai(t,0),or(t,r),At(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Jr(t,It,Pn);break;case 3:if(or(t,r),(r&130023424)===r&&(e=lp+500-Me(),10<e)){if(Kl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_d(Jr.bind(null,t,It,Pn),e);break}Jr(t,It,Pn);break;case 4:if(or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fC(r/1960))-r,10<r){t.timeoutHandle=_d(Jr.bind(null,t,It,Pn),r);break}Jr(t,It,Pn);break;case 5:Jr(t,It,Pn);break;default:throw Error($(329))}}}return At(t,Me()),t.callbackNode===n?TE.bind(null,t):null}function Ud(t,e){var n=Co;return t.current.memoizedState.isDehydrated&&(ai(t,e).flags|=256),t=du(t,e),t!==2&&(e=It,It=n,e!==null&&jd(e)),t}function jd(t){It===null?It=t:It.push.apply(It,t)}function pC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!on(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~ap,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function Ey(t){if(ce&6)throw Error($(327));cs();var e=Kl(t,0);if(!(e&1))return At(t,Me()),null;var n=du(t,e);if(t.tag!==0&&n===2){var r=hd(t);r!==0&&(e=r,n=Ud(t,r))}if(n===1)throw n=Yo,ai(t,0),or(t,e),At(t,Me()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,It,Pn),At(t,Me()),null}function up(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(ws=Me()+500,Yu&&jr())}}function yi(t){dr!==null&&dr.tag===0&&!(ce&6)&&cs();var e=ce;ce|=1;var n=zt.transition,r=me;try{if(zt.transition=null,me=1,t)return t()}finally{me=r,zt.transition=n,ce=e,!(ce&6)&&jr()}}function cp(){xt=ns.current,Ce(ns)}function ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,WR(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Wf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zl();break;case 3:_s(),Ce(Rt),Ce(ft),Zf();break;case 5:Jf(r);break;case 4:_s();break;case 13:Ce(ke);break;case 19:Ce(ke);break;case 10:Kf(r.type._context);break;case 22:case 23:cp()}n=n.return}if(Xe=t,je=t=Rr(t.current,null),nt=xt=e,He=0,Yo=null,ap=tc=gi=0,It=Co=null,ri!==null){for(e=0;e<ri.length;e++)if(n=ri[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ri=null}return t}function IE(t,e){do{var n=je;try{if(Gf(),Al.current=lu,au){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}au=!1}if(mi=0,Qe=We=Pe=null,So=!1,Ko=0,op.current=null,n===null||n.return===null){He=1,Yo=e,je=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=nt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=ay(o);if(I!==null){I.flags&=-257,ly(I,o,l,s,e),I.mode&1&&oy(s,c,e),e=I,u=c;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){oy(s,c,e),hp();break e}u=Error($(426))}}else if(Ae&&l.mode&1){var N=ay(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),ly(N,o,l,s,e),Hf(Es(u,l));break e}}s=u=Es(u,l),He!==4&&(He=2),Co===null?Co=[s]:Co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=oE(s,u,e);ey(s,w);break e;case 1:l=u;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ir===null||!Ir.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=aE(s,l,e);ey(s,x);break e}}s=s.return}while(s!==null)}CE(n)}catch(F){e=F,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function SE(){var t=uu.current;return uu.current=lu,t===null?lu:t}function hp(){(He===0||He===3||He===2)&&(He=4),Xe===null||!(gi&268435455)&&!(tc&268435455)||or(Xe,nt)}function du(t,e){var n=ce;ce|=2;var r=SE();(Xe!==t||nt!==e)&&(Pn=null,ai(t,e));do try{mC();break}catch(i){IE(t,i)}while(!0);if(Gf(),ce=n,uu.current=r,je!==null)throw Error($(261));return Xe=null,nt=0,He}function mC(){for(;je!==null;)RE(je)}function gC(){for(;je!==null&&!$S();)RE(je)}function RE(t){var e=kE(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?CE(t):je=e,op.current=null}function CE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uC(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,je=null;return}}else if(n=lC(n,e,xt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);He===0&&(He=5)}function Jr(t,e,n){var r=me,i=zt.transition;try{zt.transition=null,me=1,yC(t,e,n,r)}finally{zt.transition=i,me=r}return null}function yC(t,e,n,r){do cs();while(dr!==null);if(ce&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(YS(t,s),t===Xe&&(je=Xe=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,PE(Gl,function(){return cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=me;me=1;var l=ce;ce|=4,op.current=null,hC(t,n),EE(n,t),MR(yd),Ql=!!gd,yd=gd=null,t.current=n,dC(n),BS(),ce=l,me=o,zt.transition=s}else t.current=n;if(ll&&(ll=!1,dr=t,hu=i),s=t.pendingLanes,s===0&&(Ir=null),HS(n.stateNode),At(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(cu)throw cu=!1,t=Md,Md=null,t;return hu&1&&t.tag!==0&&cs(),s=t.pendingLanes,s&1?t===Fd?Ao++:(Ao=0,Fd=t):Ao=0,jr(),null}function cs(){if(dr!==null){var t=o0(hu),e=zt.transition,n=me;try{if(zt.transition=null,me=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,hu=0,ce&6)throw Error($(331));var i=ce;for(ce|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Ro(8,d,s)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var m=d.sibling,I=d.return;if(yE(d),d===c){W=null;break}if(m!==null){m.return=I,W=m;break}W=I}}}var C=s.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,W=w;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,W=_;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ec(9,l)}}catch(F){be(l,l.return,F)}if(l===o){W=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,W=x;break e}W=l.return}}if(ce=i,jr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(qu,t)}catch{}r=!0}return r}finally{me=n,zt.transition=e}}return!1}function wy(t,e,n){e=Es(n,e),e=oE(t,e,1),t=Tr(t,e,1),e=vt(),t!==null&&(fa(t,1,e),At(t,e))}function be(t,e,n){if(t.tag===3)wy(t,t,n);else for(;e!==null;){if(e.tag===3){wy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=Es(n,t),t=aE(e,t,1),e=Tr(e,t,1),t=vt(),e!==null&&(fa(e,1,t),At(e,t));break}}e=e.return}}function vC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(nt&n)===n&&(He===4||He===3&&(nt&130023424)===nt&&500>Me()-lp?ai(t,0):ap|=n),At(t,e)}function AE(t,e){e===0&&(t.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var n=vt();t=$n(t,e),t!==null&&(fa(t,e,n),At(t,n))}function _C(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),AE(t,n)}function EC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),AE(t,n)}var kE;kE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,aC(t,e,n);St=!!(t.flags&131072)}else St=!1,Ae&&e.flags&1048576&&O0(e,nu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pl(t,e),t=e.pendingProps;var i=gs(e,ft.current);us(e,n),i=tp(null,e,r,t,i,n);var s=np();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,eu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xf(e),i.updater=Zu,e.stateNode=i,i._reactInternals=e,Cd(e,r,t,n),e=Pd(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&zf(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TC(r),t=Jt(r,t),i){case 0:e=kd(null,e,r,t,n);break e;case 1:e=hy(null,e,r,t,n);break e;case 11:e=uy(null,e,r,t,n);break e;case 14:e=cy(null,e,r,Jt(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),kd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),hy(t,e,r,i,n);case 3:e:{if(hE(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,F0(t,e),su(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Es(Error($(423)),e),e=dy(t,e,r,n,i);break e}else if(r!==i){i=Es(Error($(424)),e),e=dy(t,e,r,n,i);break e}else for(Ot=wr(e.stateNode.containerInfo.firstChild),bt=e,Ae=!0,en=null,n=V0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),r===i){e=Bn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return U0(e),t===null&&Id(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vd(r,i)?o=null:s!==null&&vd(r,s)&&(e.flags|=32),cE(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&Id(e),null;case 13:return dE(t,e,n);case 4:return Yf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vs(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),uy(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(ru,r._currentValue),r._currentValue=o,s!==null)if(on(s.value,o)){if(s.children===i.children&&!Rt.current){e=Bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Vn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Sd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Sd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,us(e,n),i=Ht(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=Jt(r,e.pendingProps),i=Jt(r.type,i),cy(t,e,r,i,n);case 15:return lE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Pl(t,e),e.tag=1,Ct(r)?(t=!0,eu(e)):t=!1,us(e,n),sE(e,r,i),Cd(e,r,i,n),Pd(null,e,r,!0,t,n);case 19:return fE(t,e,n);case 22:return uE(t,e,n)}throw Error($(156,e.tag))};function PE(t,e){return n0(t,e)}function wC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new wC(t,e,n,r)}function dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TC(t){if(typeof t=="function")return dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xf)return 11;if(t===Of)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qi:return li(n.children,i,s,e);case Nf:o=8,i|=8;break;case Xh:return t=Bt(12,n,e,i|2),t.elementType=Xh,t.lanes=s,t;case Yh:return t=Bt(13,n,e,i),t.elementType=Yh,t.lanes=s,t;case Jh:return t=Bt(19,n,e,i),t.elementType=Jh,t.lanes=s,t;case U_:return nc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M_:o=10;break e;case F_:o=9;break e;case xf:o=11;break e;case Of:o=14;break e;case nr:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function li(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function nc(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=U_,t.lanes=n,t.stateNode={isHidden:!1},t}function Sh(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function Rh(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sh(0),this.expirationTimes=sh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fp(t,e,n,r,i,s,o,l,u){return t=new IC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xf(s),t}function SC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function NE(t){if(!t)return Or;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Ct(n))return N0(t,n,e)}return e}function xE(t,e,n,r,i,s,o,l,u){return t=fp(n,r,!0,t,i,s,o,l,u),t.context=NE(null),n=t.current,r=vt(),i=Sr(n),s=Vn(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,fa(t,i,r),At(t,r),t}function rc(t,e,n,r){var i=e.current,s=vt(),o=Sr(i);return n=NE(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(sn(t,i,o,s),Cl(t,i,o)),o}function fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pp(t,e){Ty(t,e),(t=t.alternate)&&Ty(t,e)}function RC(){return null}var OE=typeof reportError=="function"?reportError:function(t){console.error(t)};function mp(t){this._internalRoot=t}ic.prototype.render=mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));rc(t,e,null,null)};ic.prototype.unmount=mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yi(function(){rc(null,t,null,null)}),e[jn]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=u0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&h0(t)}};function gp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Iy(){}function CC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=fu(o);s.call(c)}}var o=xE(e,r,t,0,null,!1,!1,"",Iy);return t._reactRootContainer=o,t[jn]=o.current,zo(t.nodeType===8?t.parentNode:t),yi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=fu(u);l.call(c)}}var u=fp(t,0,!1,null,null,!1,!1,"",Iy);return t._reactRootContainer=u,t[jn]=u.current,zo(t.nodeType===8?t.parentNode:t),yi(function(){rc(e,u,n,r)}),u}function oc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=fu(o);l.call(u)}}rc(e,o,t,i)}else o=CC(n,e,t,i,r);return fu(o)}a0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fo(e.pendingLanes);n!==0&&(Lf(e,n|1),At(e,Me()),!(ce&6)&&(ws=Me()+500,jr()))}break;case 13:yi(function(){var r=$n(t,1);if(r!==null){var i=vt();sn(r,t,1,i)}}),pp(t,1)}};Vf=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=vt();sn(e,t,134217728,n)}pp(t,134217728)}};l0=function(t){if(t.tag===13){var e=Sr(t),n=$n(t,e);if(n!==null){var r=vt();sn(n,t,e,r)}pp(t,e)}};u0=function(){return me};c0=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};ld=function(t,e,n){switch(e){case"input":if(td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xu(r);if(!i)throw Error($(90));$_(r),td(r,i)}}}break;case"textarea":z_(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};X_=up;Y_=yi;var AC={usingClientEntryPoint:!1,Events:[ma,Xi,Xu,K_,Q_,up]},uo={findFiberByHostInstance:ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kC={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=e0(t),t===null?null:t.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||RC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{qu=ul.inject(kC),gn=ul}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AC;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(e))throw Error($(200));return SC(t,e,null,n)};Mt.createRoot=function(t,e){if(!gp(t))throw Error($(299));var n=!1,r="",i=OE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fp(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,zo(t.nodeType===8?t.parentNode:t),new mp(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=e0(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return yi(t)};Mt.hydrate=function(t,e,n){if(!sc(e))throw Error($(200));return oc(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!gp(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=OE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xE(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,zo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ic(e)};Mt.render=function(t,e,n){if(!sc(e))throw Error($(200));return oc(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!sc(t))throw Error($(40));return t._reactRootContainer?(yi(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Mt.unstable_batchedUpdates=up;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return oc(t,e,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function DE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(DE)}catch(t){console.error(t)}}DE(),D_.exports=Mt;var bE=D_.exports;const rs=Wu(bE);var LE,Sy=bE;LE=Sy.createRoot,Sy.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jo.apply(this,arguments)}var fr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(fr||(fr={}));const Ry="popstate";function PC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return $d("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:pu(i)}return xC(e,n,null,t)}function Be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function VE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NC(){return Math.random().toString(36).substr(2,8)}function Cy(t,e){return{usr:t.state,key:t.key,idx:e}}function $d(t,e,n,r){return n===void 0&&(n=null),Jo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ds(e):e,{state:n,key:e&&e.key||r||NC()})}function pu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function xC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=fr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Jo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=fr.Pop;let N=d(),w=N==null?null:N-c;c=N,u&&u({action:l,location:P.location,delta:w})}function m(N,w){l=fr.Push;let v=$d(P.location,N,w);c=d()+1;let _=Cy(v,c),x=P.createHref(v);try{o.pushState(_,"",x)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(x)}s&&u&&u({action:l,location:P.location,delta:1})}function I(N,w){l=fr.Replace;let v=$d(P.location,N,w);c=d();let _=Cy(v,c),x=P.createHref(v);o.replaceState(_,"",x),s&&u&&u({action:l,location:P.location,delta:0})}function C(N){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof N=="string"?N:pu(N);return v=v.replace(/ $/,"%20"),Be(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let P={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ry,p),u=N,()=>{i.removeEventListener(Ry,p),u=null}},createHref(N){return e(i,N)},createURL:C,encodeLocation(N){let w=C(N);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:I,go(N){return o.go(N)}};return P}var Ay;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ay||(Ay={}));function OC(t,e,n){return n===void 0&&(n="/"),DC(t,e,n,!1)}function DC(t,e,n,r){let i=typeof e=="string"?Ds(e):e,s=yp(i.pathname||"/",n);if(s==null)return null;let o=ME(t);bC(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=HC(s);l=zC(o[u],c,r)}return l}function ME(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Cr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ME(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:$C(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of FE(s.path))i(s,o,u)}),e}function FE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=FE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function bC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:BC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const LC=/^:[\w-]+$/,VC=3,MC=2,FC=1,UC=10,jC=-2,ky=t=>t==="*";function $C(t,e){let n=t.split("/"),r=n.length;return n.some(ky)&&(r+=jC),e&&(r+=MC),n.filter(i=>!ky(i)).reduce((i,s)=>i+(LC.test(s)?VC:s===""?FC:UC),r)}function BC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function zC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Py({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Py({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Cr([s,p.pathname]),pathnameBase:QC(Cr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Cr([s,p.pathnameBase]))}return o}function Py(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=WC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:I}=d;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const C=l[p];return I&&!C?c[m]=void 0:c[m]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function WC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),VE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function HC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return VE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ds(t):t;return{pathname:n?n.startsWith("/")?n:GC(n,e):e,search:XC(r),hash:YC(i)}}function GC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ch(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function KC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function UE(t,e){let n=KC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ds(t):(i=Jo({},t),Be(!i.pathname||!i.pathname.includes("?"),Ch("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),Ch("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),Ch("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=qC(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Cr=t=>t.join("/").replace(/\/\/+/g,"/"),QC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),XC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function JC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $E=["post","put","patch","delete"];new Set($E);const ZC=["get",...$E];new Set(ZC);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zo.apply(this,arguments)}const vp=A.createContext(null),eA=A.createContext(null),Si=A.createContext(null),ac=A.createContext(null),Ri=A.createContext({outlet:null,matches:[],isDataRoute:!1}),BE=A.createContext(null);function tA(t,e){let{relative:n}=e===void 0?{}:e;ya()||Be(!1);let{basename:r,navigator:i}=A.useContext(Si),{hash:s,pathname:o,search:l}=WE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Cr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ya(){return A.useContext(ac)!=null}function va(){return ya()||Be(!1),A.useContext(ac).location}function zE(t){A.useContext(Si).static||A.useLayoutEffect(t)}function nA(){let{isDataRoute:t}=A.useContext(Ri);return t?mA():rA()}function rA(){ya()||Be(!1);let t=A.useContext(vp),{basename:e,future:n,navigator:r}=A.useContext(Si),{matches:i}=A.useContext(Ri),{pathname:s}=va(),o=JSON.stringify(UE(i,n.v7_relativeSplatPath)),l=A.useRef(!1);return zE(()=>{l.current=!0}),A.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=jE(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Cr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function WE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=A.useContext(Si),{matches:i}=A.useContext(Ri),{pathname:s}=va(),o=JSON.stringify(UE(i,r.v7_relativeSplatPath));return A.useMemo(()=>jE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function iA(t,e){return sA(t,e)}function sA(t,e,n,r){ya()||Be(!1);let{navigator:i}=A.useContext(Si),{matches:s}=A.useContext(Ri),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=va(),d;if(e){var p;let N=typeof e=="string"?Ds(e):e;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||Be(!1),d=N}else d=c;let m=d.pathname||"/",I=m;if(u!=="/"){let N=u.replace(/^\//,"").split("/");I="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let C=OC(t,{pathname:I}),P=cA(C&&C.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Cr([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:Cr([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&P?A.createElement(ac.Provider,{value:{location:Zo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:fr.Pop}},P):P}function oA(){let t=pA(),e=JC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:i},n):null,null)}const aA=A.createElement(oA,null);class lA extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?A.createElement(Ri.Provider,{value:this.props.routeContext},A.createElement(BE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uA(t){let{routeContext:e,match:n,children:r}=t,i=A.useContext(vp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(Ri.Provider,{value:e},r)}function cA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Be(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:I}=n,C=p.route.loader&&m[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let I,C=!1,P=null,N=null;n&&(I=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||aA,u&&(c<0&&m===0?(C=!0,N=null):c===m&&(C=!0,N=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),v=()=>{let _;return I?_=P:C?_=N:p.route.Component?_=A.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=d,A.createElement(uA,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:_})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?A.createElement(lA,{location:n.location,revalidation:n.revalidation,component:P,error:I,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var HE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(HE||{}),mu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(mu||{});function hA(t){let e=A.useContext(vp);return e||Be(!1),e}function dA(t){let e=A.useContext(eA);return e||Be(!1),e}function fA(t){let e=A.useContext(Ri);return e||Be(!1),e}function qE(t){let e=fA(),n=e.matches[e.matches.length-1];return n.route.id||Be(!1),n.route.id}function pA(){var t;let e=A.useContext(BE),n=dA(mu.UseRouteError),r=qE(mu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function mA(){let{router:t}=hA(HE.UseNavigateStable),e=qE(mu.UseNavigateStable),n=A.useRef(!1);return zE(()=>{n.current=!0}),A.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Zo({fromRouteId:e},s)))},[t,e])}function Bd(t){Be(!1)}function gA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=fr.Pop,navigator:s,static:o=!1,future:l}=t;ya()&&Be(!1);let u=e.replace(/^\/*/,"/"),c=A.useMemo(()=>({basename:u,navigator:s,static:o,future:Zo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ds(r));let{pathname:d="/",search:p="",hash:m="",state:I=null,key:C="default"}=r,P=A.useMemo(()=>{let N=yp(d,u);return N==null?null:{location:{pathname:N,search:p,hash:m,state:I,key:C},navigationType:i}},[u,d,p,m,I,C,i]);return P==null?null:A.createElement(Si.Provider,{value:c},A.createElement(ac.Provider,{children:n,value:P}))}function yA(t){let{children:e,location:n}=t;return iA(zd(e),n)}new Promise(()=>{});function zd(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,i)=>{if(!A.isValidElement(r))return;let s=[...e,i];if(r.type===A.Fragment){n.push.apply(n,zd(r.props.children,s));return}r.type!==Bd&&Be(!1),!r.props.index||!r.props.children||Be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=zd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wd(){return Wd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wd.apply(this,arguments)}function vA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _A(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function EA(t,e){return t.button===0&&(!e||e==="_self")&&!_A(t)}const wA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],TA="6";try{window.__reactRouterVersion=TA}catch{}const IA="startTransition",Ny=vS[IA];function SA(t){let{basename:e,children:n,future:r,window:i}=t,s=A.useRef();s.current==null&&(s.current=PC({window:i,v5Compat:!0}));let o=s.current,[l,u]=A.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=A.useCallback(p=>{c&&Ny?Ny(()=>u(p)):u(p)},[u,c]);return A.useLayoutEffect(()=>o.listen(d),[o,d]),A.createElement(gA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const RA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AA=A.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=vA(e,wA),{basename:I}=A.useContext(Si),C,P=!1;if(typeof c=="string"&&CA.test(c)&&(C=c,RA))try{let _=new URL(window.location.href),x=c.startsWith("//")?new URL(_.protocol+c):new URL(c),F=yp(x.pathname,I);x.origin===_.origin&&F!=null?c=F+x.search+x.hash:P=!0}catch{}let N=tA(c,{relative:i}),w=kA(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function v(_){r&&r(_),_.defaultPrevented||w(_)}return A.createElement("a",Wd({},m,{href:C||N,onClick:P||s?r:v,ref:n,target:u}))});var xy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xy||(xy={}));var Oy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Oy||(Oy={}));function kA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=nA(),c=va(),d=WE(t,{relative:o});return A.useCallback(p=>{if(EA(p,n)){p.preventDefault();let m=r!==void 0?r:pu(c)===pu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}var GE={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(s=i(s,r(l)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var l in s)e.call(s,l)&&s[l]&&(o=i(o,l));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(GE);var PA=GE.exports;const ie=Wu(PA),NA=["xxl","xl","lg","md","sm","xs"],xA="xs",lc=A.createContext({prefixes:{},breakpoints:NA,minBreakpoint:xA});function pe(t,e){const{prefixes:n}=A.useContext(lc);return t||n[e]||e}function KE(){const{breakpoints:t}=A.useContext(lc);return t}function QE(){const{minBreakpoint:t}=A.useContext(lc);return t}function OA(){const{dir:t}=A.useContext(lc);return t==="rtl"}const DA=["as","disabled"];function bA(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function LA(t){return!t||t.trim()==="#"}function XE({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:l=0,type:u}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:u||"button",disabled:e},c];const d=m=>{if((e||t==="a"&&LA(n))&&m.preventDefault(),e){m.stopPropagation();return}o==null||o(m)},p=m=>{m.key===" "&&(m.preventDefault(),d(m))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:l,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:d,onKeyDown:p},c]}const VA=A.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=bA(t,DA);const[s,{tagName:o}]=XE(Object.assign({tagName:n,disabled:r},i));return b.jsx(o,Object.assign({},i,s,{ref:e}))});VA.displayName="Button";const ea=A.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...l},u)=>{const c=pe(e,"btn"),[d,{tagName:p}]=XE({tagName:t,disabled:s,...l}),m=p;return b.jsx(m,{...d,...l,ref:u,disabled:s,className:ie(o,c,i&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,l.href&&s&&"disabled")})});ea.displayName="Button";const bs=!!(typeof window<"u"&&window.document&&window.document.createElement);var Hd=!1,qd=!1;try{var Ah={get passive(){return Hd=!0},get once(){return qd=Hd=!0}};bs&&(window.addEventListener("test",Ah,Ah),window.removeEventListener("test",Ah,!0))}catch{}function YE(t,e,n,r){if(r&&typeof r!="boolean"&&!qd){var i=r.once,s=r.capture,o=n;!qd&&i&&(o=n.__once||function l(u){this.removeEventListener(e,l,s),n.call(this,u)},n.__once=o),t.addEventListener(e,o,Hd?r:s)}t.addEventListener(e,n,r)}function uc(t){return t&&t.ownerDocument||document}function Gd(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}var cl;function Dy(t){if((!cl&&cl!==0||t)&&bs){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),cl=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return cl}function MA(){return A.useState(null)}function FA(t){const e=A.useRef(t);return A.useEffect(()=>{e.current=t},[t]),e}function mn(t){const e=FA(t);return A.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const by=t=>!t||typeof t=="function"?t:e=>{t.current=e};function UA(t,e){const n=by(t),r=by(e);return i=>{n&&n(i),r&&r(i)}}function _a(t,e){return A.useMemo(()=>UA(t,e),[t,e])}function jA(t){const e=A.useRef(t);return e.current=t,e}function JE(t){const e=jA(t);A.useEffect(()=>()=>e.current(),[])}function $A(t){var e=uc(t);return e&&e.defaultView||window}function BA(t,e){return $A(t).getComputedStyle(t,e)}var zA=/([A-Z])/g;function WA(t){return t.replace(zA,"-$1").toLowerCase()}var HA=/^ms-/;function hl(t){return WA(t).replace(HA,"-ms-")}var qA=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function GA(t){return!!(t&&qA.test(t))}function ui(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(hl(e))||BA(t).getPropertyValue(hl(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(hl(i)):GA(i)?r+=i+"("+s+") ":n+=hl(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}function gu(t,e,n,r){return YE(t,e,n,r),function(){Gd(t,e,n,r)}}function KA(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function QA(t){var e=ui(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function XA(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||KA(t,"transitionend",!0)},e+n),s=gu(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function ZE(t,e,n,r){n==null&&(n=QA(t)||0);var i=XA(t,n,r),s=gu(t,"transitionend",e);return function(){i(),s()}}function kh(t){t===void 0&&(t=uc());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function Ly(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function YA(){const t=A.useRef(!0),e=A.useRef(()=>t.current);return A.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function JA(t){const e=A.useRef(null);return A.useEffect(()=>{e.current=t}),e.current}const ZA="data-rr-ui-";function ek(t){return`${ZA}${t}`}function tk(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const Vy=ek("modal-open");class _p{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return tk(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(ui(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(Vy,""),ui(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(Vy),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const ew=A.createContext(bs?window:void 0);ew.Provider;function Ep(){return A.useContext(ew)}const Ph=(t,e)=>bs?t==null?(e||uc()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function nk(t,e){const n=Ep(),[r,i]=A.useState(()=>Ph(t,n==null?void 0:n.document));if(!r){const s=Ph(t);s&&i(s)}return A.useEffect(()=>{},[e,r]),A.useEffect(()=>{const s=Ph(t);s!==r&&i(s)},[t,r]),r}const rk=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",ik=typeof document<"u",My=ik||rk?A.useLayoutEffect:A.useEffect;function sk({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=A.useRef(null),o=A.useRef(e),l=mn(n);A.useEffect(()=>{e?o.current=!0:l(s.current)},[e,l]);const u=_a(s,t.ref),c=A.cloneElement(t,{ref:u});return e?c:i||!o.current&&r?null:c}function ok(t){return t.code==="Escape"||t.keyCode===27}function tw(){const t=A.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const ak=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function lk(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function uk(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:l,children:u}=t,c=lk(t,ak);const{major:d}=tw(),p=d>=19?u.props.ref:u.ref,m=A.useRef(null),I=_a(m,typeof u=="function"?null:p),C=V=>E=>{V&&m.current&&V(m.current,E)},P=A.useCallback(C(e),[e]),N=A.useCallback(C(n),[n]),w=A.useCallback(C(r),[r]),v=A.useCallback(C(i),[i]),_=A.useCallback(C(s),[s]),x=A.useCallback(C(o),[o]),F=A.useCallback(C(l),[l]);return Object.assign({},c,{nodeRef:m},e&&{onEnter:P},n&&{onEntering:N},r&&{onEntered:w},i&&{onExit:v},s&&{onExiting:_},o&&{onExited:x},l&&{addEndListener:F},{children:typeof u=="function"?(V,E)=>u(V,Object.assign({},E,{ref:I})):A.cloneElement(u,{ref:I})})}const ck=["component"];function hk(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}const dk=A.forwardRef((t,e)=>{let{component:n}=t,r=hk(t,ck);const i=uk(r);return b.jsx(n,Object.assign({ref:e},i))});function fk({in:t,onTransition:e}){const n=A.useRef(null),r=A.useRef(!0),i=mn(e);return My(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),My(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function pk({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=A.useState(!e);e&&s&&o(!1);const l=fk({in:!!e,onTransition:c=>{const d=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(o(!0),n==null||n(c.element)))};Promise.resolve(i(c)).then(d,p=>{throw c.in||o(!0),p})}}),u=_a(l,t.ref);return s&&!e?null:A.cloneElement(t,{ref:u})}function Fy(t,e,n){return t?b.jsx(dk,Object.assign({},n,{component:t})):e?b.jsx(pk,Object.assign({},n,{transition:e})):b.jsx(sk,Object.assign({},n))}const mk=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function gk(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}let Nh;function yk(t){return Nh||(Nh=new _p({ownerDocument:t==null?void 0:t.document})),Nh}function vk(t){const e=Ep(),n=t||yk(e),r=A.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:A.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:A.useCallback(i=>{r.current.backdrop=i},[])})}const nw=A.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:l=!0,keyboard:u=!0,onBackdropClick:c,onEscapeKeyDown:d,transition:p,runTransition:m,backdropTransition:I,runBackdropTransition:C,autoFocus:P=!0,enforceFocus:N=!0,restoreFocus:w=!0,restoreFocusOptions:v,renderDialog:_,renderBackdrop:x=ge=>b.jsx("div",Object.assign({},ge)),manager:F,container:V,onShow:E,onHide:g=()=>{},onExit:T,onExited:S,onExiting:k,onEnter:O,onEntering:R,onEntered:_e}=t,Ge=gk(t,mk);const ze=Ep(),Ee=nk(V),j=vk(F),q=YA(),K=JA(n),[re,J]=A.useState(!n),Z=A.useRef(null);A.useImperativeHandle(e,()=>j,[j]),bs&&!K&&n&&(Z.current=kh(ze==null?void 0:ze.document)),n&&re&&J(!1);const de=mn(()=>{if(j.add(),Qt.current=gu(document,"keydown",Br),zr.current=gu(document,"focus",()=>setTimeout(Le),!0),E&&E(),P){var ge,Wr;const Hr=kh((ge=(Wr=j.dialog)==null?void 0:Wr.ownerDocument)!=null?ge:ze==null?void 0:ze.document);j.dialog&&Hr&&!Ly(j.dialog,Hr)&&(Z.current=Hr,j.dialog.focus())}}),we=mn(()=>{if(j.remove(),Qt.current==null||Qt.current(),zr.current==null||zr.current(),w){var ge;(ge=Z.current)==null||ge.focus==null||ge.focus(v),Z.current=null}});A.useEffect(()=>{!n||!Ee||de()},[n,Ee,de]),A.useEffect(()=>{re&&we()},[re,we]),JE(()=>{we()});const Le=mn(()=>{if(!N||!q()||!j.isTopModal())return;const ge=kh(ze==null?void 0:ze.document);j.dialog&&ge&&!Ly(j.dialog,ge)&&j.dialog.focus()}),Fe=mn(ge=>{ge.target===ge.currentTarget&&(c==null||c(ge),l===!0&&g())}),Br=mn(ge=>{u&&ok(ge)&&j.isTopModal()&&(d==null||d(ge),ge.defaultPrevented||g())}),zr=A.useRef(),Qt=A.useRef(),Rn=(...ge)=>{J(!0),S==null||S(...ge)};if(!Ee)return null;const un=Object.assign({role:r,ref:j.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Ge,{style:s,className:i,tabIndex:-1});let Cn=_?_(un):b.jsx("div",Object.assign({},un,{children:A.cloneElement(o,{role:"document"})}));Cn=Fy(p,m,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:T,onExiting:k,onExited:Rn,onEnter:O,onEntering:R,onEntered:_e,children:Cn});let cn=null;return l&&(cn=x({ref:j.setBackdropRef,onClick:Fe}),cn=Fy(I,C,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:cn})),b.jsx(b.Fragment,{children:rs.createPortal(b.jsxs(b.Fragment,{children:[cn,Cn]}),Ee)})});nw.displayName="Modal";const _k=Object.assign(nw,{Manager:_p});function Ek(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function wk(t,e){t.classList?t.classList.add(e):Ek(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}var Tk=Function.prototype.bind.call(Function.prototype.call,[].slice);function Fi(t,e){return Tk(t.querySelectorAll(e))}function Uy(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Ik(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=Uy(t.className,e):t.setAttribute("class",Uy(t.className&&t.className.baseVal||"",e))}const Ui={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Sk extends _p{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,ui(n,{[e]:`${parseFloat(ui(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],ui(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(wk(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Fi(n,Ui.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),Fi(n,Ui.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),Fi(n,Ui.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();Ik(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Fi(n,Ui.FIXED_CONTENT).forEach(s=>this.restore(r,s)),Fi(n,Ui.STICKY_CONTENT).forEach(s=>this.restore(i,s)),Fi(n,Ui.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let xh;function Rk(t){return xh||(xh=new Sk(t)),xh}function Ck(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}function Kd(t,e){return Kd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Kd(t,e)}function Ak(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Kd(t,e)}var rw={exports:{}},kk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Pk=kk,Nk=Pk;function iw(){}function sw(){}sw.resetWarningCache=iw;var xk=function(){function t(r,i,s,o,l,u){if(u!==Nk){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:sw,resetWarningCache:iw};return n.PropTypes=n,n};rw.exports=xk();var Ok=rw.exports;const Mn=Wu(Ok),jy={disabled:!1},ow=ne.createContext(null);var Dk=function(e){return e.scrollTop},mo="unmounted",Zr="exited",ir="entering",ti="entered",Qd="exiting",Xn=function(t){Ak(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,l=o&&!o.isMounting?r.enter:r.appear,u;return s.appearStatus=null,r.in?l?(u=Zr,s.appearStatus=ir):u=ti:r.unmountOnExit||r.mountOnEnter?u=mo:u=Zr,s.state={status:u},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===mo?{status:Zr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==ir&&o!==ti&&(s=ir):(o===ir||o===ti)&&(s=Qd)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,l;return s=o=l=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,l=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:l}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===ir){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:rs.findDOMNode(this);o&&Dk(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Zr&&this.setState({status:mo})},n.performEnter=function(i){var s=this,o=this.props.enter,l=this.context?this.context.isMounting:i,u=this.props.nodeRef?[l]:[rs.findDOMNode(this),l],c=u[0],d=u[1],p=this.getTimeouts(),m=l?p.appear:p.enter;if(!i&&!o||jy.disabled){this.safeSetState({status:ti},function(){s.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:ir},function(){s.props.onEntering(c,d),s.onTransitionEnd(m,function(){s.safeSetState({status:ti},function(){s.props.onEntered(c,d)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),l=this.props.nodeRef?void 0:rs.findDOMNode(this);if(!s||jy.disabled){this.safeSetState({status:Zr},function(){i.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Qd},function(){i.props.onExiting(l),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Zr},function(){i.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(l){o&&(o=!1,s.nextCallback=null,i(l))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:rs.findDOMNode(this),l=i==null&&!this.props.addEndListener;if(!o||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=u[0],d=u[1];this.props.addEndListener(c,d)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===mo)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var l=Ck(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ne.createElement(ow.Provider,{value:null},typeof o=="function"?o(i,l):ne.cloneElement(ne.Children.only(o),l))},e}(ne.Component);Xn.contextType=ow;Xn.propTypes={};function ji(){}Xn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ji,onEntering:ji,onEntered:ji,onExit:ji,onExiting:ji,onExited:ji};Xn.UNMOUNTED=mo;Xn.EXITED=Zr;Xn.ENTERING=ir;Xn.ENTERED=ti;Xn.EXITING=Qd;function $y(t,e){const n=ui(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function bk(t,e){const n=$y(t,"transitionDuration"),r=$y(t,"transitionDelay"),i=ZE(t,s=>{s.target===t&&(i(),e(s))},n+r)}function Lk(t){t.offsetHeight}function Vk(t){return t&&"setState"in t?rs.findDOMNode(t):t??null}const Mk=ne.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:l,childRef:u,...c},d)=>{const p=A.useRef(null),m=_a(p,u),I=V=>{m(Vk(V))},C=V=>E=>{V&&p.current&&V(p.current,E)},P=A.useCallback(C(t),[t]),N=A.useCallback(C(e),[e]),w=A.useCallback(C(n),[n]),v=A.useCallback(C(r),[r]),_=A.useCallback(C(i),[i]),x=A.useCallback(C(s),[s]),F=A.useCallback(C(o),[o]);return b.jsx(Xn,{ref:d,...c,onEnter:P,onEntered:w,onEntering:N,onExit:v,onExited:x,onExiting:_,addEndListener:F,nodeRef:p,children:typeof l=="function"?(V,E)=>l(V,{...E,ref:I}):ne.cloneElement(l,{ref:I})})}),Fk={[ir]:"show",[ti]:"show"},wp=A.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},l=A.useCallback((d,p)=>{Lk(d),r==null||r(d,p)},[r]),{major:u}=tw(),c=u>=19?e.props.ref:e.ref;return b.jsx(Mk,{ref:s,addEndListener:bk,...o,onEnter:l,childRef:c,children:(d,p)=>A.cloneElement(e,{...p,className:ie("fade",t,e.props.className,Fk[d],n[d])})})});wp.displayName="Fade";const aw=A.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=pe(e,"modal-body"),b.jsx(n,{ref:i,className:ie(t,e),...r})));aw.displayName="ModalBody";const lw=A.createContext({onHide(){}}),Tp=A.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:l,...u},c)=>{t=pe(t,"modal");const d=`${t}-dialog`,p=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return b.jsx("div",{...u,ref:c,className:ie(d,e,i&&`${t}-${i}`,r&&`${d}-centered`,l&&`${d}-scrollable`,s&&p),children:b.jsx("div",{className:ie(`${t}-content`,n),children:o})})});Tp.displayName="ModalDialog";const uw=A.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=pe(e,"modal-footer"),b.jsx(n,{ref:i,className:ie(t,e),...r})));uw.displayName="ModalFooter";const Uk={"aria-label":Mn.string,onClick:Mn.func,variant:Mn.oneOf(["white"])},Ip=A.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>b.jsx("button",{ref:i,type:"button",className:ie("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));Ip.displayName="CloseButton";Ip.propTypes=Uk;const jk=A.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const l=A.useContext(lw),u=mn(()=>{l==null||l.onHide(),r==null||r()});return b.jsxs("div",{ref:o,...s,children:[i,n&&b.jsx(Ip,{"aria-label":t,variant:e,onClick:u})]})}),cw=A.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=pe(t,"modal-header"),b.jsx(jk,{ref:s,...i,className:ie(e,t),closeLabel:n,closeButton:r})));cw.displayName="ModalHeader";const Sp=t=>A.forwardRef((e,n)=>b.jsx("div",{...e,ref:n,className:ie(e.className,t)})),$k=Sp("h4"),hw=A.forwardRef(({className:t,bsPrefix:e,as:n=$k,...r},i)=>(e=pe(e,"modal-title"),b.jsx(n,{ref:i,className:ie(t,e),...r})));hw.displayName="ModalTitle";function Bk(t){return b.jsx(wp,{...t,timeout:null})}function zk(t){return b.jsx(wp,{...t,timeout:null})}const dw=A.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o=Tp,"data-bs-theme":l,"aria-labelledby":u,"aria-describedby":c,"aria-label":d,show:p=!1,animation:m=!0,backdrop:I=!0,keyboard:C=!0,onEscapeKeyDown:P,onShow:N,onHide:w,container:v,autoFocus:_=!0,enforceFocus:x=!0,restoreFocus:F=!0,restoreFocusOptions:V,onEntered:E,onExit:g,onExiting:T,onEnter:S,onEntering:k,onExited:O,backdropClassName:R,manager:_e,...Ge},ze)=>{const[Ee,j]=A.useState({}),[q,K]=A.useState(!1),re=A.useRef(!1),J=A.useRef(!1),Z=A.useRef(null),[de,we]=MA(),Le=_a(ze,we),Fe=mn(w),Br=OA();t=pe(t,"modal");const zr=A.useMemo(()=>({onHide:Fe}),[Fe]);function Qt(){return _e||Rk({isRTL:Br})}function Rn(Q){if(!bs)return;const Oe=Qt().getScrollbarWidth()>0,qr=Q.scrollHeight>uc(Q).documentElement.clientHeight;j({paddingRight:Oe&&!qr?Dy():void 0,paddingLeft:!Oe&&qr?Dy():void 0})}const un=mn(()=>{de&&Rn(de.dialog)});JE(()=>{Gd(window,"resize",un),Z.current==null||Z.current()});const Cn=()=>{re.current=!0},cn=Q=>{re.current&&de&&Q.target===de.dialog&&(J.current=!0),re.current=!1},ge=()=>{K(!0),Z.current=ZE(de.dialog,()=>{K(!1)})},Wr=Q=>{Q.target===Q.currentTarget&&ge()},Hr=Q=>{if(I==="static"){Wr(Q);return}if(J.current||Q.target!==Q.currentTarget){J.current=!1;return}w==null||w()},Vc=Q=>{C?P==null||P(Q):(Q.preventDefault(),I==="static"&&ge())},Pa=(Q,Oe)=>{Q&&Rn(Q),S==null||S(Q,Oe)},$s=Q=>{Z.current==null||Z.current(),g==null||g(Q)},Na=(Q,Oe)=>{k==null||k(Q,Oe),YE(window,"resize",un)},Mc=Q=>{Q&&(Q.style.display=""),O==null||O(Q),Gd(window,"resize",un)},Bs=A.useCallback(Q=>b.jsx("div",{...Q,className:ie(`${t}-backdrop`,R,!m&&"show")}),[m,R,t]),Oi={...n,...Ee};Oi.display="block";const xa=Q=>b.jsx("div",{role:"dialog",...Q,style:Oi,className:ie(e,t,q&&`${t}-static`,!m&&"show"),onClick:I?Hr:void 0,onMouseUp:cn,"data-bs-theme":l,"aria-label":d,"aria-labelledby":u,"aria-describedby":c,children:b.jsx(o,{...Ge,onMouseDown:Cn,className:r,contentClassName:i,children:s})});return b.jsx(lw.Provider,{value:zr,children:b.jsx(_k,{show:p,ref:Le,backdrop:I,container:v,keyboard:!0,autoFocus:_,enforceFocus:x,restoreFocus:F,restoreFocusOptions:V,onEscapeKeyDown:Vc,onShow:N,onHide:w,onEnter:Pa,onEntering:Na,onEntered:E,onExit:$s,onExiting:T,onExited:Mc,manager:Qt(),transition:m?Bk:void 0,backdropTransition:m?zk:void 0,renderBackdrop:Bs,renderDialog:xa})})});dw.displayName="Modal";const pr=Object.assign(dw,{Body:aw,Header:cw,Title:hw,Footer:uw,Dialog:Tp,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Wk={type:Mn.string,tooltip:Mn.bool,as:Mn.elementType},cc=A.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>b.jsx(t,{...i,ref:s,className:ie(e,`${n}-${r?"tooltip":"feedback"}`)}));cc.displayName="Feedback";cc.propTypes=Wk;const zn=A.createContext({}),Rp=A.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...l},u)=>{const{controlId:c}=A.useContext(zn);return e=pe(e,"form-check-input"),b.jsx(o,{...l,ref:u,type:r,id:t||c,className:ie(n,e,i&&"is-valid",s&&"is-invalid")})});Rp.displayName="FormCheckInput";const yu=A.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=A.useContext(zn);return t=pe(t,"form-check-label"),b.jsx("label",{...r,ref:i,htmlFor:n||s,className:ie(e,t)})});yu.displayName="FormCheckLabel";function Hk(t,e){return A.Children.toArray(t).some(n=>A.isValidElement(n)&&n.type===e)}const fw=A.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:l=!1,feedbackTooltip:u=!1,feedback:c,feedbackType:d,className:p,style:m,title:I="",type:C="checkbox",label:P,children:N,as:w="input",...v},_)=>{e=pe(e,"form-check"),n=pe(n,"form-switch");const{controlId:x}=A.useContext(zn),F=A.useMemo(()=>({controlId:t||x}),[x,t]),V=!N&&P!=null&&P!==!1||Hk(N,yu),E=b.jsx(Rp,{...v,type:C==="switch"?"checkbox":C,ref:_,isValid:o,isInvalid:l,disabled:s,as:w});return b.jsx(zn.Provider,{value:F,children:b.jsx("div",{style:m,className:ie(p,V&&e,r&&`${e}-inline`,i&&`${e}-reverse`,C==="switch"&&n),children:N||b.jsxs(b.Fragment,{children:[E,V&&b.jsx(yu,{title:I,children:P}),c&&b.jsx(cc,{type:d,tooltip:u,children:c})]})})})});fw.displayName="FormCheck";const vu=Object.assign(fw,{Input:Rp,Label:yu}),pw=A.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:l=!1,plaintext:u,readOnly:c,as:d="input",...p},m)=>{const{controlId:I}=A.useContext(zn);return t=pe(t,"form-control"),b.jsx(d,{...p,type:e,size:r,ref:m,readOnly:c,id:i||I,className:ie(s,u?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",l&&"is-invalid")})});pw.displayName="FormControl";const qk=Object.assign(pw,{Feedback:cc}),mw=A.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=pe(e,"form-floating"),b.jsx(n,{ref:i,className:ie(t,e),...r})));mw.displayName="FormFloating";const Cp=A.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=A.useMemo(()=>({controlId:t}),[t]);return b.jsx(zn.Provider,{value:i,children:b.jsx(e,{...n,ref:r})})});Cp.displayName="FormGroup";function Gk({as:t,bsPrefix:e,className:n,...r}){e=pe(e,"col");const i=KE(),s=QE(),o=[],l=[];return i.forEach(u=>{const c=r[u];delete r[u];let d,p,m;typeof c=="object"&&c!=null?{span:d,offset:p,order:m}=c:d=c;const I=u!==s?`-${u}`:"";d&&o.push(d===!0?`${e}${I}`:`${e}${I}-${d}`),m!=null&&l.push(`order${I}-${m}`),p!=null&&l.push(`offset${I}-${p}`)}),[{...r,className:ie(n,...o,...l)},{as:t,bsPrefix:e,spans:o}]}const Ap=A.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=Gk(t);return b.jsx(i,{...r,ref:e,className:ie(n,!o.length&&s)})});Ap.displayName="Col";const gw=A.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},l)=>{const{controlId:u}=A.useContext(zn);e=pe(e,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const d=ie(i,e,r&&"visually-hidden",n&&c);return s=s||u,n?b.jsx(Ap,{ref:l,as:"label",className:d,htmlFor:s,...o}):b.jsx(t,{ref:l,className:d,htmlFor:s,...o})});gw.displayName="FormLabel";const yw=A.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=A.useContext(zn);return t=pe(t,"form-range"),b.jsx("input",{...r,type:"range",ref:i,className:ie(e,t),id:n||s})});yw.displayName="FormRange";const vw=A.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...l},u)=>{const{controlId:c}=A.useContext(zn);return t=pe(t,"form-select"),b.jsx("select",{...l,size:n,ref:u,className:ie(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||c})});vw.displayName="FormSelect";const _w=A.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=pe(t,"form-text"),b.jsx(n,{...i,ref:s,className:ie(e,t,r&&"text-muted")})));_w.displayName="FormText";const Ew=A.forwardRef((t,e)=>b.jsx(vu,{...t,ref:e,type:"switch"}));Ew.displayName="Switch";const Kk=Object.assign(Ew,{Input:vu.Input,Label:vu.Label}),ww=A.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=pe(t,"form-floating"),b.jsxs(Cp,{ref:o,className:ie(e,t),controlId:r,...s,children:[n,b.jsx("label",{htmlFor:r,children:i})]})));ww.displayName="FloatingLabel";const Qk={_ref:Mn.any,validated:Mn.bool,as:Mn.elementType},kp=A.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>b.jsx(n,{...r,ref:i,className:ie(t,e&&"was-validated")}));kp.displayName="Form";kp.propTypes=Qk;const fn=Object.assign(kp,{Group:Cp,Control:qk,Floating:mw,Check:vu,Switch:Kk,Label:gw,Text:_w,Range:yw,Select:vw,FloatingLabel:ww});var By={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Iw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[d],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new Yk;const m=s<<2|l>>4;if(r.push(m),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jk=function(t){const e=Tw(t);return Iw.encodeByteArray(e,!0)},_u=function(t){return Jk(t).replace(/\./g,"")},Sw=function(t){try{return Iw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=()=>Zk().__FIREBASE_DEFAULTS__,tP=()=>{if(typeof process>"u"||typeof By>"u")return;const t=By.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sw(t[1]);return e&&JSON.parse(e)},hc=()=>{try{return eP()||tP()||nP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rw=t=>{var e,n;return(n=(e=hc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cw=t=>{const e=Rw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Aw=()=>{var t;return(t=hc())===null||t===void 0?void 0:t.config},kw=t=>{var e;return(e=hc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_u(JSON.stringify(n)),_u(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function sP(){var t;const e=(t=hc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lP(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uP(){return!sP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Ow(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function cP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="FirebaseError";class Kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hP,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,l,r)}}function dP(t,e){return t.replace(fP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fP=/\{\$([^}]+)}/g;function pP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ta(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zy(s)&&zy(o)){if(!ta(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mP(t,e){const n=new gP(t,e);return n.subscribe.bind(n)}class gP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Oh),i.error===void 0&&(i.error=Oh),i.complete===void 0&&(i.complete=Oh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=1e3,_P=2,EP=4*60*60*1e3,wP=.5;function Wy(t,e=vP,n=_P){const r=e*Math.pow(n,t),i=Math.round(wP*r*(Math.random()-.5)*2);return Math.min(EP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){return t&&t._delegate?t._delegate:t}class Gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SP(e))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ei){return this.instances.has(e)}getOptions(e=ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ei){return this.component?this.component.multipleInstances?e:ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IP(t){return t===ei?void 0:t}function SP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const CP={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},AP=oe.INFO,kP={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},PP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dc{constructor(e){this.name=e,this._logLevel=AP,this._logHandler=PP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const NP=(t,e)=>e.some(n=>t instanceof n);let Hy,qy;function xP(){return Hy||(Hy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OP(){return qy||(qy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dw=new WeakMap,Xd=new WeakMap,bw=new WeakMap,Dh=new WeakMap,Pp=new WeakMap;function DP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dw.set(n,t)}).catch(()=>{}),Pp.set(e,t),e}function bP(t){if(Xd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xd.set(t,e)}let Yd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LP(t){Yd=t(Yd)}function VP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bh(this),e,...n);return bw.set(r,e.sort?e.sort():[e]),Ar(r)}:OP().includes(t)?function(...e){return t.apply(bh(this),e),Ar(Dw.get(this))}:function(...e){return Ar(t.apply(bh(this),e))}}function MP(t){return typeof t=="function"?VP(t):(t instanceof IDBTransaction&&bP(t),NP(t,xP())?new Proxy(t,Yd):t)}function Ar(t){if(t instanceof IDBRequest)return DP(t);if(Dh.has(t))return Dh.get(t);const e=MP(t);return e!==t&&(Dh.set(t,e),Pp.set(e,t)),e}const bh=t=>Pp.get(t);function Lw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ar(o.result),u.oldVersion,u.newVersion,Ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const FP=["get","getKey","getAll","getAllKeys","count"],UP=["put","add","delete","clear"],Lh=new Map;function Gy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lh.get(e))return Lh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=UP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Lh.set(e,s),s}LP(t=>({...t,get:(e,n,r)=>Gy(e,n)||t.get(e,n,r),has:(e,n)=>!!Gy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($P(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $P(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jd="@firebase/app",Ky="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new dc("@firebase/app"),BP="@firebase/app-compat",zP="@firebase/analytics-compat",WP="@firebase/analytics",HP="@firebase/app-check-compat",qP="@firebase/app-check",GP="@firebase/auth",KP="@firebase/auth-compat",QP="@firebase/database",XP="@firebase/data-connect",YP="@firebase/database-compat",JP="@firebase/functions",ZP="@firebase/functions-compat",eN="@firebase/installations",tN="@firebase/installations-compat",nN="@firebase/messaging",rN="@firebase/messaging-compat",iN="@firebase/performance",sN="@firebase/performance-compat",oN="@firebase/remote-config",aN="@firebase/remote-config-compat",lN="@firebase/storage",uN="@firebase/storage-compat",cN="@firebase/firestore",hN="@firebase/vertexai",dN="@firebase/firestore-compat",fN="firebase",pN="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="[DEFAULT]",mN={[Jd]:"fire-core",[BP]:"fire-core-compat",[WP]:"fire-analytics",[zP]:"fire-analytics-compat",[qP]:"fire-app-check",[HP]:"fire-app-check-compat",[GP]:"fire-auth",[KP]:"fire-auth-compat",[QP]:"fire-rtdb",[XP]:"fire-data-connect",[YP]:"fire-rtdb-compat",[JP]:"fire-fn",[ZP]:"fire-fn-compat",[eN]:"fire-iid",[tN]:"fire-iid-compat",[nN]:"fire-fcm",[rN]:"fire-fcm-compat",[iN]:"fire-perf",[sN]:"fire-perf-compat",[oN]:"fire-rc",[aN]:"fire-rc-compat",[lN]:"fire-gcs",[uN]:"fire-gcs-compat",[cN]:"fire-fst",[dN]:"fire-fst-compat",[hN]:"fire-vertex","fire-js":"fire-js",[fN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new Map,gN=new Map,ef=new Map;function Qy(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if(ef.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;ef.set(e,t);for(const n of Eu.values())Qy(n,t);for(const n of gN.values())Qy(n,t);return!0}function $r(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kr=new Ci("app","Firebase",yN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=pN;function Vw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kr.create("bad-app-name",{appName:String(i)});if(n||(n=Aw()),!n)throw kr.create("no-options");const s=Eu.get(i);if(s){if(ta(n,s.options)&&ta(r,s.config))return s;throw kr.create("duplicate-app",{appName:i})}const o=new RP(i);for(const u of ef.values())o.addComponent(u);const l=new vN(n,r,o);return Eu.set(i,l),l}function fc(t=Zd){const e=Eu.get(t);if(!e&&t===Zd&&Aw())return Vw();if(!e)throw kr.create("no-app",{appName:t});return e}function kt(t,e,n){var r;let i=(r=mN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(l.join(" "));return}an(new Gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N="firebase-heartbeat-database",EN=1,na="firebase-heartbeat-store";let Vh=null;function Mw(){return Vh||(Vh=Lw(_N,EN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(na)}catch(n){console.warn(n)}}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),Vh}async function wN(t){try{const n=(await Mw()).transaction(na),r=await n.objectStore(na).get(Fw(t));return await n.done,r}catch(e){if(e instanceof Kt)Wn.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function Xy(t,e){try{const r=(await Mw()).transaction(na,"readwrite");await r.objectStore(na).put(e,Fw(t)),await r.done}catch(n){if(n instanceof Kt)Wn.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function Fw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=1024,IN=30*24*60*60*1e3;class SN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=IN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yy(),{heartbeatsToSend:r,unsentEntries:i}=RN(this._heartbeatsCache.heartbeats),s=_u(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Wn.warn(n),""}}}function Yy(){return new Date().toISOString().substring(0,10)}function RN(t,e=TN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xw()?Ow().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jy(t){return _u(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t){an(new Gt("platform-logger",e=>new jP(e),"PRIVATE")),an(new Gt("heartbeat",e=>new SN(e),"PRIVATE")),kt(Jd,Ky,t),kt(Jd,Ky,"esm2017"),kt("fire-js","")}AN("");var kN="firebase",PN="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(kN,PN,"app");const Uw="@firebase/installations",Np="0.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=1e4,$w=`w:${Np}`,Bw="FIS_v2",NN="https://firebaseinstallations.googleapis.com/v1",xN=60*60*1e3,ON="installations",DN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},vi=new Ci(ON,DN,bN);function zw(t){return t instanceof Kt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww({projectId:t}){return`${NN}/projects/${t}/installations`}function Hw(t){return{token:t.token,requestStatus:2,expiresIn:VN(t.expiresIn),creationTime:Date.now()}}async function qw(t,e){const r=(await e.json()).error;return vi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Gw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function LN(t,{refreshToken:e}){const n=Gw(t);return n.append("Authorization",MN(e)),n}async function Kw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function VN(t){return Number(t.replace("s","000"))}function MN(t){return`${Bw} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ww(t),i=Gw(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Bw,appId:t.appId,sdkVersion:$w},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await Kw(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Hw(c.authToken)}}else throw await qw("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=/^[cdef][\w-]{21}$/,tf="";function $N(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=BN(t);return jN.test(n)?n:tf}catch{return tf}}function BN(t){return UN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=new Map;function Yw(t,e){const n=pc(t);Jw(n,e),zN(n,e)}function Jw(t,e){const n=Xw.get(t);if(n)for(const r of n)r(e)}function zN(t,e){const n=WN();n&&n.postMessage({key:t,fid:e}),HN()}let si=null;function WN(){return!si&&"BroadcastChannel"in self&&(si=new BroadcastChannel("[Firebase] FID Change"),si.onmessage=t=>{Jw(t.data.key,t.data.fid)}),si}function HN(){Xw.size===0&&si&&(si.close(),si=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN="firebase-installations-database",GN=1,_i="firebase-installations-store";let Mh=null;function xp(){return Mh||(Mh=Lw(qN,GN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_i)}}})),Mh}async function wu(t,e){const n=pc(t),i=(await xp()).transaction(_i,"readwrite"),s=i.objectStore(_i),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Yw(t,e.fid),e}async function Zw(t){const e=pc(t),r=(await xp()).transaction(_i,"readwrite");await r.objectStore(_i).delete(e),await r.done}async function mc(t,e){const n=pc(t),i=(await xp()).transaction(_i,"readwrite"),s=i.objectStore(_i),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Yw(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(t){let e;const n=await mc(t.appConfig,r=>{const i=KN(r),s=QN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===tf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function KN(t){const e=t||{fid:$N(),registrationStatus:0};return eT(e)}function QN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(vi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=XN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:YN(t)}:{installationEntry:e}}async function XN(t,e){try{const n=await FN(t,e);return wu(t.appConfig,n)}catch(n){throw zw(n)&&n.customData.serverCode===409?await Zw(t.appConfig):await wu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function YN(t){let e=await Zy(t.appConfig);for(;e.registrationStatus===1;)await Qw(100),e=await Zy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Op(t);return r||n}return e}function Zy(t){return mc(t,e=>{if(!e)throw vi.create("installation-not-found");return eT(e)})}function eT(t){return JN(t)?{fid:t.fid,registrationStatus:0}:t}function JN(t){return t.registrationStatus===1&&t.registrationTime+jw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN({appConfig:t,heartbeatServiceProvider:e},n){const r=ex(t,n),i=LN(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:$w,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await Kw(()=>fetch(r,l));if(u.ok){const c=await u.json();return Hw(c)}else throw await qw("Generate Auth Token",u)}function ex(t,{fid:e}){return`${Ww(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(t,e=!1){let n;const r=await mc(t.appConfig,s=>{if(!tT(s))throw vi.create("not-registered");const o=s.authToken;if(!e&&rx(o))return s;if(o.requestStatus===1)return n=tx(t,e),s;{if(!navigator.onLine)throw vi.create("app-offline");const l=sx(s);return n=nx(t,l),l}});return n?await n:r.authToken}async function tx(t,e){let n=await ev(t.appConfig);for(;n.authToken.requestStatus===1;)await Qw(100),n=await ev(t.appConfig);const r=n.authToken;return r.requestStatus===0?Dp(t,e):r}function ev(t){return mc(t,e=>{if(!tT(e))throw vi.create("not-registered");const n=e.authToken;return ox(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function nx(t,e){try{const n=await ZN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await wu(t.appConfig,r),n}catch(n){if(zw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zw(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wu(t.appConfig,r)}throw n}}function tT(t){return t!==void 0&&t.registrationStatus===2}function rx(t){return t.requestStatus===2&&!ix(t)}function ix(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+xN}function sx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ox(t){return t.requestStatus===1&&t.requestTime+jw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ax(t){const e=t,{installationEntry:n,registrationPromise:r}=await Op(e);return r?r.catch(console.error):Dp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(t,e=!1){const n=t;return await ux(n),(await Dp(n,e)).token}async function ux(t){const{registrationPromise:e}=await Op(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t){if(!t||!t.options)throw Fh("App Configuration");if(!t.name)throw Fh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fh(t){return vi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="installations",hx="installations-internal",dx=t=>{const e=t.getProvider("app").getImmediate(),n=cx(e),r=$r(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},fx=t=>{const e=t.getProvider("app").getImmediate(),n=$r(e,nT).getImmediate();return{getId:()=>ax(n),getToken:i=>lx(n,i)}};function px(){an(new Gt(nT,dx,"PUBLIC")),an(new Gt(hx,fx,"PRIVATE"))}px();kt(Uw,Np);kt(Uw,Np,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="analytics",mx="firebase_id",gx="origin",yx=60*1e3,vx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new dc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Lt=new Ci("analytics","Analytics",_x);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t){if(!t.startsWith(bp)){const e=Lt.create("invalid-gtag-resource",{gtagURL:t});return Pt.warn(e.message),""}return t}function rT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function wx(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Tx(t,e){const n=wx("firebase-js-sdk-policy",{createScriptURL:Ex}),r=document.createElement("script"),i=`${bp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ix(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Sx(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await rT(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Pt.error(l)}t("config",i,s)}async function Rx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await rT(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Pt.error(s)}}function Cx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await Rx(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await Sx(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Pt.error(l)}}return i}function Ax(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Cx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function kx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(bp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=30,Nx=1e3;class xx{constructor(e={},n=Nx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const iT=new xx;function Ox(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Dx(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Ox(r)},s=vx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Lt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function bx(t,e=iT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Lt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Lt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Mx;return setTimeout(async()=>{l.abort()},yx),sT({appId:r,apiKey:i,measurementId:s},o,l,e)}async function sT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=iT){var s;const{appId:o,measurementId:l}=t;try{await Lx(r,e)}catch(u){if(l)return Pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await Dx(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!Vx(c)){if(i.deleteThrottleMetadata(o),l)return Pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Wy(n,i.intervalMillis,Px):Wy(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),Pt.debug(`Calling attemptFetch again in ${d} millis`),sT(t,p,r,i)}}function Lx(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Vx(t){if(!(t instanceof Kt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Mx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Fx(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ux(){if(xw())try{await Ow()}catch(t){return Pt.warn(Lt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Pt.warn(Lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function jx(t,e,n,r,i,s,o){var l;const u=bx(t);u.then(I=>{n[I.measurementId]=I.appId,t.options.measurementId&&I.measurementId!==t.options.measurementId&&Pt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Pt.error(I)),e.push(u);const c=Ux().then(I=>{if(I)return r.getId()}),[d,p]=await Promise.all([u,c]);kx(s)||Tx(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[gx]="firebase",m.update=!0,p!=null&&(m[mx]=p),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e){this.app=e}_delete(){return delete ko[this.app.options.appId],Promise.resolve()}}let ko={},tv=[];const nv={};let Uh="dataLayer",Bx="gtag",rv,oT,iv=!1;function zx(){const t=[];if(Nw()&&t.push("This is a browser extension environment."),cP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Lt.create("invalid-analytics-context",{errorInfo:e});Pt.warn(n.message)}}function Wx(t,e,n){zx();const r=t.options.appId;if(!r)throw Lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Lt.create("no-api-key");if(ko[r]!=null)throw Lt.create("already-exists",{id:r});if(!iv){Ix(Uh);const{wrappedGtag:s,gtagCore:o}=Ax(ko,tv,nv,Uh,Bx);oT=s,rv=o,iv=!0}return ko[r]=jx(t,tv,nv,e,rv,Uh,n),new $x(t)}function Hx(t=fc()){t=_t(t);const e=$r(t,Tu);return e.isInitialized()?e.getImmediate():qx(t)}function qx(t,e={}){const n=$r(t,Tu);if(n.isInitialized()){const i=n.getImmediate();if(ta(e,n.getOptions()))return i;throw Lt.create("already-initialized")}return n.initialize({options:e})}function Gx(t,e,n,r){t=_t(t),Fx(oT,ko[t.app.options.appId],e,n,r).catch(i=>Pt.error(i))}const sv="@firebase/analytics",ov="0.10.9";function Kx(){an(new Gt(Tu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Wx(r,i,n)},"PUBLIC")),an(new Gt("analytics-internal",t,"PRIVATE")),kt(sv,ov),kt(sv,ov,"esm2017");function t(e){try{const n=e.getProvider(Tu).getImmediate();return{logEvent:(r,i,s)=>Gx(n,r,i,s)}}catch(n){throw Lt.create("interop-component-reg-failed",{reason:n})}}}Kx();function Lp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function aT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qx=aT,lT=new Ci("auth","Firebase",aT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new dc("@firebase/auth");function Xx(t,...e){Iu.logLevel<=oe.WARN&&Iu.warn(`Auth (${Ai}): ${t}`,...e)}function Dl(t,...e){Iu.logLevel<=oe.ERROR&&Iu.error(`Auth (${Ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,...e){throw Vp(t,...e)}function vn(t,...e){return Vp(t,...e)}function uT(t,e,n){const r=Object.assign(Object.assign({},Qx()),{[e]:n});return new Ci("auth","Firebase",r).create(e,{appName:t.name})}function ci(t){return uT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lT.create(t,...e)}function Y(t,e,...n){if(!t)throw Vp(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function qn(t,e){t||Dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Yx(){return av()==="http:"||av()==="https:"}function av(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yx()||Nw()||"connection"in navigator)?navigator.onLine:!0}function Zx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=iP()||aP()}get(){return Jx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new wa(3e4,6e4);function Fp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ls(t,e,n,r,i={}){return hT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ea(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return oP()||(c.referrerPolicy="no-referrer"),cT.fetch()(dT(t,t.config.apiHost,n,l),c)})}async function hT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},eO),e);try{const i=new rO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw dl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw dl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw dl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw uT(t,d,c);Hn(t,d)}}catch(i){if(i instanceof Kt)throw i;Hn(t,"network-request-failed",{message:String(i)})}}async function nO(t,e,n,r,i={}){const s=await Ls(t,e,n,r,i);return"mfaPendingCredential"in s&&Hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function dT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mp(t.config,i):`${t.config.apiScheme}://${i}`}class rO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),tO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iO(t,e){return Ls(t,"POST","/v1/accounts:delete",e)}async function fT(t,e){return Ls(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sO(t,e=!1){const n=_t(t),r=await n.getIdToken(e),i=Up(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Po(jh(i.auth_time)),issuedAtTime:Po(jh(i.iat)),expirationTime:Po(jh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jh(t){return Number(t)*1e3}function Up(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sw(n);return i?JSON.parse(i):(Dl("Failed to decode base64 JWT payload"),null)}catch(i){return Dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lv(t){const e=Up(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kt&&oO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Po(this.lastLoginAt),this.creationTime=Po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ra(t,fT(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?pT(s.providerUserInfo):[],l=uO(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new rf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function lO(t){const e=_t(t);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pT(t){return t.map(e=>{var{providerId:n}=e,r=Lp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO(t,e){const n=await hT(t,{},async()=>{const r=Ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=dT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",cT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hO(t,e){return Ls(t,"POST","/v2/accounts:revokeToken",Fp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=lv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hs;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Lp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ra(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sO(this,e)}reload(){return lO(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Su(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mr(this.auth.app))return Promise.reject(ci(this.auth));const e=await this.getIdToken();return await ra(this,iO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_,emailVerified:x,isAnonymous:F,providerData:V,stsTokenManager:E}=n;Y(_&&E,e,"internal-error");const g=hs.fromJSON(this.name,E);Y(typeof _=="string",e,"internal-error"),tr(p,e.name),tr(m,e.name),Y(typeof x=="boolean",e,"internal-error"),Y(typeof F=="boolean",e,"internal-error"),tr(I,e.name),tr(C,e.name),tr(P,e.name),tr(N,e.name),tr(w,e.name),tr(v,e.name);const T=new bn({uid:_,auth:e,email:m,emailVerified:x,displayName:p,isAnonymous:F,photoURL:C,phoneNumber:I,tenantId:P,stsTokenManager:g,createdAt:w,lastLoginAt:v});return V&&Array.isArray(V)&&(T.providerData=V.map(S=>Object.assign({},S))),N&&(T._redirectEventId=N),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const s=new bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Su(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?pT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new hs;l.updateFromIdToken(r);const u=new bn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=new Map;function Ln(t){qn(t instanceof Function,"Expected a class definition");let e=uv.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mT.type="NONE";const cv=mT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bl(this.userKey,i.apiKey,s),this.fullPersistenceKey=bl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(Ln(cv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ln(cv);const o=bl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=bn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ds(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ds(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_T(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wT(e))return"Blackberry";if(TT(e))return"Webos";if(yT(e))return"Safari";if((e.includes("chrome/")||vT(e))&&!e.includes("edge/"))return"Chrome";if(ET(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gT(t=pt()){return/firefox\//i.test(t)}function yT(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vT(t=pt()){return/crios\//i.test(t)}function _T(t=pt()){return/iemobile/i.test(t)}function ET(t=pt()){return/android/i.test(t)}function wT(t=pt()){return/blackberry/i.test(t)}function TT(t=pt()){return/webos/i.test(t)}function jp(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dO(t=pt()){var e;return jp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fO(){return lP()&&document.documentMode===10}function IT(t=pt()){return jp(t)||ET(t)||TT(t)||wT(t)||/windows phone/i.test(t)||_T(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t,e=[]){let n;switch(t){case"Browser":n=hv(pt());break;case"Worker":n=`${hv(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mO(t,e={}){return Ls(t,"GET","/v2/passwordPolicy",Fp(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=6;class yO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dv(this),this.idTokenSubscription=new dv(this),this.beforeStateQueue=new pO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fT(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mr(this.app))return Promise.reject(ci(this));const n=e?_t(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mr(this.app)?Promise.reject(ci(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mr(this.app)?Promise.reject(ci(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mO(this),n=new yO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ST(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Xx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $p(t){return _t(t)}class dv{constructor(e){this.auth=e,this.observer=null,this.addObserver=mP(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _O(t){Bp=t}function EO(t){return Bp.loadJS(t)}function wO(){return Bp.gapiScript}function TO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t,e){const n=$r(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ta(s,e??{}))return i;Hn(i,"already-initialized")}return n.initialize({options:e})}function SO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RO(t,e,n){const r=$p(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=RT(e),{host:o,port:l}=CO(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),AO()}function RT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CO(t){const e=RT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fv(o)}}}function fv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e){return nO(t,"POST","/v1/accounts:signInWithIdp",Fp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO="http://localhost";class Ei extends CT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Lp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:kO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ea(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends AT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Ta{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ei._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Ta{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Ta{constructor(){super("twitter.com")}static credential(e,n){return Ei._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await bn._fromIdTokenResponse(e,r,i),o=pv(r);return new Ts({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=pv(r);return new Ts({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function pv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends Kt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ru.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ru(e,n,r,i)}}function kT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ru._fromErrorAndOperation(t,s,e,r):s})}async function PO(t,e,n=!1){const r=await ra(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ts._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(t,e,n=!1){const{auth:r}=t;if(mr(r.app))return Promise.reject(ci(r));const i="reauthenticate";try{const s=await ra(t,kT(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Up(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Ts._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Hn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xO(t,e,n=!1){if(mr(t.app))return Promise.reject(ci(t));const r="signIn",i=await kT(t,r,e),s=await Ts._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function OO(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function DO(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}const Cu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cu,"1"),this.storage.removeItem(Cu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=1e3,LO=10;class NT extends PT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=IT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NT.type="LOCAL";const VO=NT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT extends PT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xT.type="SESSION";const OT=xT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await MO(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=zp("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function UO(t){_n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function jO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $O(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BO(){return DT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="firebaseLocalStorageDb",zO=1,Au="firebaseLocalStorage",LT="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yc(t,e){return t.transaction([Au],e?"readwrite":"readonly").objectStore(Au)}function WO(){const t=indexedDB.deleteDatabase(bT);return new Ia(t).toPromise()}function sf(){const t=indexedDB.open(bT,zO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Au,{keyPath:LT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Au)?e(r):(r.close(),await WO(),e(await sf()))})})}async function mv(t,e,n){const r=yc(t,!0).put({[LT]:e,value:n});return new Ia(r).toPromise()}async function HO(t,e){const n=yc(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function gv(t,e){const n=yc(t,!0).delete(e);return new Ia(n).toPromise()}const qO=800,GO=3;class VT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(BO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jO(),!this.activeServiceWorker)return;this.sender=new FO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$O()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sf();return await mv(e,Cu,"1"),await gv(e,Cu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=yc(i,!1).getAll();return new Ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VT.type="LOCAL";const KO=VT;new wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t,e){return e?Ln(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp extends CT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XO(t){return xO(t.auth,new Wp(t),t.bypassAuthState)}function YO(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),NO(n,new Wp(t),t.bypassAuthState)}async function JO(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),PO(n,new Wp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XO;case"linkViaPopup":case"linkViaRedirect":return JO;case"reauthViaPopup":case"reauthViaRedirect":return YO;default:Hn(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=new wa(2e3,1e4);class is extends MT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=zp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZO.get())};e()}}is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD="pendingRedirect",Ll=new Map;class tD extends MT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ll.get(this.auth._key());if(!e){try{const r=await nD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ll.set(this.auth._key(),e)}return this.bypassAuthState||Ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nD(t,e){const n=sD(e),r=iD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rD(t,e){Ll.set(t._key(),e)}function iD(t){return Ln(t._redirectPersistence)}function sD(t){return bl(eD,t.config.apiKey,t.name)}async function oD(t,e,n=!1){if(mr(t.app))return Promise.reject(ci(t));const r=$p(t),i=QO(r,e),o=await new tD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=10*60*1e3;class lD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!FT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aD&&this.cachedEventUids.clear(),this.cachedEventUids.has(yv(e))}saveEventToCache(e){this.cachedEventUids.add(yv(e)),this.lastProcessedEventTime=Date.now()}}function yv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function FT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return FT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(t,e={}){return Ls(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dD=/^https?/;async function fD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cD(t);for(const n of e)try{if(pD(n))return}catch{}Hn(t,"unauthorized-domain")}function pD(t){const e=nf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dD.test(n))return!1;if(hD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=new wa(3e4,6e4);function vv(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gD(t){return new Promise((e,n)=>{var r,i,s;function o(){vv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vv(),n(vn(t,"network-request-failed"))},timeout:mD.get()})}if(!((i=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_n().gapi)===null||s===void 0)&&s.load)o();else{const l=TO("iframefcb");return _n()[l]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},EO(`${wO()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Vl=null,e})}let Vl=null;function yD(t){return Vl=Vl||gD(t),Vl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=new wa(5e3,15e3),_D="__/auth/iframe",ED="emulator/auth/iframe",wD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ID(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mp(e,ED):`https://${t.config.authDomain}/${_D}`,r={apiKey:e.apiKey,appName:t.name,v:Ai},i=TD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ea(r).slice(1)}`}async function SD(t){const e=await yD(t),n=_n().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:ID(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),l=_n().setTimeout(()=>{s(o)},vD.get());function u(){_n().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CD=500,AD=600,kD="_blank",PD="http://localhost";class _v{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ND(t,e,n,r=CD,i=AD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},RD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=pt().toLowerCase();n&&(l=vT(c)?kD:n),gT(c)&&(e=e||PD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[I,C])=>`${m}${I}=${C},`,"");if(dO(c)&&l!=="_self")return xD(e||"",l),new _v(null);const p=window.open(e||"",l,d);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new _v(p)}function xD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD="__/auth/handler",DD="emulator/auth/handler",bD=encodeURIComponent("fac");async function Ev(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ai,eventId:i};if(e instanceof AT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ta){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${bD}=${encodeURIComponent(u)}`:"";return`${LD(t)}?${Ea(l).slice(1)}${c}`}function LD({config:t}){return t.emulator?Mp(t,DD):`https://${t.authDomain}/${OD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="webStorageSupport";class VD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=OT,this._completeRedirectFn=oD,this._overrideRedirectResult=rD}async _openPopup(e,n,r,i){var s;qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ev(e,n,r,nf(),i);return ND(e,o,zp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ev(e,n,r,nf(),i);return UO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SD(e),r=new lD(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($h,{type:$h},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$h];o!==void 0&&n(!!o),Hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return IT()||yT()||jp()}}const MD=VD;var wv="@firebase/auth",Tv="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jD(t){an(new Gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ST(t)},c=new vO(r,i,s,u);return SO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),an(new Gt("auth-internal",e=>{const n=$p(e.getProvider("auth").getImmediate());return(r=>new FD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(wv,Tv,UD(t)),kt(wv,Tv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=5*60,BD=kw("authIdTokenMaxAge")||$D;let Iv=null;const zD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BD)return;const i=n==null?void 0:n.token;Iv!==i&&(Iv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WD(t=fc()){const e=$r(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IO(t,{popupRedirectResolver:MD,persistence:[KO,VO,OT]}),r=kw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=zD(s.toString());DO(n,o,()=>o(n.currentUser)),OO(n,l=>o(l))}}const i=Rw("auth");return i&&RO(n,`http://${i}`),n}function HD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_O({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jD("Browser");var Sv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hi,UT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function T(){}T.prototype=g.prototype,E.D=g.prototype,E.prototype=new T,E.prototype.constructor=E,E.C=function(S,k,O){for(var R=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)R[_e-2]=arguments[_e];return g.prototype[k].apply(S,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,T){T||(T=0);var S=Array(16);if(typeof g=="string")for(var k=0;16>k;++k)S[k]=g.charCodeAt(T++)|g.charCodeAt(T++)<<8|g.charCodeAt(T++)<<16|g.charCodeAt(T++)<<24;else for(k=0;16>k;++k)S[k]=g[T++]|g[T++]<<8|g[T++]<<16|g[T++]<<24;g=E.g[0],T=E.g[1],k=E.g[2];var O=E.g[3],R=g+(O^T&(k^O))+S[0]+3614090360&4294967295;g=T+(R<<7&4294967295|R>>>25),R=O+(k^g&(T^k))+S[1]+3905402710&4294967295,O=g+(R<<12&4294967295|R>>>20),R=k+(T^O&(g^T))+S[2]+606105819&4294967295,k=O+(R<<17&4294967295|R>>>15),R=T+(g^k&(O^g))+S[3]+3250441966&4294967295,T=k+(R<<22&4294967295|R>>>10),R=g+(O^T&(k^O))+S[4]+4118548399&4294967295,g=T+(R<<7&4294967295|R>>>25),R=O+(k^g&(T^k))+S[5]+1200080426&4294967295,O=g+(R<<12&4294967295|R>>>20),R=k+(T^O&(g^T))+S[6]+2821735955&4294967295,k=O+(R<<17&4294967295|R>>>15),R=T+(g^k&(O^g))+S[7]+4249261313&4294967295,T=k+(R<<22&4294967295|R>>>10),R=g+(O^T&(k^O))+S[8]+1770035416&4294967295,g=T+(R<<7&4294967295|R>>>25),R=O+(k^g&(T^k))+S[9]+2336552879&4294967295,O=g+(R<<12&4294967295|R>>>20),R=k+(T^O&(g^T))+S[10]+4294925233&4294967295,k=O+(R<<17&4294967295|R>>>15),R=T+(g^k&(O^g))+S[11]+2304563134&4294967295,T=k+(R<<22&4294967295|R>>>10),R=g+(O^T&(k^O))+S[12]+1804603682&4294967295,g=T+(R<<7&4294967295|R>>>25),R=O+(k^g&(T^k))+S[13]+4254626195&4294967295,O=g+(R<<12&4294967295|R>>>20),R=k+(T^O&(g^T))+S[14]+2792965006&4294967295,k=O+(R<<17&4294967295|R>>>15),R=T+(g^k&(O^g))+S[15]+1236535329&4294967295,T=k+(R<<22&4294967295|R>>>10),R=g+(k^O&(T^k))+S[1]+4129170786&4294967295,g=T+(R<<5&4294967295|R>>>27),R=O+(T^k&(g^T))+S[6]+3225465664&4294967295,O=g+(R<<9&4294967295|R>>>23),R=k+(g^T&(O^g))+S[11]+643717713&4294967295,k=O+(R<<14&4294967295|R>>>18),R=T+(O^g&(k^O))+S[0]+3921069994&4294967295,T=k+(R<<20&4294967295|R>>>12),R=g+(k^O&(T^k))+S[5]+3593408605&4294967295,g=T+(R<<5&4294967295|R>>>27),R=O+(T^k&(g^T))+S[10]+38016083&4294967295,O=g+(R<<9&4294967295|R>>>23),R=k+(g^T&(O^g))+S[15]+3634488961&4294967295,k=O+(R<<14&4294967295|R>>>18),R=T+(O^g&(k^O))+S[4]+3889429448&4294967295,T=k+(R<<20&4294967295|R>>>12),R=g+(k^O&(T^k))+S[9]+568446438&4294967295,g=T+(R<<5&4294967295|R>>>27),R=O+(T^k&(g^T))+S[14]+3275163606&4294967295,O=g+(R<<9&4294967295|R>>>23),R=k+(g^T&(O^g))+S[3]+4107603335&4294967295,k=O+(R<<14&4294967295|R>>>18),R=T+(O^g&(k^O))+S[8]+1163531501&4294967295,T=k+(R<<20&4294967295|R>>>12),R=g+(k^O&(T^k))+S[13]+2850285829&4294967295,g=T+(R<<5&4294967295|R>>>27),R=O+(T^k&(g^T))+S[2]+4243563512&4294967295,O=g+(R<<9&4294967295|R>>>23),R=k+(g^T&(O^g))+S[7]+1735328473&4294967295,k=O+(R<<14&4294967295|R>>>18),R=T+(O^g&(k^O))+S[12]+2368359562&4294967295,T=k+(R<<20&4294967295|R>>>12),R=g+(T^k^O)+S[5]+4294588738&4294967295,g=T+(R<<4&4294967295|R>>>28),R=O+(g^T^k)+S[8]+2272392833&4294967295,O=g+(R<<11&4294967295|R>>>21),R=k+(O^g^T)+S[11]+1839030562&4294967295,k=O+(R<<16&4294967295|R>>>16),R=T+(k^O^g)+S[14]+4259657740&4294967295,T=k+(R<<23&4294967295|R>>>9),R=g+(T^k^O)+S[1]+2763975236&4294967295,g=T+(R<<4&4294967295|R>>>28),R=O+(g^T^k)+S[4]+1272893353&4294967295,O=g+(R<<11&4294967295|R>>>21),R=k+(O^g^T)+S[7]+4139469664&4294967295,k=O+(R<<16&4294967295|R>>>16),R=T+(k^O^g)+S[10]+3200236656&4294967295,T=k+(R<<23&4294967295|R>>>9),R=g+(T^k^O)+S[13]+681279174&4294967295,g=T+(R<<4&4294967295|R>>>28),R=O+(g^T^k)+S[0]+3936430074&4294967295,O=g+(R<<11&4294967295|R>>>21),R=k+(O^g^T)+S[3]+3572445317&4294967295,k=O+(R<<16&4294967295|R>>>16),R=T+(k^O^g)+S[6]+76029189&4294967295,T=k+(R<<23&4294967295|R>>>9),R=g+(T^k^O)+S[9]+3654602809&4294967295,g=T+(R<<4&4294967295|R>>>28),R=O+(g^T^k)+S[12]+3873151461&4294967295,O=g+(R<<11&4294967295|R>>>21),R=k+(O^g^T)+S[15]+530742520&4294967295,k=O+(R<<16&4294967295|R>>>16),R=T+(k^O^g)+S[2]+3299628645&4294967295,T=k+(R<<23&4294967295|R>>>9),R=g+(k^(T|~O))+S[0]+4096336452&4294967295,g=T+(R<<6&4294967295|R>>>26),R=O+(T^(g|~k))+S[7]+1126891415&4294967295,O=g+(R<<10&4294967295|R>>>22),R=k+(g^(O|~T))+S[14]+2878612391&4294967295,k=O+(R<<15&4294967295|R>>>17),R=T+(O^(k|~g))+S[5]+4237533241&4294967295,T=k+(R<<21&4294967295|R>>>11),R=g+(k^(T|~O))+S[12]+1700485571&4294967295,g=T+(R<<6&4294967295|R>>>26),R=O+(T^(g|~k))+S[3]+2399980690&4294967295,O=g+(R<<10&4294967295|R>>>22),R=k+(g^(O|~T))+S[10]+4293915773&4294967295,k=O+(R<<15&4294967295|R>>>17),R=T+(O^(k|~g))+S[1]+2240044497&4294967295,T=k+(R<<21&4294967295|R>>>11),R=g+(k^(T|~O))+S[8]+1873313359&4294967295,g=T+(R<<6&4294967295|R>>>26),R=O+(T^(g|~k))+S[15]+4264355552&4294967295,O=g+(R<<10&4294967295|R>>>22),R=k+(g^(O|~T))+S[6]+2734768916&4294967295,k=O+(R<<15&4294967295|R>>>17),R=T+(O^(k|~g))+S[13]+1309151649&4294967295,T=k+(R<<21&4294967295|R>>>11),R=g+(k^(T|~O))+S[4]+4149444226&4294967295,g=T+(R<<6&4294967295|R>>>26),R=O+(T^(g|~k))+S[11]+3174756917&4294967295,O=g+(R<<10&4294967295|R>>>22),R=k+(g^(O|~T))+S[2]+718787259&4294967295,k=O+(R<<15&4294967295|R>>>17),R=T+(O^(k|~g))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,E.g[2]=E.g[2]+k&4294967295,E.g[3]=E.g[3]+O&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var T=g-this.blockSize,S=this.B,k=this.h,O=0;O<g;){if(k==0)for(;O<=T;)i(this,E,O),O+=this.blockSize;if(typeof E=="string"){for(;O<g;)if(S[k++]=E.charCodeAt(O++),k==this.blockSize){i(this,S),k=0;break}}else for(;O<g;)if(S[k++]=E[O++],k==this.blockSize){i(this,S),k=0;break}}this.h=k,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var T=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=T&255,T/=256;for(this.u(E),E=Array(16),g=T=0;4>g;++g)for(var S=0;32>S;S+=8)E[T++]=this.g[g]>>>S&255;return E};function s(E,g){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=g(E)}function o(E,g){this.h=g;for(var T=[],S=!0,k=E.length-1;0<=k;k--){var O=E[k]|0;S&&O==g||(T[k]=O,S=!1)}this.g=T}var l={};function u(E){return-128<=E&&128>E?s(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return N(c(-E));for(var g=[],T=1,S=0;E>=T;S++)g[S]=E/T|0,T*=4294967296;return new o(g,0)}function d(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return N(d(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(g,8)),S=p,k=0;k<E.length;k+=8){var O=Math.min(8,E.length-k),R=parseInt(E.substring(k,k+O),g);8>O?(O=c(Math.pow(g,O)),S=S.j(O).add(c(R))):(S=S.j(T),S=S.add(c(R)))}return S}var p=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();for(var E=0,g=1,T=0;T<this.g.length;T++){var S=this.i(T);E+=(0<=S?S:4294967296+S)*g,g*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(P(this))return"-"+N(this).toString(E);for(var g=c(Math.pow(E,6)),T=this,S="";;){var k=x(T,g).g;T=w(T,k.j(g));var O=((0<T.g.length?T.g[0]:T.h)>>>0).toString(E);if(T=k,C(T))return O+S;for(;6>O.length;)O="0"+O;S=O+S}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=w(this,E),P(E)?-1:C(E)?0:1};function N(E){for(var g=E.g.length,T=[],S=0;S<g;S++)T[S]=~E.g[S];return new o(T,~E.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(E){for(var g=Math.max(this.g.length,E.g.length),T=[],S=0,k=0;k<=g;k++){var O=S+(this.i(k)&65535)+(E.i(k)&65535),R=(O>>>16)+(this.i(k)>>>16)+(E.i(k)>>>16);S=R>>>16,O&=65535,R&=65535,T[k]=R<<16|O}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(E,g){return E.add(N(g))}t.j=function(E){if(C(this)||C(E))return p;if(P(this))return P(E)?N(this).j(N(E)):N(N(this).j(E));if(P(E))return N(this.j(N(E)));if(0>this.l(I)&&0>E.l(I))return c(this.m()*E.m());for(var g=this.g.length+E.g.length,T=[],S=0;S<2*g;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var k=0;k<E.g.length;k++){var O=this.i(S)>>>16,R=this.i(S)&65535,_e=E.i(k)>>>16,Ge=E.i(k)&65535;T[2*S+2*k]+=R*Ge,v(T,2*S+2*k),T[2*S+2*k+1]+=O*Ge,v(T,2*S+2*k+1),T[2*S+2*k+1]+=R*_e,v(T,2*S+2*k+1),T[2*S+2*k+2]+=O*_e,v(T,2*S+2*k+2)}for(S=0;S<g;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=g;S<2*g;S++)T[S]=0;return new o(T,0)};function v(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function _(E,g){this.g=E,this.h=g}function x(E,g){if(C(g))throw Error("division by zero");if(C(E))return new _(p,p);if(P(E))return g=x(N(E),g),new _(N(g.g),N(g.h));if(P(g))return g=x(E,N(g)),new _(N(g.g),g.h);if(30<E.g.length){if(P(E)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var T=m,S=g;0>=S.l(E);)T=F(T),S=F(S);var k=V(T,1),O=V(S,1);for(S=V(S,2),T=V(T,2);!C(S);){var R=O.add(S);0>=R.l(E)&&(k=k.add(T),O=R),S=V(S,1),T=V(T,1)}return g=w(E,k.j(g)),new _(k,g)}for(k=p;0<=E.l(g);){for(T=Math.max(1,Math.floor(E.m()/g.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),O=c(T),R=O.j(g);P(R)||0<R.l(E);)T-=S,O=c(T),R=O.j(g);C(O)&&(O=m),k=k.add(O),E=w(E,R)}return new _(k,E)}t.A=function(E){return x(this,E).h},t.and=function(E){for(var g=Math.max(this.g.length,E.g.length),T=[],S=0;S<g;S++)T[S]=this.i(S)&E.i(S);return new o(T,this.h&E.h)},t.or=function(E){for(var g=Math.max(this.g.length,E.g.length),T=[],S=0;S<g;S++)T[S]=this.i(S)|E.i(S);return new o(T,this.h|E.h)},t.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),T=[],S=0;S<g;S++)T[S]=this.i(S)^E.i(S);return new o(T,this.h^E.h)};function F(E){for(var g=E.g.length+1,T=[],S=0;S<g;S++)T[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(T,E.h)}function V(E,g){var T=g>>5;g%=32;for(var S=E.g.length-T,k=[],O=0;O<S;O++)k[O]=0<g?E.i(O+T)>>>g|E.i(O+T+1)<<32-g:E.i(O+T);return new o(k,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,UT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,hi=o}).apply(typeof Sv<"u"?Sv:typeof self<"u"?self:typeof window<"u"?window:{});var fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jT,go,$T,Ml,of,BT,zT,WT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fl=="object"&&fl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var D=a[y];if(!(D in f))break e;f=f[D]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,y=!1,D={next:function(){if(!y&&f<a.length){var L=f++;return{value:h(L,a[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function I(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function C(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,D,L){for(var B=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)B[ye-2]=arguments[ye];return h.prototype[D].apply(y,B)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function N(a,h){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const D=a.length||0,L=y.length||0;a.length=D+L;for(let B=0;B<L;B++)a[D+B]=y[B]}else a.push(y)}}class w{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function _(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var F=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function V(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function E(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function g(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let f,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(f in y)a[f]=y[f];for(let L=0;L<T.length;L++)f=T[L],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function k(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function O(a){l.setTimeout(()=>{throw a},0)}function R(){var a=q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _e{constructor(){this.h=this.g=null}add(h,f){const y=Ge.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var Ge=new w(()=>new ze,a=>a.reset());class ze{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,j=!1,q=new _e,K=()=>{const a=l.Promise.resolve(void 0);Ee=()=>{a.then(re)}};var re=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(f){O(f)}var h=Ge;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}j=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Z(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function we(a,h){if(Z.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{x(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Le[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&we.aa.h.call(this)}}C(we,Z);var Le={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),Br=0;function zr(a,h,f,y,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=D,this.key=++Br,this.da=this.fa=!1}function Qt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Rn(a){this.src=a,this.g={},this.h=0}Rn.prototype.add=function(a,h,f,y,D){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var B=Cn(a,h,y,D);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new zr(h,this.src,L,!!y,D),h.fa=f,a.push(h)),h};function un(a,h){var f=h.type;if(f in a.g){var y=a.g[f],D=Array.prototype.indexOf.call(y,h,void 0),L;(L=0<=D)&&Array.prototype.splice.call(y,D,1),L&&(Qt(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Cn(a,h,f,y){for(var D=0;D<a.length;++D){var L=a[D];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==y)return D}return-1}var cn="closure_lm_"+(1e6*Math.random()|0),ge={};function Wr(a,h,f,y,D){if(Array.isArray(h)){for(var L=0;L<h.length;L++)Wr(a,h[L],f,y,D);return null}return f=xa(f),a&&a[Fe]?a.K(h,f,c(y)?!!y.capture:!!y,D):Hr(a,h,f,!1,y,D)}function Hr(a,h,f,y,D,L){if(!h)throw Error("Invalid event type");var B=c(D)?!!D.capture:!!D,ye=Bs(a);if(ye||(a[cn]=ye=new Rn(a)),f=ye.add(h,f,y,B,L),f.proxy)return f;if(y=Vc(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)de||(D=B),D===void 0&&(D=!1),a.addEventListener(h.toString(),y,D);else if(a.attachEvent)a.attachEvent(Na(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Vc(){function a(f){return h.call(a.src,a.listener,f)}const h=Mc;return a}function Pa(a,h,f,y,D){if(Array.isArray(h))for(var L=0;L<h.length;L++)Pa(a,h[L],f,y,D);else y=c(y)?!!y.capture:!!y,f=xa(f),a&&a[Fe]?(a=a.i,h=String(h).toString(),h in a.g&&(L=a.g[h],f=Cn(L,f,y,D),-1<f&&(Qt(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[h],a.h--)))):a&&(a=Bs(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Cn(h,f,y,D)),(f=-1<a?h[a]:null)&&$s(f))}function $s(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Fe])un(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Na(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Bs(h))?(un(f,a),f.h==0&&(f.src=null,h[cn]=null)):Qt(a)}}}function Na(a){return a in ge?ge[a]:ge[a]="on"+a}function Mc(a,h){if(a.da)a=!0;else{h=new we(h,this);var f=a.listener,y=a.ha||a.src;a.fa&&$s(a),a=f.call(y,h)}return a}function Bs(a){return a=a[cn],a instanceof Rn?a:null}var Oi="__closure_events_fn_"+(1e9*Math.random()>>>0);function xa(a){return typeof a=="function"?a:(a[Oi]||(a[Oi]=function(h){return a.handleEvent(h)}),a[Oi])}function Q(){J.call(this),this.i=new Rn(this),this.M=this,this.F=null}C(Q,J),Q.prototype[Fe]=!0,Q.prototype.removeEventListener=function(a,h,f,y){Pa(this,a,h,f,y)};function Oe(a,h){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new Z(h,a);else if(h instanceof Z)h.target=h.target||a;else{var D=h;h=new Z(y,a),S(h,D)}if(D=!0,f)for(var L=f.length-1;0<=L;L--){var B=h.g=f[L];D=qr(B,y,!0,h)&&D}if(B=h.g=a,D=qr(B,y,!0,h)&&D,D=qr(B,y,!1,h)&&D,f)for(L=0;L<f.length;L++)B=h.g=f[L],D=qr(B,y,!1,h)&&D}Q.prototype.N=function(){if(Q.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],y=0;y<f.length;y++)Qt(f[y]);delete a.g[h],a.h--}}this.F=null},Q.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},Q.prototype.L=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function qr(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,L=0;L<h.length;++L){var B=h[L];if(B&&!B.da&&B.capture==f){var ye=B.listener,Je=B.ha||B.src;B.fa&&un(a.i,B),D=ye.call(Je,y)!==!1&&D}}return D&&!y.defaultPrevented}function wm(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Tm(a){a.g=wm(()=>{a.g=null,a.i&&(a.i=!1,Tm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class N1 extends J{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Tm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zs(a){J.call(this),this.h=a,this.g={}}C(zs,J);var Im=[];function Sm(a){V(a.g,function(h,f){this.g.hasOwnProperty(f)&&$s(h)},a),a.g={}}zs.prototype.N=function(){zs.aa.N.call(this),Sm(this)},zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fc=l.JSON.stringify,x1=l.JSON.parse,O1=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Uc(){}Uc.prototype.h=null;function Rm(a){return a.h||(a.h=a.i())}function Cm(){}var Ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jc(){Z.call(this,"d")}C(jc,Z);function $c(){Z.call(this,"c")}C($c,Z);var Gr={},Am=null;function Oa(){return Am=Am||new Q}Gr.La="serverreachability";function km(a){Z.call(this,Gr.La,a)}C(km,Z);function Hs(a){const h=Oa();Oe(h,new km(h))}Gr.STAT_EVENT="statevent";function Pm(a,h){Z.call(this,Gr.STAT_EVENT,a),this.stat=h}C(Pm,Z);function mt(a){const h=Oa();Oe(h,new Pm(h,a))}Gr.Ma="timingevent";function Nm(a,h){Z.call(this,Gr.Ma,a),this.size=h}C(Nm,Z);function qs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Gs(){this.g=!0}Gs.prototype.xa=function(){this.g=!1};function D1(a,h,f,y,D,L){a.info(function(){if(a.g)if(L)for(var B="",ye=L.split("&"),Je=0;Je<ye.length;Je++){var he=ye[Je].split("=");if(1<he.length){var st=he[0];he=he[1];var ot=st.split("_");B=2<=ot.length&&ot[1]=="type"?B+(st+"="+he+"&"):B+(st+"=redacted&")}}else B=null;else B=L;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+h+`
`+f+`
`+B})}function b1(a,h,f,y,D,L,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+h+`
`+f+`
`+L+" "+B})}function Di(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+V1(a,f)+(y?" "+y:"")})}function L1(a,h){a.info(function(){return"TIMEOUT: "+h})}Gs.prototype.info=function(){};function V1(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var B=1;B<D.length;B++)D[B]=""}}}}return Fc(f)}catch{return h}}var Da={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bc;function ba(){}C(ba,Uc),ba.prototype.g=function(){return new XMLHttpRequest},ba.prototype.i=function(){return{}},Bc=new ba;function Yn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.R=y||1,this.U=new zs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Om}function Om(){this.i=null,this.g="",this.h=!1}var Dm={},zc={};function Wc(a,h,f){a.L=1,a.v=Fa(An(h)),a.m=f,a.P=!0,bm(a,null)}function bm(a,h){a.F=Date.now(),La(a),a.A=An(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Km(f.i,"t",y),a.C=0,f=a.j.J,a.h=new Om,a.g=dg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new N1(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,y=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(Im[0]=D.toString()),D=Im);for(var L=0;L<D.length;L++){var B=Wr(f,D[L],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Hs(),D1(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const h=this.M;h&&kn(a)==3?h.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const ot=kn(this.g);var h=this.g.Ba();const Vi=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||tg(this.g)))){this.J||ot!=4||h==7||(h==8||0>=Vi?Hs(3):Hs(2)),Hc(this);var f=this.g.Z();this.X=f;t:if(Lm(this)){var y=tg(this.g);a="";var D=y.length,L=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kr(this),Ks(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(L&&h==D-1)});y.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,b1(this.i,this.u,this.A,this.l,this.R,ot,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,Je=this.g;if((ye=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ye)){var he=ye;break t}}he=null}if(f=he)Di(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qc(this,f);else{this.o=!1,this.s=3,mt(12),Kr(this),Ks(this);break e}}if(this.P){f=!0;let Xt;for(;!this.J&&this.C<B.length;)if(Xt=M1(this,B),Xt==zc){ot==4&&(this.s=4,mt(14),f=!1),Di(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Dm){this.s=4,mt(15),Di(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Di(this.i,this.l,Xt,null),qc(this,Xt);if(Lm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||B.length!=0||this.h.h||(this.s=1,mt(16),f=!1),this.o=this.o&&f,!f)Di(this.i,this.l,B,"[Invalid Chunked Response]"),Kr(this),Ks(this);else if(0<B.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Jc(st),st.M=!0,mt(11))}}else Di(this.i,this.l,B,null),qc(this,B);ot==4&&Kr(this),this.o&&!this.J&&(ot==4?lg(this.j,this):(this.o=!1,La(this)))}else eS(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Kr(this),Ks(this)}}}catch{}finally{}};function Lm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function M1(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?zc:(f=Number(h.substring(f,y)),isNaN(f)?Dm:(y+=1,y+f>h.length?zc:(h=h.slice(y,y+f),a.C=y+f,h)))}Yn.prototype.cancel=function(){this.J=!0,Kr(this)};function La(a){a.S=Date.now()+a.I,Vm(a,a.I)}function Vm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=qs(m(a.ba,a),h)}function Hc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(L1(this.i,this.A),this.L!=2&&(Hs(),mt(17)),Kr(this),this.s=2,Ks(this)):Vm(this,this.S-a)};function Ks(a){a.j.G==0||a.J||lg(a.j,a)}function Kr(a){Hc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Sm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function qc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Gc(f.h,a))){if(!a.K&&Gc(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Wa(f),Ba(f);else break e;Yc(f),mt(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=qs(m(f.Za,f),6e3));if(1>=Um(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Xr(f,11)}else if((a.K||f.g==a)&&Wa(f),!v(h))for(D=f.Da.g.parse(h),h=0;h<D.length;h++){let he=D[h];if(f.T=he[0],he=he[1],f.G==2)if(he[0]=="c"){f.K=he[1],f.ia=he[2];const st=he[3];st!=null&&(f.la=st,f.j.info("VER="+f.la));const ot=he[4];ot!=null&&(f.Aa=ot,f.j.info("SVER="+f.Aa));const Vi=he[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(y=1.5*Vi,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Xt=a.g;if(Xt){const qa=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qa){var L=y.h;L.g||qa.indexOf("spdy")==-1&&qa.indexOf("quic")==-1&&qa.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Kc(L,L.h),L.h=null))}if(y.D){const Zc=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Zc&&(y.ya=Zc,Ie(y.I,y.D,Zc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var B=a;if(y.qa=hg(y,y.J?y.ia:null,y.W),B.K){jm(y.h,B);var ye=B,Je=y.L;Je&&(ye.I=Je),ye.B&&(Hc(ye),La(ye)),y.g=B}else og(y);0<f.i.length&&za(f)}else he[0]!="stop"&&he[0]!="close"||Xr(f,7);else f.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Xr(f,7):Xc(f):he[0]!="noop"&&f.l&&f.l.ta(he),f.v=0)}}Hs(4)}catch{}}var F1=class{constructor(a,h){this.g=a,this.map=h}};function Mm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Um(a){return a.h?1:a.g?a.g.size:0}function Gc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Kc(a,h){a.g?a.g.add(h):a.h=h}function jm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Mm.prototype.cancel=function(){if(this.i=$m(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function $m(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function U1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,y=0;y<f;y++)h.push(a[y]);return h}h=[],f=0;for(y in a)h[f++]=a[y];return h}function j1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const y in a)h[f++]=y;return h}}}function Bm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=j1(a),y=U1(a),D=y.length,L=0;L<D;L++)h.call(void 0,y[L],f&&f[L],a)}var zm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $1(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),D=null;if(0<=y){var L=a[f].substring(0,y);D=a[f].substring(y+1)}else L=a[f];h(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Qr){this.h=a.h,Va(this,a.j),this.o=a.o,this.g=a.g,Ma(this,a.s),this.l=a.l;var h=a.i,f=new Ys;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Wm(this,f),this.m=a.m}else a&&(h=String(a).match(zm))?(this.h=!1,Va(this,h[1]||"",!0),this.o=Qs(h[2]||""),this.g=Qs(h[3]||"",!0),Ma(this,h[4]),this.l=Qs(h[5]||"",!0),Wm(this,h[6]||"",!0),this.m=Qs(h[7]||"")):(this.h=!1,this.i=new Ys(null,this.h))}Qr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Xs(h,Hm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Xs(h,Hm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Xs(f,f.charAt(0)=="/"?W1:z1,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Xs(f,q1)),a.join("")};function An(a){return new Qr(a)}function Va(a,h,f){a.j=f?Qs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ma(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Wm(a,h,f){h instanceof Ys?(a.i=h,G1(a.i,a.h)):(f||(h=Xs(h,H1)),a.i=new Ys(h,a.h))}function Ie(a,h,f){a.i.set(h,f)}function Fa(a){return Ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Qs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,B1),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function B1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hm=/[#\/\?@]/g,z1=/[#\?:]/g,W1=/[#\?]/g,H1=/[#\?@]/g,q1=/#/g;function Ys(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Jn(a){a.g||(a.g=new Map,a.h=0,a.i&&$1(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ys.prototype,t.add=function(a,h){Jn(this),this.i=null,a=bi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function qm(a,h){Jn(a),h=bi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Gm(a,h){return Jn(a),h=bi(a,h),a.g.has(h)}t.forEach=function(a,h){Jn(this),this.g.forEach(function(f,y){f.forEach(function(D){a.call(h,D,y,this)},this)},this)},t.na=function(){Jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let y=0;y<h.length;y++){const D=a[y];for(let L=0;L<D.length;L++)f.push(h[y])}return f},t.V=function(a){Jn(this);let h=[];if(typeof a=="string")Gm(this,a)&&(h=h.concat(this.g.get(bi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Jn(this),this.i=null,a=bi(this,a),Gm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Km(a,h,f){qm(a,h),0<f.length&&(a.i=null,a.g.set(bi(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var y=h[f];const L=encodeURIComponent(String(y)),B=this.V(y);for(y=0;y<B.length;y++){var D=L;B[y]!==""&&(D+="="+encodeURIComponent(String(B[y]))),a.push(D)}}return this.i=a.join("&")};function bi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function G1(a,h){h&&!a.j&&(Jn(a),a.i=null,a.g.forEach(function(f,y){var D=y.toLowerCase();y!=D&&(qm(this,y),Km(this,D,f))},a)),a.j=h}function K1(a,h){const f=new Gs;if(l.Image){const y=new Image;y.onload=I(Zn,f,"TestLoadImage: loaded",!0,h,y),y.onerror=I(Zn,f,"TestLoadImage: error",!1,h,y),y.onabort=I(Zn,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=I(Zn,f,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function Q1(a,h){const f=new Gs,y=new AbortController,D=setTimeout(()=>{y.abort(),Zn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(D),L.ok?Zn(f,"TestPingServer: ok",!0,h):Zn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Zn(f,"TestPingServer: error",!1,h)})}function Zn(a,h,f,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(f)}catch{}}function X1(){this.g=new O1}function Y1(a,h,f){const y=f||"";try{Bm(a,function(D,L){let B=D;c(D)&&(B=Fc(D)),h.push(y+L+"="+encodeURIComponent(B))})}catch(D){throw h.push(y+"type="+encodeURIComponent("_badmap")),D}}function Ua(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Ua,Uc),Ua.prototype.g=function(){return new ja(this.l,this.j)},Ua.prototype.i=function(a){return function(){return a}}({});function ja(a,h){Q.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ja,Q),t=ja.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Js(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zs(this)),this.g&&(this.readyState=3,Zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Js(this):Zs(this),this.readyState==3&&Qm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Js(this))},t.Qa=function(a){this.g&&(this.response=a,Js(this))},t.ga=function(){this.g&&Js(this)};function Js(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Zs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xm(a){let h="";return V(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Qc(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Xm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ie(a,h,f))}function De(a){Q.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(De,Q);var J1=/^https?$/i,Z1=["POST","PUT"];t=De.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bc.g(),this.v=this.o?Rm(this.o):Rm(Bc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Ym(this,L);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)f.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())f.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Z1,h,void 0))||y||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of f)this.g.setRequestHeader(L,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{eg(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Ym(this,L)}};function Ym(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Jm(a),$a(a)}function Jm(a){a.A||(a.A=!0,Oe(a,"complete"),Oe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Oe(this,"complete"),Oe(this,"abort"),$a(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$a(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zm(this):this.bb())},t.bb=function(){Zm(this)};function Zm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||kn(a)!=4||a.Z()!=2)){if(a.u&&kn(a)==4)wm(a.Ea,0,a);else if(Oe(a,"readystatechange"),kn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=B===0){var D=String(a.D).match(zm)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),y=!J1.test(D?D.toLowerCase():"")}f=y}if(f)Oe(a,"complete"),Oe(a,"success");else{a.m=6;try{var L=2<kn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",Jm(a)}}finally{$a(a)}}}}function $a(a,h){if(a.g){eg(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Oe(a,"ready");try{f.onreadystatechange=y}catch{}}}function eg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),x1(h)}};function tg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function eS(a){const h={};a=(a.g&&2<=kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(v(a[y]))continue;var f=k(a[y]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[D]||[];h[D]=L,L.push(f)}E(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function eo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function ng(a){this.Aa=0,this.i=[],this.j=new Gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=eo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=eo("baseRetryDelayMs",5e3,a),this.cb=eo("retryDelaySeedMs",1e4,a),this.Wa=eo("forwardChannelMaxRetries",2,a),this.wa=eo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Mm(a&&a.concurrentRequestLimit),this.Da=new X1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ng.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,y){mt(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=hg(this,null,this.W),za(this)};function Xc(a){if(rg(a),a.G==3){var h=a.U++,f=An(a.I);if(Ie(f,"SID",a.K),Ie(f,"RID",h),Ie(f,"TYPE","terminate"),to(a,f),h=new Yn(a,a.j,h),h.L=2,h.v=Fa(An(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=dg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),La(h)}cg(a)}function Ba(a){a.g&&(Jc(a),a.g.cancel(),a.g=null)}function rg(a){Ba(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function za(a){if(!Fm(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ee||K(),j||(Ee(),j=!0),q.add(h,a),a.B=0}}function tS(a,h){return Um(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=qs(m(a.Ga,a,h),ug(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new Yn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=g(L),S(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=sg(this,D,h),f=An(this.I),Ie(f,"RID",a),Ie(f,"CVER",22),this.D&&Ie(f,"X-HTTP-Session-Id",this.D),to(this,f),L&&(this.O?h="headers="+encodeURIComponent(String(Xm(L)))+"&"+h:this.m&&Qc(f,this.m,L)),Kc(this.h,D),this.Ua&&Ie(f,"TYPE","init"),this.P?(Ie(f,"$req",h),Ie(f,"SID","null"),D.T=!0,Wc(D,f,null)):Wc(D,f,h),this.G=2}}else this.G==3&&(a?ig(this,a):this.i.length==0||Fm(this.h)||ig(this))};function ig(a,h){var f;h?f=h.l:f=a.U++;const y=An(a.I);Ie(y,"SID",a.K),Ie(y,"RID",f),Ie(y,"AID",a.T),to(a,y),a.m&&a.o&&Qc(y,a.m,a.o),f=new Yn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=sg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Kc(a.h,f),Wc(f,y,h)}function to(a,h){a.H&&V(a.H,function(f,y){Ie(h,y,f)}),a.l&&Bm({},function(f,y){Ie(h,y,f)})}function sg(a,h,f){f=Math.min(a.i.length,f);var y=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let L=-1;for(;;){const B=["count="+f];L==-1?0<f?(L=D[0].g,B.push("ofs="+L)):L=0:B.push("ofs="+L);let ye=!0;for(let Je=0;Je<f;Je++){let he=D[Je].g;const st=D[Je].map;if(he-=L,0>he)L=Math.max(0,D[Je].g-100),ye=!1;else try{Y1(st,B,"req"+he+"_")}catch{y&&y(st)}}if(ye){y=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,y}function og(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ee||K(),j||(Ee(),j=!0),q.add(h,a),a.v=0}}function Yc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=qs(m(a.Fa,a),ug(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ag(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=qs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),Ba(this),ag(this))};function Jc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ag(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=An(a.qa);Ie(h,"RID","rpc"),Ie(h,"SID",a.K),Ie(h,"AID",a.T),Ie(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ie(h,"TO",a.ja),Ie(h,"TYPE","xmlhttp"),to(a,h),a.m&&a.o&&Qc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Fa(An(h)),f.m=null,f.P=!0,bm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ba(this),Yc(this),mt(19))};function Wa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function lg(a,h){var f=null;if(a.g==h){Wa(a),Jc(a),a.g=null;var y=2}else if(Gc(a.h,h))f=h.D,jm(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;y=Oa(),Oe(y,new Nm(y,f)),za(a)}else og(a);else if(D=h.s,D==3||D==0&&0<h.X||!(y==1&&tS(a,h)||y==2&&Yc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),D){case 1:Xr(a,5);break;case 4:Xr(a,10);break;case 3:Xr(a,6);break;default:Xr(a,2)}}}function ug(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Xr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),y=a.Xa;const D=!y;y=new Qr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Va(y,"https"),Fa(y),D?K1(y.toString(),f):Q1(y.toString(),f)}else mt(2);a.G=0,a.l&&a.l.sa(h),cg(a),rg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function cg(a){if(a.G=0,a.ka=[],a.l){const h=$m(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function hg(a,h,f){var y=f instanceof Qr?An(f):new Qr(f);if(y.g!="")h&&(y.g=h+"."+y.g),Ma(y,y.s);else{var D=l.location;y=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var L=new Qr(null);y&&Va(L,y),h&&(L.g=h),D&&Ma(L,D),f&&(L.l=f),y=L}return f=a.D,h=a.ya,f&&h&&Ie(y,f,h),Ie(y,"VER",a.la),to(a,y),y}function dg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new De(new Ua({eb:f})):new De(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fg(){}t=fg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ha(){}Ha.prototype.g=function(a,h){return new Nt(a,h)};function Nt(a,h){Q.call(this),this.g=new ng(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Li(this)}C(Nt,Q),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Xc(this.g)},Nt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Fc(a),a=f);h.i.push(new F1(h.Ya++,a)),h.G==3&&za(h)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Xc(this.g),delete this.g,Nt.aa.N.call(this)};function pg(a){jc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(pg,jc);function mg(){$c.call(this),this.status=1}C(mg,$c);function Li(a){this.g=a}C(Li,fg),Li.prototype.ua=function(){Oe(this.g,"a")},Li.prototype.ta=function(a){Oe(this.g,new pg(a))},Li.prototype.sa=function(a){Oe(this.g,new mg)},Li.prototype.ra=function(){Oe(this.g,"b")},Ha.prototype.createWebChannel=Ha.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,WT=function(){return new Ha},zT=function(){return Oa()},BT=Gr,of={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Da.NO_ERROR=0,Da.TIMEOUT=8,Da.HTTP_ERROR=6,Ml=Da,xm.COMPLETE="complete",$T=xm,Cm.EventType=Ws,Ws.OPEN="a",Ws.CLOSE="b",Ws.ERROR="c",Ws.MESSAGE="d",Q.prototype.listen=Q.prototype.K,go=Cm,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,jT=De}).apply(typeof fl<"u"?fl:typeof self<"u"?self:typeof window<"u"?window:{});const Rv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new dc("@firebase/firestore");function $i(){return wi.logLevel}function z(t,...e){if(wi.logLevel<=oe.DEBUG){const n=e.map(Hp);wi.debug(`Firestore (${Vs}): ${t}`,...n)}}function Gn(t,...e){if(wi.logLevel<=oe.ERROR){const n=e.map(Hp);wi.error(`Firestore (${Vs}): ${t}`,...n)}}function Is(t,...e){if(wi.logLevel<=oe.WARN){const n=e.map(Hp);wi.warn(`Firestore (${Vs}): ${t}`,...n)}}function Hp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: `+t;throw Gn(e),new Error(e)}function fe(t,e){t||X()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class GD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class KD{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new HT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new ct(e)}}class QD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new QD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){fe(this.o===void 0);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new YD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ZD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new qe(0,0))}static max(){return new ee(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ia.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ia?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends ia{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const e2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends ia{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return e2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Re.fromString(e))}static fromName(e){return new G(Re.fromString(e).popFirst(5))}static empty(){return new G(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Re(e.slice()))}}function t2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new Dr(i,G.empty(),e)}function n2(t){return new Dr(t.readTime,t.key,-1)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(ee.min(),G.empty(),-1)}static max(){return new Dr(ee.max(),G.empty(),-1)}}function r2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class s2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==i2)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function o2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}vc.oe=-1;function _c(t){return t==null}function ku(t){return t===0&&1/t==-1/0}function a2(t){return typeof t=="number"&&Number.isInteger(t)&&!ku(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Cv(e)),e=u2(t.get(n),e);return Cv(e)}function u2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Cv(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function GT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pl(this.root,e,this.comparator,!0)}}class pl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??et.RED,this.left=i??et.EMPTY,this.right=s??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kv(this.data.getIterator())}getIteratorFrom(e){return new kv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class kv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new tn([])}unionWith(e){let n=new Ye(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new KT("Invalid base64 string: "+s):s}}(e);return new it(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const c2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(fe(!!t),typeof t=="string"){let e=0;const n=c2.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ec(t){const e=t.mapValue.fields.__previous_value__;return qp(e)?Ec(e):e}function sa(t){const e=br(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class oa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qp(t)?4:f2(t)?9007199254740991:d2(t)?10:11:X()}function Tn(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sa(t).isEqual(sa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=br(i.timestampValue),l=br(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Lr(i.bytesValue).isEqual(Lr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),l=Ve(s.doubleValue);return o===l?ku(o)===ku(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Av(o)!==Av(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Tn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function aa(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ve(s.integerValue||s.doubleValue),u=Ve(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Pv(t.timestampValue,e.timestampValue);case 4:return Pv(sa(t),sa(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Lr(s),u=Lr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ue(l[c],u[c]);if(d!==0)return d}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(Ve(s.latitude),Ve(o.latitude));return l!==0?l:ue(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Nv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=ue(((c=I==null?void 0:I.values)===null||c===void 0?void 0:c.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:Nv(I,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ml.mapValue&&o===ml.mapValue)return 0;if(s===ml.mapValue)return 1;if(o===ml.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ue(u[p],d[p]);if(m!==0)return m;const I=Rs(l[u[p]],c[d[p]]);if(I!==0)return I}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw X()}}function Pv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=br(t),r=br(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Nv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Rs(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function Cs(t){return af(t)}function af(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=af(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${af(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function Fl(t){switch(Vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ec(t);return e?16+Fl(e):16;case 5:return 2*t.stringValue.length;case 6:return Lr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Fl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ki(r.fields,(s,o)=>{i+=s.length+Fl(o)}),i}(t.mapValue);default:throw X()}}function xv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lf(t){return!!t&&"integerValue"in t}function Gp(t){return!!t&&"arrayValue"in t}function Ov(t){return!!t&&"nullValue"in t}function Dv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ul(t){return!!t&&"mapValue"in t}function d2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function No(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=No(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=No(t.arrayValue.values[n]);return e}return Object.assign({},t)}function f2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=No(n)}setAll(e){let n=tt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=No(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new $t(No(this.value))}}function QT(t){const e=[];return ki(t.fields,(n,r)=>{const i=new tt([n]);if(Ul(r)){const s=QT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,ee.min(),ee.min(),ee.min(),$t.empty(),0)}static newFoundDocument(e,n,r,i){return new dt(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new dt(e,2,n,ee.min(),ee.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,ee.min(),ee.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n){this.position=e,this.inclusive=n}}function bv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n="asc"){this.field=e,this.dir=n}}function p2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{}class $e extends XT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new g2(e,n,r):n==="array-contains"?new _2(e,r):n==="in"?new E2(e,r):n==="not-in"?new w2(e,r):n==="array-contains-any"?new T2(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new y2(e,r):new v2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends XT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return YT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function YT(t){return t.op==="and"}function JT(t){return m2(t)&&YT(t)}function m2(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function uf(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(JT(t))return t.filters.map(e=>uf(e)).join(",");{const e=t.filters.map(n=>uf(n)).join(",");return`${t.op}(${e})`}}function ZT(t,e){return t instanceof $e?function(r,i){return i instanceof $e&&r.op===i.op&&r.field.isEqual(i.field)&&Tn(r.value,i.value)}(t,e):t instanceof ln?function(r,i){return i instanceof ln&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&ZT(o,i.filters[l]),!0):!1}(t,e):void X()}function eI(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${Cs(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(eI).join(" ,")+"}"}(t):"Filter"}class g2 extends $e{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class y2 extends $e{constructor(e,n){super(e,"in",n),this.keys=tI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class v2 extends $e{constructor(e,n){super(e,"not-in",n),this.keys=tI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class _2 extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gp(n)&&aa(n.arrayValue,this.value)}}class E2 extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&aa(this.value.arrayValue,n)}}class w2 extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!aa(this.value.arrayValue,n)}}class T2 extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>aa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Vv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new I2(t,e,n,r,i,s,o)}function Kp(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>uf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_c(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.ue=n}return e.ue}function Qp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!p2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ZT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lv(t.startAt,e.startAt)&&Lv(t.endAt,e.endAt)}function cf(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function S2(t,e,n,r,i,s,o,l){return new Sa(t,e,n,r,i,s,o,l)}function nI(t){return new Sa(t)}function Mv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rI(t){return t.collectionGroup!==null}function xo(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Nu(s,r))}),n.has(tt.keyField().canonicalString())||e.ce.push(new Nu(tt.keyField(),r))}return e.ce}function En(t){const e=te(t);return e.le||(e.le=R2(e,xo(t))),e.le}function R2(t,e){if(t.limitType==="F")return Vv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Nu(i.field,s)});const n=t.endAt?new Pu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pu(t.startAt.position,t.startAt.inclusive):null;return Vv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hf(t,e){const n=t.filters.concat([e]);return new Sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function df(t,e,n){return new Sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wc(t,e){return Qp(En(t),En(e))&&t.limitType===e.limitType}function iI(t){return`${Kp(En(t))}|lt:${t.limitType}`}function Bi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>eI(i)).join(", ")}]`),_c(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Cs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Cs(i)).join(",")),`Target(${r})`}(En(t))}; limitType=${t.limitType})`}function Tc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=bv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,xo(r),i)||r.endAt&&!function(o,l,u){const c=bv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,xo(r),i))}(t,e)}function C2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sI(t){return(e,n)=>{let r=!1;for(const i of xo(t)){const s=A2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function A2(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Rs(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return GT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=new xe(G.comparator);function Kn(){return k2}const oI=new xe(G.comparator);function yo(...t){let e=oI;for(const n of t)e=e.insert(n.key,n);return e}function aI(t){let e=oI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function oi(){return Oo()}function lI(){return Oo()}function Oo(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const P2=new xe(G.comparator),N2=new Ye(G.comparator);function ae(...t){let e=N2;for(const n of t)e=e.add(n);return e}const x2=new Ye(ue);function O2(){return x2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ku(e)?"-0":e}}function uI(t){return{integerValue:""+t}}function D2(t,e){return a2(e)?uI(e):Xp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this._=void 0}}function b2(t,e,n){return t instanceof xu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qp(s)&&(s=Ec(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof la?hI(t,e):t instanceof ua?dI(t,e):function(i,s){const o=cI(i,s),l=Fv(o)+Fv(i.Pe);return lf(o)&&lf(i.Pe)?uI(l):Xp(i.serializer,l)}(t,e)}function L2(t,e,n){return t instanceof la?hI(t,e):t instanceof ua?dI(t,e):n}function cI(t,e){return t instanceof Ou?function(r){return lf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xu extends Ic{}class la extends Ic{constructor(e){super(),this.elements=e}}function hI(t,e){const n=fI(e);for(const r of t.elements)n.some(i=>Tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ua extends Ic{constructor(e){super(),this.elements=e}}function dI(t,e){let n=fI(e);for(const r of t.elements)n=n.filter(i=>!Tn(i,r));return{arrayValue:{values:n}}}class Ou extends Ic{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Fv(t){return Ve(t.integerValue||t.doubleValue)}function fI(t){return Gp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function V2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof la&&i instanceof la||r instanceof ua&&i instanceof ua?Ss(r.elements,i.elements,Tn):r instanceof Ou&&i instanceof Ou?Tn(r.Pe,i.Pe):r instanceof xu&&i instanceof xu}(t.transform,e.transform)}class M2{constructor(e,n){this.version=e,this.transformResults=n}}class Fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sc{}function pI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gI(t.key,Fn.none()):new Ra(t.key,t.data,Fn.none());{const n=t.data,r=$t.empty();let i=new Ye(tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ni(t.key,r,new tn(i.toArray()),Fn.none())}}function F2(t,e,n){t instanceof Ra?function(i,s,o){const l=i.value.clone(),u=jv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ni?function(i,s,o){if(!jl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=jv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(mI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Do(t,e,n,r){return t instanceof Ra?function(s,o,l,u){if(!jl(s.precondition,o))return l;const c=s.value.clone(),d=$v(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ni?function(s,o,l,u){if(!jl(s.precondition,o))return l;const c=$v(s.fieldTransforms,u,o),d=o.data;return d.setAll(mI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return jl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function U2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cI(r.transform,i||null);s!=null&&(n===null&&(n=$t.empty()),n.set(r.field,s))}return n||null}function Uv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ss(r,i,(s,o)=>V2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ra extends Sc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ni extends Sc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jv(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,L2(o,l,n[i]))}return r}function $v(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,b2(s,o,e))}return r}class gI extends Sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class j2 extends Sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&F2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=pI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Ss(this.mutations,e.mutations,(n,r)=>Uv(n,r))&&Ss(this.baseMutations,e.baseMutations,(n,r)=>Uv(n,r))}}class Yp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return P2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,le;function W2(t){switch(t){default:return X();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function yI(t){if(t===void 0)return Gn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Ue.OK:return U.OK;case Ue.CANCELLED:return U.CANCELLED;case Ue.UNKNOWN:return U.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return U.INTERNAL;case Ue.UNAVAILABLE:return U.UNAVAILABLE;case Ue.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ue.NOT_FOUND:return U.NOT_FOUND;case Ue.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ue.ABORTED:return U.ABORTED;case Ue.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ue.DATA_LOSS:return U.DATA_LOSS;default:return X()}}(le=Ue||(Ue={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=new hi([4294967295,4294967295],0);function Bv(t){const e=H2().encode(t),n=new UT;return n.update(e),new Uint8Array(n.digest())}function zv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new hi([n,r],0),new hi([i,s],0)]}class Jp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vo(`Invalid padding: ${n}`);if(r<0)throw new vo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=hi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(hi.fromNumber(r)));return i.compare(q2)===1&&(i=new hi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Bv(e),[r,i]=zv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Jp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Bv(e),[r,i]=zv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ca.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rc(ee.min(),i,new xe(ue),Kn(),ae())}}class Ca{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ca(r,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class vI{constructor(e,n){this.targetId=e,this.me=n}}class _I{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Wv{constructor(){this.fe=0,this.ge=qv(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ae(),n=ae(),r=ae();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Ca(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=qv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class G2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=Hv(),this.Qe=new xe(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(cf(s))if(r===0){const o=new G(s.path);this.Ue(n,o,dt.newNoDocument(o,ee.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Lr(r).toUint8Array()}catch(u){if(u instanceof KT)return Is("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Jp(o,i,s)}catch(u){return Is(u instanceof vo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&cf(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,dt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ae();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Rc(e,n,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=Hv(),this.Qe=new xe(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Wv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ye(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Wv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Hv(){return new xe(G.comparator)}function qv(){return new xe(G.comparator)}const K2={asc:"ASCENDING",desc:"DESCENDING"},Q2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},X2={and:"AND",or:"OR"};class Y2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ff(t,e){return t.useProto3Json||_c(e)?e:{value:e}}function Du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function EI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function J2(t,e){return Du(t,e.toTimestamp())}function wn(t){return fe(!!t),ee.fromTimestamp(function(n){const r=br(n);return new qe(r.seconds,r.nanos)}(t))}function Zp(t,e){return pf(t,e).canonicalString()}function pf(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function wI(t){const e=Re.fromString(t);return fe(CI(e)),e}function mf(t,e){return Zp(t.databaseId,e.path)}function Bh(t,e){const n=wI(e);if(n.get(1)!==t.databaseId.projectId)throw new H(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(II(n))}function TI(t,e){return Zp(t.databaseId,e)}function Z2(t){const e=wI(t);return e.length===4?Re.emptyPath():II(e)}function gf(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function II(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gv(t,e,n){return{name:mf(t,e),fields:n.value.mapValue.fields}}function eb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(fe(d===void 0||typeof d=="string"),it.fromBase64String(d||"")):(fe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),it.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?U.UNKNOWN:yI(c.code);return new H(d,c.message||"")}(o);n=new _I(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bh(t,r.document.name),s=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):ee.min(),l=new $t({mapValue:{fields:r.document.fields}}),u=dt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new $l(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Bh(t,r.document),s=r.readTime?wn(r.readTime):ee.min(),o=dt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new $l([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Bh(t,r.document),s=r.removedTargetIds||[];n=new $l([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new z2(i,s),l=r.targetId;n=new vI(l,o)}}return n}function tb(t,e){let n;if(e instanceof Ra)n={update:Gv(t,e.key,e.value)};else if(e instanceof gI)n={delete:mf(t,e.key)};else if(e instanceof Ni)n={update:Gv(t,e.key,e.data),updateMask:cb(e.fieldMask)};else{if(!(e instanceof j2))return X();n={verify:mf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof xu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof la)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ua)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ou)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:J2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function nb(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?wn(i.updateTime):wn(s);return o.isEqual(ee.min())&&(o=wn(s)),new M2(o,i.transformResults||[])}(n,e))):[]}function rb(t,e){return{documents:[TI(t,e.path)]}}function ib(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=TI(t,i);const s=function(c){if(c.length!==0)return RI(ln.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:zi(m.field),direction:ab(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ff(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function sb(t){let e=Z2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=SI(p);return m instanceof ln&&JT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Nu(Wi(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,_c(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new Pu(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,I=p.values||[];return new Pu(I,m)}(n.endAt)),S2(e,i,o,s,l,"F",u,c)}function ob(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wi(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Wi(n.unaryFilter.field);return $e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wi(n.unaryFilter.field);return $e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wi(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(Wi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>SI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function ab(t){return K2[t]}function lb(t){return Q2[t]}function ub(t){return X2[t]}function zi(t){return{fieldPath:t.canonicalString()}}function Wi(t){return tt.fromServerFormat(t.fieldPath)}function RI(t){return t instanceof $e?function(n){if(n.op==="=="){if(Dv(n.value))return{unaryFilter:{field:zi(n.field),op:"IS_NAN"}};if(Ov(n.value))return{unaryFilter:{field:zi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dv(n.value))return{unaryFilter:{field:zi(n.field),op:"IS_NOT_NAN"}};if(Ov(n.value))return{unaryFilter:{field:zi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zi(n.field),op:lb(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(i=>RI(i));return r.length===1?r[0]:{compositeFilter:{op:ub(n.op),filters:r}}}(t):X()}function cb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function CI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=it.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.ct=e}}function db(t){const e=sb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?df(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.un=new pb}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Dr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class pb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Tt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(41943040,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new As(0)}static kn(){return new As(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv([t,e],[n,r]){const i=ue(t,n);return i===0?ue(e,r):i}class mb{constructor(e){this.Un=e,this.buffer=new Ye(Qv),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Qv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class gb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fs(n)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ms(n)}await this.Hn(3e5)})}}class yb{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(vc.oe);const r=new mb(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Kv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kv):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),$i()<=oe.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function vb(t,e){return new yb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Do(r.mutation,i,tn.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=oi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=yo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=oi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Kn();const o=Oo(),l=function(){return Oo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ni)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Do(d.mutation,c,d.mutation.getFieldMask(),qe.now())):o.set(c.key,tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new Eb(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Oo();let i=new xe((o,l)=>o-l),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||tn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ae()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=lI();d.forEach(m=>{if(!s.has(m)){const I=pI(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(oi());let l=-1,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ae())).next(d=>({batchId:l,changes:aI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=yo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=yo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,m){return new Sa(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,dt.newInvalidDocument(d)))});let l=yo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Do(d.mutation,c,tn.empty(),qe.now()),Tc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:wn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:db(i.bundledQuery),readTime:wn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this.overlays=new xe(G.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=oi();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=oi(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=oi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=oi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new B2(n,r));let s=this.Ir.get(n);s===void 0&&(s=ae(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.Tr=new Ye(Ke.Er),this.dr=new Ye(Ke.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ke(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new Re([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new Re([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=ae();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ye(Ke.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ke(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ue);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new G(s),0);let l=new Ye(ue);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ke(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.Mr=e,this.docs=function(){return new xe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():dt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Kn();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||r2(n2(d),r)<=0||(i.has(d.key)||Tc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ab(this)}getSize(e){return M.resolve(this.size)}}class Ab extends _b{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.persistence=e,this.Nr=new Pi(n=>Kp(n),Qp),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new em,this.targetCount=0,this.kr=As.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new As(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n){this.qr={},this.overlays={},this.Qr=new vc(0),this.Kr=!1,this.Kr=!0,this.$r=new Sb,this.referenceDelegate=e(this),this.Ur=new kb(this),this.indexManager=new fb,this.remoteDocumentCache=function(i){return new Cb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new hb(n),this.Gr=new Tb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ib,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Rb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new Pb(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Pb extends s2{constructor(e){super(),this.currentSequenceNumber=e}}class tm{constructor(e){this.persistence=e,this.Jr=new em,this.Yr=null}static Zr(e){return new tm(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class bu{constructor(e,n){this.persistence=e,this.ti=new Pi(r=>l2(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=vb(this,n)}static Zr(e,n){return new bu(e,n)}zr(){}jr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return M.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,o=>this.nr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),M.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fl(e.data.value)),n}nr(e,n,r){return M.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new nm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return uP()?8:o2(pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Nb;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?($i()<=oe.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):($i()<=oe.DEBUG&&z("QueryEngine","Query:",Bi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?($i()<=oe.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):M.resolve())}Yi(e,n){if(Mv(n))return M.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=df(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,df(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Mv(n)||i.isEqual(ee.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):($i()<=oe.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bi(n)),this.rs(e,o,n,t2(i,-1)).next(l=>l))})}ts(e,n){let r=new Ye(sI(e));return n.forEach((i,s)=>{Tc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return $i()<=oe.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Bi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Dr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new xe(ue),this._s=new Pi(s=>Kp(s),Qp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Db(t,e,n,r){return new Ob(t,e,n,r)}async function kI(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ae();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function bb(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let I=M.resolve();return m.forEach(C=>{I=I.next(()=>d.getEntry(u,C)).next(P=>{const N=c.docVersions.get(C);fe(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function PI(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Lb(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(it.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),i=i.insert(p,I),function(P,N,w){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,I,d)&&l.push(n.Ur.updateTargetData(s,I))});let u=Kn(),c=ae();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(Vb(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(ee.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function Vb(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Kn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Mb(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Fb(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function yf(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fs(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Xv(t,e,n){const r=te(t);let i=ee.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=te(u),m=p._s.get(d);return m!==void 0?M.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,En(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ae())).next(l=>(Ub(r,C2(e),l),{documents:l,Ts:s})))}function Ub(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Yv{constructor(){this.activeTargetIds=O2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jb{constructor(){this.so=new Yv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Yv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl=null;function zh(){return gl===null?gl=function(){return 268435456+Math.round(2147483648*Math.random())}():gl++,"0x"+gl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class Wb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=zh(),u=this.xo(n,r.toUriEncodedString());z("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(z("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Is("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Bb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=zh();return new Promise((o,l)=>{const u=new jT;u.setWithCredentials(!0),u.listenOnce($T.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ml.NO_ERROR:const d=u.getResponseJson();z(ut,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ml.TIMEOUT:z(ut,`RPC '${e}' ${s} timed out`),l(new H(U.DEADLINE_EXCEEDED,"Request time out"));break;case Ml.HTTP_ERROR:const p=u.getStatus();if(z(ut,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const C=function(N){const w=N.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(w)>=0?w:U.UNKNOWN}(I.status);l(new H(C,I.message))}else l(new H(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(U.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{z(ut,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);z(ut,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=zh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=WT(),l=zT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");z(ut,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,I=!1;const C=new zb({Io:N=>{I?z(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(z(ut,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),z(ut,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),P=(N,w,v)=>{N.listen(w,_=>{try{v(_)}catch(x){setTimeout(()=>{throw x},0)}})};return P(p,go.EventType.OPEN,()=>{I||(z(ut,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),P(p,go.EventType.CLOSE,()=>{I||(I=!0,z(ut,`RPC '${e}' stream ${i} transport closed`),C.So())}),P(p,go.EventType.ERROR,N=>{I||(I=!0,Is(ut,`RPC '${e}' stream ${i} transport errored:`,N),C.So(new H(U.UNAVAILABLE,"The operation could not be completed")))}),P(p,go.EventType.MESSAGE,N=>{var w;if(!I){const v=N.data[0];fe(!!v);const _=v,x=_.error||((w=_[0])===null||w===void 0?void 0:w.error);if(x){z(ut,`RPC '${e}' stream ${i} received error:`,x);const F=x.status;let V=function(T){const S=Ue[T];if(S!==void 0)return yI(S)}(F),E=x.message;V===void 0&&(V=U.INTERNAL,E="Unknown error status: "+F+" with message "+x.message),I=!0,C.So(new H(V,E)),p.close()}else z(ut,`RPC '${e}' stream ${i} received:`,v),C.bo(v)}}),P(l,BT.STAT_EVENT,N=>{N.stat===of.PROXY?z(ut,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===of.NOPROXY&&z(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Wh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t){return new Y2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new NI(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hb extends xI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=eb(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?wn(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=gf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=cf(u)?{documents:rb(s,u)}:{query:ib(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=EI(s,o.resumeToken);const c=ff(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=Du(s,o.snapshotVersion.toTimestamp());const c=ff(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=ob(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=gf(this.serializer),n.removeTarget=e,this.a_(n)}}class qb extends xI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=nb(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=gf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tb(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,pf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(U.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,pf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Kb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Gn(n),this.D_=!1):z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{xi(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=te(u);c.L_.add(4),await Aa(c),c.q_.set("Unknown"),c.L_.delete(4),await Ac(c)}(this))})}),this.q_=new Kb(r,i)}}async function Ac(t){if(xi(t))for(const e of t.B_)await e(!0)}async function Aa(t){for(const e of t.B_)await e(!1)}function OI(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),om(n)?sm(n):Us(n).r_()&&im(n,e))}function rm(t,e){const n=te(t),r=Us(n);n.N_.delete(e),r.r_()&&DI(n,e),n.N_.size===0&&(r.r_()?r.o_():xi(n)&&n.q_.set("Unknown"))}function im(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Us(t).A_(e)}function DI(t,e){t.Q_.xe(e),Us(t).R_(e)}function sm(t){t.Q_=new G2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Us(t).start(),t.q_.v_()}function om(t){return xi(t)&&!Us(t).n_()&&t.N_.size>0}function xi(t){return te(t).L_.size===0}function bI(t){t.Q_=void 0}async function Xb(t){t.q_.set("Online")}async function Yb(t){t.N_.forEach((e,n)=>{im(t,e)})}async function Jb(t,e){bI(t),om(t)?(t.q_.M_(e),sm(t)):t.q_.set("Unknown")}async function Zb(t,e,n){if(t.q_.set("Online"),e instanceof _I&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lu(t,r)}else if(e instanceof $l?t.Q_.Ke(e):e instanceof vI?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await PI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(it.EMPTY_BYTE_STRING,d.snapshotVersion)),DI(s,u);const p=new gr(d.target,u,c,d.sequenceNumber);im(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Lu(t,r)}}async function Lu(t,e,n){if(!Fs(e))throw e;t.L_.add(1),await Aa(t),t.q_.set("Offline"),n||(n=()=>PI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ac(t)})}function LI(t,e){return e().catch(n=>Lu(t,n,e))}async function kc(t){const e=te(t),n=Mr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;eL(e);)try{const i=await Mb(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,tL(e,i)}catch(i){await Lu(e,i)}VI(e)&&MI(e)}function eL(t){return xi(t)&&t.O_.length<10}function tL(t,e){t.O_.push(e);const n=Mr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function VI(t){return xi(t)&&!Mr(t).n_()&&t.O_.length>0}function MI(t){Mr(t).start()}async function nL(t){Mr(t).p_()}async function rL(t){const e=Mr(t);for(const n of t.O_)e.m_(n.mutations)}async function iL(t,e,n){const r=t.O_.shift(),i=Yp.from(r,e,n);await LI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await kc(t)}async function sL(t,e){e&&Mr(t).V_&&await async function(r,i){if(function(o){return W2(o)&&o!==U.ABORTED}(i.code)){const s=r.O_.shift();Mr(r).s_(),await LI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await kc(r)}}(t,e),VI(t)&&MI(t)}async function Zv(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=xi(n);n.L_.add(3),await Aa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ac(n)}async function oL(t,e){const n=te(t);e?(n.L_.delete(2),await Ac(n)):e||(n.L_.add(2),await Aa(n),n.q_.set("Unknown"))}function Us(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new Hb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Xb.bind(null,t),Ro:Yb.bind(null,t),mo:Jb.bind(null,t),d_:Zb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),om(t)?sm(t):t.q_.set("Unknown")):(await t.K_.stop(),bI(t))})),t.K_}function Mr(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new qb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:nL.bind(null,t),mo:sL.bind(null,t),f_:rL.bind(null,t),g_:iL.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await kc(t)):(await t.U_.stop(),t.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new am(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lm(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),Fs(t))return new H(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=yo(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.W_=new xe(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ks{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ks(e,n,ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class lL{constructor(){this.queries=t_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=t_(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(U.ABORTED,"Firestore shutting down"))}}function t_(){return new Pi(t=>iI(t),wc)}async function uL(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new aL,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=lm(o,`Initialization of query '${Bi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&um(n)}async function cL(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function hL(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&um(n)}function dL(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function um(t){t.Y_.forEach(e=>{e.next()})}var vf,n_;(n_=vf||(vf={})).ea="default",n_.Cache="cache";class fL{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==vf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.key=e}}class UI{constructor(e){this.key=e}}class pL{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ae(),this.mutatedKeys=ae(),this.Aa=sI(e),this.Ra=new ps(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new e_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),I=Tc(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let N=!1;m&&I?m.data.isEqual(I.data)?C!==P&&(r.track({type:3,doc:I}),N=!0):this.ga(m,I)||(r.track({type:2,doc:I}),N=!0,(u&&this.Aa(I,u)>0||c&&this.Aa(I,c)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),N=!0):m&&!I&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(I?(o=o.add(I),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(I,C){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return P(I)-P(C)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ks(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new e_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ae(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new UI(r))}),this.da.forEach(r=>{e.has(r)||n.push(new FI(r))}),n}ba(e){this.Ta=e.Ts,this.da=ae();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ks.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class mL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gL{constructor(e){this.key=e,this.va=!1}}class yL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Pi(l=>iI(l),wc),this.Ma=new Map,this.xa=new Set,this.Oa=new xe(G.comparator),this.Na=new Map,this.La=new em,this.Ba={},this.ka=new Map,this.qa=As.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function vL(t,e,n=!0){const r=HI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await jI(r,e,n,!0),i}async function _L(t,e){const n=HI(t);await jI(n,e,!0,!1)}async function jI(t,e,n,r){const i=await Fb(t.localStore,En(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await EL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&OI(t.remoteStore,i),l}async function EL(t,e,n,r,i){t.Ka=(p,m,I)=>async function(P,N,w,v){let _=N.view.ma(w);_.ns&&(_=await Xv(P.localStore,N.query,!1).then(({documents:E})=>N.view.ma(E,_)));const x=v&&v.targetChanges.get(N.targetId),F=v&&v.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(_,P.isPrimaryClient,x,F);return i_(P,N.targetId,V.wa),V.snapshot}(t,p,m,I);const s=await Xv(t.localStore,e,!0),o=new pL(e,s.Ts),l=o.ma(s.documents),u=Ca.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);i_(t,n,c.wa);const d=new mL(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function wL(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!wc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await yf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&rm(r.remoteStore,i.targetId),_f(r,i.targetId)}).catch(Ms)):(_f(r,i.targetId),await yf(r.localStore,i.targetId,!0))}async function TL(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rm(n.remoteStore,r.targetId))}async function IL(t,e,n){const r=NL(t);try{const i=await function(o,l){const u=te(o),c=qe.now(),d=l.reduce((I,C)=>I.add(C.key),ae());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=Kn(),P=ae();return u.cs.getEntries(I,d).next(N=>{C=N,C.forEach((w,v)=>{v.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,C)).next(N=>{p=N;const w=[];for(const v of l){const _=U2(v,p.get(v.key).overlayedDocument);_!=null&&w.push(new Ni(v.key,_,QT(_.value.mapValue),Fn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,w,l)}).next(N=>{m=N;const w=N.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(I,N.batchId,w)})}).then(()=>({batchId:m.batchId,changes:aI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new xe(ue)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ka(r,i.changes),await kc(r.remoteStore)}catch(i){const s=lm(i,"Failed to persist write");n.reject(s)}}async function $I(t,e){const n=te(t);try{const r=await Lb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?fe(o.va):i.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await ka(n,r,e)}catch(r){await Ms(r)}}function r_(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&um(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SL(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new xe(G.comparator);o=o.insert(s,dt.newNoDocument(s,ee.min()));const l=ae().add(s),u=new Rc(ee.min(),new Map,new xe(ue),o,l);await $I(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),cm(r)}else await yf(r.localStore,e,!1).then(()=>_f(r,e,n)).catch(Ms)}async function RL(t,e){const n=te(t),r=e.batch.batchId;try{const i=await bb(n.localStore,e);zI(n,r,null),BI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ka(n,i)}catch(i){await Ms(i)}}async function CL(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(fe(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);zI(r,e,n),BI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ka(r,i)}catch(i){await Ms(i)}}function BI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function zI(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function _f(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||WI(t,r)})}function WI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(rm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),cm(t))}function i_(t,e,n){for(const r of n)r instanceof FI?(t.La.addReference(r.key,e),AL(t,r)):r instanceof UI?(z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||WI(t,r.key)):X()}function AL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(z("SyncEngine","New document in limbo: "+n),t.xa.add(r),cm(t))}function cm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(Re.fromString(e)),r=t.qa.next();t.Na.set(r,new gL(n)),t.Oa=t.Oa.insert(n,r),OI(t.remoteStore,new gr(En(nI(n.path)),r,"TargetPurposeLimboResolution",vc.oe))}}async function ka(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=nm.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=te(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.$i,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>M.forEach(m.Ui,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!Fs(p))throw p;z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const I=d.os.get(m),C=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(C);d.os=d.os.insert(m,P)}}}(r.localStore,s))}async function kL(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await kI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(U.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(n,r.hs)}}function PL(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return ae().add(r.key);{let i=ae();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function HI(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$I.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SL.bind(null,e),e.Ca.d_=hL.bind(null,e.eventManager),e.Ca.$a=dL.bind(null,e.eventManager),e}function NL(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CL.bind(null,e),e}class Vu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Db(this.persistence,new xb,e.initialUser,this.serializer)}Ga(e){return new AI(tm.Zr,this.serializer)}Wa(e){return new jb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vu.provider={build:()=>new Vu};class xL extends Vu{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){fe(this.persistence.referenceDelegate instanceof bu);const r=this.persistence.referenceDelegate.garbageCollector;return new gb(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new AI(r=>bu.Zr(r,n),this.serializer)}}class Ef{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>r_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kL.bind(null,this.syncEngine),await oL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lL}()}createDatastore(e){const n=Cc(e.databaseInfo.databaseId),r=function(s){return new Wb(s)}(e.databaseInfo);return function(s,o,l,u){return new Gb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Qb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>r_(this.syncEngine,n,0),function(){return Jv.D()?new Jv:new $b}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new yL(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Aa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ef.provider={build:()=>new Ef};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=qT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hh(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await kI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function s_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bL(t);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Zv(e.remoteStore,i)),t._onlineComponents=e}async function bL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Is("Error using user provided cache. Falling back to memory cache: "+n),await Hh(t,new Vu)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Hh(t,new xL(void 0));return t._offlineComponents}async function qI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await s_(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await s_(t,new Ef))),t._onlineComponents}function LL(t){return qI(t).then(e=>e.syncEngine)}async function VL(t){const e=await qI(t),n=e.eventManager;return n.onListen=vL.bind(null,e.syncEngine),n.onUnlisten=wL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_L.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=TL.bind(null,e.syncEngine),n}function ML(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new OL({next:m=>{d.Za(),o.enqueueAndForget(()=>cL(s,p)),m.fromCache&&u.source==="server"?c.reject(new H(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new fL(l,d,{includeMetadataChanges:!0,_a:!0});return uL(s,p)}(await VL(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t,e,n){if(!n)throw new H(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function FL(t,e,n,r){if(e===!0&&r===!0)throw new H(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function a_(t){if(!G.isDocumentKey(t))throw new H(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function l_(t){if(G.isDocumentKey(t))throw new H(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Mu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pc(t);throw new H(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qD;switch(r.type){case"firstParty":return new XD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=o_.get(n);r&&(z("ComponentProvider","Removing Datastore"),o_.delete(n),r.terminate())}(this),Promise.resolve()}}function UL(t,e,n,r={}){var i;const s=(t=Mu(t,Nc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ct.MOCK_USER;else{l=Pw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ct(c)}t._authCredentials=new GD(new HT(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new js(this.firestore,e,this._query)}}class Wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class Nr extends js{constructor(e,n,r){super(e,n,nI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new G(e))}withConverter(e){return new Nr(this.firestore,e,this._path)}}function xc(t,e,...n){if(t=_t(t),KI("collection","path",e),t instanceof Nc){const r=Re.fromString(e,...n);return l_(r),new Nr(t,null,r)}{if(!(t instanceof Wt||t instanceof Nr))throw new H(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return l_(r),new Nr(t.firestore,null,r)}}function jL(t,e,...n){if(t=_t(t),arguments.length===1&&(e=qT.newId()),KI("doc","path",e),t instanceof Nc){const r=Re.fromString(e,...n);return a_(r),new Wt(t,null,new G(r))}{if(!(t instanceof Wt||t instanceof Nr))throw new H(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return a_(r),new Wt(t.firestore,t instanceof Nr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new NI(this,"async_queue_retry"),this.Vu=()=>{const r=Wh();r&&z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Wh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Wh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Pr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Fs(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Gn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=am.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class hm extends Nc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new c_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new c_(e),this._firestoreClient=void 0,await e}}}function $L(t,e){const n=fc(),r="(default)",i=$r(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Cw("firestore");s&&UL(i,...s)}return i}function QI(t){if(t._terminated)throw new H(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||BL(t),t._firestoreClient}function BL(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new h2(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,GI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new DL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ps(it.fromBase64String(e))}catch(n){throw new H(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ps(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL=/^__.*__$/;class WL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ni(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ra(e,this.data,n,this.fieldTransforms)}}function YI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class mm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new mm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Fu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(YI(this.Cu)&&zL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class HL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cc(e)}Qu(e,n,r,i=!1){return new mm({Cu:e,methodName:n,qu:r,path:tt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function JI(t){const e=t._freezeSettings(),n=Cc(t._databaseId);return new HL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qL(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);t1("Data must be an object, but it was:",o,r);const l=ZI(r,o);let u,c;if(s.merge)u=new tn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=KL(e,p,n);if(!o.contains(m))throw new H(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);XL(d,m)||d.push(m)}u=new tn(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new WL(new $t(l),u,c)}function GL(t,e,n,r=!1){return gm(n,t.Qu(r?4:3,e))}function gm(t,e){if(e1(t=_t(t)))return t1("Unsupported field value:",e,t),ZI(t,e);if(t instanceof XI)return function(r,i){if(!YI(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=gm(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return D2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:Du(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Du(i.serializer,s)}}if(r instanceof fm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ps)return{bytesValue:EI(i.serializer,r._byteString)};if(r instanceof Wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Zp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof pm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Xp(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Pc(r)}`)}(t,e)}function ZI(t,e){const n={};return GT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=gm(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function e1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof fm||t instanceof Ps||t instanceof Wt||t instanceof XI||t instanceof pm)}function t1(t,e,n){if(!e1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Pc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function KL(t,e,n){if((e=_t(e))instanceof dm)return e._internalPath;if(typeof e=="string")return n1(t,e);throw Fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const QL=new RegExp("[~\\*/\\[\\]]");function n1(t,e,n){if(e.search(QL)>=0)throw Fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dm(...e.split("."))._internalPath}catch{throw Fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(U.INVALID_ARGUMENT,l+t+u)}function XL(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ym("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YL extends r1{data(){return super.data()}}function ym(t,e){return typeof e=="string"?n1(t,e):e instanceof dm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vm{}class ZL extends vm{}function eV(t,e,...n){let r=[];e instanceof vm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof _m).length,l=s.filter(u=>u instanceof Oc).length;if(o>1||o>0&&l>0)throw new H(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Oc extends ZL{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Oc(e,n,r)}_apply(e){const n=this._parse(e);return i1(e._query,n),new js(e.firestore,e.converter,hf(e._query,n))}_parse(e){const n=JI(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){d_(p,d);const I=[];for(const C of p)I.push(h_(u,s,C));m={arrayValue:{values:I}}}else m=h_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||d_(p,d),m=GL(l,o,p,d==="in"||d==="not-in");return $e.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tV(t,e,n){const r=e,i=ym("where",t);return Oc._create(i,r,n)}class _m extends vm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _m(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)i1(o,u),o=hf(o,u)}(e._query,n),new js(e.firestore,e.converter,hf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function h_(t,e,n){if(typeof(n=_t(n))=="string"){if(n==="")throw new H(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rI(e)&&n.indexOf("/")!==-1)throw new H(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!G.isDocumentKey(r))throw new H(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xv(t,new G(r))}if(n instanceof Wt)return xv(t,n._key);throw new H(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pc(n)}.`)}function d_(t,e){if(!Array.isArray(t)||t.length===0)throw new H(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function i1(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class nV{convertValue(e,n="none"){switch(Vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ve(o.doubleValue));return new pm(s)}convertGeoPoint(e){return new fm(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ec(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sa(e));default:return null}}convertTimestamp(e){const n=br(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);fe(CI(r));const i=new oa(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Gn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iV extends r1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ym("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bl extends iV{data(e={}){return super.data(e)}}class sV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new yl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bl(this._firestore,this._userDataWriter,r.key,r,new yl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Bl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Bl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:oV(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class aV extends nV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,n)}}function s1(t){t=Mu(t,js);const e=Mu(t.firestore,hm),n=QI(e),r=new aV(e);return JL(t._query),ML(n,t._query).then(i=>new sV(e,r,t,i))}function o1(t,e){const n=Mu(t.firestore,hm),r=jL(t),i=rV(t.converter,e);return lV(n,[qL(JI(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Fn.exists(!1))]).then(()=>r)}function lV(t,e){return function(r,i){const s=new Pr;return r.asyncQueue.enqueueAndForget(async()=>IL(await LL(r),i,s)),s.promise}(QI(t),e)}(function(e,n=!0){(function(i){Vs=i})(Ai),an(new Gt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new hm(new KD(r.getProvider("auth-internal")),new JD(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oa(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),kt(Rv,"4.7.4",e),kt(Rv,"4.7.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="firebasestorage.googleapis.com",uV="storageBucket",cV=2*60*1e3,hV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Kt{constructor(e,n,r=0){super(qh(e),`Firebase Storage: ${n} (${qh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Sn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var In;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(In||(In={}));function qh(t){return"storage/"+t}function dV(){const t="An unknown error occurred, please check the error payload for server response.";return new Sn(In.UNKNOWN,t)}function fV(){return new Sn(In.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pV(){return new Sn(In.CANCELED,"User canceled the upload/download.")}function mV(t){return new Sn(In.INVALID_URL,"Invalid URL '"+t+"'.")}function gV(t){return new Sn(In.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function f_(t){return new Sn(In.INVALID_ARGUMENT,t)}function l1(){return new Sn(In.APP_DELETED,"The Firebase app was deleted.")}function yV(t){return new Sn(In.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=nn.makeFromUrl(e,n)}catch{return new nn(e,"")}if(r.path==="")return r;throw gV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),C={bucket:1,path:3},P=n===a1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",w=new RegExp(`^https?://${P}/${i}/${N}`,"i"),_=[{regex:l,indices:u,postModify:s},{regex:I,indices:C,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<_.length;x++){const F=_[x],V=F.regex.exec(e);if(V){const E=V[F.indices.bucket];let g=V[F.indices.path];g||(g=""),r=new nn(E,g),F.postModify(r);break}}if(r==null)throw mV(e);return r}}class vV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _V(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...N){c||(c=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,t(I,u())},N)}function m(){s&&clearTimeout(s)}function I(N,...w){if(c){m();return}if(N){m(),d.call(null,N,...w);return}if(u()||o){m(),d.call(null,N,...w);return}r<64&&(r*=2);let _;l===1?(l=2,_=0):_=(r+Math.random())*1e3,p(_)}let C=!1;function P(N){C||(C=!0,m(),!c&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function EV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wV(t){return t!==void 0}function p_(t,e,n,r){if(r<e)throw f_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw f_(`Invalid value for '${t}'. Expected ${n} or less.`)}function TV(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Uu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Uu||(Uu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,C)=>{this.resolve_=I,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new vl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Uu.NO_ERROR,u=s.getStatus();if(!l||IV(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Uu.ABORT;r(!1,new vl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new vl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());wV(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=dV();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?l1():pV();o(u)}else{const u=fV();o(u)}};this.canceled_?n(!1,new vl(!1,null,!0)):this.backoffId_=_V(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&EV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function RV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function CV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function AV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function PV(t,e,n,r,i,s,o=!0){const l=TV(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return AV(c,e),RV(c,n),CV(c,s),kV(c,r),new SV(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xV(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this._service=e,n instanceof nn?this._location=n:this._location=nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ju(e,n)}get root(){const e=new nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xV(this._location.path)}get storage(){return this._service}get parent(){const e=NV(this._location.path);if(e===null)return null;const n=new nn(this._location.bucket,e);return new ju(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw yV(e)}}function m_(t,e){const n=e==null?void 0:e[uV];return n==null?null:nn.makeFromBucketSpec(n,t)}function OV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Pw(i,t.app.options.projectId))}class DV{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=a1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cV,this._maxUploadRetryTime=hV,this._requests=new Set,i!=null?this._bucket=nn.makeFromBucketSpec(i,this._host):this._bucket=m_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nn.makeFromBucketSpec(this._url,e):this._bucket=m_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){p_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){p_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ju(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new vV(l1());{const o=PV(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const g_="@firebase/storage",y_="0.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="storage";function bV(t=fc(),e){t=_t(t);const r=$r(t,u1).getImmediate({identifier:e}),i=Cw("storage");return i&&LV(r,...i),r}function LV(t,e,n,r={}){OV(t,e,n,r)}function VV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new DV(n,r,i,e,Ai)}function MV(){an(new Gt(u1,VV,"PUBLIC").setMultipleInstances(!0)),kt(g_,y_,""),kt(g_,y_,"esm2017")}MV();const FV={apiKey:"AIzaSyC2lIkZlF_dFgjNMLmppRe_UO_Bsu1EZ5c",authDomain:"groupcreation-95ea3.firebaseapp.com",projectId:"groupcreation-95ea3",storageBucket:"groupcreation-95ea3.appspot.com",messagingSenderId:"821721600459",appId:"1:821721600459:web:69fbb575a3c926e326264e",measurementId:"G-7M1LKGEBFZ"},UV=Vw(FV);Hx(UV);WD();const Dc=$L();bV();function c1(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=c1(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function yr(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=c1(t))&&(r&&(r+=" "),r+=e);return r}const ca=t=>typeof t=="number"&&!isNaN(t),di=t=>typeof t=="string",Dt=t=>typeof t=="function",zl=t=>di(t)||Dt(t)?t:null,wf=t=>A.isValidElement(t)||di(t)||Dt(t)||ca(t);function jV(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function bc(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:l,position:u,preventExitTransition:c,done:d,nodeRef:p,isIn:m,playToast:I}=o;const C=r?`${e}--${u}`:e,P=r?`${n}--${u}`:n,N=A.useRef(0);return A.useLayoutEffect(()=>{const w=p.current,v=C.split(" "),_=x=>{x.target===p.current&&(I(),w.removeEventListener("animationend",_),w.removeEventListener("animationcancel",_),N.current===0&&x.type!=="animationcancel"&&w.classList.remove(...v))};w.classList.add(...v),w.addEventListener("animationend",_),w.addEventListener("animationcancel",_)},[]),A.useEffect(()=>{const w=p.current,v=()=>{w.removeEventListener("animationend",v),i?jV(w,d,s):d()};m||(c?v():(N.current=1,w.className+=` ${P}`,w.addEventListener("animationend",v)))},[m]),ne.createElement(ne.Fragment,null,l)}}function v_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const yt=new Map;let ha=[];const Tf=new Set,$V=t=>Tf.forEach(e=>e(t)),h1=()=>yt.size>0;function d1(t,e){var n;if(e)return!((n=yt.get(e))==null||!n.isToastActive(t));let r=!1;return yt.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function f1(t,e){wf(t)&&(h1()||ha.push({content:t,options:e}),yt.forEach(n=>{n.buildToast(t,e)}))}function __(t,e){yt.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function BV(t){const{subscribe:e,getSnapshot:n,setProps:r}=A.useRef(function(s){const o=s.containerId||1;return{subscribe(l){const u=function(d,p,m){let I=1,C=0,P=[],N=[],w=[],v=p;const _=new Map,x=new Set,F=()=>{w=Array.from(_.values()),x.forEach(g=>g())},V=g=>{N=g==null?[]:N.filter(T=>T!==g),F()},E=g=>{const{toastId:T,onOpen:S,updateId:k,children:O}=g.props,R=k==null;g.staleId&&_.delete(g.staleId),_.set(T,g),N=[...N,g.props.toastId].filter(_e=>_e!==g.staleId),F(),m(v_(g,R?"added":"updated")),R&&Dt(S)&&S(A.isValidElement(O)&&O.props)};return{id:d,props:v,observe:g=>(x.add(g),()=>x.delete(g)),toggle:(g,T)=>{_.forEach(S=>{T!=null&&T!==S.props.toastId||Dt(S.toggle)&&S.toggle(g)})},removeToast:V,toasts:_,clearQueue:()=>{C-=P.length,P=[]},buildToast:(g,T)=>{if((J=>{let{containerId:Z,toastId:de,updateId:we}=J;const Le=Z?Z!==d:d!==1,Fe=_.has(de)&&we==null;return Le||Fe})(T))return;const{toastId:S,updateId:k,data:O,staleId:R,delay:_e}=T,Ge=()=>{V(S)},ze=k==null;ze&&C++;const Ee={...v,style:v.toastStyle,key:I++,...Object.fromEntries(Object.entries(T).filter(J=>{let[Z,de]=J;return de!=null})),toastId:S,updateId:k,data:O,closeToast:Ge,isIn:!1,className:zl(T.className||v.toastClassName),bodyClassName:zl(T.bodyClassName||v.bodyClassName),progressClassName:zl(T.progressClassName||v.progressClassName),autoClose:!T.isLoading&&(j=T.autoClose,q=v.autoClose,j===!1||ca(j)&&j>0?j:q),deleteToast(){const J=_.get(S),{onClose:Z,children:de}=J.props;Dt(Z)&&Z(A.isValidElement(de)&&de.props),m(v_(J,"removed")),_.delete(S),C--,C<0&&(C=0),P.length>0?E(P.shift()):F()}};var j,q;Ee.closeButton=v.closeButton,T.closeButton===!1||wf(T.closeButton)?Ee.closeButton=T.closeButton:T.closeButton===!0&&(Ee.closeButton=!wf(v.closeButton)||v.closeButton);let K=g;A.isValidElement(g)&&!di(g.type)?K=A.cloneElement(g,{closeToast:Ge,toastProps:Ee,data:O}):Dt(g)&&(K=g({closeToast:Ge,toastProps:Ee,data:O}));const re={content:K,props:Ee,staleId:R};v.limit&&v.limit>0&&C>v.limit&&ze?P.push(re):ca(_e)?setTimeout(()=>{E(re)},_e):E(re)},setProps(g){v=g},setToggle:(g,T)=>{_.get(g).toggle=T},isToastActive:g=>N.some(T=>T===g),getSnapshot:()=>w}}(o,s,$V);yt.set(o,u);const c=u.observe(l);return ha.forEach(d=>f1(d.content,d.options)),ha=[],()=>{c(),yt.delete(o)}},setProps(l){var u;(u=yt.get(o))==null||u.setProps(l)},getSnapshot(){var l;return(l=yt.get(o))==null?void 0:l.getSnapshot()}}}(t)).current;r(t);const i=A.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return t.newestOnTop&&i.reverse(),i.forEach(l=>{const{position:u}=l.props;o.has(u)||o.set(u,[]),o.get(u).push(l)}),Array.from(o,l=>s(l[0],l[1]))},isToastActive:d1,count:i==null?void 0:i.length}}function zV(t){const[e,n]=A.useState(!1),[r,i]=A.useState(!1),s=A.useRef(null),o=A.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:p}=t;var m,I;function C(){n(!0)}function P(){n(!1)}function N(_){const x=s.current;o.canDrag&&x&&(o.didMove=!0,e&&P(),o.delta=t.draggableDirection==="x"?_.clientX-o.start:_.clientY-o.start,o.start!==_.clientX&&(o.canCloseOnClick=!1),x.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,x.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function w(){document.removeEventListener("pointermove",N),document.removeEventListener("pointerup",w);const _=s.current;if(o.canDrag&&o.didMove&&_){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}(I=yt.get((m={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||I.setToggle(m.id,m.fn),A.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||P(),window.addEventListener("focus",C),window.addEventListener("blur",P),()=>{window.removeEventListener("focus",C),window.removeEventListener("blur",P)}},[t.pauseOnFocusLoss]);const v={onPointerDown:function(_){if(t.draggable===!0||t.draggable===_.pointerType){o.didMove=!1,document.addEventListener("pointermove",N),document.addEventListener("pointerup",w);const x=s.current;o.canCloseOnClick=!0,o.canDrag=!0,x.style.transition="none",t.draggableDirection==="x"?(o.start=_.clientX,o.removalDistance=x.offsetWidth*(t.draggablePercent/100)):(o.start=_.clientY,o.removalDistance=x.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(_){const{top:x,bottom:F,left:V,right:E}=s.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&t.pauseOnHover&&_.clientX>=V&&_.clientX<=E&&_.clientY>=x&&_.clientY<=F?P():C()}};return l&&u&&(v.onMouseEnter=P,t.stacked||(v.onMouseLeave=C)),p&&(v.onClick=_=>{d&&d(_),o.canCloseOnClick&&c()}),{playToast:C,pauseToast:P,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:v}}function WV(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:l,controlledProgress:u,progress:c,rtl:d,isIn:p,theme:m}=t;const I=s||u&&c===0,C={...l,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};u&&(C.transform=`scaleX(${c})`);const P=yr("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),N=Dt(o)?o({rtl:d,type:i,defaultClassName:P}):yr(P,o),w={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{p&&r()}};return ne.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":I},ne.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${i}`}),ne.createElement("div",{role:"progressbar","aria-hidden":I?"true":"false","aria-label":"notification timer",className:N,style:C,...w}))}let HV=1;const p1=()=>""+HV++;function qV(t){return t&&(di(t.toastId)||ca(t.toastId))?t.toastId:p1()}function bo(t,e){return f1(t,e),e.toastId}function $u(t,e){return{...e,type:e&&e.type||t,toastId:qV(e)}}function _l(t){return(e,n)=>bo(e,$u(t,n))}function ve(t,e){return bo(t,$u("default",e))}ve.loading=(t,e)=>bo(t,$u("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),ve.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=di(i)?ve.loading(i,n):ve.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,p,m)=>{if(p==null)return void ve.dismiss(r);const I={type:d,...l,...n,data:m},C=di(p)?{render:p}:p;return r?ve.update(r,{...I,...C}):ve(C.render,{...I,...C}),m},c=Dt(t)?t():t;return c.then(d=>u("success",o,d)).catch(d=>u("error",s,d)),c},ve.success=_l("success"),ve.info=_l("info"),ve.error=_l("error"),ve.warning=_l("warning"),ve.warn=ve.warning,ve.dark=(t,e)=>bo(t,$u("default",{theme:"dark",...e})),ve.dismiss=function(t){(function(e){var n;if(h1()){if(e==null||di(n=e)||ca(n))yt.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=yt.get(e.containerId);r?r.removeToast(e.id):yt.forEach(i=>{i.removeToast(e.id)})}}else ha=ha.filter(r=>e!=null&&r.options.toastId!==e)})(t)},ve.clearWaitingQueue=function(t){t===void 0&&(t={}),yt.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},ve.isActive=d1,ve.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=yt.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:p1()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,bo(o,s)}},ve.done=t=>{ve.update(t,{progress:1})},ve.onChange=function(t){return Tf.add(t),()=>{Tf.delete(t)}},ve.play=t=>__(!0,t),ve.pause=t=>__(!1,t);const GV=typeof window<"u"?A.useLayoutEffect:A.useEffect,El=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return ne.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Gh={info:function(t){return ne.createElement(El,{...t},ne.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return ne.createElement(El,{...t},ne.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return ne.createElement(El,{...t},ne.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return ne.createElement(El,{...t},ne.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return ne.createElement("div",{className:"Toastify__spinner"})}},KV=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=zV(t),{closeButton:o,children:l,autoClose:u,onClick:c,type:d,hideProgressBar:p,closeToast:m,transition:I,position:C,className:P,style:N,bodyClassName:w,bodyStyle:v,progressClassName:_,progressStyle:x,updateId:F,role:V,progress:E,rtl:g,toastId:T,deleteToast:S,isIn:k,isLoading:O,closeOnClick:R,theme:_e}=t,Ge=yr("Toastify__toast",`Toastify__toast-theme--${_e}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":g},{"Toastify__toast--close-on-click":R}),ze=Dt(P)?P({rtl:g,position:C,type:d,defaultClassName:Ge}):yr(Ge,P),Ee=function(re){let{theme:J,type:Z,isLoading:de,icon:we}=re,Le=null;const Fe={theme:J,type:Z};return we===!1||(Dt(we)?Le=we({...Fe,isLoading:de}):A.isValidElement(we)?Le=A.cloneElement(we,Fe):de?Le=Gh.spinner():(Br=>Br in Gh)(Z)&&(Le=Gh[Z](Fe))),Le}(t),j=!!E||!u,q={closeToast:m,type:d,theme:_e};let K=null;return o===!1||(K=Dt(o)?o(q):A.isValidElement(o)?A.cloneElement(o,q):function(re){let{closeToast:J,theme:Z,ariaLabel:de="close"}=re;return ne.createElement("button",{className:`Toastify__close-button Toastify__close-button--${Z}`,type:"button",onClick:we=>{we.stopPropagation(),J(we)},"aria-label":de},ne.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ne.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(q)),ne.createElement(I,{isIn:k,done:S,position:C,preventExitTransition:n,nodeRef:r,playToast:s},ne.createElement("div",{id:T,onClick:c,"data-in":k,className:ze,...i,style:N,ref:r},ne.createElement("div",{...k&&{role:V},className:Dt(w)?w({type:d}):yr("Toastify__toast-body",w),style:v},Ee!=null&&ne.createElement("div",{className:yr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},Ee),ne.createElement("div",null,l)),K,ne.createElement(WV,{...F&&!j?{key:`pb-${F}`}:{},rtl:g,theme:_e,delay:u,isRunning:e,isIn:k,closeToast:m,hide:p,type:d,style:x,className:_,controlledProgress:j,progress:E||0})))},Lc=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},QV=bc(Lc("bounce",!0));bc(Lc("slide",!0));bc(Lc("zoom"));bc(Lc("flip"));const XV={position:"top-right",transition:QV,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function m1(t){let e={...XV,...t};const n=t.stacked,[r,i]=A.useState(!0),s=A.useRef(null),{getToastToRender:o,isToastActive:l,count:u}=BV(e),{className:c,style:d,rtl:p,containerId:m}=e;function I(P){const N=yr("Toastify__toast-container",`Toastify__toast-container--${P}`,{"Toastify__toast-container--rtl":p});return Dt(c)?c({position:P,rtl:p,defaultClassName:N}):yr(N,zl(c))}function C(){n&&(i(!0),ve.play())}return GV(()=>{if(n){var P;const N=s.current.querySelectorAll('[data-in="true"]'),w=12,v=(P=e.position)==null?void 0:P.includes("top");let _=0,x=0;Array.from(N).reverse().forEach((F,V)=>{const E=F;E.classList.add("Toastify__toast--stacked"),V>0&&(E.dataset.collapsed=`${r}`),E.dataset.pos||(E.dataset.pos=v?"top":"bot");const g=_*(r?.2:1)+(r?0:w*V);E.style.setProperty("--y",`${v?g:-1*g}px`),E.style.setProperty("--g",`${w}`),E.style.setProperty("--s",""+(1-(r?x:0))),_+=E.offsetHeight,x+=.025})}},[r,u,n]),ne.createElement("div",{ref:s,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),ve.pause())},onMouseLeave:C},o((P,N)=>{const w=N.length?{...d}:{...d,pointerEvents:"none"};return ne.createElement("div",{className:I(P),style:w,key:`container-${P}`},N.map(v=>{let{content:_,props:x}=v;return ne.createElement(KV,{...x,stacked:n,collapseAll:C,isIn:l(x.toastId,x.containerId),style:x.style,key:`toast-${x.key}`},_)}))}))}const YV=({dataFetch:t})=>{const[e,n]=A.useState(!1),[r,i]=A.useState([]),s=()=>n(!1),o=()=>n(!0),l=async c=>{c.preventDefault();const d=xc(Dc,"groups"),p={...r};await o1(d,p),ve.success("Group Add Successfully"),s(),t()},u=c=>{const{name:d,value:p}=c.target;i(m=>({...m,[d]:p}))};return b.jsxs(b.Fragment,{children:[b.jsx(ea,{className:"btn-styled",variant:"primary",onClick:o,children:"Add Group"}),b.jsxs(pr,{show:e,onHide:s,children:[b.jsx(pr.Header,{closeButton:!0,children:b.jsx(pr.Title,{children:"Add Group"})}),b.jsx(pr.Body,{children:b.jsxs(fn,{onSubmit:c=>l(c),children:[b.jsxs("div",{children:[b.jsx(fn.Label,{htmlFor:"groupname",children:"Group Name"}),b.jsx(fn.Control,{type:"text",id:"groupname",name:"groupname","aria-describedby":"passwordHelpBlock",onChange:c=>u(c)})]}),b.jsx("div",{className:"text-end",children:b.jsx(ea,{className:"btn-styled mt-2",type:"submit",variant:"primary",children:"Add"})})]})})]})]})},Em=A.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=pe(e,"card-body"),b.jsx(n,{ref:i,className:ie(t,e),...r})));Em.displayName="CardBody";const g1=A.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=pe(e,"card-footer"),b.jsx(n,{ref:i,className:ie(t,e),...r})));g1.displayName="CardFooter";const y1=A.createContext(null);y1.displayName="CardHeaderContext";const v1=A.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=pe(t,"card-header"),o=A.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return b.jsx(y1.Provider,{value:o,children:b.jsx(n,{ref:i,...r,className:ie(e,s)})})});v1.displayName="CardHeader";const _1=A.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=pe(t,"card-img");return b.jsx(r,{ref:s,className:ie(n?`${o}-${n}`:o,e),...i})});_1.displayName="CardImg";const E1=A.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=pe(e,"card-img-overlay"),b.jsx(n,{ref:i,className:ie(t,e),...r})));E1.displayName="CardImgOverlay";const w1=A.forwardRef(({className:t,bsPrefix:e,as:n="a",...r},i)=>(e=pe(e,"card-link"),b.jsx(n,{ref:i,className:ie(t,e),...r})));w1.displayName="CardLink";const JV=Sp("h6"),T1=A.forwardRef(({className:t,bsPrefix:e,as:n=JV,...r},i)=>(e=pe(e,"card-subtitle"),b.jsx(n,{ref:i,className:ie(t,e),...r})));T1.displayName="CardSubtitle";const I1=A.forwardRef(({className:t,bsPrefix:e,as:n="p",...r},i)=>(e=pe(e,"card-text"),b.jsx(n,{ref:i,className:ie(t,e),...r})));I1.displayName="CardText";const ZV=Sp("h5"),S1=A.forwardRef(({className:t,bsPrefix:e,as:n=ZV,...r},i)=>(e=pe(e,"card-title"),b.jsx(n,{ref:i,className:ie(t,e),...r})));S1.displayName="CardTitle";const R1=A.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s=!1,children:o,as:l="div",...u},c)=>{const d=pe(t,"card");return b.jsx(l,{ref:c,...u,className:ie(e,d,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?b.jsx(Em,{children:o}):o})});R1.displayName="Card";const Kh=Object.assign(R1,{Img:_1,Title:S1,Subtitle:T1,Body:Em,Link:w1,Text:I1,Header:v1,Footer:g1,ImgOverlay:E1}),C1=A.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=pe(t,"row"),o=KE(),l=QE(),u=`${s}-cols`,c=[];return o.forEach(d=>{const p=r[d];delete r[d];let m;p!=null&&typeof p=="object"?{cols:m}=p:m=p;const I=d!==l?`-${d}`:"";m!=null&&c.push(`${u}${I}-${m}`)}),b.jsx(n,{ref:i,...r,className:ie(e,s,...c)})});C1.displayName="Row";var A1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E_=ne.createContext&&ne.createContext(A1),eM=["attr","size","title"];function tM(t,e){if(t==null)return{};var n=nM(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function nM(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bu.apply(this,arguments)}function w_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function zu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?w_(Object(n),!0).forEach(function(r){rM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function rM(t,e,n){return e=iM(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function iM(t){var e=sM(t,"string");return typeof e=="symbol"?e:e+""}function sM(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function k1(t){return t&&t.map((e,n)=>ne.createElement(e.tag,zu({key:n},e.attr),k1(e.child)))}function P1(t){return e=>ne.createElement(oM,Bu({attr:zu({},t.attr)},e),k1(t.child))}function oM(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=tM(t,eM),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),ne.createElement("svg",Bu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:zu(zu({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&ne.createElement("title",null,s),t.children)};return E_!==void 0?ne.createElement(E_.Consumer,null,n=>e(n)):e(A1)}function aM(t){return P1({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M363 277h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"},child:[]},{tag:"path",attr:{d:"M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422c-44.3 0-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256c0-44.3 17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"},child:[]}]})(t)}function lM(t){return P1({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"},child:[]}]})(t)}const uM=()=>{const[t,e]=A.useState([]),n=async()=>{const i=xc(Dc,"groups"),s=await s1(i);let o=s==null?void 0:s.docs.map(l=>({...l.data(),id:l.id}));e(o)};A.useEffect(()=>{n()},[]);const r=()=>{n()};return b.jsxs(b.Fragment,{children:[b.jsx(m1,{}),b.jsx("div",{className:"fullheight",children:b.jsx("div",{className:"container fullheight colourclass",children:b.jsxs("div",{className:"m-5 mt-0",children:[b.jsx("div",{className:"pt-5",children:b.jsx(YV,{dataFetch:r})}),b.jsx(C1,{className:"mt-3",children:t.length!==0?b.jsx(b.Fragment,{children:t==null?void 0:t.map((i,s)=>b.jsx(b.Fragment,{children:b.jsx(Ap,{lg:3,md:3,sm:12,className:"mb-2",children:b.jsx(Kh,{className:"card_style",children:b.jsx(Kh.Body,{className:"body_styles",children:b.jsxs("div",{className:"d-flex justify-content-between",children:[b.jsxs(Kh.Title,{className:"alignments",children:["  ",b.jsx(lM,{size:25})," "," ",i.groupname]}),b.jsx(AA,{to:`/groupDetail?sid=${i.id}`,title:"Add Student",children:b.jsx(aM,{size:25})})]})})})})}))}):b.jsx(b.Fragment,{children:b.jsx("div",{className:"text-center p-3",children:"No Data Found"})})})]})})})]})},cM=({id:t,dataFetch:e})=>{const[n,r]=A.useState(!1),[i,s]=A.useState([]),o=()=>r(!1),l=()=>r(!0),u=async d=>{d.preventDefault();const p=xc(Dc,"student_list"),m={...i,refId:t};await o1(p,m),ve.success("Members Add Successfully"),o(),e()},c=d=>{const{name:p,value:m}=d.target;s(I=>({...I,[p]:m}))};return b.jsxs(b.Fragment,{children:[b.jsx(ea,{className:"btn-styled",variant:"primary",onClick:l,children:"Add Members"}),b.jsxs(pr,{show:n,onHide:o,children:[b.jsx(pr.Header,{closeButton:!0,children:b.jsx(pr.Title,{children:"Add Members"})}),b.jsx(pr.Body,{children:b.jsxs(fn,{onSubmit:d=>u(d),children:[b.jsxs("div",{children:[b.jsx(fn.Label,{htmlFor:"studentName",children:"Name"}),b.jsx(fn.Control,{type:"text",id:"studentName",name:"studentName","aria-describedby":"passwordHelpBlock",onChange:d=>c(d)})]}),b.jsxs("div",{children:[b.jsx(fn.Label,{htmlFor:"studentEmail",children:"Email"}),b.jsx(fn.Control,{type:"email",id:"studentEmail",name:"studentEmail","aria-describedby":"passwordHelpBlock",onChange:d=>c(d)})]}),b.jsxs("div",{children:[b.jsx(fn.Label,{htmlFor:"studentPhone",children:"Phone Number"}),b.jsx(fn.Control,{type:"number",id:"studentPhone",name:"studentPhone","aria-describedby":"passwordHelpBlock",onChange:d=>c(d)})]}),b.jsx("div",{className:"text-end",children:b.jsx(ea,{className:"btn-styled mt-2",type:"submit",variant:"primary",children:"Add"})})]})})]})]})},hM=()=>{const t=va(),n=new URLSearchParams(t.search).get("sid"),[r,i]=A.useState([]),s=async()=>{const l=eV(xc(Dc,"student_list"),tV("refId","==",n)),u=await s1(l);let c=u==null?void 0:u.docs.map(d=>({...d.data(),id:d.id}));i(c)};A.useEffect(()=>{s()},[]);const o=()=>{s()};return b.jsxs(b.Fragment,{children:[b.jsx(m1,{}),b.jsx("div",{className:"fullheight",children:b.jsx("div",{className:"container fullheight colourclass",children:b.jsxs("div",{className:"m-5 mt-0",children:[b.jsx("div",{className:"pt-5",children:b.jsx(cM,{id:n,dataFetch:o})}),b.jsx("div",{className:"mt-3",children:b.jsx("div",{children:b.jsx("div",{class:"container overflowset",children:b.jsxs("table",{class:"responsive-table",children:[b.jsx("thead",{class:"responsive-table__head",children:b.jsxs("tr",{class:"responsive-table__row",children:[b.jsx("th",{class:"responsive-table__head__title responsive-table__head__title--name",children:"S/No"}),b.jsx("th",{class:"responsive-table__head__title responsive-table__head__title--status",children:"Student Name"}),b.jsx("th",{class:"responsive-table__head__title responsive-table__head__title--types",children:"Email"}),b.jsx("th",{class:"responsive-table__head__title responsive-table__head__title--update",children:"Phone Number"})]})}),b.jsx("tbody",{class:"responsive-table__body",children:r.length!==0?b.jsx(b.Fragment,{children:r==null?void 0:r.map((l,u)=>b.jsxs("tr",{class:"responsive-table__row",children:[b.jsx("td",{class:"responsive-table__body__text responsive-table__body__text--name",children:u+1}),b.jsx("td",{class:"responsive-table__body__text responsive-table__body__text--status",children:l==null?void 0:l.studentName}),b.jsx("td",{class:"responsive-table__body__text responsive-table__body__text--types",children:l==null?void 0:l.studentEmail}),b.jsx("td",{class:"responsive-table__body__text responsive-table__body__text--update",children:l==null?void 0:l.studentPhone})]}))}):b.jsx(b.Fragment,{children:b.jsx("div",{className:"text-center p-3",children:"No Data Found"})})})]})})})})]})})})]})};function dM(){return b.jsx(b.Fragment,{children:b.jsx("div",{children:b.jsx(SA,{children:b.jsxs(yA,{children:[b.jsx(Bd,{path:"/",element:b.jsx(uM,{})}),b.jsx(Bd,{path:"/groupDetail",element:b.jsx(hM,{})})]})})})})}LE(document.getElementById("root")).render(b.jsx(A.StrictMode,{children:b.jsx(dM,{})}));
