(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const T="/friendly-id-decoder/dist/assets/friendly_id_wasm_bg-1042c356.wasm",v=async(e={},n)=>{let c;if(n.startsWith("data:")){const i=n.replace(/^data:.*?base64,/,"");let t;if(typeof Buffer=="function"&&typeof Buffer.from=="function")t=Buffer.from(i,"base64");else if(typeof atob=="function"){const o=atob(i);t=new Uint8Array(o.length);for(let r=0;r<o.length;r++)t[r]=o.charCodeAt(r)}else throw new Error("Cannot decode base64-encoded data URL");c=await WebAssembly.instantiate(t,e)}else{const i=await fetch(n),t=i.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&t.startsWith("application/wasm"))c=await WebAssembly.instantiateStreaming(i,e);else{const o=await i.arrayBuffer();c=await WebAssembly.instantiate(o,e)}}return c.instance.exports};let d;function E(e){d=e}const x=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let p=new x("utf-8",{ignoreBOM:!0,fatal:!0});p.decode();let f=null;function _(){return(f===null||f.byteLength===0)&&(f=new Uint8Array(d.memory.buffer)),f}function h(e,n){return e=e>>>0,p.decode(_().subarray(e,e+n))}let y=0;const L=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let m=new L("utf-8");const S=typeof m.encodeInto=="function"?function(e,n){return m.encodeInto(e,n)}:function(e,n){const c=m.encode(e);return n.set(c),{read:e.length,written:c.length}};function A(e,n,c){if(c===void 0){const s=m.encode(e),l=n(s.length,1)>>>0;return _().subarray(l,l+s.length).set(s),y=s.length,l}let i=e.length,t=n(i,1)>>>0;const o=_();let r=0;for(;r<i;r++){const s=e.charCodeAt(r);if(s>127)break;o[t+r]=s}if(r!==i){r!==0&&(e=e.slice(r)),t=c(t,i,i=r+e.length*3,1)>>>0;const s=_().subarray(t+r,t+i),l=S(e,s);r+=l.written}return y=r,t}let u=null;function b(){return(u===null||u.byteLength===0)&&(u=new Int32Array(d.memory.buffer)),u}function O(e){let n,c;try{const o=d.__wbindgen_add_to_stack_pointer(-16),r=A(e,d.__wbindgen_malloc,d.__wbindgen_realloc),s=y;d.decode(o,r,s);var i=b()[o/4+0],t=b()[o/4+1];return n=i,c=t,h(i,t)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_free(n,c,1)}}function W(e,n){throw new Error(h(e,n))}URL=globalThis.URL;const a=await v({"./friendly_id_wasm_bg.js":{__wbindgen_throw:W}},T),I=a.memory,M=a.decode,B=a.__wbindgen_add_to_stack_pointer,U=a.__wbindgen_malloc,C=a.__wbindgen_realloc,D=a.__wbindgen_free,P=Object.freeze(Object.defineProperty({__proto__:null,__wbindgen_add_to_stack_pointer:B,__wbindgen_free:D,__wbindgen_malloc:U,__wbindgen_realloc:C,decode:M,memory:I},Symbol.toStringTag,{value:"Module"}));E(P);const g=document.getElementById("input"),w=document.getElementById("dst");async function F(){g.addEventListener("input",()=>{try{const e=g.value.replace("FSBS",""),n=O(e);w.value=n}catch(e){w.value="なんかおかしいです",console.log(e)}})}F();