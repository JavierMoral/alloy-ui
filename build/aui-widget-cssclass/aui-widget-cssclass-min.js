YUI.add("aui-widget-cssclass",function(e,t){function n(){}n.ATTRS={cssClass:{}},n.CSS_CLASS_CONTENT_SUFFIX="-content",n.prototype={initializer:function(){var e=this;e._uiSetCssClass(e.get("cssClass")),e.after("cssClassChange",e._afterCssClassChange)},_afterCssClassChange:function(e){var t=this,r;r=e.prevVal,r&&(t.get("boundingBox").removeClass(r),t.get("contentBox").removeClass(r+n.CSS_CLASS_CONTENT_SUFFIX)),t._uiSetCssClass(e.newVal)},_uiSetCssClass:function(e){var t=this;e&&(t.get("boundingBox").addClass(e),t.get("contentBox").addClass(e+n.CSS_CLASS_CONTENT_SUFFIX))}},e.WidgetCssClass=n},"3.0.3-deprecated.26",{requires:["widget-base"]});
