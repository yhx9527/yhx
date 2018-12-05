// 深拷贝,拷贝的是对象本身
function deepCopy(p, c) {
    // body...
    var c = c || {};
    for(var i in p){
        if(typeof p[i] === 'object'){
            c[i] = (p[i].constructor === Array) ? [] : {}
            deepCopy(p[i], c[i])
        }else{
            c[i]=p[i]
        }
    }
    return c;
}
//浅拷贝,拷贝的只是对象的引用
function plainCopy(p){
    var c = {}
    for(var i in p){
        c[i] = p[i]
    }
    return c
}