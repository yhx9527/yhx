function Shape() {}
Shape.prototype.name='Shape'
Shape.prototype.toString= function(){
    var result = [];
    if(this.constructor.uber){
        result[result.length] = this.constructor.uber.toString()
    }
    result[result.length] = this.name
    console.log(result)
    return result.join(', ')
}
function TwoDShape(){}
var F = function(){}
F.prototype = Shape.prototype
TwoDShape.prototype = new F()
TwoDShape.prototype.constructor = TwoDShape
TwoDShape.uber = Shape.prototype
TwoDShape.prototype.name = '2D shape'

function Triangle(side, height){
    this.side = side
    this.height = height
}
var F = function(){}
F.prototype = TwoDShape.prototype
Triangle.prototype = new F()
Triangle.prototype.constructor = Triangle
Triangle.uber = TwoDShape.prototype
Triangle.prototype.name = 'Triangle'
Triangle.prototype.getArea = function(){
    return this.side*this.height
}

var my = new Triangle(5,10)
my.toString()  //"shape, 2D shape, Triangle"
