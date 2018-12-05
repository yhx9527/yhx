var shape={
    type: 'yhx',
    getType:function () {
        return this.type
    }
}
function Triangle(a,b,c){
    this.a=a;
    this.b=b;
    this.c=c;
}
Triangle.prototype=shape
Triangle.prototype.getPerimeter=function(){
    return this.a*this.b*this.c
}
Triangle.prototype.constructor=Triangle

//Fisher-Yates shuffle洗牌算法
//从数组最后一位开始循环，每次在前面（包括他自己）随机找一个元素与其进行交换
Array.prototype.shuffle=function(){
    var array=this
    var m = array.length,i,temp
    while(m){
        i=Math.floor(Math.random()*m--)
        temp=array[i]
        array[i]=array[m]
        array[m]=temp
    }
    return array;
}

//数组乱序排列,返回的有时候大于0有时候小于0，故有时候让它交换有时候不交换,从而实现乱序
[].sort(function(){
    return 0.5-Math.random()
})
