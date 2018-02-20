YUI.add("aui-datepicker-delegate",function(e,t){function u(){}var n=e.Lang,r=n.isString,i="enterKey",s="tabKey",o=e.one(e.config.doc);u.prototype={_eventHandles:null,_userInteractionInProgress:!1,initializer:function(){var e=this;e.bindDelegateUI()},destroy:function(){var t=this;(new e.EventHandle(t._eventHandles)).detach()},bindDelegateUI:function(){var t=this,n=t.get("container"),r=t.get("trigger");t._eventHandles=[n.delegate(["focus","mousedown"],e.bind("_onceUserInteraction",t),r),n.delegate("blur",e.bind("_onUserInteractionRelease",t),r),n.delegate("click",e.bind("_onceUserInteractionRelease",t),r),n.delegate("key",e.bind("_handleTabKeyEvent",t),"tab",r),n.delegate("key",e.bind("_handleEnterKeyEvent",t),"enter",r)],t.after("activeInputChange",e.bind("_afterActiveInputChange",t)),t.publish("selectionChange",{defaultFn:t._defSelectionChangeFn})},focusSelectedValue:function(){},getSelectedDates:function(e){var t=this,n=e||t.get("activeInput"),r=null;return n&&(r=n.getData("datepickerSelection")),r},getParsedDatesFromInputValue:function(t){var n=this,r=n.get("valueExtractor"),i=r.call(n,t);return i?e.Array.filter(i,function(e){return e!==!1}):null},useInputNode:function(){},useInputNodeOnce:function(e){var t=this;t._userInteractionInProgress||t.useInputNode(e)},_afterActiveInputChange:function(e){var t=this;e.prevVal&&e.prevVal.detach("keydown",t._handleKeydownEvent,t),e.newVal&&e.newVal.on("keydown",t._handleKeydownEvent,t)},_defSelectionChangeFn:function(e){var t=this,n=e.newSelection,r=t.get("activeInput"),i=t.get("valueFormatter");i.call(t,n),r&&r.setData("datepickerSelection",n)},_focusActiveCalendar:function(){var e=this;if(e.calendar){var t=e.getCalendar();t.get("boundingBox").focus()}},_formatDate:function(t){var n=this,r=n.get("mask");return e.Date.format(t,{format:r})},_handleKeydownEvent:function(e){var t=this;e.isKey("enter")?t.fire(i):e.isKey("tab")&&t.fire(s)},_handleTabKeyEvent:function(e){var t=this;t._focusActiveCalendar()},_handleEnterKeyEvent:function(e){var t=this;e.preventDefault(),t.show()},_onceUserInteraction:function(e){var t=this;t.useInputNodeOnce(e.currentTarget),t._userInteractionInProgress=!0,t._focusActiveCalendar()},_onceUserInteractionRelease:function(e){var t=this;t.useInputNodeOnce(e.currentTarget),t.focusSelectedValue(),t._userInteractionInProgress=!1},_onUserInteractionRelease:function(e){var t=this;t.useInputNode(e.currentTarget),t._userInteractionInProgress=!1},_valueExtractorFn:function(){return function(t){var r=this,i=r.get("activeInput"),s,o,u=r.get("dateSeparator"),a=r.get("mask"),f;return i&&(s=i.val()),o=n.trim(t||s),o&&(f=[],e.Array.each(o.split(u),function(t){t=n.trim(t),t&&f.push(e.Date.parse(a,t))})),f}},_valueFormatterFn:function(){return function(t){var n=this,r=n.get("activeInput"),i=n.get("dateSeparator"),s=[];e.Array.each(t,function(e){s.push(n._formatDate(e))}),r&&r.val(s.join(i))}}},u.ATTRS={activeInput:{},container:{setter:e.one,value:o,writeOnce:!0},dateSeparator:{value:" \u2014 ",validator:n.isString},mask:{value:"%m/%d/%Y",validator:n.isString},trigger:{validator:r,writeOnce:!0},valueExtractor:{valueFn:"_valueExtractorFn",validator:n.isFunction},valueFormatter:{valueFn:"_valueFormatterFn",validator:n.isFunction}},e.DatePickerDelegate=u},"3.1.0-deprecated.39",{requires:["aui-datatype-date-parse","aui-event-input","event-focus","node-event-delegate"]});
