import Dep from './Dep'
class Observer{
    constructor(data){
        this.data = data
        Object.keys(this.data).forEach(key=>{
            _bind(data,key,data[key])
        })
    }
    _bind(data,key, val){
        var myDep = new Dep()
        Object.defineProperty(data,key,{
            get(){
                if(Dep.target) myDep.listen(Dep.target)
                return val
            },
            set(newVal){
                if(newVal === val) return;
                val = newVal
            }
        })
    }
}
export default Observer;