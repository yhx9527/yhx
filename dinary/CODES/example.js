function Elem(id){
    this.elem = document.getElementById(id);
}
Elem.prototype.html(val){
    let elem = this.elem;
    if(val){
        elem.innerHTML = val;
        return this;
    }else{
        return elem.innerHTML;
    }
}
Elem.prototype.on(type, fn){
    var elem = this.elem;
    elem.addEventListener(type, fn)
    reutrn this;
}
let elem = new Elem('div1');
elem.html('hello').on('click', function(){alert('hi')}).html('hi');