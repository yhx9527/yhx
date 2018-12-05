Function.prototype.myCall=function(ctx){
    var ctx = ctx || window;
    ctx.fn = this;
    var args = [];
    for(var i=1,len=arguments.length;i<len;i++){
        args.push('arguments['+i+']');
    }
    var result = eval('ctx.fn('+args+')');
    delete ctx.fn
    return result;
}

Function.prototype.myApply=function(ctx,arr){
    var ctx = ctx || window;
    var result;
    ctx.fn = this;
    if(!arr){
        result = ctx.fn();
    }else{
        var args=[];
        arr.forEach((item,index)=>{
            args.push('arr['+index+']');
        })
        result = eval('ctx.fn('+args+')');
    }
    delete ctx.fn
    return result;
}