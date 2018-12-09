import Watcher from './Watcher'
const REG = /\{\{(.*)\}\}/
class Complier{
    constructor(el,vm){
        this.el = document.querySelector(el)
        this.vm = vm
        this.frag = this._createFragment()
        this.el.appendChild(this.frag)
    }
    _createFragment(){
        var frag = document.createDocumentFragment()
        var child
        while(child = this.el.firtChild){
            this._complier(child)
            frag.appendChild(child)
        }
        return frag
    }
    _complier(node){
        if(node,nodeType===1){
            var attr = node.attributes
            var self = this
            if(attr.hasOwnProperty('v-model')){
                var name = attr['v-model'].nodeValue
                node.addEventListener('input',function(e){
                    self.vm[name] = e.target.value
                })
                node.value = this.vm[name]
            }
        }
        if(node.nodeType === 3){
            if(REG.test(node.nodeValue)){
                var name = RegExp.$1
                name = name.trim()
                new Watcher(node,name,this.vm)
            }
        }
    }
}
export default Complier;