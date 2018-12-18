    
// 虚拟DOM元素的类
class Element{
    constructor(type, props, children){
        this.type = type;
        this.props = props;
        this.children = children;
    }
}
//返回虚拟节点
function el(type, props, children){
    return new Element(type, props, children);
}
// 设置属性
function setAttr(node, key, value){
    switch(key){
        case 'value':
            if(node.tagName.toUpperCase === 'INPUT' || node.tagName.toUpperCase()==='TEXTAREA'){
                node.value = value;
            }else{
                node.setAttribute(key, value);
            }
            break;
        case 'style':
            node.style.cssText = value;
            break;
        default:
            node.setAttribute(key,value);
            break;
    }
}
// render方法可以将vnode转化成真实dom
function render(eleObj){
    let el = document.createElement(eleObj.type);
    for(let key in eleObj.props){
        //设置属性的方法
        setAttr(el, key, eleObj.props[key])
    }
    // 遍历儿子，如果是虚拟dom则继续渲染，不是则代表的是文本节点，直接创建文本节点即可
    eleObj.children.forEach(child=>{
        child = (child instanceof Element) ? render(child) : document.createTextNode(child);
        el.appendChild(child);
    })
    return el;
}
function renderDom(el, target){
    target.appendChild(el);
}

function diff(oldTree,newTree){
    let patches = {}
    let index=0;
    //递归树，将比较后的结果放到补丁包中
    walk(oldTree, newTree, index, patches)
    return patches;
}
function diffAttr(oldAttrs, newAttrs){
    let patch={};
    //判断旧节点属性和新节点属性不一样
    for(let key in oldAttrs){
        //如果新节点和旧节点不一样
        if(oldAttrs[key] !== newAttrs[key]){
            patch[key] = newAttrs[key] //当新节点删了旧节点的属性，则可能为undefined
        }
    }
    //旧节点没有新节点的属性
    for(let key in newAttrs){
        if(!oldAttrs.hasOwnProperty(key)){
            patch[key] = newAttrs[key]
        }
    }
    return patch;
}
let Index = 0;
function diffChildren(oldChildren, newChildren,index,patches){
    //比较旧节点儿子和新节点儿子
    oldChildren.forEach((child,idx)=>{
        // 索引应该是全局的
        walk(child,newChildren[idx],++Index,patches)
    });
}
function isString(node){
    return Object.prototype.toString.call(node)==='[object String]'
}
const ATTRS = 'ATTRS'
const TEXT = 'TEXT'
const REMOVE = 'REMOVE'
const REPLACE = 'REPLACE'
function walk(oldNode, newNode, index, patches){
    //当前节点的补丁包
    let currentPatch = [];
    if(!newNode){
        currentPatch.push({type: 'REMOVE', index})
    }
    else if(isString(oldNode) && isString(newNode)){//如果是文本则判断文本是否一致
        if(oldNode !== newNode){
            currentPatch.push({type: TEXT,text: newNode})
        }
    }
    //比较类型看一不一样
    else if(oldNode.type === newNode.type){
        //接着比较属性哪里不一样
        let attrs = diffAttr(oldNode.props,newNode.props);
        if(Object.keys(attrs).length>0){
            currentPatch.push({type: ATTRS,attrs})
        }
        //如果有儿子节点，遍历子节点
        diffChildren(oldNode.children,newNode.children,index,patches);
    }else{
        currentPatch.push({type: REPLACE,newNode})
    }
    if(currentPatch.length>0){
        //补丁包中有补丁才将元素和补丁对应起来，放到大补丁包中
        patches[index] = currentPatch
    }
}
let allPatches;
let patchIndex = 0;//默认哪个需要打补丁
function patch(node, patches){
    //给某个元素打补丁
    allPatches = patches;
    patchWalk(node);
}
function patchWalk(node){
    let currentPatch = allPatches[patchIndex++];
    let childNodes = node.childNodes;
    childNodes.forEach(child=>patchWalk(child));
    //从末尾开始打补丁
    if(currentPatch){
        doPatch(node,currentPatch);
    }
}
function doPatch(node, patches){
    patches.forEach(patch=>{
        switch(patch.type){
            case 'ATTRS':
                for(let key in patch.attrs){
                    let value = patch.attrs[key]
                    if(value){
                        setAttr(node,key,value)
                    }else{
                        node.removeAttribute(key)
                    }
                    
                }
                break;
            case 'TEXT':
                node.textContent = patch.text;
                break;
            case 'REPLACE':
                let newNode = (patch.newNode instanceof Element) ? render(patches.newNode) : document.createTextNode(patch.newNode)
                node.parentNode.replaceChild(newNode, node)
                break;
            case 'REMOVE':
                node.parentNode.removeChild(node)
                break;
            default:
                break;
        }
    })
}
let ul = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item' }, ['Item 2']),
  el('li', { class: 'item' }, ['Item 3'])
])
let ul1 = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item' }, ['Item 2']),
  el('li', { class: 'item' }, ['Item 3'])
])
let ul2 = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item' }, ['Item'])
])
let ulDom = render(ul1);
renderDom(ulDom,document.body);
let patches = diff(ul1, ul2);
patch(ulDom, patches);