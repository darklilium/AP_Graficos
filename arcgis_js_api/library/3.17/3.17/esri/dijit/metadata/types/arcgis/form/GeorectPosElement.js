// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/GeorectPosElement","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../../../../../kernel ../../../form/OpenElement dojo/i18n!../../../nls/i18nArcGIS dojo/i18n!../../../nls/i18nBase".split(" "),function(a,f,g,h,k,l,m,n){a=a([l],{postCreate:function(){this.inherited(arguments)},beforeValidateValue:function(a,c,b){if(!(null===b||0===f.trim(b).length)){var d=!0;a=b.split(" ");g.some(a,function(a){try{var b=!1,e=Number(f.trim(a));"undefined"!==
typeof e&&null!==e&&!isNaN(e)&&isFinite(e)&&(b=!0);b||(d=!1)}catch(c){console.error(c),d=!1}if(!d)return!0});d||(a=n.validation.pattern,b=m.hints.listOfDoubles,c.isValid=!1,c.message=a.replace("{label}",c.label).replace("{message}",b))}}});h("extend-esri")&&f.setObject("dijit.metadata.types.arcgis.form.GeorectPosElement",a,k);return a});