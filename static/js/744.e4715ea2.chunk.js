"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[744],{70415:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var r=t(74165),c=t(15861),i=t(29439),a=t(93433),s=t(53174),o=t(54483),l=t(76189),h=t(80184),u=(0,l.Z)((0,h.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever"),x=t(45781),d=t(19701),f=t(35893),Z=t(66630),m=t(68870),j=t(39504),p=t(61889),v=t(58165),g=t(57246),C=t(47047),y=t(20890),w=t(24518),z=t(94721),P=t(13400),b=t(30178),k=t(72791),L=t(10757),M=t(22020),H=t(76899),T=t(16871),K=t(96106),V=t(3992),S=t(30865),_=t(3082),N=t(59215),D=t(48510),I=t(73578),F=t(947),G=t(56928),A=t(566),R=t(17278),q=t(68544),B=t(70645),E=t(42320),U=t(24351),$=t(50921),J=t(46956),O=t(60393),Q={xs:1,sm:2,md:3,lg:4,xl:4},W={xs:3,sm:3,md:8,lg:11,xl:11};function X(){return{sortType:$.vV[0],ascending:!1,weaponType:(0,a.Z)(U.yd),element:(0,a.Z)(U.N)}}function Y(e){var n=(0,M.$)(["page_character"].concat((0,a.Z)(U.IV.map((function(e){return"char_".concat(e,"_gen")}))))).t,t=(0,k.useContext)(G.t).database,l=(0,R.Z)("CharacterDisplay",X),Y=(0,i.Z)(l,2),ne=Y[0],te=Y[1],re=(0,k.useState)(""),ce=(0,i.Z)(re,2),ie=ce[0],ae=ce[1],se=(0,k.useDeferredValue)(ie),oe=(0,k.useState)(0),le=(0,i.Z)(oe,2),he=le[0],ue=le[1],xe=(0,k.useRef)(null),de=(0,k.useCallback)((function(e,n){var t;null===(t=xe.current)||void 0===t||t.scrollIntoView({behavior:"smooth"}),ue(n-1)}),[ue,xe]),fe=(0,B.Z)(),Ze=W[fe],me=(0,k.useState)(!1),je=(0,i.Z)(me,2),pe=je[0],ve=je[1],ge=(0,q.Z)(),Ce=(0,i.Z)(ge,2),ye=Ce[0],we=Ce[1];(0,k.useEffect)((function(){return L.ZP.send({hitType:"pageview",page:"/characters"}),t.followAnyChar(we)}),[we,t]);var ze=(0,E.Z)(F.Z.getAll,[]),Pe=(0,k.useCallback)(function(){var e=(0,c.Z)((0,r.Z)().mark((function e(c){var i,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.Z.get(c);case 2:if(i=e.sent,"object"===typeof(a=null===i||void 0===i?void 0:i.name)&&(a=b.ZP.t("char_".concat(c,"_gen:name"))),window.confirm(n("removeCharacter",{value:a}))){e.next=7;break}return e.abrupt("return");case 7:t.removeChar(c);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t,n]),be=(0,A.Z)(),ke=(0,T.s0)(),Le=(0,k.useMemo)((function(){return ze&&(0,$._L)(t,ze)}),[t,ze]),Me=(0,k.useMemo)((function(){return ze&&(0,$.zU)(t,ze)}),[t,ze]),He=(0,k.useDeferredValue)(ne),Te=(0,k.useMemo)((function(){var e=t._getCharKeys().length;if(!Le||!Me)return{charKeyList:[],totalCharNum:e};var n=He.element,r=He.weaponType,c=He.sortType,i=He.ascending,a=t._getCharKeys().filter((0,J.C)({element:n,weaponType:r,favorite:"yes",name:se},Me)).sort((0,J.e)(c,i,Le)).concat(t._getCharKeys().filter((0,J.C)({element:n,weaponType:r,favorite:"no",name:se},Me)).sort((0,J.e)(c,i,Le)));return ye&&{charKeyList:a,totalCharNum:e}}),[ye,t,Le,Me,He,se]),Ke=Te.charKeyList,Ve=Te.totalCharNum,Se=ne.weaponType,_e=ne.element,Ne=ne.sortType,De=ne.ascending,Ie=(0,k.useMemo)((function(){var e=Math.ceil(Ke.length/Ze),n=(0,O.uZ)(he,0,e-1);return{charKeyListToShow:Ke.slice(n*Ze,(n+1)*Ze),numPages:e,currentPageIndex:n}}),[Ke,he,Ze]),Fe=Ie.charKeyListToShow,Ge=Ie.numPages,Ae=Ie.currentPageIndex,Re=Ke.length!==Ve?"".concat(Ke.length,"/").concat(Ve):"".concat(Ve);return(0,h.jsxs)(m.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,h.jsx)(V.Z,{ref:xe,children:(0,h.jsxs)(j.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,h.jsxs)(p.ZP,{container:!0,spacing:1,children:[(0,h.jsx)(p.ZP,{item:!0,children:(0,h.jsx)(I.Z,{sx:{height:"100%"},onChange:function(e){return te({weaponType:e})},value:Se,size:"small"})}),(0,h.jsx)(p.ZP,{item:!0,children:(0,h.jsx)(D.Z,{sx:{height:"100%"},onChange:function(e){return te({element:e})},value:_e,size:"small"})}),(0,h.jsx)(p.ZP,{item:!0,flexGrow:1,children:(0,h.jsx)(v.Z,{autoFocus:!0,value:ie,onChange:function(e){return ae(e.target.value)},label:n("characterName")})}),(0,h.jsx)(p.ZP,{item:!0,children:(0,h.jsx)(N.Z,{sx:{height:"100%"},sortKeys:$.vV,value:Ne,onChange:function(e){return te({sortType:e})},ascending:De,onChangeAsc:function(e){return te({ascending:e})}})})]}),(0,h.jsxs)(p.ZP,{container:!0,alignItems:"flex-end",children:[(0,h.jsx)(p.ZP,{item:!0,flexGrow:1,children:(0,h.jsx)(g.Z,{count:Ge,page:Ae+1,onChange:de})}),(0,h.jsx)(p.ZP,{item:!0,children:(0,h.jsx)(ee,{numShowing:Fe.length,total:Re,t:n})})]})]})}),(0,h.jsx)(k.Suspense,{fallback:(0,h.jsx)(C.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:(0,h.jsxs)(p.ZP,{container:!0,spacing:1,columns:Q,children:[(0,h.jsx)(p.ZP,{item:!0,xs:1,children:(0,h.jsxs)(V.Z,{sx:{height:"100%",minHeight:400,width:"100%",display:"flex",flexDirection:"column"},children:[(0,h.jsx)(j.Z,{children:(0,h.jsx)(y.Z,{sx:{textAlign:"center"},children:(0,h.jsx)(H.c,{t:n,i18nKey:"addNew"})})}),(0,h.jsx)(_.w,{newFirst:!0,show:pe,onHide:function(){return ve(!1)},onSelect:be}),(0,h.jsx)(m.Z,{sx:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,h.jsx)(w.Z,{onClick:function(){return ve(!0)},color:"info",sx:{borderRadius:"1em"},children:(0,h.jsx)(y.Z,{variant:"h1",children:(0,h.jsx)(o.G,{icon:s.r8p,className:"fa-fw"})})})})]})}),Fe.map((function(e){return(0,h.jsx)(p.ZP,{item:!0,xs:1,children:(0,h.jsx)(S.Z,{characterKey:e,onClick:function(){return ke("".concat(e))},footer:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(z.Z,{}),(0,h.jsxs)(m.Z,{sx:{py:1,px:2,display:"flex",gap:1,justifyContent:"space-between"},children:[(0,h.jsx)(K.Z,{placement:"top",title:(0,h.jsx)(y.Z,{children:n("tabs.talent")}),children:(0,h.jsx)(P.Z,{onClick:function(){return ke("".concat(e,"/talent"))},children:(0,h.jsx)(x.Z,{})})}),(0,h.jsx)(K.Z,{placement:"top",title:(0,h.jsx)(y.Z,{children:n("tabs.equip")}),children:(0,h.jsx)(P.Z,{onClick:function(){return ke("".concat(e,"/equip"))},children:(0,h.jsx)(d.Z,{})})}),(0,h.jsx)(K.Z,{placement:"top",title:(0,h.jsx)(y.Z,{children:n("tabs.teambuffs")}),children:(0,h.jsx)(P.Z,{onClick:function(){return ke("".concat(e,"/teambuffs"))},children:(0,h.jsx)(f.Z,{})})}),(0,h.jsx)(K.Z,{placement:"top",title:(0,h.jsx)(y.Z,{children:n("tabs.optimize")}),children:(0,h.jsx)(P.Z,{onClick:function(){return ke("".concat(e,"/optimize"))},children:(0,h.jsx)(Z.Z,{})})}),(0,h.jsx)(z.Z,{orientation:"vertical"}),(0,h.jsx)(K.Z,{placement:"top",title:(0,h.jsx)(y.Z,{children:n("delete")}),children:(0,h.jsx)(P.Z,{color:"error",onClick:function(){return Pe(e)},children:(0,h.jsx)(u,{})})})]})]})})},e)}))]})}),Ge>1&&(0,h.jsx)(V.Z,{children:(0,h.jsx)(j.Z,{children:(0,h.jsxs)(p.ZP,{container:!0,alignItems:"flex-end",children:[(0,h.jsx)(p.ZP,{item:!0,flexGrow:1,children:(0,h.jsx)(g.Z,{count:Ge,page:Ae+1,onChange:de})}),(0,h.jsx)(p.ZP,{item:!0,children:(0,h.jsx)(ee,{numShowing:Fe.length,total:Re,t:n})})]})})})]})}function ee(e){var n=e.numShowing,t=e.total,r=e.t;return(0,h.jsx)(y.Z,{color:"text.secondary",children:(0,h.jsxs)(H.c,{t:r,i18nKey:"showingNum",count:n,value:t,children:["Showing ",(0,h.jsx)("b",{children:{count:n}})," out of ",{value:t}," Characters"]})})}},66630:function(e,n,t){var r=t(76189),c=t(80184);n.Z=(0,r.Z)((0,c.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.42zm-6.78.66h5v1.5h-5v-1.5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16zm6.5 1.25h-5v-1.5h5v1.5zm0-2.5h-5v-1.5h5v1.5z"}),"Calculate")},19701:function(e,n,t){var r=t(76189),c=t(80184);n.Z=(0,r.Z)((0,c.jsx)("path",{d:"M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5 6 4.5H6z"}),"Checkroom")},45781:function(e,n,t){var r=t(76189),c=t(80184);n.Z=(0,r.Z)((0,c.jsx)("path",{fillRule:"evenodd",d:"M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42L14.82 15z"}),"FactCheck")},90690:function(e,n,t){var r=t(76189),c=t(80184);n.Z=(0,r.Z)((0,c.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder")},15861:function(e,n,t){function r(e,n,t,r,c,i,a){try{var s=e[i](a),o=s.value}catch(l){return void t(l)}s.done?n(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,i){var a=e.apply(n,t);function s(e){r(a,c,i,s,o,"next",e)}function o(e){r(a,c,i,s,o,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=744.e4715ea2.chunk.js.map