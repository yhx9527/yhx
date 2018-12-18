import {render, Elemen, setAttr} from './element'
let allPathes;
let patchIndex = 0;//默认哪个需要打补丁
function patch(node, patches){
    //给某个元素打补丁
    allPathes = patches;
    walk(node);
}
function walk(node){
    let currentPatch = allPatches[patchIndex++];
    let childNodes = node.childNodes;
    childNodes.forEach(child=>walk(child));
    //从末尾开始打补丁
    if(currentPatch){
        doPatch(node,currentPatch);
    }
}
function doPatch(node, patches){
    allPatches.forEach(patch=>{
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
export default patch;