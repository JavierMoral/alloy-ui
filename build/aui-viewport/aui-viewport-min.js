YUI.add("aui-viewport",function(e,t){var n=e.getClassName,r=e.namespace("config.viewport"),i=n("view")+e.config.classNameDelimiter,s=r.columns||(r.columns={12:960,9:720,6:480,4:320}),o=r.minColumns||(r.minColumns=4),u=e.config.doc.documentElement,a=e.getWin(),f=new RegExp("(\\s|\\b)+"+i+"(lt|gt)*\\d+(\\b|\\s)+","g"),l=function(){var e=[],t=u.className.replace(f,""),n=t,r=u.clientWidth,a=o,l,c;for(var h in s)s.hasOwnProperty(h)&&(c=s[h],r>=c?(l="gt",a=Math.max(a,c)):l="lt",e.push(i+l+c));e.push(i+a),n+=" "+e.join(" "),t!==n&&(u.className=n)},c=a.on("resize",e.debounce(l,50)),h=a.on("orientationchange",l);l(),e.Viewport={viewportChange:l,_orientationHandle:h,_resizeHandle:c}},"3.0.3-deprecated.26",{requires:["aui-node","aui-component"]});
