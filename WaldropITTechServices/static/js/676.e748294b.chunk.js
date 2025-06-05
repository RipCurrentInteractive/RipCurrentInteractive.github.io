"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[676],{1676:(e,n,a)=>{a.r(n),a.d(n,{default:()=>E});var s=a(1319),i=a(4647),r=a(9281),t=a(3614),l=a(5043),d=a(6545);const o={name:"",email:"",message:""};function m(e){let n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var c=a(5639),h=a(9);const p=(0,h.Ay)("p")`
  margin-top: 1.5rem;
`,x=(0,h.Ay)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,h.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var g=a(579);const j=(0,r.C)()((e=>{let{title:n,content:a,t:s}=e;return(0,g.jsxs)(x,{children:[(0,g.jsx)("h6",{children:s(n)}),(0,g.jsx)(u,{children:(0,g.jsx)(p,{children:s(a)})})]})})),y=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,v=(0,h.Ay)("input")`
  font-size: 0.875rem;
`,b=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,A=(0,h.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,C=(0,h.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,w=(0,r.C)()((e=>{let{name:n,placeholder:a,onChange:s,t:i}=e;return(0,g.jsxs)(y,{children:[(0,g.jsx)(C,{htmlFor:n,children:i(n)}),(0,g.jsx)(v,{placeholder:i(a),name:n,id:n,onChange:s})]})})),f=(0,r.C)()((e=>{let{name:n,placeholder:a,onChange:s,t:i}=e;return(0,g.jsxs)(b,{children:[(0,g.jsx)(C,{htmlFor:n,children:i(n)}),(0,g.jsx)(A,{placeholder:i(a),id:n,name:n,onChange:s})]})})),S=(0,h.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,k=(0,h.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,q=(0,h.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,z=(0,h.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,E=(0,r.C)()((e=>{let{title:n,content:a,id:r,t:h}=e;const{values:p,errors:x,handleChange:u,handleSubmit:y}=(e=>{const[n,a]=(0,l.useState)({values:{...o},errors:{...o}});return{handleChange:e=>{e.persist();const{name:n,value:s}=e.target;a((e=>({...e,values:{...e.values,[n]:s},errors:{...e.errors,[n]:""}})))},handleSubmit:async s=>{s.preventDefault();const i=n.values,r=e(i);if(a((e=>({...e,errors:r}))),Object.values(r).every((e=>""===e))){const e=`mailto:Rwaldrop86@gmail.com?subject=Waldrop's IT Tech Solutions New Contact Form Submission &body=Name: ${encodeURIComponent(i.name)}%0AEmail: ${encodeURIComponent(i.email)}%0AMessage: ${encodeURIComponent(i.message)}`;window.location.href=e,d.A.success({message:"Success",description:"Your email client has been opened!"})}},values:n.values,errors:n.errors}})(m),v=e=>{let{type:n}=e;const a=x[n];return(0,g.jsx)(q,{children:a})};return(0,g.jsx)(S,{id:r,children:(0,g.jsxs)(s.A,{justify:"space-between",align:"middle",children:[(0,g.jsx)(i.A,{lg:12,md:11,sm:24,xs:24,children:(0,g.jsx)(t.q7,{direction:"left",triggerOnce:!0,children:(0,g.jsx)(j,{title:n,content:a})})}),(0,g.jsx)(i.A,{lg:12,md:12,sm:24,xs:24,children:(0,g.jsx)(t.q7,{direction:"right",triggerOnce:!0,children:(0,g.jsxs)(k,{autoComplete:"off",onSubmit:y,children:[(0,g.jsxs)(i.A,{span:24,children:[(0,g.jsx)(w,{type:"text",name:"name",placeholder:"Your Name",value:p.name||"",onChange:u}),(0,g.jsx)(v,{type:"name"})]}),(0,g.jsxs)(i.A,{span:24,children:[(0,g.jsx)(w,{type:"text",name:"email",placeholder:"Your Email",value:p.email||"",onChange:u}),(0,g.jsx)(v,{type:"email"})]}),(0,g.jsxs)(i.A,{span:24,children:[(0,g.jsx)(f,{placeholder:"Your Message",value:p.message||"",name:"message",onChange:u}),(0,g.jsx)(v,{type:"message"})]}),(0,g.jsx)(z,{children:(0,g.jsx)(c.$,{name:"submit",children:h("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=676.e748294b.chunk.js.map