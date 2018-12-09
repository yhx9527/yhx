import Observer from './Observer'
import Complier from './Complier'
class Vue{
    constructor(options){
        this.$options = options
        this.$el = this.$options.el
        this._data = this.$options.data
        Object.keys(this._data).forEach(key=>{
            this._proxy(key)
        })
        //观察者，设置访问器属性
        new Observer(this._data)
        new Complier(this.$el,this)
    }
    _proxy(key){
        var self = this
        Object.defineProperty(self,key,{
            get(){
                return self._data[key]
            },
            set(value){
                self._data[key] = value
            }
        })
    }
}
export default Vue