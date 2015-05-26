# sexyback

bring sexy error passing callback style to ugly callbacks

## What?

Say you have a function runner that expect callbacks to work in error-first style:

```
function runThing(fn){
    fn(function(error, data){
        // .. etc ..
    });
}
```

but you need to pass it a bad function:

```
function bad(callback){
    callback(data);
}
```

and you have no control over how runThing works internally.

sexyback can turn your bad function into a good one:

```
var good = sexyback(bad);
```

Now you can run your good version from within your function runner:

```
runThing(good);
```

## Why?

A more specific example is using bad functions with `kgo`

```
kgo
('result', sexyback(bad))
(['result'], function(result, next){
    // worked first time.
})
.on('error', function(){
    // Handle the error (that can't happen from the bad function)
});
```
