(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),r=a.n(c),i=(a(28),a(1)),o=a(5),u=Object(n.createContext)(void 0);var s=function(e){return l.a.createElement("div",{className:"header"},l.a.createElement("h2",null,e.albumDetails&&e.albumDetails.title?l.a.createElement(o.b,{to:"/"},"Albums"):"Albums",e.albumDetails&&e.albumDetails.title&&l.a.createElement("span",null,"\xa0\xbb\xa0",e.albumDetails.title)))};var m=function(){var e=Object(n.useContext)(u),t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1],m=Object(n.useState)(!0),b=Object(i.a)(m,2),d=b[0],h=b[1];Object(n.useEffect)(function(){e.loadAlbums().then(function(e){r(e),h(!1)})},[e]);var f=c.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(o.b,{to:"/album/"+e.id},l.a.createElement("figure",null,l.a.createElement("img",{src:e.coverPhotoBaseUrl,alt:""}),l.a.createElement("figcaption",null,l.a.createElement("h3",null,e.title)))),l.a.createElement("br",null))});return l.a.createElement("div",null,d&&"Loading...",c.length>0&&l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement("ul",{className:"albums"},f)),l.a.createElement("hr",null),l.a.createElement(o.b,{to:"/"},"Back to Albums List"))},b=a(21);var d=function(e){var t=e.photoID,a=e.photoNumber,c=e.photosTotal;console.log("ViewPhoto -",t,a,c);var r=Object(n.useContext)(u),o=Object(n.useState)(void 0),s=Object(i.a)(o,2),m=s[0],b=s[1],d=Object(n.useState)(!0),h=Object(i.a)(d,2),f=h[0],p=h[1];return Object(n.useEffect)(function(){r.loadPhotoDetail(t).then(function(e){b(e),p(!1)})},[e.match,r,t]),l.a.createElement("div",null,f&&l.a.createElement("figure",null,l.a.createElement("figcaption",null,"'Loading...'")),!f&&m&&l.a.createElement("figure",null,l.a.createElement("img",{src:m.baseUrl,alt:""}),l.a.createElement("figcaption",null,a," of ",c)),!f&&!m&&l.a.createElement("figure",null,l.a.createElement("figcaption",null,"Photo not found")))},h=document.getElementById("root");var f=function(e){var t=document.createElement("div");return t.setAttribute("id","modal"),Object(n.useEffect)(function(){return h.appendChild(t),function(){h.removeChild(t)}}),r.a.createPortal(e.children,t)};var p=function(e){return l.a.createElement(f,null,l.a.createElement("div",{className:"wrapper",onClick:function(t){e.handleClose(t)}},l.a.createElement("div",{className:"inner"},e.children)))};var v=function(e){var t=e.match.params.aid,a=Object(n.useContext)(u),c=Object(n.useState)(void 0),r=Object(i.a)(c,2),m=r[0],h=r[1],f=Object(n.useState)(!0),v=Object(i.a)(f,2),E=v[0],g=v[1],O=Object(n.useState)(!1),j=Object(i.a)(O,2),I=j[0],w=j[1],k=Object(n.useState)(void 0),C=Object(i.a)(k,2),S=C[0],D=C[1],y=Object(n.useState)(void 0),A=Object(i.a)(y,2),P=A[0],x=A[1],N=Object(n.useState)(1),B=Object(i.a)(N,2),T=B[0],L=B[1],U=Object(n.useState)(void 0),G=Object(i.a)(U,2),J=G[0],W=G[1],$=Object(n.useState)([void 0]),q=Object(i.a)($,2),M=q[0],R=q[1],V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;e.preventDefault();var n=e.target.className;I?"inner"!==n&&"wrapper"!==n||w(!1):(D(t),x(parseInt(a)+1),w(!0))};return Object(n.useEffect)(function(){a.loadAlbumDetail(t,J).then(function(e){h(e),g(!1)})},[e.match,a,t,J]),l.a.createElement("div",null,E&&l.a.createElement("span",null,"'Loading...'"),!E&&m&&l.a.createElement("div",null,l.a.createElement(s,{albumDetails:m}),l.a.createElement("ul",null,m.result.mediaItems.map(function(e,t){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#",onClick:function(a){V(a,e.id,t)}},l.a.createElement("figure",null,l.a.createElement("img",{src:e.baseUrl,alt:""}))))})),I&&l.a.createElement(p,{handleClose:V,shown:I},l.a.createElement(d,{photoID:S,photoNumber:P,photosTotal:m.mediaItemsCount})),l.a.createElement("div",{id:"pagination"},J&&l.a.createElement("span",null,l.a.createElement("a",{href:"#",onClick:function(e){!function(e){e.preventDefault(),W(M[T-1]),L(T-1)}(e)}},"Prev"),"\xa0"),l.a.createElement("span",null,T," of ",Math.ceil(m.mediaItemsCount/25)),m.result.nextPageToken&&l.a.createElement("span",null,"\xa0",l.a.createElement("a",{href:"#",onClick:function(e){!function(e){e.preventDefault(),"undefined"===typeof M[T]&&R([].concat(Object(b.a)(M),[J])),W(m.result.nextPageToken),L(T+1)}(e)}},"Next")))),!E&&!m&&l.a.createElement("span",null,"Album not found"),l.a.createElement("hr",null),l.a.createElement(o.b,{to:"/"},"Back to Albums List"))};var E=function(){return l.a.createElement("div",null,"This site was made with React 16.8, Google Photos API, and SASS.",l.a.createElement("br",null),l.a.createElement(o.b,{to:"/"},"Back"))},g=a(7),O=a(22),j=a(19),I=a(20),w=function(){function e(t){Object(j.a)(this,e),this.gapiClient=t}return Object(I.a)(e,[{key:"loadAlbums",value:function(){return this.gapiClient.photoslibrary.albums.list({}).then(function(e){return e.result.albums})}},{key:"loadAlbumDetail",value:function(e,t){var a=this;return this.gapiClient.photoslibrary.albums.get({albumId:e}).then(function(e){return e.result}).then(function(n){return a.gapiClient.photoslibrary.mediaItems.search({albumId:e,pageToken:t}).then(function(e){return Object(O.a)({},n,{result:e.result})})}).catch(function(e){})}},{key:"loadPhotoDetail",value:function(e){return this.gapiClient.photoslibrary.mediaItems.get({mediaItemId:e}).then(function(e){return e.result}).catch(function(e){})}}]),e}(),k="https://www.googleapis.com/auth/photoslibrary.readonly";var C=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!1),b=Object(i.a)(s,2),d=b[0],h=b[1],f=Object(n.useState)(void 0),p=Object(i.a)(f,2),O=p[0],j=p[1];Object(n.useEffect)(function(){console.log("we've mounted");var t=setInterval(function(){window.gapi&&(clearInterval(t),gapi.load("client:auth2",function(){gapi.client.init({discoveryDocs:["https://photoslibrary.googleapis.com/$discovery/rest?version=v1"],clientId:e.gapiID,scope:k}).then(function(){r(!1);var e=gapi.auth2.getAuthInstance();e.isSignedIn.listen(function(){h(t.hasGrantedScopes(k))});var t=e.currentUser.get(),a=t.hasGrantedScopes(k);j(new w(gapi.client)),h(a)})}))},100)},[e.gapiID]);var I=Object(n.useCallback)(function(){gapi.auth2.getAuthInstance().signOut()},[]),C=Object(n.useCallback)(function(){gapi.auth2.getAuthInstance().signIn()},[]);return c?l.a.createElement("div",null,"Initialising..."):d?l.a.createElement("div",{className:"App"},l.a.createElement(u.Provider,{value:O},l.a.createElement(o.a,null,l.a.createElement("button",{onClick:I},"Sign Out"),l.a.createElement(g.a,{path:"/",exact:!0,component:m}),l.a.createElement(g.a,{path:"/album/:aid",component:v}),l.a.createElement(g.a,{path:"/about",component:E})))):l.a.createElement("button",{onClick:C},"Sign in")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(C,{gapiID:"101744662563-frd5q7291nvegithu7pi3i5dcmlp79ra.apps.googleusercontent.com"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.307f26ff.chunk.js.map