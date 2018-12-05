function getRGB(data){
    return `rgb(${parseInt(data.substr(1,2),16)},${parseInt(data.substr(3,2),16)},${parseInt(data.substr(5,2),16)})`
}

parseInt(1e1) //10
parseInt("1e1") //1 遇到不能接受的e就停下
parseFloat('1e1') //10 可以接受指数
isFinite(0/10) //true
isFinite(10/0) //false
parseInt(NaN) //NaN
isNaN(parseInt(NaN)) //true