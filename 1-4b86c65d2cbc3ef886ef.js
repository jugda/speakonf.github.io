(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),l=n(4),o=n.n(l),i=n(143),c=n.n(i);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var u=n(154),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var s=n(49);n.d(t,"parsePath",function(){return s.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){"use strict";n.d(t,"g",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return l}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return i}),n.d(t,"f",function(){return c}),n.d(t,"b",function(){return u});var a="#ffffff",r="#f2f1f7",l="#000000",o="#fce6e7",i="#2e2262",c="#e30613",u="#e20613"},146:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(4),o=n.n(l),i=n(142),c=n(145),u={color:c.g,backgroundColor:c.e},m={color:c.g,backgroundColor:c.f},s={color:c.e,backgroundColor:c.g},d={color:c.a,backgroundColor:c.g},f=i.a.a.withConfig({displayName:"button__StButton",componentId:"r1rucv-0"})(["background-color:",";color:",";padding:0.3em 3em;text-decoration:none;"],function(e){return e.theme.backgroundColor},function(e){return e.theme.color}),g=function(e){var t=e.to,n=e.children,a=e.theme;return r.a.createElement(f,{theme:a,href:t},n)};g.defaultProps={theme:u},g.propTypes={theme:o.a.oneOf([u,m,s,d]),to:o.a.string.isRequired};var h=n(141);n.d(t,"f",function(){return w}),n.d(t,"e",function(){return b}),n.d(t,"b",function(){return y}),n.d(t,"g",function(){return C}),n.d(t,"a",function(){return x}),n.d(t,"d",function(){return v}),n.d(t,"c",function(){return k}),n.d(t,"h",function(){return I});var p=Object(h.withPrefix)("/kids.jpg"),E=Object(h.withPrefix)("/heroimage.jpg"),w={backgroundColor:c.e,color:c.g,titleColor:c.g,buttonTheme:s},b={backgroundColor:c.d,color:c.a,titleColor:c.f,buttonTheme:m},y={backgroundColor:c.c,color:c.a,titleColor:c.a,buttonTheme:u},C={backgroundColor:c.g,color:c.a,titleColor:c.a,buttonTheme:u},x={backgroundColor:c.d,color:c.b,titleColor:c.a,buttonTheme:u},v={backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"transparent",background:"url("+p+")",color:c.g,titleColor:c.g,buttonTheme:d,padding:"3rem"},k={backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"transparent",background:"url("+E+") no-repeat bottom right",color:c.g,titleColor:c.g,buttonTheme:d,padding:"3rem",additionalMdRules:"\n  @media (max-width: 575px) {\n    background-position-x: -750px;\n  }\n  "},_=i.a.div.withConfig({displayName:"infoblock__StContainer",componentId:"xbey43-0"})(["display:flex;flex-direction:column;align-items:center;padding:6rem 2rem;background:",";background-color:",";background-repeat:",";background-size:",";width:",";color:",";justify-content:",";height:100%;",""],function(e){return e.theme.background?e.theme.background:"none"},function(e){return e.theme.backgroundColor},function(e){return e.theme.backgroundRepeat?e.theme.backgroundRepeat:"initial"},function(e){return e.theme.backgroundSize?e.theme.backgroundSize:"initial"},function(e){return e.width},function(e){return e.theme.color},function(e){return e.justifyContent||"space-between"},function(e){return e.additionalMdRules}),j=i.a.h1.withConfig({displayName:"infoblock__StTitle",componentId:"xbey43-1"})(["color:",";font-weight:",";font-size:",";text-align:center;margin-bottom:0;"],function(e){return e.theme.titleColor},function(e){return e.isHeroImage?"900":"500"},function(e){return e.isHeroImage?"4.25rem":"3.25rem"}),S=i.a.div.withConfig({displayName:"infoblock__StContent",componentId:"xbey43-2"})(["margin:",";max-width:",";font-size:",";line-height:",";text-align:",";"],function(e){return e.disableMargin?"initial":"4rem 0"},function(e){return e.isHeroImage?"35rem":"unset"},function(e){return e.isHeroImage?"1.3rem":"1.2rem"},function(e){return e.isHeroImage?"1.5rem":"1.4rem"},function(e){return e.isHeroImage?"center":"initial"}),I=function(e){var t=e.title,n=e.width,a=e.content,l=e.theme,o=e.action,i=e.anchorLink,c=e.isHeroImage,u=e.justifyContent,m=null!==o?r.a.createElement(g,{theme:l.buttonTheme,to:o.to},o.text):null;return r.a.createElement(_,{width:n,theme:l,id:i,justifyContent:u,additionalMdRules:l.additionalMdRules},r.a.createElement(j,{isHeroImage:c,theme:l},t),r.a.createElement(S,{isHeroImage:c,disableMargin:e.disableMargin},a),m)};I.defaultProps={width:"100%",theme:w,isHeroImage:!1},I.propTpyes={disableMargin:o.a.bool,bgColor:o.a.oneOf([c.g,c.d,c.e,c.f]).isRequired,title:o.a.string.isRequired,content:o.a.node.isRequired,width:o.a.string,justifyContent:o.a.string,theme:o.a.oneOf([w,b,y]),action:o.a.shape({text:o.a.string.isRequired,to:o.a.string.isRequired}),anchorLink:o.a.string,isHeroImage:o.a.bool}},149:function(e,t,n){"use strict";var a=n(180),r=n(0),l=n.n(r),o=n(4),i=n.n(o),c=n(181),u=n.n(c),m=n(141);function s(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,i=e.title;return l.a.createElement(m.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return l.a.createElement(u.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:i},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=s;var d="1025518380"},150:function(e,t,n){"use strict";var a=n(161),r=n(0),l=n.n(r),o=n(4),i=n.n(o),c=n(142),u=n(141),m=n(145),s=n(144),d=n(151),f=n(156),g=n(157),h=n(158),p=Object(c.a)(s.Grid).withConfig({displayName:"navigation__StGrid",componentId:"sc-1rnzhl3-0"})(["align-items:center;width:100%;"]),E=Object(c.a)(s.Row).withConfig({displayName:"navigation__StRow",componentId:"sc-1rnzhl3-1"})(["justify-content:space-between;"]),w=Object(c.a)(s.Col).withConfig({displayName:"navigation__StCol",componentId:"sc-1rnzhl3-2"})(["white-space:nowrap;"]),b=c.a.a.withConfig({displayName:"navigation__StLink",componentId:"sc-1rnzhl3-3"})(["text-decoration:none;color:",";"],m.e),y=function(){return l.a.createElement(p,{fluid:!0},l.a.createElement(E,null,l.a.createElement(w,null,l.a.createElement(b,{href:"#"+h.b},"Countdown")),l.a.createElement(w,null,l.a.createElement(b,{href:"#"+d.d},"Info")),l.a.createElement(w,null,l.a.createElement(b,{href:"#"+d.i},"Teilnehmer")),l.a.createElement(w,null,l.a.createElement(b,{href:"#"+d.f},"Wann & Wo?")),l.a.createElement(w,null,l.a.createElement(b,{href:"#"+g.a},"Sponsoren")),l.a.createElement(w,null,l.a.createElement(b,{href:"#"+f.b},"Anmeldung"))))},C=Object(u.withPrefix)("/logo_v2.svg"),x=c.a.div.withConfig({displayName:"header__StHeaderContainer",componentId:"sc-31ozxh-0"})(["background:",";max-width:","px;max-height:5rem;margin:0 auto;"],m.g,1200),v=c.a.img.withConfig({displayName:"header__StImage",componentId:"sc-31ozxh-1"})(["margin:0;padding:0;max-height:5rem;width:10rem;"]),k=Object(c.a)(s.Col).attrs({className:"hidden-xs hidden-sm"}).withConfig({displayName:"header__StCol",componentId:"sc-31ozxh-2"})(["align-self:center;"]),_=Object(c.a)(s.Row).withConfig({displayName:"header__StRow",componentId:"sc-31ozxh-3"})(["max-height:5rem;"]),j=c.a.div.withConfig({displayName:"header__StLogoContainer",componentId:"sc-31ozxh-4"})(["display:flex;justify-content:center;"]),S={xs:12,sm:12,md:3,lg:3},I={md:9,lg:9},O=function(){return l.a.createElement(x,null,l.a.createElement(s.Grid,{fluid:!0},l.a.createElement(_,null,l.a.createElement(s.Col,S,l.a.createElement(j,null,l.a.createElement(v,{src:C}))),l.a.createElement(k,I,l.a.createElement(y,null)))))};O.propTypes={siteTitle:i.a.string},O.defaultProps={siteTitle:""};var R=O,T=(n(179),Object(u.withPrefix)("/icons/Twitter.svg")),N=(Object(u.withPrefix)("/icons/Facebook.svg"),Object(u.withPrefix)("/icons/Mail.svg")),L=(Object(u.withPrefix)("/icons/Mess.svg"),Object(u.withPrefix)("/icons/in.svg"),c.a.div.withConfig({displayName:"footer__FooterContainer",componentId:"r54yyk-0"})(["background-color:#191919;color:white;"])),z=c.a.img.withConfig({displayName:"footer__IconImage",componentId:"r54yyk-1"})(["width:100%;max-height:80px;"]),q=Object(c.a)(s.Row).withConfig({displayName:"footer__CenteredRow",componentId:"r54yyk-2"})(["justify-content:center;"]),P=c.a.div.withConfig({displayName:"footer__CenteredTextContainer",componentId:"r54yyk-3"})(["width:100%;display:flex;justify-content:center;padding:0 2rem;"]),M=Object(c.a)(s.Col).withConfig({displayName:"footer__InfoBoxCol",componentId:"r54yyk-4"})(["margin-bottom:20px;hyphens:manual;"]),G=c.a.div.withConfig({displayName:"footer__VSpacer",componentId:"r54yyk-5"})(["height:","px;"],function(e){return 15*e.factor}),D=c.a.a.withConfig({displayName:"footer__ContactLink",componentId:"r54yyk-6"})(["text-decoration:none;color:white;"]),K=function(e){e.data;var t={xs:2,xsOffset:0,sm:2,smOffset:0,md:1,mdOffset:0,lg:1,lgOffset:0},n={xs:9,xsOffset:3,sm:8,smOffset:4,md:3,mdOffset:1,lg:3,lgOffset:1},a={xs:9,xsOffset:3,sm:8,smOffset:4,md:3,mdOffset:1,lg:3,lgOffset:1};return l.a.createElement(L,null,l.a.createElement(s.Grid,{fluid:!0},l.a.createElement(G,{factor:5}),l.a.createElement(s.Row,null,l.a.createElement(M,n,l.a.createElement("div",null,l.a.createElement("strong",null,"Kontakt:"),l.a.createElement("br",null),l.a.createElement(D,{href:"mailto:melanie@jug-da.de"},"melanie@jug-da.de"),l.a.createElement("br",null),l.a.createElement(D,{href:"mailto:falk@jug-da.de"},"falk@jug-da.de"))),l.a.createElement(M,n,l.a.createElement("strong",null,"Veranstaltungsort:"),l.a.createElement("br",null),"cosee GmbH",l.a.createElement("br",null),"Mina-Rees-Straße. 8",l.a.createElement("br",null),"64295 Darmstadt"),l.a.createElement(M,n,l.a.createElement("strong",null,"Fotografien:"),l.a.createElement("br",null),"Alex Litvin (Unsplash)",l.a.createElement("br",null),"Bernd Rücker")),l.a.createElement(s.Row,null,l.a.createElement(M,a,l.a.createElement("strong",null,l.a.createElement(D,{href:"https://www.jug-da.de/impressum/"},"Impressum")),l.a.createElement("br",null),l.a.createElement("strong",null,l.a.createElement(D,{href:"https://www.jug-da.de/datenschutz/"},"Daten­schutz­erklärung"))),l.a.createElement(M,a,"Website made by ",l.a.createElement("br",null),l.a.createElement("strong",null,"© cosee 2019"))),l.a.createElement(G,{factor:5}),l.a.createElement(q,null,l.a.createElement(P,null,l.a.createElement("p",null,"Eine Veranstaltung des iJUG e.V., organisiert durch die JUG Darmstadt."))),l.a.createElement(G,{factor:3}),l.a.createElement(q,null,l.a.createElement(s.Col,t,l.a.createElement("a",{href:"https://www.twitter.com/JUG_DA"},l.a.createElement(z,{src:T}))),l.a.createElement(s.Col,t,l.a.createElement("a",{href:"mailto:info@jug-da.de"},l.a.createElement(z,{src:N})))),l.a.createElement(G,{factor:3})))},B=c.a.div.withConfig({displayName:"layout__StContent",componentId:"ii2kc2-0"})(["max-width:","px;min-width:","px;margin:0 auto;padding-top:0;background:",";"],1200,300,m.g),F=function(e){var t=e.children;return l.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(R,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(B,null,t,l.a.createElement(K,null)))},data:a})};F.propTypes={children:i.a.node.isRequired};t.a=F},151:function(e,t,n){"use strict";var a=n(144),r=n(0),l=n.n(r),o=n(4),i=n.n(o),c=n(141),u=n(142),m=u.a.div.withConfig({displayName:"icontextblock__StContainer",componentId:"jp1qed-0"})(["margin-bottom:2rem;"]),s=u.a.img.withConfig({displayName:"icontextblock__StImg",componentId:"jp1qed-1"})(["height:4rem;margin-bottom:0.5rem;"]),d=function(e){var t=Object(c.withPrefix)(e.icon);return l.a.createElement(m,null,l.a.createElement("div",null,l.a.createElement(s,{src:t})),l.a.createElement("div",null,e.content))};d.propTypes={icon:i.a.string.isRequired,content:i.a.node.isRequired};var f=n(146);n.d(t,"a",function(){return g}),n.d(t,"b",function(){return C}),n.d(t,"d",function(){return x}),n.d(t,"c",function(){return v}),n.d(t,"i",function(){return k}),n.d(t,"h",function(){return _}),n.d(t,"k",function(){return O}),n.d(t,"j",function(){return M}),n.d(t,"f",function(){return G}),n.d(t,"e",function(){return D}),n.d(t,"g",function(){return K});var g={text:"Kostenlos anmelden!",to:"https://www.eventbrite.de/e/speakonf-die-erste-speaker-unkonferenz-in-rheinmain-registrierung-54697506715"},h=u.a.span.withConfig({displayName:"content__StBold",componentId:"sc-1sj8qjw-0"})(["font-weight:normal;"]),p=u.a.ul.withConfig({displayName:"content__StUl",componentId:"sc-1sj8qjw-1"})(["margin:0;padding:0;"]),E=u.a.p.withConfig({displayName:"content__StParagraph",componentId:"sc-1sj8qjw-2"})(["font-size:1.3rem;"]),w=Object(u.a)(a.Grid).withConfig({displayName:"content__StGrid",componentId:"sc-1sj8qjw-3"})(["height:100%;"]),b={md:6,lg:3},y={md:6,lg:4},C={title:"Hallo Speaker!",content:"Vorträge, Talks & MeetUps – was sind eure Erfahrungen? Auf der SpeaKonf am 23.02.2019 tauschen wir unsere Erfahrungen aus – sei dabei!",theme:f.c,action:g,isHeroImage:!0},x="was-ist-eine-unkonf",v={title:"Was ist eine UnKonf?",content:l.a.createElement(a.Grid,{fluid:!0},l.a.createElement(a.Row,null,l.a.createElement(a.Col,b,l.a.createElement(d,{icon:"/icons/Barcamp.svg",content:l.a.createElement("div",null,"Eine UnKonf funktioniert ähnlich wie ein Barcamp.")})),l.a.createElement(a.Col,b,l.a.createElement(d,{icon:"/icons/Herz.svg",content:l.a.createElement("div",null,"Zu Beginn stimmen die Teilnehmenden über das Programm ab.")})),l.a.createElement(a.Col,b,l.a.createElement(d,{icon:"/icons/Sprecher.svg",content:l.a.createElement("div",null,"Jede teilnehmende Person ist potentielle Sprecherin oder Sprecher.")})),l.a.createElement(a.Col,b,l.a.createElement(d,{icon:"/icons/Wissen.svg",content:l.a.createElement("div",null,"Vorträge, Workshops, Diskussionsrunden oder jegliche andere Form des Wissensaustauschs sind denkbar.")})))),theme:f.f,action:g,anchorLink:x},k="wer-darf-mitmachen",_={title:"Wer darf mitmachen?",content:l.a.createElement(a.Grid,{fluid:!0},l.a.createElement(a.Row,null,l.a.createElement(a.Col,y,l.a.createElement(d,{icon:"/icons/Hase.svg",content:l.a.createElement("div",null,"Egal ob alter Konferenzhase oder Neuling auf den Bühnen dieser Welt, jeder Teilnehmer ist willkommen!")})),l.a.createElement(a.Col,y,l.a.createElement(d,{icon:"/icons/Erfahrungen.svg",content:l.a.createElement("div",null,"Dein Erfahrungsstand spielt keine Rolle. Es ist nicht wichtig, wie viele Jahre du bereits programmierst.")})),l.a.createElement(a.Col,y,l.a.createElement(d,{icon:"/icons/Fachgebiete.svg",content:l.a.createElement("div",null,"Wir kommen aus der IT-Branche, freuen uns jedoch auch über Teilnehmer/ innen anderer Fachgebiete.")})))),theme:f.e,action:g,anchorLink:k},j={xs:12,sm:12,md:6,lg:6},S=u.a.div.withConfig({displayName:"content__StDiv",componentId:"sc-1sj8qjw-4"})(["align-items:center;display:flex;flex-direction:column;"]),I=u.a.h1.withConfig({displayName:"content__StTitle",componentId:"sc-1sj8qjw-5"})(["font-size:3.25rem;margin-bottom:3rem;"]),O={content:l.a.createElement(S,null,l.a.createElement(I,null,"Mögliche Themen der SpeaKonf"),l.a.createElement(a.Grid,{fluid:!0},l.a.createElement(a.Row,null,l.a.createElement(a.Col,j,l.a.createElement(p,null,l.a.createElement("li",null,"Schreiben von ",l.a.createElement(h,null,"Abstracts")," und"," ",l.a.createElement(h,null,"Kurz-Bios")),l.a.createElement("li",null,l.a.createElement(h,null,"Erfahrungsaustausch")," zu verschiedenen Konferenzen"),l.a.createElement("li",null,l.a.createElement(h,null,"roter Faden")," für einen Vortrag"),l.a.createElement("li",null,l.a.createElement(h,null,"inhaltliche Erstellung")," der Folien"),l.a.createElement("li",null,l.a.createElement(h,null,"Tools")," für die Folienerstellung"),l.a.createElement("li",null,"Erstellung von ",l.a.createElement(h,null,"Grafiken")," und"," ",l.a.createElement(h,null,"Designtipps")),l.a.createElement("li",null,"Verwendung von ",l.a.createElement(h,null,"Bildern")," inklusive"," ",l.a.createElement(h,null,"Urheberrechtsfragen")))),l.a.createElement(a.Col,j,l.a.createElement(p,null,l.a.createElement("li",null,"“Absolut ",l.a.createElement(h,null,"souverän")," wirken bei totaler Ahnungslosigkeit”"),l.a.createElement("li",null,"Best Practices für ",l.a.createElement(h,null,"Live-Demos")),l.a.createElement("li",null,l.a.createElement(h,null,"Feedback")," von Zuhörern"),l.a.createElement("li",null,l.a.createElement(h,null,"Sprechübungen")," (Betonung, Tempo)"),l.a.createElement("li",null,l.a.createElement(h,null,"Probevorträge")," vor laufender Kamera mit Feedback"))))))},R={xs:2,sm:2,md:2,lg:2},T={xs:10,sm:10,md:10,lg:10},N=Object(c.withPrefix)("/icons/Kalender.svg"),L=Object(c.withPrefix)("/icons/Ort.svg"),z=Object(u.a)(a.Row).withConfig({displayName:"content__StRow",componentId:"sc-1sj8qjw-6"})(["align-items:center;"]),q=l.a.createElement(w,{fluid:!0},l.a.createElement(z,null,l.a.createElement(a.Col,R,l.a.createElement("img",{src:N,style:{width:"2rem"}})),l.a.createElement(a.Col,T,l.a.createElement(E,null,"Sa. 23. Februar 2019 ",l.a.createElement("br",null),"10:00 Uhr bis 17:00 Uhr")))),P=l.a.createElement(w,{fluid:!0},l.a.createElement(a.Row,null,l.a.createElement(a.Col,R,l.a.createElement("img",{src:L,style:{width:"2rem"}})),l.a.createElement(a.Col,T,l.a.createElement(E,null,"cosee GmbH ",l.a.createElement("br",null),"Mina-Rees-Straße 8",l.a.createElement("br",null),"64295 Darmstadt")))),M={content:l.a.createElement(S,null,l.a.createElement(I,null,"Warum eine SpeaKonf?"),l.a.createElement(a.Grid,{fluid:!0},l.a.createElement(a.Row,null,l.a.createElement(a.Col,j,"Mit der ",l.a.createElement(h,null,"SpeaKonf")," fördern wir den"," ",l.a.createElement(h,null,"Erfahrungsaustausch")," zwischen Sprecherinnen und Sprechern. Denn die ",l.a.createElement(h,null,"Skills"),", die man braucht, um vor einer Gruppe von Menschen zu sprechen, sind mindestens ebenso wichtig wie das ",l.a.createElement(h,null,"Fachwissen"),", das hinter jedem"," ",l.a.createElement(h,null,"Vortrag"),", ",l.a.createElement(h,null,"Lightning Talk")," oder einer"),l.a.createElement(a.Col,j,l.a.createElement(h,null,"Panel Diskussion")," steht. Wir laden explizit Sprecherinnen und Sprecher mit"," ",l.a.createElement(h,null,"unterschiedlichem Erfahrungsstand")," ein, vom"," ",l.a.createElement(h,null,"kompletten Neuling bis zum abgehärteten Vollprofi")," ","und alles dazwischen. Denn SO entstehen die"," ",l.a.createElement(h,null,"interessantesten Gespräche"),"!"))))},G="wann",D={title:"Wann?",content:q,theme:f.f,action:{text:"Kalendereintrag",to:"calendar.ics"},anchorLink:G},K={title:"Wo?",content:P,theme:f.b,action:{text:"Karte",to:"https://goo.gl/maps/fX1AfbSmFv82"},anchorLink:"wo"}},154:function(e,t,n){var a;e.exports=(a=n(162))&&a.default||a},156:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"a",function(){return m});var a=n(0),r=n.n(a),l=n(146),o=(n(141),n(174),n(151)),i=r.a.createElement("p",null,"Melde dich jetzt kostenlos an und nimm an der kommenden UnKonf teil!"),c=o.a,u="anmeldung",m={title:"Wir freuen uns auf deinen Besuch!",content:i,action:c,theme:l.d,anchorLink:u}},157:function(e,t,n){"use strict";n.d(t,"a",function(){return E}),n.d(t,"b",function(){return w});var a=n(0),r=n.n(a),l=n(146),o=n(142),i=n(144),c=n(141),u=Object(c.withPrefix)("/logo/cosee.png"),m=Object(c.withPrefix)("/logo/accso.png"),s=Object(c.withPrefix)("/logo/Bitexpert.png"),d=o.a.img.withConfig({displayName:"sponsorbox__StImage",componentId:"sc-1k8ge9v-0"})(["     max-width:240px;"]),f=o.a.span.withConfig({displayName:"sponsorbox__StBold",componentId:"sc-1k8ge9v-1"})(["font-weight:normal;"]),g={xs:12,xsOffset:0,sm:6,smOffset:0,md:4,mdOffset:2,lg:4,lgOffset:2},h={xs:12,xsOffset:0,sm:6,smOffset:0,md:4,mdOffset:1,lg:4,lgOffset:1},p=r.a.createElement(i.Grid,null,r.a.createElement(i.Row,null,r.a.createElement(i.Col,g,r.a.createElement(d,{src:u})),r.a.createElement(i.Col,h,r.a.createElement("p",null,r.a.createElement(f,null,"cosee")," ist unser Gastgeber und hat uns diese Webseite gebaut und umgesetzt."))),r.a.createElement(i.Row,null,r.a.createElement(i.Col,g,r.a.createElement(d,{src:m})),r.a.createElement(i.Col,h,r.a.createElement("p",null,r.a.createElement(f,null,"Accso")," versorgt uns mit leckerem Essen."))),r.a.createElement(i.Row,null,r.a.createElement(i.Col,g,r.a.createElement(d,{src:s})),r.a.createElement(i.Col,h,r.a.createElement("p",null,r.a.createElement(f,null,"bitExpert")," verwaltet unsere Social Media-Accounts und hostet unsere Domain.")))),E="sponsors",w={title:"Unsere Sponsoren",content:p,action:null,theme:l.g,anchorLink:E}},158:function(e,t,n){"use strict";n.d(t,"b",function(){return v}),n.d(t,"a",function(){return _});var a=n(7),r=n.n(a),l=n(51),o=n.n(l),i=n(0),c=n.n(i),u=n(142),m=n(146),s=n(144),d=n(175),f=n.n(d),g=(n(145),u.a.div.withConfig({displayName:"countdown__StCountDownContainer",componentId:"j755x4-0"})(["display:flex;flex-direction:column;"])),h=Object(u.a)(s.Col).attrs({xs:12,className:"hidden-md hidden-lg hidden-xl"}).withConfig({displayName:"countdown__VSpacer",componentId:"j755x4-1"})(["height:20px;"]),p=u.a.div.withConfig({displayName:"countdown__StCountDownContainerField",componentId:"j755x4-2"})(["display:flex;flex-direction:column;align-items:center;"]),E=Object(u.a)(s.Row).withConfig({displayName:"countdown__StCenteredRow",componentId:"j755x4-3"})(["justify-content:center;"]),w=u.a.p.withConfig({displayName:"countdown__StExpiredText",componentId:"j755x4-4"})(["font-size:3rem;font-weight:normal;"]),b=u.a.span.withConfig({displayName:"countdown__CountDownValue",componentId:"j755x4-5"})(["font-size:3.5rem;line-height:3.5rem;font-weight:bold;"]),y=u.a.span.withConfig({displayName:"countdown__CountDownDescription",componentId:"j755x4-6"})(["font-size:1.5rem;"]),C=Object(u.a)(s.Grid).withConfig({displayName:"countdown__StGrid",componentId:"j755x4-7"})([""]),x={xs:9,sm:6,md:3,lg:2},v="countdown",k=function(e){function t(t){var n;(n=e.call(this,t)||this).getTimeLeft=n.getTimeLeft.bind(o()(o()(n)));var a=n.getTimeLeft(),r=a.delta,l=a.daysLeft,i=a.hoursLeft,c=a.minutesLeft,u=a.secondsLeft;return r>0&&(n.countDownTimer=setInterval(n.getTimeLeft,1e3)),n.state={expired:r<=0,daysLeft:l,hoursLeft:i,minutesLeft:c,secondsLeft:u},n}r()(t,e);var n=t.prototype;return n.getTimeLeft=function(){var e=f()().tz("Europe/Berlin"),t=f.a.tz("2019-02-23 10:00:00","Europe/Berlin")-e,n=0,a=0,r=0,l=0;if(t>0){var o=t/1e3,i=o/60,c=i/60;l=parseInt(o%60),r=parseInt(i%60),a=parseInt(c%24),n=Math.round(t/864e5)}return this.setState({expired:t<=0,daysLeft:n,hoursLeft:a,minutesLeft:r,secondsLeft:l}),{delta:t,daysLeft:n,hoursLeft:a,minutesLeft:r,secondsLeft:l}},n.componentWillUnmount=function(){this.countDownTimer&&clearInterval(this.countDownTimer)},n.render=function(){var e=c.a.createElement(c.a.Fragment,null,c.a.createElement(s.Col,x,c.a.createElement(g,{id:v},c.a.createElement(p,null,c.a.createElement(b,null,this.state.daysLeft),c.a.createElement(y,null,"Tage")))),c.a.createElement(h,null),c.a.createElement(s.Col,x,c.a.createElement(g,null,c.a.createElement(p,null,c.a.createElement(b,null,this.state.hoursLeft),c.a.createElement(y,null,"Stunden")))),c.a.createElement(h,null),c.a.createElement(s.Col,x,c.a.createElement(g,null,c.a.createElement(p,null,c.a.createElement(b,null,this.state.minutesLeft),c.a.createElement(y,null,"Minuten")))),c.a.createElement(h,null),c.a.createElement(s.Col,x,c.a.createElement(g,null,c.a.createElement(p,null,c.a.createElement(b,null,this.state.secondsLeft),c.a.createElement(y,null,"Sekunden"))))),t=this.state.expired?c.a.createElement(w,null,"Juhuuu, es ist SpeaKonf!"):e;return c.a.createElement(C,null,c.a.createElement(E,null,t))},t}(c.a.Component),_={content:c.a.createElement(k,null),action:null,title:null,theme:m.a,disableMargin:!0}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"SpeaKonf"}}}}},162:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),l=n(4),o=n.n(l),i=n(68),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},179:function(e,t,n){},180:function(e){e.exports={data:{site:{siteMetadata:{title:"SpeaKonf",description:"SpeaKonf",author:"@coseeaner"}}}}}}]);
//# sourceMappingURL=1-4b86c65d2cbc3ef886ef.js.map