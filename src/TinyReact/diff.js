import mountElement from "./mountElement";
import updateTextNode from "./updateTextNode";

/**
 * 计算如何渲染
 * @param virtualDOM
 * @param container
 * @param oldDOM 页面的真实DOM结构container.firstChild
 */
export default function diff(virtualDOM, container, oldDOM) {

    // 验证oldVirtualDOM是否存在
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM;

    // 判断 oldVirtualDOM 是否存在，如果不存在那就直接将virtualDOM 转为 realDOM
    if(!oldVirtualDOM) {
        // 判断是普通的VirtualDOM对象还是组件形式的virtualDOM对象
        mountElement(virtualDOM, container);
    } else if(oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) { // 判断两个dom的类型是否相同
        if(virtualDOM.type === 'text') {
            // 如果是文本节点就更新内容
            updateTextNode(virtualDOM, oldVirtualDOM, oldDOM);
        } else {
            // 如果是元素节点就更新属性
        }

        // 遍历子元素进行更新
        virtualDOM.children.forEach((child, index) => {
            diff(child, oldDOM, oldDOM.childNodes[index])
        })
    }
}