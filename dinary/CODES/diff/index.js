import {createElement, render, renderDom} from './element'

let vertualDom = createElement('ul',{class:'list'},[
        createElement('li',{class:'item'},['a']),
        createElement('li',{class:'item'},['b']),
        createElement('li',{class:'item'},['c']),

    ])
let el=render(vertualDom);
renderDom(el, window.root);
let patches = diff(vertualDom1, vertualDom2)
//给元素打补丁，重新更新视图
patch(el, patches);

//存在的问题
//如果平级元素有互换，会导致重新渲染
//新增节点不会被更新