if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-property-builder-available-field/aui-property-builder-available-field.js']) {
   __coverage__['build/aui-property-builder-available-field/aui-property-builder-available-field.js'] = {"path":"build/aui-property-builder-available-field/aui-property-builder-available-field.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":48},"end":{"line":1,"column":67}}},"2":{"name":"(anonymous_2)","line":93,"loc":{"start":{"line":93,"column":21},"end":{"line":93,"column":35}}},"3":{"name":"(anonymous_3)","line":144,"loc":{"start":{"line":144,"column":17},"end":{"line":144,"column":30}}},"4":{"name":"(anonymous_4)","line":155,"loc":{"start":{"line":155,"column":27},"end":{"line":155,"column":40}}},"5":{"name":"(anonymous_5)","line":166,"loc":{"start":{"line":166,"column":29},"end":{"line":166,"column":44}}},"6":{"name":"(anonymous_6)","line":188,"loc":{"start":{"line":188,"column":21},"end":{"line":188,"column":32}}},"7":{"name":"(anonymous_7)","line":220,"loc":{"start":{"line":220,"column":31},"end":{"line":220,"column":47}}},"8":{"name":"(anonymous_8)","line":235,"loc":{"start":{"line":235,"column":24},"end":{"line":235,"column":40}}},"9":{"name":"(anonymous_9)","line":250,"loc":{"start":{"line":250,"column":27},"end":{"line":250,"column":43}}},"10":{"name":"(anonymous_10)","line":265,"loc":{"start":{"line":265,"column":16},"end":{"line":265,"column":30}}},"11":{"name":"(anonymous_11)","line":276,"loc":{"start":{"line":276,"column":25},"end":{"line":276,"column":39}}},"12":{"name":"(anonymous_12)","line":289,"loc":{"start":{"line":289,"column":18},"end":{"line":289,"column":32}}},"13":{"name":"(anonymous_13)","line":302,"loc":{"start":{"line":302,"column":21},"end":{"line":302,"column":35}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":314,"column":79}},"2":{"start":{"line":3,"column":0},"end":{"line":9,"column":38}},"3":{"start":{"line":20,"column":0},"end":{"line":309,"column":3}},"4":{"start":{"line":94,"column":16},"end":{"line":94,"column":36}},"5":{"start":{"line":96,"column":16},"end":{"line":106,"column":17}},"6":{"start":{"line":97,"column":20},"end":{"line":103,"column":22}},"7":{"start":{"line":105,"column":20},"end":{"line":105,"column":60}},"8":{"start":{"line":108,"column":16},"end":{"line":108,"column":27}},"9":{"start":{"line":145,"column":8},"end":{"line":145,"column":60}},"10":{"start":{"line":156,"column":8},"end":{"line":156,"column":126}},"11":{"start":{"line":167,"column":8},"end":{"line":167,"column":27}},"12":{"start":{"line":169,"column":8},"end":{"line":171,"column":9}},"13":{"start":{"line":170,"column":12},"end":{"line":170,"column":50}},"14":{"start":{"line":173,"column":8},"end":{"line":173,"column":20}},"15":{"start":{"line":189,"column":12},"end":{"line":189,"column":32}},"16":{"start":{"line":190,"column":12},"end":{"line":190,"column":44}},"17":{"start":{"line":192,"column":12},"end":{"line":196,"column":15}},"18":{"start":{"line":198,"column":12},"end":{"line":198,"column":82}},"19":{"start":{"line":200,"column":12},"end":{"line":202,"column":14}},"20":{"start":{"line":204,"column":12},"end":{"line":206,"column":14}},"21":{"start":{"line":208,"column":12},"end":{"line":210,"column":14}},"22":{"start":{"line":221,"column":12},"end":{"line":221,"column":32}},"23":{"start":{"line":223,"column":12},"end":{"line":225,"column":14}},"24":{"start":{"line":236,"column":12},"end":{"line":236,"column":32}},"25":{"start":{"line":238,"column":12},"end":{"line":240,"column":14}},"26":{"start":{"line":251,"column":12},"end":{"line":251,"column":32}},"27":{"start":{"line":253,"column":12},"end":{"line":255,"column":14}},"28":{"start":{"line":266,"column":12},"end":{"line":266,"column":68}},"29":{"start":{"line":277,"column":12},"end":{"line":277,"column":32}},"30":{"start":{"line":279,"column":12},"end":{"line":279,"column":88}},"31":{"start":{"line":290,"column":12},"end":{"line":290,"column":32}},"32":{"start":{"line":292,"column":12},"end":{"line":292,"column":48}},"33":{"start":{"line":303,"column":12},"end":{"line":303,"column":32}},"34":{"start":{"line":305,"column":12},"end":{"line":305,"column":52}},"35":{"start":{"line":306,"column":12},"end":{"line":306,"column":62}},"36":{"start":{"line":311,"column":0},"end":{"line":311,"column":64}}},"branchMap":{"1":{"line":96,"type":"if","locations":[{"start":{"line":96,"column":16},"end":{"line":96,"column":16}},{"start":{"line":96,"column":16},"end":{"line":96,"column":16}}]},"2":{"line":169,"type":"if","locations":[{"start":{"line":169,"column":8},"end":{"line":169,"column":8}},{"start":{"line":169,"column":8},"end":{"line":169,"column":8}}]}},"code":["(function () { YUI.add('aui-property-builder-available-field', function (A, NAME) {","","var PropertyBuilderAvailableField,","","    CSS_PROPERTY_BUILDER_FIELD = A.getClassName('property', 'builder', 'field'),","    CSS_PROPERTY_BUILDER_FIELD_DRAGGABLE = A.getClassName('property', 'builder', 'field', 'draggable'),","    CSS_PROPERTY_BUILDER_FIELD_ICON = A.getClassName('property', 'builder', 'field', 'icon'),","    CSS_PROPERTY_BUILDER_FIELD_LABEL = A.getClassName('property', 'builder', 'field', 'label'),","    CSS_ICON = A.getClassName('icon');","","/**"," * A base class for PropertyBuilderAvailableField."," *"," * @class A.PropertyBuilderAvailableField"," * @extends Base"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","PropertyBuilderAvailableField = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'availableField',","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.PropertyBuilderAvailableField`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * Defines if the field is draggable or not.","         *","         * @attribute draggable","         * @default true","         * @type Boolean","         */","        draggable: {","            value: true,","            validator: A.Lang.isBoolean","        },","","        /**","         * The descriptor of a field.","         *","         * @attribute label","         * @type String","         */","        label: {","            validator: A.Lang.isString","        },","","        /**","         * The CSS class name used in the icon.","         *","         * @attribute iconClass","         * @type String","         */","        iconClass: {","            validator: A.Lang.isString","        },","","        /**","         * The identifier of a field.","         *","         * @attribute id","         * @type String","         */","        id: {","            value: A.guid(),","            setter: '_setId',","            validator: A.Lang.isString","        },","","        /**","         * The node used in a field.","         *","         * @attribute node","         * @type Node","         * @writeOnce","         */","        node: {","            valueFn: function(val) {","                var instance = this;","","                if (!A.Lang.isNode(val)) {","                    val = A.Node.create(","                        A.Lang.sub(","                            instance.FIELD_ITEM_TEMPLATE, {","                                iconClass: instance.get('iconClass')","                            }","                        )","                    );","","                    val.setData('availableField', instance);","                }","","                return val;","            },","            validator: A.Lang.isNode,","            writeOnce: true","        },","","        /**","         * The type of a field.","         *","         * @attribute type","         * @default 'node'","         * @type String","         */","        type: {","            value: 'node',","            validator: A.Lang.isString","        }","    },","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type String","     * @static","     */","    EXTENDS: A.Base,","","    /**","     * Constructs the node id string.","     *","     * @method buildNodeId","     * @param id","     * @private","     * @return {String}","     */","    buildNodeId: function(id) {","        return 'availableFields' + '_' + 'field' + '_' + id;","    },","","    /**","     * Gets the `availableField` instance by its id.","     *","     * @method getAvailableFieldById","     * @param id","     * @private","     */","    getAvailableFieldById: function(id) {","        return A.PropertyBuilderAvailableField.getAvailableFieldByNode('#' + A.PropertyBuilderAvailableField.buildNodeId(id));","    },","","    /**","     * Gets the `availableField` instance by its node.","     *","     * @method getAvailableFieldById","     * @param node","     * @private","     */","    getAvailableFieldByNode: function(node) {","        node = A.one(node);","","        if (A.Lang.isNode(node)) {","            return node.getData('availableField');","        }","","        return null;","    },","","    prototype: {","        FIELD_ITEM_TEMPLATE: '<li class=\"' + CSS_PROPERTY_BUILDER_FIELD + '\">' + '<span class=\"' + [CSS_ICON,","            CSS_PROPERTY_BUILDER_FIELD_ICON].join(' ') +","            ' {iconClass}\"></span>' + '<div class=\"' + CSS_PROPERTY_BUILDER_FIELD_LABEL + '\"></div>' + '</li>',","","        /**","         * Construction logic executed during `A.PropertyBuilderAvailableField` instantiation.","         * Lifecycle.","         *","         * @method initializer","         * @protected","         */","        initializer: function() {","            var instance = this;","            var node = instance.get('node');","","            instance.after({","                draggableChange: instance._afterDraggableChange,","                idChange: instance._afterIdChange,","                labelChange: instance._afterLabelChange","            });","","            instance.labelNode = node.one('.' + CSS_PROPERTY_BUILDER_FIELD_LABEL);","","            instance._uiSetDraggable(","                instance.get('draggable')","            );","","            instance._uiSetId(","                instance.get('id')","            );","","            instance._uiSetLabel(","                instance.get('label')","            );","        },","","        /**","         * Fires after `draggable` attribute value change.","         *","         * @method _afterDraggableChange","         * @param event","         * @protected","         */","        _afterDraggableChange: function(event) {","            var instance = this;","","            instance._uiSetDraggable(","                event.newVal","            );","        },","","        /**","         * Fires after `id` attribute value change.","         *","         * @method _afterIdChange","         * @param event","         * @protected","         */","        _afterIdChange: function(event) {","            var instance = this;","","            instance._uiSetId(","                event.newVal","            );","        },","","        /**","         * Fires after `label` attribute value change.","         *","         * @method _afterLabelChange","         * @param event","         * @protected","         */","        _afterLabelChange: function(event) {","            var instance = this;","","            instance._uiSetLabel(","                event.newVal","            );","        },","","        /**","         * Sets the `id` attribute.","         *","         * @method _setId","         * @param val","         * @protected","         */","        _setId: function(val) {","            return A.PropertyBuilderAvailableField.buildNodeId(val);","        },","","        /**","         * Sets the `draggable` attribute in the UI.","         *","         * @method _uiSetDraggable","         * @param val","         * @protected","         */","        _uiSetDraggable: function(val) {","            var instance = this;","","            instance.get('node').toggleClass(CSS_PROPERTY_BUILDER_FIELD_DRAGGABLE, val);","        },","","        /**","         * Sets the `id` attribute in the UI.","         *","         * @method _uiSetId","         * @param val","         * @protected","         */","        _uiSetId: function(val) {","            var instance = this;","","            instance.get('node').set('id', val);","        },","","        /**","         * Sets the `label` attribute in the UI.","         *","         * @method _uiSetLabel","         * @param val","         * @protected","         */","        _uiSetLabel: function(val) {","            var instance = this;","","            instance.get('node').attr('title', val);","            instance.labelNode.setContent(A.Escape.html(val));","        }","    }","});","","A.PropertyBuilderAvailableField = PropertyBuilderAvailableField;","","","}, '3.1.0-deprecated.39', {\"requires\": [\"base\", \"aui-component\", \"aui-node\"]});","","}());"]};
}
var __cov_ByjB_1TGel1m45buMFwZQw = __coverage__['build/aui-property-builder-available-field/aui-property-builder-available-field.js'];
__cov_ByjB_1TGel1m45buMFwZQw.s['1']++;YUI.add('aui-property-builder-available-field',function(A,NAME){__cov_ByjB_1TGel1m45buMFwZQw.f['1']++;__cov_ByjB_1TGel1m45buMFwZQw.s['2']++;var PropertyBuilderAvailableField,CSS_PROPERTY_BUILDER_FIELD=A.getClassName('property','builder','field'),CSS_PROPERTY_BUILDER_FIELD_DRAGGABLE=A.getClassName('property','builder','field','draggable'),CSS_PROPERTY_BUILDER_FIELD_ICON=A.getClassName('property','builder','field','icon'),CSS_PROPERTY_BUILDER_FIELD_LABEL=A.getClassName('property','builder','field','label'),CSS_ICON=A.getClassName('icon');__cov_ByjB_1TGel1m45buMFwZQw.s['3']++;PropertyBuilderAvailableField=A.Component.create({NAME:'availableField',ATTRS:{draggable:{value:true,validator:A.Lang.isBoolean},label:{validator:A.Lang.isString},iconClass:{validator:A.Lang.isString},id:{value:A.guid(),setter:'_setId',validator:A.Lang.isString},node:{valueFn:function(val){__cov_ByjB_1TGel1m45buMFwZQw.f['2']++;__cov_ByjB_1TGel1m45buMFwZQw.s['4']++;var instance=this;__cov_ByjB_1TGel1m45buMFwZQw.s['5']++;if(!A.Lang.isNode(val)){__cov_ByjB_1TGel1m45buMFwZQw.b['1'][0]++;__cov_ByjB_1TGel1m45buMFwZQw.s['6']++;val=A.Node.create(A.Lang.sub(instance.FIELD_ITEM_TEMPLATE,{iconClass:instance.get('iconClass')}));__cov_ByjB_1TGel1m45buMFwZQw.s['7']++;val.setData('availableField',instance);}else{__cov_ByjB_1TGel1m45buMFwZQw.b['1'][1]++;}__cov_ByjB_1TGel1m45buMFwZQw.s['8']++;return val;},validator:A.Lang.isNode,writeOnce:true},type:{value:'node',validator:A.Lang.isString}},EXTENDS:A.Base,buildNodeId:function(id){__cov_ByjB_1TGel1m45buMFwZQw.f['3']++;__cov_ByjB_1TGel1m45buMFwZQw.s['9']++;return'availableFields'+'_'+'field'+'_'+id;},getAvailableFieldById:function(id){__cov_ByjB_1TGel1m45buMFwZQw.f['4']++;__cov_ByjB_1TGel1m45buMFwZQw.s['10']++;return A.PropertyBuilderAvailableField.getAvailableFieldByNode('#'+A.PropertyBuilderAvailableField.buildNodeId(id));},getAvailableFieldByNode:function(node){__cov_ByjB_1TGel1m45buMFwZQw.f['5']++;__cov_ByjB_1TGel1m45buMFwZQw.s['11']++;node=A.one(node);__cov_ByjB_1TGel1m45buMFwZQw.s['12']++;if(A.Lang.isNode(node)){__cov_ByjB_1TGel1m45buMFwZQw.b['2'][0]++;__cov_ByjB_1TGel1m45buMFwZQw.s['13']++;return node.getData('availableField');}else{__cov_ByjB_1TGel1m45buMFwZQw.b['2'][1]++;}__cov_ByjB_1TGel1m45buMFwZQw.s['14']++;return null;},prototype:{FIELD_ITEM_TEMPLATE:'<li class="'+CSS_PROPERTY_BUILDER_FIELD+'">'+'<span class="'+[CSS_ICON,CSS_PROPERTY_BUILDER_FIELD_ICON].join(' ')+' {iconClass}"></span>'+'<div class="'+CSS_PROPERTY_BUILDER_FIELD_LABEL+'"></div>'+'</li>',initializer:function(){__cov_ByjB_1TGel1m45buMFwZQw.f['6']++;__cov_ByjB_1TGel1m45buMFwZQw.s['15']++;var instance=this;__cov_ByjB_1TGel1m45buMFwZQw.s['16']++;var node=instance.get('node');__cov_ByjB_1TGel1m45buMFwZQw.s['17']++;instance.after({draggableChange:instance._afterDraggableChange,idChange:instance._afterIdChange,labelChange:instance._afterLabelChange});__cov_ByjB_1TGel1m45buMFwZQw.s['18']++;instance.labelNode=node.one('.'+CSS_PROPERTY_BUILDER_FIELD_LABEL);__cov_ByjB_1TGel1m45buMFwZQw.s['19']++;instance._uiSetDraggable(instance.get('draggable'));__cov_ByjB_1TGel1m45buMFwZQw.s['20']++;instance._uiSetId(instance.get('id'));__cov_ByjB_1TGel1m45buMFwZQw.s['21']++;instance._uiSetLabel(instance.get('label'));},_afterDraggableChange:function(event){__cov_ByjB_1TGel1m45buMFwZQw.f['7']++;__cov_ByjB_1TGel1m45buMFwZQw.s['22']++;var instance=this;__cov_ByjB_1TGel1m45buMFwZQw.s['23']++;instance._uiSetDraggable(event.newVal);},_afterIdChange:function(event){__cov_ByjB_1TGel1m45buMFwZQw.f['8']++;__cov_ByjB_1TGel1m45buMFwZQw.s['24']++;var instance=this;__cov_ByjB_1TGel1m45buMFwZQw.s['25']++;instance._uiSetId(event.newVal);},_afterLabelChange:function(event){__cov_ByjB_1TGel1m45buMFwZQw.f['9']++;__cov_ByjB_1TGel1m45buMFwZQw.s['26']++;var instance=this;__cov_ByjB_1TGel1m45buMFwZQw.s['27']++;instance._uiSetLabel(event.newVal);},_setId:function(val){__cov_ByjB_1TGel1m45buMFwZQw.f['10']++;__cov_ByjB_1TGel1m45buMFwZQw.s['28']++;return A.PropertyBuilderAvailableField.buildNodeId(val);},_uiSetDraggable:function(val){__cov_ByjB_1TGel1m45buMFwZQw.f['11']++;__cov_ByjB_1TGel1m45buMFwZQw.s['29']++;var instance=this;__cov_ByjB_1TGel1m45buMFwZQw.s['30']++;instance.get('node').toggleClass(CSS_PROPERTY_BUILDER_FIELD_DRAGGABLE,val);},_uiSetId:function(val){__cov_ByjB_1TGel1m45buMFwZQw.f['12']++;__cov_ByjB_1TGel1m45buMFwZQw.s['31']++;var instance=this;__cov_ByjB_1TGel1m45buMFwZQw.s['32']++;instance.get('node').set('id',val);},_uiSetLabel:function(val){__cov_ByjB_1TGel1m45buMFwZQw.f['13']++;__cov_ByjB_1TGel1m45buMFwZQw.s['33']++;var instance=this;__cov_ByjB_1TGel1m45buMFwZQw.s['34']++;instance.get('node').attr('title',val);__cov_ByjB_1TGel1m45buMFwZQw.s['35']++;instance.labelNode.setContent(A.Escape.html(val));}}});__cov_ByjB_1TGel1m45buMFwZQw.s['36']++;A.PropertyBuilderAvailableField=PropertyBuilderAvailableField;},'3.1.0-deprecated.39',{'requires':['base','aui-component','aui-node']});
