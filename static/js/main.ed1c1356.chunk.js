(this["webpackJsonpmardock-game"]=this["webpackJsonpmardock-game"]||[]).push([[0],{183:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(17),c=a.n(i),o=a(19),s={user:null,globalLoading:!0,users:[]},l=a(247),d=a(24),p=a.n(d),b=a(41),u=a(107),j=a(23),h=a(10),x=a(80),g=(a(168),a(184),a(170),new x.a.auth.GoogleAuthProvider),O=function(){var e=Object(b.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,v.doc("users/".concat(t)).get();case 5:return a=e.sent,e.abrupt("return",Object(h.a)({uid:t},a.data()));case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching user",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();x.a.initializeApp({apiKey:"AIzaSyBuehaOKFHvHfNbcfwSy2SNnO_iURlxl6k",authDomain:"dnd-story-assistant.firebaseapp.com",databaseURL:"https://dnd-story-assistant.firebaseio.com",projectId:"dnd-story-assistant",storageBucket:"dnd-story-assistant.appspot.com",messagingSenderId:"783675104937",appId:"1:783675104937:web:d762c685d9708b3b21d3b8",measurementId:"G-BE6J3N57ET"});var m=function(){f.signInWithPopup(g)},f=x.a.auth(),v=x.a.firestore(),w=function(){var e=Object(b.a)(p.a.mark((function e(t,a){var r,n,i,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",{});case 2:return r=v.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return n=t.email,i=t.displayName,c=t.photoURL,e.prev=8,o=Object(h.a)({displayName:i,email:n,photoURL:c,uid:t.uid},a),e.next=12,r.set(o);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(8),console.error("Error creating user document",e.t0);case 17:return e.abrupt("return",O(t.uid));case 18:case"end":return e.stop()}}),e,null,[[8,14]])})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(p.a.mark((function e(t){var a,r,n,i,c,o,s,l=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:{email:"",password:"",displayName:""},r=null,n=a.email,i=a.password,c=a.displayName,t.preventDefault(),e.prev=4,e.next=7,f.createUserWithEmailAndPassword(n,i);case 7:return o=e.sent,s=o.user,e.next=11,w(s,{displayName:c,email:n});case 11:r=e.sent,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error("Error Signing up with email and password");case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),C=function(e,t,a){e.preventDefault(),f.signInWithEmailAndPassword(t,a).catch((function(e){console.error("Error signing in with password and email",e)}))},S=a(28),H=a(4),A=function(){var e=Object(o.b)().user,t=Object(r.useState)(""),a=Object(S.a)(t,2),n=a[0],i=a[1],c=Object(r.useState)(""),s=Object(S.a)(c,2),l=s[0],d=s[1];function u(){return(u=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t,n,l);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(H.jsxs)("div",{children:[Object(H.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(H.jsxs)("div",{children:[Object(H.jsx)("h1",{children:e&&e.displayName}),Object(H.jsx)("label",{children:"Email"}),Object(H.jsx)("input",{value:n,type:"email",onChange:function(e){return i(e.target.value)}})]}),Object(H.jsxs)("div",{children:[Object(H.jsx)("label",{children:"Password"}),Object(H.jsx)("input",{value:l,type:"password",onChange:function(e){return d(e.target.value)}})]}),Object(H.jsx)("button",{type:"submit",children:"Submit"})]}),Object(H.jsx)("p",{children:"Or sign in with google"}),Object(H.jsx)("button",{onClick:function(e){return j.apply(this,arguments)},children:"Google"})]})},k=function(){var e=Object(r.useState)(""),t=Object(S.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(""),c=Object(S.a)(i,2),o=c[0],s=c[1],l=Object(r.useState)(""),d=Object(S.a)(l,2),u=d[0],j=d[1];function h(){return(h=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t,{displayName:o,email:a,password:u});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(H.jsx)("div",{children:Object(H.jsxs)("form",{onSubmit:function(e){return h.apply(this,arguments)},children:[Object(H.jsxs)("div",{children:[Object(H.jsx)("label",{children:"Display Name"}),Object(H.jsx)("input",{value:o,type:"text",onChange:function(e){return s(e.target.value)}})]}),Object(H.jsxs)("div",{children:[Object(H.jsx)("label",{children:"email"}),Object(H.jsx)("input",{value:a,type:"email",onChange:function(e){return n(e.target.value)}})]}),Object(H.jsxs)("div",{children:[Object(H.jsx)("label",{children:"Password"}),Object(H.jsx)("input",{value:u,type:"password",onChange:function(e){return j(e.target.value)}})]}),Object(H.jsx)("button",{type:"submit",children:"Submit"})]})})},B=a(45),I=a(223),T=a(226),R=Object(I.a)({grid:{margin:"0 -15px !important",width:"unset"}});function D(e){var t=R(),a=e.children,r=Object(B.a)(e,["children"]);return Object(H.jsx)(T.a,Object(h.a)(Object(h.a)({container:!0},r),{},{className:t.grid,children:a}))}var N=Object(I.a)({grid:{padding:"0 15px !important"}});function $(e){var t=N(),a=e.children,r=Object(B.a)(e,["children"]);return Object(H.jsx)(T.a,Object(h.a)(Object(h.a)({item:!0},r),{},{className:t.grid,children:a}))}var P=a(16),F=a(63),W=a.n(F),L=function(e){e=(e+="").replace("#","");if(!/[0-9A-Fa-f]/g.test(e)||3!==e.length&&6!==e.length)throw new Error("input is not a valid hex color.");if(3===e.length){var t=e[0],a=e[1],r=e[2];e=t+t+a+a+r+r}var n=(e=e.toUpperCase())[0]+e[1],i=e[2]+e[3],c=e[4]+e[5];return parseInt(n,16)+", "+parseInt(i,16)+", "+parseInt(c,16)},z=["#9c27b0","#ab47bc","#8e24aa","#af2cc5"],E=["#ff9800","#ffa726","#fb8c00","#ffa21a"],q=["#f44336","#ef5350","#e53935","#f55a4e"],M=["#4caf50","#66bb6a","#43a047","#5cb860"],G=["#00acc1","#26c6da","#00acc1","#00d3ee"],J=["#e91e63","#ec407a","#d81b60","#eb3573"],U=["#999","#777","#3C4858","#AAAAAA","#D2D2D2","#DDD","#b4b4b4","#555555","#333","#a9afbb","#eee","#e7e7e7"],V="#000",K="#FFF",X=(L(V),L(V),L(V),{boxShadow:"0 4px 20px 0 rgba("+L(V)+",.14), 0 7px 10px -5px rgba("+L(z[0])+",.4)"}),Y={boxShadow:"0 4px 20px 0 rgba("+L(V)+",.14), 0 7px 10px -5px rgba("+L(G[0])+",.4)"},Q={boxShadow:"0 4px 20px 0 rgba("+L(V)+",.14), 0 7px 10px -5px rgba("+L(M[0])+",.4)"},Z={boxShadow:"0 4px 20px 0 rgba("+L(V)+",.14), 0 7px 10px -5px rgba("+L(E[0])+",.4)"},_={boxShadow:"0 4px 20px 0 rgba("+L(V)+",.14), 0 7px 10px -5px rgba("+L(q[0])+",.4)"},ee={boxShadow:"0 4px 20px 0 rgba("+L(V)+",.14), 0 7px 10px -5px rgba("+L(J[0])+",.4)"},te=Object(h.a)({background:"linear-gradient(60deg, "+E[1]+", "+E[2]+")"},Z),ae=Object(h.a)({background:"linear-gradient(60deg, "+M[1]+", "+M[2]+")"},Q),re=Object(h.a)({background:"linear-gradient(60deg, "+q[1]+", "+q[2]+")"},_),ne=Object(h.a)({background:"linear-gradient(60deg, "+G[1]+", "+G[2]+")"},Y),ie=Object(h.a)({background:"linear-gradient(60deg, "+z[1]+", "+z[2]+")"},X),ce=Object(h.a)({background:"linear-gradient(60deg, "+J[1]+", "+J[2]+")"},ee),oe=(Object(h.a)({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid "+U[10],height:"auto"},{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"}),L(V),L(V),L(V),L(V),L(V),{color:U[2],textDecoration:"none",fontWeight:"300",marginTop:"30px",marginBottom:"25px",minHeight:"32px",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif","& small":{color:U[1],fontWeight:"400",lineHeight:"1"}}),se=(Object(h.a)(Object(h.a)({},oe),{},{marginTop:"0",marginBottom:"3px",minHeight:"auto","& a":Object(h.a)(Object(h.a)({},oe),{},{marginTop:".625rem",marginBottom:"0.75rem",minHeight:"auto"})}),{cardIcon:{"&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader":{borderRadius:"3px",backgroundColor:U[0],padding:"15px",marginTop:"-20px",marginRight:"15px",float:"left"}},warningCardHeader:te,successCardHeader:ae,dangerCardHeader:re,infoCardHeader:ne,primaryCardHeader:ie,roseCardHeader:ce}),le=Object(I.a)(se);function de(e){var t,a=le(),r=e.className,n=e.children,i=e.color,c=Object(B.a)(e,["className","children","color"]),o=W()((t={},Object(P.a)(t,a.cardIcon,!0),Object(P.a)(t,a[i+"CardHeader"],i),Object(P.a)(t,r,void 0!==r),t));return Object(H.jsx)("div",Object(h.a)(Object(h.a)({style:{marginRight:0},className:o},c),{},{children:n}))}var pe={cardFooter:{padding:"0",paddingTop:"10px",margin:"0 15px 10px",borderRadius:"0",justifyContent:"space-between",alignItems:"center",display:"flex",backgroundColor:"transparent",border:"0"},cardFooterProfile:{marginTop:"-15px"},cardFooterPlain:{paddingLeft:"5px",paddingRight:"5px",backgroundColor:"transparent"},cardFooterStats:{borderTop:"1px solid "+U[10],marginTop:"20px","& svg":{position:"relative",top:"4px",marginRight:"3px",marginLeft:"3px",width:"16px",height:"16px"},"& .fab,& .fas,& .far,& .fal,& .material-icons":{fontSize:"16px",position:"relative",top:"4px",marginRight:"3px",marginLeft:"3px"}},cardFooterChart:{borderTop:"1px solid "+U[10]}},be=Object(I.a)(pe);function ue(e){var t,a=be(),r=e.className,n=e.children,i=e.plain,c=e.profile,o=e.stats,s=e.chart,l=Object(B.a)(e,["className","children","plain","profile","stats","chart"]),d=W()((t={},Object(P.a)(t,a.cardFooter,!0),Object(P.a)(t,a.cardFooterPlain,i),Object(P.a)(t,a.cardFooterProfile,c),Object(P.a)(t,a.cardFooterStats,o),Object(P.a)(t,a.cardFooterChart,s),Object(P.a)(t,r,void 0!==r),t));return Object(H.jsx)("div",Object(h.a)(Object(h.a)({className:d},l),{},{children:n}))}var je={successText:{color:M[0]},upArrowCardCategory:{width:"16px",height:"16px"},stats:{color:U[0],display:"inline-flex",fontSize:"12px",lineHeight:"22px","& svg":{top:"4px",width:"16px",height:"16px",position:"relative",marginRight:"3px",marginLeft:"3px"},"& .fab,& .fas,& .far,& .fal,& .material-icons":{top:"4px",fontSize:"16px",position:"relative",marginRight:"3px",marginLeft:"3px"}},cardCategory:{color:U[0],margin:"0",fontSize:"14px",marginTop:"0",paddingTop:"10px",marginBottom:"0"},cardCategoryWhite:{color:"rgba("+L(K)+",.62)",margin:"0",fontSize:"14px",marginTop:"0",marginBottom:"0"},cardTitle:{color:U[2],marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none","& small":{color:U[1],fontWeight:"400",lineHeight:"1"}},cardTitleWhite:{color:K,marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none","& small":{color:U[1],fontWeight:"400",lineHeight:"1"}}},he={card:{border:"0",marginBottom:"30px",marginTop:"30px",borderRadius:"6px",color:"rgba("+L(V)+", 0.87)",background:K,width:"100%",boxShadow:"0 1px 4px 0 rgba("+L(V)+", 0.14)",position:"relative",display:"flex",flexDirection:"column",minWidth:"0",wordWrap:"break-word",fontSize:".875rem"},cardPlain:{background:"transparent",boxShadow:"none"},cardProfile:{marginTop:"30px",textAlign:"center"},cardChart:{"& p":{marginTop:"0px",paddingTop:"0px"}}},xe=Object(I.a)(he);function ge(e){var t,a=xe(),r=e.className,n=e.children,i=e.plain,c=e.profile,o=e.chart,s=Object(B.a)(e,["className","children","plain","profile","chart"]),l=W()((t={},Object(P.a)(t,a.card,!0),Object(P.a)(t,a.cardPlain,i),Object(P.a)(t,a.cardProfile,c),Object(P.a)(t,a.cardChart,o),Object(P.a)(t,r,void 0!==r),t));return Object(H.jsx)("div",Object(h.a)(Object(h.a)({style:{background:"#424242"},className:l},s),{},{children:n}))}var Oe={cardHeader:{padding:"0.75rem 1.25rem",marginBottom:"0",borderBottom:"none",background:"transparent",zIndex:"3 !important","&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader":{margin:"0 15px",padding:"0",position:"relative",color:K},"&:first-child":{borderRadius:"calc(.25rem - 1px) calc(.25rem - 1px) 0 0"},"&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader":{"&:not($cardHeaderIcon)":{borderRadius:"3px",marginTop:"-20px",padding:"15px"}},"&$cardHeaderStats svg":{fontSize:"36px",lineHeight:"56px",textAlign:"center",width:"36px",height:"36px",margin:"10px 10px 4px"},"&$cardHeaderStats i,&$cardHeaderStats .material-icons":{fontSize:"36px",lineHeight:"56px",width:"56px",height:"56px",textAlign:"center",overflow:"unset",marginBottom:"1px"},"&$cardHeaderStats$cardHeaderIcon":{textAlign:"right"}},cardHeaderPlain:{marginLeft:"0px !important",marginRight:"0px !important"},cardHeaderStats:{"& $cardHeaderIcon":{textAlign:"right"},"& h1,& h2,& h3,& h4,& h5,& h6":{margin:"0 !important"}},cardHeaderIcon:{"&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader":{background:"transparent",boxShadow:"none"},"& i,& .material-icons":{width:"33px",height:"33px",textAlign:"center",lineHeight:"33px"},"& svg":{width:"24px",height:"24px",textAlign:"center",lineHeight:"33px",margin:"5px 4px 0px"}},warningCardHeader:{color:K,"&:not($cardHeaderIcon)":Object(h.a)({},te)},successCardHeader:{color:K,"&:not($cardHeaderIcon)":Object(h.a)({},ae)},dangerCardHeader:{color:K,"&:not($cardHeaderIcon)":Object(h.a)({},re)},infoCardHeader:{color:K,"&:not($cardHeaderIcon)":Object(h.a)({},ne)},primaryCardHeader:{color:K,"&:not($cardHeaderIcon)":Object(h.a)({},ie)},roseCardHeader:{color:K,"&:not($cardHeaderIcon)":Object(h.a)({},ce)}};Object(I.a)(Oe);var me=function(e){var t=e.src,a=e.alt,r=void 0===a?"":a,n=e.width,i=void 0===n?"25vw":n;return Object(H.jsx)("img",{style:{width:i,maxWidth:"100px",height:"inherit"},src:t,alt:r})},fe=a(7),ve=a(228),we=function(e){var t=e.progress,a=void 0===t?100:t,r=e.color,n=void 0===r?"green":r,i=e.backgroundColor,c=void 0===i?"black":i,o=Object(fe.a)((function(e){return{root:{height:15,borderRadius:10},colorPrimary:{backgroundColor:c},bar:{borderRadius:5,backgroundColor:n}}}))(ve.a);return Object(H.jsx)(o,{variant:"determinate",value:a})},ye=a(33),Ce={str:{title:"Strength",description:""},def:{title:"Defense",description:""},spd:{title:"Speed",description:""},vit:{title:"Vitality",description:""},eva:{title:"Evasion",description:""},int:{title:"Intelligence",description:""},wis:{title:"Wisdom",description:""},per:{title:"Persuasion",description:""}},Se=a.p+"static/media/darkRiteArmor.9c40cf0e.svg",He={Potion:{hp:10,mp:0,label:"Potion",description:"Recover 10 hp",src:Se},"Mana Cubes":{hp:0,mp:10,label:"Mana Cubes",description:"Recover 10 mp",src:Se},"Enchanted Chicken Breast":{hp:5,mp:0,label:"Enchanted Chicken Breast",description:"Recover 20 hp",src:Se}};var Ae=function(e,t){return 100*(e-0)/(t-0)};function ke(){var e=Object(o.b)().user.character.stats;return Object(ye.map)(Object.keys(Ce),(function(t){var a=e[t]||0,r=Ce[t],n=0;return a>=12&&a<14&&(n=1),a>=14&&a<16&&(n=2),a>=16&&a<18&&(n=3),a>=18&&a<20&&(n=4),a>=20&&(n=5),Object(h.a)(Object(h.a)(Object(h.a)({},r),Ce[t]),{},{abbr:t.toUpperCase(),statCount:a,statBoost:n})}))}var Be={"Dark Rite Armor":{hp:10,mp:0,label:"Dark Rite Armor",description:"",src:Se}},Ie={"Jewel of Armanar":{hp:10,mp:0,label:"Jewel of Armanar",description:"",src:a.p+"static/media/jewelArmanar.eb01ddc8.svg"}},Te={"Long Sword":{type:"sword",hp:0,mp:0,roll:"d8",label:"Long Sword",description:"",src:a.p+"static/media/sword.119d0a25.svg"}};function Re(e){var t=Object(o.b)().user.character.equipped;return{accessory:Ie,weapon:Te}[e][t[e]]}var De=function(){var e=Object(o.b)().user.character,t=e.hp,a=e.maxHp,n=e.equipped.armor,i=void 0===n?{hp:0}:n,c=Re("accessory"),s=Re("weapon"),l=ke();function d(){var e=t+(i.hp||0)+(s.hp||0)+(c.hp||0);return Ae(e,a)}console.log("log: TODO-add stat modifiers",l);var p=Object(r.useState)(d()),b=Object(S.a)(p,2),u=b[0],j=b[1];return Object(r.useEffect)((function(){j(d())}),[t,i]),Object(H.jsxs)("div",{style:{marginTop:"10px",marginBottom:"10px"},children:[d()>100&&Object(H.jsx)(we,{progress:u-100,color:"teal",backgroundColor:"green"}),d()<=100&&Object(H.jsx)(we,{progress:u,color:"green",backgroundColor:"black"})]})},Ne=a(81),$e=Object(I.a)(je),Pe=function(e){var t=e.title,a=void 0===t?"Knight":t,r=e.text,n=void 0===r?"The knight is a real nigga":r,i=e.imgSrc,c=void 0===i?"":i,o=e.noBox,s=void 0!==o&&o,l=$e();return Object(H.jsx)($,{xs:12,sm:6,md:4,children:Object(H.jsxs)(ge,{children:[!s&&Object(H.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(H.jsx)(de,{color:"rose",children:Object(H.jsx)(me,{alt:a,src:c})})}),Object(H.jsx)("p",{style:{color:"white",fontSize:"15pt",textAlign:"center"},className:l.cardCategory,children:a}),Object(H.jsx)(ue,{stats:!0,children:Object(H.jsx)(Ne.a,{style:{color:"white",textAlign:"center"},variant:"subtitle1",children:n})})]})})},Fe=function(){var e=Object(o.b)().user.character,t=e.mp,a=e.maxMp,n=e.equipped.armor,i=void 0===n?{mp:0}:n,c=Re("accessory"),s=Re("weapon"),l=ke();function d(){var e=t+(i.mp||0)+(s.mp||0)+(c.mp||0);return Ae(e,a)}console.log("log: TODO-add stat modifiers",l);var p=Object(r.useState)(d()),b=Object(S.a)(p,2),u=b[0],j=b[1];return Object(r.useEffect)((function(){j(d())}),[t]),Object(H.jsxs)("div",{style:{marginTop:"10px",marginBottom:"10px"},children:[d()>100&&Object(H.jsx)(we,{progress:u-100,color:"light blue",backgroundColor:"blue"}),d()<=100&&Object(H.jsx)(we,{progress:u,color:"blue",backgroundColor:"black"})]})},We=a(229),Le=a(230),ze=a(250),Ee=a(231),qe=Object(I.a)(je),Me=function(e){var t=e.children;qe();return Object(H.jsx)($,{xs:12,sm:6,md:4,children:Object(H.jsx)(ge,{children:Object(H.jsx)("div",{style:{color:"white",margin:"10px",display:"flex",flexWrap:"wrap"},children:t})})})},Ge=(a.p,a.p,function(e){var t=e.logo,a=e.alt,r=e.text,n=void 0===r?"":r;return Object(H.jsxs)(T.a,{container:!0,children:[Object(H.jsx)(T.a,{item:!0,xs:3,children:Object(H.jsx)("img",{style:{width:"100%",maxHeight:"55px"},src:t,alt:a})}),Object(H.jsx)(T.a,{item:!0,xs:9,style:{display:"flex",alignItems:"center"},children:n})]})});var Je={knight:{src:a.p+"static/media/knight.f5702281.svg",key:"knight",label:"Knight",description:"If a player is within 2 squares of you and fails an evade roll, you can roll the same die. If you roll higher than the failed roll, you can save the player"}},Ue=Object(I.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(6),height:e.spacing(6)}}})),Ve=function(){var e=Object(o.b)().user.character,t=Ue(),a=ke(),r=function(){var e=Object(o.b)().user.character.equipped;return Object(ye.map)(Object.keys(e),(function(t){var a=e[t],r=null;return"armor"===t?r=Object(h.a)(Object(h.a)({},a),Be[a.title]):"weapon"===t?r=Te[a]:"accessory"===t&&(r=Ie[a]),r}))}(),n=Je[e.class];return console.log("log: character",{characterClass:n,character:e}),Object(H.jsxs)("div",{children:[Object(H.jsx)(We.a,{children:Object(H.jsxs)(Le.a,{children:[Object(H.jsxs)(T.a,{container:!0,children:[Object(H.jsx)(T.a,{item:!0,xs:3,children:Object(H.jsx)(ze.a,{className:t.large,children:"BI"})}),Object(H.jsxs)(T.a,{style:{textAlign:"end"},item:!0,xs:9,children:[Object(H.jsx)(Ne.a,{children:"Rank Title"}),Object(H.jsx)(Ne.a,{children:"100 Gil"})]}),Object(H.jsx)(T.a,{container:!0,style:{marginTop:"10px"},children:Object(ye.map)(r,(function(e){return Object(H.jsx)(T.a,{item:!0,xs:4,children:Object(H.jsx)(Ge,{text:e.label,logo:e.src,alt:e.src})})}))})]}),Object(H.jsx)(Ee.a,{style:{color:"white",marginTop:"10px",marginBottom:"10px"}}),Object(H.jsxs)("div",{children:[Object(H.jsx)(De,{}),Object(H.jsx)(Fe,{})]})]})}),Object(H.jsxs)(D,{children:[Object(H.jsx)(Me,{children:Object(H.jsx)(T.a,{container:!0,children:Object(ye.map)(a,(function(e,t){var a="".concat(e.abbr.toUpperCase(),": ").concat(e.statCount);return e.statBoost>0&&(a+=" +".concat(e.statBoost)),Object(H.jsx)(T.a,{item:!0,xs:4,children:a},t)}))})}),Object(H.jsx)(Pe,{title:n.label,text:n.description,imgSrc:n.src}),Object(H.jsx)(Pe,{})]})]})},Ke=a(5),Xe=a(29),Ye=a(249),Qe=a(235),Ze=a(236),_e=a(239),et=a(234),tt=a(237),at=a(126),rt=a.n(at),nt=a(128),it=a.n(nt),ct=a(127),ot=a.n(ct),st=a(240),lt=a(241),dt=a(242),pt=a(129),bt=a.n(pt),ut=a(232),jt=a(233),ht=a(125),xt=a.n(ht),gt=a.p+"static/media/fist.50aa2aec.svg",Ot=[{route:"/",title:"Home",icon:Object(H.jsx)(xt.a,{})},{route:"/Character",title:"Character",icon:Object(H.jsx)(ut.a,{})},{route:"/Battle",title:"Battle",icon:Object(H.jsx)(me,{width:"7vw",src:gt,alt:"battle"})},{route:"/Store",title:"Store",icon:Object(H.jsx)(jt.a,{})}],mt=240,ft=Object(I.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:mt,width:"calc(100% - ".concat(mt,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:mt,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:mt,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(P.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));function vt(e){var t,a,r=e.children,i=ft(),c=Object(Xe.a)(),o=Object(j.f)(),s=n.a.useState(!1),l=Object(S.a)(s,2),d=l[0],p=l[1];return Object(H.jsxs)("div",{className:i.root,children:[Object(H.jsx)(et.a,{}),Object(H.jsx)(Qe.a,{position:"fixed",className:Object(Ke.a)(i.appBar,Object(P.a)({},i.appBarShift,d)),children:Object(H.jsxs)(Ze.a,{children:[Object(H.jsx)(tt.a,{color:"inherit","aria-label":"open drawer",onClick:function(){p(!0)},edge:"start",className:Object(Ke.a)(i.menuButton,Object(P.a)({},i.hide,d)),children:Object(H.jsx)(rt.a,{})}),Object(H.jsx)(Ne.a,{variant:"h6",noWrap:!0,children:"Mini variant drawer"})]})}),Object(H.jsxs)(Ye.a,{variant:"permanent",className:Object(Ke.a)(i.drawer,(t={},Object(P.a)(t,i.drawerOpen,d),Object(P.a)(t,i.drawerClose,!d),t)),classes:{paper:Object(Ke.a)((a={},Object(P.a)(a,i.drawerOpen,d),Object(P.a)(a,i.drawerClose,!d),a))},children:[Object(H.jsx)("div",{className:i.toolbar,children:Object(H.jsx)(tt.a,{onClick:function(){p(!1)},children:"rtl"===c.direction?Object(H.jsx)(ot.a,{}):Object(H.jsx)(it.a,{})})}),Object(H.jsx)(Ee.a,{}),Object(H.jsxs)(_e.a,{children:[Ot.map((function(e,t){return Object(H.jsxs)(st.a,{button:!0,children:[Object(H.jsx)(lt.a,{onClick:function(t){return function(e,t){e.preventDefault(),e.stopPropagation(),o.push("".concat(t))}(t,e.route)},children:e.icon}),Object(H.jsx)(dt.a,{primary:e.title})]},t)})),Object(H.jsx)(Ee.a,{}),Object(H.jsxs)(st.a,{button:!0,children:[Object(H.jsx)(lt.a,{onClick:function(){console.log("log: logout")},children:Object(H.jsx)(bt.a,{})}),Object(H.jsx)(dt.a,{primary:"Log out"})]})]})]}),Object(H.jsxs)("main",{className:i.content,children:[Object(H.jsx)("div",{className:i.toolbar}),r]})]})}var wt=a(243),yt=a(244),Ct=a(245),St=a(246),Ht=function(e){var t=e.dialog,a=void 0===t?{open:!1,setopen:function(){}}:t,r=e.children,n=e.onClick,i=void 0===n?function(){return null}:n,c=Object(ye.omit)(e,["dialog"]);function o(){return(o=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setopen(!0),e.next=3,i();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(wt.a,Object(h.a)(Object(h.a)({},c),{},{onClick:function(){return o.apply(this,arguments)},children:r})),Object(H.jsxs)(yt.a,{fullWidth:!0,style:{bottom:"50vw"},open:a.open,onClose:function(){a.setopen(!1)},children:[Object(H.jsx)(Ct.a,{id:a.title,children:a.title}),Object(H.jsx)(St.a,{children:a.content})]})]})},At={sword:{"Wide Slash":{useDescription:"Ap: 3",ap:3,label:"Wide Slash",rule:"Roll a d8 and deal damage to any 2 monsters next to eachother near you",description:"An experience slash that can strike two enemies if they are next to eachother"},"Pin Missle Strike":{useDescription:"Ap: 3",ap:3,label:"Pin Missle Strike",rule:"Roll a d4 twice, the amount of damage dealt is the product of the two",description:"A multi strike attack with pin point precision"},"Fire Slash":{useDescription:"Ap: 3",ap:3,label:"Fire Slash",rule:"Your attack now deals fire damage",description:"The user blesses their blade with the sun spirit, Ilumite"}}};var kt=a(143),Bt=(a(182),a(144)),It=Object(Bt.a)(Object(h.a)({},{palette:{type:"dark",primary:{main:"#3f51b5"},secondary:{main:"#f50057"}}})),Tt=function(e){var t=e.values,a=e.type,r=void 0===a?"base":a,n=e.options,i=void 0===n?[{label:"",value:""}]:n,c=e.targets,o=void 0===c?[{label:"",value:""}]:c;return{Rows:[{Cols:[{Input:{id:r,name:r,type:"select",options:i,helperText:Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(Ne.a,{style:{fontWeight:"bold",fontSize:"10pt"},children:"Description"}),Object(H.jsx)(Ne.a,{style:{fontSize:"10pt",marginBottom:"10px"},children:t[r].description}),"Items"!==r&&Object(H.jsxs)(H.Fragment,{children:[" ",Object(H.jsx)(Ne.a,{style:{fontWeight:"bold",fontSize:"10pt"},children:"How to use"}),Object(H.jsx)(Ne.a,{style:{fontSize:"10pt",marginBottom:"10px"},children:t[r].rule}),Object(H.jsx)(Ne.a,{style:{fontWeight:"bold",fontSize:"10pt"},children:"Cost"}),Object(H.jsx)(Ne.a,{style:{fontSize:"10pt"},children:t[r].useDescription})]})]})}}]},{Cols:[{Input:{id:"target",name:"target",type:"select",label:"Target",options:o}}]},{Cols:[{style:{display:"flex",justifyContent:"flex-end"},Button:{id:"submit",name:"submit",type:"submit",label:"Submit",disabled:!1}}]}]}},Rt=[{description:"This is a description",label:"Long Sword",value:"Long Sword"},{description:"This is another description",label:"Short Sword",value:"Short Sword"}],Dt=[{label:"Monster 1",value:"Monster 1"},{label:"Monster 2",value:"Monster 2"}];function Nt(e){var t,a=e.type,r=void 0===a?"":a,i=e.options,c=void 0===i?Rt:i,o=e.targets,s=void 0===o?Dt:o,l=e.onSubmit,d=void 0===l?function(){}:l,p=(t={},Object(P.a)(t,r,c[0]),Object(P.a)(t,"target",s[0]),t),b=n.a.useState(p),u=Object(S.a)(b,2),j=u[0],h=u[1];return Object(H.jsx)(kt.a,{theme:It,manualValidate:function(e){var t={};return Object.keys(e).forEach((function(a){(!e[a]||"string"===typeof e[a]&&!e[a].length)&&(t[a]="required")})),h(e),t},blueprint:Tt({values:j,type:r,options:c,targets:s}),initialValues:p,handleSubmit:function(e,t){window.alert(JSON.stringify(e)),d(),t.resetForm()}})}var $t=function(e){var t=e.closeModal,a=function(){var e=Object(o.b)().user.character,t=e.techniques,a=e.equipped.weapon,r=At[Te[a].type];return Object(ye.map)(t.attacks,(function(e){return Object(h.a)(Object(h.a)({},r[e]),{},{value:r[e].label})}))}();return Object(H.jsx)(Nt,{onSubmit:function(){t()},type:"Attack",options:a})},Pt=a(145);var Ft=function(e){var t=e.closeModal,a=function(){Object(o.b)().user.character.items.misc;var e=Object.keys(He).reduce((function(e,t){var a=Object(Pt.a)(e),r=Object(h.a)(Object(h.a)({},He[t]),{},{label:t,value:t});return a.push(r),a}),[]);return console.log("log: items",{userItems:e,items:He}),e}();return Object(H.jsx)(Nt,{options:a,onSubmit:t,type:"Items"})},Wt=function(e){return{useDescription:"Mp: 4",label:"".concat(e," Ball"),description:"A sphere made of ".concat(e,", hurled at an enemy 3 meters in the users line of vision"),element:e.toLowerCase(),rule:"Roll a d8 dice and deal damage equal to that result + elemental damage",mp:4}},Lt={"Fire Ball":Wt("Fire"),"Ice Ball":Wt("Ice"),"Thunder Ball":Wt("Thunder"),"Shadow Ball":Wt("Shadow"),"Lumen Ball":Wt("Lumen"),"Wind Ball":Wt("Wind"),Heal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"hp+10",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a={label:"Heal Ball",stat:e,element:"heal",mp:t};return a}()};var zt,Et=function(e){var t=e.closeModal,a=function(){var e=Object(o.b)().user.character.techniques;return Object(ye.map)(e.spells,(function(e){return Object(h.a)(Object(h.a)({},Lt[e]),{},{value:Lt[e].label})}))}();return Object(H.jsx)(Nt,{onSubmit:function(){t()},type:"Spell",options:a})},qt=function(){return Object(H.jsxs)("div",{children:[Object(H.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(H.jsx)("img",{style:{width:"40vw"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAmBAMAAACi8w9qAAAAIVBMVEUgICAISGBYOAgIgIgwqKDYYGCggBDg0ADY0Lj4vyQAAABtaUYvAAAAC3RSTlP///////////8AANlr/IAAAAGXSURBVHicbZKxbuQgEIbHN8iHO6+gSBl5pdSzYR8A5ClS5hGsFNSbKikt3UnZclq/7Q25OIHLucDw8cP8/ABb8wnAx7/B0Dk3fOeQnPuPXtgH2L7zLqV9WPMiHyoOu4c0l6JqadBGgJmh6MxhJlVhCKTU8DRNHAtPiTaZ76fpGADkR84Zzro0jqo31Of8pPpN+rwEVKVxQKI9lb3XlYx3iIPxPiBif+yXv35kuV/oSJzYUbilJ/rgG96VmdvkqdB8HHbeQ7+wSVw2hx53LmIhm/OBXegXC/KVA7zqOdjPDuylzhl/XtWOd8G+Yc1FXlajeni7SJOnPHvS/NJ4aXOWLs3hnD4vYOcGtWxidTrUXGI8e817JqKGezaaAzsMY81NV46r94iu8dmZSIqZKDTcmBghpQgtl8iGLoc0lguiL27XZDS5uV8Qx+vwyQHYzJBOhKqHodqfo7p3+kJOoanrHzqdCCcbTg3nG/Aa/2hdaPw8rLJyoFWujZ/fasICWG1/1X6sElkfV5XY2g+IDmxRvvf+ef91/w9tFkjHdEgU+wAAAABJRU5ErkJggg==",alt:""})}),Object(H.jsxs)("div",{children:[Object(H.jsx)(De,{}),Object(H.jsx)(Fe,{})]})]})},Mt=function(){var e=Object(o.b)().user.character,t=e.ap,a=e.maxAp,r=e.equipped.armor,n=void 0===r?{ap:0}:r,i=Re("weapon"),c=Re("accessory"),s=ke();return console.log("log: TODO-add stat modifiers",s),Object(H.jsx)(Ne.a,{children:"AP: ".concat(t+(n.ap||0)+(i.ap||0)+(c.ap||0),"/").concat(a)})},Gt=function(){var e=n.a.useState(!1),t=Object(S.a)(e,2),a=t[0],r=t[1],i=n.a.useState(!1),c=Object(S.a)(i,2),o=c[0],s=c[1],l=n.a.useState(!1),d=Object(S.a)(l,2),p=d[0],b=d[1];return Object(H.jsxs)("div",{children:[Object(H.jsx)(qt,{}),Object(H.jsxs)(T.a,{style:{textAlign:"center",marginTop:"50vw"},container:!0,children:[Object(H.jsx)(T.a,{item:!0,xs:6,children:Object(H.jsx)(Ht,{dialog:{open:a,setopen:r,title:"Attacks",content:Object(H.jsx)($t,{closeModal:function(){return r(!1)}})},fullWidth:!0,variant:"outlined",children:"Attack"})}),Object(H.jsx)(T.a,{item:!0,xs:6,children:Object(H.jsx)(Ht,{dialog:{open:o,setopen:s,title:"Spells",content:Object(H.jsx)(Et,{closeModal:function(){return s(!1)}})},fullWidth:!0,variant:"outlined",children:"Spell"})}),Object(H.jsx)(T.a,{item:!0,xs:6,children:Object(H.jsx)(Ht,{dialog:{title:"Items",content:Object(H.jsx)(Ft,{closeModal:function(){return b(!1)}}),open:p,setopen:b},fullWidth:!0,variant:"outlined",children:"Items"})}),Object(H.jsx)(T.a,{item:!0,xs:6,children:Object(H.jsx)(Ht,{fullWidth:!0,variant:"outlined",children:"Evade"})})]}),Object(H.jsxs)("div",{children:[Object(H.jsx)(De,{}),Object(H.jsx)(Fe,{}),Object(H.jsx)(Mt,{})]})]})},Jt=a.p+"static/media/bag.74d92ec9.svg",Ut=a(138),Vt=a(139).a.div(zt||(zt=Object(Ut.a)(["\n    position: absolute;\n    right: 10vw;\n    background: #3f51b5;\n    border-radius: 10vw;\n    height: 15vw;\n    width: 15vw;\n    text-align: center;\n    bottom: 10vw;\n    :hover {\n       pointer: cursor;\n      }\n"]))),Kt=function(e){var t=e.children;return Object(H.jsx)(Vt,{children:t})},Xt=function(e){var t=e.children;return Object(H.jsxs)("div",{children:[t,Object(H.jsx)(Kt,{children:Object(H.jsx)(me,{width:"9vw",src:Jt,alt:"bag"})})]})};function Yt(){var e=Object(o.b)(),t=e.globalLoading,a=e.updateContextState;return Object(r.useEffect)((function(){f.onAuthStateChanged(function(){var e=Object(b.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:r=e.sent,a({user:r,globalLoading:!1});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(r.useEffect)((function(){t||function(e){v.collection("users").onSnapshot((function(t){t.docChanges().forEach((function(t){var a=t.doc.data();t.type,"modified"===t.type&&e({user:a}),t.type}))}))}(a)})),t?null:Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(u.a,{children:Object(H.jsx)(vt,{children:Object(H.jsx)(Xt,{children:Object(H.jsxs)(j.c,{children:[Object(H.jsx)(j.a,{path:"/sign-in",children:Object(H.jsx)(A,{})}),Object(H.jsx)(j.a,{path:"/sign-up",children:Object(H.jsx)(k,{})}),Object(H.jsx)(j.a,{path:"/Battle",children:Object(H.jsx)(Gt,{})}),Object(H.jsx)(j.a,{path:"/",exact:!0,children:Object(H.jsx)(Ve,{})}),Object(H.jsx)(j.a,{children:Object(H.jsx)(Ve,{})})]})})})})})}var Qt=function(){return Object(H.jsx)(o.a,{stateConfig:s,children:Object(H.jsx)(l.a,{theme:It,children:Object(H.jsx)(Yt,{})})})},Zt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,252)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),i(e),c(e)}))};c.a.render(Object(H.jsx)(Qt,{}),document.getElementById("root")),Zt()}},[[183,1,2]]]);
//# sourceMappingURL=main.ed1c1356.chunk.js.map