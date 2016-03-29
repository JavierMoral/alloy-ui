if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-aria-table-sortable/aui-aria-table-sortable.js']) {
   __coverage__['build/aui-aria-table-sortable/aui-aria-table-sortable.js'] = {"path":"build/aui-aria-table-sortable/aui-aria-table-sortable.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":54}}},"2":{"name":"TableSortable","line":23,"loc":{"start":{"line":23,"column":0},"end":{"line":23,"column":25}}},"3":{"name":"(anonymous_3)","line":65,"loc":{"start":{"line":65,"column":16},"end":{"line":65,"column":30}}},"4":{"name":"(anonymous_4)","line":150,"loc":{"start":{"line":150,"column":17},"end":{"line":150,"column":28}}},"5":{"name":"(anonymous_5)","line":166,"loc":{"start":{"line":166,"column":17},"end":{"line":166,"column":28}}},"6":{"name":"(anonymous_6)","line":181,"loc":{"start":{"line":181,"column":17},"end":{"line":181,"column":49}}},"7":{"name":"(anonymous_7)","line":204,"loc":{"start":{"line":204,"column":32},"end":{"line":204,"column":43}}},"8":{"name":"(anonymous_8)","line":217,"loc":{"start":{"line":217,"column":16},"end":{"line":217,"column":32}}},"9":{"name":"(anonymous_9)","line":235,"loc":{"start":{"line":235,"column":17},"end":{"line":235,"column":28}}},"10":{"name":"(anonymous_10)","line":257,"loc":{"start":{"line":257,"column":30},"end":{"line":257,"column":41}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":267,"column":54}},"2":{"start":{"line":10,"column":0},"end":{"line":10,"column":18}},"3":{"start":{"line":23,"column":0},"end":{"line":23,"column":27}},"4":{"start":{"line":32,"column":0},"end":{"line":155,"column":2}},"5":{"start":{"line":66,"column":12},"end":{"line":66,"column":32}},"6":{"start":{"line":68,"column":12},"end":{"line":75,"column":13}},"7":{"start":{"line":69,"column":16},"end":{"line":74,"column":18}},"8":{"start":{"line":77,"column":12},"end":{"line":77,"column":30}},"9":{"start":{"line":151,"column":12},"end":{"line":151,"column":68}},"10":{"start":{"line":157,"column":0},"end":{"line":263,"column":2}},"11":{"start":{"line":167,"column":8},"end":{"line":167,"column":28}},"12":{"start":{"line":169,"column":8},"end":{"line":169,"column":102}},"13":{"start":{"line":170,"column":8},"end":{"line":170,"column":82}},"14":{"start":{"line":182,"column":8},"end":{"line":184,"column":54}},"15":{"start":{"line":186,"column":8},"end":{"line":194,"column":10}},"16":{"start":{"line":205,"column":8},"end":{"line":205,"column":28}},"17":{"start":{"line":207,"column":8},"end":{"line":207,"column":44}},"18":{"start":{"line":218,"column":8},"end":{"line":221,"column":37}},"19":{"start":{"line":223,"column":8},"end":{"line":223,"column":46}},"20":{"start":{"line":224,"column":8},"end":{"line":224,"column":53}},"21":{"start":{"line":225,"column":8},"end":{"line":225,"column":52}},"22":{"start":{"line":236,"column":8},"end":{"line":237,"column":50}},"23":{"start":{"line":239,"column":8},"end":{"line":246,"column":9}},"24":{"start":{"line":240,"column":12},"end":{"line":240,"column":55}},"25":{"start":{"line":242,"column":12},"end":{"line":242,"column":75}},"26":{"start":{"line":243,"column":12},"end":{"line":243,"column":70}},"27":{"start":{"line":245,"column":12},"end":{"line":245,"column":48}},"28":{"start":{"line":248,"column":8},"end":{"line":248,"column":23}},"29":{"start":{"line":258,"column":8},"end":{"line":259,"column":45}},"30":{"start":{"line":261,"column":8},"end":{"line":261,"column":96}},"31":{"start":{"line":265,"column":0},"end":{"line":265,"column":43}}},"branchMap":{"1":{"line":68,"type":"if","locations":[{"start":{"line":68,"column":12},"end":{"line":68,"column":12}},{"start":{"line":68,"column":12},"end":{"line":68,"column":12}}]},"2":{"line":191,"type":"cond-expr","locations":[{"start":{"line":191,"column":43},"end":{"line":191,"column":54}},{"start":{"line":191,"column":57},"end":{"line":191,"column":69}}]},"3":{"line":239,"type":"if","locations":[{"start":{"line":239,"column":8},"end":{"line":239,"column":8}},{"start":{"line":239,"column":8},"end":{"line":239,"column":8}}]}},"code":["(function () { YUI.add('aui-aria-table-sortable', function (A, NAME) {","","/**"," * The Aria Component."," *"," * @module aui-aria"," * @submodule aui-aria-table-sortable"," */","","var Lang = A.Lang;","","/**"," * An extension for A.Plugin.Aria that creates and synchronizes a"," * screen-reader-friendly `caption` element for the table that"," * has sortable headers."," *"," * @class TableSortable"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","","function TableSortable() {}","","/**"," * Configuration for TableSortable."," *"," * @property ATTRS"," * @type Object"," * @static"," */","TableSortable.ATTRS = {","","    /**","     * The CSS class to be added to the caption element.","     *","     * @attribute captionCss","     * @default ''","     * @type String","     */","    captionCss: {","        validator: Lang.isString,","        value: ''","    },","","    /**","     * The value of the 'aria-live' attribute.","     *","     * @attribute captionLive","     * @default ''","     * @type String","     */","    captionLive: {","        validator: Lang.isString,","        value: 'polite'","    },","","    /**","     * The caption node in the table.","     *","     * @attribute captionNode","     * @type Node","     */","    captionNode: {","        setter: function(val) {","            var instance = this;","","            if (!val) {","                val = A.Node.create(Lang.sub(","                        instance.TPL_CAPTION, {","                            captionCss: instance.get('captionCss')","                        }","                    )","                );","            }","","            return A.one(val);","        },","        value: null","    },","","    /**","     * The role for the caption element.","     *","     * @attribute captionRole","     * @default 'alert'","     * @type String","     */","    captionRole: {","        validator: Lang.isString,","        value: 'alert'","    },","","    /**","     * If the caption element is visible","     *","     * @attribute captionVisible","     * @default false","     * @type boolean","     */","    captionVisible: {","        validator: Lang.isBoolean,","        value: false","    },","","    /**","     * The class to used to hide the caption element but","     * leave readable for screen readers.","     *","     * @attribute screenReaderClass","     * @default 'sr-only'","     * @type String","     */","    screenReaderClass: {","        validator: Lang.isString,","        value: 'sr-only'","    },","","    /**","     * Object containing strings stating how the table is sorted.","     *","     * @attribute stringsSortable","     * @default {","     *       asc: 'ascending',","     *       desc: 'descending',","     *       sorted: 'sorted',","     *       sortedBy: 'sorted by',","     *       notSorted: 'not sorted'","     *   }","     * @type Object","     */","    stringsSortable: {","        value: {","            asc: 'ascending',","            desc: 'descending',","            sorted: 'sorted',","            sortedBy: 'sorted by',","            notSorted: 'not sorted'","        }","    },","","    /**","     * The table node containing the columns to be sorted.","     *","     * @attribute tableNode","     * @type Node","     */","    tableNode: {","        setter: A.one,","        valueFn: function() {","            return this.get('host').get('boundingBox').one('table');","        },","        writeOnce: true","    }","};","","TableSortable.prototype = {","    TPL_CAPTION: '<caption class=\"{captionCss}\"></caption>',","","    /**","     * Construction logic executed during TableSortable instantiation. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        var instance = this;","","        instance.after('captionVisibleChange', A.bind(instance._afterCaptionVisibleChange, instance));","        instance.get('host').after('sort', A.bind(instance._afterSort, instance));","    },","","    /**","     * Synchronizes the captionNode's text for screen readers with the sorted","     * column and its sort direction.","     *","     * @method syncCaption","     * @param {String} columnName","     * @param {Boolean} ascending","     */","    syncCaption: function(columnName, ascending) {","        var instance = this,","            caption = instance._getCaption(),","            strings = instance.get('stringsSortable');","","        caption.text(","            Lang.sub(","                strings.sortedBy + ': {columnName} {direction}',","                {","                    columnName: columnName,","                    direction: ascending ? strings.asc : strings.desc","                }","            )","        );","    },","","    /**","     * Handles `captionVisible` events.","     *","     * @method _afterCaptionVisibleChange","     * @param {EventFacade} event","     * @protected","     */","    _afterCaptionVisibleChange: function() {","        var instance = this;","","        instance._toggleScreenReaderClass();","    },","","    /**","     * Handles `sort` events from the host.","     *","     * @method _afterSort","     * @param {EventFacade} event","     * @protected","     */","    _afterSort: function(event) {","        var instance = this,","            ascending,","            columnName,","            sortBy = event.sortBy[0];","","        columnName = A.Object.keys(sortBy)[0];","        ascending = (A.Object.values(sortBy)[0] > 0);","        instance.syncCaption(columnName, ascending);","    },","","    /**","     * Returns a reference to the `captionNode`, and accomplishes","     * necessary setup to prepare the element for screen readers.","     *","     * @method _getCaption","     * @protected","     */","    _getCaption: function() {","        var instance = this,","            caption = instance.get('captionNode');","","        if (!caption.inDoc()) {","            instance.get('tableNode').prepend(caption);","","            caption.setAttribute('aria-live', instance.get('captionLive'));","            caption.setAttribute('role', instance.get('captionRole'));","","            instance._toggleScreenReaderClass();","        }","","        return caption;","    },","","    /**","     * Toggles the screen reader CSS class.","     *","     * @method _toggleScreenReaderClass","     * @protected","     */","    _toggleScreenReaderClass: function() {","        var instance = this,","            caption = instance._getCaption();","","        caption.toggleClass(instance.get('screenReaderClass'), !instance.get('captionVisible'));","    }","};","","A.Base.mix(A.Plugin.Aria, [TableSortable]);","","}, '3.0.3-deprecated.26', {\"requires\": [\"aui-aria\"]});","","}());"]};
}
var __cov_S$CvIMdlenhGfqUGF5ipcg = __coverage__['build/aui-aria-table-sortable/aui-aria-table-sortable.js'];
__cov_S$CvIMdlenhGfqUGF5ipcg.s['1']++;YUI.add('aui-aria-table-sortable',function(A,NAME){__cov_S$CvIMdlenhGfqUGF5ipcg.f['1']++;__cov_S$CvIMdlenhGfqUGF5ipcg.s['2']++;var Lang=A.Lang;__cov_S$CvIMdlenhGfqUGF5ipcg.s['3']++;function TableSortable(){__cov_S$CvIMdlenhGfqUGF5ipcg.f['2']++;}__cov_S$CvIMdlenhGfqUGF5ipcg.s['4']++;TableSortable.ATTRS={captionCss:{validator:Lang.isString,value:''},captionLive:{validator:Lang.isString,value:'polite'},captionNode:{setter:function(val){__cov_S$CvIMdlenhGfqUGF5ipcg.f['3']++;__cov_S$CvIMdlenhGfqUGF5ipcg.s['5']++;var instance=this;__cov_S$CvIMdlenhGfqUGF5ipcg.s['6']++;if(!val){__cov_S$CvIMdlenhGfqUGF5ipcg.b['1'][0]++;__cov_S$CvIMdlenhGfqUGF5ipcg.s['7']++;val=A.Node.create(Lang.sub(instance.TPL_CAPTION,{captionCss:instance.get('captionCss')}));}else{__cov_S$CvIMdlenhGfqUGF5ipcg.b['1'][1]++;}__cov_S$CvIMdlenhGfqUGF5ipcg.s['8']++;return A.one(val);},value:null},captionRole:{validator:Lang.isString,value:'alert'},captionVisible:{validator:Lang.isBoolean,value:false},screenReaderClass:{validator:Lang.isString,value:'sr-only'},stringsSortable:{value:{asc:'ascending',desc:'descending',sorted:'sorted',sortedBy:'sorted by',notSorted:'not sorted'}},tableNode:{setter:A.one,valueFn:function(){__cov_S$CvIMdlenhGfqUGF5ipcg.f['4']++;__cov_S$CvIMdlenhGfqUGF5ipcg.s['9']++;return this.get('host').get('boundingBox').one('table');},writeOnce:true}};__cov_S$CvIMdlenhGfqUGF5ipcg.s['10']++;TableSortable.prototype={TPL_CAPTION:'<caption class="{captionCss}"></caption>',initializer:function(){__cov_S$CvIMdlenhGfqUGF5ipcg.f['5']++;__cov_S$CvIMdlenhGfqUGF5ipcg.s['11']++;var instance=this;__cov_S$CvIMdlenhGfqUGF5ipcg.s['12']++;instance.after('captionVisibleChange',A.bind(instance._afterCaptionVisibleChange,instance));__cov_S$CvIMdlenhGfqUGF5ipcg.s['13']++;instance.get('host').after('sort',A.bind(instance._afterSort,instance));},syncCaption:function(columnName,ascending){__cov_S$CvIMdlenhGfqUGF5ipcg.f['6']++;__cov_S$CvIMdlenhGfqUGF5ipcg.s['14']++;var instance=this,caption=instance._getCaption(),strings=instance.get('stringsSortable');__cov_S$CvIMdlenhGfqUGF5ipcg.s['15']++;caption.text(Lang.sub(strings.sortedBy+': {columnName} {direction}',{columnName:columnName,direction:ascending?(__cov_S$CvIMdlenhGfqUGF5ipcg.b['2'][0]++,strings.asc):(__cov_S$CvIMdlenhGfqUGF5ipcg.b['2'][1]++,strings.desc)}));},_afterCaptionVisibleChange:function(){__cov_S$CvIMdlenhGfqUGF5ipcg.f['7']++;__cov_S$CvIMdlenhGfqUGF5ipcg.s['16']++;var instance=this;__cov_S$CvIMdlenhGfqUGF5ipcg.s['17']++;instance._toggleScreenReaderClass();},_afterSort:function(event){__cov_S$CvIMdlenhGfqUGF5ipcg.f['8']++;__cov_S$CvIMdlenhGfqUGF5ipcg.s['18']++;var instance=this,ascending,columnName,sortBy=event.sortBy[0];__cov_S$CvIMdlenhGfqUGF5ipcg.s['19']++;columnName=A.Object.keys(sortBy)[0];__cov_S$CvIMdlenhGfqUGF5ipcg.s['20']++;ascending=A.Object.values(sortBy)[0]>0;__cov_S$CvIMdlenhGfqUGF5ipcg.s['21']++;instance.syncCaption(columnName,ascending);},_getCaption:function(){__cov_S$CvIMdlenhGfqUGF5ipcg.f['9']++;__cov_S$CvIMdlenhGfqUGF5ipcg.s['22']++;var instance=this,caption=instance.get('captionNode');__cov_S$CvIMdlenhGfqUGF5ipcg.s['23']++;if(!caption.inDoc()){__cov_S$CvIMdlenhGfqUGF5ipcg.b['3'][0]++;__cov_S$CvIMdlenhGfqUGF5ipcg.s['24']++;instance.get('tableNode').prepend(caption);__cov_S$CvIMdlenhGfqUGF5ipcg.s['25']++;caption.setAttribute('aria-live',instance.get('captionLive'));__cov_S$CvIMdlenhGfqUGF5ipcg.s['26']++;caption.setAttribute('role',instance.get('captionRole'));__cov_S$CvIMdlenhGfqUGF5ipcg.s['27']++;instance._toggleScreenReaderClass();}else{__cov_S$CvIMdlenhGfqUGF5ipcg.b['3'][1]++;}__cov_S$CvIMdlenhGfqUGF5ipcg.s['28']++;return caption;},_toggleScreenReaderClass:function(){__cov_S$CvIMdlenhGfqUGF5ipcg.f['10']++;__cov_S$CvIMdlenhGfqUGF5ipcg.s['29']++;var instance=this,caption=instance._getCaption();__cov_S$CvIMdlenhGfqUGF5ipcg.s['30']++;caption.toggleClass(instance.get('screenReaderClass'),!instance.get('captionVisible'));}};__cov_S$CvIMdlenhGfqUGF5ipcg.s['31']++;A.Base.mix(A.Plugin.Aria,[TableSortable]);},'3.0.3-deprecated.26',{'requires':['aui-aria']});
