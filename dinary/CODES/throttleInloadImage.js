//使用时间戳的方式,特点：立即执行,在等待时间内离开后不会最后执行一次
function timestramp(func, wait){
    var context,args;
    var previous=0;
    return function(){
        var now=+new Date()
        context = this
        args = arguments
        if(now-previous > wait){
            func.apply(context, arguments)
            previous = now
        }
    }
}
//setTimeout方式,特点：在等待时间内离开后还会执行一次
function timesout(func, wait){
    var time,context,args;
    var previous=0;
    return function(){
        context = this;
        args = arguments;
        if(!time){
            time=setTimeout(function(){
                time = null;
                func.apply(context,args)
            },wait)
        }
    }
}

//underscore的节流实现,上述两者的结合
var throttle = function(func, wait, options){
    var context,args,result;
    var timeout = null;
    var previous = 0;
    //默认有头有尾，及进入时马上触发和结束后还触发一次
    if(!options) options={};
    var later=function(){
        //leading是否要有头
        var now=+new Date()
        previous = options.leading === false ? 0 : now;
        timeout = null;
        result = func.apply(context,args);
        if(!timeout) context=args=null;
    }
    return function(){
        var now = +new Date()
        if(!previous && options.leading === false) previous=now;

        var remaining = wait-(now-previous)
        context = this;
        args = arguments;
        //要么等待时间结束了，要么调整了系统时间，即当now小于previous时
        if(remaining <=0 || remaining > wait){
            if(timeout){
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context,args)
            if(!timeout)context=args=null;
        }else if(!timeout && options.trailing !== false){
            timeout = setTimeout(later, remaining)
        }
        return result
    }
}