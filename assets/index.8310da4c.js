var P=Object.defineProperty,w=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var m=(o,e,r)=>e in o?P(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,_=(o,e)=>{for(var r in e||(e={}))E.call(e,r)&&m(o,r,e[r]);if(p)for(var r of p(e))I.call(e,r)&&m(o,r,e[r]);return o},h=(o,e)=>w(o,$(e));import{o as l,c as u,a as d,w as v,r as f,b as y,d as O,e as a,f as N,v as V,F as k,g as j,t as A,h as C,i as S,j as B}from"./vendor.5fddaee8.js";const D=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};D();var g=(o,e)=>{const r=o.__vccOpts||o;for(const[n,t]of e)r[n]=t;return r};const F={},H={class:"p-14"},R=y("Pokemon Picker");function T(o,e){const r=f("router-link"),n=f("router-view");return l(),u("div",H,[d(r,{class:"flex justify-center text-4xl text-yellow-700",to:"/"},{default:v(()=>[R]),_:1}),d(n)])}var q=g(F,[["render",T]]);const W="modulepreload",x={},K="/pokepicker/",M=function(e,r){return!r||r.length===0?e():Promise.all(r.map(n=>{if(n=`${K}${n}`,n in x)return;x[n]=!0;const t=n.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":W,t||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),t)return new Promise((c,L)=>{i.addEventListener("load",c),i.addEventListener("error",L)})})).then(()=>e())},U={name:"Home",data(){return{pokemons:[],text:"",urlIdLookup:{}}},computed:{filteredPokemons(){return this.text?this.pokemons.filter(o=>o.name.includes(this.text)):[]}},methods:{focusInput(){this.$refs.input.focus()}},mounted(){this.focusInput(),O.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000").then(o=>{this.pokemons=o.data.results,this.urlIdLookup=o.data.results.reduce((e,r)=>{const n=r.url.split("/");return h(_({},e),{[r.name]:n[n.length-2]})},{})})}},z={class:"w-full flex justify-center"},G={class:"mt-10 p-4 flex flex-wrap justify-center"};function J(o,e,r,n,t,s){const i=f("router-link");return l(),u(k,null,[a("div",z,[N(a("input",{placeholder:"Enter Pokemon here",type:"text",class:"mt-10 p-2 border-blue-500 border-2","onUpdate:modelValue":e[0]||(e[0]=c=>t.text=c),ref:"input"},null,512),[[V,t.text]])]),a("div",G,[(l(!0),u(k,null,j(s.filteredPokemons,c=>(l(),u("div",{class:"ml-4 text-2xl text-blue-400",key:c.name},[d(i,{to:`/about/${t.urlIdLookup[c.name]}`},{default:v(()=>[y(A(c.name),1)]),_:2},1032,["to"])]))),128))])],64)}var Q=g(U,[["render",J]]);const X=C({history:S("/pokepicker/"),routes:[{path:"/",name:"home",component:Q},{path:"/about/:slug",name:"about",component:()=>M(()=>import("./AboutView.95a726ab.js"),["assets/AboutView.95a726ab.js","assets/vendor.5fddaee8.js"])}]});const b=B(q);b.use(X);b.mount("#app");export{g as _};
