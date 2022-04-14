exports.ids=[2],exports.modules={198:function(e,t,n){"use strict";n.r(t);var r=Object.hasOwnProperty,o=Object.setPrototypeOf,i=Object.isFrozen,a=Object.getPrototypeOf,l=Object.getOwnPropertyDescriptor,c=Object.freeze,s=Object.seal,u=Object.create,m="undefined"!=typeof Reflect&&Reflect,f=m.apply,p=m.construct;f||(f=function(e,t,n){return e.apply(t,n)}),c||(c=function(e){return e}),s||(s=function(e){return e}),p||(p=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(
/*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */
function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var d,h=E(Array.prototype.forEach),g=E(Array.prototype.pop),y=E(Array.prototype.push),v=E(String.prototype.toLowerCase),b=E(String.prototype.match),T=E(String.prototype.replace),A=E(String.prototype.indexOf),x=E(String.prototype.trim),S=E(RegExp.prototype.test),w=(d=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return p(d,t)});function E(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return f(e,t,r)}}function R(e,t){o&&o(e,null);for(var n=t.length;n--;){var r=t[n];if("string"==typeof r){var a=v(r);a!==r&&(i(t)||(t[n]=a),r=a)}e[r]=!0}return e}function _(e){var t=u(null),n=void 0;for(n in e)f(r,e,[n])&&(t[n]=e[n]);return t}function N(e,t){for(;null!==e;){var n=l(e,t);if(n){if(n.get)return E(n.get);if("function"==typeof n.value)return E(n.value)}e=a(e)}return function(e){return console.warn("fallback value for",e),null}}var k=c(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=c(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),O=c(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),M=c(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),L=c(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),F=c(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),I=c(["#text"]),C=c(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),z=c(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),H=c(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),U=c(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),P=s(/\{\{[\s\S]*|[\s\S]*\}\}/gm),B=s(/<%[\s\S]*|[\s\S]*%>/gm),j=s(/^data-[\-\w.\u00B7-\uFFFF]/),W=s(/^aria-[\-\w]+$/),G=s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),q=s(/^(?:\w+script|data):/i),Y=s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function V(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var X=function(){return"undefined"==typeof window?null:window},$=function(e,t){if("object"!==(void 0===e?"undefined":K(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};var Z=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X(),n=function(t){return e(t)};if(n.version="2.3.3",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,i=t.DocumentFragment,a=t.HTMLTemplateElement,l=t.Node,s=t.Element,u=t.NodeFilter,m=t.NamedNodeMap,f=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,p=t.Text,d=t.Comment,E=t.DOMParser,Z=t.trustedTypes,J=s.prototype,Q=N(J,"cloneNode"),ee=N(J,"nextSibling"),te=N(J,"childNodes"),ne=N(J,"parentNode");if("function"==typeof a){var re=o.createElement("template");re.content&&re.content.ownerDocument&&(o=re.content.ownerDocument)}var oe=$(Z,r),ie=oe&&ze?oe.createHTML(""):"",ae=o,le=ae.implementation,ce=ae.createNodeIterator,se=ae.createDocumentFragment,ue=ae.getElementsByTagName,me=r.importNode,fe={};try{fe=_(o).documentMode?o.documentMode:{}}catch(e){}var pe={};n.isSupported="function"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==fe;var de=P,he=B,ge=j,ye=W,ve=q,be=Y,Te=G,Ae=null,xe=R({},[].concat(V(k),V(D),V(O),V(L),V(I))),Se=null,we=R({},[].concat(V(C),V(z),V(H),V(U))),Ee=null,Re=null,_e=!0,Ne=!0,ke=!1,De=!1,Oe=!1,Me=!1,Le=!1,Fe=!1,Ie=!1,Ce=!0,ze=!1,He=!0,Ue=!0,Pe=!1,Be={},je=null,We=R({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ge=null,qe=R({},["audio","video","img","source","image","track"]),Ye=null,Ke=R({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ve="http://www.w3.org/1998/Math/MathML",Xe="http://www.w3.org/2000/svg",$e="http://www.w3.org/1999/xhtml",Ze=$e,Je=!1,Qe=void 0,et=["application/xhtml+xml","text/html"],tt=void 0,nt=null,rt=o.createElement("form"),ot=function(e){nt&&nt===e||(e&&"object"===(void 0===e?"undefined":K(e))||(e={}),e=_(e),Ae="ALLOWED_TAGS"in e?R({},e.ALLOWED_TAGS):xe,Se="ALLOWED_ATTR"in e?R({},e.ALLOWED_ATTR):we,Ye="ADD_URI_SAFE_ATTR"in e?R(_(Ke),e.ADD_URI_SAFE_ATTR):Ke,Ge="ADD_DATA_URI_TAGS"in e?R(_(qe),e.ADD_DATA_URI_TAGS):qe,je="FORBID_CONTENTS"in e?R({},e.FORBID_CONTENTS):We,Ee="FORBID_TAGS"in e?R({},e.FORBID_TAGS):{},Re="FORBID_ATTR"in e?R({},e.FORBID_ATTR):{},Be="USE_PROFILES"in e&&e.USE_PROFILES,_e=!1!==e.ALLOW_ARIA_ATTR,Ne=!1!==e.ALLOW_DATA_ATTR,ke=e.ALLOW_UNKNOWN_PROTOCOLS||!1,De=e.SAFE_FOR_TEMPLATES||!1,Oe=e.WHOLE_DOCUMENT||!1,Fe=e.RETURN_DOM||!1,Ie=e.RETURN_DOM_FRAGMENT||!1,Ce=!1!==e.RETURN_DOM_IMPORT,ze=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,He=!1!==e.SANITIZE_DOM,Ue=!1!==e.KEEP_CONTENT,Pe=e.IN_PLACE||!1,Te=e.ALLOWED_URI_REGEXP||Te,Ze=e.NAMESPACE||$e,Qe=Qe=-1===et.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,tt="application/xhtml+xml"===Qe?function(e){return e}:v,De&&(Ne=!1),Ie&&(Fe=!0),Be&&(Ae=R({},[].concat(V(I))),Se=[],!0===Be.html&&(R(Ae,k),R(Se,C)),!0===Be.svg&&(R(Ae,D),R(Se,z),R(Se,U)),!0===Be.svgFilters&&(R(Ae,O),R(Se,z),R(Se,U)),!0===Be.mathMl&&(R(Ae,L),R(Se,H),R(Se,U))),e.ADD_TAGS&&(Ae===xe&&(Ae=_(Ae)),R(Ae,e.ADD_TAGS)),e.ADD_ATTR&&(Se===we&&(Se=_(Se)),R(Se,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&R(Ye,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(je===We&&(je=_(je)),R(je,e.FORBID_CONTENTS)),Ue&&(Ae["#text"]=!0),Oe&&R(Ae,["html","head","body"]),Ae.table&&(R(Ae,["tbody"]),delete Ee.tbody),c&&c(e),nt=e)},it=R({},["mi","mo","mn","ms","mtext"]),at=R({},["foreignobject","desc","title","annotation-xml"]),lt=R({},D);R(lt,O),R(lt,M);var ct=R({},L);R(ct,F);var st=function(e){y(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},ut=function(e,t){try{y(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){y(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Se[e])if(Fe||Ie)try{st(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},mt=function(e){var t=void 0,n=void 0;if(Le)e="<remove></remove>"+e;else{var r=b(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===Qe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=oe?oe.createHTML(e):e;if(Ze===$e)try{t=(new E).parseFromString(i,Qe)}catch(e){}if(!t||!t.documentElement){t=le.createDocument(Ze,"template",null);try{t.documentElement.innerHTML=Je?"":i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),Ze===$e?ue.call(t,Oe?"html":"body")[0]:Oe?t.documentElement:a},ft=function(e){return ce.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},pt=function(e){return"object"===(void 0===l?"undefined":K(l))?e instanceof l:e&&"object"===(void 0===e?"undefined":K(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},dt=function(e,t,r){pe[e]&&h(pe[e],function(e){e.call(n,t,r,nt)})},ht=function(e){var t,r=void 0;if(dt("beforeSanitizeElements",e,null),!((t=e)instanceof p||t instanceof d||"string"==typeof t.nodeName&&"string"==typeof t.textContent&&"function"==typeof t.removeChild&&t.attributes instanceof f&&"function"==typeof t.removeAttribute&&"function"==typeof t.setAttribute&&"string"==typeof t.namespaceURI&&"function"==typeof t.insertBefore))return st(e),!0;if(b(e.nodeName,/[\u0080-\uFFFF]/))return st(e),!0;var o=tt(e.nodeName);if(dt("uponSanitizeElement",e,{tagName:o,allowedTags:Ae}),!pt(e.firstElementChild)&&(!pt(e.content)||!pt(e.content.firstElementChild))&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return st(e),!0;if("select"===o&&S(/<template/i,e.innerHTML))return st(e),!0;if(!Ae[o]||Ee[o]){if(Ue&&!je[o]){var i=ne(e)||e.parentNode,a=te(e)||e.childNodes;if(a&&i)for(var l=a.length-1;l>=0;--l)i.insertBefore(Q(a[l],!0),ee(e))}return st(e),!0}return e instanceof s&&!function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:$e,tagName:"template"});var n=v(e.tagName),r=v(t.tagName);if(e.namespaceURI===Xe)return t.namespaceURI===$e?"svg"===n:t.namespaceURI===Ve?"svg"===n&&("annotation-xml"===r||it[r]):Boolean(lt[n]);if(e.namespaceURI===Ve)return t.namespaceURI===$e?"math"===n:t.namespaceURI===Xe?"math"===n&&at[r]:Boolean(ct[n]);if(e.namespaceURI===$e){if(t.namespaceURI===Xe&&!at[r])return!1;if(t.namespaceURI===Ve&&!it[r])return!1;var o=R({},["title","style","font","a","script"]);return!ct[n]&&(o[n]||!lt[n])}return!1}(e)?(st(e),!0):"noscript"!==o&&"noembed"!==o||!S(/<\/no(script|embed)/i,e.innerHTML)?(De&&3===e.nodeType&&(r=e.textContent,r=T(r,de," "),r=T(r,he," "),e.textContent!==r&&(y(n.removed,{element:e.cloneNode()}),e.textContent=r)),dt("afterSanitizeElements",e,null),!1):(st(e),!0)},gt=function(e,t,n){if(He&&("id"===t||"name"===t)&&(n in o||n in rt))return!1;if(Ne&&!Re[t]&&S(ge,t));else if(_e&&S(ye,t));else{if(!Se[t]||Re[t])return!1;if(Ye[t]);else if(S(Te,T(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==A(n,"data:")||!Ge[e])if(ke&&!S(ve,T(n,be,"")));else if(n)return!1}return!0},yt=function(e){var t=void 0,r=void 0,o=void 0,i=void 0;dt("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Se};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r=x(t.value),o=tt(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,dt("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(ut(s,e),l.keepAttr))if(S(/\/>/i,r))ut(s,e);else{De&&(r=T(r,de," "),r=T(r,he," "));var m=tt(e.nodeName);if(gt(m,o,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),g(n.removed)}catch(e){}}}dt("afterSanitizeAttributes",e,null)}},vt=function e(t){var n=void 0,r=ft(t);for(dt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)dt("uponSanitizeShadowNode",n,null),ht(n)||(n.content instanceof i&&e(n.content),yt(n));dt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,o){var a=void 0,c=void 0,s=void 0,u=void 0,m=void 0;if((Je=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!pt(e)){if("function"!=typeof e.toString)throw w("toString is not a function");if("string"!=typeof(e=e.toString()))throw w("dirty is not a string, aborting")}if(!n.isSupported){if("object"===K(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(pt(e))return t.toStaticHTML(e.outerHTML)}return e}if(Me||ot(o),n.removed=[],"string"==typeof e&&(Pe=!1),Pe);else if(e instanceof l)1===(c=(a=mt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===c.nodeName?a=c:"HTML"===c.nodeName?a=c:a.appendChild(c);else{if(!Fe&&!De&&!Oe&&-1===e.indexOf("<"))return oe&&ze?oe.createHTML(e):e;if(!(a=mt(e)))return Fe?null:ie}a&&Le&&st(a.firstChild);for(var f=ft(Pe?e:a);s=f.nextNode();)3===s.nodeType&&s===u||ht(s)||(s.content instanceof i&&vt(s.content),yt(s),u=s);if(u=null,Pe)return e;if(Fe){if(Ie)for(m=se.call(a.ownerDocument);a.firstChild;)m.appendChild(a.firstChild);else m=a;return Ce&&(m=me.call(r,m,!0)),m}var p=Oe?a.outerHTML:a.innerHTML;return De&&(p=T(p,de," "),p=T(p,he," ")),oe&&ze?oe.createHTML(p):p},n.setConfig=function(e){ot(e),Me=!0},n.clearConfig=function(){nt=null,Me=!1},n.isValidAttribute=function(e,t,n){nt||ot({});var r=tt(e),o=tt(t);return gt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(pe[e]=pe[e]||[],y(pe[e],t))},n.removeHook=function(e){pe[e]&&g(pe[e])},n.removeHooks=function(e){pe[e]&&(pe[e]=[])},n.removeAllHooks=function(){pe={}},n}();t.default=Z}};