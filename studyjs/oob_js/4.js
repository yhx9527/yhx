// 1.
function F(){
    function C(){
        return this;  //window
    }
    return C()  //返回的是window,替换掉了本来的this
}
var o = new F()  //o指向window

//2.
function C(){
    this.a=1;
    return false; //new的时候对于值类型，仍是返回this
}
console.log(typeof new C()) //object

//3.
c=[1,2,[1,2]]
c.sort()  //[1,[1,2],2]
c.join('--') //1--1,2--2