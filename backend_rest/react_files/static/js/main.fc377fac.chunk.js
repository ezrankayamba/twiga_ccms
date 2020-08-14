(this.webpackJsonpfrontend_web=this.webpackJsonpfrontend_web||[]).push([[0],{49:function(e,a,t){e.exports=t(64)},64:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(41),c=t.n(r),o=t(7),m=t(5),i=t(10),s=t(9);function u(){var e=Object(i.a)(["\n  query getUser($id: ID!) {\n    user(id: $id) {\n      id\n      username\n      dateJoined\n      firstName\n      lastName\n      lastLogin\n      email\n      isStaff\n      isSuperuser\n    }\n  }\n"]);return u=function(){return e},e}function d(){var e=Object(i.a)(["\n  mutation registerUser(\n    $id: ID\n    $username: String!\n    $email: String!\n    $firstName: String\n    $lastName: String\n  ) {\n    registerUser(\n      id: $id\n      username: $username\n      email: $email\n      firstName: $firstName\n      lastName: $lastName\n    ) {\n      user {\n        id\n        username\n        dateJoined\n        firstName\n        lastName\n        lastLogin\n        email\n        isStaff\n        isSuperuser\n      }\n    }\n  }\n"]);return d=function(){return e},e}function b(){var e=Object(i.a)(["\n  query getUsers {\n    users {\n      id\n      username\n      dateJoined\n      firstName\n      lastName\n      lastLogin\n      email\n      isStaff\n      isSuperuser\n    }\n  }\n"]);return b=function(){return e},e}function f(){var e=Object(i.a)(["\n  query getMe {\n    me {\n      id\n      username\n      dateJoined\n      firstName\n      lastName\n      lastLogin\n      email\n      isStaff\n      isSuperuser\n    }\n  }\n"]);return f=function(){return e},e}function p(){var e=Object(i.a)(["\n  mutation getToken($username: String!, $password: String!) {\n    tokenAuth(username: $username, password: $password) {\n      token\n    }\n  }\n"]);return p=function(){return e},e}var E=Object(s.b)(p()),g=Object(s.b)(f()),v=Object(s.b)(b()),O=Object(s.b)(d()),h=Object(s.b)(u());var j=function(e){var a=Object(m.c)(g),t=a.loading,n=a.error,r=a.data;return t?l.a.createElement("p",null,"Loading..."):n?l.a.createElement("p",null,"Error :("):(console.log(r),l.a.createElement("div",{className:"user-profile-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("b",null,r.me.username)),l.a.createElement("li",null,l.a.createElement(o.b,{exact:!0,to:"/login"},"Logout")))))},N=t(8);var y=function(){var e=Object(N.g)(),a=Object(m.c)(g),t=a.loading,n=a.error,l=a.data;if(t)return null;if(n){if(n.graphQLErrors.length){var r=n.graphQLErrors[0].message;"Signature has expired"!==r&&"You do not have permission to perform this action"!==r||e.push("/login")}return console.log(n),null}return l};var S=function(){var e=y();return console.log(e),l.a.createElement("header",{className:"navbar container"},l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"Twiga - CCMS"),l.a.createElement("div",{className:"nav-links"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{exact:!0,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/complaints"},"Complaints")),e&&e.me&&e.me.isSuperuser&&l.a.createElement("li",null,l.a.createElement(o.b,{to:"/users"},"Users"))),l.a.createElement(j,null))))};function C(){var e=Object(i.a)(["\n  query kpi {\n    kpiSummary {\n      name\n      count\n      natureName\n    }\n  }\n"]);return C=function(){return e},e}function k(){var e=Object(i.a)(["\n  query getLocSummary {\n    locationSummary {\n      locName\n      locCount\n    }\n  }\n"]);return k=function(){return e},e}function w(){var e=Object(i.a)(["\n  query statusSummary {\n    statusSummary {\n      name\n      count\n    }\n  }\n"]);return w=function(){return e},e}function x(){var e=Object(i.a)(["\n  query natureSummary {\n    natureSummary {\n      name\n      status\n      count\n    }\n  }\n"]);return x=function(){return e},e}var $=Object(s.b)(x()),D=Object(s.b)(w()),q=Object(s.b)(k()),I=Object(s.b)(C()),T=t(26),A=t.n(T),L=function(e){var a=e.graphId,t=e.meta,r=e.title,c=e.extra,o=void 0===c?null:c,m=e.type,i=void 0===m?"bar":m,s=e.stacked,u=void 0!==s&&s;return Object(n.useEffect)((function(){var e={datasets:t.data,labels:t.labels};console.log(e);var n={legend:{display:window.screen.width>800,position:"top"},plugins:{datalabels:{display:!1}},hover:{mode:"index",intersect:!1},tooltips:{displayColors:!0,callbacks:{mode:"x"}},scales:{xAxes:[{stacked:u,gridLines:{display:!1}}],yAxes:[{stacked:u,ticks:{beginAtZero:t.beginAtZero||!1,callback:function(e){return e.toLocaleString()}},type:"linear"}]}};new A.a(document.getElementById(a),{type:i,data:e,options:n})}),[]),l.a.createElement("div",{className:"graph-container bg-white card ".concat(o||"")},l.a.createElement("h6",{className:"pl-1"},r),l.a.createElement("div",null,l.a.createElement("canvas",{id:a,className:"graph p-1",style:{}})))},P=(t(40),t(48)),_=t(47),F=t.n(_),M={randomColor:function(){for(var e="#",a=0;a<6;a++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},randomColors:function(e){var a=this;return Object(P.a)(Array(e).keys()).map((function(){return a.randomColor()}))},contrastColors:function(e){return e.map((function(e){return F()(e)}))}};var R=function(e){y();var a=Object(m.c)($),t=a.loading,n=a.data,r=a.error;if(t)return null;if(r)return null;console.log(n),console.log(n.natureSummary);var c=n.natureSummary.map((function(e){return e.name})).filter((function(e,a,t){return t.indexOf(e)===a})),o={data:[{name:"Not Assigned",count:0},{name:"Assigned",count:0},{name:"Completed",count:0},{name:"Feedback Sent",count:0}].map((function(e){return{label:e.name,backgroundColor:M.randomColor(),data:c.map((function(a){var t=n.natureSummary.find((function(t){return t.name===a&&t.status===e.name}));return t?t.count:0}))}})),labels:c.map((function(e){return e})),beginAtZero:!0};return l.a.createElement(L,{stacked:!0,meta:o,title:"Complaints Nature Summary",graphId:"complaints-nature-summary"})},U=function(e){var a=e.meta,t=e.graphId,r=e.title,c=e.colors,o=e.onDataClick;return Object(n.useEffect)((function(){var e=c||M.randomColors(a.data.length),n={legend:{position:"right"},plugins:{datalabels:{formatter:function(e,a){var t=0;return a.chart.data.datasets[0].data.map((function(e){t+=e})),(100*e/t).toFixed(0)+"%"},color:M.contrastColors(e)}},onClick:function(e,t){if(t&&t.length&&o){var n=a.data.slice(t[0]._index,t[0]._index+1)[0];o(n)}}},l={datasets:[{data:a.data.map((function(e){return e.value})),backgroundColor:e}],labels:a.data.map((function(e){return e.name}))},r=new A.a(document.getElementById(t),{type:"pie",data:l,options:n});console.log(r)}),[]),l.a.createElement("div",{className:"graph-container bg-white card p-2"},l.a.createElement("h6",{className:"pl-1"},r),l.a.createElement("div",null,l.a.createElement("canvas",{id:t,className:"graph p-1",style:{}})))};var V=function(){y();var e=Object(m.c)(D),a=e.loading,t=e.data,n=e.error;if(a)return null;if(n)return null;console.log(t);var r={data:t.statusSummary.map((function(e){return{name:e.name,value:e.count}}))};return l.a.createElement(U,{meta:r,title:"Complaints Status Summary",graphId:"complaints-status-summary"})};var Y=function(){y();var e=Object(m.c)(q),a=e.loading,t=e.data,n=e.error;if(a)return null;if(n)return null;var r={data:t.locationSummary.map((function(e){return{name:e.locName,value:e.locCount}}))};return l.a.createElement(U,{meta:r,title:"Complaints Location Summary",graphId:"complaints-location-summary"})};var B=function(){y();var e=Object(m.c)(I),a=e.loading,t=e.data,n=e.error;if(a)return null;if(n)return null;console.log(t);var r=[{name:"1 week",count:0},{name:"2 weeks",count:0},{name:"3-4 weeks",count:0},{name:"5-6 weeks",count:0},{name:"7-8 weeks",count:0},{name:"Above 8 weeks",count:0}];console.log(t.kpiSummary);var c={data:t.kpiSummary.map((function(e){return e.natureName})).filter((function(e,a,t){return t.indexOf(e)===a})).map((function(e){return{label:e,backgroundColor:M.randomColor(),data:r.map((function(a){var n=t.kpiSummary.find((function(t){return t.natureName===e&&t.name===a.name}));return n?n.count:0}))}})),labels:r.map((function(e){return e.name})),beginAtZero:!0};return l.a.createElement(L,{stacked:!0,meta:c,title:"Complaints KPI",graphId:"complaints-kpi-summary"})};var Q=function(){return l.a.createElement("div",{className:"dashboard"},l.a.createElement(V,null),l.a.createElement(Y,null),l.a.createElement(R,null),l.a.createElement(B,null))},J=t(16),z=t(6),Z=t(4);var W=function(e){var a=e.columns,t=e.data,n=e.idCol,r=void 0===n?"id":n;return l.a.createElement("div",{className:"table-container"},l.a.createElement("table",{className:"table-scrollable"},l.a.createElement("thead",null,l.a.createElement("tr",null,a.map((function(e){return l.a.createElement("th",{key:e.name},e.label)})))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e[r]},a.map((function(a){return l.a.createElement("td",{key:a.name,className:a.className},a.render?a.render(e):e[a.name])})))})))))},G=function(e){var a=e.name,t=e.extra,n=e.text;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"mat-icon material-icons".concat(t?" "+t:"")},a),n&&l.a.createElement("span",null,n))};function K(){var e=Object(i.a)(["\n  query getStatuses {\n    statuses {\n      id\n      name\n    }\n  }\n"]);return K=function(){return e},e}function H(){var e=Object(i.a)(["\n  mutation sendFeedback(\n    $attachments: [FileType]\n    $id: ID!\n    $email: String!\n    $remarks: String\n  ) {\n    feedback(\n      attachments: $attachments\n      id: $id\n      email: $email\n      remarks: $remarks\n    ) {\n      complaint {\n        id\n        clientName\n      }\n    }\n  }\n"]);return H=function(){return e},e}function X(){var e=Object(i.a)(["\n  mutation updateDetails(\n    $id: ID!\n    $rca: String!\n    $actionPlan: String!\n    $results: String!\n    $financialImpact: String!\n    $costCenter: String!\n    $responsiblePerson: String!\n    $attachments: [FileType]\n  ) {\n    updateComplaint(\n      id: $id\n      rca: $rca\n      actionPlan: $actionPlan\n      results: $results\n      financialImpact: $financialImpact\n      costCenter: $costCenter\n      responsiblePerson: $responsiblePerson\n      attachments: $attachments\n    ) {\n      complaint {\n        id\n        details\n      }\n    }\n  }\n"]);return X=function(){return e},e}function ee(){var e=Object(i.a)(["\n  mutation assignTo($id: ID!, $userId: ID!) {\n    assignComplaint(id: $id, userId: $userId) {\n      complaint {\n        id\n        details\n        assignedTo {\n          id\n          username\n        }\n      }\n    }\n  }\n"]);return ee=function(){return e},e}function ae(){var e=Object(i.a)(["\n  mutation createComplaint(\n    $details: String!\n    $clientName: String!\n    $openDate: DateTime!\n    $nature: ID!\n    $location: ID!\n    $attachments: [FileType]\n  ) {\n    registerComplaint(\n      details: $details\n      clientName: $clientName\n      nature: $nature\n      location: $location\n      openDate: $openDate\n      attachments: $attachments\n    ) {\n      complaint {\n        id\n      }\n    }\n  }\n"]);return ae=function(){return e},e}function te(){var e=Object(i.a)(["\n  query getLocations {\n    locations {\n      id\n      name\n    }\n  }\n"]);return te=function(){return e},e}function ne(){var e=Object(i.a)(["\n  query getComplAttachments($complaint_id: ID!) {\n    complaintAttachments(complaintId: $complaint_id) {\n      id\n      file\n    }\n  }\n"]);return ne=function(){return e},e}function le(){var e=Object(i.a)(["\n  query getNatures {\n    natures {\n      id\n      name\n    }\n  }\n"]);return le=function(){return e},e}function re(){var e=Object(i.a)(["\n  query getComplaint($id: ID!) {\n    complaint(id: $id) {\n      id\n      clientName\n      openDate\n      status\n      details\n      rca\n      actionPlan\n      results\n      financialImpact\n      costCenter\n      responsiblePerson\n      dueDate\n      nature {\n        id\n        name\n      }\n      location {\n        id\n        name\n      }\n      assignedTo {\n        id\n        username\n      }\n      assignedAt\n      closedBy {\n        id\n        username\n      }\n      closeDate\n    }\n  }\n"]);return re=function(){return e},e}function ce(){var e=Object(i.a)(["\n  query fetchComplaints(\n    $pageNo: Int\n    $pageSize: Int\n    $clientName: String\n    $location: Int\n    $nature: Int\n    $status: String\n  ) {\n    complaints(\n      pageNo: $pageNo\n      pageSize: $pageSize\n      clientName: $clientName\n      location: $location\n      nature: $nature\n      status: $status\n    ) {\n      id\n      clientName\n      location {\n        id\n        name\n      }\n      openDate\n      status\n      details\n      rca\n      actionPlan\n      results\n      financialImpact\n      costCenter\n      responsiblePerson\n      dueDate\n      closeDate\n      assignedTo {\n        id\n        username\n      }\n      nature {\n        id\n        name\n      }\n    }\n  }\n"]);return ce=function(){return e},e}var oe=Object(s.b)(ce()),me=Object(s.b)(re()),ie=Object(s.b)(le()),se=Object(s.b)(ne()),ue=Object(s.b)(te()),de=Object(s.b)(ae()),be=Object(s.b)(ee()),fe=Object(s.b)(X()),pe=Object(s.b)(H()),Ee=Object(s.b)(K()),ge=t(15),ve=t(23),Oe=t(24);var he=function(e){var a=e.label,t=e.name,n=e.help,r=e.type,c=void 0===r?"text":r,o=e.cls,m=Object(Oe.a)(e,["label","name","help","type","cls"]);return l.a.createElement("div",{className:"input-wrap ".concat(o||"")},l.a.createElement("label",{htmlFor:t},a),"textarea"===c?l.a.createElement("textarea",Object.assign({name:t,id:t},m)):l.a.createElement("input",Object.assign({type:c,name:t,id:t},m)),n&&l.a.createElement("span",{className:"input-help"},n))};var je=function(e){var a=e.label,t=e.name,n=e.query,r=e.options,c=void 0===r?[]:r,o=Object(Oe.a)(e,["label","name","query","options"]),i=Object(m.c)(n?n.name:g,{skip:null===n}),s=i.loading,u=i.data,d=i.error;return s||d?null:(u&&n&&(c=u[n.data]),l.a.createElement("div",{className:"input-wrap"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("select",Object.assign({name:t,id:t},o),l.a.createElement("option",{value:""},"---Select---"),c.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)})))))},Ne=function(e,a){for(var t=[],n=e.target.files,l=function(e){var l=new FileReader,r=n[e];l.addEventListener("load",(function(){var e=l.result;t.push({filename:r.name,data:e}),t.length===n.length&&function(e){a(e)}(t)})),l.readAsDataURL(r)},r=0;r<n.length;r++)l(r)};var ye=function(e){Object(ve.a)(e);var a=Object(m.c)(ie),t=Object(m.c)(ue),r=Object(n.useState)(null),c=Object(Z.a)(r,2),i=c[0],s=c[1],u=Object(n.useState)(new Map),d=Object(Z.a)(u,2),b=d[0],f=d[1],p=Object(m.b)(de),E=Object(Z.a)(p,2),g=E[0],v=E[1].loading,O=a.data?a.data.natures:[],h=t.data?t.data.locations:[],j=Object(n.useState)([]),y=Object(Z.a)(j,2),S=y[0],C=y[1];function k(e){var a=e.target,t=a.value,n=a.name;f(Object(z.a)(Object(z.a)({},b),{},Object(ge.a)({},n,t)))}return i?l.a.createElement(N.a,{to:i}):l.a.createElement("div",null,l.a.createElement("div",{className:"toolbar"},l.a.createElement("div",{className:"titlebar"},l.a.createElement(o.b,{to:"/complaints",className:"btn btn-light mr-1"},l.a.createElement(G,{name:"keyboard_arrow_left"})),l.a.createElement("h5",null,"Register New Complaint"))),v&&l.a.createElement("p",null,"Sending ...."),l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),g({variables:Object(z.a)(Object(z.a)({},b),{},{attachments:S,openDate:"".concat(b.openDate,"T00:00+00:00")}),refetchQueries:[{query:oe}]}).then((function(){return s("/complaints")}),(function(e){return console.log("Error: ",e)}))}},l.a.createElement("div",{className:"form-grid-2"},l.a.createElement("div",null,l.a.createElement(he,{name:"clientName",label:"Client Name",onChange:k,required:!0}),l.a.createElement(je,{name:"location",label:"Location",options:h,onChange:k,required:!0}),l.a.createElement(je,{name:"nature",label:"Nature",options:O,onChange:k,required:!0}),l.a.createElement(he,{name:"openDate",label:"Open Date",type:"date",onChange:k,required:!0,max:(new Date).toISOString().split("T")[0]})),l.a.createElement("div",{className:"register-right"},l.a.createElement(he,{name:"details",label:"Details",type:"textarea",onChange:k,required:!0,maxLength:"300",help:"Max 300 characters",cls:"large"}),l.a.createElement(he,{name:"attachments",type:"file",label:"Attachments",multiple:!0,onChange:function(e){return Ne(e,(function(e){return C(e)}))}}))),l.a.createElement("div",{className:"form-footer"},l.a.createElement("button",null,"Submit"))))};var Se=function(e){var a=e.onClose,t=e.title,n=e.children,r=(e.posx,e.posy,Object(Oe.a)(e,["onClose","title","children","posx","posy"]));return l.a.createElement("div",Object.assign({className:"modal display-block"},r),l.a.createElement("div",{className:"modal-main"},l.a.createElement("div",{className:"modal-header"},t?l.a.createElement("h5",{className:"modal-title"},t):l.a.createElement("span",null),l.a.createElement("div",{className:"btn-group"},l.a.createElement("button",{type:"button",className:"btn text-warning m-1",onClick:a},l.a.createElement(G,{name:"close"})))),l.a.createElement("div",{className:"modal-content"},n)))};var Ce=function(e){var a=e.complaint,t=e.onComplete,r=Object(m.c)(v),c=Object(n.useState)(new Map),o=Object(Z.a)(c,2),i=o[0],s=o[1],u=Object(m.b)(be),d=Object(Z.a)(u,2),b=d[0],f=(d[1].loading,r.data?r.data.users.map((function(e){return Object(z.a)(Object(z.a)({},e),{},{name:e.username})})):[]);return console.log(a),l.a.createElement("div",null,l.a.createElement("h5",null,"Assign Complaint To User"),l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),b({variables:Object(z.a)(Object(z.a)({},i),{},{id:a.id}),refetchQueries:[{query:oe}]}).then((function(){return t()}),(function(e){return console.log("Error: ",e)}))}},l.a.createElement("div",null,l.a.createElement(je,{name:"userId",label:"Assign To",onChange:function(e){var a=e.target,t=a.value,n=a.name;s(Object(z.a)(Object(z.a)({},i),{},Object(ge.a)({},n,t)))},required:!0,options:f})),l.a.createElement("div",{className:"form-footer"},l.a.createElement("button",null,"Submit"))))};var ke=Object(N.h)((function(e){var a=e.match;y();var t=Object(n.useState)(null),r=Object(Z.a)(t,2),c=r[0],i=r[1],s=Object(n.useState)(new Map),u=Object(Z.a)(s,2),d=u[0],b=u[1],f=Object(n.useState)([]),p=Object(Z.a)(f,2),E=p[0],g=p[1],v=Object(m.c)(me,{variables:{id:a.params.id}}),O=v.loading,h=v.error,j=v.data,S=Object(m.b)(fe),C=Object(Z.a)(S,1)[0];if(O)return l.a.createElement("p",null,"Loading...");if(h)return l.a.createElement("p",null,"Error :(");var k=j.complaint,w={type:"textarea",onChange:function(e){var a=e.target,t=a.value,n=a.name;b(Object(z.a)(Object(z.a)({},d),{},Object(ge.a)({},n,t)))},required:"required",maxLength:"200",help:"Max 200 characters"};return c?l.a.createElement(N.a,{to:c}):l.a.createElement("div",{className:"form-wrap"},l.a.createElement("div",{className:"toolbar"},l.a.createElement("div",{className:"titlebar"},l.a.createElement(o.b,{to:"/complaints",className:"btn btn-light mr-1"},l.a.createElement(G,{name:"keyboard_arrow_left"})),l.a.createElement("h5",null,"Fill complain analysis/resolution"))),l.a.createElement("form",{className:"form form-flex v-scroll",onSubmit:function(e){e.preventDefault();var a=new Map;Object.keys(k).forEach((function(e){d[e]||(a[e]=k[e])})),C({variables:Object(z.a)(Object(z.a)(Object(z.a)({},d),a),{},{attachments:E,id:k.id}),refetchQueries:[{query:oe}]}).then((function(){return i("/complaints")}),(function(e){return console.log("Error: ",e)}))}},l.a.createElement("div",{className:"form-fields"},l.a.createElement("p",null,l.a.createElement("b",null,"Details:")," ",k.details),l.a.createElement(he,Object.assign({name:"actionPlan",label:"Action Plan"},w,{defaultValue:k.actionPlan})),l.a.createElement(he,Object.assign({name:"rca",label:"Root Cause Analysis"},w,{defaultValue:k.rca})),l.a.createElement(he,Object.assign({name:"results",label:"Results"},w,{defaultValue:k.results,maxLength:"500",help:"Max 500 characters",rows:"4"})),l.a.createElement(he,Object.assign({name:"financialImpact",label:"Financial Impact"},w,{defaultValue:k.financialImpact})),l.a.createElement(he,Object.assign({name:"costCenter",label:"Cost Center"},w,{defaultValue:k.costCenter})),l.a.createElement(he,Object.assign({name:"responsiblePerson",label:"Responsible Person"},w,{defaultValue:k.responsiblePerson})),l.a.createElement(he,{name:"attachments",type:"file",label:"Attachments",multiple:!0,onChange:function(e){return Ne(e,(function(e){return g(e)}))}})),l.a.createElement("div",{className:"form-footer"},l.a.createElement("button",null,"Submit"))))}));var we=function(e){var a=e.pageNo,t=e.onPageChanged,n=e.lastPage;return l.a.createElement("ul",{className:"pagination"},l.a.createElement("li",{className:"btn-wrap"},l.a.createElement("button",{onClick:function(){t&&t(a>1?a-1:1)},disabled:a<=1},l.a.createElement(G,{name:"keyboard_arrow_left"})," Previous")),l.a.createElement("li",null,l.a.createElement("span",null,"Page ",a)),l.a.createElement("li",{className:"btn-wrap"},l.a.createElement("button",{onClick:function(){t&&t(a+1)},disabled:n},"Next ",l.a.createElement(G,{name:"keyboard_arrow_right"}))))};var xe=function(e){var a=e.complaint,t=(e.img,Object(m.b)(pe)),r=Object(Z.a)(t,2),c=r[0];Object(ve.a)(r[1]);var o=Object(n.useState)(null),i=Object(Z.a)(o,2),s=i[0],u=i[1],d=Object(n.useState)(null),b=Object(Z.a)(d,2),f=b[0],p=b[1],E=Object(n.useState)(null),g=Object(Z.a)(E,2),v=g[0],O=g[1],h=Object(n.useState)([]),j=Object(Z.a)(h,2),y=j[0],S=j[1];return s?l.a.createElement(N.a,{to:s}):l.a.createElement("div",null,l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();var t={id:a.id,attachments:y,email:f,remarks:v};console.log(t),c({variables:t,refetchQueries:[{query:oe}]}).then((function(){return u("/complaints")}),(function(e){return console.log("Error: ",e)}))},encType:"multipart/form-data"},l.a.createElement("div",null,l.a.createElement(he,{name:"email",type:"email",label:"Customer Email",onChange:function(e){return p(e.target.value)},required:!0}),l.a.createElement(he,{name:"remarks",type:"textarea",label:"Remarks",onChange:function(e){return O(e.target.value)},required:!0}),l.a.createElement(he,{name:"attachments",type:"file",label:"Attachments",multiple:!0,onChange:function(e){return Ne(e,(function(e){return S(e)}))},required:!0})),l.a.createElement("div",{className:"form-footer"},l.a.createElement("button",{className:"p-1"},"Send Feedback"))))},$e={DEV:{baseUrl:"http://localhost:8000/api",ROOT:"http://localhost:8000"},PROD:{baseUrl:"/api",ROOT:""}},De=$e.PROD.baseUrl,qe=$e.PROD.ROOT;var Ie=function(e){var a=e.doc;console.log(a);var t=a.file.split("/"),n=t[t.length-1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"text-ellipsis"},n),l.a.createElement("a",{href:"".concat(qe,"/media/").concat(a.file),className:"borded-link",download:!0},l.a.createElement(G,{name:"arrow_downward"})))};var Te=function(e){var a=e.complaint_id,t=Object(m.c)(se,{variables:{complaint_id:a}}),n=t.loading,r=t.error,c=t.data;if(n||r)return null;var o=c.complaintAttachments;return l.a.createElement("ul",{className:"attachments mb-1"},l.a.createElement("li",null,l.a.createElement("b",null,"Attachments")),o.length?o.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(Ie,{doc:e}))})):l.a.createElement("li",null,"None"))},Ae=t(62),Le=t(63);var Pe=Object(N.h)((function(e){var a=e.match;y();var t=Object(n.useRef)(null),r=Object(n.useState)(null),c=Object(Z.a)(r,2),i=c[0],s=c[1],u=Object(n.useState)(null),d=Object(Z.a)(u,2),b=d[0],f=d[1],p=Object(m.c)(me,{variables:{id:a.params.id}}),E=p.loading,g=p.error,v=p.data;if(g&&console.error(g),E)return l.a.createElement("p",null,"Loading...");if(g)return l.a.createElement("p",null,"Error :(");var O,h,j=v.complaint,N=j.id,S=j.clientName,C=j.location,k=j.nature,w=j.openDate,x=j.details,$=j.actionPlan,D=j.closeDate,q=j.costCenter,I=j.financialImpact,T=j.rca,A=j.responsiblePerson,L=j.results,P=j.status,_=j.assignedTo,F=j.assignedAt,M=j.closedBy,R=function(e){return e?(e.indexOf("T")&&(e=e.split("T")[0]),Ae(e).format("DD/MM/YYYY")):null};return l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"toolbar"},l.a.createElement("div",{className:"titlebar"},l.a.createElement(o.b,{to:"/complaints",className:"btn btn-light mr-1"},l.a.createElement(G,{name:"keyboard_arrow_left"})),l.a.createElement("h5",null,"Complete Complaint Information"))),l.a.createElement("div",{className:"details-grid",ref:t},l.a.createElement("div",{className:"grid-form-details"},l.a.createElement("div",null,l.a.createElement("label",null,"Client Name"),l.a.createElement("p",null,S)),l.a.createElement("div",null,l.a.createElement("label",null,"Location"),l.a.createElement("p",null,C.name)),l.a.createElement("div",null,l.a.createElement("label",null,"Nature"),l.a.createElement("p",null,k.name)),l.a.createElement("div",null,l.a.createElement("label",null,"Open Date"),l.a.createElement("p",null,R(w))),l.a.createElement("div",{className:"span"},l.a.createElement("label",null,"Details"),l.a.createElement("p",null,x)),l.a.createElement("div",{className:"span"},l.a.createElement("label",null,"Details"),l.a.createElement("p",null,x)),l.a.createElement("div",null,l.a.createElement("label",null,"Action Plan"),l.a.createElement("p",null,$)),l.a.createElement("div",null,l.a.createElement("label",null,"Root Cause Analysis"),l.a.createElement("p",null,T)),l.a.createElement("div",{className:"span"},l.a.createElement("label",null,"Results"),l.a.createElement("p",null,L)),l.a.createElement("div",{className:"span"},l.a.createElement("label",null,"Financial Impact"),l.a.createElement("p",null,I)),l.a.createElement("div",null,l.a.createElement("label",null,"Cost Center"),l.a.createElement("p",null,q)),l.a.createElement("div",null,l.a.createElement("label",null,"Responsible Person"),l.a.createElement("p",null,A))),l.a.createElement("div",{className:"sidebar mt-1 bg-light"},l.a.createElement("div",{className:"status"},l.a.createElement("label",null,"Status: ",l.a.createElement("span",null,P))),l.a.createElement("ul",null,w&&l.a.createElement("li",null,l.a.createElement(G,{name:"done"}),"On ",R(w),", Created"),_&&l.a.createElement("li",null,l.a.createElement(G,{name:"done"})," On ",R(F),", Assigned to"," ",_.username),M&&l.a.createElement("li",null,l.a.createElement(G,{name:"done"}),"On ",R(D),", Closed by ",M.username),l.a.createElement("li",{className:"kpi"},"KPI:",l.a.createElement("span",{className:"ml-1"},l.a.createElement("b",null,(O=w,h=D,console.log("Open: ".concat(O),"Close: ".concat(h)),h||(h=Ae().format("YYYY-MM-DD")),O.indexOf("T")&&(O=O.split("T")[0]),h.indexOf("T")&&(h=h.split("T")[0]),console.log("Open: ".concat(O),"Close: ".concat(h)),Ae(h).diff(Ae(O),"day")))," day(s)"))),l.a.createElement(Te,{complaint_id:N}),"COMPLETED"===P&&l.a.createElement("button",{className:"send-feedback btn ripple",onClick:function(e){var a=e.target;console.log(a),Le(t.current,{scrollY:-window.scrollY}).then((function(e){console.log(e);var a=e.toDataURL("image/png");f(a),s(!0)}))}},l.a.createElement(G,{name:"mail_outline",text:"Send Feedback To Customer"})))),i&&l.a.createElement(Se,{title:"Feedback To: ".concat(j.clientName),onClose:function(){return s(!1)}},l.a.createElement(xe,{complaint:j,img:b,onComplete:function(){return s(!1)}})))}));var _e=function(e){var a=e.fields,t=e.handleChange,n=e.handleSubmit,r=(e.filter,e.handleExport);return l.a.createElement("div",{className:"filter-export  w-100"},l.a.createElement("form",{className:"form d-flex align-bottom",onSubmit:n},l.a.createElement("div",{className:"inline-fields"},a.map((function(e){return e.type&&"select"===e.type?l.a.createElement(je,Object.assign({key:e.name},e,{onChange:t})):l.a.createElement(he,Object.assign({key:e.name},e,{onChange:t}))}))),l.a.createElement("div",{className:"d-flex"},l.a.createElement("button",{name:"filter"},"Filter"),l.a.createElement("button",{className:"ml-1",name:"export",type:"button",onClick:r},"Export"))))};var Fe=function(e){var a=e.handleSubmit,t=e.handleExport,r=e.filter,c=void 0===r?{}:r;console.log(c);var o=Object(n.useState)(c),m=Object(Z.a)(o,2),i=m[0],s=m[1],u=[{name:"clientName",label:"Client Name"},{name:"location",label:"Location",type:"select",query:{name:ue,data:"locations"},defaultValue:c.location},{name:"nature",label:"Nature",type:"select",query:{name:ie,data:"natures"},defaultValue:c.nature},{name:"status",label:"Status",type:"select",query:{name:Ee,data:"statuses"},defaultValue:c.status}];return l.a.createElement(_e,{handleSubmit:function(e){e.preventDefault(),a(i)},fields:u,handleChange:function(e){var a=e.target,t=a.value,n=a.name;s(Object(z.a)(Object(z.a)({},i),{},Object(ge.a)({},n,t||null)))},handleExport:function(e){e.preventDefault(),t(i)}})};var Me=function(){y();var e=Object(n.useState)(1),a=Object(Z.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(new Map),i=Object(Z.a)(c,2),s=i[0],u=i[1],d=Object(m.a)(oe,{variables:Object(z.a)({pageSize:10,pageNo:t},s)}),b=Object(Z.a)(d,2),f=b[0],p=b[1],E=p.loading,g=p.data,v=p.error;Object(n.useEffect)((function(){var e=new AbortController;return console.log("Start"),f(),function(){e.abort()}}),[t,s]);var O=Object(n.useState)(!1),h=Object(Z.a)(O,2),j=h[0],S=h[1],C=Object(n.useState)(null),k=Object(Z.a)(C,2),w=k[0],x=k[1];if(E)return l.a.createElement("p",null,"Loading...");if(v)return l.a.createElement("p",null,"Error :(");var $=[{name:"id",label:"ID"},{name:"clientName",label:"Client Name"},{name:"location_name",label:"Location"},{name:"openDate",label:"Open Date"},{name:"nature_name",label:"Nature of Complaint"},{name:"status",label:"Status"},{name:"assigned_to",label:"Assigned To",render:function(e){return e.assignedTo?l.a.createElement("span",null,e.assignedTo.username):l.a.createElement("button",{onClick:function(){S(!0),x(e)}},"Assign")}},{name:"details",label:"Details",className:"col-ellipsis"},{name:"updateDetails",label:"",render:function(e){return"ASSIGNED"===e.status?l.a.createElement(o.b,{className:"btn btn-light p-1 d-flex align-left",to:"/complaints/update/".concat(e.id)},l.a.createElement(G,{name:"settings",text:"Complete"})):null}},{name:"viewDetails",render:function(e){return l.a.createElement(o.b,{to:"/complaints/view/".concat(e.id),className:"d-flex"},l.a.createElement(G,{name:"unfold_more"}))}}],D=function(e){var a=Date.parse(e);return new Date(a).toLocaleDateString("en-GB")},q=g?g.complaints.map((function(e){return Object(z.a)(Object(z.a)({},e),{},{nature_name:e.nature.name,location_name:e.location?e.location.name:"",openDate:D(e.openDate)})})):[];return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.b,{path:"/complaints",exact:!0},l.a.createElement("div",{className:"toolbar"},l.a.createElement("h5",null,"List of complaints"),l.a.createElement(o.b,{className:"d-flex btn has-left-icon",to:"/complaints/new-complaint"},l.a.createElement(G,{name:"add",text:"New Complaint"}))),l.a.createElement("hr",null),l.a.createElement("div",{className:"toolbar"},g&&l.a.createElement(Fe,{handleSubmit:function(e){console.log(e);for(var a=new Map,t=0,n=Object.entries(e);t<n.length;t++){var l=Object(Z.a)(n[t],2),c=l[0],o=l[1];o&&(a[c]=o)}console.log("Params: ",a),u(a),r(1)},filter:s,handleExport:function(e){for(var a=new Map,t=0,n=Object.entries(e);t<n.length;t++){var l=Object(Z.a)(n[t],2),r=l[0],c=l[1];c&&(a[r]=c)}var o=Object.keys(a).map((function(e){return e+"="+a[e]})).join("&");fetch("".concat(De,"/export-complaints?").concat(o)).then((function(e){return e.blob()})).then((function(e){var a=window.URL.createObjectURL(e),t=document.createElement("a");t.href=a,t.download="Export.xlsx",document.body.appendChild(t),t.click(),t.remove()}))}})),l.a.createElement(W,{columns:$,data:q}),g&&l.a.createElement(we,{pageNo:t,onPageChanged:function(e){r(e)},lastPage:g.complaints.length<10})),l.a.createElement(N.b,{path:"/complaints/new-complaint",exact:!0},l.a.createElement(ye,null)),l.a.createElement(N.b,{path:"/complaints/update/:id",exact:!0},l.a.createElement(ke,null)),l.a.createElement(N.b,{path:"/complaints/view/:id",exact:!0},l.a.createElement(Pe,null)),j&&l.a.createElement(Se,{title:w.clientName,onClose:function(){return S(!1)}},l.a.createElement(Ce,{complaint:w,onComplete:function(){return S(!1)}})))};var Re=function(){var e=Object(n.useState)(null),a=Object(Z.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(new Map),i=Object(Z.a)(c,2),s=i[0],u=i[1],d=Object(m.b)(O),b=Object(Z.a)(d,2),f=b[0],p=b[1].loading;function E(e){var a=e.target,t=a.value,n=a.name;u(Object(z.a)(Object(z.a)({},s),{},Object(ge.a)({},n,t)))}return t?l.a.createElement(N.a,{to:t}):l.a.createElement("div",null,l.a.createElement("div",{className:"toolbar"},l.a.createElement("div",{className:"titlebar"},l.a.createElement(o.b,{to:"/users",className:"btn btn-light mr-1"},l.a.createElement(G,{name:"keyboard_arrow_left"})),l.a.createElement("h5",null,"Register New User"))),p&&l.a.createElement("p",null,"Sending ...."),l.a.createElement("form",{className:"form form-medium",onSubmit:function(e){e.preventDefault(),f({variables:Object(z.a)({},s),refetchQueries:[{query:v},{query:g}]}).then((function(){return r("/users")}),(function(e){return console.log("Error: ",e)}))}},l.a.createElement("div",null,l.a.createElement(he,{name:"username",label:"Username",onChange:E,required:!0}),l.a.createElement(he,{name:"email",label:"Email Address",onChange:E,type:"email",required:!0}),l.a.createElement(he,{name:"firstName",label:"First Name",onChange:E,required:!0}),l.a.createElement(he,{name:"lastName",label:"Last Name",onChange:E,required:!0})),l.a.createElement("div",{className:"form-footer"},l.a.createElement("button",null,"Submit"))))};var Ue=Object(N.h)((function(e){var a=e.match,t=Object(n.useState)(null),r=Object(Z.a)(t,2),c=r[0],i=r[1],s=Object(n.useState)(new Map),u=Object(Z.a)(s,2),d=u[0],b=u[1],f=Object(m.b)(O),p=Object(Z.a)(f,2),E=p[0];Object(ve.a)(p[1]);var j=Object(m.c)(h,{variables:{id:a.params.id}}),y=j.loading,S=j.error,C=j.data;if(y)return l.a.createElement("p",null,"Loading...");if(S)return l.a.createElement("p",null,"Error :(");var k=C.user;function w(e){var a=e.target,t=a.value,n=a.name;b(Object(z.a)(Object(z.a)({},d),{},Object(ge.a)({},n,t)))}return c?l.a.createElement(N.a,{to:c}):l.a.createElement("div",null,l.a.createElement("div",{className:"toolbar"},l.a.createElement("div",{className:"titlebar"},l.a.createElement(o.b,{to:"/users",className:"btn btn-light mr-1"},l.a.createElement(G,{name:"keyboard_arrow_left"})),l.a.createElement("h5",null,"Update User"))),y&&l.a.createElement("p",null,"Sending ...."),l.a.createElement("form",{className:"form form-medium",onSubmit:function(e){e.preventDefault();var a=new Map;Object.keys(k).forEach((function(e){d[e]||(a[e]=k[e])})),E({variables:Object(z.a)(Object(z.a)(Object(z.a)({},d),a),{},{id:k.id}),refetchQueries:[{query:v},{query:g}]}).then((function(){return i("/users")}),(function(e){return console.log("Error: ",e)}))}},l.a.createElement("div",null,l.a.createElement(he,{name:"username",label:"Username",onChange:w,required:!0,defaultValue:k.username,readOnly:!0}),l.a.createElement(he,{name:"email",label:"Email Address",onChange:w,type:"email",required:!0,defaultValue:k.email}),l.a.createElement(he,{name:"firstName",label:"First Name",onChange:w,required:!0,defaultValue:k.firstName}),l.a.createElement(he,{name:"lastName",label:"Last Name",onChange:w,required:!0,defaultValue:k.lastName})),l.a.createElement("div",{className:"form-footer"},l.a.createElement("button",null,"Submit"))))}));var Ve=function(e){y();var a=Object(m.c)(v),t=a.loading,n=a.error,r=a.data;if(t)return null;if(n)return l.a.createElement("p",null,"Error (:");var c=[{name:"id",label:"ID"},{name:"username",label:"Client Name"},{name:"email",label:"Email"},{name:"name",label:"Full Name"},{name:"actions",label:"",render:function(e){return l.a.createElement("div",null,l.a.createElement("a",{href:"/users/update/".concat(e.id),className:"d-flex align-left"},l.a.createElement(G,{name:"edit",text:"Edit"})))}}],i=r.users.map((function(e){return Object(z.a)(Object(z.a)({},e),{},{name:e.firstName?"".concat(e.firstName," ").concat(e.lastName):null})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.b,{path:"/users",exact:!0},l.a.createElement("div",{className:"toolbar"},l.a.createElement("h5",null,"List of users"),l.a.createElement(o.b,{className:"d-flex btn btn-light has-left-icon",to:"/users/new-user"},l.a.createElement(G,{name:"add",text:"New User"}))),l.a.createElement(W,{columns:c,data:i})),l.a.createElement(N.b,{path:"/users/new-user",exact:!0},l.a.createElement(Re,null)),l.a.createElement(N.b,{path:"/users/update/:id",exact:!0},l.a.createElement(Ue,null)))},Ye={saveToken:function(e,a){sessionStorage.setItem("AccessToken",e),a(!0)},getToken:function(){return sessionStorage.getItem("AccessToken")},removeToken:function(){return sessionStorage.removeItem("AccessToken")}};var Be=function(e){var a=Object(n.useState)(new Map),t=Object(Z.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(null),i=Object(Z.a)(o,2),s=i[0],u=i[1],d=Object(m.b)(E),b=Object(Z.a)(d,2),f=b[0],p=b[1],g=(p.loading,p.client);function v(e){var a=e.target,t=a.value,n=a.name;c(Object(z.a)(Object(z.a)({},r),{},Object(ge.a)({},n,t)))}return s?l.a.createElement(N.a,{to:s}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"login-page box-shadow"},l.a.createElement("div",{className:"login-header d-flex mb-1 p-1"},l.a.createElement("h3",null,"Twiga - CCMS"),l.a.createElement("img",{src:"/static/images/complaints_register.png",alt:"Image"})),l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),g.clearStore(),f({variables:Object(z.a)({},r)}).then((function(e){if(e.data){var a=e.data.tokenAuth.token;Ye.saveToken(a,(function(){u("/")}))}}),(function(e){return console.log("Error: ",e)}))}},l.a.createElement("div",{className:"mt-1"},l.a.createElement(he,{name:"username",label:"Username",onChange:v,required:!0}),l.a.createElement(he,{name:"password",label:"Password",type:"password",onChange:v,required:!0})),l.a.createElement("div",{className:"form-footer"},l.a.createElement("button",null,l.a.createElement("span",{className:"mr-1"},"Login"),l.a.createElement(G,{name:"login"}))))))},Qe=function(){var e=Ye.getToken();return e?"JWT ".concat(e):""},Je=new s.a({uri:"".concat(De,"/graphql"),request:function(e){e.setContext({headers:{Authorization:Qe()}})}});var ze=function(){return l.a.createElement(o.a,null,l.a.createElement(J.a,{client:Je},l.a.createElement(N.d,null,l.a.createElement(N.b,{path:"/login",exact:!0},l.a.createElement(Be,null)),l.a.createElement(N.b,{path:"/"},l.a.createElement(S,null),l.a.createElement("section",{className:"page-content container"},l.a.createElement("div",{className:"content"},l.a.createElement(N.d,null,l.a.createElement(N.b,{path:"/",exact:!0},l.a.createElement(Q,null)),l.a.createElement(N.b,{path:"/complaints"},l.a.createElement(Me,null)),l.a.createElement(N.b,{path:"/users"},l.a.createElement(Ve,null)))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.fc377fac.chunk.js.map