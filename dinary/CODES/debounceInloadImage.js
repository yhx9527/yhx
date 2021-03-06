//简单版
function sample(func, wait){
    var context,args,timeout;
    return function(){
        context = this;
        args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            func.apply(context, args)
        },wait)
    }
}

//underscore的防抖
var debounce = function(func, wait, immediate){
    var timeout,args,context,timestamp,result;
    var later = function(){
        var now = +new Date();
        var last= now-timestamp;
        if(last < wait && last >= 0){
            timeout = setTimeout(later,wait-last);
        } else {
            timeout = null;
            if(!immediate){
                result = func.apply(context,args)
                if(!timeout)
                    context = args = null;
            }
        }
    }
    return function(){
        context = this;
        args = arguments;
        timestamp = +new Date()
        var callNow = immediate && !timeout;
        if(!timeout) timeout = setTimeout(later, wait)
        if(callNow){
            result = func.apply(context,args);
            context = args = null;
        }
        return result;
    }
}