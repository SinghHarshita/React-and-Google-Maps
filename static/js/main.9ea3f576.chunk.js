(this["webpackJsonpreact-google-maps"]=this["webpackJsonpreact-google-maps"]||[]).push([[0],{17:function(e,a,n){e.exports=n(45)},22:function(e,a,n){},23:function(e,a,n){},45:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(2),i=n.n(o),s=(n(22),n(23),n(12)),l=n(13),m=n(1),c=n(16),p=n(15),u=n(14),d=n.n(u),g=[{name:"Mumbai, India",position:{lat:19.07283,lng:72.88261}},{name:"Bhubaneshwar, India",position:{lat:20.296059,lng:85.824539}},{name:"Lucknow, India",position:{lat:26.85,lng:80.949997}},{name:"Delhi, India",position:{lat:28.610001,lng:77.230003}},{name:"Amaravati, India",position:{lat:14.685564,lng:77.595406}},{name:"Itanagar, India",position:{lat:27.1,lng:93.62}},{name:"Guwahati, India",position:{lat:26.148043,lng:91.731377}},{name:"Patna, India",position:{lat:25.612677,lng:85.158875}},{name:"Chandigarh, India",position:{lat:30.741482,lng:76.768066}},{name:"Rome, Italy",position:{lat:41.890251,lng:12.492373}},{name:"London, UK",position:{lat:51.509865,lng:-.118092}},{name:"Madrid, Spain",position:{lat:40.416775,lng:-3.70379}},{name:"Athens, Greece",position:{lat:37.98381,lng:23.727539}},{name:"Tokyo, Japan",position:{lat:35.652832,lng:139.839478}}],h=function(e){Object(c.a)(n,e);var a=Object(p.a)(n);function n(e){var t;return Object(s.a)(this,n),(t=a.call(this,e)).renderMarkers=function(e,a){var n=new a.Marker({position:t.state.mapCenter,map:e,title:t.state.markerText});return t.setState({map:e,maps:a,marker:n}),n},t.changeMapCenter=function(e){var a=e.target.value;t.state.mapCenter=g[a].position,t.state.markerText=g[a].name,t.forceUpdate(),t.state.map.setCenter(t.state.mapCenter),t.state.marker.setMap(null),t.renderMarkers(t.state.map,t.state.maps),console.log(t.state.marker.title)},t.renderMarkers=t.renderMarkers.bind(Object(m.a)(t)),t.changeMapCenter=t.changeMapCenter.bind(Object(m.a)(t)),t.state={active:0,mapCenter:g[0].position,markerText:g[0].name},t}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"map"},r.a.createElement(d.a,{bootstrapURLKeys:{key:"AIzaSyDiVkB70gE7e1YlqZcJrPHTjDu6d01AXXw"},defaultCenter:this.state.mapCenter,defaultZoom:10,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(a){var n=a.map,t=a.maps;return e.renderMarkers(n,t)}}),r.a.createElement("br",null),r.a.createElement("form",{className:"form"},r.a.createElement("select",{onChange:this.changeMapCenter},g.map((function(e,a){return r.a.createElement("option",{value:a},e.name)})))))}}]),n}(t.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.9ea3f576.chunk.js.map