var Montage=require("../core").Montage,Converter=require("./converter").Converter;exports.UpperCaseConverter=Converter.specialize({_convert:{value:function(e){return e&&"string"==typeof e?e.toUpperCase?e.toUpperCase():e:e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}});