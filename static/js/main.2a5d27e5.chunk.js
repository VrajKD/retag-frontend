(this.webpackJsonpretag_frontend=this.webpackJsonpretag_frontend||[]).push([[0],{134:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){},140:function(e,a,t){},141:function(e,a,t){},142:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(33),r=t.n(c),m=(t(72),t(8)),s=t(9),i=t(11),o=t(10),d=t(12),u=t(54),b=t.n(u),E=(t(73),t(13)),p=t(14),f=(t(79),function(e){function a(){var e,t;Object(m.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={startDate:new Date,endDate:new Date},t.handleChangeStart=function(e){t.setState({startDate:e})},t.handleChangeEnd=function(e){t.setState({endDate:e})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"right-div"},n.a.createElement("div",{className:"w-60 fl dib ml4 mt5"},n.a.createElement("p",{className:"fw9 f4 b  mb3"},"Request Tag Logs"),n.a.createElement("hr",{className:"mv3 mw6 b--black-10"}),n.a.createElement("div",{className:"date-inputs"},n.a.createElement(b.a,{selected:this.state.startDate,onChange:this.handleChangeStart,className:"date-input",dateFormat:"MMMM d, yyyy"}),n.a.createElement(b.a,{selected:this.state.endDate,onChange:this.handleChangeEnd,className:"date-input",dateFormat:"MMMM d, yyyy"})),n.a.createElement("button",{className:"date-submit grow "},"Submit Request")))}}]),a}(n.a.Component)),h=(t(134),t(23)),N=t(24),v=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.history.location.pathname,a=["grow","grow","grow","grow","grow","grow"];return"/dashboard"===e?a[0]+=" active":"/requestLog"===e&&(a[3]+=" active"),"/list"===e&&(a[2]+=" active"),console.log(e),n.a.createElement("div",{className:"perm-nav fl"},n.a.createElement("div",{className:"user-session"},n.a.createElement("img",{src:"https://secure.webtoolhub.com/static/resources/icons/set110/7d2f7e06.png",height:"60px",alt:"user-img",width:"60px"}),n.a.createElement("h2",null,"Vraj Dugar"),n.a.createElement("h5",null,"Store Manager"),n.a.createElement("button",{id:"logout",className:"br3 grow"},"LOGOUT")),n.a.createElement("div",{className:"nav"},n.a.createElement("div",{className:"nav-links"},n.a.createElement(h.b,{to:"/dashboard",className:a[0]},n.a.createElement(E.a,{className:"ficon",icon:p.e}),"DASHBOARD"),n.a.createElement(h.b,{to:"/list",className:a[2]},n.a.createElement(E.a,{className:"ficon",icon:p.f}),"TAG LIST"),n.a.createElement(h.b,{to:"/requestLog",className:a[3]},n.a.createElement(E.a,{className:"ficon",icon:p.f}),"REQUEST LOGS"),n.a.createElement(h.b,{to:"/dashboard",className:a[4],id:"nav-security"},n.a.createElement(E.a,{className:"ficon",icon:p.g}),"CALL SECURITY"),n.a.createElement(h.b,{to:"/dashboard",className:"active grow",id:"nav-store"},n.a.createElement(E.a,{className:"ficon",icon:p.d}),n.a.createElement("strong",null,"STORE DETAILS")),n.a.createElement("p",{className:"f7 b para"},"American Fabrics"),n.a.createElement("p",{className:"para"},n.a.createElement("span",null,"Lorem ipsum City")),n.a.createElement("p",{className:"para"},n.a.createElement("span",null,"Oobla Doobla Doo")))))}}]),a}(n.a.Component),g=Object(N.f)(v),w=(t(137),function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"card br3 bg-white shadow-5 ph2 dib mr4 grow"},n.a.createElement("div",{className:"card-prod-desc pa3 pb2 pl0 "},n.a.createElement("div",{className:"fl w-5 dib"},n.a.createElement(E.a,{icon:p.c,className:"f4"})),n.a.createElement("div",{className:"dib"},n.a.createElement("p",{className:"f7 dib ma0 pt0 pb2 ml3 v-top"},"TShirt Item 1"),n.a.createElement("br",null),n.a.createElement("p",{className:"f5 pt0 ml3 dib v-top"},"TShirt Item 1")),n.a.createElement("div",{className:"card-price fr dib"},n.a.createElement("div",{className:"dib"},n.a.createElement("p",{className:"f5 b ma0 dib pa0 ml3 v-top"},"\u20b9 1250"),n.a.createElement("p",{className:"f7 b light-gray pt0 ml3 v-top"},n.a.createElement("a",null,"Update"))))),n.a.createElement("hr",{className:"mw9 bb bw1 b--black-10"}),n.a.createElement("div",{className:"tag-desc mt3 pa0 pb3 center"},n.a.createElement("div",{className:"tag-id mt0 w-50 dib"},n.a.createElement("p",{className:"fw9 f7 pa2 pt0 dib light-silver"},"TAG ID :"),n.a.createElement("p",{className:"fw9 f5 pt1 pl2 "},"12345678910")),n.a.createElement("div",{className:"added-on dib fr pl4 pt1 w-40 ma0 pa0"},n.a.createElement("p",{className:"fw9 f7 v-top dib ph2 mt0 pt0 light-silver"},"ADDED ON :"),n.a.createElement("p",{className:"fw9 f5 pl2 pt1 v-top"},"12-05-19"))),n.a.createElement("div",{className:"ma0 f7 mt1 ml3 fw8 mid-gray"},n.a.createElement("div",{className:"tc mb3 tl mr3"},n.a.createElement(E.a,{icon:p.b,className:"mr2 "}),n.a.createElement("span",null,"REPLACE"))))}}]),a}(n.a.Component)),O=(t(138),function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"right-div"},n.a.createElement("div",{className:"dashboard fl "},n.a.createElement("div",{className:"recent-cover"},n.a.createElement("p",{className:"list-title mt4 mb2 fw3"},"Recently added products"),n.a.createElement("hr",{className:"mv3 mw6 b--black-10"}),n.a.createElement("p",{className:"f5 fw8 gray "},"Showing 333 results"),n.a.createElement("div",{className:"card-list mv4 nowrap overflow-x-auto pb2"},n.a.createElement(w,null),n.a.createElement(w,null),n.a.createElement(w,null),n.a.createElement(w,null),n.a.createElement(w,null),n.a.createElement(w,null),n.a.createElement(w,null),n.a.createElement(w,null),n.a.createElement(w,null),n.a.createElement(w,null))),n.a.createElement("div",{className:"mt2"},n.a.createElement("p",{className:"list-title mt2 mb2 fw3"},"All products"),n.a.createElement("hr",{className:"mv3 mw6 b--black-10"}),n.a.createElement("p",{className:"f5 fw8 gray mb4"},"Showing 1,444 results"),n.a.createElement("div",{className:"card-list mv4 nowrap overflow-x-auto pb3"},n.a.createElement(w,null),n.a.createElement(w,null),n.a.createElement(w,null),n.a.createElement(w,null)))))}}]),a}(n.a.Component)),y=(t(139),t(140),function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("tr",{className:"black bg-white tc "},n.a.createElement("td",null,"12A21345D8"),n.a.createElement("td",null,"Nike DryFit Blue TShirt"),n.a.createElement("td",null,"\u20b9 1,799"),n.a.createElement("td",{className:"table-func"},n.a.createElement("div",{className:"func-div ma0 mt1 ml3 fw8 mid-gray"},n.a.createElement("div",{className:"dib tl grow"},n.a.createElement(E.a,{icon:p.b,className:"mr2 "}),n.a.createElement("span",null,"REPLACE")))))}}]),a}(n.a.Component)),j=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"right-div"},n.a.createElement("div",{className:"fl w-90 dib ml5 mr2 mv5"},n.a.createElement("table",{className:"list-table tc dib"},n.a.createElement("tr",{className:"white bg-dark-gray f5 tc "},n.a.createElement("th",null,"TAG ID"),n.a.createElement("th",null,"PRODUCT NAME"),n.a.createElement("th",null,"PRICE"),n.a.createElement("th",{className:"table-func"},"FUNCTIONS")),n.a.createElement(y,null),n.a.createElement(y,null),n.a.createElement(y,null),n.a.createElement(y,null),n.a.createElement(y,null),n.a.createElement(y,null),n.a.createElement(y,null),n.a.createElement(y,null),n.a.createElement(y,null))))}}]),a}(n.a.Component),k=(t(141),function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"right-div"},n.a.createElement("div",{className:"w-60 fl dib ml4 mt5"},n.a.createElement("p",{className:"fw9 f4 b  mb3"},"Details of the Product"),n.a.createElement("hr",{className:"mv3 mw6 b--black-10"}),n.a.createElement("form",{className:"mt3"},n.a.createElement("input",{type:"text",placeholder:"Name of the Product",id:"form-name",size:"100",required:!0,className:"dim add-text mv4 f3 pa3 br2 black db b--black-20 b"}),n.a.createElement("input",{type:"text",placeholder:"Category of the Product",id:"form-cat",size:"100",required:!0,className:"dim mv4 add-text f3 pa3 br2 black db b--black-20 b"}),n.a.createElement("input",{type:"text",placeholder:"Cost of the Product",id:"form-cost",size:"100",required:!0,className:"dim mv4 add-text f3 pa3 br2 black db b--black-20 b "}),n.a.createElement("p",{className:"fw9 f4 b mt4 mb3 pt3"},"Scan Tag"),n.a.createElement("hr",{className:"mv3 mw6 b--black-10"}),n.a.createElement("p",{className:"red fw3 f5 pt2"},"Please bring your UV Tag towards the receiver"),n.a.createElement("input",{type:"text",placeholder:"No Tag Detected",id:"form-cost",size:"79",className:"mv4 add-tag f3 pa2 br2 black db b--black-20 b"}),n.a.createElement("button",{type:"submit",className:"add-submit grow f3 pt2 dark-gray tr db"},n.a.createElement(E.a,{className:"pr3",icon:p.a}),"Submit"))))}}]),a}(n.a.Component)),C=(t(142),function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(i.a)(this,Object(o.a)(a).call(this))).onRouteChange=function(a){e.setState({page:a})},e.state={page:"dashboard"},e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null),n.a.createElement(N.c,null,n.a.createElement(N.a,{exact:!0,path:"/dashboard",component:O}),n.a.createElement(N.a,{exact:!0,path:"/add",component:k}),n.a.createElement(N.a,{exact:!0,path:"/list",component:j}),n.a.createElement(N.a,{exact:!0,path:"/requestLog",component:f})))}}]),a}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(h.a,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,a,t){e.exports=t(143)},72:function(e,a,t){},79:function(e,a,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.2a5d27e5.chunk.js.map