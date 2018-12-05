function defineReactive(obj,key,val){
    observe(val);
    var dep = new Dep();
    Object.defineProperty(obj,key,{
        enumerable: true,
        configurable: true,
        get: function(){
            if(Dep.target){ //是否需要添加一个订阅者
                dep.addSub(Dep.target);
            }
            return val;
        },
        set: function(newVal){
            if(val===newVal){
                return;
            }
            val = newVal;
            dep.notify(); //如果数据变化通知所有订阅者
        }
    })
}
function observe(obj){
    if(!obj || typeof obj !== 'object'){
        return;
    }
    Object.keys(obj).forEach(key=>{
        defineReactive(obj,key,obj[key])
    })
}
function Dep(){
    this.subs=[];
}
Dep.prototype={
    addSub: function(sub){
        this.subs.push(sub);
    },
    notify: function(){
        this.subs.forEach(function(sub){
            sub.update();
        })
    }
}
function Watcher(vm, exp, cb){
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get();
}

Watcher.prototype = {
    update: function(){
        this.run();
    },
    run: function(){
        var value = this.vm.data[this.exp];
        var oldVal = this.value;
        if(value !== oldVal){
            this.value = value;
            this.cb.call(this.vm,value,oldVal);
        }
    },
    get:function(){
        Dep.target = this;
        var value = this.vm.data[this.exp]
        Dep.target = null;
        return value;
    }
}
function SelfVue(data, el, exp){
    var self = this;
    this.data = data;
    
    Object.keys(data).forEach(function(key){
        self.proxyKeys(key);
    })
    observe(data);
    el.innerHTML = this.data[exp];
    new Watcher(this, exp, function(value){
        el.innerHTML = value;
    });
    return this;
}

SelfVue.prototype={
    proxyKeys:function(key){
        var self = this;
        Object.defineProperty(this, key,{
            enumerable: false,
            configurable: true,
            get: function proxyGetter(){
                return self.data[key];
            },
            set: function proxySetter(newVal){
                self.data[key] = newVal;
            }
        })
    }
}