"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=n(function(k,q){
function y(e,r,i,a,p){var u,t;if(e<=0)return-1;for(u=p,t=0;t<e;t++){if(i[u]!==r)return t;u+=a}return-1}q.exports=y
});var f=n(function(w,v){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=s();function j(e,r,i,a){return O(e,r,i,a,E(e,a))}v.exports=j
});var c=n(function(z,x){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=f(),N=s();m(d,"ndarray",N);x.exports=d
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),o,l=_(R(__dirname,"./native.js"));b(l)?o=g:o=l;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
