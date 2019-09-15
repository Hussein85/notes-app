(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/background.af5a618f.jpg"},42:function(e,t,a){e.exports=a(75)},69:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchNotes",function(){return E}),a.d(n,"addNote",function(){return N}),a.d(n,"deleteNote",function(){return j}),a.d(n,"editNote",function(){return O});var r=a(0),c=a.n(r),i=a(18),o=a.n(i),l=a(10),s=a(14),u=a(37),m=a(2),d=a(3),f=a(5),p=a(4),b=a(6),h=a(13),x=a.n(h),g=a(16),v=a(17),y=a.n(v),E=function(){return function(){var e=Object(g.a)(x.a.mark(function e(t){var a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/notes");case 2:a=e.sent,t({type:"fetch_notes",payload:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(g.a)(x.a.mark(function t(a){var n;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.post("/api/notes",e);case 2:n=t.sent,a({type:"add_note",res:n});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(g.a)(x.a.mark(function t(a){return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"/api/delete/",t.next=3,y.a.delete("/api/delete/".concat(e));case 3:a({type:"delete_note",_id:e});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(g.a)(x.a.mark(function t(a){var n,r;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"/api/edit/",(n={}).content=e.content,t.next=5,y.a.put("/api/edit/".concat(e._id),n);case 5:r=t.sent,a({type:"edit_note",res:r});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},w=a(22),k=(a(69),r.Component,a(71),function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"background flex-none flex-initial opacity-75 box rounded-l-lg"},c.a.createElement("div",{className:" mt-12 pl-4 mb-2 mr-16 border-l-2 border-green-500"},c.a.createElement("i",{className:"far fa-sticky-note text-green-500"}),c.a.createElement("a",{href:"#",className:"text-xs text-green-500 ml-2 font-bold"},"My notes")),c.a.createElement("div",{className:"p-2 ml-2 mr-10 mt-10"},c.a.createElement("a",{href:"#",className:"icon text-xs text-gray-700 font-medium"},c.a.createElement("i",{className:"far fa-sticky-note text-gray-700 w-4"}),c.a.createElement("span",{className:"ml-2"},"My notes"))),c.a.createElement("div",{className:"p-2 ml-2 mr-6"},c.a.createElement("a",{href:"#",className:"icon text-xs text-gray-700 font-medium"},c.a.createElement("i",{className:"far fa-star text-gray-700 w-4"}),c.a.createElement("span",{className:"ml-2"},"Starred"))),c.a.createElement("div",{className:"p-2 ml-2 mr-6"},c.a.createElement("a",{href:"#",className:"icon text-xs text-gray-700 font-medium"},c.a.createElement("i",{className:"far fa-folder text-gray-700 w-4"}),c.a.createElement("span",{className:"ml-2"},"Archived"))),c.a.createElement("div",{className:"p-2 ml-2 mr-6"},c.a.createElement("a",{href:"#",className:"icon text-xs text-gray-700 font-medium"},c.a.createElement("i",{className:"far fa-trash-alt text-gray-700 w-4"}),c.a.createElement("span",{className:"ml-2"},"Deleted"))))}}]),t}(r.Component)),_=Object(l.b)(null,{deleteNote:j,editNote:O})(k),C=(r.Component,a(72),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={editing:!1,editText:a.props.note.content},a.deleteNote=function(e){a.props.deleteNote(e)},a.setEditText=function(e){a.setState({editText:e})},a.enableEditing=function(e){a.setState({editing:!0})},a.handleEditingDone=function(e){if(13===e.keyCode){a.setState({editing:!1});var t=a.props.note;t.content=a.state.editText,a.props.editNote(t)}},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.note,a={},n={};return this.state.editing?a.display="none":n.display="none",c.a.createElement("div",{className:"collection-item"},c.a.createElement("p",{style:a},c.a.createElement("span",{className:"noteTitle"},t.content),c.a.createElement("button",{onClick:function(){e.deleteNote(t._id)},className:"btn-floating btn-small red right"},c.a.createElement("i",{className:"large material-icons"},"delete")),c.a.createElement("button",{onClick:this.enableEditing,className:"adjustButton btn-floating btn-small blue right"},c.a.createElement("i",{className:"large material-icons"},"mode_edit"))),c.a.createElement("div",{style:n},c.a.createElement("input",{onKeyDown:this.handleEditingDone.bind(this),type:"text",value:this.state.editText,onChange:function(t){e.setEditText(t.target.value)}})))}}]),t}(r.Component)),D=Object(l.b)(null,{deleteNote:j,editNote:O})(C),T=(a(73),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={editing:!1},a.addNote=function(e){a.props.addNote(e)},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchNotes()}},{key:"renderNoteList",value:function(){var e=this.props.notes;return this.state.editing,e&&e.map(function(e){return c.a.createElement(D,{key:e._id,note:e})})}},{key:"render",value:function(){this.props.notes;return c.a.createElement("div",null,c.a.createElement("div",{className:"bg-green-100 flex w-64 flex-none min-h-screen flex-col justify-between"},c.a.createElement("div",null,c.a.createElement("div",{className:"flex flex-row p-4 mt-4"},c.a.createElement("input",{className:" rounded-lg h-10 w-56 pl-4 focus:outline-none focus:shadow-outline ",type:"text",placeholder:"Search notes"}),c.a.createElement("i",{className:"fas fa-search text-sm text-gray-400 absolute ml-48 mt-4"})),c.a.createElement("div",{className:"flex flex-col overflow-y-auto"},c.a.createElement("div",{className:"p-4"},c.a.createElement("div",{className:"flex justify-between"},c.a.createElement("a",{href:"#",className:"noteTitle"},"Title 1"),c.a.createElement("div",{className:"noteDate"},"17/11/17")),c.a.createElement("p",{className:"noteTruncatedContent"},"Lorem ipsum dolor sit ametLorem ipsum dolor sit amet")))),c.a.createElement("div",{className:"flex justify-center mb-10"},c.a.createElement("a",{href:"#",className:"btn2 btn2-green"},"Add a note"))))}}]),t}(r.Component));var S=Object(l.b)(function(e){return{notes:e.notes}},{fetchNotes:E,addNote:N})(T),P=(a(74),function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"bg-white flex-auto flex flex-col px-16 pt-24 justify-between"},c.a.createElement("div",null,c.a.createElement("div",{className:"tracking-wider text-green-500 font-bold text-2xl"},"Title 1"),c.a.createElement("p",{className:"text-sm font-medium text-gray-600 mt-4"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),c.a.createElement("div",{className:"ml-4 flex mb-12 justify-end"},c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"ml-4 far fa-star text-gray-700 hover:text-green-400"})),c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"ml-4 far fa-folder text-gray-700 hover:text-green-400"})),c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"ml-4 fas fa-pen text-gray-700 hover:text-green-400"})),c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"ml-4 far fa-trash-alt text-gray-700 hover:text-green-400"}))))}}]),t}(r.Component)),q=Object(l.b)(null,{deleteNote:j,editNote:O})(P),A=a(39),L={container:{backgroundImage:"url(".concat(a.n(A).a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}},M=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"bg-image bg-gray-100 py-16 px-24",style:L.container},c.a.createElement("div",{className:"flex overflow-hidden shadow-xl min-h-screen rounded-lg"},c.a.createElement(_,null),c.a.createElement(S,null),c.a.createElement(q,null)))}}]),t}(r.Component),J=Object(l.b)(null,n)(M),z=a(40),B=a(41);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach(function(t){Object(z.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var R=Object(s.c)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_notes":return t.payload;case"add_note":var a=t.res.data;return[].concat(Object(B.a)(e),[a]);case"delete_note":return e.filter(function(e){return e._id!==t._id});case"edit_note":var n=t.res.data;return e.map(function(e,t){return t!==n._id?e:K({},e,{},n)});default:return e}}}),U=Object(s.d)(R,{},Object(s.a)(u.a));o.a.render(c.a.createElement(l.a,{store:U},c.a.createElement(J,null)),document.querySelector("#root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a7e7ab34.chunk.js.map