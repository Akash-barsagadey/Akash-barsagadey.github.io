(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{51:function(e,s,t){},74:function(e,s,t){},81:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(0),n=t(20),i=t.n(n),r=(t(51),t(15)),l=t(16),o=t(18),j=t(17),d=(t(80),t(54)),h=t.n(d),b=(t(74),t(55)),m=t.n(b),O=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.occupation,t=(this.props.data.description,this.props.data.address.city),a=this.props.data.social.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.url,children:Object(c.jsx)("i",{className:e.className})})},e.name)}));return Object(c.jsxs)("header",{id:"home",children:[Object(c.jsxs)("nav",{id:"nav-wrap",children:[Object(c.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(c.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(c.jsxs)("ul",{id:"nav",className:"nav",children:[Object(c.jsx)("li",{className:"current",children:Object(c.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Education"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#skills",children:"Skills"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})})]})]}),Object(c.jsx)("div",{className:"row banner",children:Object(c.jsxs)("div",{className:"banner-text",children:[Object(c.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e,"."]}),Object(c.jsx)(m.a,{className:"typingeffect",text:["I am a ".concat(s," in ").concat(t,",India .")],speed:100,eraseDelay:700}),Object(c.jsx)("hr",{}),Object(c.jsx)("ul",{className:"social",children:a})]})}),Object(c.jsx)("p",{className:"scrolldown",children:Object(c.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(c.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(a.Component),u=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.url,children:Object(c.jsx)("i",{className:e.className})})},e.name)}));return Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"twelve columns",children:Object(c.jsx)("ul",{className:"social-links",children:e})}),Object(c.jsx)("div",{id:"go-top",children:Object(c.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(c.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(a.Component),p=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,a=this.props.data.address.street,n=this.props.data.address.city,i=this.props.data.address.state,r=this.props.data.address.zip,l=this.props.data.phone,o=this.props.data.email,j=this.props.data.resumedownload;return Object(c.jsx)("section",{id:"about",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"three columns",children:Object(c.jsx)("img",{className:"profile-pic",src:s,alt:"Tim Baker Profile Pic"})}),Object(c.jsxs)("div",{className:"nine columns main-col",children:[Object(c.jsx)("h2",{children:"About Me"}),Object(c.jsx)("p",{children:t}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"columns contact-details",children:[Object(c.jsx)("h2",{children:"Contact Details"}),Object(c.jsxs)("p",{className:"address",children:[Object(c.jsx)("span",{children:e}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:[a,Object(c.jsx)("br",{}),n," ",i,", ",r]}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:l}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:o})]})]}),Object(c.jsx)("div",{className:"columns download",children:Object(c.jsx)("p",{children:Object(c.jsxs)("a",{href:j,target:"_blank",className:"button",children:[Object(c.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),t}(a.Component),x=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{children:e.school}),Object(c.jsxs)("p",{className:"info",children:[e.degree," ",Object(c.jsx)("span",{children:"\u2022"}),Object(c.jsx)("em",{className:"date",children:e.graduated})]}),Object(c.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.certifications.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{children:e.name}),Object(c.jsxs)("p",{className:"info",children:[e.issuingOrganization," :",Object(c.jsx)("a",{href:e.url,target:"_blank",children:"See certification"})]})]},e.name)}));return Object(c.jsxs)("section",{id:"resume",children:[Object(c.jsxs)("div",{className:"row education",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Education"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:Object(c.jsx)("div",{className:"row item",children:Object(c.jsx)("div",{className:"twelve columns",children:e})})})]}),Object(c.jsxs)("div",{className:"row work",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Certification"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:s})]})]})}}]),t}(a.Component),f=(t(35),t(75),t(36)),v=t(21),N=t(84),w=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage,this.props.data.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{style:{width:e.level},className:s}),Object(c.jsx)("em",{children:e.name})]},e.name)}));var e=this.props.data.skills.map((function(e){return Object(c.jsx)("p",{children:e.name})})),s=this.props.data.technicalSkills.map((function(e){return Object(c.jsx)("p",{children:e.name})}))}return Object(c.jsxs)("section",{id:"skills",children:[Object(c.jsx)("div",{className:"site-card-wrapper"}),Object(c.jsxs)("div",{className:"row skill",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Skills"})})}),Object(c.jsxs)(f.a,{gutter:16,children:[Object(c.jsx)(v.a,{span:12,children:Object(c.jsx)(N.a,{title:"Technical skills",bordered:!1,children:s})}),Object(c.jsx)(v.a,{span:12,children:Object(c.jsx)(N.a,{title:"Tech stacks",bordered:!1,children:e})})]})]})]})}}]),t}(a.Component),g=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("blockquote",{children:[Object(c.jsx)("p",{children:e.text}),Object(c.jsx)("cite",{children:e.user})]})},e.user)}));return Object(c.jsx)("section",{id:"testimonials",children:Object(c.jsx)("div",{className:"text-container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"two columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Client Testimonials"})})}),Object(c.jsx)("div",{className:"ten columns flex-container",children:Object(c.jsx)("ul",{className:"slides",children:e})})]})})})}}]),t}(a.Component),k=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data2)var e=this.props.data2.work.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.company}),Object(c.jsxs)("p",{className:"info",children:[e.title,Object(c.jsx)("span",{children:"\u2022"})," ",Object(c.jsx)("em",{className:"date",children:e.years})]}),Object(c.jsx)("p",{children:e.description})]},e.company)}));if(this.props.data)var s=this.props.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(c.jsx)("div",{className:"columns portfolio-item",children:Object(c.jsx)("div",{className:"item-wrap",children:Object(c.jsxs)("a",{href:e.url,target:"_blank",title:e.title,children:[Object(c.jsx)("img",{alt:e.title,src:s}),Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)("div",{className:"portfolio-item-meta",children:[Object(c.jsx)("h5",{children:e.title}),Object(c.jsx)("p",{children:e.category})]})}),Object(c.jsx)("div",{className:"link-icon",children:Object(c.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(c.jsxs)("section",{id:"portfolio",children:[Object(c.jsxs)("div",{className:"row work",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Work"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:e})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"twelve columns collapsed",children:[Object(c.jsx)("h1",{children:"Check Out Some of My Works."}),Object(c.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:s})]})})]})}}]),t}(a.Component),y=t(64),D=t.n(y),C=t(65),S=t.n(C);window._=D.a,window.moment=S.a;var T=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},c}return Object(l.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{data:this.state.resumeData.main}),Object(c.jsx)(p,{data:this.state.resumeData.main}),Object(c.jsx)(x,{data:this.state.resumeData.resume}),Object(c.jsx)(k,{data:this.state.resumeData.portfolio,data2:this.state.resumeData.resume}),Object(c.jsx)(w,{data:this.state.resumeData.resume}),Object(c.jsx)(g,{data:this.state.resumeData.testimonials}),Object(c.jsx)(u,{data:this.state.resumeData.main})]})}}]),t}(a.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(c.jsx)(T,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");W?function(e){fetch(e).then((function(s){404===s.status||-1===s.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):E(e)}))}}()}},[[81,1,2]]]);
//# sourceMappingURL=main.5ca2b3bf.chunk.js.map