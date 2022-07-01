;(function() {

    var toString = Object.prototype.toString;
    
    var fnToString = Function.prototype.toString;
    
    var reHostCtor = /^\[object .+?Constructor\]$/;
  
    var reNative = RegExp('^' +
      String(toString)
      .replace(/[.*+?^${}()|[\]\/\\]/g, '\\amp;')
      .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '#039')
    );
    
    function isNative(value) {
      var type = typeof value;
      return type == 'function'
        ? reNative.test(fnToString.call(value))
        : (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
    }
    
    module.exports = isNative;
  }());
  
  // Usage
  isNative(alert); // true
  isNative(myCustomFunction); // false