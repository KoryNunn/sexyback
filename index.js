var errback = require('errback');

module.exports = function(badCallbackHandler){
    return function(){
        var args = Array.prototype.slice.call(arguments),
            callback = errback(args.pop());

        badCallbackHandler.apply(this, args.concat(callback));
    };
};