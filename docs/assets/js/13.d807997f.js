(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{275:function(n,t,e){},291:function(n,t,e){"use strict";var a=e(275);e.n(a).a},311:function(n,t,e){"use strict";e.r(t);var a={render:function(n){return n("div",{class:"carbon-ads",attrs:{id:"native-carbon"}})},mounted:function(){window.BSANativeCallback=function(n){if(!n.ads.length){var t=document.createElement("script");t.src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=grapesjscom",t.setAttribute("id","_carbonads_js");var e=document.getElementById("native-carbon");e&&e.appendChild(t)}},this.load()},watch:{$route:function(n,t){n.path!==t.path&&this.$el.querySelector("#carbonads")&&(this.$el.innerHTML="",this.load())}},methods:{initCarbon:function(){var n=window._bsa;void 0!==n&&n&&n.init("default","CK7I62QJ","placement:grapesjscomdocs",{target:"#native-carbon"})},load:function(){var n=this,t=document.createElement("script");t.src="//m.servedby-buysellads.com/monetization.js",t.onload=function(){return n.initCarbon()},this.$el.appendChild(t)}}},o=(e(291),e(33)),i=Object(o.a)(a,void 0,void 0,!1,null,null,null);t.default=i.exports}}]);