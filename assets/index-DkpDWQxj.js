(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var qs={exports:{}},ol={},bs={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr=Symbol.for("react.element"),pc=Symbol.for("react.portal"),mc=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),xc=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),kc=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),Fo=Symbol.iterator;function Nc(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var ea={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ta=Object.assign,na={};function hn(e,t,n){this.props=e,this.context=t,this.refs=na,this.updater=n||ea}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ra(){}ra.prototype=hn.prototype;function Vi(e,t,n){this.props=e,this.context=t,this.refs=na,this.updater=n||ea}var Hi=Vi.prototype=new ra;Hi.constructor=Vi;ta(Hi,hn.prototype);Hi.isPureReactComponent=!0;var Ao=Array.isArray,la=Object.prototype.hasOwnProperty,Bi={current:null},ia={key:!0,ref:!0,__self:!0,__source:!0};function oa(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)la.call(t,r)&&!ia.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:nr,type:e,key:i,ref:o,props:l,_owner:Bi.current}}function jc(e,t){return{$$typeof:nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wi(e){return typeof e=="object"&&e!==null&&e.$$typeof===nr}function Cc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $o=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cc(""+e.key):t.toString(36)}function jr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case nr:case pc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Sl(o,0):r,Ao(l)?(n="",e!=null&&(n=e.replace($o,"$&/")+"/"),jr(l,t,n,"",function(d){return d})):l!=null&&(Wi(l)&&(l=jc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace($o,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ao(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Sl(i,a);o+=jr(i,t,n,u,l)}else if(u=Nc(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Sl(i,a++),o+=jr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function sr(e,t,n){if(e==null)return e;var r=[],l=0;return jr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function _c(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Cr={transition:null},Ec={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:Bi};function sa(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:sr,forEach:function(e,t,n){sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sr(e,function(){t++}),t},toArray:function(e){return sr(e,function(t){return t})||[]},only:function(e){if(!Wi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=hn;D.Fragment=mc;D.Profiler=vc;D.PureComponent=Vi;D.StrictMode=hc;D.Suspense=wc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ec;D.act=sa;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ta({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Bi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)la.call(t,u)&&!ia.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:nr,type:e.type,key:l,ref:i,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:yc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gc,_context:e},e.Consumer=e};D.createElement=oa;D.createFactory=function(e){var t=oa.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:xc,render:e}};D.isValidElement=Wi;D.lazy=function(e){return{$$typeof:Sc,_payload:{_status:-1,_result:e},_init:_c}};D.memo=function(e,t){return{$$typeof:kc,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Cr.transition;Cr.transition={};try{e()}finally{Cr.transition=t}};D.unstable_act=sa;D.useCallback=function(e,t){return ve.current.useCallback(e,t)};D.useContext=function(e){return ve.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};D.useEffect=function(e,t){return ve.current.useEffect(e,t)};D.useId=function(){return ve.current.useId()};D.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ve.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};D.useRef=function(e){return ve.current.useRef(e)};D.useState=function(e){return ve.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ve.current.useTransition()};D.version="18.3.1";bs.exports=D;var M=bs.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=M,Lc=Symbol.for("react.element"),Tc=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,Mc=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dc={key:!0,ref:!0,__self:!0,__source:!0};function aa(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Pc.call(t,r)&&!Dc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Lc,type:e,key:i,ref:o,props:l,_owner:Mc.current}}ol.Fragment=Tc;ol.jsx=aa;ol.jsxs=aa;qs.exports=ol;var s=qs.exports,ua={exports:{}},Ee={},ca={exports:{}},da={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,T){var P=_.length;_.push(T);e:for(;0<P;){var $=P-1>>>1,q=_[$];if(0<l(q,T))_[$]=T,_[P]=q,P=$;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var T=_[0],P=_.pop();if(P!==T){_[0]=P;e:for(var $=0,q=_.length,_t=q>>>1;$<_t;){var H=2*($+1)-1,Vt=_[H],U=H+1,Xe=_[U];if(0>l(Vt,P))U<q&&0>l(Xe,Vt)?(_[$]=Xe,_[U]=P,$=U):(_[$]=Vt,_[H]=P,$=H);else if(U<q&&0>l(Xe,P))_[$]=Xe,_[U]=P,$=U;else break e}}return T}function l(_,T){var P=_.sortIndex-T.sortIndex;return P!==0?P:_.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],d=[],h=1,g=null,v=3,S=!1,j=!1,N=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var T=n(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=_)r(d),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(d)}}function x(_){if(N=!1,p(_),!j)if(n(u)!==null)j=!0,He(w);else{var T=n(d);T!==null&&Ge(x,T.startTime-_)}}function w(_,T){j=!1,N&&(N=!1,f(y),y=-1),S=!0;var P=v;try{for(p(T),g=n(u);g!==null&&(!(g.expirationTime>T)||_&&!A());){var $=g.callback;if(typeof $=="function"){g.callback=null,v=g.priorityLevel;var q=$(g.expirationTime<=T);T=e.unstable_now(),typeof q=="function"?g.callback=q:g===n(u)&&r(u),p(T)}else r(u);g=n(u)}if(g!==null)var _t=!0;else{var H=n(d);H!==null&&Ge(x,H.startTime-T),_t=!1}return _t}finally{g=null,v=P,S=!1}}var C=!1,m=null,y=-1,L=5,z=-1;function A(){return!(e.unstable_now()-z<L)}function I(){if(m!==null){var _=e.unstable_now();z=_;var T=!0;try{T=m(!0,_)}finally{T?O():(C=!1,m=null)}}else C=!1}var O;if(typeof c=="function")O=function(){c(I)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,oe=ee.port2;ee.port1.onmessage=I,O=function(){oe.postMessage(null)}}else O=function(){R(I,0)};function He(_){m=_,C||(C=!0,O())}function Ge(_,T){y=R(function(){_(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){j||S||(j=!0,He(w))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(v){case 1:case 2:case 3:var T=3;break;default:T=v}var P=v;v=T;try{return _()}finally{v=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,T){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var P=v;v=_;try{return T()}finally{v=P}},e.unstable_scheduleCallback=function(_,T,P){var $=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,_){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=P+q,_={id:h++,callback:T,priorityLevel:_,startTime:P,expirationTime:q,sortIndex:-1},P>$?(_.sortIndex=P,t(d,_),n(u)===null&&_===n(d)&&(N?(f(y),y=-1):N=!0,Ge(x,P-$))):(_.sortIndex=q,t(u,_),j||S||(j=!0,He(w))),_},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(_){var T=v;return function(){var P=v;v=T;try{return _.apply(this,arguments)}finally{v=P}}}})(da);ca.exports=da;var Ic=ca.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=M,_e=Ic;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fa=new Set,$n={};function $t(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for($n[e]=t,e=0;e<t.length;e++)fa.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uo={},Vo={};function Fc(e){return Xl.call(Vo,e)?!0:Xl.call(Uo,e)?!1:Oc.test(e)?Vo[e]=!0:(Uo[e]=!0,!1)}function Ac(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $c(e,t,n,r){if(t===null||typeof t>"u"||Ac(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qi=/[\-:]([a-z])/g;function Ki(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qi,Ki);ue[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qi,Ki);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qi,Ki);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yi(e,t,n,r){var l=ue.hasOwnProperty(t)?ue[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($c(t,n,l,r)&&(n=null),r||l===null?Fc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ar=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),Gi=Symbol.for("react.strict_mode"),Zl=Symbol.for("react.profiler"),pa=Symbol.for("react.provider"),ma=Symbol.for("react.context"),Xi=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),Zi=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),ha=Symbol.for("react.offscreen"),Ho=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=Ho&&e[Ho]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Nl;function _n(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var jl=!1;function Cl(e,t){if(!e||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_n(e):""}function Uc(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Bt:return"Portal";case Zl:return"Profiler";case Gi:return"StrictMode";case Jl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ma:return(e.displayName||"Context")+".Consumer";case pa:return(e._context.displayName||"Context")+".Provider";case Xi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zi:return t=e.displayName||null,t!==null?t:bl(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return bl(e(t))}catch{}}return null}function Vc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bl(t);case 8:return t===Gi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function va(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hc(e){var t=va(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ur(e){e._valueTracker||(e._valueTracker=Hc(e))}function ga(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=va(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ei(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ya(e,t){t=t.checked,t!=null&&Yi(e,"checked",t,!1)}function ti(e,t){ya(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ni(e,t.type,n):t.hasOwnProperty("defaultValue")&&ni(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ni(e,t,n){(t!=="number"||Or(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ri(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(En(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function xa(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ko(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function li(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cr,ka=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bc=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){Bc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function Sa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function Na(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Sa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Wc=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ii(e,t){if(t){if(Wc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function oi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var si=null;function Ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ai=null,nn=null,rn=null;function Yo(e){if(e=ir(e)){if(typeof ai!="function")throw Error(k(280));var t=e.stateNode;t&&(t=dl(t),ai(e.stateNode,e.type,t))}}function ja(e){nn?rn?rn.push(e):rn=[e]:nn=e}function Ca(){if(nn){var e=nn,t=rn;if(rn=nn=null,Yo(e),t)for(e=0;e<t.length;e++)Yo(t[e])}}function _a(e,t){return e(t)}function Ea(){}var _l=!1;function za(e,t,n){if(_l)return e(t,n);_l=!0;try{return _a(e,t,n)}finally{_l=!1,(nn!==null||rn!==null)&&(Ea(),Ca())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var ui=!1;if(tt)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){ui=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{ui=!1}function Qc(e,t,n,r,l,i,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Pn=!1,Fr=null,Ar=!1,ci=null,Kc={onError:function(e){Pn=!0,Fr=e}};function Yc(e,t,n,r,l,i,o,a,u){Pn=!1,Fr=null,Qc.apply(Kc,arguments)}function Gc(e,t,n,r,l,i,o,a,u){if(Yc.apply(this,arguments),Pn){if(Pn){var d=Fr;Pn=!1,Fr=null}else throw Error(k(198));Ar||(Ar=!0,ci=d)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function La(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Go(e){if(Ut(e)!==e)throw Error(k(188))}function Xc(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Go(l),e;if(i===r)return Go(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ta(e){return e=Xc(e),e!==null?Pa(e):null}function Pa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pa(e);if(t!==null)return t;e=e.sibling}return null}var Ma=_e.unstable_scheduleCallback,Xo=_e.unstable_cancelCallback,Zc=_e.unstable_shouldYield,Jc=_e.unstable_requestPaint,b=_e.unstable_now,qc=_e.unstable_getCurrentPriorityLevel,qi=_e.unstable_ImmediatePriority,Da=_e.unstable_UserBlockingPriority,$r=_e.unstable_NormalPriority,bc=_e.unstable_LowPriority,Ia=_e.unstable_IdlePriority,sl=null,Ke=null;function ed(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:rd,td=Math.log,nd=Math.LN2;function rd(e){return e>>>=0,e===0?32:31-(td(e)/nd|0)|0}var dr=64,fr=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=zn(a):(i&=o,i!==0&&(r=zn(i)))}else o=n&~l,o!==0?r=zn(o):i!==0&&(r=zn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),l=1<<n,r|=e[n],t&=~l;return r}function ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-$e(i),a=1<<o,u=l[o];u===-1?(!(a&n)||a&r)&&(l[o]=ld(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function di(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ra(){var e=dr;return dr<<=1,!(dr&4194240)&&(dr=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function od(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-$e(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function bi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var V=0;function Oa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fa,eo,Aa,$a,Ua,fi=!1,pr=[],pt=null,mt=null,ht=null,Hn=new Map,Bn=new Map,ut=[],sd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zo(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function wn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ir(t),t!==null&&eo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ad(e,t,n,r,l){switch(t){case"focusin":return pt=wn(pt,e,t,n,r,l),!0;case"dragenter":return mt=wn(mt,e,t,n,r,l),!0;case"mouseover":return ht=wn(ht,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Hn.set(i,wn(Hn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Bn.set(i,wn(Bn.get(i)||null,e,t,n,r,l)),!0}return!1}function Va(e){var t=Lt(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=La(n),t!==null){e.blockedOn=t,Ua(e.priority,function(){Aa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);si=r,n.target.dispatchEvent(r),si=null}else return t=ir(n),t!==null&&eo(t),e.blockedOn=n,!1;t.shift()}return!0}function Jo(e,t,n){_r(e)&&n.delete(t)}function ud(){fi=!1,pt!==null&&_r(pt)&&(pt=null),mt!==null&&_r(mt)&&(mt=null),ht!==null&&_r(ht)&&(ht=null),Hn.forEach(Jo),Bn.forEach(Jo)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,fi||(fi=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,ud)))}function Wn(e){function t(l){return kn(l,e)}if(0<pr.length){kn(pr[0],e);for(var n=1;n<pr.length;n++){var r=pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&kn(pt,e),mt!==null&&kn(mt,e),ht!==null&&kn(ht,e),Hn.forEach(t),Bn.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)Va(n),n.blockedOn===null&&ut.shift()}var ln=it.ReactCurrentBatchConfig,Vr=!0;function cd(e,t,n,r){var l=V,i=ln.transition;ln.transition=null;try{V=1,to(e,t,n,r)}finally{V=l,ln.transition=i}}function dd(e,t,n,r){var l=V,i=ln.transition;ln.transition=null;try{V=4,to(e,t,n,r)}finally{V=l,ln.transition=i}}function to(e,t,n,r){if(Vr){var l=pi(e,t,n,r);if(l===null)Fl(e,t,r,Hr,n),Zo(e,r);else if(ad(l,e,t,n,r))r.stopPropagation();else if(Zo(e,r),t&4&&-1<sd.indexOf(e)){for(;l!==null;){var i=ir(l);if(i!==null&&Fa(i),i=pi(e,t,n,r),i===null&&Fl(e,t,r,Hr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Fl(e,t,r,null,n)}}var Hr=null;function pi(e,t,n,r){if(Hr=null,e=Ji(r),e=Lt(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=La(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hr=e,null}function Ha(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qc()){case qi:return 1;case Da:return 4;case $r:case bc:return 16;case Ia:return 536870912;default:return 16}default:return 16}}var dt=null,no=null,Er=null;function Ba(){if(Er)return Er;var e,t=no,n=t.length,r,l="value"in dt?dt.value:dt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function qo(){return!1}function ze(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mr:qo,this.isPropagationStopped=qo,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=ze(vn),lr=Z({},vn,{view:0,detail:0}),fd=ze(lr),zl,Ll,Sn,al=Z({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(zl=e.screenX-Sn.screenX,Ll=e.screenY-Sn.screenY):Ll=zl=0,Sn=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),bo=ze(al),pd=Z({},al,{dataTransfer:0}),md=ze(pd),hd=Z({},lr,{relatedTarget:0}),Tl=ze(hd),vd=Z({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=ze(vd),yd=Z({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xd=ze(yd),wd=Z({},vn,{data:0}),es=ze(wd),kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nd[e])?!!t[e]:!1}function lo(){return jd}var Cd=Z({},lr,{key:function(e){if(e.key){var t=kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lo,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_d=ze(Cd),Ed=Z({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ts=ze(Ed),zd=Z({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lo}),Ld=ze(zd),Td=Z({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=ze(Td),Md=Z({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dd=ze(Md),Id=[9,13,27,32],io=tt&&"CompositionEvent"in window,Mn=null;tt&&"documentMode"in document&&(Mn=document.documentMode);var Rd=tt&&"TextEvent"in window&&!Mn,Wa=tt&&(!io||Mn&&8<Mn&&11>=Mn),ns=" ",rs=!1;function Qa(e,t){switch(e){case"keyup":return Id.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ka(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Od(e,t){switch(e){case"compositionend":return Ka(t);case"keypress":return t.which!==32?null:(rs=!0,ns);case"textInput":return e=t.data,e===ns&&rs?null:e;default:return null}}function Fd(e,t){if(Qt)return e==="compositionend"||!io&&Qa(e,t)?(e=Ba(),Er=no=dt=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wa&&t.locale!=="ko"?null:t.data;default:return null}}var Ad={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ad[e.type]:t==="textarea"}function Ya(e,t,n,r){ja(r),t=Br(t,"onChange"),0<t.length&&(n=new ro("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Qn=null;function $d(e){lu(e,0)}function ul(e){var t=Gt(e);if(ga(t))return e}function Ud(e,t){if(e==="change")return t}var Ga=!1;if(tt){var Pl;if(tt){var Ml="oninput"in document;if(!Ml){var is=document.createElement("div");is.setAttribute("oninput","return;"),Ml=typeof is.oninput=="function"}Pl=Ml}else Pl=!1;Ga=Pl&&(!document.documentMode||9<document.documentMode)}function os(){Dn&&(Dn.detachEvent("onpropertychange",Xa),Qn=Dn=null)}function Xa(e){if(e.propertyName==="value"&&ul(Qn)){var t=[];Ya(t,Qn,e,Ji(e)),za($d,t)}}function Vd(e,t,n){e==="focusin"?(os(),Dn=t,Qn=n,Dn.attachEvent("onpropertychange",Xa)):e==="focusout"&&os()}function Hd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Qn)}function Bd(e,t){if(e==="click")return ul(t)}function Wd(e,t){if(e==="input"||e==="change")return ul(t)}function Qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:Qd;function Kn(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Xl.call(t,l)||!Ve(e[l],t[l]))return!1}return!0}function ss(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function as(e,t){var n=ss(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ss(n)}}function Za(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Za(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ja(){for(var e=window,t=Or();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Or(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kd(e){var t=Ja(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Za(n.ownerDocument.documentElement,n)){if(r!==null&&oo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=as(n,i);var o=as(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yd=tt&&"documentMode"in document&&11>=document.documentMode,Kt=null,mi=null,In=null,hi=!1;function us(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hi||Kt==null||Kt!==Or(r)||(r=Kt,"selectionStart"in r&&oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),In&&Kn(In,r)||(In=r,r=Br(mi,"onSelect"),0<r.length&&(t=new ro("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionend:hr("Transition","TransitionEnd")},Dl={},qa={};tt&&(qa=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function cl(e){if(Dl[e])return Dl[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qa)return Dl[e]=t[n];return e}var ba=cl("animationend"),eu=cl("animationiteration"),tu=cl("animationstart"),nu=cl("transitionend"),ru=new Map,cs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){ru.set(e,t),$t(t,[e])}for(var Il=0;Il<cs.length;Il++){var Rl=cs[Il],Gd=Rl.toLowerCase(),Xd=Rl[0].toUpperCase()+Rl.slice(1);Nt(Gd,"on"+Xd)}Nt(ba,"onAnimationEnd");Nt(eu,"onAnimationIteration");Nt(tu,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(nu,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function ds(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gc(r,t,void 0,e),e.currentTarget=null}function lu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;ds(l,a,d),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;ds(l,a,d),i=u}}}if(Ar)throw e=ci,Ar=!1,ci=null,e}function W(e,t){var n=t[wi];n===void 0&&(n=t[wi]=new Set);var r=e+"__bubble";n.has(r)||(iu(t,e,2,!1),n.add(r))}function Ol(e,t,n){var r=0;t&&(r|=4),iu(n,e,r,t)}var vr="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[vr]){e[vr]=!0,fa.forEach(function(n){n!=="selectionchange"&&(Zd.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vr]||(t[vr]=!0,Ol("selectionchange",!1,t))}}function iu(e,t,n,r){switch(Ha(t)){case 1:var l=cd;break;case 4:l=dd;break;default:l=to}n=l.bind(null,t,n,e),l=void 0,!ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Fl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Lt(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}za(function(){var d=i,h=Ji(n),g=[];e:{var v=ru.get(e);if(v!==void 0){var S=ro,j=e;switch(e){case"keypress":if(zr(n)===0)break e;case"keydown":case"keyup":S=_d;break;case"focusin":j="focus",S=Tl;break;case"focusout":j="blur",S=Tl;break;case"beforeblur":case"afterblur":S=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Ld;break;case ba:case eu:case tu:S=gd;break;case nu:S=Pd;break;case"scroll":S=fd;break;case"wheel":S=Dd;break;case"copy":case"cut":case"paste":S=xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ts}var N=(t&4)!==0,R=!N&&e==="scroll",f=N?v!==null?v+"Capture":null:v;N=[];for(var c=d,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Vn(c,f),x!=null&&N.push(Gn(c,x,p)))),R)break;c=c.return}0<N.length&&(v=new S(v,j,null,n,h),g.push({event:v,listeners:N}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",v&&n!==si&&(j=n.relatedTarget||n.fromElement)&&(Lt(j)||j[nt]))break e;if((S||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,S?(j=n.relatedTarget||n.toElement,S=d,j=j?Lt(j):null,j!==null&&(R=Ut(j),j!==R||j.tag!==5&&j.tag!==6)&&(j=null)):(S=null,j=d),S!==j)){if(N=bo,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(N=ts,x="onPointerLeave",f="onPointerEnter",c="pointer"),R=S==null?v:Gt(S),p=j==null?v:Gt(j),v=new N(x,c+"leave",S,n,h),v.target=R,v.relatedTarget=p,x=null,Lt(h)===d&&(N=new N(f,c+"enter",j,n,h),N.target=p,N.relatedTarget=R,x=N),R=x,S&&j)t:{for(N=S,f=j,c=0,p=N;p;p=Ht(p))c++;for(p=0,x=f;x;x=Ht(x))p++;for(;0<c-p;)N=Ht(N),c--;for(;0<p-c;)f=Ht(f),p--;for(;c--;){if(N===f||f!==null&&N===f.alternate)break t;N=Ht(N),f=Ht(f)}N=null}else N=null;S!==null&&fs(g,v,S,N,!1),j!==null&&R!==null&&fs(g,R,j,N,!0)}}e:{if(v=d?Gt(d):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var w=Ud;else if(ls(v))if(Ga)w=Wd;else{w=Hd;var C=Vd}else(S=v.nodeName)&&S.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(w=Bd);if(w&&(w=w(e,d))){Ya(g,w,n,h);break e}C&&C(e,v,d),e==="focusout"&&(C=v._wrapperState)&&C.controlled&&v.type==="number"&&ni(v,"number",v.value)}switch(C=d?Gt(d):window,e){case"focusin":(ls(C)||C.contentEditable==="true")&&(Kt=C,mi=d,In=null);break;case"focusout":In=mi=Kt=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,us(g,n,h);break;case"selectionchange":if(Yd)break;case"keydown":case"keyup":us(g,n,h)}var m;if(io)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Qt?Qa(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Wa&&n.locale!=="ko"&&(Qt||y!=="onCompositionStart"?y==="onCompositionEnd"&&Qt&&(m=Ba()):(dt=h,no="value"in dt?dt.value:dt.textContent,Qt=!0)),C=Br(d,y),0<C.length&&(y=new es(y,e,null,n,h),g.push({event:y,listeners:C}),m?y.data=m:(m=Ka(n),m!==null&&(y.data=m)))),(m=Rd?Od(e,n):Fd(e,n))&&(d=Br(d,"onBeforeInput"),0<d.length&&(h=new es("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=m))}lu(g,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Vn(e,n),i!=null&&r.unshift(Gn(e,i,l)),i=Vn(e,t),i!=null&&r.push(Gn(e,i,l))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,l?(u=Vn(n,i),u!=null&&o.unshift(Gn(n,u,a))):l||(u=Vn(n,i),u!=null&&o.push(Gn(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jd=/\r\n?/g,qd=/\u0000|\uFFFD/g;function ps(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(qd,"")}function gr(e,t,n){if(t=ps(t),ps(e)!==t&&n)throw Error(k(425))}function Wr(){}var vi=null,gi=null;function yi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=typeof setTimeout=="function"?setTimeout:void 0,bd=typeof clearTimeout=="function"?clearTimeout:void 0,ms=typeof Promise=="function"?Promise:void 0,ef=typeof queueMicrotask=="function"?queueMicrotask:typeof ms<"u"?function(e){return ms.resolve(null).then(e).catch(tf)}:xi;function tf(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Wn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Wn(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+gn,Xn="__reactProps$"+gn,nt="__reactContainer$"+gn,wi="__reactEvents$"+gn,nf="__reactListeners$"+gn,rf="__reactHandles$"+gn;function Lt(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hs(e);e!==null;){if(n=e[Qe])return n;e=hs(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[Qe]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function dl(e){return e[Xn]||null}var ki=[],Xt=-1;function jt(e){return{current:e}}function Q(e){0>Xt||(e.current=ki[Xt],ki[Xt]=null,Xt--)}function B(e,t){Xt++,ki[Xt]=e.current,e.current=t}var St={},pe=jt(St),we=jt(!1),It=St;function un(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ke(e){return e=e.childContextTypes,e!=null}function Qr(){Q(we),Q(pe)}function vs(e,t,n){if(pe.current!==St)throw Error(k(168));B(pe,t),B(we,n)}function ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,Vc(e)||"Unknown",l));return Z({},n,r)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,It=pe.current,B(pe,e),B(we,we.current),!0}function gs(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=ou(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,Q(we),Q(pe),B(pe,e)):Q(we),B(we,n)}var Je=null,fl=!1,$l=!1;function su(e){Je===null?Je=[e]:Je.push(e)}function lf(e){fl=!0,su(e)}function Ct(){if(!$l&&Je!==null){$l=!0;var e=0,t=V;try{var n=Je;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Je=null,fl=!1}catch(l){throw Je!==null&&(Je=Je.slice(e+1)),Ma(qi,Ct),l}finally{V=t,$l=!1}}return null}var Zt=[],Jt=0,Yr=null,Gr=0,Le=[],Te=0,Rt=null,qe=1,be="";function Et(e,t){Zt[Jt++]=Gr,Zt[Jt++]=Yr,Yr=e,Gr=t}function au(e,t,n){Le[Te++]=qe,Le[Te++]=be,Le[Te++]=Rt,Rt=e;var r=qe;e=be;var l=32-$e(r)-1;r&=~(1<<l),n+=1;var i=32-$e(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,qe=1<<32-$e(t)+l|n<<l|r,be=i+e}else qe=1<<i|n<<l|r,be=e}function so(e){e.return!==null&&(Et(e,1),au(e,1,0))}function ao(e){for(;e===Yr;)Yr=Zt[--Jt],Zt[Jt]=null,Gr=Zt[--Jt],Zt[Jt]=null;for(;e===Rt;)Rt=Le[--Te],Le[Te]=null,be=Le[--Te],Le[Te]=null,qe=Le[--Te],Le[Te]=null}var Ce=null,je=null,K=!1,Ae=null;function uu(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ys(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,je=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rt!==null?{id:qe,overflow:be}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,je=null,!0):!1;default:return!1}}function Si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ni(e){if(K){var t=je;if(t){var n=t;if(!ys(e,t)){if(Si(e))throw Error(k(418));t=vt(n.nextSibling);var r=Ce;t&&ys(e,t)?uu(r,n):(e.flags=e.flags&-4097|2,K=!1,Ce=e)}}else{if(Si(e))throw Error(k(418));e.flags=e.flags&-4097|2,K=!1,Ce=e}}}function xs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function yr(e){if(e!==Ce)return!1;if(!K)return xs(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yi(e.type,e.memoizedProps)),t&&(t=je)){if(Si(e))throw cu(),Error(k(418));for(;t;)uu(e,t),t=vt(t.nextSibling)}if(xs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Ce?vt(e.stateNode.nextSibling):null;return!0}function cu(){for(var e=je;e;)e=vt(e.nextSibling)}function cn(){je=Ce=null,K=!1}function uo(e){Ae===null?Ae=[e]:Ae.push(e)}var of=it.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function xr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ws(e){var t=e._init;return t(e._payload)}function du(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=wt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,x){return c===null||c.tag!==6?(c=Kl(p,f.mode,x),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,x){var w=p.type;return w===Wt?h(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===st&&ws(w)===c.type)?(x=l(c,p.props),x.ref=Nn(f,c,p),x.return=f,x):(x=Rr(p.type,p.key,p.props,null,f.mode,x),x.ref=Nn(f,c,p),x.return=f,x)}function d(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Yl(p,f.mode,x),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function h(f,c,p,x,w){return c===null||c.tag!==7?(c=Dt(p,f.mode,x,w),c.return=f,c):(c=l(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Kl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ar:return p=Rr(c.type,c.key,c.props,null,f.mode,p),p.ref=Nn(f,null,c),p.return=f,p;case Bt:return c=Yl(c,f.mode,p),c.return=f,c;case st:var x=c._init;return g(f,x(c._payload),p)}if(En(c)||yn(c))return c=Dt(c,f.mode,p,null),c.return=f,c;xr(f,c)}return null}function v(f,c,p,x){var w=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return w!==null?null:a(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ar:return p.key===w?u(f,c,p,x):null;case Bt:return p.key===w?d(f,c,p,x):null;case st:return w=p._init,v(f,c,w(p._payload),x)}if(En(p)||yn(p))return w!==null?null:h(f,c,p,x,null);xr(f,p)}return null}function S(f,c,p,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,a(c,f,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ar:return f=f.get(x.key===null?p:x.key)||null,u(c,f,x,w);case Bt:return f=f.get(x.key===null?p:x.key)||null,d(c,f,x,w);case st:var C=x._init;return S(f,c,p,C(x._payload),w)}if(En(x)||yn(x))return f=f.get(p)||null,h(c,f,x,w,null);xr(c,x)}return null}function j(f,c,p,x){for(var w=null,C=null,m=c,y=c=0,L=null;m!==null&&y<p.length;y++){m.index>y?(L=m,m=null):L=m.sibling;var z=v(f,m,p[y],x);if(z===null){m===null&&(m=L);break}e&&m&&z.alternate===null&&t(f,m),c=i(z,c,y),C===null?w=z:C.sibling=z,C=z,m=L}if(y===p.length)return n(f,m),K&&Et(f,y),w;if(m===null){for(;y<p.length;y++)m=g(f,p[y],x),m!==null&&(c=i(m,c,y),C===null?w=m:C.sibling=m,C=m);return K&&Et(f,y),w}for(m=r(f,m);y<p.length;y++)L=S(m,f,y,p[y],x),L!==null&&(e&&L.alternate!==null&&m.delete(L.key===null?y:L.key),c=i(L,c,y),C===null?w=L:C.sibling=L,C=L);return e&&m.forEach(function(A){return t(f,A)}),K&&Et(f,y),w}function N(f,c,p,x){var w=yn(p);if(typeof w!="function")throw Error(k(150));if(p=w.call(p),p==null)throw Error(k(151));for(var C=w=null,m=c,y=c=0,L=null,z=p.next();m!==null&&!z.done;y++,z=p.next()){m.index>y?(L=m,m=null):L=m.sibling;var A=v(f,m,z.value,x);if(A===null){m===null&&(m=L);break}e&&m&&A.alternate===null&&t(f,m),c=i(A,c,y),C===null?w=A:C.sibling=A,C=A,m=L}if(z.done)return n(f,m),K&&Et(f,y),w;if(m===null){for(;!z.done;y++,z=p.next())z=g(f,z.value,x),z!==null&&(c=i(z,c,y),C===null?w=z:C.sibling=z,C=z);return K&&Et(f,y),w}for(m=r(f,m);!z.done;y++,z=p.next())z=S(m,f,y,z.value,x),z!==null&&(e&&z.alternate!==null&&m.delete(z.key===null?y:z.key),c=i(z,c,y),C===null?w=z:C.sibling=z,C=z);return e&&m.forEach(function(I){return t(f,I)}),K&&Et(f,y),w}function R(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ar:e:{for(var w=p.key,C=c;C!==null;){if(C.key===w){if(w=p.type,w===Wt){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===st&&ws(w)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=Nn(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Wt?(c=Dt(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=Rr(p.type,p.key,p.props,null,f.mode,x),x.ref=Nn(f,c,p),x.return=f,f=x)}return o(f);case Bt:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Yl(p,f.mode,x),c.return=f,f=c}return o(f);case st:return C=p._init,R(f,c,C(p._payload),x)}if(En(p))return j(f,c,p,x);if(yn(p))return N(f,c,p,x);xr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=Kl(p,f.mode,x),c.return=f,f=c),o(f)):n(f,c)}return R}var dn=du(!0),fu=du(!1),Xr=jt(null),Zr=null,qt=null,co=null;function fo(){co=qt=Zr=null}function po(e){var t=Xr.current;Q(Xr),e._currentValue=t}function ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){Zr=e,co=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(co!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(Zr===null)throw Error(k(308));qt=e,Zr.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var Tt=null;function mo(e){Tt===null?Tt=[e]:Tt.push(e)}function pu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,mo(t)):(n.next=l.next,l.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,rt(e,n)}return l=r.interleaved,l===null?(t.next=t,mo(r)):(t.next=l.next,l.next=t),r.interleaved=t,rt(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bi(e,n)}}function ks(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jr(e,t,n,r){var l=e.updateQueue;at=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=u))}if(i!==null){var g=l.baseState;o=0,h=d=u=null,a=i;do{var v=a.lane,S=a.eventTime;if((r&v)===v){h!==null&&(h=h.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var j=e,N=a;switch(v=t,S=n,N.tag){case 1:if(j=N.payload,typeof j=="function"){g=j.call(S,g,v);break e}g=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=N.payload,v=typeof j=="function"?j.call(S,g,v):j,v==null)break e;g=Z({},g,v);break e;case 2:at=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[a]:v.push(a))}else S={eventTime:S,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=S,u=g):h=h.next=S,o|=v;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;v=a,a=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);if(h===null&&(u=g),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ft|=o,e.lanes=o,e.memoizedState=g}}function Ss(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var or={},Ye=jt(or),Zn=jt(or),Jn=jt(or);function Pt(e){if(e===or)throw Error(k(174));return e}function vo(e,t){switch(B(Jn,t),B(Zn,e),B(Ye,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:li(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=li(t,e)}Q(Ye),B(Ye,t)}function fn(){Q(Ye),Q(Zn),Q(Jn)}function hu(e){Pt(Jn.current);var t=Pt(Ye.current),n=li(t,e.type);t!==n&&(B(Zn,e),B(Ye,n))}function go(e){Zn.current===e&&(Q(Ye),Q(Zn))}var G=jt(0);function qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function yo(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Tr=it.ReactCurrentDispatcher,Vl=it.ReactCurrentBatchConfig,Ot=0,X=null,ne=null,le=null,br=!1,Rn=!1,qn=0,sf=0;function ce(){throw Error(k(321))}function xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,l,i){if(Ot=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Tr.current=e===null||e.memoizedState===null?df:ff,e=n(r,l),Rn){i=0;do{if(Rn=!1,qn=0,25<=i)throw Error(k(301));i+=1,le=ne=null,t.updateQueue=null,Tr.current=pf,e=n(r,l)}while(Rn)}if(Tr.current=el,t=ne!==null&&ne.next!==null,Ot=0,le=ne=X=null,br=!1,t)throw Error(k(300));return e}function ko(){var e=qn!==0;return qn=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Ie(){if(ne===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function bn(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ne,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,d=i;do{var h=d.lane;if((Ot&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=g,o=r):u=u.next=g,X.lanes|=h,Ft|=h}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=a,Ve(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,X.lanes|=i,Ft|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ve(i,t.memoizedState)||(xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function vu(){}function gu(e,t){var n=X,r=Ie(),l=t(),i=!Ve(r.memoizedState,l);if(i&&(r.memoizedState=l,xe=!0),r=r.queue,So(wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,er(9,xu.bind(null,n,r,l,t),void 0,null),ie===null)throw Error(k(349));Ot&30||yu(n,t,l)}return l}function yu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xu(e,t,n,r){t.value=n,t.getSnapshot=r,ku(t)&&Su(e)}function wu(e,t,n){return n(function(){ku(t)&&Su(e)})}function ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function Su(e){var t=rt(e,1);t!==null&&Ue(t,e,1,-1)}function Ns(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t.queue=e,e=e.dispatch=cf.bind(null,X,e),[t.memoizedState,e]}function er(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nu(){return Ie().memoizedState}function Pr(e,t,n,r){var l=We();X.flags|=e,l.memoizedState=er(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var l=Ie();r=r===void 0?null:r;var i=void 0;if(ne!==null){var o=ne.memoizedState;if(i=o.destroy,r!==null&&xo(r,o.deps)){l.memoizedState=er(t,n,i,r);return}}X.flags|=e,l.memoizedState=er(1|t,n,i,r)}function js(e,t){return Pr(8390656,8,e,t)}function So(e,t){return pl(2048,8,e,t)}function ju(e,t){return pl(4,2,e,t)}function Cu(e,t){return pl(4,4,e,t)}function _u(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eu(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,_u.bind(null,t,e),n)}function No(){}function zu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tu(e,t,n){return Ot&21?(Ve(n,t)||(n=Ra(),X.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function af(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{V=n,Vl.transition=r}}function Pu(){return Ie().memoizedState}function uf(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mu(e))Du(t,n);else if(n=pu(e,t,n,r),n!==null){var l=he();Ue(n,e,r,l),Iu(n,t,r)}}function cf(e,t,n){var r=xt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))Du(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Ve(a,o)){var u=t.interleaved;u===null?(l.next=l,mo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=pu(e,t,l,r),n!==null&&(l=he(),Ue(n,e,r,l),Iu(n,t,r))}}function Mu(e){var t=e.alternate;return e===X||t!==null&&t===X}function Du(e,t){Rn=br=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Iu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bi(e,n)}}var el={readContext:De,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},df={readContext:De,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:js,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4194308,4,_u.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uf.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Ns,useDebugValue:No,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Ns(!1),t=e[0];return e=af.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,l=We();if(K){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ie===null)throw Error(k(349));Ot&30||yu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,js(wu.bind(null,r,i,e),[e]),r.flags|=2048,er(9,xu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=We(),t=ie.identifierPrefix;if(K){var n=be,r=qe;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ff={readContext:De,useCallback:zu,useContext:De,useEffect:So,useImperativeHandle:Eu,useInsertionEffect:ju,useLayoutEffect:Cu,useMemo:Lu,useReducer:Hl,useRef:Nu,useState:function(){return Hl(bn)},useDebugValue:No,useDeferredValue:function(e){var t=Ie();return Tu(t,ne.memoizedState,e)},useTransition:function(){var e=Hl(bn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:vu,useSyncExternalStore:gu,useId:Pu,unstable_isNewReconciler:!1},pf={readContext:De,useCallback:zu,useContext:De,useEffect:So,useImperativeHandle:Eu,useInsertionEffect:ju,useLayoutEffect:Cu,useMemo:Lu,useReducer:Bl,useRef:Nu,useState:function(){return Bl(bn)},useDebugValue:No,useDeferredValue:function(e){var t=Ie();return ne===null?t.memoizedState=e:Tu(t,ne.memoizedState,e)},useTransition:function(){var e=Bl(bn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:vu,useSyncExternalStore:gu,useId:Pu,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ml={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),l=xt(e),i=et(r,l);i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,l),t!==null&&(Ue(t,e,l,r),Lr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),l=xt(e),i=et(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,l),t!==null&&(Ue(t,e,l,r),Lr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=xt(e),l=et(n,r);l.tag=2,t!=null&&(l.callback=t),t=gt(e,l,r),t!==null&&(Ue(t,e,r,n),Lr(t,e,r))}};function Cs(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(l,i):!0}function Ru(e,t,n){var r=!1,l=St,i=t.contextType;return typeof i=="object"&&i!==null?i=De(i):(l=ke(t)?It:pe.current,r=t.contextTypes,i=(r=r!=null)?un(e,l):St),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function _s(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}function _i(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ho(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=De(i):(i=ke(t)?It:pe.current,l.context=un(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ci(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ml.enqueueReplaceState(l,l.state,null),Jr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Uc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ei(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mf=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,Fi=r),Ei(e,t)},n}function Fu(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ei(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ei(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Es(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=zf.bind(null,e,t,n),t.then(e,e))}function zs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ls(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var hf=it.ReactCurrentOwner,xe=!1;function me(e,t,n,r){t.child=e===null?fu(t,null,n,r):dn(t,e.child,n,r)}function Ts(e,t,n,r,l){n=n.render;var i=t.ref;return on(t,l),r=wo(e,t,n,r,i,l),n=ko(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,lt(e,t,l)):(K&&n&&so(t),t.flags|=1,me(e,t,r,l),t.child)}function Ps(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Po(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Au(e,t,i,r,l)):(e=Rr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(o,r)&&e.ref===t.ref)return lt(e,t,l)}return t.flags|=1,e=wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Au(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Kn(i,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,lt(e,t,l)}return zi(e,t,n,r,l)}function $u(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(en,Ne),Ne|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(en,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(en,Ne),Ne|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(en,Ne),Ne|=r;return me(e,t,l,n),t.child}function Uu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zi(e,t,n,r,l){var i=ke(n)?It:pe.current;return i=un(t,i),on(t,l),n=wo(e,t,n,r,i,l),r=ko(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,lt(e,t,l)):(K&&r&&so(t),t.flags|=1,me(e,t,n,l),t.child)}function Ms(e,t,n,r,l){if(ke(n)){var i=!0;Kr(t)}else i=!1;if(on(t,l),t.stateNode===null)Mr(e,t),Ru(t,n,r),_i(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=De(d):(d=ke(n)?It:pe.current,d=un(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&_s(t,o,r,d),at=!1;var v=t.memoizedState;o.state=v,Jr(t,r,o,l),u=t.memoizedState,a!==r||v!==u||we.current||at?(typeof h=="function"&&(Ci(t,n,h,r),u=t.memoizedState),(a=at||Cs(t,n,a,r,v,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,mu(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Oe(t.type,a),o.props=d,g=t.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=ke(n)?It:pe.current,u=un(t,u));var S=n.getDerivedStateFromProps;(h=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||v!==u)&&_s(t,o,r,u),at=!1,v=t.memoizedState,o.state=v,Jr(t,r,o,l);var j=t.memoizedState;a!==g||v!==j||we.current||at?(typeof S=="function"&&(Ci(t,n,S,r),j=t.memoizedState),(d=at||Cs(t,n,d,r,v,j,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,j,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,j,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),o.props=r,o.state=j,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Li(e,t,n,r,i,l)}function Li(e,t,n,r,l,i){Uu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&gs(t,n,!1),lt(e,t,i);r=t.stateNode,hf.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=dn(t,e.child,null,i),t.child=dn(t,null,a,i)):me(e,t,a,i),t.memoizedState=r.state,l&&gs(t,n,!0),t.child}function Vu(e){var t=e.stateNode;t.pendingContext?vs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vs(e,t.context,!1),vo(e,t.containerInfo)}function Ds(e,t,n,r,l){return cn(),uo(l),t.flags|=256,me(e,t,n,r),t.child}var Ti={dehydrated:null,treeContext:null,retryLane:0};function Pi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hu(e,t,n){var r=t.pendingProps,l=G.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),B(G,l&1),e===null)return Ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=gl(o,r,0,null),e=Dt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Pi(n),t.memoizedState=Ti,e):jo(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return vf(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=wt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=wt(a,i):(i=Dt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Pi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ti,r}return i=e.child,e=i.sibling,r=wt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jo(e,t){return t=gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wr(e,t,n,r){return r!==null&&uo(r),dn(t,e.child,null,n),e=jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(k(422))),wr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=gl({mode:"visible",children:r.children},l,0,null),i=Dt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&dn(t,e.child,null,o),t.child.memoizedState=Pi(o),t.memoizedState=Ti,i);if(!(t.mode&1))return wr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=Wl(i,r,void 0),wr(e,t,o,r)}if(a=(o&e.childLanes)!==0,xe||a){if(r=ie,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,rt(e,l),Ue(r,e,l,-1))}return To(),r=Wl(Error(k(421))),wr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Lf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,je=vt(l.nextSibling),Ce=t,K=!0,Ae=null,e!==null&&(Le[Te++]=qe,Le[Te++]=be,Le[Te++]=Rt,qe=e.id,be=e.overflow,Rt=t),t=jo(t,r.children),t.flags|=4096,t)}function Is(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ji(e.return,t,n)}function Ql(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Bu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(me(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Is(e,n,t);else if(e.tag===19)Is(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(G,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&qr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&qr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ql(t,!0,n,null,i);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gf(e,t,n){switch(t.tag){case 3:Vu(t),cn();break;case 5:hu(t);break;case 1:ke(t.type)&&Kr(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;B(Xr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Hu(e,t,n):(B(G,G.current&1),e=lt(e,t,n),e!==null?e.sibling:null);B(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,$u(e,t,n)}return lt(e,t,n)}var Wu,Mi,Qu,Ku;Wu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mi=function(){};Qu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Pt(Ye.current);var i=null;switch(n){case"input":l=ei(e,l),r=ei(e,r),i=[];break;case"select":l=Z({},l,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":l=ri(e,l),r=ri(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}ii(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&($n.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&($n.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&W("scroll",e),i||a===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Ku=function(e,t,n,r){n!==r&&(t.flags|=4)};function jn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yf(e,t,n){var r=t.pendingProps;switch(ao(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&Qr(),de(t),null;case 3:return r=t.stateNode,fn(),Q(we),Q(pe),yo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(Ui(Ae),Ae=null))),Mi(e,t),de(t),null;case 5:go(t);var l=Pt(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)Qu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return de(t),null}if(e=Pt(Ye.current),yr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Qe]=t,r[Xn]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(l=0;l<Ln.length;l++)W(Ln[l],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Bo(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":Qo(r,i),W("invalid",r)}ii(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&gr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&gr(r.textContent,a,e),l=["children",""+a]):$n.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":ur(r),Wo(r,i,!0);break;case"textarea":ur(r),Ko(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Qe]=t,e[Xn]=r,Wu(e,t,!1,!1),t.stateNode=e;e:{switch(o=oi(n,r),n){case"dialog":W("cancel",e),W("close",e),l=r;break;case"iframe":case"object":case"embed":W("load",e),l=r;break;case"video":case"audio":for(l=0;l<Ln.length;l++)W(Ln[l],e);l=r;break;case"source":W("error",e),l=r;break;case"img":case"image":case"link":W("error",e),W("load",e),l=r;break;case"details":W("toggle",e),l=r;break;case"input":Bo(e,r),l=ei(e,r),W("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":Qo(e,r),l=ri(e,r),W("invalid",e);break;default:l=r}ii(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Na(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ka(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Un(e,u):typeof u=="number"&&Un(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&($n.hasOwnProperty(i)?u!=null&&i==="onScroll"&&W("scroll",e):u!=null&&Yi(e,i,u,o))}switch(n){case"input":ur(e),Wo(e,r,!1);break;case"textarea":ur(e),Ko(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Ku(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Pt(Jn.current),Pt(Ye.current),yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(i=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return de(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&je!==null&&t.mode&1&&!(t.flags&128))cu(),cn(),t.flags|=98560,i=!1;else if(i=yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Qe]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Ae!==null&&(Ui(Ae),Ae=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?re===0&&(re=3):To())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return fn(),Mi(e,t),e===null&&Yn(t.stateNode.containerInfo),de(t),null;case 10:return po(t.type._context),de(t),null;case 17:return ke(t.type)&&Qr(),de(t),null;case 19:if(Q(G),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)jn(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=qr(e),o!==null){for(t.flags|=128,jn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&b()>mn&&(t.flags|=128,r=!0,jn(i,!1),t.lanes=4194304)}else{if(!r)if(e=qr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!K)return de(t),null}else 2*b()-i.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,jn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=b(),t.sibling=null,n=G.current,B(G,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Lo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function xf(e,t){switch(ao(t),t.tag){case 1:return ke(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),Q(we),Q(pe),yo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return go(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return fn(),null;case 10:return po(t.type._context),null;case 22:case 23:return Lo(),null;case 24:return null;default:return null}}var kr=!1,fe=!1,wf=typeof WeakSet=="function"?WeakSet:Set,E=null;function bt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Di(e,t,n){try{n()}catch(r){J(e,t,r)}}var Rs=!1;function kf(e,t){if(vi=Vr,e=Ja(),oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,d=0,h=0,g=e,v=null;t:for(;;){for(var S;g!==n||l!==0&&g.nodeType!==3||(a=o+l),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(S=g.firstChild)!==null;)v=g,g=S;for(;;){if(g===e)break t;if(v===n&&++d===l&&(a=o),v===i&&++h===r&&(u=o),(S=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=S}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(gi={focusedElem:e,selectionRange:n},Vr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var N=j.memoizedProps,R=j.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?N:Oe(t.type,N),R);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){J(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return j=Rs,Rs=!1,j}function On(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Di(t,n,i)}l=l.next}while(l!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ii(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yu(e){var t=e.alternate;t!==null&&(e.alternate=null,Yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[Xn],delete t[wi],delete t[nf],delete t[rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gu(e){return e.tag===5||e.tag===3||e.tag===4}function Os(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}function Oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}var se=null,Fe=!1;function ot(e,t,n){for(n=n.child;n!==null;)Xu(e,t,n),n=n.sibling}function Xu(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:fe||bt(n,t);case 6:var r=se,l=Fe;se=null,ot(e,t,n),se=r,Fe=l,se!==null&&(Fe?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Fe?(e=se,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),Wn(e)):Al(se,n.stateNode));break;case 4:r=se,l=Fe,se=n.stateNode.containerInfo,Fe=!0,ot(e,t,n),se=r,Fe=l;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Di(n,t,o),l=l.next}while(l!==r)}ot(e,t,n);break;case 1:if(!fe&&(bt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,ot(e,t,n),fe=r):ot(e,t,n);break;default:ot(e,t,n)}}function Fs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wf),t.forEach(function(r){var l=Tf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Fe=!1;break e;case 3:se=a.stateNode.containerInfo,Fe=!0;break e;case 4:se=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(se===null)throw Error(k(160));Xu(i,o,l),se=null,Fe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){J(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zu(t,e),t=t.sibling}function Zu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Be(e),r&4){try{On(3,e,e.return),hl(3,e)}catch(N){J(e,e.return,N)}try{On(5,e,e.return)}catch(N){J(e,e.return,N)}}break;case 1:Re(t,e),Be(e),r&512&&n!==null&&bt(n,n.return);break;case 5:if(Re(t,e),Be(e),r&512&&n!==null&&bt(n,n.return),e.flags&32){var l=e.stateNode;try{Un(l,"")}catch(N){J(e,e.return,N)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ya(l,i),oi(a,o);var d=oi(a,i);for(o=0;o<u.length;o+=2){var h=u[o],g=u[o+1];h==="style"?Na(l,g):h==="dangerouslySetInnerHTML"?ka(l,g):h==="children"?Un(l,g):Yi(l,h,g,d)}switch(a){case"input":ti(l,i);break;case"textarea":xa(l,i);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?tn(l,!!i.multiple,S,!1):v!==!!i.multiple&&(i.defaultValue!=null?tn(l,!!i.multiple,i.defaultValue,!0):tn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Xn]=i}catch(N){J(e,e.return,N)}}break;case 6:if(Re(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(N){J(e,e.return,N)}}break;case 3:if(Re(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(N){J(e,e.return,N)}break;case 4:Re(t,e),Be(e);break;case 13:Re(t,e),Be(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Eo=b())),r&4&&Fs(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(d=fe)||h,Re(t,e),fe=d):Re(t,e),Be(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(E=e,h=e.child;h!==null;){for(g=E=h;E!==null;){switch(v=E,S=v.child,v.tag){case 0:case 11:case 14:case 15:On(4,v,v.return);break;case 1:bt(v,v.return);var j=v.stateNode;if(typeof j.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(N){J(r,n,N)}}break;case 5:bt(v,v.return);break;case 22:if(v.memoizedState!==null){$s(g);continue}}S!==null?(S.return=v,E=S):$s(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Sa("display",o))}catch(N){J(e,e.return,N)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(N){J(e,e.return,N)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Re(t,e),Be(e),r&4&&Fs(e);break;case 21:break;default:Re(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gu(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Un(l,""),r.flags&=-33);var i=Os(e);Oi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Os(e);Ri(e,a,o);break;default:throw Error(k(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e,t,n){E=e,Ju(e)}function Ju(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||kr;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||fe;a=kr;var d=fe;if(kr=o,(fe=u)&&!d)for(E=l;E!==null;)o=E,u=o.child,o.tag===22&&o.memoizedState!==null?Us(l):u!==null?(u.return=o,E=u):Us(l);for(;i!==null;)E=i,Ju(i),i=i.sibling;E=l,kr=a,fe=d}As(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,E=i):As(e)}}function As(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ss(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ss(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Wn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}fe||t.flags&512&&Ii(t)}catch(v){J(t,t.return,v)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function $s(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Us(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(u){J(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){J(t,l,u)}}var i=t.return;try{Ii(t)}catch(u){J(t,i,u)}break;case 5:var o=t.return;try{Ii(t)}catch(u){J(t,o,u)}}}catch(u){J(t,t.return,u)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var Nf=Math.ceil,tl=it.ReactCurrentDispatcher,Co=it.ReactCurrentOwner,Me=it.ReactCurrentBatchConfig,F=0,ie=null,te=null,ae=0,Ne=0,en=jt(0),re=0,tr=null,Ft=0,vl=0,_o=0,Fn=null,ye=null,Eo=0,mn=1/0,Ze=null,nl=!1,Fi=null,yt=null,Sr=!1,ft=null,rl=0,An=0,Ai=null,Dr=-1,Ir=0;function he(){return F&6?b():Dr!==-1?Dr:Dr=b()}function xt(e){return e.mode&1?F&2&&ae!==0?ae&-ae:of.transition!==null?(Ir===0&&(Ir=Ra()),Ir):(e=V,e!==0||(e=window.event,e=e===void 0?16:Ha(e.type)),e):1}function Ue(e,t,n,r){if(50<An)throw An=0,Ai=null,Error(k(185));rr(e,n,r),(!(F&2)||e!==ie)&&(e===ie&&(!(F&2)&&(vl|=n),re===4&&ct(e,ae)),Se(e,r),n===1&&F===0&&!(t.mode&1)&&(mn=b()+500,fl&&Ct()))}function Se(e,t){var n=e.callbackNode;id(e,t);var r=Ur(e,e===ie?ae:0);if(r===0)n!==null&&Xo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xo(n),t===1)e.tag===0?lf(Vs.bind(null,e)):su(Vs.bind(null,e)),ef(function(){!(F&6)&&Ct()}),n=null;else{switch(Oa(r)){case 1:n=qi;break;case 4:n=Da;break;case 16:n=$r;break;case 536870912:n=Ia;break;default:n=$r}n=ic(n,qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qu(e,t){if(Dr=-1,Ir=0,F&6)throw Error(k(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Ur(e,e===ie?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ll(e,r);else{t=r;var l=F;F|=2;var i=ec();(ie!==e||ae!==t)&&(Ze=null,mn=b()+500,Mt(e,t));do try{_f();break}catch(a){bu(e,a)}while(!0);fo(),tl.current=i,F=l,te!==null?t=0:(ie=null,ae=0,t=re)}if(t!==0){if(t===2&&(l=di(e),l!==0&&(r=l,t=$i(e,l))),t===1)throw n=tr,Mt(e,0),ct(e,r),Se(e,b()),n;if(t===6)ct(e,r);else{if(l=e.current.alternate,!(r&30)&&!jf(l)&&(t=ll(e,r),t===2&&(i=di(e),i!==0&&(r=i,t=$i(e,i))),t===1))throw n=tr,Mt(e,0),ct(e,r),Se(e,b()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:zt(e,ye,Ze);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=Eo+500-b(),10<t)){if(Ur(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=xi(zt.bind(null,e,ye,Ze),t);break}zt(e,ye,Ze);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-$e(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=b()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nf(r/1960))-r,10<r){e.timeoutHandle=xi(zt.bind(null,e,ye,Ze),r);break}zt(e,ye,Ze);break;case 5:zt(e,ye,Ze);break;default:throw Error(k(329))}}}return Se(e,b()),e.callbackNode===n?qu.bind(null,e):null}function $i(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=ll(e,t),e!==2&&(t=ye,ye=n,t!==null&&Ui(t)),e}function Ui(e){ye===null?ye=e:ye.push.apply(ye,e)}function jf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ve(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~_o,t&=~vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function Vs(e){if(F&6)throw Error(k(327));sn();var t=Ur(e,0);if(!(t&1))return Se(e,b()),null;var n=ll(e,t);if(e.tag!==0&&n===2){var r=di(e);r!==0&&(t=r,n=$i(e,r))}if(n===1)throw n=tr,Mt(e,0),ct(e,t),Se(e,b()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,ye,Ze),Se(e,b()),null}function zo(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(mn=b()+500,fl&&Ct())}}function At(e){ft!==null&&ft.tag===0&&!(F&6)&&sn();var t=F;F|=1;var n=Me.transition,r=V;try{if(Me.transition=null,V=1,e)return e()}finally{V=r,Me.transition=n,F=t,!(F&6)&&Ct()}}function Lo(){Ne=en.current,Q(en)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bd(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(ao(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:fn(),Q(we),Q(pe),yo();break;case 5:go(r);break;case 4:fn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:po(r.type._context);break;case 22:case 23:Lo()}n=n.return}if(ie=e,te=e=wt(e.current,null),ae=Ne=t,re=0,tr=null,_o=vl=Ft=0,ye=Fn=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Tt=null}return e}function bu(e,t){do{var n=te;try{if(fo(),Tr.current=el,br){for(var r=X.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}br=!1}if(Ot=0,le=ne=X=null,Rn=!1,qn=0,Co.current=null,n===null||n.return===null){re=1,tr=t,te=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=ae,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=a,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var v=h.alternate;v?(h.updateQueue=v.updateQueue,h.memoizedState=v.memoizedState,h.lanes=v.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=zs(o);if(S!==null){S.flags&=-257,Ls(S,o,a,i,t),S.mode&1&&Es(i,d,t),t=S,u=d;var j=t.updateQueue;if(j===null){var N=new Set;N.add(u),t.updateQueue=N}else j.add(u);break e}else{if(!(t&1)){Es(i,d,t),To();break e}u=Error(k(426))}}else if(K&&a.mode&1){var R=zs(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ls(R,o,a,i,t),uo(pn(u,a));break e}}i=u=pn(u,a),re!==4&&(re=2),Fn===null?Fn=[i]:Fn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ou(i,u,t);ks(i,f);break e;case 1:a=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(yt===null||!yt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Fu(i,a,t);ks(i,x);break e}}i=i.return}while(i!==null)}nc(n)}catch(w){t=w,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function ec(){var e=tl.current;return tl.current=el,e===null?el:e}function To(){(re===0||re===3||re===2)&&(re=4),ie===null||!(Ft&268435455)&&!(vl&268435455)||ct(ie,ae)}function ll(e,t){var n=F;F|=2;var r=ec();(ie!==e||ae!==t)&&(Ze=null,Mt(e,t));do try{Cf();break}catch(l){bu(e,l)}while(!0);if(fo(),F=n,tl.current=r,te!==null)throw Error(k(261));return ie=null,ae=0,re}function Cf(){for(;te!==null;)tc(te)}function _f(){for(;te!==null&&!Zc();)tc(te)}function tc(e){var t=lc(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?nc(e):te=t,Co.current=null}function nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xf(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=yf(n,t,Ne),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function zt(e,t,n){var r=V,l=Me.transition;try{Me.transition=null,V=1,Ef(e,t,n,r)}finally{Me.transition=l,V=r}return null}function Ef(e,t,n,r){do sn();while(ft!==null);if(F&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(od(e,i),e===ie&&(te=ie=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sr||(Sr=!0,ic($r,function(){return sn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Me.transition,Me.transition=null;var o=V;V=1;var a=F;F|=4,Co.current=null,kf(e,n),Zu(n,e),Kd(gi),Vr=!!vi,gi=vi=null,e.current=n,Sf(n),Jc(),F=a,V=o,Me.transition=i}else e.current=n;if(Sr&&(Sr=!1,ft=e,rl=l),i=e.pendingLanes,i===0&&(yt=null),ed(n.stateNode),Se(e,b()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(nl)throw nl=!1,e=Fi,Fi=null,e;return rl&1&&e.tag!==0&&sn(),i=e.pendingLanes,i&1?e===Ai?An++:(An=0,Ai=e):An=0,Ct(),null}function sn(){if(ft!==null){var e=Oa(rl),t=Me.transition,n=V;try{if(Me.transition=null,V=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,rl=0,F&6)throw Error(k(331));var l=F;for(F|=4,E=e.current;E!==null;){var i=E,o=i.child;if(E.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(E=d;E!==null;){var h=E;switch(h.tag){case 0:case 11:case 15:On(8,h,i)}var g=h.child;if(g!==null)g.return=h,E=g;else for(;E!==null;){h=E;var v=h.sibling,S=h.return;if(Yu(h),h===d){E=null;break}if(v!==null){v.return=S,E=v;break}E=S}}}var j=i.alternate;if(j!==null){var N=j.child;if(N!==null){j.child=null;do{var R=N.sibling;N.sibling=null,N=R}while(N!==null)}}E=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,E=o;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:On(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,E=f;break e}E=i.return}}var c=e.current;for(E=c;E!==null;){o=E;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,E=p;else e:for(o=c;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hl(9,a)}}catch(w){J(a,a.return,w)}if(a===o){E=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,E=x;break e}E=a.return}}if(F=l,Ct(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{V=n,Me.transition=t}}return!1}function Hs(e,t,n){t=pn(n,t),t=Ou(e,t,1),e=gt(e,t,1),t=he(),e!==null&&(rr(e,1,t),Se(e,t))}function J(e,t,n){if(e.tag===3)Hs(e,e,n);else for(;t!==null;){if(t.tag===3){Hs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=pn(n,e),e=Fu(t,e,1),t=gt(t,e,1),e=he(),t!==null&&(rr(t,1,e),Se(t,e));break}}t=t.return}}function zf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ae&n)===n&&(re===4||re===3&&(ae&130023424)===ae&&500>b()-Eo?Mt(e,0):_o|=n),Se(e,t)}function rc(e,t){t===0&&(e.mode&1?(t=fr,fr<<=1,!(fr&130023424)&&(fr=4194304)):t=1);var n=he();e=rt(e,t),e!==null&&(rr(e,t,n),Se(e,n))}function Lf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rc(e,n)}function Tf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),rc(e,n)}var lc;lc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,gf(e,t,n);xe=!!(e.flags&131072)}else xe=!1,K&&t.flags&1048576&&au(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mr(e,t),e=t.pendingProps;var l=un(t,pe.current);on(t,n),l=wo(null,t,r,e,l,n);var i=ko();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,Kr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ho(t),l.updater=ml,t.stateNode=l,l._reactInternals=t,_i(t,r,e,n),t=Li(null,t,r,!0,i,n)):(t.tag=0,K&&i&&so(t),me(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Mf(r),e=Oe(r,e),l){case 0:t=zi(null,t,r,e,n);break e;case 1:t=Ms(null,t,r,e,n);break e;case 11:t=Ts(null,t,r,e,n);break e;case 14:t=Ps(null,t,r,Oe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),zi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ms(e,t,r,l,n);case 3:e:{if(Vu(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,mu(e,t),Jr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=pn(Error(k(423)),t),t=Ds(e,t,r,n,l);break e}else if(r!==l){l=pn(Error(k(424)),t),t=Ds(e,t,r,n,l);break e}else for(je=vt(t.stateNode.containerInfo.firstChild),Ce=t,K=!0,Ae=null,n=fu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===l){t=lt(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return hu(t),e===null&&Ni(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,yi(r,l)?o=null:i!==null&&yi(r,i)&&(t.flags|=32),Uu(e,t),me(e,t,o,n),t.child;case 6:return e===null&&Ni(t),null;case 13:return Hu(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ts(e,t,r,l,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,B(Xr,r._currentValue),r._currentValue=o,i!==null)if(Ve(i.value,o)){if(i.children===l.children&&!we.current){t=lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=et(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ji(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ji(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}me(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,on(t,n),l=De(l),r=r(l),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),Ps(e,t,r,l,n);case 15:return Au(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Mr(e,t),t.tag=1,ke(r)?(e=!0,Kr(t)):e=!1,on(t,n),Ru(t,r,l),_i(t,r,l,n),Li(null,t,r,!0,e,n);case 19:return Bu(e,t,n);case 22:return $u(e,t,n)}throw Error(k(156,t.tag))};function ic(e,t){return Ma(e,t)}function Pf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Pf(e,t,n,r)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mf(e){if(typeof e=="function")return Po(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xi)return 11;if(e===Zi)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Po(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wt:return Dt(n.children,l,i,t);case Gi:o=8,l|=8;break;case Zl:return e=Pe(12,n,t,l|2),e.elementType=Zl,e.lanes=i,e;case Jl:return e=Pe(13,n,t,l),e.elementType=Jl,e.lanes=i,e;case ql:return e=Pe(19,n,t,l),e.elementType=ql,e.lanes=i,e;case ha:return gl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pa:o=10;break e;case ma:o=9;break e;case Xi:o=11;break e;case Zi:o=14;break e;case st:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Pe(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Dt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function gl(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=ha,e.lanes=n,e.stateNode={isHidden:!1},e}function Kl(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Df(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Mo(e,t,n,r,l,i,o,a,u){return e=new Df(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Pe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ho(i),e}function If(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function oc(e){if(!e)return St;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ke(n))return ou(e,n,t)}return t}function sc(e,t,n,r,l,i,o,a,u){return e=Mo(n,r,!0,e,l,i,o,a,u),e.context=oc(null),n=e.current,r=he(),l=xt(n),i=et(r,l),i.callback=t??null,gt(n,i,l),e.current.lanes=l,rr(e,l,r),Se(e,r),e}function yl(e,t,n,r){var l=t.current,i=he(),o=xt(l);return n=oc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(l,t,o),e!==null&&(Ue(e,l,o,i),Lr(e,l,o)),o}function il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Do(e,t){Bs(e,t),(e=e.alternate)&&Bs(e,t)}function Rf(){return null}var ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Io(e){this._internalRoot=e}xl.prototype.render=Io.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));yl(e,t,null,null)};xl.prototype.unmount=Io.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){yl(null,e,null,null)}),t[nt]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=$a();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&Va(e)}};function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ws(){}function Of(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=il(o);i.call(d)}}var o=sc(t,r,e,0,null,!1,!1,"",Ws);return e._reactRootContainer=o,e[nt]=o.current,Yn(e.nodeType===8?e.parentNode:e),At(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=il(u);a.call(d)}}var u=Mo(e,0,!1,null,null,!1,!1,"",Ws);return e._reactRootContainer=u,e[nt]=u.current,Yn(e.nodeType===8?e.parentNode:e),At(function(){yl(t,u,n,r)}),u}function kl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=il(o);a.call(u)}}yl(t,o,e,l)}else o=Of(n,t,e,l,r);return il(o)}Fa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zn(t.pendingLanes);n!==0&&(bi(t,n|1),Se(t,b()),!(F&6)&&(mn=b()+500,Ct()))}break;case 13:At(function(){var r=rt(e,1);if(r!==null){var l=he();Ue(r,e,1,l)}}),Do(e,1)}};eo=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=he();Ue(t,e,134217728,n)}Do(e,134217728)}};Aa=function(e){if(e.tag===13){var t=xt(e),n=rt(e,t);if(n!==null){var r=he();Ue(n,e,t,r)}Do(e,t)}};$a=function(){return V};Ua=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};ai=function(e,t,n){switch(t){case"input":if(ti(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=dl(r);if(!l)throw Error(k(90));ga(r),ti(r,l)}}}break;case"textarea":xa(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};_a=zo;Ea=At;var Ff={usingClientEntryPoint:!1,Events:[ir,Gt,dl,ja,Ca,zo]},Cn={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Af={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ta(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{sl=Nr.inject(Af),Ke=Nr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ff;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ro(t))throw Error(k(200));return If(e,t,null,n)};Ee.createRoot=function(e,t){if(!Ro(e))throw Error(k(299));var n=!1,r="",l=ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Mo(e,1,!1,null,null,n,!1,r,l),e[nt]=t.current,Yn(e.nodeType===8?e.parentNode:e),new Io(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ta(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return At(e)};Ee.hydrate=function(e,t,n){if(!wl(t))throw Error(k(200));return kl(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Ro(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=ac;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=sc(t,null,e,1,n??null,l,!1,i,o),e[nt]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xl(t)};Ee.render=function(e,t,n){if(!wl(t))throw Error(k(200));return kl(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!wl(e))throw Error(k(40));return e._reactRootContainer?(At(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Ee.unstable_batchedUpdates=zo;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return kl(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc)}catch(e){console.error(e)}}uc(),ua.exports=Ee;var $f=ua.exports,cc,Qs=$f;cc=Qs.createRoot,Qs.hydrateRoot;/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=e=>{const t=Vf(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Bf=M.createContext({}),Wf=()=>M.useContext(Bf),Qf=M.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...a},u)=>{const{size:d=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,color:v="currentColor",className:S=""}=Wf()??{},j=r??g?Number(n??h)*24/Number(t??d):n??h;return M.createElement("svg",{ref:u,...Gl,width:t??d??Gl.width,height:t??d??Gl.height,stroke:e??v,strokeWidth:j,className:dc("lucide",S,l),...!i&&!Hf(a)&&{"aria-hidden":"true"},...a},[...o.map(([N,R])=>M.createElement(N,R)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(e,t)=>{const n=M.forwardRef(({className:r,...l},i)=>M.createElement(Qf,{ref:i,iconNode:t,className:dc(`lucide-${Uf(Ks(e))}`,`lucide-${e}`,r),...l}));return n.displayName=Ks(e),n};/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Yf=Y("activity",Kf);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],Xf=Y("chart-no-axes-column",Gf);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Jf=Y("circle-check-big",Zf);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],bf=Y("circle-question-mark",qf);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],tp=Y("compass",ep);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],rp=Y("database",np);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ip=Y("download",lp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],sp=Y("file-check",op);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],up=Y("file-text",ap);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],Ys=Y("git-merge",cp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],fp=Y("info",dp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],mp=Y("layers",pp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],vp=Y("lightbulb",hp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],yp=Y("moon",gp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],wp=Y("play",xp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],Sp=Y("presentation",kp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],jp=Y("refresh-cw",Np);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],_p=Y("search",Cp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],zp=Y("server",Ep);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Tp=Y("settings",Lp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Mp=Y("shield-alert",Pp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ip=Y("sparkles",Dp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Op=Y("sun",Rp);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Ap=Y("upload",Fp);function $p({activeTab:e,setActiveTab:t}){const[n,r]=M.useState("dark");M.useEffect(()=>{document.documentElement.setAttribute("data-theme",n)},[n]);const l=()=>{r(o=>o==="dark"?"light":"dark")},i=[{id:"presentation",label:"Slide Deck",icon:Sp},{id:"visualizations",label:"Visualization Hub",icon:mp},{id:"playground",label:"Comparison Playground",icon:Yf}];return s.jsxs("aside",{className:"sidebar-container",children:[s.jsxs("div",{className:"sidebar-brand",children:[s.jsx("div",{className:"brand-logo",children:"📊"}),s.jsxs("div",{className:"brand-text",children:[s.jsx("h2",{children:"Thematic Portal"}),s.jsx("p",{children:"AI Analysis Engine"})]})]}),s.jsx("nav",{className:"sidebar-nav",children:i.map(o=>{const a=o.icon,u=e===o.id;return s.jsxs("button",{onClick:()=>t(o.id),className:`sidebar-nav-btn ${u?"active":""}`,children:[s.jsx(a,{size:20,className:"nav-btn-icon"}),s.jsx("span",{children:o.label}),u&&s.jsx("div",{className:"active-indicator"})]},o.id)})}),s.jsx("div",{className:"sidebar-footer",children:s.jsxs("button",{onClick:l,className:"theme-toggle-btn",title:"Toggle Light/Dark Mode",children:[n==="dark"?s.jsx(Op,{size:18}):s.jsx(yp,{size:18}),s.jsx("span",{children:n==="dark"?"Light Mode":"Dark Mode"})]})}),s.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .sidebar-container {
          width: 280px;
          background: var(--bg-sidebar);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 2rem 1.5rem;
          height: 100vh;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .sidebar-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .brand-logo {
          font-size: 2.25rem;
          line-height: 1;
        }

        .brand-text h2 {
          font-size: 1.25rem;
          font-family: var(--font-display);
          color: var(--text-primary);
        }

        .brand-text p {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        .sidebar-nav-btn {
          width: 100%;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          cursor: pointer;
          border-radius: 12px;
          transition: all var(--transition-speed);
          position: relative;
          text-align: left;
        }

        .sidebar-nav-btn:hover {
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-primary);
        }

        .sidebar-nav-btn.active {
          background: rgba(59, 130, 246, 0.12);
          border-color: rgba(59, 130, 246, 0.15);
          color: var(--color-primary);
          font-weight: 600;
        }

        .nav-btn-icon {
          flex-shrink: 0;
        }

        .active-indicator {
          position: absolute;
          right: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-primary);
          box-shadow: 0 0 10px var(--color-primary);
        }

        .sidebar-footer {
          margin-top: auto;
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
        }

        .theme-toggle-btn {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          border-radius: 10px;
          cursor: pointer;
          transition: all var(--transition-speed);
        }

        .theme-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--border-hover);
          color: var(--text-primary);
        }
      `}})]})}function Gs(){const[e,t]=M.useState("summary"),[n,r]=M.useState(0),l=[{id:"summary",title:"Executive Summary",icon:tp},{id:"pipeline",title:"The Core Pipeline",icon:Ys},{id:"dashboard",title:"Dashboard Explorer",icon:rp},{id:"demo",title:"Demo Guide & Pro Tips",icon:Tp}],i=[{title:"Step 1: Pre-processing & Splitting",description:'Filters out non-English feedback and splits pipe-separated sentences (e.g. "1. Lack of toilets | 2. Distance of school is far") into individual, clean objective statements to ensure precise mapping.',icon:up,badge:"Data Cleansing"},{title:"Step 2: Multi-Vector Semantic Mapping",description:"Computes mathematical representation vectors (Embeddings) of the text. Approved themes are represented as multi-vectors consisting of the theme's description, keywords, and examples. Mapped instantly if similarity exceeds threshold.",icon:Ys,badge:"Vector Search"},{title:"Step 3: TriTopic Clustering",description:"Any feedback that does not match an approved theme falls into the Unmapped Pool. TriTopic automatically processes this pool, identifies recurring patterns, and groups them into new candidate clusters.",icon:o,badge:"Unsupervised Clustering"},{title:"Step 4: LLM-Powered Draft Naming",description:"Google Gemini acts as an educational researcher: reviews samples from the cluster, generates a concise name, writes a comprehensive definition detailing semantic boundaries, and extracts keywords.",icon:Jf,badge:"AI Labeling & Synthesis"}];function o(u){return s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...u,children:[s.jsx("path",{d:"m12 3-10 5 10 5 10-5-10-5Z"}),s.jsx("path",{d:"m2 17 10 5 10-5"}),s.jsx("path",{d:"m2 12 10 5 10-5"})]})}const a=()=>{switch(e){case"summary":return s.jsxs("div",{className:"chapter-content fade-in-slide",children:[s.jsx("h1",{className:"chapter-title",children:"📊 AI-Powered Thematic Analysis System"}),s.jsx("p",{className:"chapter-subtitle",children:"Interactive Explorer for Topic Extraction, Semantic Mapping, and Thematic Clusters"}),s.jsxs("div",{className:"glass-panel summary-hero",children:[s.jsx("h3",{children:"Executive Summary"}),s.jsxs("p",{children:["In educational research and community feedback, analyzing thousands of written statements manually is slow and inconsistent. Our system combines ",s.jsx("strong",{children:"Sentence Transformers (semantic embeddings)"}),", ",s.jsx("strong",{children:"TriTopic (advanced topic clustering)"}),", and ",s.jsx("strong",{children:"Large Language Models (LLMs)"})," to organize raw text data into an organized thematic structure."]})]}),s.jsxs("div",{className:"glass-panel pipeline-flow-card",children:[s.jsx("h3",{children:"Visual Flowchart"}),s.jsxs("div",{className:"flow-steps-grid",children:[s.jsx("div",{className:"flow-node",children:s.jsx("div",{className:"node-box",children:"Raw CSV Objectives"})}),s.jsx("div",{className:"flow-arrow",children:"⬇️"}),s.jsx("div",{className:"flow-node",children:s.jsx("div",{className:"node-box accent",children:"1. English Filter & Splitter"})}),s.jsx("div",{className:"flow-arrow",children:"⬇️"}),s.jsx("div",{className:"flow-node",children:s.jsx("div",{className:"node-box",children:"Clean English Statements"})}),s.jsx("div",{className:"flow-arrow",children:"⬇️"}),s.jsxs("div",{className:"flow-split",children:[s.jsxs("div",{className:"split-branch",children:[s.jsx("div",{className:"branch-label",children:"Cosine Similarity ≥ Threshold"}),s.jsx("div",{className:"node-box success",children:"2. Mapped to Approved Themes"})]}),s.jsxs("div",{className:"split-branch",children:[s.jsx("div",{className:"branch-label",children:"Similarity < Threshold"}),s.jsx("div",{className:"node-box warning",children:"3. TriTopic Topic Clustering"}),s.jsx("div",{className:"flow-arrow",style:{margin:"0.5rem 0"},children:"⬇️"}),s.jsx("div",{className:"node-box warning",children:"4. LLM Naming & Definition"})]})]})]})]})]});case"pipeline":return s.jsxs("div",{className:"chapter-content fade-in-slide",children:[s.jsx("h1",{className:"chapter-title",children:"🛠️ The Core Pipeline"}),s.jsx("p",{className:"chapter-subtitle",children:"Bridging raw data annotation with semantic discovery and LLM labeling"}),s.jsxs("div",{className:"pipeline-wizard glass-panel",children:[s.jsx("div",{className:"wizard-tabs",children:i.map((u,d)=>{u.icon;const h=n===d;return s.jsxs("button",{onClick:()=>r(d),className:`wizard-tab-btn ${h?"active":""}`,children:[s.jsx("div",{className:"tab-btn-num",children:d+1}),s.jsx("span",{children:u.title.split(":")[0]})]},d)})}),s.jsx("div",{className:"wizard-pane",children:(()=>{const u=i[n],d=u.icon;return s.jsxs("div",{className:"wizard-step-details fade-in-slide",children:[s.jsxs("div",{className:"step-header",children:[s.jsx("div",{className:"step-icon-wrapper",children:s.jsx(d,{size:24})}),s.jsxs("div",{children:[s.jsx("span",{className:"step-badge",children:u.badge}),s.jsx("h3",{children:u.title})]})]}),s.jsx("p",{className:"step-desc",children:u.description})]},n)})()})]}),s.jsxs("div",{className:"glass-panel",style:{marginTop:"1rem"},children:[s.jsx("h3",{children:"Pipeline Highlights"}),s.jsxs("ul",{className:"styled-list",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Dynamic Splitting:"})," Complex multiple statements split using delimiter token matching to evaluate statements separately."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Multi-Vector Matching:"})," Semantic profiles representing themes by descriptions and examples to resolve synonyms."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Gemini Refinement:"})," Generates academic-grade definitions outlining what is inside or outside the theme's boundary."]})]})]})]});case"dashboard":return s.jsxs("div",{className:"chapter-content fade-in-slide",children:[s.jsx("h1",{className:"chapter-title",children:"📊 Dashboard Explorer"}),s.jsx("p",{className:"chapter-subtitle",children:"Interactive research utilities configured for the product portal"}),s.jsxs("div",{className:"dashboard-grid",children:[s.jsxs("div",{className:"glass-panel dash-feature-card",children:[s.jsx("div",{className:"dash-icon-circle",children:"📁"}),s.jsx("h4",{children:"Themes Explorer"}),s.jsx("p",{children:"Browse approved and draft themes in an interactive table. Select themes to inspect mapped statements and scores."})]}),s.jsxs("div",{className:"glass-panel dash-feature-card",children:[s.jsx("div",{className:"dash-icon-circle",children:"🗺️"}),s.jsx("h4",{children:"2D Document Map"}),s.jsx("p",{children:"Interactive projection mapping objectives in 2D space based on embeddings. Hover over points to read raw statements."})]}),s.jsxs("div",{className:"glass-panel dash-feature-card",children:[s.jsx("div",{className:"dash-icon-circle",children:"🌳"}),s.jsx("h4",{children:"Topic Hierarchy Dendrogram"}),s.jsx("p",{children:"Hierarchical clustering tree representing the relative cosine distances between theme centroid embeddings."})]}),s.jsxs("div",{className:"glass-panel dash-feature-card",children:[s.jsx("div",{className:"dash-icon-circle",children:"🔥"}),s.jsx("h4",{children:"Centroid Similarity Heatmap"}),s.jsx("p",{children:"Heatmap matrix comparing cosine similarity overlaps between different topic and theme centroid embeddings."})]})]})]});case"demo":return s.jsxs("div",{className:"chapter-content fade-in-slide",children:[s.jsx("h1",{className:"chapter-title",children:"⚙️ Demo Guide & Pro Tips"}),s.jsx("p",{className:"chapter-subtitle",children:"Practical concepts to demonstrate and pipeline configurations"}),s.jsxs("div",{className:"glass-panel",style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[s.jsx("h3",{children:"1. The Power of the Similarity Threshold"}),s.jsx("p",{children:"Explain how changing the similarity threshold (e.g., from 0.90 to 0.60) affects mappings:"}),s.jsxs("div",{className:"threshold-demo-box",children:[s.jsxs("div",{className:"threshold-card high",children:[s.jsx("div",{className:"card-badge",children:"Strict"}),s.jsx("h4",{children:"High Threshold (0.90)"}),s.jsx("p",{children:"Extremely strict mapping. Approved themes get very few matches. Many specific draft themes are created."})]}),s.jsxs("div",{className:"threshold-card moderate",children:[s.jsx("div",{className:"card-badge",children:"Balanced"}),s.jsx("h4",{children:"Moderate Threshold (0.60 - 0.65)"}),s.jsx("p",{children:"Generous mapping. Captures broader context, resulting in fewer draft themes and higher approved theme counts."})]})]}),s.jsx("h3",{children:"2. Pro Tips for Curation"}),s.jsxs("div",{className:"alert-banner success",children:[s.jsx(vp,{size:24,className:"alert-banner-icon"}),s.jsxs("div",{className:"alert-banner-content",children:[s.jsx("h4",{children:"💡 Pro Tip for Curating Approved Themes"}),s.jsx("p",{children:`If statements are failing to map to an Approved Theme, add 8-15 diverse example sentences directly into the theme's definition. The multi-vector matcher uses these examples as "anchors", drastically improving recognition accuracy without code changes!`})]})]}),s.jsxs("div",{className:"alert-banner info",children:[s.jsx(Mp,{size:24,className:"alert-banner-icon"}),s.jsxs("div",{className:"alert-banner-content",children:[s.jsx("h4",{children:"📝 Note: UUID Assignment"}),s.jsx("p",{children:"All draft themes generated offline in Kaggle are given blank IDs in the review CSV. When they are approved and imported, the database automatically assigns them a persistent UUID."})]})]})]})]});default:return null}};return s.jsxs("div",{className:"presentation-layout",children:[s.jsx("div",{className:"presentation-nav",children:l.map(u=>{const d=u.icon,h=e===u.id;return s.jsxs("button",{onClick:()=>t(u.id),className:`chap-btn ${h?"active":""}`,children:[s.jsx(d,{size:18}),s.jsx("span",{children:u.title})]},u.id)})}),s.jsx("div",{className:"presentation-content-area",children:a()}),s.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .presentation-layout {
          display: flex;
          gap: 2rem;
          height: calc(100vh - 5rem);
        }

        .presentation-nav {
          width: 240px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.02);
          padding: 1rem;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          height: fit-content;
        }

        .chap-btn {
          width: 100%;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all var(--transition-speed);
          text-align: left;
        }

        .chap-btn:hover {
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-primary);
        }

        .chap-btn.active {
          background: var(--color-primary);
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
        }

        .presentation-content-area {
          flex: 1;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .chapter-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .chapter-title {
          font-family: var(--font-display);
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
        }

        .chapter-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-top: -1rem;
        }

        .summary-hero h3 {
          margin-bottom: 0.75rem;
          color: var(--color-primary);
        }

        .summary-hero p {
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .pipeline-flow-card h3 {
          margin-bottom: 1.5rem;
        }

        .flow-steps-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .node-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 0.75rem 1.5rem;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.95rem;
          text-align: center;
          min-width: 250px;
          box-shadow: var(--shadow-inset);
        }

        .node-box.accent {
          border-color: var(--color-accent);
          color: var(--color-accent);
          background: rgba(99, 102, 241, 0.05);
        }

        .node-box.success {
          border-color: var(--color-success);
          color: var(--color-success);
          background: var(--color-success-bg);
        }

        .node-box.warning {
          border-color: var(--color-warning);
          color: var(--color-warning);
          background: var(--color-warning-bg);
        }

        .flow-arrow {
          font-size: 1.25rem;
        }

        .flow-split {
          display: flex;
          gap: 2rem;
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .split-branch {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .branch-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          font-weight: 600;
          text-align: center;
          min-height: 18px;
        }

        .pipeline-wizard {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.5rem;
        }

        .wizard-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .wizard-tab-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          cursor: pointer;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all var(--transition-speed);
          white-space: nowrap;
        }

        .wizard-tab-btn:hover {
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-primary);
        }

        .wizard-tab-btn.active {
          background: rgba(59, 130, 246, 0.1);
          color: var(--color-primary);
          font-weight: 600;
        }

        .tab-btn-num {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--border-color);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .wizard-tab-btn.active .tab-btn-num {
          background: var(--color-primary);
          color: #ffffff;
        }

        .wizard-pane {
          min-height: 140px;
        }

        .wizard-step-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .step-icon-wrapper {
          background: rgba(59, 130, 246, 0.1);
          color: var(--color-primary);
          padding: 0.75rem;
          border-radius: 12px;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .step-badge {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 700;
        }

        .step-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .styled-list {
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .styled-list li {
          color: var(--text-secondary);
          font-size: 0.925rem;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .dash-feature-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .dash-icon-circle {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .threshold-demo-box {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .threshold-card {
          flex: 1;
          min-width: 250px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .threshold-card.high {
          border-left: 4px solid var(--color-accent);
        }

        .threshold-card.moderate {
          border-left: 4px solid var(--color-primary);
        }

        .card-badge {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
        }
      `}})]})}function Up({threshold:e,chartType:t}){const[n,r]=M.useState(!0),i=`/visualizations/${e}_review_visualizations/${{docMap:"document_map.html",hierarchy:"hierarchy_tree.html",similarity:"topic_similarity.html"}[t]}`;return M.useEffect(()=>{r(!0)},[e,t]),s.jsxs("div",{className:"iframe-container glass-panel",children:[n&&s.jsxs("div",{className:"iframe-loader",children:[s.jsx("div",{className:"loader-spinner"}),s.jsx("p",{children:"Rendering interactive visualization..."})]}),s.jsx("iframe",{src:i,title:`Visualizer - Threshold ${e} - ${t}`,className:`viz-iframe ${n?"hidden":""}`,sandbox:"allow-scripts allow-downloads",onLoad:()=>r(!1)}),s.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .iframe-container {
          position: relative;
          width: 100%;
          height: 750px;
          padding: 0;
          overflow: hidden;
          background: #ffffff;
          border-radius: 16px;
        }

        .iframe-loader {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--bg-card);
          backdrop-filter: var(--glass-blur);
          z-index: 5;
          gap: 1rem;
        }

        .iframe-loader p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .viz-iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: #ffffff;
          transition: opacity 0.3s ease;
        }

        .viz-iframe.hidden {
          opacity: 0;
        }
      `}})]})}function Vp(){const[e,t]=M.useState([]),[n,r]=M.useState(""),[l,i]=M.useState("docMap"),[o,a]=M.useState(null),[u,d]=M.useState([]),[h,g]=M.useState(null),[v,S]=M.useState(""),[j,N]=M.useState(!1);M.useEffect(()=>{fetch("/thresholds.json").then(m=>m.ok?m.json():["0.90","0.65","0.60"]).then(m=>{t(m),m.includes("0.60")?r("0.60"):m.length>0&&r(m[0])}).catch(()=>{t(["0.90","0.65","0.60"]),r("0.60")})},[]),M.useEffect(()=>{n&&(fetch(`/visualizations/${n}_review_visualizations/run_meta.json`).then(m=>m.ok?m.json():null).then(m=>a(m)).catch(()=>a(null)),N(!0),fetch(`/visualizations/${n}_review_visualizations/tritopic_review.csv`).then(m=>m.ok?m.text():"").then(m=>{if(!m){d([]),N(!1);return}const y=R(m);d(y),y.length>0?g(y[0]):g(null),N(!1)}).catch(()=>{d([]),N(!1)}))},[n]);const R=m=>{const y=m.split(/\r?\n/),L=[];if(y.length<=1)return L;const z=f(y[0]),A=z.findIndex(H=>H.toLowerCase()==="theme id"),I=z.findIndex(H=>H.toLowerCase()==="theme name"),O=z.findIndex(H=>H.toLowerCase()==="defination"||H.toLowerCase()==="definition"),ee=z.findIndex(H=>H.toLowerCase()==="keywords"),oe=z.findIndex(H=>H.toLowerCase()==="status"),He=z.findIndex(H=>H.toLowerCase()==="objective count"),Ge=z.findIndex(H=>H.toLowerCase()==="original statements");let _="",T="",P="",$="",q="",_t=0;for(let H=1;H<y.length;H++){const Vt=y[H];if(!Vt.trim())continue;const U=f(Vt);if(U.length===0)continue;U[A]&&U[A].trim()&&(_=U[A].trim()),U[I]&&U[I].trim()&&(T=U[I].trim()),U[O]&&U[O].trim()&&(P=U[O].trim()),U[ee]&&U[ee].trim()&&($=U[ee].trim()),U[oe]&&U[oe].trim()&&(q=U[oe].trim()),U[He]&&U[He].trim()&&(_t=parseInt(U[He].trim())||0);const Xe=U[Ge]?U[Ge].trim():"",Oo=L.find(fc=>fc.themeName===T);Oo?Xe&&Oo.rawStatements.push(Xe):L.push({themeId:_,themeName:T,definition:P,keywords:$,status:q,count:_t,rawStatements:Xe?[Xe]:[]})}return L},f=m=>{const y=[];let L="",z=!1;for(let A=0;A<m.length;A++){const I=m[A];I==='"'?z=!z:I===","&&!z?(y.push(L),L=""):L+=I}return y.push(L),y},c=m=>{if(!m||!m.rawStatements)return[];const y=[];return m.rawStatements.forEach(L=>{const z=String(L).split(" | ");if(z.length>=2){const A=z[0].trim();for(let I=1;I<z.length;I+=2){const O=z[I]?z[I].trim():"",ee=z[I+1]?z[I+1].trim():null,oe=ee?parseFloat(ee):null;O&&y.push({id:A,text:O,score:oe})}}else L.trim()&&y.push({id:"—",text:L.trim(),score:null})}),y};u.length;const p=u.filter(m=>m.status.toLowerCase()==="approved").length;u.filter(m=>m.status.toLowerCase()==="draft").length;const x=u.filter(m=>{const y=m.themeName.toLowerCase().includes(v.toLowerCase()),L=m.keywords.toLowerCase().includes(v.toLowerCase());return y||L}),w=c(h),C=()=>{const y=[["Theme ID","Theme Name","Status","Definition","Keywords","Objective Count","Statement ID","Statement Text","Similarity Score"]];x.forEach(O=>{const ee=c(O),oe=O.themeId||"",He=O.themeName||"",Ge=O.status||"",_=O.definition||"",T=O.keywords||"",P=O.count||0;ee.length===0?y.push([oe,He,Ge,_,T,P,"","",""]):ee.forEach($=>{y.push([oe,He,Ge,_,T,P,$.id||"",$.text||"",$.score!==null?$.score:""])})});const L=y.map(O=>O.map(ee=>{const oe=String(ee??"");return oe.includes(",")||oe.includes('"')||oe.includes(`
`)||oe.includes("\r")?`"${oe.replace(/"/g,'""')}"`:oe}).join(",")).join(`
`),z=new Blob([L],{type:"text/csv;charset=utf-8;"}),A=URL.createObjectURL(z),I=document.createElement("a");I.setAttribute("href",A),I.setAttribute("download",`thematic_explorer_export_threshold_${n}.csv`),I.style.visibility="hidden",document.body.appendChild(I),I.click(),document.body.removeChild(I)};return n?s.jsxs("div",{className:"viz-hub-container fade-in-slide",children:[s.jsxs("div",{className:"viz-header",children:[s.jsx("h1",{children:"📊 Visualization Hub"}),s.jsx("p",{children:"Analyze semantic boundaries, clusters, and run outputs across similarity thresholds"})]}),s.jsxs("div",{className:"selector-panel glass-panel",children:[s.jsxs("div",{className:"selector-group",children:[s.jsx("label",{children:"🎚️ Similarity Threshold"}),s.jsx("div",{className:"tab-buttons",children:e.map(m=>s.jsxs("button",{onClick:()=>r(m),className:`tab-btn ${n===m?"active":""}`,children:["Threshold ",m]},m))})]}),s.jsxs("div",{className:"selector-group",children:[s.jsx("label",{children:"🗺️ Chart Selection"}),s.jsx("div",{className:"tab-buttons",children:[{id:"docMap",label:"2D Document Map"},{id:"hierarchy",label:"Topic Hierarchy"},{id:"similarity",label:"Centroid Similarity"}].map(m=>s.jsx("button",{onClick:()=>i(m.id),className:`tab-btn ${l===m.id?"active":""}`,children:m.label},m.id))})]})]}),o&&s.jsxs("div",{className:"glass-panel stats-panel fade-in-slide",children:[s.jsxs("div",{className:"panel-header",children:[s.jsx(zp,{size:18}),s.jsxs("h3",{children:["Run Statistics for Threshold ",n]}),o.run_timestamp&&s.jsxs("span",{className:"timestamp",children:["📅 Run: ",o.run_timestamp.replace("T"," ")]})]}),s.jsx("div",{className:"stats-section-title",children:"📋 Run Statistics"}),s.jsxs("div",{className:"metrics-grid metrics-5-col",children:[s.jsxs("div",{className:"metric-card",children:[s.jsx("span",{className:"metric-label",children:"Total CSV Rows"}),s.jsx("span",{className:"metric-value",children:(o.total_objectives_in_csv||0).toLocaleString()})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("span",{className:"metric-label",children:"Total Rows Processed"}),s.jsx("span",{className:"metric-value",children:(o.total_objectives_processed||0).toLocaleString()})]}),s.jsxs("div",{className:"metric-card success",children:[s.jsx("span",{className:"metric-label",children:"Total Valid Objectives"}),s.jsx("span",{className:"metric-value",children:(o.total_valid_objectives||o.total_mapped||0).toLocaleString()})]}),s.jsxs("div",{className:"metric-card warning",children:[s.jsx("span",{className:"metric-label",children:"Skipped (Non-English)"}),s.jsx("span",{className:"metric-value",children:(o.skipped_non_english||0).toLocaleString()})]}),s.jsxs("div",{className:"metric-card warning",children:[s.jsx("span",{className:"metric-label",children:"Skipped (Empty)"}),s.jsx("span",{className:"metric-value",children:(o.skipped_empty||0).toLocaleString()})]})]}),s.jsxs("div",{className:"metrics-grid metrics-4-col",style:{marginTop:"1.25rem"},children:[s.jsxs("div",{className:"metric-card success",children:[s.jsx("span",{className:"metric-label",children:"Mapped to Approved Themes"}),s.jsx("span",{className:"metric-value",children:(o.mapped_to_approved_themes||0).toLocaleString()})]}),s.jsxs("div",{className:"metric-card warning",children:[s.jsx("span",{className:"metric-label",children:"Unmapped Objectives"}),s.jsx("span",{className:"metric-value",children:(o.unmapped_after_approved||0).toLocaleString()})]}),s.jsxs("div",{className:"metric-card accent",children:[s.jsx("span",{className:"metric-label",children:"New Candidate Clusters"}),s.jsx("span",{className:"metric-value",children:(o.draft_clusters_identified||0).toLocaleString()})]}),s.jsxs("div",{className:"metric-card accent",children:[s.jsx("span",{className:"metric-label",children:"Clusters > 10 Objectives"}),s.jsx("span",{className:"metric-value",children:(o.clusters_gt_10||0).toLocaleString()})]})]}),s.jsx("div",{className:"stats-section-title",style:{marginTop:"2rem"},children:"🏷️ Theme Summary"}),s.jsxs("div",{className:"metrics-grid metrics-4-col",children:[s.jsxs("div",{className:"metric-card accent",children:[s.jsx("span",{className:"metric-label",children:"Similarity Threshold"}),s.jsx("span",{className:"metric-value",children:n})]}),s.jsxs("div",{className:"metric-card",children:[s.jsx("span",{className:"metric-label",children:"Total Themes"}),s.jsx("span",{className:"metric-value",children:p+(o.draft_clusters_identified||0)})]}),s.jsxs("div",{className:"metric-card success",children:[s.jsx("span",{className:"metric-label",children:"Approved Themes"}),s.jsx("span",{className:"metric-value",children:p})]}),s.jsxs("div",{className:"metric-card warning",children:[s.jsx("span",{className:"metric-label",children:"Draft Candidate Themes"}),s.jsx("span",{className:"metric-value",children:o.draft_clusters_identified})]})]}),s.jsx("div",{className:"meta-footer-details",style:{marginTop:"1.5rem"},children:s.jsxs("span",{children:["Tokens Utilized: ",s.jsx("strong",{children:(o.llm_total_tokens||0).toLocaleString()})," (Prompt: ",(o.llm_prompt_tokens||0).toLocaleString()," · Completion: ",(o.llm_completion_tokens||0).toLocaleString(),")"]})})]},n),s.jsx(Up,{threshold:n,chartType:l}),s.jsxs("div",{className:"themes-explorer-section",children:[s.jsxs("div",{className:"explorer-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsx("h2",{children:"📁 Dynamic Themes Explorer"}),s.jsx("p",{children:"Inspect parsed thematic mappings and statements for active threshold"})]}),s.jsxs("button",{onClick:C,className:"export-btn",children:[s.jsx(ip,{size:16}),"Export CSV"]})]}),s.jsxs("div",{className:"explorer-layout",children:[s.jsxs("div",{className:"themes-table-pane glass-panel",children:[s.jsxs("div",{className:"table-search-bar",children:[s.jsx(_p,{size:18,className:"search-icon"}),s.jsx("input",{type:"text",placeholder:"Search themes or keywords...",value:v,onChange:m=>S(m.target.value)})]}),j?s.jsxs("div",{className:"pane-loader",children:[s.jsx("div",{className:"loader-spinner"}),s.jsx("p",{children:"Parsing CSV output..."})]}):s.jsx("div",{className:"themes-list-wrapper",children:x.length===0?s.jsx("p",{className:"no-results",children:"No themes match search criteria."}):s.jsxs("table",{className:"themes-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Theme Name"}),s.jsx("th",{children:"Status"}),s.jsx("th",{children:"Size"})]})}),s.jsx("tbody",{children:x.map(m=>{const y=h&&h.themeName===m.themeName;return s.jsxs("tr",{onClick:()=>g(m),className:y?"selected":"",children:[s.jsx("td",{children:s.jsxs("div",{className:"theme-table-cell",children:[s.jsx("span",{className:"theme-cell-title",children:m.themeName}),s.jsxs("span",{className:"theme-cell-desc",children:[m.definition.substring(0,75),"..."]})]})}),s.jsx("td",{children:s.jsx("span",{className:`badge ${m.status.toLowerCase()==="approved"?"badge-approved":"badge-draft"}`,children:m.status})}),s.jsx("td",{children:s.jsx("span",{className:"theme-cell-count",children:m.count})})]},m.themeName)})})]})})]}),s.jsx("div",{className:"inspector-pane glass-panel",children:h?s.jsxs("div",{className:"inspector-wrapper fade-in-slide",children:[s.jsxs("div",{className:"inspector-title-area",children:[s.jsxs("span",{className:`badge ${h.status.toLowerCase()==="approved"?"badge-approved":"badge-draft"}`,children:[h.status," Theme"]}),s.jsx("h3",{children:h.themeName})]}),s.jsxs("div",{className:"inspector-metadata",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Definition:"})," ",h.definition]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Keywords:"})," ",s.jsx("span",{className:"keywords-list",children:h.keywords})]})]}),s.jsxs("div",{className:"inspector-statements",children:[s.jsxs("h4",{children:["Mapped Statements (",w.length,")"]}),s.jsx("div",{className:"statements-list",children:w.length===0?s.jsx("p",{className:"no-statements",children:"No statements mapped directly to this theme."}):w.map((m,y)=>s.jsxs("div",{className:"statement-item",children:[s.jsxs("div",{className:"stmt-item-header",children:[s.jsxs("span",{className:"stmt-id",children:["ID: ",m.id]}),m.score!==null&&s.jsxs("span",{className:"stmt-score",children:["Match: ",(m.score*100).toFixed(1),"%"]})]}),s.jsx("p",{className:"stmt-text",children:m.text})]},y))})]})]},h.themeName):s.jsxs("div",{className:"inspector-placeholder",children:[s.jsx(fp,{size:32}),s.jsx("p",{children:"Select a theme from the left table to inspect mapped statements and scores."})]})})]})]}),s.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .viz-hub-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .viz-header h1 {
          color: var(--text-primary);
        }

        .selector-panel {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .selector-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .selector-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .tab-buttons {
          display: flex;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 3px;
        }

        .tab-buttons .tab-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 0.6rem 1.2rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 8px;
          transition: all var(--transition-speed);
        }

        .tab-buttons .tab-btn:hover {
          color: var(--text-primary);
        }

        .tab-buttons .tab-btn.active {
          background: var(--bg-app);
          color: var(--color-primary);
          box-shadow: var(--shadow-premium);
        }

        .stats-panel {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .panel-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .panel-header h3 {
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .panel-header .timestamp {
          margin-left: auto;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .meta-footer-details {
          display: flex;
          gap: 2rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          border-top: 1px solid var(--border-color);
          padding-top: 0.75rem;
        }

        .meta-footer-details strong {
          color: var(--text-primary);
        }

        .themes-explorer-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .explorer-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          min-height: 550px;
        }

        @media (max-width: 992px) {
          .explorer-layout {
            grid-template-columns: 1fr;
          }
        }

        .themes-table-pane {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 600px;
          padding: 1.25rem;
        }

        .table-search-bar {
          position: relative;
          width: 100%;
        }

        .table-search-bar input {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          border-radius: 10px;
          font-size: 0.9rem;
          font-family: var(--font-sans);
          outline: none;
          transition: all var(--transition-speed);
        }

        .table-search-bar input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.15);
        }

        .search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .pane-loader {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          gap: 1rem;
          color: var(--text-secondary);
        }

        .themes-list-wrapper {
          overflow-y: auto;
          flex: 1;
        }

        .themes-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .themes-table th {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          padding: 0.5rem 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .themes-table tbody tr {
          cursor: pointer;
          transition: background-color var(--transition-speed);
          border-bottom: 1px solid var(--border-color);
        }

        .themes-table tbody tr:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .themes-table tbody tr.selected {
          background: rgba(59, 130, 246, 0.08);
        }

        .theme-table-cell {
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .theme-cell-title {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.925rem;
        }

        .theme-cell-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .theme-cell-count {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-primary);
          padding-right: 1rem;
        }

        .no-results {
          color: var(--text-muted);
          text-align: center;
          margin-top: 3rem;
          font-size: 0.95rem;
        }

        .inspector-pane {
          height: 600px;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          overflow-y: auto;
        }

        .inspector-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          gap: 1rem;
          color: var(--text-muted);
          text-align: center;
          max-width: 320px;
          margin: 0 auto;
        }

        .inspector-placeholder p {
          font-size: 0.9rem;
        }

        .inspector-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .inspector-title-area {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }

        .inspector-title-area h3 {
          font-size: 1.5rem;
          font-family: var(--font-display);
          color: var(--text-primary);
        }

        .inspector-metadata {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .keywords-list {
          font-style: italic;
          color: var(--color-primary);
        }

        .inspector-statements {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .inspector-statements h4 {
          font-size: 0.95rem;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .statements-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-height: 280px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }

        .statement-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stmt-item-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .stmt-id {
          color: var(--text-muted);
        }

        .stmt-score {
          color: var(--color-success);
        }

        .stmt-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .no-statements {
          color: var(--text-muted);
          text-align: center;
          padding: 2rem 0;
          font-size: 0.9rem;
        }

        .stats-section-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.25rem;
        }

        .metrics-5-col {
          grid-template-columns: repeat(5, 1fr);
        }

        .metrics-4-col {
          grid-template-columns: repeat(4, 1fr);
        }

        @media (max-width: 1200px) {
          .metrics-5-col {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          }
          .metrics-4-col {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          }
        }

        .export-btn {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: var(--color-primary);
          padding: 0.6rem 1.2rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all var(--transition-speed);
        }

        .export-btn:hover {
          background: var(--color-primary);
          color: white;
          box-shadow: var(--shadow-premium);
        }
      `}})]}):s.jsxs("div",{className:"loader-container",children:[s.jsx("div",{className:"loader-spinner"}),s.jsx("p",{children:"Loading threshold configurations..."})]})}function Xs({label:e,onFileSelect:t,file:n}){const[r,l]=M.useState(!1),i=M.useRef(null),o=h=>{h.preventDefault(),h.stopPropagation(),h.type==="dragenter"||h.type==="dragover"?l(!0):h.type==="dragleave"&&l(!1)},a=h=>{if(h.preventDefault(),h.stopPropagation(),l(!1),h.dataTransfer.files&&h.dataTransfer.files[0]){const g=h.dataTransfer.files[0];g.name.endsWith(".csv")?t(g):alert("Please drop a valid CSV file!")}},u=h=>{h.preventDefault(),h.target.files&&h.target.files[0]&&t(h.target.files[0])},d=()=>{i.current.click()};return s.jsxs("div",{onDragEnter:o,onDragLeave:o,onDragOver:o,onDrop:a,onClick:d,className:`upload-zone glass-panel ${r?"drag-active":""} ${n?"file-loaded":""}`,children:[s.jsx("input",{ref:i,type:"file",className:"hidden-file-input",accept:".csv",onChange:u}),s.jsx("div",{className:"upload-zone-content",children:n?s.jsxs(s.Fragment,{children:[s.jsx(sp,{size:40,className:"upload-icon loaded"}),s.jsx("p",{className:"file-name",children:n.name}),s.jsxs("p",{className:"file-size",children:[(n.size/1024).toFixed(1)," KB"]}),s.jsx("span",{className:"badge badge-approved",children:"CSV Ready"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Ap,{size:40,className:"upload-icon"}),s.jsx("p",{className:"upload-label",children:e}),s.jsx("p",{className:"upload-subtext",children:"Drag & drop or click to browse CSV"})]})}),s.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .upload-zone {
          border: 2px dashed var(--border-color);
          background: var(--bg-card);
          border-radius: 16px;
          padding: 2.5rem 1.5rem;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-speed);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 180px;
        }

        .upload-zone:hover {
          border-color: var(--color-primary);
          background: rgba(59, 130, 246, 0.03);
        }

        .upload-zone.drag-active {
          border-color: var(--color-primary);
          background: rgba(59, 130, 246, 0.08);
          transform: scale(0.98);
        }

        .upload-zone.file-loaded {
          border-style: solid;
          border-color: var(--color-success);
          background: rgba(16, 185, 129, 0.02);
        }

        .hidden-file-input {
          display: none;
        }

        .upload-zone-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .upload-icon {
          color: var(--text-muted);
          transition: color var(--transition-speed);
        }

        .upload-zone:hover .upload-icon {
          color: var(--color-primary);
        }

        .upload-icon.loaded {
          color: var(--color-success);
        }

        .upload-label {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 1rem;
        }

        .upload-subtext {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .file-name {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.9rem;
          max-width: 220px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .file-size {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
      `}})]})}function Zs(e){if(!e)return"";let t=e.trim().toLowerCase();return t.startsWith('"')&&t.endsWith('"')&&(t=t.slice(1,-1).trim()),t.startsWith("'")&&t.endsWith("'")&&(t=t.slice(1,-1).trim()),t=t.replace(/\s+/g," "),t}function Js(e){const t=[];let n="",r=!1,l=[];for(let i=0;i<e.length;i++){const o=e[i],a=e[i+1];o==='"'?r&&a==='"'?(n+='"',i++):r=!r:o===","&&!r?(l.push(n),n=""):(o==="\r"||o===`
`)&&!r?(o==="\r"&&a===`
`&&i++,l.push(n),t.push(l),l=[],n=""):n+=o}return(n||l.length>0)&&(l.push(n),t.push(l)),t}function Hp(e,t,n){const r=new Set(n.map(m=>m.trim().toLowerCase())),l=Js(e),i={},o=new Set;let a=0,u="",d="";for(let m=1;m<l.length;m++){const y=l[m];if(y.length===0||y.length===1&&!y[0].trim())continue;for(;y.length<7;)y.push("");y[1]&&y[1].trim()&&(u=y[1].trim()),y[4]&&y[4].trim()&&(d=y[4].trim()),d.toLowerCase()==="draft"&&o.add(u);const L=y[6]?y[6].trim():"";if(L){const z=L.split(" | ");if(z.length>=2){const A=z[0].trim(),I=z[1].trim(),O=Zs(I);if(O){const ee=`${A}||${O}`;i[ee]||(i[ee]=[]),i[ee].push({themeName:u,status:d,originalText:I}),a++}}}}const h=Js(t),g={};let v=0;for(let m=1;m<h.length;m++){const y=h[m];if(y.length===0||y.length===1&&!y[0].trim())continue;for(;y.length<3;)y.push("");const L=y[0]?y[0].trim():"",z=y[1]?y[1].trim():"",A=y[2]?y[2].trim():"",I=Zs(A);if(I){const O=`${z}||${I}`;g[O]||(g[O]=[]),g[O].push({themeName:L,originalText:A}),v++}}const S=Object.keys(i),j=Object.keys(g),N=new Set(j),R=a,f=v;let c=0;S.forEach(m=>{N.has(m)&&(c+=Math.min(i[m].length,g[m].length))});const p=R+f-2*c;let x=0;S.forEach(m=>{const y=i[m];for(const L of y){if(!(L.status.toLowerCase()==="approved"))continue;(g[m]||[]).some(O=>r.has(O.themeName.toLowerCase()))||x++}});let w=0;j.forEach(m=>{const y=g[m];for(const L of y){if(!r.has(L.themeName.toLowerCase()))continue;(i[m]||[]).some(O=>O.status.toLowerCase()==="draft")&&w++}});const C=o.size;return[{metric:"Total rows in local output",value:R,id:"total-local"},{metric:"Total rows in llm output",value:f,id:"total-llm"},{metric:"No of challenges same between local and llm",value:c,id:"same-challenges"},{metric:"No of challenges not same between local and llm",value:p,id:"diff-challenges"},{metric:"No of challenges mapped to Approved theme locally, but not Approved in LLM",value:x,id:"approved-local-not-llm"},{metric:"No of challenges mapped to Approved in LLM, but Draft locally",value:w,id:"approved-llm-draft-local"},{metric:"No of new themes from local in draft status",value:C,id:"draft-themes-local"}]}function Bp(){const[e,t]=M.useState(null),[n,r]=M.useState(null),[l,i]=M.useState(""),[o,a]=M.useState(""),[u,d]=M.useState([]),[h,g]=M.useState(null),[v,S]=M.useState(!1),[j,N]=M.useState(!1);M.useEffect(()=>{fetch("/approved_themes.json").then(w=>w.ok?w.json():[]).then(w=>{const C=w.map(m=>m.name);d(C)}).catch(()=>d([]))},[]),M.useEffect(()=>{l&&o&&u.length>0?(S(!0),setTimeout(()=>{const w=Hp(l,o,u);g(w),S(!1)},300)):g(null)},[l,o,u]);const R=w=>{t(w),N(!1);const C=new FileReader;C.onload=m=>{i(m.target.result||"")},C.readAsText(w)},f=w=>{r(w),N(!1);const C=new FileReader;C.onload=m=>{a(m.target.result||"")},C.readAsText(w)},c=()=>{S(!0),N(!0),t({name:"tritopic_review_0.60.csv (Demo)",size:8549512}),r({name:"OUTPUT_LLM.csv (Demo)",size:17562761}),Promise.all([fetch("/samples/tritopic_review_0.60.csv").then(w=>w.text()),fetch("/samples/OUTPUT_LLM.csv").then(w=>w.text())]).then(([w,C])=>{i(w),a(C)}).catch(w=>{alert("Failed to load demo files from public directory!"),t(null),r(null),S(!1)})},p=()=>{t(null),r(null),i(""),a(""),g(null),N(!1)},x=w=>{switch(w){case"total-local":return"📁";case"total-llm":return"🤖";case"same-challenges":return"✅";case"diff-challenges":return"🔄";case"approved-local-not-llm":return"⚠️";case"approved-llm-draft-local":return"⚡";case"draft-themes-local":return"💡";default:return"📈"}};return s.jsxs("div",{className:"playground-container fade-in-slide",children:[s.jsxs("div",{className:"playground-header",children:[s.jsx("h1",{children:"⚙️ Comparison Playground"}),s.jsx("p",{children:"Compare local clustering outputs and LLM baselines in real-time inside your browser"})]}),s.jsxs("div",{className:"glass-panel playground-controls",children:[s.jsxs("div",{className:"controls-description",children:[s.jsx(Ip,{size:18,className:"sparkle-icon"}),s.jsxs("p",{children:["Upload your CSV files to compare semantic mapping alignment, or click ",s.jsx("strong",{children:"Load Demo Data"})," to test with default datasets from your workspace."]})]}),s.jsxs("div",{className:"controls-actions",children:[s.jsxs("button",{onClick:c,className:"btn-primary",disabled:v,children:[s.jsx(wp,{size:16}),s.jsx("span",{children:"Load Demo Data"})]}),s.jsxs("button",{onClick:p,className:"btn-secondary",disabled:v,children:[s.jsx(jp,{size:16}),s.jsx("span",{children:"Clear Files"})]})]})]}),s.jsxs("div",{className:"upload-grid",children:[s.jsx("div",{className:"upload-col",children:s.jsx(Xs,{label:"Local Output CSV (Tritopic)",onFileSelect:R,file:e})}),s.jsx("div",{className:"upload-col",children:s.jsx(Xs,{label:"LLM Output CSV (Baseline)",onFileSelect:f,file:n})})]}),v&&s.jsxs("div",{className:"glass-panel loader-container",children:[s.jsx("div",{className:"loader-spinner"}),s.jsx("p",{children:"Analyzing datasets and evaluating keys in memory..."})]}),!v&&h&&s.jsxs("div",{className:"comparison-results-panel fade-in-slide",children:[s.jsxs("div",{className:"results-header",children:[s.jsx(Xf,{size:20}),s.jsx("h2",{children:"Evaluation Analytics Summary"}),j&&s.jsx("span",{className:"demo-tag badge badge-approved",children:"Demo Workspace Mode"})]}),s.jsx("div",{className:"metrics-summary-grid",children:h.map(w=>{let C="";return w.id==="same-challenges"?C="success":w.id==="diff-challenges"?C="warning":w.id.startsWith("approved-")&&(C="accent"),s.jsxs("div",{className:`metric-card glass-panel ${C}`,children:[s.jsxs("span",{className:"metric-label",children:[x(w.id)," ",w.metric]}),s.jsx("span",{className:"metric-value",children:w.value.toLocaleString()})]},w.id)})}),s.jsxs("div",{className:"glass-panel results-explanation",children:[s.jsxs("div",{className:"explanation-header",children:[s.jsx(bf,{size:18}),s.jsx("h3",{children:"Understanding the Metrics"})]}),s.jsx("div",{className:"explanation-body",children:s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Alignment Index (Same Challenges):"})," Number of challenge statements matching exactly between local and LLM outputs, which validates pre-processing integrity."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Symmetric Difference:"})," Statements present in one output file but absent in the other (often due to threshold filtering or pre-processing splits)."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Approved theme locally, but not Approved in LLM:"})," Challenges mapped to approved themes locally that the LLM missed or mapped to drafts (e.g. Other/Unmapped). This demonstrates the superior recall of multi-vector matching over LLM direct classification."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Approved in LLM, but Draft locally:"})," Challenges that the LLM labeled as approved but the local model clustered as a draft due to similarity scores falling below strict threshold settings."]})]})})]})]}),s.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .playground-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .playground-header h1 {
          color: var(--text-primary);
        }

        .playground-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .controls-description {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 300px;
        }

        .sparkle-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .controls-actions {
          display: flex;
          gap: 1rem;
        }

        .upload-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .upload-grid {
            grid-template-columns: 1fr;
          }
        }

        .comparison-results-panel {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .results-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .results-header h2 {
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .results-header .demo-tag {
          margin-left: 1rem;
        }

        .metrics-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .results-explanation {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .explanation-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
        }

        .explanation-header h3 {
          font-size: 1.1rem;
        }

        .explanation-body ul {
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .explanation-body li {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .explanation-body strong {
          color: var(--text-primary);
        }
      `}})]})}function Wp(){const[e,t]=M.useState("visualizations"),n=()=>{switch(e){case"presentation":return s.jsx(Gs,{});case"visualizations":return s.jsx(Vp,{});case"playground":return s.jsx(Bp,{});default:return s.jsx(Gs,{})}};return s.jsxs("div",{className:"app-container",children:[s.jsx($p,{activeTab:e,setActiveTab:t}),s.jsx("main",{className:"main-content",children:n()})]})}cc(document.getElementById("root")).render(s.jsx(M.StrictMode,{children:s.jsx(Wp,{})}));
