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
        let attrs = diffAt0tr(oldNode.props,newNode.props);
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

export default diff;