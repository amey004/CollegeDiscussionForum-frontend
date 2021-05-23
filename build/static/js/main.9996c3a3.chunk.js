(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(21),r=s.n(n),i=(s(80),s(81),s(82),s(83),s(15)),o=s(16),l=s(18),j=s(17),d=(s(50),s(10)),u=s(9),h=s.n(u),b=s(19),m=s(24),x=s(13),O=s.n(x),p=s(0),f=Object(a.createContext)();function v(e){var t=Object(a.useState)(void 0),s=Object(m.a)(t,2),c=s[0],n=s[1];function r(){return i.apply(this,arguments)}function i(){return(i=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://college-discussion-forum.herokuapp.com/auth/loggedIn");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){r()}),[]),Object(p.jsx)(f.Provider,{value:{loggedIn:c,getLoggedIn:r},children:e.children})}var g=f,y=s.p+"static/media/logo1.51eb3b50.png",N=s(134),w=s(157),k=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={},a}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)(w.a,{direction:"left",in:!0,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center mt-2 aboutus",children:"About Us"}),Object(p.jsx)("hr",{}),Object(p.jsxs)(N.a,{container:!0,children:[Object(p.jsx)(N.a,{className:"text-right m-2",item:!0,xs:3,children:Object(p.jsx)("img",{src:y,height:"80px",alt:"Logo"})}),Object(p.jsx)(N.a,{item:!0,className:"mt-2 aboutcontent",xs:8,children:Object(p.jsx)("p",{style:{fontSize:"18px",textAlign:"center"},children:"College Discussion Forum is a Q&A platform where students can ask question and have their doubts cleared by experienced people."})})]})]})})}}]),s}(a.Component),C=s(29),S=s(136),q=s(137),F=s(138),I=s(139),A=s(140),L=s(141),M=s(11),Q=s(135);var z=function(){var e=Object(a.useContext)(g).getLoggedIn,t=Object(d.g)();function s(){return(s=Object(b.a)(h.a.mark((function s(){return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,O.a.get("https://college-discussion-forum.herokuapp.com/auth/logout");case 2:return s.next=4,e();case 4:t.push("/register");case 5:case"end":return s.stop()}}),s)})))).apply(this,arguments)}return Object(p.jsx)("div",{style:{display:"flex"},children:Object(p.jsx)(Q.a,{style:{marginLeft:"auto"},color:"primary",onClick:function(){return s.apply(this,arguments)},children:"Log Out"})})},E=s(142),P=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={isNavOpen:!1},a.toggleNav=a.toggleNav.bind(Object(C.a)(a)),a}return Object(o.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){var e=this.context.loggedIn;return Object(p.jsx)("div",{children:Object(p.jsx)(S.a,{dark:!0,expand:"md",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(q.a,{className:"mr-2",onClick:this.toggleNav}),Object(p.jsx)(F.a,{className:"mr-auto",href:"/",children:Object(p.jsx)("h4",{children:Object(p.jsxs)("strong",{children:["College Discussion",Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:"Forum"})]})})}),Object(p.jsx)(I.a,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(p.jsxs)(A.a,{className:"container-fluid justify-content-end",navbar:!0,children:[Object(p.jsx)(L.a,{children:Object(p.jsx)(M.c,{className:"nav-link",exact:!0,to:"/",activeStyle:{color:"black"},children:Object(p.jsx)("h4",{children:"Home"})})}),!0===e&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(L.a,{children:Object(p.jsx)(M.c,{className:"nav-link",to:"/addquestion",activeStyle:{color:"black"},children:Object(p.jsx)("h4",{children:"Add Question"})})})}),!1===e&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(L.a,{children:Object(p.jsx)(M.c,{className:"nav-link",to:"/register",activeStyle:{color:"black"},children:Object(p.jsx)("h4",{children:"Register"})})}),Object(p.jsx)(E.a,{orientation:"vertical",flexItem:!0,style:{height:"45px"},className:"d-none d-md-block"}),Object(p.jsx)(L.a,{children:Object(p.jsx)(M.c,{className:"nav-link",to:"/login",activeStyle:{color:"black"},children:Object(p.jsx)("h4",{children:"Login"})})})]}),Object(p.jsx)(L.a,{children:Object(p.jsx)(M.c,{className:"nav-link",to:"/aboutus",activeStyle:{color:"black"},children:Object(p.jsx)("h4",{children:" About Us"})})}),!0===e&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(L.a,{children:Object(p.jsx)(z,{})})})]})})]})})})}}]),s}(a.Component);P.contextType=g;var D=P,T=s(144),U=s(145),H=s(146),R=s(147),_=s(143),B=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={questions:[],answer:""},a.getQuestions=a.getQuestions.bind(Object(C.a)(a)),a.rederQuestions=a.rederQuestions.bind(Object(C.a)(a)),a}return Object(o.a)(s,[{key:"getQuestions",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://college-discussion-forum.herokuapp.com/addquestion");case 2:t=e.sent,this.setState({questions:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getQuestions()}},{key:"rederQuestions",value:function(){var e=this,t=this.context.loggedIn,s=this.state.questions,a=this.state.answer,c=this.props.name;function n(e,t){return r.apply(this,arguments)}function r(){return(r=Object(b.a)(h.a.mark((function e(t,s){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.id,e.next=3,O.a.post("https://college-discussion-forum.herokuapp.com/addquestion/ans",{id:n,answer:a,Name:c});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s.map((function(s,a){return s.userId===e.props.userId&&"none"===e.props.category||s.type===e.props.category||""===e.props.category?Object(p.jsx)(_.a,{in:!0,timeout:900,children:Object(p.jsxs)(T.a,{style:{backgroundImage:"linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"},className:"w-100 mt-2 mr-2",children:[Object(p.jsx)("strong",{className:"ml-2 question",children:s.que}),Object(p.jsx)(U.a,{children:s.answer?Object(p.jsxs)("div",{className:"answer",children:["Answer : ",s.answer,Object(p.jsx)("div",{className:"mt-2",children:Object(p.jsxs)("small",{children:["Answered by ",s.ansBy]})})]}):Object(p.jsxs)(H.a,{onSubmit:function(e){n(e,{id:s._id})},children:[Object(p.jsx)(R.a,{type:"textarea",placeholder:"Enter your answer here",required:!0,onChange:function(t){e.setState({answer:t.target.value})}}),Object(p.jsx)(Q.a,{type:"submit",disabled:!t,title:t?null:"You need to be logged in!",className:"m-2",color:"primary",children:"Add"})]})})]},a)},a):Object(p.jsx)("div",{})}))}},{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:this.rederQuestions()})}}]),s}(a.Component);B.contextType=g;var J=B,W=s(148),G=s(155);function V(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(m.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(""),j=Object(m.a)(l,2),d=j[0],u=j[1],x=Object(a.useState)(""),f=Object(m.a)(x,2),v=f[0],y=f[1],w=Object(a.useState)(""),k=Object(m.a)(w,2),C=k[0],S=k[1],q=Object(a.useState)(""),F=Object(m.a)(q,2),I=F[0],A=F[1],L=Object(a.useContext)(g);function M(){return(M=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==L.loggedIn){e.next=7;break}return e.next=3,O.a.get("https://college-discussion-forum.herokuapp.com/auth/user");case 3:t=e.sent,c(t.data.firstName),o(t.data.lastName),S(t.data._id);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){u(e),y(e)}return Object(a.useEffect)((function(){!function(){M.apply(this,arguments)}()})),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(N.a,{container:!0,spacing:2,children:[Object(p.jsx)(N.a,{item:!0,container:!0,sm:2,children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{className:"mt-4 ml-1",children:"Categories"}),Object(p.jsxs)("div",{className:"mt-3 ml-1",children:[!0===L.loggedIn?Object(p.jsx)(G.a,{value:"myquestions",className:"ml-2",onClick:function(){y("myquestions"),A(C),u("none")},variant:"myquestions"===v?"outlined":"text",children:"My Questions"}):Object(p.jsx)(p.Fragment,{}),Object(p.jsx)(G.a,{value:"",className:"ml-2 d-md-block",onClick:function(){return Q("")},variant:""===v?"outlined":"text",children:"All"}),Object(p.jsx)(G.a,{value:"campus",className:"ml-2",onClick:function(){return Q("campus")},variant:"campus"===v?"outlined":"text",children:"Campus"}),Object(p.jsx)(G.a,{value:"academics",className:"ml-2",onClick:function(){return Q("academics")},variant:"academics"===v?"outlined":"text",children:"Academics"}),Object(p.jsx)(G.a,{value:"placemnets",className:"ml-2",onClick:function(){return Q("placements")},variant:"placements"===v?"outlined":"text",children:"Placements"}),Object(p.jsx)(G.a,{value:"others",className:"ml-2",onClick:function(){return Q("other")},variant:"other"===v?"outlined":"text",children:"Others"})]})]})}),Object(p.jsx)(N.a,{item:!0,style:{maxWidth:"700px"},xs:10,children:Object(p.jsx)("div",{className:"row mt-3 ml-1 mb-4",children:Object(p.jsxs)(W.a,{children:[""===s?Object(p.jsx)("div",{}):Object(p.jsxs)("h4",{className:"welcome",children:["Welcome, ",s," ",i,"!"]}),Object(p.jsx)("h4",{className:"m-2",children:"Questions"}),Object(p.jsx)("div",{className:"m-4",children:Object(p.jsx)(J,{name:s,category:d,userId:I})})]})})})]})})})}var Y=s(149),K=s(150),X=s(151),Z=s(152),$=s(153),ee=s(156),te=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={email:"",password:"",errorMessage:"",touched:{email:!1,password:!1}},a.login=a.login.bind(Object(C.a)(a)),a}return Object(o.a)(s,[{key:"login",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var s,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s=this.context.getLoggedIn,e.prev=2,a={email:this.state.email,password:this.state.password},e.next=6,O.a.post("https://college-discussion-forum.herokuapp.com/auth/login",a);case 6:return e.next=8,s();case 8:this.props.history.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0.response.data.errorMessage),this.setState({errorMessage:e.t0.response.data.errorMessage});case 15:case"end":return e.stop()}}),e,this,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsx)(w.a,{direction:"left",in:!0,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row mt-2",children:Object(p.jsxs)(Y.a,{children:[Object(p.jsx)(K.a,{children:Object(p.jsx)(M.b,{to:"/",children:"Home"})}),Object(p.jsx)(K.a,{active:!0,children:"Login"})]})}),Object(p.jsxs)("div",{className:"row row-content",children:[Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("h3",{children:"Login"})}),Object(p.jsx)("div",{className:"col-12 col-md-9",children:Object(p.jsxs)(H.a,{onSubmit:this.login,children:[Object(p.jsxs)(X.a,{row:!0,children:[Object(p.jsx)(Z.a,{htmlFor:"email",md:3,children:"Email*"}),Object(p.jsx)($.a,{md:9,children:Object(p.jsx)(R.a,{type:"email",id:"email",name:"email",placeholder:"Enter email",onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email})})]}),Object(p.jsxs)(X.a,{row:!0,children:[Object(p.jsx)(Z.a,{htmlFor:"password",md:3,children:"Password*"}),Object(p.jsx)($.a,{md:9,children:Object(p.jsx)(R.a,{type:"password",id:"password",name:"password",placeholder:"Enter password",onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password})})]}),Object(p.jsx)($.a,{md:{size:9,offset:3},children:""!==this.state.errorMessage?Object(p.jsx)(ee.a,{style:{height:"30px",padding:"0",paddingLeft:"20px"},color:"danger",children:this.state.errorMessage}):Object(p.jsx)("div",{})}),Object(p.jsx)(X.a,{row:!0,children:Object(p.jsx)($.a,{className:"mt-4",md:{size:9,offset:3},children:Object(p.jsx)(M.b,{to:"/register",children:"New User?Create account"})})}),Object(p.jsx)(X.a,{className:"mt-4",row:!0,children:Object(p.jsx)($.a,{md:{size:9,offset:3},xs:{size:8,offset:4},children:Object(p.jsx)(Q.a,{type:"submit",color:"primary",children:"Sign In"})})})]})})]})]})})}}]),s}(a.Component);function se(e){var t=Object(d.g)(),s=Object(a.useState)(""),c=Object(m.a)(s,2),n=c[0],r=c[1],i=Object(a.useState)(""),o=Object(m.a)(i,2),l=o[0],j=o[1],u=Object(a.useState)(""),x=Object(m.a)(u,2),f=x[0],v=x[1],g=Object(a.useState)(""),y=Object(m.a)(g,2),N=y[0],k=y[1];function C(){return(C=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://college-discussion-forum.herokuapp.com/auth/user");case 2:t=e.sent,r(t.data.firstName),v(t.data._id);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(b.a)(h.a.mark((function e(s){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),a={UserName:n,userId:f,que:l,type:N},e.next=4,O.a.post("https://college-discussion-forum.herokuapp.com/addquestion/",a);case 4:t.push("/");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){C.apply(this,arguments)}()}),[]),Object(p.jsx)(w.a,{direction:"left",in:!0,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center m-2 askquestion",children:"Ask Question"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"row row-content",children:[Object(p.jsx)("div",{className:"col-12 mt-4 mb-3",children:Object(p.jsxs)("h5",{children:[n," add your question : "]})}),Object(p.jsx)("div",{className:"col-12 col-md-9",children:Object(p.jsx)(H.a,{onSubmit:function(e){return function(e){return S.apply(this,arguments)}(e)},children:Object(p.jsxs)(X.a,{row:!0,children:[Object(p.jsx)(Z.a,{htmlFor:"Question",md:3,children:"Question:"}),Object(p.jsx)($.a,{md:9,children:Object(p.jsx)(R.a,{type:"textarea",id:"question",name:"question",placeholder:"Ask your question here",autoComplete:"off",className:"mb-2",onChange:function(e){j(e.target.value)},value:l})}),Object(p.jsx)(Z.a,{htmlFor:"type",xs:3,children:"Category:"}),Object(p.jsx)($.a,{xs:9,className:"mt-2",children:Object(p.jsxs)("select",{required:!0,onChange:function(e){return k(e.target.value)},children:[Object(p.jsx)("option",{value:"campus",children:"Campus"}),Object(p.jsx)("option",{value:"campus",children:"Academics"}),Object(p.jsx)("option",{value:"placements",children:"Placements"}),Object(p.jsx)("option",{value:"other",children:"Other"})]})}),Object(p.jsx)(X.a,{row:!0,children:Object(p.jsx)($.a,{md:{size:9,offset:3},xs:{size:8,offset:4},className:"mt-4 text-center",children:Object(p.jsx)(Q.a,{type:"submit",color:"primary",children:"Add"})})})]})})})]})]})})}te.contextType=g;var ae=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={firstName:"",lastName:"",email:"",agree:"",password:"",verifyPassword:"",errorMessage:"",touched:{firstName:!1,lastName:!1,email:!1,agree:!1,password:!1}},a.register=a.register.bind(Object(C.a)(a)),a}return Object(o.a)(s,[{key:"register",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var s,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s=this.context.getLoggedIn,e.prev=2,a={firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,password:this.state.password,passwordVerify:this.state.verifyPassword},e.next=6,O.a.post("https://college-discussion-forum.herokuapp.com/auth/",a);case 6:return e.next=8,s();case 8:this.props.history.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0.response.data.errorMessage),this.setState({errorMessage:e.t0.response.data.errorMessage});case 15:case"end":return e.stop()}}),e,this,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsx)(w.a,{direction:"left",in:!0,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row mt-2",children:Object(p.jsxs)(Y.a,{children:[Object(p.jsx)(K.a,{children:Object(p.jsx)(M.b,{to:"/",children:"Home"})}),Object(p.jsx)(K.a,{active:!0,children:"Signup"})]})}),Object(p.jsxs)("div",{className:"row row-content",children:[Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("h3",{children:"Sign Up"})}),Object(p.jsx)("div",{className:"col-12 col-md-9",children:Object(p.jsxs)(H.a,{onSubmit:this.register,children:[Object(p.jsxs)(X.a,{row:!0,children:[Object(p.jsx)(Z.a,{htmlFor:"firstName",md:3,children:"First Name*"}),Object(p.jsx)($.a,{md:9,children:Object(p.jsx)(R.a,{type:"text",id:"firstName",name:"firstName",placeholder:"Enter First Name",onChange:function(t){return e.setState({firstName:t.target.value})},value:this.state.firstName})})]}),Object(p.jsxs)(X.a,{row:!0,children:[Object(p.jsx)(Z.a,{htmlFor:"lastName",md:3,children:"Last Name*"}),Object(p.jsx)($.a,{md:9,children:Object(p.jsx)(R.a,{type:"text",id:"lastName",name:"lastName",placeholder:"Enter Last Name",onChange:function(t){return e.setState({lastName:t.target.value})},value:this.state.lastName})})]}),Object(p.jsxs)(X.a,{row:!0,children:[Object(p.jsx)(Z.a,{htmlFor:"email",md:3,children:"Email*"}),Object(p.jsx)($.a,{md:9,children:Object(p.jsx)(R.a,{type:"email",id:"email",name:"email",placeholder:"Enter Email",onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email})})]}),Object(p.jsxs)(X.a,{row:!0,children:[Object(p.jsx)(Z.a,{htmlFor:"password",md:3,children:"Password*"}),Object(p.jsx)($.a,{md:9,children:Object(p.jsx)(R.a,{type:"password",id:"password",name:"password",placeholder:"Enter Password",onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password})})]}),Object(p.jsxs)(X.a,{row:!0,children:[Object(p.jsx)(Z.a,{htmlFor:"password",md:3,children:"Confirm Password*"}),Object(p.jsx)($.a,{md:9,children:Object(p.jsx)(R.a,{type:"password",id:"confirmpassword",name:"confirmpassword",placeholder:"Confirm Password",onChange:function(t){return e.setState({verifyPassword:t.target.value})},value:this.state.verifyPassword})})]}),Object(p.jsx)($.a,{className:"mt-4",md:{size:9,offset:3},children:Object(p.jsx)(X.a,{check:!0,children:Object(p.jsxs)(Z.a,{check:!0,children:[Object(p.jsx)(R.a,{type:"checkbox",required:!0,name:"agree"}),Object(p.jsx)("strong",{children:"Agree to terms and condtion"})]})})}),Object(p.jsx)($.a,{className:"mt-4",md:{size:9,offset:3},children:""!==this.state.errorMessage?Object(p.jsx)(ee.a,{color:"danger",children:this.state.errorMessage}):Object(p.jsx)("div",{})}),Object(p.jsx)($.a,{className:"mt-4",md:{size:9,offset:3},children:Object(p.jsx)(M.b,{to:"/login",children:"Already have an account?"})}),Object(p.jsx)(X.a,{className:"mt-4",row:!0,children:Object(p.jsx)($.a,{md:{size:9,offset:3},xs:{size:8,offset:4},children:Object(p.jsx)(Q.a,{type:"submit",color:"primary",children:"Sign Up"})})})]})})]})]})})}}]),s}(a.Component);ae.contextType=g;var ce=ae,ne=s(154),re=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={},a}return Object(o.a)(s,[{key:"render",value:function(){var e={fontSize:"20px",marginRight:"0.7rem",marginTop:"1rem"};return Object(p.jsxs)("div",{style:{position:"absolute",bottom:"0",width:"100%",height:"0px"},className:"",children:[Object(p.jsx)("div",{style:{backgroundColor:"#c1a7ff",opacity:"0.8"},children:Object(p.jsxs)(N.a,{container:!0,style:{marginTop:"50px"},children:[Object(p.jsxs)(N.a,{item:!0,xs:4,className:"text-center mt-2 mb-4",children:[Object(p.jsx)("h5",{children:"Links"}),Object(p.jsx)(M.b,{to:"/",children:"Home"}),Object(p.jsx)("br",{}),Object(p.jsx)(M.b,{to:"/register",children:"Register"}),Object(p.jsx)("br",{}),Object(p.jsx)(M.b,{to:"/login",children:"Login"}),Object(p.jsx)("br",{}),Object(p.jsx)(M.b,{to:"/aboutus",children:"AboutUs"})]}),Object(p.jsxs)(N.a,{item:!0,xs:4,className:"text-center mt-2 mb-4",children:[Object(p.jsx)("h5",{children:"Contact Us"}),Object(p.jsx)(ne.a,{className:"fa fa-twitter",style:e}),Object(p.jsx)(ne.a,{className:"fa fa-facebook-square",style:e}),Object(p.jsx)(ne.a,{className:"fa fa-instagram",style:e}),Object(p.jsx)(ne.a,{className:"fa fa-envelope",style:e})]}),Object(p.jsxs)(N.a,{item:!0,xs:4,className:"text-center mt-2 mb-4",children:[Object(p.jsx)("h5",{children:"Address"}),Object(p.jsxs)("p",{children:[Object(p.jsx)(ne.a,{className:"fa fa-map-marker"}),"PICT, Dhankawadi, Pune, Maharashtra 411043",Object(p.jsx)("br",{})]}),Object(p.jsx)("p",{className:"d-none d-sm-block",children:"amey.bhattad72@gmail.com"})]})]})}),Object(p.jsx)("div",{className:"",style:{backgroundColor:"LightGray",opacity:"0.7"},children:Object(p.jsx)("p",{className:"text-center",style:{fontSize:"15px"},children:"\xa92021 Copyright : College Discussion Forum Inc."})})]})}}]),s}(a.Component),ie=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.context.loggedIn;return Object(p.jsxs)("div",{className:"app",style:{position:"relative",minHeight:"77vh"},children:[Object(p.jsx)(D,{}),Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{exact:!0,path:"/",component:V}),Object(p.jsx)(d.b,{exact:!0,path:"/aboutus",component:k}),!0===e&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(d.b,{exact:!0,path:"/addquestion",children:Object(p.jsx)(se,{})})}),!1===e&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.b,{exact:!0,path:"/login",component:te}),Object(p.jsx)(d.b,{exact:!0,path:"/register",component:ce})]}),Object(p.jsx)(d.a,{to:"/"})]}),Object(p.jsx)(re,{})]})}}]),s}(a.Component);ie.contextType=g;var oe=ie;O.a.defaults.withCredentials=!0;var le=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)(v,{children:Object(p.jsx)(M.a,{children:Object(p.jsx)(oe,{})})})}}]),s}(a.Component);r.a.render(Object(p.jsx)(c.a.Fragment,{children:Object(p.jsx)(le,{})}),document.getElementById("root"))},50:function(e,t,s){},83:function(e,t,s){}},[[116,1,2]]]);
//# sourceMappingURL=main.9996c3a3.chunk.js.map