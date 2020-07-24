(this.webpackJsonpfrontend_web=this.webpackJsonpfrontend_web||[]).push([[0],{43:function(e,a,t){e.exports=t(54)},54:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(36),c=t.n(l),o=t(6),i=t(7),s=t(19),m=t(17);function u(){var e=Object(s.a)(["\n  query getUsers {\n    users {\n      id\n      username\n      email\n      firstName\n      lastName\n    }\n  }\n"]);return u=function(){return e},e}function b(){var e=Object(s.a)(["\n  query getMe {\n    me {\n      id\n      username\n    }\n  }\n"]);return b=function(){return e},e}function d(){var e=Object(s.a)(["\n  mutation getToken($username: String!, $password: String!) {\n    tokenAuth(username: $username, password: $password) {\n      token\n    }\n  }\n"]);return d=function(){return e},e}var E=Object(m.b)(d()),p=Object(m.b)(b()),f=Object(m.b)(u());var g=function(e){var a=Object(i.b)(p),t=a.loading,n=a.error,l=a.data;return t?r.a.createElement("p",null,"Loading..."):n?r.a.createElement("p",null,"Error :("):(console.log(l),r.a.createElement("div",{className:"user-profile-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,l.me.username)),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/login"},"Logout")))))},v=t(5);var O=function(e){console.log("useProfile");var a=Object(v.g)(),t=Object(i.b)(p),n=t.loading,r=t.error,l=t.data;if(n)return null;if(r){if(console.log(r),r.graphQLErrors.length)"Signature has expired"===r.graphQLErrors[0].message&&a.push("/login");return null}return l};var j=function(){return O(),r.a.createElement("header",{className:"navbar container"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,"Twiga - CCMS"),r.a.createElement("div",{className:"nav-links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/complaints"},"Complaints"))),r.a.createElement(g,null))))};var h=function(e){return r.a.createElement("div",null,"Home page/dashboard graphs will be here...")},N=t(13),C=t(4),w=t(11);var S=function(e){var a=e.columns,t=e.data,n=e.idCol,l=void 0===n?"id":n;return r.a.createElement("div",{className:"table-container"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,a.map((function(e){return r.a.createElement("th",{key:e.name},e.label)})))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e[l]},a.map((function(a){return r.a.createElement("td",{key:a.name,className:a.className},a.render?a.render(e):e[a.name])})))})))))},D=function(e){var a=e.name,t=e.extra,n=e.text;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"mat-icon material-icons".concat(t?" "+t:"")},a),n&&r.a.createElement("span",null,n))};function $(){var e=Object(s.a)(["\n  mutation updateDetails(\n    $id: ID!\n    $rca: String!\n    $actionPlan: String!\n    $results: String!\n    $financialImpact: String!\n    $costCenter: String!\n    $responsiblePerson: String!\n  ) {\n    updateComplaint(\n      id: $id\n      rca: $rca\n      actionPlan: $actionPlan\n      results: $results\n      financialImpact: $financialImpact\n      costCenter: $costCenter\n      responsiblePerson: $responsiblePerson\n    ) {\n      complaint {\n        id\n        details\n      }\n    }\n  }\n"]);return $=function(){return e},e}function x(){var e=Object(s.a)(["\n  mutation assignTo($id: ID!, $userId: ID!) {\n    assignComplaint(id: $id, userId: $userId) {\n      complaint {\n        id\n        details\n        assignedTo {\n          id\n          username\n        }\n      }\n    }\n  }\n"]);return x=function(){return e},e}function y(){var e=Object(s.a)(["\n  mutation createComplaint(\n    $details: String!\n    $clientName: String!\n    $openDate: DateTime!\n    $nature: ID!\n    $status: String!\n  ) {\n    createComplaint(\n      input: {\n        details: $details\n        clientName: $clientName\n        nature: $nature\n        status: $status\n        openDate: $openDate\n      }\n    ) {\n      result {\n        id\n      }\n    }\n  }\n"]);return y=function(){return e},e}function k(){var e=Object(s.a)(["\n  query getNatures {\n    natures {\n      id\n      name\n    }\n  }\n"]);return k=function(){return e},e}function I(){var e=Object(s.a)(["\n  query getComplaint($id: ID!) {\n    complaint(id: $id) {\n      id\n      clientName\n      openDate\n      status\n      details\n      rca\n      actionPlan\n      results\n      financialImpact\n      costCenter\n      responsiblePerson\n      dueDate\n      closeDate\n      nature {\n        id\n        name\n      }\n    }\n  }\n"]);return I=function(){return e},e}function T(){var e=Object(s.a)(["\n  query fetchComplaints {\n    complaints {\n      id\n      clientName\n      openDate\n      status\n      details\n      rca\n      actionPlan\n      results\n      financialImpact\n      costCenter\n      responsiblePerson\n      dueDate\n      closeDate\n      assignedTo {\n        id\n        username\n      }\n      nature {\n        id\n        name\n      }\n    }\n  }\n"]);return T=function(){return e},e}var q=Object(m.b)(T()),P=Object(m.b)(I()),_=Object(m.b)(k()),A=Object(m.b)(y()),L=Object(m.b)(x()),M=Object(m.b)($()),F=t(20),V=t(42),Q=t(23);var R=function(e){var a=e.label,t=e.name,n=e.help,l=e.type,c=void 0===l?"text":l,o=Object(Q.a)(e,["label","name","help","type"]);return r.a.createElement("div",{className:"input-wrap"},r.a.createElement("label",{htmlFor:t},a),"textarea"===c?r.a.createElement("textarea",Object.assign({name:t,id:t},o)):r.a.createElement("input",Object.assign({type:c,name:t,id:t},o)),n&&r.a.createElement("span",{className:"input-help"},n))};var U=function(e){var a=e.label,t=e.name,n=e.options,l=void 0===n?[]:n,c=Object(Q.a)(e,["label","name","options"]);return r.a.createElement("div",{className:"input-wrap"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},c),r.a.createElement("option",{value:""},"---Select---"),l.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))))};var B=function(e){Object(V.a)(e);var a=Object(i.b)(_),t=Object(n.useState)(null),l=Object(w.a)(t,2),c=l[0],s=l[1],m=Object(n.useState)(new Map),u=Object(w.a)(m,2),b=u[0],d=u[1],E=Object(i.a)(A),p=Object(w.a)(E,2),f=p[0],g=p[1].loading,O=a.data?a.data.natures:[];function j(e){var a=e.target,t=a.value,n=a.name;d(Object(C.a)(Object(C.a)({},b),{},Object(F.a)({},n,t)))}return c?r.a.createElement(v.a,{to:c}):r.a.createElement("div",null,r.a.createElement("div",{className:"toolbar"},r.a.createElement("div",{className:"titlebar"},r.a.createElement(o.b,{to:"/complaints",className:"btn btn-light mr-1"},r.a.createElement(D,{name:"keyboard_arrow_left"})),r.a.createElement("h5",null,"Register New Complaint"))),g&&r.a.createElement("p",null,"Sending ...."),r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),f({variables:Object(C.a)(Object(C.a)({},b),{},{openDate:"".concat(b.openDate,"T00:00+03:00"),status:"Created"}),refetchQueries:[{query:q}]}).then((function(){return s("/complaints")}),(function(e){return console.log("Error: ",e)}))}},r.a.createElement("div",{className:"form-grid-2"},r.a.createElement("div",null,r.a.createElement(R,{name:"clientName",label:"Client Name",onChange:j,required:!0}),r.a.createElement(U,{name:"nature",label:"Nature",options:O,onChange:j,required:!0}),r.a.createElement(R,{name:"openDate",label:"Open Date",type:"date",onChange:j,required:!0})),r.a.createElement("div",null,r.a.createElement(R,{name:"details",label:"Details",type:"textarea",onChange:j,required:!0,maxlength:"300",help:"Max 300 characters"}))),r.a.createElement("div",{className:"form-footer"},r.a.createElement("button",null,"Submit"))))};var J=function(e){var a=e.onClose,t=e.title,n=e.children,l=(e.posx,e.posy,Object(Q.a)(e,["onClose","title","children","posx","posy"]));return r.a.createElement("div",Object.assign({className:"modal display-block"},l),r.a.createElement("div",{className:"modal-main"},r.a.createElement("div",{className:"modal-header"},t?r.a.createElement("h5",{className:"modal-title"},t):r.a.createElement("span",null),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",className:"btn btn-link text-warning",onClick:a},r.a.createElement(D,{name:"close"})))),r.a.createElement("div",{className:"modal-content"},n)))};var W=function(e){var a=e.complaint,t=e.onComplete,l=Object(i.b)(f),c=Object(n.useState)(new Map),o=Object(w.a)(c,2),s=o[0],m=o[1],u=Object(i.a)(L),b=Object(w.a)(u,2),d=b[0],E=(b[1].loading,l.data?l.data.users.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{name:e.username})})):[]);return console.log(a),r.a.createElement("div",null,r.a.createElement("h5",null,"Assign Complaint To User"),r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),d({variables:Object(C.a)(Object(C.a)({},s),{},{id:a.id}),refetchQueries:[{query:q}]}).then((function(){return t()}),(function(e){return console.log("Error: ",e)}))}},r.a.createElement("div",null,r.a.createElement(U,{name:"userId",label:"Assign To",onChange:function(e){var a=e.target,t=a.value,n=a.name;m(Object(C.a)(Object(C.a)({},s),{},Object(F.a)({},n,t)))},required:!0,options:E})),r.a.createElement("div",{className:"form-footer"},r.a.createElement("button",null,"Submit"))))};var H=Object(v.h)((function(e){var a=e.match,t=Object(n.useState)(null),l=Object(w.a)(t,2),c=l[0],s=l[1],m=Object(n.useState)(new Map),u=Object(w.a)(m,2),b=u[0],d=u[1],E=Object(i.b)(P,{variables:{id:a.params.id}}),p=E.loading,f=E.error,g=E.data,O=Object(i.a)(M),j=Object(w.a)(O,1)[0];if(p)return r.a.createElement("p",null,"Loading...");if(f)return r.a.createElement("p",null,"Error :(");var h=g.complaint,N={type:"textarea",onChange:function(e){var a=e.target,t=a.value,n=a.name;d(Object(C.a)(Object(C.a)({},b),{},Object(F.a)({},n,t)))},required:"required",maxLength:"100",help:"Max 100 characters"};return c?r.a.createElement(v.a,{to:c}):r.a.createElement("div",{className:"form-wrap"},r.a.createElement("div",{className:"toolbar"},r.a.createElement("div",{className:"titlebar"},r.a.createElement(o.b,{to:"/complaints",className:"btn btn-light mr-1"},r.a.createElement(D,{name:"keyboard_arrow_left"})),r.a.createElement("h5",null,"Fill complain analysis/resolution"))),r.a.createElement("form",{className:"form form-flex v-scroll",onSubmit:function(e){e.preventDefault();var a=new Map;Object.keys(h).forEach((function(e){b[e]||(a[e]=h[e])})),j({variables:Object(C.a)(Object(C.a)(Object(C.a)({},b),a),{},{id:h.id}),refetchQueries:[{query:q}]}).then((function(){return s("/complaints")}),(function(e){return console.log("Error: ",e)}))}},r.a.createElement("div",{className:"form-fields"},r.a.createElement("p",null,r.a.createElement("b",null,"Details:")," ",h.details),r.a.createElement(R,Object.assign({name:"rca",label:"Root Cause Analysis"},N,{defaultValue:h.rca})),r.a.createElement(R,Object.assign({name:"actionPlan",label:"Action Plan"},N,{defaultValue:h.actionPlan})),r.a.createElement(R,Object.assign({name:"results",label:"Results"},N,{defaultValue:h.rca})),r.a.createElement(R,Object.assign({name:"financialImpact",label:"Financial Impact"},N,{defaultValue:h.results})),r.a.createElement(R,Object.assign({name:"costCenter",label:"Cost Center"},N,{defaultValue:h.costCenter})),r.a.createElement(R,Object.assign({name:"responsiblePerson",label:"Responsible Person"},N,{defaultValue:h.responsiblePerson}))),r.a.createElement("div",{className:"form-footer"},r.a.createElement("button",null,"Submit"))))}));var z=function(e){O();var a=Object(i.b)(q),t=a.loading,l=a.error,c=a.data,s=Object(n.useState)(!1),m=Object(w.a)(s,2),u=m[0],b=m[1],d=Object(n.useState)(null),E=Object(w.a)(d,2),p=E[0],f=E[1];if(t)return r.a.createElement("p",null,"Loading...");if(l)return r.a.createElement("p",null,"Error :(");var g=[{name:"id",label:"ID"},{name:"clientName",label:"Client Name"},{name:"openDate",label:"Open Date"},{name:"nature_name",label:"Nature of Complaint"},{name:"status",label:"Status"},{name:"assigned_to",label:"Assigned To",render:function(e){return e.assignedTo?r.a.createElement("span",null,e.assignedTo.username):r.a.createElement("button",{onClick:function(a){b(!0),f(e)}},"Assign")}},{name:"details",label:"Details",className:"col-ellipsis"},{name:"viewDetails",label:"",render:function(e){return r.a.createElement(o.b,{className:"link btn-light",to:"/complaints/details/".concat(e.id)},"View ",r.a.createElement(D,{name:"chevron_right"}))}}],j=function(e){var a=Date.parse(e);return new Date(a).toLocaleDateString("en-GB")},h=c.complaints.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{nature_name:e.nature.name,openDate:j(e.openDate)})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b,{path:"/complaints",exact:!0},r.a.createElement("div",{className:"toolbar"},r.a.createElement("h5",null,"List of complaints"),r.a.createElement(o.b,{className:"d-flex btn has-left-icon",to:"/complaints/new-complaint"},r.a.createElement(D,{name:"add",text:"New Complaint"}))),r.a.createElement(S,{columns:g,data:h})),r.a.createElement(v.b,{path:"/complaints/new-complaint",exact:!0},r.a.createElement(B,null)),r.a.createElement(v.b,{path:"/complaints/details/:id",exact:!0},r.a.createElement(H,null)),u&&r.a.createElement(J,{title:p.clientName,onClose:function(){return b(!1)}},r.a.createElement(W,{complaint:p,onComplete:function(){return b(!1)}})))};var G=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"toolbar"},r.a.createElement("div",{className:"titlebar"},r.a.createElement(o.b,{to:"/users",className:"btn btn-light mr-1"},r.a.createElement(D,{name:"keyboard_arrow_left"})),r.a.createElement("h5",null,"Register New User"))))};var K=function(e){O();var a=Object(i.b)(f),t=a.loading,n=a.error,l=a.data;if(t)return null;if(n)return r.a.createElement("p",null,"Error (:");var c=l.users.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{name:e.firstName?"".concat(e.firstName," ").concat(e.lastName):null})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b,{path:"/users",exact:!0},r.a.createElement("div",{className:"toolbar"},r.a.createElement("h5",null,"List of users"),r.a.createElement(o.b,{className:"d-flex btn btn-light has-left-icon",to:"/users/new-user"},r.a.createElement(D,{name:"add",text:"New User"}))),r.a.createElement(S,{columns:[{name:"id",label:"ID"},{name:"username",label:"Client Name"},{name:"email",label:"Open Date"},{name:"name",label:"Full Name"}],data:c})),r.a.createElement(v.b,{path:"/users/new-user",exact:!0},r.a.createElement(G,null)))},X={saveToken:function(e,a){sessionStorage.setItem("AccessToken",e),a(!0)},getToken:function(){return sessionStorage.getItem("AccessToken")},removeToken:function(){return sessionStorage.removeItem("AccessToken")}};var Y=function(e){var a=Object(n.useState)(new Map),t=Object(w.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(null),s=Object(w.a)(o,2),m=s[0],u=s[1],b=Object(i.a)(E),d=Object(w.a)(b,2),p=d[0],f=d[1],g=(f.loading,f.client);function O(e){var a=e.target,t=a.value,n=a.name;c(Object(C.a)(Object(C.a)({},l),{},Object(F.a)({},n,t)))}return m?r.a.createElement(v.a,{to:m}):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null),r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"d-flex mb-1 p-1"},r.a.createElement("h3",null,"Twiga - CCMS"),r.a.createElement("img",{src:"/static/images/complaints_register.png",alt:"Image"})),r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),g.clearStore(),p({variables:Object(C.a)({},l)}).then((function(e){if(e.data){var a=e.data.tokenAuth.token;X.saveToken(a,(function(){u("/")}))}}),(function(e){return console.log("Error: ",e)}))}},r.a.createElement("div",{className:"mt-1"},r.a.createElement(R,{name:"username",label:"Username",onChange:O,required:!0}),r.a.createElement(R,{name:"password",label:"Password",type:"password",onChange:O,required:!0})),r.a.createElement("div",{className:"form-footer"},r.a.createElement("button",null,r.a.createElement("span",{className:"mr-1"},"Login"),r.a.createElement(D,{name:"login"}))))))},Z=function(){var e=X.getToken();return e?"JWT ".concat(e):""},ee=new m.a({uri:"".concat("/api","/graphql"),request:function(e){e.setContext({headers:{Authorization:Z()}})}});var ae=function(){return r.a.createElement(o.a,null,r.a.createElement(N.a,{client:ee},r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/login",exact:!0},r.a.createElement(Y,null)),r.a.createElement(v.b,{path:"/"},r.a.createElement(j,null),r.a.createElement("section",{className:"page-content container"},r.a.createElement("div",{className:"content"},r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/",exact:!0},r.a.createElement(h,null)),r.a.createElement(v.b,{path:"/complaints"},r.a.createElement(z,null)),r.a.createElement(v.b,{path:"/users"},r.a.createElement(K,null)))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.eb78d84d.chunk.js.map