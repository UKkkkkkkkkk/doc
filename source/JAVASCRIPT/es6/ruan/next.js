/*
function* f() {
    for(var i=0; true; i++) {
        var reset = yield i;
        if(reset) { i = -1; }
    }
}

var g = f();

g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }*/


function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var a = foo(5);
console.log(a.next()); // Object{value:6, done:false}
console.log(a.next()); // Object{value:NaN, done:false}
console.log(a.next()); // Object{value:NaN, done:true}

var b = foo(5);
console.log(b.next()); // { value:6, done:false }
console.log(b.next(12)); // { value:8, done:false }
console.log(b.next(13)); // { value:42, done:true }

