window.addEventListener("message",function(e){if("lensembed"!=e.data.t)return;const t=[...document.getElementsByTagName("iframe")].find(t=>t.src==e.data.o);t.width=e.data.w,t.height=e.data.i}),window.addEventListener("load",function(){document.querySelectorAll("#lens-embed[data-post-id]").forEach(function(e){e.outerHTML='<iframe src="https://embed.withlens.app/embed/'+e.getAttribute("data-post-id")+'" frameBorder="0" />'})})