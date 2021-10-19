(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[21],{280:function(e,t,n){"use strict";var a=n(10),c=Object(a.a)("span",{name:"SqBadge",slot:"Root"})((function(e){var t,n,a=e.theme,c=e.color,i=void 0===c?"primary":c;return{display:"inline-block",padding:".25em .4em",fontSize:"75%",fontWeight:700,lineHeight:1,textAlign:"center",whiteSpace:"nowrap",verticalAlign:"baseline",borderRadius:".25em",backgroundColor:null===(t=a.palette[i])||void 0===t?void 0:t.main,color:null===(n=a.palette[i])||void 0===n?void 0:n.contrastText}}));t.a=c},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(130),c=n(7),i=n(5),o=n(3),r=n(23),s=n(81),l=n(132),u=n(113),d=n(47),b=n(63),j=n(48),v=n(300),O=n(42),f=n(15),p=n(140),h=function e(){if(Object(r.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")};h.getElementalName=function(e){return b.a[e].name},h.getLevelString=function(e){return"".concat(e.level,"/").concat(d.b[e.ascension])},h.getTalentFieldValue=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return e[t]?Object(f.f)(e[t],n):a},h.hasBonusStats=function(e,t){return"finalHP"===t?h.hasBonusStats(e,"hp")||h.hasBonusStats(e,"hp_")||h.hasBonusStats(e,"characterHP"):"finalDEF"===t?h.hasBonusStats(e,"def")||h.hasBonusStats(e,"def_")||h.hasBonusStats(e,"characterDEF"):"finalATK"===t?h.hasBonusStats(e,"atk")||h.hasBonusStats(e,"atk_")||h.hasBonusStats(e,"characterATK"):!!(null===e||void 0===e?void 0:e.bonusStats)&&t in e.bonusStats},h.getStatValueWithBonus=function(e,t){var n,a,c,i,o;return O.c.includes(t)?null!==(n=null!==(a=null===(c=e.bonusStats)||void 0===c?void 0:c[t])&&void 0!==a?a:Object(O.a)(e)[t])&&void 0!==n?n:0:null!==(i=null===(o=e.bonusStats)||void 0===o?void 0:o[t])&&void 0!==i?i:0},h.calculateBuild=function(e,t,n,a,c){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,r=Object.fromEntries(Object.entries(e.equippedArtifacts).map((function(e){var n=Object(o.a)(e,2),a=n[0],c=n[1];return[a,t._getArt(c)]}))),s=h.createInitialStats(e,t,n,a);return s.mainStatAssumptionLevel=i,h.calculateBuildwithArtifact(s,r,c)},h.calculateBuildwithArtifact=function(e,t,n){var a,c=s.a.setToSlots(t),r=l.a.setEffectsStats(n,e,c),d=Object(f.d)(e);Object.values(t).forEach((function(e){e&&(d[e.mainStatKey]=(d[e.mainStatKey]||0)+s.a.mainStatValue(e.mainStatKey,e.rarity,Math.max(Math.min(d.mainStatAssumptionLevel,4*e.rarity),e.level)),e.substats.forEach((function(e){return e&&e.key&&(d[e.key]=(d[e.key]||0)+e.value)})))})),Object(O.b)(d,r),u.a.parseConditionalValues({artifact:null===d||void 0===d||null===(a=d.conditionalValues)||void 0===a?void 0:a.artifact},(function(e,t,n){var a,i,r=Object(o.a)(n,3),s=r[1],l=r[2];if(!(parseInt(l)>(null!==(a=null===c||void 0===c||null===(i=c[s])||void 0===i?void 0:i.length)&&void 0!==a?a:0))){var b=u.a.resolve(e,d,t).stats;Object(O.b)(d,b)}})),d.equippedArtifacts=Object.fromEntries(Object.entries(t).map((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return[n,null===a||void 0===a?void 0:a.id]}))),d.setToSlots=c;var b=Object(v.a)(d,null===d||void 0===d?void 0:d.modifiers),p=Object(j.c)(b,d),h=p.initialStats;return(0,p.formula)(h),Object(i.a)(Object(i.a)({},d),h)},h.createInitialStats=function(e,t,n,r){var s,l,d,b=e.key,j=e.bonusStats,v=void 0===j?{}:j,f=e.elementKey,h=e.level,m=e.ascension,x=e.hitMode,g=e.infusionAura,y=e.reactionMode,S=e.talent,k=e.constellation,w=e.equippedArtifacts,C=e.conditionalValues,A=void 0===C?{}:C,B=e.equippedWeapon,I=null!==(s=t._getWeapon(B))&&void 0!==s?s:Object(p.a)(n.weaponTypeKey),M=Object.fromEntries(Object.entries(v).filter((function(e){var t=Object(o.a)(e,1)[0];return O.c.includes(t)}))),V=Object.fromEntries(Object.entries(v).filter((function(e){var t=Object(o.a)(e,1)[0];return!O.c.includes(t)}))),T=Object(i.a)(Object(i.a)({},Object(O.a)(e)),M);T.characterKey=b,T.characterLevel=h,T.characterHP=n.getBase("hp",h,m),T.characterDEF=n.getBase("def",h,m),T.characterATK=n.getBase("atk",h,m),T.characterEle=null!==(l=null!==(d=n.elementKey)&&void 0!==d?d:f)&&void 0!==l?l:"anemo",T.hitMode=x,T.infusionAura=g,T.reactionMode=y,T.conditionalValues=A,T.weaponType=n.weaponTypeKey,T.tlvl=Object.fromEntries(Object.entries(null!==S&&void 0!==S?S:{}).map((function(e){var t=Object(o.a)(e,2);return[t[0],t[1]-1]}))),T.constellation=k,T.ascension=m,T.weapon={key:I.key,refineIndex:I.refinement-1},T.equippedArtifacts=w,Object(O.b)(T,V);var E=n.getSpecializedStat(m);if(E){var R=n.getSpecializedStatVal(m);Object(O.b)(T,Object(c.a)({},E,R))}for(var L in n.getTalentStatsAll(T,T.characterEle).forEach((function(e){return Object(O.b)(T,e)})),T.tlvl){var K;T.tlvl[L]+=null!==(K=T["".concat(L,"Boost")])&&void 0!==K?K:0}var F=r.getMainStatValue(I.level,I.ascension);T.weaponATK=F;var N=r.getSubStatKey();N&&Object(O.b)(T,Object(c.a)({},N,r.getSubStatValue(I.level,I.ascension))),Object(O.b)(T,r.stats(T));A.artifact;var P=A.weapon,_=Object(a.a)(A,["artifact","weapon"]);return u.a.parseConditionalValues(Object(i.a)(Object(i.a)({},I.key&&{weapon:Object(c.a)({},I.key,null===P||void 0===P?void 0:P[I.key])}),_),(function(e,t,n){if(("character"!==n[0]||"talents"!==n[3]||n[4]===f)&&u.a.canShow(e,T)){var a=u.a.resolve(e,T,t).stats;Object(O.b)(T,a)}})),T},h.getDisplayStatKeys=function(e,t){var n=t.characterSheet,a=t.weaponSheet,c=t.artifactSheets,r=e.characterEle,s=["finalHP","finalATK","finalDEF","eleMas","critRate_","critDMG_","heal_","enerRech_","".concat(r,"_dmg_")];n.isAutoElemental||s.push("physical_dmg_");var l=Object(f.d)(j.a[r]),d=n.weaponTypeKey;l.includes("shattered_hit")||"claymore"!==d||l.push("shattered_hit");var b={},v=n.getTalent(r),O=function(t,n){return t.forEach((function(t){var a;t.formula&&(null===t||void 0===t||null===(a=t.canShow)||void 0===a?void 0:a.call(t,e))&&(b[n]||(b[n]=[]),b[n].push(t.formula.keys))}))},p=function(t,n){if(t.conditional&&u.a.canShow(t.conditional,e)){var a=u.a.resolve(t.conditional,e,null).fields;a&&O(a,n)}t.fields&&O(t.fields,n)};v&&Object.entries(v.sheets).forEach((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1].sections;"normal"!==n&&"charged"!==n&&"plunging"!==n||(n="auto"),a.forEach((function(e){return p(e,"talentKey_".concat(n))}))}));var h="weapon_".concat(e.weapon.key);return a.document&&a.document.map((function(e){return p(e,h)})),e.setToSlots&&Object.entries(e.setToSlots).map((function(e){var t=Object(o.a)(e,2);return[t[0],t[1].length]})).forEach((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1],i=c[n];i&&Object.entries(i.setEffects).forEach((function(e){var t=Object(o.a)(e,2),c=t[0],i=t[1].document;a<parseInt(c)||i&&i.map((function(e){return p(e,"artifact_".concat(n,"_").concat(c))}))}))})),Object(i.a)(Object(i.a)({basicKeys:s},b),{},{transReactions:l})}},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(5),c=n(1),i=n(173),o=n(42);function r(e){var t=Object(c.useContext)(i.b);return Object(c.useCallback)((function(n){if(e)if("type"in n)switch(n.type){case"weapon":t.setWeaponLocation(n.id,e);break;case"editStats":var c,i=t._getChar(e),r=n.statKey,s=n.value,l=i.bonusStats;if(l[r]===s)return;if(o.c.includes(r))(null!==(c=Object(o.a)(i)[r])&&void 0!==c?c:0)===s?delete l[r]:l[r]=s;else s?l[r]=s:delete l[r];t.updateChar(Object(a.a)(Object(a.a)({},i),{},{bonusStats:l}))}else t.updateChar(Object(a.a)(Object(a.a)({},t._getChar(e)),n))}),[e,t])}},286:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p}));var a=n(51),c=n(17),i=n(79),o=n(220),r=n(349),s=n(10),l=n(269),u=n(1),d=n(111),b=n(282),j=n(292),v=n(32),O=n(0);function f(e){var t,n,s=e.field,l=Object(u.useContext)(d.a),f=l.newBuild,p=l.equippedBuild,h=l.compareBuild,m=f||p,x=Object(u.useMemo)((function(){var e;return!!m&&(null===s||void 0===s||null===(e=s.canShow)||void 0===e?void 0:e.call(s,m))}),[s,m]),g=(null===s||void 0===s?void 0:s.fixed)||0,y=Object(u.useMemo)((function(){if(s.value)return b.a.getTalentFieldValue(s,"value",m);if(s.formula){var e,t,n=null===(e=b.a.getTalentFieldValue(s,"formula",m))||void 0===e||null===(t=e[0])||void 0===t?void 0:t.call(e,m);if(h&&p&&"number"===typeof n){var a,c,i,o,r,l,u,d,j,f=s.value?s.value:null===(a=s.formula)||void 0===a||null===(c=a.call(s,p))||void 0===c||null===(i=c[0])||void 0===i?void 0:i.call(c,p);"function"===typeof f&&(f=parseInt(null===(o=f)||void 0===o||null===(r=o(p))||void 0===r||null===(l=r.toFixed)||void 0===l?void 0:l.call(r,g)));var x=n-f;n=Object(O.jsxs)("span",{children:[null!==(u=null===(d=f)||void 0===d?void 0:d.toFixed(g))&&void 0!==u?u:f,x?Object(O.jsxs)(v.a,{color:x>0?"success":"error",children:[" (",x>0?"+":"",(null===x||void 0===x||null===(j=x.toFixed)||void 0===j?void 0:j.call(x,g))||x,")"]}):""]})}return n}}),[h,g,p,s,m]),S=Object(u.useMemo)((function(){return b.a.getTalentFieldValue(s,"text",m)}),[s,m]),k=Object(u.useMemo)((function(){return b.a.getTalentFieldValue(s,"variant",m)}),[s,m]),w=Object(u.useMemo)((function(){var e=b.a.getTalentFieldValue(s,"formulaText",m);return e?Object(O.jsx)(j.a,{placement:"top",title:Object(O.jsx)(i.a,{children:e}),children:Object(O.jsx)(o.a,{component:"span",sx:{cursor:"help",ml:1},children:Object(O.jsx)(c.a,{icon:a.v})})}):null}),[s,m]),C=Object(u.useMemo)((function(){return b.a.getTalentFieldValue(s,"unit",m)}),[s,m]);return x?Object(O.jsxs)(r.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:S}),w]}),Object(O.jsxs)(i.a,{color:"".concat(k,".main"),children:[null!==(t=null===y||void 0===y||null===(n=y.toFixed)||void 0===n?void 0:n.call(y,g))&&void 0!==t?t:y,C]})]}):null}var p=Object(s.a)(l.a)((function(e){var t=e.theme;return{borderRadius:t.shape.borderRadius,overflow:"hidden",margin:0,"> .MuiListItem-root:nth-of-type(even)":{backgroundColor:t.palette.contentDark.main},"> .MuiListItem-root:nth-of-type(odd)":{backgroundColor:t.palette.contentDarker.main}}}))},290:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return b}));var a=n(5),c=n(3),i=n(130),o=n(10),r=n(394),s=n(1),l=n(0),u=Object(o.a)(r.c)((function(e){var t=e.theme;return{backgroundColor:t.palette.primary.main,transition:"all 0.5s ease","&:hover":{backgroundColor:t.palette.primary.dark},"&.Mui-focused":{backgroundColor:t.palette.primary.dark},"&.Mui-disabled":{backgroundColor:t.palette.primary.dark}}})),d=Object(o.a)("button",{shouldForwardProp:function(e){return!["fullWidth","disableRipple","disableFocusRipple","disableElevation"].includes(e)}})((function(e){var t=e.theme;return{backgroundColor:t.palette.primary.main,padding:0,overflow:"hidden",border:"none",borderRadius:t.shape.borderRadius,"& div":{width:"100%",height:"100%"},"&.MuiButtonGroup-grouped:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},"&.MuiButtonGroup-grouped:not(:first-of-type)":{borderTopLeftRadius:0,borderBottomLeftRadius:0}}}));function b(e){var t=e.value,n=e.onChange,o=e.disabled,r=void 0!==o&&o,d=e.float,b=void 0!==d&&d,j=Object(i.a)(e,["value","onChange","disabled","float"]),v=Object(s.useState)(""),O=Object(c.a)(v,2),f=O[0],p=O[1],h=Object(s.useCallback)((function(){if(""===f)return n(0);var e=b?parseFloat:parseInt;n(e(f))}),[n,f,b]);Object(s.useEffect)((function(){var e;return p(null!==(e=null===t||void 0===t?void 0:t.toString())&&void 0!==e?e:"")}),[t,p]);var m=Object(s.useCallback)((function(e){return p(e.target.value)}),[p]),x=Object(s.useCallback)((function(e){return"Enter"===e.key&&h()}),[h]);return Object(l.jsx)(u,Object(a.a)({value:f,"aria-label":"custom-input",type:"number",onChange:m,onBlur:h,disabled:r,onKeyDown:x},j))}},292:function(e,t,n){"use strict";var a=n(7),c=n(5),i=n(130),o=n(10),r=n(705),s=n(465),l=n(0),u=Object(o.a)((function(e){var t=e.className,n=Object(i.a)(e,["className"]);return Object(l.jsx)(r.a,Object(c.a)(Object(c.a)({},n),{},{arrow:!0,classes:{popper:t}}))}))((function(e){var t,n=e.theme;return t={},Object(a.a)(t,"& .".concat(s.a.arrow),{color:n.palette.common.black}),Object(a.a)(t,"& .".concat(s.a.tooltip),{backgroundColor:n.palette.common.black}),t}));t.a=u},294:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n(220),c=n(1),i=n(111),o=n(15),r=n(3),s=n(11),l=n(396),u=n(113),d=n(345),b=n(346),j=n(719),v=n(253),O=n(271),f=n(278),p=n(280),h=n(0);function m(e){var t=e.conditional,n=e.conditionalValue,a=e.setConditional,c=e.name,i=e.disabled,l=void 0!==i&&i,u=e.stats,m=Object(r.a)(n,2),x=m[0],g=void 0===x?0:x,y=m[1];if(!t)return c;if("states"in t){var S=y?t.states[y]:Object.values(t.states)[0],k=0===g?"Not Active":Object(h.jsxs)("span",{children:[S.name," ",Object(o.f)(S.maxStack,u)>1?": ".concat(g," stack").concat(g>1?"s":""):""]}),w=Object(h.jsx)(p.a,{color:0===g?"secondary":"success",children:k});return Object(h.jsxs)(f.a,{size:"small",title:Object(h.jsxs)("span",{children:[c," ",w]}),disabled:l,children:[Object(h.jsx)(j.a,{onClick:function(){return a([0])},selected:0===g,disabled:0===g,children:Object(h.jsx)("span",{children:"Not Active"})}),Object(h.jsx)(v.a,{}),Object.entries(t.states).flatMap((function(e,t){var n=Object(r.a)(e,2),c=n[0],i=n[1];return Object(s.a)(Array(i.maxStack).keys()).map((function(e){return e+1})).map((function(e,t){return Object(h.jsxs)(j.a,{onClick:function(){return a([e,c])},selected:y===c&&g===e,disabled:y===c&&g===e,children:[i.name,i.maxStack>1?": ".concat(e," stack").concat(e>1?"s":""):""]},c+t)}))}))]})}var C=Object(o.f)(t.maxStack,u);if(C>1){var A=Object(h.jsx)(p.a,{color:0===g?"secondary":"success",children:g>0?"".concat(g," stack").concat(g>1?"s":""):"Not Active"});return Object(h.jsxs)(f.a,{size:"small",title:Object(h.jsxs)("span",{children:[c," ",A]}),disabled:l,children:[Object(h.jsx)(j.a,{onClick:function(){return a([0])},selected:0===g,disabled:0===g,children:Object(h.jsx)("span",{children:"Not Active"})}),Object(h.jsx)(v.a,{}),Object(s.a)(Array(C).keys()).map((function(e){return e+1})).map((function(e){return Object(h.jsx)(j.a,{onClick:function(){return a([e])},selected:g===e,disabled:g===e,children:"".concat(e," stack").concat(e>1?"s":"")},e)}))]})}return 1===C?Object(h.jsx)(O.a,{size:"small",onClick:function(){return a([g?0:1])},disabled:l,startIcon:g?Object(h.jsx)(d.a,{}):Object(h.jsx)(b.a,{}),children:c}):null}var x=n(285),g=n(112),y=n(277),S=n(286);function k(e){var t=e.conditional,n=e.characterKey,a=Object(c.useContext)(i.a),d=a.newBuild,b=a.equippedBuild,j=Object(x.a)(n),v=d||b,O=Object(c.useMemo)((function(){return u.a.canShow(t,v)}),[t,v]),f=Object(c.useMemo)((function(){return O&&u.a.resolve(t,v,void 0)}),[O,t,v]),p=f.stats,k=void 0===p?{}:p,w=f.fields,C=void 0===w?[]:w,A=f.conditionalValue,B=Object(c.useMemo)((function(){return O&&[].concat(Object(s.a)(Object(g.a)(k,v)),Object(s.a)(C))}),[O,k,v,C]),I=Object(c.useCallback)((function(e){if(v){var n=Object(r.a)(e,1)[0];(void 0===n?0:n)?t.keys&&Object(o.k)(v.conditionalValues,t.keys,e):(Object(o.e)(v.conditionalValues,t.keys),Object(o.l)(v.conditionalValues)),j({conditionalValues:v.conditionalValues})}}),[t,v,j]);return O&&v?Object(h.jsxs)(y.a,{children:[Object(h.jsx)(l.a,{children:Object(h.jsx)(m,{conditional:t,conditionalValue:A,setConditional:I,name:t.name,stats:v})}),Object(h.jsx)(S.a,{sx:{m:0},children:B.map((function(e,t){return Object(h.jsx)(S.b,{field:e},t)}))})]}):null}function w(e){var t=e.sections,n=e.characterKey,r=Object(c.useContext)(i.a),s=r.newBuild,l=r.equippedBuild,u=s||l;return u?Object(h.jsx)("div",{children:null===t||void 0===t?void 0:t.map((function(e,t){var c,i;if(!e.canShow(u))return null;var r=Object(o.f)(e.text,u),s=null!==(c=e.fields)&&void 0!==c?c:[];return Object(h.jsxs)(a.a,{sx:{pb:-1,"& > *":{mb:1}},children:[Object(h.jsx)("div",{children:r}),s.length>0&&Object(h.jsx)(S.a,{children:null===s||void 0===s||null===(i=s.map)||void 0===i?void 0:i.call(s,(function(e,t){return Object(h.jsx)(S.b,{field:e},t)}))}),!!e.conditional&&Object(h.jsx)(k,{conditional:e.conditional,characterKey:n})]},"section"+t)}))}):null}},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(3),c=n(11),i=n(82),o=n(48);function r(e){var t=new Set;return e(new Proxy({},{get:function(e,n,a){t.add(n.toString())}})),Object(c.a)(t)}var s=Object.freeze(Object.fromEntries(Object.entries(o.b).map((function(e){var t=Object(a.a)(e,2);return[t[0],r(t[1])]}))));function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.keys(o.d),a=new Set,i=Object(c.a)(Array(o.f)).map((function(e){return new Set}));return n.forEach((function(n){return u(e,n,t,i,a)})),i.flatMap((function(e){return Object(c.a)(e)}))}function u(e,t,n,a,c){var r,l;c.has(t)||(c.add(t),null===(r=s[t])||void 0===r||r.forEach((function(t){return u(e,t,n,a,c)})),(null!==(l=n[t])&&void 0!==l?l:[]).forEach((function(t){return i.a.getCurrent(t,e)[1].forEach((function(t){return u(e,t,n,a,c)}))})),a[Object(o.e)(t)].add(t))}},322:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var a=n(7),c=n(11),i=n(5),o=n(3),r=n(342),s=n(343),l=n(356),u=n(396),d=n(264),b=n(675),j=n(271),v=n(719),O=n(253),f=n(220),p=n(79),h=n(1),m=n(283),x=n(111),g=n(134),y=n(277),S=n(276),k=n(291),w=n(284),C=(n(32),n(290)),A=n(294),B=n(278),I=n(97),M=n(287),V=n(280),T=n(281),E=n(308),R=n(47),L=n(173),K=n(289),F=n(131),N=n(15),P=n(309),_=n(135),G=n(286),W=n(112),z=n(0);function q(e){var t=e.title,n=e.statsVals,a=void 0===n?{}:n,c=e.stats;if(0===Object.keys(a).filter((function(e){return"modifiers"!==e})).length)return null;var i=Object(W.a)(a,c);return Object(z.jsxs)(y.a,{sx:{mb:1},children:[Object(z.jsx)(u.a,{children:Object(z.jsx)(p.a,{children:t})}),Object(z.jsx)(G.a,{children:i.map((function(e,t){return Object(z.jsx)(G.b,{field:e},t)}))})]})}function D(e){var t,n,l=e.weaponId,m=e.charData,y=e.footer,I=void 0!==y&&y,M=e.onClose,P=Object(h.useContext)(L.b),G=Object(K.a)(),W=Object(o.a)(G,2),D=W[0],J=W[1],U=Object(h.useContext)(x.a),Y=Object(h.useMemo)((function(){return D&&P._getWeapon(l)}),[l,D,P]),Q=Y.key,X=Y.level,Z=Y.refinement,$=Y.ascension,ee=Y.lock,te=Y,ne=te.location,ae=void 0===ne?"":ne,ce=te.id,ie=Object(F.a)(_.a.get(Q),[Q]),oe=null===ie||void 0===ie?void 0:ie.weaponType;Object(h.useEffect)((function(){return l?P.followWeapon(l,J):void 0}),[l,J,P]);var re=Object(h.useCallback)((function(e){P.updateWeapon(e,l)}),[l,P]),se=Object(h.useCallback)((function(e){e=Object(N.a)(e,1,90);var t=R.b.findIndex((function(t){return e<=t}));re({level:e,ascension:t})}),[re]),le=Object(h.useCallback)((function(){var e=R.b.findIndex((function(e){return 90!==X&&X===e}));re($===e?{ascension:$+1}:{ascension:e})}),[re,$,X]),ue=Object(i.a)({},m?null!==(t=m.newBuild)&&void 0!==t?t:m.equippedBuild:{weapon:{refineIndex:Z-1,level:X,ascension:$}}),de=Object(F.a)(ae?g.b.get(ae):void 0,[ae]),be=de?function(e){return e.weaponType===de.weaponTypeKey}:void 0,je=de&&de.weaponTypeKey,ve=Object(h.useCallback)((function(e){return ce&&P.setWeaponLocation(ce,e)}),[P,ce]),Oe=Object(h.useCallback)((function(e){return e.weaponTypeKey===(null===ie||void 0===ie?void 0:ie.weaponType)}),[ie]),fe=Object(h.useState)(!1),pe=Object(o.a)(fe,2),he=pe[0],me=pe[1],xe=$<2?null===ie||void 0===ie?void 0:ie.img:null===ie||void 0===ie?void 0:ie.imgAwaken;return Object(z.jsxs)(S.a,{children:[Object(z.jsx)(u.a,{sx:{py:1},children:Object(z.jsxs)(d.a,{container:!0,spacing:1,children:[Object(z.jsx)(d.a,{item:!0,flexGrow:1,children:Object(z.jsxs)(d.a,{container:!0,spacing:1,children:[Object(z.jsxs)(d.a,{item:!0,children:[Object(z.jsx)(E.a,{show:he,onHide:function(){return me(!1)},onSelect:function(e){return re({key:e})},filter:be,weaponFilter:je}),Object(z.jsxs)(b.a,{children:[Object(z.jsx)(j.a,{onClick:function(){return me(!0)},children:null!==(n=null===ie||void 0===ie?void 0:ie.name)&&void 0!==n?n:"Select a Weapon"}),Object(z.jsxs)(B.a,{title:"Refinement ".concat(Z),children:[Object(z.jsx)(v.a,{children:"Select Weapon Refinement"}),Object(z.jsx)(O.a,{}),Object(c.a)(Array(5).keys()).map((function(e){return Object(z.jsx)(v.a,{onClick:function(){return re({refinement:e+1})},selected:Z===e+1,disabled:Z===e+1,children:"Refinement ".concat(e+1)},e)}))]})]})]}),Object(z.jsx)(d.a,{item:!0,children:Object(z.jsxs)(b.a,{sx:{bgcolor:function(e){return e.palette.contentLight.main}},children:[Object(z.jsx)(C.a,{children:Object(z.jsx)(C.c,{onChange:se,value:X,startAdornment:"Lvl. ",inputProps:{min:1,max:90,sx:{textAlign:"center"}},sx:{width:"100%",height:"100%",pl:2}})}),Object(z.jsx)(j.a,{sx:{pl:1},disabled:!Object(R.a)(X),onClick:le,children:Object(z.jsxs)("strong",{children:["/ ",R.b[$]]})}),Object(z.jsx)(B.a,{title:"Select Level",children:R.c.map((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1],c=n===R.b[a]?"Lv. ".concat(n):"Lv. ".concat(n,"/").concat(R.b[a]),i=n===X&&a===$;return Object(z.jsx)(v.a,{selected:i,disabled:i,onClick:function(){return re({level:n,ascension:a})},children:c},"".concat(n,"/").concat(a))}))})]})}),Object(z.jsx)(d.a,{item:!0,children:Object(z.jsx)(j.a,{color:"error",onClick:function(){return ce&&P.updateWeapon({lock:!ee},ce)},startIcon:ee?Object(z.jsx)(r.a,{}):Object(z.jsx)(s.a,{}),children:ee?"Locked":"Unlocked"})})]})}),!!M&&Object(z.jsx)(d.a,{item:!0,children:Object(z.jsx)(w.a,{onClick:M})}),!!m&&P===L.c&&Object(z.jsx)(d.a,{item:!0,children:Object(z.jsx)(H,{weaponTypeKey:oe,onChangeId:function(e){return P.setWeaponLocation(e,m.character.key)}})})]})}),Object(z.jsx)(O.a,{}),Object(z.jsx)(u.a,{children:function(){if(!ie)return null;var e=ie.getSubStatKey(),t=ie.getMainStatValue(X,$),n=ie.getSubStatValue(X,$),c=ie.passiveName,i=ie.stats(ue),o=ie.document;return Object(z.jsxs)(f.a,{display:"flex",gap:{xs:1,md:1.5,lg:2},children:[Object(z.jsxs)(f.a,{sx:{maxWidth:256},flexShrink:1,minWidth:"25%",children:[Object(z.jsx)(f.a,{component:"img",src:xe,className:"grad-".concat(ie.rarity,"star"),sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}}),Object(z.jsx)(p.a,{children:Object(z.jsx)("small",{children:ie.description})})]}),Object(z.jsxs)(f.a,{sx:{mb:-1},flexGrow:1,children:[Object(z.jsxs)(p.a,{variant:"h6",children:[!1,ie.name," Lv. ",_.a.getLevelString(Y)," ",c&&Object(z.jsxs)(V.a,{color:"info",children:["Refinement ",Z]})]}),Object(z.jsx)(p.a,{children:Object(z.jsx)(T.a,{stars:ie.rarity})}),Object(z.jsx)(p.a,{variant:"subtitle1",children:c}),Object(z.jsx)(p.a,{gutterBottom:!0,children:c&&ie.passiveDescription(ue)}),ue&&Object(z.jsxs)(x.a.Provider,{value:m?U:{equippedBuild:ue,newBuild:void 0,compareBuild:!1,setCompareBuild:void 0},children:[Object(z.jsx)(q,{title:"Main Stats",statsVals:Object(a.a)({atk:t},e,e?n:void 0),stats:ue}),Object(z.jsx)(q,{title:"Bonus Stats",statsVals:i,stats:ue})]}),m&&o?function(){var e,t=m.equippedBuild,n=m.newBuild,a=null===(e=n||t)||void 0===e?void 0:e.characterKey;return!!a&&Object(z.jsx)(A.a,{sections:o,equippedBuild:t,newBuild:n,characterKey:a})}():null]})]})}()}),I&&ce&&Object(z.jsx)(u.a,{sx:{py:1},children:Object(z.jsxs)(d.a,{container:!0,children:[Object(z.jsx)(d.a,{item:!0,flexGrow:1,children:Object(z.jsx)(k.b,{noUnselect:!0,inventory:!0,value:ae,onChange:ve,filter:Oe})}),!!M&&Object(z.jsx)(d.a,{item:!0,children:Object(z.jsx)(w.a,{large:!0,onClick:M})})]})})]})}function H(e){var t=e.onChangeId,n=e.weaponTypeKey,a=Object(h.useContext)(L.b),c=Object(h.useState)(!1),i=Object(o.a)(c,2),r=i[0],s=i[1],b=function(){return s(!1)},v=function(e){t(e),b()},f=Object(F.a)(_.a.getAll(),[]),x=a.weapons.keys.filter((function(e){var t,c=a._getWeapon(e);return!!c&&(!n||n===(null===f||void 0===f||null===(t=f[c.key])||void 0===t?void 0:t.weaponType))}));return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(j.a,{color:"info",onClick:function(){return s(!0)},startIcon:Object(z.jsx)(l.a,{}),children:"SWAP WEAPON"}),Object(z.jsx)(M.a,{open:r,onClose:b,children:Object(z.jsxs)(y.a,{children:[Object(z.jsx)(u.a,{sx:{py:1},children:Object(z.jsxs)(d.a,{container:!0,children:[Object(z.jsx)(d.a,{item:!0,flexGrow:1,children:Object(z.jsxs)(p.a,{variant:"h6",children:[n?Object(z.jsx)(I.a,{src:m.a.weaponTypes[n]}):null," Swap Weapon"]})}),Object(z.jsx)(d.a,{item:!0,children:Object(z.jsx)(w.a,{onClick:b})})]})}),Object(z.jsx)(O.a,{}),Object(z.jsx)(u.a,{children:Object(z.jsx)(d.a,{container:!0,spacing:1,children:x.map((function(e){return Object(z.jsx)(d.a,{item:!0,xs:6,sm:6,md:4,lg:3,children:Object(z.jsx)(P.a,{weaponId:e,onClick:v})},e)}))})})]})})]})}},345:function(e,t,n){"use strict";var a=n(69),c=n(0);t.a=Object(a.a)(Object(c.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox")},346:function(e,t,n){"use strict";var a=n(69),c=n(0);t.a=Object(a.a)(Object(c.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank")},349:function(e,t,n){"use strict";var a=n(7),c=n(9),i=n(2),o=n(1),r=(n(4),n(8)),s=n(109),l=n(100),u=n(92),d=n(10),b=n(12),j=n(218),v=n(324),O=n(98),f=n(34),p=n(53),h=n(93),m=n(110);function x(e){return Object(h.a)("MuiListItem",e)}var g=Object(m.a)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),y=n(68);function S(e){return Object(h.a)("MuiListItemSecondaryAction",e)}Object(m.a)("MuiListItemSecondaryAction",["root","disableGutters"]);var k=n(0),w=["className"],C=Object(d.a)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return Object(i.a)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),A=o.forwardRef((function(e,t){var n=Object(b.a)({props:e,name:"MuiListItemSecondaryAction"}),a=n.className,l=Object(c.a)(n,w),u=o.useContext(p.a),d=Object(i.a)({},n,{disableGutters:u.disableGutters}),j=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return Object(s.a)(a,S,n)}(d);return Object(k.jsx)(C,Object(i.a)({className:Object(r.a)(j.root,a),ownerState:d,ref:t},l))}));A.muiName="ListItemSecondaryAction";var B=A,I=["className"],M=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],V=Object(d.a)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,c=e.ownerState;return Object(i.a)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!c.disablePadding&&Object(i.a)({paddingTop:8,paddingBottom:8},c.dense&&{paddingTop:4,paddingBottom:4},!c.disableGutters&&{paddingLeft:16,paddingRight:16},!!c.secondaryAction&&{paddingRight:48}),!!c.secondaryAction&&Object(a.a)({},"& > .".concat(y.a.root),{paddingRight:48}),(t={},Object(a.a)(t,"&.".concat(g.focusVisible),{backgroundColor:n.palette.action.focus}),Object(a.a)(t,"&.".concat(g.selected),Object(a.a)({backgroundColor:Object(u.a)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(g.focusVisible),{backgroundColor:Object(u.a)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),Object(a.a)(t,"&.".concat(g.disabled),{opacity:n.palette.action.disabledOpacity}),t),"flex-start"===c.alignItems&&{alignItems:"flex-start"},c.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},c.button&&Object(a.a)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(g.selected,":hover"),{backgroundColor:Object(u.a)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:Object(u.a)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),c.hasSecondaryAction&&{paddingRight:48})})),T=Object(d.a)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),E=o.forwardRef((function(e,t){var n=Object(b.a)({props:e,name:"MuiListItem"}),a=n.alignItems,u=void 0===a?"center":a,d=n.autoFocus,h=void 0!==d&&d,m=n.button,y=void 0!==m&&m,S=n.children,w=n.className,C=n.component,A=n.components,E=void 0===A?{}:A,R=n.componentsProps,L=void 0===R?{}:R,K=n.ContainerComponent,F=void 0===K?"li":K,N=n.ContainerProps,P=(N=void 0===N?{}:N).className,_=n.dense,G=void 0!==_&&_,W=n.disabled,z=void 0!==W&&W,q=n.disableGutters,D=void 0!==q&&q,H=n.disablePadding,J=void 0!==H&&H,U=n.divider,Y=void 0!==U&&U,Q=n.focusVisibleClassName,X=n.secondaryAction,Z=n.selected,$=void 0!==Z&&Z,ee=Object(c.a)(n.ContainerProps,I),te=Object(c.a)(n,M),ne=o.useContext(p.a),ae={dense:G||ne.dense||!1,alignItems:u,disableGutters:D},ce=o.useRef(null);Object(O.a)((function(){h&&ce.current&&ce.current.focus()}),[h]);var ie=o.Children.toArray(S),oe=ie.length&&Object(v.a)(ie[ie.length-1],["ListItemSecondaryAction"]),re=Object(i.a)({},n,{alignItems:u,autoFocus:h,button:y,dense:ae.dense,disabled:z,disableGutters:D,disablePadding:J,divider:Y,hasSecondaryAction:oe,selected:$}),se=function(e){var t=e.alignItems,n=e.button,a=e.classes,c=e.dense,i=e.disabled,o={root:["root",c&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",i&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return Object(s.a)(o,x,a)}(re),le=Object(f.a)(ce,t),ue=E.Root||V,de=L.root||{},be=Object(i.a)({className:Object(r.a)(se.root,de.className,w),disabled:z},te),je=C||"li";return y&&(be.component=C||"div",be.focusVisibleClassName=Object(r.a)(g.focusVisible,Q),je=j.a),oe?(je=be.component||C?je:"div","li"===F&&("li"===je?je="div":"li"===be.component&&(be.component="div")),Object(k.jsx)(p.a.Provider,{value:ae,children:Object(k.jsxs)(T,Object(i.a)({as:F,className:Object(r.a)(se.container,P),ref:le,ownerState:re},ee,{children:[Object(k.jsx)(ue,Object(i.a)({},de,!Object(l.a)(ue)&&{as:je,ownerState:Object(i.a)({},re,de.ownerState)},be,{children:ie})),ie.pop()]}))})):Object(k.jsx)(p.a.Provider,{value:ae,children:Object(k.jsxs)(ue,Object(i.a)({},de,{as:je,ref:le,ownerState:re},!Object(l.a)(ue)&&{ownerState:Object(i.a)({},re,de.ownerState)},be,{children:[ie,X&&Object(k.jsx)(B,{children:X})]}))})}));t.a=E},356:function(e,t,n){"use strict";var a=n(69),c=n(0);t.a=Object(a.a)(Object(c.jsx)("path",{d:"M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"}),"SwapHoriz")}}]);
//# sourceMappingURL=21.91f8c3b3.chunk.js.map