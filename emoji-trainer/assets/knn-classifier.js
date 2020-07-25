// @tensorflow/tfjs-models Copyright 2019 Google
!function(t,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports,require("@tensorflow/tfjs-core")):"function"==typeof define&&define.amd?define(["exports","@tensorflow/tfjs-core"],a):a(t.knnClassifier={},t.tf)}(this,function(t,a){"use strict";function e(t,a){var e,s,r,n,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return n={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function l(n){return function(l){return function(n){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,s&&(r=2&n[0]?s.return:n[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,n[1])).done)return r;switch(s=0,r&&(n=[2&n[0],r.value]),n[0]){case 0:case 1:r=n;break;case 4:return i.label++,{value:n[1],done:!1};case 5:i.label++,s=n[1],n=[0];continue;case 7:n=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===n[0]||2===n[0])){i=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){i.label=n[1];break}if(6===n[0]&&i.label<r[1]){i.label=r[1],r=n;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(n);break}r[2]&&i.ops.pop(),i.trys.pop();continue}n=a.call(t,i)}catch(t){n=[6,t],s=0}finally{e=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,l])}}}function s(t,a){for(var e=[],s=0;s<t.length;s++)e.push({value:t[s],index:s});e.sort(function(t,a){return a.value-t.value});var r=new Float32Array(a),n=new Int32Array(a);for(s=0;s<a;s++)r[s]=e[s].value,n[s]=e[s].index;return{values:r,indices:n}}var r=function(){function t(){this.classDatasetMatrices={},this.classExampleCount={},this.labelToClassId={},this.nextClassId=0}return t.prototype.addExample=function(t,e){var s=this;if(null==this.exampleShape&&(this.exampleShape=t.shape),!a.util.arraysEqual(this.exampleShape,t.shape))throw new Error("Example shape provided, "+t.shape+" does not match previously provided example shapes "+this.exampleShape+".");this.clearTrainDatasetMatrix(),e in this.labelToClassId||(this.labelToClassId[e]=this.nextClassId++),a.tidy(function(){var r=s.normalizeVectorToUnitLength(t.flatten()),n=r.shape[0];if(null==s.classDatasetMatrices[e])s.classDatasetMatrices[e]=r.as2D(1,n);else{var i=s.classDatasetMatrices[e].as2D(s.classExampleCount[e],n).concat(r.as2D(1,n),0);s.classDatasetMatrices[e].dispose(),s.classDatasetMatrices[e]=i}a.keep(s.classDatasetMatrices[e]),null==s.classExampleCount[e]&&(s.classExampleCount[e]=0),s.classExampleCount[e]++})},t.prototype.similarities=function(t){var e=this;return a.tidy(function(){var s,r,n=e.normalizeVectorToUnitLength(t.flatten()),i=n.shape[0];if(null==e.trainDatasetMatrix){var l=null;for(var o in e.classDatasetMatrices)s=l,r=e.classDatasetMatrices[o],l=null==s&&null==r?null:null==s?r.clone():null===r?s.clone():s.concat(r,0);e.trainDatasetMatrix=l}if(null==e.trainDatasetMatrix)return console.warn("Cannot predict without providing training examples."),null;a.keep(e.trainDatasetMatrix);var c=e.getNumExamples();return e.trainDatasetMatrix.as2D(c,i).matMul(n.as2D(i,1)).as1D()})},t.prototype.predictClass=function(t,r){return void 0===r&&(r=3),n=this,i=void 0,o=function(){var n,i,l,o,c=this;return e(this,function(e){switch(e.label){case 0:if(r<1)throw new Error("Please provide a positive integer k value to predictClass.");if(0===this.getNumExamples())throw new Error("You have not added any examples to the KNN classifier. Please add examples before calling predictClass.");return n=a.tidy(function(){return c.similarities(t).asType("float32")}),i=Math.min(r,this.getNumExamples()),o=s,[4,n.data()];case 1:return l=o.apply(void 0,[e.sent(),i]).indices,n.dispose(),[2,this.calculateTopClass(l,i)]}})},new((l=void 0)||(l=Promise))(function(t,a){function e(t){try{r(o.next(t))}catch(t){a(t)}}function s(t){try{r(o.throw(t))}catch(t){a(t)}}function r(a){a.done?t(a.value):new l(function(t){t(a.value)}).then(e,s)}r((o=o.apply(n,i||[])).next())});var n,i,l,o},t.prototype.clearClass=function(t){if(null==this.classDatasetMatrices[t])throw new Error("Cannot clear invalid class "+t);delete this.classDatasetMatrices[t],delete this.classExampleCount[t],this.clearTrainDatasetMatrix()},t.prototype.clearAllClasses=function(){for(var t in this.classDatasetMatrices)this.clearClass(t)},t.prototype.getClassExampleCount=function(){return this.classExampleCount},t.prototype.getClassifierDataset=function(){return this.classDatasetMatrices},t.prototype.getNumClasses=function(){return Object.keys(this.classExampleCount).length},t.prototype.setClassifierDataset=function(t){for(var a in this.clearTrainDatasetMatrix(),this.classDatasetMatrices=t,t)this.classExampleCount[a]=t[a].shape[0]},t.prototype.calculateTopClass=function(t,a){var e,s={};if(null==t)return{classIndex:this.labelToClassId[e],label:e,confidences:s};var r={},n=0;for(var i in this.classDatasetMatrices)n+=this.classExampleCount[i],r[i]=n;var l={};for(var i in this.classDatasetMatrices)l[i]=0;for(var o=0;o<t.length;o++){var c=t[o];for(var i in this.classDatasetMatrices)if(c<r[i]){l[i]++;break}}var u=0;for(var i in this.classDatasetMatrices){var p=l[i]/a;p>u&&(u=p,e=i),s[i]=p}return{classIndex:this.labelToClassId[e],label:e,confidences:s}},t.prototype.clearTrainDatasetMatrix=function(){null!=this.trainDatasetMatrix&&(this.trainDatasetMatrix.dispose(),this.trainDatasetMatrix=null)},t.prototype.normalizeVectorToUnitLength=function(t){return a.tidy(function(){var e=t.norm();return a.div(t,e)})},t.prototype.getNumExamples=function(){var t=0;for(var a in this.classDatasetMatrices)t+=this.classExampleCount[a];return t},t.prototype.dispose=function(){for(var t in this.clearTrainDatasetMatrix(),this.classDatasetMatrices)this.classDatasetMatrices[t].dispose()},t}();t.KNNClassifier=r,t.create=function(){return new r},Object.defineProperty(t,"__esModule",{value:!0})});
