"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[36],{73036:function(e,n,t){t.d(n,{Qo:function(){return g},b3:function(){return Z},d1:function(){return p},mP:function(){return k},n3:function(){return v},v0:function(){return h},vn:function(){return m}});var a=t(93433),r=t(4942),o=t(29439),i=t(1413),u=t(98620),s=t(24351),c=t(60393),f=t(26138),l=t(18327),d=t(78661);function p(e,n){return(0,c.Q1)(e,[],(function(e){return e.operation}),(function(e,t){"teamBuff"===t[0]&&(t=t.slice(1),e.info||(e.info={}),e.info.isTeamBuff=!0);var a=(0,c.Hm)(f.qH,t);a?e.info=(0,i.Z)((0,i.Z)((0,i.Z)({},e.info),a.info),{},{prefix:void 0,source:n}):"tally"!==t[0]&&console.error("Detect ".concat(n," buff into non-existant key path ").concat(t))})),e}function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=u.Z.mainStatValue(e.mainStatKey,e.rarity,Math.max(Math.min(n,4*e.rarity),e.level)),a=[];return a.push([e.mainStatKey,t]),e.substats.forEach((function(e){var n=e.key,t=e.accurateValue;return n&&a.push([n,t])})),{art:(0,i.Z)((0,i.Z)({},Object.fromEntries(a.map((function(e){var n=(0,o.Z)(e,2),t=n[0],a=n[1];return t.endsWith("_")?[t,(0,d.aQ)(a/100)]:[t,(0,d.a9)(a)]})))),{},(0,r.Z)({},e.slotKey,{id:(0,d.a9)(e.id),set:(0,d.a9)(e.setKey)})),artSet:(0,r.Z)({},e.setKey,(0,d.a9)(1))}}function m(e){for(var n,t={lvl:(0,d.a9)(e.level),constellation:(0,d.a9)(e.constellation),asc:(0,d.a9)(e.ascension),infusion:{team:e.infusionAura?(0,d.a9)(e.infusionAura):void 0},premod:{auto:(0,d.a9)(e.talent.auto),skill:(0,d.a9)(e.talent.skill),burst:(0,d.a9)(e.talent.burst)},enemy:(0,i.Z)((0,i.Z)({},(0,c.O)(s.Kj.map((function(e){return"".concat(e,"_res_")})),(function(n){var t;return(0,d.aQ)((null!==(t=e.enemyOverride["".concat(n.slice(0,-5),"_enemyRes_")])&&void 0!==t?t:10)/100)}))),{},{level:(0,d.a9)(null!==(n=e.enemyOverride.enemyLevel)&&void 0!==n?n:e.level)}),hit:{hitMode:(0,d.a9)(e.hitMode),reaction:(0,d.a9)(e.reactionMode)},customBonus:{}},a=0,r=Object.entries(e.bonusStats);a<r.length;a++){var u=(0,o.Z)(r[a],2),f=u[0],l=u[1];t.customBonus[f]=f.endsWith("_")?(0,d.aQ)(l/100):(0,d.a9)(l)}return e.enemyOverride.enemyDefRed_&&(t.premod.enemyDefRed_=(0,d.aQ)(e.enemyOverride.enemyDefRed_/100)),e.enemyOverride.enemyDefIgn_&&(t.enemy.defIgn=(0,d.aQ)(e.enemyOverride.enemyDefIgn_/100)),(0,c.Q1)(e.conditional,["conditional"],(function(e){return"string"===typeof e}),(function(e,n){return(0,c.SR)(t,n,(0,d.a9)(e))})),t}function h(e){return{weapon:{id:(0,d.a9)(e.id),lvl:(0,d.a9)(e.level),asc:(0,d.a9)(e.ascension),refinement:(0,d.a9)(e.refinement),refineIndex:(0,d.a9)(e.refinement-1)}}}var y=(0,d.yY)((0,c.I8)(f.qH),["teamBuff"]);function g(e,n){var t=Object.entries(e).map((function(e){var n=(0,o.Z)(e,2),t=n[0],a=n[1];return[t,(0,i.Z)({},Z(a))]})),r=Object.fromEntries(t.map((function(e){return[(0,o.Z)(e,1)[0],{targetRef:{},buffs:[],calcs:{}}]}))),u={};function s(e){var n="teamBuff"===e[0]?(0,c.Hm)(y,e.slice(1)):(0,c.Hm)(f.qH,e);if(n)return n;var t=(0,c.Hm)(u,e);if(t)return t;var a=(0,d.UF)(e);return"teamBuff"===e[0]&&"tally"===e[1]&&(a.accu="add"),(0,c.SR)(u,e,a),a}Object.values(r).forEach((function(e){var n=e.targetRef,u=e.buffs,l=e.calcs;return t.forEach((function(e){var t=(0,o.Z)(e,2),p=t[0],v=t[1].teamBuff,m={},h=(0,c.I8)({teamBuff:v});u.push(m),l[p]=h,(0,c.Q1)(v,[],(function(e){return e.operation}),(function(e,t){var o=(0,i.Z)((0,i.Z)({},(0,c.Hm)(f.qH,t)),{},{source:p,prefix:void 0,asConst:true});(0,c.SR)(m,t,(0,d.uY)(s(["teamBuff"].concat((0,a.Z)(t))),h,o)),(0,c.Q1)(e,[],(function(e){return"read"===(null===e||void 0===e?void 0:e.operation)}),(function(e){var t,a;"targetBuff"!==e.path[0]&&("target"===e.path[0]?(t=s(e.path.slice(1)),a=n):(t=e,a=r[p].targetRef),(0,c.SR)(h,e.path,(0,d.uY)(t,a)))}))}))}))})),t.forEach((function(e){var t=(0,o.Z)(e,2),a=t[0],u=t[1];delete u.teamBuff;var s=r[a],f=s.targetRef,l=Z(s.buffs);(0,c.Q1)(null!==l&&void 0!==l?l:{},[],(function(e){return e.operation}),(function(e,n){var t;e.info=(0,i.Z)((0,i.Z)({},null===(t=(0,c.Hm)(y,n))||void 0===t?void 0:t.info),{},{prefix:"teamBuff",pivot:true})})),Object.assign(f,Z([u,l,{teamBuff:l,activeCharKey:(0,d.a9)(n)}])),f.target=f}));var p=new l.w(void 0,void 0);return Object.fromEntries(Object.entries(r).map((function(e){var n=(0,o.Z)(e,2),t=n[0],a=n[1];return[t,{target:new l.w(a.targetRef,p),buffs:Object.fromEntries(Object.entries(a.calcs).map((function(e){var n=(0,o.Z)(e,2),t=n[0],a=n[1];return[t,new l.w(a,p)]})))}]})))}function Z(e){return e.length?function e(n,t){if(n.length<=1)return n[0];if(n[0].operation){var r;"teamBuff"===t[0]&&(t=t.slice(1));var o=null!==(r=(0,c.Hm)(f.qH,t))&&void 0!==r?r:{},i=o.accu,u=o.type;if("tally"===t[0])i="add";else if(void 0===i){var s="Multiple entries when merging `unique` for key ".concat(t);console.error(s),i="number"===u?"max":"small"}return{operation:i,operands:n}}return Object.fromEntries((0,a.Z)(new Set(n.flatMap((function(e){return Object.keys(e)})))).map((function(r){return[r,e(n.map((function(e){return e[r]})).filter((function(e){return e})),[].concat((0,a.Z)(t),[r]))]})))}(e,[]):{}}function k(e){return new l.w(Z(e),void 0)}},64737:function(e,n,t){t.d(n,{aD:function(){return o},uW:function(){return i}});var a=t(1413),r=t(78661);function o(e,n,t){var a=new Set,r=new Set;e.forEach((function e(o){r.has(o)||(a.has(o)?console.error("Found cyclical dependency during formula traversal"):(a.add(o),n(o),o.operands.forEach(e),t(o),a.delete(o),r.add(o)))}))}function i(e,n,t){var o=new Set,i=new Map,s=new Map;function c(e){var f=i.get(e);if(f)return f;f=n(e);var l=s.get(f);return l||(o.has(f)?(console.error("Found cyclical dependency during formula mapping"),(0,r.a9)(NaN)):(o.add(f),l=t(function(e){var n=e.operands.map(c);return u(n,e.operands)?e:(0,a.Z)((0,a.Z)({},e),{},{operands:n})}(f),e),o.delete(f),i.set(e,l),s.set(f,l),l))}var f=e.map(c);return u(f,e)?e:f}function u(e,n){return void 0===e?void 0===n:void 0!==n&&(e.length===n.length&&e.every((function(e,t){return e===n[t]})))}},69292:function(e,n,t){t.d(n,{CG:function(){return h},aj:function(){return l},tL:function(){return p}});var a=t(37762),r=t(29439),o=t(1413),i=t(93433),u=t(60393),s=t(64737),c=t(78661),f={min:function(e){return Math.min.apply(Math,(0,i.Z)(e))},max:function(e){return Math.max.apply(Math,(0,i.Z)(e))},add:function(e){return e.reduce((function(e,n){return e+n}),0)},mul:function(e){return e.reduce((function(e,n){return e*n}),1)}},l=(0,o.Z)((0,o.Z)({},f),{},{res:function(e){var n=(0,r.Z)(e,1)[0];return n<0?1-n/2:n>=.75?1/(4*n+1):1-n},sum_frac:function(e){return e[0]/e.reduce((function(e,n){return e+n}))},threshold:function(e){var n=(0,r.Z)(e,4),t=n[0],a=n[1],o=n[2],i=n[3];return t>=a?o:i}}),d=new Set(Object.keys(f));function p(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return!1};return e=m(e=v(e=h(e,n,t)))}function v(e){return(0,s.uW)(e,(function(e){return e}),(function(e){var n=e;if(d.has(e.operation)){var t=e,a=t.operation,r=!1,i=t.operands.flatMap((function(e){return e.operation===a?(r=!0,e.operands):[e]}));n=r?(0,o.Z)((0,o.Z)({},t),{},{operands:i}):t}return n}))}function m(e){function n(e){var n,t=new Map,r=(0,a.Z)(e);try{for(r.s();!(n=r.n()).done;){var o,i=n.value;t.set(i,(null!==(o=t.get(i))&&void 0!==o?o:0)+1)}}catch(u){r.e(u)}finally{r.f()}return t}for(var t={common:{counts:new Map,formulas:new Set,operation:"add"}},u=function(){for(var u,c=void 0,l={operation:t.common.operation,operands:(u=t.common.counts,(0,i.Z)(u).flatMap((function(e){var n=(0,r.Z)(e,2),t=n[0],a=n[1];return Array(a).fill(t)})))},p=new Map,v=0,m=Object.keys(f);v<m.length;v++){var h=m[v];p.set(h,[])}if(e=(0,s.uW)(e,(function(e){if(t.common.formulas.has(e)){var n=e,a=new Map(t.common.counts),r=n.operands.filter((function(e){var n=a.get(e);return!n||(a.set(e,n-1),!1)}));return r.length?(r.push(l),(0,o.Z)((0,o.Z)({},n),{},{operands:r})):l}return e}),(function(e){if(!d.has(e.operation))return e;var t=e;if(c){if(c.operation===t.operation){var o,i=n(t.operands),u=new Map,s=c.counts,f=0,l=(0,a.Z)(i.entries());try{for(l.s();!(o=l.n()).done;){var v,m=(0,r.Z)(o.value,2),h=m[0],y=m[1],g=Math.min(y,null!==(v=s.get(h))&&void 0!==v?v:0);g?(u.set(h,g),f+=g):u.delete(h)}}catch(Q){l.e(Q)}finally{l.f()}f>1&&(c.counts=u,c.formulas.add(t))}}else{var Z,k=p.get(t.operation),w=n(t.operands),b=(0,a.Z)(k);try{for(b.s();!(Z=b.n()).done;){var _,M=(0,r.Z)(Z.value,2),N=M[0],x=M[1],j=0,S=new Map,O=(0,a.Z)(x.entries());try{for(O.s();!(_=O.n()).done;){var E,B=(0,r.Z)(_.value,2),W=B[0],H=B[1],R=Math.min(H,null!==(E=w.get(W))&&void 0!==E?E:0);R&&(S.set(W,R),j+=R)}}catch(Q){O.e(Q)}finally{O.f()}if(j>1){c={counts:S,formulas:new Set([t,N]),operation:t.operation},p.clear();break}}}catch(Q){b.e(Q)}finally{b.f()}c||k.push([t,w])}return t})),!c)return"break";t.common=c};;){if("break"===u())break}return e}function h(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return!1},s={data:[],processed:new Map},f=new Map([[s,new Map]]);function d(e,n){var p,v=n.processed.get(e);if(v)return v;var m,h=e.operation;switch(h){case"const":return e;case"add":case"mul":case"max":case"min":var y=l[h],g=[],Z=e.operands.filter((function(e){var t=d(e,n);return"const"!==t.operation||(g.push(t.value),!1)})).map((function(e){return d(e,n)})),k=y(g);if(isFinite(k)){if("mul"===h&&0===k){m=(0,c.a9)(k);break}}else if("mul"!==h&&("max"!==h||k>0)&&("min"!==h||k<0)){m=(0,c.a9)(k);break}k!==y([])&&Z.push((0,c.a9)(k)),m=Z.length<=1?null!==(p=Z[0])&&void 0!==p?p:(0,c.a9)(y([])):{operation:h,operands:Z};break;case"res":case"sum_frac":var w=e.operands.map((function(e){return d(e,n)})),b=l[h];m=w.every((function(e){return"const"===e.operation}))?(0,c.a9)(b(w.map((function(e){return e.value})))):(0,o.Z)((0,o.Z)({},e),{},{operands:w});break;case"lookup":var _=d(e.operands[0],n);if("const"===_.operation){var M,N=null!==(M=e.table[_.value])&&void 0!==M?M:e.operands[1];if(N){m=d(N,n);break}}throw new Error("Unsupported ".concat(h," node while folding"));case"prio":var x=e.operands.find((function(e){var t=d(e,n);if("const"!==t.operation)throw new Error("Unsupported ".concat(h," node while folding"));return void 0!==t.value}));m=x?d(x,n):(0,c.a9)(void 0);break;case"small":var j,S,O=void 0,E=(0,a.Z)(e.operands);try{for(E.s();!(S=E.n()).done;){var B,W=d(S.value,n);if("const"!==W.operation)throw new Error("Unsupported ".concat(h," node while folding"));(void 0===(null===(B=O)||void 0===B?void 0:B.value)||void 0!==W.value&&W.value<O.value)&&(O=W)}}catch(J){E.e(J)}finally{E.f()}m=null!==(j=O)&&void 0!==j?j:(0,c.a9)(void 0);break;case"match":var H=e.operands.map((function(e){return d(e,n)})),R=(0,r.Z)(H,4),Q=R[0],F=R[1],D=R[2],A=R[3];if("const"!==Q.operation||"const"!==F.operation)throw new Error("Unsupported ".concat(h," node while folding"));m=Q.value===F.value?D:A;break;case"threshold":var U=e.operands.map((function(e){return d(e,n)})),z=(0,r.Z)(U,4),C=z[0],K=z[1],P=z[2],q=z[3];m="const"===C.operation&&"const"===K.operation?C.value>=K.value?P:q:(0,o.Z)((0,o.Z)({},e),{},{operands:[C,K,P,q]});break;case"subscript":var I=e.operands.map((function(e){return d(e,n)})),T=(0,r.Z)(I,1)[0];m="const"===T.operation?(0,c.a9)(e.list[T.value]):(0,o.Z)((0,o.Z)({},e),{},{operands:[T]});break;case"read":var L=n.data.map((function(n){return(0,u.Hm)(n,e.path)})).filter((function(e){return e}));if(0===L.length)if(t(e)){var Y=e.accu;m=void 0===Y||"small"===Y?"string"===e.type?(0,c.a9)(void 0):(0,c.a9)(NaN):(0,c.a9)(l[Y]([]))}else m=e;else m=void 0===e.accu||1===L.length?d(L[L.length-1],n):d({operation:e.accu,operands:L},n);break;case"data":e.reset&&(n=s);var V=f.get(n),G=V.get(e.data);G||(G={data:[].concat((0,i.Z)(n.data),[e.data]),processed:new Map},f.set(G,new Map),V.set(e.data,G)),m=d(e.operands[0],G);break;default:(0,u.UT)(h)}return n.processed.set(e,m),m}var p={data:[n],processed:new Map};return f.set(p,new Map),f.get(s).set(n,p),e.map((function(e){return d(e,p)}))}},18327:function(e,n,t){t.d(n,{w:function(){return N}});var a,r,o,i,u,s,c,f,l=t(30168),d=t(29439),p=t(1413),v=t(37762),m=t(93433),h=t(15671),y=t(43144),g=t(26138),Z=t(91702),k=t(79406),w=t(60393),b=t(69292),_=t(80184),M=!0,N=function(){function e(n,t){(0,h.Z)(this,e),this.origin=void 0,this.children=new Map,this.data=void 0,this.nodes=new Map,this.processed=new Map,this.display=void 0,this.teamBuff=void 0,void 0===n?(this.data=[],this.origin=this):(t||(t=new e(void 0,void 0)),this.data=[n].concat((0,m.Z)(t.data)),this.origin=t.origin)}return(0,y.Z)(e,[{key:"getDisplay",value:function(){return this.display||(this.display=this.getAll(["display"])),this.display}},{key:"getTeamBuff",value:function(){if(!this.teamBuff){var e=this.getAll(["teamBuff"]),n={};(0,w.Q1)(g.ri,[],(function(e){return e.operation}),(function(t,a){var r=(0,w.Hm)(e,t.path);r&&(0,w.SR)(n,a,r)})),this.teamBuff=n}return this.teamBuff}},{key:"getAll",value:function(e){var n,t=this,a={},r=(0,v.Z)(this.data);try{for(r.s();!(n=r.n()).done;){var o,i=n.value;(0,w.Q1)(null!==(o=(0,w.Hm)(i,e))&&void 0!==o?o:{},[],(function(e){return e.operation}),(function(e,n){return(0,w.SR)(a,n,t.get(e))}))}}catch(u){r.e(u)}finally{r.f()}return a}},{key:"get",value:function(e){if(void 0===e)return console.trace("Please report this bug with this trace"),{info:{},operation:!0,value:void 0,isEmpty:!0,unit:"",formulas:[]};var n=this.processed.get(e);if(n)return n;var t=function(e){var n=e.info,t=e.dependencies,a=e.value,r=e.formula,o=e.assignment,i=e.empty;return{operation:!0,info:n,value:a,isEmpty:i,unit:k.ZP.unit(n.key),formula:r,formulas:[].concat((0,m.Z)(o?[o]:[]),(0,m.Z)(t))}}(this.computeNode(e));return this.processed.set(e,t),t}},{key:"computeNode",value:function(e){var n=this.nodes.get(e);if(n)return n;var t,a=e.operation,r=e.info;switch(a){case"add":case"mul":case"min":case"max":case"res":case"sum_frac":t=this._compute(e);break;case"threshold":t=this._threshold(e);break;case"const":t=this._constant(e.value);break;case"subscript":t=this._subscript(e);break;case"read":t=this._read(e);break;case"data":t=this._data(e);break;case"match":t=this._match(e);break;case"lookup":t=this._lookup(e);break;case"prio":t=this._prio(e.operands);break;case"small":t=this._small(e.operands);break;default:(0,w.UT)(a)}if(r){var o=r.asConst;(t=(0,p.Z)({},t)).info=function(e,n){for(var t=(0,p.Z)({},e),a=0,r=Object.entries(n);a<r.length;a++){var o=(0,d.Z)(r[a],2),i=o[0],u=o[1];u&&(t[i]=u)}return t}(t.info,r),o&&(delete t.formula,delete t.assignment,t.dependencies=new Set),!t.info.pivot&&t.formula||(t.mayNeedWrapping=!1)}return function(e){var n=e.info,t=e.value,a=e.formula,r=n.key,o=n.prefix,i=n.source,u=n.variant,s=n.fixed;if("number"!==typeof t)return;if(e.valueDisplay=(0,_.jsx)(Z.Z,{color:"info",children:(0,k.EC)(t,k.ZP.unit(r),s)}),r&&"_"!==r){var c=o&&!i?(0,_.jsxs)(_.Fragment,{children:[k.ZP.getPrefixStr(o)," "]}):(0,_.jsx)(_.Fragment,{}),f=i?(0,_.jsxs)(Z.Z,{color:"secondary",children:[" (",i,")"]}):null;e.name=(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(Z.Z,{color:u,children:[c,k.ZP.get(r)]}),f]}),a&&(e.assignment=(0,_.jsxs)("div",{id:"formula",children:[e.name," ",e.valueDisplay," = ",a]}))}}(t),this.nodes.set(e,t),t}},{key:"prereadAll",value:function(e){return this.data.map((function(n){return(0,w.Hm)(n,e)})).filter((function(e){return e}))}},{key:"readFirst",value:function(e){var n=this.data.map((function(n){return(0,w.Hm)(n,e)})).find((function(e){return e}));return n&&this.computeNode(n)}},{key:"_prio",value:function(e){var n=this,t=e.find((function(e){return void 0!==n.computeNode(e).value}));return t?this.computeNode(t):E}},{key:"_small",value:function(e){var n,t,a=void 0,r=(0,v.Z)(e);try{for(r.s();!(t=r.n()).done;){var o,i=t.value,u=this.computeNode(i);(void 0===(null===(o=a)||void 0===o?void 0:o.value)||u.value&&u.value<a.value)&&(a=u)}}catch(s){r.e(s)}finally{r.f()}return null!==(n=a)&&void 0!==n?n:E}},{key:"_read",value:function(e){var n,t=this,a=e.path;if(void 0===e.accu)return null!==(n=this.readFirst(a))&&void 0!==n?n:"string"===e.type?E:O;var r=this.prereadAll(a);return 1===r.length?this.computeNode(r[0]):"small"===e.accu?this._small(r):this._accumulate(e.accu,r.map((function(e){return t.computeNode(e)})))}},{key:"_lookup",value:function(e){var n,t=this.computeNode(e.operands[0]).value,a=null!==(n=e.table[t])&&void 0!==n?n:e.operands[1];if(!a)throw new Error("Lookup Fail with key ".concat(t));return this.computeNode(a)}},{key:"_match",value:function(e){var n=(0,d.Z)(e.operands,4),t=n[0],a=n[1],r=n[2],o=n[3],i=this.computeNode(t),u=this.computeNode(a),s=i.value===u.value,c=this.computeNode(s?r:o);return s&&"match"===e.emptyOn||!s&&"unmatch"===e.emptyOn?B(c.value):c}},{key:"_threshold",value:function(e){var n=(0,d.Z)(e.operands,4),t=n[0],a=n[1],r=n[2],o=n[3],i=this.computeNode(t),u=this.computeNode(a),s=i.value>=u.value?this.computeNode(r):this.computeNode(o);return i.value>=u.value?"ge"===e.emptyOn?B(s.value):s:"l"===e.emptyOn?B(s.value):s}},{key:"_data",value:function(n){var t=this.children.get(n.data);return t||(t=new e(n.data,n.reset?this.origin:this),this.children.set(n.data,t)),t.computeNode(n.operands[0])}},{key:"_compute",value:function(e){var n=this,t=e.operation,a=e.operands;return this._accumulate(t,a.map((function(e){return n.computeNode(e)})))}},{key:"_subscript",value:function(e){var n,t=this.computeNode(e.operands[0]),a=null!==(n=e.list[t.value])&&void 0!==n?n:NaN;return this._constant(a)}},{key:"_constant",value:function(e){return{info:{},value:e,empty:!1,mayNeedWrapping:!1,dependencies:new Set}}},{key:"_accumulate",value:function(e,n){var t,d,v,h;switch(e){case"add":case"mul":case"min":case"max":case"res":case"sum_frac":v=function(e){var n=new Set(e.map((function(e){return e.info.variant})));n.size>1&&n.delete(void 0);n.size>1&&n.delete("physical");return n.has("melt")?"melt":n.has("vaporize")?"vaporize":n.values().next().value}(n);break;default:(0,w.UT)(e)}switch(e){case"add":case"mul":case"min":case"max":var y=b.aj[e]([]);if(!(n=n.filter((function(e){return e.value!==y}))).length)return v?(0,p.Z)((0,p.Z)({},this._constant(y)),{},{info:{variant:v}}):this._constant(y)}var g=!1;switch(e){case"max":h=x(a||(a=(0,l.Z)(["Max( "," )"])),{operands:n});break;case"min":h=x(r||(r=(0,l.Z)(["Min( "," )"])),{operands:n});break;case"add":h=x(o||(o=(0,l.Z)(["",""])),{operands:n,separator:" + "});break;case"mul":h=x(i||(i=(0,l.Z)(["",""])),{operands:n,separator:" * ",shouldWrap:n.length>1});break;case"sum_frac":h=x(u||(u=(0,l.Z)([""," / ( "," )"])),{operands:[n[0]],shouldWrap:M},{operands:n,separator:" + "});break;case"res":var Z=n[0].value;Z<0?(h=x(s||(s=(0,l.Z)(["100% - "," / 2"])),{operands:n,shouldWrap:M}),g=!0):Z>=.75?h=x(c||(c=(0,l.Z)(["100% / ( "," * 4 + 100% )"])),{operands:n,shouldWrap:M}):(h=x(f||(f=(0,l.Z)(["100% - ",""])),{operands:n,shouldWrap:M}),g=!0);break;default:(0,w.UT)(e)}switch(e){case"add":case"mul":n.length<=1?g=null===(t=null===(d=n[0])||void 0===d?void 0:d.mayNeedWrapping)||void 0===t||t:"add"===e&&(g=!0)}var k=b.aj[e](n.map((function(e){return e.value}))),_=new Set((0,m.Z)(n.flatMap((function(e){return e.info.pivot&&e.assignment?[e.assignment].concat((0,m.Z)(e.dependencies)):(0,m.Z)(e.dependencies)}))));return{info:{variant:v},formula:h.display,empty:n.every((function(e){return e.empty})),value:k,mayNeedWrapping:g,dependencies:_}}}]),e}();function x(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var r=new Set,o=[];return e.forEach((function(e,n){o.push(e);var a=t[n];if(a){var i=a.operands,u=a.shouldWrap,s=a.separator,c=void 0===s?", ":s;i.forEach((function(e,n,t){var a;a=!e.info.pivot&&e.formula?e.formula:j(e),u&&e.mayNeedWrapping?(o.push("( "),o.push(a),o.push(" )")):o.push(a),n+1<t.length&&o.push(c),e.dependencies.forEach((function(e){return r.add(e)}))}))}})),{display:S(o),dependencies:(0,m.Z)(r)}}function j(e){var n=e.name,t=e.valueDisplay;return n?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{style:{fontSize:"85%"},children:n})," ",t]}):t}function S(e){return(0,_.jsx)(_.Fragment,{children:e.map((function(e,n){return(0,_.jsx)("span",{children:e},n)}))})}var O={info:{pivot:!0},value:NaN,empty:!1,dependencies:new Set,mayNeedWrapping:!1},E={info:{pivot:!0},value:void 0,empty:!1,dependencies:new Set,mayNeedWrapping:!1};function B(e){return{info:{},value:e,empty:!0,dependencies:new Set,mayNeedWrapping:!1}}}}]);
//# sourceMappingURL=36.a41700c4.chunk.js.map