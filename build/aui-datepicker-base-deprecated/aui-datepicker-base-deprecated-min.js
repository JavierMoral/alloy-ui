YUI.add("aui-datepicker-base-deprecated",function(e,t){var n=e.Lang,r=n.isArray,i=n.isBoolean,s=n.isFunction,o=n.isString,u=e.Array,a=e.DataType,f="calendar",l="contentBox",c="currentNode",h="dateFormat",p="date-picker",d=27,v="focus",m="formatter",g="keydown",y="keypress",b="locale",w="selectionMode",E="setValue",S="trigger",x="type",T=e.Component.create({NAME:p,ATTRS:{calendar:{setter:"_setCalendar",value:{}},formatter:{value:function(e){var t=this,n=[];return r(e)?(u.each(e,function(e,r){n[r]=t.calendar.formatDate(e)}),n.join(",")):t.calendar.formatDate(e)},validator:s},setValue:{value:!0,validator:i},stack:{lazyAdd:!1,value:!0,setter:"_setStack",validator:i},showOn:{value:"mousedown"},hideOn:{value:"mousedown"}},EXTENDS:e.OverlayContext,prototype:{initializer:function(){var t=this,n=t.get(f),r=new e.Calendar(n);t.calendar=r,t.after("calendar:selectionChange",t._afterSelectionChange),t.after(t._afterShow,t,"show"),t._hideOnEscapeEvent(),n.hasOwnProperty("selectedDates")&&r.set("selectedDates",n.selectedDates)},bindUI:function(){var e=this;T.superclass.bindUI.apply(this,arguments),e.on("show",e._onShowOverlay),e._bindTriggerEvents()},destructor:function(){var e=this;e.calendar.destroy(),e.escapeEventHandler.detach()},_afterSelectionChange:function(e){var t=this;t._uiSetSelectedDates(e.newSelection)},_afterShow:function(e){var t=this;t.calendar.focus()},_bindTriggerEvents:function(){var e=this,t=e.get(S),n=t.get(x);t.after(v,function(){/^(text|textarea)$/i.test(n)&&e.show()}),t.after(y,function(){e.show()})},_hideOnEscapeEvent:function(){var t=this;t.escapeEventHandler=e.on(g,function(e){e.keyCode===d&&t.hide()})},_onShowOverlay:function(e){var t=this;t._renderCalendar()},_renderCalendar:function(){var e=this;e.calendar.render(e.get(l))},_setCalendar:function(t){var n=this;return e.mix(t,{bubbleTargets:n}),t},_setStack:function(t){var n=this;return t?e.DatepickerManager.register(n):e.DatepickerManager.remove(n),t},_setTriggerValue:function(e){var t=this,n=t.get(m).apply(t,[e]);t.get(c).val(n)},_uiSetSelectedDates:function(e){var t=this;t.calendar.get(w)!=="multiple"&&t.hide(),t.get(E)&&t._setTriggerValue(e),e.length&&t.calendar.set("date",e[e.length-1])}}});e.DatePicker=T,e.DatepickerManager=new e.OverlayManager({zIndexBase:1e3});var N=function(){};N.ATTRS={dateFormat:{value:"%m/%d/%Y",validator:o},selectedDates:{readOnly:!1,setter:function(e){var t=this;t._clearSelection(),t.selectDates(e)}}},N.prototype={formatDate:function(e){var t=this,n=t.get(h),r=t.get(b);return a.Date.format(e,{format:n,locale:r})}},e.Base.mix(e.Calendar,[N])},"3.1.0-deprecated.20",{requires:["calendar","aui-datatype","aui-overlay-context-deprecated"],skinnable:!0});
