(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{11:function(t,e,a){t.exports={table:"Month_table__22P_f",table_rows_container:"Month_table_rows_container__3i9GP",table_rows:"Month_table_rows__1r1Ny"}},14:function(t,e,a){t.exports={title:"TitleColumn_title__2cvAS",title_column:"TitleColumn_title_column__2LD-f"}},17:function(t,e,a){t.exports={app:"App_app__2CsLU","App-logo":"App_App-logo__2Eox5","App-logo-spin":"App_App-logo-spin__14T80"}},29:function(t,e,a){},36:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),l=(a(29),a(17)),i=a.n(l),s=a(8),_=a(11),d=a.n(_),u=a(24),b=a(3),h=a(2),p=a.n(h),j="calendar/DIRECTION_MONTH",m="calendar/SET_SELECT_DAYS",f={currentDay:p()().day(),currentMonth:p()().month(),currentYear:p()().year(),selectedDays:[]},y=a(18),O=a.n(y),D=a(19),x=a.n(D),M=a(20),v=a.n(M),Y=a(21),w=a.n(Y),S=a(22),C=a.n(S),N=(a(30),a(14)),g=a.n(N),A=a(1),k=function(){return Object(A.jsx)("thead",{className:g.a.title,children:Object(A.jsx)("tr",{className:g.a.title_column,children:["\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431","\u0432\u0441"].map((function(t,e){return Object(A.jsx)("td",{children:t.toUpperCase()},e)}))})})},E=a(5),T=a.n(E),B=function(t){var e=t.month,a=t.year,n=t.onSwitchMonth;return Object(A.jsxs)("caption",{className:T.a.caption_table,children:[Object(A.jsx)("span",{className:"".concat(T.a.arrow_left," ").concat(T.a.arrow),onClick:function(){return n("back")},children:" "}),Object(A.jsx)("div",{className:T.a.caption_table_month,children:e+" "+a}),Object(A.jsx)("span",{className:"".concat(T.a.arrow_right," ").concat(T.a.arrow),onClick:function(){return n("next")},children:" "})]})},I=a(6),P=a.n(I),L=function(t){var e=t.ceil,a=t.setSelectDate,n=t.selectedDays,c=t.setMultiSelect,r=t.multiSelect,o=e.date&&e.date.format("YYYY-MM-DD");return Object(A.jsx)("td",{onClick:function(t){return!e.isActive&&function(t,e){var o=n.some((function(e){return e===t}));e.nativeEvent.shiftKey&&c(Object(b.a)(Object(b.a)({},r),{},{end:t})),o?a({action:"delete",date:t}):o||e.nativeEvent.shiftKey||(a({action:"add",date:t}),c({start:t,end:null}))}(o,t)},className:"".concat(P.a.table_ceil," \n                        ").concat(e.isActive&&P.a.active,"\n                        ").concat(!e.isCurrentMonth&&P.a.table_ceil_month," \n                        ").concat(e.isCurrentDay&&P.a.table_ceil_current_day,"\n                        ").concat(e.isSelected&&P.a.selectedDay),children:e.date.date()})},R=a(23),U=a.n(R);p.a.locale("ru"),p.a.extend(O.a),p.a.extend(x.a),p.a.extend(v.a),p.a.extend(w.a),p.a.extend(C.a),p.a.extend(U.a);var G=function(t){var e=t.year,a=t.month,c=t.selectedDays,r=t.dispatch,o=p()(),l=Object(n.useState)({action:"",date:""}),i=Object(s.a)(l,2),_=i[0],u=i[1],b=Object(n.useState)({start:null,end:null}),h=Object(s.a)(b,2),f=h[0],y=h[1];Object(n.useEffect)((function(){"add"===_.action&&localStorage.setItem(_.date,_.date),"delete"===_.action&&localStorage.removeItem(_.date),u({action:"",date:""}),f.start&&f.end&&(function(t){for(var e=p()(t.start,"YYYY-MM-DD"),a=p()(t.end,"YYYY-MM-DD"),n=e.isBefore(a,"day")?[e,a]:[a,e],c=Object(s.a)(n,2),r=c[0],o=c[1],l=[];r.isSameOrBefore(o,"day");)l.push(r.format("YYYY-MM-DD")),r=r.add(1,"day");return l}(f).map((function(t){return localStorage.setItem(t,t)})),y({start:null,end:null}));var t=Object.keys(localStorage);t&&r(function(t){return{type:m,selectedDays:t}}(t))}),[_.date,_.action,f]);for(var O=o.month(a).year(e).startOf("month").weekday(0),D=[],x=[],M=0;M<6;M++){x=[];for(var v=0;v<7;v++)x.push({date:O,month:O.month(),isCurrentDay:O.isSame(o,"day"),isCurrentMonth:a===O.month(),isNextMonth:a<O.month(),isSelected:c.some((function(t){return t===O.format("YYYY-MM-DD")})),isActive:O.isBefore(o,"day")}),O=O.add(1,"day");D.push(x)}var Y,w=(Y=o.month(a).format("MMMM"))?Y[0].toUpperCase()+Y.slice(1):Y;return Object(A.jsxs)("table",{className:d.a.table,children:[Object(A.jsx)(B,{year:e,month:w,onSwitchMonth:function(t){r(function(t){return{type:j,direction:t}}(t))}}),Object(A.jsx)(k,{}),Object(A.jsx)("tbody",{className:d.a.table_rows_container,children:D.map((function(t,e){return Object(A.jsx)("tr",{className:d.a.table_rows,children:t.map((function(t){return Object(A.jsx)(L,{multiSelect:f,setMultiSelect:y,selectedDays:c,setSelectDate:u,ceil:t},t.date.format("YYYY-MM-DD"))}))},e)}))})]})},J=a(4),K=function(){var t=Object(J.c)((function(t){return t.calendar.currentMonth})),e=Object(J.c)((function(t){return t.calendar.currentYear})),a=Object(J.c)((function(t){return t.calendar.selectedDays})),n=Object(J.b)();return Object(A.jsxs)("div",{className:i.a.app,children:[Object(A.jsx)("h1",{children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"}),Object(A.jsx)(G,{selectedDays:a,year:e,month:t,dispatch:n})]})},X=a(16),H=Object(X.a)({calendar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:var a=p()().month(t.currentMonth).year(t.currentYear),n="back"===e.direction?a.subtract(1,"month"):a.add(1,"month");return Object(b.a)(Object(b.a)({},t),{},{currentMonth:n.month(),currentYear:n.year()});case m:return Object(b.a)(Object(b.a)({},t),{},{selectedDays:Object(u.a)(e.selectedDays)});default:return t}}}),q=Object(X.b)(H);o.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(J.a,{store:q,children:Object(A.jsx)(K,{})})}),document.getElementById("root"))},5:function(t,e,a){t.exports={caption_table:"Caption_caption_table__269PX",caption_table_month:"Caption_caption_table_month__1d8S0",arrow:"Caption_arrow__1kjNX",arrow_left:"Caption_arrow_left__B-5yP",arrow_right:"Caption_arrow_right__aougB",arrow_border:"Caption_arrow_border__1tttT"}},6:function(t,e,a){t.exports={table_ceil:"Day_table_ceil__CbRE-",table_ceil_month:"Day_table_ceil_month__1YPRM",table_ceil_current_day:"Day_table_ceil_current_day__1Nbaw",selectedDay:"Day_selectedDay__13hGh",active:"Day_active__3mBf1"}}},[[36,1,2]]]);
//# sourceMappingURL=main.79c12aeb.chunk.js.map