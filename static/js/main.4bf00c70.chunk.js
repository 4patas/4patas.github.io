(this["webpackJsonpbott-digital"]=this["webpackJsonpbott-digital"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(38),s=a.n(r),i=(a(44),a(45),a(23),a(46),a(10)),o=(a(47),a(0)),l=function(e){var t=e.isLoggedIn,a=e.onLogout;return Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"navbar-content",children:[Object(o.jsx)("h1",{className:"logo",children:"4Patas"}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/",children:"P\xe1gina Inicial"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/animais",children:"Animais"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/sobre",children:"Sobre"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/contato",children:"Contato"})}),t?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/perfil",children:"Perfil"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:a,className:"logout-button",children:"Logout"})})]}):Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/login",children:"Login"})})]})]})})},j=a(12),d=a(13),u=a(15),b=a(14),h=(a(54),a.p+"static/media/logo.27a6871c.png"),A=a.p+"static/media/logo2.aa9783a4.png",O=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("div",{className:"header-content",children:[Object(o.jsxs)("div",{className:"options",children:[Object(o.jsx)("img",{src:h,className:"logoBanner",alt:"logo"}),Object(o.jsx)("h2",{children:"Veja os pets dispon\xedveis"}),Object(o.jsx)("p",{children:"Utilize agora nossa plataforma para doar ou adotar um pet. Utilize agora nossa plataforma para doar ou adotar um pet. Utilize agora nossa plataforma para doar ou adotar um pet."}),Object(o.jsxs)("div",{className:"botoes",children:[Object(o.jsx)("a",{id:"contact-button",className:"botoes-primary",href:"/AnimaisDisponiveis",children:"Adotar um animal"}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:"http://localhost:3000/AdicionarAnimal",id:"contact-button",className:"botoes-sencondary",children:"Doar um animal"})]})]}),Object(o.jsx)("div",{className:"options",children:Object(o.jsx)("img",{src:A,className:"logoBanner",alt:"logo"})})]})})}}]),a}(n.Component),p=(a(55),a.p+"static/media/after.6c0150f8.png"),m=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"about",id:"about",children:[Object(o.jsxs)("div",{className:"introducao",children:[Object(o.jsx)("h2",{children:"Encontre o animal ideal para voc\xea"}),Object(o.jsx)("p",{children:"A plataforma Quatro Patas facilita sua busca pelo pet ideal, conectando voc\xea a abrigos e doadores resposaveis. Com filtros personalizados, voc\xea encontra o animal que mais combina com seu estilo de vida, garantindo uma ado\xe7\xe3o respons\xe1vel e consciente. Fa\xe7a parte dessa rede e encontre seu companheiro perfeito!"})]}),Object(o.jsx)("div",{className:"introducao2",children:Object(o.jsx)("img",{src:p,className:"banner",alt:"logo"})})]})}}]),a}(n.Component),x=a(9),v=a.n(x),g=(a(74),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={animals:[],totalAnimals:0,pageNumber:1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchAnimals(this.state.pageNumber)}},{key:"fetchAnimals",value:function(e){var t=this;v.a.get("http://localhost:3001/animais").then((function(e){var a=e.data.sort((function(e,t){return t.id-e.id})).slice(0,5);t.setState({animals:a,totalAnimals:e.data.length})})).catch((function(e){console.error("Erro ao buscar animais:",e)})),v.a.get("https://reqres.in/api/users?page=".concat(e)).then((function(e){t.successShow(e)})).catch((function(e){t.successShow(e)}))}},{key:"successShow",value:function(e){console.log("Resposta da API externa:",e.data)}},{key:"render",value:function(){this.state.totalAnimals;return Object(o.jsxs)("section",{className:"client-form",id:"contact",children:[Object(o.jsx)("div",{className:"newClient-title"}),Object(o.jsx)("h2",{className:"title",children:" Animais anunciados recentemente"}),Object(o.jsxs)("div",{className:"pet-list",children:[Object(o.jsx)("hr",{}),this.state.animals.map((function(e){return Object(o.jsxs)("div",{className:"card",children:[" ",Object(o.jsxs)("a",{href:"http://localhost:3000/animais/".concat(e.id),children:[Object(o.jsx)("img",{src:e.imagem,className:"image",alt:e.nome})," ",Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)("h4",{children:Object(o.jsxs)("b",{children:[e.nome," - ",e.especie]})}),Object(o.jsx)("p",{children:e.descricao})]})]})]},e.id)}))]}),Object(o.jsx)("div",{})]})}}]),a}(n.Component)),f=(a(75),a.p+"static/media/bg1.835bbc10.png"),C=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"adocao",id:"about",children:[Object(o.jsxs)("div",{className:"grid",children:[Object(o.jsx)("h2",{children:"Encontre Seu Pet Ideal na 4 Patas"}),Object(o.jsx)("p",{children:"Adotar pela plataforma 4 Patas \xe9 simples e r\xe1pido! Acesse, crie seu perfil e explore os diversos animais dispon\xedveis. Com filtros personalizados, encontre o pet ideal, envie sua solicita\xe7\xe3o e aguarde a aprova\xe7\xe3o. Nossa equipe est\xe1 100% dedicada a ajudar cada amigo de quatro patas a encontrar um lar amoroso."})]}),Object(o.jsx)("div",{className:"grid2",children:Object(o.jsx)("img",{src:f,className:"banner",alt:"logo"})})]})}}]),a}(n.Component),w=(a(76),a.p+"static/media/bg2.2b6a772d.png"),N=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"doacao",id:"about",children:[Object(o.jsx)("div",{className:"textArea2",children:Object(o.jsx)("img",{src:w,className:"banner2",alt:"logo"})}),Object(o.jsxs)("div",{className:"textArea",children:[Object(o.jsx)("h2",{children:"Doe Seu Pet com Seguran\xe7a na 4 Patas"}),Object(o.jsx)("p",{children:"A plataforma 4 Patas ajuda voc\xea a doar seu animalzinho de forma respons\xe1vel e segura. Ao cadastrar seu pet, voc\xea fornece todas as informa\xe7\xf5es necess\xe1rias para que ele encontre um novo lar adequado. Atrav\xe9s de uma an\xe1lise cuidadosa dos interessados, garantimos que a ado\xe7\xe3o seja feita por pessoas comprometidas com o bem-estar do animal, promovendo uma transi\xe7\xe3o tranquila e consciente."})]})]})}}]),a}(n.Component),B=(a(24),function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)("div",{className:"footer-content",children:[Object(o.jsx)("h2",{children:"4Patas"}),Object(o.jsx)("p",{children:"\xa9 2024 4Patas. Todos os direitos reservados."}),Object(o.jsxs)("div",{className:"social-links",children:[Object(o.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",children:"Facebook"}),Object(o.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer",children:"Instagram"}),Object(o.jsx)("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})]})]})})});var D=function(){return document.title="4 Patas",Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(O,{}),Object(o.jsx)(m,{}),Object(o.jsx)(g,{}),Object(o.jsx)(C,{}),Object(o.jsx)(N,{}),Object(o.jsx)(B,{})]})},S=a(5),E=a.n(S),I=a(16),Q=a(2),y=a(3),M={container:{padding:"20px",maxWidth:"600px",margin:"auto",textAlign:"center",border:"1px solid #ccc",borderRadius:"8px",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)"},image:{maxWidth:"100%",height:"auto",borderRadius:"8px"},button:{marginTop:"20px",padding:"10px 15px",border:"none",borderRadius:"5px",backgroundColor:"#007bff",color:"#fff",cursor:"pointer",fontSize:"16px"},usuarioDetails:{marginTop:"20px",border:"1px solid #ccc",borderRadius:"8px",padding:"10px",backgroundColor:"#f9f9f9"}},P=function(){var e=Object(y.e)().id,t=Object(n.useState)(null),a=Object(Q.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(null),i=Object(Q.a)(s,2),l=i[0],j=i[1],d=Object(n.useState)(!0),u=Object(Q.a)(d,2),b=u[0],h=u[1],A=Object(n.useState)(null),O=Object(Q.a)(A,2),p=O[0],m=O[1],x=Object(n.useState)(!1),v=Object(Q.a)(x,2),g=v[0],f=v[1];Object(n.useEffect)((function(){(function(){var t=Object(I.a)(E.a.mark((function t(){var a,n,c,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3001/animais/".concat(e));case 3:if((a=t.sent).ok){t.next=6;break}throw new Error("Animal n\xe3o encontrado");case 6:return t.next=8,a.json();case 8:return n=t.sent,r(n),t.next=12,fetch("http://localhost:3001/usuarios/".concat(n.idUsuario));case 12:if((c=t.sent).ok){t.next=15;break}throw new Error("Usu\xe1rio n\xe3o encontrado");case 15:return t.next=17,c.json();case 17:s=t.sent,j(s),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(0),m(t.t0.message);case 24:return t.prev=24,h(!1),t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[0,21,24,27]])})));return function(){return t.apply(this,arguments)}})()()}),[e]);return b?Object(o.jsx)("div",{children:"Carregando..."}):p?Object(o.jsx)("div",{children:p}):Object(o.jsxs)("div",{style:M.container,children:[Object(o.jsx)("h1",{children:c.nome}),c.imagem&&Object(o.jsx)("img",{src:c.imagem,alt:c.nome,style:M.image}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Idade:"})," ",c.idade," anos"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Esp\xe9cie:"})," ",c.especie]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Ra\xe7a:"})," ",c.raca]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Descri\xe7\xe3o:"})," ",c.descricao]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Cidade do Usu\xe1rio:"})," ",l?l.cidade:"Carregando..."]})," ",Object(o.jsx)("button",{onClick:function(){f((function(e){return!e}))},style:M.button,children:g?"Ocultar Detalhes do Usu\xe1rio":"Ver Detalhes do Usu\xe1rio"}),g&&l&&Object(o.jsxs)("div",{style:M.usuarioDetails,children:[Object(o.jsx)("h2",{children:"Detalhes do Usu\xe1rio"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Nome:"})," ",l.nome]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Email:"})," ",l.email]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Tipo:"})," ",l.tipo]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Endere\xe7o:"})," ",l.endereco]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Cidade:"})," ",l.cidade]})," ",Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Telefone:"})," ",l.telefone]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:"/",className:"btn-primary",children:"Voltar para a p\xe1gina inicial"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})};var z=function(){return document.title="Detalhes do animal",Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(P,{}),Object(o.jsx)(B,{})]})},L=(a(78),a(79),a.p+"static/media/loading.7165d27c.gif");var H=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(Q.a)(e,2),a=t[0],c=t[1];function r(e){a[e.target.name]=e.target.value,c(a),console.log(a)}return Object(o.jsxs)("section",{class:"contact-form",id:"contact",children:[Object(o.jsx)("h2",{children:Object(o.jsx)("img",{src:"data:image/png;base64,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",className:"App-logo",width:"50%",alt:"logo"})}),Object(o.jsx)("p",{children:"\xc1rea do Cliente"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),document.getElementById("loading").style.visibility="visible",document.getElementById("sendMessageButton").disabled=!0,function(){var e=new FormData;Object.keys(a).forEach((function(t){return e.append(t,a[t])})),v.a.post("http://localhost:3030/login",e,{headers:{"Content-Type":"multipart/form-data; boundary=".concat(e._boundary),"Access-Control-Allow-Origin":"*"}}).then((function(e){console.log("Tudo certo ",e.data)}))}(),setTimeout((function(){document.getElementById("loading").style.visibility="hidden",document.getElementById("sendMessageButton").disabled=!1,alert("Mensagem enviada")}),3e3)},children:[Object(o.jsxs)("div",{className:"form-area-login",children:[Object(o.jsx)("input",{className:"input-small",id:"name",name:"email",type:"email",placeholder:"E-mail",required:"required",onChange:r}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input-small",id:"email",name:"password",type:"password",placeholder:"Senha",required:"required",onChange:r}),Object(o.jsx)("br",{}),Object(o.jsx)(i.b,{class:"link-esqueceu-senha",to:"Busca-organica/",children:" Esqueceu sua senha? "})]}),Object(o.jsx)("img",{className:"loading",width:"100%",height:"100%",id:"loading",src:L,alt:"logo"}),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("button",{className:"btn-submit",id:"sendMessageButton",type:"submit",children:"Logar"})})]})]})};var Y=function(){return document.title="4 Patas - Cria\xe7\xe3o de sites",Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(H,{}),Object(o.jsx)(B,{})]})},F=a(27),U=a(28),W=(a(80),function(){var e=Object(n.useState)([]),t=Object(Q.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(Q.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(""),d=Object(Q.a)(j,2),u=d[0],b=d[1],h=Object(n.useState)(""),A=Object(Q.a)(h,2),O=A[0],p=A[1],m=Object(n.useState)(""),x=Object(Q.a)(m,2),g=x[0],f=x[1],C=Object(n.useState)(""),w=Object(Q.a)(C,2),N=w[0],D=w[1],S=Object(n.useState)(""),y=Object(Q.a)(S,2),M=y[0],P=y[1],z=Object(n.useState)(!0),L=Object(Q.a)(z,2),H=L[0],Y=L[1];Object(n.useEffect)((function(){(function(){var e=Object(I.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("http://localhost:3001/animais");case 3:return t=e.sent,e.next=6,Promise.all(t.data.map(function(){var e=Object(I.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://localhost:3001/usuarios/".concat(t.idUsuario));case 2:return a=e.sent,e.abrupt("return",Object(U.a)(Object(U.a)({},t),{},{usuario:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:a=e.sent,c(a),Y(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Erro ao buscar os animais:",e.t0),Y(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var W=Object(F.a)(new Set(a.map((function(e){return e.raca})))),G=Object(F.a)(new Set(a.map((function(e){return e.usuario?e.usuario.cidade:""})).filter((function(e){return e})))),X=a.filter((function(e){var t=!i||e.especie.toLowerCase()===i.toLowerCase(),a=!u||("filhote"===u?e.idade<1:e.idade>=1),n=!O||e.sexo.toLowerCase()===O.toLowerCase(),c=!g||e.porte.toLowerCase()===g.toLowerCase(),r=!N||e.raca.toLowerCase()===N.toLowerCase(),s=!M||e.usuario&&e.usuario.cidade.toLowerCase()===M.toLowerCase();return t&&a&&n&&c&&r&&s}));return H?Object(o.jsx)("div",{children:"Carregando..."}):Object(o.jsxs)("div",{className:"animal-list-container",children:[Object(o.jsx)("h1",{children:"Lista de Animais"}),Object(o.jsxs)("div",{className:"filter-container",children:[Object(o.jsx)("label",{htmlFor:"species",children:"Filtrar por Esp\xe9cie:"}),Object(o.jsxs)("select",{id:"species",value:i,onChange:function(e){l(e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"Todas"}),Object(o.jsx)("option",{value:"Cachorro",children:"C\xe3o"}),Object(o.jsx)("option",{value:"Gato",children:"Gato"})]}),Object(o.jsx)("label",{htmlFor:"age",children:"Filtrar por Idade:"}),Object(o.jsxs)("select",{id:"age",value:u,onChange:function(e){b(e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"Todas"}),Object(o.jsx)("option",{value:"filhote",children:"Filhote"}),Object(o.jsx)("option",{value:"adulto",children:"Adulto"})]}),Object(o.jsx)("label",{htmlFor:"sex",children:"Filtrar por Sexo:"}),Object(o.jsxs)("select",{id:"sex",value:O,onChange:function(e){p(e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"Todos"}),Object(o.jsx)("option",{value:"macho",children:"Macho"}),Object(o.jsx)("option",{value:"f\xeamea",children:"F\xeamea"})]}),Object(o.jsx)("label",{htmlFor:"size",children:"Filtrar por Porte:"}),Object(o.jsxs)("select",{id:"size",value:g,onChange:function(e){f(e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"Todos"}),Object(o.jsx)("option",{value:"pequeno",children:"Pequeno"}),Object(o.jsx)("option",{value:"m\xe9dio",children:"M\xe9dio"}),Object(o.jsx)("option",{value:"grande",children:"Grande"})]}),Object(o.jsx)("label",{htmlFor:"breed",children:"Filtrar por Ra\xe7a:"}),Object(o.jsxs)("select",{id:"breed",value:N,onChange:function(e){D(e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"Todas"}),W.map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},t)}))]}),Object(o.jsx)("label",{htmlFor:"city",children:"Filtrar por Cidade:"}),Object(o.jsxs)("select",{id:"city",value:M,onChange:function(e){P(e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"Todas"}),G.map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},t)}))]})]}),Object(o.jsx)("div",{className:"animal-cards",children:X.map((function(e){return Object(o.jsxs)("div",{className:"animal-card",children:[e.imagem&&Object(o.jsx)("img",{src:e.imagem,alt:e.nome,className:"image"}),Object(o.jsx)("h3",{children:e.nome}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Esp\xe9cie:"})," ",e.especie]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Ra\xe7a:"})," ",e.raca]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Idade:"})," ",e.idade," anos"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Sexo:"})," ",e.sexo]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Porte:"})," ",e.porte]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Cidade:"})," ",e.usuario?e.usuario.cidade:"Desconhecida"]})," ",Object(o.jsx)("a",{href:"/animais/".concat(e.id),className:"view-button",children:"Ver Detalhes"})]},e.id)}))}),Object(o.jsx)(B,{})]})}),G=(a(81),function(){var e=Object(n.useState)(""),t=Object(Q.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(Q.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(""),d=Object(Q.a)(j,2),u=d[0],b=d[1],h=Object(n.useState)(""),A=Object(Q.a)(h,2),O=A[0],p=A[1],m=Object(n.useState)(""),x=Object(Q.a)(m,2),g=x[0],f=x[1],C=Object(n.useState)(""),w=Object(Q.a)(C,2),N=w[0],B=w[1],D=Object(n.useState)(""),S=Object(Q.a)(D,2),y=S[0],M=S[1],P=Object(n.useState)(""),z=Object(Q.a)(P,2),L=z[0],H=z[1],Y=Object(n.useState)(""),F=Object(Q.a)(Y,2),U=F[0],W=F[1],G=Object(n.useState)(!1),X=Object(Q.a)(G,2),T=X[0],R=X[1],Z=Object(n.useState)(""),k=Object(Q.a)(Z,2),q=k[0],V=k[1],J=function(){var e=Object(I.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),R(!0),e.prev=2,n={nome:a,especie:i,raca:u,idade:O,sexo:g,porte:N,imagem:y,descricao:L,idUsuario:U,dataCriacao:(new Date).toISOString().slice(0,10)},e.next=6,v.a.post("http://localhost:3001/animais",n);case 6:console.log(n),alert("Animal adicionado com sucesso!"),K(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),V("Erro ao adicionar o animal. Tente novamente."),console.error(e.t0);case 15:return e.prev=15,R(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,11,15,18]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){c(""),l(""),b(""),p(""),f(""),B(""),M(""),H(""),W(""),V("")};return Object(o.jsxs)("div",{className:"add-animal-container",children:[Object(o.jsx)("h1",{children:"Adicionar Novo Animal"}),q&&Object(o.jsx)("p",{className:"error-message",children:q}),Object(o.jsxs)("form",{onSubmit:J,className:"add-animal-form",children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"nome",children:"Nome:"}),Object(o.jsx)("input",{type:"text",id:"nome",value:a,onChange:function(e){return c(e.target.value)},required:!0})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"especie",children:"Esp\xe9cie:"}),Object(o.jsxs)("select",{id:"especie",value:i,onChange:function(e){return l(e.target.value)},required:!0,children:[Object(o.jsx)("option",{value:"",children:"Selecione uma esp\xe9cie"}),Object(o.jsx)("option",{value:"cachorro",children:"Cachorro"}),Object(o.jsx)("option",{value:"gato",children:"Gato"})]})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"raca",children:"Ra\xe7a:"}),Object(o.jsxs)("select",{id:"raca",value:u,onChange:function(e){return b(e.target.value)},required:!0,children:[Object(o.jsx)("option",{value:"",children:"Selecione uma ra\xe7a"}),Object(o.jsx)("option",{value:"SRD",children:"SRD (Sem Ra\xe7a Definida)"}),Object(o.jsx)("option",{value:"Poodle",children:"Poodle"}),Object(o.jsx)("option",{value:"Labrador",children:"Labrador"}),Object(o.jsx)("option",{value:"Bulldog",children:"Bulldog"}),Object(o.jsx)("option",{value:"Beagle",children:"Beagle"}),Object(o.jsx)("option",{value:"Dachshund",children:"Dachshund"}),Object(o.jsx)("option",{value:"Boxer",children:"Boxer"}),Object(o.jsx)("option",{value:"Yorkshire",children:"Yorkshire"}),Object(o.jsx)("option",{value:"Rottweiler",children:"Rottweiler"}),Object(o.jsx)("option",{value:"Pitbull",children:"Pitbull"}),Object(o.jsx)("option",{value:"Schnauzer",children:"Schnauzer"}),Object(o.jsx)("option",{value:"Shih Tzu",children:"Shih Tzu"}),Object(o.jsx)("option",{value:"Cocker Spaniel",children:"Cocker Spaniel"}),Object(o.jsx)("option",{value:"Golden Retriever",children:"Golden Retriever"}),Object(o.jsx)("option",{value:"Doberman",children:"Doberman"}),Object(o.jsx)("option",{value:"Malt\xeas",children:"Malt\xeas"}),Object(o.jsx)("option",{value:"Pug",children:"Pug"}),Object(o.jsx)("option",{value:"Chihuahua",children:"Chihuahua"}),Object(o.jsx)("option",{value:"Husky Siberiano",children:"Husky Siberiano"}),Object(o.jsx)("option",{value:"Fila Brasileiro",children:"Fila Brasileiro"}),Object(o.jsx)("option",{value:"Persa",children:"Persa"}),Object(o.jsx)("option",{value:"Siam\xeas",children:"Siam\xeas"}),Object(o.jsx)("option",{value:"Maine Coon",children:"Maine Coon"}),Object(o.jsx)("option",{value:"Sphynx",children:"Sphynx"}),Object(o.jsx)("option",{value:"Ragdoll",children:"Ragdoll"}),Object(o.jsx)("option",{value:"Bengal",children:"Bengal"}),Object(o.jsx)("option",{value:"Scottish Fold",children:"Scottish Fold"}),Object(o.jsx)("option",{value:"Himalaia",children:"Himalaia"}),Object(o.jsx)("option",{value:"Brit\xe2nico de Pelo Curto",children:"Brit\xe2nico de Pelo Curto"}),Object(o.jsx)("option",{value:"Abiss\xednio",children:"Abiss\xednio"}),Object(o.jsx)("option",{value:"Burmes",children:"Burmes"})]})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"idade",children:"Idade (anos):"}),Object(o.jsx)("input",{type:"number",id:"idade",value:O,onChange:function(e){return p(e.target.value)},required:!0,min:"0"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"sexo",children:"Sexo:"}),Object(o.jsxs)("select",{id:"sexo",value:g,onChange:function(e){return f(e.target.value)},required:!0,children:[Object(o.jsx)("option",{value:"",children:"Selecione"}),Object(o.jsx)("option",{value:"macho",children:"Macho"}),Object(o.jsx)("option",{value:"f\xeamea",children:"F\xeamea"})]})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"porte",children:"Porte:"}),Object(o.jsxs)("select",{id:"porte",value:N,onChange:function(e){return B(e.target.value)},required:!0,children:[Object(o.jsx)("option",{value:"",children:"Selecione"}),Object(o.jsx)("option",{value:"pequeno",children:"Pequeno"}),Object(o.jsx)("option",{value:"m\xe9dio",children:"M\xe9dio"}),Object(o.jsx)("option",{value:"grande",children:"Grande"})]})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"imagem",children:"URL da Imagem:"}),Object(o.jsx)("input",{type:"text",id:"imagem",value:y,onChange:function(e){return M(e.target.value)},required:!0})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"descricao",children:"Descri\xe7\xe3o:"}),Object(o.jsx)("textarea",{id:"descricao",value:L,onChange:function(e){return H(e.target.value)},required:!0})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"idUsuario",children:"ID do Usu\xe1rio:"}),Object(o.jsx)("input",{type:"text",id:"idUsuario",value:U,onChange:function(e){return W(e.target.value)},required:!0})]}),Object(o.jsx)("button",{type:"submit",className:"submit-button",disabled:T,children:T?"Adicionando...":"Adicionar Animal"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:"/",className:"btn-primary",children:"Voltar para a p\xe1gina inicial"})]})]})}),X=(a(82),function(){var e=Object(n.useState)(""),t=Object(Q.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(Q.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(""),d=Object(Q.a)(j,2),u=d[0],b=d[1],h=Object(n.useState)("adotante"),A=Object(Q.a)(h,2),O=A[0],p=A[1],m=Object(n.useState)(""),x=Object(Q.a)(m,2),g=x[0],f=x[1],C=Object(n.useState)(""),w=Object(Q.a)(C,2),N=w[0],B=w[1],D=Object(n.useState)(""),S=Object(Q.a)(D,2),y=S[0],M=S[1],P=Object(n.useState)(""),z=Object(Q.a)(P,2),L=z[0],H=z[1],Y=function(){var e=Object(I.a)(E.a.mark((function e(t){var n,r,s,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={nome:a,email:i,senha:u,tipo:O,endereco:g,telefone:N,cidade:y},e.prev=2,e.next=5,v.a.post("http://localhost:3001/usuarios",n);case 5:r=e.sent,H(r.data.message),c(""),l(""),b(""),f(""),B(""),M(""),window.location.href="http://localhost:3000/",e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),H("Erro ao adicionar usu\xe1rio: "+(null===(s=e.t0.response)||void 0===s||null===(o=s.data)||void 0===o?void 0:o.message)||!1);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Adicionar Novo Usu\xe1rio"}),Object(o.jsxs)("form",{onSubmit:Y,children:[Object(o.jsx)("label",{htmlFor:"nome",children:"Nome:"}),Object(o.jsx)("input",{type:"text",id:"nome",value:a,onChange:function(e){return c(e.target.value)},required:!0}),Object(o.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(o.jsx)("input",{type:"email",id:"email",value:i,onChange:function(e){return l(e.target.value)},required:!0}),Object(o.jsx)("label",{htmlFor:"senha",children:"Senha:"}),Object(o.jsx)("input",{type:"password",id:"senha",value:u,onChange:function(e){return b(e.target.value)},required:!0}),Object(o.jsx)("label",{htmlFor:"tipo",children:"Tipo:"}),Object(o.jsxs)("select",{id:"tipo",value:O,onChange:function(e){return p(e.target.value)},required:!0,children:[Object(o.jsx)("option",{value:"adotante",children:"Adotante"}),Object(o.jsx)("option",{value:"doar",children:"Doar"})]}),Object(o.jsx)("label",{htmlFor:"endereco",children:"Endere\xe7o:"}),Object(o.jsx)("input",{type:"text",id:"endereco",value:g,onChange:function(e){return f(e.target.value)},required:!0}),Object(o.jsx)("label",{htmlFor:"telefone",children:"Telefone:"}),Object(o.jsx)("input",{type:"text",id:"telefone",value:N,onChange:function(e){return B(e.target.value)},required:!0}),Object(o.jsx)("label",{htmlFor:"cidade",children:"Cidade:"}),Object(o.jsx)("input",{type:"text",id:"cidade",value:y,onChange:function(e){return M(e.target.value)},required:!0}),Object(o.jsx)("button",{type:"submit",children:"Adicionar Usu\xe1rio"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:"/",className:"btn-primary",children:"Voltar para a p\xe1gina inicial"})]}),L&&Object(o.jsx)("div",{className:"response-message",children:L})]})}),T=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(y.a,{path:"/",exact:!0,component:D}),Object(o.jsx)(y.a,{path:"/Home",exact:!0,component:D}),Object(o.jsx)(y.a,{path:"/animais/:id",component:z})," ",Object(o.jsx)(y.a,{path:"/Login",exact:!0,component:Y}),Object(o.jsx)(y.a,{path:"/AnimaisDisponiveis",exact:!0,component:W}),Object(o.jsx)(y.a,{path:"/AdicionarAnimal",exact:!0,component:G}),Object(o.jsx)(y.a,{path:"/AdicionarUsuario",exact:!0,component:X})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root")),R()}},[[83,1,2]]]);
//# sourceMappingURL=main.4bf00c70.chunk.js.map