(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[26],{276:function(e,t,a){"use strict";var n=a(10),r=a(395),i=Object(n.a)(r.a)((function(e){return{backgroundColor:e.theme.palette.contentLight.main}}));t.a=i},277:function(e,t,a){"use strict";var n=a(10),r=a(395),i=Object(n.a)(r.a)((function(e){return{backgroundColor:e.theme.palette.contentDark.main}}));t.a=i},278:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(5),r=a(3),i=a(130),c=a(699),s=a(271),o=a(169),l=a(673),d=a(1),u=a(0);function j(e){var t=e.title,a=e.children,j=e.id,b=void 0===j?"dropdownbtn":j,h=Object(i.a)(e,["title","children","id"]),O=Object(d.useState)(null),f=Object(r.a)(O,2),p=f[0],v=f[1],x=Boolean(p),g=Object(d.useCallback)((function(e){return v(e.currentTarget)}),[v]),m=Object(d.useCallback)((function(){return v(null)}),[v]);return Object(u.jsxs)(d.Suspense,{fallback:Object(u.jsx)(s.a,Object(n.a)(Object(n.a)({endIcon:Object(u.jsx)(c.a,{})},h),{},{children:Object(u.jsx)(o.a,{width:50})})),children:[Object(u.jsx)(s.a,Object(n.a)(Object(n.a)({},h),{},{id:b,"aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":x?"true":void 0,onClick:g,endIcon:Object(u.jsx)(c.a,{}),children:t})),Object(u.jsx)(l.a,{id:"basic-menu",anchorEl:p,open:x,onClose:m,MenuListProps:{"aria-labelledby":b},onClick:m,children:Object(u.jsx)(d.Suspense,{fallback:Object(u.jsx)(o.a,{width:"100%",height:"1000"}),children:a})})]})}},280:function(e,t,a){"use strict";var n=a(10),r=Object(n.a)("span",{name:"SqBadge",slot:"Root"})((function(e){var t,a,n=e.theme,r=e.color,i=void 0===r?"primary":r;return{display:"inline-block",padding:".25em .4em",fontSize:"75%",fontWeight:700,lineHeight:1,textAlign:"center",whiteSpace:"nowrap",verticalAlign:"baseline",borderRadius:".25em",backgroundColor:null===(t=n.palette[i])||void 0===t?void 0:t.main,color:null===(a=n.palette[i])||void 0===a?void 0:a.contrastText}}));t.a=r},289:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(3),r=a(1);function i(){var e=Object(r.useState)({}),t=Object(n.a)(e,2),a=t[0],i=t[1];return[a,Object(r.useCallback)((function(){return i({})}),[])]}},338:function(e,t,a){"use strict";var n=a(7),r=a(9),i=a(2),c=a(1),s=(a(4),a(8)),o=a(109),l=a(92),d=a(10),u=a(12),j=a(13),b=a(267),h=a(93),O=a(110);function f(e){return Object(h.a)("MuiAlert",e)}var p,v=Object(O.a)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),x=a(272),g=a(69),m=a(0),y=Object(g.a)(Object(m.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),w=Object(g.a)(Object(m.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),C=Object(g.a)(Object(m.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),S=Object(g.a)(Object(m.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),k=Object(g.a)(Object(m.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),D=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],_=Object(d.a)(b.a,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["".concat(a.variant).concat(Object(j.a)(a.color||a.severity))]]}})((function(e){var t=e.theme,a=e.ownerState,r="light"===t.palette.mode?l.b:l.e,c="light"===t.palette.mode?l.e:l.b,s=a.color||a.severity;return Object(i.a)({},t.typography.body2,{borderRadius:t.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&"standard"===a.variant&&Object(n.a)({color:r(t.palette[s].light,.6),backgroundColor:c(t.palette[s].light,.9)},"& .".concat(v.icon),{color:"dark"===t.palette.mode?t.palette[s].main:t.palette[s].light}),s&&"outlined"===a.variant&&Object(n.a)({color:r(t.palette[s].light,.6),border:"1px solid ".concat(t.palette[s].light)},"& .".concat(v.icon),{color:"dark"===t.palette.mode?t.palette[s].main:t.palette[s].light}),s&&"filled"===a.variant&&{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:"dark"===t.palette.mode?t.palette[s].dark:t.palette[s].main})})),M=Object(d.a)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),K=Object(d.a)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),z=Object(d.a)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),A={success:Object(m.jsx)(y,{fontSize:"inherit"}),warning:Object(m.jsx)(w,{fontSize:"inherit"}),error:Object(m.jsx)(C,{fontSize:"inherit"}),info:Object(m.jsx)(S,{fontSize:"inherit"})},W=c.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiAlert"}),n=a.action,c=a.children,l=a.className,d=a.closeText,b=void 0===d?"Close":d,h=a.color,O=a.icon,v=a.iconMapping,g=void 0===v?A:v,y=a.onClose,w=a.role,C=void 0===w?"alert":w,S=a.severity,W=void 0===S?"success":S,F=a.variant,B=void 0===F?"standard":F,R=Object(r.a)(a,D),I=Object(i.a)({},a,{color:h,severity:W,variant:B}),T=function(e){var t=e.variant,a=e.color,n=e.severity,r=e.classes,i={root:["root","".concat(t).concat(Object(j.a)(a||n)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return Object(o.a)(i,f,r)}(I);return Object(m.jsxs)(_,Object(i.a)({role:C,square:!0,elevation:0,ownerState:I,className:Object(s.a)(T.root,l),ref:t},R,{children:[!1!==O?Object(m.jsx)(M,{ownerState:I,className:T.icon,children:O||g[W]||A[W]}):null,Object(m.jsx)(K,{ownerState:I,className:T.message,children:c}),null!=n?Object(m.jsx)(z,{className:T.action,children:n}):null,null==n&&y?Object(m.jsx)(z,{ownerState:I,className:T.action,children:Object(m.jsx)(x.a,{size:"small","aria-label":b,title:b,color:"inherit",onClick:y,children:p||(p=Object(m.jsx)(k,{fontSize:"small"}))})}):null]}))}));t.a=W},711:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return J})),a.d(t,"LanguageDropdown",(function(){return Q}));var n=a(52),r=a.n(n),i=a(99),c=a(3),s=a(51),o=a(17),l=a(69),d=a(0),u=Object(l.a)(Object(d.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download"),j=Object(l.a)(Object(d.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload"),b=a(396),h=a(79),O=a(253),f=a(719),p=a(264),v=a(271),x=a(10),g=a(220),m=a(338),y=a(1),w=a(83),C=a(129),S=a(94),k=a(277),D=a(276),_=a(278),M=a(280),K=a(173),z=a(136),A=a(38);var W=a(11),F=a(21),B=a(148),R=a(25),I="Genshin Optimizer";function T(e,t){switch(e.version){case 1:return function(e,t){var a=e.source,n=new z.a(t.storage),r={type:"GOOD",storage:n,source:a};e.artifacts&&function(){var a,i={total:0,invalid:[],new:0,updated:0,unchanged:0,removed:0},c=e.artifacts.flatMap((function(e){var t=Object(R.a)(e);return t||i.invalid.push(e),t?[t]:[]})),s=c.some((function(e){return e.location})),o=new Set(t._getArts().map((function(e){return e.id}))),l=Object(F.a)(c);try{for(l.s();!(a=l.n()).done;){var d,u=a.value,j=t.findDuplicates(u),b=j.duplicated,h=j.upgraded;b=b.filter((function(e){return o.has(e.id)})),h=h.filter((function(e){return o.has(e.id)}));var O=null!==(d=b[0])&&void 0!==d?d:h[0];if(O){for(var f in o.delete(O.id),O)f in u||"location"===f||(u[f]=O[f]);s||(u.location=O.location)}b.length?i.unchanged++:h.length?i.updated++:i.new++}}catch(p){l.e(p)}finally{l.f()}i.total=e.artifacts.length,i.removed=o.size,r.artifacts=i,n.removeForKeys((function(e){return e.startsWith("artifact_")})),c.forEach((function(e,t){return n.set("artifact_".concat(t),e)}))}();e.weapons&&function(){var a,i={total:0,invalid:[],new:0,updated:0,unchanged:0,removed:0},c=e.weapons.flatMap((function(e){var t=Object(R.c)(e);return t||i.invalid.push(e),t?[t]:[]})),s=c.some((function(e){return e.location})),o=new Set(t._getWeapons().map((function(e){return e.id}))),l=Object(F.a)(c);try{for(l.s();!(a=l.n()).done;){var d,u=a.value,j=t.findDuplicateWeapons(u),b=j.duplicated,h=j.upgraded;b=b.filter((function(e){return o.has(e.id)})),h=h.filter((function(e){return o.has(e.id)}));var O=null!==(d=b[0])&&void 0!==d?d:h[0];if(O){for(var f in o.delete(O.id),O)f in u||"location"===f||(u[f]=O[f]);s||(u.location=O.location)}b.length?i.unchanged++:h.length?i.updated++:i.new++}}catch(p){l.e(p)}finally{l.f()}i.total=e.weapons.length,i.removed=o.size,r.weapons=i,n.removeForKeys((function(e){return e.startsWith("weapon_")})),c.forEach((function(e,t){return n.set("weapon_".concat(t),e)}))}();if(e.characters){var i,c=[],s=e.characters.flatMap((function(e){var t=Object(R.b)(e);return t||c.push(e),t?[t]:[]})),o=new Set(s.map((function(e){return e.key}))),l=new Set(t._getCharKeys()),d=Object(F.a)(s);try{for(d.s();!(i=d.n()).done;){var u=i.value,j=t._getChar(u.key);if(j)for(var b in j)b in u||(u[b]=j[b])}}catch(w){d.e(w)}finally{d.f()}r.characters={total:e.characters.length,new:Object(W.a)(o).filter((function(e){return!l.has(e)})).length,updated:Object(W.a)(o).filter((function(e){return l.has(e)})).length,removed:Object(W.a)(l).filter((function(e){return!o.has(e)})).length,unchanged:0,invalid:c},n.removeForKeys((function(e){return e.startsWith("char_")})),s.forEach((function(e){return n.set("char_".concat(e.key),e)}))}var h,O=Object(F.a)(n.keys);try{for(O.s();!(h=O.n()).done;){var f=h.value;if(f.startsWith("char_")){var p=n.get(f);p.buildSettings&&(p.buildSettings.builds=[],p.buildSettings.buildDate=0,n.set(f,p))}}}catch(w){O.e(w)}finally{O.f()}if(a===I){var v=e,x=v.dbVersion,g=v.artifactDisplay,m=v.characterDisplay,y=v.buildsDisplay;if(x<8)return;Object(A.b)(n,x),g&&n.set("ArtifactDisplay.state",g),m&&n.set("CharacterDisplay.state",m),y&&n.set("BuildsDisplay.state",y)}else Object(A.b)(n,8);return new K.a(n),r}(e,t)}}function G(e){var t,a,n;return{format:"GOOD",dbVersion:B.a,source:I,version:1,characters:e.entries.filter((function(e){return Object(c.a)(e,1)[0].startsWith("char_")})).map((function(e){var t=Object(c.a)(e,2),a=(t[0],t[1]),n=JSON.parse(a);return n.buildSettings&&(n.buildSettings.builds=[],n.buildSettings.buildDate=0),n})),artifacts:e.entries.filter((function(e){return Object(c.a)(e,1)[0].startsWith("artifact_")})).map((function(e){var t=Object(c.a)(e,2),a=(t[0],t[1]);return JSON.parse(a)})),weapons:e.entries.filter((function(e){return Object(c.a)(e,1)[0].startsWith("weapon_")})).map((function(e){var t=Object(c.a)(e,2),a=(t[0],t[1]);return JSON.parse(a)})),artifactDisplay:null!==(t=e.get("ArtifactDisplay.state"))&&void 0!==t?t:{},characterDisplay:null!==(a=e.get("CharacterDisplay.state"))&&void 0!==a?a:{},buildsDisplay:null!==(n=e.get("BuildsDisplay.state"))&&void 0!==n?n:{}}}var L={1:function(e){var t=[],a=[];for(var n in e)if(n in P){var r,i=Object(F.a)(e[n]);try{for(i.s();!(r=i.n()).done;){var c=r.value,s=c.setName,o=c.star,l=c.level,d=c.position,u=c.mainTag,j={setKey:N[s],rarity:o,level:l,slotKey:P[d],mainStatKey:E[u.name],substats:c.normalTags.map((function(e){var t=e.name,a=e.value,n=H[t];return{key:n,value:(null===n||void 0===n?void 0:n.endsWith("_"))?Math.round(1e3*a)/10:a}}))},b=Object(R.a)(j);b?a.push(b):t.push(j)}}catch(h){i.e(h)}finally{i.f()}}return{artifacts:a,invalid:t}}};var P={flower:"flower",feather:"plume",sand:"sands",cup:"goblet",head:"circlet"},N={adventurer:"Adventurer",archaicPetra:"ArchaicPetra",berserker:"Berserker",blizzardStrayer:"BlizzardStrayer",bloodstainedChivalry:"BloodstainedChivalry",braveHeart:"BraveHeart",crimsonWitch:"CrimsonWitchOfFlames",defenderWill:"DefendersWill",gambler:"Gambler",gladiatorFinale:"GladiatorsFinale",heartOfDepth:"HeartOfDepth",instructor:"Instructor",lavaWalker:"Lavawalker",luckyDog:"LuckyDog",maidenBeloved:"MaidenBeloved",martialArtist:"MartialArtist",noblesseOblige:"NoblesseOblige",prayersForDestiny:"PrayersForDestiny",prayersForIllumination:"PrayersForIllumination",prayersForWisdom:"PrayersForWisdom",prayersToSpringtime:"PrayersToSpringtime",resolutionOfSojourner:"ResolutionOfSojourner",retracingBolide:"RetracingBolide",scholar:"Scholar",exile:"TheExile",thunderingFury:"ThunderingFury",thunderSmoother:"Thundersoother",tinyMiracle:"TinyMiracle",travelingDoctor:"TravelingDoctor",viridescentVenerer:"ViridescentVenerer",wandererTroupe:"WanderersTroupe",tenacityOfTheMillelith:"TenacityOfTheMillelith",paleFlame:"PaleFlame",emblemOfSeveredFate:"EmblemOfSeveredFate",shimenawaReminiscence:"ShimenawasReminiscence"},E={cureEffect:"heal_",lifeStatic:"hp",lifePercentage:"hp_",attackStatic:"atk",attackPercentage:"atk_",defendPercentage:"def_",critical:"critRate_",criticalDamage:"critDMG_",elementalMastery:"eleMas",recharge:"enerRech_",thunderBonus:"electro_dmg_",fireBonus:"pyro_dmg_",waterBonus:"hydro_dmg_",iceBonus:"cryo_dmg_",windBonus:"anemo_dmg_",rockBonus:"geo_dmg_",physicalBonus:"physical_dmg_"},H={lifeStatic:"hp",lifePercentage:"hp_",attackStatic:"atk",attackPercentage:"atk_",defendStatic:"def",defendPercentage:"def_",critical:"critRate_",criticalDamage:"critDMG_",elementalMastery:"eleMas",recharge:"enerRech_"},U=a(181),V=a(289);function J(){var e=Object(C.a)(["settings"]).t,t=Object(V.a)(),a=Object(c.a)(t,2)[1];return w.a.pageview("/setting"),Object(d.jsxs)(k.a,{sx:{my:1},children:[Object(d.jsx)(b.a,{sx:{py:1},children:Object(d.jsx)(h.a,{variant:"subtitle1",children:Object(d.jsx)(S.a,{t:e,i18nKey:"title"})})}),Object(d.jsx)(O.a,{}),Object(d.jsxs)(b.a,{sx:{"> div:nth-last-of-type(n+2)":{mb:2}},children:[Object(d.jsx)(q,{}),Object(d.jsx)(Y,{forceUpdate:a}),Object(d.jsx)(ee,{forceUpdate:a})]})]})}function q(){var e=Object(C.a)().t;return Object(d.jsxs)(D.a,{children:[Object(d.jsxs)(b.a,{sx:{py:1},children:[e("settings:languageCard.selectLanguage")," ",Object(d.jsx)(M.a,{color:"warning",children:e("ui:underConstruction")})]}),Object(d.jsx)(O.a,{}),Object(d.jsx)(b.a,{children:Object(d.jsx)(Q,{})})]})}var Z={chs:"\u4e2d\u6587 \u6b63\u4f53\u5b57",cht:"\u4e2d\u6587 \u7e41\u9ad4\u5b57",de:"Deutsch",en:"English",es:"espa\xf1ol",fr:"fran\xe7ais",id:"Bahasa Indonesia",ja:"\u65e5\u672c\u8a9e",ko:"\ud55c\uad6d\uc5b4",pt:"Portugu\xeas",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",th:"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",vi:"Ti\u1ebfng Vi\u1ec7t"};function Q(){var e=Object(C.a)(["ui","settings"]),t=e.t,a=e.i18n,n=function(e){return function(){return a.changeLanguage(e)}},r=a.languages[0];return Object(d.jsx)(_.a,{fullWidth:!0,title:t("settings:languageCard.languageFormat",{language:t("languages:".concat(r))}),children:U.a.map((function(e){return Object(d.jsxs)(f.a,{selected:r===e,disabled:r===e,onClick:n(e),children:[Object(d.jsx)(S.a,{i18nKey:"languages:".concat(e)}),e!==r?" (".concat(Z[e],")"):""]},e)}))})}function X(){navigator.clipboard.writeText(JSON.stringify(G(z.b))).then((function(){return alert("Copied database to clipboard.")})).catch(console.error)}function Y(e){var t=e.forceUpdate,a=Object(y.useContext)(K.b),n=Object(C.a)(["settings"]).t,r=a._getCharKeys().length,i=a._getArts().length,c=a._getWeapons().length,l=Boolean(r||i);return Object(d.jsxs)(D.a,{children:[Object(d.jsx)(b.a,{sx:{py:1},children:Object(d.jsx)(h.a,{variant:"subtitle1",children:Object(d.jsx)(S.a,{t:n,i18nKey:"downloadCard.databaseDownload"})})}),Object(d.jsx)(O.a,{}),Object(d.jsxs)(b.a,{children:[Object(d.jsxs)(p.a,{container:!0,mb:2,spacing:2,children:[Object(d.jsx)(p.a,{item:!0,xs:6,md:4,children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(S.a,{t:n,i18nKey:"count.chars"})," ",r]})}),Object(d.jsx)(p.a,{item:!0,xs:6,md:4,children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(S.a,{t:n,i18nKey:"count.arts"})," ",i]})}),Object(d.jsx)(p.a,{item:!0,xs:6,md:4,children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(S.a,{t:n,i18nKey:"count.weapons"})," ",c]})})]}),Object(d.jsx)(h.a,{variant:"caption",children:Object(d.jsx)(S.a,{t:n,i18nKey:"downloadCard.databaseDisclaimer"})})]}),Object(d.jsx)(O.a,{}),Object(d.jsx)(b.a,{sx:{py:1},children:Object(d.jsxs)(p.a,{container:!0,spacing:2,children:[Object(d.jsx)(p.a,{item:!0,children:Object(d.jsx)(v.a,{disabled:!l,onClick:function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data.json",a="application/json;charset=utf-8",n=document.createElement("a");n.download=t,n.href="data:".concat(a,",").concat(encodeURIComponent(e)),n.target="_blank",document.body.appendChild(n),n.click(),document.body.removeChild(n)}(JSON.stringify(G(z.b)))},startIcon:Object(d.jsx)(u,{}),children:Object(d.jsx)(S.a,{t:n,i18nKey:"downloadCard.button.download"})})}),Object(d.jsx)(p.a,{item:!0,flexGrow:1,children:Object(d.jsx)(v.a,{disabled:!l,color:"info",onClick:X,startIcon:Object(d.jsx)(o.a,{icon:s.h}),children:Object(d.jsx)(S.a,{t:n,i18nKey:"downloadCard.button.copy"})})}),Object(d.jsx)(p.a,{item:!0,children:Object(d.jsx)(v.a,{disabled:!l,color:"error",onClick:function(){!function(e,t){window.confirm(e("uploadCard.goUpload.deleteDatabasePrompt"))&&(z.b.clear(),t.reloadStorage())}(n,a),t()},startIcon:Object(d.jsx)(o.a,{icon:s.D}),children:Object(d.jsx)(S.a,{t:n,i18nKey:"downloadCard.button.delete"})})})]})})]})}var $=Object(x.a)("input")({display:"none"});function ee(e){var t,a=e.forceUpdate,n=Object(y.useContext)(K.b),l=Object(C.a)("settings").t,u=Object(y.useState)(""),O=Object(c.a)(u,2),f=O[0],x=O[1],m=Object(y.useState)(""),w=Object(c.a)(m,2),_=w[0],M=w[1],F=Object(y.useState)(""),B=Object(c.a)(F,2),R=B[0],I=B[1],G=Object(y.useMemo)((function(){if(f){var e;try{if("object"!==typeof(e=JSON.parse(f)))return void I("uploadCard.error.jsonParse")}catch(i){return void I("uploadCard.error.jsonParse")}if("1"===e.version&&["flower","feather","sand","cup","head"].some((function(t){return Object.keys(e).includes(t)}))){var t=function(e,t){var a,n,r,i=null!==(a=e.version)&&void 0!==a?a:"1",c=null===(n=L[i])||void 0===n?void 0:n.call(L,e);if(c){var s=c.artifacts,o=c.invalid,l=T({format:"GOOD",source:"mona-uranai",version:1,artifacts:s},t);return null===l||void 0===l||(r=l.artifacts.invalid).push.apply(r,Object(W.a)(o)),l}}(e,n);return t||void I("uploadCard.error.monaInvalid")}if("version"in e&&"characterDatabase"in e&&"artifactDatabase"in e){var a=function(e){var t=new z.a,a=e,n=a.version,r=a.characterDatabase,i=a.artifactDatabase,s=a.artifactDisplay,o=a.characterDisplay,l=a.buildsDisplay;if(n&&r&&i){r&&Object.entries(r).forEach((function(e){var a=Object(c.a)(e,2),n=a[0],r=a[1];return t.set("char_".concat(n),r)})),i&&Object.entries(i).forEach((function(e){var a=Object(c.a)(e,2),n=a[0],r=a[1];return t.set(n,r)})),n&&Object(A.b)(t,n),s&&t.set("ArtifactDisplay.state",s),o&&t.set("CharacterDisplay.state",o),l&&t.set("BuildsDisplay.state",l);var d=new K.a(t);return{type:"GO",storage:t,charCount:d.chars.keys.length,artCount:d.arts.keys.length}}}(e);return a||void I("uploadCard.error.goInvalid")}if("GOOD"===e.format){var r=T(e,n);return r||void I("uploadCard.error.goInvalid")}I("uploadCard.error.unknown")}}),[f,n]),P=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.files[0],t.target.value=null,a&&M(a.name),(n=new FileReader).onload=function(){return x(n.result)},n.readAsText(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(D.a,{children:[Object(d.jsx)(b.a,{sx:{py:1},children:Object(d.jsx)(S.a,{t:l,i18nKey:"settings:uploadCard.title"})}),Object(d.jsxs)(b.a,{children:[Object(d.jsxs)(p.a,{container:!0,spacing:2,sx:{mb:1},children:[Object(d.jsx)(p.a,{item:!0,children:Object(d.jsxs)("label",{htmlFor:"icon-button-file",children:[Object(d.jsx)($,{accept:".json",id:"icon-button-file",type:"file",onChange:P}),Object(d.jsx)(v.a,{component:"span",startIcon:Object(d.jsx)(j,{}),children:"Upload"})]})}),Object(d.jsx)(p.a,{item:!0,flexGrow:1,children:Object(d.jsx)(k.a,{sx:{px:2,py:1},children:Object(d.jsx)(h.a,{children:_?Object(d.jsxs)("span",{children:[Object(d.jsx)(o.a,{icon:s.n})," ",_]}):Object(d.jsxs)("span",{children:[Object(d.jsx)(o.a,{icon:s.a})," ",Object(d.jsx)(S.a,{t:l,i18nKey:"settings:uploadCard.hint"})]})})})})]}),Object(d.jsx)(h.a,{gutterBottom:!0,variant:"caption",children:Object(d.jsx)(S.a,{t:l,i18nKey:"settings:uploadCard.hintPaste"})}),Object(d.jsx)(g.a,{component:"textarea",sx:{width:"100%",fontFamily:"monospace",minHeight:"10em",mb:2,resize:"vertical"},value:f,onChange:function(e){return x(e.target.value)}}),null!==(t=te(G))&&void 0!==t?t:R]}),ae(G,(function(){x(""),M(""),a()}))]})}function te(e){switch(null===e||void 0===e?void 0:e.type){case"GO":return Object(d.jsx)(ie,{data:e});case"GOOD":return Object(d.jsx)(ne,{data:e})}}function ae(e,t){switch(null===e||void 0===e?void 0:e.type){case"GO":case"GOOD":return Object(d.jsx)(ce,{data:e,reset:t})}}function ne(e){var t=e.data,a=t.source,n=t.artifacts,r=t.characters,i=t.weapons,c=(e.data,Object(C.a)("settings").t);return Object(d.jsxs)(k.a,{children:[Object(d.jsx)(b.a,{sx:{py:1},children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(S.a,{t:c,i18nKey:"uploadCard.dbSource"}),Object(d.jsxs)("strong",{children:[" ",a]})]})}),Object(d.jsx)(O.a,{}),Object(d.jsx)(b.a,{children:Object(d.jsxs)(p.a,{container:!0,spacing:2,children:[Object(d.jsx)(p.a,{item:!0,flexGrow:1,children:Object(d.jsx)(re,{result:n,type:"arts"})}),Object(d.jsx)(p.a,{item:!0,flexGrow:1,children:Object(d.jsx)(re,{result:i,type:"weapons"})}),Object(d.jsx)(p.a,{item:!0,flexGrow:1,children:Object(d.jsx)(re,{result:r,type:"chars"})})]})})]})}function re(e){var t,a,n=e.result,r=e.type,i=Object(C.a)("settings").t;return n?Object(d.jsxs)(D.a,{children:[Object(d.jsx)(b.a,{sx:{py:1},children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(S.a,{t:i,i18nKey:"count.".concat(r)})," ",null!==(t=n.total)&&void 0!==t?t:0]})}),Object(d.jsx)(O.a,{}),Object(d.jsxs)(b.a,{children:[Object(d.jsxs)(h.a,{children:[Object(d.jsx)(S.a,{t:i,i18nKey:"count.new"})," ",Object(d.jsx)("strong",{children:n.new})," / ",n.total]}),Object(d.jsxs)(h.a,{children:[Object(d.jsx)(S.a,{t:i,i18nKey:"count.updated"})," ",Object(d.jsx)("strong",{children:n.updated})," / ",n.total]}),Object(d.jsxs)(h.a,{children:[Object(d.jsx)(S.a,{t:i,i18nKey:"count.unchanged"})," ",Object(d.jsx)("strong",{children:n.unchanged})," / ",n.total]}),Object(d.jsxs)(h.a,{color:"warning.main",children:[Object(d.jsx)(S.a,{t:i,i18nKey:"count.removed"})," ",Object(d.jsx)("strong",{children:n.removed})]}),!!(null===(a=n.invalid)||void 0===a?void 0:a.length)&&Object(d.jsxs)("div",{children:[Object(d.jsxs)(h.a,{color:"error.main",children:[Object(d.jsx)(S.a,{t:i,i18nKey:"count.invalid"})," ",Object(d.jsx)("strong",{children:n.invalid.length})," / ",n.total]}),Object(d.jsx)(g.a,{component:"textarea",sx:{width:"100%",fontFamily:"monospace",minHeight:"10em",resize:"vertical"},value:JSON.stringify(n.invalid,void 0,2),disabled:!0})]})]})]}):null}function ie(e){var t=e.data,a=t.charCount,n=t.artCount,r=Object(C.a)("settings").t;return Object(d.jsxs)(k.a,{children:[Object(d.jsx)(b.a,{sx:{py:1},children:Object(d.jsx)(S.a,{t:r,i18nKey:"uploadCard.goUpload.title"})}),Object(d.jsx)(O.a,{}),Object(d.jsx)(b.a,{children:Object(d.jsxs)(p.a,{container:!0,spacing:1,children:[Object(d.jsxs)(p.a,{item:!0,xs:12,md:6,children:[" ",Object(d.jsxs)(h.a,{children:[Object(d.jsx)(S.a,{t:r,i18nKey:"count.chars"})," ",a]})]}),Object(d.jsxs)(p.a,{item:!0,xs:12,md:6,children:[" ",Object(d.jsxs)(h.a,{children:[Object(d.jsx)(S.a,{t:r,i18nKey:"count.arts"})," ",n]})]}),Object(d.jsx)(p.a,{item:!0,xs:12,children:Object(d.jsx)(m.a,{severity:"warning",children:Object(d.jsx)(S.a,{t:r,i18nKey:"uploadCard.goUpload.migrate"})})})]})})]})}function ce(e){var t,a,n,r=e.data.storage,i=e.data,c=e.reset,l=Object(y.useContext)(K.b),u=Object(C.a)("settings").t,j="GO"===i.type?i.charCount||i.artCount:(null===(t=i.characters)||void 0===t?void 0:t.total)||(null===(a=i.artifacts)||void 0===a?void 0:a.total)||(null===(n=i.weapons)||void 0===n?void 0:n.total);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O.a,{}),Object(d.jsx)(b.a,{sx:{py:1},children:Object(d.jsx)(v.a,{color:j?"success":"error",disabled:!j,onClick:function(){z.b.removeForKeys((function(e){return e.startsWith("artifact_")||e.startsWith("char_")||e.startsWith("weapon_")})),z.b.copyFrom(r),l.reloadStorage(),c()},startIcon:Object(d.jsx)(o.a,{icon:s.o}),children:Object(d.jsx)(S.a,{t:u,i18nKey:"settings:uploadCard.replaceDatabase"})})})]})}}}]);
//# sourceMappingURL=26.98b43791.chunk.js.map