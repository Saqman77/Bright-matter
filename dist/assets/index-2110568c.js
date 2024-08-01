var Wp=Object.defineProperty;var Xp=(r,e,t)=>e in r?Wp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var yi=(r,e,t)=>(Xp(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wc="158",qp=0,Eu=1,Yp=2,Df=1,$p=2,Ri=3,or=0,yn=1,Di=2,er=0,Ss=1,So=2,Tu=3,bu=4,Kp=5,Tr=100,Zp=101,jp=102,wu=103,Au=104,Jp=200,Qp=201,em=202,tm=203,lc=204,cc=205,nm=206,im=207,rm=208,sm=209,om=210,am=211,lm=212,cm=213,um=214,hm=0,fm=1,dm=2,Oa=3,pm=4,mm=5,_m=6,gm=7,Uf=0,vm=1,xm=2,tr=0,Sm=1,Mm=2,ym=3,Em=4,Tm=5,If=300,Rs=301,Cs=302,uc=303,hc=304,tl=306,fc=1e3,li=1001,dc=1002,pn=1003,Ru=1004,pl=1005,Yn=1006,bm=1007,Mo=1008,nr=1009,wm=1010,Am=1011,Xc=1012,Nf=1013,qi=1014,Yi=1015,yo=1016,Of=1017,Ff=1018,Cr=1020,Rm=1021,ci=1023,Cm=1024,Pm=1025,Pr=1026,Ps=1027,Lm=1028,zf=1029,Dm=1030,Bf=1031,kf=1033,ml=33776,_l=33777,gl=33778,vl=33779,Cu=35840,Pu=35841,Lu=35842,Du=35843,Um=36196,Uu=37492,Iu=37496,Nu=37808,Ou=37809,Fu=37810,zu=37811,Bu=37812,ku=37813,Hu=37814,Gu=37815,Vu=37816,Wu=37817,Xu=37818,qu=37819,Yu=37820,$u=37821,xl=36492,Ku=36494,Zu=36495,Im=36283,ju=36284,Ju=36285,Qu=36286,Hf=3e3,Lr=3001,Nm=3200,Om=3201,Fm=0,zm=1,Zn="",Kt="srgb",Fi="srgb-linear",qc="display-p3",nl="display-p3-linear",Fa="linear",Mt="srgb",za="rec709",Ba="p3",Kr=7680,eh=519,Bm=512,km=513,Hm=514,Gm=515,Vm=516,Wm=517,Xm=518,qm=519,th=35044,nh="300 es",pc=1035,Ii=2e3,ka=2001;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sl=Math.PI/180,mc=180/Math.PI;function No(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Mn(r,e,t){return Math.max(e,Math.min(t,r))}function Ym(r,e){return(r%e+e)%e}function Ml(r,e,t){return(1-t)*r+t*e}function ih(r){return(r&r-1)===0&&r!==0}function _c(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Hs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,i,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],v=i[4],S=i[7],E=i[2],A=i[5],w=i[8];return s[0]=a*_+o*M+l*E,s[3]=a*m+o*v+l*A,s[6]=a*p+o*S+l*w,s[1]=c*_+u*M+h*E,s[4]=c*m+u*v+h*A,s[7]=c*p+u*S+h*w,s[2]=f*_+d*M+g*E,s[5]=f*m+d*v+g*A,s[8]=f*p+d*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yl.makeScale(e,t)),this}rotate(e){return this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yl=new Je;function Gf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Eo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $m(){const r=Eo("canvas");return r.style.display="block",r}const rh={};function so(r){r in rh||(rh[r]=!0,console.warn(r))}const sh=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oh=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ho={[Fi]:{transfer:Fa,primaries:za,toReference:r=>r,fromReference:r=>r},[Kt]:{transfer:Mt,primaries:za,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[nl]:{transfer:Fa,primaries:Ba,toReference:r=>r.applyMatrix3(oh),fromReference:r=>r.applyMatrix3(sh)},[qc]:{transfer:Mt,primaries:Ba,toReference:r=>r.convertSRGBToLinear().applyMatrix3(oh),fromReference:r=>r.applyMatrix3(sh).convertLinearToSRGB()}},Km=new Set([Fi,nl]),ft={enabled:!0,_workingColorSpace:Fi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Km.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ho[e].toReference,i=Ho[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ho[r].primaries},getTransfer:function(r){return r===Zn?Fa:Ho[r].transfer}};function Ms(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function El(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Zr;class Vf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zr===void 0&&(Zr=Eo("canvas")),Zr.width=e.width,Zr.height=e.height;const n=Zr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ms(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ms(t[n]/255)*255):t[n]=Ms(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zm=0;class Wf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=No(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Tl(i[a].image)):s.push(Tl(i[a]))}else s=Tl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Vf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jm=0;class En extends zs{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,n=li,i=li,s=Yn,a=Mo,o=ci,l=nr,c=En.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=No(),this.name="",this.source=new Wf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(so("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Lr?Kt:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==If)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return so("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?Lr:Hf}set encoding(e){so("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Lr?Kt:Zn}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=If;En.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(d+1)/2,E=(p+1)/2,A=(u+f)/4,w=(h+_)/4,D=(g+m)/4;return v>S&&v>E?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=w/n):S>E?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=D/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=w/s,i=D/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jm extends zs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(so("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Lr?Kt:Zn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new En(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends Jm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xf extends En{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qm extends En{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,p*M);m=Math.sin(m*A)/E,o=Math.sin(o*A)/E}const S=o*M;if(l=l*m+f*S,c=c*m+d*S,u=u*m+g*S,h=h*m+_*S,m===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ah.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bl.copy(this).projectOnVector(e),this.sub(bl)}reflect(e){return this.sub(bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bl=new X,ah=new Oo;class Fo{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(s,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Vo.subVectors(this.max,Gs),jr.subVectors(e.a,Gs),Jr.subVectors(e.b,Gs),Qr.subVectors(e.c,Gs),ki.subVectors(Jr,jr),Hi.subVectors(Qr,Jr),dr.subVectors(jr,Qr);let t=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-dr.z,dr.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,dr.z,0,-dr.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-dr.y,dr.x,0];return!wl(t,jr,Jr,Qr,Vo)||(t=[1,0,0,0,1,0,0,0,1],!wl(t,jr,Jr,Qr,Vo))?!1:(Wo.crossVectors(ki,Hi),t=[Wo.x,Wo.y,Wo.z],wl(t,jr,Jr,Qr,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new X,new X,new X,new X,new X,new X,new X,new X],ti=new X,Go=new Fo,jr=new X,Jr=new X,Qr=new X,ki=new X,Hi=new X,dr=new X,Gs=new X,Vo=new X,Wo=new X,pr=new X;function wl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){pr.fromArray(r,s);const o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),l=e.dot(pr),c=t.dot(pr),u=n.dot(pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const e_=new Fo,Vs=new X,Al=new X;class il{constructor(e=new X,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):e_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Al)),this.expandByPoint(Vs.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new X,Rl=new X,Xo=new X,Gi=new X,Cl=new X,qo=new X,Pl=new X;class qf{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rl.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Rl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Xo),o=Gi.dot(this.direction),l=-Gi.dot(Xo),c=Gi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Rl).addScaledVector(Xo,f),d}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,i,s){Cl.subVectors(t,e),qo.subVectors(n,e),Pl.crossVectors(Cl,qo);let a=this.direction.dot(Pl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const l=o*this.direction.dot(qo.crossVectors(Gi,qo));if(l<0)return null;const c=o*this.direction.dot(Cl.cross(Gi));if(c<0||l+c>a)return null;const u=-o*Gi.dot(Pl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,n,i,s,a,o,l,c,u,h,f,d,g,_,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t_,e,n_)}lookAt(e,t,n){const i=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Vi.crossVectors(n,Dn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Vi.crossVectors(n,Dn)),Vi.normalize(),Yo.crossVectors(Dn,Vi),i[0]=Vi.x,i[4]=Yo.x,i[8]=Dn.x,i[1]=Vi.y,i[5]=Yo.y,i[9]=Dn.y,i[2]=Vi.z,i[6]=Yo.z,i[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],v=n[7],S=n[11],E=n[15],A=i[0],w=i[4],D=i[8],x=i[12],b=i[1],F=i[5],N=i[9],Z=i[13],P=i[2],z=i[6],q=i[10],O=i[14],j=i[3],Y=i[7],R=i[11],U=i[15];return s[0]=a*A+o*b+l*P+c*j,s[4]=a*w+o*F+l*z+c*Y,s[8]=a*D+o*N+l*q+c*R,s[12]=a*x+o*Z+l*O+c*U,s[1]=u*A+h*b+f*P+d*j,s[5]=u*w+h*F+f*z+d*Y,s[9]=u*D+h*N+f*q+d*R,s[13]=u*x+h*Z+f*O+d*U,s[2]=g*A+_*b+m*P+p*j,s[6]=g*w+_*F+m*z+p*Y,s[10]=g*D+_*N+m*q+p*R,s[14]=g*x+_*Z+m*O+p*U,s[3]=M*A+v*b+S*P+E*j,s[7]=M*w+v*F+S*z+E*Y,s[11]=M*D+v*N+S*q+E*R,s[15]=M*x+v*Z+S*O+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+m*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,v=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,S=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,E=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,A=t*M+n*v+i*S+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=M*w,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*w,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*w,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*w,e[4]=v*w,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*w,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*w,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*d+t*l*d)*w,e[8]=S*w,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*w,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*w,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*w,e[12]=E*w,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*w,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,_=a*u,m=a*h,p=o*h,M=l*c,v=l*u,S=l*h,E=n.x,A=n.y,w=n.z;return i[0]=(1-(_+p))*E,i[1]=(d+S)*E,i[2]=(g-v)*E,i[3]=0,i[4]=(d-S)*A,i[5]=(1-(f+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+v)*w,i[9]=(m-M)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=es.set(i[0],i[1],i[2]).length();const a=es.set(i[4],i[5],i[6]).length(),o=es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ni.copy(this);const c=1/s,u=1/a,h=1/o;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,t.setFromRotationMatrix(ni),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Ii){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(o===Ii)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ka)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ii){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*c,d=(n+i)*u;let g,_;if(o===Ii)g=(a+s)*h,_=-2*h;else if(o===ka)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new X,ni=new Yt,t_=new X(0,0,0),n_=new X(1,1,1),Vi=new X,Yo=new X,Dn=new X,lh=new Yt,ch=new Oo;class rl{constructor(e=0,t=0,n=0,i=rl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ch.setFromEuler(this),this.setFromQuaternion(ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rl.DEFAULT_ORDER="XYZ";class Yf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i_=0;const uh=new X,ts=new Oo,bi=new Yt,$o=new X,Ws=new X,r_=new X,s_=new Oo,hh=new X(1,0,0),fh=new X(0,1,0),dh=new X(0,0,1),o_={type:"added"},a_={type:"removed"};class Tn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new X,t=new rl,n=new Oo,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Je}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(fh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return uh.copy(e).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(fh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$o.copy(e):$o.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Ws,$o,this.up):bi.lookAt($o,Ws,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(bi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(o_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,r_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,s_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tn.DEFAULT_UP=new X(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new X,wi=new X,Ll=new X,Ai=new X,ns=new X,is=new X,ph=new X,Dl=new X,Ul=new X,Il=new X;let Ko=!1;class oi{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ii.subVectors(e,t),i.cross(ii);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ii.subVectors(i,t),wi.subVectors(n,t),Ll.subVectors(e,t);const a=ii.dot(ii),o=ii.dot(wi),l=ii.dot(Ll),c=wi.dot(wi),u=wi.dot(Ll),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai),Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,n,i,s,a,o,l){return Ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ko=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ai),l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l}static isFrontFacing(e,t,n,i){return ii.subVectors(n,t),wi.subVectors(e,t),ii.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ii.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ko=!0),oi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ns.subVectors(i,n),is.subVectors(s,n),Dl.subVectors(e,n);const l=ns.dot(Dl),c=is.dot(Dl);if(l<=0&&c<=0)return t.copy(n);Ul.subVectors(e,i);const u=ns.dot(Ul),h=is.dot(Ul);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ns,a);Il.subVectors(e,s);const d=ns.dot(Il),g=is.dot(Il);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(is,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ph.subVectors(s,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(ph,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Nl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=Ym(e,1),t=Mn(t,0,1),n=Mn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Nl(a,s,e+1/3),this.g=Nl(a,s,e),this.b=Nl(a,s,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=$f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=El(e.r),this.g=El(e.g),this.b=El(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return ft.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Mn(Qt.r*255,0,255))*65536+Math.round(Mn(Qt.g*255,0,255))*256+Math.round(Mn(Qt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,i=Qt.g,s=Qt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Kt){ft.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,i=Qt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Zo);const n=Ml(Wi.h,Zo.h,t),i=Ml(Wi.s,Zo.s,t),s=Ml(Wi.l,Zo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ut;ut.NAMES=$f;let l_=0;class zo extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=No(),this.name="",this.type="Material",this.blending=Ss,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==or&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lc&&(n.blendSrc=this.blendSrc),this.blendDst!==cc&&(n.blendDst=this.blendDst),this.blendEquation!==Tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kf extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new X,jo=new mt;class Gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=th,this.updateRange={offset:0,count:-1},this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==th&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Zf extends Gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jf extends Gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dr extends Gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let c_=0;const Xn=new Yt,Ol=new Tn,rs=new X,Un=new Fo,Xs=new Fo,Gt=new X;class ui extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gf(e)?jf:Zf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new il);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(Un.min,Xs.min),Un.expandByPoint(Gt),Gt.addVectors(Un.max,Xs.max),Un.expandByPoint(Gt)):(Un.expandByPoint(Xs.min),Un.expandByPoint(Xs.max))}Un.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Gt.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),Gt.add(rs)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new X,u[b]=new X;const h=new X,f=new X,d=new X,g=new mt,_=new mt,m=new mt,p=new X,M=new X;function v(b,F,N){h.fromArray(i,b*3),f.fromArray(i,F*3),d.fromArray(i,N*3),g.fromArray(a,b*2),_.fromArray(a,F*2),m.fromArray(a,N*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);const Z=1/(_.x*m.y-m.x*_.y);isFinite(Z)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(Z),M.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(Z),c[b].add(p),c[F].add(p),c[N].add(p),u[b].add(M),u[F].add(M),u[N].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,F=S.length;b<F;++b){const N=S[b],Z=N.start,P=N.count;for(let z=Z,q=Z+P;z<q;z+=3)v(n[z+0],n[z+1],n[z+2])}const E=new X,A=new X,w=new X,D=new X;function x(b){w.fromArray(s,b*3),D.copy(w);const F=c[b];E.copy(F),E.sub(w.multiplyScalar(w.dot(F))).normalize(),A.crossVectors(D,F);const Z=A.dot(u[b])<0?-1:1;l[b*4]=E.x,l[b*4+1]=E.y,l[b*4+2]=E.z,l[b*4+3]=Z}for(let b=0,F=S.length;b<F;++b){const N=S[b],Z=N.start,P=N.count;for(let z=Z,q=Z+P;z<q;z+=3)x(n[z+0]),x(n[z+1]),x(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,h=new X;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Gn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mh=new Yt,mr=new qf,Jo=new il,_h=new X,ss=new X,os=new X,as=new X,Fl=new X,Qo=new X,ea=new mt,ta=new mt,na=new mt,gh=new X,vh=new X,xh=new X,ia=new X,ra=new X;class $i extends Tn{constructor(e=new ui,t=new Kf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Fl.fromBufferAttribute(h,e),a?Qo.addScaledVector(Fl,u):Qo.addScaledVector(Fl.sub(t),u))}t.add(Qo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Jo.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Jo,_h)===null||mr.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(mh.copy(s).invert(),mr.copy(e.ray).applyMatrix4(mh),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,E=v;S<E;S+=3){const A=o.getX(S),w=o.getX(S+1),D=o.getX(S+2);i=sa(this,p,e,n,c,u,h,A,w,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);i=sa(this,a,e,n,c,u,h,M,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,E=v;S<E;S+=3){const A=S,w=S+1,D=S+2;i=sa(this,p,e,n,c,u,h,A,w,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,v=m+1,S=m+2;i=sa(this,a,e,n,c,u,h,M,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function u_(r,e,t,n,i,s,a,o){let l;if(e.side===yn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===or,o),l===null)return null;ra.copy(o),ra.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:r}}function sa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ss),r.getVertexPosition(l,os),r.getVertexPosition(c,as);const u=u_(r,e,t,n,ss,os,as,ia);if(u){i&&(ea.fromBufferAttribute(i,o),ta.fromBufferAttribute(i,l),na.fromBufferAttribute(i,c),u.uv=oi.getInterpolation(ia,ss,os,as,ea,ta,na,new mt)),s&&(ea.fromBufferAttribute(s,o),ta.fromBufferAttribute(s,l),na.fromBufferAttribute(s,c),u.uv1=oi.getInterpolation(ia,ss,os,as,ea,ta,na,new mt),u.uv2=u.uv1),a&&(gh.fromBufferAttribute(a,o),vh.fromBufferAttribute(a,l),xh.fromBufferAttribute(a,c),u.normal=oi.getInterpolation(ia,ss,os,as,gh,vh,xh,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new X,materialIndex:0};oi.getNormal(ss,os,as,h.normal),u.face=h}return u}class Bo extends ui{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Dr(c,3)),this.setAttribute("normal",new Dr(u,3)),this.setAttribute("uv",new Dr(h,2));function g(_,m,p,M,v,S,E,A,w,D,x){const b=S/w,F=E/D,N=S/2,Z=E/2,P=A/2,z=w+1,q=D+1;let O=0,j=0;const Y=new X;for(let R=0;R<q;R++){const U=R*F-Z;for(let $=0;$<z;$++){const ue=$*b-N;Y[_]=ue*M,Y[m]=U*v,Y[p]=P,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push($/w),h.push(1-R/D),O+=1}}for(let R=0;R<D;R++)for(let U=0;U<w;U++){const $=f+U+z*R,ue=f+U+z*(R+1),oe=f+(U+1)+z*(R+1),he=f+(U+1)+z*R;l.push($,ue,he),l.push(ue,oe,he),j+=6}o.addGroup(d,j,x),d+=j,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function un(r){const e={};for(let t=0;t<r.length;t++){const n=Ls(r[t]);for(const i in n)e[i]=n[i]}return e}function h_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Jf(r){return r.getRenderTarget()===null?r.outputColorSpace:ft.workingColorSpace}const f_={clone:Ls,merge:un};var d_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d_,this.fragmentShader=p_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=h_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qf extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zn extends Qf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mc*2*Math.atan(Math.tan(Sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,cs=1;class m_ extends Tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zn(ls,cs,e,t);i.layers=this.layers,this.add(i);const s=new zn(ls,cs,e,t);s.layers=this.layers,this.add(s);const a=new zn(ls,cs,e,t);a.layers=this.layers,this.add(a);const o=new zn(ls,cs,e,t);o.layers=this.layers,this.add(o);const l=new zn(ls,cs,e,t);l.layers=this.layers,this.add(l);const c=new zn(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ed extends En{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class __ extends Hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(so("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Lr?Kt:Zn),this.texture=new ed(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bo(5,5,5),s=new Gr({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:er});s.uniforms.tEquirect.value=t;const a=new $i(i,s),o=t.minFilter;return t.minFilter===Mo&&(t.minFilter=Yn),new m_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const zl=new X,g_=new X,v_=new Je;class xr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=zl.subVectors(n,t).cross(g_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||v_.getNormalMatrix(e),i=this.coplanarPoint(zl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new il,oa=new X;class td{constructor(e=new xr,t=new xr,n=new xr,i=new xr,s=new xr,a=new xr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ii){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,m-d,S-p).normalize(),n[1].setComponents(l+s,f+c,m+d,S+p).normalize(),n[2].setComponents(l+a,f+u,m+g,S+M).normalize(),n[3].setComponents(l-a,f-u,m-g,S-M).normalize(),n[4].setComponents(l-o,f-h,m-_,S-v).normalize(),t===Ii)n[5].setComponents(l+o,f+h,m+_,S+v).normalize();else if(t===ka)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(oa.x=i.normal.x>0?e.max.x:e.min.x,oa.y=i.normal.y>0?e.max.y:e.min.y,oa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function x_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;r.bindBuffer(h,c),d.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Yc extends ui{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-a;for(let v=0;v<c;v++){const S=v*h-s;g.push(S,-M,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const v=M+c*p,S=M+c*(p+1),E=M+1+c*(p+1),A=M+1+c*p;d.push(v,S,A),d.push(S,E,A)}this.setIndex(d),this.setAttribute("position",new Dr(g,3)),this.setAttribute("normal",new Dr(_,3)),this.setAttribute("uv",new Dr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.width,e.height,e.widthSegments,e.heightSegments)}}var S_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,y_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,b_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$_="gl_FragColor = linearToOutputTexel( gl_FragColor );",K_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,og=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ug=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_g=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,gg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Og=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,b0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,w0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,z0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,K0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:S_,alphahash_pars_fragment:M_,alphamap_fragment:y_,alphamap_pars_fragment:E_,alphatest_fragment:T_,alphatest_pars_fragment:b_,aomap_fragment:w_,aomap_pars_fragment:A_,begin_vertex:R_,beginnormal_vertex:C_,bsdfs:P_,iridescence_fragment:L_,bumpmap_pars_fragment:D_,clipping_planes_fragment:U_,clipping_planes_pars_fragment:I_,clipping_planes_pars_vertex:N_,clipping_planes_vertex:O_,color_fragment:F_,color_pars_fragment:z_,color_pars_vertex:B_,color_vertex:k_,common:H_,cube_uv_reflection_fragment:G_,defaultnormal_vertex:V_,displacementmap_pars_vertex:W_,displacementmap_vertex:X_,emissivemap_fragment:q_,emissivemap_pars_fragment:Y_,colorspace_fragment:$_,colorspace_pars_fragment:K_,envmap_fragment:Z_,envmap_common_pars_fragment:j_,envmap_pars_fragment:J_,envmap_pars_vertex:Q_,envmap_physical_pars_fragment:hg,envmap_vertex:eg,fog_vertex:tg,fog_pars_vertex:ng,fog_fragment:ig,fog_pars_fragment:rg,gradientmap_pars_fragment:sg,lightmap_fragment:og,lightmap_pars_fragment:ag,lights_lambert_fragment:lg,lights_lambert_pars_fragment:cg,lights_pars_begin:ug,lights_toon_fragment:fg,lights_toon_pars_fragment:dg,lights_phong_fragment:pg,lights_phong_pars_fragment:mg,lights_physical_fragment:_g,lights_physical_pars_fragment:gg,lights_fragment_begin:vg,lights_fragment_maps:xg,lights_fragment_end:Sg,logdepthbuf_fragment:Mg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:Tg,map_fragment:bg,map_pars_fragment:wg,map_particle_fragment:Ag,map_particle_pars_fragment:Rg,metalnessmap_fragment:Cg,metalnessmap_pars_fragment:Pg,morphcolor_vertex:Lg,morphnormal_vertex:Dg,morphtarget_pars_vertex:Ug,morphtarget_vertex:Ig,normal_fragment_begin:Ng,normal_fragment_maps:Og,normal_pars_fragment:Fg,normal_pars_vertex:zg,normal_vertex:Bg,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:Hg,clearcoat_normal_fragment_maps:Gg,clearcoat_pars_fragment:Vg,iridescence_pars_fragment:Wg,opaque_fragment:Xg,packing:qg,premultiplied_alpha_fragment:Yg,project_vertex:$g,dithering_fragment:Kg,dithering_pars_fragment:Zg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:Jg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:e0,shadowmap_vertex:t0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:r0,skinning_vertex:s0,skinnormal_vertex:o0,specularmap_fragment:a0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:u0,transmission_fragment:h0,transmission_pars_fragment:f0,uv_pars_fragment:d0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:_0,background_vert:g0,background_frag:v0,backgroundCube_vert:x0,backgroundCube_frag:S0,cube_vert:M0,cube_frag:y0,depth_vert:E0,depth_frag:T0,distanceRGBA_vert:b0,distanceRGBA_frag:w0,equirect_vert:A0,equirect_frag:R0,linedashed_vert:C0,linedashed_frag:P0,meshbasic_vert:L0,meshbasic_frag:D0,meshlambert_vert:U0,meshlambert_frag:I0,meshmatcap_vert:N0,meshmatcap_frag:O0,meshnormal_vert:F0,meshnormal_frag:z0,meshphong_vert:B0,meshphong_frag:k0,meshphysical_vert:H0,meshphysical_frag:G0,meshtoon_vert:V0,meshtoon_frag:W0,points_vert:X0,points_frag:q0,shadow_vert:Y0,shadow_frag:$0,sprite_vert:K0,sprite_frag:Z0},fe={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},mi={basic:{uniforms:un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:un([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:un([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:un([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:un([fe.points,fe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:un([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:un([fe.common,fe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:un([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:un([fe.sprite,fe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:un([fe.common,fe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:un([fe.lights,fe.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};mi.physical={uniforms:un([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const aa={r:0,b:0,g:0};function j0(r,e,t,n,i,s,a){const o=new ut(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let M=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),M=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===tl)?(u===void 0&&(u=new $i(new Bo(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:Ls(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ft.getTransfer(v.colorSpace)!==Mt,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $i(new Yc(2,2),new Gr({name:"BackgroundMaterial",uniforms:Ls(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ft.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(aa,Jf(r)),n.buffers.color.setClear(aa.r,aa.g,aa.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function J0(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(P,z,q,O,j){let Y=!1;if(a){const R=_(O,q,z);c!==R&&(c=R,d(c.object)),Y=p(P,O,q,j),Y&&M(P,O,q,j)}else{const R=z.wireframe===!0;(c.geometry!==O.id||c.program!==q.id||c.wireframe!==R)&&(c.geometry=O.id,c.program=q.id,c.wireframe=R,Y=!0)}j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,D(P,z,q,O),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,z,q){const O=q.wireframe===!0;let j=o[P.id];j===void 0&&(j={},o[P.id]=j);let Y=j[z.id];Y===void 0&&(Y={},j[z.id]=Y);let R=Y[O];return R===void 0&&(R=m(f()),Y[O]=R),R}function m(P){const z=[],q=[],O=[];for(let j=0;j<i;j++)z[j]=0,q[j]=0,O[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:O,object:P,attributes:{},index:null}}function p(P,z,q,O){const j=c.attributes,Y=z.attributes;let R=0;const U=q.getAttributes();for(const $ in U)if(U[$].location>=0){const oe=j[$];let he=Y[$];if(he===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;R++}return c.attributesNum!==R||c.index!==O}function M(P,z,q,O){const j={},Y=z.attributes;let R=0;const U=q.getAttributes();for(const $ in U)if(U[$].location>=0){let oe=Y[$];oe===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),j[$]=he,R++}c.attributes=j,c.attributesNum=R,c.index=O}function v(){const P=c.newAttributes;for(let z=0,q=P.length;z<q;z++)P[z]=0}function S(P){E(P,0)}function E(P,z){const q=c.newAttributes,O=c.enabledAttributes,j=c.attributeDivisors;q[P]=1,O[P]===0&&(r.enableVertexAttribArray(P),O[P]=1),j[P]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,z),j[P]=z)}function A(){const P=c.newAttributes,z=c.enabledAttributes;for(let q=0,O=z.length;q<O;q++)z[q]!==P[q]&&(r.disableVertexAttribArray(q),z[q]=0)}function w(P,z,q,O,j,Y,R){R===!0?r.vertexAttribIPointer(P,z,q,j,Y):r.vertexAttribPointer(P,z,q,O,j,Y)}function D(P,z,q,O){if(n.isWebGL2===!1&&(P.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=O.attributes,Y=q.getAttributes(),R=z.defaultAttributeValues;for(const U in Y){const $=Y[U];if($.location>=0){let ue=j[U];if(ue===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),ue!==void 0){const oe=ue.normalized,he=ue.itemSize,ye=t.get(ue);if(ye===void 0)continue;const Le=ye.buffer,Ee=ye.type,Ce=ye.bytesPerElement,at=n.isWebGL2===!0&&(Ee===r.INT||Ee===r.UNSIGNED_INT||ue.gpuType===Nf);if(ue.isInterleavedBufferAttribute){const De=ue.data,k=De.stride,Ge=ue.offset;if(De.isInstancedInterleavedBuffer){for(let pe=0;pe<$.locationSize;pe++)E($.location+pe,De.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let pe=0;pe<$.locationSize;pe++)S($.location+pe);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let pe=0;pe<$.locationSize;pe++)w($.location+pe,he/$.locationSize,Ee,oe,k*Ce,(Ge+he/$.locationSize*pe)*Ce,at)}else{if(ue.isInstancedBufferAttribute){for(let De=0;De<$.locationSize;De++)E($.location+De,ue.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let De=0;De<$.locationSize;De++)S($.location+De);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let De=0;De<$.locationSize;De++)w($.location+De,he/$.locationSize,Ee,oe,he*Ce,he/$.locationSize*De*Ce,at)}}else if(R!==void 0){const oe=R[U];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv($.location,oe);break;case 3:r.vertexAttrib3fv($.location,oe);break;case 4:r.vertexAttrib4fv($.location,oe);break;default:r.vertexAttrib1fv($.location,oe)}}}}A()}function x(){N();for(const P in o){const z=o[P];for(const q in z){const O=z[q];for(const j in O)g(O[j].object),delete O[j];delete z[q]}delete o[P]}}function b(P){if(o[P.id]===void 0)return;const z=o[P.id];for(const q in z){const O=z[q];for(const j in O)g(O[j].object),delete O[j];delete z[q]}delete o[P.id]}function F(P){for(const z in o){const q=o[z];if(q[P.id]===void 0)continue;const O=q[P.id];for(const j in O)g(O[j].object),delete O[j];delete q[P.id]}}function N(){Z(),u=!0,c!==l&&(c=l,d(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:Z,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:S,disableUnusedAttributes:A}}function Q0(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function ev(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=a||e.has("OES_texture_float"),E=v&&S,A=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:A}}function tv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new xr,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,v=M*4;let S=p.clippingState||null;l.value=S,S=u(g,f,v,d);for(let E=0;E!==v;++E)S[E]=t[E];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=d;v!==_;++v,S+=4)a.copy(h[v]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function nv(r){let e=new WeakMap;function t(a,o){return o===uc?a.mapping=Rs:o===hc&&(a.mapping=Cs),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===uc||o===hc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new __(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class iv extends Qf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,Sh=[.125,.215,.35,.446,.526,.582],br=20,Bl=new iv,Mh=new ut;let kl=null,Hl=0,Gl=0;const Sr=(1+Math.sqrt(5))/2,us=1/Sr,yh=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Sr,us),new X(0,Sr,-us),new X(us,0,Sr),new X(-us,0,Sr),new X(Sr,us,0),new X(-Sr,us,0)];class Eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){kl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,Hl,Gl),e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:yo,format:ci,colorSpace:Fi,depthBuffer:!1},i=Th(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rv(s)),this._blurMaterial=sv(s,e,t)}return i}_compileMaterial(e){const t=new $i(this._lodPlanes[0],e);this._renderer.compile(t,Bl)}_sceneToCubeUV(e,t,n,i){const o=new zn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Mh),u.toneMapping=tr,u.autoClear=!1;const d=new Kf({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new $i(new Bo,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Mh),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;la(i,M*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Rs||e.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new $i(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Bl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=yh[(i-1)%yh.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $i(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*br-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):br;m>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const p=[];let M=0;for(let w=0;w<br;++w){const D=w/_,x=Math.exp(-D*D/2);p.push(x),w===0?M+=x:w<m&&(M+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const S=this._sizeLods[i],E=3*S*(i>v-_s?i-v+_s:0),A=4*(this._cubeSize-S);la(t,E,A,3*S,2*S),l.setRenderTarget(t),l.render(h,Bl)}}function rv(r){const e=[],t=[],n=[];let i=r;const s=r-_s+1+Sh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-_s?l=Sh[a-r+_s-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),v=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,D=A>2?0:-1,x=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];M.set(x,_*g*A),v.set(f,m*g*A);const b=[A,A,A,A,A,A];S.set(b,p*g*A)}const E=new ui;E.setAttribute("position",new Gn(M,_)),E.setAttribute("uv",new Gn(v,m)),E.setAttribute("faceIndex",new Gn(S,p)),e.push(E),i>_s&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Th(r,e,t){const n=new Hr(r,e,t);return n.texture.mapping=tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function sv(r,e,t){const n=new Float32Array(br),i=new X(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function bh(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function wh(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function $c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ov(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===uc||l===hc,u=l===Rs||l===Cs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Eh(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Eh(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function av(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lv(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let v=0,S=M.length;v<S;v+=3){const E=M[v+0],A=M[v+1],w=M[v+2];f.push(E,A,A,w,w,E)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const E=v+0,A=v+1,w=v+2;f.push(E,A,A,w,w,E)}}else return;const m=new(Gf(f)?jf:Zf)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function cv(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){r.drawElements(s,d,o,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,o,f*l,g),t.update(d,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function uv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hv(r,e){return r[0]-e[0]}function fv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function dv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Zt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let P=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let D=0;M===!0&&(D=1),v===!0&&(D=2),S===!0&&(D=3);let x=u.attributes.position.count*D,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const F=new Float32Array(x*b*4*g),N=new Xf(F,x,b,g);N.type=Yi,N.needsUpdate=!0;const Z=D*4;for(let z=0;z<g;z++){const q=E[z],O=A[z],j=w[z],Y=x*b*4*z;for(let R=0;R<q.count;R++){const U=R*Z;M===!0&&(a.fromBufferAttribute(q,R),F[Y+U+0]=a.x,F[Y+U+1]=a.y,F[Y+U+2]=a.z,F[Y+U+3]=0),v===!0&&(a.fromBufferAttribute(O,R),F[Y+U+4]=a.x,F[Y+U+5]=a.y,F[Y+U+6]=a.z,F[Y+U+7]=0),S===!0&&(a.fromBufferAttribute(j,R),F[Y+U+8]=a.x,F[Y+U+9]=a.y,F[Y+U+10]=a.z,F[Y+U+11]=j.itemSize===4?a.w:1)}}_={count:g,texture:N,size:new mt(x,b)},s.set(u,_),u.addEventListener("dispose",P)}let m=0;for(let M=0;M<f.length;M++)m+=f[M];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",p),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const d=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<d;v++){const S=g[v];S[0]=v,S[1]=f[v]}g.sort(fv);for(let v=0;v<8;v++)v<d&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(hv);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const S=o[v],E=S[0],A=S[1];E!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+v)!==_[E]&&u.setAttribute("morphTarget"+v,_[E]),m&&u.getAttribute("morphNormal"+v)!==m[E]&&u.setAttribute("morphNormal"+v,m[E]),i[v]=A,p+=A):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function pv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const id=new En,rd=new Xf,sd=new Qm,od=new ed,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function Bs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ah[i];if(s===void 0&&(s=new Float32Array(i),Ah[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ht(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function sl(r,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2fv(this.addr,e),Ht(t,e)}}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;r.uniform3fv(this.addr,e),Ht(t,e)}}function vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4fv(this.addr,e),Ht(t,e)}}function xv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Lh.set(n),r.uniformMatrix2fv(this.addr,!1,Lh),Ht(t,n)}}function Sv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Ph.set(n),r.uniformMatrix3fv(this.addr,!1,Ph),Ht(t,n)}}function Mv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Ch.set(n),r.uniformMatrix4fv(this.addr,!1,Ch),Ht(t,n)}}function yv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2iv(this.addr,e),Ht(t,e)}}function Tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3iv(this.addr,e),Ht(t,e)}}function bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4iv(this.addr,e),Ht(t,e)}}function wv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2uiv(this.addr,e),Ht(t,e)}}function Rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3uiv(this.addr,e),Ht(t,e)}}function Cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4uiv(this.addr,e),Ht(t,e)}}function Pv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||id,i)}function Lv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||sd,i)}function Dv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||od,i)}function Uv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rd,i)}function Iv(r){switch(r){case 5126:return mv;case 35664:return _v;case 35665:return gv;case 35666:return vv;case 35674:return xv;case 35675:return Sv;case 35676:return Mv;case 5124:case 35670:return yv;case 35667:case 35671:return Ev;case 35668:case 35672:return Tv;case 35669:case 35673:return bv;case 5125:return wv;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Nv(r,e){r.uniform1fv(this.addr,e)}function Ov(r,e){const t=Bs(e,this.size,2);r.uniform2fv(this.addr,t)}function Fv(r,e){const t=Bs(e,this.size,3);r.uniform3fv(this.addr,t)}function zv(r,e){const t=Bs(e,this.size,4);r.uniform4fv(this.addr,t)}function Bv(r,e){const t=Bs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function kv(r,e){const t=Bs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Hv(r,e){const t=Bs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gv(r,e){r.uniform1iv(this.addr,e)}function Vv(r,e){r.uniform2iv(this.addr,e)}function Wv(r,e){r.uniform3iv(this.addr,e)}function Xv(r,e){r.uniform4iv(this.addr,e)}function qv(r,e){r.uniform1uiv(this.addr,e)}function Yv(r,e){r.uniform2uiv(this.addr,e)}function $v(r,e){r.uniform3uiv(this.addr,e)}function Kv(r,e){r.uniform4uiv(this.addr,e)}function Zv(r,e,t){const n=this.cache,i=e.length,s=sl(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||id,s[a])}function jv(r,e,t){const n=this.cache,i=e.length,s=sl(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||sd,s[a])}function Jv(r,e,t){const n=this.cache,i=e.length,s=sl(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||od,s[a])}function Qv(r,e,t){const n=this.cache,i=e.length,s=sl(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||rd,s[a])}function ex(r){switch(r){case 5126:return Nv;case 35664:return Ov;case 35665:return Fv;case 35666:return zv;case 35674:return Bv;case 35675:return kv;case 35676:return Hv;case 5124:case 35670:return Gv;case 35667:case 35671:return Vv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return Yv;case 36295:return $v;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Qv}}class tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Iv(t.type)}}class nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ex(t.type)}}class ix{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function Dh(r,e){r.seq.push(e),r.map[e.id]=e}function rx(r,e,t){const n=r.name,i=n.length;for(Vl.lastIndex=0;;){const s=Vl.exec(n),a=Vl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Dh(t,c===void 0?new tx(o,r,e):new nx(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new ix(o),Dh(t,h)),t=h}}}class ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);rx(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Uh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const sx=37297;let ox=0;function ax(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function lx(r){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(r);let n;switch(e===t?n="":e===Ba&&t===za?n="LinearDisplayP3ToLinearSRGB":e===za&&t===Ba&&(n="LinearSRGBToLinearDisplayP3"),r){case Fi:case nl:return[n,"LinearTransferOETF"];case Kt:case qc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ih(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ax(r.getShaderSource(e),a)}else return i}function cx(r,e){const t=lx(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ux(r,e){let t;switch(e){case Sm:t="Linear";break;case Mm:t="Reinhard";break;case ym:t="OptimizedCineon";break;case Em:t="ACESFilmic";break;case Tm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hx(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function fx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ks(r){return r!==""}function Nh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const px=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(r){return r.replace(px,_x)}const mx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _x(r,e){let t=$e[e];if(t===void 0){const n=mx.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(r){return r.replace(gx,vx)}function vx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Df?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===$p?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Sx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function yx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Uf:e="ENVMAP_BLENDING_MULTIPLY";break;case vm:e="ENVMAP_BLENDING_MIX";break;case xm:e="ENVMAP_BLENDING_ADD";break}return e}function Ex(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Tx(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xx(t),c=Sx(t),u=Mx(t),h=yx(t),f=Ex(t),d=t.isWebGL2?"":hx(t),g=fx(s),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(m=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[d,zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?$e.tonemapping_pars_fragment:"",t.toneMapping!==tr?ux("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,cx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=gc(a),a=Nh(a,t),a=Oh(a,t),o=gc(o),o=Nh(o,t),o=Oh(o,t),a=Fh(a),o=Fh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+a,S=M+p+o,E=Uh(i,i.VERTEX_SHADER,v),A=Uh(i,i.FRAGMENT_SHADER,S);i.attachShader(_,E),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(F){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),Z=i.getShaderInfoLog(E).trim(),P=i.getShaderInfoLog(A).trim();let z=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,A);else{const O=Ih(i,E,"vertex"),j=Ih(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+O+`
`+j)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(Z===""||P==="")&&(q=!1);q&&(F.diagnostics={runnable:z,programLog:N,vertexShader:{log:Z,prefix:m},fragmentShader:{log:P,prefix:p}})}i.deleteShader(E),i.deleteShader(A),D=new ba(i,_),x=dx(i,_)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,sx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ox++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let bx=0;class wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ax(e),t.set(e,n)),n}}class Ax{constructor(e){this.id=bx++,this.code=e,this.usedTimes=0}}function Rx(r,e,t,n,i,s,a){const o=new Yf,l=new wx,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,b,F,N,Z){const P=N.fog,z=Z.geometry,q=x.isMeshStandardMaterial?N.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),j=O&&O.mapping===tl?O.image.height:null,Y=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const R=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,U=R!==void 0?R.length:0;let $=0;z.morphAttributes.position!==void 0&&($=1),z.morphAttributes.normal!==void 0&&($=2),z.morphAttributes.color!==void 0&&($=3);let ue,oe,he,ye;if(Y){const ve=mi[Y];ue=ve.vertexShader,oe=ve.fragmentShader}else ue=x.vertexShader,oe=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),ye=l.getFragmentShaderID(x);const Le=r.getRenderTarget(),Ee=Z.isInstancedMesh===!0,Ce=!!x.map,at=!!x.matcap,De=!!O,k=!!x.aoMap,Ge=!!x.lightMap,pe=!!x.bumpMap,be=!!x.normalMap,we=!!x.displacementMap,G=!!x.emissiveMap,ze=!!x.metalnessMap,ke=!!x.roughnessMap,nt=x.anisotropy>0,Ke=x.clearcoat>0,xt=x.iridescence>0,C=x.sheen>0,y=x.transmission>0,B=nt&&!!x.anisotropyMap,ie=Ke&&!!x.clearcoatMap,J=Ke&&!!x.clearcoatNormalMap,ee=Ke&&!!x.clearcoatRoughnessMap,me=xt&&!!x.iridescenceMap,re=xt&&!!x.iridescenceThicknessMap,de=C&&!!x.sheenColorMap,_e=C&&!!x.sheenRoughnessMap,it=!!x.specularMap,ne=!!x.specularColorMap,rt=!!x.specularIntensityMap,Be=y&&!!x.transmissionMap,Ue=y&&!!x.thicknessMap,Pe=!!x.gradientMap,Q=!!x.alphaMap,Xe=x.alphaTest>0,L=!!x.alphaHash,ce=!!x.extensions,te=!!z.attributes.uv1,K=!!z.attributes.uv2,ae=!!z.attributes.uv3;let Ae=tr;return x.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(Ae=r.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:ue,fragmentShader:oe,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:Ee,instancingColor:Ee&&Z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Le===null?r.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Fi,map:Ce,matcap:at,envMap:De,envMapMode:De&&O.mapping,envMapCubeUVHeight:j,aoMap:k,lightMap:Ge,bumpMap:pe,normalMap:be,displacementMap:f&&we,emissiveMap:G,normalMapObjectSpace:be&&x.normalMapType===zm,normalMapTangentSpace:be&&x.normalMapType===Fm,metalnessMap:ze,roughnessMap:ke,anisotropy:nt,anisotropyMap:B,clearcoat:Ke,clearcoatMap:ie,clearcoatNormalMap:J,clearcoatRoughnessMap:ee,iridescence:xt,iridescenceMap:me,iridescenceThicknessMap:re,sheen:C,sheenColorMap:de,sheenRoughnessMap:_e,specularMap:it,specularColorMap:ne,specularIntensityMap:rt,transmission:y,transmissionMap:Be,thicknessMap:Ue,gradientMap:Pe,opaque:x.transparent===!1&&x.blending===Ss,alphaMap:Q,alphaTest:Xe,alphaHash:L,combine:x.combine,mapUv:Ce&&_(x.map.channel),aoMapUv:k&&_(x.aoMap.channel),lightMapUv:Ge&&_(x.lightMap.channel),bumpMapUv:pe&&_(x.bumpMap.channel),normalMapUv:be&&_(x.normalMap.channel),displacementMapUv:we&&_(x.displacementMap.channel),emissiveMapUv:G&&_(x.emissiveMap.channel),metalnessMapUv:ze&&_(x.metalnessMap.channel),roughnessMapUv:ke&&_(x.roughnessMap.channel),anisotropyMapUv:B&&_(x.anisotropyMap.channel),clearcoatMapUv:ie&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(x.sheenRoughnessMap.channel),specularMapUv:it&&_(x.specularMap.channel),specularColorMapUv:ne&&_(x.specularColorMap.channel),specularIntensityMapUv:rt&&_(x.specularIntensityMap.channel),transmissionMapUv:Be&&_(x.transmissionMap.channel),thicknessMapUv:Ue&&_(x.thicknessMap.channel),alphaMapUv:Q&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(be||nt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:te,vertexUv2s:K,vertexUv3s:ae,pointsUvs:Z.isPoints===!0&&!!z.attributes.uv&&(Ce||Q),fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:$,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Di,flipSided:x.side===yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ce&&x.extensions.derivatives===!0,extensionFragDepth:ce&&x.extensions.fragDepth===!0,extensionDrawBuffers:ce&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)b.push(F),b.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(M(b,x),v(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function M(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function S(x){const b=g[x.type];let F;if(b){const N=mi[b];F=f_.clone(N.uniforms)}else F=x.uniforms;return F}function E(x,b){let F;for(let N=0,Z=c.length;N<Z;N++){const P=c[N];if(P.cacheKey===b){F=P,++F.usedTimes;break}}return F===void 0&&(F=new Tx(r,b,x,s),c.push(F)),F}function A(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function w(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:D}}function Cx(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Px(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Bh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function kh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Px),n.length>1&&n.sort(f||Bh),i.length>1&&i.sort(f||Bh)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Lx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new kh,r.set(n,[a])):i>=s.length?(a=new kh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Dx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ut};break;case"SpotLight":t={position:new X,direction:new X,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function Ux(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ix=0;function Nx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ox(r,e){const t=new Dx,n=Ux(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const s=new X,a=new Yt,o=new Yt;function l(u,h){let f=0,d=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,m=0,p=0,M=0,v=0,S=0,E=0,A=0,w=0,D=0,x=0;u.sort(Nx);const b=h===!0?Math.PI:1;for(let N=0,Z=u.length;N<Z;N++){const P=u[N],z=P.color,q=P.intensity,O=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=z.r*q*b,d+=z.g*q*b,g+=z.b*q*b;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],q);x++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const R=P.shadow,U=n.get(P);U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,i.directionalShadow[_]=U,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=P.shadow.matrix,S++}i.directional[_]=Y,_++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(z).multiplyScalar(q*b),Y.distance=O,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[p]=Y;const R=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,R.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[p]=R.matrix,P.castShadow){const U=n.get(P);U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,i.spotShadow[p]=U,i.spotShadowMap[p]=j,A++}p++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(z).multiplyScalar(q),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[M]=Y,M++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*b),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const R=P.shadow,U=n.get(P);U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,U.shadowCameraNear=R.camera.near,U.shadowCameraFar=R.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=P.shadow.matrix,E++}i.point[m]=Y,m++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(q*b),Y.groundColor.copy(P.groundColor).multiplyScalar(q*b),i.hemi[v]=Y,v++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==M||F.hemiLength!==v||F.numDirectionalShadows!==S||F.numPointShadows!==E||F.numSpotShadows!==A||F.numSpotMaps!==w||F.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=M,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=x,F.directionalLength=_,F.pointLength=m,F.spotLength=p,F.rectAreaLength=M,F.hemiLength=v,F.numDirectionalShadows=S,F.numPointShadows=E,F.numSpotShadows=A,F.numSpotMaps=w,F.numLightProbes=x,i.version=Ix++)}function c(u,h){let f=0,d=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const S=u[M];if(S.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(S.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Hh(r,e){const t=new Ox(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Fx(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Hh(r,e),t.set(s,[l])):a>=o.length?(l=new Hh(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class zx extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bx extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gx(r,e,t){let n=new td;const i=new mt,s=new mt,a=new Zt,o=new zx({depthPacking:Om}),l=new Bx,c={},u=t.maxTextureSize,h={[or]:yn,[yn]:or,[Di]:Di},f=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:kx,fragmentShader:Hx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ui;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $i(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Df;let p=this.type;this.render=function(E,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const D=r.getRenderTarget(),x=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),F=r.state;F.setBlending(er),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==Ri&&this.type===Ri,Z=p===Ri&&this.type!==Ri;for(let P=0,z=E.length;P<z;P++){const q=E[P],O=q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const j=O.getFrameExtents();if(i.multiply(j),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,O.mapSize.y=s.y)),O.map===null||N===!0||Z===!0){const R=this.type!==Ri?{minFilter:pn,magFilter:pn}:{};O.map!==null&&O.map.dispose(),O.map=new Hr(i.x,i.y,R),O.map.texture.name=q.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const Y=O.getViewportCount();for(let R=0;R<Y;R++){const U=O.getViewport(R);a.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),F.viewport(a),O.updateMatrices(q,R),n=O.getFrustum(),S(A,w,O.camera,q,this.type)}O.isPointLightShadow!==!0&&this.type===Ri&&M(O,w),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(D,x,b)};function M(E,A){const w=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Hr(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,w,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,w,d,_,null)}function v(E,A,w,D){let x=null;const b=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)x=b;else if(x=w.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=x.uuid,N=A.uuid;let Z=c[F];Z===void 0&&(Z={},c[F]=Z);let P=Z[N];P===void 0&&(P=x.clone(),Z[N]=P),x=P}if(x.visible=A.visible,x.wireframe=A.wireframe,D===Ri?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=r.properties.get(x);F.light=w}return x}function S(E,A,w,D,x){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Ri)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const N=e.update(E),Z=E.material;if(Array.isArray(Z)){const P=N.groups;for(let z=0,q=P.length;z<q;z++){const O=P[z],j=Z[O.materialIndex];if(j&&j.visible){const Y=v(E,j,D,x);r.renderBufferDirect(w,null,N,Y,E,O)}}}else if(Z.visible){const P=v(E,Z,D,x);r.renderBufferDirect(w,null,N,P,E,null)}}const F=E.children;for(let N=0,Z=F.length;N<Z;N++)S(F[N],A,w,D,x)}}function Vx(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const ce=new Zt;let te=null;const K=new Zt(0,0,0,0);return{setMask:function(ae){te!==ae&&!L&&(r.colorMask(ae,ae,ae,ae),te=ae)},setLocked:function(ae){L=ae},setClear:function(ae,Ae,et,ve,Se){Se===!0&&(ae*=ve,Ae*=ve,et*=ve),ce.set(ae,Ae,et,ve),K.equals(ce)===!1&&(r.clearColor(ae,Ae,et,ve),K.copy(ce))},reset:function(){L=!1,te=null,K.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,te=null,K=null;return{setTest:function(ae){ae?Ce(r.DEPTH_TEST):at(r.DEPTH_TEST)},setMask:function(ae){ce!==ae&&!L&&(r.depthMask(ae),ce=ae)},setFunc:function(ae){if(te!==ae){switch(ae){case hm:r.depthFunc(r.NEVER);break;case fm:r.depthFunc(r.ALWAYS);break;case dm:r.depthFunc(r.LESS);break;case Oa:r.depthFunc(r.LEQUAL);break;case pm:r.depthFunc(r.EQUAL);break;case mm:r.depthFunc(r.GEQUAL);break;case _m:r.depthFunc(r.GREATER);break;case gm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}te=ae}},setLocked:function(ae){L=ae},setClear:function(ae){K!==ae&&(r.clearDepth(ae),K=ae)},reset:function(){L=!1,ce=null,te=null,K=null}}}function a(){let L=!1,ce=null,te=null,K=null,ae=null,Ae=null,et=null,ve=null,Se=null;return{setTest:function(Re){L||(Re?Ce(r.STENCIL_TEST):at(r.STENCIL_TEST))},setMask:function(Re){ce!==Re&&!L&&(r.stencilMask(Re),ce=Re)},setFunc:function(Re,se,Ne){(te!==Re||K!==se||ae!==Ne)&&(r.stencilFunc(Re,se,Ne),te=Re,K=se,ae=Ne)},setOp:function(Re,se,Ne){(Ae!==Re||et!==se||ve!==Ne)&&(r.stencilOp(Re,se,Ne),Ae=Re,et=se,ve=Ne)},setLocked:function(Re){L=Re},setClear:function(Re){Se!==Re&&(r.clearStencil(Re),Se=Re)},reset:function(){L=!1,ce=null,te=null,K=null,ae=null,Ae=null,et=null,ve=null,Se=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,M=null,v=null,S=null,E=null,A=null,w=null,D=null,x=new ut(0,0,0),b=0,F=!1,N=null,Z=null,P=null,z=null,q=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const R=r.getParameter(r.VERSION);R.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(R)[1]),j=Y>=1):R.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),j=Y>=2);let U=null,$={};const ue=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),he=new Zt().fromArray(ue),ye=new Zt().fromArray(oe);function Le(L,ce,te,K){const ae=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(L,Ae),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<te;et++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(ce,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(ce+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return Ae}const Ee={};Ee[r.TEXTURE_2D]=Le(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=Le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ee[r.TEXTURE_2D_ARRAY]=Le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=Le(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(r.DEPTH_TEST),l.setFunc(Oa),ze(!1),ke(Eu),Ce(r.CULL_FACE),we(er);function Ce(L){f[L]!==!0&&(r.enable(L),f[L]=!0)}function at(L){f[L]!==!1&&(r.disable(L),f[L]=!1)}function De(L,ce){return d[L]!==ce?(r.bindFramebuffer(L,ce),d[L]=ce,n&&(L===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ce),L===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ce)),!0):!1}function k(L,ce){let te=_,K=!1;if(L)if(te=g.get(ce),te===void 0&&(te=[],g.set(ce,te)),L.isWebGLMultipleRenderTargets){const ae=L.texture;if(te.length!==ae.length||te[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,et=ae.length;Ae<et;Ae++)te[Ae]=r.COLOR_ATTACHMENT0+Ae;te.length=ae.length,K=!0}}else te[0]!==r.COLOR_ATTACHMENT0&&(te[0]=r.COLOR_ATTACHMENT0,K=!0);else te[0]!==r.BACK&&(te[0]=r.BACK,K=!0);K&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Ge(L){return m!==L?(r.useProgram(L),m=L,!0):!1}const pe={[Tr]:r.FUNC_ADD,[Zp]:r.FUNC_SUBTRACT,[jp]:r.FUNC_REVERSE_SUBTRACT};if(n)pe[wu]=r.MIN,pe[Au]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(pe[wu]=L.MIN_EXT,pe[Au]=L.MAX_EXT)}const be={[Jp]:r.ZERO,[Qp]:r.ONE,[em]:r.SRC_COLOR,[lc]:r.SRC_ALPHA,[om]:r.SRC_ALPHA_SATURATE,[rm]:r.DST_COLOR,[nm]:r.DST_ALPHA,[tm]:r.ONE_MINUS_SRC_COLOR,[cc]:r.ONE_MINUS_SRC_ALPHA,[sm]:r.ONE_MINUS_DST_COLOR,[im]:r.ONE_MINUS_DST_ALPHA,[am]:r.CONSTANT_COLOR,[lm]:r.ONE_MINUS_CONSTANT_COLOR,[cm]:r.CONSTANT_ALPHA,[um]:r.ONE_MINUS_CONSTANT_ALPHA};function we(L,ce,te,K,ae,Ae,et,ve,Se,Re){if(L===er){p===!0&&(at(r.BLEND),p=!1);return}if(p===!1&&(Ce(r.BLEND),p=!0),L!==Kp){if(L!==M||Re!==F){if((v!==Tr||A!==Tr)&&(r.blendEquation(r.FUNC_ADD),v=Tr,A=Tr),Re)switch(L){case Ss:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case So:r.blendFunc(r.ONE,r.ONE);break;case Tu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ss:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case So:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Tu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,E=null,w=null,D=null,x.set(0,0,0),b=0,M=L,F=Re}return}ae=ae||ce,Ae=Ae||te,et=et||K,(ce!==v||ae!==A)&&(r.blendEquationSeparate(pe[ce],pe[ae]),v=ce,A=ae),(te!==S||K!==E||Ae!==w||et!==D)&&(r.blendFuncSeparate(be[te],be[K],be[Ae],be[et]),S=te,E=K,w=Ae,D=et),(ve.equals(x)===!1||Se!==b)&&(r.blendColor(ve.r,ve.g,ve.b,Se),x.copy(ve),b=Se),M=L,F=!1}function G(L,ce){L.side===Di?at(r.CULL_FACE):Ce(r.CULL_FACE);let te=L.side===yn;ce&&(te=!te),ze(te),L.blending===Ss&&L.transparent===!1?we(er):we(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const K=L.stencilWrite;c.setTest(K),K&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ke(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):at(r.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){N!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),N=L)}function ke(L){L!==qp?(Ce(r.CULL_FACE),L!==Z&&(L===Eu?r.cullFace(r.BACK):L===Yp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):at(r.CULL_FACE),Z=L}function nt(L){L!==P&&(j&&r.lineWidth(L),P=L)}function Ke(L,ce,te){L?(Ce(r.POLYGON_OFFSET_FILL),(z!==ce||q!==te)&&(r.polygonOffset(ce,te),z=ce,q=te)):at(r.POLYGON_OFFSET_FILL)}function xt(L){L?Ce(r.SCISSOR_TEST):at(r.SCISSOR_TEST)}function C(L){L===void 0&&(L=r.TEXTURE0+O-1),U!==L&&(r.activeTexture(L),U=L)}function y(L,ce,te){te===void 0&&(U===null?te=r.TEXTURE0+O-1:te=U);let K=$[te];K===void 0&&(K={type:void 0,texture:void 0},$[te]=K),(K.type!==L||K.texture!==ce)&&(U!==te&&(r.activeTexture(te),U=te),r.bindTexture(L,ce||Ee[L]),K.type=L,K.texture=ce)}function B(){const L=$[U];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ie(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(L){he.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),he.copy(L))}function Ue(L){ye.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ye.copy(L))}function Pe(L,ce){let te=h.get(ce);te===void 0&&(te=new WeakMap,h.set(ce,te));let K=te.get(L);K===void 0&&(K=r.getUniformBlockIndex(ce,L.name),te.set(L,K))}function Q(L,ce){const K=h.get(ce).get(L);u.get(ce)!==K&&(r.uniformBlockBinding(ce,K,L.__bindingPointIndex),u.set(ce,K))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},U=null,$={},d={},g=new WeakMap,_=[],m=null,p=!1,M=null,v=null,S=null,E=null,A=null,w=null,D=null,x=new ut(0,0,0),b=0,F=!1,N=null,Z=null,P=null,z=null,q=null,he.set(0,0,r.canvas.width,r.canvas.height),ye.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:at,bindFramebuffer:De,drawBuffers:k,useProgram:Ge,setBlending:we,setMaterial:G,setFlipSided:ze,setCullFace:ke,setLineWidth:nt,setPolygonOffset:Ke,setScissorTest:xt,activeTexture:C,bindTexture:y,unbindTexture:B,compressedTexImage2D:ie,compressedTexImage3D:J,texImage2D:ne,texImage3D:rt,updateUBOMapping:Pe,uniformBlockBinding:Q,texStorage2D:_e,texStorage3D:it,texSubImage2D:ee,texSubImage3D:me,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:Be,viewport:Ue,reset:Xe}}function Wx(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,y){return p?new OffscreenCanvas(C,y):Eo("canvas")}function v(C,y,B,ie){let J=1;if((C.width>ie||C.height>ie)&&(J=ie/Math.max(C.width,C.height)),J<1||y===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ee=y?_c:Math.floor,me=ee(J*C.width),re=ee(J*C.height);_===void 0&&(_=M(me,re));const de=B?M(me,re):_;return de.width=me,de.height=re,de.getContext("2d").drawImage(C,0,0,me,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+me+"x"+re+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return ih(C.width)&&ih(C.height)}function E(C){return o?!1:C.wrapS!==li||C.wrapT!==li||C.minFilter!==pn&&C.minFilter!==Yn}function A(C,y){return C.generateMipmaps&&y&&C.minFilter!==pn&&C.minFilter!==Yn}function w(C){r.generateMipmap(C)}function D(C,y,B,ie,J=!1){if(o===!1)return y;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=y;if(y===r.RED&&(B===r.FLOAT&&(ee=r.R32F),B===r.HALF_FLOAT&&(ee=r.R16F),B===r.UNSIGNED_BYTE&&(ee=r.R8)),y===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(ee=r.R8UI),B===r.UNSIGNED_SHORT&&(ee=r.R16UI),B===r.UNSIGNED_INT&&(ee=r.R32UI),B===r.BYTE&&(ee=r.R8I),B===r.SHORT&&(ee=r.R16I),B===r.INT&&(ee=r.R32I)),y===r.RG&&(B===r.FLOAT&&(ee=r.RG32F),B===r.HALF_FLOAT&&(ee=r.RG16F),B===r.UNSIGNED_BYTE&&(ee=r.RG8)),y===r.RGBA){const me=J?Fa:ft.getTransfer(ie);B===r.FLOAT&&(ee=r.RGBA32F),B===r.HALF_FLOAT&&(ee=r.RGBA16F),B===r.UNSIGNED_BYTE&&(ee=me===Mt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(C,y,B){return A(C,B)===!0||C.isFramebufferTexture&&C.minFilter!==pn&&C.minFilter!==Yn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function b(C){return C===pn||C===Ru||C===pl?r.NEAREST:r.LINEAR}function F(C){const y=C.target;y.removeEventListener("dispose",F),Z(y),y.isVideoTexture&&g.delete(y)}function N(C){const y=C.target;y.removeEventListener("dispose",N),z(y)}function Z(C){const y=n.get(C);if(y.__webglInit===void 0)return;const B=C.source,ie=m.get(B);if(ie){const J=ie[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(C),Object.keys(ie).length===0&&m.delete(B)}n.remove(C)}function P(C){const y=n.get(C);r.deleteTexture(y.__webglTexture);const B=C.source,ie=m.get(B);delete ie[y.__cacheKey],a.memory.textures--}function z(C){const y=C.texture,B=n.get(C),ie=n.get(y);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(B.__webglFramebuffer[J]))for(let ee=0;ee<B.__webglFramebuffer[J].length;ee++)r.deleteFramebuffer(B.__webglFramebuffer[J][ee]);else r.deleteFramebuffer(B.__webglFramebuffer[J]);B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[J])}else{if(Array.isArray(B.__webglFramebuffer))for(let J=0;J<B.__webglFramebuffer.length;J++)r.deleteFramebuffer(B.__webglFramebuffer[J]);else r.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let J=0;J<B.__webglColorRenderbuffer.length;J++)B.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[J]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let J=0,ee=y.length;J<ee;J++){const me=n.get(y[J]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(y[J])}n.remove(y),n.remove(C)}let q=0;function O(){q=0}function j(){const C=q;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),q+=1,C}function Y(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function R(C,y){const B=n.get(C);if(C.isVideoTexture&&Ke(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(B,C,y);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+y)}function U(C,y){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Ce(B,C,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+y)}function $(C,y){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Ce(B,C,y);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+y)}function ue(C,y){const B=n.get(C);if(C.version>0&&B.__version!==C.version){at(B,C,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+y)}const oe={[fc]:r.REPEAT,[li]:r.CLAMP_TO_EDGE,[dc]:r.MIRRORED_REPEAT},he={[pn]:r.NEAREST,[Ru]:r.NEAREST_MIPMAP_NEAREST,[pl]:r.NEAREST_MIPMAP_LINEAR,[Yn]:r.LINEAR,[bm]:r.LINEAR_MIPMAP_NEAREST,[Mo]:r.LINEAR_MIPMAP_LINEAR},ye={[Bm]:r.NEVER,[qm]:r.ALWAYS,[km]:r.LESS,[Gm]:r.LEQUAL,[Hm]:r.EQUAL,[Xm]:r.GEQUAL,[Vm]:r.GREATER,[Wm]:r.NOTEQUAL};function Le(C,y,B){if(B?(r.texParameteri(C,r.TEXTURE_WRAP_S,oe[y.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,oe[y.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,oe[y.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,he[y.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,he[y.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==li||y.wrapT!==li)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,b(y.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,b(y.minFilter)),y.minFilter!==pn&&y.minFilter!==Yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ye[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===pn||y.minFilter!==pl&&y.minFilter!==Mo||y.type===Yi&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===yo&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(C,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Ee(C,y){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",F));const ie=y.source;let J=m.get(ie);J===void 0&&(J={},m.set(ie,J));const ee=Y(y);if(ee!==C.__cacheKey){J[ee]===void 0&&(J[ee]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[ee].usedTimes++;const me=J[C.__cacheKey];me!==void 0&&(J[C.__cacheKey].usedTimes--,me.usedTimes===0&&P(y)),C.__cacheKey=ee,C.__webglTexture=J[ee].texture}return B}function Ce(C,y,B){let ie=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ie=r.TEXTURE_3D);const J=Ee(C,y),ee=y.source;t.bindTexture(ie,C.__webglTexture,r.TEXTURE0+B);const me=n.get(ee);if(ee.version!==me.__version||J===!0){t.activeTexture(r.TEXTURE0+B);const re=ft.getPrimaries(ft.workingColorSpace),de=y.colorSpace===Zn?null:ft.getPrimaries(y.colorSpace),_e=y.colorSpace===Zn||re===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const it=E(y)&&S(y.image)===!1;let ne=v(y.image,it,!1,u);ne=xt(y,ne);const rt=S(ne)||o,Be=s.convert(y.format,y.colorSpace);let Ue=s.convert(y.type),Pe=D(y.internalFormat,Be,Ue,y.colorSpace,y.isVideoTexture);Le(ie,y,rt);let Q;const Xe=y.mipmaps,L=o&&y.isVideoTexture!==!0,ce=me.__version===void 0||J===!0,te=x(y,ne,rt);if(y.isDepthTexture)Pe=r.DEPTH_COMPONENT,o?y.type===Yi?Pe=r.DEPTH_COMPONENT32F:y.type===qi?Pe=r.DEPTH_COMPONENT24:y.type===Cr?Pe=r.DEPTH24_STENCIL8:Pe=r.DEPTH_COMPONENT16:y.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Pr&&Pe===r.DEPTH_COMPONENT&&y.type!==Xc&&y.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=qi,Ue=s.convert(y.type)),y.format===Ps&&Pe===r.DEPTH_COMPONENT&&(Pe=r.DEPTH_STENCIL,y.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Cr,Ue=s.convert(y.type))),ce&&(L?t.texStorage2D(r.TEXTURE_2D,1,Pe,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Pe,ne.width,ne.height,0,Be,Ue,null));else if(y.isDataTexture)if(Xe.length>0&&rt){L&&ce&&t.texStorage2D(r.TEXTURE_2D,te,Pe,Xe[0].width,Xe[0].height);for(let K=0,ae=Xe.length;K<ae;K++)Q=Xe[K],L?t.texSubImage2D(r.TEXTURE_2D,K,0,0,Q.width,Q.height,Be,Ue,Q.data):t.texImage2D(r.TEXTURE_2D,K,Pe,Q.width,Q.height,0,Be,Ue,Q.data);y.generateMipmaps=!1}else L?(ce&&t.texStorage2D(r.TEXTURE_2D,te,Pe,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,Be,Ue,ne.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,ne.width,ne.height,0,Be,Ue,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,Pe,Xe[0].width,Xe[0].height,ne.depth);for(let K=0,ae=Xe.length;K<ae;K++)Q=Xe[K],y.format!==ci?Be!==null?L?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Q.width,Q.height,ne.depth,Be,Q.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Pe,Q.width,Q.height,ne.depth,0,Q.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Q.width,Q.height,ne.depth,Be,Ue,Q.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,Pe,Q.width,Q.height,ne.depth,0,Be,Ue,Q.data)}else{L&&ce&&t.texStorage2D(r.TEXTURE_2D,te,Pe,Xe[0].width,Xe[0].height);for(let K=0,ae=Xe.length;K<ae;K++)Q=Xe[K],y.format!==ci?Be!==null?L?t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,Q.width,Q.height,Be,Q.data):t.compressedTexImage2D(r.TEXTURE_2D,K,Pe,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage2D(r.TEXTURE_2D,K,0,0,Q.width,Q.height,Be,Ue,Q.data):t.texImage2D(r.TEXTURE_2D,K,Pe,Q.width,Q.height,0,Be,Ue,Q.data)}else if(y.isDataArrayTexture)L?(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,Pe,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Be,Ue,ne.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,Be,Ue,ne.data);else if(y.isData3DTexture)L?(ce&&t.texStorage3D(r.TEXTURE_3D,te,Pe,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Be,Ue,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,Be,Ue,ne.data);else if(y.isFramebufferTexture){if(ce)if(L)t.texStorage2D(r.TEXTURE_2D,te,Pe,ne.width,ne.height);else{let K=ne.width,ae=ne.height;for(let Ae=0;Ae<te;Ae++)t.texImage2D(r.TEXTURE_2D,Ae,Pe,K,ae,0,Be,Ue,null),K>>=1,ae>>=1}}else if(Xe.length>0&&rt){L&&ce&&t.texStorage2D(r.TEXTURE_2D,te,Pe,Xe[0].width,Xe[0].height);for(let K=0,ae=Xe.length;K<ae;K++)Q=Xe[K],L?t.texSubImage2D(r.TEXTURE_2D,K,0,0,Be,Ue,Q):t.texImage2D(r.TEXTURE_2D,K,Pe,Be,Ue,Q);y.generateMipmaps=!1}else L?(ce&&t.texStorage2D(r.TEXTURE_2D,te,Pe,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,Ue,ne)):t.texImage2D(r.TEXTURE_2D,0,Pe,Be,Ue,ne);A(y,rt)&&w(ie),me.__version=ee.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function at(C,y,B){if(y.image.length!==6)return;const ie=Ee(C,y),J=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+B);const ee=n.get(J);if(J.version!==ee.__version||ie===!0){t.activeTexture(r.TEXTURE0+B);const me=ft.getPrimaries(ft.workingColorSpace),re=y.colorSpace===Zn?null:ft.getPrimaries(y.colorSpace),de=y.colorSpace===Zn||me===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,ne=[];for(let K=0;K<6;K++)!_e&&!it?ne[K]=v(y.image[K],!1,!0,c):ne[K]=it?y.image[K].image:y.image[K],ne[K]=xt(y,ne[K]);const rt=ne[0],Be=S(rt)||o,Ue=s.convert(y.format,y.colorSpace),Pe=s.convert(y.type),Q=D(y.internalFormat,Ue,Pe,y.colorSpace),Xe=o&&y.isVideoTexture!==!0,L=ee.__version===void 0||ie===!0;let ce=x(y,rt,Be);Le(r.TEXTURE_CUBE_MAP,y,Be);let te;if(_e){Xe&&L&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Q,rt.width,rt.height);for(let K=0;K<6;K++){te=ne[K].mipmaps;for(let ae=0;ae<te.length;ae++){const Ae=te[ae];y.format!==ci?Ue!==null?Xe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,Ae.width,Ae.height,Ue,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,Q,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,Ae.width,Ae.height,Ue,Pe,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,Q,Ae.width,Ae.height,0,Ue,Pe,Ae.data)}}}else{te=y.mipmaps,Xe&&L&&(te.length>0&&ce++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Q,ne[0].width,ne[0].height));for(let K=0;K<6;K++)if(it){Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ne[K].width,ne[K].height,Ue,Pe,ne[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Q,ne[K].width,ne[K].height,0,Ue,Pe,ne[K].data);for(let ae=0;ae<te.length;ae++){const et=te[ae].image[K].image;Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,et.width,et.height,Ue,Pe,et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,Q,et.width,et.height,0,Ue,Pe,et.data)}}else{Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ue,Pe,ne[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Q,Ue,Pe,ne[K]);for(let ae=0;ae<te.length;ae++){const Ae=te[ae];Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,Ue,Pe,Ae.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,Q,Ue,Pe,Ae.image[K])}}}A(y,Be)&&w(r.TEXTURE_CUBE_MAP),ee.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function De(C,y,B,ie,J,ee){const me=s.convert(B.format,B.colorSpace),re=s.convert(B.type),de=D(B.internalFormat,me,re,B.colorSpace);if(!n.get(y).__hasExternalTextures){const it=Math.max(1,y.width>>ee),ne=Math.max(1,y.height>>ee);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,de,it,ne,y.depth,0,me,re,null):t.texImage2D(J,ee,de,it,ne,0,me,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),nt(y)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,J,n.get(B).__webglTexture,0,ke(y)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,J,n.get(B).__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function k(C,y,B){if(r.bindRenderbuffer(r.RENDERBUFFER,C),y.depthBuffer&&!y.stencilBuffer){let ie=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(B||nt(y)){const J=y.depthTexture;J&&J.isDepthTexture&&(J.type===Yi?ie=r.DEPTH_COMPONENT32F:J.type===qi&&(ie=r.DEPTH_COMPONENT24));const ee=ke(y);nt(y)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,ie,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,ie,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,ie,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(y.depthBuffer&&y.stencilBuffer){const ie=ke(y);B&&nt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,y.width,y.height):nt(y)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const ie=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let J=0;J<ie.length;J++){const ee=ie[J],me=s.convert(ee.format,ee.colorSpace),re=s.convert(ee.type),de=D(ee.internalFormat,me,re,ee.colorSpace),_e=ke(y);B&&nt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,de,y.width,y.height):nt(y)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,de,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,de,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ge(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),R(y.depthTexture,0);const ie=n.get(y.depthTexture).__webglTexture,J=ke(y);if(y.depthTexture.format===Pr)nt(y)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(y.depthTexture.format===Ps)nt(y)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function pe(C){const y=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ge(y.__webglFramebuffer,C)}else if(B){y.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[ie]),y.__webglDepthbuffer[ie]=r.createRenderbuffer(),k(y.__webglDepthbuffer[ie],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),k(y.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(C,y,B){const ie=n.get(C);y!==void 0&&De(ie.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&pe(C)}function we(C){const y=C.texture,B=n.get(C),ie=n.get(y);C.addEventListener("dispose",N),C.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=y.version,a.memory.textures++);const J=C.isWebGLCubeRenderTarget===!0,ee=C.isWebGLMultipleRenderTargets===!0,me=S(C)||o;if(J){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let de=0;de<y.mipmaps.length;de++)B.__webglFramebuffer[re][de]=r.createFramebuffer()}else B.__webglFramebuffer[re]=r.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)B.__webglFramebuffer[re]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ee)if(i.drawBuffers){const re=C.texture;for(let de=0,_e=re.length;de<_e;de++){const it=n.get(re[de]);it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&nt(C)===!1){const re=ee?y:[y];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<re.length;de++){const _e=re[de];B.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const it=s.convert(_e.format,_e.colorSpace),ne=s.convert(_e.type),rt=D(_e.internalFormat,it,ne,_e.colorSpace,C.isXRRenderTarget===!0),Be=ke(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,rt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,B.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),k(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),Le(r.TEXTURE_CUBE_MAP,y,me);for(let re=0;re<6;re++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)De(B.__webglFramebuffer[re][de],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,de);else De(B.__webglFramebuffer[re],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);A(y,me)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const re=C.texture;for(let de=0,_e=re.length;de<_e;de++){const it=re[de],ne=n.get(it);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),Le(r.TEXTURE_2D,it,me),De(B.__webglFramebuffer,C,it,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),A(it,me)&&w(r.TEXTURE_2D)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?re=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,ie.__webglTexture),Le(re,y,me),o&&y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)De(B.__webglFramebuffer[de],C,y,r.COLOR_ATTACHMENT0,re,de);else De(B.__webglFramebuffer,C,y,r.COLOR_ATTACHMENT0,re,0);A(y,me)&&w(re),t.unbindTexture()}C.depthBuffer&&pe(C)}function G(C){const y=S(C)||o,B=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0,J=B.length;ie<J;ie++){const ee=B[ie];if(A(ee,y)){const me=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,re=n.get(ee).__webglTexture;t.bindTexture(me,re),w(me),t.unbindTexture()}}}function ze(C){if(o&&C.samples>0&&nt(C)===!1){const y=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],B=C.width,ie=C.height;let J=r.COLOR_BUFFER_BIT;const ee=[],me=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=n.get(C),de=C.isWebGLMultipleRenderTargets===!0;if(de)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){ee.push(r.COLOR_ATTACHMENT0+_e),C.depthBuffer&&ee.push(me);const it=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(it===!1&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),de&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,re.__webglColorRenderbuffer[_e]),it===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[me]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[me])),de){const ne=n.get(y[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,B,ie,0,0,B,ie,J,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,re.__webglColorRenderbuffer[_e]);const it=n.get(y[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,it,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function ke(C){return Math.min(h,C.samples)}function nt(C){const y=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ke(C){const y=a.render.frame;g.get(C)!==y&&(g.set(C,y),C.update())}function xt(C,y){const B=C.colorSpace,ie=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===pc||B!==Fi&&B!==Zn&&(ft.getTransfer(B)===Mt?o===!1?e.has("EXT_sRGB")===!0&&ie===ci?(C.format=pc,C.minFilter=Yn,C.generateMipmaps=!1):y=Vf.sRGBToLinear(y):(ie!==ci||J!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}this.allocateTextureUnit=j,this.resetTextureUnits=O,this.setTexture2D=R,this.setTexture2DArray=U,this.setTexture3D=$,this.setTextureCube=ue,this.rebindTextures=be,this.setupRenderTarget=we,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=nt}function Xx(r,e,t){const n=t.isWebGL2;function i(s,a=Zn){let o;const l=ft.getTransfer(a);if(s===nr)return r.UNSIGNED_BYTE;if(s===Of)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ff)return r.UNSIGNED_SHORT_5_5_5_1;if(s===wm)return r.BYTE;if(s===Am)return r.SHORT;if(s===Xc)return r.UNSIGNED_SHORT;if(s===Nf)return r.INT;if(s===qi)return r.UNSIGNED_INT;if(s===Yi)return r.FLOAT;if(s===yo)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Rm)return r.ALPHA;if(s===ci)return r.RGBA;if(s===Cm)return r.LUMINANCE;if(s===Pm)return r.LUMINANCE_ALPHA;if(s===Pr)return r.DEPTH_COMPONENT;if(s===Ps)return r.DEPTH_STENCIL;if(s===pc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Lm)return r.RED;if(s===zf)return r.RED_INTEGER;if(s===Dm)return r.RG;if(s===Bf)return r.RG_INTEGER;if(s===kf)return r.RGBA_INTEGER;if(s===ml||s===_l||s===gl||s===vl)if(l===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ml)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_l)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ml)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_l)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cu||s===Pu||s===Lu||s===Du)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Cu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Du)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Um)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Uu||s===Iu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Uu)return l===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Iu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Nu||s===Ou||s===Fu||s===zu||s===Bu||s===ku||s===Hu||s===Gu||s===Vu||s===Wu||s===Xu||s===qu||s===Yu||s===$u)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Nu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ou)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ku)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$u)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xl||s===Ku||s===Zu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===xl)return l===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ku)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Im||s===ju||s===Ju||s===Qu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===xl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ju)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ju)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cr?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class qx extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zs extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yx={type:"move"};class Wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $x extends En{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Pr,u!==Pr&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pr&&(n=qi),n===void 0&&u===Ps&&(n=Cr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kx extends zs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const M=[],v=[],S=new zn;S.layers.enable(1),S.viewport=new Zt;const E=new zn;E.layers.enable(2),E.viewport=new Zt;const A=[S,E],w=new qx;w.layers.enable(1),w.layers.enable(2);let D=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let $=M[U];return $===void 0&&($=new Wl,M[U]=$),$.getTargetRaySpace()},this.getControllerGrip=function(U){let $=M[U];return $===void 0&&($=new Wl,M[U]=$),$.getGripSpace()},this.getHand=function(U){let $=M[U];return $===void 0&&($=new Wl,M[U]=$),$.getHandSpace()};function b(U){const $=v.indexOf(U.inputSource);if($===-1)return;const ue=M[$];ue!==void 0&&(ue.update(U.inputSource,U.frame,c||a),ue.dispatchEvent({type:U.type,data:U.inputSource}))}function F(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",N);for(let U=0;U<M.length;U++){const $=v[U];$!==null&&(v[U]=null,M[U].disconnect($))}D=null,x=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,R.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",F),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:d}),p=new Hr(d.framebufferWidth,d.framebufferHeight,{format:ci,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,ue=null,oe=null;_.depth&&(oe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?Ps:Pr,ue=_.stencil?Cr:qi);const he={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(he),i.updateRenderState({layers:[f]}),p=new Hr(f.textureWidth,f.textureHeight,{format:ci,type:nr,depthTexture:new $x(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ye=e.properties.get(p);ye.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),R.setContext(i),R.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(U){for(let $=0;$<U.removed.length;$++){const ue=U.removed[$],oe=v.indexOf(ue);oe>=0&&(v[oe]=null,M[oe].disconnect(ue))}for(let $=0;$<U.added.length;$++){const ue=U.added[$];let oe=v.indexOf(ue);if(oe===-1){for(let ye=0;ye<M.length;ye++)if(ye>=v.length){v.push(ue),oe=ye;break}else if(v[ye]===null){v[ye]=ue,oe=ye;break}if(oe===-1)break}const he=M[oe];he&&he.connect(ue)}}const Z=new X,P=new X;function z(U,$,ue){Z.setFromMatrixPosition($.matrixWorld),P.setFromMatrixPosition(ue.matrixWorld);const oe=Z.distanceTo(P),he=$.projectionMatrix.elements,ye=ue.projectionMatrix.elements,Le=he[14]/(he[10]-1),Ee=he[14]/(he[10]+1),Ce=(he[9]+1)/he[5],at=(he[9]-1)/he[5],De=(he[8]-1)/he[0],k=(ye[8]+1)/ye[0],Ge=Le*De,pe=Le*k,be=oe/(-De+k),we=be*-De;$.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(we),U.translateZ(be),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const G=Le+be,ze=Ee+be,ke=Ge-we,nt=pe+(oe-we),Ke=Ce*Ee/ze*G,xt=at*Ee/ze*G;U.projectionMatrix.makePerspective(ke,nt,Ke,xt,G,ze),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function q(U,$){$===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices($.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;w.near=E.near=S.near=U.near,w.far=E.far=S.far=U.far,(D!==w.near||x!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,x=w.far);const $=U.parent,ue=w.cameras;q(w,$);for(let oe=0;oe<ue.length;oe++)q(ue[oe],$);ue.length===2?z(w,S,E):w.projectionMatrix.copy(S.projectionMatrix),O(U,w,$)};function O(U,$,ue){ue===null?U.matrix.copy($.matrixWorld):(U.matrix.copy(ue.matrixWorld),U.matrix.invert(),U.matrix.multiply($.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy($.projectionMatrix),U.projectionMatrixInverse.copy($.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=mc*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)};let j=null;function Y(U,$){if(u=$.getViewerPose(c||a),g=$,u!==null){const ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let oe=!1;ue.length!==w.cameras.length&&(w.cameras.length=0,oe=!0);for(let he=0;he<ue.length;he++){const ye=ue[he];let Le=null;if(d!==null)Le=d.getViewport(ye);else{const Ce=h.getViewSubImage(f,ye);Le=Ce.viewport,he===0&&(e.setRenderTargetTextures(p,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(p))}let Ee=A[he];Ee===void 0&&(Ee=new zn,Ee.layers.enable(he),Ee.viewport=new Zt,A[he]=Ee),Ee.matrix.fromArray(ye.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(ye.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Le.x,Le.y,Le.width,Le.height),he===0&&(w.matrix.copy(Ee.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),oe===!0&&w.cameras.push(Ee)}}for(let ue=0;ue<M.length;ue++){const oe=v[ue],he=M[ue];oe!==null&&he!==void 0&&he.update(oe,$,c||a)}j&&j(U,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const R=new nd;R.setAnimationLoop(Y),this.setAnimationLoop=function(U){j=U},this.dispose=function(){}}}function Zx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jx(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=i[M.id];S===void 0&&(g(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",m));const E=v.program;n.updateUBOMapping(M,E);const A=e.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function u(M){const v=h();M.__bindingPointIndex=v;const S=r.createBuffer(),E=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=i[M.id],S=M.uniforms,E=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,w=S.length;A<w;A++){const D=S[A];if(d(D,A,E)===!0){const x=D.__offset,b=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let N=0;N<b.length;N++){const Z=b[N],P=_(Z);typeof Z=="number"?(D.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,x+F,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=Z.elements[0],D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=Z.elements[0],D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=Z.elements[0]):(Z.toArray(D.__data,F),F+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,D.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,v,S){const E=M.value;if(S[v]===void 0){if(typeof E=="number")S[v]=E;else{const A=Array.isArray(E)?E:[E],w=[];for(let D=0;D<A.length;D++)w.push(A[D].clone());S[v]=w}return!0}else if(typeof E=="number"){if(S[v]!==E)return S[v]=E,!0}else{const A=Array.isArray(S[v])?S[v]:[S[v]],w=Array.isArray(E)?E:[E];for(let D=0;D<A.length;D++){const x=A[D];if(x.equals(w[D])===!1)return x.copy(w[D]),!0}}return!1}function g(M){const v=M.uniforms;let S=0;const E=16;let A=0;for(let w=0,D=v.length;w<D;w++){const x=v[w],b={boundary:0,storage:0},F=Array.isArray(x.value)?x.value:[x.value];for(let N=0,Z=F.length;N<Z;N++){const P=F[N],z=_(P);b.boundary+=z.boundary,b.storage+=z.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,w>0){A=S%E;const N=E-A;A!==0&&N-b.boundary<0&&(S+=E-A,x.__offset=S)}S+=b.storage}return A=S%E,A>0&&(S+=E-A),M.__size=S,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class ad{constructor(e={}){const{canvas:t=$m(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const v=this;let S=!1,E=0,A=0,w=null,D=-1,x=null;const b=new Zt,F=new Zt;let N=null;const Z=new ut(0);let P=0,z=t.width,q=t.height,O=1,j=null,Y=null;const R=new Zt(0,0,z,q),U=new Zt(0,0,z,q);let $=!1;const ue=new td;let oe=!1,he=!1,ye=null;const Le=new Yt,Ee=new mt,Ce=new X,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return w===null?O:1}let k=n;function Ge(T,I){for(let V=0;V<T.length;V++){const H=T[V],W=t.getContext(H,I);if(W!==null)return W}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wc}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ce,!1),k===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),k=Ge(I,T),k===null)throw Ge(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let pe,be,we,G,ze,ke,nt,Ke,xt,C,y,B,ie,J,ee,me,re,de,_e,it,ne,rt,Be,Ue;function Pe(){pe=new av(k),be=new ev(k,pe,e),pe.init(be),rt=new Xx(k,pe,be),we=new Vx(k,pe,be),G=new uv(k),ze=new Cx,ke=new Wx(k,pe,we,ze,be,rt,G),nt=new nv(v),Ke=new ov(v),xt=new x_(k,be),Be=new J0(k,pe,xt,be),C=new lv(k,xt,G,Be),y=new pv(k,C,xt,G),_e=new dv(k,be,ke),me=new tv(ze),B=new Rx(v,nt,Ke,pe,be,Be,me),ie=new Zx(v,ze),J=new Lx,ee=new Fx(pe,be),de=new j0(v,nt,Ke,we,y,f,l),re=new Gx(v,y,be),Ue=new jx(k,G,be,we),it=new Q0(k,pe,G,be),ne=new cv(k,pe,G,be),G.programs=B.programs,v.capabilities=be,v.extensions=pe,v.properties=ze,v.renderLists=J,v.shadowMap=re,v.state=we,v.info=G}Pe();const Q=new Kx(v,k);this.xr=Q,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(z,q,!1))},this.getSize=function(T){return T.set(z,q)},this.setSize=function(T,I,V=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,q=I,t.width=Math.floor(T*O),t.height=Math.floor(I*O),V===!0&&(t.style.width=T+"px",t.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(z*O,q*O).floor()},this.setDrawingBufferSize=function(T,I,V){z=T,q=I,O=V,t.width=Math.floor(T*V),t.height=Math.floor(I*V),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,I,V,H){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,I,V,H),we.viewport(b.copy(R).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,I,V,H){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,I,V,H),we.scissor(F.copy(U).multiplyScalar(O).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(T){we.setScissorTest($=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(T=!0,I=!0,V=!0){let H=0;if(T){let W=!1;if(w!==null){const le=w.texture.format;W=le===kf||le===Bf||le===zf}if(W){const le=w.texture.type,xe=le===nr||le===qi||le===Xc||le===Cr||le===Of||le===Ff,Oe=de.getClearColor(),Me=de.getClearAlpha(),Te=Oe.r,Fe=Oe.g,We=Oe.b;xe?(d[0]=Te,d[1]=Fe,d[2]=We,d[3]=Me,k.clearBufferuiv(k.COLOR,0,d)):(g[0]=Te,g[1]=Fe,g[2]=We,g[3]=Me,k.clearBufferiv(k.COLOR,0,g))}else H|=k.COLOR_BUFFER_BIT}I&&(H|=k.DEPTH_BUFFER_BIT),V&&(H|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),J.dispose(),ee.dispose(),ze.dispose(),nt.dispose(),Ke.dispose(),y.dispose(),Be.dispose(),Ue.dispose(),B.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Se),Q.removeEventListener("sessionend",Re),ye&&(ye.dispose(),ye=null),se.stop()};function Xe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=G.autoReset,I=re.enabled,V=re.autoUpdate,H=re.needsUpdate,W=re.type;Pe(),G.autoReset=T,re.enabled=I,re.autoUpdate=V,re.needsUpdate=H,re.type=W}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function te(T){const I=T.target;I.removeEventListener("dispose",te),K(I)}function K(T){ae(T),ze.remove(T)}function ae(T){const I=ze.get(T).programs;I!==void 0&&(I.forEach(function(V){B.releaseProgram(V)}),T.isShaderMaterial&&B.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,V,H,W,le){I===null&&(I=at);const xe=W.isMesh&&W.matrixWorld.determinant()<0,Oe=gt(T,I,V,H,W);we.setMaterial(H,xe);let Me=V.index,Te=1;if(H.wireframe===!0){if(Me=C.getWireframeAttribute(V),Me===void 0)return;Te=2}const Fe=V.drawRange,We=V.attributes.position;let Et=Fe.start*Te,Ft=(Fe.start+Fe.count)*Te;le!==null&&(Et=Math.max(Et,le.start*Te),Ft=Math.min(Ft,(le.start+le.count)*Te)),Me!==null?(Et=Math.max(Et,0),Ft=Math.min(Ft,Me.count)):We!=null&&(Et=Math.max(Et,0),Ft=Math.min(Ft,We.count));const ct=Ft-Et;if(ct<0||ct===1/0)return;Be.setup(W,H,Oe,V,Me);let on,dt=it;if(Me!==null&&(on=xt.get(Me),dt=ne,dt.setIndex(on)),W.isMesh)H.wireframe===!0?(we.setLineWidth(H.wireframeLinewidth*De()),dt.setMode(k.LINES)):dt.setMode(k.TRIANGLES);else if(W.isLine){let qe=H.linewidth;qe===void 0&&(qe=1),we.setLineWidth(qe*De()),W.isLineSegments?dt.setMode(k.LINES):W.isLineLoop?dt.setMode(k.LINE_LOOP):dt.setMode(k.LINE_STRIP)}else W.isPoints?dt.setMode(k.POINTS):W.isSprite&&dt.setMode(k.TRIANGLES);if(W.isInstancedMesh)dt.renderInstances(Et,ct,W.count);else if(V.isInstancedBufferGeometry){const qe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ul=Math.min(V.instanceCount,qe);dt.renderInstances(Et,ct,ul)}else dt.render(Et,ct)};function Ae(T,I,V){T.transparent===!0&&T.side===Di&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,_t(T,I,V),T.side=or,T.needsUpdate=!0,_t(T,I,V),T.side=Di):_t(T,I,V)}this.compile=function(T,I,V=null){V===null&&(V=T),m=ee.get(V),m.init(),M.push(m),V.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),T!==V&&T.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(v._useLegacyLights);const H=new Set;return T.traverse(function(W){const le=W.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const Oe=le[xe];Ae(Oe,V,W),H.add(Oe)}else Ae(le,V,W),H.add(le)}),M.pop(),m=null,H},this.compileAsync=function(T,I,V=null){const H=this.compile(T,I,V);return new Promise(W=>{function le(){if(H.forEach(function(xe){ze.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){W(T);return}setTimeout(le,10)}pe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let et=null;function ve(T){et&&et(T)}function Se(){se.stop()}function Re(){se.start()}const se=new nd;se.setAnimationLoop(ve),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(T){et=T,Q.setAnimationLoop(T),T===null?se.stop():se.start()},Q.addEventListener("sessionstart",Se),Q.addEventListener("sessionend",Re),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(I),I=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,I,w),m=ee.get(T,M.length),m.init(),M.push(m),Le.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ue.setFromProjectionMatrix(Le),he=this.localClippingEnabled,oe=me.init(this.clippingPlanes,he),_=J.get(T,p.length),_.init(),p.push(_),Ne(T,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,Y),this.info.render.frame++,oe===!0&&me.beginShadows();const V=m.state.shadowsArray;if(re.render(V,T,I),oe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(_,T),m.setupLights(v._useLegacyLights),I.isArrayCamera){const H=I.cameras;for(let W=0,le=H.length;W<le;W++){const xe=H[W];Ie(_,T,xe,xe.viewport)}}else Ie(_,T,I);w!==null&&(ke.updateMultisampleRenderTarget(w),ke.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,I),Be.resetDefaultState(),D=-1,x=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ne(T,I,V,H){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ue.intersectsSprite(T)){H&&Ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Le);const xe=y.update(T),Oe=T.material;Oe.visible&&_.push(T,xe,Oe,V,Ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ue.intersectsObject(T))){const xe=y.update(T),Oe=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ce.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ce.copy(xe.boundingSphere.center)),Ce.applyMatrix4(T.matrixWorld).applyMatrix4(Le)),Array.isArray(Oe)){const Me=xe.groups;for(let Te=0,Fe=Me.length;Te<Fe;Te++){const We=Me[Te],Et=Oe[We.materialIndex];Et&&Et.visible&&_.push(T,xe,Et,V,Ce.z,We)}}else Oe.visible&&_.push(T,xe,Oe,V,Ce.z,null)}}const le=T.children;for(let xe=0,Oe=le.length;xe<Oe;xe++)Ne(le[xe],I,V,H)}function Ie(T,I,V,H){const W=T.opaque,le=T.transmissive,xe=T.transparent;m.setupLightsView(V),oe===!0&&me.setGlobalState(v.clippingPlanes,V),le.length>0&&Ve(W,le,I,V),H&&we.viewport(b.copy(H)),W.length>0&&bt(W,I,V),le.length>0&&bt(le,I,V),xe.length>0&&bt(xe,I,V),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ve(T,I,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const le=be.isWebGL2;ye===null&&(ye=new Hr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?yo:nr,minFilter:Mo,samples:le?4:0})),v.getDrawingBufferSize(Ee),le?ye.setSize(Ee.x,Ee.y):ye.setSize(_c(Ee.x),_c(Ee.y));const xe=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor(Z),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Oe=v.toneMapping;v.toneMapping=tr,bt(T,V,H),ke.updateMultisampleRenderTarget(ye),ke.updateRenderTargetMipmap(ye);let Me=!1;for(let Te=0,Fe=I.length;Te<Fe;Te++){const We=I[Te],Et=We.object,Ft=We.geometry,ct=We.material,on=We.group;if(ct.side===Di&&Et.layers.test(H.layers)){const dt=ct.side;ct.side=yn,ct.needsUpdate=!0,Ze(Et,V,H,Ft,ct,on),ct.side=dt,ct.needsUpdate=!0,Me=!0}}Me===!0&&(ke.updateMultisampleRenderTarget(ye),ke.updateRenderTargetMipmap(ye)),v.setRenderTarget(xe),v.setClearColor(Z,P),v.toneMapping=Oe}function bt(T,I,V){const H=I.isScene===!0?I.overrideMaterial:null;for(let W=0,le=T.length;W<le;W++){const xe=T[W],Oe=xe.object,Me=xe.geometry,Te=H===null?xe.material:H,Fe=xe.group;Oe.layers.test(V.layers)&&Ze(Oe,I,V,Me,Te,Fe)}}function Ze(T,I,V,H,W,le){T.onBeforeRender(v,I,V,H,W,le),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(v,I,V,H,T,le),W.transparent===!0&&W.side===Di&&W.forceSinglePass===!1?(W.side=yn,W.needsUpdate=!0,v.renderBufferDirect(V,I,H,W,T,le),W.side=or,W.needsUpdate=!0,v.renderBufferDirect(V,I,H,W,T,le),W.side=Di):v.renderBufferDirect(V,I,H,W,T,le),T.onAfterRender(v,I,V,H,W,le)}function _t(T,I,V){I.isScene!==!0&&(I=at);const H=ze.get(T),W=m.state.lights,le=m.state.shadowsArray,xe=W.state.version,Oe=B.getParameters(T,W.state,le,I,V),Me=B.getProgramCacheKey(Oe);let Te=H.programs;H.environment=T.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(T.isMeshStandardMaterial?Ke:nt).get(T.envMap||H.environment),Te===void 0&&(T.addEventListener("dispose",te),Te=new Map,H.programs=Te);let Fe=Te.get(Me);if(Fe!==void 0){if(H.currentProgram===Fe&&H.lightsStateVersion===xe)return St(T,Oe),Fe}else Oe.uniforms=B.getUniforms(T),T.onBuild(V,Oe,v),T.onBeforeCompile(Oe,v),Fe=B.acquireProgram(Oe,Me),Te.set(Me,Fe),H.uniforms=Oe.uniforms;const We=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=me.uniform),St(T,Oe),H.needsLights=Pn(T),H.lightsStateVersion=xe,H.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix),H.currentProgram=Fe,H.uniformsList=null,Fe}function Ot(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=ba.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function St(T,I){const V=ze.get(T);V.outputColorSpace=I.outputColorSpace,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function gt(T,I,V,H,W){I.isScene!==!0&&(I=at),ke.resetTextureUnits();const le=I.fog,xe=H.isMeshStandardMaterial?I.environment:null,Oe=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Fi,Me=(H.isMeshStandardMaterial?Ke:nt).get(H.envMap||xe),Te=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),We=!!V.morphAttributes.position,Et=!!V.morphAttributes.normal,Ft=!!V.morphAttributes.color;let ct=tr;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ct=v.toneMapping);const on=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dt=on!==void 0?on.length:0,qe=ze.get(H),ul=m.state.lights;if(oe===!0&&(he===!0||T!==x)){const Ln=T===x&&H.id===D;me.setState(H,T,Ln)}let Dt=!1;H.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ul.state.version||qe.outputColorSpace!==Oe||W.isInstancedMesh&&qe.instancing===!1||!W.isInstancedMesh&&qe.instancing===!0||W.isSkinnedMesh&&qe.skinning===!1||!W.isSkinnedMesh&&qe.skinning===!0||W.isInstancedMesh&&qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&qe.instancingColor===!1&&W.instanceColor!==null||qe.envMap!==Me||H.fog===!0&&qe.fog!==le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==me.numPlanes||qe.numIntersection!==me.numIntersection)||qe.vertexAlphas!==Te||qe.vertexTangents!==Fe||qe.morphTargets!==We||qe.morphNormals!==Et||qe.morphColors!==Ft||qe.toneMapping!==ct||be.isWebGL2===!0&&qe.morphTargetsCount!==dt)&&(Dt=!0):(Dt=!0,qe.__version=H.version);let hr=qe.currentProgram;Dt===!0&&(hr=_t(H,I,W));let Mu=!1,ks=!1,hl=!1;const an=hr.getUniforms(),fr=qe.uniforms;if(we.useProgram(hr.program)&&(Mu=!0,ks=!0,hl=!0),H.id!==D&&(D=H.id,ks=!0),Mu||x!==T){an.setValue(k,"projectionMatrix",T.projectionMatrix),an.setValue(k,"viewMatrix",T.matrixWorldInverse);const Ln=an.map.cameraPosition;Ln!==void 0&&Ln.setValue(k,Ce.setFromMatrixPosition(T.matrixWorld)),be.logarithmicDepthBuffer&&an.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&an.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,ks=!0,hl=!0)}if(W.isSkinnedMesh){an.setOptional(k,W,"bindMatrix"),an.setOptional(k,W,"bindMatrixInverse");const Ln=W.skeleton;Ln&&(be.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),an.setValue(k,"boneTexture",Ln.boneTexture,ke),an.setValue(k,"boneTextureSize",Ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fl=V.morphAttributes;if((fl.position!==void 0||fl.normal!==void 0||fl.color!==void 0&&be.isWebGL2===!0)&&_e.update(W,V,hr),(ks||qe.receiveShadow!==W.receiveShadow)&&(qe.receiveShadow=W.receiveShadow,an.setValue(k,"receiveShadow",W.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(fr.envMap.value=Me,fr.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),ks&&(an.setValue(k,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&lt(fr,hl),le&&H.fog===!0&&ie.refreshFogUniforms(fr,le),ie.refreshMaterialUniforms(fr,H,O,q,ye),ba.upload(k,Ot(qe),fr,ke)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ba.upload(k,Ot(qe),fr,ke),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&an.setValue(k,"center",W.center),an.setValue(k,"modelViewMatrix",W.modelViewMatrix),an.setValue(k,"normalMatrix",W.normalMatrix),an.setValue(k,"modelMatrix",W.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ln=H.uniformsGroups;for(let dl=0,Vp=Ln.length;dl<Vp;dl++)if(be.isWebGL2){const yu=Ln[dl];Ue.update(yu,hr),Ue.bind(yu,hr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hr}function lt(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Pn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,I,V){ze.get(T.texture).__webglTexture=I,ze.get(T.depthTexture).__webglTexture=V;const H=ze.get(T);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,I){const V=ze.get(T);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,V=0){w=T,E=I,A=V;let H=!0,W=null,le=!1,xe=!1;if(T){const Me=ze.get(T);Me.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(k.FRAMEBUFFER,null),H=!1):Me.__webglFramebuffer===void 0?ke.setupRenderTarget(T):Me.__hasExternalTextures&&ke.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);const Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);const Fe=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[I])?W=Fe[I][V]:W=Fe[I],le=!0):be.isWebGL2&&T.samples>0&&ke.useMultisampledRTT(T)===!1?W=ze.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[V]:W=Fe,b.copy(T.viewport),F.copy(T.scissor),N=T.scissorTest}else b.copy(R).multiplyScalar(O).floor(),F.copy(U).multiplyScalar(O).floor(),N=$;if(we.bindFramebuffer(k.FRAMEBUFFER,W)&&be.drawBuffers&&H&&we.drawBuffers(T,W),we.viewport(b),we.scissor(F),we.setScissorTest(N),le){const Me=ze.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+I,Me.__webglTexture,V)}else if(xe){const Me=ze.get(T.texture),Te=I||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Me.__webglTexture,V||0,Te)}D=-1},this.readRenderTargetPixels=function(T,I,V,H,W,le,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Oe=Oe[xe]),Oe){we.bindFramebuffer(k.FRAMEBUFFER,Oe);try{const Me=T.texture,Te=Me.format,Fe=Me.type;if(Te!==ci&&rt.convert(Te)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Fe===yo&&(pe.has("EXT_color_buffer_half_float")||be.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Fe!==nr&&rt.convert(Fe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Yi&&(be.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-H&&V>=0&&V<=T.height-W&&k.readPixels(I,V,H,W,rt.convert(Te),rt.convert(Fe),le)}finally{const Me=w!==null?ze.get(w).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(T,I,V=0){const H=Math.pow(2,-V),W=Math.floor(I.image.width*H),le=Math.floor(I.image.height*H);ke.setTexture2D(I,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,T.x,T.y,W,le),we.unbindTexture()},this.copyTextureToTexture=function(T,I,V,H=0){const W=I.image.width,le=I.image.height,xe=rt.convert(V.format),Oe=rt.convert(V.type);ke.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),I.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,H,T.x,T.y,W,le,xe,Oe,I.image.data):I.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,H,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,xe,I.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,H,T.x,T.y,xe,Oe,I.image),H===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(T,I,V,H,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=T.max.x-T.min.x+1,xe=T.max.y-T.min.y+1,Oe=T.max.z-T.min.z+1,Me=rt.convert(H.format),Te=rt.convert(H.type);let Fe;if(H.isData3DTexture)ke.setTexture3D(H,0),Fe=k.TEXTURE_3D;else if(H.isDataArrayTexture)ke.setTexture2DArray(H,0),Fe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);const We=k.getParameter(k.UNPACK_ROW_LENGTH),Et=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ft=k.getParameter(k.UNPACK_SKIP_PIXELS),ct=k.getParameter(k.UNPACK_SKIP_ROWS),on=k.getParameter(k.UNPACK_SKIP_IMAGES),dt=V.isCompressedTexture?V.mipmaps[0]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,dt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(Fe,W,I.x,I.y,I.z,le,xe,Oe,Me,Te,dt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Fe,W,I.x,I.y,I.z,le,xe,Oe,Me,dt.data)):k.texSubImage3D(Fe,W,I.x,I.y,I.z,le,xe,Oe,Me,Te,dt),k.pixelStorei(k.UNPACK_ROW_LENGTH,We),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Et),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ft),k.pixelStorei(k.UNPACK_SKIP_ROWS,ct),k.pixelStorei(k.UNPACK_SKIP_IMAGES,on),W===0&&H.generateMipmaps&&k.generateMipmap(Fe),we.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ke.setTextureCube(T,0):T.isData3DTexture?ke.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ke.setTexture2DArray(T,0):ke.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){E=0,A=0,w=null,we.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===qc?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===nl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Kt?Lr:Hf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Lr?Kt:Fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Jx extends ad{}Jx.prototype.isWebGL1Renderer=!0;class Qx extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ha extends zo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gh=new Yt,vc=new qf,ca=new il,ua=new X;class ld extends Tn{constructor(e=new ui,t=new Ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(i),ca.radius+=s,e.ray.intersectsSphere(ca)===!1)return;Gh.copy(i).invert(),vc.copy(e.ray).applyMatrix4(Gh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);ua.fromBufferAttribute(h,m),Vh(ua,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)ua.fromBufferAttribute(h,g),Vh(ua,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vh(r,e,t,n,i,s,a){const o=vc.distanceSqToPoint(r);if(o<t){const l=new X;vc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}const Wh={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class eS{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const tS=new eS;class Kc{constructor(e){this.manager=e!==void 0?e:tS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kc.DEFAULT_MATERIAL_NAME="__DEFAULT";class nS extends Kc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Wh.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Eo("img");function l(){u(),Wh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class iS extends Kc{constructor(e){super(e)}load(e,t,n,i){const s=new En,a=new nS(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class rS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xh(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);function qh(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function sS(r,e,t){return e&&qh(r.prototype,e),t&&qh(r,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt,wa,Bn,Ki,Zi,ys,cd,Mr,oo,ud,Ni,si,hd,fd=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},dd=1,gs=[],tt=[],xi=[],ao=Date.now,xc=function(e,t){return t},oS=function(){var e=oo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,tt),i.push.apply(i,xi),tt=n,xi=i,xc=function(a,o){return t[a](o)}},ir=function(e,t){return~xi.indexOf(e)&&xi[xi.indexOf(e)+1][t]},lo=function(e){return!!~ud.indexOf(e)},cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ha="scrollLeft",fa="scrollTop",Sc=function(){return Ni&&Ni.isPressed||tt.cache++},Ga=function(e,t){var n=function i(s){if(s||s===0){dd&&(Bn.history.scrollRestoration="manual");var a=Ni&&Ni.isPressed;s=i.v=Math.round(s)||(Ni&&Ni.iOS?1:0),e(s),i.cacheID=tt.cache,a&&xc("ss",s)}else(t||tt.cache!==i.cacheID||xc("ref"))&&(i.cacheID=tt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},_n={s:ha,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ga(function(r){return arguments.length?Bn.scrollTo(r,Bt.sc()):Bn.pageXOffset||Ki[ha]||Zi[ha]||ys[ha]||0})},Bt={s:fa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_n,sc:Ga(function(r){return arguments.length?Bn.scrollTo(_n.sc(),r):Bn.pageYOffset||Ki[fa]||Zi[fa]||ys[fa]||0})},Sn=function(e,t){return(t&&t._ctx&&t._ctx.selector||jt.utils.toArray)(e)[0]||(typeof e=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ar=function(e,t){var n=t.s,i=t.sc;lo(e)&&(e=Ki.scrollingElement||Zi);var s=tt.indexOf(e),a=i===Bt.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+a]||cn(e,"scroll",Sc);var o=tt[s+a],l=o||(tt[s+a]=Ga(ir(e,n),!0)||(lo(e)?i:Ga(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=jt.getProperty(e,"scrollBehavior")==="smooth"),l},Mc=function(e,t,n){var i=e,s=e,a=ao(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=ao();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(g){var _=o,m=s,p=ao();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:h,getVelocity:f}},qs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Yh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},pd=function(){oo=jt.core.globals().ScrollTrigger,oo&&oo.core&&oS()},md=function(e){return jt=e||fd(),!wa&&jt&&typeof document<"u"&&document.body&&(Bn=window,Ki=document,Zi=Ki.documentElement,ys=Ki.body,ud=[Bn,Ki,Zi,ys],jt.utils.clamp,hd=jt.core.context||function(){},Mr="onpointerenter"in ys?"pointer":"mouse",cd=Lt.isTouch=Bn.matchMedia&&Bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,si=Lt.eventTypes=("ontouchstart"in Zi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Zi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dd=0},500),pd(),wa=1),wa};_n.op=Bt;tt.cache=0;var Lt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){wa||md(jt)||console.warn("Please gsap.registerPlugin(Observer)"),oo||pd();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,v=n.onPress,S=n.onRelease,E=n.onRight,A=n.onLeft,w=n.onUp,D=n.onDown,x=n.onChangeX,b=n.onChangeY,F=n.onChange,N=n.onToggleX,Z=n.onToggleY,P=n.onHover,z=n.onHoverEnd,q=n.onMove,O=n.ignoreCheck,j=n.isNormalizer,Y=n.onGestureStart,R=n.onGestureEnd,U=n.onWheel,$=n.onEnable,ue=n.onDisable,oe=n.onClick,he=n.scrollSpeed,ye=n.capture,Le=n.allowClicks,Ee=n.lockAxis,Ce=n.onLockAxis;this.target=o=Sn(o)||Zi,this.vars=n,d&&(d=jt.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,he=he||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Bn.getComputedStyle(ys).lineHeight)||22);var at,De,k,Ge,pe,be,we,G=this,ze=0,ke=0,nt=n.passive||!u,Ke=ar(o,_n),xt=ar(o,Bt),C=Ke(),y=xt(),B=~a.indexOf("touch")&&!~a.indexOf("pointer")&&si[0]==="pointerdown",ie=lo(o),J=o.ownerDocument||Ki,ee=[0,0,0],me=[0,0,0],re=0,de=function(){return re=ao()},_e=function(Se,Re){return(G.event=Se)&&d&&~d.indexOf(Se.target)||Re&&B&&Se.pointerType!=="touch"||O&&O(Se,Re)},it=function(){G._vx.reset(),G._vy.reset(),De.pause(),h&&h(G)},ne=function(){var Se=G.deltaX=Yh(ee),Re=G.deltaY=Yh(me),se=Math.abs(Se)>=i,Ne=Math.abs(Re)>=i;F&&(se||Ne)&&F(G,Se,Re,ee,me),se&&(E&&G.deltaX>0&&E(G),A&&G.deltaX<0&&A(G),x&&x(G),N&&G.deltaX<0!=ze<0&&N(G),ze=G.deltaX,ee[0]=ee[1]=ee[2]=0),Ne&&(D&&G.deltaY>0&&D(G),w&&G.deltaY<0&&w(G),b&&b(G),Z&&G.deltaY<0!=ke<0&&Z(G),ke=G.deltaY,me[0]=me[1]=me[2]=0),(Ge||k)&&(q&&q(G),k&&(M(G),k=!1),Ge=!1),be&&!(be=!1)&&Ce&&Ce(G),pe&&(U(G),pe=!1),at=0},rt=function(Se,Re,se){ee[se]+=Se,me[se]+=Re,G._vx.update(Se),G._vy.update(Re),c?at||(at=requestAnimationFrame(ne)):ne()},Be=function(Se,Re){Ee&&!we&&(G.axis=we=Math.abs(Se)>Math.abs(Re)?"x":"y",be=!0),we!=="y"&&(ee[2]+=Se,G._vx.update(Se,!0)),we!=="x"&&(me[2]+=Re,G._vy.update(Re,!0)),c?at||(at=requestAnimationFrame(ne)):ne()},Ue=function(Se){if(!_e(Se,1)){Se=qs(Se,u);var Re=Se.clientX,se=Se.clientY,Ne=Re-G.x,Ie=se-G.y,Ve=G.isDragging;G.x=Re,G.y=se,(Ve||Math.abs(G.startX-Re)>=s||Math.abs(G.startY-se)>=s)&&(M&&(k=!0),Ve||(G.isDragging=!0),Be(Ne,Ie),Ve||m&&m(G))}},Pe=G.onPress=function(ve){_e(ve,1)||ve&&ve.button||(G.axis=we=null,De.pause(),G.isPressed=!0,ve=qs(ve),ze=ke=0,G.startX=G.x=ve.clientX,G.startY=G.y=ve.clientY,G._vx.reset(),G._vy.reset(),cn(j?o:J,si[1],Ue,nt,!0),G.deltaX=G.deltaY=0,v&&v(G))},Q=G.onRelease=function(ve){if(!_e(ve,1)){ln(j?o:J,si[1],Ue,!0);var Se=!isNaN(G.y-G.startY),Re=G.isDragging,se=Re&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ne=qs(ve);!se&&Se&&(G._vx.reset(),G._vy.reset(),u&&Le&&jt.delayedCall(.08,function(){if(ao()-re>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(J.createEvent){var Ie=J.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,Bn,1,Ne.screenX,Ne.screenY,Ne.clientX,Ne.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Ie)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&Re&&!j&&De.restart(!0),p&&Re&&p(G),S&&S(G,se)}},Xe=function(Se){return Se.touches&&Se.touches.length>1&&(G.isGesturing=!0)&&Y(Se,G.isDragging)},L=function(){return(G.isGesturing=!1)||R(G)},ce=function(Se){if(!_e(Se)){var Re=Ke(),se=xt();rt((Re-C)*he,(se-y)*he,1),C=Re,y=se,h&&De.restart(!0)}},te=function(Se){if(!_e(Se)){Se=qs(Se,u),U&&(pe=!0);var Re=(Se.deltaMode===1?l:Se.deltaMode===2?Bn.innerHeight:1)*g;rt(Se.deltaX*Re,Se.deltaY*Re,0),h&&!j&&De.restart(!0)}},K=function(Se){if(!_e(Se)){var Re=Se.clientX,se=Se.clientY,Ne=Re-G.x,Ie=se-G.y;G.x=Re,G.y=se,Ge=!0,h&&De.restart(!0),(Ne||Ie)&&Be(Ne,Ie)}},ae=function(Se){G.event=Se,P(G)},Ae=function(Se){G.event=Se,z(G)},et=function(Se){return _e(Se)||qs(Se,u)&&oe(G)};De=G._dc=jt.delayedCall(f||.25,it).pause(),G.deltaX=G.deltaY=0,G._vx=Mc(0,50,!0),G._vy=Mc(0,50,!0),G.scrollX=Ke,G.scrollY=xt,G.isDragging=G.isGesturing=G.isPressed=!1,hd(this),G.enable=function(ve){return G.isEnabled||(cn(ie?J:o,"scroll",Sc),a.indexOf("scroll")>=0&&cn(ie?J:o,"scroll",ce,nt,ye),a.indexOf("wheel")>=0&&cn(o,"wheel",te,nt,ye),(a.indexOf("touch")>=0&&cd||a.indexOf("pointer")>=0)&&(cn(o,si[0],Pe,nt,ye),cn(J,si[2],Q),cn(J,si[3],Q),Le&&cn(o,"click",de,!0,!0),oe&&cn(o,"click",et),Y&&cn(J,"gesturestart",Xe),R&&cn(J,"gestureend",L),P&&cn(o,Mr+"enter",ae),z&&cn(o,Mr+"leave",Ae),q&&cn(o,Mr+"move",K)),G.isEnabled=!0,ve&&ve.type&&Pe(ve),$&&$(G)),G},G.disable=function(){G.isEnabled&&(gs.filter(function(ve){return ve!==G&&lo(ve.target)}).length||ln(ie?J:o,"scroll",Sc),G.isPressed&&(G._vx.reset(),G._vy.reset(),ln(j?o:J,si[1],Ue,!0)),ln(ie?J:o,"scroll",ce,ye),ln(o,"wheel",te,ye),ln(o,si[0],Pe,ye),ln(J,si[2],Q),ln(J,si[3],Q),ln(o,"click",de,!0),ln(o,"click",et),ln(J,"gesturestart",Xe),ln(J,"gestureend",L),ln(o,Mr+"enter",ae),ln(o,Mr+"leave",Ae),ln(o,Mr+"move",K),G.isEnabled=G.isPressed=G.isDragging=!1,ue&&ue(G))},G.kill=G.revert=function(){G.disable();var ve=gs.indexOf(G);ve>=0&&gs.splice(ve,1),Ni===G&&(Ni=0)},gs.push(G),j&&lo(o)&&(Ni=G),G.enable(_)},sS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Lt.version="3.12.5";Lt.create=function(r){return new Lt(r)};Lt.register=md;Lt.getAll=function(){return gs.slice()};Lt.getById=function(r){return gs.filter(function(e){return e.vars.id===r})[0]};fd()&&jt.registerPlugin(Lt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ge,ps,st,wt,ai,yt,_d,Va,To,co,js,da,en,ol,yc,fn,$h,Kh,ms,gd,Xl,vd,hn,Ec,xd,Sd,Xi,Tc,Zc,Es,jc,Wa,bc,ql,pa=1,tn=Date.now,Yl=tn(),Qn=0,Js=0,Zh=function(e,t,n){var i=On(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},jh=function(e,t){return t&&(!On(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},aS=function r(){return Js&&requestAnimationFrame(r)},Jh=function(){return ol=1},Qh=function(){return ol=0},di=function(e){return e},Qs=function(e){return Math.round(e*1e5)/1e5||0},Md=function(){return typeof window<"u"},yd=function(){return ge||Md()&&(ge=window.gsap)&&ge.registerPlugin&&ge},Vr=function(e){return!!~_d.indexOf(e)},Ed=function(e){return(e==="Height"?jc:st["inner"+e])||ai["client"+e]||yt["client"+e]},Td=function(e){return ir(e,"getBoundingClientRect")||(Vr(e)?function(){return La.width=st.innerWidth,La.height=jc,La}:function(){return Ui(e)})},lS=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=ir(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Ed(s):e["client"+s])||0}},cS=function(e,t){return!t||~xi.indexOf(e)?Td(e):function(){return La}},gi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=ir(e,n))?a()-Td(e)()[s]:Vr(e)?(ai[n]||yt[n])-Ed(i):e[n]-e["offset"+i])},ma=function(e,t){for(var n=0;n<ms.length;n+=3)(!t||~t.indexOf(ms[n+1]))&&e(ms[n],ms[n+1],ms[n+2])},On=function(e){return typeof e=="string"},gn=function(e){return typeof e=="function"},eo=function(e){return typeof e=="number"},yr=function(e){return typeof e=="object"},Ys=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},$l=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},hs=Math.abs,bd="left",wd="top",Jc="right",Qc="bottom",Ur="width",Ir="height",uo="Right",ho="Left",fo="Top",po="Bottom",It="padding",$n="margin",Ds="Width",eu="Height",zt="px",Kn=function(e){return st.getComputedStyle(e)},uS=function(e){var t=Kn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ef=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ui=function(e,t){var n=t&&Kn(e)[yc]!=="matrix(1, 0, 0, 1, 0, 0)"&&ge.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Xa=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ad=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},hS=function(e){return function(t){return ge.utils.snap(Ad(e),t)}},tu=function(e){var t=ge.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},fS=function(e){return function(t,n){return tu(Ad(e))(t,n.direction)}},_a=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Xt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Wt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ga=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},tf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},va={toggleActions:"play",anticipatePin:0},qa={top:0,left:0,center:.5,bottom:1,right:1},Aa=function(e,t){if(On(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in qa?qa[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},xa=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=wt.createElement("div"),_=Vr(n)||ir(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?yt:n,M=e.indexOf("start")!==-1,v=M?c:u,S="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(i===Bt?Jc:Qc)+":"+(a+parseFloat(f))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ra(g,0,i,M),g},Ra=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ds]=1,s["border"+o+Ds]=0,s[n.p]=t+"px",ge.set(e,s)},je=[],wc={},bo,nf=function(){return tn()-Qn>34&&(bo||(bo=requestAnimationFrame(Oi)))},fs=function(){(!hn||!hn.isPressed||hn.startX>yt.clientWidth)&&(tt.cache++,hn?bo||(bo=requestAnimationFrame(Oi)):Oi(),Qn||Xr("scrollStart"),Qn=tn())},Kl=function(){Sd=st.innerWidth,xd=st.innerHeight},to=function(){tt.cache++,!en&&!vd&&!wt.fullscreenElement&&!wt.webkitFullscreenElement&&(!Ec||Sd!==st.innerWidth||Math.abs(st.innerHeight-xd)>st.innerHeight*.25)&&Va.restart(!0)},Wr={},dS=[],Rd=function r(){return Wt(Qe,"scrollEnd",r)||wr(!0)},Xr=function(e){return Wr[e]&&Wr[e].map(function(t){return t()})||dS},Nn=[],Cd=function(e){for(var t=0;t<Nn.length;t+=5)(!e||Nn[t+4]&&Nn[t+4].query===e)&&(Nn[t].style.cssText=Nn[t+1],Nn[t].getBBox&&Nn[t].setAttribute("transform",Nn[t+2]||""),Nn[t+3].uncache=1)},nu=function(e,t){var n;for(fn=0;fn<je.length;fn++)n=je[fn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Wa=!0,t&&Cd(t),t||Xr("revert")},Pd=function(e,t){tt.cache++,(t||!dn)&&tt.forEach(function(n){return gn(n)&&n.cacheID++&&(n.rec=0)}),On(e)&&(st.history.scrollRestoration=Zc=e)},dn,Nr=0,rf,pS=function(){if(rf!==Nr){var e=rf=Nr;requestAnimationFrame(function(){return e===Nr&&wr(!0)})}},Ld=function(){yt.appendChild(Es),jc=!hn&&Es.offsetHeight||st.innerHeight,yt.removeChild(Es)},sf=function(e){return To(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},wr=function(e,t){if(Qn&&!e&&!Wa){Xt(Qe,"scrollEnd",Rd);return}Ld(),dn=Qe.isRefreshing=!0,tt.forEach(function(i){return gn(i)&&++i.cacheID&&(i.rec=i())});var n=Xr("refreshInit");gd&&Qe.sort(),t||nu(),tt.forEach(function(i){gn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),je.slice(0).forEach(function(i){return i.refresh()}),Wa=!1,je.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),bc=1,sf(!0),je.forEach(function(i){var s=gi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),sf(!1),bc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),tt.forEach(function(i){gn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Pd(Zc,1),Va.pause(),Nr++,dn=2,Oi(2),je.forEach(function(i){return gn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),dn=Qe.isRefreshing=!1,Xr("refresh")},Ac=0,Ca=1,mo,Oi=function(e){if(e===2||!dn&&!Wa){Qe.isUpdating=!0,mo&&mo.update(0);var t=je.length,n=tn(),i=n-Yl>=50,s=t&&je[0].scroll();if(Ca=Ac>s?-1:1,dn||(Ac=s),i&&(Qn&&!ol&&n-Qn>200&&(Qn=0,Xr("scrollEnd")),js=Yl,Yl=n),Ca<0){for(fn=t;fn-- >0;)je[fn]&&je[fn].update(0,i);Ca=1}else for(fn=0;fn<t;fn++)je[fn]&&je[fn].update(0,i);Qe.isUpdating=!1}bo=0},Rc=[bd,wd,Qc,Jc,$n+po,$n+uo,$n+fo,$n+ho,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Pa=Rc.concat([Ur,Ir,"boxSizing","max"+Ds,"max"+eu,"position",$n,It,It+fo,It+uo,It+po,It+ho]),mS=function(e,t,n){Ts(n);var i=e._gsap;if(i.spacerIsNative)Ts(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Zl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Rc.length,a=t.style,o=e.style,l;s--;)l=Rc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Qc]=o[Jc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ur]=Xa(e,_n)+zt,a[Ir]=Xa(e,Bt)+zt,a[It]=o[$n]=o[wd]=o[bd]="0",Ts(i),o[Ur]=o["max"+Ds]=n[Ur],o[Ir]=o["max"+eu]=n[Ir],o[It]=n[It],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},_S=/([A-Z])/g,Ts=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||ge.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(_S,"-$1").toLowerCase())}},Sa=function(e){for(var t=Pa.length,n=e.style,i=[],s=0;s<t;s++)i.push(Pa[s],n[Pa[s]]);return i.t=e,i},gS=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},La={left:0,top:0},of=function(e,t,n,i,s,a,o,l,c,u,h,f,d,g){gn(e)&&(e=e(l)),On(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Aa("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),eo(e))d&&(e=ge.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Ra(o,n,i,!0);else{gn(t)&&(t=t(l));var v=(e||"0").split(" "),S,E,A,w;M=Sn(t,l)||yt,S=Ui(M)||{},(!S||!S.left&&!S.top)&&Kn(M).display==="none"&&(w=M.style.display,M.style.display="block",S=Ui(M),w?M.style.display=w:M.style.removeProperty("display")),E=Aa(v[0],S[i.d]),A=Aa(v[1]||"0",n),e=S[i.p]-c[i.p]-u+E+s-A,o&&Ra(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var D=e+n,x=a._isStart;m="scroll"+i.d2,Ra(a,D,i,x&&D>20||!x&&(h?Math.max(yt[m],ai[m]):a.parentNode[m])<=D+1),h&&(c=Ui(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+zt))}return d&&M&&(m=Ui(M),d.seek(f),p=Ui(M),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},vS=/(webkit|moz|length|cssText|inset)/i,af=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===yt){e._stOrig=s.cssText,o=Kn(e);for(a in o)!+a&&!vS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;ge.core.getCache(e).uncache=1,t.appendChild(e)}},Dd=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=a,a}},Ma=function(e,t,n){var i={};i[t.p]="+="+n,ge.set(e,i)},lf=function(e,t){var n=ar(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,g={};c=c||n();var _=Dd(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){tt.cache++,a.tween&&Oi()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=ge.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Xt(e,"wheel",n.wheelHandler),Qe.isTouch&&Xt(e,"touchmove",n.wheelHandler),s},Qe=function(){function r(t,n){ps||r.register(ge)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Tc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Js){this.update=this.refresh=this.kill=di;return}n=ef(On(n)||eo(n)||n.nodeType?{trigger:n}:n,va);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,v=s.once,S=s.snap,E=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,D=s.fastScrollEnd,x=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?_n:Bt,F=!h&&h!==0,N=Sn(n.scroller||st),Z=ge.core.getCache(N),P=Vr(N),z=("pinType"in n?n.pinType:ir(N,"pinType")||P&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=F&&n.toggleActions.split(" "),j="markers"in n?n.markers:va.markers,Y=P?0:parseFloat(Kn(N)["border"+b.p2+Ds])||0,R=this,U=n.onRefreshInit&&function(){return n.onRefreshInit(R)},$=lS(N,P,b),ue=cS(N,P),oe=0,he=0,ye=0,Le=ar(N,b),Ee,Ce,at,De,k,Ge,pe,be,we,G,ze,ke,nt,Ke,xt,C,y,B,ie,J,ee,me,re,de,_e,it,ne,rt,Be,Ue,Pe,Q,Xe,L,ce,te,K,ae,Ae;if(R._startClamp=R._endClamp=!1,R._dir=b,m*=45,R.scroller=N,R.scroll=w?w.time.bind(w):Le,De=Le(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(gd=1,n.refreshPriority===-9999&&(mo=R)),Z.tweenScroll=Z.tweenScroll||{top:lf(N,Bt),left:lf(N,_n)},R.tweenTo=Ee=Z.tweenScroll[b.p],R.scrubDuration=function(se){Xe=eo(se)&&se,Xe?Q?Q.duration(se):Q=ge.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Xe,paused:!0,onComplete:function(){return p&&p(R)}}):(Q&&Q.progress(1).kill(),Q=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),Ue=0,l||(l=i.vars.id)),S&&((!yr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in yt.style&&ge.set(P?[yt,ai]:N,{scrollBehavior:"auto"}),tt.forEach(function(se){return gn(se)&&se.target===(P?wt.scrollingElement||ai:N)&&(se.smooth=!1)}),at=gn(S.snapTo)?S.snapTo:S.snapTo==="labels"?hS(i):S.snapTo==="labelsDirectional"?fS(i):S.directional!==!1?function(se,Ne){return tu(S.snapTo)(se,tn()-he<500?0:Ne.direction)}:ge.utils.snap(S.snapTo),L=S.duration||{min:.1,max:2},L=yr(L)?co(L.min,L.max):co(L,L),ce=ge.delayedCall(S.delay||Xe/2||.1,function(){var se=Le(),Ne=tn()-he<500,Ie=Ee.tween;if((Ne||Math.abs(R.getVelocity())<10)&&!Ie&&!ol&&oe!==se){var Ve=(se-Ge)/Ke,bt=i&&!F?i.totalProgress():Ve,Ze=Ne?0:(bt-Pe)/(tn()-js)*1e3||0,_t=ge.utils.clamp(-Ve,1-Ve,hs(Ze/2)*Ze/.185),Ot=Ve+(S.inertia===!1?0:_t),St,gt,lt=S,Pn=lt.onStart,T=lt.onInterrupt,I=lt.onComplete;if(St=at(Ot,R),eo(St)||(St=Ot),gt=Math.round(Ge+St*Ke),se<=pe&&se>=Ge&&gt!==se){if(Ie&&!Ie._initted&&Ie.data<=hs(gt-se))return;S.inertia===!1&&(_t=St-Ve),Ee(gt,{duration:L(hs(Math.max(hs(Ot-bt),hs(St-bt))*.185/Ze/.05||0)),ease:S.ease||"power3",data:hs(gt-se),onInterrupt:function(){return ce.restart(!0)&&T&&T(R)},onComplete:function(){R.update(),oe=Le(),i&&(Q?Q.resetTo("totalProgress",St,i._tTime/i._tDur):i.progress(St)),Ue=Pe=i&&!F?i.totalProgress():R.progress,M&&M(R),I&&I(R)}},se,_t*Ke,gt-se-_t*Ke),Pn&&Pn(R,Ee.tween)}}else R.isActive&&oe!==se&&ce.restart(!0)}).pause()),l&&(wc[l]=R),f=R.trigger=Sn(f||d!==!0&&d),Ae=f&&f._gsap&&f._gsap.stRevert,Ae&&(Ae=Ae(R)),d=d===!0?f:Sn(d),On(o)&&(o={targets:f,className:o}),d&&(g===!1||g===$n||(g=!g&&d.parentNode&&d.parentNode.style&&Kn(d.parentNode).display==="flex"?!1:It),R.pin=d,Ce=ge.core.getCache(d),Ce.spacer?xt=Ce.pinState:(A&&(A=Sn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ce.spacerIsNative=!!A,A&&(Ce.spacerState=Sa(A))),Ce.spacer=B=A||wt.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Ce.pinState=xt=Sa(d)),n.force3D!==!1&&ge.set(d,{force3D:!0}),R.spacer=B=Ce.spacer,Be=Kn(d),de=Be[g+b.os2],J=ge.getProperty(d),ee=ge.quickSetter(d,b.a,zt),Zl(d,B,Be),y=Sa(d)),j){ke=yr(j)?ef(j,tf):tf,G=xa("scroller-start",l,N,b,ke,0),ze=xa("scroller-end",l,N,b,ke,0,G),ie=G["offset"+b.op.d2];var et=Sn(ir(N,"content")||N);be=this.markerStart=xa("start",l,et,b,ke,ie,0,w),we=this.markerEnd=xa("end",l,et,b,ke,ie,0,w),w&&(ae=ge.quickSetter([be,we],b.a,zt)),!z&&!(xi.length&&ir(N,"fixedMarkers")===!0)&&(uS(P?yt:N),ge.set([G,ze],{force3D:!0}),it=ge.quickSetter(G,b.a,zt),rt=ge.quickSetter(ze,b.a,zt))}if(w){var ve=w.vars.onUpdate,Se=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){R.update(0,0,1),ve&&ve.apply(w,Se||[])})}if(R.previous=function(){return je[je.indexOf(R)-1]},R.next=function(){return je[je.indexOf(R)+1]},R.revert=function(se,Ne){if(!Ne)return R.kill(!0);var Ie=se!==!1||!R.enabled,Ve=en;Ie!==R.isReverted&&(Ie&&(te=Math.max(Le(),R.scroll.rec||0),ye=R.progress,K=i&&i.progress()),be&&[be,we,G,ze].forEach(function(bt){return bt.style.display=Ie?"none":"block"}),Ie&&(en=R,R.update(Ie)),d&&(!E||!R.isActive)&&(Ie?mS(d,B,xt):Zl(d,B,Kn(d),_e)),Ie||R.update(Ie),en=Ve,R.isReverted=Ie)},R.refresh=function(se,Ne,Ie,Ve){if(!((en||!R.enabled)&&!Ne)){if(d&&se&&Qn){Xt(r,"scrollEnd",Rd);return}!dn&&U&&U(R),en=R,Ee.tween&&!Ie&&(Ee.tween.kill(),Ee.tween=0),Q&&Q.pause(),_&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var bt=$(),Ze=ue(),_t=w?w.duration():gi(N,b),Ot=Ke<=.01,St=0,gt=Ve||0,lt=yr(Ie)?Ie.end:n.end,Pn=n.endTrigger||f,T=yr(Ie)?Ie.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),I=R.pinnedContainer=n.pinnedContainer&&Sn(n.pinnedContainer,R),V=f&&Math.max(0,je.indexOf(R))||0,H=V,W,le,xe,Oe,Me,Te,Fe,We,Et,Ft,ct,on,dt;for(j&&yr(Ie)&&(on=ge.getProperty(G,b.p),dt=ge.getProperty(ze,b.p));H--;)Te=je[H],Te.end||Te.refresh(0,1)||(en=R),Fe=Te.pin,Fe&&(Fe===f||Fe===d||Fe===I)&&!Te.isReverted&&(Ft||(Ft=[]),Ft.unshift(Te),Te.revert(!0,!0)),Te!==je[H]&&(V--,H--);for(gn(T)&&(T=T(R)),T=Zh(T,"start",R),Ge=of(T,f,bt,b,Le(),be,G,R,Ze,Y,z,_t,w,R._startClamp&&"_startClamp")||(d?-.001:0),gn(lt)&&(lt=lt(R)),On(lt)&&!lt.indexOf("+=")&&(~lt.indexOf(" ")?lt=(On(T)?T.split(" ")[0]:"")+lt:(St=Aa(lt.substr(2),bt),lt=On(T)?T:(w?ge.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Ge):Ge)+St,Pn=f)),lt=Zh(lt,"end",R),pe=Math.max(Ge,of(lt||(Pn?"100% 0":_t),Pn,bt,b,Le()+St,we,ze,R,Ze,Y,z,_t,w,R._endClamp&&"_endClamp"))||-.001,St=0,H=V;H--;)Te=je[H],Fe=Te.pin,Fe&&Te.start-Te._pinPush<=Ge&&!w&&Te.end>0&&(W=Te.end-(R._startClamp?Math.max(0,Te.start):Te.start),(Fe===f&&Te.start-Te._pinPush<Ge||Fe===I)&&isNaN(T)&&(St+=W*(1-Te.progress)),Fe===d&&(gt+=W));if(Ge+=St,pe+=St,R._startClamp&&(R._startClamp+=St),R._endClamp&&!dn&&(R._endClamp=pe||-.001,pe=Math.min(pe,gi(N,b))),Ke=pe-Ge||(Ge-=.01)&&.001,Ot&&(ye=ge.utils.clamp(0,1,ge.utils.normalize(Ge,pe,te))),R._pinPush=gt,be&&St&&(W={},W[b.a]="+="+St,I&&(W[b.p]="-="+Le()),ge.set([be,we],W)),d&&!(bc&&R.end>=gi(N,b)))W=Kn(d),Oe=b===Bt,xe=Le(),me=parseFloat(J(b.a))+gt,!_t&&pe>1&&(ct=(P?wt.scrollingElement||ai:N).style,ct={style:ct,value:ct["overflow"+b.a.toUpperCase()]},P&&Kn(yt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+b.a.toUpperCase()]="scroll")),Zl(d,B,W),y=Sa(d),le=Ui(d,!0),We=z&&ar(N,Oe?_n:Bt)(),g?(_e=[g+b.os2,Ke+gt+zt],_e.t=B,H=g===It?Xa(d,b)+Ke+gt:0,H&&(_e.push(b.d,H+zt),B.style.flexBasis!=="auto"&&(B.style.flexBasis=H+zt)),Ts(_e),I&&je.forEach(function(qe){qe.pin===I&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),z&&Le(te)):(H=Xa(d,b),H&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=H+zt)),z&&(Me={top:le.top+(Oe?xe-Ge:We)+zt,left:le.left+(Oe?We:xe-Ge)+zt,boxSizing:"border-box",position:"fixed"},Me[Ur]=Me["max"+Ds]=Math.ceil(le.width)+zt,Me[Ir]=Me["max"+eu]=Math.ceil(le.height)+zt,Me[$n]=Me[$n+fo]=Me[$n+uo]=Me[$n+po]=Me[$n+ho]="0",Me[It]=W[It],Me[It+fo]=W[It+fo],Me[It+uo]=W[It+uo],Me[It+po]=W[It+po],Me[It+ho]=W[It+ho],C=gS(xt,Me,E),dn&&Le(0)),i?(Et=i._initted,Xl(1),i.render(i.duration(),!0,!0),re=J(b.a)-me+Ke+gt,ne=Math.abs(Ke-re)>1,z&&ne&&C.splice(C.length-2,2),i.render(0,!0,!0),Et||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Xl(0)):re=Ke,ct&&(ct.value?ct.style["overflow"+b.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+b.a));else if(f&&Le()&&!w)for(le=f.parentNode;le&&le!==yt;)le._pinOffset&&(Ge-=le._pinOffset,pe-=le._pinOffset),le=le.parentNode;Ft&&Ft.forEach(function(qe){return qe.revert(!1,!0)}),R.start=Ge,R.end=pe,De=k=dn?te:Le(),!w&&!dn&&(De<te&&Le(te),R.scroll.rec=0),R.revert(!1,!0),he=tn(),ce&&(oe=-1,ce.restart(!0)),en=0,i&&F&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(Ot||ye!==R.progress||w||_)&&(i&&!F&&i.totalProgress(w&&Ge<-.001&&!ye?ge.utils.normalize(Ge,pe,0):ye,!0),R.progress=Ot||(De-Ge)/Ke===ye?0:ye),d&&g&&(B._pinOffset=Math.round(R.progress*re)),Q&&Q.invalidate(),isNaN(on)||(on-=ge.getProperty(G,b.p),dt-=ge.getProperty(ze,b.p),Ma(G,b,on),Ma(be,b,on-(Ve||0)),Ma(ze,b,dt),Ma(we,b,dt-(Ve||0))),Ot&&!dn&&R.update(),u&&!dn&&!nt&&(nt=!0,u(R),nt=!1)}},R.getVelocity=function(){return(Le()-k)/(tn()-js)*1e3||0},R.endAnimation=function(){Ys(R.callbackAnimation),i&&(Q?Q.progress(1):i.paused()?F||Ys(i,R.direction<0,1):Ys(i,i.reversed()))},R.labelToScroll=function(se){return i&&i.labels&&(Ge||R.refresh()||Ge)+i.labels[se]/i.duration()*Ke||0},R.getTrailing=function(se){var Ne=je.indexOf(R),Ie=R.direction>0?je.slice(0,Ne).reverse():je.slice(Ne+1);return(On(se)?Ie.filter(function(Ve){return Ve.vars.preventOverlaps===se}):Ie).filter(function(Ve){return R.direction>0?Ve.end<=Ge:Ve.start>=pe})},R.update=function(se,Ne,Ie){if(!(w&&!Ie&&!se)){var Ve=dn===!0?te:R.scroll(),bt=se?0:(Ve-Ge)/Ke,Ze=bt<0?0:bt>1?1:bt||0,_t=R.progress,Ot,St,gt,lt,Pn,T,I,V;if(Ne&&(k=De,De=w?Le():Ve,S&&(Pe=Ue,Ue=i&&!F?i.totalProgress():Ze)),m&&d&&!en&&!pa&&Qn&&(!Ze&&Ge<Ve+(Ve-k)/(tn()-js)*m?Ze=1e-4:Ze===1&&pe>Ve+(Ve-k)/(tn()-js)*m&&(Ze=.9999)),Ze!==_t&&R.enabled){if(Ot=R.isActive=!!Ze&&Ze<1,St=!!_t&&_t<1,T=Ot!==St,Pn=T||!!Ze!=!!_t,R.direction=Ze>_t?1:-1,R.progress=Ze,Pn&&!en&&(gt=Ze&&!_t?0:Ze===1?1:_t===1?2:3,F&&(lt=!T&&O[gt+1]!=="none"&&O[gt+1]||O[gt],V=i&&(lt==="complete"||lt==="reset"||lt in i))),x&&(T||V)&&(V||h||!i)&&(gn(x)?x(R):R.getTrailing(x).forEach(function(xe){return xe.endAnimation()})),F||(Q&&!en&&!pa?(Q._dp._time-Q._start!==Q._time&&Q.render(Q._dp._time-Q._start),Q.resetTo?Q.resetTo("totalProgress",Ze,i._tTime/i._tDur):(Q.vars.totalProgress=Ze,Q.invalidate().restart())):i&&i.totalProgress(Ze,!!(en&&(he||se)))),d){if(se&&g&&(B.style[g+b.os2]=de),!z)ee(Qs(me+re*Ze));else if(Pn){if(I=!se&&Ze>_t&&pe+1>Ve&&Ve+1>=gi(N,b),E)if(!se&&(Ot||I)){var H=Ui(d,!0),W=Ve-Ge;af(d,yt,H.top+(b===Bt?W:0)+zt,H.left+(b===Bt?0:W)+zt)}else af(d,B);Ts(Ot||I?C:y),ne&&Ze<1&&Ot||ee(me+(Ze===1&&!I?re:0))}}S&&!Ee.tween&&!en&&!pa&&ce.restart(!0),o&&(T||v&&Ze&&(Ze<1||!ql))&&To(o.targets).forEach(function(xe){return xe.classList[Ot||v?"add":"remove"](o.className)}),a&&!F&&!se&&a(R),Pn&&!en?(F&&(V&&(lt==="complete"?i.pause().totalProgress(1):lt==="reset"?i.restart(!0).pause():lt==="restart"?i.restart(!0):i[lt]()),a&&a(R)),(T||!ql)&&(c&&T&&$l(R,c),q[gt]&&$l(R,q[gt]),v&&(Ze===1?R.kill(!1,1):q[gt]=0),T||(gt=Ze===1?1:3,q[gt]&&$l(R,q[gt]))),D&&!Ot&&Math.abs(R.getVelocity())>(eo(D)?D:2500)&&(Ys(R.callbackAnimation),Q?Q.progress(1):Ys(i,lt==="reverse"?1:!Ze,1))):F&&a&&!en&&a(R)}if(rt){var le=w?Ve/w.duration()*(w._caScrollDist||0):Ve;it(le+(G._isFlipped?1:0)),rt(le)}ae&&ae(-Ve/w.duration()*(w._caScrollDist||0))}},R.enable=function(se,Ne){R.enabled||(R.enabled=!0,Xt(N,"resize",to),P||Xt(N,"scroll",fs),U&&Xt(r,"refreshInit",U),se!==!1&&(R.progress=ye=0,De=k=oe=Le()),Ne!==!1&&R.refresh())},R.getTween=function(se){return se&&Ee?Ee.tween:Q},R.setPositions=function(se,Ne,Ie,Ve){if(w){var bt=w.scrollTrigger,Ze=w.duration(),_t=bt.end-bt.start;se=bt.start+_t*se/Ze,Ne=bt.start+_t*Ne/Ze}R.refresh(!1,!1,{start:jh(se,Ie&&!!R._startClamp),end:jh(Ne,Ie&&!!R._endClamp)},Ve),R.update()},R.adjustPinSpacing=function(se){if(_e&&se){var Ne=_e.indexOf(b.d)+1;_e[Ne]=parseFloat(_e[Ne])+se+zt,_e[1]=parseFloat(_e[1])+se+zt,Ts(_e)}},R.disable=function(se,Ne){if(R.enabled&&(se!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Ne||Q&&Q.pause(),te=0,Ce&&(Ce.uncache=1),U&&Wt(r,"refreshInit",U),ce&&(ce.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!P)){for(var Ie=je.length;Ie--;)if(je[Ie].scroller===N&&je[Ie]!==R)return;Wt(N,"resize",to),P||Wt(N,"scroll",fs)}},R.kill=function(se,Ne){R.disable(se,Ne),Q&&!Ne&&Q.kill(),l&&delete wc[l];var Ie=je.indexOf(R);Ie>=0&&je.splice(Ie,1),Ie===fn&&Ca>0&&fn--,Ie=0,je.forEach(function(Ve){return Ve.scroller===R.scroller&&(Ie=1)}),Ie||dn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Ne||i.kill()),be&&[be,we,G,ze].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),mo===R&&(mo=0),d&&(Ce&&(Ce.uncache=1),Ie=0,je.forEach(function(Ve){return Ve.pin===d&&Ie++}),Ie||(Ce.spacer=0)),n.onKill&&n.onKill(R)},je.push(R),R.enable(!1,!1),Ae&&Ae(R),i&&i.add&&!Ke){var Re=R.update;R.update=function(){R.update=Re,Ge||pe||R.refresh()},ge.delayedCall(.01,R.update),Ke=.01,Ge=pe=0}else R.refresh();d&&pS()},r.register=function(n){return ps||(ge=n||yd(),Md()&&window.document&&r.enable(),ps=Js),ps},r.defaults=function(n){if(n)for(var i in n)va[i]=n[i];return va},r.disable=function(n,i){Js=0,je.forEach(function(a){return a[i?"kill":"disable"](n)}),Wt(st,"wheel",fs),Wt(wt,"scroll",fs),clearInterval(da),Wt(wt,"touchcancel",di),Wt(yt,"touchstart",di),_a(Wt,wt,"pointerdown,touchstart,mousedown",Jh),_a(Wt,wt,"pointerup,touchend,mouseup",Qh),Va.kill(),ma(Wt);for(var s=0;s<tt.length;s+=3)ga(Wt,tt[s],tt[s+1]),ga(Wt,tt[s],tt[s+2])},r.enable=function(){if(st=window,wt=document,ai=wt.documentElement,yt=wt.body,ge&&(To=ge.utils.toArray,co=ge.utils.clamp,Tc=ge.core.context||di,Xl=ge.core.suppressOverwrites||di,Zc=st.history.scrollRestoration||"auto",Ac=st.pageYOffset,ge.core.globals("ScrollTrigger",r),yt)){Js=1,Es=document.createElement("div"),Es.style.height="100vh",Es.style.position="absolute",Ld(),aS(),Lt.register(ge),r.isTouch=Lt.isTouch,Xi=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ec=Lt.isTouch===1,Xt(st,"wheel",fs),_d=[st,wt,ai,yt],ge.matchMedia?(r.matchMedia=function(l){var c=ge.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},ge.addEventListener("matchMediaInit",function(){return nu()}),ge.addEventListener("matchMediaRevert",function(){return Cd()}),ge.addEventListener("matchMedia",function(){wr(0,1),Xr("matchMedia")}),ge.matchMedia("(orientation: portrait)",function(){return Kl(),Kl})):console.warn("Requires GSAP 3.11.0 or later"),Kl(),Xt(wt,"scroll",fs);var n=yt.style,i=n.borderTopStyle,s=ge.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Ui(yt),Bt.m=Math.round(a.top+Bt.sc())||0,_n.m=Math.round(a.left+_n.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),da=setInterval(nf,250),ge.delayedCall(.5,function(){return pa=0}),Xt(wt,"touchcancel",di),Xt(yt,"touchstart",di),_a(Xt,wt,"pointerdown,touchstart,mousedown",Jh),_a(Xt,wt,"pointerup,touchend,mouseup",Qh),yc=ge.utils.checkPrefix("transform"),Pa.push(yc),ps=tn(),Va=ge.delayedCall(.2,wr).pause(),ms=[wt,"visibilitychange",function(){var l=st.innerWidth,c=st.innerHeight;wt.hidden?($h=l,Kh=c):($h!==l||Kh!==c)&&to()},wt,"DOMContentLoaded",wr,st,"load",wr,st,"resize",to],ma(Xt),je.forEach(function(l){return l.enable(0,1)}),o=0;o<tt.length;o+=3)ga(Wt,tt[o],tt[o+1]),ga(Wt,tt[o],tt[o+2])}},r.config=function(n){"limitCallbacks"in n&&(ql=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(da)||(da=i)&&setInterval(nf,i),"ignoreMobileResize"in n&&(Ec=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ma(Wt)||ma(Xt,n.autoRefreshEvents||"none"),vd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Sn(n),a=tt.indexOf(s),o=Vr(s);~a&&tt.splice(a,o?6:2),i&&(o?xi.unshift(st,i,yt,i,ai,i):xi.unshift(s,i))},r.clearMatchMedia=function(n){je.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(On(n)?Sn(n):n).getBoundingClientRect(),o=a[s?Ur:Ir]*i||0;return s?a.right-o>0&&a.left+o<st.innerWidth:a.bottom-o>0&&a.top+o<st.innerHeight},r.positionInViewport=function(n,i,s){On(n)&&(n=Sn(n));var a=n.getBoundingClientRect(),o=a[s?Ur:Ir],l=i==null?o/2:i in qa?qa[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/st.innerWidth:(a.top+l)/st.innerHeight},r.killAll=function(n){if(je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Wr.killAll||[];Wr={},i.forEach(function(s){return s()})}},r}();Qe.version="3.12.5";Qe.saveStyles=function(r){return r?To(r).forEach(function(e){if(e&&e.style){var t=Nn.indexOf(e);t>=0&&Nn.splice(t,5),Nn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ge.core.getCache(e),Tc())}}):Nn};Qe.revert=function(r,e){return nu(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?to():(ps||Qe.register())&&wr(!0)};Qe.update=function(r){return++tt.cache&&Oi(r===!0?2:0)};Qe.clearScrollMemory=Pd;Qe.maxScroll=function(r,e){return gi(r,e?_n:Bt)};Qe.getScrollFunc=function(r,e){return ar(Sn(r),e?_n:Bt)};Qe.getById=function(r){return wc[r]};Qe.getAll=function(){return je.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!Qn};Qe.snapDirectional=tu;Qe.addEventListener=function(r,e){var t=Wr[r]||(Wr[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=Wr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=ge.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&gn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return gn(s)&&(s=s(),Xt(Qe,"refresh",function(){return s=e.batchMax()})),To(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Qe.create(c))}),t};var cf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},jl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Lt.isTouch?" pinch-zoom":""):"none",e===ai&&r(yt,t)},ya={auto:1,scroll:1},xS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||ge.core.getCache(s),o=tn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ya[(l=Kn(s)).overflowY]||ya[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Vr(s)&&(ya[(l=Kn(s)).overflowY]||ya[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Ud=function(e,t,n,i){return Lt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&xS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Xt(wt,Lt.eventTypes[0],hf,!1,!0)},onDisable:function(){return Wt(wt,Lt.eventTypes[0],hf,!0)}})},SS=/(input|label|select|textarea)/i,uf,hf=function(e){var t=SS.test(e.target.tagName);(t||uf)&&(e._gsapAllow=!0,uf=t)},MS=function(e){yr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Sn(e.target)||ai,u=ge.core.globals().ScrollSmoother,h=u&&u.get(),f=Xi&&(e.content&&Sn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=ar(c,Bt),g=ar(c,_n),_=1,m=(Lt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,p=0,M=gn(i)?function(){return i(o)}:function(){return i||2.8},v,S,E=Ud(c,e.type,!0,s),A=function(){return S=!1},w=di,D=di,x=function(){l=gi(c,Bt),D=co(Xi?1:0,l),n&&(w=co(0,gi(c,_n))),v=Nr},b=function(){f._gsap.y=Qs(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},F=function(){if(S){requestAnimationFrame(A);var j=Qs(o.deltaY/2),Y=D(d.v-j);if(f&&Y!==d.v+d.offset){d.offset=Y-d.v;var R=Qs((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",d.cacheID=tt.cache,Oi()}return!0}d.offset&&b(),S=!0},N,Z,P,z,q=function(){x(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&ge.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return Xi&&O.type==="touchmove"&&F()||_>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){S=!1;var O=_;_=Qs((st.visualViewport&&st.visualViewport.scale||1)/m),N.pause(),O!==_&&jl(c,_>1.01?!0:n?!1:"x"),Z=g(),P=d(),x(),v=Nr},e.onRelease=e.onGestureStart=function(O,j){if(d.offset&&b(),!j)z.restart(!0);else{tt.cache++;var Y=M(),R,U;n&&(R=g(),U=R+Y*.05*-O.velocityX/.227,Y*=cf(g,R,U,gi(c,_n)),N.vars.scrollX=w(U)),R=d(),U=R+Y*.05*-O.velocityY/.227,Y*=cf(d,R,U,gi(c,Bt)),N.vars.scrollY=D(U),N.invalidate().duration(Y).play(.01),(Xi&&N.vars.scrollY>=l||R>=l-1)&&ge.to({},{onUpdate:q,duration:Y})}a&&a(O)},e.onWheel=function(){N._ts&&N.pause(),tn()-p>1e3&&(v=0,p=tn())},e.onChange=function(O,j,Y,R,U){if(Nr!==v&&x(),j&&n&&g(w(R[2]===j?Z+(O.startX-O.x):g()+j-R[1])),Y){d.offset&&b();var $=U[2]===Y,ue=$?P+O.startY-O.y:d()+Y-U[1],oe=D(ue);$&&ue!==oe&&(P+=oe-ue),d(oe)}(Y||j)&&Oi()},e.onEnable=function(){jl(c,n?!1:"x"),Qe.addEventListener("refresh",q),Xt(st,"resize",q),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),E.enable()},e.onDisable=function(){jl(c,!0),Wt(st,"resize",q),Qe.removeEventListener("refresh",q),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Lt(e),o.iOS=Xi,Xi&&!d()&&d(1),Xi&&ge.ticker.add(di),z=o._dc,N=ge.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Dd(d,d(),function(){return N.pause()})},onUpdate:Oi,onComplete:z.vars.onComplete}),o};Qe.sort=function(r){return je.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Lt(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return hn;if(r===!0&&hn)return hn.enable();if(r===!1){hn&&hn.kill(),hn=r;return}var e=r instanceof Lt?r:MS(r);return hn&&hn.target===e.target&&hn.kill(),Vr(e.target)&&(hn=e),e};Qe.core={_getVelocityProp:Mc,_inputObserver:Ud,_scrollers:tt,_proxies:xi,bridge:{ss:function(){Qn||Xr("scrollStart"),Qn=tn()},ref:function(){return en}}};yd()&&ge.registerPlugin(Qe);function Id(r,e,t){return Math.max(r,Math.min(e,t))}class yS{advance(e){var o;if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(n=this.value,i=this.to,s=60*this.lerp,a=e,function(l,c,u){return(1-u)*l+u*c}(n,i,1-Math.exp(-s*a))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const l=Id(0,this.currentTime/this.duration,1);t=l>=1;const c=t?1:this.easing(l);this.value=this.from+(this.to-this.from)*c}var n,i,s,a;(o=this.onUpdate)==null||o.call(this,this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:i=1,easing:s=l=>l,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=o}}class ES{constructor({wrapper:e,content:t,autoResize:n=!0,debounce:i=250}={}){yi(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});yi(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});yi(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=function(s,a){let o;return function(){let l=arguments,c=this;clearTimeout(o),o=setTimeout(function(){s.apply(c,l)},a)}}(this.resize,i),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class Nd{constructor(){this.events={}}emit(e,...t){let n=this.events[e]||[];for(let i=0,s=n.length;i<s;i++)n[i](...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(s=>t!==s)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(i=>t!==i)}destroy(){this.events={}}}const ff=100/6;class TS{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=1}){yi(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});yi(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,i=-(t-this.touchStart.x)*this.touchMultiplier,s=-(n-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:e})});yi(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});yi(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:i}=e;t*=i===1?ff:i===2?this.windowWidth:1,n*=i===1?ff:i===2?this.windowHeight:1,t*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});yi(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.touchStart={x:null,y:null},this.emitter=new Nd,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class bS{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:n=e,eventsTarget:i=n,smoothWheel:s=!0,syncTouch:a=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:l=35,duration:c,easing:u=v=>Math.min(1,1.001-Math.pow(2,-10*v)),lerp:h=!c&&.1,infinite:f=!1,orientation:d="vertical",gestureOrientation:g="vertical",touchMultiplier:_=1,wheelMultiplier:m=1,autoResize:p=!0,__experimental__naiveDimensions:M=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:v,deltaY:S,event:E})=>{if(E.ctrlKey)return;const A=E.type.includes("touch"),w=E.type.includes("wheel");if(this.options.syncTouch&&A&&E.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const D=v===0&&S===0,x=this.options.gestureOrientation==="vertical"&&S===0||this.options.gestureOrientation==="horizontal"&&v===0;if(D||x)return;let b=E.composedPath();if(b=b.slice(0,b.indexOf(this.rootElement)),b.find(P=>{var z,q,O,j,Y;return((z=P.hasAttribute)===null||z===void 0?void 0:z.call(P,"data-lenis-prevent"))||A&&((q=P.hasAttribute)===null||q===void 0?void 0:q.call(P,"data-lenis-prevent-touch"))||w&&((O=P.hasAttribute)===null||O===void 0?void 0:O.call(P,"data-lenis-prevent-wheel"))||((j=P.classList)===null||j===void 0?void 0:j.contains("lenis"))&&!(!((Y=P.classList)===null||Y===void 0)&&Y.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void E.preventDefault();if(this.isSmooth=this.options.syncTouch&&A||this.options.smoothWheel&&w,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();E.preventDefault();let F=S;this.options.gestureOrientation==="both"?F=Math.abs(S)>Math.abs(v)?S:v:this.options.gestureOrientation==="horizontal"&&(F=v);const N=A&&this.options.syncTouch,Z=A&&E.type==="touchend"&&Math.abs(F)>5;Z&&(F=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+F,Object.assign({programmatic:!1},N?{lerp:Z?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const v=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-v),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:n,eventsTarget:i,smoothWheel:s,syncTouch:a,syncTouchLerp:o,touchInertiaMultiplier:l,duration:c,easing:u,lerp:h,infinite:f,gestureOrientation:g,orientation:d,touchMultiplier:_,wheelMultiplier:m,autoResize:p,__experimental__naiveDimensions:M},this.animate=new yS,this.emitter=new Nd,this.dimensions=new ES({wrapper:e,content:t,autoResize:p}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=a||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new TS(i,{touchMultiplier:_,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:a=this.options.easing,lerp:o=!s&&this.options.lerp,onComplete:l,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let h;if(typeof e=="string"?h=document.querySelector(e):e!=null&&e.nodeType&&(h=e),h){if(this.options.wrapper!==window){const d=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?d.left:d.top}const f=h.getBoundingClientRect();e=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=Id(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:a,lerp:o,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(h,f)=>{this.isScrolling=!0,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),u&&(this.targetScroll=h),f||this.emit(),f&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}function Ci(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Od(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Us={duration:.5,overwrite:!1,delay:0},iu,rn,Tt,jn=1e8,vt=1/jn,Cc=Math.PI*2,wS=Cc/4,AS=0,Fd=Math.sqrt,RS=Math.cos,CS=Math.sin,$t=function(e){return typeof e=="string"},Ct=function(e){return typeof e=="function"},zi=function(e){return typeof e=="number"},ru=function(e){return typeof e>"u"},Mi=function(e){return typeof e=="object"},bn=function(e){return e!==!1},su=function(){return typeof window<"u"},Ea=function(e){return Ct(e)||$t(e)},zd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,Pc=/(?:-?\.?\d|\.)+/gi,Bd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kd=/[+-]=-?[.\d]+/,Hd=/[^,'"\[\]\s]+/gi,PS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,pi,Lc,ou,Wn={},Ya={},Gd,Vd=function(e){return(Ya=qr(e,Wn))&&Cn},au=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},wo=function(e,t){return!t&&console.warn(e)},Wd=function(e,t){return e&&(Wn[e]=t)&&Ya&&(Ya[e]=t)||Wn},Ao=function(){return 0},LS={suppressEvents:!0,isStart:!0,kill:!1},Da={suppressEvents:!0,kill:!1},DS={suppressEvents:!0},lu={},rr=[],Dc={},Xd,Fn={},Ql={},df=30,Ua=[],cu="",uu=function(e){var t=e[0],n,i;if(Mi(t)||Ct(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ua.length;i--&&!Ua[i].targetTest(t););n=Ua[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new mp(e[i],n)))||e.splice(i,1);return e},Or=function(e){return e._gsap||uu(Jn(e))[0]._gsap},qd=function(e,t,n){return(n=e[t])&&Ct(n)?e[t]():ru(n)&&e.getAttribute&&e.getAttribute(t)||n},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Pt=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},bs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},US=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},$a=function(){var e=rr.length,t=rr.slice(0),n,i;for(Dc={},rr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Yd=function(e,t,n,i){rr.length&&!rn&&$a(),e.render(t,n,i||rn&&t<0&&(e._initted||e._startAt)),rr.length&&!rn&&$a()},$d=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hd).length<2?t:$t(e)?e.trim():e},Kd=function(e){return e},ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},IS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},qr=function(e,t){for(var n in t)e[n]=t[n];return e},pf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Mi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ka=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},_o=function(e){var t=e.parent||At,n=e.keyframes?IS(sn(e.keyframes)):ei;if(bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},NS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Zd=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},al=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},lr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},OS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Uc=function(e,t,n,i){return e._startAt&&(rn?e._startAt.revert(Da):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},FS=function r(e){return!e||e._ts&&r(e.parent)},mf=function(e){return e._repeat?Is(e._tTime,e=e.duration()+e._rDelay)*e:0},Is=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Za=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ll=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},cl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ll(e),n._dirty||Fr(n,e)),e},jd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Za(e.rawTime(),t),(!t._dur||ko(0,t.totalDuration(),n)-t._tTime>vt)&&t.render(n,!0)),Fr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-vt}},_i=function(e,t,n,i){return t.parent&&lr(t),t._start=qt((zi(n)?n:n||e!==At?qn(e,n,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Zd(e,t,"_first","_last",e._sort?"_start":0),Ic(t)||(e._recent=t),i||jd(e,t),e._ts<0&&cl(e,e._tTime),e},Jd=function(e,t){return(Wn.ScrollTrigger||au("scrollTrigger",t))&&Wn.ScrollTrigger.create(t,e)},Qd=function(e,t,n,i,s){if(fu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xd!==kn.frame)return rr.push(e),e._lazy=[s,i],1},zS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ic=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},BS=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&zS(e)&&!(!e._initted&&Ic(e))||(e._ts<0||e._dp._ts<0)&&!Ic(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=ko(0,e._tDur,t),u=Is(l,o),e._yoyo&&u&1&&(a=1-a),u!==Is(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||rn||i||e._zTime===vt||!t&&e._zTime){if(!e._initted&&Qd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?vt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Uc(e,t,n,!0),e._onUpdate&&!n&&Hn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&lr(e,1),!n&&!rn&&(Hn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ns=function(e,t,n,i){var s=e._repeat,a=qt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:qt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&cl(e,e._tTime=e._tDur*o),e.parent&&ll(e),n||Fr(e.parent,e),e},_f=function(e){return e instanceof vn?Fr(e):Ns(e,e._dur)},HS={_start:0,endTime:Ao,totalDuration:Ao},qn=function r(e,t,n){var i=e.labels,s=e._recent||HS,a=e.duration()>=jn?s.endTime(!1):e._dur,o,l,c;return $t(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(sn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},go=function(e,t,n){var i=zi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;a.immediateRender=bn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Nt(t[0],a,t[s+1])},ur=function(e,t){return e||e===0?t(e):t},ko=function(e,t,n){return n<e?e:n>t?t:n},nn=function(e,t){return!$t(e)||!(t=PS.exec(e))?"":t[1]},GS=function(e,t,n){return ur(n,function(i){return ko(e,t,i)})},Nc=[].slice,ep=function(e,t){return e&&Mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mi(e[0]))&&!e.nodeType&&e!==pi},VS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return $t(i)&&!t||ep(i,1)?(s=n).push.apply(s,Jn(i)):n.push(i)})||n},Jn=function(e,t,n){return Tt&&!t&&Tt.selector?Tt.selector(e):$t(e)&&!n&&(Lc||!Os())?Nc.call((t||ou).querySelectorAll(e),0):sn(e)?VS(e,n):ep(e)?Nc.call(e,0):e?[e]:[]},Oc=function(e){return e=Jn(e)[0]||wo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Jn(t,n.querySelectorAll?n:n===e?wo("Invalid scope")||ou.createElement("div"):e)}},tp=function(e){return e.sort(function(){return .5-Math.random()})},np=function(e){if(Ct(e))return e;var t=Mi(e)?e:{each:e},n=zr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return $t(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=a[_],p,M,v,S,E,A,w,D,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,jn])[1],!x){for(w=-jn;w<(w=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],p=l?Math.min(x,_)*u-.5:i%x,M=x===jn?0:l?_*h/x-.5:i/x|0,w=0,D=jn,A=0;A<_;A++)v=A%x-p,S=M-(A/x|0),m[A]=E=c?Math.abs(c==="y"?S:v):Fd(v*v+S*S),E>w&&(w=E),E<D&&(D=E);i==="random"&&tp(m),m.max=w-D,m.min=D,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=nn(t.amount||t.each)||0,n=n&&_<0?fp(n):n}return _=(m[f]-m.min)/m.max||0,qt(m.b+(n?n(_):_)*m.v)+m.u}},Fc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=qt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(zi(n)?0:nn(n))}},ip=function(e,t){var n=sn(e),i,s;return!n&&Mi(e)&&(i=n=e.radius||jn,e.values?(e=Jn(e.values),(s=!zi(e[0]))&&(i*=i)):e=Fc(e.increment)),ur(t,n?Ct(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=jn,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||zi(a)?u:u+nn(a)}:Fc(e))},rp=function(e,t,n,i){return ur(sn(e)?!t:n===!0?!!(n=0):!i,function(){return sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},WS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},XS=function(e,t){return function(n){return e(parseFloat(n))+(t||nn(n))}},qS=function(e,t,n){return op(e,t,0,1,n)},sp=function(e,t,n){return ur(n,function(i){return e[~~t(i)]})},YS=function r(e,t,n){var i=t-e;return sn(e)?sp(e,r(0,e.length),t):ur(n,function(s){return(i+(s-e)%i)%i+e})},$S=function r(e,t,n){var i=t-e,s=i*2;return sn(e)?sp(e,r(0,e.length-1),t):ur(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ro=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Hd:Pc),n+=e.substr(t,i-t)+rp(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},op=function(e,t,n,i,s){var a=t-e,o=i-n;return ur(s,function(l){return n+((l-e)/a*o||0)})},KS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=$t(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(sn(e)&&!sn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=qr(sn(e)?[]:{},e));if(!u){for(l in t)hu.call(o,e,l,"get",t[l]);s=function(g){return mu(g,o)||(a?e.p:e)}}}return ur(n,s)},gf=function(e,t,n){var i=e.labels,s=jn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Hn=function(e,t,n){var i=e.vars,s=i[t],a=Tt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&rr.length&&$a(),o&&(Tt=o),u=l?s.apply(c,l):s.call(c),Tt=a,u},no=function(e){return lr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!rn),e.progress()<1&&Hn(e,"onInterrupt"),e},xs,ap=[],lp=function(e){if(e)if(e=!e.name&&e.default||e,su()||e.headless){var t=e.name,n=Ct(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ao,render:mu,add:hu,kill:hM,modifier:uM,rawVars:0},a={targetTest:0,get:0,getSetter:pu,aliases:{},register:0};if(Os(),e!==i){if(Fn[t])return;ei(i,ei(Ka(e,s),a)),qr(i.prototype,qr(s,Ka(e,a))),Fn[i.prop=t]=i,e.targetTest&&(Ua.push(i),lu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wd(t,i),e.register&&e.register(Cn,i,An)}else ap.push(e)},pt=255,io={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},ec=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},cp=function(e,t,n){var i=e?zi(e)?[e>>16,e>>8&pt,e&pt]:0:io.black,s,a,o,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),io[e])i=io[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&pt,i&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Pc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=ec(l+1/3,s,a),i[1]=ec(l,s,a),i[2]=ec(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Bd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Pc)||io.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/pt,a=i[1]/pt,o=i[2]/pt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},up=function(e){var t=[],n=[],i=-1;return e.split(sr).forEach(function(s){var a=s.match(vs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},vf=function(e,t,n){var i="",s=(e+i).match(sr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=cp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=up(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(sr,"1").split(vs),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(sr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},sr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in io)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),ZS=/hsl[a]?\(/,hp=function(e){var t=e.join(" "),n;if(sr.lastIndex=0,sr.test(t))return n=ZS.test(t),e[1]=vf(e[1],n),e[0]=vf(e[0],n,up(e[1])),!0},Co,kn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,M=m===!0,v,S,E,A;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,v=E-a,(v>0||M)&&(A=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,a+=v+(v>=s?4:s-v),S=1),M||(l=c(_)),S)for(d=0;d<o.length;d++)o[d](E,f,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Gd&&(!Lc&&su()&&(pi=Lc=window,ou=pi.document||{},Wn.gsap=Cn,(pi.gsapVersions||(pi.gsapVersions=[])).push(Cn.version),Vd(Ya||pi.GreenSockGlobals||!pi.gsap&&pi||{}),ap.forEach(lp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Co=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Co=0,c=Ao},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,M){var v=p?function(S,E,A,w){m(S,E,A,w),h.remove(v)}:m;return h.remove(m),o[M?"unshift":"push"](v),Os(),v},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),Os=function(){return!Co&&kn.wake()},ot={},jS=/^[\d.\-M][\d.\-,\s]/,JS=/["']/g,QS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(JS,"").trim():+c,i=l.substr(o+1).trim();return t},eM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},tM=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[QS(t[1])]:eM(e).split(",").map($d)):ot._CE&&jS.test(e)?ot._CE("",e):n},fp=function(e){return function(t){return 1-e(1-t)}},dp=function r(e,t){for(var n=e._first,i;n;)n instanceof vn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},zr=function(e,t){return e&&(Ct(e)?e:ot[e]||tM(e))||t},$r=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return wn(e,function(o){ot[o]=Wn[o]=s,ot[a=o.toLowerCase()]=n;for(var l in s)ot[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[o+"."+l]=s[l]}),s},pp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},tc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Cc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*CS((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:pp(o);return s=Cc/s,l.config=function(c,u){return r(e,c,u)},l},nc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:pp(n);return i.config=function(s){return r(e,s)},i};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;$r(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;$r("Elastic",tc("in"),tc("out"),tc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};$r("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);$r("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});$r("Circ",function(r){return-(Fd(1-r*r)-1)});$r("Sine",function(r){return r===1?1:-RS(r*wS)+1});$r("Back",nc("in"),nc("out"),nc());ot.SteppedEase=ot.steps=Wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-vt;return function(o){return((i*ko(0,a,o)|0)+s)*n}}};Us.ease=ot["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return cu+=r+","+r+"Params,"});var mp=function(e,t){this.id=AS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qd,this.set=t?t.getSetter:pu},Po=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ns(this,+t.duration,1,1),this.data=t.data,Tt&&(this._ctx=Tt,Tt.data.push(this)),Co||kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ns(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Os(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(cl(this,n),!s._dp||s.parent||jd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&_i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===vt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Yd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+mf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+mf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Is(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Za(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-vt?0:this._rts,this.totalTime(ko(-Math.abs(this._delay),this._tDur,s),i!==!1),ll(this),OS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Os(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vt&&(this._tTime-=vt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&_i(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Za(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=DS);var i=rn;return rn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_f(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,_f(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(qn(this,n),bn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,bn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-vt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Ct(n)?n:Kd,o=function(){var c=i.then;i.then=null,Ct(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){no(this)},r}();ei(Po.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var vn=function(r){Od(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=bn(n.sortChildren),At&&_i(n.parent||At,Ci(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jd(Ci(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return go(0,arguments,this),this},t.from=function(i,s,a){return go(1,arguments,this),this},t.fromTo=function(i,s,a,o){return go(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,_o(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Nt(i,s,qn(this,a),1),this},t.call=function(i,s,a){return _i(this,Nt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Nt(i,a,qn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,_o(a).immediateRender=bn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,_o(o).immediateRender=bn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:qt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,M,v,S,E,A,w;if(this!==At&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,S=this._start,v=this._ts,p=!v,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=qt(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),E=Is(this._tTime,m),!o&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),A&&_&1&&(f=c-f,w=1),_!==E&&!this._lock){var D=A&&E&1,x=D===(A&&_&1);if(_<E&&(D=!D),o=D?0:u%c?c:u,this._lock=1,this.render(o||(w?0:qt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=D?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;dp(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=kS(this,qt(o),qt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!_&&(Hn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-vt);break}}d=g}else{d=this._last;for(var b=i<0?i:f;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,a||rn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=b?-vt:vt);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=o?0:-vt)._zTime=f>=o?1:-1,this._ts))return this._start=S,ll(this),this.render(i,s,a);this._onUpdate&&!s&&Hn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&lr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Hn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(zi(s)||(s=qn(this,s,i)),!(i instanceof Po)){if(sn(i))return i.forEach(function(o){return a.add(o,s)}),this;if($t(i))return this.addLabel(i,s);if(Ct(i))i=Nt.delayedCall(0,i);else return this}return this!==i?_i(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-jn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Nt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return $t(i)?this.removeLabel(i):Ct(i)?this.killTweensOf(i):(al(this,i),i===this._recent&&(this._recent=this._last),Fr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=qn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Nt.delayedCall(0,s||Ao,a);return o.data="isPause",this._hasPause=1,_i(this,o,qn(this,i))},t.removePause=function(i){var s=this._first;for(i=qn(this,i);s;)s._start===i&&s.data==="isPause"&&lr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ji!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Jn(i),l=this._first,c=zi(s),u;l;)l instanceof Nt?US(l._targets,o)&&(c?(!ji||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=qn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Nt.to(a,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||vt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Ns(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ei({startAt:{time:qn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),gf(this,qn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),gf(this,qn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Fr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=jn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,_i(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ns(a,a===At&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(At._ts&&(Yd(At,Za(i,At)),Xd=kn.frame),kn.frame>=df){df+=Vn.autoSleep||120;var s=At._first;if((!s||!s._ts)&&Vn.autoSleep&&kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||kn.sleep()}}},e}(Po);ei(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var nM=function(e,t,n,i,s,a,o){var l=new An(this._pt,e,t,0,1,Mp,null,s),c=0,u=0,h,f,d,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ro(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),f=n.match(Jl)||[];h=Jl.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?bs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Jl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(kd.test(i)||p)&&(l.e=0),this._pt=l,l},hu=function(e,t,n,i,s,a,o,l,c,u){Ct(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:Ct(h)?c?e[t.indexOf("set")||!Ct(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ct(h)?c?aM:xp:du,g;if($t(i)&&(~i.indexOf("random(")&&(i=Ro(i)),i.charAt(1)==="="&&(g=bs(f,i)+(nn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||zc)return!isNaN(f*i)&&i!==""?(g=new An(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?cM:Sp,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&au(t,i),nM.call(this,e,t,f,i,d,l||Vn.stringFilter,c))},iM=function(e,t,n,i,s){if(Ct(e)&&(e=vo(e,s,t,n,i)),!Mi(e)||e.style&&e.nodeType||sn(e)||zd(e))return $t(e)?vo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=vo(e[o],s,t,n,i);return a},_p=function(e,t,n,i,s,a){var o,l,c,u;if(Fn[e]&&(o=new Fn[e]).init(s,o.rawVars?t[e]:iM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new An(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==xs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ji,zc,fu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!iu,S=e.timeline,E,A,w,D,x,b,F,N,Z,P,z,q,O;if(S&&(!f||!s)&&(s="none"),e._ease=zr(s,Us.ease),e._yEase=h?fp(zr(h===!0?s:h,Us.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(N=m[0]?Or(m[0]).harness:0,q=N&&i[N.prop],E=Ka(i,lu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?Da:LS),_._lazy=0),a){if(lr(e._startAt=Nt.set(m,ei({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&bn(l),startAt:null,delay:0,onUpdate:c&&function(){return Hn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn||!o&&!d)&&e._startAt.revert(Da),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),w=ei({overwrite:!1,data:"isFromStart",lazy:o&&!_&&bn(l),immediateRender:o,stagger:0,parent:p},E),q&&(w[N.prop]=q),lr(e._startAt=Nt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn?e._startAt.revert(Da):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&bn(l)||l&&!g,A=0;A<m.length;A++){if(x=m[A],F=x._gsap||uu(m)[A]._gsap,e._ptLookup[A]=P={},Dc[F.id]&&rr.length&&$a(),z=M===m?A:M.indexOf(x),N&&(Z=new N).init(x,q||E,e,z,M)!==!1&&(e._pt=D=new An(e._pt,x,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(j){P[j]=D}),Z.priority&&(b=1)),!N||q)for(w in E)Fn[w]&&(Z=_p(w,E,e,z,x,M))?Z.priority&&(b=1):P[w]=D=hu.call(e,x,w,"get",E[w],z,M,0,i.stringFilter);e._op&&e._op[A]&&e.kill(x,e._op[A]),v&&e._pt&&(ji=e,At.killTweensOf(x,P,e.globalTime(t)),O=!e.parent,ji=0),e._pt&&l&&(Dc[F.id]=1)}b&&yp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,f&&t<=0&&S.render(jn,!0,!0)},rM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return zc=1,e.vars[t]="+=0",fu(e,o),zc=0,l?wo(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Pt(n)+nn(h.e)),h.b&&(h.b=u.s+nn(h.b))},sM=function(e,t){var n=e[0]?Or(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=qr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},oM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(sn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},vo=function(e,t,n,i,s){return Ct(e)?e.call(t,n,i,s):$t(e)&&~e.indexOf("random(")?Ro(e):e},gp=cu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vp={};wn(gp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vp[r]=1});var Nt=function(r){Od(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:_o(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||At,v=(sn(n)||zd(n)?zi(n[0]):"length"in i)?[n]:Jn(n),S,E,A,w,D,x,b,F;if(o._targets=v.length?uu(v):wo("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Ea(c)||Ea(u)){if(i=o.vars,S=o.timeline=new vn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:v}),S.kill(),S.parent=S._dp=Ci(o),S._start=0,f||Ea(c)||Ea(u)){if(w=v.length,b=f&&np(f),Mi(f))for(D in f)~gp.indexOf(D)&&(F||(F={}),F[D]=f[D]);for(E=0;E<w;E++)A=Ka(i,vp),A.stagger=0,p&&(A.yoyoEase=p),F&&qr(A,F),x=v[E],A.duration=+vo(c,Ci(o),E,x,v),A.delay=(+vo(u,Ci(o),E,x,v)||0)-o._delay,!f&&w===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),S.to(x,A,b?b(E,x,v):0),S._ease=ot.none;S.duration()?c=u=0:o.timeline=0}else if(g){_o(ei(S.vars.defaults,{ease:"none"})),S._ease=zr(g.ease||i.ease||"none");var N=0,Z,P,z;if(sn(g))g.forEach(function(q){return S.to(v,q,">")}),S.duration();else{A={};for(D in g)D==="ease"||D==="easeEach"||oM(D,g[D],A,g.easeEach);for(D in A)for(Z=A[D].sort(function(q,O){return q.t-O.t}),N=0,E=0;E<Z.length;E++)P=Z[E],z={ease:P.e,duration:(P.t-(E?Z[E-1].t:0))/100*c},z[D]=P.v,S.to(v,z,N),N+=z.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return d===!0&&!iu&&(ji=Ci(o),At.killTweensOf(v),ji=0),_i(M,Ci(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===qt(M._time)&&bn(h)&&FS(Ci(o))&&M.data!=="nested")&&(o._tTime=-vt,o.render(Math.max(0,-u)||0)),m&&Jd(Ci(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-vt&&!u?l:i<vt?0:i,f,d,g,_,m,p,M,v,S;if(!c)BS(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=qt(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===qt(h/_)&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,f=c-f),m=Is(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(v&&this._yEase&&dp(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(qt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Qd(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!o&&!s&&!g&&(Hn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Uc(this,i,s,a),Hn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Hn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Uc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&lr(this,1),!s&&!(u&&!o)&&(h||o||p)&&(Hn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Co||kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||fu(this,c),u=this._ease(c/this._dur),rM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(cl(this,0),this.parent||Zd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?no(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ji&&ji.vars.overwrite!==!0)._first||no(this),this.parent&&a!==this.timeline.totalDuration()&&Ns(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Jn(i):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&NS(o,l))return s==="all"&&(this._pt=0),no(this);for(h=this._op=this._op||[],s!=="all"&&($t(s)&&(_={},wn(s,function(M){return _[M]=1}),s=_),s=sM(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&al(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&no(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return go(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return go(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return At.killTweensOf(i,s,a)},e}(Po);ei(Nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(r){Nt[r]=function(){var e=new vn,t=Nc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var du=function(e,t,n){return e[t]=n},xp=function(e,t,n){return e[t](n)},aM=function(e,t,n,i){return e[t](i.fp,n)},lM=function(e,t,n){return e.setAttribute(t,n)},pu=function(e,t){return Ct(e[t])?xp:ru(e[t])&&e.setAttribute?lM:du},Sp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Mp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},mu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},uM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},hM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?al(this,t,"_pt"):t.dep||(n=1),t=i;return!n},fM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},yp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},An=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Sp,this.d=l||this,this.set=c||du,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=fM,this.m=n,this.mt=s,this.tween=i},r}();wn(cu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return lu[r]=1});Wn.TweenMax=Wn.TweenLite=Nt;Wn.TimelineLite=Wn.TimelineMax=vn;At=new vn({sortChildren:!1,defaults:Us,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=hp;var Br=[],Ia={},dM=[],xf=0,pM=0,ic=function(e){return(Ia[e]||dM).map(function(t){return t()})},Bc=function(){var e=Date.now(),t=[];e-xf>2&&(ic("matchMediaInit"),Br.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=pi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ic("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),xf=e,ic("matchMedia"))},Ep=function(){function r(t,n){this.selector=n&&Oc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=pM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ct(n)&&(s=i,i=n,n=Ct);var a=this,o=function(){var c=Tt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Oc(s)),Tt=a,h=i.apply(a,arguments),Ct(h)&&a._r.push(h),Tt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ct?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Tt;Tt=null,n(this),Tt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Nt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Nt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Br.length;a--;)Br[a].id===this.id&&Br.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),mM=function(){function r(t){this.contexts=[],this.scope=t,Tt&&Tt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Mi(n)||(n={matches:n});var a=new Ep(0,s||this.scope),o=a.conditions={},l,c,u;Tt&&!a.selector&&(a.selector=Tt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=pi.matchMedia(n[c]),l&&(Br.indexOf(a)<0&&Br.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Bc):l.addEventListener("change",Bc)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ja={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return lp(i)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,n,i){$t(e)&&(e=Jn(e)[0]);var s=Or(e||{}).get,a=n?Kd:$d;return n==="native"&&(n=""),e&&(t?a((Fn[t]&&Fn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Fn[o]&&Fn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Jn(e),e.length>1){var i=e.map(function(u){return Cn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=Fn[t],o=Or(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;xs._pt=0,h.init(e,n?u+n:u,xs,0,[e]),h.render(1,h),xs._pt&&mu(1,xs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Cn.to(e,qr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=zr(e.ease,Us.ease)),pf(Us,e||{})},config:function(e){return pf(Vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Fn[o]&&!Wn[o]&&wo(t+" effect requires "+o+" plugin.")}),Ql[t]=function(o,l,c){return n(Jn(o),ei(l||{},s),c)},a&&(vn.prototype[t]=function(o,l,c){return this.add(Ql[t](o,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=zr(t)},parseEase:function(e,t){return arguments.length?zr(e,t):ot},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vn(e),i,s;for(n.smoothChildTiming=bn(e.smoothChildTiming),At.remove(n),n._dp=0,n._time=n._tTime=At._time,i=At._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Nt&&i.vars.onComplete===i._targets[0]))&&_i(n,i,i._start-i._delay),i=s;return _i(At,n,0),n},context:function(e,t){return e?new Ep(e,t):Tt},matchMedia:function(e){return new mM(e)},matchMediaRefresh:function(){return Br.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Bc()},addEventListener:function(e,t){var n=Ia[e]||(Ia[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ia[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:YS,wrapYoyo:$S,distribute:np,random:rp,snap:ip,normalize:qS,getUnit:nn,clamp:GS,splitColor:cp,toArray:Jn,selector:Oc,mapRange:op,pipe:WS,unitize:XS,interpolate:KS,shuffle:tp},install:Vd,effects:Ql,ticker:kn,updateRoot:vn.updateRoot,plugins:Fn,globalTimeline:At,core:{PropTween:An,globals:Wd,Tween:Nt,Timeline:vn,Animation:Po,getCache:Or,_removeLinkedListItem:al,reverting:function(){return rn},context:function(e){return e&&Tt&&(Tt.data.push(e),e._ctx=Tt),Tt},suppressOverwrites:function(e){return iu=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ja[r]=Nt[r]});kn.add(vn.updateRoot);xs=ja.to({},{duration:0});var _M=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},gM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=_M(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},rc=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if($t(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}gM(o,s)}}}},Cn=ja.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},rc("roundProps",Fc),rc("modifiers"),rc("snap",ip))||ja;Nt.version=vn.version=Cn.version="3.12.5";Gd=1;su()&&Os();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sf,Ji,ws,_u,Ar,Mf,gu,vM=function(){return typeof window<"u"},Bi={},Er=180/Math.PI,As=Math.PI/180,ds=Math.atan2,yf=1e8,vu=/([A-Z])/g,xM=/(left|right|width|margin|padding|x)/i,SM=/[\s,\(]\S/,vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},EM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Tp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},bp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},TM=function(e,t,n){return e.style[t]=n},bM=function(e,t,n){return e.style.setProperty(t,n)},wM=function(e,t,n){return e._gsap[t]=n},AM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},RM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},CM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Rt="transform",Rn=Rt+"Origin",PM=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Bi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Li(i,o)}):this.tfm[e]=a.x?a[e]:Li(i,e),e===Rn&&(this.tfm.zOrigin=a.zOrigin);else return vi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Rt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rn,t,"")),e=Rt}(s||t)&&this.props.push(e,t,s[e])},wp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},LM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(vu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=gu(),(!s||!s.isStart)&&!n[Rt]&&(wp(n),i.zOrigin&&n[Rn]&&(n[Rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ap=function(e,t){var n={target:e,props:[],revert:LM,save:PM};return e._gsap||Cn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Rp,Hc=function(e,t){var n=Ji.createElementNS?Ji.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ji.createElement(e);return n&&n.style?n:Ji.createElement(e)},Si=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(vu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Fs(t)||t,1)||""},Ef="O,Moz,ms,Ms,Webkit".split(","),Fs=function(e,t,n){var i=t||Ar,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ef[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Ef[a]:"")+e},Gc=function(){vM()&&window.document&&(Sf=window,Ji=Sf.document,ws=Ji.documentElement,Ar=Hc("div")||{style:{}},Hc("div"),Rt=Fs(Rt),Rn=Rt+"Origin",Ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rp=!!Fs("perspective"),gu=Cn.core.reverting,_u=1)},sc=function r(e){var t=Hc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(ws.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ws.removeChild(t),this.style.cssText=s,a},Tf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Cp=function(e){var t;try{t=e.getBBox()}catch{t=sc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===sc||(t=sc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Tf(e,["x","cx","x1"])||0,y:+Tf(e,["y","cy","y1"])||0,width:0,height:0}:t},Pp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cp(e))},Yr=function(e,t){if(t){var n=e.style,i;t in Bi&&t!==Rn&&(t=Rt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(vu,"-$1").toLowerCase())):n.removeAttribute(t)}},Qi=function(e,t,n,i,s,a){var o=new An(e._pt,t,n,0,1,a?bp:Tp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},bf={deg:1,rad:1,turn:1},DM={grid:1,flex:1},cr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ar.style,l=xM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===a||!s||bf[i]||bf[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&Pp(e),(d||a==="%")&&(Bi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Pt(d?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ji||!_.appendChild)&&(_=Ji.body),m=_._gsap,m&&d&&m.width&&l&&m.time===kn.time&&!m.uncache)return Pt(s/m.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,g=e[u],M?e.style[t]=M:Yr(e,t)}else(d||a==="%")&&!DM[Si(_,"display")]&&(o.position=Si(e,"position")),_===e&&(o.position="static"),_.appendChild(Ar),g=Ar[u],_.removeChild(Ar),o.position="absolute";return l&&d&&(m=Or(_),m.time=kn.time,m.width=_[u]),Pt(f?g*s/h:g&&s?h/g*s:0)},Li=function(e,t,n,i){var s;return _u||Gc(),t in vi&&t!=="transform"&&(t=vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Bi[t]&&t!=="transform"?(s=Do(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Qa(Si(e,Rn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ja[t]&&Ja[t](e,t,n)||Si(e,t)||qd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?cr(e,t,s,n)+n:s},UM=function(e,t,n,i){if(!n||n==="none"){var s=Fs(t,e,1),a=s&&Si(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Si(e,"borderTopColor"))}var o=new An(this._pt,e.style,t,0,1,Mp),l=0,c=0,u,h,f,d,g,_,m,p,M,v,S,E;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Si(e,t)||i,_?e.style[t]=_:Yr(e,t)),u=[n,i],hp(u),n=u[0],i=u[1],f=n.match(vs)||[],E=i.match(vs)||[],E.length){for(;h=vs.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=bs(d,m)+S),p=parseFloat(m),v=m.substr((p+"").length),l=vs.lastIndex-v.length,v||(v=v||Vn.units[t]||S,l===i.length&&(i+=v,o.e+=v)),S!==v&&(d=cr(e,t,_,v)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?bp:Tp;return kd.test(i)&&(o.e=0),this._pt=o,o},wf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},IM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=wf[n]||n,t[1]=wf[i]||i,t.join(" ")},NM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Bi[o]&&(l=1,o=o==="transformOrigin"?Rn:Rt),Yr(n,o);l&&(Yr(n,Rt),a&&(a.svg&&n.removeAttribute("transform"),Do(n,1),a.uncache=1,wp(i)))}},Ja={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new An(e._pt,t,n,0,0,NM);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Lo=[1,0,0,1,0,0],Lp={},Dp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Af=function(e){var t=Si(e,Rt);return Dp(t)?Lo:t.substr(7).match(Bd).map(Pt)},xu=function(e,t){var n=e._gsap||Or(e),i=e.style,s=Af(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Lo:s):(s===Lo&&!e.offsetParent&&e!==ws&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,ws.appendChild(e)),s=Af(e),l?i.display=l:Yr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ws.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Vc=function(e,t,n,i,s,a){var o=e._gsap,l=s||xu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],v=t.split(" "),S=parseFloat(v[0])||0,E=parseFloat(v[1])||0,A,w,D,x;n?l!==Lo&&(w=d*m-g*_)&&(D=S*(m/w)+E*(-_/w)+(_*M-m*p)/w,x=S*(-g/w)+E*(d/w)-(d*M-g*p)/w,S=D,E=x):(A=Cp(e),S=A.x+(~v[0].indexOf("%")?S/100*A.width:S),E=A.y+(~(v[1]||v[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&o.smooth?(p=S-c,M=E-u,o.xOffset=h+(p*d+M*_)-p,o.yOffset=f+(p*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Rn]="0px 0px",a&&(Qi(a,o,"xOrigin",c,S),Qi(a,o,"yOrigin",u,E),Qi(a,o,"xOffset",h,o.xOffset),Qi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+E)},Do=function(e,t){var n=e._gsap||new mp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Si(e,Rn)||"0",u,h,f,d,g,_,m,p,M,v,S,E,A,w,D,x,b,F,N,Z,P,z,q,O,j,Y,R,U,$,ue,oe,he;return u=h=f=_=m=p=M=v=S=0,d=g=1,n.svg=!!(e.getCTM&&Pp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Rt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Rt]!=="none"?l[Rt]:"")),i.scale=i.rotate=i.translate="none"),w=xu(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Vc(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,w)),E=n.xOrigin||0,A=n.yOrigin||0,w!==Lo&&(F=w[0],N=w[1],Z=w[2],P=w[3],u=z=w[4],h=q=w[5],w.length===6?(d=Math.sqrt(F*F+N*N),g=Math.sqrt(P*P+Z*Z),_=F||N?ds(N,F)*Er:0,M=Z||P?ds(Z,P)*Er+_:0,M&&(g*=Math.abs(Math.cos(M*As))),n.svg&&(u-=E-(E*F+A*Z),h-=A-(E*N+A*P))):(he=w[6],ue=w[7],R=w[8],U=w[9],$=w[10],oe=w[11],u=w[12],h=w[13],f=w[14],D=ds(he,$),m=D*Er,D&&(x=Math.cos(-D),b=Math.sin(-D),O=z*x+R*b,j=q*x+U*b,Y=he*x+$*b,R=z*-b+R*x,U=q*-b+U*x,$=he*-b+$*x,oe=ue*-b+oe*x,z=O,q=j,he=Y),D=ds(-Z,$),p=D*Er,D&&(x=Math.cos(-D),b=Math.sin(-D),O=F*x-R*b,j=N*x-U*b,Y=Z*x-$*b,oe=P*b+oe*x,F=O,N=j,Z=Y),D=ds(N,F),_=D*Er,D&&(x=Math.cos(D),b=Math.sin(D),O=F*x+N*b,j=z*x+q*b,N=N*x-F*b,q=q*x-z*b,F=O,z=j),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Pt(Math.sqrt(F*F+N*N+Z*Z)),g=Pt(Math.sqrt(q*q+he*he)),D=ds(z,q),M=Math.abs(D)>2e-4?D*Er:0,S=oe?1/(oe<0?-oe:oe):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Dp(Si(e,Rt)),O&&e.setAttribute("transform",O))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Pt(d),n.scaleY=Pt(g),n.rotation=Pt(_)+o,n.rotationX=Pt(m)+o,n.rotationY=Pt(p)+o,n.skewX=M+o,n.skewY=v+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Rn]=Qa(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?FM:Rp?Up:OM,n.uncache=0,n},Qa=function(e){return(e=e.split(" "))[0]+" "+e[1]},oc=function(e,t,n){var i=nn(t);return Pt(parseFloat(t)+parseFloat(cr(e,"x",n+"px",i)))+i},OM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Up(e,t)},gr="0deg",$s="0px",vr=") ",Up=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,v=n.zOrigin,S="",E=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==gr||u!==gr)){var A=parseFloat(u)*As,w=Math.sin(A),D=Math.cos(A),x;A=parseFloat(h)*As,x=Math.cos(A),a=oc(M,a,w*x*-v),o=oc(M,o,-Math.sin(A)*-v),l=oc(M,l,D*x*-v+v)}m!==$s&&(S+="perspective("+m+vr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(E||a!==$s||o!==$s||l!==$s)&&(S+=l!==$s||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+vr),c!==gr&&(S+="rotate("+c+vr),u!==gr&&(S+="rotateY("+u+vr),h!==gr&&(S+="rotateX("+h+vr),(f!==gr||d!==gr)&&(S+="skew("+f+", "+d+vr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+vr),M.style[Rt]=S||"translate(0, 0)"},FM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,v=parseFloat(a),S=parseFloat(o),E,A,w,D,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=As,c*=As,E=Math.cos(l)*h,A=Math.sin(l)*h,w=Math.sin(l-c)*-f,D=Math.cos(l-c)*f,c&&(u*=As,x=Math.tan(c-u),x=Math.sqrt(1+x*x),w*=x,D*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),E*=x,A*=x)),E=Pt(E),A=Pt(A),w=Pt(w),D=Pt(D)):(E=h,D=f,A=w=0),(v&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(v=cr(d,"x",a,"px"),S=cr(d,"y",o,"px")),(g||_||m||p)&&(v=Pt(v+g-(g*E+_*w)+m),S=Pt(S+_-(g*A+_*D)+p)),(i||s)&&(x=d.getBBox(),v=Pt(v+i/100*x.width),S=Pt(S+s/100*x.height)),x="matrix("+E+","+A+","+w+","+D+","+v+","+S+")",d.setAttribute("transform",x),M&&(d.style[Rt]=x)},zM=function(e,t,n,i,s){var a=360,o=$t(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Er:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*yf)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*yf)%a-~~(c/a)*a)),e._pt=f=new An(e._pt,t,n,i,c,MM),f.e=u,f.u="deg",e._props.push(n),f},Rf=function(e,t){for(var n in t)e[n]=t[n];return e},BM=function(e,t,n){var i=Rf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Rt]=t,o=Do(n,1),Yr(n,Rt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Rt],a[Rt]=t,o=Do(n,1),a[Rt]=c);for(l in Bi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=nn(c),g=nn(u),h=d!==g?cr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new An(e._pt,o,l,h,f-h,kc),e._pt.u=g||0,e._props.push(l));Rf(o,i)};wn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Ja[e>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return Li(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var Ip={name:"css",register:Gc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,M,v,S,E,A,w,D;_u||Gc(),this.styles=this.styles||Ap(e),D=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Fn[_]&&_p(_,t,n,i,e,s)))){if(d=typeof u,g=Ja[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ro(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",sr.lastIndex=0,sr.test(c)||(m=nn(c),p=nn(u)),p?m!==p&&(c=cr(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),D.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],$t(c)&&~c.indexOf("random(")&&(c=Ro(c)),nn(c+"")||c==="auto"||(c+=Vn.units[_]||nn(Li(e,_))||""),(c+"").charAt(1)==="="&&(c=Li(e,_))):c=Li(e,_),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in vi&&(_==="autoAlpha"&&(f===1&&Li(e,"visibility")==="hidden"&&h&&(f=0),D.push("visibility",0,o.visibility),Qi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=vi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Bi,v){if(this.styles.save(_),S||(E=e._gsap,E.renderTransform&&!t.parseTransform||Do(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,S=this._pt=new An(this._pt,o,Rt,0,1,E.renderTransform,E,0,-1),S.dep=1),_==="scale")this._pt=new An(this._pt,E,"scaleY",E.scaleY,(M?bs(E.scaleY,M+h):h)-E.scaleY||0,kc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(Rn,0,o[Rn]),u=IM(u),E.svg?Vc(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Qi(this,E,"zOrigin",E.zOrigin,p),Qi(this,o,_,Qa(c),Qa(u)));continue}else if(_==="svgOrigin"){Vc(e,u,1,A,0,this);continue}else if(_ in Lp){zM(this,E,_,f,M?bs(f,M+u):u);continue}else if(_==="smoothOrigin"){Qi(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){BM(this,u,e);continue}}else _ in o||(_=Fs(_)||_);if(v||(h||h===0)&&(f||f===0)&&!SM.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),p=nn(u)||(_ in Vn.units?Vn.units[_]:m),m!==p&&(f=cr(e,_,c,p)),this._pt=new An(this._pt,v?E:o,_,f,(M?bs(f,M+h):h)-f,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?EM:kc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=yM);else if(_ in o)UM.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){au(_,u);continue}v||(_ in o?D.push(_,0,o[_]):D.push(_,1,c||e[_])),a.push(_)}}w&&yp(this)},render:function(e,t){if(t.tween._time||!gu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Li,aliases:vi,getSetter:function(e,t,n){var i=vi[t];return i&&i.indexOf(",")<0&&(t=i),t in Bi&&t!==Rn&&(e._gsap.x||Li(e,"x"))?n&&Mf===n?t==="scale"?AM:wM:(Mf=n||{})&&(t==="scale"?RM:CM):e.style&&!ru(e.style[t])?TM:~t.indexOf("-")?bM:pu(e,t)},core:{_removeProperty:Yr,_getMatrix:xu}};Cn.utils.checkPrefix=Fs;Cn.core.getStyleSaver=Ap;(function(r,e,t,n){var i=wn(r+","+e+","+t,function(s){Bi[s]=1});wn(e,function(s){Vn.units[s]="deg",Lp[s]=1}),vi[i[13]]=r+","+e,wn(n,function(s){var a=s.split(":");vi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});Cn.registerPlugin(Ip);var ht=Cn.registerPlugin(Ip)||Cn;ht.core.Tween;function kM(){return new Worker(""+new URL("generateGalaxyWorker-ac2c9d7b.js",import.meta.url).href)}ht.registerPlugin(Qe);const HM=document.querySelector("canvas.webgl"),Uo=new Qx,Np=new iS,GM=Np.load("./textures/particles/8.png"),VM=Np.load("./textures/particles/4.png"),Op=500,Na=new Float32Array(Op*3);for(let r=0;r<Op;r++)Na[r*3+0]=(Math.random()-.5)*10,Na[r*3+1]=.5-Math.random()*8,Na[r*3+2]=(Math.random()-.5)*10;const Fp=new ui;Fp.setAttribute("position",new Gn(Na,3));const WM=new Ha({color:"#ffffff",size:.08,blending:So,alphaMap:VM,transparent:!0,depthWrite:!1,sizeAttenuation:!0,transparent:!0}),kr=new ld(Fp,WM);let He={count:9e4,size:.01,radius:1.5,branches:3,spin:0,randomness:.5,randomnessPower:10,insideColor:"#312eff",outsideColor:"#1b8360",position:{x:0,y:2,z:0}};window.innerWidth<=768?He={count:3e4,size:.01,radius:1,branches:3,spin:0,randomness:.5,randomnessPower:10,insideColor:"#312eff",outsideColor:"#1b8360",position:{x:0,y:2,z:0}}:He={count:9e4,size:.01,radius:1.5,branches:3,spin:0,randomness:.5,randomnessPower:10,insideColor:"#312eff",outsideColor:"#1b8360",position:{x:0,y:2,z:0}};const zp=[];let Rr=4;window.innerWidth<=768?Rr=3:Rr=4;let Cf={};for(let r=0;r<Rr;r++)zp.push(new kM);let ri=new ui,Ta=null,Pi=null;const Bp=()=>{const r={count:He.count,maxRadius:He.radius,branches:He.branches,spin:He.spin,randomnessPower:He.randomnessPower,insideColor:He.insideColor,outsideColor:He.outsideColor};let e=0;Pi!==null&&(Uo.remove(Pi),ri.dispose(),Ta.dispose(),Pi=null);const t=new Float32Array(He.count*3),n=new Float32Array(He.count*3);ri=new ui,ri.setAttribute("position",new Gn(t,3)),ri.setAttribute("color",new Gn(n,3)),zp.forEach((s,a)=>{const o=Math.floor(a*He.count/Rr),l=Math.floor((a+1)*He.count/Rr),c={...r,startIndex:o,endIndex:l,workerIndex:a};s.postMessage(c),s.onmessage=function(u){const h=u.data,f=new Float32Array(h.positions),d=new Float32Array(h.colors),g=h.workerIndex,_=Math.floor(g*He.count/Rr)*3,m=f.length;if(i(f)||i(d)){console.error("NaN values detected in worker data.");return}_+m<=ri.attributes.position.array.length?(ri.attributes.position.array.set(f,_),ri.attributes.color.array.set(d,_)):(console.error("Data received from worker exceeds buffer size."),console.error("Received:",_+m,"Length accepted:",ri.attributes.position.array.length)),ri.attributes.position.needsUpdate=!0,ri.attributes.color.needsUpdate=!0,e++,e===Rr&&(window.innerWidth<=768?Ta=new Ha({size:He.size,sizeAttenuation:!0,depthWrite:!1,blending:So,vertexColors:!0}):Ta=new Ha({size:He.size,alphaMap:GM,transparent:!0,sizeAttenuation:!0,depthWrite:!1,blending:So,vertexColors:!0}),Pi=new ld(ri,Ta),Cf=Pi.position.set(He.position.x,He.position.y,He.position.z),Pi.rotation.y=2,Cf.needsUpdate=!0,Uo.add(Pi))}});function i(s){for(let a=0;a<s.length;a++)if(isNaN(s[a]))return!0;return!1}};Bp();const mn={width:window.innerWidth,height:window.innerHeight};let Ye=new zn(75,mn.width/mn.height,.1,100);window.innerWidth<=768&&(Ye=new zn(55,mn.width/mn.height,.1,50));Ye.position.set(0,6,4);Ye.rotation.set(-.767,0,0);kr.position.y=Ye.position.y;kr.position.x=Ye.position.x;kr.position.z=Ye.position.z;Uo.add(kr);const fi=new Zs;Uo.add(fi);fi.add(Ye);const Io=new ad({canvas:HM});Io.setSize(mn.width,mn.height);Io.setPixelRatio(Math.min(window.devicePixelRatio));window.addEventListener("resize",()=>{mn.width=window.innerWidth,mn.height=window.innerHeight,Ye.aspect=mn.width/mn.height,Ye.updateProjectionMatrix(),Io.setSize(mn.width,mn.height),Io.setPixelRatio(Math.min(window.devicePixelRatio)),window.innerHeight>=1250&&ro()});let hi=0;const XM=(r,e)=>{let t;return function(){clearTimeout(t),t=setTimeout(r,e)}},ro=XM(Bp,0);ht.defaults({preventOverlaps:!0,fastScrollEnd:!0});const Vt=ht.timeline(),Su=new bS({duration:1,lerp:.05,wheelMultiplier:1,easing:r=>r*(1-r),smooth:!0});Su.on("scroll",({scroll:r})=>{const e=Math.round(r/mn.height);e!==hi&&(hi=e,hi==0&&(ht.to(Ye.position,{x:0,z:4,y:6,ease:"power1.inOut",duration:1}),ht.to(Ye.rotation,{duration:1,ease:"power1.inOut",x:-.767,z:0,y:0})),hi==1&&(window.innerWidth<=768?(ht.to(He,{radius:1.5,spin:0,randomnessPower:10,onStart:()=>{He.count=1e4,He.size=.01,He.randomnessPower=20,He.randomness=0},onComplete:()=>{He.count=4e4,He.size=.01},onUpdate:ro}),ht.to(Ye.position,{x:0,z:4,y:6,ease:"power1.inOut"}),ht.to(Ye.rotation,{ease:"power1.inOut",x:-.767,z:0,y:0})):(ht.to(He,{radius:1.5,spin:0,randomnessPower:10,onStart:()=>{He.count=1e4,He.size=.03,He.randomnessPower=20,He.randomness=0},onComplete:()=>{He.count=4e4,He.size=.01},onUpdate:ro}),ht.to(Ye.position,{x:0,z:4,y:6,ease:"power1.inOut"}),ht.to(Ye.rotation,{ease:"power1.inOut",x:-.767,z:0,y:0}))),hi==2&&(window.innerWidth<=768?(ht.to(He,{radius:1.2,spin:5,randomnessPower:7,duration:1.5,onStart:()=>{He.count=5e4,He.size=.01,He.randomnessPower=20,He.randomness=.01},onComplete:()=>{He.count=5e4,He.size=.01},onUpdate:ro}),ht.to(Ye.position,{x:0,z:2,y:3,ease:"power1.inOut"}),ht.to(Ye.rotation,{ease:"power1.inOut",x:-.3,z:0,y:0})):(ht.to(He,{radius:4,spin:1.5,randomnessPower:4,duration:2,onStart:()=>{He.count=1e4,He.size=.02,He.randomnessPower=20,He.randomness=0},onComplete:()=>{He.count=25e4,He.size=.01},onUpdate:ro}),ht.to(Ye.position,{x:0,z:4,y:4,ease:"power1.inOut"}),ht.to(Ye.rotation,{ease:"power1.inOut",x:-.3,z:0,y:0}))),hi==4&&(window.innerWidth<=768?(Vt.to(Ye.position,{x:-.5,y:6,z:.5,ease:"linear"}),Vt.to(Ye.rotation,{x:-1.6,y:0,z:0,ease:"linear"})):(Vt.to(Ye.position,{x:-6,y:12,z:.5,ease:"linear"}),Vt.to(Ye.rotation,{x:-1.6,y:0,z:0,ease:"linear"}))),hi==5&&(window.innerWidth<=768?(Vt.to(Ye.position,{x:.5,y:5,z:3.5,ease:"power1.inOut"}),Vt.to(Ye.rotation,{x:-.93,y:0,z:0,ease:"power1.inOut"})):(Vt.to(Ye.position,{x:3.5,y:7,z:6.5,ease:"power1.inOut"}),Vt.to(Ye.rotation,{x:-.93,y:0,z:0,ease:"power1.inOut"}))),hi==6&&(window.innerWidth<=768?(Vt.to(Ye.position,{x:-1.5,y:3.5,z:1,ease:"power1.inOut"}),Vt.to(Ye.rotation,{x:-.895,y:-.455,z:-.347,ease:"power1.inOut"})):(Vt.to(Ye.position,{x:-4.5,y:3.5,z:1,ease:"power1.inOut"}),Vt.to(Ye.rotation,{x:-.895,y:-.455,z:-.347,ease:"power1.inOut"}))),hi==7&&(Vt.to(Ye.position,{x:2,y:2,z:0,ease:"power1.inOut"}),Vt.to(Ye.rotation,{x:0,y:2,z:0,ease:"power1.inOut"})),hi==8&&(window.innerWidth<=768?(Vt.to(Ye.position,{x:-.5,y:2,z:2.5,ease:"power1.inOut"}),Vt.to(Ye.rotation,{x:0,y:0,z:0,ease:"power1.inOut"})):(Vt.to(Ye.position,{x:-3.5,y:2,z:2.5,ease:"power1.inOut"}),Vt.to(Ye.rotation,{x:0,y:0,z:0,ease:"power1.inOut"}))))});function kp(r){Su.raf(r),requestAnimationFrame(kp)}requestAnimationFrame(kp);Su.on("scroll",()=>{Qe.update()});Qe.defaults({markers:!1});ht.to(".hero",{duration:4,opacity:0,ease:"power1.inOut",scrollTrigger:{trigger:"body",start:"top top",end:"+=50%",scrub:2,markers:!1}});const qM=document.querySelectorAll("#pin-hero"),YM=ht.timeline();qM.forEach((r,e)=>{YM.to(r,{duration:4,opacity:0,ease:"power1.inOut",y:"100%",preventOverlaps:!0,scrollTrigger:{trigger:r,pin:!0,start:"bottom 20%",end:"+=50%",scrub:!0}})});const $M=document.querySelectorAll("#pin-second");$M.forEach((r,e)=>{ht.to(r,{duration:2,opacity:0,ease:"power4.inOut",backdropFilter:"blur(20px)",scrollTrigger:{trigger:r,pin:!0,start:"top top",end:"center",scrub:!0}})});const KM=document.querySelectorAll("#pin-section");KM.forEach((r,e)=>{ht.to(r,{duration:2,opacity:0,backdropFilter:"blur(20px)",ease:"power1.inOut",scrollTrigger:{trigger:r,pin:!0,start:"top top",end:"bottom",scrub:!0}})});const el={x:0,y:0};let Hp=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),xo={alpha:0,beta:0,gamma:0};function Pf(r){xo.alpha=r.alpha,xo.beta=r.beta,xo.gamma=r.gamma}function ZM(){typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(r=>{r==="granted"&&window.addEventListener("deviceorientation",Pf)}).catch(console.error):window.addEventListener("deviceorientation",Pf)}Hp?ZM():window.addEventListener("mousemove",r=>{el.x=r.clientX/mn.width-.5,el.y=r.clientY/mn.height-.5});const jM=new rS;let Lf=0;const Gp=()=>{const r=jM.getElapsedTime(),e=r-Lf;if(Lf=r,Pi&&(Pi.rotation.y=r*.05),kr.position.x=Math.cos(r)*.05+Ye.position.x,kr.position.z=Math.sin(r)*.05+Ye.position.z-5,kr.position.y=Math.sin(r)*.05+Ye.position.y,Hp){const t=xo.gamma/90,n=xo.beta/90;fi.position.x+=(t-fi.position.x)*2*e,fi.position.y+=(n-fi.position.y)*2*e}else{const t=el.x*.5,n=-el.y*.5;fi.position.x+=(t-fi.position.x)*2*e,fi.position.y+=(n-fi.position.y)*2*e}Io.render(Uo,Ye),window.requestAnimationFrame(Gp)};Gp();ht.defaults({markers:!1});let ac=0;const In=document.body;document.addEventListener("DOMContentLoaded",function(){const r=document.getElementById("contact-form"),e=document.getElementById("overlay"),t=document.getElementsByClassName("close-btn");document.querySelectorAll("#opn-contact").forEach(function(i){i.addEventListener("click",function(s){s.preventDefault(),r.style.display="block",e.style.display="block",document.body.classList.add("no-scroll")})}),Array.from(t).forEach(function(i){i.addEventListener("click",function(s){s.preventDefault(),r.style.display="none",e.style.display="none",document.body.classList.remove("no-scroll")})}),e.addEventListener("click",function(i){i.preventDefault(),r.style.display="none",e.style.display="none",document.body.classList.remove("no-scroll")})});window.addEventListener("scroll",()=>{const r=window.scrollY,e=Math.round(r/window.innerHeight);r<=0&&(In.classList.remove("scroll-up"),In.classList.add("scroll-up-btn"),In.classList.remove("scroll-down-btn")),r>ac&&!In.classList.contains("scroll-down")&&(In.classList.remove("scroll-up"),In.classList.remove("scroll-up-btn"),In.classList.add("scroll-down"),In.classList.add("scroll-down-btn")),r<ac&&In.classList.contains("scroll-down")&&(In.classList.remove("scroll-down"),In.classList.remove("scroll-down-btn"),In.classList.add("scroll-up"),In.classList.add("scroll-up-btn")),ac=r,e==2&&ht.fromTo(".a",{backdropFilter:"blur(10px)",backgroundColor:"linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0))",duration:1,delay:3},{backdropFilter:"none",backgroundColor:"none"})});const JM=ht.timeline();JM.from(".navbar",{top:"-30%",duration:2});ht.from(".logo",{scale:0,x:"5000%",rotate:"150%",duration:2.5});ht.from(".content-frame",{backdropFilter:"blur(20px)",duration:2});ht.to(".marquee__part",{xPercent:-100,repeat:-1,duration:5,ease:"linear"});
//# sourceMappingURL=index-2110568c.js.map
