(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var ti={},ss={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Et=Symbol.for("react.element"),qo=Symbol.for("react.portal"),Jo=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),Yo=Symbol.for("react.profiler"),Qo=Symbol.for("react.provider"),Zo=Symbol.for("react.context"),ea=Symbol.for("react.forward_ref"),ta=Symbol.for("react.suspense"),na=Symbol.for("react.memo"),ia=Symbol.for("react.lazy"),wr=Symbol.iterator;function ra(n){return n===null||typeof n!="object"?null:(n=wr&&n[wr]||n["@@iterator"],typeof n=="function"?n:null)}var os={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},as=Object.assign,cs={};function Xe(n,e,i){this.props=n,this.context=e,this.refs=cs,this.updater=i||os}Xe.prototype.isReactComponent={};Xe.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Xe.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ls(){}ls.prototype=Xe.prototype;function ni(n,e,i){this.props=n,this.context=e,this.refs=cs,this.updater=i||os}var ii=ni.prototype=new ls;ii.constructor=ni;as(ii,Xe.prototype);ii.isPureReactComponent=!0;var Er=Array.isArray,hs=Object.prototype.hasOwnProperty,ri={current:null},us={key:!0,ref:!0,__self:!0,__source:!0};function ds(n,e,i){var r,o={},c=null,h=null;if(e!=null)for(r in e.ref!==void 0&&(h=e.ref),e.key!==void 0&&(c=""+e.key),e)hs.call(e,r)&&!us.hasOwnProperty(r)&&(o[r]=e[r]);var p=arguments.length-2;if(p===1)o.children=i;else if(1<p){for(var I=Array(p),E=0;E<p;E++)I[E]=arguments[E+2];o.children=I}if(n&&n.defaultProps)for(r in p=n.defaultProps,p)o[r]===void 0&&(o[r]=p[r]);return{$$typeof:Et,type:n,key:c,ref:h,props:o,_owner:ri.current}}function sa(n,e){return{$$typeof:Et,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function si(n){return typeof n=="object"&&n!==null&&n.$$typeof===Et}function oa(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(i){return e[i]})}var Tr=/\/+/g;function jn(n,e){return typeof n=="object"&&n!==null&&n.key!=null?oa(""+n.key):e.toString(36)}function qt(n,e,i,r,o){var c=typeof n;(c==="undefined"||c==="boolean")&&(n=null);var h=!1;if(n===null)h=!0;else switch(c){case"string":case"number":h=!0;break;case"object":switch(n.$$typeof){case Et:case qo:h=!0}}if(h)return h=n,o=o(h),n=r===""?"."+jn(h,0):r,Er(o)?(i="",n!=null&&(i=n.replace(Tr,"$&/")+"/"),qt(o,e,i,"",function(E){return E})):o!=null&&(si(o)&&(o=sa(o,i+(!o.key||h&&h.key===o.key?"":(""+o.key).replace(Tr,"$&/")+"/")+n)),e.push(o)),1;if(h=0,r=r===""?".":r+":",Er(n))for(var p=0;p<n.length;p++){c=n[p];var I=r+jn(c,p);h+=qt(c,e,i,I,o)}else if(I=ra(n),typeof I=="function")for(n=I.call(n),p=0;!(c=n.next()).done;)c=c.value,I=r+jn(c,p++),h+=qt(c,e,i,I,o);else if(c==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return h}function Wt(n,e,i){if(n==null)return n;var r=[],o=0;return qt(n,r,"","",function(c){return e.call(i,c,o++)}),r}function aa(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(i){(n._status===0||n._status===-1)&&(n._status=1,n._result=i)},function(i){(n._status===0||n._status===-1)&&(n._status=2,n._result=i)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var J={current:null},Jt={transition:null},ca={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:Jt,ReactCurrentOwner:ri};function fs(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Wt,forEach:function(n,e,i){Wt(n,function(){e.apply(this,arguments)},i)},count:function(n){var e=0;return Wt(n,function(){e++}),e},toArray:function(n){return Wt(n,function(e){return e})||[]},only:function(n){if(!si(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};A.Component=Xe;A.Fragment=Jo;A.Profiler=Yo;A.PureComponent=ni;A.StrictMode=Xo;A.Suspense=ta;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ca;A.act=fs;A.cloneElement=function(n,e,i){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=as({},n.props),o=n.key,c=n.ref,h=n._owner;if(e!=null){if(e.ref!==void 0&&(c=e.ref,h=ri.current),e.key!==void 0&&(o=""+e.key),n.type&&n.type.defaultProps)var p=n.type.defaultProps;for(I in e)hs.call(e,I)&&!us.hasOwnProperty(I)&&(r[I]=e[I]===void 0&&p!==void 0?p[I]:e[I])}var I=arguments.length-2;if(I===1)r.children=i;else if(1<I){p=Array(I);for(var E=0;E<I;E++)p[E]=arguments[E+2];r.children=p}return{$$typeof:Et,type:n.type,key:o,ref:c,props:r,_owner:h}};A.createContext=function(n){return n={$$typeof:Zo,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Qo,_context:n},n.Consumer=n};A.createElement=ds;A.createFactory=function(n){var e=ds.bind(null,n);return e.type=n,e};A.createRef=function(){return{current:null}};A.forwardRef=function(n){return{$$typeof:ea,render:n}};A.isValidElement=si;A.lazy=function(n){return{$$typeof:ia,_payload:{_status:-1,_result:n},_init:aa}};A.memo=function(n,e){return{$$typeof:na,type:n,compare:e===void 0?null:e}};A.startTransition=function(n){var e=Jt.transition;Jt.transition={};try{n()}finally{Jt.transition=e}};A.unstable_act=fs;A.useCallback=function(n,e){return J.current.useCallback(n,e)};A.useContext=function(n){return J.current.useContext(n)};A.useDebugValue=function(){};A.useDeferredValue=function(n){return J.current.useDeferredValue(n)};A.useEffect=function(n,e){return J.current.useEffect(n,e)};A.useId=function(){return J.current.useId()};A.useImperativeHandle=function(n,e,i){return J.current.useImperativeHandle(n,e,i)};A.useInsertionEffect=function(n,e){return J.current.useInsertionEffect(n,e)};A.useLayoutEffect=function(n,e){return J.current.useLayoutEffect(n,e)};A.useMemo=function(n,e){return J.current.useMemo(n,e)};A.useReducer=function(n,e,i){return J.current.useReducer(n,e,i)};A.useRef=function(n){return J.current.useRef(n)};A.useState=function(n){return J.current.useState(n)};A.useSyncExternalStore=function(n,e,i){return J.current.useSyncExternalStore(n,e,i)};A.useTransition=function(){return J.current.useTransition()};A.version="18.3.1";ss.exports=A;var la=ss.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=la,ua=Symbol.for("react.element"),da=Symbol.for("react.fragment"),fa=Object.prototype.hasOwnProperty,pa=ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ga={key:!0,ref:!0,__self:!0,__source:!0};function ps(n,e,i){var r,o={},c=null,h=null;i!==void 0&&(c=""+i),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(h=e.ref);for(r in e)fa.call(e,r)&&!ga.hasOwnProperty(r)&&(o[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:ua,type:n,key:c,ref:h,props:o,_owner:pa.current}}ti.Fragment=da;ti.jsx=ps;ti.jsxs=ps;var Sr={};/**
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
 */const gs=function(n){const e=[];let i=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},ma=function(n){const e=[];let i=0,r=0;for(;i<n.length;){const o=n[i++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=n[i++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=n[i++],h=n[i++],p=n[i++],I=((o&7)<<18|(c&63)<<12|(h&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(I>>10)),e[r++]=String.fromCharCode(56320+(I&1023))}else{const c=n[i++],h=n[i++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},ms={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const c=n[o],h=o+1<n.length,p=h?n[o+1]:0,I=o+2<n.length,E=I?n[o+2]:0,b=c>>2,O=(c&3)<<4|p>>4;let C=(p&15)<<2|E>>6,j=E&63;I||(j=64,h||(C=64)),r.push(i[b],i[O],i[C],i[j])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(gs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ma(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const c=i[n.charAt(o++)],p=o<n.length?i[n.charAt(o)]:0;++o;const E=o<n.length?i[n.charAt(o)]:64;++o;const O=o<n.length?i[n.charAt(o)]:64;if(++o,c==null||p==null||E==null||O==null)throw new va;const C=c<<2|p>>4;if(r.push(C),E!==64){const j=p<<4&240|E>>2;if(r.push(j),O!==64){const k=E<<6&192|O;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class va extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ya=function(n){const e=gs(n);return ms.encodeByteArray(e,!0)},en=function(n){return ya(n).replace(/\./g,"")},vs=function(n){try{return ms.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _a(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ia=()=>_a().__FIREBASE_DEFAULTS__,wa=()=>{if(typeof process>"u"||typeof Sr>"u")return;const n=Sr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ea=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vs(n[1]);return e&&JSON.parse(e)},oi=()=>{try{return Ia()||wa()||Ea()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ys=n=>{var e,i;return(i=(e=oi())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[n]},Ta=n=>{const e=ys(n);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},_s=()=>{var n;return(n=oi())===null||n===void 0?void 0:n.config},Is=n=>{var e;return(e=oi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Sa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
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
 */function Aa(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},n);return[en(JSON.stringify(i)),en(JSON.stringify(h)),""].join(".")}/**
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
 */function q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ba(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function Ra(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ka(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ca(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pa(){const n=q();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Oa(){try{return typeof indexedDB=="object"}catch{return!1}}function Da(){return new Promise((n,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}/**
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
 */const Na="FirebaseError";class me extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=Na,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tt.prototype.create)}}class Tt{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?La(c,r):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new me(o,p,r)}}function La(n,e){return n.replace(Ma,(i,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const Ma=/\{\$([^}]+)}/g;function Ua(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function tn(n,e){if(n===e)return!0;const i=Object.keys(n),r=Object.keys(e);for(const o of i){if(!r.includes(o))return!1;const c=n[o],h=e[o];if(Ar(c)&&Ar(h)){if(!tn(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function Ar(n){return n!==null&&typeof n=="object"}/**
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
 */function St(n){const e=[];for(const[i,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xa(n,e){const i=new ja(n,e);return i.subscribe.bind(i)}class ja{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let o;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");Fa(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:r},o.next===void 0&&(o.next=Fn),o.error===void 0&&(o.error=Fn),o.complete===void 0&&(o.complete=Fn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fa(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function Fn(){}/**
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
 */function Ye(n){return n&&n._delegate?n._delegate:n}class Ue{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Le="[DEFAULT]";/**
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
 */class Ba{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new Sa;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Va(e))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=Le){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Le){return this.instances.has(e)}getOptions(e=Le){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);r===p&&h.resolve(o)}return o}onInit(e,i){var r;const o=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&e(h,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$a(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Le){return this.component?this.component.multipleInstances?e:Le:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $a(n){return n===Le?void 0:n}function Va(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ha{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new Ba(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const za={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Wa=D.INFO,Ga={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Ka=(n,e,...i)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=Ga[e];if(o)console[o](`[${r}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ai{constructor(e){this.name=e,this._logLevel=Wa,this._logHandler=Ka,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?za[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const qa=(n,e)=>e.some(i=>n instanceof i);let br,Rr;function Ja(){return br||(br=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xa(){return Rr||(Rr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ws=new WeakMap,Kn=new WeakMap,Es=new WeakMap,Bn=new WeakMap,ci=new WeakMap;function Ya(n){const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("success",c),n.removeEventListener("error",h)},c=()=>{i(Re(n.result)),o()},h=()=>{r(n.error),o()};n.addEventListener("success",c),n.addEventListener("error",h)});return e.then(i=>{i instanceof IDBCursor&&ws.set(i,n)}).catch(()=>{}),ci.set(e,n),e}function Qa(n){if(Kn.has(n))return;const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",h),n.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",c),n.addEventListener("error",h),n.addEventListener("abort",h)});Kn.set(n,e)}let qn={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return Kn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Es.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Re(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Za(n){qn=n(qn)}function ec(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=n.call($n(this),e,...i);return Es.set(r,e.sort?e.sort():[e]),Re(r)}:Xa().includes(n)?function(...e){return n.apply($n(this),e),Re(ws.get(this))}:function(...e){return Re(n.apply($n(this),e))}}function tc(n){return typeof n=="function"?ec(n):(n instanceof IDBTransaction&&Qa(n),qa(n,Ja())?new Proxy(n,qn):n)}function Re(n){if(n instanceof IDBRequest)return Ya(n);if(Bn.has(n))return Bn.get(n);const e=tc(n);return e!==n&&(Bn.set(n,e),ci.set(e,n)),e}const $n=n=>ci.get(n);function nc(n,e,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(n,e),p=Re(h);return r&&h.addEventListener("upgradeneeded",I=>{r(Re(h.result),I.oldVersion,I.newVersion,Re(h.transaction),I)}),i&&h.addEventListener("blocked",I=>i(I.oldVersion,I.newVersion,I)),p.then(I=>{c&&I.addEventListener("close",()=>c()),o&&I.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),p}const ic=["get","getKey","getAll","getAllKeys","count"],rc=["put","add","delete","clear"],Vn=new Map;function kr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vn.get(e))return Vn.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,o=rc.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||ic.includes(i)))return;const c=async function(h,...p){const I=this.transaction(h,o?"readwrite":"readonly");let E=I.store;return r&&(E=E.index(p.shift())),(await Promise.all([E[i](...p),o&&I.done]))[0]};return Vn.set(e,c),c}Za(n=>({...n,get:(e,i,r)=>kr(e,i)||n.get(e,i,r),has:(e,i)=>!!kr(e,i)||n.has(e,i)}));/**
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
 */class sc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(oc(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function oc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jn="@firebase/app",Cr="0.10.13";/**
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
 */const fe=new ai("@firebase/app"),ac="@firebase/app-compat",cc="@firebase/analytics-compat",lc="@firebase/analytics",hc="@firebase/app-check-compat",uc="@firebase/app-check",dc="@firebase/auth",fc="@firebase/auth-compat",pc="@firebase/database",gc="@firebase/data-connect",mc="@firebase/database-compat",vc="@firebase/functions",yc="@firebase/functions-compat",_c="@firebase/installations",Ic="@firebase/installations-compat",wc="@firebase/messaging",Ec="@firebase/messaging-compat",Tc="@firebase/performance",Sc="@firebase/performance-compat",Ac="@firebase/remote-config",bc="@firebase/remote-config-compat",Rc="@firebase/storage",kc="@firebase/storage-compat",Cc="@firebase/firestore",Pc="@firebase/vertexai-preview",Oc="@firebase/firestore-compat",Dc="firebase",Nc="10.14.1";/**
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
 */const Xn="[DEFAULT]",Lc={[Jn]:"fire-core",[ac]:"fire-core-compat",[lc]:"fire-analytics",[cc]:"fire-analytics-compat",[uc]:"fire-app-check",[hc]:"fire-app-check-compat",[dc]:"fire-auth",[fc]:"fire-auth-compat",[pc]:"fire-rtdb",[gc]:"fire-data-connect",[mc]:"fire-rtdb-compat",[vc]:"fire-fn",[yc]:"fire-fn-compat",[_c]:"fire-iid",[Ic]:"fire-iid-compat",[wc]:"fire-fcm",[Ec]:"fire-fcm-compat",[Tc]:"fire-perf",[Sc]:"fire-perf-compat",[Ac]:"fire-rc",[bc]:"fire-rc-compat",[Rc]:"fire-gcs",[kc]:"fire-gcs-compat",[Cc]:"fire-fst",[Oc]:"fire-fst-compat",[Pc]:"fire-vertex","fire-js":"fire-js",[Dc]:"fire-js-all"};/**
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
 */const nn=new Map,Mc=new Map,Yn=new Map;function Pr(n,e){try{n.container.addComponent(e)}catch(i){fe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function Ke(n){const e=n.name;if(Yn.has(e))return fe.debug(`There were multiple attempts to register component ${e}.`),!1;Yn.set(e,n);for(const i of nn.values())Pr(i,n);for(const i of Mc.values())Pr(i,n);return!0}function li(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function be(n){return n.settings!==void 0}/**
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
 */const Uc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ke=new Tt("app","Firebase",Uc);/**
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
 */class xc{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ke.create("app-deleted",{appName:this._name})}}/**
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
 */const Qe=Nc;function Ts(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xn,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw ke.create("bad-app-name",{appName:String(o)});if(i||(i=_s()),!i)throw ke.create("no-options");const c=nn.get(o);if(c){if(tn(i,c.options)&&tn(r,c.config))return c;throw ke.create("duplicate-app",{appName:o})}const h=new Ha(o);for(const I of Yn.values())h.addComponent(I);const p=new xc(i,r,h);return nn.set(o,p),p}function Ss(n=Xn){const e=nn.get(n);if(!e&&n===Xn&&_s())return Ts();if(!e)throw ke.create("no-app",{appName:n});return e}function Ce(n,e,i){var r;let o=(r=Lc[n])!==null&&r!==void 0?r:n;i&&(o+=`-${i}`);const c=o.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const p=[`Unable to register library "${o}" with version "${e}":`];c&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fe.warn(p.join(" "));return}Ke(new Ue(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const jc="firebase-heartbeat-database",Fc=1,It="firebase-heartbeat-store";let Hn=null;function As(){return Hn||(Hn=nc(jc,Fc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(It)}catch(i){console.warn(i)}}}}).catch(n=>{throw ke.create("idb-open",{originalErrorMessage:n.message})})),Hn}async function Bc(n){try{const i=(await As()).transaction(It),r=await i.objectStore(It).get(bs(n));return await i.done,r}catch(e){if(e instanceof me)fe.warn(e.message);else{const i=ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fe.warn(i.message)}}}async function Or(n,e){try{const r=(await As()).transaction(It,"readwrite");await r.objectStore(It).put(e,bs(n)),await r.done}catch(i){if(i instanceof me)fe.warn(i.message);else{const r=ke.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});fe.warn(r.message)}}}function bs(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $c=1024,Vc=30*24*60*60*1e3;class Hc{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Wc(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Dr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const p=new Date(h.date).valueOf();return Date.now()-p<=Vc}),this._storage.overwrite(this._heartbeatsCache))}catch(r){fe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Dr(),{heartbeatsToSend:r,unsentEntries:o}=zc(this._heartbeatsCache.heartbeats),c=en(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return fe.warn(i),""}}}function Dr(){return new Date().toISOString().substring(0,10)}function zc(n,e=$c){const i=[];let r=n.slice();for(const o of n){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),Nr(i)>e){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),Nr(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class Wc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oa()?Da().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Bc(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Or(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Or(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Nr(n){return en(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Gc(n){Ke(new Ue("platform-logger",e=>new sc(e),"PRIVATE")),Ke(new Ue("heartbeat",e=>new Hc(e),"PRIVATE")),Ce(Jn,Cr,n),Ce(Jn,Cr,"esm2017"),Ce("fire-js","")}Gc("");var Kc="firebase",qc="10.14.1";/**
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
 */Ce(Kc,qc,"app");function hi(n,e){var i={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(i[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(i[r[o]]=n[r[o]]);return i}function Rs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jc=Rs,ks=new Tt("auth","Firebase",Rs());/**
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
 */const rn=new ai("@firebase/auth");function Xc(n,...e){rn.logLevel<=D.WARN&&rn.warn(`Auth (${Qe}): ${n}`,...e)}function Xt(n,...e){rn.logLevel<=D.ERROR&&rn.error(`Auth (${Qe}): ${n}`,...e)}/**
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
 */function pe(n,...e){throw ui(n,...e)}function re(n,...e){return ui(n,...e)}function Cs(n,e,i){const r=Object.assign(Object.assign({},Jc()),{[e]:i});return new Tt("auth","Firebase",r).create(e,{appName:n.name})}function Me(n){return Cs(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ui(n,...e){if(typeof n!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(i,...r)}return ks.create(n,...e)}function S(n,e,...i){if(!n)throw ui(e,...i)}function he(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xt(e),new Error(e)}function ge(n,e){n||he(e)}/**
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
 */function Qn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Yc(){return Lr()==="http:"||Lr()==="https:"}function Lr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Qc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yc()||ka()||"connection"in navigator)?navigator.onLine:!0}function Zc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class At{constructor(e,i){this.shortDelay=e,this.longDelay=i,ge(i>e,"Short delay should be less than long delay!"),this.isMobile=ba()||Ca()}get(){return Qc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function di(n,e){ge(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class Ps{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const el={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tl=new At(3e4,6e4);function fi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ze(n,e,i,r,o={}){return Os(n,o,async()=>{let c={},h={};r&&(e==="GET"?h=r:c={body:JSON.stringify(r)});const p=St(Object.assign({key:n.config.apiKey},h)).slice(1),I=await n._getAdditionalHeaders();I["Content-Type"]="application/json",n.languageCode&&(I["X-Firebase-Locale"]=n.languageCode);const E=Object.assign({method:e,headers:I},c);return Ra()||(E.referrerPolicy="no-referrer"),Ps.fetch()(Ds(n,n.config.apiHost,i,p),E)})}async function Os(n,e,i){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},el),e);try{const o=new il(n),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Gt(n,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const p=c.ok?h.errorMessage:h.error.message,[I,E]=p.split(" : ");if(I==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gt(n,"credential-already-in-use",h);if(I==="EMAIL_EXISTS")throw Gt(n,"email-already-in-use",h);if(I==="USER_DISABLED")throw Gt(n,"user-disabled",h);const b=r[I]||I.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw Cs(n,b,E);pe(n,b)}}catch(o){if(o instanceof me)throw o;pe(n,"network-request-failed",{message:String(o)})}}async function nl(n,e,i,r,o={}){const c=await Ze(n,e,i,r,o);return"mfaPendingCredential"in c&&pe(n,"multi-factor-auth-required",{_serverResponse:c}),c}function Ds(n,e,i,r){const o=`${e}${i}?${r}`;return n.config.emulator?di(n.config,o):`${n.config.apiScheme}://${o}`}class il{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(re(this.auth,"network-request-failed")),tl.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gt(n,e,i){const r={appName:n.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=re(n,e,r);return o.customData._tokenResponse=i,o}/**
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
 */async function rl(n,e){return Ze(n,"POST","/v1/accounts:delete",e)}async function Ns(n,e){return Ze(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function vt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sl(n,e=!1){const i=Ye(n),r=await i.getIdToken(e),o=pi(r);S(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:vt(zn(o.auth_time)),issuedAtTime:vt(zn(o.iat)),expirationTime:vt(zn(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function zn(n){return Number(n)*1e3}function pi(n){const[e,i,r]=n.split(".");if(e===void 0||i===void 0||r===void 0)return Xt("JWT malformed, contained fewer than 3 sections"),null;try{const o=vs(i);return o?JSON.parse(o):(Xt("Failed to decode base64 JWT payload"),null)}catch(o){return Xt("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Mr(n){const e=pi(n);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wt(n,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof me&&ol(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ol({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class al{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zn{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=vt(this.lastLoginAt),this.creationTime=vt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sn(n){var e;const i=n.auth,r=await n.getIdToken(),o=await wt(n,Ns(i,{idToken:r}));S(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];n._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Ls(c.providerUserInfo):[],p=ll(n.providerData,h),I=n.isAnonymous,E=!(n.email&&c.passwordHash)&&!(p!=null&&p.length),b=I?E:!1,O={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:p,metadata:new Zn(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(n,O)}async function cl(n){const e=Ye(n);await sn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ll(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Ls(n){return n.map(e=>{var{providerId:i}=e,r=hi(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hl(n,e){const i=await Os(n,{},async()=>{const r=St({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=n.config,h=Ds(n,o,"/v1/token",`key=${c}`),p=await n._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Ps.fetch()(h,{method:"POST",headers:p,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function ul(n,e){return Ze(n,"POST","/v2/accounts:revokeToken",fi(n,e))}/**
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
 */class ze{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){S(e.length!==0,"internal-error");const i=Mr(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await hl(e,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,h=new ze;return r&&(S(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(S(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(S(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ze,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
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
 */function we(n,e){S(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ue{constructor(e){var{uid:i,auth:r,stsTokenManager:o}=e,c=hi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new al(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Zn(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await wt(this,this.stsTokenManager.getToken(this.auth,e));return S(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return sl(this,e)}reload(){return cl(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await sn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(be(this.auth.app))return Promise.reject(Me(this.auth));const e=await this.getIdToken();return await wt(this,rl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,o,c,h,p,I,E,b;const O=(r=i.displayName)!==null&&r!==void 0?r:void 0,C=(o=i.email)!==null&&o!==void 0?o:void 0,j=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,k=(h=i.photoURL)!==null&&h!==void 0?h:void 0,x=(p=i.tenantId)!==null&&p!==void 0?p:void 0,M=(I=i._redirectEventId)!==null&&I!==void 0?I:void 0,oe=(E=i.createdAt)!==null&&E!==void 0?E:void 0,Z=(b=i.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:B,emailVerified:te,isAnonymous:Pe,providerData:X,stsTokenManager:v}=i;S(B&&v,e,"internal-error");const u=ze.fromJSON(this.name,v);S(typeof B=="string",e,"internal-error"),we(O,e.name),we(C,e.name),S(typeof te=="boolean",e,"internal-error"),S(typeof Pe=="boolean",e,"internal-error"),we(j,e.name),we(k,e.name),we(x,e.name),we(M,e.name),we(oe,e.name),we(Z,e.name);const f=new ue({uid:B,auth:e,email:C,emailVerified:te,displayName:O,isAnonymous:Pe,photoURL:k,phoneNumber:j,tenantId:x,stsTokenManager:u,createdAt:oe,lastLoginAt:Z});return X&&Array.isArray(X)&&(f.providerData=X.map(g=>Object.assign({},g))),M&&(f._redirectEventId=M),f}static async _fromIdTokenResponse(e,i,r=!1){const o=new ze;o.updateFromServerResponse(i);const c=new ue({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await sn(c),c}static async _fromGetAccountInfoResponse(e,i,r){const o=i.users[0];S(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Ls(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),p=new ze;p.updateFromIdToken(r);const I=new ue({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Zn(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(I,E),I}}/**
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
 */const Ur=new Map;function de(n){ge(n instanceof Function,"Expected a class definition");let e=Ur.get(n);return e?(ge(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ur.set(n,e),e)}/**
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
 */class Ms{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}Ms.type="NONE";const xr=Ms;/**
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
 */function Yt(n,e,i){return`firebase:${n}:${e}:${i}`}class We{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=Yt(this.userKey,o.apiKey,c),this.fullPersistenceKey=Yt("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new We(de(xr),e,r);const o=(await Promise.all(i.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=o[0]||de(xr);const h=Yt(r,e.config.apiKey,e.name);let p=null;for(const E of i)try{const b=await E._get(h);if(b){const O=ue._fromJSON(e,b);E!==c&&(p=O),c=E;break}}catch{}const I=o.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!I.length?new We(c,e,r):(c=I[0],p&&await c._set(h,p.toJSON()),await Promise.all(i.map(async E=>{if(E!==c)try{await E._remove(h)}catch{}})),new We(c,e,r))}}/**
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
 */function jr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Us(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($s(e))return"Blackberry";if(Vs(e))return"Webos";if(xs(e))return"Safari";if((e.includes("chrome/")||js(e))&&!e.includes("edge/"))return"Chrome";if(Bs(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Us(n=q()){return/firefox\//i.test(n)}function xs(n=q()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function js(n=q()){return/crios\//i.test(n)}function Fs(n=q()){return/iemobile/i.test(n)}function Bs(n=q()){return/android/i.test(n)}function $s(n=q()){return/blackberry/i.test(n)}function Vs(n=q()){return/webos/i.test(n)}function gi(n=q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dl(n=q()){var e;return gi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fl(){return Pa()&&document.documentMode===10}function Hs(n=q()){return gi(n)||Bs(n)||Vs(n)||$s(n)||/windows phone/i.test(n)||Fs(n)}/**
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
 */function zs(n,e=[]){let i;switch(n){case"Browser":i=jr(q());break;case"Worker":i=`${jr(q())}-${n}`;break;default:i=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${Qe}/${r}`}/**
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
 */class pl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=c=>new Promise((h,p)=>{try{const I=e(c);h(I)}catch(I){p(I)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gl(n,e={}){return Ze(n,"GET","/v2/passwordPolicy",fi(n,e))}/**
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
 */const ml=6;class vl{constructor(e){var i,r,o,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:ml,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,o,c,h,p;const I={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,I),this.validatePasswordCharacterOptions(e,I),I.isValid&&(I.isValid=(i=I.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),I.isValid&&(I.isValid=(r=I.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),I.isValid&&(I.isValid=(o=I.containsLowercaseLetter)!==null&&o!==void 0?o:!0),I.isValid&&(I.isValid=(c=I.containsUppercaseLetter)!==null&&c!==void 0?c:!0),I.isValid&&(I.isValid=(h=I.containsNumericCharacter)!==null&&h!==void 0?h:!0),I.isValid&&(I.isValid=(p=I.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),I}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class yl{constructor(e,i,r,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fr(this),this.idTokenSubscription=new Fr(this),this.beforeStateQueue=new pl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ks,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=de(i)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await We.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Ns(this,{idToken:e}),r=await ue._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(be(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,p=o==null?void 0:o._redirectEventId,I=await this.tryRedirectSignIn(e);(!h||h===p)&&(I!=null&&I.user)&&(o=I.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await sn(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(be(this.app))return Promise.reject(Me(this));const i=e?Ye(e):null;return i&&S(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return be(this.app)?Promise.reject(Me(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return be(this.app)?Promise.reject(Me(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gl(this),i=new vl(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tt("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await ul(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&de(e)||this._popupRedirectResolver;S(i,this,"argument-error"),this.redirectPersistenceManager=await We.create(this,[de(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(p,this,"internal-error"),p.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const I=e.addObserver(i,r,o);return()=>{h=!0,I()}}else{const I=e.addObserver(i);return()=>{h=!0,I()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&Xc(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function mi(n){return Ye(n)}class Fr{constructor(e){this.auth=e,this.observer=null,this.addObserver=xa(i=>this.observer=i)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _l(n){vi=n}function Il(n){return vi.loadJS(n)}function wl(){return vi.gapiScript}function El(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Tl(n,e){const i=li(n,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(tn(c,e??{}))return o;pe(o,"already-initialized")}return i.initialize({options:e})}function Sl(n,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(de);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Al(n,e,i){const r=mi(n);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=Ws(e),{host:h,port:p}=bl(e),I=p===null?"":`:${p}`;r.config.emulator={url:`${c}//${h}${I}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:h,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})}),Rl()}function Ws(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bl(n){const e=Ws(n),i=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:Br(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:Br(h)}}}function Br(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Rl(){function n(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Gs{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,i){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}/**
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
 */async function Ge(n,e){return nl(n,"POST","/v1/accounts:signInWithIdp",fi(n,e))}/**
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
 */const kl="http://localhost";class xe extends Gs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):pe("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=i,c=hi(i,["providerId","signInMethod"]);if(!r||!o)return null;const h=new xe(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const i=this.buildRequest();return Ge(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,Ge(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,Ge(e,i)}buildRequest(){const e={requestUri:kl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=St(i)}return e}}/**
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
 */class Ks{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bt extends Ks{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ee extends bt{constructor(){super("facebook.com")}static credential(e){return xe._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ee.PROVIDER_ID="facebook.com";/**
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
 */class Te extends bt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return xe._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return Te.credential(i,r)}catch{return null}}}Te.GOOGLE_SIGN_IN_METHOD="google.com";Te.PROVIDER_ID="google.com";/**
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
 */class Se extends bt{constructor(){super("github.com")}static credential(e){return xe._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch{return null}}}Se.GITHUB_SIGN_IN_METHOD="github.com";Se.PROVIDER_ID="github.com";/**
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
 */class Ae extends bt{constructor(){super("twitter.com")}static credential(e,i){return xe._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return Ae.credential(i,r)}catch{return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com";Ae.PROVIDER_ID="twitter.com";/**
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
 */class qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,o=!1){const c=await ue._fromIdTokenResponse(e,r,o),h=$r(r);return new qe({user:c,providerId:h,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const o=$r(r);return new qe({user:e,providerId:o,_tokenResponse:r,operationType:i})}}function $r(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class on extends me{constructor(e,i,r,o){var c;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,on.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,o){return new on(e,i,r,o)}}function qs(n,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(n):i._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?on._fromErrorAndOperation(n,c,e,r):c})}async function Cl(n,e,i=!1){const r=await wt(n,e._linkToIdToken(n.auth,await n.getIdToken()),i);return qe._forOperation(n,"link",r)}/**
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
 */async function Pl(n,e,i=!1){const{auth:r}=n;if(be(r.app))return Promise.reject(Me(r));const o="reauthenticate";try{const c=await wt(n,qs(r,o,e,n),i);S(c.idToken,r,"internal-error");const h=pi(c.idToken);S(h,r,"internal-error");const{sub:p}=h;return S(n.uid===p,r,"user-mismatch"),qe._forOperation(n,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&pe(r,"user-mismatch"),c}}/**
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
 */async function Ol(n,e,i=!1){if(be(n.app))return Promise.reject(Me(n));const r="signIn",o=await qs(n,r,e),c=await qe._fromIdTokenResponse(n,r,o);return i||await n._updateCurrentUser(c.user),c}function Dl(n,e,i,r){return Ye(n).onIdTokenChanged(e,i,r)}function Nl(n,e,i){return Ye(n).beforeAuthStateChanged(e,i)}const an="__sak";/**
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
 */class Js{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(an,"1"),this.storage.removeItem(an),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ll=1e3,Ml=10;class Xs extends Js{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&e(i,o,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((h,p,I)=>{this.notifyListeners(h,I)});return}const r=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!i&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);fl()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Ml):o()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},Ll)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xs.type="LOCAL";const Ul=Xs;/**
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
 */class Ys extends Js{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}Ys.type="SESSION";const Qs=Ys;/**
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
 */function xl(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class hn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const r=new hn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const p=Array.from(h).map(async E=>E(i.origin,c)),I=await xl(p);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:I})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hn.receivers=[];/**
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
 */function yi(n="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return n+i}/**
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
 */class jl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((p,I)=>{const E=yi("",20);o.port1.start();const b=setTimeout(()=>{I(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(O){const C=O;if(C.data.eventId===E)switch(C.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{I(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(C.data.response);break;default:clearTimeout(b),clearTimeout(c),I(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:E,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function se(){return window}function Fl(n){se().location.href=n}/**
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
 */function Zs(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function Bl(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $l(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Vl(){return Zs()?self:null}/**
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
 */const eo="firebaseLocalStorageDb",Hl=1,cn="firebaseLocalStorage",to="fbase_key";class Rt{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function un(n,e){return n.transaction([cn],e?"readwrite":"readonly").objectStore(cn)}function zl(){const n=indexedDB.deleteDatabase(eo);return new Rt(n).toPromise()}function ei(){const n=indexedDB.open(eo,Hl);return new Promise((e,i)=>{n.addEventListener("error",()=>{i(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(cn,{keyPath:to})}catch(o){i(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(cn)?e(r):(r.close(),await zl(),e(await ei()))})})}async function Vr(n,e,i){const r=un(n,!0).put({[to]:e,value:i});return new Rt(r).toPromise()}async function Wl(n,e){const i=un(n,!1).get(e),r=await new Rt(i).toPromise();return r===void 0?null:r.value}function Hr(n,e){const i=un(n,!0).delete(e);return new Rt(i).toPromise()}const Gl=800,Kl=3;class no{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ei(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>Kl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hn._getInstance(Vl()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await Bl(),!this.activeServiceWorker)return;this.sender=new jl(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$l()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ei();return await Vr(e,an,"1"),await Hr(e,an),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vr(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>Wl(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Hr(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=un(o,!1).getAll();return new Rt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}no.type="LOCAL";const ql=no;new At(3e4,6e4);/**
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
 */function Jl(n,e){return e?de(e):(S(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _i extends Gs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ge(e,this._buildIdpRequest())}_linkToIdToken(e,i){return Ge(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return Ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function Xl(n){return Ol(n.auth,new _i(n),n.bypassAuthState)}function Yl(n){const{auth:e,user:i}=n;return S(i,e,"internal-error"),Pl(i,new _i(n),n.bypassAuthState)}async function Ql(n){const{auth:e,user:i}=n;return S(i,e,"internal-error"),Cl(i,new _i(n),n.bypassAuthState)}/**
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
 */class io{constructor(e,i,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:h,type:p}=e;if(h){this.reject(h);return}const I={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(I))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xl;case"linkViaPopup":case"linkViaRedirect":return Ql;case"reauthViaPopup":case"reauthViaRedirect":return Yl;default:pe(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zl=new At(2e3,1e4);class He extends io{constructor(e,i,r,o,c){super(e,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,He.currentPopupAction&&He.currentPopupAction.cancel(),He.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");const e=yi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,He.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zl.get())};e()}}He.currentPopupAction=null;/**
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
 */const eh="pendingRedirect",Qt=new Map;class th extends io{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=Qt.get(this.auth._key());if(!e){try{const r=await nh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}Qt.set(this.auth._key(),e)}return this.bypassAuthState||Qt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nh(n,e){const i=sh(e),r=rh(n);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function ih(n,e){Qt.set(n._key(),e)}function rh(n){return de(n._redirectPersistence)}function sh(n){return Yt(eh,n.config.apiKey,n.name)}async function oh(n,e,i=!1){if(be(n.app))return Promise.reject(Me(n));const r=mi(n),o=Jl(r,e),h=await new th(r,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
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
 */const ah=10*60*1e3;class ch{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lh(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!ro(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(re(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ah&&this.cachedEventUids.clear(),this.cachedEventUids.has(zr(e))}saveEventToCache(e){this.cachedEventUids.add(zr(e)),this.lastProcessedEventTime=Date.now()}}function zr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ro({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lh(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ro(n);default:return!1}}/**
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
 */async function hh(n,e={}){return Ze(n,"GET","/v1/projects",e)}/**
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
 */const uh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dh=/^https?/;async function fh(n){if(n.config.emulator)return;const{authorizedDomains:e}=await hh(n);for(const i of e)try{if(ph(i))return}catch{}pe(n,"unauthorized-domain")}function ph(n){const e=Qn(),{protocol:i,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&r===""?i==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===r}if(!dh.test(i))return!1;if(uh.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const gh=new At(3e4,6e4);function Wr(){const n=se().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let i=0;i<n.CP.length;i++)n.CP[i]=null}}function mh(n){return new Promise((e,i)=>{var r,o,c;function h(){Wr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wr(),i(re(n,"network-request-failed"))},timeout:gh.get()})}if(!((o=(r=se().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=se().gapi)===null||c===void 0)&&c.load)h();else{const p=El("iframefcb");return se()[p]=()=>{gapi.load?h():i(re(n,"network-request-failed"))},Il(`${wl()}?onload=${p}`).catch(I=>i(I))}}).catch(e=>{throw Zt=null,e})}let Zt=null;function vh(n){return Zt=Zt||mh(n),Zt}/**
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
 */const yh=new At(5e3,15e3),_h="__/auth/iframe",Ih="emulator/auth/iframe",wh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Th(n){const e=n.config;S(e.authDomain,n,"auth-domain-config-required");const i=e.emulator?di(e,Ih):`https://${n.config.authDomain}/${_h}`,r={apiKey:e.apiKey,appName:n.name,v:Qe},o=Eh.get(n.config.apiHost);o&&(r.eid=o);const c=n._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${St(r).slice(1)}`}async function Sh(n){const e=await vh(n),i=se().gapi;return S(i,n,"internal-error"),e.open({where:document.body,url:Th(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wh,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=re(n,"network-request-failed"),p=se().setTimeout(()=>{c(h)},yh.get());function I(){se().clearTimeout(p),o(r)}r.ping(I).then(I,()=>{c(h)})}))}/**
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
 */const Ah={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bh=500,Rh=600,kh="_blank",Ch="http://localhost";class Gr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ph(n,e,i,r=bh,o=Rh){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const I=Object.assign(Object.assign({},Ah),{width:r.toString(),height:o.toString(),top:c,left:h}),E=q().toLowerCase();i&&(p=js(E)?kh:i),Us(E)&&(e=e||Ch,I.scrollbars="yes");const b=Object.entries(I).reduce((C,[j,k])=>`${C}${j}=${k},`,"");if(dl(E)&&p!=="_self")return Oh(e||"",p),new Gr(null);const O=window.open(e||"",p,b);S(O,n,"popup-blocked");try{O.focus()}catch{}return new Gr(O)}function Oh(n,e){const i=document.createElement("a");i.href=n,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const Dh="__/auth/handler",Nh="emulator/auth/handler",Lh=encodeURIComponent("fac");async function Kr(n,e,i,r,o,c){S(n.config.authDomain,n,"auth-domain-config-required"),S(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:r,v:Qe,eventId:o};if(e instanceof Ks){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",Ua(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,O]of Object.entries({}))h[b]=O}if(e instanceof bt){const b=e.getScopes().filter(O=>O!=="");b.length>0&&(h.scopes=b.join(","))}n.tenantId&&(h.tid=n.tenantId);const p=h;for(const b of Object.keys(p))p[b]===void 0&&delete p[b];const I=await n._getAppCheckToken(),E=I?`#${Lh}=${encodeURIComponent(I)}`:"";return`${Mh(n)}?${St(p).slice(1)}${E}`}function Mh({config:n}){return n.emulator?di(n,Nh):`https://${n.authDomain}/${Dh}`}/**
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
 */const Wn="webStorageSupport";class Uh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qs,this._completeRedirectFn=oh,this._overrideRedirectResult=ih}async _openPopup(e,i,r,o){var c;ge((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await Kr(e,i,r,Qn(),o);return Ph(e,h,yi())}async _openRedirect(e,i,r,o){await this._originValidation(e);const c=await Kr(e,i,r,Qn(),o);return Fl(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(ge(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await Sh(e),r=new ch(e);return i.register("authEvent",o=>(S(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(Wn,{type:Wn},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[Wn];h!==void 0&&i(!!h),pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=fh(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return Hs()||xs()||gi()}}const xh=Uh;var qr="@firebase/auth",Jr="1.7.9";/**
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
 */class jh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Fh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bh(n){Ke(new Ue("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=r.options;S(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const I={apiKey:h,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zs(n)},E=new yl(r,o,c,I);return Sl(E,i),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),Ke(new Ue("auth-internal",e=>{const i=mi(e.getProvider("auth").getImmediate());return(r=>new jh(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ce(qr,Jr,Fh(n)),Ce(qr,Jr,"esm2017")}/**
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
 */const $h=5*60,Vh=Is("authIdTokenMaxAge")||$h;let Xr=null;const Hh=n=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>Vh)return;const o=i==null?void 0:i.token;Xr!==o&&(Xr=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function zh(n=Ss()){const e=li(n,"auth");if(e.isInitialized())return e.getImmediate();const i=Tl(n,{popupRedirectResolver:xh,persistence:[ql,Ul,Qs]}),r=Is("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=Hh(c.toString());Nl(i,h,()=>h(i.currentUser)),Dl(i,p=>h(p))}}const o=ys("auth");return o&&Al(i,`http://${o}`),i}function Wh(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}_l({loadJS(n){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const c=re("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",Wh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bh("Browser");var Yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var so;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,u){function f(){}f.prototype=u.prototype,v.D=u.prototype,v.prototype=new f,v.prototype.constructor=v,v.C=function(g,m,_){for(var d=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)d[ae-2]=arguments[ae];return u.prototype[m].apply(g,d)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,i),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(v,u,f){f||(f=0);var g=Array(16);if(typeof u=="string")for(var m=0;16>m;++m)g[m]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(m=0;16>m;++m)g[m]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=v.g[0],f=v.g[1],m=v.g[2];var _=v.g[3],d=u+(_^f&(m^_))+g[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+g[1]+3905402710&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+g[2]+606105819&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+g[3]+3250441966&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(_^f&(m^_))+g[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+g[5]+1200080426&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+g[6]+2821735955&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+g[7]+4249261313&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(_^f&(m^_))+g[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+g[9]+2336552879&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+g[10]+4294925233&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+g[11]+2304563134&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(_^f&(m^_))+g[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+g[13]+4254626195&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+g[14]+2792965006&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+g[15]+1236535329&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(m^_&(f^m))+g[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+g[6]+3225465664&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+g[11]+643717713&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+g[0]+3921069994&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^_&(f^m))+g[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+g[10]+38016083&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+g[15]+3634488961&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+g[4]+3889429448&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^_&(f^m))+g[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+g[14]+3275163606&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+g[3]+4107603335&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+g[8]+1163531501&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^_&(f^m))+g[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+g[2]+4243563512&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+g[7]+1735328473&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+g[12]+2368359562&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(f^m^_)+g[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+g[8]+2272392833&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+g[11]+1839030562&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+g[14]+4259657740&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^_)+g[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+g[4]+1272893353&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+g[7]+4139469664&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+g[10]+3200236656&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^_)+g[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+g[0]+3936430074&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+g[3]+3572445317&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+g[6]+76029189&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^_)+g[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+g[12]+3873151461&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+g[15]+530742520&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+g[2]+3299628645&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(m^(f|~_))+g[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+g[7]+1126891415&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+g[14]+2878612391&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+g[5]+4237533241&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~_))+g[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+g[3]+2399980690&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+g[10]+4293915773&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+g[1]+2240044497&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~_))+g[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+g[15]+4264355552&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+g[6]+2734768916&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+g[13]+1309151649&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~_))+g[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+g[11]+3174756917&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+g[2]+718787259&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+g[9]+3951481745&4294967295,v.g[0]=v.g[0]+u&4294967295,v.g[1]=v.g[1]+(m+(d<<21&4294967295|d>>>11))&4294967295,v.g[2]=v.g[2]+m&4294967295,v.g[3]=v.g[3]+_&4294967295}r.prototype.u=function(v,u){u===void 0&&(u=v.length);for(var f=u-this.blockSize,g=this.B,m=this.h,_=0;_<u;){if(m==0)for(;_<=f;)o(this,v,_),_+=this.blockSize;if(typeof v=="string"){for(;_<u;)if(g[m++]=v.charCodeAt(_++),m==this.blockSize){o(this,g),m=0;break}}else for(;_<u;)if(g[m++]=v[_++],m==this.blockSize){o(this,g),m=0;break}}this.h=m,this.o+=u},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var u=1;u<v.length-8;++u)v[u]=0;var f=8*this.o;for(u=v.length-8;u<v.length;++u)v[u]=f&255,f/=256;for(this.u(v),v=Array(16),u=f=0;4>u;++u)for(var g=0;32>g;g+=8)v[f++]=this.g[u]>>>g&255;return v};function c(v,u){var f=p;return Object.prototype.hasOwnProperty.call(f,v)?f[v]:f[v]=u(v)}function h(v,u){this.h=u;for(var f=[],g=!0,m=v.length-1;0<=m;m--){var _=v[m]|0;g&&_==u||(f[m]=_,g=!1)}this.g=f}var p={};function I(v){return-128<=v&&128>v?c(v,function(u){return new h([u|0],0>u?-1:0)}):new h([v|0],0>v?-1:0)}function E(v){if(isNaN(v)||!isFinite(v))return O;if(0>v)return M(E(-v));for(var u=[],f=1,g=0;v>=f;g++)u[g]=v/f|0,f*=4294967296;return new h(u,0)}function b(v,u){if(v.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(v.charAt(0)=="-")return M(b(v.substring(1),u));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=E(Math.pow(u,8)),g=O,m=0;m<v.length;m+=8){var _=Math.min(8,v.length-m),d=parseInt(v.substring(m,m+_),u);8>_?(_=E(Math.pow(u,_)),g=g.j(_).add(E(d))):(g=g.j(f),g=g.add(E(d)))}return g}var O=I(0),C=I(1),j=I(16777216);n=h.prototype,n.m=function(){if(x(this))return-M(this).m();for(var v=0,u=1,f=0;f<this.g.length;f++){var g=this.i(f);v+=(0<=g?g:4294967296+g)*u,u*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(x(this))return"-"+M(this).toString(v);for(var u=E(Math.pow(v,6)),f=this,g="";;){var m=te(f,u).g;f=oe(f,m.j(u));var _=((0<f.g.length?f.g[0]:f.h)>>>0).toString(v);if(f=m,k(f))return _+g;for(;6>_.length;)_="0"+_;g=_+g}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var u=0;u<v.g.length;u++)if(v.g[u]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=oe(this,v),x(v)?-1:k(v)?0:1};function M(v){for(var u=v.g.length,f=[],g=0;g<u;g++)f[g]=~v.g[g];return new h(f,~v.h).add(C)}n.abs=function(){return x(this)?M(this):this},n.add=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],g=0,m=0;m<=u;m++){var _=g+(this.i(m)&65535)+(v.i(m)&65535),d=(_>>>16)+(this.i(m)>>>16)+(v.i(m)>>>16);g=d>>>16,_&=65535,d&=65535,f[m]=d<<16|_}return new h(f,f[f.length-1]&-2147483648?-1:0)};function oe(v,u){return v.add(M(u))}n.j=function(v){if(k(this)||k(v))return O;if(x(this))return x(v)?M(this).j(M(v)):M(M(this).j(v));if(x(v))return M(this.j(M(v)));if(0>this.l(j)&&0>v.l(j))return E(this.m()*v.m());for(var u=this.g.length+v.g.length,f=[],g=0;g<2*u;g++)f[g]=0;for(g=0;g<this.g.length;g++)for(var m=0;m<v.g.length;m++){var _=this.i(g)>>>16,d=this.i(g)&65535,ae=v.i(m)>>>16,et=v.i(m)&65535;f[2*g+2*m]+=d*et,Z(f,2*g+2*m),f[2*g+2*m+1]+=_*et,Z(f,2*g+2*m+1),f[2*g+2*m+1]+=d*ae,Z(f,2*g+2*m+1),f[2*g+2*m+2]+=_*ae,Z(f,2*g+2*m+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new h(f,0)};function Z(v,u){for(;(v[u]&65535)!=v[u];)v[u+1]+=v[u]>>>16,v[u]&=65535,u++}function B(v,u){this.g=v,this.h=u}function te(v,u){if(k(u))throw Error("division by zero");if(k(v))return new B(O,O);if(x(v))return u=te(M(v),u),new B(M(u.g),M(u.h));if(x(u))return u=te(v,M(u)),new B(M(u.g),u.h);if(30<v.g.length){if(x(v)||x(u))throw Error("slowDivide_ only works with positive integers.");for(var f=C,g=u;0>=g.l(v);)f=Pe(f),g=Pe(g);var m=X(f,1),_=X(g,1);for(g=X(g,2),f=X(f,2);!k(g);){var d=_.add(g);0>=d.l(v)&&(m=m.add(f),_=d),g=X(g,1),f=X(f,1)}return u=oe(v,m.j(u)),new B(m,u)}for(m=O;0<=v.l(u);){for(f=Math.max(1,Math.floor(v.m()/u.m())),g=Math.ceil(Math.log(f)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),_=E(f),d=_.j(u);x(d)||0<d.l(v);)f-=g,_=E(f),d=_.j(u);k(_)&&(_=C),m=m.add(_),v=oe(v,d)}return new B(m,v)}n.A=function(v){return te(this,v).h},n.and=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)&v.i(g);return new h(f,this.h&v.h)},n.or=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)|v.i(g);return new h(f,this.h|v.h)},n.xor=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],g=0;g<u;g++)f[g]=this.i(g)^v.i(g);return new h(f,this.h^v.h)};function Pe(v){for(var u=v.g.length+1,f=[],g=0;g<u;g++)f[g]=v.i(g)<<1|v.i(g-1)>>>31;return new h(f,v.h)}function X(v,u){var f=u>>5;u%=32;for(var g=v.g.length-f,m=[],_=0;_<g;_++)m[_]=0<u?v.i(_+f)>>>u|v.i(_+f+1)<<32-u:v.i(_+f);return new h(m,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=E,h.fromString=b,so=h}).apply(typeof Yr<"u"?Yr:typeof self<"u"?self:typeof window<"u"?window:{});var Kt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kt=="object"&&Kt];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=i(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var l=0;l<t.length-1;l++){var y=t[l];if(!(y in a))break e;a=a[y]}t=t[t.length-1],l=a[t],s=s(l),s!=l&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,l=!1,y={next:function(){if(!l&&a<t.length){var w=a++;return{value:s(w,t[w]),done:!1}}return l=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function I(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function E(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function b(t,s,a){return t.call.apply(t.bind,arguments)}function O(t,s,a){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,l),t.apply(s,y)}}return function(){return t.apply(s,arguments)}}function C(t,s,a){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:O,C.apply(null,arguments)}function j(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function k(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(l,y,w){for(var T=Array(arguments.length-2),N=2;N<arguments.length;N++)T[N-2]=arguments[N];return s.prototype[y].apply(l,T)}}function x(t){const s=t.length;if(0<s){const a=Array(s);for(let l=0;l<s;l++)a[l]=t[l];return a}return[]}function M(t,s){for(let a=1;a<arguments.length;a++){const l=arguments[a];if(I(l)){const y=t.length||0,w=l.length||0;t.length=y+w;for(let T=0;T<w;T++)t[y+T]=l[T]}else t.push(l)}}class oe{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function Z(t){return/^[\s\xa0]*$/.test(t)}function B(){var t=p.navigator;return t&&(t=t.userAgent)?t:""}function te(t){return te[" "](t),t}te[" "]=function(){};var Pe=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function X(t,s,a){for(const l in t)s.call(a,t[l],l,t)}function v(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function u(t){const s={};for(const a in t)s[a]=t[a];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(t,s){let a,l;for(let y=1;y<arguments.length;y++){l=arguments[y];for(a in l)t[a]=l[a];for(let w=0;w<f.length;w++)a=f[w],Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}}function m(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function _(t){p.setTimeout(()=>{throw t},0)}function d(){var t=dn;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class ae{constructor(){this.h=this.g=null}add(s,a){const l=et.get();l.set(s,a),this.h?this.h.next=l:this.g=l,this.h=l}}var et=new oe(()=>new ho,t=>t.reset());class ho{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,nt=!1,dn=new ae,Ti=()=>{const t=p.Promise.resolve(void 0);tt=()=>{t.then(uo)}};var uo=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){_(a)}var s=et;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}nt=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var fo=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};p.addEventListener("test",a,s),p.removeEventListener("test",a,s)}catch{}return t}();function it(t,s){if($.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(Pe){e:{try{te(s.nodeName);var y=!0;break e}catch{}y=!1}y||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:po[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.aa.h.call(this)}}k(it,$);var po={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),go=0;function mo(t,s,a,l,y){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!l,this.ha=y,this.key=++go,this.da=this.fa=!1}function Pt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ot(t){this.src=t,this.g={},this.h=0}Ot.prototype.add=function(t,s,a,l,y){var w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);var T=pn(t,s,l,y);return-1<T?(s=t[T],a||(s.fa=!1)):(s=new mo(s,this.src,w,!!l,y),s.fa=a,t.push(s)),s};function fn(t,s){var a=s.type;if(a in t.g){var l=t.g[a],y=Array.prototype.indexOf.call(l,s,void 0),w;(w=0<=y)&&Array.prototype.splice.call(l,y,1),w&&(Pt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function pn(t,s,a,l){for(var y=0;y<t.length;++y){var w=t[y];if(!w.da&&w.listener==s&&w.capture==!!a&&w.ha==l)return y}return-1}var gn="closure_lm_"+(1e6*Math.random()|0),mn={};function Si(t,s,a,l,y){if(Array.isArray(s)){for(var w=0;w<s.length;w++)Si(t,s[w],a,l,y);return null}return a=Ri(a),t&&t[Ct]?t.K(s,a,E(l)?!!l.capture:!1,y):vo(t,s,a,!1,l,y)}function vo(t,s,a,l,y,w){if(!s)throw Error("Invalid event type");var T=E(y)?!!y.capture:!!y,N=yn(t);if(N||(t[gn]=N=new Ot(t)),a=N.add(s,a,l,T,w),a.proxy)return a;if(l=yo(),a.proxy=l,l.src=t,l.listener=a,t.addEventListener)fo||(y=T),y===void 0&&(y=!1),t.addEventListener(s.toString(),l,y);else if(t.attachEvent)t.attachEvent(bi(s.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function yo(){function t(a){return s.call(t.src,t.listener,a)}const s=_o;return t}function Ai(t,s,a,l,y){if(Array.isArray(s))for(var w=0;w<s.length;w++)Ai(t,s[w],a,l,y);else l=E(l)?!!l.capture:!!l,a=Ri(a),t&&t[Ct]?(t=t.i,s=String(s).toString(),s in t.g&&(w=t.g[s],a=pn(w,a,l,y),-1<a&&(Pt(w[a]),Array.prototype.splice.call(w,a,1),w.length==0&&(delete t.g[s],t.h--)))):t&&(t=yn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=pn(s,a,l,y)),(a=-1<t?s[t]:null)&&vn(a))}function vn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Ct])fn(s.i,t);else{var a=t.type,l=t.proxy;s.removeEventListener?s.removeEventListener(a,l,t.capture):s.detachEvent?s.detachEvent(bi(a),l):s.addListener&&s.removeListener&&s.removeListener(l),(a=yn(s))?(fn(a,t),a.h==0&&(a.src=null,s[gn]=null)):Pt(t)}}}function bi(t){return t in mn?mn[t]:mn[t]="on"+t}function _o(t,s){if(t.da)t=!0;else{s=new it(s,this);var a=t.listener,l=t.ha||t.src;t.fa&&vn(t),t=a.call(l,s)}return t}function yn(t){return t=t[gn],t instanceof Ot?t:null}var _n="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ri(t){return typeof t=="function"?t:(t[_n]||(t[_n]=function(s){return t.handleEvent(s)}),t[_n])}function V(){ve.call(this),this.i=new Ot(this),this.M=this,this.F=null}k(V,ve),V.prototype[Ct]=!0,V.prototype.removeEventListener=function(t,s,a,l){Ai(this,t,s,a,l)};function W(t,s){var a,l=t.F;if(l)for(a=[];l;l=l.F)a.push(l);if(t=t.M,l=s.type||s,typeof s=="string")s=new $(s,t);else if(s instanceof $)s.target=s.target||t;else{var y=s;s=new $(l,t),g(s,y)}if(y=!0,a)for(var w=a.length-1;0<=w;w--){var T=s.g=a[w];y=Dt(T,l,!0,s)&&y}if(T=s.g=t,y=Dt(T,l,!0,s)&&y,y=Dt(T,l,!1,s)&&y,a)for(w=0;w<a.length;w++)T=s.g=a[w],y=Dt(T,l,!1,s)&&y}V.prototype.N=function(){if(V.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],l=0;l<a.length;l++)Pt(a[l]);delete t.g[s],t.h--}}this.F=null},V.prototype.K=function(t,s,a,l){return this.i.add(String(t),s,!1,a,l)},V.prototype.L=function(t,s,a,l){return this.i.add(String(t),s,!0,a,l)};function Dt(t,s,a,l){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var y=!0,w=0;w<s.length;++w){var T=s[w];if(T&&!T.da&&T.capture==a){var N=T.listener,F=T.ha||T.src;T.fa&&fn(t.i,T),y=N.call(F,l)!==!1&&y}}return y&&!l.defaultPrevented}function ki(t,s,a){if(typeof t=="function")a&&(t=C(t,a));else if(t&&typeof t.handleEvent=="function")t=C(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:p.setTimeout(t,s||0)}function Ci(t){t.g=ki(()=>{t.g=null,t.i&&(t.i=!1,Ci(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class Io extends ve{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Ci(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(t){ve.call(this),this.h=t,this.g={}}k(rt,ve);var Pi=[];function Oi(t){X(t.g,function(s,a){this.g.hasOwnProperty(a)&&vn(s)},t),t.g={}}rt.prototype.N=function(){rt.aa.N.call(this),Oi(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var In=p.JSON.stringify,wo=p.JSON.parse,Eo=class{stringify(t){return p.JSON.stringify(t,void 0)}parse(t){return p.JSON.parse(t,void 0)}};function wn(){}wn.prototype.h=null;function Di(t){return t.h||(t.h=t.i())}function To(){}var st={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function En(){$.call(this,"d")}k(En,$);function Tn(){$.call(this,"c")}k(Tn,$);var je={},Ni=null;function Sn(){return Ni=Ni||new V}je.La="serverreachability";function Li(t){$.call(this,je.La,t)}k(Li,$);function ot(t){const s=Sn();W(s,new Li(s))}je.STAT_EVENT="statevent";function Mi(t,s){$.call(this,je.STAT_EVENT,t),this.stat=s}k(Mi,$);function G(t){const s=Sn();W(s,new Mi(s,t))}je.Ma="timingevent";function Ui(t,s){$.call(this,je.Ma,t),this.size=s}k(Ui,$);function at(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){t()},s)}function ct(){this.g=!0}ct.prototype.xa=function(){this.g=!1};function So(t,s,a,l,y,w){t.info(function(){if(t.g)if(w)for(var T="",N=w.split("&"),F=0;F<N.length;F++){var P=N[F].split("=");if(1<P.length){var H=P[0];P=P[1];var z=H.split("_");T=2<=z.length&&z[1]=="type"?T+(H+"="+P+"&"):T+(H+"=redacted&")}}else T=null;else T=w;return"XMLHTTP REQ ("+l+") [attempt "+y+"]: "+s+`
`+a+`
`+T})}function Ao(t,s,a,l,y,w,T){t.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+y+"]: "+s+`
`+a+`
`+w+" "+T})}function Fe(t,s,a,l){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+Ro(t,a)+(l?" "+l:"")})}function bo(t,s){t.info(function(){return"TIMEOUT: "+s})}ct.prototype.info=function(){};function Ro(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var l=a[t];if(!(2>l.length)){var y=l[1];if(Array.isArray(y)&&!(1>y.length)){var w=y[0];if(w!="noop"&&w!="stop"&&w!="close")for(var T=1;T<y.length;T++)y[T]=""}}}}return In(a)}catch{return s}}var An={NO_ERROR:0,TIMEOUT:8},ko={},bn;function Nt(){}k(Nt,wn),Nt.prototype.g=function(){return new XMLHttpRequest},Nt.prototype.i=function(){return{}},bn=new Nt;function ye(t,s,a,l){this.j=t,this.i=s,this.l=a,this.R=l||1,this.U=new rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xi}function xi(){this.i=null,this.g="",this.h=!1}var ji={},Rn={};function kn(t,s,a){t.L=1,t.v=xt(ce(s)),t.m=a,t.P=!0,Fi(t,null)}function Fi(t,s){t.F=Date.now(),Lt(t),t.A=ce(t.v);var a=t.A,l=t.R;Array.isArray(l)||(l=[String(l)]),Zi(a.i,"t",l),t.C=0,a=t.j.J,t.h=new xi,t.g=vr(t.j,a?s:null,!t.m),0<t.O&&(t.M=new Io(C(t.Y,t,t.g),t.O)),s=t.U,a=t.g,l=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(Pi[0]=y.toString()),y=Pi);for(var w=0;w<y.length;w++){var T=Si(a,y[w],l||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),ot(),So(t.i,t.u,t.A,t.l,t.R,t.m)}ye.prototype.ca=function(t){t=t.target;const s=this.M;s&&le(t)==3?s.j():this.Y(t)},ye.prototype.Y=function(t){try{if(t==this.g)e:{const z=le(this.g);var s=this.g.Ba();const Ve=this.g.Z();if(!(3>z)&&(z!=3||this.g&&(this.h.h||this.g.oa()||or(this.g)))){this.J||z!=4||s==7||(s==8||0>=Ve?ot(3):ot(2)),Cn(this);var a=this.g.Z();this.X=a;t:if(Bi(this)){var l=or(this.g);t="";var y=l.length,w=le(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Oe(this),lt(this);var T="";break t}this.h.i=new p.TextDecoder}for(s=0;s<y;s++)this.h.h=!0,t+=this.h.i.decode(l[s],{stream:!(w&&s==y-1)});l.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,Ao(this.i,this.u,this.A,this.l,this.R,z,a),this.o){if(this.T&&!this.K){t:{if(this.g){var N,F=this.g;if((N=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(N)){var P=N;break t}}P=null}if(a=P)Fe(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pn(this,a);else{this.o=!1,this.s=3,G(12),Oe(this),lt(this);break e}}if(this.P){a=!0;let ne;for(;!this.J&&this.C<T.length;)if(ne=Co(this,T),ne==Rn){z==4&&(this.s=4,G(14),a=!1),Fe(this.i,this.l,null,"[Incomplete Response]");break}else if(ne==ji){this.s=4,G(15),Fe(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else Fe(this.i,this.l,ne,null),Pn(this,ne);if(Bi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||T.length!=0||this.h.h||(this.s=1,G(16),a=!1),this.o=this.o&&a,!a)Fe(this.i,this.l,T,"[Invalid Chunked Response]"),Oe(this),lt(this);else if(0<T.length&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.ba&&!H.M&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Un(H),H.M=!0,G(11))}}else Fe(this.i,this.l,T,null),Pn(this,T);z==4&&Oe(this),this.o&&!this.J&&(z==4?fr(this.j,this):(this.o=!1,Lt(this)))}else Go(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,G(12)):(this.s=0,G(13)),Oe(this),lt(this)}}}catch{}finally{}};function Bi(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Co(t,s){var a=t.C,l=s.indexOf(`
`,a);return l==-1?Rn:(a=Number(s.substring(a,l)),isNaN(a)?ji:(l+=1,l+a>s.length?Rn:(s=s.slice(l,l+a),t.C=l+a,s)))}ye.prototype.cancel=function(){this.J=!0,Oe(this)};function Lt(t){t.S=Date.now()+t.I,$i(t,t.I)}function $i(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=at(C(t.ba,t),s)}function Cn(t){t.B&&(p.clearTimeout(t.B),t.B=null)}ye.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(bo(this.i,this.A),this.L!=2&&(ot(),G(17)),Oe(this),this.s=2,lt(this)):$i(this,this.S-t)};function lt(t){t.j.G==0||t.J||fr(t.j,t)}function Oe(t){Cn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,Oi(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function Pn(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||On(a.h,t))){if(!t.K&&On(a.h,t)&&a.G==3){try{var l=a.Da.g.parse(s)}catch{l=null}if(Array.isArray(l)&&l.length==3){var y=l;if(y[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)Ht(a),$t(a);else break e;Mn(a),G(18)}}else a.za=y[1],0<a.za-a.T&&37500>y[2]&&a.F&&a.v==0&&!a.C&&(a.C=at(C(a.Za,a),6e3));if(1>=zi(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Ne(a,11)}else if((t.K||a.g==t)&&Ht(a),!Z(s))for(y=a.Da.g.parse(s),s=0;s<y.length;s++){let P=y[s];if(a.T=P[0],P=P[1],a.G==2)if(P[0]=="c"){a.K=P[1],a.ia=P[2];const H=P[3];H!=null&&(a.la=H,a.j.info("VER="+a.la));const z=P[4];z!=null&&(a.Aa=z,a.j.info("SVER="+a.Aa));const Ve=P[5];Ve!=null&&typeof Ve=="number"&&0<Ve&&(l=1.5*Ve,a.L=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const ne=t.g;if(ne){const zt=ne.g?ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zt){var w=l.h;w.g||zt.indexOf("spdy")==-1&&zt.indexOf("quic")==-1&&zt.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Dn(w,w.h),w.h=null))}if(l.D){const xn=ne.g?ne.g.getResponseHeader("X-HTTP-Session-Id"):null;xn&&(l.ya=xn,L(l.I,l.D,xn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),l=a;var T=t;if(l.qa=mr(l,l.J?l.ia:null,l.W),T.K){Wi(l.h,T);var N=T,F=l.L;F&&(N.I=F),N.B&&(Cn(N),Lt(N)),l.g=T}else ur(l);0<a.i.length&&Vt(a)}else P[0]!="stop"&&P[0]!="close"||Ne(a,7);else a.G==3&&(P[0]=="stop"||P[0]=="close"?P[0]=="stop"?Ne(a,7):Ln(a):P[0]!="noop"&&a.l&&a.l.ta(P),a.v=0)}}ot(4)}catch{}}var Po=class{constructor(t,s){this.g=t,this.map=s}};function Vi(t){this.l=t||10,p.PerformanceNavigationTiming?(t=p.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zi(t){return t.h?1:t.g?t.g.size:0}function On(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Dn(t,s){t.g?t.g.add(s):t.h=s}function Wi(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}Vi.prototype.cancel=function(){if(this.i=Gi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Gi(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return x(t.i)}function Oo(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(I(t)){for(var s=[],a=t.length,l=0;l<a;l++)s.push(t[l]);return s}s=[],a=0;for(l in t)s[a++]=t[l];return s}function Do(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(I(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const l in t)s[a++]=l;return s}}}function Ki(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(I(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=Do(t),l=Oo(t),y=l.length,w=0;w<y;w++)s.call(void 0,l[w],a&&a[w],t)}var qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function No(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var l=t[a].indexOf("="),y=null;if(0<=l){var w=t[a].substring(0,l);y=t[a].substring(l+1)}else w=t[a];s(w,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function De(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof De){this.h=t.h,Mt(this,t.j),this.o=t.o,this.g=t.g,Ut(this,t.s),this.l=t.l;var s=t.i,a=new dt;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),Ji(this,a),this.m=t.m}else t&&(s=String(t).match(qi))?(this.h=!1,Mt(this,s[1]||"",!0),this.o=ht(s[2]||""),this.g=ht(s[3]||"",!0),Ut(this,s[4]),this.l=ht(s[5]||"",!0),Ji(this,s[6]||"",!0),this.m=ht(s[7]||"")):(this.h=!1,this.i=new dt(null,this.h))}De.prototype.toString=function(){var t=[],s=this.j;s&&t.push(ut(s,Xi,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(ut(s,Xi,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(ut(a,a.charAt(0)=="/"?Uo:Mo,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",ut(a,jo)),t.join("")};function ce(t){return new De(t)}function Mt(t,s,a){t.j=a?ht(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Ut(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function Ji(t,s,a){s instanceof dt?(t.i=s,Fo(t.i,t.h)):(a||(s=ut(s,xo)),t.i=new dt(s,t.h))}function L(t,s,a){t.i.set(s,a)}function xt(t){return L(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ht(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ut(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,Lo),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Lo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Xi=/[#\/\?@]/g,Mo=/[#\?:]/g,Uo=/[#\?]/g,xo=/[#\?@]/g,jo=/#/g;function dt(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function _e(t){t.g||(t.g=new Map,t.h=0,t.i&&No(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}n=dt.prototype,n.add=function(t,s){_e(this),this.i=null,t=Be(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function Yi(t,s){_e(t),s=Be(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function Qi(t,s){return _e(t),s=Be(t,s),t.g.has(s)}n.forEach=function(t,s){_e(this),this.g.forEach(function(a,l){a.forEach(function(y){t.call(s,y,l,this)},this)},this)},n.na=function(){_e(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let l=0;l<s.length;l++){const y=t[l];for(let w=0;w<y.length;w++)a.push(s[l])}return a},n.V=function(t){_e(this);let s=[];if(typeof t=="string")Qi(this,t)&&(s=s.concat(this.g.get(Be(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},n.set=function(t,s){return _e(this),this.i=null,t=Be(this,t),Qi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},n.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function Zi(t,s,a){Yi(t,s),0<a.length&&(t.i=null,t.g.set(Be(t,s),x(a)),t.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var l=s[a];const w=encodeURIComponent(String(l)),T=this.V(l);for(l=0;l<T.length;l++){var y=w;T[l]!==""&&(y+="="+encodeURIComponent(String(T[l]))),t.push(y)}}return this.i=t.join("&")};function Be(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Fo(t,s){s&&!t.j&&(_e(t),t.i=null,t.g.forEach(function(a,l){var y=l.toLowerCase();l!=y&&(Yi(this,l),Zi(this,y,a))},t)),t.j=s}function Bo(t,s){const a=new ct;if(p.Image){const l=new Image;l.onload=j(Ie,a,"TestLoadImage: loaded",!0,s,l),l.onerror=j(Ie,a,"TestLoadImage: error",!1,s,l),l.onabort=j(Ie,a,"TestLoadImage: abort",!1,s,l),l.ontimeout=j(Ie,a,"TestLoadImage: timeout",!1,s,l),p.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=t}else s(!1)}function $o(t,s){const a=new ct,l=new AbortController,y=setTimeout(()=>{l.abort(),Ie(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:l.signal}).then(w=>{clearTimeout(y),w.ok?Ie(a,"TestPingServer: ok",!0,s):Ie(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(y),Ie(a,"TestPingServer: error",!1,s)})}function Ie(t,s,a,l,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),l(a)}catch{}}function Vo(){this.g=new Eo}function Ho(t,s,a){const l=a||"";try{Ki(t,function(y,w){let T=y;E(y)&&(T=In(y)),s.push(l+w+"="+encodeURIComponent(T))})}catch(y){throw s.push(l+"type="+encodeURIComponent("_badmap")),y}}function jt(t){this.l=t.Ub||null,this.j=t.eb||!1}k(jt,wn),jt.prototype.g=function(){return new Ft(this.l,this.j)},jt.prototype.i=function(t){return function(){return t}}({});function Ft(t,s){V.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ft,V),n=Ft.prototype,n.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,pt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||p).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ft(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pt(this)),this.g&&(this.readyState=3,pt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;er(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function er(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?ft(this):pt(this),this.readyState==3&&er(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,ft(this))},n.Qa=function(t){this.g&&(this.response=t,ft(this))},n.ga=function(){this.g&&ft(this)};function ft(t){t.readyState=4,t.l=null,t.j=null,t.v=null,pt(t)}n.setRequestHeader=function(t,s){this.u.append(t,s)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function pt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ft.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function tr(t){let s="";return X(t,function(a,l){s+=l,s+=":",s+=a,s+=`\r
`}),s}function Nn(t,s,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=tr(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):L(t,s,a))}function U(t){V.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(U,V);var zo=/^https?$/i,Wo=["POST","PUT"];n=U.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,s,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bn.g(),this.v=this.o?Di(this.o):Di(bn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(w){nr(this,w);return}if(t=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var y in l)a.set(y,l[y]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const w of l.keys())a.set(w,l.get(w));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(w=>w.toLowerCase()=="content-type"),y=p.FormData&&t instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Wo,s,void 0))||l||y||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,T]of a)this.g.setRequestHeader(w,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sr(this),this.u=!0,this.g.send(t),this.u=!1}catch(w){nr(this,w)}};function nr(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,ir(t),Bt(t)}function ir(t){t.A||(t.A=!0,W(t,"complete"),W(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,W(this,"complete"),W(this,"abort"),Bt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bt(this,!0)),U.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?rr(this):this.bb())},n.bb=function(){rr(this)};function rr(t){if(t.h&&typeof h<"u"&&(!t.v[1]||le(t)!=4||t.Z()!=2)){if(t.u&&le(t)==4)ki(t.Ea,0,t);else if(W(t,"readystatechange"),le(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var l;if(l=T===0){var y=String(t.D).match(qi)[1]||null;!y&&p.self&&p.self.location&&(y=p.self.location.protocol.slice(0,-1)),l=!zo.test(y?y.toLowerCase():"")}a=l}if(a)W(t,"complete"),W(t,"success");else{t.m=6;try{var w=2<le(t)?t.g.statusText:""}catch{w=""}t.l=w+" ["+t.Z()+"]",ir(t)}}finally{Bt(t)}}}}function Bt(t,s){if(t.g){sr(t);const a=t.g,l=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||W(t,"ready");try{a.onreadystatechange=l}catch{}}}function sr(t){t.I&&(p.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function le(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<le(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),wo(s)}};function or(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Go(t){const s={};t=(t.g&&2<=le(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<t.length;l++){if(Z(t[l]))continue;var a=m(t[l]);const y=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const w=s[y]||[];s[y]=w,w.push(a)}v(s,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function ar(t){this.Aa=0,this.i=[],this.j=new ct,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gt("baseRetryDelayMs",5e3,t),this.cb=gt("retryDelaySeedMs",1e4,t),this.Wa=gt("forwardChannelMaxRetries",2,t),this.wa=gt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Vi(t&&t.concurrentRequestLimit),this.Da=new Vo,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ar.prototype,n.la=8,n.G=1,n.connect=function(t,s,a,l){G(0),this.W=t,this.H=s||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.I=mr(this,null,this.W),Vt(this)};function Ln(t){if(cr(t),t.G==3){var s=t.U++,a=ce(t.I);if(L(a,"SID",t.K),L(a,"RID",s),L(a,"TYPE","terminate"),mt(t,a),s=new ye(t,t.j,s),s.L=2,s.v=xt(ce(a)),a=!1,p.navigator&&p.navigator.sendBeacon)try{a=p.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&p.Image&&(new Image().src=s.v,a=!0),a||(s.g=vr(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Lt(s)}gr(t)}function $t(t){t.g&&(Un(t),t.g.cancel(),t.g=null)}function cr(t){$t(t),t.u&&(p.clearTimeout(t.u),t.u=null),Ht(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&p.clearTimeout(t.s),t.s=null)}function Vt(t){if(!Hi(t.h)&&!t.s){t.s=!0;var s=t.Ga;tt||Ti(),nt||(tt(),nt=!0),dn.add(s,t),t.B=0}}function Ko(t,s){return zi(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=at(C(t.Ga,t,s),pr(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new ye(this,this.j,t);let w=this.o;if(this.S&&(w?(w=u(w),g(w,this.S)):w=this.S),this.m!==null||this.O||(y.H=w,w=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(s+=l,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=hr(this,y,s),a=ce(this.I),L(a,"RID",t),L(a,"CVER",22),this.D&&L(a,"X-HTTP-Session-Id",this.D),mt(this,a),w&&(this.O?s="headers="+encodeURIComponent(String(tr(w)))+"&"+s:this.m&&Nn(a,this.m,w)),Dn(this.h,y),this.Ua&&L(a,"TYPE","init"),this.P?(L(a,"$req",s),L(a,"SID","null"),y.T=!0,kn(y,a,null)):kn(y,a,s),this.G=2}}else this.G==3&&(t?lr(this,t):this.i.length==0||Hi(this.h)||lr(this))};function lr(t,s){var a;s?a=s.l:a=t.U++;const l=ce(t.I);L(l,"SID",t.K),L(l,"RID",a),L(l,"AID",t.T),mt(t,l),t.m&&t.o&&Nn(l,t.m,t.o),a=new ye(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=hr(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Dn(t.h,a),kn(a,l,s)}function mt(t,s){t.H&&X(t.H,function(a,l){L(s,l,a)}),t.l&&Ki({},function(a,l){L(s,l,a)})}function hr(t,s,a){a=Math.min(t.i.length,a);var l=t.l?C(t.l.Na,t.l,t):null;e:{var y=t.i;let w=-1;for(;;){const T=["count="+a];w==-1?0<a?(w=y[0].g,T.push("ofs="+w)):w=0:T.push("ofs="+w);let N=!0;for(let F=0;F<a;F++){let P=y[F].g;const H=y[F].map;if(P-=w,0>P)w=Math.max(0,y[F].g-100),N=!1;else try{Ho(H,T,"req"+P+"_")}catch{l&&l(H)}}if(N){l=T.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,l}function ur(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;tt||Ti(),nt||(tt(),nt=!0),dn.add(s,t),t.v=0}}function Mn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=at(C(t.Fa,t),pr(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,dr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=at(C(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,G(10),$t(this),dr(this))};function Un(t){t.A!=null&&(p.clearTimeout(t.A),t.A=null)}function dr(t){t.g=new ye(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=ce(t.qa);L(s,"RID","rpc"),L(s,"SID",t.K),L(s,"AID",t.T),L(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&L(s,"TO",t.ja),L(s,"TYPE","xmlhttp"),mt(t,s),t.m&&t.o&&Nn(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=xt(ce(s)),a.m=null,a.P=!0,Fi(a,t)}n.Za=function(){this.C!=null&&(this.C=null,$t(this),Mn(this),G(19))};function Ht(t){t.C!=null&&(p.clearTimeout(t.C),t.C=null)}function fr(t,s){var a=null;if(t.g==s){Ht(t),Un(t),t.g=null;var l=2}else if(On(t.h,s))a=s.D,Wi(t.h,s),l=1;else return;if(t.G!=0){if(s.o)if(l==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var y=t.B;l=Sn(),W(l,new Ui(l,a)),Vt(t)}else ur(t);else if(y=s.s,y==3||y==0&&0<s.X||!(l==1&&Ko(t,s)||l==2&&Mn(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),y){case 1:Ne(t,5);break;case 4:Ne(t,10);break;case 3:Ne(t,6);break;default:Ne(t,2)}}}function pr(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function Ne(t,s){if(t.j.info("Error code "+s),s==2){var a=C(t.fb,t),l=t.Xa;const y=!l;l=new De(l||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Mt(l,"https"),xt(l),y?Bo(l.toString(),a):$o(l.toString(),a)}else G(2);t.G=0,t.l&&t.l.sa(s),gr(t),cr(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),G(2)):(this.j.info("Failed to ping google.com"),G(1))};function gr(t){if(t.G=0,t.ka=[],t.l){const s=Gi(t.h);(s.length!=0||t.i.length!=0)&&(M(t.ka,s),M(t.ka,t.i),t.h.i.length=0,x(t.i),t.i.length=0),t.l.ra()}}function mr(t,s,a){var l=a instanceof De?ce(a):new De(a);if(l.g!="")s&&(l.g=s+"."+l.g),Ut(l,l.s);else{var y=p.location;l=y.protocol,s=s?s+"."+y.hostname:y.hostname,y=+y.port;var w=new De(null);l&&Mt(w,l),s&&(w.g=s),y&&Ut(w,y),a&&(w.l=a),l=w}return a=t.D,s=t.ya,a&&s&&L(l,a,s),L(l,"VER",t.la),mt(t,l),l}function vr(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new U(new jt({eb:a})):new U(t.pa),s.Ha(t.J),s}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function yr(){}n=yr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ee(t,s){V.call(this),this.g=new ar(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!Z(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!Z(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new $e(this)}k(ee,V),ee.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ee.prototype.close=function(){Ln(this.g)},ee.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=In(t),t=a);s.i.push(new Po(s.Ya++,t)),s.G==3&&Vt(s)},ee.prototype.N=function(){this.g.l=null,delete this.j,Ln(this.g),delete this.g,ee.aa.N.call(this)};function _r(t){En.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}k(_r,En);function Ir(){Tn.call(this),this.status=1}k(Ir,Tn);function $e(t){this.g=t}k($e,yr),$e.prototype.ua=function(){W(this.g,"a")},$e.prototype.ta=function(t){W(this.g,new _r(t))},$e.prototype.sa=function(t){W(this.g,new Ir)},$e.prototype.ra=function(){W(this.g,"b")},ee.prototype.send=ee.prototype.o,ee.prototype.open=ee.prototype.m,ee.prototype.close=ee.prototype.close,An.NO_ERROR=0,An.TIMEOUT=8,An.HTTP_ERROR=6,ko.COMPLETE="complete",To.EventType=st,st.OPEN="a",st.CLOSE="b",st.ERROR="c",st.MESSAGE="d",V.prototype.listen=V.prototype.K,U.prototype.listenOnce=U.prototype.L,U.prototype.getLastError=U.prototype.Ka,U.prototype.getLastErrorCode=U.prototype.Ba,U.prototype.getStatus=U.prototype.Z,U.prototype.getResponseJson=U.prototype.Oa,U.prototype.getResponseText=U.prototype.oa,U.prototype.send=U.prototype.ea,U.prototype.setWithCredentials=U.prototype.Ha}).apply(typeof Kt<"u"?Kt:typeof self<"u"?self:typeof window<"u"?window:{});const Qr="@firebase/firestore";/**
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
 */class K{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}K.UNAUTHENTICATED=new K(null),K.GOOGLE_CREDENTIALS=new K("google-credentials-uid"),K.FIRST_PARTY=new K("first-party-uid"),K.MOCK_USER=new K("mock-user");/**
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
 */let kt="10.14.0";/**
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
 */const Je=new ai("@firebase/firestore");function ie(n,...e){if(Je.logLevel<=D.DEBUG){const i=e.map(Ii);Je.debug(`Firestore (${kt}): ${n}`,...i)}}function oo(n,...e){if(Je.logLevel<=D.ERROR){const i=e.map(Ii);Je.error(`Firestore (${kt}): ${n}`,...i)}}function Gh(n,...e){if(Je.logLevel<=D.WARN){const i=e.map(Ii);Je.warn(`Firestore (${kt}): ${n}`,...i)}}function Ii(n){if(typeof n=="string")return n;try{/**
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
*/return function(i){return JSON.stringify(i)}(n)}catch{return n}}/**
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
 */function wi(n="Unexpected state"){const e=`FIRESTORE (${kt}) INTERNAL ASSERTION FAILED: `+n;throw oo(e),new Error(e)}function yt(n,e){n||wi()}/**
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
 */const Y={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Q extends me{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _t{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
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
 */class ao{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(K.UNAUTHENTICATED))}shutdown(){}}class qh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Jh{constructor(e){this.t=e,this.currentUser=K.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){yt(this.o===void 0);let r=this.i;const o=I=>this.i!==r?(r=this.i,i(I)):Promise.resolve();let c=new _t;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new _t,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const I=c;e.enqueueRetryable(async()=>{await I.promise,await o(this.currentUser)})},p=I=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=I,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(I=>p(I)),setTimeout(()=>{if(!this.auth){const I=this.t.getImmediate({optional:!0});I?p(I):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new _t)}},0),h()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(yt(typeof r.accessToken=="string"),new ao(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return yt(e===null||typeof e=="string"),new K(e)}}class Xh{constructor(e,i,r){this.l=e,this.h=i,this.P=r,this.type="FirstParty",this.user=K.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Yh{constructor(e,i,r){this.l=e,this.h=i,this.P=r}getToken(){return Promise.resolve(new Xh(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(K.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,i){yt(this.o===void 0);const r=c=>{c.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.R;return this.R=c.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?o(c):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(yt(typeof i.token=="string"),this.R=i.token,new Qh(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function eu(n){return n.name==="IndexedDbTransactionError"}class ln{constructor(e,i){this.projectId=e,this.database=i||"(default)"}static empty(){return new ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ln&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Zr,R;(R=Zr||(Zr={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new so([4294967295,4294967295],0);function Gn(){return typeof document<"u"?document:null}/**
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
 */class tu{constructor(e,i,r=1e3,o=1.5,c=6e4){this.ui=e,this.timerId=i,this.ko=r,this.qo=o,this.Qo=c,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const i=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),o=Math.max(0,i-r);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Ei{constructor(e,i,r,o,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new _t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,o,c){const h=Date.now()+r,p=new Ei(e,i,h,o,c);return p.start(r),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var es,ts;(ts=es||(es={})).ea="default",ts.Cache="cache";/**
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
 */function nu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ns=new Map;function iu(n,e,i,r){if(e===!0&&r===!0)throw new Q(Y.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function ru(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":wi()}function su(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=ru(n);throw new Q(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return n}/**
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
 */class is{constructor(e){var i,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(i=e.ssl)===null||i===void 0||i;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new Q(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new Q(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new Q(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class co{constructor(e,i,r,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new is({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new is(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Kh;switch(r.type){case"firstParty":return new Yh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const r=ns.get(i);r&&(ie("ComponentProvider","Removing Datastore"),ns.delete(i),r.terminate())}(this),Promise.resolve()}}function ou(n,e,i,r={}){var o;const c=(n=su(n,co))._getSettings(),h=`${e}:${i}`;if(c.host!=="firestore.googleapis.com"&&c.host!==h&&Gh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},c),{host:h,ssl:!1})),r.mockUserToken){let p,I;if(typeof r.mockUserToken=="string")p=r.mockUserToken,I=K.MOCK_USER;else{p=Aa(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new Q(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new K(E)}n._authCredentials=new qh(new ao(p,I))}}/**
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
 */class rs{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new tu(this,"async_queue_retry"),this.Vu=()=>{const r=Gn();r&&ie("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const i=Gn();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const i=Gn();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const i=new _t;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!eu(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const i=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const o=function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p}(r);throw oo("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.du=!1,r))));return this.mu=i,i}enqueueAfterDelay(e,i,r){this.fu(),this.Ru.indexOf(e)>-1&&(i=0);const o=Ei.createAndSchedule(this,e,i,r,c=>this.yu(c));return this.Tu.push(o),o}fu(){this.Eu&&wi()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const i of this.Tu)if(i.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((i,r)=>i.targetTimeMs-r.targetTimeMs);for(const i of this.Tu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const i=this.Tu.indexOf(e);this.Tu.splice(i,1)}}class au extends co{constructor(e,i,r,o){super(e,i,r,o),this.type="firestore",this._queue=new rs,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rs(e),this._firestoreClient=void 0,await e}}}function cu(n,e){const i=typeof n=="object"?n:Ss(),r=typeof n=="string"?n:"(default)",o=li(i,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=Ta("firestore");c&&ou(o,...c)}return o}(function(e,i=!0){(function(o){kt=o})(Qe),Ke(new Ue("firestore",(r,{instanceIdentifier:o,options:c})=>{const h=r.getProvider("app").getImmediate(),p=new au(new Jh(r.getProvider("auth-internal")),new Zh(r.getProvider("app-check-internal")),function(E,b){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new Q(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ln(E.options.projectId,b)}(h,o),h);return c=Object.assign({useFetchStreams:i},c),p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),Ce(Qr,"4.7.3",e),Ce(Qr,"4.7.3","esm2017")})();const lu={apiKey:"AIzaSyDDOeFzIt7u4iLNZwgM2-VD0vE31MgcaD4",authDomain:"brainstorm-91600.firebaseapp.com",projectId:"brainstorm-91600",storageBucket:"brainstorm-91600.firebasestorage.app",messagingSenderId:"580961999022",appId:"1:580961999022:web:c55b6bddeff6733eacf53f",measurementId:"G-B3MWGJ6QCB"},lo=Ts(lu);zh(lo);cu(lo);
