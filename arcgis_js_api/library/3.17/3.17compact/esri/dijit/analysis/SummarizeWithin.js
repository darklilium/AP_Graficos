// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/SummarizeWithin.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"sumWithinIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e${i18n.summarizeWithin}\x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e               \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_aggregateToolDescription" \x3e${i18n.summarizeDefine}\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"sumWithinLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e            \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseSummarizeLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"Summarize"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e  \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"longInput esriLongLabel esriLeadingMargin1"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_layersSelect" data-dojo-attach-event\x3d"onChange:_handleLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_addStatsLabel"\x3e${i18n.addStats}\x3c/label\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_addStatsHelpLink" esriHelpTopic\x3d"StatisticsNoLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n         \x3ctr\x3e\r\n           \x3ctd colspan\x3d"3"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_sumMetricCheck" data-dojo-props\x3d"checked:\'true\', disabled:\'true\'"\x3e\x3c/div\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"_sumMetricLabel"\x3e\x3c/label\x3e\r\n              \x3c/label\x3e\r\n              \x3cselect class\x3d"mediumInput esriShortlabel" data-dojo-type\x3d"dijit.form.Select"  data-dojo-props\x3d"style:{tableLayout: \'fixed\', overflowX:\'hidden\'}" data-dojo-attach-event\x3d"onChange:_handleShapeUnitsChange" data-dojo-attach-point\x3d"_shapeUnitsSelect"\x3e\x3c/select\x3e\r\n           \x3c/td\x3e\r\n         \x3c/tr\x3e\r\n         \x3c!--\x3ctr\x3e\r\n           \x3ctd colspan\x3d"3"\x3e\r\n              \x3clabel class\x3d"longTextInput"\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_addStatesCheck" data-dojo-attach-event\x3d"onChange:_handleStatsCheckChange" data-dojo-props\x3d"checked:\'true\'"\x3e\x3c/div\x3e\r\n                ${i18n.addStatsLabel}                \r\n              \x3c/label\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"KeepBoundaryNoPoints"\x3e\x3c/a\x3e\r\n           \x3c/td\x3e           \r\n          \x3c/tr\x3e--\x3e           \r\n          \x3ctr data-dojo-attach-point\x3d"_afterStatsRow"\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"  data-dojo-attach-point\x3d"_groupByLabel"\x3e${i18n.groupByLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"GroupBy"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit.form.Select"  data-dojo-attach-point\x3d"_groupBySelect" data-dojo-attach-event\x3d"onChange:_handleGroupBySelectChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n           \x3ctd colspan\x3d"2"\x3e\r\n             \x3clabel class\x3d"esriLeadingMargin2 esriSelectLabel" data-dojo-attach-point\x3d"_minmajorityLabel"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_minmajorityCheck" data-dojo-props\x3d"checked:false"\x3e\x3c/div\x3e\r\n               ${i18n.addMinMajorityLable}\r\n             \x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"MinorityMajority"\x3e\x3c/a\x3e\r\n           \x3c/td\x3e\r\n          \x3c/tr\x3e    \r\n          \x3ctr\x3e\r\n           \x3ctd colspan\x3d"2"\x3e\r\n             \x3clabel class\x3d"esriLeadingMargin2 esriSelectLabel" data-dojo-attach-point\x3d"_percentPointsLabel"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_percentPointsCheck" data-dojo-props\x3d"checked:false"\x3e\x3c/div\x3e\r\n               ${i18n.addPercentageLabel}\r\n             \x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"PercentShape"\x3e\x3c/a\x3e\r\n           \x3c/td\x3e\r\n          \x3c/tr\x3e    \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"ResultLayerName"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput esriLeadingMargin1" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                 \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n               \x3c/div\x3e              \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e                                      \r\n        \x3c/tbody\x3e         \r\n       \x3c/table\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n      \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing closeIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n        \x3cimg src\x3d\'images/close.gif\' border\x3d\'0\'/\x3e \r\n      \x3c/a\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e        \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/SummarizeWithin","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./CreditEstimator ./utils dojo/i18n!../../nls/jsapi dojo/text!./templates/SummarizeWithin.html".split(" "),
function(x,q,e,f,r,g,t,y,K,n,h,d,l,z,s,u,A,B,C,D,E,v,L,M,N,w,O,P,Q,R,F,p,G,H,S,k,I,J){q=q([A,B,C,D,E,H,G],{declaredClass:"esri.dijit.analysis.SummarizeWithin",templateString:J,widgetsInTemplate:!0,sumWithinLayer:null,summaryLayers:null,summaryFields:null,outputLayerName:null,summarizeMetric:!0,summaryLayer:null,groupByField:null,minorityMajority:!1,percentPoints:!1,i18n:null,toolName:"SummarizeWithin",helpFileName:"SummarizeWithin",resultParameter:"resultLayer",constructor:function(a){this._pbConnects=
[];this._statsRows=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);f.forEach(this._pbConnects,r.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);e.mixin(this.i18n,I.summarizeWithinTool)},postCreate:function(){this.inherited(arguments);s.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",e.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&
(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleShowCreditsClick:function(a){a.preventDefault();if(this._form.validate()){a={};var b;b=this.summaryLayers[this._layersSelect.get("value")];a.summaryLayer=g.toJson(k.constructAnalysisInputLyrObj(b));a.sumWithinLayer=g.toJson(k.constructAnalysisInputLyrObj(this.sumWithinLayer));a.summaryFields=g.toJson(this.get("summaryFields"));this.returnFeatureCollection||(a.OutputName=g.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));
a.sumShape=this._sumMetricCheck.get("checked");if("esriGeometryPoint"!==b.geometryType||"esriGeometryMultipoint"!==b.geometryType)a.shapeUnits=this.get("shapeUnits");"0"!==this._groupBySelect.get("value")&&(a.groupByField=this._groupBySelect.get("value"));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=g.toJson({extent:this.map.extent._normalize(!0)}));this.getCreditsEstimate(this.toolName,a).then(e.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))}},
_handleSaveBtnClick:function(){if(this._form.validate())if(!this._sumMetricCheck.get("checked")&&0===this.get("summaryFields").length)this._showMessages(this.i18n.statsRequiredMsg);else{this._saveBtn.set("disabled",!0);var a={},b={},c,m;c=this.summaryLayers[this._layersSelect.get("value")];a.summaryLayer=g.toJson(k.constructAnalysisInputLyrObj(c));a.sumWithinLayer=g.toJson(k.constructAnalysisInputLyrObj(this.sumWithinLayer));a.summaryFields=g.toJson(this.get("summaryFields"));this.returnFeatureCollection||
(a.OutputName=g.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));a.sumShape=this._sumMetricCheck.get("checked");if("esriGeometryPoint"!==c.geometryType||"esriGeometryMultipoint"!==c.geometryType)a.shapeUnits=this.get("shapeUnits");"0"!==this._groupBySelect.get("value")&&(a.groupByField=this._groupBySelect.get("value"),this.resultParameter=["resultLayer","groupBySummary"],a.minorityMajority=this.get("minorityMajority"),a.percentShape=this.get("percentPoints"));this.showChooseExtent&&
this._useExtentCheck.get("checked")&&(a.context=g.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(m={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(m.extent=this.map.extent._normalize(!0)),a.context=g.toJson(m));b.jobParams=a;this._saveBtn.set("disabled",!1);b.itemParams={description:n.substitute(this.i18n.itemDescription,{sumWithinLayerName:this.sumWithinLayer.name,summaryLayerName:c.name}),tags:n.substitute(this.i18n.itemTags,
{sumWithinLayerName:this.sumWithinLayer.name,summaryLayerName:c.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.execute(b)}},_initializeShapeUnits:function(a){this._prevGeometryType&&this._prevGeometryType===a||(this._shapeUnitsSelect.removeOption(this._shapeUnitsSelect.getOptions()),h.set(this._shapeUnitsSelect.domNode,"display","esriGeometryPoint"===a||"esriGeometryMultipoint"===a?"none":""),"esriGeometryPolygon"===a?(h.set(this._shapeUnitsSelect.domNode,
"width","49%"),this._shapeUnitsSelect.addOption([{value:"SquareMiles",label:this.i18n.sqMiles},{value:"SquareKilometers",label:this.i18n.sqKm},{value:"SquareMeters",label:this.i18n.sqMeters},{value:"Hectares",label:this.i18n.hectares},{value:"Acres",label:this.i18n.acres}]),"Kilometers"===this.get("shapeUnits")&&this.set("shapeUnits","SquareKilometers")):"esriGeometryPolyline"===a&&(h.set(this._shapeUnitsSelect.domNode,"width","39%"),this._shapeUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},
{value:"Feet",label:this.i18n.feet},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters},{value:"Yards",label:this.i18n.yards}]),"SquareKilometers"===this.get("shapeUnits")&&this.set("shapeUnits","Kilometers")),this._shapeUnitsSelect.set("value",this.get("shapeUnits")),this._prevGeometryType=a)},_handleShapeUnitsChange:function(a){this.set("shapeUnits",a)},_handleLayerChange:function(a){if("browse"===a)a=this._browsedlg.browseItems.get("query"),a.custom=[],this._browsedlg.browseItems.set("query",
a),this._isAnalysisSelect=!1,this._browsedlg.show();else if("browselayers"===a)this.showGeoAnalyticsParams&&(a=this._browseLyrsdlg.browseItems.get("query"),a.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",a)),this._isAnalysisSelect=!1,this._browseLyrsdlg.show();else if(a=this.summaryLayers[a]){this.sumWithinLayer&&(this.outputLayerName=n.substitute(this.i18n.outputLayerName,{summaryLayerName:a.name,sumWithinLayerName:this.sumWithinLayer.name}),this._outputLayerInput.set("value",
this.outputLayerName));this._initializeShapeUnits(a.geometryType);"esriGeometryPolygon"===a.geometryType&&(d.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoly),d.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPolygon"));if("esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===a.geometryType)d.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoint),d.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPoint");"esriGeometryPolyline"===a.geometryType&&
(d.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricLine),d.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsLine"));this.set("groupBySelect",this.groupByField);this._removeStatsRows();this._createStatsRow()}},_handleAttrSelectChange:function(a){var b;"0"!==a&&(a=this.get("statisticSelect"),"0"!==a.get("value")&&!a.get("isnewRowAdded")&&(b=a.get("removeTd"),h.set(b,"display","block"),b=a.get("referenceWidget"),e.hitch(b,b._createStatsRow()),b._sumMetricCheck.set("disabled",!1),a.set("isnewRowAdded",
!0)))},_handleStatsValueUpdate:function(a,b,c){this.get("attributeSelect")&&(a=this.get("attributeSelect"),"0"!==a.get("value")&&"0"!==c&&!this.get("isnewRowAdded")&&(c=this.get("removeTd"),h.set(c,"display","block"),c=this.get("referenceWidget"),e.hitch(c,c._createStatsRow()),c._sumMetricCheck.set("disabled",!1),this.set("isnewRowAdded",!0)))},_handleGroupBySelectChange:function(a){a="0"===a;s.toggle(this._minmajorityLabel,"esriAnalysisTextDisabled",a);s.toggle(this._percentPointsLabel,"esriAnalysisTextDisabled",
a);this._percentPointsCheck.set("disabled",a);this._minmajorityCheck.set("disabled",a)},_save:function(){},_buildUI:function(){var a=!0;k.initHelpLinks(this.domNode,this.showHelp);this.get("showSelectAnalysisLayer")&&(!this.get("sumWithinLayer")&&this.get("sumWithinLayers")&&this.set("sumWithinLayer",this.sumWithinLayers[0]),k.populateAnalysisLayers(this,"sumWithinLayer","sumWithinLayers"));this.sumWithinLayer&&d.set(this._aggregateToolDescription,"innerHTML",n.substitute(this.i18n.summarizeDefine,
{sumWithinLayerName:this.sumWithinLayer.name}));if(this.summaryLayers){var b,c=[];f.forEach(this.summaryLayers,function(a,b){a!==this.sumWithinLayer&&c.push({value:b,label:a.name})},this);this._layersSelect.addOption(c);if(b=this.summaryLayers[this._layersSelect.get("value")]){!this.outputLayerName&&this.sumWithinLayer&&(this.outputLayerName=n.substitute(this.i18n.outputLayerName,{summaryLayerName:b.name,sumWithinLayerName:this.sumWithinLayer.name}));d.set(this._addStatsLabel,"innerHTML",n.substitute(this.i18n.addStats,
{summaryLayerName:b.name}));this._initializeShapeUnits(b.geometryType);"esriGeometryPolygon"===b.geometryType&&(d.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoly),d.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPolygon"));if("esriGeometryPoint"===b.geometryType||"esriGeometryMultipoint"===b.geometryType)d.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoint),d.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPoint");"esriGeometryPolyline"===b.geometryType&&
(d.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricLine),d.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsLine"))}}k.addReadyToUseLayerOption(this,[this._analysisSelect,this._layersSelect]);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this._sumMetricCheck.set("checked",this.summarizeMetric);this.summarizeMetric||this._sumMetricCheck.set("disabled",this.summarizeMetric);this.summaryLayer&&this._layersSelect.set();this.shapeUnits&&this._shapeUnitsSelect.set("value",
this.shapeUnits);this._createStatsRow();f.forEach(this.summaryFields,function(a){a=a.split(" ");this._currentAttrSelect.set("value",a[0]);e.hitch(this._currentAttrSelect,this._handleAttrSelectChange,a[0])();this._currentStatsSelect.set("value",a[1]);e.hitch(this._currentStatsSelect,this._handleStatsValueUpdat,"value","",a[1])()},this);h.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(e.hitch(this,function(a){this.folderStore=
a;k.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));h.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");this.set("groupBySelect",this.groupByField);this.minorityMajority&&this._minmajorityCheck.set("checked",this.minorityMajority);this.percentPoints&&this._percentPointsCheck.set("checked",this.percentPoints);h.set(this._showCreditsLink,
"display",!0===this.showCredits?"block":"none");this._loadConnections();this._updateAnalysisLayerUI(a)},_loadConnections:function(){this.on("start",e.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",e.hitch(this,"_onClose",!1))},_createStatsRow:function(){var a,b,c,m,d;m=this.summaryLayers[this._layersSelect.get("value")];a=l.create("tr",null,this._afterStatsRow,"before");c=l.create("td",{style:{width:"49%",maxWidth:"100px"}},a);b=l.create("td",{style:{width:"50%",maxWidth:"104px"}},
a);c=new w({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},l.create("select",null,c));this.set("attributes",{selectWidget:c,summaryLayer:m});b=new w({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},l.create("select",null,b));this.set("statistics",{selectWidget:b});c.set("statisticSelect",b);r.connect(c,"onChange",this._handleAttrSelectChange);d=l.create("td",{"class":"shortTextInput removeTd",
style:{display:"none",maxWidth:"12px"}},a);m=l.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"\x3cimg src\x3d'"+x.toUrl("./images/close.gif")+"' border\x3d'0''/\x3e"},d);r.connect(m,"onclick",e.hitch(this,this._handleRemoveStatsBtnClick,a));this._statsRows.push(a);b.set("attributeSelect",c);b.set("removeTd",d);b.set("isnewRowAdded",!1);b.set("referenceWidget",this);b.watch("value",this._handleStatsValueUpdate);this._currentStatsSelect=b;this._currentAttrSelect=
c;return!0},_handleRemoveStatsBtnClick:function(a){this._removeStatsRow(a);0===this.get("summaryFields").length&&(this._sumMetricCheck.set("disabled",!0),this._sumMetricCheck.set("checked",!0))},_removeStatsRows:function(){f.forEach(this._statsRows,this._removeStatsRow,this);this._statsRows=[]},_removeStatsRow:function(a){f.forEach(v.findWidgets(a),function(a){a.destroyRecursive()});l.destroy(a)},_handleAnalysisLayerChange:function(a){"browse"===a?(a=this._browsedlg.browseItems.get("query"),a.custom=
['tags:"polygon"'],this._browsedlg.browseItems.set("query",a),this._isAnalysisSelect=!0,this._browsedlg.show()):"browselayers"===a?(this.showGeoAnalyticsParams&&(a=this._browseLyrsdlg.browseItems.get("query"),a.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",a)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPolygon"],this._isAnalysisSelect=!0,this._browseLyrsdlg.show()):(this.sumWithinLayer=this.sumWithinLayers[a],this._updateAnalysisLayerUI(!0))},
_updateAnalysisLayerUI:function(a){var b=this.summaryLayers[this._layersSelect.get("value")],c=this._layersSelect.get("value");a&&(this.get("sumWithinLayer")&&b)&&(this.outputLayerName=n.substitute(this.i18n.outputLayerName,{summaryLayerName:b.name,sumWithinLayerName:this.sumWithinLayer.name}),this._outputLayerInput.set("value",this.outputLayerName));this.summaryLayers&&this.sumWithinLayer&&(a=f.some(this._layersSelect.getOptions(),function(a){return"browse"===a.value},this),b=f.some(this._layersSelect.getOptions(),
function(a){return"browselayers"===a.value},this),this._layersSelect.removeOption(this._layersSelect.getOptions()),f.forEach(this.summaryLayers,function(a,b){var d=!0;if(a.url&&this.sumWithinLayer.url&&a.url!==this.sumWithinLayer.url)d=!1;else if(this.sumWithinLayer!==a&&(!a.analysisReady||!this.sumWithinLayer.analysisReady))d=!1;d||(this._layersSelect.addOption({value:b,label:a.name}),c===b&&this._layersSelect.set("value",b))},this),(this.get("showReadyToUseLayers")||this.get("showBrowseLayers")||
a||b)&&this._layersSelect.addOption({type:"separator",value:""}),this.get("showReadyToUseLayers")&&a&&this._layersSelect.addOption({value:"browse",label:this.i18n.browseAnalysisTitle}),this.get("showBrowseLayers")&&a&&this._layersSelect.addOption({value:"browselayers",label:this.i18n.browseLayers}))},_handleBrowseItemsSelect:function(a){a&&a.selection&&k.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.sumWithinLayers:this.summaryLayers,layersSelect:this._isAnalysisSelect?
this._analysisSelect:this._layersSelect,browseDialog:this._browsedlg,widget:this}).always(e.hitch(this,this._updateAnalysisLayerUI,!0))},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setSumWithinLayersAttr:function(a){p.isDefined(a)&&(this.sumWithinLayers=a=f.filter(a,function(a,c){return"esriGeometryPolygon"===a.geometryType}))},_setSumWithinLayerAttr:function(a){p.isDefined(a)&&"esriGeometryPolygon"===a.geometryType&&
(this.sumWithinLayer=a)},_setSummaryLayersAttr:function(a){this.summaryLayers=a},_setLayersAttr:function(a){this.summaryLayers=[]},_setAttributesAttr:function(a){if(a.summaryLayer){var b,c;b=a.summaryLayer;c=a.selectWidget;a=b.fields;c.addOption({value:"0",label:this.i18n.attribute});f.forEach(a,function(a){-1!==f.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)&&c.addOption({value:a.name,label:p.isDefined(a.alias)&&""!==a.alias?a.alias:
a.name})},this)}},_setStatisticsAttr:function(a){a=a.selectWidget;a.addOption({value:"0",label:this.i18n.statistic});a.addOption({value:"SUM",label:this.i18n.sum});a.addOption({value:"MIN",label:this.i18n.minimum});a.addOption({value:"MAX",label:this.i18n.maximum});a.addOption({value:"MEAN",label:this.i18n.average});a.addOption({value:"STDDEV",label:this.i18n.standardDev})},_setSummaryFieldsAttr:function(a){this.summaryFields=a},_getSummaryFieldsAttr:function(){var a="",b=[];z(".statsSelect",this.domNode).forEach(function(c){var d;
c=v.byNode(c);d=c.get("attributeSelect");"0"!==d.get("value")&&"0"!==c.get("value")&&(a+=d.get("value")+" "+c.get("value")+";",b.push(d.get("value")+" "+c.get("value")))});return b},_setGroupBySelectAttr:function(a){var b=this.summaryLayers[this._layersSelect.get("value")],c=p.isDefined(b)?b.fields:[];0<this._groupBySelect.getOptions().length&&this._groupBySelect.removeOption(this._groupBySelect.getOptions());this._groupBySelect.addOption({value:"0",label:this.i18n.attribute});f.forEach(c,function(a,
c){-1!==f.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeString","esriFieldTypeDate"],a.type)&&a.name!==b.objectIdField&&this._groupBySelect.addOption({value:a.name,label:p.isDefined(a.alias)&&""!==a.alias?a.alias:a.name})},this);a&&this._groupBySelect.set("value",a);this._handleGroupBySelectChange(this._groupBySelect.get("value"))},_setMinorityMajorityAttr:function(a){this.minorityMajority=a},_getMinorityMajorityAttr:function(a){this._minmajorityCheck&&(this.minorityMajority=
this._minmajorityCheck.get("checked"));return this.minorityMajority},_setPercentPointsAttr:function(a){this.percentPoints=a},_getPercentPointsAttr:function(a){this._percentPointsCheck&&(this.percentPoints=this._percentPointsCheck.get("checked"));return this.percentPoints},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setShapeUnitsAttr:function(a){this.shapeUnits=a},_getShapeUnitsAttr:function(){return this.shapeUnits},validateServiceName:function(a){return k.validateServiceName(a,
{textInput:this._outputLayerInput})},_connect:function(a,b,c){this._pbConnects.push(r.connect(a,b,c))},_showMessages:function(a){d.set(this._bodyNode,"innerHTML",a);t.fadeIn({node:this._errorMessagePane,easing:u.quadIn,onEnd:e.hitch(this,function(){h.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();t.fadeOut({node:this._errorMessagePane,easing:u.quadOut,onEnd:e.hitch(this,function(){h.set(this._errorMessagePane,{display:"none"})})}).play()}});
y("extend-esri")&&e.setObject("dijit.analysis.SummarizeWithin",q,F);return q});