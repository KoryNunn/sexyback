var sexyback = require('../'),
    test = require('tape');

test('wrap no params', function(t){

    t.plan(2);

    function bad(callback){
        callback('data');
    }

    var good = sexyback(bad);


    good(function(error, data){
        t.equal(error, null);
        t.equal(data, 'data');
    });
});

test('wrap with params', function(t){

    t.plan(2);

    function bad(foo, callback){
        callback(foo);
    }

    var good = sexyback(bad);


    good('bar', function(error, data){
        t.equal(error, null);
        t.equal(data, 'bar');
    });
});

test('wrap with context', function(t){

    t.plan(1);

    var context = {};

    function bad(foo, callback){
        callback.call(context, foo);
    }

    var good = sexyback(bad);


    good('bar', function(){
        t.equal(this, context);
    });
});